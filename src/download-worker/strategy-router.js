const HANDLER_BY_STRATEGY = Object.freeze({
  m3u8_audio_only: "downloadHlsAudio",
  m3u8_audio_video_one_source: "downloadHlsSingleSource",
  m3u8_audio_video_two_sources: "downloadHlsTwoSources",
  m3u8_video_preview: "downloadHlsPreview",
  youtube_audio_only: "downloadYoutubeAudio",
  youtube_audio_video_one_source: "downloadYoutubeSingleSource",
  youtube_audio_video_two_sources: "downloadYoutubeTwoSources",
  youtube_video_preview: "downloadYoutubePreview",
  http_audio_video_one_source: "downloadHttpDirect",
  http_audio_video_two_sources_jsfetch: "downloadHttpTwoSources",
  http_audio_video_one_source_jsfetch: "downloadHttpSingleSource",
  http_strip_audio_jsfetch: "extractHttpAudio",
  http_video_preview_jsfetch: "downloadHttpPreview",
  mpd_audio_only: "downloadMpdAudio",
  mpd_audio_video_one_source: "downloadMpdVideo",
  mpd_video_preview: "downloadMpdPreview",
});

export function handlerNameForStrategy(strategy) {
  return HANDLER_BY_STRATEGY[strategy] ?? null;
}

export async function executeDownloadStrategy(args, signal, handlers) {
  const handlerName = handlerNameForStrategy(args.strategy);
  if (!handlerName)
    throw new Error(`Unknown download strategy: ${args.strategy}`);

  const handler = handlers[handlerName];
  if (typeof handler !== "function") {
    throw new Error(
      `Download strategy handler is not configured: ${handlerName}`,
    );
  }
  return handler(args, signal);
}

export const DOWNLOAD_STRATEGIES = Object.freeze(
  Object.keys(HANDLER_BY_STRATEGY),
);
