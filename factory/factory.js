(() => {
  // src/factory/main.js
  var DOWNLOAD_WORKER_PATH = "/download_worker/main.js";
  var workerUrl = chrome.runtime.getURL(DOWNLOAD_WORKER_PATH);
  new Worker(workerUrl, { type: "module" });
})();
//# sourceMappingURL=factory.js.map
