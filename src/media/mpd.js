import { parse } from "mpd-parser";

import { NONE, some } from "../shared/option.js";

const DRM_KEY_SYSTEMS = new Set([
  "com.microsoft.playready",
  "com.apple.streamingkeydelivery",
  "com.widevine.alpha",
]);

function classifyContainer(codecs) {
  if (/(avc1|avc3|hvc1|hev1|hevc|h265|h\.265|mp4v\.20)/i.test(codecs ?? "")) {
    return "mp4";
  }
  if (/(av0?1|vp0?8|vp0?9)/i.test(codecs ?? "")) return "webm";
  if (/(aac|mp4a\.40)/i.test(codecs ?? "")) return "m4a";
  if (/(mp3|mp4a\.69|mp4a\.6b)/i.test(codecs ?? "")) return "mp3";
  if (/(opus|vorbis|mp4a\.ad)/i.test(codecs ?? "")) return "ogg";
  return null;
}

function hasDrm(manifest) {
  return (manifest.playlists ?? []).some((playlist) =>
    Object.keys(playlist.contentProtection ?? {}).some((keySystem) =>
      DRM_KEY_SYSTEMS.has(keySystem),
    ),
  );
}

function flattenMediaGroup(group) {
  return Object.values(group ?? {}).flatMap((entries) =>
    Object.values(entries ?? {}),
  );
}

function selectAudioTrack(manifest, preferredLanguages) {
  const tracks = flattenMediaGroup(manifest.mediaGroups?.AUDIO);
  return (
    tracks.find(
      (track) => track.language && preferredLanguages.has(track.language),
    ) ??
    tracks.find((track) => track.default) ??
    tracks[0] ??
    null
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

export function parseMpdPlaylist(source, options = {}) {
  const manifest = parse(source, {
    manifestUri: options.manifestUri ?? "",
  });
  const preferredLanguages = options.preferredAudioLanguages ?? new Set();
  const audioTrack = selectAudioTrack(manifest, preferredLanguages);

  let playlists = manifest.playlists ?? [];
  if (playlists.length === 0 && audioTrack?.playlists)
    playlists = audioTrack.playlists;

  const entries = [];
  let index = 0;
  for (const playlist of playlists) {
    const attributes = playlist.attributes ?? {};
    const container = classifyContainer(attributes.CODECS);
    if (!container) continue;

    const resolution = attributes.RESOLUTION;
    const bandwidth = Number(attributes.BANDWIDTH);
    entries.push({
      quality: {
        bitrate: Number.isFinite(bandwidth) ? some(bandwidth) : NONE,
        size:
          resolution?.width && resolution?.height
            ? some({ width: resolution.width, height: resolution.height })
            : NONE,
      },
      demuxer: container,
      index,
      audio_id: audioTrack?.playlists?.[0]?.attributes?.NAME
        ? some(audioTrack.playlists[0].attributes.NAME)
        : NONE,
      audio_language: audioTrack?.language ? some(audioTrack.language) : NONE,
    });
    index += 1;
  }

  return {
    duration: manifest.duration || "unknown",
    hasDrm: hasDrm(manifest),
    playlist: entries.sort(compareEntries),
    manifest,
  };
}
