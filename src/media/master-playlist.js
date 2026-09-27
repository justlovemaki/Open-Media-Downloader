import { NONE, some } from "../shared/option.js";
import { asUrl } from "../shared/url.js";

const VIDEO_CODECS = [
  {
    pattern: /(avc1|avc3|hvc1|hev1|hevc|h265|h\.265|mp4v\.20)/i,
    container: "mp4",
  },
  { pattern: /(av0?1|vp0?8|vp0?9)/i, container: "webm" },
];

function parseAttributeList(source) {
  const attributes = {};
  const pattern = /(?:^|,)([^=,]+)=("[^"]*"|[^,]*)/g;
  let match;

  while ((match = pattern.exec(source))) {
    const key = match[1].trim();
    const rawValue = match[2].trim().replace(/^"|"$/g, "");
    attributes[key] = rawValue;
  }

  return attributes;
}

function parseResolution(value) {
  const match = String(value ?? "").match(/^(\d+)x(\d+)$/i);
  return match
    ? some({ width: Number(match[1]), height: Number(match[2]) })
    : NONE;
}

function classifyVideoContainer(codecs) {
  return (
    VIDEO_CODECS.find(({ pattern }) => pattern.test(codecs ?? ""))?.container ??
    "mp4"
  );
}

function compareEntries(left, right) {
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

export function parseMasterPlaylist(source, masterUrl, options = {}) {
  const lines = source.split(/\r?\n/).map((line) => line.trim());
  const audioGroups = new Map();

  for (const line of lines) {
    if (!line.startsWith("#EXT-X-MEDIA:")) continue;
    const attributes = parseAttributeList(line.slice("#EXT-X-MEDIA:".length));
    if (
      attributes.TYPE !== "AUDIO" ||
      !attributes["GROUP-ID"] ||
      !attributes.URI
    )
      continue;

    const track = {
      url: asUrl(attributes.URI, masterUrl),
      language: attributes.LANGUAGE || null,
      isDefault: attributes.DEFAULT === "YES",
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
      line.slice("#EXT-X-STREAM-INF:".length),
    );
    const uri = lines
      .slice(index + 1)
      .find((candidate) => candidate && !candidate.startsWith("#"));
    const videoUrl = asUrl(uri, masterUrl);
    if (!videoUrl) continue;

    const audioTracks = audioGroups.get(attributes.AUDIO) ?? [];
    const preferredLanguages = options.preferredAudioLanguages ?? new Set();
    const audioTrack =
      audioTracks.find(
        (track) => track.language && preferredLanguages.has(track.language),
      ) ??
      audioTracks.find((track) => track.isDefault) ??
      audioTracks[0];
    const bandwidth = Number(attributes.BANDWIDTH);

    playlist.push({
      demuxer: classifyVideoContainer(attributes.CODECS),
      quality: {
        size: parseResolution(attributes.RESOLUTION),
        bitrate: Number.isFinite(bandwidth) ? some(bandwidth) : NONE,
      },
      av: {
        video: videoUrl,
        audio: audioTrack?.url ?? false,
      },
      audio_language: audioTrack?.language ? some(audioTrack.language) : NONE,
    });
  }

  return playlist.sort(compareEntries);
}
