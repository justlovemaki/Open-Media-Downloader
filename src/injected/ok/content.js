import { inspectMediaPlaylist } from "../../media/m3u8.js";
import { parseMasterPlaylist } from "../../media/master-playlist.js";
import { parseMpdPlaylist } from "../../media/mpd.js";
import { reportMedia } from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE, some } from "../../shared/option.js";
import { loadPreferredAudioLanguages } from "../../shared/preferences.js";
import { asUrl, optionalUrl } from "../../shared/url.js";

const VIDEO_ID_PATTERN = /(?:m\.)?ok\.ru\/(?:video|live|videoembed)\/([^/]+)/;
let previousVideoId = null;

function findVideoId() {
  const pathMatch = window.location.href.match(VIDEO_ID_PATTERN);
  if (pathMatch?.[1]) return pathMatch[1];

  try {
    return new URL(window.location.href).searchParams.get("st.mvId");
  } catch {
    return null;
  }
}

function parsePlayerMetadata(documentNode) {
  for (const element of documentNode.querySelectorAll("div[data-options]")) {
    const optionsSource = element.getAttribute("data-options");
    if (!optionsSource) continue;

    let options;
    try {
      options = JSON.parse(optionsSource);
    } catch {
      continue;
    }

    let metadata = options?.flashvars?.metadata;
    try {
      if (typeof metadata === "string") metadata = JSON.parse(metadata);
    } catch {
      continue;
    }
    if (!metadata?.movie) continue;

    const hlsUrl =
      metadata.hlsManifestUrl ??
      metadata.ondemandHls ??
      metadata.hlsMasterPlaylistUrl;
    const dashUrl = metadata.dashSepUrl;
    if (
      !metadata.movie.title ||
      !metadata.movie.poster ||
      (!hlsUrl && !dashUrl)
    )
      continue;

    const subtitles = [];
    for (const track of metadata.movie.subtitleTracks ?? []) {
      const subtitleUrl = optionalUrl(
        track.url?.startsWith("//") ? `https:${track.url}` : track.url,
      );
      if (subtitleUrl.kind !== "some" || !track.language) continue;
      subtitles.push({
        initiator: subtitleUrl,
        language: track.language,
        url: subtitleUrl.value,
        hash: `subtitle_hash_${hashString(subtitleUrl.value.href)}`,
        type: "http",
      });
    }

    return {
      title: metadata.movie.title,
      thumbnailUrl: metadata.movie.poster,
      hlsUrl: asUrl(hlsUrl),
      dashUrl: asUrl(dashUrl),
      subtitles: subtitles.length > 0 ? some(subtitles) : NONE,
    };
  }

  return null;
}

async function loadPlayerMetadata(videoId) {
  if (window.location.hostname.startsWith("m.ok"))
    return parsePlayerMetadata(document);

  const response = await fetch(`https://ok.ru/videoembed/${videoId}?nochat=1`);
  if (!response.ok)
    throw new Error(`OK.ru embed request failed: ${response.status}`);
  const embedDocument = new DOMParser().parseFromString(
    await response.text(),
    "text/html",
  );
  return parsePlayerMetadata(embedDocument);
}

async function buildHlsMedia(metadata) {
  if (!metadata.hlsUrl) return null;
  const response = await fetch(metadata.hlsUrl);
  if (!response.ok) return null;

  const playlist = parseMasterPlaylist(await response.text(), metadata.hlsUrl, {
    preferredAudioLanguages: await loadPreferredAudioLanguages(),
  });
  if (playlist.length === 0) return null;

  let duration = "unknown";
  const mediaUrl = playlist[0]?.av?.video || playlist[0]?.av?.audio;
  if (mediaUrl) {
    try {
      const mediaResponse = await fetch(mediaUrl, {
        signal: AbortSignal.timeout(5_000),
      });
      if (mediaResponse.ok)
        duration = inspectMediaPlaylist(await mediaResponse.text()).duration;
    } catch {}
  }

  return {
    is_youtube: false,
    master_url: metadata.hlsUrl,
    preferred_entry: NONE,
    initiator: optionalUrl(window.location.href),
    hash: `media_hash_${hashString(metadata.hlsUrl.href)}`,
    sent_headers: new Headers(),
    thumbnail_url: optionalUrl(metadata.thumbnailUrl),
    filename: NONE,
    title: some(metadata.title),
    type: "m3u8_playlist",
    playlist,
    duration,
    discovery_timestamp_ms: Date.now(),
    has_drm: false,
    cache: "default",
    subtitles: metadata.subtitles,
  };
}

async function buildDashMedia(metadata) {
  if (!metadata.dashUrl) return null;
  const response = await fetch(metadata.dashUrl);
  if (!response.ok) return null;

  const source = await response.text();
  const parsed = parseMpdPlaylist(source, {
    manifestUri: metadata.dashUrl.href,
    preferredAudioLanguages: await loadPreferredAudioLanguages(),
  });
  if (parsed.playlist.length === 0) return null;

  return {
    type: "mpd_playlist",
    playlist: parsed.playlist,
    has_drm: parsed.hasDrm,
    hash: `media_hash_${hashString(metadata.dashUrl.href)}`,
    discovery_timestamp_ms: Date.now(),
    duration: parsed.duration,
    is_youtube: false,
    filename: NONE,
    sent_headers: new Headers(),
    initiator: optionalUrl(window.location.href),
    preferred_entry: NONE,
    title: some(metadata.title),
    thumbnail_url: optionalUrl(metadata.thumbnailUrl),
    master_url: metadata.dashUrl,
    cache: "default",
    subtitles: metadata.subtitles,
  };
}

async function detectVideo(videoId) {
  const metadata = await loadPlayerMetadata(videoId);
  if (!metadata) return;

  const media =
    (await buildHlsMedia(metadata)) ?? (await buildDashMedia(metadata));
  if (media) await reportMedia(media);
}

async function monitorNavigation() {
  while (true) {
    const videoId = findVideoId();
    if (videoId && videoId !== previousVideoId) {
      previousVideoId = videoId;
      detectVideo(videoId).catch((error) =>
        console.warn("OK.ru media detection failed", error),
      );
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
}

monitorNavigation();
