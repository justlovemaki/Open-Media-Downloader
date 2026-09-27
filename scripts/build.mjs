import { build } from "esbuild";

import {
  bundledClassicEntries,
  bundledModuleEntries,
  legacyModuleEntries,
} from "./build-entries.mjs";

const commonOptions = {
  platform: "browser",
  target: "chrome120",
  minify: false,
  sourcemap: true,
  legalComments: "inline",
  logLevel: "info",
};

for (const [entryPoint, outfile] of bundledClassicEntries) {
  await build({
    ...commonOptions,
    entryPoints: [entryPoint],
    outfile,
    bundle: true,
    format: "iife",
  });
}

for (const [entryPoint, outfile] of bundledModuleEntries) {
  await build({
    ...commonOptions,
    entryPoints: [entryPoint],
    outfile,
    bundle: true,
    format: "esm",
  });
}

for (const [entryPoint, outfile] of legacyModuleEntries) {
  await build({
    ...commonOptions,
    entryPoints: [entryPoint],
    outfile,
    bundle: false,
    format: "esm",
  });
}
