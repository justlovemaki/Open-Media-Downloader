import { MessageChannel } from "./channels.js";
import { serialize } from "./serialize.js";

export async function reportMedia(media) {
  await chrome.runtime.sendMessage({
    msg: {
      name: "on_media",
      data: { media: serialize(media) },
    },
    channel: MessageChannel.FROM_INJECTED_TO_SERVICE,
  });
}

export function onServiceMessage(listener) {
  const runtimeListener = (message) => {
    if (message?.channel === MessageChannel.FROM_SERVICE_TO_INJECTED) {
      listener(message.msg);
    }
  };

  chrome.runtime.onMessage.addListener(runtimeListener);
  return () => chrome.runtime.onMessage.removeListener(runtimeListener);
}
