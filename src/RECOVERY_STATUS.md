# Recovery status

Every runtime JavaScript file is generated from an entry under `src/`. `npm run check` fails when
a runtime file is missing from the build graph.

## Semantically reconstructed modules

- All website adapters under `src/injected/`
- Content pages: details, history, persistent state, smart naming
- Shared message, serialization, URL, preference and media parsing modules
- Service helpers: download arguments, queue, media deduplication, version parsing
- Download worker helpers: errors, FFmpeg commands and strategy routing
- Offscreen worker bootstrap

## Canonical recovered application entries

The complete panel, Service Worker and download worker implementations now live at canonical source
paths and directly generate their runtime counterparts:

- `src/content/panel.js` → `content/panel.js`
- `src/service/main.js` → `service/main.js`
- `src/download-worker/main.js` → `download_worker/main.js`

Application-owned top-level symbols in these entries have been semantically renamed with the
scope-safe Babel script at `scripts/semantic-rename.mjs`. Bundled third-party internals retain their
generated names to avoid changing vendor behavior or dropping code.

## Archived inactive code

Two complete files that are not referenced by the manifest or any active HTML entry are preserved
under `src/content/archive/` rather than shipped at runtime:

- `register-components.js` — component registry duplicated by `panel.js`
- `translate.js` — old translation editor; `translate.html` currently closes immediately

Exact original names, comments and deleted build-time code cannot be recovered without the
publisher's original source maps. No executable code was discarded: inactive files remain archived
and all active files remain in the verified build graph.
