import {
  onServiceMessage,
  sendInjectedMessage,
} from "../../shared/extension-messaging.js";

function handleActivationRequest(event) {
  sendInjectedMessage("on_activate_addon", {
    key: event.detail?.message,
  }).catch((error) => console.warn("Activation request failed", error));
}

document.addEventListener("activate", handleActivationRequest);
document.addEventListener("ping", () => {
  document.dispatchEvent(new CustomEvent("pong"));
});

const removeServiceListener = onServiceMessage((message) => {
  document.dispatchEvent(
    new CustomEvent(message.name, {
      detail: message.data,
    }),
  );
  removeServiceListener();
});
