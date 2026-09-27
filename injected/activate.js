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

  // src/shared/option.js
  var OPTION_MARKER = Symbol("OpenMediaDownloaderOption");
  var NONE = Object.freeze({
    [OPTION_MARKER]: true,
    kind: "none"
  });

  // src/shared/extension-messaging.js
  async function sendInjectedMessage(name, data) {
    await chrome.runtime.sendMessage({
      msg: { name, data },
      channel: MessageChannel.FROM_INJECTED_TO_SERVICE
    });
  }
  function onServiceMessage(listener) {
    const runtimeListener = (message) => {
      if (message?.channel === MessageChannel.FROM_SERVICE_TO_INJECTED) {
        listener(message.msg);
      }
    };
    chrome.runtime.onMessage.addListener(runtimeListener);
    return () => chrome.runtime.onMessage.removeListener(runtimeListener);
  }

  // src/injected/activate/content.js
  function handleActivationRequest(event) {
    sendInjectedMessage("on_activate_addon", {
      key: event.detail?.message
    }).catch((error) => console.warn("Activation request failed", error));
  }
  document.addEventListener("activate", handleActivationRequest);
  document.addEventListener("ping", () => {
    document.dispatchEvent(new CustomEvent("pong"));
  });
  var removeServiceListener = onServiceMessage((message) => {
    document.dispatchEvent(
      new CustomEvent(message.name, {
        detail: message.data
      })
    );
    removeServiceListener();
  });
})();
//# sourceMappingURL=activate.js.map
