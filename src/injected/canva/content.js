import { inspectMediaPlaylist } from "../../media/m3u8.js";
import { parseMasterPlaylist } from "../../media/master-playlist.js";
import { reportMedia } from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE } from "../../shared/option.js";
import { optionalUrl } from "../../shared/url.js";

const CANVA_WATCH_URL = /canva\.com\/.*\/watch/;
const MANIFEST_PATTERN = /['"]hlsManifestUrl['"]\s*:\s*['"]([^'"]+)['"]/;

function findManifestUrl() {
  for (const script of document.querySelectorAll("script[nonce]")) {
    if (
      script.attributes.length !== 1 ||
      script.attributes[0]?.name !== "nonce"
    )
      continue;
    const match = script.textContent?.match(MANIFEST_PATTERN);
    if (match?.[1]) return optionalUrl(match[1]);
  }

  return NONE;
}

async function determineDuration(playlist) {
  const mediaUrl = playlist[0]?.av?.video || playlist[0]?.av?.audio;
  if (!mediaUrl) return "unknown";

  try {
    const response = await fetch(mediaUrl, {
      signal: AbortSignal.timeout(5_000),
    });
    if (!response.ok) return "unknown";
    return inspectMediaPlaylist(await response.text()).duration;
  } catch {
    return "unknown";
  }
}

async function detectCanvaVideo() {
  if (!CANVA_WATCH_URL.test(window.location.href)) return;

  const manifestUrl = findManifestUrl();
  if (manifestUrl.kind !== "some") {
    console.warn("No Canva HLS manifest URL was found");
    return;
  }

  const response = await fetch(manifestUrl.value);
  if (!response.ok)
    throw new Error(`Canva manifest request failed: ${response.status}`);

  const playlist = parseMasterPlaylist(
    await response.text(),
    manifestUrl.value,
  );
  if (playlist.length === 0)
    throw new Error("Canva returned an empty master playlist");

  await reportMedia({
    type: "m3u8_playlist",
    discovery_timestamp_ms: Date.now(),
    hash: `media_hash_${hashString(manifestUrl.value.href)}`,
    initiator: optionalUrl(window.location.href),
    is_youtube: false,
    master_url: manifestUrl.value,
    preferred_entry: NONE,
    sent_headers: new Headers(),
    title: NONE,
    filename: NONE,
    has_drm: false,
    thumbnail_url: NONE,
    duration: await determineDuration(playlist),
    playlist,
    cache: "default",
    subtitles: NONE,
  });
}

detectCanvaVideo().catch((error) =>
  console.warn("Canva media detection failed", error),
);
