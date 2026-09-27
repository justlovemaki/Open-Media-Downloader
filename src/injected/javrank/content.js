import { inspectMediaPlaylist } from "../../media/m3u8.js";
import { reportMedia } from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE } from "../../shared/option.js";
import { createPageBridge } from "../../shared/page-bridge.js";
import { optionalUrl } from "../../shared/url.js";

const pageBridge = createPageBridge();

async function reportManifest(rawManifest) {
  const playlistInfo = inspectMediaPlaylist(rawManifest);

  await reportMedia({
    is_youtube: false,
    has_drm: false,
    sent_headers: new Headers(),
    initiator: optionalUrl(window.location.href),
    type: "m3u8",
    hash: `media_hash_${hashString(rawManifest)}`,
    discovery_timestamp_ms: Date.now(),
    duration: playlistInfo.duration,
    title: NONE,
    filename: NONE,
    thumbnail_url: NONE,
    demuxer: "mp4",
    url: new URL(
      `data:text/plain;charset=UTF-8,${encodeURIComponent(rawManifest)}`,
    ),
    cache: "default",
    subtitles: NONE,
  });
}

pageBridge.onMessageFromPage((message) => {
  if (message?.name !== "javrank_on_manifest") return;
  reportManifest(message.data.raw).catch((error) => {
    console.warn("JavRank manifest processing failed", error);
  });
});

pageBridge.postToPage({ name: "javrank_request_manifest", data: null });
