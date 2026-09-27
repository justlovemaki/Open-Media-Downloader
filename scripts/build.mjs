import { build } from "esbuild";

const entryPoints = [
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
];

for (const [entryPoint, outfile] of entryPoints) {
  await build({
    entryPoints: [entryPoint],
    outfile,
    bundle: true,
    format: "iife",
    platform: "browser",
    target: "chrome120",
    minify: false,
    sourcemap: true,
    legalComments: "inline",
    logLevel: "info",
  });
}
