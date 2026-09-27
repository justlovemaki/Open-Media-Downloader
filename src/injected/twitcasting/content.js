const CHANNEL_URL_PATTERN =
  /^(?:https?:\/\/)?(?:[\w-]+\.)*twitcasting\.tv\/([\w:-]+)\/?$/i;

async function triggerHlsDiscovery() {
  const match = window.location.href.match(CHANNEL_URL_PATTERN);
  const channelName = match?.[1];
  if (!channelName) return;

  const response = await fetch(
    `https://en.twitcasting.tv/streamserver.php?target=${encodeURIComponent(channelName)}&mode=client&player=pc_web`,
  );
  if (!response.ok) {
    throw new Error(`TwitCasting channel request failed: ${response.status}`);
  }

  const payload = await response.json();
  const streamUrl = payload?.["tc-hls"]?.streams?.high;
  if (!streamUrl)
    throw new Error("TwitCasting returned no high-quality HLS stream");

  // The generic webRequest detector observes this request and creates the media item.
  await fetch(new URL(streamUrl));
}

function detectCurrentPage() {
  triggerHlsDiscovery().catch((error) => {
    console.warn("TwitCasting media detection failed", error);
  });
}

detectCurrentPage();

let previousUrl = window.location.href;
new MutationObserver(() => {
  if (previousUrl === window.location.href) return;
  previousUrl = window.location.href;
  detectCurrentPage();
}).observe(document.documentElement, { childList: true, subtree: true });
