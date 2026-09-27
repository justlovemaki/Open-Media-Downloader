import { parseMpdPlaylist } from "../../media/mpd.js";
import { deserialize } from "../../shared/deserialize.js";
import { reportMedia } from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE } from "../../shared/option.js";
import { optionalUrl } from "../../shared/url.js";

const PERSISTENT_STATE_KEY = "global_persistent_state";

async function loadPreferredAudioLanguages() {
  try {
    const stored = await chrome.storage.local.get(PERSISTENT_STATE_KEY);
    if (!(PERSISTENT_STATE_KEY in stored)) return new Set();
    const state = deserialize(stored[PERSISTENT_STATE_KEY]);
    return state.preferred_audio_strategy === "user_language"
      ? state.preferred_audio_languages
      : new Set();
  } catch {
    return new Set();
  }
}

function parseJson(value) {
  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn("Unable to parse embedded Facebook JSON", error);
    return null;
  }
}

function extractDashManifests(html) {
  const manifests = [];

  for (const match of html.matchAll(/"dash_manifests":(\[.*?\])/g)) {
    const entries = match[1] ? parseJson(match[1]) : null;
    const manifest = Array.isArray(entries) ? entries[0]?.manifest_xml : null;
    if (manifest) {
      manifests.push(manifest);
      break;
    }
  }

  for (const match of html.matchAll(
    /"(?:video_dash_manifest|dash_manifest_xml_string)":\s*"((?:\\.|[^"\\])*)"/g,
  )) {
    const manifest = match[1] ? parseJson(`"${match[1]}"`) : null;
    if (manifest) {
      manifests.push(manifest);
      break;
    }
  }

  return [...new Set(manifests)];
}

async function inspectPage(pageUrl) {
  const response = await fetch(pageUrl, {
    credentials: "same-origin",
    headers: { Accept: "text/html" },
  });
  if (!response.ok)
    throw new Error(`Facebook page request failed: ${response.status}`);

  const manifests = extractDashManifests(await response.text());
  const preferredAudioLanguages = await loadPreferredAudioLanguages();

  for (const manifestSource of manifests) {
    const parsed = parseMpdPlaylist(manifestSource, {
      preferredAudioLanguages,
    });
    if (parsed.playlist.length === 0) continue;

    await reportMedia({
      master_url: new URL(
        `data:text/plain;charset=UTF-8,${encodeURIComponent(manifestSource)}`,
      ),
      is_youtube: false,
      preferred_entry: NONE,
      duration: parsed.duration,
      initiator: optionalUrl(window.location.href),
      hash: `media_hash_${hashString(manifestSource)}`,
      sent_headers: new Headers(),
      thumbnail_url: NONE,
      filename: NONE,
      title: NONE,
      type: "mpd_playlist",
      playlist: parsed.playlist,
      discovery_timestamp_ms: Date.now(),
      has_drm: parsed.hasDrm,
      cache: "default",
      subtitles: NONE,
    });
  }
}

async function monitorNavigation() {
  let previousUrl;
  while (true) {
    const currentUrl = window.location.href;
    if (currentUrl !== previousUrl) {
      inspectPage(currentUrl).catch((error) => {
        console.warn("Facebook media detection failed", error);
      });
      previousUrl = currentUrl;
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
}

monitorNavigation();
