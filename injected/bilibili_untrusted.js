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

  // src/injected/bilibili/main.js
  var PAGE_STATE_TIMEOUT_MS = 15e3;
  var pageBridge = createMainWorldBridge();
  async function waitFor(readState) {
    const deadline = Date.now() + PAGE_STATE_TIMEOUT_MS;
    while (Date.now() < deadline) {
      const value = readState();
      if (value) return value;
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    return null;
  }
  async function readBilibiliComIdentity() {
    return waitFor(() => {
      const state = window.__INITIAL_STATE__;
      const cid = state?.cid ?? state?.videoData?.cid;
      const bvid = state?.videoData?.bvid;
      return cid && bvid ? { cid, bvid } : null;
    });
  }
  async function readBilibiliTvIdentity() {
    return waitFor(() => {
      const state = window.__initialState;
      const episodeId = state?.ogv?.epId?._value;
      const videoId = state?.ugc?.aid?._value;
      return episodeId || videoId ? {
        ep_id: episodeId,
        ai_id: videoId
      } : null;
    });
  }
  pageBridge.onMessageFromContent(async (message) => {
    if (message?.name === "bilibili_com_request_id") {
      const identity = await readBilibiliComIdentity();
      pageBridge.postToContent({ name: "bilibili_com_on_id", data: identity });
    }
    if (message?.name === "bilibili_tv_request_config") {
      const identity = await readBilibiliTvIdentity();
      pageBridge.postToContent({ name: "bilibili_tv_on_config", data: identity });
    }
  });
})();
//# sourceMappingURL=bilibili_untrusted.js.map
