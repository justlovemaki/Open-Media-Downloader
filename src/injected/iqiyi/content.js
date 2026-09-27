import {
  reportMedia,
  onServiceMessage,
} from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { inspectMediaPlaylist } from "../../media/m3u8.js";
import { createPageBridge } from "../../shared/page-bridge.js";
import { NONE, some } from "../../shared/option.js";
import { optionalUrl } from "../../shared/url.js";

const PLAYER_POLL_INTERVAL_MS = 1_000;

const SUBTITLE_LANGUAGES = new Map([
  [1, "zh-CN"],
  [2, "zh-TW"],
  [3, "en"],
  [4, "ko"],
  [5, "ja"],
  [6, "fr"],
  [18, "th"],
  [21, "ms"],
  [23, "vi"],
  [24, "id"],
  [26, "es"],
  [27, "pt"],
  [28, "ar"],
]);

const pageBridge = createPageBridge();
let lastReportedPlaylistHash = null;

function selectCurrentStream(videoStreams) {
  if (!Array.isArray(videoStreams)) return null;

  const playableStreams = videoStreams.filter(
    (stream) => typeof stream?.m3u8 === "string" && stream.m3u8.length > 0,
  );

  const selectedStream = playableStreams.find(
    (stream) => stream._selected === true,
  );
  if (selectedStream) return selectedStream;

  return playableStreams.sort(
    (left, right) => (Number(right.bid) || 0) - (Number(left.bid) || 0),
  )[0];
}

function collectSubtitles(dashResponse) {
  const subtitleBaseUrl = dashResponse?.data?.dstl;
  const subtitleTracks = dashResponse?.data?.program?.stl;
  if (!Array.isArray(subtitleTracks)) return [];

  const initiator = optionalUrl(window.location.href);
  const subtitles = [];

  for (const track of subtitleTracks) {
    const language = SUBTITLE_LANGUAGES.get(track.lid);
    if (!language || !track.webvtt) continue;

    const subtitleUrl = optionalUrl(`${subtitleBaseUrl ?? ""}${track.webvtt}`);
    if (subtitleUrl.kind !== "some") continue;

    subtitles.push({
      hash: `subtitle_hash_${hashString(subtitleUrl.value.href)}`,
      initiator,
      language,
      url: subtitleUrl.value,
      type: "http",
    });
  }

  return subtitles;
}

async function processDashResponse(dashResponse) {
  const stream = selectCurrentStream(dashResponse?.data?.program?.video);
  if (!stream) throw new Error("No playable M3U8 stream was returned by iQIYI");

  const playlistHash = hashString(stream.m3u8);
  if (playlistHash === lastReportedPlaylistHash) return;

  const playlistInfo = inspectMediaPlaylist(stream.m3u8);
  const subtitles = collectSubtitles(dashResponse);

  await reportMedia({
    is_youtube: false,
    has_drm: false,
    sent_headers: new Headers(),
    initiator: optionalUrl(window.location.href),
    type: "m3u8",
    hash: `media_hash_${playlistHash}`,
    discovery_timestamp_ms: Date.now(),
    duration: playlistInfo.duration,
    title: NONE,
    filename: NONE,
    thumbnail_url: NONE,
    demuxer: "mp4",
    url: new URL(
      `data:text/plain;charset=UTF-8,${encodeURIComponent(stream.m3u8)}`,
    ),
    cache: "default",
    subtitles: subtitles.length > 0 ? some(subtitles) : NONE,
  });

  lastReportedPlaylistHash = playlistHash;
}

async function requestCurrentDashResponse() {
  const response = await pageBridge.requestFromPage(
    { name: "iq_request_config", data: null },
    "iq_on_config",
  );

  return response?.config?.__dash ?? null;
}

async function monitorPlayerQuality() {
  if (!window.location.pathname.includes("/play/")) return;

  while (true) {
    try {
      const dashResponse = await requestCurrentDashResponse();
      if (dashResponse) await processDashResponse(dashResponse);
    } catch (error) {
      console.warn("Unable to inspect the current iQIYI stream", error);
    }

    await new Promise((resolve) =>
      setTimeout(resolve, PLAYER_POLL_INTERVAL_MS),
    );
  }
}

onServiceMessage((message) => {
  if (message?.name !== "iqyi_on_config") return;
  processDashResponse(message.data).catch((error) => {
    console.warn("Unable to process the intercepted iQIYI response", error);
  });
});

monitorPlayerQuality();
