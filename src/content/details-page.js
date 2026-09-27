import { deserialize } from "../shared/deserialize.js";
import { loadPersistentState } from "../shared/preferences.js";

const SESSION_STATE_KEY = "global_session_state";

function optionValue(option, fallback = null) {
  return option?.kind === "some" ? option.value : fallback;
}

function addRow(label, value, separator = false) {
  const tableBody = document.querySelector("tbody");
  const row = document.createElement("tr");
  if (separator) row.classList.add("separator");

  const header = document.createElement("th");
  header.textContent = label;
  const cell = document.createElement("td");
  cell.textContent = String(value ?? "none");
  row.append(header, cell);
  tableBody.appendChild(row);
}

function formatOption(option, formatter = String) {
  const value = optionValue(option);
  return value === null ? "none" : formatter(value);
}

function renderSubtitles(subtitles) {
  for (const subtitle of subtitles) {
    addRow("Subtitle type", subtitle.type, true);
    if (subtitle.type === "http") addRow("URL", subtitle.url.href);
    if (subtitle.type === "id") addRow("Track ID", subtitle.id);
    addRow("Subtitle hash", subtitle.hash);
    addRow("Language", subtitle.language);
  }
}

function componentUrl(component) {
  if (!component) return "none";
  return "url" in component ? component.url.href : component.href;
}

function renderPlaylist(media) {
  media.playlist.forEach((entry, index) => {
    if (entry.av?.video)
      addRow(`#${index} video component`, componentUrl(entry.av.video), true);
    if (entry.av?.audio)
      addRow(`#${index} audio component`, componentUrl(entry.av.audio));
    if (entry.audio_language?.kind === "some") {
      addRow(`#${index} audio language`, entry.audio_language.value);
    }

    const size = formatOption(
      entry.quality?.size,
      ({ width, height }) => `${width}x${height}`,
    );
    const bitrate = formatOption(entry.quality?.bitrate);
    addRow(`#${index} media`, `${entry.demuxer} b:${bitrate} p:${size}`);
  });
}

async function readSessionState() {
  const stored = await chrome.storage.session.get(SESSION_STATE_KEY);
  return SESSION_STATE_KEY in stored
    ? deserialize(stored[SESSION_STATE_KEY])
    : null;
}

async function initializeDetailsPage() {
  const query = new URL(window.location.href).searchParams;
  const tabId = Number.parseInt(query.get("tab_id") ?? "", 10);
  const mediaHash = query.get("media_hash") ?? "";
  const [sessionState, persistentState] = await Promise.all([
    readSessionState(),
    loadPersistentState(),
  ]);

  const tabState = sessionState?.discovered?.get(tabId);
  const media = tabState?.media?.get(mediaHash);
  const metadata = optionValue(tabState?.meta);
  if (!media || !metadata) {
    addRow("Error", "Media or tab metadata is no longer available");
    return;
  }

  addRow("Tab", `${metadata.tab_id} (incognito: ${metadata.incognito})`);
  addRow("Hash", mediaHash);
  addRow(
    "Page URL",
    formatOption(metadata.url, (url) => url.href),
  );
  addRow(
    "Thumbnail",
    formatOption(metadata.thumbnail_url, (url) => url.href),
  );
  addRow("Type", media.type);
  addRow("DRM Protected", media.has_drm);
  if ("duration" in media) addRow("Duration", media.duration);
  if ("demuxer" in media) addRow("Demuxer", media.demuxer);
  if ("extension" in media) addRow("Extension", media.extension);
  if ("url" in media) addRow("Media URL", media.url.href);
  if ("master_url" in media) addRow("Master URL", media.master_url.href);

  for (const [header, value] of media.sent_headers?.entries?.() ?? []) {
    addRow(`Header: ${header}`, value);
  }
  if (media.playlist && media.type !== "mpd_playlist") renderPlaylist(media);
  if (media.subtitles?.kind === "some") renderSubtitles(media.subtitles.value);

  // Keep the useful developer-console inspection surface from the legacy page.
  window.debug = { metadata, media, persistentState, sessionState };
}

initializeDetailsPage().catch((error) => addRow("Error", error.message));
