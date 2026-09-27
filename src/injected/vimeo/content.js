import { inspectMediaPlaylist } from "../../media/m3u8.js";
import { parseMasterPlaylist } from "../../media/master-playlist.js";
import {
  onServiceMessage,
  reportMedia,
} from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE, some } from "../../shared/option.js";
import { createPageBridge } from "../../shared/page-bridge.js";
import { loadPreferredAudioLanguages } from "../../shared/preferences.js";
import { optionalUrl } from "../../shared/url.js";

const pageBridge = createPageBridge();

function collectSubtitles(config) {
  const subtitles = [];
  for (const track of config.request?.text_tracks ?? []) {
    const url = optionalUrl(track.url);
    if (url.kind !== "some" || !track.lang) continue;
    subtitles.push({
      hash: `subtitle_hash_${hashString(url.value.href)}`,
      initiator: url,
      language: track.lang,
      url: url.value,
      type: "http",
    });
  }
  return subtitles;
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

async function processVimeoConfig(config) {
  const cdns = config.request?.files?.hls?.cdns;
  const defaultCdn = config.request?.files?.hls?.default_cdn;
  const manifestUrl = optionalUrl(cdns?.[defaultCdn]?.url);
  if (manifestUrl.kind !== "some") return;

  const response = await fetch(manifestUrl.value);
  if (!response.ok)
    throw new Error(`Vimeo manifest request failed: ${response.status}`);

  const playlist = parseMasterPlaylist(
    await response.text(),
    manifestUrl.value,
    {
      preferredAudioLanguages: await loadPreferredAudioLanguages(),
    },
  );
  if (playlist.length === 0)
    throw new Error("Vimeo returned an empty master playlist");

  const title = config.video?.title ? some(config.video.title) : NONE;
  const thumbnail = optionalUrl(
    config.video?.thumbs?.base ?? config.video?.thumbnail_url,
  );
  const subtitles = collectSubtitles(config);

  await reportMedia({
    master_url: manifestUrl.value,
    is_youtube: false,
    preferred_entry: NONE,
    initiator: optionalUrl(window.location.href),
    hash: `media_hash_${hashString(title.kind === "some" ? title.value : location.href)}`,
    sent_headers: new Headers(),
    thumbnail_url: thumbnail,
    filename: NONE,
    title,
    type: "m3u8_playlist",
    playlist,
    duration: await determineDuration(playlist),
    discovery_timestamp_ms: Date.now(),
    has_drm: false,
    cache: "default",
    subtitles: subtitles.length > 0 ? some(subtitles) : NONE,
  });
}

function handleConfig(config) {
  processVimeoConfig(config).catch((error) => {
    console.warn("Vimeo media detection failed", error);
  });
}

onServiceMessage((message) => {
  if (message?.name === "vimeo_on_config") handleConfig(message.data);
});

pageBridge.onMessageFromPage((message) => {
  if (message?.name === "vimeo_on_config") handleConfig(message.data.config);
});

pageBridge.postToPage({ name: "vimeo_request_config", data: null });
