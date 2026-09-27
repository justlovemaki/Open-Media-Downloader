import { inspectMediaPlaylist } from "../../media/m3u8.js";
import { parseMasterPlaylist } from "../../media/master-playlist.js";
import {
  onServiceMessage,
  reportMedia,
  sendInjectedMessage,
} from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE, some } from "../../shared/option.js";
import { loadPreferredAudioLanguages } from "../../shared/preferences.js";
import { asUrl, optionalUrl } from "../../shared/url.js";

const VK_VIDEO_PATTERN =
  /(?:^|\/\/)(?:m\.)?(?:vk\.com|vk\.ru|vkvideo\.ru)\/(?:clip|video|playlist\/[^/]+\/video)(-?\d+_\d+)/;
const VK_LIVE_PATTERN =
  /^https:\/\/live\.vkvideo\.ru\/([^/]+)(?:\/record\/([^/?]+))?/;

function getListParameter(url) {
  try {
    return new URL(url).searchParams.get("list");
  } catch {
    return null;
  }
}

async function fetchViaService(videoId, listId) {
  const uid = crypto.randomUUID();
  const bodyParams = { act: "show", al: "1", video: videoId };
  if (listId) bodyParams.list = listId;

  return new Promise((resolve, reject) => {
    const removeListener = onServiceMessage((message) => {
      if (message?.data?.uid !== uid) return;
      removeListener();
      if (message.name === "on_fetch_from_service") resolve(message.data.json);
      else reject(new Error(`VK service fetch failed for request ${uid}`));
    });

    sendInjectedMessage("do_fetch_from_service", {
      uid,
      url: "https://vk.com/al_video.php",
      method: "POST",
      fetch_headers: {
        Origin: "https://vk.com",
        Referer: "https://vk.com/al_video.php",
        "X-Requested-With": "XMLHttpRequest",
      },
      body_params: bodyParams,
    }).catch((error) => {
      removeListener();
      reject(error);
    });
  });
}

async function fetchHlsPlaylist(manifestUrl) {
  const response = await fetch(manifestUrl);
  if (!response.ok)
    throw new Error(`VK manifest request failed: ${response.status}`);
  const source = await response.text();
  const playlist = parseMasterPlaylist(source, manifestUrl, {
    preferredAudioLanguages: await loadPreferredAudioLanguages(),
  });
  if (playlist.length === 0)
    throw new Error("VK returned an empty master playlist");
  return playlist;
}

async function determineDuration(playlist) {
  const mediaUrl = playlist[0]?.av?.video || playlist[0]?.av?.audio;
  if (!mediaUrl) return { duration: "unknown", hasDrm: false };

  try {
    const response = await fetch(mediaUrl, {
      signal: AbortSignal.timeout(5_000),
    });
    if (!response.ok) return { duration: "unknown", hasDrm: false };
    const source = await response.text();
    return {
      duration: inspectMediaPlaylist(source).duration,
      hasDrm:
        /#EXT-X-KEY:.*KEYFORMAT=(?:"com\.widevine|"com\.microsoft\.playready)/i.test(
          source,
        ),
    };
  } catch {
    return { duration: "unknown", hasDrm: false };
  }
}

async function processStandardVideo(payload, videoId) {
  const playerData = payload?.payload?.[1]?.[4];
  const params = playerData?.player?.params?.[0];
  if (!params)
    throw new Error(`VK returned invalid player data for ${videoId}`);

  const manifestUrl = asUrl(params.hls ?? params.hls_ondemand);
  if (!manifestUrl) throw new Error(`VK returned no HLS URL for ${videoId}`);

  const subtitles = [];
  for (const track of params.subs ?? []) {
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

  return {
    type: "m3u8_playlist",
    discovery_timestamp_ms: Date.now(),
    duration: params.duration ?? "unknown",
    hash: `media_hash_${hashString(videoId)}`,
    initiator: optionalUrl(window.location.href),
    is_youtube: false,
    playlist: await fetchHlsPlaylist(manifestUrl),
    filename: NONE,
    title: NONE,
    thumbnail_url: optionalUrl(playerData.mvData?.info?.[2]),
    master_url: manifestUrl,
    sent_headers: new Headers(),
    preferred_entry: NONE,
    cache: "default",
    has_drm: false,
    subtitles: subtitles.length > 0 ? some(subtitles) : NONE,
  };
}

async function fetchLiveStream(channel, recordId) {
  const endpoint = recordId
    ? `https://api.live.vkvideo.ru/v1/blog/${channel}/public_video_stream/record/${recordId}`
    : `https://api.live.vkvideo.ru/v1/channel/${channel}/stream/slot/default`;
  const response = await fetch(endpoint);
  if (!response.ok)
    throw new Error(`VK Live API request failed: ${response.status}`);
  const payload = await response.json();
  return recordId ? payload?.data?.record : payload?.data?.stream;
}

async function detectLiveVideo(channel, recordId) {
  const stream = await fetchLiveStream(channel, recordId);
  const playerUrl = stream?.data?.[0]?.playerUrls?.find((entry) =>
    recordId
      ? entry.type === "ondemand_hls" || entry.type === "hls"
      : entry.type === "live_ondemand_hls",
  );
  const manifestUrl = asUrl(playerUrl?.url);
  if (!manifestUrl) throw new Error("VK Live returned no HLS URL");

  const playlist = await fetchHlsPlaylist(manifestUrl);
  const inspection = await determineDuration(playlist);
  await reportMedia({
    discovery_timestamp_ms: Date.now(),
    has_drm: inspection.hasDrm,
    duration: inspection.duration,
    master_url: manifestUrl,
    initiator: optionalUrl(window.location.href),
    hash: `media_hash_${hashString(window.location.href)}`,
    sent_headers: new Headers(),
    filename: NONE,
    type: "m3u8_playlist",
    is_youtube: false,
    preferred_entry: NONE,
    playlist,
    title: stream?.title ? some(stream.title) : NONE,
    thumbnail_url: optionalUrl(stream?.previewUrl),
    cache: "default",
    subtitles: NONE,
  });
}

async function detectCurrentPage() {
  const liveMatch = window.location.href.match(VK_LIVE_PATTERN);
  if (liveMatch) {
    await detectLiveVideo(liveMatch[1], liveMatch[2]);
    return;
  }

  const videoId = window.location.href.match(VK_VIDEO_PATTERN)?.[1];
  if (!videoId) return;
  const payload = await fetchViaService(
    videoId,
    getListParameter(window.location.href),
  );
  await reportMedia(await processStandardVideo(payload, videoId));
}

function runDetection() {
  detectCurrentPage().catch((error) =>
    console.warn("VK media detection failed", error),
  );
}

runDetection();
let previousUrl = window.location.href;
new MutationObserver(() => {
  if (previousUrl === window.location.href) return;
  previousUrl = window.location.href;
  runDetection();
}).observe(document.body, { childList: true, subtree: true });
