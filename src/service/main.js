import {
  A,
  Cf,
  Cs,
  DownloadQueue,
  Ei,
  H,
  Ie,
  Jt,
  M_,
  Nf,
  Oe,
  On,
  Rf,
  Te,
  Ue,
  Wn,
  Ws,
  Xs,
  _o,
  abortWorkerDownload,
  activateEntitlement,
  ae,
  buildDownloadArguments,
  detectMediaDrm,
  executeDefaultMediaAction,
  executeDownloadAndSave,
  getPersistentState,
  getSessionState,
  he,
  initializePersistentState,
  initializeSessionState,
  ip,
  isBraveBrowser,
  isPremiumFeatureAvailable,
  kr,
  kt,
  le,
  mp,
  mutatePersistentState,
  mutatePersistentStateImmediately,
  mutateSessionState,
  mutateSessionStateImmediately,
  onContentMessage,
  onInjectedMessage,
  op,
  parseExtensionVersion,
  q,
  qe,
  qr,
  qt,
  registerDockingHandlers,
  registerPreviewHandler,
  registerWebRequestDetection,
  rp,
  sendToInjected,
  validateStoredEntitlement,
  vb,
  ve,
  vi,
  vt,
  wb,
  wt,
  y_,
} from "./service-runtime.js";
var mt = ve(Ie(), 1);
var Y_ = 12;
function J_(e) {
  return new Promise((t) => mt.default.contextMenus.create(e, t));
}
async function initializeContextMenu() {
  let e = mt.default.runtime.getManifest();
  (await mt.default.contextMenus.removeAll(),
    await J_({
      contexts: ["all"],
      id: "omd-top",
      title: e.name,
    }),
    await J_({
      contexts: ["all"],
      id: "omd-sub-header",
      enabled: !1,
      title: "Download:",
      parentId: "omd-top",
    }));
  let t = new Map();
  for (let i = 0; i < Y_; i++) {
    let n = `omd-sub-${i}`;
    (t.set(n, A),
      await J_({
        contexts: ["all"],
        id: n,
        title: "n/a",
        parentId: "omd-top",
      }));
  }
  return (
    mt.default.contextMenus.onClicked.addListener((i) => {
      let n = i.menuItemId,
        r = t.get(n);
      r && r.isSome() && kt(r.value);
    }),
    t
  );
}
function updateContextMenuVisibility(e) {
  let t = e.use_context_menu;
  return mt.default.contextMenus.update("omd-top", {
    visible: t,
  });
}
function updateContextMenuEntries(e, t, i) {
  let n = [];
  if (e.current_win_tab.tab_id.isSome()) {
    let r = e.current_win_tab.tab_id.value,
      o = e.discovered.get(r);
    if (o && o.meta.isSome()) {
      let a = o.meta.value,
        u = 0;
      for (let s of o.media.values()) {
        if (u >= Y_) break;
        let { basename: l, subdir: d } = kr(s, a),
          c;
        if ("playlist" in s) {
          let h = Wn(s, t.preferred_quality);
          c = buildDownloadArguments(s, !1, !1, l, d, h, t);
        } else c = buildDownloadArguments(s, !1, !1, l, d, void 0, t);
        let f = {
            name: "do_download",
            data: {
              download_args: ae(c),
              meta: ae(a),
              media: ae(s),
            },
          },
          m = `omd-sub-${u}`;
        (i.set(m, q(f)),
          n.push({
            title: `${l}.${c.extension}`,
            visible: !0,
          }),
          u++);
      }
    }
  }
  n.length > 0
    ? mt.default.contextMenus.update("omd-sub-header", {
        title: "Download:",
      })
    : mt.default.contextMenus.update("omd-sub-header", {
        title: "No Media",
      });
  for (let r = 0; r < Y_; r++) {
    let o = n[r];
    o
      ? mt.default.contextMenus.update(`omd-sub-${r}`, o)
      : mt.default.contextMenus.update(`omd-sub-${r}`, {
          visible: !1,
        });
  }
}
qt();
var bs = class extends Map {
  constructor(i, n) {
    super(n);
    this.max = i;
    this.chop();
  }
  set(i, n) {
    return (super.set(i, n), this.chop());
  }
  chop() {
    for (; this.size > this.max; ) {
      let i = this.keys().next();
      if (i.done) break;
      this.delete(i.value);
    }
    return this;
  }
};
function setNotification(e, t) {
  mutateSessionStateImmediately((i) => i.notifications.set(e, t));
}
var Zy = isPremiumFeatureAvailable();
async function updatePremiumBannerState() {
  let e = await Zy,
    t = 7200 * 1e3,
    i = Date.now(),
    n = getPersistentState().lsd,
    o = i - n > t,
    a = !!getPersistentState().jwt,
    u = getPersistentState().remote_behaviours.advertize_premium,
    s = getSessionState().advertize_premium;
  if (e || a || !u)
    s.advertize &&
      mutateSessionState(
        (l) =>
          (l.advertize_premium = {
            advertize: !1,
          }),
      );
  else if (o)
    (!s.advertize || s.blocked) &&
      mutateSessionState(
        (l) =>
          (l.advertize_premium = {
            advertize: !1,
            blocked: !1,
          }),
      );
  else if (!s.advertize || !s.blocked) {
    let l = {
      advertize: !1,
      blocked: !1,
      snooze: !1,
    };
    mutateSessionState((d) => (d.advertize_premium = l));
  }
}
function updateToolbarIndicator(e, t) {
  let n = null;
  if (e.current_win_tab.tab_id.isSome()) {
    n = e.discovered.get(e.current_win_tab.tab_id.value);
    n && n.media.size > 0
      ? H.default.action.setIcon({
          path: "/bitmaps/logo-128-color.png",
        })
      : H.default.action.setIcon({
          path: "/bitmaps/logo-128-grey.png",
        });
  }
  let i = e.notifications.size + t.remote_notifications.size;
  if (i > 0) {
    (H.default.action.setBadgeText({
      text: i.toString(),
    }),
      H.default.action.setBadgeBackgroundColor({
        color: [255, 0, 0, 190],
      }),
      H.default.action.setBadgeTextColor({
        color: "white",
      }));
  } else if (e.downloading.size > 0) {
    (H.default.action.setBadgeText({
      text: e.downloading.size.toString(),
    }),
      H.default.action.setBadgeBackgroundColor({
        color: "#0284c7",
      }),
      H.default.action.setBadgeTextColor({
        color: "white",
      }));
  } else if (n && n.media.size > 0) {
    (H.default.action.setBadgeText({
      text: n.media.size.toString(),
    }),
      H.default.action.setBadgeBackgroundColor({
        color: "#2563eb",
      }),
      H.default.action.setBadgeTextColor({
        color: "white",
      }));
  } else {
    H.default.action.setBadgeText({
      text: "",
    });
  }
}
function resolveDefaultAction(e) {
  let t,
    i = getPersistentState();
  return (
    e.isSome() && (t = i.default_action_per_hostname.get(e.value.hostname)),
    t || (t = i.default_action),
    (t == "download_as" || t == "copy") && (t = "download"),
    t
  );
}
async function createTabMetadata(e) {
  if (!getSessionState().discovered.get(e)) return;
  let t;
  try {
    t = await H.default.tabs.get(e);
  } catch {
    console.warn("CreateMetaForTab: couldn't find the tab");
    return;
  }
  if (!getSessionState().discovered.get(e)) return;
  let n = le(t.favIconUrl),
    r = le(t.url);
  if (r.isSome() && r.value.protocol === "chrome") return;
  let o = resolveDefaultAction(r),
    { download_directory: a } = getPersistentState(),
    { default_: u, rules: s } = getPersistentState().smartnaming.compiled,
    l = await rp(u, s, r, a, e),
    d = await Nf(e, l.force_doc_title),
    c = {
      incognito: t.incognito,
      tab_id: e,
      title: d.title,
      thumbnail_url: d.thumbnail,
      favicon_url: n,
      url: r,
      default_action: o,
      smartnaming_rule: l,
    };
  mutateSessionState((f) => {
    let m = f.discovered.get(e);
    m && (m.meta = q(c));
  });
}
function shouldAcceptDiscoveredMedia(e, t) {
  if (e.initiator.isSome() && _o(getPersistentState(), e.initiator.value))
    return !1;
  let i = e.type != "http_playlist" && e.type != "m3u8",
    n = e.initiator.isSome() && Xs(getPersistentState(), e.initiator.value);
  if (
    !i &&
    !n &&
    (([...t.values()].some(
      (o) =>
        o.type === "m3u8_playlist" ||
        o.type === "mpd_playlist" ||
        o.type === "youtube_format",
    ) &&
      e.initiator.isSome() &&
      op(getPersistentState(), e.initiator.value)) ||
      [...t.values()].filter((o) => o.type == e.type).length > 10)
  )
    return !1;
  if (e.type == "m3u8")
    for (let r of [...t.values()].filter((o) => o.type == "m3u8_playlist"))
      for (let o of r.playlist) {
        let a = o.av;
        if (
          (a.audio && e.url.href == a.audio.href) ||
          (a.video && e.url.href == a.video.href)
        )
          return !1;
      }
  return !0;
}
function primaryMediaUrl(e) {
  try {
    return e.type == "http_playlist"
      ? e.playlist?.[0]?.av?.video
      : e.type == "m3u8"
        ? e.url
        : null;
  } catch {
    return null;
  }
}
function mediaTokens(e) {
  let t = primaryMediaUrl(e);
  if (!t) return new Set();
  let i;
  try {
    i = decodeURIComponent(t.pathname).toLowerCase();
  } catch {
    i = t.pathname.toLowerCase();
  }
  return new Set(
    i
      .split(/[^a-z0-9]+/)
      .filter(
        (e) =>
          e.length >= 8 && !/^(playlist|manifest|master|video|index)$/.test(e),
      ),
  );
}
function isSameGenericVideo(e, t) {
  if (
    !e.initiator?.isSome?.() ||
    !t.initiator?.isSome?.() ||
    e.initiator.value.href != t.initiator.value.href
  )
    return !1;
  if (
    !(
      (e.type == "http_playlist" || e.type == "m3u8") &&
      (t.type == "http_playlist" || t.type == "m3u8")
    )
  )
    return !1;
  if (
    e.type == "http_playlist" &&
    t.type == "http_playlist" &&
    e.extension != t.extension
  )
    return !1;
  if (e.type == "m3u8" && t.type == "m3u8" && e.demuxer != t.demuxer) return !1;
  if (
    Math.abs(
      (e.discovery_timestamp_ms || 0) - (t.discovery_timestamp_ms || 0),
    ) > 6e4
  )
    return !1;
  let i = primaryMediaUrl(e),
    n = primaryMediaUrl(t);
  if (!i || !n) return !1;
  if (i.pathname == n.pathname) return !0;
  let r = mediaTokens(e),
    o = mediaTokens(t);
  for (let a of r) if (o.has(a)) return !0;
  let a =
      e.title?.isSome?.() &&
      t.title?.isSome?.() &&
      e.title.value == t.title.value,
    u =
      typeof e.duration == "number" &&
      typeof t.duration == "number" &&
      Math.abs(e.duration - t.duration) < 1;
  return !!(a && u);
}
function mediaQualityScore(e) {
  let t = primaryMediaUrl(e),
    i = 0;
  if (t) {
    let n = t.href.match(/(?:2160|1440|1080|720|480|360)p?/gi);
    n && (i = Math.max(...n.map((e) => parseInt(e) || 0)) * 1e12);
    let r;
    try {
      r = decodeURIComponent(t.href);
    } catch {
      r = t.href;
    }
    let o = r.match(/[?&]bid=(100|200|300|500|600|610|700|800)(?:&|$)/i);
    if (o) {
      let a = {
        100: 240,
        200: 360,
        300: 540,
        500: 720,
        600: 1080,
        610: 1080,
        700: 1440,
        800: 2160,
      };
      i = Math.max(i, (a[o[1]] || 0) * 1e12);
    }
  }
  if (e.type == "http_playlist") {
    let t = e.playlist?.[0];
    if (t?.quality?.size?.isSome?.())
      i += Number(t.quality.size.value.height || 0) * 1e12;
    if (t?.quality?.bitrate?.isSome?.())
      i += Number(t.quality.bitrate.value || 0) * 1e4;
    if (t?.size?.isSome?.()) i += Number(t.size.value || 0);
  }
  return i;
}
function upsertDiscoveredMedia(e, t) {
  if (e.type == "http_playlist" || e.type == "m3u8")
    for (let [i, n] of [...t.entries()])
      if (isSameGenericVideo(e, n)) {
        let r =
          [...getSessionState().downloading.values()].some(
            (e) => e.media.hash == n.hash,
          ) ||
          getSessionState().transient_history.some(
            (e) => e.media_hash == n.hash,
          );
        if (r || mediaQualityScore(n) >= mediaQualityScore(e)) return;
        t.delete(i);
      }
  if ((t.set(e.hash, e), e.type == "m3u8_playlist")) {
    let i = new Set();
    for (let { av: n } of e.playlist)
      (n.audio && i.add(n.audio.href), n.video && i.add(n.video.href));
    for (let [n, r] of t.entries())
      r.type == "m3u8" && i.has(r.url.href) && t.delete(n);
  }
  if (e.type == "mpd_playlist")
    for (let [i, n] of t.entries()) {
      if (n.type != "http_playlist") continue;
      let r =
          n.initiator.isSome() &&
          e.initiator.isSome() &&
          n.initiator.value.href == e.initiator.value.href,
        o = n.playlist[0].size,
        a = o.isSome() && o.value > 2e7;
      r && !a && t.delete(i);
    }
}
function removeDiscoveredMedia(e, t) {
  mutateSessionState((i) => {
    i.discovered.get(t).media.delete(e);
  });
}
function pruneDownloadHistory(e) {
  let t = Date.now(),
    i = e * 24 * 60 * 60 * 1e3,
    n = [...getPersistentState().downloaded.entries()],
    r = n.filter(([, a]) => t - a.download_timestamp < i),
    o = n.filter(([, a]) => t - a.download_timestamp >= i).map(([, a]) => a);
  mutatePersistentState((a) => {
    a.downloaded = new Map(
      r.sort(([u, s], [l, d]) => d.download_timestamp - s.download_timestamp),
    );
  });
  for (let a of o)
    H.default.downloads
      .erase({
        id: a.browser_download_id,
      })
      .catch(() => {});
}
function removeMatchingDownloads(e, t) {
  for (let [i, n] of e)
    ("browser_download_id" in t &&
      n.browser_download_id == t.browser_download_id &&
      e.delete(i),
      "media_hash" in t && n.media_hash == t.media_hash && e.delete(i));
}
async function handleDetectedMedia(e, t) {
  let i = getSessionState().discovered.get(t),
    n = await Zy;
  (!(!!getPersistentState().jwt || vi || n) &&
    "subtitles" in e &&
    !e.is_youtube &&
    (e.subtitles = A),
    i
      ? i.media.has(e.hash) ||
        (shouldAcceptDiscoveredMedia(e, i.media) &&
          mutateSessionState((o) => {
            let a = o.discovered.get(t);
            upsertDiscoveredMedia(e, a.media);
          }))
      : shouldAcceptDiscoveredMedia(e, new Map()) &&
        mutateSessionState((o) =>
          o.discovered.set(t, {
            meta: A,
            media:
              e.initiator.isSome() &&
              Xs(getPersistentState(), e.initiator.value)
                ? new bs(30, [[e.hash, e]])
                : new Map([[e.hash, e]]),
          }),
        ),
    createTabMetadata(t));
}
{
  {
    let e = ["xmlhttprequest", "media", "other"],
      t = ["<all_urls>"];
    (H.default.webRequest.onSendHeaders.addListener(() => {}, {
      types: e,
      urls: t,
    }),
      H.default.webRequest.onResponseStarted.addListener(() => {}, {
        types: e,
        urls: t,
      }),
      H.default.action.onClicked.addListener(() => {}),
      H.default.windows.onFocusChanged.addListener(() => {}),
      H.default.tabs.onRemoved.addListener(() => {}),
      H.default.tabs.onUpdated.addListener(() => {}),
      H.default.tabs.onActivated.addListener(() => {}),
      H.default.runtime.onMessage.addListener(() => {}),
      H.default.downloads.onChanged.addListener(() => {}),
      H.default.downloads.onErased.addListener(() => {}),
      H.default.webNavigation.onBeforeNavigate.addListener(() => {}),
      H.default.webNavigation.onDOMContentLoaded.addListener(() => {}));
  }
  H.default.runtime.onInstalled.addListener((e) => {
    let t = e.reason == "install",
      i = e.reason == "update",
      n = H.default.runtime.getManifest(),
      r = parseExtensionVersion(n.version);
    if (r.isNone()) {
      console.error("Can't parse version");
      return;
    }
    if (t)
      H.default.storage.local.set({
        first_version_installed: r.value,
      });
  });
}
var Hy;
async function handleDownloadRequest(e, t, i) {
  let n = Te(e.data.download_args),
    r = Te(e.data.media),
    o = Te(e.data.meta);
  {
    for (let C of getSessionState().downloading.values())
      if (C.media.hash == r.hash) return;
    for (let C of getSessionState().transient_history)
      if (C.media_hash == r.hash) return;
  }
  let a = 7200 * 1e3,
    u = Date.now(),
    s = r.type == "http_playlist",
    l = r.is_youtube,
    d = getPersistentState().lsd,
    c = u - d,
    f = await isBraveBrowser(),
    m = wb(getPersistentState(), "ALLOW_BRAVE_YT_DL") && f;
  if (false) {
  }
  let h = await isPremiumFeatureAvailable(),
    _ = c > a;
  if (false) {
    if (qe && !s) {
      (mutateSessionStateImmediately(
        (C) =>
          (C.advertize_premium = {
            advertize: !1,
            blocked: !1,
            snooze: !0,
          }),
      ),
        clearTimeout(Hy),
        (Hy = setTimeout(() => {
          mutateSessionStateImmediately((C) => {
            C.advertize_premium.advertize &&
              C.advertize_premium.blocked &&
              C.advertize_premium.snooze &&
              (C.advertize_premium.snooze = !1);
          });
        }, 2e3)));
      return;
    }
    if (false) {
    }
  }
  if (r.has_drm) {
    let C = {
      media_type: r.type,
      has_drm: r.has_drm,
      type: "download_error",
      timestamp: u,
      url: o.url.unwrapOr(null),
      favicon: o.favicon_url.unwrapOr(null),
      details: "",
    };
    setNotification(`notification_${crypto.randomUUID()}`, C);
    return;
  }
  let x = detectMediaDrm(o.tab_id, r);
  mutateSessionStateImmediately((C) => {
    C.downloading.set(n.download_id, {
      bitrate: 0,
      status: "queuing",
      download_args: n,
      media: r,
      meta: o,
    });
  });
  let E,
    w = () => clearInterval(E),
    y = () => {
      let C = Date.now(),
        B = 0;
      E = setInterval(() => {
        mutateSessionState((P) => {
          let G = P.downloading.get(n.download_id);
          if (G.status == "downloading") {
            let Y = Date.now(),
              ue = G.fetched_bytes_count - B,
              Ae = Y - C;
            ((C = Y),
              (G.bitrate = (1e3 * ue) / Ae),
              (B = G.fetched_bytes_count));
          }
        });
      }, 2e3);
    },
    v = !1,
    z = () => {
      if (!v && ((v = !0), !Ue || l)) {
        let C = u,
          B = getPersistentState().lsd;
        C > B &&
          (B < y_ + 2
            ? mutatePersistentState((P) => P.lsd++)
            : mutatePersistentState((P) => (P.lsd = C)));
      }
    },
    $ = Jt((C) => {
      if (
        C.name == "download_progress" &&
        C.data.download_id == n.download_id
      ) {
        E || y();
        let B = C.data.progress;
        B.status == "finalizing"
          ? mutateSessionStateImmediately((P) => {
              let G = P.downloading.get(n.download_id);
              G.status = B.status;
            })
          : mutateSessionState((P) => {
              let G = P.downloading.get(n.download_id);
              (G.status != "finalizing" &&
                ((G.status = B.status),
                G.status == "downloading" &&
                  B.status == "downloading" &&
                  ((G.percent = B.percent),
                  (G.fetched_bytes_count = B.fetched_bytes_count),
                  (G.output_duration_s = B.output_duration_s))),
                !s &&
                  G.status == "downloading" &&
                  G.fetched_bytes_count > 0 &&
                  z());
            });
      }
    }),
    j = await executeDownloadAndSave(n, i, o.incognito);
  ($(), w());
  let K = await x;
  mutateSessionStateImmediately((C) => {
    C.downloading.delete(n.download_id);
    let B = {
      max_concurrent_download: getPersistentState().max_concurrent_downloads,
      strategy: n.strategy,
      download_args_url: n.url.href,
      jsf: n.will_use_jsfetch,
    };
    if (j.isOk() && !j.value.aborted_no_partial) {
      (qe &&
        !n.save_as &&
        j.value.browser_downloads_duration_ms &&
        j.value.browser_downloads_duration_ms > 5e3 &&
        (C.suspecting_saveas = !0),
        s || z());
      let { path: P, browser_download_id: G, ending_reason: Y } = j.value;
      getPersistentState().show_desktop_notifications &&
        (!o.incognito ||
          getPersistentState().show_desktop_notifications_private) &&
        H.default.notifications.create(n.download_id, {
          type: "basic",
          title: "Download complete",
          iconUrl: H.default.runtime.getURL("/bitmaps/logo-128-color.png"),
          message: P,
        });
      let ue = `ded_${crypto.randomUUID()}`,
        Ae = {
          has_drm: K,
          downloaded_id: ue,
          path: P,
          browser_download_id: G,
          media_hash: r.hash,
          download_timestamp: Date.now(),
          origin_url: o.url.isSome() ? o.url.value.href : null,
          origin_favicon_url: o.favicon_url.isSome()
            ? o.favicon_url.value.href
            : null,
          subdir: n.save_as ? void 0 : n.subdir,
        };
      getPersistentState().history_days > 0 &&
        mutatePersistentState((Je) => {
          (removeMatchingDownloads(Je.downloaded, {
            media_hash: r.hash,
          }),
            Je.downloaded.set(ue, Ae));
        });
      let Z = 99;
      if (
        (C.transient_history.push(Ae),
        C.transient_history.length > Z &&
          C.transient_history.splice(0, C.transient_history.length - Z),
        Y != "end_of_file" && !Y.user_abort)
      )
        if (l && Y.e4XX_5XX_failure && Y.status == 403)
          C.notifications.set("notification_youtube_403", {
            type: "youtube_403",
            timestamp: u,
            url: o.url.unwrapOr(null),
          });
        else {
          B.ending_reason = Ws(Y);
          let Je = {
            type: "download_interrupted",
            timestamp: u,
            url: o.url.unwrapOr(null),
            favicon: o.favicon_url.unwrapOr(null),
            media_type: r.type,
            details: JSON.stringify(B),
          };
          C.notifications.set(`notification_${crypto.randomUUID()}`, Je);
        }
      mutatePersistentState((Je) => Je.successful_downloads_count++);
    } else if (j.isOk()) {
      let { ending_reason: P } = j.value;
      if (P != "end_of_file" && !P.user_abort)
        if (l && P.e4XX_5XX_failure && P.status == 403)
          C.notifications.set("notification_youtube_403", {
            type: "youtube_403",
            timestamp: u,
            url: o.url.unwrapOr(null),
          });
        else {
          B.ending_reason = Ws(P);
          let G = {
            has_drm: K,
            type: "download_error",
            timestamp: u,
            url: o.url.unwrapOr(null),
            favicon: o.favicon_url.unwrapOr(null),
            media_type: r.type,
            details: JSON.stringify(B),
          };
          C.notifications.set(`notification_${crypto.randomUUID()}`, G);
        }
    } else {
      j.error.details && (B.error = j.error.details);
      let P = {
        media_type: r.type,
        has_drm: K,
        type: "download_error",
        timestamp: u,
        url: o.url.unwrapOr(null),
        favicon: o.favicon_url.unwrapOr(null),
        details: JSON.stringify(B),
      };
      (j.error.interrupt_reason &&
        (P.interrupt_reason = j.error.interrupt_reason),
        C.notifications.set(`notification_${crypto.randomUUID()}`, P));
    }
  });
}
var startServiceWorker = async () => {
  console.log("service::start - ", new Date());
  try {
    let i = await navigator.storage.getDirectory(),
      n = await Array.fromAsync(i.keys());
    Promise.allSettled(
      n.map((r) => (console.warn(`main::purging ${r}`), i.removeEntry(r))),
    );
  } catch (i) {
    console.error("main::purging failed", i);
  }
  let e = await initializeContextMenu();
  (await initializeSessionState(() => {
    (updateToolbarIndicator(getSessionState(), getPersistentState()),
      updateContextMenuEntries(getSessionState(), getPersistentState(), e));
  }),
    await initializePersistentState(() => {
      (updatePremiumBannerState(),
        updateToolbarIndicator(getSessionState(), getPersistentState()),
        updateContextMenuVisibility(getPersistentState()));
    }),
    vb(),
    mutateSessionStateImmediately((i) => {
      (i.downloading.size > 0 && console.warn("Downloadings during startup."),
        i.downloading.clear());
    }));
  let t;
  {
    let i = getPersistentState().jwt;
    i != null
      ? (t = validateStoredEntitlement(i.raw))
      : vi && (t = Promise.resolve(!0));
  }
  registerDockingHandlers();
  {
    let i = await Rf();
    (mutateSessionState((n) => (n.current_win_tab = i)),
      Cf((n) => {
        mutateSessionStateImmediately((r) => (r.current_win_tab = n));
      }));
  }
  {
    {
      let i = (n) => {
        let r = Oe(n.tabId);
        n.frameId == 0 &&
          r.isSome() &&
          getSessionState().discovered.has(r.value) &&
          mutateSessionState((o) => o.discovered.delete(r.value));
      };
      (H.default.webNavigation.onBeforeNavigate.addListener(i),
        H.default.tabs.onRemoved.addListener((n) =>
          i({
            tabId: n,
            frameId: 0,
          }),
        ));
    }
    (H.default.tabs.onUpdated.addListener((i) => {
      let n = Oe(i);
      n.isSome() && createTabMetadata(n.value);
    }),
      H.default.webNavigation.onDOMContentLoaded.addListener((i) => {
        if (i.frameId == 0) {
          let n = Oe(i.tabId);
          n.isSome() && createTabMetadata(n.value);
        }
      }));
  }
  H.default.downloads.onErased.addListener((i) => {
    (mutatePersistentState((n) => {
      removeMatchingDownloads(n.downloaded, {
        browser_download_id: i,
      });
    }),
      mutateSessionState((n) => {
        n.transient_history = n.transient_history.filter(
          (r) => r.browser_download_id != i,
        );
      }));
  });
  {
    let i;
    onInjectedMessage(async (a, u) => {
      let s = Oe(u.tab?.id);
      if (s.isNone()) {
        console.error(`Got ${a.name} from invalid tab`);
        return;
      }
      let l = s.value;
      if (a.name == "on_media") {
        let d = Te(a.data.media);
        handleDetectedMedia(d, l);
      } else if (a.name == "on_activate_addon") {
        let d = await t,
          c = a.data.key,
          f = await activateEntitlement(c);
        ((t = Promise.resolve(d || f.isOk())),
          d || f.isOk()
            ? (sendToInjected(l, {
                name: "on_activate_addon_success",
                data: null,
              }),
              mutateSessionStateImmediately((m) => {
                m.notifications.delete("notification_limit");
              }))
            : sendToInjected(l, {
                name: "on_activate_addon_failure",
                data: f.error,
              }));
      } else if (a.name == "qjs") {
        if (!i)
          try {
            i = await M_(On);
          } catch (f) {
            (console.error("qjs load failed", f),
              sendToInjected(s.value, {
                name: "qjs_result",
                data: JSON.stringify({
                  error: "qjs load failed",
                  uid: a.data.uid,
                }),
              }));
            return;
          }
        let d = i.newContext(),
          c = d.evalCode(a.data.code);
        if (c.error) {
          let f = d.dump(c.error),
            m = `${f.name}: ${f.message}`;
          (c.error.dispose(),
            sendToInjected(s.value, {
              name: "qjs_result",
              data: JSON.stringify({
                error: m,
                uid: a.data.uid,
              }),
            }));
        } else {
          let f = d.dump(c.value);
          c.value.dispose();
          try {
            let m = JSON.stringify({
              success: f,
              uid: a.data.uid,
            });
            sendToInjected(s.value, {
              name: "qjs_result",
              data: m,
            });
          } catch {
            sendToInjected(s.value, {
              name: "qjs_result",
              data: JSON.stringify({
                error: "not json",
                uid: a.data.uid,
              }),
            });
          }
        }
        d.dispose();
      } else if (a.name == "do_fetch_from_service") {
        let d = await vt([a.data.url], new Headers(a.data.fetch_headers)),
          c = await qr(a.data.url, {
            method: a.data.method,
            headers: a.data.fetch_headers,
            body: new URLSearchParams(a.data.body_params),
          });
        if ((wt(d), c.isOk())) {
          let f = await c.value.json();
          sendToInjected(s.value, {
            name: "on_fetch_from_service",
            data: {
              json: f,
              uid: a.data.uid,
            },
          });
        } else
          (console.warn(`Failed to retrieve json info for url ${a.data.url}`),
            sendToInjected(s.value, {
              name: "on_fetch_from_service_failed",
              data: {
                uid: a.data.uid,
              },
            }));
      } else a.name == "remove_media" && removeDiscoveredMedia(a.data.hash, l);
    });
    let n = getPersistentState().max_concurrent_downloads,
      r = getPersistentState().youtube_throttle ? 1 : n,
      o = new DownloadQueue(n, r, 6e3);
    (mp(async (a) => {
      if (a.name == "do_download") await handleDownloadRequest(a, await t, o);
      else if (a.name == "on_media") {
        let { tab_id: u, media: s } = a.data;
        if (u.isSome()) handleDetectedMedia(s, u.value);
        else if (s.initiator.isSome()) {
          let l = s.initiator.value,
            d = await H.default.tabs.query({
              url: l.href,
            });
          (d.length == 0 &&
            (d = await H.default.tabs.query({
              url: l.origin + "/*",
            })),
            d.length == 0 && console.warn("Orphan media"));
          for (let c of d) {
            let f = Oe(c.id);
            f.isNone() || handleDetectedMedia(s, f.value);
          }
        }
      }
    }),
      onContentMessage(async (a, u) => {
        if (a.name == "abort_download")
          (mutateSessionStateImmediately((s) => {
            let l = s.downloading.get(a.data.download_id);
            l.status = "finalizing";
          }),
            o.cancelPendingTask(a.data.download_id) ||
              abortWorkerDownload(a.data.download_id));
        else if (a.name == "rm_notification")
          (mutateSessionStateImmediately((s) =>
            s.notifications.delete(a.data.notification_id),
          ),
            mutatePersistentStateImmediately((s) =>
              s.remote_notifications.delete(a.data.notification_id),
            ));
        else if (a.name == "rm_notifications_all")
          (mutateSessionStateImmediately((s) => s.notifications.clear()),
            mutatePersistentStateImmediately((s) =>
              s.remote_notifications.clear(),
            ));
        else if (a.name == "set_default_action")
          (mutatePersistentState((s) => {
            let l = a.data.hostname,
              d = a.data.action;
            d == "download_audio" || d == "download"
              ? s.default_action_per_hostname.set(l, d)
              : (s.default_action_per_hostname.delete(l),
                (s.default_action = d));
          }),
            mutateSessionState((s) => {
              for (let l of s.discovered.values())
                if (l.meta.isSome()) {
                  let d = l.meta.value;
                  ((d = {
                    ...d,
                    default_action: resolveDefaultAction(d.url),
                  }),
                    (l.meta = q(d)));
                }
            }));
        else if (a.name == "dismiss_banner")
          getPersistentState().remote_behaviours.advertize_premium ||
            mutateSessionStateImmediately(
              (s) =>
                (s.advertize_premium = {
                  advertize: !1,
                }),
            );
        else if (a.name == "dismiss_media")
          mutateSessionStateImmediately((s) => {
            let l = s.discovered.get(a.data.tab_id);
            l && l.media.delete(a.data.media_hash);
          });
        else if (a.name == "rm_download") {
          try {
            await H.default.downloads.removeFile(a.data.browser_download_id);
          } catch {}
          try {
            await H.default.downloads.erase({
              id: a.data.browser_download_id,
            });
          } catch {}
          (mutatePersistentState((s) => {
            removeMatchingDownloads(s.downloaded, {
              browser_download_id: a.data.browser_download_id,
            });
          }),
            mutateSessionState((s) => {
              s.transient_history = s.transient_history.filter(
                (l) => l.browser_download_id != a.data.browser_download_id,
              );
            }));
        } else if (a.name == "retry_download") {
          let s = `media_hash_${he(crypto.randomUUID())}`;
          mutateSessionStateImmediately((l) => {
            let d = l.discovered
              .get(a.data.tab_id)
              ?.media.get(a.data.media_hash);
            d &&
              l.discovered.get(a.data.tab_id)?.media.set(s, {
                ...d,
                cache: "reload",
                hash: s,
              });
          });
        } else if (a.name == "update_media_preferred_entry")
          mutateSessionState((s) => {
            if (s.current_win_tab.tab_id.isSome()) {
              let l = s.discovered
                .get(s.current_win_tab.tab_id.value)
                ?.media.get(a.data.media_hash);
              l &&
                "playlist" in l &&
                (l.preferred_entry = q(a.data.playlist_index));
            }
          });
        else if (a.name == "do_download") handleDownloadRequest(a, await t, o);
        else if (a.name == "clear-history") pruneDownloadHistory(0);
        else if (a.name == "mut-settings") {
          if ("preferred_audio_strategy" in a.data) {
            let s = a.data.preferred_audio_strategy;
            getPersistentState().preferred_audio_strategy != s &&
              mutatePersistentStateImmediately(
                (l) => (l.preferred_audio_strategy = s),
              );
          } else if ("preferred_audio_languages" in a.data) {
            let s = new Set(a.data.preferred_audio_languages);
            s.size > 0 &&
              !Cs(s, getPersistentState().preferred_audio_languages) &&
              mutatePersistentStateImmediately(
                (l) => (l.preferred_audio_languages = s),
              );
          } else if ("hide_nomedia_box" in a.data) {
            let s = a.data.hide_nomedia_box;
            getPersistentState().hide_nomedia_box != s &&
              mutatePersistentStateImmediately((l) => (l.hide_nomedia_box = s));
          } else if ("max_concurrent_downloads" in a.data) {
            let s = a.data.max_concurrent_downloads;
            getPersistentState().max_concurrent_downloads != s &&
              (o.setTotalCapacity(s),
              getPersistentState().youtube_throttle
                ? o.setYoutubeCapacity(1)
                : o.setYoutubeCapacity(s),
              mutatePersistentStateImmediately(
                (l) => (l.max_concurrent_downloads = s),
              ));
          } else if ("show_desktop_notifications" in a.data) {
            let s = a.data.show_desktop_notifications;
            getPersistentState().show_desktop_notifications != s &&
              mutatePersistentStateImmediately(
                (l) => (l.show_desktop_notifications = s),
              );
          } else if ("preferred_quality" in a.data) {
            let s = a.data.preferred_quality;
            getPersistentState().preferred_quality != s &&
              mutatePersistentStateImmediately(
                (l) => (l.preferred_quality = s),
              );
          } else if ("always_download_as_mkv" in a.data)
            a.data.always_download_as_mkv
              ? mutatePersistentStateImmediately(
                  (l) => (l.preferred_av_muxer = "mkv"),
                )
              : mutatePersistentStateImmediately(
                  (l) => (l.preferred_av_muxer = "mp4"),
                );
          else if ("preview_mode" in a.data) {
            let s = a.data.preview_mode;
            getPersistentState().preview_mode != s &&
              mutatePersistentStateImmediately((l) => (l.preview_mode = s));
          } else if ("show_desktop_notifications_private" in a.data) {
            let s = a.data.show_desktop_notifications_private;
            getPersistentState().show_desktop_notifications_private != s &&
              mutatePersistentStateImmediately(
                (l) => (l.show_desktop_notifications_private = s),
              );
          } else if ("show_transient_history" in a.data) {
            let s = a.data.show_transient_history;
            (getPersistentState().show_transient_history != s &&
              mutatePersistentStateImmediately(
                (l) => (l.show_transient_history = s),
              ),
              pruneDownloadHistory(getPersistentState().history_days));
          } else if ("history_days" in a.data) {
            let s = a.data.history_days;
            (getPersistentState().history_days != s &&
              mutatePersistentStateImmediately((l) => (l.history_days = s)),
              pruneDownloadHistory(getPersistentState().history_days));
          } else if ("ui_theme" in a.data) {
            let s = a.data.ui_theme;
            getPersistentState().ui_theme != s &&
              mutatePersistentStateImmediately((l) => (l.ui_theme = s));
          } else if ("popup_size" in a.data) {
            let s = a.data.popup_size;
            getPersistentState().popup_size != s &&
              mutatePersistentStateImmediately((l) => (l.popup_size = s));
          } else if ("font_size" in a.data) {
            let s = a.data.font_size;
            getPersistentState().font_size != s &&
              mutatePersistentStateImmediately((l) => (l.font_size = s));
          } else if ("youtube_throttle" in a.data) {
            let s = a.data.youtube_throttle;
            getPersistentState().youtube_throttle != s &&
              (s
                ? o.setYoutubeCapacity(1)
                : o.setYoutubeCapacity(
                    getPersistentState().max_concurrent_downloads,
                  ),
              mutatePersistentStateImmediately(
                (l) => (l.youtube_throttle = s),
              ));
          } else if ("use_context_menu" in a.data) {
            let s = a.data.use_context_menu;
            getPersistentState().use_context_menu != s &&
              mutatePersistentStateImmediately((l) => (l.use_context_menu = s));
          } else if ("download_directory" in a.data) {
            let s = a.data.download_directory;
            getPersistentState().download_directory != s &&
              mutatePersistentStateImmediately(
                (d) => (d.download_directory = s),
              );
            let l = getSessionState().current_win_tab.tab_id;
            l.isSome() && createTabMetadata(l.value);
          } else if ("preferred_discovered_order" in a.data) {
            let s = a.data.preferred_discovered_order;
            getPersistentState().preferred_discovered_media_order != s &&
              mutatePersistentStateImmediately(
                (l) => (l.preferred_discovered_media_order = s),
              );
          } else if ("subtitles_language" in a.data) {
            let s = new Set(a.data.subtitles_language);
            s.size > 0 &&
              !Cs(s, getPersistentState().subtitle_languages) &&
              mutatePersistentStateImmediately(
                (l) => (l.subtitle_languages = s),
              );
          } else a.data;
        } else if (a.name == "show-review-page")
          (mutatePersistentState((s) => (s.dont_ask_for_user_review = !0)),
            mutateSessionStateImmediately((s) =>
              s.notifications.delete("notification_one_hundred_downloads"),
            ));
        else if (a.name != "request_preview")
          if (a.name == "rm-custom-strings")
            mutatePersistentState((s) => {
              (s.custom_strings.web.clear(), s.custom_strings.addon.clear());
            });
          else if (a.name == "update-custom-web-string")
            mutatePersistentState((s) => {
              s.custom_strings.web.set(a.data.key, a.data.value);
            });
          else if (a.name == "update-custom-addon-string")
            mutatePersistentState((s) => {
              s.custom_strings.addon.set(a.data.key, a.data.value);
            });
          else if (a.name == "reset-suspicious-saveas")
            mutateSessionState((s) => {
              s.suspecting_saveas = !1;
            });
          else if (a.name == "update-smartnaming") {
            let s = a.data;
            mutatePersistentState((d) => {
              if (((d.smartnaming.source = s), !s))
                d.smartnaming.compiled = Ei();
              else {
                let c = ip(s);
                c.isOk()
                  ? (d.smartnaming.compiled = c.value)
                  : (d.smartnaming.compiled = Ei());
              }
            });
            let l = getSessionState().current_win_tab.tab_id;
            l.isSome() && createTabMetadata(l.value);
          } else
            a.name == "redock" ||
              (a.name == "clear-completed" &&
                mutateSessionStateImmediately((s) => {
                  for (let l of s.transient_history)
                    for (let d of s.discovered.values())
                      d.media.delete(l.media_hash);
                  s.transient_history = [];
                }));
      }));
  }
  (registerWebRequestDetection(getPersistentState),
    registerPreviewHandler(getSessionState, getPersistentState),
    pruneDownloadHistory(getPersistentState().history_days),
    H.default.commands.onCommand.addListener((i) => {
      i == "default-action" &&
        executeDefaultMediaAction(getSessionState(), getPersistentState());
    }),
    console.log("service::end"));
};
startServiceWorker();
!1;
/*! Bundled license information:

m3u8-parser/dist/m3u8-parser.es.js:
  (*! @name m3u8-parser @version 7.2.0 @license Apache-2.0 *)

smol-toml/dist/error.js:
smol-toml/dist/util.js:
smol-toml/dist/date.js:
smol-toml/dist/primitive.js:
smol-toml/dist/extract.js:
smol-toml/dist/struct.js:
smol-toml/dist/parse.js:
smol-toml/dist/stringify.js:
smol-toml/dist/index.js:
  (*!
   * Copyright (c) Squirrel Chat et al., All rights reserved.
   * SPDX-License-Identifier: BSD-3-Clause
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   *    list of conditions and the following disclaimer.
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the
   *    documentation and/or other materials provided with the distribution.
   * 3. Neither the name of the copyright holder nor the names of its contributors
   *    may be used to endorse or promote products derived from this software without
   *    specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
   * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
   * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
   * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
   * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
   * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
   * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *)

mpd-parser/dist/mpd-parser.es.js:
  (*! @name mpd-parser @version 1.3.1 @license Apache-2.0 *)
*/
