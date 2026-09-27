(() => {
  // src/injected/taiav/main.js
  for (const script of document.querySelectorAll(
    "head script[type='application/ld+json']"
  )) {
    const source = script.textContent;
    if (!source) continue;
    const match = source.match(
      /["']thumbnail(?:url|_url)["']\s*:\s*["']([^"'\\\n\r]+)["']/i
    );
    if (!match?.[1]) continue;
    let imageMeta = document.querySelector('meta[property="og:image"]');
    if (!imageMeta) {
      imageMeta = document.createElement("meta");
      imageMeta.setAttribute("property", "og:image");
      document.head.appendChild(imageMeta);
    }
    imageMeta.setAttribute("content", match[1]);
    break;
  }
})();
//# sourceMappingURL=taiav.js.map
