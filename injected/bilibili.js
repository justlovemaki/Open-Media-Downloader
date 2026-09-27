(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/blueimp-md5/js/md5.js
  var require_md5 = __commonJS({
    "node_modules/blueimp-md5/js/md5.js"(exports, module) {
      (function($) {
        "use strict";
        function safeAdd(x, y) {
          var lsw = (x & 65535) + (y & 65535);
          var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return msw << 16 | lsw & 65535;
        }
        function bitRotateLeft(num, cnt) {
          return num << cnt | num >>> 32 - cnt;
        }
        function md5cmn(q, a, b, x, s, t) {
          return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
        }
        function md5ff(a, b, c, d, x, s, t) {
          return md5cmn(b & c | ~b & d, a, b, x, s, t);
        }
        function md5gg(a, b, c, d, x, s, t) {
          return md5cmn(b & d | c & ~d, a, b, x, s, t);
        }
        function md5hh(a, b, c, d, x, s, t) {
          return md5cmn(b ^ c ^ d, a, b, x, s, t);
        }
        function md5ii(a, b, c, d, x, s, t) {
          return md5cmn(c ^ (b | ~d), a, b, x, s, t);
        }
        function binlMD5(x, len) {
          x[len >> 5] |= 128 << len % 32;
          x[(len + 64 >>> 9 << 4) + 14] = len;
          var i;
          var olda;
          var oldb;
          var oldc;
          var oldd;
          var a = 1732584193;
          var b = -271733879;
          var c = -1732584194;
          var d = 271733878;
          for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;
            a = md5ff(a, b, c, d, x[i], 7, -680876936);
            d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5gg(b, c, d, a, x[i], 20, -373897302);
            a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5hh(d, a, b, c, x[i], 11, -358537222);
            c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5ii(a, b, c, d, x[i], 6, -198630844);
            d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safeAdd(a, olda);
            b = safeAdd(b, oldb);
            c = safeAdd(c, oldc);
            d = safeAdd(d, oldd);
          }
          return [a, b, c, d];
        }
        function binl2rstr(input) {
          var i;
          var output = "";
          var length32 = input.length * 32;
          for (i = 0; i < length32; i += 8) {
            output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
          }
          return output;
        }
        function rstr2binl(input) {
          var i;
          var output = [];
          output[(input.length >> 2) - 1] = void 0;
          for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
          }
          var length8 = input.length * 8;
          for (i = 0; i < length8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
          }
          return output;
        }
        function rstrMD5(s) {
          return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
        }
        function rstrHMACMD5(key, data) {
          var i;
          var bkey = rstr2binl(key);
          var ipad = [];
          var opad = [];
          var hash;
          ipad[15] = opad[15] = void 0;
          if (bkey.length > 16) {
            bkey = binlMD5(bkey, key.length * 8);
          }
          for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 909522486;
            opad[i] = bkey[i] ^ 1549556828;
          }
          hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
          return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
        }
        function rstr2hex(input) {
          var hexTab = "0123456789abcdef";
          var output = "";
          var x;
          var i;
          for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15);
          }
          return output;
        }
        function str2rstrUTF8(input) {
          return unescape(encodeURIComponent(input));
        }
        function rawMD5(s) {
          return rstrMD5(str2rstrUTF8(s));
        }
        function hexMD5(s) {
          return rstr2hex(rawMD5(s));
        }
        function rawHMACMD5(k, d) {
          return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
        }
        function hexHMACMD5(k, d) {
          return rstr2hex(rawHMACMD5(k, d));
        }
        function md52(string, key, raw) {
          if (!key) {
            if (!raw) {
              return hexMD5(string);
            }
            return rawMD5(string);
          }
          if (!raw) {
            return hexHMACMD5(key, string);
          }
          return rawHMACMD5(key, string);
        }
        if (typeof define === "function" && define.amd) {
          define(function() {
            return md52;
          });
        } else if (typeof module === "object" && module.exports) {
          module.exports = md52;
        } else {
          $.md5 = md52;
        }
      })(exports);
    }
  });

  // src/injected/bilibili/content.js
  var import_blueimp_md5 = __toESM(require_md5(), 1);

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
  function asUrl(value, base) {
    if (!value) return null;
    try {
      return new URL(value, base);
    } catch {
      return null;
    }
  }

  // src/injected/bilibili/content.js
  var BILIBILI_COM_VIDEO = /\.com\/video\//;
  var BILIBILI_TV_VIDEO = /\.tv\/(?:[^/]+\/)?(?:play|video)\//;
  var pageBridge = createPageBridge();
  var WBI_MIXIN_KEY_ORDER = [
    46,
    47,
    18,
    2,
    53,
    8,
    23,
    32,
    15,
    50,
    10,
    31,
    58,
    3,
    45,
    35,
    27,
    43,
    5,
    49,
    33,
    9,
    42,
    19,
    29,
    28,
    14,
    39,
    12,
    38,
    41,
    13,
    37,
    48,
    7,
    16,
    24,
    55,
    40,
    61,
    26,
    17,
    0,
    1,
    60,
    51,
    30,
    4,
    22,
    25,
    54,
    21,
    56,
    59,
    6,
    63,
    57,
    62,
    11,
    36,
    20,
    34,
    44,
    52
  ];
  var VIDEO_CODECS = [
    { pattern: /(avc1|avc3).*/i, container: "mp4" },
    { pattern: /(hvc1|hev1|hevc|h265|h\.265).*/i, container: "mp4" },
    { pattern: /mp4v\.20.*/i, container: "mp4" },
    { pattern: /av0?1.*/i, container: "webm" },
    { pattern: /vp0?8.*/i, container: "webm" },
    { pattern: /vp0?9.*/i, container: "webm" }
  ];
  var AUDIO_CODECS = [
    { pattern: /(aac|mp4a\.40).*/i, container: "m4a" },
    { pattern: /(\.?mp3|mp4a\.69|mp4a\.6b).*/i, container: "mp3" },
    { pattern: /(opus|mp4a\.ad.*)/i, container: "ogg" },
    { pattern: /vorbis/i, container: "ogg" }
  ];
  function classifyCodec(codecs, definitions) {
    return definitions.find(({ pattern }) => pattern.test(codecs ?? ""))?.container ?? null;
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
    const leftHeight = left.quality.size.kind === "some" ? left.quality.size.value.height : 0;
    const rightHeight = right.quality.size.kind === "some" ? right.quality.size.value.height : 0;
    if (leftHeight !== rightHeight) return rightHeight - leftHeight;
    const leftBitrate = left.quality.bitrate.kind === "some" ? left.quality.bitrate.value : 0;
    const rightBitrate = right.quality.bitrate.kind === "some" ? right.quality.bitrate.value : 0;
    return rightBitrate - leftBitrate;
  }
  function buildPlaylist(audioStreams, videoStreams) {
    const bestAudioByContainer = /* @__PURE__ */ new Map();
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
          size: Number.isFinite(audioStream.size) ? some(audioStream.size) : NONE
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
          size: qualityValue(videoStream.width, videoStream.height)
        },
        demuxer: videoContainer,
        size: combinedSize > 0 ? some(combinedSize) : NONE,
        av: {
          video: videoUrl,
          audio: audio.url
        }
      });
    }
    return playlist.sort(comparePlaylistEntries);
  }
  async function fetchWbiMixinKey() {
    const response = await fetch("https://api.bilibili.com/x/web-interface/nav", {
      credentials: "include"
    });
    if (!response.ok)
      throw new Error(`WBI navigation request failed: ${response.status}`);
    const payload = await response.json();
    const imageUrl = payload?.data?.wbi_img?.img_url;
    const subUrl = payload?.data?.wbi_img?.sub_url;
    if (!imageUrl || !subUrl) throw new Error("WBI image keys are missing");
    const filename = (url) => url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
    const source = `${filename(imageUrl)}${filename(subUrl)}`;
    return WBI_MIXIN_KEY_ORDER.map((index) => source[index]).join("");
  }
  async function resolveBilibiliComIdentity() {
    const bvid = window.location.pathname.match(
      /\/video\/(BV[0-9A-Za-z]+)/i
    )?.[1];
    if (bvid) {
      try {
        const response = await fetch(
          `https://api.bilibili.com/x/player/pagelist?bvid=${encodeURIComponent(bvid)}`,
          { credentials: "include" }
        );
        if (response.ok) {
          const payload = await response.json();
          const pages = payload?.data;
          const requestedPage = Math.max(
            1,
            Number.parseInt(
              new URL(window.location.href).searchParams.get("p") ?? "1",
              10
            ) || 1
          );
          const page = Array.isArray(pages) ? pages[requestedPage - 1] ?? pages[0] : null;
          if (page?.cid) return { bvid, cid: page.cid };
        }
      } catch (error) {
        console.warn(
          "Bilibili pagelist lookup failed; falling back to page state",
          error
        );
      }
    }
    return pageBridge.requestFromPage(
      { name: "bilibili_com_request_id", data: null },
      "bilibili_com_on_id",
      15e3
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
      wts: String(Math.round(Date.now() / 1e3))
    });
    const mixinKey = await fetchWbiMixinKey();
    search.set("w_rid", (0, import_blueimp_md5.default)(`${search.toString()}${mixinKey}`));
    const response = await fetch(
      `https://api.bilibili.com/x/player/wbi/playurl?${search}`,
      {
        credentials: "include"
      }
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
      "bilibili_tv_on_config"
    );
    const search = new URLSearchParams({
      s_locale: "en_US",
      platform: "web",
      qn: "120",
      type: "0",
      device: "wap",
      tf: "0",
      spm_id: "bstar-web.pgc-video-detail.0.0",
      from_spm_id: "bstar-web.homepage.recommend.all"
    });
    if (identity.ep_id) search.set("ep_id", identity.ep_id);
    else if (identity.ai_id) search.set("aid", identity.ai_id);
    else throw new Error("No episode or video ID was found");
    const response = await fetch(
      `https://api.bilibili.tv/intl/gateway/web/playurl?${search}`,
      { credentials: "include" }
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
      duration
    };
  }
  async function detectCurrentVideo() {
    const currentUrl = window.location.href;
    if (!BILIBILI_COM_VIDEO.test(currentUrl) && !BILIBILI_TV_VIDEO.test(currentUrl))
      return;
    let audioStreams;
    let videoStreams;
    let duration = "unknown";
    if (BILIBILI_COM_VIDEO.test(currentUrl)) {
      const payload = await requestBilibiliComPlayData();
      audioStreams = payload.data.dash.audio;
      videoStreams = payload.data.dash.video;
      if (Number.isFinite(payload.data.timelength))
        duration = payload.data.timelength / 1e3;
    } else {
      const payload = await requestBilibiliTvPlayData();
      audioStreams = payload?.data?.playurl?.audio_resource;
      videoStreams = payload?.data?.playurl?.video?.map(
        (entry) => entry.video_resource
      );
    }
    const playlist = buildPlaylist(audioStreams, videoStreams);
    if (playlist.length === 0)
      throw new Error("No compatible Bilibili audio/video pairs found");
    await reportMedia(createMedia(playlist, duration));
  }
  function scheduleDetection() {
    setTimeout(() => {
      detectCurrentVideo().catch(
        (error) => console.warn("Bilibili media detection failed", error)
      );
    }, 1e3);
  }
  detectCurrentVideo().catch(
    (error) => console.warn("Bilibili media detection failed", error)
  );
  var previousUrl = window.location.href;
  new MutationObserver(() => {
    if (previousUrl === window.location.href) return;
    previousUrl = window.location.href;
    scheduleDetection();
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
//# sourceMappingURL=bilibili.js.map
