(() => {
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

  // src/shared/page-bridge.js
  function createPageBridge(pageUrl = window.location.href) {
    const channel = new BroadcastChannel(`injected-${hashString(pageUrl)}`);
    function postToPage(message) {
      channel.postMessage({
        msg: message,
        channel: MessageChannel.FROM_CONTENT_TO_PAGE
      });
    }
    function onMessageFromPage(listener) {
      const eventListener = (event) => {
        if (event.data?.channel === MessageChannel.FROM_PAGE_TO_CONTENT) {
          listener(event.data.msg);
        }
      };
      channel.addEventListener("message", eventListener);
      return () => channel.removeEventListener("message", eventListener);
    }
    function requestFromPage(request, responseName, timeoutMs = 1e4) {
      return new Promise((resolve, reject) => {
        let timeout;
        const removeListener = onMessageFromPage((message) => {
          if (message?.name !== responseName) return;
          clearTimeout(timeout);
          removeListener();
          resolve(message.data);
        });
        timeout = setTimeout(() => {
          removeListener();
          reject(
            new Error(`Timed out waiting for page message: ${responseName}`)
          );
        }, timeoutMs);
        postToPage(request);
      });
    }
    return { postToPage, onMessageFromPage, requestFromPage };
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

  // src/injected/iqiyi/content.js
  var PLAYER_POLL_INTERVAL_MS = 1e3;
  var SUBTITLE_LANGUAGES = /* @__PURE__ */ new Map([
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
    [28, "ar"]
  ]);
  var pageBridge = createPageBridge();
  var lastReportedPlaylistHash = null;
  function selectCurrentStream(videoStreams) {
    if (!Array.isArray(videoStreams)) return null;
    const playableStreams = videoStreams.filter(
      (stream) => typeof stream?.m3u8 === "string" && stream.m3u8.length > 0
    );
    const selectedStream = playableStreams.find(
      (stream) => stream._selected === true
    );
    if (selectedStream) return selectedStream;
    return playableStreams.sort(
      (left, right) => (Number(right.bid) || 0) - (Number(left.bid) || 0)
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
        type: "http"
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
        `data:text/plain;charset=UTF-8,${encodeURIComponent(stream.m3u8)}`
      ),
      cache: "default",
      subtitles: subtitles.length > 0 ? some(subtitles) : NONE
    });
    lastReportedPlaylistHash = playlistHash;
  }
  async function requestCurrentDashResponse() {
    const response = await pageBridge.requestFromPage(
      { name: "iq_request_config", data: null },
      "iq_on_config"
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
      await new Promise(
        (resolve) => setTimeout(resolve, PLAYER_POLL_INTERVAL_MS)
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
})();
//# sourceMappingURL=iq.js.map
