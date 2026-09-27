function optionValue(option) {
  return option?.kind === "some" ? option.value : null;
}

export function primaryMediaUrl(media) {
  try {
    if (media.type === "http_playlist")
      return media.playlist?.[0]?.av?.video ?? null;
    if (media.type === "m3u8") return media.url;
  } catch {}
  return null;
}

function mediaTokens(media) {
  const url = primaryMediaUrl(media);
  if (!url) return new Set();

  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname).toLowerCase();
  } catch {
    pathname = url.pathname.toLowerCase();
  }

  return new Set(
    pathname
      .split(/[^a-z0-9]+/)
      .filter(
        (token) =>
          token.length >= 8 &&
          !/^(playlist|manifest|master|video|index)$/.test(token),
      ),
  );
}

export function isSameGenericVideo(left, right) {
  const leftInitiator = optionValue(left.initiator);
  const rightInitiator = optionValue(right.initiator);
  if (
    !leftInitiator ||
    !rightInitiator ||
    leftInitiator.href !== rightInitiator.href
  ) {
    return false;
  }

  const genericTypes = new Set(["http_playlist", "m3u8"]);
  if (!genericTypes.has(left.type) || !genericTypes.has(right.type))
    return false;
  if (
    left.type === "http_playlist" &&
    right.type === "http_playlist" &&
    left.extension !== right.extension
  ) {
    return false;
  }
  if (
    left.type === "m3u8" &&
    right.type === "m3u8" &&
    left.demuxer !== right.demuxer
  ) {
    return false;
  }
  if (
    Math.abs(
      (left.discovery_timestamp_ms ?? 0) - (right.discovery_timestamp_ms ?? 0),
    ) > 60_000
  ) {
    return false;
  }

  const leftUrl = primaryMediaUrl(left);
  const rightUrl = primaryMediaUrl(right);
  if (!leftUrl || !rightUrl) return false;
  if (leftUrl.pathname === rightUrl.pathname) return true;

  const rightTokens = mediaTokens(right);
  if ([...mediaTokens(left)].some((token) => rightTokens.has(token)))
    return true;

  const sameTitle =
    optionValue(left.title) !== null &&
    optionValue(left.title) === optionValue(right.title);
  const sameDuration =
    typeof left.duration === "number" &&
    typeof right.duration === "number" &&
    Math.abs(left.duration - right.duration) < 1;
  return sameTitle && sameDuration;
}

export function mediaQualityScore(media) {
  const url = primaryMediaUrl(media);
  let score = 0;

  if (url) {
    const explicitQualities = url.href.match(
      /(?:2160|1440|1080|720|480|360)p?/gi,
    );
    if (explicitQualities) {
      score =
        Math.max(
          ...explicitQualities.map((quality) => Number.parseInt(quality) || 0),
        ) * 1e12;
    }

    let decodedUrl;
    try {
      decodedUrl = decodeURIComponent(url.href);
    } catch {
      decodedUrl = url.href;
    }
    const bid = decodedUrl.match(
      /[?&]bid=(100|200|300|500|600|610|700|800)(?:&|$)/i,
    )?.[1];
    if (bid) {
      const heightByBid = {
        100: 240,
        200: 360,
        300: 540,
        500: 720,
        600: 1080,
        610: 1080,
        700: 1440,
        800: 2160,
      };
      score = Math.max(score, (heightByBid[bid] ?? 0) * 1e12);
    }
  }

  if (media.type === "http_playlist") {
    const entry = media.playlist?.[0];
    score += (optionValue(entry?.quality?.size)?.height ?? 0) * 1e12;
    score += (optionValue(entry?.quality?.bitrate) ?? 0) * 1e4;
    score += optionValue(entry?.size) ?? 0;
  }

  return score;
}

export function upsertDiscoveredMedia(mediaMap, incomingMedia, options = {}) {
  if (["http_playlist", "m3u8"].includes(incomingMedia.type)) {
    for (const [hash, existingMedia] of [...mediaMap.entries()]) {
      if (!isSameGenericVideo(incomingMedia, existingMedia)) continue;
      if (
        options.isProtected?.(existingMedia) ||
        mediaQualityScore(existingMedia) >= mediaQualityScore(incomingMedia)
      ) {
        return false;
      }
      mediaMap.delete(hash);
    }
  }

  mediaMap.set(incomingMedia.hash, incomingMedia);

  if (incomingMedia.type === "m3u8_playlist") {
    const componentUrls = new Set();
    for (const entry of incomingMedia.playlist) {
      if (entry.av.audio) componentUrls.add(entry.av.audio.href);
      if (entry.av.video) componentUrls.add(entry.av.video.href);
    }
    for (const [hash, media] of mediaMap.entries()) {
      if (media.type === "m3u8" && componentUrls.has(media.url.href)) {
        mediaMap.delete(hash);
      }
    }
  }

  return true;
}
