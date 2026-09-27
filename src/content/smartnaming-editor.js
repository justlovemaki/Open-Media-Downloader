import { sendContentMessage } from "../shared/extension-messaging.js";
import { loadPersistentState } from "../shared/preferences.js";
import {
  defaultSmartNamingRules,
  parseSmartNamingRules,
  stringifySmartNamingRules,
} from "./smartnaming-rules.js";

class CodeInput extends HTMLElement {
  #textarea;

  connectedCallback() {
    if (this.#textarea) return;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `<style>
      :host { display: block; }
      textarea {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        resize: none;
        padding: 12px;
        border: 1px solid color-mix(in srgb, currentColor 25%, transparent);
        border-radius: 6px;
        color: inherit;
        background: Canvas;
        font: 13px/1.5 ui-monospace, SFMono-Regular, Consolas, monospace;
        tab-size: 2;
      }
    </style>`;
    this.#textarea = document.createElement("textarea");
    this.#textarea.spellcheck = false;
    this.#textarea.addEventListener("input", () => {
      this.dispatchEvent(new Event("input", { bubbles: true }));
    });
    shadow.appendChild(this.#textarea);
  }

  get value() {
    return this.#textarea?.value ?? "";
  }

  set value(value) {
    if (!this.#textarea) this.connectedCallback();
    this.#textarea.value = value ?? "";
  }
}

if (!customElements.get("code-input"))
  customElements.define("code-input", CodeInput);

const editor = document.querySelector("#code");
const status = document.querySelector("#status");
const resetButton = document.querySelector("#reset");
const documentationButton = document.querySelector("#doc");
let saveTimer;

function setStatus(type, message) {
  status.classList.toggle("error", type === "error");
  status.classList.toggle("valid", type === "valid");
  status.textContent = message;
}

async function validateAndSave() {
  try {
    parseSmartNamingRules(editor.value);
    await sendContentMessage("update-smartnaming", editor.value);
    setStatus("valid", "valid & saved");
  } catch (error) {
    setStatus("error", error.message);
  }
}

async function initialize() {
  const state = await loadPersistentState();
  const compiled = state?.smartnaming?.compiled ?? defaultSmartNamingRules();
  editor.value =
    state?.smartnaming?.source ??
    stringifySmartNamingRules(compiled.default_, compiled.rules);

  editor.addEventListener("input", () => {
    setStatus("editing", "editing…");
    clearTimeout(saveTimer);
    saveTimer = setTimeout(validateAndSave, 1_000);
  });

  resetButton.addEventListener("click", async () => {
    const defaults = defaultSmartNamingRules();
    editor.value = stringifySmartNamingRules(defaults.default_, defaults.rules);
    await sendContentMessage("update-smartnaming", null);
    await validateAndSave();
  });

  documentationButton.hidden = true;
  await validateAndSave();
}

initialize().catch((error) => setStatus("error", error.message));
