import { inspectMediaPlaylist } from "../../media/m3u8.js";
import { parseMasterPlaylist } from "../../media/master-playlist.js";
import { reportMedia } from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE, some } from "../../shared/option.js";
import { asUrl, optionalUrl } from "../../shared/url.js";

const KICK_URL_PATTERN =
  /^https?:\/\/kick\.com\/(?<channel>[^/]+)(?:\/(?<type>videos|clips)(?:\/(?<id>[^/]+))?)?\/?$/;
const processedMedia = new Set();
let linkObserver = null;

async function fetchOk(url, init) {
  const response = await fetch(url, init);
  if (!response.ok)
    throw new Error(`Kick request failed (${response.status}): ${url}`);
  return response;
}

function parseKickUrl(value) {
  const match = value.match(KICK_URL_PATTERN);
  if (!match?.groups) return null;
  return {
    channel: match.groups.channel,
    type: match.groups.type ?? "channel",
    id: match.groups.id ?? null,
  };
}

function getManifestUrl(metadata, type) {
  if (type === "channel") return asUrl(metadata.playback_url);
  if (type === "videos") return asUrl(metadata.playback_url?.vod);
  if (type === "clips") {
    return asUrl(
      metadata.clip?.playback_url ??
        metadata.clip?.clip_url ??
        metadata.clip?.video_url,
    );
  }
  return null;
}

function getTitle(metadata, type) {
  if (type === "channel") return metadata.livestream?.session_title;
  if (type === "videos") return metadata.title;
  if (type === "clips") return metadata.clip?.title;
  return null;
}

function getThumbnail(metadata, type) {
  if (type === "channel") return metadata.user?.profile_pic;
  if (type === "clips") return metadata.clip?.thumbnail_url;
  if (type !== "videos") return null;

  if (typeof metadata.thumbnail === "string") return metadata.thumbnail;
  const srcSet = metadata.thumbnail?.srcSet;
  return typeof srcSet === "string"
    ? srcSet
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean)
        .at(-1)
        ?.split(/\s+/)[0]
    : null;
}

async function resolveAdFreeVodManifest(url, depth = 0) {
  if (depth >= 3) return null;

  const source = await (await fetchOk(url)).text();
  const baseUrl = source.match(
    /https:\/\/stream\.kick\.com\/\S+?\/media\/hls\//,
  )?.[0];
  if (baseUrl) return new URL("master.m3u8", baseUrl);

  const nestedUrl = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line && !line.startsWith("#"));
  return nestedUrl
    ? resolveAdFreeVodManifest(new URL(nestedUrl, url), depth + 1)
    : null;
}

async function fetchVodMetadata(playbackMetadata, videoId) {
  const creatorId = playbackMetadata?.video_session?.creator_id;
  if (!creatorId) return null;

  const payload = await (
    await fetchOk(`https://web.kick.com/api/v1/channels/${creatorId}/videos`)
  ).json();
  return Array.isArray(payload?.data)
    ? (payload.data.find((video) => video?.id === videoId) ?? null)
    : null;
}

async function fetchMetadata(identifier, type) {
  if (type === "channel") {
    return (
      await fetchOk(`https://kick.com/api/v2/channels/${identifier}`)
    ).json();
  }

  if (type === "clips") {
    return (
      await fetchOk(`https://kick.com/api/v2/clips/${identifier}`)
    ).json();
  }

  const playbackMetadata = await (
    await fetchOk(`https://web.kick.com/api/v1/stream/${identifier}/playback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        video_player: { player: {} },
        video_session: {},
        user_session: { non_personalised_ads: true },
      }),
    })
  ).json();
  return (await fetchVodMetadata(playbackMetadata, identifier)) ?? {};
}

async function determinePlaylistDuration(playlist) {
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

async function detectKickMedia(identifier, type) {
  const cacheKey = `${type}:${identifier}`;
  if (processedMedia.has(cacheKey)) return;
  processedMedia.add(cacheKey);

  try {
    const metadata = await fetchMetadata(identifier, type);
    let manifestUrl = getManifestUrl(metadata, type);
    if (!manifestUrl) throw new Error("Kick returned no manifest URL");

    if (type === "videos") {
      manifestUrl =
        (await resolveAdFreeVodManifest(manifestUrl)) ?? manifestUrl;
    }

    const manifestSource = await (await fetchOk(manifestUrl)).text();
    const playlist = parseMasterPlaylist(manifestSource, manifestUrl);
    const common = {
      is_youtube: false,
      has_drm: false,
      sent_headers: new Headers(),
      initiator: optionalUrl(window.location.href),
      hash: `media_hash_${hashString(manifestUrl.href)}`,
      discovery_timestamp_ms: Date.now(),
      title: getTitle(metadata, type) ? some(getTitle(metadata, type)) : NONE,
      filename: NONE,
      thumbnail_url: optionalUrl(getThumbnail(metadata, type)),
      cache: "default",
      subtitles: NONE,
    };

    if (playlist.length > 0) {
      await reportMedia({
        ...common,
        type: "m3u8_playlist",
        duration: await determinePlaylistDuration(playlist),
        master_url: manifestUrl,
        preferred_entry: NONE,
        playlist,
      });
    } else {
      const playlistInfo = inspectMediaPlaylist(manifestSource);
      await reportMedia({
        ...common,
        type: "m3u8",
        duration: playlistInfo.duration,
        url: manifestUrl,
        demuxer: "mp4",
      });
    }
  } catch (error) {
    processedMedia.delete(cacheKey);
    console.warn("Kick media detection failed", error);
  }
}

function scanVideoLinks() {
  for (const anchor of document.querySelectorAll("a[href]")) {
    const target = parseKickUrl(anchor.href);
    if (target && target.type !== "channel" && target.id) {
      detectKickMedia(target.id, target.type);
    }
  }
}

function detectCurrentPage() {
  const target = parseKickUrl(window.location.href);
  if (!target) return;

  if (target.type === "channel" || target.id) {
    detectKickMedia(target.id ?? target.channel, target.type);
    return;
  }

  scanVideoLinks();
  if (linkObserver) return;
  linkObserver = new MutationObserver(scanVideoLinks);
  linkObserver.observe(document.body, { childList: true, subtree: true });
}

detectCurrentPage();

let previousUrl = window.location.href;
new MutationObserver(() => {
  if (previousUrl === window.location.href) return;
  previousUrl = window.location.href;
  detectCurrentPage();
}).observe(document.body, { childList: true, subtree: true });
