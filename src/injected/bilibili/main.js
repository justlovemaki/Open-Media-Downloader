import { createMainWorldBridge } from "../../shared/page-bridge.js";

const PAGE_STATE_TIMEOUT_MS = 15_000;
const pageBridge = createMainWorldBridge();

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
    return episodeId || videoId
      ? {
          ep_id: episodeId,
          ai_id: videoId,
        }
      : null;
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
