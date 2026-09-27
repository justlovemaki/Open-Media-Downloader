import { createMainWorldBridge } from "../../shared/page-bridge.js";

const pageBridge = createMainWorldBridge();
const originalXhrOpen = XMLHttpRequest.prototype.open;
let latestManifest = null;

function publishManifest(rawManifest) {
  if (!rawManifest.trimStart().startsWith("#EXTM3U")) return;
  latestManifest = rawManifest;
  pageBridge.postToContent({
    name: "javrank_on_manifest",
    data: { raw: rawManifest },
  });
}

XMLHttpRequest.prototype.open = function (...args) {
  this.addEventListener(
    "load",
    () => {
      if (
        this.responseURL.includes(".m3u8") &&
        typeof this.responseText === "string"
      ) {
        publishManifest(this.responseText);
      }
    },
    { once: true },
  );

  return originalXhrOpen.apply(this, args);
};

pageBridge.onMessageFromContent((message) => {
  if (message?.name === "javrank_request_manifest" && latestManifest) {
    publishManifest(latestManifest);
  }
});
