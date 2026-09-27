export const bundledClassicEntries = [
  ["src/factory/main.js", "factory/factory.js"],
  ["src/injected/activate/content.js", "injected/activate.js"],
  ["src/injected/iqiyi/content.js", "injected/iq.js"],
  ["src/injected/iqiyi/main.js", "injected/iq_untrusted.js"],
  ["src/injected/bilibili/content.js", "injected/bilibili.js"],
  ["src/injected/bilibili/main.js", "injected/bilibili_untrusted.js"],
  ["src/injected/canva/content.js", "injected/canva.js"],
  ["src/injected/chaturbate/content.js", "injected/chaturbate.js"],
  ["src/injected/facebook/content.js", "injected/facebook.js"],
  ["src/injected/javrank/content.js", "injected/javrank.js"],
  ["src/injected/javrank/main.js", "injected/javrank_untrusted.js"],
  ["src/injected/kick/content.js", "injected/kick.js"],
  ["src/injected/ok/content.js", "injected/ok.js"],
  ["src/injected/osmosis/content.js", "injected/osmosis.js"],
  ["src/injected/taiav/main.js", "injected/taiav.js"],
  ["src/injected/twitcasting/content.js", "injected/twitcasting.js"],
  ["src/injected/vimeo/content.js", "injected/vimeo.js"],
  ["src/injected/vimeo/main.js", "injected/vimeo_untrusted.js"],
  ["src/injected/vk/content.js", "injected/vk.js"],
  ["src/injected/xgplayer/content.js", "injected/xgplayer_crypto.js"],
  ["src/injected/xgplayer/main.js", "injected/xgplayer_crypto_untrusted.js"],
  ["src/injected/youtube/content.js", "injected/youtube.js"],
  ["src/injected/youtube/main.js", "injected/youtube_untrusted.js"],
];

export const bundledModuleEntries = [
  ["src/content/panel.js", "content/panel.js"],
  ["src/content/details-page.js", "content/details.js"],
  ["src/content/history-page.js", "content/history.js"],
  ["src/content/persistent-state.js", "content/global_persistent.js"],
  ["src/content/smartnaming-editor.js", "content/smartnaming.js"],
  ["src/service/main.js", "service/main.js"],
  ["src/download-worker/main.js", "download_worker/main.js"],
];

export const recoveredModuleEntries = [
  [
    "src/vendor/libav/libav-6.5.7.1-h264-aac-mp3.wasm.mjs",
    "download_worker/libav-6.5.7.1-h264-aac-mp3.wasm.mjs",
  ],
];

export const allBuildEntries = [
  ...bundledClassicEntries,
  ...bundledModuleEntries,
  ...recoveredModuleEntries,
];
