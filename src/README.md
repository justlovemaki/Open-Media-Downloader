# Reconstructed source tree

The files in this directory are a semantic reconstruction of the readable extension source.
They are not claimed to be the publisher's original source files or original symbol names.

## Principles

- Meaningful names are inferred from message names, API fields, call sites, and runtime behavior.
- Browser-specific adapters are kept separate from shared serialization and messaging code.
- Third-party libraries should be dependencies instead of copied, minified source.
- Root-level `injected/*.js` files remain build artifacts referenced by `manifest.json`.
- Build artifacts are generated without minification and with source maps.

## Current structure

```text
src/
├─ injected/
│  ├─ bilibili/
│  │  ├─ content.js  # Isolated-world API requests and media normalization
│  │  └─ main.js     # Main-world page state access
│  └─ iqiyi/
│     ├─ content.js  # DASH response handling and quality monitoring
│     └─ main.js     # Main-world __playerdata__ access
├─ media/
│  └─ m3u8.js        # Lightweight media-playlist inspection
└─ shared/
   ├─ channels.js
   ├─ extension-messaging.js
   ├─ hash.js
   ├─ option.js
   ├─ page-bridge.js
   ├─ serialize.js
   └─ url.js
```

## Commands

```bash
npm install
npm run build
npm run check
npm run format
```

Further bundles can be migrated into `src/` incrementally. Until a bundle has a corresponding
source entry point, its formatted root-level JavaScript remains the canonical implementation.
