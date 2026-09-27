(() => {
  // src/media/m3u8.js
  var SUBTITLE_EXTENSIONS = /* @__PURE__ */ new Set(["vtt", "srt", "webvtt", "ttml"]);
  function inspectMediaPlaylist(source) {
    const lines = source.split(/\r?\n/);
    const segmentDurations = [];
    const segmentUrls = [];
    let lastProgramDateTime = null;
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line) continue;
      if (line.startsWith("#EXTINF:")) {
        const duration = Number.parseFloat(line.slice(8).split(",", 1)[0]);
        if (Number.isFinite(duration)) segmentDurations.push(duration);
        continue;
      }
      if (line.startsWith("#EXT-X-PROGRAM-DATE-TIME:")) {
        const timestamp = Date.parse(
          line.slice("#EXT-X-PROGRAM-DATE-TIME:".length)
        );
        if (Number.isFinite(timestamp)) lastProgramDateTime = timestamp;
        continue;
      }
      if (!line.startsWith("#")) segmentUrls.push(line);
    }
    if (segmentUrls.length === 0) {
      throw new Error("The response is not a media M3U8 playlist");
    }
    const subtitleOnly = segmentUrls.every((segmentUrl) => {
      const pathname = segmentUrl.split(/[?#]/, 1)[0];
      const extension = pathname.slice(pathname.lastIndexOf(".") + 1).toLowerCase();
      return SUBTITLE_EXTENSIONS.has(extension);
    });
    if (subtitleOnly) {
      throw new Error("The response is a subtitle playlist");
    }
    const looksLive = lastProgramDateTime !== null && lastProgramDateTime > Date.now() - 10 * 60 * 1e3;
    return {
      duration: looksLive ? "live" : segmentDurations.reduce((total, duration) => total + duration, 0) || "unknown",
      segmentCount: segmentUrls.length
    };
  }

  // src/shared/option.js
  var OPTION_MARKER = Symbol("OpenMediaDownloaderOption");
  var NONE = Object.freeze({
    [OPTION_MARKER]: true,
    kind: "none"
  });
  function some(value) {
    return {
      [OPTION_MARKER]: true,
      kind: "some",
      value
    };
  }
  function isOption(value) {
    return Boolean(value?.[OPTION_MARKER]);
  }

  // src/shared/url.js
  function optionalUrl(value, base) {
    if (!value) return NONE;
    try {
      return some(new URL(value, base));
    } catch {
      return NONE;
    }
  }
  function asUrl(value, base) {
    if (!value) return null;
    try {
      return new URL(value, base);
    } catch {
      return null;
    }
  }

  // src/media/master-playlist.js
  var VIDEO_CODECS = [
    {
      pattern: /(avc1|avc3|hvc1|hev1|hevc|h265|h\.265|mp4v\.20)/i,
      container: "mp4"
    },
    { pattern: /(av0?1|vp0?8|vp0?9)/i, container: "webm" }
  ];
  function parseAttributeList(source) {
    const attributes = {};
    const pattern = /(?:^|,)([^=,]+)=("[^"]*"|[^,]*)/g;
    let match;
    while (match = pattern.exec(source)) {
      const key = match[1].trim();
      const rawValue = match[2].trim().replace(/^"|"$/g, "");
      attributes[key] = rawValue;
    }
    return attributes;
  }
  function parseResolution(value) {
    const match = String(value ?? "").match(/^(\d+)x(\d+)$/i);
    return match ? some({ width: Number(match[1]), height: Number(match[2]) }) : NONE;
  }
  function classifyVideoContainer(codecs) {
    return VIDEO_CODECS.find(({ pattern }) => pattern.test(codecs ?? ""))?.container ?? "mp4";
  }
  function compareEntries(left, right) {
    const leftHeight = left.quality.size.kind === "some" ? left.quality.size.value.height : 0;
    const rightHeight = right.quality.size.kind === "some" ? right.quality.size.value.height : 0;
    if (leftHeight !== rightHeight) return rightHeight - leftHeight;
    const leftBitrate = left.quality.bitrate.kind === "some" ? left.quality.bitrate.value : 0;
    const rightBitrate = right.quality.bitrate.kind === "some" ? right.quality.bitrate.value : 0;
    return rightBitrate - leftBitrate;
  }
  function parseMasterPlaylist(source, masterUrl, options = {}) {
    const lines = source.split(/\r?\n/).map((line) => line.trim());
    const audioGroups = /* @__PURE__ */ new Map();
    for (const line of lines) {
      if (!line.startsWith("#EXT-X-MEDIA:")) continue;
      const attributes = parseAttributeList(line.slice("#EXT-X-MEDIA:".length));
      if (attributes.TYPE !== "AUDIO" || !attributes["GROUP-ID"] || !attributes.URI)
        continue;
      const track = {
        url: asUrl(attributes.URI, masterUrl),
        language: attributes.LANGUAGE || null,
        isDefault: attributes.DEFAULT === "YES"
      };
      if (!track.url) continue;
      const tracks = audioGroups.get(attributes["GROUP-ID"]) ?? [];
      tracks.push(track);
      audioGroups.set(attributes["GROUP-ID"], tracks);
    }
    const playlist = [];
    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index];
      if (!line.startsWith("#EXT-X-STREAM-INF:")) continue;
      const attributes = parseAttributeList(
        line.slice("#EXT-X-STREAM-INF:".length)
      );
      const uri = lines.slice(index + 1).find((candidate) => candidate && !candidate.startsWith("#"));
      const videoUrl = asUrl(uri, masterUrl);
      if (!videoUrl) continue;
      const audioTracks = audioGroups.get(attributes.AUDIO) ?? [];
      const preferredLanguages = options.preferredAudioLanguages ?? /* @__PURE__ */ new Set();
      const audioTrack = audioTracks.find(
        (track) => track.language && preferredLanguages.has(track.language)
      ) ?? audioTracks.find((track) => track.isDefault) ?? audioTracks[0];
      const bandwidth = Number(attributes.BANDWIDTH);
      playlist.push({
        demuxer: classifyVideoContainer(attributes.CODECS),
        quality: {
          size: parseResolution(attributes.RESOLUTION),
          bitrate: Number.isFinite(bandwidth) ? some(bandwidth) : NONE
        },
        av: {
          video: videoUrl,
          audio: audioTrack?.url ?? false
        },
        audio_language: audioTrack?.language ? some(audioTrack.language) : NONE
      });
    }
    return playlist.sort(compareEntries);
  }

  // src/shared/channels.js
  var MessageChannel = Object.freeze({
    FROM_INJECTED_TO_SERVICE: 0,
    FROM_CONTENT_TO_SERVICE: 1,
    FROM_SERVICE_TO_WORKER: 2,
    FROM_WORKER_TO_SERVICE: 3,
    FROM_PAGE_TO_CONTENT: 4,
    FROM_CONTENT_TO_PAGE: 5,
    FROM_SERVICE_TO_CONTENT: 6,
    FROM_SERVICE_TO_INJECTED: 7,
    FROM_SERVICE_TO_SERVICE: 8
  });

  // src/shared/serialize.js
  function serialize(value) {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "undefined" || value === null) {
      return { __serde_tag: "primitive", __serde_val: value };
    }
    if (Array.isArray(value)) {
      return { __serde_tag: "array", __serde_val: value.map(serialize) };
    }
    if (value instanceof URL) {
      return { __serde_tag: "url", __serde_val: value.href };
    }
    if (value instanceof Headers) {
      return {
        __serde_tag: "headers",
        __serde_val: [...value.entries()]
      };
    }
    if (value instanceof Set) {
      return {
        __serde_tag: "set",
        __serde_val: [...value].map(serialize)
      };
    }
    if (value instanceof Map) {
      return {
        __serde_tag: "map",
        __serde_val: [...value.entries()].map(([key, entryValue]) => [
          serialize(key),
          serialize(entryValue)
        ])
      };
    }
    if (value instanceof RegExp) {
      return {
        __serde_tag: "regex",
        __serde_val: [value.source, value.flags]
      };
    }
    if (isOption(value)) {
      return value.kind === "some" ? { __serde_tag: "some", __serde_val: serialize(value.value) } : { __serde_tag: "none" };
    }
    if (typeof value === "object") {
      return {
        __serde_tag: "object",
        __serde_val: Object.fromEntries(
          Object.entries(value).map(([key, entryValue]) => [
            key,
            serialize(entryValue)
          ])
        )
      };
    }
    throw new TypeError(`Cannot serialize value of type ${typeof value}`);
  }

  // src/shared/extension-messaging.js
  async function sendInjectedMessage(name, data) {
    await chrome.runtime.sendMessage({
      msg: { name, data },
      channel: MessageChannel.FROM_INJECTED_TO_SERVICE
    });
  }
  async function reportMedia(media) {
    await sendInjectedMessage("on_media", { media: serialize(media) });
  }
  function onServiceMessage(listener) {
    const runtimeListener = (message) => {
      if (message?.channel === MessageChannel.FROM_SERVICE_TO_INJECTED) {
        listener(message.msg);
      }
    };
    chrome.runtime.onMessage.addListener(runtimeListener);
    return () => chrome.runtime.onMessage.removeListener(runtimeListener);
  }

  // src/shared/hash.js
  function hashString(value, seed = 0) {
    let low = 3735928559 ^ seed;
    let high = 1103547991 ^ seed;
    for (let index = 0; index < value.length; index += 1) {
      const character = value.charCodeAt(index);
      low = Math.imul(low ^ character, 2654435761);
      high = Math.imul(high ^ character, 1597334677);
    }
    low = Math.imul(low ^ low >>> 16, 2246822507);
    low ^= Math.imul(high ^ high >>> 13, 3266489909);
    high = Math.imul(high ^ high >>> 16, 2246822507);
    high ^= Math.imul(low ^ low >>> 13, 3266489909);
    return 4294967296 * (2097151 & high) + (low >>> 0);
  }

  // src/shared/deserialize.js
  function deserialize(value) {
    if (!value || typeof value !== "object") return value;
    switch (value.__serde_tag) {
      case "primitive":
        return value.__serde_val;
      case "array":
        return value.__serde_val.map(deserialize);
      case "object":
        return Object.fromEntries(
          Object.entries(value.__serde_val).map(([key, entryValue]) => [
            key,
            deserialize(entryValue)
          ])
        );
      case "map":
        return new Map(
          value.__serde_val.map(([key, entryValue]) => [
            deserialize(key),
            deserialize(entryValue)
          ])
        );
      case "set":
        return new Set(value.__serde_val.map(deserialize));
      case "url":
        return new URL(value.__serde_val);
      case "headers":
        return new Headers(value.__serde_val);
      case "regex":
        return new RegExp(value.__serde_val[0], value.__serde_val[1]);
      case "some":
        return some(deserialize(value.__serde_val));
      case "none":
        return NONE;
      case "ok":
        return { ok: true, value: deserialize(value.__serde_val) };
      case "err":
        return { ok: false, error: deserialize(value.__serde_val) };
      default:
        throw new Error(`Unknown serialized value tag: ${value.__serde_tag}`);
    }
  }

  // src/shared/preferences.js
  var PERSISTENT_STATE_KEY = "global_persistent_state";
  async function loadPersistentState() {
    const stored = await chrome.storage.local.get(PERSISTENT_STATE_KEY);
    return PERSISTENT_STATE_KEY in stored ? deserialize(stored[PERSISTENT_STATE_KEY]) : null;
  }
  async function loadPreferredAudioLanguages() {
    try {
      const state = await loadPersistentState();
      return state?.preferred_audio_strategy === "user_language" ? state.preferred_audio_languages : /* @__PURE__ */ new Set();
    } catch {
      return /* @__PURE__ */ new Set();
    }
  }

  // src/injected/vk/content.js
  var VK_VIDEO_PATTERN = /(?:^|\/\/)(?:m\.)?(?:vk\.com|vk\.ru|vkvideo\.ru)\/(?:clip|video|playlist\/[^/]+\/video)(-?\d+_\d+)/;
  var VK_LIVE_PATTERN = /^https:\/\/live\.vkvideo\.ru\/([^/]+)(?:\/record\/([^/?]+))?/;
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
          "X-Requested-With": "XMLHttpRequest"
        },
        body_params: bodyParams
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
      preferredAudioLanguages: await loadPreferredAudioLanguages()
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
        signal: AbortSignal.timeout(5e3)
      });
      if (!response.ok) return { duration: "unknown", hasDrm: false };
      const source = await response.text();
      return {
        duration: inspectMediaPlaylist(source).duration,
        hasDrm: /#EXT-X-KEY:.*KEYFORMAT=(?:"com\.widevine|"com\.microsoft\.playready)/i.test(
          source
        )
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
        type: "http"
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
      subtitles: subtitles.length > 0 ? some(subtitles) : NONE
    };
  }
  async function fetchLiveStream(channel, recordId) {
    const endpoint = recordId ? `https://api.live.vkvideo.ru/v1/blog/${channel}/public_video_stream/record/${recordId}` : `https://api.live.vkvideo.ru/v1/channel/${channel}/stream/slot/default`;
    const response = await fetch(endpoint);
    if (!response.ok)
      throw new Error(`VK Live API request failed: ${response.status}`);
    const payload = await response.json();
    return recordId ? payload?.data?.record : payload?.data?.stream;
  }
  async function detectLiveVideo(channel, recordId) {
    const stream = await fetchLiveStream(channel, recordId);
    const playerUrl = stream?.data?.[0]?.playerUrls?.find(
      (entry) => recordId ? entry.type === "ondemand_hls" || entry.type === "hls" : entry.type === "live_ondemand_hls"
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
      subtitles: NONE
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
      getListParameter(window.location.href)
    );
    await reportMedia(await processStandardVideo(payload, videoId));
  }
  function runDetection() {
    detectCurrentPage().catch(
      (error) => console.warn("VK media detection failed", error)
    );
  }
  runDetection();
  var previousUrl = window.location.href;
  new MutationObserver(() => {
    if (previousUrl === window.location.href) return;
    previousUrl = window.location.href;
    runDetection();
  }).observe(document.body, { childList: true, subtree: true });
})();
//# sourceMappingURL=vk.js.map
