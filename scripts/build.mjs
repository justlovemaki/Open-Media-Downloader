import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { extname, resolve } from "node:path";

import { build } from "esbuild";

import {
  bundledClassicEntries,
  bundledModuleEntries,
  recoveredModuleEntries,
} from "./build-entries.mjs";

const projectRoot = resolve(import.meta.dirname, "..");
const outputRoot = resolve(projectRoot, "dist");
const staticDirectories = [
  "_locales",
  "bitmaps",
  "content",
  "download_worker",
  "factory",
  "service",
];
const generatedExtensions = new Set([".js", ".mjs", ".map"]);

async function copyStaticDirectory(directory) {
  const sourceDirectory = resolve(projectRoot, directory);
  const targetDirectory = resolve(outputRoot, directory);

  await mkdir(targetDirectory, { recursive: true });
  for (const entry of await readdir(sourceDirectory, { withFileTypes: true })) {
    const source = resolve(sourceDirectory, entry.name);
    const target = resolve(targetDirectory, entry.name);

    if (entry.isDirectory()) {
      await cp(source, target, { recursive: true });
    } else if (!generatedExtensions.has(extname(entry.name))) {
      await cp(source, target);
    }
  }
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(
  resolve(projectRoot, "manifest.json"),
  resolve(outputRoot, "manifest.json"),
);
await Promise.all(staticDirectories.map(copyStaticDirectory));

const commonOptions = {
  absWorkingDir: projectRoot,
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
    outfile: resolve(outputRoot, outfile),
    bundle: true,
    format: "iife",
  });
}

for (const [entryPoint, outfile] of bundledModuleEntries) {
  await build({
    ...commonOptions,
    entryPoints: [entryPoint],
    outfile: resolve(outputRoot, outfile),
    bundle: true,
    format: "esm",
  });
}

for (const [entryPoint, outfile] of recoveredModuleEntries) {
  await build({
    ...commonOptions,
    entryPoints: [entryPoint],
    outfile: resolve(outputRoot, outfile),
    bundle: false,
    format: "esm",
  });
}

console.log("Built extension in dist/.");
