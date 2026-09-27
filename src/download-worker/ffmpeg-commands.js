function optionValue(option) {
  return option?.kind === "some" ? option.value : null;
}

function outputFilename(args) {
  return `${args.download_id}.${args.muxer}`;
}

function subtitleArguments(args, inputIndex) {
  const subtitle = optionValue(args.subtitles);
  if (!subtitle) return { input: [], output: [] };

  return {
    input: ["-i", `jsfetch:${subtitle.url.href ?? subtitle.url}`],
    output: [
      "-map",
      `${inputIndex}:s:0?`,
      "-c:s",
      args.muxer === "mp4" ? "mov_text" : "copy",
      "-metadata:s:s:0",
      `language=${subtitle.language}`,
    ],
  };
}

function audioLanguageArguments(args) {
  const language = optionValue(args.audio_language);
  return language ? ["-metadata:s:a:0", `language=${language}`] : [];
}

export function buildHttpPreviewCommand(args) {
  const output = outputFilename(args);
  return [
    "-analyzeduration",
    "1M",
    "-ss",
    "0",
    "-i",
    `jsfetch:${args.url}`,
    "-t",
    "5",
    "-c",
    "copy",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    output,
  ];
}

export function buildHttpCopyCommand(args) {
  const output = outputFilename(args);
  return [
    "-analyzeduration",
    "10M",
    "-i",
    `jsfetch:${args.url}`,
    "-c",
    "copy",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    output,
  ];
}

export function buildHttpMergeCommand(args) {
  const output = outputFilename(args);
  return [
    "-analyzeduration",
    "10M",
    "-i",
    `jsfetch:${args.url}`,
    "-i",
    `jsfetch:${args.url_audio}`,
    "-c",
    "copy",
    "-map",
    "0:v:0",
    "-map",
    "1:a:0?",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    output,
  ];
}

export function buildAudioExtractionCommand(args) {
  const output = outputFilename(args);
  return [
    "-analyzeduration",
    "10M",
    "-i",
    `jsfetch:${args.url}`,
    "-map",
    "0:a:0",
    "-af",
    "aresample",
    "-c:a",
    "libmp3lame",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    output,
  ];
}

export function buildHlsAudioCommand(args) {
  const output = outputFilename(args);
  return [
    "-analyzeduration",
    "10M",
    "-f",
    "hls",
    "-i",
    `jsfetch:${args.url}`,
    "-c:a",
    "libmp3lame",
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    output,
  ];
}

export function buildHlsSingleSourceCommand(args) {
  const output = outputFilename(args);
  const subtitles = subtitleArguments(args, 1);
  return [
    "-analyzeduration",
    "10M",
    "-f",
    "hls",
    "-i",
    `jsfetch:${args.url}`,
    ...subtitles.input,
    "-c:v",
    "copy",
    "-c:a",
    "copy",
    "-map",
    "0:v:0?",
    "-map",
    "0:a:0?",
    ...audioLanguageArguments(args),
    ...subtitles.output,
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    output,
  ];
}

export function buildHlsTwoSourceCommand(args) {
  const output = outputFilename(args);
  const subtitles = subtitleArguments(args, 2);
  return [
    "-analyzeduration",
    "10M",
    "-f",
    "hls",
    "-i",
    `jsfetch:${args.url}`,
    "-i",
    `jsfetch:${args.url_audio}`,
    ...subtitles.input,
    "-c:v",
    "copy",
    "-c:a",
    "copy",
    "-map",
    "0:v:0",
    "-map",
    "1:a:0?",
    ...audioLanguageArguments(args),
    ...subtitles.output,
    "-avoid_negative_ts",
    "make_zero",
    "-y",
    output,
  ];
}
