import { readFileSync, writeFileSync } from "node:fs";

import generateModule from "@babel/generator";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";

const generate = generateModule.default ?? generateModule;
const traverse = traverseModule.default ?? traverseModule;

const renamePlans = {
  "src/service/legacy/main.js": {
    GD: "startServiceWorker",
    Gy: "handleDownloadRequest",
    VD: "updatePremiumBannerState",
    Vy: "updateToolbarIndicator",
    Wy: "resolveDefaultAction",
    Mn: "createTabMetadata",
    By: "shouldAcceptDiscoveredMedia",
    BD: "upsertDiscoveredMediaLegacy",
    HD: "removeDiscoveredMedia",
    ys: "pruneDownloadHistory",
    tm: "removeMatchingDownloads",
    em: "handleDetectedMedia",
    $f: "registerWebRequestDetection",
    RS: "handleResponseStarted",
    zf: "detectHlsResponse",
    $S: "detectDashResponse",
    NS: "detectHttpMediaResponse",
    Mf: "registerPreviewHandler",
    jf: "schedulePreviewCleanup",
    Pn: "DownloadQueueLegacy",
    ru: "executeDownloadAndSave",
    tu: "dispatchDownloadToWorker",
    _p: "abortWorkerDownload",
    fp: "onInjectedMessage",
    Ar: "onContentMessage",
    Ti: "sendToContent",
    At: "sendToInjected",
    pp: "sendToInjectedWithRetry",
    Bn: "ensureDownloadWorkerReady",
    fv: "ensureWorkerHost",
    Jn: "createInitialSessionState",
    Db: "normalizePersistentStateLegacy",
    v_: "createDefaultPersistentStateLegacy",
    Qv: "buildHttpDownloadArgumentsLegacy",
    Wv: "buildHlsPlaylistArgumentsLegacy",
    Kv: "buildDirectHlsArgumentsLegacy",
    Zv: "buildYoutubeArgumentsLegacy",
    Gv: "buildMpdArgumentsLegacy",
    Dt: "buildDownloadArgumentsLegacy",
    vdhMediaPrimaryUrl: "primaryMediaUrlLegacy",
    vdhMediaTokens: "mediaTokensLegacy",
    vdhSameGenericVideo: "isSameGenericVideoLegacy",
    vdhMediaQualityScore: "mediaQualityScoreLegacy",
  },
  "src/download-worker/legacy/main.js": {
    Mo: "executeDownloadStrategyLegacy",
    U: "runFfmpeg",
    Br: "downloadHlsPreview",
    Rr: "downloadHlsTwoSources",
    Vr: "downloadHlsSingleSource",
    Mr: "downloadHlsAudio",
    Pr: "downloadHttpPreview",
    kr: "downloadHttpSingleSource",
    Or: "downloadHttpTwoSources",
    Lr: "extractHttpAudio",
    Ur: "downloadHttpDirect",
    bi: "downloadYoutubeSingleSource",
    Ei: "downloadYoutubeTwoSources",
    Ii: "downloadYoutubePreview",
    Ci: "downloadYoutubeAudio",
    Si: "downloadHlsAudioWithFfmpeg",
    Ti: "downloadHlsSingleWithFfmpeg",
    Di: "downloadHlsTwoWithFfmpeg",
    fr: "downloadMpdVideo",
    pr: "downloadMpdAudio",
    _r: "downloadMpdPreview",
    Ce: "streamHttpToStorage",
    lt: "streamYoutubeRanges",
    vi: "muxYoutubeTracks",
    ut: "downloadSubtitleTrack",
    Bo: "convertTimedTextToVtt",
    No: "startDownloadWorkerMessaging",
  },
  "src/content/legacy/panel.js": {
    Ag: "requestSiteDataReset",
    Tc: "clearSiteCookiesAndReload",
    Eg: "componentRegistry",
    Ac: "registerAllComponents",
    Ec: "registerPersistentStateToDom",
    Ic: "applyUiPreferences",
    jc: "toggleSettingsView",
    nu: "toolbarElement",
    Xn: "mainElement",
    Qn: "settingsElement",
    Ie: "ReportButton",
    Pe: "NotificationItem",
    ve: "DebugPanel",
    Ee: "NativeMenu",
    $e: "DismissButton",
    de: "MediaTags",
    ht: "MediaPreview",
    vt: "MediaSelector",
    Ke: "LanguagePreference",
    je: "MediaMetadata",
    De: "MediaOriginButton",
    J: "DiscoveredMedia",
    be: "DownloadingMedia",
    ye: "DownloadedMedia",
    Te: "MediaItem",
    gt: "Toolbar",
    Qt: "SettingsPanel",
    ee: "MainPanel",
    we: "PremiumBanner",
  },
  "src/content/legacy/register-components.js": {
    bg: "componentRegistry",
    wx: "RegisterAllComponents",
    Ee: "ReportButton",
    Se: "NotificationItem",
    fe: "DebugPanel",
    Ie: "NativeMenu",
    xe: "DismissButton",
    _e: "MediaTags",
    pt: "MediaPreview",
    gt: "MediaSelector",
    Ke: "LanguagePreference",
    je: "MediaMetadata",
    ze: "MediaOriginButton",
    K: "DiscoveredMedia",
    he: "DownloadingMedia",
    ve: "DownloadedMedia",
    Pe: "MediaItem",
    Cn: "Toolbar",
    Fn: "SettingsPanel",
    X: "MainPanel",
    be: "PremiumBanner",
  },
  "src/content/legacy/translate.js": {
    Dr: "readPersistentState",
    Pr: "sendContentMessage",
    Am: "determineEditorLocale",
    C_: "initializeTranslationControls",
    R_: "createTranslationEntry",
    Ir: "renderTranslationEntries",
    Ns: "customStrings",
    M_: "hideTranslatedCheckbox",
    Vs: "filterInput",
    jr: "stringsContainer",
    Im: "exportButton",
    jm: "entryTemplate",
  },
};

for (const [file, renames] of Object.entries(renamePlans)) {
  const source = readFileSync(file, "utf8");
  const ast = parse(source, {
    sourceType: "module",
    allowAwaitOutsideFunction: true,
    plugins: ["importMeta", "topLevelAwait"],
  });

  const applied = [];
  traverse(ast, {
    Program(path) {
      for (const [oldName, newName] of Object.entries(renames)) {
        if (!path.scope.hasOwnBinding(oldName)) continue;
        if (path.scope.hasOwnBinding(newName)) {
          throw new Error(`${file}: target binding already exists: ${newName}`);
        }
        path.scope.rename(oldName, newName);
        applied.push(`${oldName} -> ${newName}`);
      }
      path.stop();
    },
  });

  const output = generate(ast, {
    comments: true,
    compact: false,
    retainLines: false,
  }).code;
  writeFileSync(file, `${output}\n`);
  console.log(`${file}: applied ${applied.length} semantic renames`);
}
