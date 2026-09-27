// src/shared/channels.js
var MessageChannel = Object.freeze({
  FROM_INJECTED_TO_SERVICE: 0,
  FROM_CONTENT_TO_SERVICE: 1,
  FROM_SERVICE_TO_WORKER: 2,
  FROM_WORKER_TO_SERVICE: 3,
  FROM_PAGE_TO_CONTENT: 4,
  FROM_CONTENT_TO_PAGE: 5,
  FROM_SERVICE_TO_CONTENT: 6,
  FROM_SERVICE_TO_INJECTED: 7,
  FROM_SERVICE_TO_SERVICE: 8
});

// src/shared/option.js
var OPTION_MARKER = Symbol("OpenMediaDownloaderOption");
var NONE = Object.freeze({
  [OPTION_MARKER]: true,
  kind: "none"
});
function some(value) {
  return {
    [OPTION_MARKER]: true,
    kind: "some",
    value
  };
}

// src/shared/extension-messaging.js
async function sendContentMessage(name, data) {
  await chrome.runtime.sendMessage({
    msg: { name, data },
    channel: MessageChannel.FROM_CONTENT_TO_SERVICE
  });
}

// src/shared/deserialize.js
function deserialize(value) {
  if (!value || typeof value !== "object") return value;
  switch (value.__serde_tag) {
    case "primitive":
      return value.__serde_val;
    case "array":
      return value.__serde_val.map(deserialize);
    case "object":
      return Object.fromEntries(
        Object.entries(value.__serde_val).map(([key, entryValue]) => [
          key,
          deserialize(entryValue)
        ])
      );
    case "map":
      return new Map(
        value.__serde_val.map(([key, entryValue]) => [
          deserialize(key),
          deserialize(entryValue)
        ])
      );
    case "set":
      return new Set(value.__serde_val.map(deserialize));
    case "url":
      return new URL(value.__serde_val);
    case "headers":
      return new Headers(value.__serde_val);
    case "regex":
      return new RegExp(value.__serde_val[0], value.__serde_val[1]);
    case "some":
      return some(deserialize(value.__serde_val));
    case "none":
      return NONE;
    case "ok":
      return { ok: true, value: deserialize(value.__serde_val) };
    case "err":
      return { ok: false, error: deserialize(value.__serde_val) };
    default:
      throw new Error(`Unknown serialized value tag: ${value.__serde_tag}`);
  }
}

// src/content/persistent-state.js
var PERSISTENT_STATE_KEY = "global_persistent_state";
var DEFAULT_RULES_REVISION = "10.5.49.2";
var DEFAULT_LAST_SUCCESSFUL_DOWNLOAD = 1710169438e3;
var SUPPORTED_LANGUAGES = /* @__PURE__ */ new Set([
  "am",
  "ar",
  "de",
  "en",
  "en-US",
  "es",
  "fa",
  "fil",
  "fr",
  "hi",
  "id",
  "it",
  "ja",
  "ko",
  "ms",
  "nl",
  "pl",
  "pt",
  "pt-BR",
  "ru",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "yue",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
var DEFAULT_MEDIA_SCAN_CONFIGURATION = [
  { client: "VISIONOS", implementation: "no_cookies_no_vdata" },
  { client: "ANDROID_VR", implementation: "no_cookies_no_vdata" },
  { client: "IOS", implementation: "no_cookies_no_vdata" },
  { client: "WEB", implementation: "no_cookies_vdata" },
  { client: "WEB_EMBEDDED", implementation: "no_cookies_vdata" },
  { client: "WEB", implementation: "cookies" },
  { client: "WEB_EMBEDDED", implementation: "cookies" }
];
function preferredBrowserLanguages() {
  const languages = /* @__PURE__ */ new Set();
  for (let language of navigator.languages) {
    if (language === "tl" || language.startsWith("tl-")) language = "fil";
    if (SUPPORTED_LANGUAGES.has(language)) {
      languages.add(language);
      continue;
    }
    const baseLanguage = language.split("-")[0];
    if (SUPPORTED_LANGUAGES.has(baseLanguage)) languages.add(baseLanguage);
  }
  languages.add("en");
  return languages;
}
function createDefaultPersistentState() {
  const languages = preferredBrowserLanguages();
  return {
    version: 1,
    default_action_per_hostname: /* @__PURE__ */ new Map(),
    downloaded: /* @__PURE__ */ new Map(),
    jwt: null,
    lsd: DEFAULT_LAST_SUCCESSFUL_DOWNLOAD,
    default_action: "download",
    hide_nomedia_box: true,
    dont_ask_for_user_review: false,
    dockmode: "popup",
    download_directory: "",
    youtube_throttle: true,
    preferred_audio_strategy: "original",
    preferred_audio_languages: languages,
    max_concurrent_downloads: 6,
    show_desktop_notifications: true,
    show_desktop_notifications_private: false,
    history_days: 0,
    show_transient_history: true,
    ui_theme: "system",
    use_context_menu: true,
    preferred_quality: 1080,
    preferred_av_muxer: "mp4",
    popup_size: "medium",
    font_size: "default",
    preferred_discovered_media_order: "SMART",
    successful_downloads_count: 0,
    smartnaming: {
      source: null,
      compiled: { default_: { max_length: 64, template: "%title" }, rules: [] }
    },
    preview_mode: "video",
    last_migration_request: 0,
    custom_strings: { addon: /* @__PURE__ */ new Map(), web: /* @__PURE__ */ new Map() },
    remote_ruleset_revision: DEFAULT_RULES_REVISION,
    remote_notifications: /* @__PURE__ */ new Map(),
    remote_behaviours: {
      advertize_premium: true,
      gyt_scanner: {
        player_id: "",
        media_scan_configuration: DEFAULT_MEDIA_SCAN_CONFIGURATION
      },
      websites: /* @__PURE__ */ new Map()
    },
    experiments: { experiment_hash_1986546207779496: true },
    ruleset_last_refresh_ms: 0,
    subtitle_languages: new Set(languages)
  };
}
function normalizePersistentState(value) {
  const defaults = createDefaultPersistentState();
  if (!value || typeof value !== "object") return defaults;
  return {
    ...defaults,
    ...value,
    smartnaming: {
      ...defaults.smartnaming,
      ...value.smartnaming,
      compiled: {
        ...defaults.smartnaming.compiled,
        ...value.smartnaming?.compiled
      }
    },
    custom_strings: {
      ...defaults.custom_strings,
      ...value.custom_strings
    },
    remote_behaviours: {
      ...defaults.remote_behaviours,
      ...value.remote_behaviours,
      gyt_scanner: {
        ...defaults.remote_behaviours.gyt_scanner,
        ...value.remote_behaviours?.gyt_scanner
      }
    }
  };
}
async function readPersistentState() {
  const stored = await chrome.storage.local.get(PERSISTENT_STATE_KEY);
  return PERSISTENT_STATE_KEY in stored ? normalizePersistentState(deserialize(stored[PERSISTENT_STATE_KEY])) : createDefaultPersistentState();
}
function onPersistentStateChanged(listener) {
  const storageListener = (changes) => {
    const change = changes[PERSISTENT_STATE_KEY];
    if (!change) return;
    listener(
      change.newValue === void 0 ? createDefaultPersistentState() : normalizePersistentState(deserialize(change.newValue))
    );
  };
  chrome.storage.local.onChanged.addListener(storageListener);
  return () => chrome.storage.local.onChanged.removeListener(storageListener);
}

// src/content/history-page.js
var elements = {
  downloadedContainer: document.querySelector("#downloaded_container"),
  historyDisabled: document.querySelector("#history_disabled"),
  historyEmpty: document.querySelector("#history_empty"),
  historyControls: document.querySelector("#history_controls"),
  enableHistory: document.querySelector("#button_enable_history"),
  disableHistory: document.querySelector("#button_disable_history"),
  clearHistory: document.querySelector("#button_clear_history"),
  filter: document.querySelector("#input_filter")
};
function translatePage() {
  for (const element of document.querySelectorAll("[data-i18n]")) {
    const message = chrome.i18n.getMessage(element.dataset.i18n);
    if (message) element.textContent = message;
  }
}
function installHistoryStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .history-item {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 42px;
      padding: 8px 10px;
      border-bottom: var(--hardware-pixel) solid var(--theme-box-border);
    }
    .history-item:last-child { border-bottom: 0; }
    .history-file {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    }
    .history-origin {
      color: var(--neutral-500);
      font-size: .8rem;
      white-space: nowrap;
    }
    .history-delete {
      border: 0;
      color: light-dark(#64748b, #94a3b8);
      background: transparent;
      padding: 6px 8px;
    }
    .history-delete:hover {
      color: light-dark(#dc2626, #f87171);
      background: rgb(239 68 68 / 11%);
    }
  `;
  document.head.appendChild(style);
}
function matchesFilter(download, filter) {
  if (!filter) return true;
  return filter.test(download.path) || download.origin_url && filter.test(download.origin_url);
}
function createHistoryItem(download) {
  const row = document.createElement("div");
  row.className = "history-item";
  row.dataset.downloadId = download.downloaded_id;
  const filename = document.createElement("span");
  filename.className = "history-file";
  filename.textContent = download.path;
  filename.title = download.path;
  const origin = document.createElement("span");
  origin.className = "history-origin";
  if (download.origin_url) {
    try {
      origin.textContent = new URL(download.origin_url).hostname;
      origin.title = download.origin_url;
    } catch {
      origin.textContent = download.origin_url;
    }
  }
  const removeButton = document.createElement("button");
  removeButton.className = "history-delete";
  removeButton.type = "button";
  removeButton.textContent = "\u2715";
  removeButton.title = chrome.i18n.getMessage("delete_file_button_tooltip") || "Delete file";
  removeButton.addEventListener("click", async () => {
    row.style.opacity = "0.5";
    removeButton.disabled = true;
    await sendContentMessage("rm_download", {
      browser_download_id: download.browser_download_id
    });
  });
  row.append(filename, origin, removeButton);
  return row;
}
function render(state) {
  const historyDisabled = state.history_days === 0;
  const downloads = [...state.downloaded.values()];
  let filter = null;
  const filterSource = elements.filter.value.trim();
  if (filterSource) {
    try {
      filter = new RegExp(filterSource, "i");
    } catch {
      filter = new RegExp(
        filterSource.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i"
      );
    }
  }
  const visibleDownloads = downloads.filter((download) => matchesFilter(download, filter)).sort((left, right) => right.download_timestamp - left.download_timestamp);
  elements.historyDisabled.hidden = !historyDisabled;
  elements.historyControls.hidden = historyDisabled;
  elements.historyEmpty.hidden = historyDisabled || downloads.length > 0;
  elements.downloadedContainer.hidden = historyDisabled || downloads.length === 0;
  document.documentElement.setAttribute("theme", state.ui_theme);
  elements.downloadedContainer.replaceChildren(
    ...visibleDownloads.map(createHistoryItem)
  );
}
async function initialize() {
  translatePage();
  installHistoryStyles();
  let state = await readPersistentState();
  render(state);
  onPersistentStateChanged((nextState) => {
    state = nextState;
    render(state);
  });
  elements.enableHistory.addEventListener(
    "click",
    () => sendContentMessage("mut-settings", { history_days: 30 })
  );
  elements.disableHistory.addEventListener(
    "click",
    () => sendContentMessage("mut-settings", { history_days: 0 })
  );
  elements.clearHistory.addEventListener(
    "click",
    () => sendContentMessage("clear-history", null)
  );
  elements.filter.addEventListener("input", () => render(state));
}
initialize().catch(
  (error) => console.error("History page initialization failed", error)
);
//# sourceMappingURL=history.js.map
