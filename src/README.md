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
├─ content/
│  ├─ archive/       # Complete inactive UI sources retained for reference
│  ├─ panel.js       # Canonical recovered popup/sidebar entry
│  ├─ details-page.js
│  ├─ history-page.js
│  ├─ persistent-state.js
│  ├─ smartnaming-editor.js
│  └─ smartnaming-rules.js
├─ download-worker/
│  ├─ main.js        # Canonical recovered worker entry
│  ├─ errors.js
│  ├─ ffmpeg-commands.js
│  └─ strategy-router.js
├─ factory/
│  └─ main.js        # Offscreen download-worker bootstrap
├─ injected/
│  ├─ activate/       # Website-to-extension activation bridge
│  ├─ bilibili/      # API requests, DASH pairing and page-state bridge
│  ├─ canva/         # Embedded HLS manifest extraction
│  ├─ chaturbate/    # Live HLS discovery and health monitoring
│  ├─ facebook/      # Embedded DASH manifest extraction
│  ├─ iqiyi/         # DASH response handling and quality monitoring
│  ├─ javrank/       # XHR manifest interception
│  ├─ kick/          # Live, VOD and clip API extraction
│  ├─ ok/            # Embedded HLS/DASH metadata extraction
│  ├─ osmosis/       # Reversed playlist decoding
│  ├─ taiav/         # Page metadata normalization
│  ├─ twitcasting/   # Live HLS discovery
│  ├─ vimeo/         # Player config and language-aware HLS extraction
│  ├─ vk/            # Standard video and VK Live extraction
│  ├─ xgplayer/      # Encoded playlist interception and AES/XOR decoding
│  └─ youtube/       # InnerTube scanning, deciphering and format pairing
├─ media/
│  ├─ m3u8.js        # Lightweight media-playlist inspection
│  ├─ master-playlist.js
│  └─ mpd.js         # MPEG-DASH parsing and media normalization
├─ service/
│  ├─ main.js        # Canonical recovered Service Worker entry
│  ├─ download-arguments.js
│  ├─ download-queue.js
│  ├─ media-deduplication.js
│  └─ version.js
└─ shared/
   ├─ channels.js
   ├─ deserialize.js
   ├─ extension-messaging.js
   ├─ hash.js
   ├─ option.js
   ├─ page-bridge.js
   ├─ preferences.js
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

The build graph covers every active runtime JavaScript file. See
[`RECOVERY_STATUS.md`](RECOVERY_STATUS.md) for canonical recovered entries, extracted modules and
archived inactive code.
