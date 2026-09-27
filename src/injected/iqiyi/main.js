import { createMainWorldBridge } from "../../shared/page-bridge.js";

const PLAYER_DATA_TIMEOUT_MS = 10_000;
const pageBridge = createMainWorldBridge();

async function waitForPlayerData() {
  const deadline = Date.now() + PLAYER_DATA_TIMEOUT_MS;

  while (Date.now() < deadline) {
    if (window.__playerdata__?.__dash) return window.__playerdata__;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  return window.__playerdata__ ?? null;
}

pageBridge.onMessageFromContent(async (message) => {
  if (message?.name !== "iq_request_config") return;

  const playerData = await waitForPlayerData();
  pageBridge.postToContent({
    name: "iq_on_config",
    data: { config: playerData },
  });
});
