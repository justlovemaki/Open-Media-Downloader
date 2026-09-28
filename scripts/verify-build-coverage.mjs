import { readdirSync, statSync } from "node:fs";
import { relative, resolve } from "node:path";

import { allBuildEntries } from "./build-entries.mjs";

const projectRoot = resolve(import.meta.dirname, "..");
const outputRoot = resolve(projectRoot, "dist");
const runtimeDirectories = [
  "content",
  "download_worker",
  "factory",
  "injected",
  "service",
];

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = resolve(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const normalize = (path) => path.replaceAll("\\", "/");
const generatedFiles = new Set(
  allBuildEntries.map(([, output]) => normalize(output)),
);
const runtimeFiles = runtimeDirectories
  .flatMap((directory) => walk(resolve(outputRoot, directory)))
  .map((path) => normalize(relative(outputRoot, path)))
  .filter((path) => path.endsWith(".js") || path.endsWith(".mjs"));

const missing = runtimeFiles.filter((path) => !generatedFiles.has(path));
if (missing.length > 0) {
  console.error("Runtime JavaScript files missing from the build graph:");
  for (const path of missing) console.error(`- ${path}`);
  process.exitCode = 1;
} else {
  console.log(
    `Build graph covers all ${runtimeFiles.length} runtime JavaScript files.`,
  );
}
