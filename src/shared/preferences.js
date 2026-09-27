import { deserialize } from "./deserialize.js";

const PERSISTENT_STATE_KEY = "global_persistent_state";

export async function loadPersistentState() {
  const stored = await chrome.storage.local.get(PERSISTENT_STATE_KEY);
  return PERSISTENT_STATE_KEY in stored
    ? deserialize(stored[PERSISTENT_STATE_KEY])
    : null;
}

export async function loadPreferredAudioLanguages() {
  try {
    const state = await loadPersistentState();
    return state?.preferred_audio_strategy === "user_language"
      ? state.preferred_audio_languages
      : new Set();
  } catch {
    return new Set();
  }
}
