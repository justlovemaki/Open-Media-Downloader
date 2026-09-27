import { inspectMediaPlaylist } from "../../media/m3u8.js";
import { reportMedia } from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE } from "../../shared/option.js";
import { createPageBridge } from "../../shared/page-bridge.js";
import { optionalUrl } from "../../shared/url.js";

const pageBridge = createPageBridge();

function reportDecodedManifest(sourceUrl, rawManifest) {
  if (optionalUrl(sourceUrl).kind !== "some") return;

  try {
    const playlistInfo = inspectMediaPlaylist(rawManifest);
    reportMedia({
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
    }).catch((error) => console.warn("XGPlayer media report failed", error));
  } catch (error) {
    console.warn("XGPlayer returned an invalid playlist", error);
  }
}

pageBridge.onMessageFromPage((message) => {
  if (message?.name === "91porna_on_config") {
    reportDecodedManifest(message.data.url, message.data.m3u8);
  }
});

pageBridge.postToPage({ name: "91porna_request_config", data: null });
