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
  function createMainWorldBridge(pageUrl = window.location.href) {
    const channel = new BroadcastChannel(`injected-${hashString(pageUrl)}`);
    function postToContent(message) {
      channel.postMessage({
        msg: message,
        channel: MessageChannel.FROM_PAGE_TO_CONTENT
      });
    }
    function onMessageFromContent(listener) {
      const eventListener = (event) => {
        if (event.data?.channel === MessageChannel.FROM_CONTENT_TO_PAGE) {
          listener(event.data.msg);
        }
      };
      channel.addEventListener("message", eventListener);
      return () => channel.removeEventListener("message", eventListener);
    }
    return { postToContent, onMessageFromContent };
  }

  // src/injected/xgplayer/main.js
  var AES_BLOCK_SIZE = 16;
  var PLAYLIST_MARKERS = [
    "#EXT-X-VERSION",
    "#EXT-X-STREAM-INF",
    "#EXTINF",
    "#EXT-X-TARGETDURATION",
    "#EXT-X-MEDIA-SEQUENCE"
  ];
  var textDecoder = new TextDecoder();
  var textEncoder = new TextEncoder();
  var pageBridge = createMainWorldBridge();
  var latestManifest;
  var latestManifestUrl;
  function bytesToBinaryString(bytes) {
    let output = "";
    for (let offset = 0; offset < bytes.length; offset += 32768) {
      output += String.fromCharCode(...bytes.subarray(offset, offset + 32768));
    }
    return output;
  }
  function decodeBase64Bytes(bytes, strict) {
    let source = bytesToBinaryString(bytes).replace(/\s/g, "").replace(/-/g, "+").replace(/_/g, "/");
    const remainder = source.length % 4;
    if (strict && remainder === 1) throw new Error("Invalid base64 length");
    if (remainder === 2) source += "==";
    else if (remainder === 3) source += "=";
    const decoded = atob(source);
    return Uint8Array.from(decoded, (character) => character.charCodeAt(0));
  }
  var BASE64_DECODERS = [
    (bytes) => decodeBase64Bytes(bytes, false),
    (bytes) => decodeBase64Bytes(bytes, true)
  ];
  function xtime(value) {
    value <<= 1;
    return value & 256 ? (value ^ 283) & 255 : value & 255;
  }
  function multiplyGalois(left, right) {
    let result = 0;
    while (right) {
      if (right & 1) result ^= left;
      left = xtime(left);
      right >>= 1;
    }
    return result & 255;
  }
  var AES_SBOX = new Uint8Array(256);
  var AES_INVERSE_SBOX = new Uint8Array(256);
  {
    const exponent = new Uint8Array(256);
    const logarithm = new Uint8Array(256);
    let value = 1;
    for (let index = 0; index < 255; index += 1) {
      exponent[index] = value;
      logarithm[value] = index;
      value ^= xtime(value);
    }
    const inverse = (entry) => entry === 0 ? 0 : exponent[(255 - logarithm[entry]) % 255];
    for (let index = 0; index < 256; index += 1) {
      const entry = inverse(index);
      AES_SBOX[index] = (entry ^ (entry << 1 | entry >> 7) ^ (entry << 2 | entry >> 6) ^ (entry << 3 | entry >> 5) ^ (entry << 4 | entry >> 4) ^ 99) & 255;
    }
    for (let index = 0; index < 256; index += 1) {
      AES_INVERSE_SBOX[AES_SBOX[index]] = index;
    }
  }
  function expandAesKey(key) {
    const keyWords = key.length / 4;
    const rounds = keyWords + 6;
    const words = new Array(4 * (rounds + 1));
    for (let index = 0; index < keyWords; index += 1) {
      words[index] = [
        key[4 * index],
        key[4 * index + 1],
        key[4 * index + 2],
        key[4 * index + 3]
      ];
    }
    let roundConstant = 1;
    for (let index = keyWords; index < 4 * (rounds + 1); index += 1) {
      let word = words[index - 1].slice();
      if (index % keyWords === 0) {
        word = [
          AES_SBOX[word[1]],
          AES_SBOX[word[2]],
          AES_SBOX[word[3]],
          AES_SBOX[word[0]]
        ];
        word[0] ^= roundConstant;
        roundConstant = xtime(roundConstant);
      } else if (keyWords > 6 && index % keyWords === 4) {
        word = word.map((entry) => AES_SBOX[entry]);
      }
      const previous = words[index - keyWords];
      words[index] = previous.map((entry, wordIndex) => entry ^ word[wordIndex]);
    }
    return { words, rounds };
  }
  function addRoundKey(state, words, round) {
    for (let column = 0; column < 4; column += 1) {
      const word = words[4 * round + column];
      for (let row = 0; row < 4; row += 1) {
        state[row + 4 * column] ^= word[row];
      }
    }
  }
  function shiftRows(state) {
    const copy = state.slice();
    for (let row = 0; row < 4; row += 1) {
      for (let column = 0; column < 4; column += 1) {
        state[row + 4 * column] = copy[row + 4 * ((column + row) % 4)];
      }
    }
  }
  function inverseShiftRows(state) {
    const copy = state.slice();
    for (let row = 0; row < 4; row += 1) {
      for (let column = 0; column < 4; column += 1) {
        state[row + 4 * column] = copy[row + 4 * ((column - row + 4) % 4)];
      }
    }
  }
  function mixColumns(state) {
    for (let column = 0; column < 4; column += 1) {
      const offset = 4 * column;
      const a = state[offset];
      const b = state[offset + 1];
      const c = state[offset + 2];
      const d = state[offset + 3];
      state[offset] = xtime(a) ^ (xtime(b) ^ b) ^ c ^ d;
      state[offset + 1] = a ^ xtime(b) ^ (xtime(c) ^ c) ^ d;
      state[offset + 2] = a ^ b ^ xtime(c) ^ (xtime(d) ^ d);
      state[offset + 3] = xtime(a) ^ a ^ b ^ c ^ xtime(d);
    }
  }
  function inverseMixColumns(state) {
    for (let column = 0; column < 4; column += 1) {
      const offset = 4 * column;
      const a = state[offset];
      const b = state[offset + 1];
      const c = state[offset + 2];
      const d = state[offset + 3];
      state[offset] = multiplyGalois(a, 14) ^ multiplyGalois(b, 11) ^ multiplyGalois(c, 13) ^ multiplyGalois(d, 9);
      state[offset + 1] = multiplyGalois(a, 9) ^ multiplyGalois(b, 14) ^ multiplyGalois(c, 11) ^ multiplyGalois(d, 13);
      state[offset + 2] = multiplyGalois(a, 13) ^ multiplyGalois(b, 9) ^ multiplyGalois(c, 14) ^ multiplyGalois(d, 11);
      state[offset + 3] = multiplyGalois(a, 11) ^ multiplyGalois(b, 13) ^ multiplyGalois(c, 9) ^ multiplyGalois(d, 14);
    }
  }
  function encryptAesBlock(block, schedule) {
    const state = block.slice();
    addRoundKey(state, schedule.words, 0);
    for (let round = 1; round < schedule.rounds; round += 1) {
      for (let index = 0; index < AES_BLOCK_SIZE; index += 1) {
        state[index] = AES_SBOX[state[index]];
      }
      shiftRows(state);
      mixColumns(state);
      addRoundKey(state, schedule.words, round);
    }
    for (let index = 0; index < AES_BLOCK_SIZE; index += 1) {
      state[index] = AES_SBOX[state[index]];
    }
    shiftRows(state);
    addRoundKey(state, schedule.words, schedule.rounds);
    return state;
  }
  function decryptAesBlock(block, schedule) {
    const state = block.slice();
    addRoundKey(state, schedule.words, schedule.rounds);
    for (let round = schedule.rounds - 1; round >= 1; round -= 1) {
      inverseShiftRows(state);
      for (let index = 0; index < AES_BLOCK_SIZE; index += 1) {
        state[index] = AES_INVERSE_SBOX[state[index]];
      }
      addRoundKey(state, schedule.words, round);
      inverseMixColumns(state);
    }
    inverseShiftRows(state);
    for (let index = 0; index < AES_BLOCK_SIZE; index += 1) {
      state[index] = AES_INVERSE_SBOX[state[index]];
    }
    addRoundKey(state, schedule.words, 0);
    return state;
  }
  function xorBytes(left, right, length) {
    const output = new Uint8Array(length);
    for (let index = 0; index < length; index += 1)
      output[index] = left[index] ^ right[index];
    return output;
  }
  function removePkcs7Padding(bytes) {
    if (bytes.length === 0) return bytes;
    const padding = bytes.at(-1);
    return padding < 1 || padding > AES_BLOCK_SIZE || padding > bytes.length ? bytes : bytes.subarray(0, bytes.length - padding);
  }
  function decryptAes(mode, ciphertext, key, iv) {
    if (![16, 24, 32].includes(key.length)) {
      throw new Error(
        `Invalid AES key length: ${key.length} (expected 16/24/32)`
      );
    }
    if (mode === "ECB") {
      if (iv?.length) throw new Error("IV must not be provided for AES-ECB");
    } else if (!iv || iv.length !== AES_BLOCK_SIZE) {
      throw new Error(`A ${AES_BLOCK_SIZE}-byte IV is required for AES-${mode}`);
    }
    const schedule = expandAesKey(key);
    const output = new Uint8Array(ciphertext.length);
    let previous = iv ? iv.slice() : new Uint8Array(AES_BLOCK_SIZE);
    for (let offset = 0; offset < ciphertext.length; offset += AES_BLOCK_SIZE) {
      const length = Math.min(AES_BLOCK_SIZE, ciphertext.length - offset);
      const block = ciphertext.subarray(offset, offset + length);
      if (mode === "ECB") {
        output.set(decryptAesBlock(block, schedule).subarray(0, length), offset);
      } else if (mode === "CBC") {
        output.set(
          xorBytes(decryptAesBlock(block, schedule), previous, length),
          offset
        );
        previous = block.slice();
      } else if (mode === "CFB") {
        output.set(
          xorBytes(block, encryptAesBlock(previous, schedule), length),
          offset
        );
        previous = block.slice();
      } else if (mode === "OFB") {
        previous = encryptAesBlock(previous, schedule);
        output.set(xorBytes(block, previous, length), offset);
      }
    }
    return removePkcs7Padding(output);
  }
  function xorWithRepeatingKey(bytes, key) {
    const normalizedKey = key.byteOffset === 0 && key.byteLength === key.buffer.byteLength ? key : key.slice();
    if (normalizedKey.length === 0) throw new Error("XOR key must not be empty");
    return Uint8Array.from(
      bytes,
      (value, index) => value ^ normalizedKey[index % normalizedKey.length]
    );
  }
  function isAsciiDigit(value) {
    return value >= 48 && value <= 57;
  }
  function readDecimal(bytes, offset, length) {
    if (offset + length > bytes.length) return { value: 0, ok: false };
    for (let index = offset; index < offset + length; index += 1) {
      if (!isAsciiDigit(bytes[index])) return { value: 0, ok: false };
    }
    const value = Number.parseInt(
      textDecoder.decode(bytes.subarray(offset, offset + length)),
      10
    );
    return { value: Number.isFinite(value) && value >= 0 ? value : 0, ok: true };
  }
  function parseEncryptedEnvelope(bytes) {
    if (bytes.length < 3) return null;
    const prefix = textDecoder.decode(
      bytes.slice(0, Math.min(100, bytes.length))
    );
    if (looksLikePlaylist(prefix)) return null;
    const lengthOffset = bytes.length - 2;
    for (let index = lengthOffset; index < bytes.length; index += 1) {
      if (!isAsciiDigit(bytes[index])) return null;
    }
    const metadataLength = Number.parseInt(
      textDecoder.decode(bytes.subarray(lengthOffset)),
      10
    );
    if (!Number.isFinite(metadataLength) || metadataLength <= 0) return null;
    const metadataStart = lengthOffset - metadataLength;
    if (metadataStart < 0 || metadataLength > bytes.length / 2) return null;
    const metadata = bytes.subarray(metadataStart, lengthOffset);
    let cursor = 0;
    const tag = String.fromCharCode(metadata[cursor], metadata[cursor + 1]);
    cursor += 2;
    if (!["AA", "AB", "AC", "AD", "AE", "AF"].includes(tag)) return null;
    const keyLength = readDecimal(metadata, cursor, 2);
    if (!keyLength.ok) return null;
    cursor += 2;
    if (cursor + keyLength.value > metadata.length) return null;
    const key = keyLength.value > 0 ? metadata.slice(cursor, cursor + keyLength.value) : void 0;
    cursor += keyLength.value;
    const ivLength = readDecimal(metadata, cursor, 2);
    if (!ivLength.ok) return null;
    cursor += 2;
    if (cursor + ivLength.value > metadata.length) return null;
    const iv = ivLength.value > 0 ? metadata.slice(cursor, cursor + ivLength.value) : void 0;
    cursor += ivLength.value;
    return cursor === metadata.length ? { tag, key, iv, body: bytes.subarray(0, metadataStart) } : null;
  }
  function decryptEnvelope(envelope) {
    const body = BASE64_DECODERS[0](envelope.body);
    if (envelope.tag === "AA") return BASE64_DECODERS[0](body);
    if (envelope.tag === "AB") return xorWithRepeatingKey(body, envelope.key);
    if (envelope.tag === "AC") return decryptAes("ECB", body, envelope.key);
    const mode = envelope.tag === "AD" ? "CBC" : envelope.tag === "AE" ? "CFB" : "OFB";
    return decryptAes(mode, body, envelope.key, BASE64_DECODERS[1](envelope.iv));
  }
  function normalizePlaylist(source) {
    return source.replace(/^\uFEFF/, "").replace(/^\s+/, "");
  }
  function couldBeBase64(source) {
    return /^[\w+/=\- \r\n\t]+$/.test(source) && source.length > 20;
  }
  function looksLikePlaylist(source) {
    const trimmed = source.trim();
    return trimmed.startsWith("#EXTM3U") && PLAYLIST_MARKERS.some((marker) => trimmed.includes(marker));
  }
  function unwrapPlaylist(bytes) {
    const plainText = textDecoder.decode(bytes);
    if (looksLikePlaylist(plainText)) return normalizePlaylist(plainText);
    if (couldBeBase64(plainText)) {
      const encodedText = textEncoder.encode(plainText);
      for (const decode of BASE64_DECODERS) {
        try {
          const candidate = textDecoder.decode(decode(encodedText));
          if (looksLikePlaylist(candidate)) return normalizePlaylist(candidate);
        } catch {
        }
      }
    }
    try {
      let envelope = parseEncryptedEnvelope(bytes);
      if (!envelope && couldBeBase64(plainText)) {
        const encodedText = textEncoder.encode(plainText);
        for (const decode of BASE64_DECODERS) {
          try {
            envelope = parseEncryptedEnvelope(decode(encodedText));
            if (envelope) break;
          } catch {
          }
        }
      }
      if (envelope) {
        const candidate = textDecoder.decode(decryptEnvelope(envelope));
        if (looksLikePlaylist(candidate)) return normalizePlaylist(candidate);
      }
    } catch {
    }
    return null;
  }
  function publishLatestManifest() {
    if (!latestManifest || !latestManifestUrl) return;
    pageBridge.postToContent({
      name: "91porna_on_config",
      data: { m3u8: latestManifest, url: latestManifestUrl }
    });
  }
  async function inspectManifestUrl(url) {
    if (typeof url !== "string" || !url.includes(".m3u8")) return;
    try {
      const response = await fetch(url);
      const decoded = unwrapPlaylist(
        new Uint8Array(await response.arrayBuffer())
      );
      if (decoded) {
        latestManifest = decoded;
        latestManifestUrl = url;
        publishLatestManifest();
      }
    } catch (error) {
      console.warn("XGPlayer playlist decoding failed", error);
    }
  }
  pageBridge.onMessageFromContent((message) => {
    if (message?.name === "91porna_request_config") publishLatestManifest();
  });
  var inspectedUrls = /* @__PURE__ */ new Set();
  function scheduleInspection(url) {
    if (typeof url !== "string" || !url.includes(".m3u8") || inspectedUrls.has(url))
      return;
    inspectedUrls.add(url);
    inspectManifestUrl(url);
  }
  var originalFetch = window.fetch;
  window.fetch = function(input, init) {
    scheduleInspection(typeof input === "string" ? input : input?.url);
    return originalFetch.call(window, input, init);
  };
  var originalXhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    scheduleInspection(typeof url === "string" ? url : url.toString());
    return originalXhrOpen.apply(this, [method, url, ...rest]);
  };
})();
//# sourceMappingURL=xgplayer_crypto_untrusted.js.map
