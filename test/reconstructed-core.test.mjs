import assert from "node:assert/strict";
import test from "node:test";

import { deserialize } from "../src/shared/deserialize.js";
import { hashString } from "../src/shared/hash.js";
import { inspectMediaPlaylist } from "../src/media/m3u8.js";
import { parseMasterPlaylist } from "../src/media/master-playlist.js";
import { parseMpdPlaylist } from "../src/media/mpd.js";
import { NONE, some } from "../src/shared/option.js";
import { serialize } from "../src/shared/serialize.js";

test("hashString remains deterministic", () => {
  const url = "https://www.iq.com/play/example";
  assert.equal(hashString(url), hashString(url));
  assert.notEqual(hashString(url), hashString(`${url}?quality=720`));
});

test("serialize and deserialize preserve tagged options", () => {
  const serialized = serialize(some(new URL("https://example.com/video.mp4")));
  const restored = deserialize(serialized);
  assert.equal(restored.kind, "some");
  assert.equal(restored.value.href, "https://example.com/video.mp4");
});

test("serialize emits the service worker tagged format", () => {
  assert.deepEqual(serialize(NONE), { __serde_tag: "none" });
  assert.deepEqual(serialize(some(new URL("https://example.com/video.mp4"))), {
    __serde_tag: "some",
    __serde_val: {
      __serde_tag: "url",
      __serde_val: "https://example.com/video.mp4",
    },
  });
});

test("parseMasterPlaylist returns sorted video renditions", () => {
  const master = [
    "#EXTM3U",
    '#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",LANGUAGE="en",DEFAULT=YES,URI="audio.m3u8"',
    '#EXT-X-STREAM-INF:BANDWIDTH=1200000,RESOLUTION=1280x720,CODECS="avc1.64001f,mp4a.40.2",AUDIO="audio"',
    "720.m3u8",
    '#EXT-X-STREAM-INF:BANDWIDTH=500000,RESOLUTION=640x360,CODECS="avc1.4d401e,mp4a.40.2",AUDIO="audio"',
    "360.m3u8",
  ].join("\n");

  const playlist = parseMasterPlaylist(
    master,
    new URL("https://cdn.example/master.m3u8"),
  );
  assert.equal(playlist.length, 2);
  assert.equal(playlist[0].quality.size.value.height, 720);
  assert.equal(playlist[0].av.video.href, "https://cdn.example/720.m3u8");
  assert.equal(playlist[0].av.audio.href, "https://cdn.example/audio.m3u8");
});

test("parseMpdPlaylist normalizes DASH representations", () => {
  const manifest = `<?xml version="1.0"?>
    <MPD xmlns="urn:mpeg:dash:schema:mpd:2011" type="static" mediaPresentationDuration="PT10S">
      <Period>
        <AdaptationSet mimeType="video/mp4" codecs="avc1.4d401f">
          <Representation id="video-720" bandwidth="1000000" width="1280" height="720">
            <BaseURL>video.mp4</BaseURL>
            <SegmentBase indexRange="0-100"><Initialization range="0-50"/></SegmentBase>
          </Representation>
        </AdaptationSet>
      </Period>
    </MPD>`;

  const parsed = parseMpdPlaylist(manifest, {
    manifestUri: "https://cdn.example/master.mpd",
  });
  assert.equal(parsed.duration, 10);
  assert.equal(parsed.playlist[0].quality.size.value.height, 720);
  assert.equal(parsed.playlist[0].demuxer, "mp4");
});

test("inspectMediaPlaylist calculates VOD duration", () => {
  const playlist = [
    "#EXTM3U",
    "#EXT-X-TARGETDURATION:5",
    "#EXTINF:4.5,",
    "https://cdn.example/segment-1.ts",
    "#EXTINF:5.25,",
    "https://cdn.example/segment-2.ts",
    "#EXT-X-ENDLIST",
  ].join("\n");

  assert.deepEqual(inspectMediaPlaylist(playlist), {
    duration: 9.75,
    segmentCount: 2,
  });
});
