import { build } from "esbuild";

const entryPoints = [
  ["src/injected/iqiyi/content.js", "injected/iq.js"],
  ["src/injected/iqiyi/main.js", "injected/iq_untrusted.js"],
  ["src/injected/bilibili/content.js", "injected/bilibili.js"],
  ["src/injected/bilibili/main.js", "injected/bilibili_untrusted.js"],
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
