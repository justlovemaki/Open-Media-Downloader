(() => {
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

  // src/injected/chaturbate/content.js
  var PAGE_URL_PATTERN = /https?:\/\/(?:[^/]+\.)?chaturbate\.(?<tld>com|eu|global)\/(?:fullvideo\/?\?.*?\bb=)?(?<room>[^/?&#]+)/;
  async function fetchAndReportManifest(manifestUrl, roomName) {
    const response = await fetch(manifestUrl);
    if (!response.ok)
      throw new Error(`Chaturbate manifest request failed: ${response.status}`);
    const playlist = parseMasterPlaylist(await response.text(), manifestUrl);
    if (playlist.length === 0)
      throw new Error("Chaturbate returned an empty master playlist");
    const hash = `media_hash_${hashString(manifestUrl.href)}`;
    await reportMedia({
      master_url: manifestUrl,
      is_youtube: false,
      preferred_entry: NONE,
      initiator: optionalUrl(window.location.href),
      hash,
      sent_headers: new Headers(),
      thumbnail_url: some(
        new URL(`https://thumb.live.mmcdn.com/ri/${roomName}.jpg`)
      ),
      filename: NONE,
      title: NONE,
      type: "m3u8_playlist",
      playlist,
      duration: "live",
      discovery_timestamp_ms: Date.now(),
      has_drm: false,
      cache: "default",
      subtitles: NONE
    });
    return playlist[0]?.av?.video ? { entryUrl: playlist[0].av.video, hash } : null;
  }
  async function requestManifestFromAjax(roomName, topLevelDomain) {
    const body = new URLSearchParams({ room_slug: roomName });
    const response = await fetch(
      `https://chaturbate.${topLevelDomain}/get_edge_hls_url_ajax/`,
      {
        method: "POST",
        body,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    if (!response.ok) return null;
    const manifestUrl = asUrl((await response.json())?.url);
    return manifestUrl ? fetchAndReportManifest(manifestUrl, roomName) : null;
  }
  async function requestManifestFromPage(pageUrl, roomName) {
    const response = await fetch(pageUrl, {
      credentials: "same-origin",
      headers: { Accept: "text/html" }
    });
    if (!response.ok) return null;
    const html = await response.text();
    const match = html.match(/initialRoomDossier\s*=\s*(["'])(.+?)\1/s);
    if (!match?.[2]) return null;
    const encodedDossier = JSON.parse(`"${match[2]}"`);
    const dossier = JSON.parse(encodedDossier);
    const manifestUrl = asUrl(dossier?.hls_source);
    return manifestUrl ? fetchAndReportManifest(manifestUrl, roomName) : null;
  }
  async function detectPage(pageUrl) {
    const match = pageUrl.match(PAGE_URL_PATTERN);
    if (!match?.groups?.room || !match.groups.tld) return null;
    return await requestManifestFromAjax(match.groups.room, match.groups.tld) ?? requestManifestFromPage(pageUrl, match.groups.room);
  }
  async function monitorManifest(state) {
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 2e4));
      if (!state.entryUrl || !state.hash) continue;
      try {
        const response = await fetch(state.entryUrl);
        if (response.ok) continue;
        await sendInjectedMessage("remove_media", { hash: state.hash });
        if (state.pageUrl)
          Object.assign(state, await detectPage(state.pageUrl) ?? {});
      } catch (error) {
        console.warn("Chaturbate manifest health check failed", error);
      }
    }
  }
  async function monitorNavigation() {
    const state = { entryUrl: null, pageUrl: null, hash: null };
    monitorManifest(state);
    while (true) {
      const pageUrl = window.location.href;
      if (pageUrl !== state.pageUrl) {
        const mediaState = await detectPage(pageUrl);
        state.pageUrl = pageUrl;
        state.entryUrl = mediaState?.entryUrl ?? null;
        state.hash = mediaState?.hash ?? null;
      }
      await new Promise((resolve) => setTimeout(resolve, 600));
    }
  }
  monitorNavigation().catch(
    (error) => console.warn("Chaturbate media detection failed", error)
  );
})();
//# sourceMappingURL=chaturbate.js.map
