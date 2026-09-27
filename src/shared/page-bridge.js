import { MessageChannel } from "./channels.js";
import { hashString } from "./hash.js";

export function createPageBridge(pageUrl = window.location.href) {
  const channel = new BroadcastChannel(`injected-${hashString(pageUrl)}`);

  function postToPage(message) {
    channel.postMessage({
      msg: message,
      channel: MessageChannel.FROM_CONTENT_TO_PAGE,
    });
  }

  function onMessageFromPage(listener) {
    const eventListener = (event) => {
      if (event.data?.channel === MessageChannel.FROM_PAGE_TO_CONTENT) {
        listener(event.data.msg);
      }
    };

    channel.addEventListener("message", eventListener);
    return () => channel.removeEventListener("message", eventListener);
  }

  function requestFromPage(request, responseName, timeoutMs = 10_000) {
    return new Promise((resolve, reject) => {
      let timeout;
      const removeListener = onMessageFromPage((message) => {
        if (message?.name !== responseName) return;
        clearTimeout(timeout);
        removeListener();
        resolve(message.data);
      });

      timeout = setTimeout(() => {
        removeListener();
        reject(
          new Error(`Timed out waiting for page message: ${responseName}`),
        );
      }, timeoutMs);

      postToPage(request);
    });
  }

  return { postToPage, onMessageFromPage, requestFromPage };
}

export function createMainWorldBridge(pageUrl = window.location.href) {
  const channel = new BroadcastChannel(`injected-${hashString(pageUrl)}`);

  function postToContent(message) {
    channel.postMessage({
      msg: message,
      channel: MessageChannel.FROM_PAGE_TO_CONTENT,
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
