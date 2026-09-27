import { createMainWorldBridge } from "../../shared/page-bridge.js";

const VIMEO_ID_PATTERN = /(?<![a-z0-9])(\d{5,})/i;
const pageBridge = createMainWorldBridge();
const videoId = window.location.href.match(VIMEO_ID_PATTERN)?.[0];

async function waitForPlayerConfig() {
  if (!videoId) return null;

  let delaySeconds = 1;
  while (true) {
    if (window.playerConfig) return window.playerConfig;
    await new Promise((resolve) => setTimeout(resolve, delaySeconds * 1_000));
    delaySeconds += 1;
  }
}

async function publishPlayerConfig() {
  const config = await waitForPlayerConfig();
  if (!config) return;
  pageBridge.postToContent({
    name: "vimeo_on_config",
    data: { config },
  });
}

pageBridge.onMessageFromContent((message) => {
  if (message?.name === "vimeo_request_config") publishPlayerConfig();
});

publishPlayerConfig();
