import assert from "node:assert/strict";
import test from "node:test";

import { hashString } from "../src/shared/hash.js";
import { inspectMediaPlaylist } from "../src/media/m3u8.js";
import { NONE, some } from "../src/shared/option.js";
import { serialize } from "../src/shared/serialize.js";

test("hashString remains deterministic", () => {
  const url = "https://www.iq.com/play/example";
  assert.equal(hashString(url), hashString(url));
  assert.notEqual(hashString(url), hashString(`${url}?quality=720`));
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
