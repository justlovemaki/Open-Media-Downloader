import { parseMasterPlaylist } from "../../media/master-playlist.js";
import {
  reportMedia,
  sendInjectedMessage,
} from "../../shared/extension-messaging.js";
import { hashString } from "../../shared/hash.js";
import { NONE, some } from "../../shared/option.js";
import { asUrl, optionalUrl } from "../../shared/url.js";

const PAGE_URL_PATTERN =
  /https?:\/\/(?:[^/]+\.)?chaturbate\.(?<tld>com|eu|global)\/(?:fullvideo\/?\?.*?\bb=)?(?<room>[^/?&#]+)/;

async function fetchAndReportManifest(manifestUrl, roomName) {
  const response = await fetch(manifestUrl);
  if (!response.ok)
    throw new Error(`Chaturbate manifest request failed: ${response.status}`);

  const playlist = parseMasterPlaylist(await response.text(), manifestUrl);
  if (playlist.length === 0)
    throw new Error("Chaturbate returned an empty master playlist");

  const hash = `media_hash_${hashString(manifestUrl.href)}`;
  await reportMedia({
    master_url: manifestUrl,
    is_youtube: false,
    preferred_entry: NONE,
    initiator: optionalUrl(window.location.href),
    hash,
    sent_headers: new Headers(),
    thumbnail_url: some(
      new URL(`https://thumb.live.mmcdn.com/ri/${roomName}.jpg`),
    ),
    filename: NONE,
    title: NONE,
    type: "m3u8_playlist",
    playlist,
    duration: "live",
    discovery_timestamp_ms: Date.now(),
    has_drm: false,
    cache: "default",
    subtitles: NONE,
  });

  return playlist[0]?.av?.video
    ? { entryUrl: playlist[0].av.video, hash }
    : null;
}

async function requestManifestFromAjax(roomName, topLevelDomain) {
  const body = new URLSearchParams({ room_slug: roomName });
  const response = await fetch(
    `https://chaturbate.${topLevelDomain}/get_edge_hls_url_ajax/`,
    {
      method: "POST",
      body,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );
  if (!response.ok) return null;

  const manifestUrl = asUrl((await response.json())?.url);
  return manifestUrl ? fetchAndReportManifest(manifestUrl, roomName) : null;
}

async function requestManifestFromPage(pageUrl, roomName) {
  const response = await fetch(pageUrl, {
    credentials: "same-origin",
    headers: { Accept: "text/html" },
  });
  if (!response.ok) return null;

  const html = await response.text();
  const match = html.match(/initialRoomDossier\s*=\s*(["'])(.+?)\1/s);
  if (!match?.[2]) return null;

  const encodedDossier = JSON.parse(`"${match[2]}"`);
  const dossier = JSON.parse(encodedDossier);
  const manifestUrl = asUrl(dossier?.hls_source);
  return manifestUrl ? fetchAndReportManifest(manifestUrl, roomName) : null;
}

async function detectPage(pageUrl) {
  const match = pageUrl.match(PAGE_URL_PATTERN);
  if (!match?.groups?.room || !match.groups.tld) return null;

  return (
    (await requestManifestFromAjax(match.groups.room, match.groups.tld)) ??
    requestManifestFromPage(pageUrl, match.groups.room)
  );
}

async function monitorManifest(state) {
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 20_000));
    if (!state.entryUrl || !state.hash) continue;

    try {
      const response = await fetch(state.entryUrl);
      if (response.ok) continue;

      await sendInjectedMessage("remove_media", { hash: state.hash });
      if (state.pageUrl)
        Object.assign(state, (await detectPage(state.pageUrl)) ?? {});
    } catch (error) {
      console.warn("Chaturbate manifest health check failed", error);
    }
  }
}

async function monitorNavigation() {
  const state = { entryUrl: null, pageUrl: null, hash: null };
  monitorManifest(state);

  while (true) {
    const pageUrl = window.location.href;
    if (pageUrl !== state.pageUrl) {
      const mediaState = await detectPage(pageUrl);
      state.pageUrl = pageUrl;
      state.entryUrl = mediaState?.entryUrl ?? null;
      state.hash = mediaState?.hash ?? null;
    }
    await new Promise((resolve) => setTimeout(resolve, 600));
  }
}

monitorNavigation().catch((error) =>
  console.warn("Chaturbate media detection failed", error),
);
