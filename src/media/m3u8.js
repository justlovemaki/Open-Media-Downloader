const SUBTITLE_EXTENSIONS = new Set(["vtt", "srt", "webvtt", "ttml"]);

export function inspectMediaPlaylist(source) {
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
        line.slice("#EXT-X-PROGRAM-DATE-TIME:".length),
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
    const extension = pathname
      .slice(pathname.lastIndexOf(".") + 1)
      .toLowerCase();
    return SUBTITLE_EXTENSIONS.has(extension);
  });

  if (subtitleOnly) {
    throw new Error("The response is a subtitle playlist");
  }

  const looksLive =
    lastProgramDateTime !== null &&
    lastProgramDateTime > Date.now() - 10 * 60 * 1000;

  return {
    duration: looksLive
      ? "live"
      : segmentDurations.reduce((total, duration) => total + duration, 0) ||
        "unknown",
    segmentCount: segmentUrls.length,
  };
}
