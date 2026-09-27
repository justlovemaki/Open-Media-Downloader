import md5 from "blueimp-md5";

import { reportMedia } from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE, some } from "../../shared/option.js";
import { createPageBridge } from "../../shared/page-bridge.js";
import { asUrl, optionalUrl } from "../../shared/url.js";

const BILIBILI_COM_VIDEO = /\.com\/video\//;
const BILIBILI_TV_VIDEO = /\.tv\/(?:[^/]+\/)?(?:play|video)\//;
const pageBridge = createPageBridge();

const WBI_MIXIN_KEY_ORDER = [
  46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
  33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61,
  26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36,
  20, 34, 44, 52,
];

const VIDEO_CODECS = [
  { pattern: /(avc1|avc3).*/i, container: "mp4" },
  { pattern: /(hvc1|hev1|hevc|h265|h\.265).*/i, container: "mp4" },
  { pattern: /mp4v\.20.*/i, container: "mp4" },
  { pattern: /av0?1.*/i, container: "webm" },
  { pattern: /vp0?8.*/i, container: "webm" },
  { pattern: /vp0?9.*/i, container: "webm" },
];

const AUDIO_CODECS = [
  { pattern: /(aac|mp4a\.40).*/i, container: "m4a" },
  { pattern: /(\.?mp3|mp4a\.69|mp4a\.6b).*/i, container: "mp3" },
  { pattern: /(opus|mp4a\.ad.*)/i, container: "ogg" },
  { pattern: /vorbis/i, container: "ogg" },
];

function classifyCodec(codecs, definitions) {
  return (
    definitions.find(({ pattern }) => pattern.test(codecs ?? ""))?.container ??
    null
  );
}

function outputContainerForAudio(audioContainer) {
  if (audioContainer === "m4a" || audioContainer === "mp3") return "mp4";
  if (audioContainer === "ogg") return "webm";
  return null;
}

function qualityValue(width, height) {
  return width && height ? some({ width, height }) : NONE;
}

function comparePlaylistEntries(left, right) {
  const leftHeight =
    left.quality.size.kind === "some" ? left.quality.size.value.height : 0;
  const rightHeight =
    right.quality.size.kind === "some" ? right.quality.size.value.height : 0;
  if (leftHeight !== rightHeight) return rightHeight - leftHeight;

  const leftBitrate =
    left.quality.bitrate.kind === "some" ? left.quality.bitrate.value : 0;
  const rightBitrate =
    right.quality.bitrate.kind === "some" ? right.quality.bitrate.value : 0;
  return rightBitrate - leftBitrate;
}

function buildPlaylist(audioStreams, videoStreams) {
  const bestAudioByContainer = new Map();

  for (const audioStream of audioStreams ?? []) {
    const url = asUrl(audioStream.url ?? audioStream.base_url);
    const audioContainer = classifyCodec(audioStream.codecs, AUDIO_CODECS);
    const outputContainer = outputContainerForAudio(audioContainer);
    if (!url || !outputContainer) continue;

    const current = bestAudioByContainer.get(outputContainer);
    if (!current || current.bitrate < (audioStream.bandwidth ?? 0)) {
      bestAudioByContainer.set(outputContainer, {
        bitrate: audioStream.bandwidth ?? 0,
        url,
        size: Number.isFinite(audioStream.size) ? some(audioStream.size) : NONE,
      });
    }
  }

  const playlist = [];

  for (const videoStream of videoStreams ?? []) {
    const videoUrl = asUrl(videoStream.url ?? videoStream.base_url);
    const videoContainer = classifyCodec(videoStream.codecs, VIDEO_CODECS);
    if (!videoUrl || !videoContainer) continue;

    const audio = bestAudioByContainer.get(videoContainer);
    if (!audio) continue;

    const videoSize = Number.isFinite(videoStream.size) ? videoStream.size : 0;
    const audioSize = audio.size.kind === "some" ? audio.size.value : 0;
    const combinedSize = videoSize + audioSize;

    playlist.push({
      quality: {
        bitrate: some(videoStream.bandwidth ?? 0),
        size: qualityValue(videoStream.width, videoStream.height),
      },
      demuxer: videoContainer,
      size: combinedSize > 0 ? some(combinedSize) : NONE,
      av: {
        video: videoUrl,
        audio: audio.url,
      },
    });
  }

  return playlist.sort(comparePlaylistEntries);
}

async function fetchWbiMixinKey() {
  const response = await fetch("https://api.bilibili.com/x/web-interface/nav", {
    credentials: "include",
  });
  if (!response.ok)
    throw new Error(`WBI navigation request failed: ${response.status}`);

  const payload = await response.json();
  const imageUrl = payload?.data?.wbi_img?.img_url;
  const subUrl = payload?.data?.wbi_img?.sub_url;
  if (!imageUrl || !subUrl) throw new Error("WBI image keys are missing");

  const filename = (url) =>
    url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
  const source = `${filename(imageUrl)}${filename(subUrl)}`;
  return WBI_MIXIN_KEY_ORDER.map((index) => source[index]).join("");
}

async function resolveBilibiliComIdentity() {
  const bvid = window.location.pathname.match(
    /\/video\/(BV[0-9A-Za-z]+)/i,
  )?.[1];
  if (bvid) {
    try {
      const response = await fetch(
        `https://api.bilibili.com/x/player/pagelist?bvid=${encodeURIComponent(bvid)}`,
        { credentials: "include" },
      );
      if (response.ok) {
        const payload = await response.json();
        const pages = payload?.data;
        const requestedPage = Math.max(
          1,
          Number.parseInt(
            new URL(window.location.href).searchParams.get("p") ?? "1",
            10,
          ) || 1,
        );
        const page = Array.isArray(pages)
          ? (pages[requestedPage - 1] ?? pages[0])
          : null;
        if (page?.cid) return { bvid, cid: page.cid };
      }
    } catch (error) {
      console.warn(
        "Bilibili pagelist lookup failed; falling back to page state",
        error,
      );
    }
  }

  return pageBridge.requestFromPage(
    { name: "bilibili_com_request_id", data: null },
    "bilibili_com_on_id",
    15_000,
  );
}

async function requestBilibiliComPlayData() {
  const identity = await resolveBilibiliComIdentity();
  if (!identity?.bvid || !identity?.cid) {
    throw new Error("Bilibili page did not expose a usable bvid/cid pair");
  }

  const search = new URLSearchParams({
    bvid: String(identity.bvid),
    cid: String(identity.cid),
    fnval: "4048",
    fnver: "0",
    fourk: "1",
    qn: "127",
    try_look: "1",
    wts: String(Math.round(Date.now() / 1000)),
  });

  const mixinKey = await fetchWbiMixinKey();
  search.set("w_rid", md5(`${search.toString()}${mixinKey}`));

  const response = await fetch(
    `https://api.bilibili.com/x/player/wbi/playurl?${search}`,
    {
      credentials: "include",
    },
  );
  if (!response.ok)
    throw new Error(`Bilibili play URL request failed: ${response.status}`);

  const payload = await response.json();
  if (!payload?.data?.dash)
    throw new Error(payload?.message || "Bilibili returned no DASH data");
  return payload;
}

async function requestBilibiliTvPlayData() {
  const identity = await pageBridge.requestFromPage(
    { name: "bilibili_tv_request_config", data: null },
    "bilibili_tv_on_config",
  );

  const search = new URLSearchParams({
    s_locale: "en_US",
    platform: "web",
    qn: "120",
    type: "0",
    device: "wap",
    tf: "0",
    spm_id: "bstar-web.pgc-video-detail.0.0",
    from_spm_id: "bstar-web.homepage.recommend.all",
  });

  if (identity.ep_id) search.set("ep_id", identity.ep_id);
  else if (identity.ai_id) search.set("aid", identity.ai_id);
  else throw new Error("No episode or video ID was found");

  const response = await fetch(
    `https://api.bilibili.tv/intl/gateway/web/playurl?${search}`,
    { credentials: "include" },
  );
  if (!response.ok)
    throw new Error(`Bilibili TV play URL request failed: ${response.status}`);
  return response.json();
}

function createMedia(playlist, duration = "unknown") {
  const referer = window.location.href.split("?")[0];

  return {
    type: "http_playlist",
    discovery_timestamp_ms: Date.now(),
    hash: `media_hash_${hashString(window.location.href)}`,
    initiator: optionalUrl(window.location.href),
    is_youtube: false,
    preferred_entry: NONE,
    sent_headers: new Headers({ Referer: referer }),
    title: NONE,
    thumbnail_url: NONE,
    cache: "default",
    has_drm: false,
    supports_byte_ranges: true,
    libav_demuxer: some("mp4"),
    filename: NONE,
    extension: "mp4",
    playlist,
    duration,
  };
}

async function detectCurrentVideo() {
  const currentUrl = window.location.href;
  if (
    !BILIBILI_COM_VIDEO.test(currentUrl) &&
    !BILIBILI_TV_VIDEO.test(currentUrl)
  )
    return;

  let audioStreams;
  let videoStreams;
  let duration = "unknown";

  if (BILIBILI_COM_VIDEO.test(currentUrl)) {
    const payload = await requestBilibiliComPlayData();
    audioStreams = payload.data.dash.audio;
    videoStreams = payload.data.dash.video;
    if (Number.isFinite(payload.data.timelength))
      duration = payload.data.timelength / 1000;
  } else {
    const payload = await requestBilibiliTvPlayData();
    audioStreams = payload?.data?.playurl?.audio_resource;
    videoStreams = payload?.data?.playurl?.video?.map(
      (entry) => entry.video_resource,
    );
  }

  const playlist = buildPlaylist(audioStreams, videoStreams);
  if (playlist.length === 0)
    throw new Error("No compatible Bilibili audio/video pairs found");
  await reportMedia(createMedia(playlist, duration));
}

function scheduleDetection() {
  setTimeout(() => {
    detectCurrentVideo().catch((error) =>
      console.warn("Bilibili media detection failed", error),
    );
  }, 1_000);
}

detectCurrentVideo().catch((error) =>
  console.warn("Bilibili media detection failed", error),
);

let previousUrl = window.location.href;
new MutationObserver(() => {
  if (previousUrl === window.location.href) return;
  previousUrl = window.location.href;
  scheduleDetection();
}).observe(document.documentElement, { childList: true, subtree: true });
