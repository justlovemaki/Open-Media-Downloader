import {
  Be,
  C,
  D,
  Ed,
  Fe,
  Gi,
  Gt,
  Jl,
  Jt,
  Ki,
  Kt,
  M,
  Oe,
  Rn,
  Se,
  T,
  W,
  Wn,
  Xl,
  Yd,
  Yt,
  _,
  _c,
  au,
  cc,
  ct,
  dc,
  gc,
  he,
  ic,
  io,
  j,
  jd,
  lc,
  lu,
  mc,
  me,
  mt,
  ne,
  ni,
  pc,
  re,
  se,
  to,
  ze,
} from "./panel-runtime.js";
var L = class extends HTMLElement {
  constructor(o) {
    super();
    this.mounted = !1;
    this.pending_state = null;
    this.persistent_invalid = !0;
    this._onPersistentChanged = () => {
      this.mounted
        ? (this.onPersistentChangedInner(), this.onPersistentChanged())
        : (this.persistent_invalid = !0);
    };
    this.attachShadow({
      mode: "open",
    });
    let r = document.querySelector(o);
    if (!r || !(r instanceof HTMLTemplateElement))
      throw new Error(`Template not found: ${o}`);
    (this.root().appendChild(r.content.cloneNode(!0)),
      customElements.upgrade(this.root()));
  }
  root() {
    return (
      this.shadowRoot ||
        console.error("ComBase.shadowRoot was not initialized"),
      this.shadowRoot
    );
  }
  persistent() {
    return globalThis.persistent_state;
  }
  connectedCallback() {
    (document.documentElement.addEventListener(
      "persistent-changed",
      this._onPersistentChanged,
    ),
      (this.mounted = !0),
      this.pending_state !== null &&
        (this.onStateChangedInner(this.pending_state),
        this.onStateChanged(this.pending_state),
        (this.pending_state = null)),
      this.persistent_invalid &&
        (this.onPersistentChangedInner(),
        this.onPersistentChanged(),
        (this.persistent_invalid = !1)),
      this.onMounted());
  }
  disconnectedCallback() {
    document.documentElement.removeEventListener(
      "persistent-changed",
      this._onPersistentChanged,
    );
  }
  invalidateState(o) {
    this.mounted
      ? (this.onStateChangedInner(o), this.onStateChanged(o))
      : (this.pending_state = o);
  }
  onPersistentChangedInner() {
    if (!this.mounted)
      throw new Error("onPersistentChangedInner called while not mounted");
    (Wn(this.root(), this.persistent().custom_strings.addon),
      (this.persistent_invalid = !1));
  }
  onStateChangedInner(o) {
    if (!this.mounted)
      throw new Error("onStateChanged called while not mounted");
  }
};
function d(e, i) {
  return function (o, r) {
    let t = i ?? `#${r}`;
    Object.defineProperty(o, r, {
      get() {
        let n = Symbol.for(`cache_${r}`);
        if (this[n]) return this[n];
        let a = this.root().querySelector(t);
        if (!a)
          throw new Error(
            `[${this.tagName}] Element "${t}" not found for property "${r}"`,
          );
        return (
          a instanceof e ||
            console.error(
              `[${this.tagName}] "${t}" is ${a.constructor.name}, expected ${e.name}`,
            ),
          (this[n] = a),
          a
        );
      },
      enumerable: !0,
      configurable: !0,
    });
  };
}
var Xt = "separator",
  NativeMenu = class extends L {
    constructor() {
      super("#native-menu-template");
      this.items = new Map();
    }
    onPersistentChanged() {}
    onMounted() {
      this.dom_select.onchange = () => {
        let o = this.dom_select.children[this.dom_select.selectedIndex];
        if (o) {
          let r = this.items.get(o.value);
          (r && r.onclick(),
            this.selected_option && (this.selected_option.selected = !0));
        }
      };
    }
    onStateChanged(o) {
      for (let r of o) {
        let t = document.createElement("option");
        (r != Xt
          ? (this.items.set(r.id, r),
            (t.value = r.id),
            "text" in r
              ? (t.textContent = r.text)
              : (t.textContent = C(
                  r.key,
                  [],
                  this.persistent().custom_strings.addon,
                )),
            r.enabled || (t.disabled = !0))
          : ((t.textContent = "\u2500\u2500"), (t.disabled = !0)),
          this.dom_select.appendChild(t));
      }
    }
    setSelectedButton(o) {
      let r = this.dom_select.querySelector(`option[value="${o}"]`);
      r && ((this.selected_option = r), (r.selected = !0));
    }
  };
_([d(HTMLSelectElement, "select")], NativeMenu.prototype, "dom_select", 2);
var Ze = class Ze extends L {
  constructor() {
    super("#language-preference-template");
    this.pre_selected_lang = "en";
  }
  static {
    this.LANG_PREF_EVENT = "lang-preference-changed";
  }
  fireChangedEvent(o) {
    let r = new CustomEvent(Ze.LANG_PREF_EVENT, {
      detail: {
        langs: o,
      },
    });
    this.dispatchEvent(r);
  }
  onMounted() {
    ((this.button_add_lang.onclick = this._doAddLang.bind(this)),
      (this.button_remove_lang.onclick = this._doRemoveLang.bind(this)),
      (this.button_move_lang_up.onclick = this._doMoveLangUp.bind(this)),
      (this.button_move_lang_down.onclick = this._doMoveLangDown.bind(this)));
    let o = (t) => {
      (this.native_menu.setSelectedButton(`menu_${t.code}`),
        (this.native_menu_face.textContent = `${t.native_name} - ${t.code}`),
        (this.pre_selected_lang = t.code));
    };
    this.native_menu.invalidateState(
      [...Rn.values()].map((t) => ({
        enabled: !0,
        id: `menu_${t.code}`,
        onclick: () => o(t),
        text: `${t.native_name} - ${t.code}`,
      })),
    );
    let r = Rn.get("en");
    r ? o(r) : console.error("English missing?");
  }
  onStateChanged() {}
  onPersistentChanged() {
    let o,
      r = this.getAttribute("type");
    if (r == "subtitles") o = this.persistent().subtitle_languages;
    else if (r == "audiotracks")
      o = this.persistent().preferred_audio_languages;
    else {
      console.error("unknow type");
      return;
    }
    let t = this.select.value,
      n = "";
    this.select.replaceChildren();
    for (let a of o.values()) {
      let s = Rn.get(a);
      if (s) {
        let l = document.createElement("option");
        ((l.value = a),
          (l.text = `${s.native_name} - ${s.code}`),
          (n = s.code),
          this.select.appendChild(l),
          a == t && (this.select.value = a));
      }
    }
    this.select.value || (this.select.value = n);
  }
  getSelectedLanguagesCode() {
    return [...this.select.querySelectorAll("option")].map((o) => o.value);
  }
  _doAddLang() {
    let o = this.getSelectedLanguagesCode();
    (o.push(this.pre_selected_lang),
      (this.select.value = ""),
      this.fireChangedEvent(o));
  }
  _doRemoveLang() {
    let o = new Set(this.getSelectedLanguagesCode());
    (o.delete(this.select.value), this.fireChangedEvent([...o]));
  }
  _doMoveLangUp() {
    let o = this.getSelectedLanguagesCode(),
      r = o.indexOf(this.select.value);
    if (r > 0) [o[r - 1], o[r]] = [o[r], o[r - 1]];
    else return;
    this.fireChangedEvent(o);
  }
  _doMoveLangDown() {
    let o = this.getSelectedLanguagesCode(),
      r = o.indexOf(this.select.value);
    if (r !== -1 && r < o.length - 1) [o[r], o[r + 1]] = [o[r + 1], o[r]];
    else return;
    this.fireChangedEvent(o);
  }
};
(_([d(NativeMenu, "com-native-menu")], Ze.prototype, "native_menu", 2),
  _(
    [d(HTMLSpanElement, "com-native-menu > span")],
    Ze.prototype,
    "native_menu_face",
    2,
  ),
  _([d(HTMLButtonElement)], Ze.prototype, "button_move_lang_up", 2),
  _([d(HTMLButtonElement)], Ze.prototype, "button_move_lang_down", 2),
  _([d(HTMLButtonElement)], Ze.prototype, "button_add_lang", 2),
  _([d(HTMLButtonElement)], Ze.prototype, "button_remove_lang", 2),
  _([d(HTMLSelectElement, "select")], Ze.prototype, "select", 2));
var LanguagePreference = Ze;
function Gn() {
  document.documentElement.getAttribute("dockmode") == "popup" &&
    window.close();
}
var A = class A extends L {
  static {
    this.TOGGLE_SETTINGS = "toggle-setting";
  }
  onPersistentChanged() {
    let i = this.persistent();
    if (
      ((this.checkbox_youtube_throttle.checked = i.youtube_throttle),
      (this.checkbox_audio_original.checked =
        i.preferred_audio_strategy == "original"),
      j(this.audio_preference, i.preferred_audio_strategy != "original"),
      (this.input_concurrent_downloads.value =
        i.max_concurrent_downloads.toString()),
      (this.checkbox_show_desktop_notifications.checked =
        i.show_desktop_notifications),
      (this.checkbox_show_desktop_notifications_private.checked =
        i.show_desktop_notifications_private),
      (this.preferred_quality_highest.checked = i.preferred_quality === null),
      (this.preferred_quality_1080p.checked = i.preferred_quality === 1080),
      (this.preferred_quality_720p.checked = i.preferred_quality === 720),
      (this.preferred_quality_480p.checked = i.preferred_quality === 480),
      (this.checkbox_always_download_as_mkv.checked =
        i.preferred_av_muxer == "mkv"),
      (this.preview_mode_none.checked = i.preview_mode == "none"),
      (this.preview_mode_video.checked = i.preview_mode == "video"),
      (this.preview_mode_image.checked = i.preview_mode == "image"),
      (this.theme_light.checked = i.ui_theme == "light"),
      (this.theme_dark.checked = i.ui_theme == "dark"),
      (this.theme_system.checked = i.ui_theme == "system"),
      (this.popup_size_small.checked = i.popup_size == "small"),
      (this.popup_size_medium.checked = i.popup_size == "medium"),
      (this.popup_size_big.checked = i.popup_size == "big"),
      (this.font_size_default.checked = i.font_size == "default"),
      (this.font_size_large.checked = i.font_size == "large"),
      (this.font_size_verylarge.checked = i.font_size == "verylarge"),
      (this.dock_popup.checked = i.dockmode == "popup"),
      (this.dock_sidebar.checked = i.dockmode == "sidebar"),
      (this.preferred_discovered_order_newest.checked =
        i.preferred_discovered_media_order == "NEWEST"),
      (this.preferred_discovered_order_oldest.checked =
        i.preferred_discovered_media_order == "OLDEST"),
      (this.preferred_discovered_order_smart.checked =
        i.preferred_discovered_media_order == "SMART"),
      (this.checkbox_transient_history.checked = i.show_transient_history),
      (this.checkbox_history.checked = i.history_days > 0),
      i.history_days == 0
        ? (D(this.input_history.parentElement),
          (this.input_history.value = "30"))
        : (M(this.input_history.parentElement),
          (this.input_history.value = i.history_days.toString())),
      (this.checkbox_context_menu.checked = i.use_context_menu),
      (this.input_subdirectory.value = i.download_directory),
      i.jwt)
    ) {
      let o = i.jwt;
      ((this.span_jwt_status.textContent = C(
        "account_status_premium",
        [o.store],
        i.custom_strings.addon,
      )),
        j(this.button_my_account, o.entitlement_type == "SUBSCRIPTION"),
        D(this.button_get_premium),
        D(this.button_restore_purchase));
    } else
      ((this.span_jwt_status.textContent = "Lifetime Premium (已永久授权)"),
        D(this.button_my_account),
        D(this.button_get_premium),
        D(this.button_restore_purchase));
    i.dont_ask_for_user_review && D(this.p_leave_review);
  }
  scrollUp() {
    this.box_main.scroll({
      top: 0,
    });
  }
  onStateChanged(i) {
    j(this.section_suspecting_saveas, i.suspecting_saveas);
  }
  constructor() {
    super("#settings-template");
  }
  onMounted() {
    (pc().then((r) => {
      (j(this.box_account_not_linux, !r), j(this.p_leave_review, r));
    }),
      Fe == "google" &&
        (D(this.section_youtube),
        gc().then((r) => {
          let t = ic(this.persistent(), "ALLOW_BRAVE_YT_DL") && r;
          j(this.section_youtube, t);
        })),
      (this.button_back.onclick = () => {
        let r = new CustomEvent(A.TOGGLE_SETTINGS, {
          composed: !0,
        });
        this.dispatchEvent(r);
      }),
      (this.checkbox_youtube_throttle.onchange = () => {
        let r = this.checkbox_youtube_throttle.checked;
        T({
          name: "mut-settings",
          data: {
            youtube_throttle: r,
          },
        });
      }),
      (this.checkbox_audio_original.onchange = () => {
        let r = this.checkbox_audio_original.checked;
        T({
          name: "mut-settings",
          data: {
            preferred_audio_strategy: r ? "original" : "user_language",
          },
        });
      }));
    let i;
    ((this.input_subdirectory.oninput = () => {
      (clearTimeout(i),
        (i = setTimeout(() => {
          let r = this.input_subdirectory.value,
            t = Ed(r);
          (j(this.span_bad_download_subdirectory, t.isErr()),
            t.isOk() &&
              T({
                name: "mut-settings",
                data: {
                  download_directory: t.value,
                },
              }));
        }, 1e3)));
    }),
      (this.input_concurrent_downloads.onchange = () => {
        let r = parseInt(this.input_concurrent_downloads.value);
        T({
          name: "mut-settings",
          data: {
            max_concurrent_downloads: r,
          },
        });
      }),
      (this.checkbox_show_desktop_notifications.onchange = () => {
        let r = this.checkbox_show_desktop_notifications.checked;
        T({
          name: "mut-settings",
          data: {
            show_desktop_notifications: r,
          },
        });
      }),
      (this.checkbox_show_desktop_notifications_private.onchange = () => {
        let r = this.checkbox_show_desktop_notifications_private.checked;
        T({
          name: "mut-settings",
          data: {
            show_desktop_notifications_private: r,
          },
        });
      }),
      (this.preferred_quality_highest.onchange = () => {
        this.preferred_quality_highest.checked &&
          T({
            name: "mut-settings",
            data: {
              preferred_quality: null,
            },
          });
      }),
      (this.preferred_quality_1080p.onchange = () => {
        this.preferred_quality_1080p.checked &&
          T({
            name: "mut-settings",
            data: {
              preferred_quality: 1080,
            },
          });
      }),
      (this.preferred_quality_720p.onchange = () => {
        this.preferred_quality_720p.checked &&
          T({
            name: "mut-settings",
            data: {
              preferred_quality: 720,
            },
          });
      }),
      (this.preferred_quality_480p.onchange = () => {
        this.preferred_quality_480p.checked &&
          T({
            name: "mut-settings",
            data: {
              preferred_quality: 480,
            },
          });
      }),
      (this.preferred_discovered_order_oldest.onchange = () => {
        this.preferred_discovered_order_oldest.checked &&
          T({
            name: "mut-settings",
            data: {
              preferred_discovered_order: "OLDEST",
            },
          });
      }),
      (this.preferred_discovered_order_newest.onchange = () => {
        this.preferred_discovered_order_newest.checked &&
          T({
            name: "mut-settings",
            data: {
              preferred_discovered_order: "NEWEST",
            },
          });
      }),
      (this.preferred_discovered_order_smart.onchange = () => {
        this.preferred_discovered_order_smart.checked &&
          T({
            name: "mut-settings",
            data: {
              preferred_discovered_order: "SMART",
            },
          });
      }),
      (this.checkbox_always_download_as_mkv.onchange = () => {
        let r = this.checkbox_always_download_as_mkv.checked;
        T({
          name: "mut-settings",
          data: {
            always_download_as_mkv: r,
          },
        });
      }),
      this.audio_preference.addEventListener(
        LanguagePreference.LANG_PREF_EVENT,
        (r) => {
          T({
            name: "mut-settings",
            data: {
              preferred_audio_languages: r.detail.langs,
            },
          });
        },
      ),
      this.subtitles_language_preference.addEventListener(
        LanguagePreference.LANG_PREF_EVENT,
        (r) => {
          T({
            name: "mut-settings",
            data: {
              subtitles_language: r.detail.langs,
            },
          });
        },
      ));
    let o = () => {
      let t = this.checkbox_history.checked
        ? parseInt(this.input_history.value)
        : 0;
      T({
        name: "mut-settings",
        data: {
          history_days: t,
        },
      });
    };
    ((this.input_history.onchange = o),
      (this.checkbox_history.onchange = o),
      (this.checkbox_transient_history.onchange = () => {
        let r = this.checkbox_transient_history.checked;
        T({
          name: "mut-settings",
          data: {
            show_transient_history: r,
          },
        });
      }),
      (this.theme_light.onchange = () => {
        this.theme_light.checked &&
          T({
            name: "mut-settings",
            data: {
              ui_theme: "light",
            },
          });
      }),
      (this.theme_dark.onchange = () => {
        this.theme_dark.checked &&
          T({
            name: "mut-settings",
            data: {
              ui_theme: "dark",
            },
          });
      }),
      (this.theme_system.onchange = () => {
        this.theme_system.checked &&
          T({
            name: "mut-settings",
            data: {
              ui_theme: "system",
            },
          });
      }),
      (this.preview_mode_none.onchange = () => {
        this.preview_mode_none.checked &&
          T({
            name: "mut-settings",
            data: {
              preview_mode: "none",
            },
          });
      }),
      (this.preview_mode_image.onchange = () => {
        this.preview_mode_image.checked &&
          T({
            name: "mut-settings",
            data: {
              preview_mode: "image",
            },
          });
      }),
      (this.preview_mode_video.onchange = () => {
        this.preview_mode_video.checked &&
          T({
            name: "mut-settings",
            data: {
              preview_mode: "video",
            },
          });
      }),
      (this.popup_size_small.onchange = () => {
        this.popup_size_small.checked &&
          T({
            name: "mut-settings",
            data: {
              popup_size: "small",
            },
          });
      }),
      (this.popup_size_medium.onchange = () => {
        this.popup_size_medium.checked &&
          T({
            name: "mut-settings",
            data: {
              popup_size: "medium",
            },
          });
      }),
      (this.popup_size_big.onchange = () => {
        this.popup_size_big.checked &&
          T({
            name: "mut-settings",
            data: {
              popup_size: "big",
            },
          });
      }),
      (this.font_size_default.onchange = () => {
        this.font_size_default.checked &&
          T({
            name: "mut-settings",
            data: {
              font_size: "default",
            },
          });
      }),
      (this.font_size_large.onchange = () => {
        this.font_size_large.checked &&
          T({
            name: "mut-settings",
            data: {
              font_size: "large",
            },
          });
      }),
      (this.font_size_verylarge.onchange = () => {
        this.font_size_verylarge.checked &&
          T({
            name: "mut-settings",
            data: {
              font_size: "verylarge",
            },
          });
      }),
      (this.dock_popup.onchange = () => {
        this.dock_popup.checked &&
          (T({
            name: "redock",
            data: {
              mode: "popup",
            },
          }),
          window.close());
      }),
      (this.dock_sidebar.onchange = () => {
        this.dock_sidebar.checked &&
          (T({
            name: "redock",
            data: {
              mode: "sidebar",
            },
          }),
          window.close());
      }),
      (this.checkbox_context_menu.onchange = () => {
        let r = this.checkbox_context_menu.checked;
        T({
          name: "mut-settings",
          data: {
            use_context_menu: r,
          },
        });
      }),
      (this.button_restart.onclick = () => {
        Se.default.runtime.reload();
      }),
      (this.button_reset.onclick = async () => {
        (await lc(), Se.default.runtime.reload());
      }),
      (this.button_copy.onclick = async () => {
        let t = Se.default.runtime.getManifest().version,
          n = await Se.default.runtime.getPlatformInfo(),
          a = Se.default.i18n.getUILanguage(),
          s = "";
        ((s += `version: ${t}
`),
          (s += `store: ${Fe}
`),
          (s += `lang: ${a}
`),
          (s += `platform: ${n.arch} ${n.os}
`),
          (s += `UA: ${navigator.userAgent}
`));
        let l = await navigator.storage.estimate(),
          u = he(l.usage || 0),
          g = he(l.quota || 0),
          p = await navigator.storage.getDirectory(),
          h = 0;
        for await (let b of p.keys()) h++;
        s += `Internal storage: ${u} / ${g}. ${h} files
`;
        let c = globalThis.persistent_state;
        if (c.jwt) {
          let b = c.jwt,
            z = b.developer ? "true" : "false",
            {
              store: q,
              valid_until: N,
              exp: w,
              entitlement_type: P,
              user_id: k,
            } = b;
          ((s += `dev: ${z}
`),
            (s += `jwt_store: ${q}
`),
            (s += `valid_until: ${N}
`),
            (s += `exp: ${w}
`),
            (s += `entitlement_type: ${P}
`),
            (s += `user_id: ${k}
`));
        }
        navigator.clipboard.writeText(s);
      }),
      (this.button_browser_download_dir.onclick = () => {
        (Jl(), window.close());
      }),
      (this.button_smartnaming.onclick = () => {
        (Se.default.tabs.create({
          url: "/content/smartnaming.html",
        }),
          Gn());
      }),
      (this.button_saveas.onclick = () => {
        (T({
          name: "reset-suspicious-saveas",
          data: null,
        }),
          Jl(),
          window.close());
      }),
      (this.button_set_incognito.onclick = () => {
        (mc(), window.close());
      }),
      (this.button_my_account.hidden = !0),
      (this.button_restore_purchase.hidden = !0),
      (this.button_get_premium.hidden = !0),
      (this.span_version.textContent = `v${Se.default.runtime.getManifest().version}`),
      (this.button_leave_review.onclick = () => {
        T({
          name: "show-review-page",
          data: null,
        });
      }),
      Se.default.extension.isAllowedIncognitoAccess().then((r) => {
        j(this.section_no_private_browsing, !r);
      }));
  }
};
(_([d(HTMLElement)], A.prototype, "box_main", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_browser_download_dir", 2),
  _([d(HTMLInputElement)], A.prototype, "input_subdirectory", 2),
  _([d(HTMLSpanElement)], A.prototype, "span_bad_download_subdirectory", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_smartnaming", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_saveas", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_set_incognito", 2),
  _([d(HTMLInputElement)], A.prototype, "checkbox_youtube_throttle", 2),
  _([d(HTMLInputElement)], A.prototype, "checkbox_audio_original", 2),
  _([d(LanguagePreference)], A.prototype, "audio_preference", 2),
  _([d(HTMLElement)], A.prototype, "section_youtube", 2),
  _([d(LanguagePreference)], A.prototype, "subtitles_language_preference", 2),
  _([d(HTMLInputElement)], A.prototype, "input_concurrent_downloads", 2),
  _(
    [d(HTMLInputElement)],
    A.prototype,
    "checkbox_show_desktop_notifications",
    2,
  ),
  _(
    [d(HTMLInputElement)],
    A.prototype,
    "checkbox_show_desktop_notifications_private",
    2,
  ),
  _([d(HTMLInputElement)], A.prototype, "checkbox_history", 2),
  _([d(HTMLInputElement)], A.prototype, "checkbox_transient_history", 2),
  _([d(HTMLInputElement)], A.prototype, "input_history", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_back", 2),
  _([d(HTMLInputElement)], A.prototype, "checkbox_context_menu", 2),
  _([d(HTMLElement)], A.prototype, "section_no_private_browsing", 2),
  _([d(HTMLElement)], A.prototype, "section_suspecting_saveas", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_restart", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_reset", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_copy", 2),
  _([d(HTMLSpanElement)], A.prototype, "span_version", 2),
  _([d(HTMLSpanElement)], A.prototype, "span_jwt_status", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_my_account", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_restore_purchase", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_get_premium", 2),
  _([d(HTMLElement)], A.prototype, "box_account_not_linux", 2),
  _([d(HTMLParagraphElement)], A.prototype, "p_leave_review", 2),
  _([d(HTMLButtonElement)], A.prototype, "button_leave_review", 2),
  _([d(HTMLInputElement)], A.prototype, "checkbox_always_download_as_mkv", 2),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="discovered_media_order"][value="preferred_newest"]',
      ),
    ],
    A.prototype,
    "preferred_discovered_order_newest",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="discovered_media_order"][value="preferred_oldest"]',
      ),
    ],
    A.prototype,
    "preferred_discovered_order_oldest",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="discovered_media_order"][value="preferred_smart"]',
      ),
    ],
    A.prototype,
    "preferred_discovered_order_smart",
    2,
  ),
  _(
    [d(HTMLInputElement, 'input[name="settings_theme"][value="theme_dark"]')],
    A.prototype,
    "theme_dark",
    2,
  ),
  _(
    [d(HTMLInputElement, 'input[name="settings_theme"][value="theme_light"]')],
    A.prototype,
    "theme_light",
    2,
  ),
  _(
    [d(HTMLInputElement, 'input[name="settings_theme"][value="theme_system"]')],
    A.prototype,
    "theme_system",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="preview_mode"][value="preview_mode_none"]',
      ),
    ],
    A.prototype,
    "preview_mode_none",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="preview_mode"][value="preview_mode_video"]',
      ),
    ],
    A.prototype,
    "preview_mode_video",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="preview_mode"][value="preview_mode_image"]',
      ),
    ],
    A.prototype,
    "preview_mode_image",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="settings_popup_size"][value="popup_size_small"]',
      ),
    ],
    A.prototype,
    "popup_size_small",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="settings_popup_size"][value="popup_size_medium"]',
      ),
    ],
    A.prototype,
    "popup_size_medium",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="settings_popup_size"][value="popup_size_big"]',
      ),
    ],
    A.prototype,
    "popup_size_big",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="settings_font_size"][value="font_size_default"]',
      ),
    ],
    A.prototype,
    "font_size_default",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="settings_font_size"][value="font_size_large"]',
      ),
    ],
    A.prototype,
    "font_size_large",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="settings_font_size"][value="font_size_verylarge"]',
      ),
    ],
    A.prototype,
    "font_size_verylarge",
    2,
  ),
  _(
    [d(HTMLInputElement, 'input[name="settings_dock"][value="dock_popup"]')],
    A.prototype,
    "dock_popup",
    2,
  ),
  _(
    [d(HTMLInputElement, 'input[name="settings_dock"][value="dock_sidebar"]')],
    A.prototype,
    "dock_sidebar",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="preferred_quality"][value="preferred_quality_highest"]',
      ),
    ],
    A.prototype,
    "preferred_quality_highest",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="preferred_quality"][value="preferred_quality_1080p"]',
      ),
    ],
    A.prototype,
    "preferred_quality_1080p",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="preferred_quality"][value="preferred_quality_720p"]',
      ),
    ],
    A.prototype,
    "preferred_quality_720p",
    2,
  ),
  _(
    [
      d(
        HTMLInputElement,
        'input[name="preferred_quality"][value="preferred_quality_480p"]',
      ),
    ],
    A.prototype,
    "preferred_quality_480p",
    2,
  ));
var SettingsPanel = A;
var Xi = se(ne(), 1);
var _e = class _e extends L {
  static {
    this.TOGGLE_DEBUG = "toggle-debug";
  }
  static {
    this.TOGGLE_SETTINGS = "toggle-settings";
  }
  constructor() {
    super("#toolbar-template");
  }
  onPersistentChanged() {
    let i = this.persistent();
    (j(this.button_popup, i.dockmode == "sidebar"),
      j(this.button_sidebar, i.dockmode == "popup"),
      j(this.button_show_nomedia, i.hide_nomedia_box),
      this.button_show_history.classList.toggle(
        "has_downloaded",
        i.downloaded.size > 0,
      ),
      i.jwt?.developer &&
        (M(this.button_debug),
        (this.button_debug.onclick = () => {
          let o = new CustomEvent(_e.TOGGLE_DEBUG, {
            composed: !0,
          });
          this.dispatchEvent(o);
        })));
  }
  onStateChanged(i) {
    this.button_show_dir.classList.toggle(
      "has_downloaded",
      i.transient_history.length > 0,
    );
  }
  onMounted() {
    ((this.button_show_dir.onclick = () => {
      Xi.default.downloads.showDefaultFolder();
    }),
      (this.button_show_nomedia.onclick = () => {
        T({
          name: "mut-settings",
          data: {
            hide_nomedia_box: !1,
          },
        });
      }),
      (this.toolbar_button_settings.onclick = () => {
        let o = new CustomEvent(_e.TOGGLE_SETTINGS, {
          composed: !0,
        });
        this.dispatchEvent(o);
      }),
      (this.button_trash.onclick = () => {
        T({
          name: "clear-completed",
          data: null,
        });
      }),
      (this.button_show_translate.onclick = () => {}),
      (this.button_show_history.onclick = () => {
        (Xi.default.tabs.create({
          url: "/content/history.html",
        }),
          this.persistent().dockmode == "popup" && window.close());
      }));
    let i = async (o) => {
      (await T({
        name: "redock",
        data: {
          mode: o,
        },
      }),
        window.close());
    };
    ((this.button_popup.onclick = () => i("popup")),
      (this.button_sidebar.onclick = () => i("sidebar")),
      (this.button_help.hidden = !0));
  }
};
(_([d(HTMLButtonElement)], _e.prototype, "button_show_dir", 2),
  _([d(HTMLButtonElement)], _e.prototype, "button_show_history", 2),
  _([d(HTMLButtonElement)], _e.prototype, "button_show_nomedia", 2),
  _([d(HTMLButtonElement)], _e.prototype, "button_show_translate", 2),
  _([d(HTMLButtonElement)], _e.prototype, "button_trash", 2),
  _([d(HTMLButtonElement)], _e.prototype, "button_help", 2),
  _([d(HTMLButtonElement)], _e.prototype, "button_popup", 2),
  _([d(HTMLButtonElement)], _e.prototype, "button_sidebar", 2),
  _([d(HTMLButtonElement)], _e.prototype, "button_debug", 2),
  _([d(HTMLButtonElement)], _e.prototype, "toolbar_button_settings", 2));
var Toolbar = _e;
var Yn = se(ne(), 1);
var DismissButton = class extends L {
  constructor() {
    super("#button-dismiss-template");
  }
  onMounted() {}
  onStateChanged() {}
  onPersistentChanged() {}
};
var ReportButton = class extends L {
  onPersistentChanged() {}
  constructor() {
    super("#report-button-template");
  }
  onMounted() {
    this.button_report.onclick = async () => {
      this.on_click &&
        (D(this.button_report),
        M(this.button_reporting),
        D(this.button_reported),
        await this.on_click(),
        D(this.button_report),
        D(this.button_reporting),
        M(this.button_reported));
    };
  }
  onStateChanged(i) {
    this.on_click = i;
  }
  reset() {
    (M(this.button_report), D(this.button_reporting), D(this.button_reported));
  }
};
(_([d(HTMLButtonElement)], ReportButton.prototype, "button_report", 2),
  _([d(HTMLButtonElement)], ReportButton.prototype, "button_reported", 2),
  _([d(HTMLButtonElement)], ReportButton.prototype, "button_reporting", 2));
var hc = se(ne(), 1);
var MediaOriginButton = class extends L {
  constructor() {
    super("#media-button-origin");
  }
  onPersistentChanged() {}
  onMounted() {}
  onStateChanged(i) {
    ((this.span_hostname.textContent = i.url.hostname),
      i.origin_favicon_url
        ? (this.div_favicon.style.backgroundImage = `url(${i.origin_favicon_url})`)
        : (this.div_favicon.style.backgroundImage = "unset"),
      (this.button_origin.onclick = () => {
        hc.default.tabs.create({
          url: i.url.href,
        });
      }),
      j(this.box_drm, i.has_drm));
  }
};
(_([d(HTMLSpanElement)], MediaOriginButton.prototype, "span_hostname", 2),
  _([d(HTMLDivElement)], MediaOriginButton.prototype, "div_favicon", 2),
  _([d(HTMLButtonElement)], MediaOriginButton.prototype, "button_origin", 2),
  _([d(HTMLElement)], MediaOriginButton.prototype, "box_drm", 2));
var ei = se(ne(), 1);
async function vc(e, i, o, r, t) {
  if (me && io == "stable") return;
  let n = await ei.default.runtime.getPlatformInfo(),
    a = ei.default.runtime.getManifest(),
    s = {
      type: e,
      dable: {
        timestamp: o,
        page_url: i,
      },
      media_type: r,
      details: t,
      platform: {
        arch: n.arch,
        os: n.os,
      },
      store: Fe,
      ua: navigator.userAgent,
      version: a.version,
      lang: ei.default.i18n.getUILanguage(),
    };
  await fetch(lu, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(s),
  });
}
async function bc() {
  let i = (
    await ei.default.tabs.query({
      currentWindow: !0,
      active: !0,
    })
  )[0];
  if (i && i.url) {
    let o = Date.now();
    return vc("MISSING_MEDIA", i.url, o, null, null);
  }
}
function Kn(e, i, o, r) {
  return vc("FAILED", e, i, o, r);
}
function Ql() {
  document.documentElement.getAttribute("dockmode") == "popup" &&
    window.close();
}
var NotificationItem = class extends L {
  constructor() {
    super("#notification-template");
  }
  onMounted() {
    this.dismiss_button.onclick = () => {
      T({
        name: "rm_notification",
        data: {
          notification_id: this.id,
        },
      });
    };
  }
  onPersistentChanged() {}
  onStateChanged(i) {
    this.setAttribute("type", i.type);
    let o = this.persistent().custom_strings.addon;
    if ((D(this.button_origin), i.type == "download_error"))
      (i.url &&
        (M(this.button_origin),
        this.button_origin.invalidateState({
          url: i.url,
          origin_favicon_url: i.favicon,
          has_drm: i.has_drm,
        })),
        this.vbox_top.classList.add("level-error"),
        D(this.button_action),
        D(this.button_action_2),
        (this.p_title.textContent = C("download_failed", [], o) + "\u{1F629}"),
        i.interrupt_reason != null
          ? (D(this.button_report),
            (this.p_description.textContent = i.interrupt_reason))
          : i.has_drm
            ? (D(this.button_report),
              (this.p_description.textContent = C(
                "download_with_drm_failed_description",
                [],
                o,
              )))
            : (M(this.button_report),
              (this.p_description.textContent = C(
                "download_failed_description",
                [],
                o,
              )),
              this.button_report.invalidateState(() =>
                Kn(i.url?.href || "none", i.timestamp, i.media_type, i.details),
              )));
    else if (i.type == "download_interrupted")
      (i.url &&
        (M(this.button_origin),
        this.button_origin.invalidateState({
          url: i.url,
          origin_favicon_url: i.favicon,
          has_drm: !1,
        })),
        this.vbox_top.classList.add("level-warn"),
        D(this.button_action),
        D(this.button_action_2),
        (this.p_title.textContent = C("download_interrupted", [], o)),
        M(this.button_report),
        (this.p_description.textContent = C(
          "download_interrupted_description",
          [],
          o,
        )),
        this.button_report.invalidateState(() =>
          Kn(i.url?.href || "none", i.timestamp, i.media_type, i.details),
        ));
    else if (i.type == "no_youtube") {
      (this.vbox_top.classList.add("level-error"),
        D(this.button_report),
        D(this.button_action),
        D(this.button_action_2),
        (this.p_title.textContent = C("no_youtube", [], o)));
      let r = document.createElement("span");
      ((r.textContent = C("no_youtube_description", [], o)),
        this.p_description.appendChild(r));
    } else if (i.type == "limit_youtube")
      (this.vbox_top.classList.add("level-error"),
        D(this.button_report),
        M(this.button_action),
        M(this.button_action_2),
        (this.p_title.textContent = C("premium_required", [], o)),
        (this.p_description.textContent = C(
          "premium_yt_required_description",
          [],
          o,
        )),
        (this.button_action.textContent = C("get_premium_button", [], o)),
        (this.button_action.hidden = !0),
        (this.button_action_2.textContent = C(
          "restore_purchase_button",
          [],
          o,
        )),
        (this.button_action_2.hidden = !0));
    else if (i.type == "one_hundred_downloads")
      (this.vbox_top.classList.add("level-happy"),
        D(this.button_report),
        M(this.button_action),
        D(this.button_action_2),
        (this.p_title.textContent =
          C("one_hundred_downloads_title", [], o) + "\u{1F604}"),
        (this.p_description.textContent = C("leave_review_description", [], o)),
        (this.button_action.textContent = C("leave_review_button", [], o)),
        (this.button_action.onclick = () => {
          T({
            name: "show-review-page",
            data: null,
          });
        }));
    else if (i.type == "youtube_403")
      (this.vbox_top.classList.add("level-error"),
        M(this.button_report),
        D(this.button_action),
        D(this.button_action_2),
        (this.p_title.textContent = C("youtube_too_many_downloads", [], o)),
        (this.p_description.textContent = C(
          "youtube_too_many_downloads_description",
          [],
          o,
        )),
        this.button_report.invalidateState(() =>
          Kn(i.url?.href || "none", i.timestamp, "youtube", "403"),
        ));
    else if (
      i.type == "remote" &&
      (D(this.button_report),
      D(this.button_action),
      D(this.button_action_2),
      i.level == "ERROR"
        ? this.vbox_top.classList.add("level-error")
        : i.level == "WARN"
          ? this.vbox_top.classList.add("level-warn")
          : this.vbox_top.classList.add("level-happy"),
      (this.p_title.textContent = i.title),
      (this.p_description.textContent = i.details),
      i.url)
    ) {
      let r = i.url;
      (M(this.button_action_2),
        (this.button_action_2.textContent = "More\u2026"),
        (this.button_action_2.onclick = () => {
          (Yn.default.tabs.create({
            url: r.href,
          }),
            Ql());
        }));
    }
  }
};
(_([d(ReportButton)], NotificationItem.prototype, "button_report", 2),
  _([d(HTMLButtonElement)], NotificationItem.prototype, "button_action", 2),
  _([d(HTMLButtonElement)], NotificationItem.prototype, "button_action_2", 2),
  _([d(HTMLParagraphElement)], NotificationItem.prototype, "p_title", 2),
  _([d(HTMLParagraphElement)], NotificationItem.prototype, "p_description", 2),
  _([d(HTMLElement)], NotificationItem.prototype, "vbox_top", 2),
  _(
    [d(DismissButton, "com-dismiss-button")],
    NotificationItem.prototype,
    "dismiss_button",
    2,
  ),
  _(
    [d(MediaOriginButton, "com-media-button-origin")],
    NotificationItem.prototype,
    "button_origin",
    2,
  ));
var ft = se(ne(), 1);
var wc = 3e3,
  DebugPanel = class extends L {
    constructor() {
      super("#debug-template");
      this._render_counter = 0;
      this._throbber = "|";
    }
    onPersistentChanged() {}
    onStateChanged(o) {
      ((this.state = o), this._render_counter++);
    }
    onMounted() {
      ((this.button_restart.onclick = () => ft.default.runtime.reload()),
        (this.button_storage.onclick = () => this.printStorage()),
        (this.button_persistent.onclick = () =>
          ft.default.storage.local.clear()),
        (this.button_reload.onclick = () => window.location.reload()),
        (this.button_purge_files.onclick = async () => {
          let o = await navigator.storage.getDirectory();
          for await (let r of o.keys()) o.removeEntry(r);
        }));
    }
    activate() {
      ((this._render_counter = 0),
        this.onTick(),
        setInterval(() => this.onTick(), wc),
        this.printStorage());
    }
    async printStorage() {
      let o = "",
        r = (l) =>
          (o += `${l}
`),
        t = await Yt(),
        n = await Ki();
      (console.log("persistent", t), console.log("session", n));
      let a = JSON.stringify(Oe(n), null, 2),
        s = JSON.stringify(Oe(t), null, 2);
      (r("== persistent"),
        r(s),
        r("== session"),
        r(a),
        (this.pre_storage.textContent = o));
    }
    async onTick() {
      this._throbber == "|" ? (this._throbber = "-") : (this._throbber = "|");
      let o = "",
        r = (p) =>
          (o += `${p}
`),
        t = await navigator.storage.getDirectory(),
        n = 0;
      for await (let p of t.keys()) n++;
      let a = await navigator.storage.estimate(),
        s = he(a.usage || 0),
        l = he(a.quota || 0);
      (r(
        `Renders per second: ${(this._render_counter / (wc / 1e3)).toFixed(2)} ${this._throbber}`,
      ),
        r(`Internal storage: ${s} / ${l}. ${n} files`));
      let u =
          await ft.default.declarativeNetRequest.getAvailableStaticRuleCount(),
        g = (await ft.default.declarativeNetRequest.getSessionRules()).length;
      if ((r(`Dec. Rules: ${g} / ${u}`), this.state)) {
        let p = this.state.discovered.size;
        r(`Tracking tabs: ${p}`);
      }
      (ft.default.runtime.lastError &&
        (r("Last runtime error:"), r(ft.default.runtime.lastError.toString())),
        (this.pre_logs.textContent = o),
        (this._render_counter = 0));
    }
  };
(_([d(HTMLButtonElement)], DebugPanel.prototype, "button_restart", 2),
  _([d(HTMLButtonElement)], DebugPanel.prototype, "button_storage", 2),
  _([d(HTMLButtonElement)], DebugPanel.prototype, "button_persistent", 2),
  _([d(HTMLButtonElement)], DebugPanel.prototype, "button_purge_files", 2),
  _([d(HTMLButtonElement)], DebugPanel.prototype, "button_reload", 2),
  _([d(HTMLPreElement)], DebugPanel.prototype, "pre_storage", 2),
  _([d(HTMLPreElement)], DebugPanel.prototype, "pre_logs", 2));
var hg = (au ? chrome : browser).runtime.getURL("/bitmaps/empty-thumbnail.png"),
  MediaPreview = class extends L {
    onMounted() {}
    onPersistentChanged() {}
    constructor() {
      (super("#media-preview-template"),
        (this.playing_p = Promise.resolve()),
        cc(async (i) => {
          if (this.state) {
            if (i.name == "on_preview_available") {
              let o = i.data.tab_id,
                r = i.data.media_hash;
              if (this.state.meta.tab_id == o && this.state.media.hash == r) {
                let t = i.data.filename,
                  s = await (
                    await (
                      await navigator.storage.getDirectory()
                    ).getFileHandle(t)
                  ).getFile(),
                  l = URL.createObjectURL(s);
                ((this.preview_url = l),
                  this.dom_video.classList.remove("preview_incoming"),
                  (this.dom_video.src = l));
              }
            } else if (i.name == "on_no_preview") {
              let o = i.data.media_hash;
              this.state.media.hash == o &&
                this.dom_video.classList.remove("preview_incoming");
            }
          }
        }));
    }
    activate() {
      !this.state ||
        this.persistent().preview_mode != "video" ||
        (this.preview_url
          ? (this.dom_video.src != this.preview_url &&
              (this.dom_video.src = this.preview_url),
            (this.playing_p = this.dom_video.play()),
            this.playing_p.catch(() => {
              (console.error("Invalid preview video"),
                (this.dom_video.src = ""));
            }))
          : (this.dom_video.classList.add("preview_incoming"),
            T({
              name: "request_preview",
              data: {
                tab_id: this.state.meta.tab_id,
                media_hash: this.state.media.hash,
              },
            })));
    }
    deactivate() {
      this.playing_p.finally(() => this.dom_video.pause());
    }
    onStateChanged(i) {
      ((this.state = i),
        (this.dom_video.poster = this.state.media.thumbnail_url
          .or(this.state.meta.thumbnail_url)
          .map((o) => o.href)
          .unwrapOr(hg)));
    }
  };
_([d(HTMLVideoElement, "video")], MediaPreview.prototype, "dom_video", 2);
var ou = se(ne(), 1);
var kc = ["mp4", "webm", "mkv"],
  xc = ["mp3", "m4a", "ogg"],
  zc = [...kc, ...xc];
function isVideoContainer(e) {
  return kc.includes(e);
}
function isAudioContainer(e) {
  return xc.includes(e);
}
function resolveOutputMuxer(e, i) {
  return isVideoContainer(e) ? resolveVideoMuxer(e, i) : resolveAudioMuxer(e);
}
function resolveAudioMuxer(e) {
  if (e == "mp3") return "mp3";
  if (e == "m4a") return "mp3";
  if (e == "ogg") return "mp3";
  throw new Error("Unreachable");
}
function resolveVideoMuxer(e, i) {
  if (e == "mp4") return i;
  if (e == "webm") return "mkv";
  if (e == "mkv") return "mkv";
  throw new Error("Unreachable");
}
function compareMediaQuality(e, i) {
  let n = compareResolution(e.size, i.size);
  if (n != 0) return n;
  let a = e.bitrate.unwrapOr(0),
    s = i.bitrate.unwrapOr(0);
  return a > s ? -1 : a < s ? 1 : 0;
}
function compareResolution(e, i) {
  let n = e.map((s) => s.height).unwrapOr(0),
    a = i.map((s) => s.height).unwrapOr(0);
  return n > a ? -1 : n < a ? 1 : 0;
}
function compareDiscoveredMedia(e, i, o) {
  if (e.is_youtube && i.is_youtube)
    if (e.type != i.type && e.type != "m3u8" && i.type != "m3u8") {
      let a = e.playlist[0].quality,
        s = i.playlist[0].quality,
        l = compareResolution(a.size, s.size);
      return l == 0 ? (e.type == "youtube_format" ? -1 : 1) : l;
    } else return e.discovery_timestamp_ms > i.discovery_timestamp_ms ? -1 : 1;
  if (e.is_youtube && !i.is_youtube) return -1;
  if (!e.is_youtube && i.is_youtube) return 1;
  if (e.type != i.type) {
    if (e.type == "mpd_playlist") return -1;
    if (i.type == "mpd_playlist") return 1;
    if (e.type == "m3u8_playlist") return -1;
    if (i.type == "m3u8_playlist") return 1;
  }
  if (e.type == "m3u8_playlist" && i.type == "m3u8_playlist") {
    if (typeof e.duration == "number" && i.duration === "live") return -1;
    if (typeof i.duration == "number" && e.duration === "live") return 1;
  }
  if (o.isSome()) {
    let a = o.value.hostname.split(".").slice(-2).join("."),
      s = e.initiator.map((u) => u.hostname).unwrapOr("noop"),
      l = i.initiator.map((u) => u.hostname).unwrapOr("noop");
    if (s != l) {
      let u = s.split(".").slice(-2).join("."),
        g = l.split(".").slice(-2).join(".");
      if (u == a) return -1;
      if (g == a) return 1;
    }
  }
  if (e.type == i.type) {
    let a = i.discovery_timestamp_ms - e.discovery_timestamp_ms;
    if (Math.abs(a) > 4e3)
      return i.discovery_timestamp_ms > e.discovery_timestamp_ms ? 1 : -1;
  }
  if (e.type == "m3u8_playlist" && i.type == "m3u8_playlist") {
    if (
      e.duration != i.duration &&
      typeof e.duration == "number" &&
      typeof i.duration == "number"
    ) {
      if (e.duration > i.duration) return -1;
      if (e.duration < i.duration) return 1;
    }
    let a = e.playlist[0].quality,
      s = i.playlist[0].quality;
    return compareMediaQuality(a, s);
  }
  if (e.type == "http_playlist" && i.type == "http_playlist") {
    let a = e.playlist[0].size,
      s = i.playlist[0].size;
    if (a.isSome() && s.isSome()) {
      let l = a.value,
        u = s.value;
      if (l > u) return -1;
      if (u > l) return 1;
    }
  }
  return 0;
}
function choosePlaylistEntry(e, i) {
  if (e.preferred_entry.isSome() && e.playlist[e.preferred_entry.value])
    return e.preferred_entry.value;
  if (i)
    for (let o of zc) {
      let r = 0;
      for (let { quality: t, demuxer: n } of e.playlist) {
        if (o == n && t.size.isSome() && t.size.value.height == i) return r;
        r++;
      }
    }
  else return 0;
  return 0;
}
function formatPlaylistEntry(e) {
  let i = [];
  if ((i.push(e.demuxer.toUpperCase()), e.quality.size.isSome())) {
    let { width: o, height: r } = e.quality.size.value;
    i.push(`${o}x${r}`);
  }
  return (
    e.quality.bitrate.isSome() && i.push(he(e.quality.bitrate.value) + "/s"),
    i.join(" - ")
  );
}
var ii = class ii extends L {
  constructor() {
    super("#media-selector-template");
    this.selected_entry = 0;
  }
  static {
    this.CHANGED_EVENT = "entry-changed";
  }
  onMounted() {}
  onPersistentChanged() {}
  getPlaylistEntry() {
    return this.selected_entry;
  }
  onStateChanged(o) {
    let r = !this.media;
    this.media = o;
    let t = choosePlaylistEntry(o, this.persistent().preferred_quality);
    if (((this.selected_entry = t), r)) {
      let n = o.playlist,
        a = [];
      for (let s = 0; s < n.length; s++) {
        let l = n[s];
        a.push({
          id: `menu_${s}`,
          text: formatPlaylistEntry(l),
          enabled: !0,
          onclick: () => {
            ((this.selected_entry = s), this.renderSelectedEntry());
            let u = new CustomEvent(ii.CHANGED_EVENT, {
              composed: !0,
            });
            this.dispatchEvent(u);
          },
        });
      }
      this.menu_options.invalidateState(a);
    }
    this.renderSelectedEntry();
  }
  renderSelectedEntry() {
    let o = this.media.playlist[this.selected_entry];
    if (
      (this.menu_options.setSelectedButton(`menu_${this.selected_entry}`),
      (this.span_demuxer.textContent = o.demuxer),
      o.quality.size.isSome())
    ) {
      M(this.span_size);
      let { height: r } = o.quality.size.value;
      ((this.span_size.textContent = `${r}p`),
        r < 1080
          ? this.span_size.setAttribute("quality", "meh")
          : r == 1080
            ? this.span_size.setAttribute("quality", "good")
            : this.span_size.setAttribute("quality", "very_good"));
    } else
      o.quality.bitrate.isSome()
        ? (M(this.span_size),
          (this.span_size.textContent = he(o.quality.bitrate.value)))
        : D(this.span_size);
  }
};
(_([d(NativeMenu)], ii.prototype, "menu_options", 2),
  _([d(HTMLSpanElement)], ii.prototype, "span_demuxer", 2),
  _([d(HTMLSpanElement)], ii.prototype, "span_size", 2));
var MediaSelector = ii;
var MediaTags = class extends L {
  constructor() {
    super("#media-tags-template");
  }
  onMounted() {}
  onPersistentChanged() {}
  onStateChanged({ media: i, advertize_premium: o }) {
    (D(this.tag_free),
      D(this.tag_hls),
      D(this.tag_m3u8),
      D(this.tag_http),
      D(this.tag_yt),
      D(this.tag_mpd),
      o.advertize && o.blocked && i.type == "http_playlist"
        ? M(this.tag_free)
        : i.type == "m3u8_playlist"
          ? M(this.tag_hls)
          : i.type == "m3u8"
            ? M(this.tag_m3u8)
            : i.type == "http_playlist"
              ? M(this.tag_http)
              : i.type == "youtube_format"
                ? M(this.tag_yt)
                : i.type == "mpd_playlist" && M(this.tag_mpd));
  }
};
(_([d(HTMLSpanElement)], MediaTags.prototype, "tag_hls", 2),
  _([d(HTMLSpanElement)], MediaTags.prototype, "tag_m3u8", 2),
  _([d(HTMLSpanElement)], MediaTags.prototype, "tag_http", 2),
  _([d(HTMLSpanElement)], MediaTags.prototype, "tag_yt", 2),
  _([d(HTMLSpanElement)], MediaTags.prototype, "tag_mpd", 2),
  _([d(HTMLSpanElement)], MediaTags.prototype, "tag_free", 2));
function matchesRemoteBehaviour(e, i, o) {
  let r = o.split(".").slice(-2).join("."),
    t = `behaviour_hash_${Jt(i)}`,
    n = `domain_hash_${Jt(r)}`,
    a = e.remote_behaviours.websites;
  return a.has(t) && a.get(t).has(n);
}
function shouldCarryQueryParameters(e, i) {
  return matchesRemoteBehaviour(e, "CARRY_GET_PARAM_WEBSITES", i.hostname);
}
var xg = [
  "youtube_video_preview",
  "youtube_audio_only",
  "youtube_audio_video_one_source",
  "youtube_audio_video_two_sources",
];
function isYoutubeDownloadStrategy(e) {
  return xg.includes(e.strategy);
}
function buildMpdArgumentsPanel(e, i, o, r, t, n, a) {
  r = ze(r);
  let s = `download_${crypto.randomUUID()}`,
    l = Be(e.sent_headers),
    u = e.playlist[n],
    g = e.playlist[n].index,
    p = shouldThrottleDownload(a, e);
  if (i || isAudioContainer(e.playlist[n].demuxer))
    return {
      download_id: s,
      headers: l,
      good_basename: r,
      subdir: t,
      save_as: o,
      will_use_jsfetch: !0,
      muxer: "mp3",
      strategy: "mpd_audio_only",
      url: e.master_url,
      carry_get_params: shouldCarryQueryParameters(a, e.master_url),
      entry: g,
      duration: e.duration,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: p,
      cache: e.cache,
      audio_language: u.audio_language,
      audio_track_id: u.audio_id,
    };
  {
    let h = e.subtitles.andThen((c) =>
      Gi(c, a.subtitle_languages, (b) => b.language),
    );
    return {
      download_id: s,
      headers: l,
      good_basename: r,
      subdir: t,
      save_as: o,
      will_use_jsfetch: !0,
      muxer: a.preferred_av_muxer,
      strategy: "mpd_audio_video_one_source",
      url: e.master_url,
      carry_get_params: shouldCarryQueryParameters(a, e.master_url),
      entry: g,
      duration: e.duration,
      extension: a.preferred_av_muxer,
      is_youtube: e.is_youtube,
      throttle: p,
      cache: e.cache,
      subtitles: h,
      audio_language: u.audio_language,
      audio_track_id: u.audio_id,
    };
  }
}
function buildYoutubeArgumentsPanel(e, i, o, r, t, n, a) {
  r = ze(r);
  let s = `download_${crypto.randomUUID()}`,
    l = e.playlist[n],
    u = Be(e.sent_headers),
    g = shouldThrottleDownload(a, e);
  if (l.av.video == !1)
    return {
      download_id: s,
      headers: u,
      good_basename: r,
      subdir: t,
      save_as: o,
      will_use_jsfetch: !1,
      strategy: "youtube_audio_only",
      muxer: "mp3",
      url: l.av.audio.url,
      carry_get_params: shouldCarryQueryParameters(a, l.av.audio.url),
      content_length: l.av.audio.content_length,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: g,
      cache: e.cache,
      duration: e.duration,
      audio_language: l.audio_language,
    };
  if (i)
    return l.av.audio
      ? {
          download_id: s,
          headers: u,
          good_basename: r,
          subdir: t,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_only",
          muxer: "mp3",
          url: l.av.audio.url,
          carry_get_params: shouldCarryQueryParameters(a, l.av.audio.url),
          content_length: l.av.audio.content_length,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: g,
          cache: e.cache,
          duration: e.duration,
          audio_language: l.audio_language,
        }
      : {
          download_id: s,
          headers: u,
          good_basename: r,
          subdir: t,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_only",
          muxer: "mp3",
          url: l.av.video.url,
          carry_get_params: shouldCarryQueryParameters(a, l.av.video.url),
          content_length: l.av.video.content_length,
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: g,
          cache: e.cache,
          duration: e.duration,
          audio_language: l.audio_language,
        };
  {
    let p = l.demuxer,
      h = resolveVideoMuxer(p, a.preferred_av_muxer),
      c = e.subtitles.andThen((b) =>
        Gi(b, a.subtitle_languages, (z) => z.language),
      );
    return l.av.audio
      ? {
          download_id: s,
          headers: u,
          good_basename: r,
          subdir: t,
          muxer: h,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_video_two_sources",
          url: l.av.video.url,
          carry_get_params: shouldCarryQueryParameters(a, l.av.video.url),
          content_length: l.av.video.content_length,
          url_audio: l.av.audio.url,
          audio_content_length: l.av.audio.content_length,
          extension: h,
          is_youtube: e.is_youtube,
          throttle: g,
          cache: e.cache,
          subtitles: c,
          audio_language: l.audio_language,
        }
      : {
          download_id: s,
          headers: u,
          good_basename: r,
          subdir: t,
          muxer: h,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "youtube_audio_video_one_source",
          url: l.av.video.url,
          carry_get_params: shouldCarryQueryParameters(a, l.av.video.url),
          content_length: l.av.video.content_length,
          extension: h,
          is_youtube: e.is_youtube,
          throttle: g,
          cache: e.cache,
          subtitles: c,
          audio_language: l.audio_language,
        };
  }
}
function buildHlsPlaylistArgumentsPanel(e, i, o, r, t, n, a) {
  r = ze(r);
  let s = `download_${crypto.randomUUID()}`,
    l = e.playlist[n],
    u = Be(e.sent_headers),
    g = e.duration,
    p = shouldThrottleDownload(a, e);
  if (l.av.video == !1)
    return {
      download_id: s,
      headers: u,
      good_basename: r,
      subdir: t,
      duration: g,
      save_as: o,
      will_use_jsfetch: !1,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: l.av.audio,
      carry_get_params: shouldCarryQueryParameters(a, l.av.audio),
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: p,
      cache: e.cache,
      audio_language: l.audio_language,
    };
  if (i)
    return l.av.audio
      ? {
          download_id: s,
          headers: u,
          good_basename: r,
          subdir: t,
          duration: g,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_only",
          muxer: "mp3",
          url: l.av.audio,
          carry_get_params: shouldCarryQueryParameters(a, l.av.audio),
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: p,
          cache: e.cache,
          audio_language: l.audio_language,
        }
      : {
          download_id: s,
          headers: u,
          good_basename: r,
          subdir: t,
          duration: g,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_only",
          muxer: "mp3",
          url: l.av.video,
          carry_get_params: shouldCarryQueryParameters(a, l.av.video),
          extension: "mp3",
          is_youtube: e.is_youtube,
          throttle: p,
          cache: e.cache,
          audio_language: l.audio_language,
        };
  {
    let h = l.demuxer,
      c = resolveVideoMuxer(h, a.preferred_av_muxer),
      b = e.subtitles.andThen((z) =>
        Gi(z, a.subtitle_languages, (q) => q.language),
      );
    return l.av.audio
      ? {
          download_id: s,
          headers: u,
          good_basename: r,
          subdir: t,
          muxer: c,
          duration: g,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_video_two_sources",
          url: l.av.video,
          url_audio: l.av.audio,
          carry_get_params: shouldCarryQueryParameters(a, l.av.video),
          extension: c,
          is_youtube: e.is_youtube,
          throttle: p,
          cache: e.cache,
          subtitles: b,
          audio_language: l.audio_language,
        }
      : {
          download_id: s,
          headers: u,
          good_basename: r,
          subdir: t,
          muxer: c,
          duration: g,
          save_as: o,
          will_use_jsfetch: !1,
          strategy: "m3u8_audio_video_one_source",
          url: l.av.video,
          carry_get_params: shouldCarryQueryParameters(a, l.av.video),
          extension: c,
          is_youtube: e.is_youtube,
          throttle: p,
          cache: e.cache,
          subtitles: b,
          audio_language: l.audio_language,
        };
  }
}
function buildDirectHlsArgumentsPanel(e, i, o, r, t, n) {
  r = ze(r);
  let a = `download_${crypto.randomUUID()}`,
    s = Be(e.sent_headers),
    l = e.url,
    u = e.duration,
    g = shouldThrottleDownload(n, e);
  if (i || isAudioContainer(e.demuxer))
    return {
      save_as: o,
      subdir: t,
      duration: u,
      will_use_jsfetch: !0,
      download_id: a,
      headers: s,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: l,
      carry_get_params: shouldCarryQueryParameters(n, l),
      good_basename: r,
      extension: "mp3",
      is_youtube: e.is_youtube,
      throttle: g,
      cache: e.cache,
      audio_language: W,
    };
  {
    let p = resolveVideoMuxer(e.demuxer, n.preferred_av_muxer),
      h = e.subtitles.andThen((c) =>
        Gi(c, n.subtitle_languages, (b) => b.language),
      );
    return {
      download_id: a,
      headers: s,
      subdir: t,
      duration: u,
      will_use_jsfetch: !0,
      save_as: o,
      strategy: "m3u8_audio_video_one_source",
      muxer: p,
      url: l,
      carry_get_params: shouldCarryQueryParameters(n, l),
      good_basename: r,
      extension: p,
      is_youtube: e.is_youtube,
      throttle: g,
      cache: e.cache,
      subtitles: h,
      audio_language: W,
    };
  }
}
function buildHttpArgumentsPanel(e, i, o, r, t, n, a) {
  r = ze(r);
  let s = `download_${crypto.randomUUID()}`,
    l = e.playlist[n],
    u = e.extension == "flv" && l.size.isNone(),
    g =
      (e.libav_demuxer.isSome() &&
        isVideoContainer(e.libav_demuxer.value) &&
        e.supports_byte_ranges) ||
      u,
    p = shouldThrottleDownload(a, e);
  if (i) {
    let h = l.av.audio || l.av.video;
    return {
      save_as: o,
      download_id: s,
      subdir: t,
      will_use_jsfetch: !0,
      headers: Be(e.sent_headers),
      strategy: "http_strip_audio_jsfetch",
      url: h,
      carry_get_params: shouldCarryQueryParameters(a, h),
      good_basename: r,
      muxer: "mp3",
      extension: "mp3",
      is_youtube: e.is_youtube,
      size: l.av.audio ? W : l.size,
      throttle: p,
      cache: e.cache,
    };
  }
  if (g) {
    let h,
      c = "";
    if (
      (e.libav_demuxer.isSome()
        ? ((h = resolveOutputMuxer(
            e.libav_demuxer.value,
            a.preferred_av_muxer,
          )),
          (c = h))
        : ((h = a.preferred_av_muxer), (c = a.preferred_av_muxer)),
      l.av.audio)
    ) {
      let b = l.demuxer,
        z = resolveVideoMuxer(b, a.preferred_av_muxer);
      return {
        save_as: o,
        download_id: s,
        subdir: t,
        will_use_jsfetch: !0,
        headers: Be(e.sent_headers),
        strategy: "http_audio_video_two_sources_jsfetch",
        url: l.av.video,
        url_audio: l.av.audio,
        carry_get_params: shouldCarryQueryParameters(a, l.av.video),
        good_basename: r,
        muxer: z,
        extension: z,
        size: l.size,
        duration: e.duration,
        is_youtube: e.is_youtube,
        throttle: p,
        cache: e.cache,
      };
    } else
      return {
        save_as: o,
        download_id: s,
        subdir: t,
        will_use_jsfetch: !0,
        headers: Be(e.sent_headers),
        strategy: "http_audio_video_one_source_jsfetch",
        url: l.av.video,
        carry_get_params: shouldCarryQueryParameters(a, l.av.video),
        good_basename: r,
        muxer: h,
        extension: c,
        size: l.size,
        is_youtube: e.is_youtube,
        throttle: p,
        cache: e.cache,
      };
  } else
    return {
      save_as: o,
      download_id: s,
      subdir: t,
      will_use_jsfetch: !1,
      headers: Be(e.sent_headers),
      strategy: "http_audio_video_one_source",
      url: l.av.video,
      carry_get_params: shouldCarryQueryParameters(a, l.av.video),
      good_basename: r,
      size: l.size,
      extension: e.extension,
      is_youtube: e.is_youtube,
      throttle: p,
      cache: e.cache,
    };
}
function shouldThrottleDownload(e, i) {
  return i.is_youtube && e.youtube_throttle;
}
function buildDownloadArgumentsPanel(e, i, o, r, t, n, a) {
  if (e.type == "http_playlist")
    return buildHttpArgumentsPanel(e, i, o, r, t, n, a);
  if (e.type == "m3u8") return buildDirectHlsArgumentsPanel(e, i, o, r, t, a);
  if (e.type == "m3u8_playlist")
    return buildHlsPlaylistArgumentsPanel(e, i, o, r, t, n, a);
  if (e.type == "youtube_format") {
    if (typeof n == "number")
      return buildYoutubeArgumentsPanel(e, i, o, r, t, n, a);
    throw "Missing playlist_entry";
  } else if (e.type == "mpd_playlist") {
    if (typeof n == "number")
      return buildMpdArgumentsPanel(e, i, o, r, t, n, a);
    throw "Missing playlist_entry";
  } else throw new Error("Unreachable");
}
var DiscoveredMedia = class extends L {
  constructor() {
    super("#media-discovered-template");
    this.filename_is_dirty = !1;
    this.action = "download";
  }
  onMounted() {
    (me && this.span_filename.classList.add("firefox"),
      (this.span_filename.onkeydown = (o) =>
        o.key == "Enter"
          ? (this.box_combo
              .querySelector('button:not([hidden="true"])')
              .focus(),
            !1)
          : !0),
      this.span_filename.addEventListener("blur", () => {
        let o = ze(this.span_filename.textContent || "");
        (this.span_filename.textContent != o &&
          ((this.span_filename.textContent = o), (this.filename_is_dirty = !0)),
          window.getSelection()?.removeAllRanges());
      }));
  }
  onPersistentChanged() {}
  onStateChanged(o) {
    let { media: r, meta: t } = o,
      n = !this.media;
    if (((this.meta = t), (this.media = r), !n)) {
      if (this.action != t.default_action) {
        ((this.action = t.default_action),
          this.updateActionButtons(),
          this.updateMediaSelectorVisibility());
        let g = this.buildArgs(!0);
        this.span_extension.textContent = g.extension;
      }
      if (!this.filename_is_dirty) {
        let g = this.buildArgs(!1);
        this.span_filename.textContent = g.good_basename;
      }
      this.span_directory.textContent = this.meta.smartnaming_rule.subdir;
      return;
    }
    ((this.action = t.default_action),
      this.updateActionButtons(),
      this.setupMediaSelector());
    let a = this.media.type != "http_playlist" || this.media.extension == "mp4";
    (this.menu_options.invalidateState([
      {
        id: "menu_do_download",
        key: "download_audio_and_video_menu",
        enabled: !0,
        onclick: () => {
          ((this.action = "download"), this.doDownload());
        },
      },
      {
        id: "menu_do_audio_only",
        key: "download_audio_only_menu",
        enabled: a,
        onclick: () => this.doDownloadAudio(),
      },
      Xt,
      {
        id: "menu_set_default_action_download",
        key: "always_download_audio_and_video_for_this_website",
        enabled: !0,
        onclick: () => l("download"),
      },
      {
        id: "menu_set_default_action_audio_only",
        key: "audio_only_for_this_website",
        enabled: a,
        onclick: () => l("download_audio"),
      },
      Xt,
      {
        id: "menu_do_copy_link",
        key: "copy_url",
        enabled: !0,
        onclick: () => this.doCopyLink(),
      },
      Xt,
      {
        id: "menu_do_details",
        key: "details",
        enabled: !0,
        onclick: () => {
          ou.default.tabs.create({
            url: `/content/details.html?tab_id=${t.tab_id}&media_hash=${r.hash}`,
          });
        },
      },
    ]),
      this.media_tags.invalidateState({
        media: r,
        advertize_premium: o.advertize_premium,
      }),
      o.advertize_premium.advertize &&
      o.advertize_premium.blocked &&
      o.media.type != "http_playlist"
        ? this.action_download.setAttribute(
            "tooltip",
            C("get_premium_button", [], new Map()),
          )
        : this.action_download.removeAttribute("tooltip"));
    let l = (g) => {
      if (!this.meta?.url.isSome()) return;
      let p = this.meta.url.value.hostname;
      (T({
        name: "set_default_action",
        data: {
          action: g,
          hostname: p,
        },
      }),
        (this.action = g),
        this.updateMediaSelectorVisibility());
      let h = this.buildArgs(!0);
      ((this.span_extension.textContent = h.extension),
        this.updateActionButtons());
    };
    j(this.box_drm, r.has_drm);
    let u = this.buildArgs(!1);
    ((this.span_directory.textContent = u.subdir),
      (this.span_filename.textContent = u.good_basename),
      (this.span_extension.textContent = u.extension),
      this.updateActionButtons(),
      (this.action_copy.onclick = () => this.doCopyLink()),
      (this.action_download.onclick = () => {
        ((this.action = "download"), this.doDownload());
      }),
      (this.action_download_as.onclick = () => this.doDownloadAs()),
      (this.action_download_audio.onclick = () => {
        ((this.action = "download_audio"), this.doDownload());
      }),
      this.setupFilenameEditor());
  }
  doCopyLink() {
    let o = this.buildArgs(!0);
    navigator.clipboard.writeText(o.url.href);
  }
  doDownload() {
    let o = this.buildArgs(!0);
    T({
      name: "do_download",
      data: {
        download_args: re(o),
        meta: re(this.meta),
        media: re(this.media),
      },
    });
  }
  doDownloadAs() {
    ((this.action = "download_as"), this.doDownload());
  }
  doDownloadAudio() {
    ((this.action = "download_audio"), this.doDownload());
  }
  updateMediaSelectorVisibility() {
    "playlist" in this.media ? M(this.media_selector) : D(this.media_selector);
  }
  setupMediaSelector() {
    let o = this.media;
    ("playlist" in o &&
      (this.media_selector.invalidateState(o),
      this.media_selector.addEventListener(MediaSelector.CHANGED_EVENT, (r) => {
        let { extension: t } = this.buildArgs(!0);
        this.span_extension.textContent = t;
        let n = this.media_selector.getPlaylistEntry();
        T({
          name: "update_media_preferred_entry",
          data: {
            playlist_index: n,
            media_hash: o.hash,
          },
        });
      })),
      this.updateMediaSelectorVisibility());
  }
  updateActionButtons() {
    this.action &&
      (this.action == "copy"
        ? this.menu_options.setSelectedButton("menu_set_default_action_copy")
        : this.action == "download"
          ? this.menu_options.setSelectedButton(
              "menu_set_default_action_download",
            )
          : this.action == "download_audio"
            ? this.menu_options.setSelectedButton(
                "menu_set_default_action_audio_only",
              )
            : this.action == "download_as"
              ? this.menu_options.setSelectedButton(
                  "menu_set_default_action_download_as",
                )
              : this.action,
      j(this.action_copy, this.action == "copy"),
      j(this.action_download, this.action == "download"),
      j(this.action_download_as, this.action == "download_as"),
      j(this.action_download_audio, this.action == "download_audio"));
  }
  setupFilenameEditor() {
    let o = !1;
    (this.span_filename.addEventListener("blur", () => {
      ((o = !0), setTimeout(() => (o = !1), 500), ni(this.button_rename_2));
    }),
      this.span_filename.addEventListener("focus", () => {
        to(this.button_rename_2);
      }));
    let r = () => {
      let t = window.getSelection();
      if ((t && t.removeAllRanges(), o)) return;
      let n = document.createRange();
      (n.selectNodeContents(this.span_filename),
        t && t.addRange(n),
        this.span_filename.focus());
    };
    ((this.button_rename_1.onclick = r), (this.button_rename_2.onclick = r));
  }
  buildArgs(o) {
    let r = this.action == "download_audio",
      t = this.action == "download_as",
      n = this.media,
      a = jd(n, this.meta),
      s = o ? ze(this.span_filename.textContent) : a.basename,
      l;
    if ("playlist" in n) {
      let g = o
        ? this.media_selector.getPlaylistEntry()
        : choosePlaylistEntry(n, this.persistent().preferred_quality);
      l = buildDownloadArgumentsPanel(
        n,
        r,
        t,
        s,
        a.subdir,
        g,
        this.persistent(),
      );
    } else
      l = buildDownloadArgumentsPanel(
        n,
        r,
        t,
        s,
        a.subdir,
        void 0,
        this.persistent(),
      );
    return (l.strategy == "m3u8_audio_only" && (l.will_use_jsfetch = !0), l);
  }
};
(_([d(HTMLSpanElement)], DiscoveredMedia.prototype, "span_extension", 2),
  _([d(HTMLSpanElement)], DiscoveredMedia.prototype, "span_filename", 2),
  _([d(HTMLSpanElement)], DiscoveredMedia.prototype, "span_directory", 2),
  _([d(NativeMenu)], DiscoveredMedia.prototype, "menu_options", 2),
  _([d(MediaTags)], DiscoveredMedia.prototype, "media_tags", 2),
  _([d(HTMLElement)], DiscoveredMedia.prototype, "box_combo", 2),
  _([d(HTMLElement)], DiscoveredMedia.prototype, "box_drm", 2),
  _(
    [d(HTMLButtonElement)],
    DiscoveredMedia.prototype,
    "action_download_audio",
    2,
  ),
  _([d(HTMLButtonElement)], DiscoveredMedia.prototype, "action_download", 2),
  _([d(HTMLButtonElement)], DiscoveredMedia.prototype, "action_download_as", 2),
  _([d(HTMLButtonElement)], DiscoveredMedia.prototype, "action_copy", 2),
  _([d(MediaSelector)], DiscoveredMedia.prototype, "media_selector", 2),
  _([d(HTMLButtonElement)], DiscoveredMedia.prototype, "button_rename_1", 2),
  _([d(HTMLButtonElement)], DiscoveredMedia.prototype, "button_rename_2", 2));
var DownloadingMedia = class extends L {
  constructor() {
    super("#media-downloading-template");
    this.interruptable = !1;
  }
  onMounted() {
    this.button_stop.onclick = () => {
      this.download_id &&
        T({
          name: "abort_download",
          data: {
            download_id: this.download_id,
          },
        });
    };
  }
  onPersistentChanged() {
    this.button_stop.textContent = C(
      this.interruptable ? "stop" : "cancel",
      [],
      this.persistent().custom_strings.addon,
    );
  }
  onStateChanged(o) {
    let r = o.download_args,
      t = r.subdir + r.good_basename + "." + r.extension;
    if (
      ((this.interruptable =
        !isYoutubeDownloadStrategy(r) &&
        r.strategy != "http_audio_video_one_source"),
      this.span_filename.textContent != t &&
        (this.span_filename.textContent = t),
      (this.download_id = o.download_args.download_id),
      this.media_tags.invalidateState({
        media: o.media,
        advertize_premium: {
          advertize: !1,
        },
      }),
      o.status == "queuing")
    )
      (D(this.span_percent),
        D(this.span_bitrate),
        ni(this.button_stop),
        D(this.span_live_icon),
        this.div_progressbar.classList.add("undefined"),
        (this.div_progressbar.style.transform = "unset"));
    else if (o.status == "downloading") {
      if (
        (M(this.span_percent),
        M(this.span_bitrate),
        ni(this.button_stop),
        this.div_progressbar.classList.remove("undefined"),
        (this.span_bitrate.textContent = he(o.bitrate, 2) + "/s"),
        o.percent.is_known)
      ) {
        D(this.span_live_icon);
        let n = Number(o.percent.value);
        (Number.isFinite(n) || (n = 0),
          (n = Math.max(0, Math.min(100, n))),
          (this.span_percent.textContent = Math.floor(n) + "%"));
        let a = 100 - n;
        this.div_progressbar.style.transform = `translateX(-${a}%)`;
      } else {
        if ((M(this.span_live_icon), o.output_duration_s)) {
          let n = Gt(o.output_duration_s);
          this.span_percent.textContent = n;
        } else this.span_percent.textContent = "";
        this.div_progressbar.style.transform = "unset";
      }
    } else
      o.status == "finalizing" &&
        (M(this.span_percent),
        to(this.button_stop),
        D(this.span_bitrate),
        D(this.span_live_icon),
        this.div_progressbar.classList.remove("undefined"),
        (this.span_percent.textContent = ""),
        (this.div_progressbar.style.transform = "unset"));
  }
};
(_([d(HTMLSpanElement)], DownloadingMedia.prototype, "span_filename", 2),
  _([d(HTMLSpanElement)], DownloadingMedia.prototype, "span_percent", 2),
  _([d(HTMLSpanElement)], DownloadingMedia.prototype, "span_live_icon", 2),
  _([d(HTMLSpanElement)], DownloadingMedia.prototype, "span_bitrate", 2),
  _([d(HTMLDivElement)], DownloadingMedia.prototype, "div_progressbar", 2),
  _([d(HTMLButtonElement)], DownloadingMedia.prototype, "button_stop", 2),
  _([d(MediaTags)], DownloadingMedia.prototype, "media_tags", 2));
var bt = se(ne(), 1);
function Tg(e, i) {
  let o = window.navigator.userAgent,
    r = "/";
  o.includes("Windows") && (r = "\\");
  let n = e.split(r).pop();
  return i + n;
}
var DownloadedMedia = class extends L {
  constructor() {
    super("#media-downloaded-template");
  }
  onMounted() {
    ((this.button_play.onclick = () => {
      if (!this.browser_download_id) return;
      let r = this.browser_download_id,
        t = async () => {
          let a = {
            permissions: ["downloads.open"],
          };
          (await bt.default.permissions.request(a)) &&
            (await bt.default.downloads.open(r).catch(() => {}));
        };
      bt.default.downloads.open
        ? bt.default.downloads.open(r).catch(() => {
            t().catch(() => {});
          })
        : t().catch(() => {});
    }),
      (this.button_not_playing.hidden = !0),
      (this.button_dir.onclick = () => {
        this.browser_download_id &&
          bt.default.downloads.show(this.browser_download_id).catch(() => {});
      }));
    let i = () => {
        (this.classList.add("disappearing"),
          this.browser_download_id &&
            T({
              name: "rm_download",
              data: {
                browser_download_id: this.browser_download_id,
              },
            }));
      },
      o = () => {
        this.browser_download_id &&
          T({
            name: "retry_download",
            data: {
              media_hash: this.media_hash,
              tab_id: this.tab_id,
            },
          });
      };
    ((this.button_rm.onclick = i), (this.button_retry.onclick = o));
  }
  onPersistentChanged() {}
  onStateChanged(i) {
    let { meta: o, ded: r } = i,
      t = !o;
    if (
      (this.classList.toggle("collapsed", t),
      this.classList.remove("disappearing"),
      (this.p_filename.textContent = Tg(r.path, r.subdir || ct)),
      (this.browser_download_id = r.browser_download_id),
      (this.downloaded_id = r.downloaded_id),
      (this.media_hash = r.media_hash),
      o && (this.tab_id = o.tab_id),
      r.origin_url)
    ) {
      M(this.button_origin);
      let n = null;
      (r.origin_favicon_url && (n = new URL(r.origin_favicon_url)),
        this.button_origin.invalidateState({
          url: new URL(r.origin_url),
          origin_favicon_url: n,
          has_drm: r.has_drm,
        }));
    } else D(this.button_origin);
  }
};
(_([d(HTMLParagraphElement)], DownloadedMedia.prototype, "p_filename", 2),
  _([d(HTMLButtonElement)], DownloadedMedia.prototype, "button_play", 2),
  _([d(HTMLButtonElement)], DownloadedMedia.prototype, "button_not_playing", 2),
  _([d(HTMLButtonElement)], DownloadedMedia.prototype, "button_dir", 2),
  _([d(HTMLButtonElement)], DownloadedMedia.prototype, "button_rm", 2),
  _([d(HTMLButtonElement)], DownloadedMedia.prototype, "button_retry", 2),
  _([d(MediaOriginButton)], DownloadedMedia.prototype, "button_origin", 2));
var MediaMetadata = class extends L {
  constructor() {
    super("#media-meta-template");
  }
  onMounted() {}
  onPersistentChanged() {}
  onStateChanged(i) {
    let { media: o, meta: r } = i,
      t = !1;
    if (
      ("duration" in o
        ? (M(this.p_duration),
          typeof o.duration == "number"
            ? ((this.p_duration.textContent = Gt(o.duration)),
              (o.type == "m3u8_playlist" ||
                o.type == "youtube_format" ||
                o.type == "mpd_playlist") &&
                (t = !0))
            : o.duration == "live"
              ? (this.p_duration.textContent = "live")
              : D(this.p_duration))
        : D(this.p_duration),
      o.type == "http_playlist")
    ) {
      let n = o.playlist[0].size;
      n.isSome() ? (this.p_size.textContent = he(n.value)) : D(this.p_size);
    } else D(this.p_size);
    ("subtitles" in o
      ? j(this.p_subtitles, o.subtitles.isSome())
      : D(this.p_subtitles),
      j(this.p_star, t),
      r.favicon_url.isSome()
        ? (this.div_favicon.style.backgroundImage = `url(${r.favicon_url.value.href})`)
        : D(this.div_favicon));
  }
};
(_([d(HTMLParagraphElement)], MediaMetadata.prototype, "p_duration", 2),
  _([d(HTMLParagraphElement)], MediaMetadata.prototype, "p_size", 2),
  _([d(HTMLParagraphElement)], MediaMetadata.prototype, "p_star", 2),
  _([d(HTMLParagraphElement)], MediaMetadata.prototype, "p_subtitles", 2),
  _([d(HTMLDivElement)], MediaMetadata.prototype, "div_favicon", 2));
var MediaItem = class extends L {
  constructor() {
    super("#media-template");
    this.status = "discovered";
    this.preview_mode = "image";
    this.advertize_premium = {
      advertize: !1,
    };
  }
  onMounted() {
    ((this.dismiss_button.onclick = () => {
      this.media &&
        this.meta &&
        T({
          name: "dismiss_media",
          data: {
            tab_id: this.meta.tab_id,
            media_hash: this.media.hash,
          },
        });
    }),
      this.addEventListener("mouseenter", () => {
        (this.status == "discovered" || this.status == "downloaded") &&
          this.media_preview.activate();
      }),
      this.addEventListener("mouseleave", () => {
        this.media_preview.deactivate();
      }));
  }
  onPersistentChanged() {}
  toggleHiddens() {
    (j(this.vbox_dismiss, this.status != "downloading"),
      j(this.media_downloading, this.status == "downloading"),
      j(this.media_downloaded, this.status == "downloaded"),
      j(this.media_discovered, this.status == "discovered"),
      j(this.stack_top, this.preview_mode != "none"));
  }
  toggleBlocked() {
    if (this.status === "discovered" && this.media) {
      let o =
        this.advertize_premium.advertize && this.advertize_premium.blocked;
      this.classList.toggle("blocked", o && this.media.type != "http_playlist");
    } else this.classList.remove("blocked");
  }
  activatePreview() {
    this.media_preview.activate();
  }
  isDiscovered() {
    this.status != "discovered" &&
      ((this.status = "discovered"),
      this.toggleHiddens(),
      this.toggleBlocked());
  }
  isDownloading(o) {
    ((this.status = "downloading"),
      this.media_downloading.invalidateState(o),
      this.toggleHiddens(),
      this.toggleBlocked(),
      this.media_preview.deactivate());
  }
  isDownloaded(o) {
    this.status != "downloaded" &&
      ((this.status = "downloaded"),
      this.media_downloaded.invalidateState({
        ded: o,
        meta: this.meta,
      }),
      this.toggleHiddens(),
      this.toggleBlocked(),
      this.media_preview.deactivate());
  }
  onStateChanged(o) {
    if (
      ((this.advertize_premium = o.advertize_premium),
      this.meta && Yd(this.meta, o.meta))
    ) {
      this.toggleBlocked();
      return;
    }
    ((this.media = o.media),
      (this.meta = o.meta),
      this.media_preview.invalidateState(o),
      this.media_discovered.invalidateState(o),
      this.media_meta.invalidateState(o),
      this.toggleHiddens(),
      this.toggleBlocked());
  }
};
(_(
  [d(MediaPreview, "com-media-preview")],
  MediaItem.prototype,
  "media_preview",
  2,
),
  _(
    [d(DiscoveredMedia, "com-media-discovered")],
    MediaItem.prototype,
    "media_discovered",
    2,
  ),
  _(
    [d(DownloadingMedia, "com-media-downloading")],
    MediaItem.prototype,
    "media_downloading",
    2,
  ),
  _(
    [d(DownloadedMedia, "com-media-downloaded")],
    MediaItem.prototype,
    "media_downloaded",
    2,
  ),
  _([d(MediaMetadata, "com-media-meta")], MediaItem.prototype, "media_meta", 2),
  _(
    [d(DismissButton, "com-dismiss-button")],
    MediaItem.prototype,
    "dismiss_button",
    2,
  ),
  _([d(HTMLElement)], MediaItem.prototype, "stack_top", 2),
  _([d(HTMLElement)], MediaItem.prototype, "vbox_dismiss", 2));
var yt = se(ne(), 1);
var PremiumBanner = class extends L {
  constructor() {
    super("#banner-template");
  }
  onPersistentChanged() {
    j(
      this.dismiss_button,
      !this.persistent().remote_behaviours.advertize_premium,
    );
  }
  onStateChanged(i) {
    let o =
      i.advertize_premium.advertize &&
      i.advertize_premium.blocked &&
      i.advertize_premium.snooze;
    (this.premium_button.classList.toggle("snooze", o), j(this, false));
  }
  onMounted() {
    ((this.dismiss_button.onclick = () => {
      T({
        name: "dismiss_banner",
        data: null,
      });
    }),
      (this.premium_button.hidden = !0),
      (this.help_button.hidden = !0),
      setInterval(() => this.updateCounter(), 1e3),
      this.updateCounter());
  }
  updateCounter() {
    let i = this.persistent().lsd,
      r = new Date().getTime() - i,
      t = 7200 * 1e3,
      n = r < t;
    if ((j(this.progress_box, n), j(this.no_progress_box, !n), n)) {
      let a = (t - r) / 1e3;
      this.duration.textContent = Gt(a);
      let s = (100 * r) / t;
      this.progress_bar_blue.style.transform = `translateX(-${s}%)`;
    }
  }
};
(_([d(HTMLButtonElement)], PremiumBanner.prototype, "premium_button", 2),
  _([d(HTMLButtonElement)], PremiumBanner.prototype, "help_button", 2),
  _([d(HTMLElement)], PremiumBanner.prototype, "duration", 2),
  _([d(HTMLElement)], PremiumBanner.prototype, "progress_box", 2),
  _([d(HTMLElement)], PremiumBanner.prototype, "no_progress_box", 2),
  _([d(HTMLElement)], PremiumBanner.prototype, "progress_bar_blue", 2),
  _(
    [d(DismissButton, "com-dismiss-button")],
    PremiumBanner.prototype,
    "dismiss_button",
    2,
  ));
var MainPanel = class extends L {
  constructor() {
    super("#main-template");
    this.current_tab_id = W;
    this.preview_was_autoplayed = !1;
    this.dockmode = document.documentElement.getAttribute("dockmode");
  }
  enableDebug() {
    (M(this.debug), this.debug.activate());
  }
  onPersistentChanged() {
    j(this.box_nomedia, !this.persistent().hide_nomedia_box);
    let o = !!this.downloaded_container.querySelector("com-media-downloaded");
    (j(this.downloaded, this.persistent().show_transient_history && o),
      this.HandleNotifications(
        this.persistent().remote_notifications,
        "persistent",
      ),
      this.ToggleRemoveNotificationsButton());
  }
  scrollUp() {
    this.box_main.scroll({
      top: 0,
    });
  }
  HandleNotifications(o, r) {
    let t = !1;
    {
      let n = new Map(),
        a = [],
        s = o.size >= 2;
      j(this.button_rm_all_notifications, s);
      let l = this.notification_container.querySelectorAll(
        `com-notification.${r}`,
      );
      for (let u of l) o.has(u.id) ? n.set(u.id, u) : a.push(u);
      a.forEach((u) => u.remove());
      for (let [u, g] of o.entries()) {
        let p = n.get(u);
        p ||
          ((p = document.createElement("com-notification")),
          (p.className = `${r} roundedbox`),
          (p.id = u),
          this.notification_container.appendChild(p),
          p.invalidateState(g),
          (t = !0));
      }
    }
    t && this.scrollUp();
  }
  ToggleRemoveNotificationsButton() {
    let o = this.notification_container.childNodes.length >= 2;
    j(this.button_rm_all_notifications, o);
  }
  onStateChanged(o) {
    let t =
        o.advertize_premium.advertize &&
        o.advertize_premium.blocked &&
        o.advertize_premium.snooze,
      n = o.current_win_tab.tab_id;
    (this.current_tab_id.isSome() &&
      n.isSome() &&
      this.current_tab_id.value != n.value &&
      ((t = !0), this.button_report_nomedia.reset()),
      (this.current_tab_id = o.current_win_tab.tab_id),
      this.premium_banner.invalidateState(o),
      this.debug.invalidateState(o),
      this.HandleNotifications(o.notifications, "session"),
      this.ToggleRemoveNotificationsButton(),
      t && this.scrollUp());
    let a = W,
      s = new Map();
    if (o.current_win_tab.tab_id.isSome()) {
      let w = o.current_win_tab.tab_id.value,
        P = o.discovered.get(w);
      P && ((a = P.meta), (s = P.media));
    }
    let l = new Map(),
      u = new Map();
    for (let w of o.downloading.values())
      s.has(w.media.hash) ? l.set(w.media.hash, w) : u.set(w.media.hash, w);
    let g = new Map();
    for (let w of o.transient_history)
      s.has(w.media_hash) && g.set(w.media_hash, w);
    let p = new Map(),
      h = [];
    for (let w of this.media_container.children) {
      if (w.nodeName != "COM-MEDIA") continue;
      let P = w.id;
      !s.has(P) && !u.has(P) ? h.push(w) : p.set(P, w);
    }
    h.forEach((w) => w.remove());
    let c = a.andThen((w) => w.url),
      b = [];
    this.persistent().preferred_discovered_media_order == "NEWEST"
      ? (b = [...s.values()].sort(
          (w, P) => P.discovery_timestamp_ms - w.discovery_timestamp_ms,
        ))
      : this.persistent().preferred_discovered_media_order == "OLDEST"
        ? (b = [...s.values()].sort(
            (w, P) => w.discovery_timestamp_ms - P.discovery_timestamp_ms,
          ))
        : (b = [...s.values()].sort((w, P) => compareDiscoveredMedia(w, P, c)));
    let z = 0,
      q = (w, P, k, $) => {
        let E = p.get(w.hash);
        (E ||
          ((E = document.createElement("com-media")),
          (E.className = "roundedbox"),
          (E.id = w.hash),
          this.media_container.appendChild(E)),
          E.invalidateState({
            media: w,
            meta: P,
            advertize_premium: o.advertize_premium,
          }),
          $ ? E.isDownloaded($) : k ? E.isDownloading(k) : E.isDiscovered(),
          (E.style.order = z.toString()),
          z++);
      };
    if (a.isSome() && s.size > 0) {
      D(this.loading);
      for (let w of b) {
        let P = l.get(w.hash),
          k = g.get(w.hash);
        q(w, a.value, P, k);
      }
    } else M(this.loading);
    for (let w of u.values()) {
      let P = w.media;
      q(P, w.meta, w, void 0);
    }
    let N = [
      ...new Map(
        [...o.transient_history]
          .reverse()
          .filter((w) => !s.has(w.media_hash))
          .map((w) => [w.media_hash, w]),
      ).values(),
    ]
      .reverse()
      .slice(-10);
    j(
      this.downloaded,
      this.persistent().show_transient_history && N.length > 0,
    );
    {
      let w = new Map(N.map(($) => [$.downloaded_id, $])),
        P = new Map(),
        k = [];
      for (let $ of this.downloaded_container.children)
        w.get($.id) ? P.set($.id, $) : k.push($);
      k.forEach(($) => $.remove());
      for (let $ of N) {
        let E = P.get($.downloaded_id);
        E ||
          ((E = document.createElement("com-media-downloaded")),
          (E.id = $.downloaded_id),
          this.downloaded_container.appendChild(E),
          E.invalidateState({
            ded: $,
            meta: void 0,
          }),
          (E.style.order = Math.round($.download_timestamp / 1e3).toString()));
      }
    }
    if (this.dockmode == "popup") {
      let w = this.media_container.querySelector("com-media");
      w &&
        !this.preview_was_autoplayed &&
        (w.activatePreview(), (this.preview_was_autoplayed = !0));
    }
  }
  onMounted() {
    (this.button_report_nomedia.invalidateState(() => bc()),
      (this.button_rm_all_notifications.onclick = () => {
        T({
          name: "rm_notifications_all",
          data: null,
        });
      }),
      (this.button_hide_nomedia.onclick = () => {
        T({
          name: "mut-settings",
          data: {
            hide_nomedia_box: !0,
          },
        });
      }),
      (this.button_hide_transient.onclick = () => {
        T({
          name: "mut-settings",
          data: {
            show_transient_history: !1,
          },
        });
      }),
      (this.button_super_reload.onclick = () => {
        requestSiteDataReset();
      }),
      (this.button_show_history.onclick = () => {
        (yt.default.tabs.create({
          url: "/content/history.html",
        }),
          this.dockmode == "popup" && window.close());
      }));
  }
};
(_([d(ReportButton)], MainPanel.prototype, "button_report_nomedia", 2),
  _([d(HTMLElement)], MainPanel.prototype, "box_main", 2),
  _([d(PremiumBanner, "com-banner")], MainPanel.prototype, "premium_banner", 2),
  _([d(DebugPanel, "com-debug")], MainPanel.prototype, "debug", 2),
  _([d(HTMLElement, "#nomedia")], MainPanel.prototype, "box_nomedia", 2),
  _(
    [d(HTMLElement, "#rm_notifications_all")],
    MainPanel.prototype,
    "button_rm_all_notifications",
    2,
  ),
  _(
    [d(HTMLElement, "#notification-container-top")],
    MainPanel.prototype,
    "notification_container",
    2,
  ),
  _([d(HTMLElement, "#media")], MainPanel.prototype, "media_container", 2),
  _([d(HTMLElement, "#downloaded")], MainPanel.prototype, "downloaded", 2),
  _(
    [d(HTMLElement, "#downloaded_container")],
    MainPanel.prototype,
    "downloaded_container",
    2,
  ),
  _([d(HTMLElement)], MainPanel.prototype, "loading", 2),
  _(
    [d(DismissButton, "#nomedia com-dismiss-button")],
    MainPanel.prototype,
    "button_hide_nomedia",
    2,
  ),
  _(
    [d(HTMLButtonElement, "#button_hide_transient")],
    MainPanel.prototype,
    "button_hide_transient",
    2,
  ),
  _([d(HTMLButtonElement)], MainPanel.prototype, "button_super_reload", 2),
  _([d(HTMLButtonElement)], MainPanel.prototype, "button_show_history", 2));
function requestSiteDataReset() {
  let e = async () => {
    let o = {
      permissions: ["browsingData"],
    };
    (await yt.default.permissions.request(o)) && clearSiteCookiesAndReload();
  };
  yt.default.browsingData?.removeCookies
    ? clearSiteCookiesAndReload().catch((i) => {
        e();
      })
    : e();
}
async function clearSiteCookiesAndReload() {
  let i = (
    await yt.default.tabs.query({
      currentWindow: !0,
      active: !0,
    })
  )[0];
  if (i && i.url && i.id != null) {
    let o = i.url,
      r = new URL(o);
    if (me) {
      let t = r.hostname,
        n = t.split(".").slice(-2).join(".");
      await yt.default.browsingData.removeCookies({
        hostnames: [t, n],
      });
    } else
      chrome.browsingData.removeCookies({
        origins: [r.origin],
      });
    yt.default.tabs.reload(i.id, {
      bypassCache: !0,
    });
  }
}
var componentRegistry = {
  "com-report-button": ReportButton,
  "com-notification": NotificationItem,
  "com-debug": DebugPanel,
  "com-native-menu": NativeMenu,
  "com-dismiss-button": DismissButton,
  "com-media-tags": MediaTags,
  "com-media-preview": MediaPreview,
  "com-media-selector": MediaSelector,
  "com-language-preference": LanguagePreference,
  "com-media-meta": MediaMetadata,
  "com-media-button-origin": MediaOriginButton,
  "com-media-discovered": DiscoveredMedia,
  "com-media-downloading": DownloadingMedia,
  "com-media-downloaded": DownloadedMedia,
  "com-media": MediaItem,
  "com-toolbar": Toolbar,
  "com-settings": SettingsPanel,
  "com-main": MainPanel,
  "com-banner": PremiumBanner,
};
function registerAllComponents() {
  for (let [e, i] of Object.entries(componentRegistry))
    window.customElements.define(e, i);
}
function registerPersistentStateToDom() {
  ((globalThis.persistent_state = mt()),
    _c((e) => {
      ((globalThis.persistent_state = e), Xl());
    }),
    Yt().then((e) => {
      ((globalThis.persistent_state = e), Xl());
    }));
}
registerPersistentStateToDom();
registerAllComponents();
var toolbarElement = document.querySelector("com-toolbar"),
  mainElement = document.querySelector("com-main"),
  settingsElement = document.querySelector("com-settings");
if (!mainElement || !settingsElement || !toolbarElement)
  throw new Error("DOM not valid");
var applyUiPreferences = () => {
  let e = window.persistent_state;
  (Wn(document, e.custom_strings.addon),
    document.documentElement.setAttribute("theme", e.ui_theme),
    document.documentElement.setAttribute("popup_size", e.popup_size),
    document.documentElement.setAttribute("font_size", e.font_size));
};
applyUiPreferences();
document.documentElement.addEventListener(
  "persistent-changed",
  applyUiPreferences,
);
{
  let e = document.querySelector("com-main");
  (e.invalidateState(Kt()),
    e.invalidateState(await Ki()),
    dc((i) => e.invalidateState(i)));
}
var toggleSettingsView = () => {
  (j(settingsElement),
    j(mainElement),
    settingsElement.scrollUp(),
    mainElement.scrollUp());
};
toolbarElement.addEventListener(Toolbar.TOGGLE_DEBUG, () =>
  mainElement.enableDebug(),
);
toolbarElement.addEventListener(Toolbar.TOGGLE_SETTINGS, toggleSettingsView);
settingsElement.addEventListener(
  SettingsPanel.TOGGLE_SETTINGS,
  toggleSettingsView,
);
/*! Bundled license information:

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
*/
