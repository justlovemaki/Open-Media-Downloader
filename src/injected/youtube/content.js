import { Innertube, Platform } from "youtubei.js/web";

import { inspectMediaPlaylist } from "../../media/m3u8.js";
import { parseMasterPlaylist } from "../../media/master-playlist.js";
import {
  onServiceMessage,
  reportMedia,
  sendInjectedMessage,
} from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE, some } from "../../shared/option.js";
import { createPageBridge } from "../../shared/page-bridge.js";
import { loadPersistentState } from "../../shared/preferences.js";
import { optionalUrl } from "../../shared/url.js";

const pageBridge = createPageBridge();
const DEFAULT_CLIENTS = [
  { client: "VISIONOS", implementation: "no_cookies_no_vdata" },
  { client: "ANDROID_VR", implementation: "no_cookies_no_vdata" },
  { client: "IOS", implementation: "no_cookies_no_vdata" },
  { client: "WEB", implementation: "no_cookies_vdata" },
  { client: "WEB_EMBEDDED", implementation: "no_cookies_vdata" },
  { client: "WEB", implementation: "cookies" },
  { client: "WEB_EMBEDDED", implementation: "cookies" },
];

function requestQuickJs(buildResult) {
  const uid = crypto.randomUUID();
  const code = `(() => { ${buildResult.output} })()`;

  return new Promise((resolve, reject) => {
    const removeListener = onServiceMessage((message) => {
      if (message?.name !== "qjs_result") return;
      try {
        const payload = JSON.parse(message.data);
        if (payload.uid !== uid) return;
        removeListener();
        if (payload.error) reject(new Error(payload.error));
        else resolve(payload.success);
      } catch {
        removeListener();
        reject(new Error("QuickJS returned an invalid payload"));
      }
    });

    sendInjectedMessage("qjs", { uid, code }).catch((error) => {
      removeListener();
      reject(error);
    });
  });
}

// Extension pages cannot use eval because of their Content Security Policy.
// Delegate YouTube's generated player transforms to the service worker QuickJS runtime.
Platform.shim.eval = (buildResult) => requestQuickJs(buildResult);

function parseVideoId(value) {
  if (!/youtu\.?be/i.test(value)) return null;
  const patterns = [
    /youtu\.be\/([^#&?]{11})/,
    /[?&]v=([^#&?]{11})/,
    /embed\/([^#&?]{11})/,
    /\/v\/([^#&?]{11})/,
  ];

  for (const pattern of patterns) {
    const id = value.match(pattern)?.[1];
    if (id) return id;
  }

  return (
    value.split(/[\/&?=#.\s]/).find((part) => /^[^#&?]{11}$/.test(part)) ?? null
  );
}

function findEmbeddedVideoId() {
  for (const anchor of document.querySelectorAll("a.yt-uix-sessionlink")) {
    const id = parseVideoId(anchor.href);
    if (id) return id;
  }
  return null;
}

function requestVisitorData() {
  return pageBridge
    .requestFromPage(
      { name: "youtube_request_visitor_data", data: null },
      "youtube_on_visitor_data",
    )
    .then((response) => response?.visitor_data);
}

function videoContainer(mimeType) {
  if (/video\/mp4/i.test(mimeType ?? "")) return "mp4";
  if (/video\/webm/i.test(mimeType ?? "")) return "webm";
  return null;
}

function audioContainer(mimeType) {
  if (/(audio\/mp4|aac|mp4a)/i.test(mimeType ?? "")) return "mp4";
  if (/(audio\/webm|opus|vorbis)/i.test(mimeType ?? "")) return "webm";
  return null;
}

async function decipherFormatUrl(innertube, info, format) {
  try {
    const url = await format.decipher(innertube.session.player);
    if (!url) return null;
    return new URL(info.cpn ? `${url}&cpn=${info.cpn}` : url);
  } catch (error) {
    console.warn("YouTube format deciphering failed", error);
    return null;
  }
}

async function collectSubtitles(info) {
  let tracks = info.captions?.caption_tracks ?? [];
  if (tracks.length === 0) return NONE;

  const firstResponse = await fetch(tracks[0].base_url);
  if (!firstResponse.ok || (await firstResponse.text()).length === 0)
    return NONE;

  const automaticTrack = tracks.find((track) => track.kind === "asr");
  if (automaticTrack) {
    const language = automaticTrack.language_code;
    if (
      tracks.some(
        (track) => track.kind !== "asr" && track.language_code === language,
      )
    ) {
      tracks = tracks.filter((track) => track.kind !== "asr");
    }
  }

  const subtitles = tracks
    .filter((track) => track.language_code && track.base_url)
    .map((track) => ({
      hash: `subtitle_hash_${hashString(track.base_url)}`,
      language: track.language_code,
      url: new URL(track.base_url),
      initiator: optionalUrl(window.location.href),
      type: "http",
    }));
  return subtitles.length > 0 ? some(subtitles) : NONE;
}

async function buildFormatPlaylist(
  innertube,
  info,
  formats,
  preferredLanguages,
) {
  const playlist = [];
  let audioCandidates = formats.filter(
    (format) => format.has_audio && !format.has_video,
  );

  if (preferredLanguages.size > 0) {
    const preferred = audioCandidates.filter(
      (format) => format.language && preferredLanguages.has(format.language),
    );
    if (preferred.length > 0) audioCandidates = preferred;
  } else {
    const original = audioCandidates.filter((format) => format.is_original);
    if (original.length > 0) audioCandidates = original;
  }

  const selectedLanguage = audioCandidates[0]?.language
    ? some(audioCandidates[0].language)
    : NONE;
  const bestAudio = new Map();
  for (const format of audioCandidates) {
    const container = audioContainer(format.mime_type);
    if (!container) continue;
    const current = bestAudio.get(container);
    if (!current || current.bitrate < format.bitrate) {
      const url = await decipherFormatUrl(innertube, info, format);
      if (!url) continue;
      bestAudio.set(container, {
        bitrate: format.bitrate,
        url,
        contentLength: format.content_length
          ? some(format.content_length)
          : NONE,
      });
    }
  }

  for (const format of formats.filter(
    (entry) => entry.has_video && entry.has_audio,
  )) {
    const container = videoContainer(format.mime_type);
    const url = await decipherFormatUrl(innertube, info, format);
    if (!container || !url) continue;
    playlist.push({
      quality: {
        bitrate: some(format.bitrate),
        size:
          format.width && format.height
            ? some({ width: format.width, height: format.height })
            : NONE,
      },
      demuxer: container,
      av: {
        video: {
          url,
          content_length: format.content_length
            ? some(format.content_length)
            : NONE,
        },
        audio: false,
      },
      audio_language: selectedLanguage,
    });
  }

  for (const format of formats.filter(
    (entry) => entry.has_video && !entry.has_audio,
  )) {
    const container = videoContainer(format.mime_type);
    const audio = bestAudio.get(container);
    const url = await decipherFormatUrl(innertube, info, format);
    if (!container || !audio || !url) continue;
    playlist.push({
      quality: {
        bitrate: some(format.bitrate),
        size:
          format.width && format.height
            ? some({ width: format.width, height: format.height })
            : NONE,
      },
      demuxer: container,
      av: {
        video: {
          url,
          content_length: format.content_length
            ? some(format.content_length)
            : NONE,
        },
        audio: {
          url: audio.url,
          content_length: audio.contentLength,
        },
      },
      audio_language: selectedLanguage,
    });
  }

  return playlist.sort((left, right) => {
    const leftHeight =
      left.quality.size.kind === "some" ? left.quality.size.value.height : 0;
    const rightHeight =
      right.quality.size.kind === "some" ? right.quality.size.value.height : 0;
    return rightHeight - leftHeight;
  });
}

async function scanWithClient(videoId, visitorData, clientConfig, state) {
  const sessionOptions = {
    fetch: (...args) => window.fetch(...args),
    retrieve_player: false,
    enable_session_cache: false,
  };
  if (state.remote_behaviours?.gyt_scanner?.player_id) {
    sessionOptions.player_id = state.remote_behaviours.gyt_scanner.player_id;
  }
  if (clientConfig.implementation === "cookies" && document.cookie) {
    sessionOptions.cookie = document.cookie;
  }
  if (clientConfig.implementation !== "no_cookies_no_vdata" && visitorData) {
    sessionOptions.visitor_data = visitorData;
  }

  const innertube = await Innertube.create(sessionOptions);
  const info = await innertube.getBasicInfo(videoId, {
    client: clientConfig.client,
  });
  if (!info) throw new Error("YouTube returned no video information");

  const subtitles = await collectSubtitles(info);
  const title = some(info.basic_info.title || document.title);
  const thumbnails = [...(info.basic_info.thumbnail ?? [])].sort(
    (left, right) => right.height - left.height,
  );
  const thumbnail = thumbnails[0]?.url ? optionalUrl(thumbnails[0].url) : NONE;
  const duration =
    info.basic_info.duration || (info.basic_info.is_live ? "live" : "unknown");
  const preferredLanguages =
    state.preferred_audio_strategy === "user_language"
      ? state.preferred_audio_languages
      : new Set();
  const result = { hls: null, formats: null, subtitles };

  const hlsManifestUrl = info.streaming_data?.hls_manifest_url;
  if (hlsManifestUrl) {
    const masterUrl = new URL(hlsManifestUrl);
    const response = await fetch(masterUrl);
    if (response.ok) {
      const playlist = parseMasterPlaylist(await response.text(), masterUrl, {
        preferredAudioLanguages: preferredLanguages,
      });
      if (playlist.length > 0) {
        const mediaUrl = playlist[0]?.av?.video || playlist[0]?.av?.audio;
        let hlsDuration = duration;
        if (mediaUrl) {
          try {
            const mediaResponse = await fetch(mediaUrl, {
              signal: AbortSignal.timeout(5_000),
            });
            if (mediaResponse.ok) {
              hlsDuration = inspectMediaPlaylist(
                await mediaResponse.text(),
              ).duration;
            }
          } catch {}
        }

        result.hls = {
          master_url: masterUrl,
          is_youtube: true,
          preferred_entry: NONE,
          initiator: optionalUrl(window.location.href),
          hash: `media_hash_${hashString(`${videoId}hls`)}`,
          sent_headers: new Headers(),
          thumbnail_url: thumbnail,
          filename: NONE,
          title,
          type: "m3u8_playlist",
          playlist,
          duration: hlsDuration,
          discovery_timestamp_ms: Date.now(),
          has_drm: false,
          cache: "default",
          subtitles,
        };
      }
    }
  }

  const formats = [
    ...(info.streaming_data?.adaptive_formats ?? []),
    ...(info.streaming_data?.formats ?? []),
  ];
  const formatPlaylist = await buildFormatPlaylist(
    innertube,
    info,
    formats,
    preferredLanguages,
  );
  if (formatPlaylist.length > 0) {
    result.formats = {
      is_youtube: true,
      preferred_entry: NONE,
      duration,
      initiator: optionalUrl(window.location.href),
      hash: `media_hash_${hashString(`${videoId}formats`)}`,
      sent_headers: new Headers(),
      thumbnail_url: thumbnail,
      filename: NONE,
      title,
      type: "youtube_format",
      playlist: formatPlaylist,
      discovery_timestamp_ms: Date.now(),
      has_drm: false,
      cache: "default",
      subtitles,
    };
  }

  return result;
}

async function detectVideo(videoId, visitorData) {
  const state = (await loadPersistentState()) ?? {
    preferred_audio_strategy: "original",
    preferred_audio_languages: new Set(["en"]),
    remote_behaviours: {
      gyt_scanner: { media_scan_configuration: DEFAULT_CLIENTS },
    },
  };
  const clients =
    state.remote_behaviours?.gyt_scanner?.media_scan_configuration ??
    DEFAULT_CLIENTS;

  let bestHls = null;
  let bestFormats = null;
  for (const clientConfig of clients) {
    try {
      const result = await scanWithClient(
        videoId,
        visitorData,
        clientConfig,
        state,
      );
      if (
        result.hls &&
        (!bestHls || result.hls.playlist.length > bestHls.playlist.length)
      ) {
        bestHls = result.hls;
      }
      if (
        result.formats &&
        result.formats.duration !== "live" &&
        (!bestFormats ||
          result.formats.playlist.length > bestFormats.playlist.length)
      ) {
        bestFormats = result.formats;
      }
      if (bestFormats?.playlist.length > 1 || (!bestFormats && bestHls)) break;
    } catch (error) {
      console.warn(`YouTube ${clientConfig.client} scan failed`, error);
    }
  }

  if (bestHls) await reportMedia(bestHls);
  if (bestFormats) await reportMedia(bestFormats);
}

function addEmbeddedPlayer(videoId) {
  if (document.getElementById("omd-youtube-embed")) return;
  const iframe = document.createElement("iframe");
  iframe.id = "omd-youtube-embed";
  iframe.width = "0";
  iframe.height = "0";
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`;
  iframe.hidden = true;
  document.body.appendChild(iframe);
}

async function detectCurrentPage() {
  const videoId = parseVideoId(window.location.href);
  if (!videoId) return;

  if (videoId === "playsinline") {
    const embeddedId = findEmbeddedVideoId();
    if (embeddedId) detectVideo(embeddedId, await requestVisitorData());
    return;
  }

  if (window.location.hostname === "www.youtube.com") {
    await detectVideo(videoId, await requestVisitorData());
  } else {
    addEmbeddedPlayer(videoId);
  }
}

function runDetection() {
  detectCurrentPage().catch((error) =>
    console.warn("YouTube detection failed", error),
  );
}

runDetection();
let previousUrl = window.location.href;
new MutationObserver(() => {
  if (previousUrl === window.location.href) return;
  previousUrl = window.location.href;
  runDetection();
}).observe(document.body, { childList: true, subtree: true });
