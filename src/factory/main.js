const DOWNLOAD_WORKER_PATH = "/download_worker/main.js";
const workerUrl = chrome.runtime.getURL(DOWNLOAD_WORKER_PATH);

// Chromium MV3 service workers cannot reliably create nested workers, so an
// offscreen extension page owns the long-lived download worker instead.
new Worker(workerUrl, { type: "module" });
