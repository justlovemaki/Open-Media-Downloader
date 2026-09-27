import { NONE, some } from "../shared/option.js";

function optionValue(option, fallback = null) {
  return option?.kind === "some" ? option.value : fallback;
}

function videoMuxer(demuxer, preferredMuxer) {
  if (demuxer === "mp4") return preferredMuxer;
  if (demuxer === "webm" || demuxer === "mkv") return "mkv";
  throw new Error(`Unsupported video demuxer: ${demuxer}`);
}

function audioMuxer(demuxer) {
  if (["mp3", "m4a", "ogg"].includes(demuxer)) return "mp3";
  throw new Error(`Unsupported audio demuxer: ${demuxer}`);
}

function chooseSubtitle(subtitles, preferredLanguages) {
  const tracks = optionValue(subtitles, []);
  if (tracks.length === 0) return NONE;

  for (const language of preferredLanguages) {
    const exact = tracks.find((track) => track.language === language);
    if (exact) return some(exact);
  }
  for (const language of preferredLanguages) {
    const baseLanguage = language.split("-")[0];
    const compatible = tracks.find(
      (track) => track.language.split("-")[0] === baseLanguage,
    );
    if (compatible) return some(compatible);
  }
  return NONE;
}

function commonArguments(media, options, extension) {
  return {
    download_id: `download_${crypto.randomUUID()}`,
    headers: media.sent_headers,
    good_basename: options.basename,
    subdir: options.subdir,
    save_as: options.saveAs,
    extension,
    is_youtube: media.is_youtube,
    throttle: Boolean(media.is_youtube && options.persistent.youtube_throttle),
    cache: media.cache,
  };
}

function buildMpdArguments(media, options, entry) {
  const common = commonArguments(
    media,
    options,
    options.audioOnly ? "mp3" : options.persistent.preferred_av_muxer,
  );

  if (options.audioOnly || ["mp3", "m4a", "ogg"].includes(entry.demuxer)) {
    return {
      ...common,
      will_use_jsfetch: true,
      muxer: "mp3",
      strategy: "mpd_audio_only",
      url: media.master_url,
      carry_get_params: options.carryGetParams(media.master_url),
      entry: entry.index,
      duration: media.duration,
      audio_language: entry.audio_language,
      audio_track_id: entry.audio_id,
    };
  }

  return {
    ...common,
    will_use_jsfetch: true,
    muxer: options.persistent.preferred_av_muxer,
    strategy: "mpd_audio_video_one_source",
    url: media.master_url,
    carry_get_params: options.carryGetParams(media.master_url),
    entry: entry.index,
    duration: media.duration,
    subtitles: chooseSubtitle(
      media.subtitles,
      options.persistent.subtitle_languages,
    ),
    audio_language: entry.audio_language,
    audio_track_id: entry.audio_id,
  };
}

function buildYoutubeArguments(media, options, entry) {
  const stream = media.playlist[entry];
  if (!stream) throw new Error(`Missing YouTube playlist entry: ${entry}`);

  if (stream.av.video === false || options.audioOnly) {
    const source = stream.av.audio || stream.av.video;
    if (!source)
      throw new Error("The selected YouTube entry has no audio source");
    return {
      ...commonArguments(media, options, "mp3"),
      will_use_jsfetch: false,
      strategy: "youtube_audio_only",
      muxer: "mp3",
      url: source.url,
      carry_get_params: options.carryGetParams(source.url),
      content_length: source.content_length,
      duration: media.duration,
      audio_language: stream.audio_language,
    };
  }

  const muxer = videoMuxer(
    stream.demuxer,
    options.persistent.preferred_av_muxer,
  );
  const subtitles = chooseSubtitle(
    media.subtitles,
    options.persistent.subtitle_languages,
  );
  const common = {
    ...commonArguments(media, options, muxer),
    will_use_jsfetch: false,
    muxer,
    url: stream.av.video.url,
    carry_get_params: options.carryGetParams(stream.av.video.url),
    content_length: stream.av.video.content_length,
    duration: media.duration,
    subtitles,
    audio_language: stream.audio_language,
  };

  return stream.av.audio
    ? {
        ...common,
        strategy: "youtube_audio_video_two_sources",
        url_audio: stream.av.audio.url,
        audio_content_length: stream.av.audio.content_length,
      }
    : { ...common, strategy: "youtube_audio_video_one_source" };
}

function buildHlsPlaylistArguments(media, options, entry) {
  const stream = media.playlist[entry];
  if (!stream) throw new Error(`Missing HLS playlist entry: ${entry}`);
  const duration = media.duration;

  if (stream.av.video === false || options.audioOnly) {
    const source = stream.av.audio || stream.av.video;
    if (!source) throw new Error("The selected HLS entry has no audio source");
    return {
      ...commonArguments(media, options, "mp3"),
      duration,
      will_use_jsfetch: false,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: source,
      carry_get_params: options.carryGetParams(source),
      audio_language: stream.audio_language,
    };
  }

  const muxer = videoMuxer(
    stream.demuxer,
    options.persistent.preferred_av_muxer,
  );
  const common = {
    ...commonArguments(media, options, muxer),
    muxer,
    duration,
    will_use_jsfetch: false,
    url: stream.av.video,
    carry_get_params: options.carryGetParams(stream.av.video),
    subtitles: chooseSubtitle(
      media.subtitles,
      options.persistent.subtitle_languages,
    ),
    audio_language: stream.audio_language,
  };

  return stream.av.audio
    ? {
        ...common,
        strategy: "m3u8_audio_video_two_sources",
        url_audio: stream.av.audio,
      }
    : { ...common, strategy: "m3u8_audio_video_one_source" };
}

function buildDirectHlsArguments(media, options) {
  if (options.audioOnly || ["mp3", "m4a", "ogg"].includes(media.demuxer)) {
    return {
      ...commonArguments(media, options, "mp3"),
      duration: media.duration,
      will_use_jsfetch: true,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: media.url,
      carry_get_params: options.carryGetParams(media.url),
      audio_language: NONE,
    };
  }

  const muxer = videoMuxer(
    media.demuxer,
    options.persistent.preferred_av_muxer,
  );
  return {
    ...commonArguments(media, options, muxer),
    duration: media.duration,
    will_use_jsfetch: true,
    strategy: "m3u8_audio_video_one_source",
    muxer,
    url: media.url,
    carry_get_params: options.carryGetParams(media.url),
    subtitles: chooseSubtitle(
      media.subtitles,
      options.persistent.subtitle_languages,
    ),
    audio_language: NONE,
  };
}

function buildHttpArguments(media, options, entry) {
  const stream = media.playlist[entry];
  if (!stream) throw new Error(`Missing HTTP playlist entry: ${entry}`);

  if (options.audioOnly) {
    const source = stream.av.audio || stream.av.video;
    return {
      ...commonArguments(media, options, "mp3"),
      will_use_jsfetch: true,
      strategy: "http_strip_audio_jsfetch",
      url: source,
      carry_get_params: options.carryGetParams(source),
      muxer: "mp3",
      size: stream.av.audio ? NONE : stream.size,
    };
  }

  const byteRangeCompatible =
    (media.libav_demuxer?.kind === "some" &&
      ["mp4", "webm", "mkv"].includes(media.libav_demuxer.value) &&
      media.supports_byte_ranges) ||
    (media.extension === "flv" && stream.size?.kind === "none");

  if (!byteRangeCompatible) {
    return {
      ...commonArguments(media, options, media.extension),
      will_use_jsfetch: false,
      strategy: "http_audio_video_one_source",
      url: stream.av.video,
      carry_get_params: options.carryGetParams(stream.av.video),
      size: stream.size,
    };
  }

  const muxer =
    media.libav_demuxer?.kind === "some"
      ? media.libav_demuxer.value === "mp4"
        ? options.persistent.preferred_av_muxer
        : videoMuxer(
            media.libav_demuxer.value,
            options.persistent.preferred_av_muxer,
          )
      : options.persistent.preferred_av_muxer;
  const common = {
    ...commonArguments(media, options, muxer),
    will_use_jsfetch: true,
    url: stream.av.video,
    carry_get_params: options.carryGetParams(stream.av.video),
    muxer,
    size: stream.size,
    duration: media.duration,
  };

  return stream.av.audio
    ? {
        ...common,
        strategy: "http_audio_video_two_sources_jsfetch",
        url_audio: stream.av.audio,
      }
    : { ...common, strategy: "http_audio_video_one_source_jsfetch" };
}

export function buildDownloadArguments(media, input) {
  const options = {
    audioOnly: false,
    saveAs: false,
    subdir: "",
    playlistIndex: 0,
    carryGetParams: () => false,
    ...input,
  };

  if (media.type === "mpd_playlist") {
    const entry = media.playlist[options.playlistIndex];
    if (!entry) throw new Error("Missing MPD playlist entry");
    return buildMpdArguments(media, options, entry);
  }
  if (media.type === "youtube_format") {
    return buildYoutubeArguments(media, options, options.playlistIndex);
  }
  if (media.type === "m3u8_playlist") {
    return buildHlsPlaylistArguments(media, options, options.playlistIndex);
  }
  if (media.type === "m3u8") return buildDirectHlsArguments(media, options);
  if (media.type === "http_playlist") {
    return buildHttpArguments(media, options, options.playlistIndex);
  }
  throw new Error(`Unsupported media type: ${media.type}`);
}
