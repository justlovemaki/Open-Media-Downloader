import { sendContentMessage } from "../shared/extension-messaging.js";
import {
  onPersistentStateChanged,
  readPersistentState,
} from "./persistent-state.js";

const elements = {
  downloadedContainer: document.querySelector("#downloaded_container"),
  historyDisabled: document.querySelector("#history_disabled"),
  historyEmpty: document.querySelector("#history_empty"),
  historyControls: document.querySelector("#history_controls"),
  enableHistory: document.querySelector("#button_enable_history"),
  disableHistory: document.querySelector("#button_disable_history"),
  clearHistory: document.querySelector("#button_clear_history"),
  filter: document.querySelector("#input_filter"),
};

function translatePage() {
  for (const element of document.querySelectorAll("[data-i18n]")) {
    const message = chrome.i18n.getMessage(element.dataset.i18n);
    if (message) element.textContent = message;
  }
}

function installHistoryStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .history-item {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 42px;
      padding: 8px 10px;
      border-bottom: var(--hardware-pixel) solid var(--theme-box-border);
    }
    .history-item:last-child { border-bottom: 0; }
    .history-file {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    }
    .history-origin {
      color: var(--neutral-500);
      font-size: .8rem;
      white-space: nowrap;
    }
    .history-delete {
      border: 0;
      color: light-dark(#64748b, #94a3b8);
      background: transparent;
      padding: 6px 8px;
    }
    .history-delete:hover {
      color: light-dark(#dc2626, #f87171);
      background: rgb(239 68 68 / 11%);
    }
  `;
  document.head.appendChild(style);
}

function matchesFilter(download, filter) {
  if (!filter) return true;
  return (
    filter.test(download.path) ||
    (download.origin_url && filter.test(download.origin_url))
  );
}

function createHistoryItem(download) {
  const row = document.createElement("div");
  row.className = "history-item";
  row.dataset.downloadId = download.downloaded_id;

  const filename = document.createElement("span");
  filename.className = "history-file";
  filename.textContent = download.path;
  filename.title = download.path;

  const origin = document.createElement("span");
  origin.className = "history-origin";
  if (download.origin_url) {
    try {
      origin.textContent = new URL(download.origin_url).hostname;
      origin.title = download.origin_url;
    } catch {
      origin.textContent = download.origin_url;
    }
  }

  const removeButton = document.createElement("button");
  removeButton.className = "history-delete";
  removeButton.type = "button";
  removeButton.textContent = "✕";
  removeButton.title =
    chrome.i18n.getMessage("delete_file_button_tooltip") || "Delete file";
  removeButton.addEventListener("click", async () => {
    row.style.opacity = "0.5";
    removeButton.disabled = true;
    await sendContentMessage("rm_download", {
      browser_download_id: download.browser_download_id,
    });
  });

  row.append(filename, origin, removeButton);
  return row;
}

function render(state) {
  const historyDisabled = state.history_days === 0;
  const downloads = [...state.downloaded.values()];
  let filter = null;
  const filterSource = elements.filter.value.trim();
  if (filterSource) {
    try {
      filter = new RegExp(filterSource, "i");
    } catch {
      filter = new RegExp(
        filterSource.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i",
      );
    }
  }

  const visibleDownloads = downloads
    .filter((download) => matchesFilter(download, filter))
    .sort((left, right) => right.download_timestamp - left.download_timestamp);

  elements.historyDisabled.hidden = !historyDisabled;
  elements.historyControls.hidden = historyDisabled;
  elements.historyEmpty.hidden = historyDisabled || downloads.length > 0;
  elements.downloadedContainer.hidden =
    historyDisabled || downloads.length === 0;
  document.documentElement.setAttribute("theme", state.ui_theme);

  elements.downloadedContainer.replaceChildren(
    ...visibleDownloads.map(createHistoryItem),
  );
}

async function initialize() {
  translatePage();
  installHistoryStyles();

  let state = await readPersistentState();
  render(state);
  onPersistentStateChanged((nextState) => {
    state = nextState;
    render(state);
  });

  elements.enableHistory.addEventListener("click", () =>
    sendContentMessage("mut-settings", { history_days: 30 }),
  );
  elements.disableHistory.addEventListener("click", () =>
    sendContentMessage("mut-settings", { history_days: 0 }),
  );
  elements.clearHistory.addEventListener("click", () =>
    sendContentMessage("clear-history", null),
  );
  elements.filter.addEventListener("input", () => render(state));
}

initialize().catch((error) =>
  console.error("History page initialization failed", error),
);
