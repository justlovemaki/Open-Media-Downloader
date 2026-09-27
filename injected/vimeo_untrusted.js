(() => {
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

  // src/shared/hash.js
  function hashString(value, seed = 0) {
    let low = 3735928559 ^ seed;
    let high = 1103547991 ^ seed;
    for (let index = 0; index < value.length; index += 1) {
      const character = value.charCodeAt(index);
      low = Math.imul(low ^ character, 2654435761);
      high = Math.imul(high ^ character, 1597334677);
    }
    low = Math.imul(low ^ low >>> 16, 2246822507);
    low ^= Math.imul(high ^ high >>> 13, 3266489909);
    high = Math.imul(high ^ high >>> 16, 2246822507);
    high ^= Math.imul(low ^ low >>> 13, 3266489909);
    return 4294967296 * (2097151 & high) + (low >>> 0);
  }

  // src/shared/page-bridge.js
  function createMainWorldBridge(pageUrl = window.location.href) {
    const channel = new BroadcastChannel(`injected-${hashString(pageUrl)}`);
    function postToContent(message) {
      channel.postMessage({
        msg: message,
        channel: MessageChannel.FROM_PAGE_TO_CONTENT
      });
    }
    function onMessageFromContent(listener) {
      const eventListener = (event) => {
        if (event.data?.channel === MessageChannel.FROM_CONTENT_TO_PAGE) {
          listener(event.data.msg);
        }
      };
      channel.addEventListener("message", eventListener);
      return () => channel.removeEventListener("message", eventListener);
    }
    return { postToContent, onMessageFromContent };
  }

  // src/injected/vimeo/main.js
  var VIMEO_ID_PATTERN = /(?<![a-z0-9])(\d{5,})/i;
  var pageBridge = createMainWorldBridge();
  var videoId = window.location.href.match(VIMEO_ID_PATTERN)?.[0];
  async function waitForPlayerConfig() {
    if (!videoId) return null;
    let delaySeconds = 1;
    while (true) {
      if (window.playerConfig) return window.playerConfig;
      await new Promise((resolve) => setTimeout(resolve, delaySeconds * 1e3));
      delaySeconds += 1;
    }
  }
  async function publishPlayerConfig() {
    const config = await waitForPlayerConfig();
    if (!config) return;
    pageBridge.postToContent({
      name: "vimeo_on_config",
      data: { config }
    });
  }
  pageBridge.onMessageFromContent((message) => {
    if (message?.name === "vimeo_request_config") publishPlayerConfig();
  });
  publishPlayerConfig();
})();
//# sourceMappingURL=vimeo_untrusted.js.map
