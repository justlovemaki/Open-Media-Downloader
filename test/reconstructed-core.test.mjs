import assert from "node:assert/strict";
import test from "node:test";

import { deserialize } from "../src/shared/deserialize.js";
import { createDefaultPersistentState } from "../src/content/persistent-state.js";
import {
  buildHttpMergeCommand,
  buildHlsSingleSourceCommand,
} from "../src/download-worker/ffmpeg-commands.js";
import {
  executeDownloadStrategy,
  handlerNameForStrategy,
} from "../src/download-worker/strategy-router.js";
import {
  parseSmartNamingRules,
  stringifySmartNamingRules,
} from "../src/content/smartnaming-rules.js";
import { DownloadQueue } from "../src/service/download-queue.js";
import {
  mediaQualityScore,
  upsertDiscoveredMedia,
} from "../src/service/media-deduplication.js";
import { parseExtensionVersion } from "../src/service/version.js";
import { hashString } from "../src/shared/hash.js";
import { inspectMediaPlaylist } from "../src/media/m3u8.js";
import { parseMasterPlaylist } from "../src/media/master-playlist.js";
import { parseMpdPlaylist } from "../src/media/mpd.js";
import { NONE, some } from "../src/shared/option.js";
import { serialize } from "../src/shared/serialize.js";

test("download strategy router resolves readable handlers", async () => {
  assert.equal(
    handlerNameForStrategy("http_strip_audio_jsfetch"),
    "extractHttpAudio",
  );
  const result = await executeDownloadStrategy(
    { strategy: "http_audio_video_one_source", value: 7 },
    null,
    { downloadHttpDirect: (args) => args.value },
  );
  assert.equal(result, 7);
});

test("FFmpeg command builders preserve stream mapping", () => {
  const merged = buildHttpMergeCommand({
    download_id: "download-1",
    muxer: "mp4",
    url: new URL("https://cdn.example/video.mp4"),
    url_audio: new URL("https://cdn.example/audio.m4a"),
  });
  assert.deepEqual(merged.slice(merged.indexOf("-map"), -4), [
    "-map",
    "0:v:0",
    "-map",
    "1:a:0?",
  ]);

  const hls = buildHlsSingleSourceCommand({
    download_id: "download-2",
    muxer: "mp4",
    url: new URL("https://cdn.example/master.m3u8"),
    subtitles: NONE,
    audio_language: NONE,
  });
  assert.ok(hls.includes("0:v:0?"));
  assert.ok(hls.includes("0:a:0?"));
});

test("extension version parser accepts three and four components", () => {
  assert.deepEqual(parseExtensionVersion("1.0.0"), {
    major: 1,
    minor: 0,
    patch: 0,
    build: 0,
  });
  assert.equal(parseExtensionVersion("1.0"), null);
});

test("download queue honors total concurrency", async () => {
  const queue = new DownloadQueue(1, 1, 0);
  const order = [];
  const first = queue.queueTask(async () => {
    order.push("first-start");
    await new Promise((resolve) => setTimeout(resolve, 5));
    order.push("first-end");
  }, "first");
  const second = queue.queueTask(async () => order.push("second"), "second");
  await Promise.all([first, second]);
  assert.deepEqual(order, ["first-start", "first-end", "second"]);
});

test("media deduplication replaces lower iQIYI quality", () => {
  const initiator = some(new URL("https://www.iq.com/play/example"));
  const makeMedia = (hash, bid) => ({
    hash,
    type: "m3u8",
    demuxer: "mp4",
    initiator,
    discovery_timestamp_ms: 1,
    url: new URL(
      `data:text/plain,${encodeURIComponent(`https://cdn.example/shared-token-12345678.ts?bid=${bid}&x=1`)}`,
    ),
  });
  const low = makeMedia("low", 300);
  const high = makeMedia("high", 500);
  assert.ok(mediaQualityScore(high) > mediaQualityScore(low));
  const media = new Map([[low.hash, low]]);
  assert.equal(upsertDiscoveredMedia(media, high), true);
  assert.deepEqual([...media.keys()], ["high"]);
});

test("default persistent state uses typed collections", () => {
  const state = createDefaultPersistentState();
  assert.ok(state.downloaded instanceof Map);
  assert.ok(state.preferred_audio_languages instanceof Set);
  assert.equal(state.preferred_quality, 1080);
});

test("smart naming rules round-trip through TOML", () => {
  const source = stringifySmartNamingRules(
    { max_length: 64, template: "%title" },
    [
      {
        url: "example.com",
        template: "%title-%hostname",
        max_length: 80,
        selector: "h1",
        subdir: "videos/",
      },
    ],
  );
  const parsed = parseSmartNamingRules(source);
  assert.equal(parsed.rules[0].url, "example.com");
  assert.equal(parsed.rules[0].subdir, "videos/");
});

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
