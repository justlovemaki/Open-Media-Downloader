# Recovery status

Every first-party runtime JavaScript file is now generated from an entry under `src/`.
`npm run check` fails when a runtime file is not represented in the build graph.

## Semantically reconstructed modules

- All website adapters under `src/injected/`
- Content pages: details, history, persistent state, smart naming
- Shared message, serialization, URL, preference and media parsing modules
- Service helpers: download arguments, queue, media deduplication, version parsing
- Download worker helpers: errors, FFmpeg commands and strategy routing
- Offscreen worker bootstrap

## Vendor-inclusive recovered entries

The following files are complete, formatted snapshots of the working runtime bundles. They live
under `src/` so the project can be rebuilt completely, but still contain short generated symbols
inside bundled third-party/runtime sections:

- `src/content/legacy/panel.js`
- `src/content/legacy/register-components.js`
- `src/content/legacy/translate.js`
- `src/service/legacy/main.js`
- `src/download-worker/legacy/main.js`
- `src/vendor/libav/libav-6.5.7.1-h264-aac-mp3.wasm.mjs`

The readable modules next to these entries document and test the application-owned behavior that
has already been extracted. Exact original variable names and deleted build-time comments cannot
be recovered without the publisher's original source maps.
