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
  function parseMasterPlaylist(source, masterUrl) {
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
      const audioTrack = audioTracks.find((track) => track.isDefault) ?? audioTracks[0];
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

  // src/injected/canva/content.js
  var CANVA_WATCH_URL = /canva\.com\/.*\/watch/;
  var MANIFEST_PATTERN = /['"]hlsManifestUrl['"]\s*:\s*['"]([^'"]+)['"]/;
  function findManifestUrl() {
    for (const script of document.querySelectorAll("script[nonce]")) {
      if (script.attributes.length !== 1 || script.attributes[0]?.name !== "nonce")
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
        signal: AbortSignal.timeout(5e3)
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
      manifestUrl.value
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
      subtitles: NONE
    });
  }
  detectCanvaVideo().catch(
    (error) => console.warn("Canva media detection failed", error)
  );
})();
//# sourceMappingURL=canva.js.map
