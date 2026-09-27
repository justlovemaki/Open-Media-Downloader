import { deserialize } from "../shared/deserialize.js";

const PERSISTENT_STATE_KEY = "global_persistent_state";
const DEFAULT_RULES_REVISION = "10.5.49.2";
const DEFAULT_LAST_SUCCESSFUL_DOWNLOAD = 1_710_169_438_000;

const SUPPORTED_LANGUAGES = new Set([
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
  "zh-TW",
]);

const DEFAULT_MEDIA_SCAN_CONFIGURATION = [
  { client: "VISIONOS", implementation: "no_cookies_no_vdata" },
  { client: "ANDROID_VR", implementation: "no_cookies_no_vdata" },
  { client: "IOS", implementation: "no_cookies_no_vdata" },
  { client: "WEB", implementation: "no_cookies_vdata" },
  { client: "WEB_EMBEDDED", implementation: "no_cookies_vdata" },
  { client: "WEB", implementation: "cookies" },
  { client: "WEB_EMBEDDED", implementation: "cookies" },
];

function preferredBrowserLanguages() {
  const languages = new Set();
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

export function createDefaultPersistentState() {
  const languages = preferredBrowserLanguages();
  return {
    version: 1,
    default_action_per_hostname: new Map(),
    downloaded: new Map(),
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
      compiled: { default_: { max_length: 64, template: "%title" }, rules: [] },
    },
    preview_mode: "video",
    last_migration_request: 0,
    custom_strings: { addon: new Map(), web: new Map() },
    remote_ruleset_revision: DEFAULT_RULES_REVISION,
    remote_notifications: new Map(),
    remote_behaviours: {
      advertize_premium: true,
      gyt_scanner: {
        player_id: "",
        media_scan_configuration: DEFAULT_MEDIA_SCAN_CONFIGURATION,
      },
      websites: new Map(),
    },
    experiments: { experiment_hash_1986546207779496: true },
    ruleset_last_refresh_ms: 0,
    subtitle_languages: new Set(languages),
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
        ...value.smartnaming?.compiled,
      },
    },
    custom_strings: {
      ...defaults.custom_strings,
      ...value.custom_strings,
    },
    remote_behaviours: {
      ...defaults.remote_behaviours,
      ...value.remote_behaviours,
      gyt_scanner: {
        ...defaults.remote_behaviours.gyt_scanner,
        ...value.remote_behaviours?.gyt_scanner,
      },
    },
  };
}

export async function readPersistentState() {
  const stored = await chrome.storage.local.get(PERSISTENT_STATE_KEY);
  return PERSISTENT_STATE_KEY in stored
    ? normalizePersistentState(deserialize(stored[PERSISTENT_STATE_KEY]))
    : createDefaultPersistentState();
}

export function onPersistentStateChanged(listener) {
  const storageListener = (changes) => {
    const change = changes[PERSISTENT_STATE_KEY];
    if (!change) return;
    listener(
      change.newValue === undefined
        ? createDefaultPersistentState()
        : normalizePersistentState(deserialize(change.newValue)),
    );
  };
  chrome.storage.local.onChanged.addListener(storageListener);
  return () => chrome.storage.local.onChanged.removeListener(storageListener);
}

function dispatchPersistentChanged() {
  document.documentElement.dispatchEvent(
    new CustomEvent("persistent-changed", { composed: true }),
  );
}

export function RegisterPersistentToDom() {
  globalThis.persistent_state = createDefaultPersistentState();

  onPersistentStateChanged((state) => {
    globalThis.persistent_state = state;
    dispatchPersistentChanged();
  });

  readPersistentState().then((state) => {
    globalThis.persistent_state = state;
    dispatchPersistentChanged();
  });
}
