import { inspectMediaPlaylist } from "../../media/m3u8.js";
import { reportMedia } from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE } from "../../shared/option.js";
import { optionalUrl } from "../../shared/url.js";

const HLS_HASH_PATTERN = /\\"hls\\":\\"([^"]+)\\"/;

function findPlaylistHash() {
  for (const script of document.querySelectorAll("script")) {
    const match = script.textContent?.match(HLS_HASH_PATTERN);
    if (match?.[1]) return match[1];
  }
  return null;
}

async function detectOsmosisVideo() {
  const playlistHash = findPlaylistHash();
  if (!playlistHash) return;

  const response = await fetch(
    `https://www.osmosis.org/videoPlaylist?hash=${encodeURIComponent(playlistHash)}`,
  );
  if (!response.ok)
    throw new Error(`Osmosis playlist request failed: ${response.status}`);

  let playlistSource = [...(await response.text())].reverse().join("");
  playlistSource = playlistSource.replace(
    /(#EXT-X-KEY:[^\n]*URI=")([^"]+)"/,
    (_, prefix, keyUrl) =>
      `${prefix}${new URL(keyUrl, "https://www.osmosis.org").href}"`,
  );

  const playlistInfo = inspectMediaPlaylist(playlistSource);
  await reportMedia({
    is_youtube: false,
    has_drm: false,
    sent_headers: new Headers(),
    initiator: optionalUrl(window.location.href),
    type: "m3u8",
    hash: `media_hash_${hashString(playlistSource)}`,
    discovery_timestamp_ms: Date.now(),
    duration: playlistInfo.duration,
    title: NONE,
    filename: NONE,
    thumbnail_url: NONE,
    demuxer: "mp4",
    url: new URL(
      `data:text/plain;charset=UTF-8,${encodeURIComponent(playlistSource)}`,
    ),
    cache: "default",
    subtitles: NONE,
  });
}

detectOsmosisVideo().catch((error) =>
  console.warn("Osmosis media detection failed", error),
);
