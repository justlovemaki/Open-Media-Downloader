var iv = Object.create;
var As = Object.defineProperty;
var nv = Object.getOwnPropertyDescriptor;
var ov = Object.getOwnPropertyNames;
var av = Object.getPrototypeOf, sv = Object.prototype.hasOwnProperty;
var ft = (e3, t) => () => (e3 && (t = e3(e3 = 0)), t);
var Mt = (e3, t) => () => (t || e3(
  (t = {
    exports: {}
  }).exports,
  t
), t.exports), et = (e3, t) => {
  for (var i in t)
    As(e3, i, {
      get: t[i],
      enumerable: true
    });
}, uv = (e3, t, i, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of ov(t))
      !sv.call(e3, r) && r !== i && As(e3, r, {
        get: () => t[r],
        enumerable: !(n = nv(t, r)) || n.enumerable
      });
  return e3;
};
var ve = (e3, t, i) => (i = e3 != null ? iv(av(e3)) : {}, uv(
  t || !e3 || !e3.__esModule ? As(i, "default", {
    value: e3,
    enumerable: true
  }) : i,
  e3
));
var Ie = Mt((Es, gm) => {
  (function(e3, t) {
    if (typeof define == "function" && define.amd)
      define("webextension-polyfill", ["module"], t);
    else if (typeof Es < "u") t(gm);
    else {
      var i = {
        exports: {}
      };
      t(i), e3.browser = i.exports;
    }
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Es,
    function(e3) {
      "use strict";
      if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
        throw new Error(
          "This script should only be loaded in a browser extension."
        );
      if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
        e3.exports = globalThis.browser;
      else {
        let t = "The message port closed before a response was received.", i = (n) => {
          let r = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: false
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: true
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: true
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(r).length === 0)
            throw new Error(
              "api-metadata.json has not been included in browser-polyfill"
            );
          class o extends WeakMap {
            constructor(z, $ = void 0) {
              super($), this.createItem = z;
            }
            get(z) {
              return this.has(z) || this.set(z, this.createItem(z)), super.get(z);
            }
          }
          let a = (v) => v && typeof v == "object" && typeof v.then == "function", u = (v, z) => (...$) => {
            n.runtime.lastError ? v.reject(new Error(n.runtime.lastError.message)) : z.singleCallbackArg || $.length <= 1 && z.singleCallbackArg !== false ? v.resolve($[0]) : v.resolve($);
          }, s = (v) => v == 1 ? "argument" : "arguments", l = (v, z) => function(j, ...K) {
            if (K.length < z.minArgs)
              throw new Error(
                `Expected at least ${z.minArgs} ${s(z.minArgs)} for ${v}(), got ${K.length}`
              );
            if (K.length > z.maxArgs)
              throw new Error(
                `Expected at most ${z.maxArgs} ${s(z.maxArgs)} for ${v}(), got ${K.length}`
              );
            return new Promise((C, B) => {
              if (z.fallbackToNoCallback)
                try {
                  j[v](
                    ...K,
                    u(
                      {
                        resolve: C,
                        reject: B
                      },
                      z
                    )
                  );
                } catch (P) {
                  console.warn(
                    `${v} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                    P
                  ), j[v](...K), z.fallbackToNoCallback = false, z.noCallback = true, C();
                }
              else
                z.noCallback ? (j[v](...K), C()) : j[v](
                  ...K,
                  u(
                    {
                      resolve: C,
                      reject: B
                    },
                    z
                  )
                );
            });
          }, d = (v, z, $) => new Proxy(z, {
            apply(j, K, C) {
              return $.call(K, v, ...C);
            }
          }), c = Function.call.bind(Object.prototype.hasOwnProperty), f = (v, z = {}, $ = {}) => {
            let j = /* @__PURE__ */ Object.create(null), K = {
              has(B, P) {
                return P in v || P in j;
              },
              get(B, P, G) {
                if (P in j) return j[P];
                if (!(P in v)) return;
                let Y = v[P];
                if (typeof Y == "function") {
                  if (typeof z[P] == "function") Y = d(v, v[P], z[P]);
                  else if (c($, P)) {
                    let ue = l(P, $[P]);
                    Y = d(v, v[P], ue);
                  } else Y = Y.bind(v);
                } else if (typeof Y == "object" && Y !== null && (c(z, P) || c($, P)))
                  Y = f(Y, z[P], $[P]);
                else if (c($, "*")) Y = f(Y, z[P], $["*"]);
                else
                  return Object.defineProperty(j, P, {
                    configurable: true,
                    enumerable: true,
                    get() {
                      return v[P];
                    },
                    set(ue) {
                      v[P] = ue;
                    }
                  }), Y;
                return j[P] = Y, Y;
              },
              set(B, P, G, Y) {
                return P in j ? j[P] = G : v[P] = G, true;
              },
              defineProperty(B, P, G) {
                return Reflect.defineProperty(j, P, G);
              },
              deleteProperty(B, P) {
                return Reflect.deleteProperty(j, P);
              }
            }, C = Object.create(v);
            return new Proxy(C, K);
          }, m = (v) => ({
            addListener(z, $, ...j) {
              z.addListener(v.get($), ...j);
            },
            hasListener(z, $) {
              return z.hasListener(v.get($));
            },
            removeListener(z, $) {
              z.removeListener(v.get($));
            }
          }), h = new o(
            (v) => typeof v != "function" ? v : function($) {
              let j = f(
                $,
                {},
                {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                }
              );
              v(j);
            }
          ), _ = new o(
            (v) => typeof v != "function" ? v : function($, j, K) {
              let C = false, B, P = new Promise((Ae) => {
                B = function(Z) {
                  C = true, Ae(Z);
                };
              }), G;
              try {
                G = v($, j, B);
              } catch (Ae) {
                G = Promise.reject(Ae);
              }
              let Y = G !== true && a(G);
              if (G !== true && !Y && !C) return false;
              let ue = (Ae) => {
                Ae.then(
                  (Z) => {
                    K(Z);
                  },
                  (Z) => {
                    let pe;
                    Z && (Z instanceof Error || typeof Z.message == "string") ? pe = Z.message : pe = "An unexpected error occurred", K({
                      __mozWebExtensionPolyfillReject__: true,
                      message: pe
                    });
                  }
                ).catch((Z) => {
                  console.error(
                    "Failed to send onMessage rejected reply",
                    Z
                  );
                });
              };
              return ue(Y ? G : P), true;
            }
          ), x = ({ reject: v, resolve: z }, $) => {
            n.runtime.lastError ? n.runtime.lastError.message === t ? z() : v(new Error(n.runtime.lastError.message)) : $ && $.__mozWebExtensionPolyfillReject__ ? v(new Error($.message)) : z($);
          }, E = (v, z, $, ...j) => {
            if (j.length < z.minArgs)
              throw new Error(
                `Expected at least ${z.minArgs} ${s(z.minArgs)} for ${v}(), got ${j.length}`
              );
            if (j.length > z.maxArgs)
              throw new Error(
                `Expected at most ${z.maxArgs} ${s(z.maxArgs)} for ${v}(), got ${j.length}`
              );
            return new Promise((K, C) => {
              let B = x.bind(null, {
                resolve: K,
                reject: C
              });
              j.push(B), $.sendMessage(...j);
            });
          }, w = {
            devtools: {
              network: {
                onRequestFinished: m(h)
              }
            },
            runtime: {
              onMessage: m(_),
              onMessageExternal: m(_),
              sendMessage: E.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: E.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          }, y = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          return r.privacy = {
            network: {
              "*": y
            },
            services: {
              "*": y
            },
            websites: {
              "*": y
            }
          }, f(n, w, r);
        };
        e3.exports = i(chrome);
      }
    }
  );
});
function vm() {
  return mv;
}
var gt, hm, qe, Ue, vi, bm, ym, mv, rt, wm, Sm, xm, g0, $e = ft(() => {
  "use strict";
  gt = "google", hm = "stable", qe = gt != "mozilla", Ue = gt == "mozilla", vi = false, bm = false, ym = false, mv = atob(
    "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOURtQkJNNitRZ1BDRlhJK2dBTFMreXkvdytBaQplMjdMbXRTWmExWjFWMlV1YWt6UmxzTGgrOFZMdE9KekdwVlcyenQ0bUpSMzVFWFRlYUhOQ0g0bEFBPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg=="
  );
  rt = "https://openmediadownloader.net:443", wm = `${rt}/v2/entitlements/validate`, Sm = `${rt}/v2/entitlements/activate`, xm = `${rt}/v2/entitlements/migrate`, g0 = "data:text/plain,";
});
function he(e3, t = 0) {
  let i = 3735928559 ^ t, n = 1103547991 ^ t;
  for (let r = 0, o; r < e3.length; r++)
    o = e3.charCodeAt(r), i = Math.imul(i ^ o, 2654435761), n = Math.imul(n ^ o, 1597334677);
  return i = Math.imul(i ^ i >>> 16, 2246822507), i ^= Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(i ^ i >>> 13, 3266489909), 4294967296 * (2097151 & n) + (i >>> 0);
}
var qt = ft(() => {
  "use strict";
});
function Vn() {
  return true;
}
var zm, Ps = ft(() => {
  "use strict";
  $e();
  qt();
  zm = ve(Ie(), 1);
});
var pv = {};
var Tm, Os, Pm = ft(() => {
  "use strict";
  $e();
  Ps();
  Tm = "/download_worker/main.js";
  Vn() && (qe ? Os = chrome.runtime.getURL(Tm) : Os = browser.runtime.getURL(Tm), new Worker(Os, {
    type: "module"
  }));
});
var Xn = Mt((W0, jm) => {
  var Si;
  typeof window < "u" ? Si = window : typeof global < "u" ? Si = global : typeof self < "u" ? Si = self : Si = {};
  jm.exports = Si;
});
var Pi = Mt((zr) => {
  "use strict";
  function ow(e3, t, i) {
    if (i === void 0 && (i = Array.prototype), e3 && typeof i.find == "function")
      return i.find.call(e3, t);
    for (var n = 0; n < e3.length; n++)
      if (Object.prototype.hasOwnProperty.call(e3, n)) {
        var r = e3[n];
        if (t.call(void 0, r, n, e3)) return r;
      }
  }
  function nu(e3, t) {
    return t === void 0 && (t = Object), t && typeof t.freeze == "function" ? t.freeze(e3) : e3;
  }
  function aw(e3, t) {
    if (e3 === null || typeof e3 != "object")
      throw new TypeError("target is not an object");
    for (var i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (e3[i] = t[i]);
    return e3;
  }
  var bp = nu({
    HTML: "text/html",
    isHTML: function(e3) {
      return e3 === bp.HTML;
    },
    XML_APPLICATION: "application/xml",
    XML_TEXT: "text/xml",
    XML_XHTML_APPLICATION: "application/xhtml+xml",
    XML_SVG_IMAGE: "image/svg+xml"
  }), yp = nu({
    HTML: "http://www.w3.org/1999/xhtml",
    isHTML: function(e3) {
      return e3 === yp.HTML;
    },
    SVG: "http://www.w3.org/2000/svg",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/"
  });
  zr.assign = aw;
  zr.find = ow;
  zr.freeze = nu;
  zr.MIME_TYPE = bp;
  zr.NAMESPACE = yp;
});
var gu = Mt((Pt) => {
  var Ep = Pi(), nt = Ep.find, Ii = Ep.NAMESPACE;
  function sw(e3) {
    return e3 !== "";
  }
  function uw(e3) {
    return e3 ? e3.split(/[\t\n\f\r ]+/).filter(sw) : [];
  }
  function lw(e3, t) {
    return e3.hasOwnProperty(t) || (e3[t] = true), e3;
  }
  function vp(e3) {
    if (!e3) return [];
    var t = uw(e3);
    return Object.keys(t.reduce(lw, {}));
  }
  function dw(e3) {
    return function(t) {
      return e3 && e3.indexOf(t) !== -1;
    };
  }
  function Oi(e3, t) {
    for (var i in e3)
      Object.prototype.hasOwnProperty.call(e3, i) && (t[i] = e3[i]);
  }
  function Le(e3, t) {
    var i = e3.prototype;
    if (!(i instanceof t)) {
      let r = function() {
      };
      var n = r;
      r.prototype = t.prototype, r = new r(), Oi(i, r), e3.prototype = i = r;
    }
    i.constructor != e3 && (typeof e3 != "function" && console.error("unknown Class:" + e3), i.constructor = e3);
  }
  var Ve = {}, Xe = Ve.ELEMENT_NODE = 1, Pr = Ve.ATTRIBUTE_NODE = 2, bo = Ve.TEXT_NODE = 3, zp = Ve.CDATA_SECTION_NODE = 4, Tp = Ve.ENTITY_REFERENCE_NODE = 5, cw = Ve.ENTITY_NODE = 6, ou = Ve.PROCESSING_INSTRUCTION_NODE = 7, au = Ve.COMMENT_NODE = 8, Pp = Ve.DOCUMENT_NODE = 9, Ip = Ve.DOCUMENT_TYPE_NODE = 10, Et = Ve.DOCUMENT_FRAGMENT_NODE = 11, _w = Ve.NOTATION_NODE = 12, Pe = {}, Se = {}, IA = Pe.INDEX_SIZE_ERR = (Se[1] = "Index size error", 1), $A = Pe.DOMSTRING_SIZE_ERR = (Se[2] = "DOMString size error", 2), Fe = Pe.HIERARCHY_REQUEST_ERR = (Se[3] = "Hierarchy request error", 3), OA = Pe.WRONG_DOCUMENT_ERR = (Se[4] = "Wrong document", 4), mw = Pe.INVALID_CHARACTER_ERR = (Se[5] = "Invalid character", 5), NA = Pe.NO_DATA_ALLOWED_ERR = (Se[6] = "No data allowed", 6), RA = Pe.NO_MODIFICATION_ALLOWED_ERR = (Se[7] = "No modification allowed", 7), $p = Pe.NOT_FOUND_ERR = (Se[8] = "Not found", 8), CA = Pe.NOT_SUPPORTED_ERR = (Se[9] = "Not supported", 9), wp = Pe.INUSE_ATTRIBUTE_ERR = (Se[10] = "Attribute in use", 10), Tr = Pe.INVALID_STATE_ERR = (Se[11] = "Invalid state", 11), MA = Pe.SYNTAX_ERR = (Se[12] = "Syntax error", 12), jA = Pe.INVALID_MODIFICATION_ERR = (Se[13] = "Invalid modification", 13), qA = Pe.NAMESPACE_ERR = (Se[14] = "Invalid namespace", 14), UA = Pe.INVALID_ACCESS_ERR = (Se[15] = "Invalid access", 15);
  function re(e3, t) {
    if (t instanceof Error) var i = t;
    else
      i = this, Error.call(this, Se[e3]), this.message = Se[e3], Error.captureStackTrace && Error.captureStackTrace(this, re);
    return i.code = e3, t && (this.message = this.message + ": " + t), i;
  }
  re.prototype = Error.prototype;
  Oi(Pe, re);
  function zt() {
  }
  zt.prototype = {
    length: 0,
    item: function(e3) {
      return e3 >= 0 && e3 < this.length ? this[e3] : null;
    },
    toString: function(e3, t, i) {
      for (var n = !!i && !!i.requireWellFormed, r = [], o = 0; o < this.length; o++)
        fu(this[o], r, e3, t, null, n);
      return r.join("");
    },
    filter: function(e3) {
      return Array.prototype.filter.call(this, e3);
    },
    indexOf: function(e3) {
      return Array.prototype.indexOf.call(this, e3);
    }
  };
  function Ir(e3, t) {
    this._node = e3, this._refresh = t, su(this);
  }
  function su(e3) {
    var t = e3._node._inc || e3._node.ownerDocument._inc;
    if (e3._inc !== t) {
      var i = e3._refresh(e3._node);
      if (Bp(e3, "length", i.length), !e3.$$length || i.length < e3.$$length)
        for (var n = i.length; n in e3; n++)
          Object.prototype.hasOwnProperty.call(e3, n) && delete e3[n];
      Oi(i, e3), e3._inc = t;
    }
  }
  Ir.prototype.item = function(e3) {
    return su(this), this[e3] || null;
  };
  Le(Ir, zt);
  function yo() {
  }
  function Op(e3, t) {
    for (var i = e3.length; i--; ) if (e3[i] === t) return i;
  }
  function Sp(e3, t, i, n) {
    if (n ? t[Op(t, n)] = i : t[t.length++] = i, e3) {
      i.ownerElement = e3;
      var r = e3.ownerDocument;
      r && (n && Cp(r, e3, n), pw(r, e3, i));
    }
  }
  function xp(e3, t, i) {
    var n = Op(t, i);
    if (n >= 0) {
      for (var r = t.length - 1; n < r; ) t[n] = t[++n];
      if (t.length = r, e3) {
        var o = e3.ownerDocument;
        o && (Cp(o, e3, i), i.ownerElement = null);
      }
    } else throw new re($p, new Error(e3.tagName + "@" + i));
  }
  yo.prototype = {
    length: 0,
    item: zt.prototype.item,
    getNamedItem: function(e3) {
      for (var t = this.length; t--; ) {
        var i = this[t];
        if (i.nodeName == e3) return i;
      }
    },
    setNamedItem: function(e3) {
      var t = e3.ownerElement;
      if (t && t != this._ownerElement) throw new re(wp);
      var i = this.getNamedItem(e3.nodeName);
      return Sp(this._ownerElement, this, e3, i), i;
    },
    setNamedItemNS: function(e3) {
      var t = e3.ownerElement, i;
      if (t && t != this._ownerElement) throw new re(wp);
      return i = this.getNamedItemNS(e3.namespaceURI, e3.localName), Sp(this._ownerElement, this, e3, i), i;
    },
    removeNamedItem: function(e3) {
      var t = this.getNamedItem(e3);
      return xp(this._ownerElement, this, t), t;
    },
    removeNamedItemNS: function(e3, t) {
      var i = this.getNamedItemNS(e3, t);
      return xp(this._ownerElement, this, i), i;
    },
    getNamedItemNS: function(e3, t) {
      for (var i = this.length; i--; ) {
        var n = this[i];
        if (n.localName == t && n.namespaceURI == e3) return n;
      }
      return null;
    }
  };
  function Np() {
  }
  Np.prototype = {
    hasFeature: function(e3, t) {
      return true;
    },
    createDocument: function(e3, t, i) {
      var n = new Ni();
      if (n.implementation = this, n.childNodes = new zt(), n.doctype = i || null, i && n.appendChild(i), t) {
        var r = n.createElementNS(e3, t);
        n.appendChild(r);
      }
      return n;
    },
    createDocumentType: function(e3, t, i) {
      var n = new xo();
      return n.name = e3, n.nodeName = e3, n.publicId = t || "", n.systemId = i || "", n;
    }
  };
  function ee() {
  }
  ee.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function(e3, t) {
      return wo(this, e3, t);
    },
    replaceChild: function(e3, t) {
      wo(this, e3, t, jp), t && this.removeChild(t);
    },
    removeChild: function(e3) {
      return Mp(this, e3);
    },
    appendChild: function(e3) {
      return this.insertBefore(e3, null);
    },
    hasChildNodes: function() {
      return this.firstChild != null;
    },
    cloneNode: function(e3) {
      return Vp(this.ownerDocument || this, this, e3);
    },
    normalize: function() {
      we(this, null, {
        enter: function(e3) {
          for (var t = e3.firstChild; t; ) {
            var i = t.nextSibling;
            i !== null && i.nodeType === bo && t.nodeType === bo ? (e3.removeChild(i), t.appendData(i.data)) : t = i;
          }
          return true;
        }
      });
    },
    isSupported: function(e3, t) {
      return this.ownerDocument.implementation.hasFeature(e3, t);
    },
    hasAttributes: function() {
      return this.attributes.length > 0;
    },
    lookupPrefix: function(e3) {
      for (var t = this; t; ) {
        var i = t._nsMap;
        if (i) {
          for (var n in i)
            if (Object.prototype.hasOwnProperty.call(i, n) && i[n] === e3)
              return n;
        }
        t = t.nodeType == Pr ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function(e3) {
      for (var t = this; t; ) {
        var i = t._nsMap;
        if (i && Object.prototype.hasOwnProperty.call(i, e3)) return i[e3];
        t = t.nodeType == Pr ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function(e3) {
      var t = this.lookupPrefix(e3);
      return t == null;
    }
  };
  function Rp(e3) {
    return e3 == "<" && "&lt;" || e3 == ">" && "&gt;" || e3 == "&" && "&amp;" || e3 == '"' && "&quot;" || "&#" + e3.charCodeAt() + ";";
  }
  Oi(Ve, ee);
  Oi(Ve, ee.prototype);
  function vo(e3, t) {
    return we(e3, null, {
      enter: function(i) {
        return t(i) ? we.STOP : true;
      }
    }) === we.STOP;
  }
  function we(e3, t, i) {
    for (var n = [
      {
        node: e3,
        context: t,
        phase: we.ENTER
      }
    ]; n.length > 0; ) {
      var r = n.pop();
      if (r.phase === we.ENTER) {
        var o = i.enter(r.node, r.context);
        if (o === we.STOP) return we.STOP;
        if (n.push({
          node: r.node,
          context: o,
          phase: we.EXIT
        }), o == null)
          continue;
        for (var a = r.node.lastChild; a; )
          n.push({
            node: a,
            context: o,
            phase: we.ENTER
          }), a = a.previousSibling;
      } else i.exit && i.exit(r.node, r.context);
    }
  }
  we.STOP = Symbol("walkDOM.STOP");
  we.ENTER = 0;
  we.EXIT = 1;
  function Ni() {
    this.ownerDocument = this;
  }
  function pw(e3, t, i) {
    e3 && e3._inc++;
    var n = i.namespaceURI;
    n === Ii.XMLNS && (t._nsMap[i.prefix ? i.localName : ""] = i.value);
  }
  function Cp(e3, t, i, n) {
    e3 && e3._inc++;
    var r = i.namespaceURI;
    r === Ii.XMLNS && delete t._nsMap[i.prefix ? i.localName : ""];
  }
  function uu(e3, t, i) {
    if (e3 && e3._inc) {
      e3._inc++;
      var n = t.childNodes;
      if (i) n[n.length++] = i;
      else {
        for (var r = t.firstChild, o = 0; r; )
          n[o++] = r, r = r.nextSibling;
        n.length = o, delete n[n.length];
      }
    }
  }
  function Mp(e3, t) {
    var i = t.previousSibling, n = t.nextSibling;
    return i ? i.nextSibling = n : e3.firstChild = n, n ? n.previousSibling = i : e3.lastChild = i, t.parentNode = null, t.previousSibling = null, t.nextSibling = null, uu(e3.ownerDocument, e3), t;
  }
  function fw(e3) {
    return e3 && (e3.nodeType === ee.DOCUMENT_NODE || e3.nodeType === ee.DOCUMENT_FRAGMENT_NODE || e3.nodeType === ee.ELEMENT_NODE);
  }
  function gw(e3) {
    return e3 && (ot(e3) || lu(e3) || Tt(e3) || e3.nodeType === ee.DOCUMENT_FRAGMENT_NODE || e3.nodeType === ee.COMMENT_NODE || e3.nodeType === ee.PROCESSING_INSTRUCTION_NODE);
  }
  function Tt(e3) {
    return e3 && e3.nodeType === ee.DOCUMENT_TYPE_NODE;
  }
  function ot(e3) {
    return e3 && e3.nodeType === ee.ELEMENT_NODE;
  }
  function lu(e3) {
    return e3 && e3.nodeType === ee.TEXT_NODE;
  }
  function Dp(e3, t) {
    var i = e3.childNodes || [];
    if (nt(i, ot) || Tt(t)) return false;
    var n = nt(i, Tt);
    return !(t && n && i.indexOf(n) > i.indexOf(t));
  }
  function kp(e3, t) {
    var i = e3.childNodes || [];
    function n(o) {
      return ot(o) && o !== t;
    }
    if (nt(i, n)) return false;
    var r = nt(i, Tt);
    return !(t && r && i.indexOf(r) > i.indexOf(t));
  }
  function hw(e3, t, i) {
    if (!fw(e3)) throw new re(Fe, "Unexpected parent node type " + e3.nodeType);
    if (i && i.parentNode !== e3) throw new re($p, "child not in parent");
    if (!gw(t) || Tt(t) && e3.nodeType !== ee.DOCUMENT_NODE)
      throw new re(
        Fe,
        "Unexpected node type " + t.nodeType + " for parent node type " + e3.nodeType
      );
  }
  function bw(e3, t, i) {
    var n = e3.childNodes || [], r = t.childNodes || [];
    if (t.nodeType === ee.DOCUMENT_FRAGMENT_NODE) {
      var o = r.filter(ot);
      if (o.length > 1 || nt(r, lu))
        throw new re(Fe, "More than one element or text in fragment");
      if (o.length === 1 && !Dp(e3, i))
        throw new re(
          Fe,
          "Element in fragment can not be inserted before doctype"
        );
    }
    if (ot(t) && !Dp(e3, i))
      throw new re(Fe, "Only one element can be added and only after doctype");
    if (Tt(t)) {
      if (nt(n, Tt)) throw new re(Fe, "Only one doctype is allowed");
      var a = nt(n, ot);
      if (i && n.indexOf(a) < n.indexOf(i))
        throw new re(Fe, "Doctype can only be inserted before an element");
      if (!i && a)
        throw new re(
          Fe,
          "Doctype can not be appended since element is present"
        );
    }
  }
  function jp(e3, t, i) {
    var n = e3.childNodes || [], r = t.childNodes || [];
    if (t.nodeType === ee.DOCUMENT_FRAGMENT_NODE) {
      var o = r.filter(ot);
      if (o.length > 1 || nt(r, lu))
        throw new re(Fe, "More than one element or text in fragment");
      if (o.length === 1 && !kp(e3, i))
        throw new re(
          Fe,
          "Element in fragment can not be inserted before doctype"
        );
    }
    if (ot(t) && !kp(e3, i))
      throw new re(Fe, "Only one element can be added and only after doctype");
    if (Tt(t)) {
      let s = function(l) {
        return Tt(l) && l !== i;
      };
      var u = s;
      if (nt(n, s)) throw new re(Fe, "Only one doctype is allowed");
      var a = nt(n, ot);
      if (i && n.indexOf(a) < n.indexOf(i))
        throw new re(Fe, "Doctype can only be inserted before an element");
    }
  }
  function wo(e3, t, i, n) {
    hw(e3, t, i), e3.nodeType === ee.DOCUMENT_NODE && (n || bw)(e3, t, i);
    var r = t.parentNode;
    if (r && r.removeChild(t), t.nodeType === Et) {
      var o = t.firstChild;
      if (o == null) return t;
      var a = t.lastChild;
    } else o = a = t;
    var u = i ? i.previousSibling : e3.lastChild;
    o.previousSibling = u, a.nextSibling = i, u ? u.nextSibling = o : e3.firstChild = o, i == null ? e3.lastChild = a : i.previousSibling = a;
    do {
      o.parentNode = e3;
      var s = e3.ownerDocument || e3;
      $i(o, s);
    } while (o !== a && (o = o.nextSibling));
    return uu(e3.ownerDocument || e3, e3), t.nodeType == Et && (t.firstChild = t.lastChild = null), t;
  }
  function $i(e3, t) {
    if (e3.ownerDocument !== t) {
      if (e3.ownerDocument = t, e3.nodeType === Xe && e3.attributes)
        for (var i = 0; i < e3.attributes.length; i++) {
          var n = e3.attributes.item(i);
          n && (n.ownerDocument = t);
        }
      for (var r = e3.firstChild; r; ) $i(r, t), r = r.nextSibling;
    }
  }
  function yw(e3, t) {
    t.parentNode && t.parentNode.removeChild(t), t.parentNode = e3, t.previousSibling = e3.lastChild, t.nextSibling = null, t.previousSibling ? t.previousSibling.nextSibling = t : e3.firstChild = t, e3.lastChild = t, uu(e3.ownerDocument, e3, t);
    var i = e3.ownerDocument || e3;
    return $i(t, i), t;
  }
  Ni.prototype = {
    nodeName: "#document",
    nodeType: Pp,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(e3, t) {
      if (e3.nodeType == Et) {
        for (var i = e3.firstChild; i; ) {
          var n = i.nextSibling;
          this.insertBefore(i, t), i = n;
        }
        return e3;
      }
      return wo(this, e3, t), $i(e3, this), this.documentElement === null && e3.nodeType === Xe && (this.documentElement = e3), e3;
    },
    removeChild: function(e3) {
      return this.documentElement == e3 && (this.documentElement = null), Mp(this, e3);
    },
    replaceChild: function(e3, t) {
      wo(this, e3, t, jp), $i(e3, this), t && this.removeChild(t), ot(e3) && (this.documentElement = e3);
    },
    importNode: function(e3, t) {
      return vw(this, e3, t);
    },
    getElementById: function(e3) {
      var t = null;
      return vo(this.documentElement, function(i) {
        if (i.nodeType == Xe && i.getAttribute("id") == e3)
          return t = i, true;
      }), t;
    },
    getElementsByClassName: function(e3) {
      var t = vp(e3);
      return new Ir(this, function(i) {
        var n = [];
        return t.length > 0 && vo(i.documentElement, function(r) {
          if (r !== i && r.nodeType === Xe) {
            var o = r.getAttribute("class");
            if (o) {
              var a = e3 === o;
              if (!a) {
                var u = vp(o);
                a = t.every(dw(u));
              }
              a && n.push(r);
            }
          }
        }), n;
      });
    },
    createElement: function(e3) {
      var t = new tr();
      t.ownerDocument = this, t.nodeName = e3, t.tagName = e3, t.localName = e3, t.childNodes = new zt();
      var i = t.attributes = new yo();
      return i._ownerElement = t, t;
    },
    createDocumentFragment: function() {
      var e3 = new Do();
      return e3.ownerDocument = this, e3.childNodes = new zt(), e3;
    },
    createTextNode: function(e3) {
      var t = new du();
      return t.ownerDocument = this, t.appendData(e3), t;
    },
    createComment: function(e3) {
      var t = new cu();
      return t.ownerDocument = this, t.appendData(e3), t;
    },
    createCDATASection: function(e3) {
      if (e3.indexOf("]]>") !== -1) throw new re(mw, 'data contains "]]>"');
      var t = new _u();
      return t.ownerDocument = this, t.appendData(e3), t;
    },
    createProcessingInstruction: function(e3, t) {
      var i = new pu();
      return i.ownerDocument = this, i.tagName = i.nodeName = i.target = e3, i.nodeValue = i.data = t, i;
    },
    createAttribute: function(e3) {
      var t = new So();
      return t.ownerDocument = this, t.name = e3, t.nodeName = e3, t.localName = e3, t.specified = true, t;
    },
    createEntityReference: function(e3) {
      var t = new mu();
      return t.ownerDocument = this, t.nodeName = e3, t;
    },
    createElementNS: function(e3, t) {
      var i = new tr(), n = t.split(":"), r = i.attributes = new yo();
      return i.childNodes = new zt(), i.ownerDocument = this, i.nodeName = t, i.tagName = t, i.namespaceURI = e3, n.length == 2 ? (i.prefix = n[0], i.localName = n[1]) : i.localName = t, r._ownerElement = i, i;
    },
    createAttributeNS: function(e3, t) {
      var i = new So(), n = t.split(":");
      return i.ownerDocument = this, i.nodeName = t, i.name = t, i.namespaceURI = e3, i.specified = true, n.length == 2 ? (i.prefix = n[0], i.localName = n[1]) : i.localName = t, i;
    }
  };
  Le(Ni, ee);
  function tr() {
    this._nsMap = {};
  }
  tr.prototype = {
    nodeType: Xe,
    hasAttribute: function(e3) {
      return this.getAttributeNode(e3) != null;
    },
    getAttribute: function(e3) {
      var t = this.getAttributeNode(e3);
      return t && t.value || "";
    },
    getAttributeNode: function(e3) {
      return this.attributes.getNamedItem(e3);
    },
    setAttribute: function(e3, t) {
      var i = this.ownerDocument.createAttribute(e3);
      i.value = i.nodeValue = "" + t, this.setAttributeNode(i);
    },
    removeAttribute: function(e3) {
      var t = this.getAttributeNode(e3);
      t && this.removeAttributeNode(t);
    },
    appendChild: function(e3) {
      return e3.nodeType === Et ? this.insertBefore(e3, null) : yw(this, e3);
    },
    setAttributeNode: function(e3) {
      return this.attributes.setNamedItem(e3);
    },
    setAttributeNodeNS: function(e3) {
      return this.attributes.setNamedItemNS(e3);
    },
    removeAttributeNode: function(e3) {
      return this.attributes.removeNamedItem(e3.nodeName);
    },
    removeAttributeNS: function(e3, t) {
      var i = this.getAttributeNodeNS(e3, t);
      i && this.removeAttributeNode(i);
    },
    hasAttributeNS: function(e3, t) {
      return this.getAttributeNodeNS(e3, t) != null;
    },
    getAttributeNS: function(e3, t) {
      var i = this.getAttributeNodeNS(e3, t);
      return i && i.value || "";
    },
    setAttributeNS: function(e3, t, i) {
      var n = this.ownerDocument.createAttributeNS(e3, t);
      n.value = n.nodeValue = "" + i, this.setAttributeNode(n);
    },
    getAttributeNodeNS: function(e3, t) {
      return this.attributes.getNamedItemNS(e3, t);
    },
    getElementsByTagName: function(e3) {
      return new Ir(this, function(t) {
        var i = [];
        return vo(t, function(n) {
          n !== t && n.nodeType == Xe && (e3 === "*" || n.tagName == e3) && i.push(n);
        }), i;
      });
    },
    getElementsByTagNameNS: function(e3, t) {
      return new Ir(this, function(i) {
        var n = [];
        return vo(i, function(r) {
          r !== i && r.nodeType === Xe && (e3 === "*" || r.namespaceURI === e3) && (t === "*" || r.localName == t) && n.push(r);
        }), n;
      });
    }
  };
  Ni.prototype.getElementsByTagName = tr.prototype.getElementsByTagName;
  Ni.prototype.getElementsByTagNameNS = tr.prototype.getElementsByTagNameNS;
  Le(tr, ee);
  function So() {
  }
  So.prototype.nodeType = Pr;
  Le(So, ee);
  function Ri() {
  }
  Ri.prototype = {
    data: "",
    substringData: function(e3, t) {
      return this.data.substring(e3, e3 + t);
    },
    appendData: function(e3) {
      e3 = this.data + e3, this.nodeValue = this.data = e3, this.length = e3.length;
    },
    insertData: function(e3, t) {
      this.replaceData(e3, 0, t);
    },
    appendChild: function(e3) {
      throw new Error(Se[Fe]);
    },
    deleteData: function(e3, t) {
      this.replaceData(e3, t, "");
    },
    replaceData: function(e3, t, i) {
      var n = this.data.substring(0, e3), r = this.data.substring(e3 + t);
      i = n + i + r, this.nodeValue = this.data = i, this.length = i.length;
    }
  };
  Le(Ri, ee);
  function du() {
  }
  du.prototype = {
    nodeName: "#text",
    nodeType: bo,
    splitText: function(e3) {
      var t = this.data, i = t.substring(e3);
      t = t.substring(0, e3), this.data = this.nodeValue = t, this.length = t.length;
      var n = this.ownerDocument.createTextNode(i);
      return this.parentNode && this.parentNode.insertBefore(n, this.nextSibling), n;
    }
  };
  Le(du, Ri);
  function cu() {
  }
  cu.prototype = {
    nodeName: "#comment",
    nodeType: au
  };
  Le(cu, Ri);
  function _u() {
  }
  _u.prototype = {
    nodeName: "#cdata-section",
    nodeType: zp
  };
  Le(_u, Ri);
  function xo() {
  }
  xo.prototype.nodeType = Ip;
  Le(xo, ee);
  function qp() {
  }
  qp.prototype.nodeType = _w;
  Le(qp, ee);
  function Up() {
  }
  Up.prototype.nodeType = cw;
  Le(Up, ee);
  function mu() {
  }
  mu.prototype.nodeType = Tp;
  Le(mu, ee);
  function Do() {
  }
  Do.prototype.nodeName = "#document-fragment";
  Do.prototype.nodeType = Et;
  Le(Do, ee);
  function pu() {
  }
  pu.prototype.nodeType = ou;
  Le(pu, ee);
  function Fp() {
  }
  Fp.prototype.serializeToString = function(e3, t, i, n) {
    return Lp.call(e3, t, i, n);
  };
  ee.prototype.toString = Lp;
  function Lp(e3, t, i) {
    var n = !!i && !!i.requireWellFormed, r = [], o = this.nodeType == 9 && this.documentElement || this, a = o.prefix, u = o.namespaceURI;
    if (u && a == null) {
      var a = o.lookupPrefix(u);
      if (a == null)
        var s = [
          {
            namespace: u,
            prefix: null
          }
        ];
    }
    return fu(this, r, e3, t, s, n), r.join("");
  }
  function Ap(e3, t, i) {
    var n = e3.prefix || "", r = e3.namespaceURI;
    if (!r || n === "xml" && r === Ii.XML || r === Ii.XMLNS) return false;
    for (var o = i.length; o--; ) {
      var a = i[o];
      if (a.prefix === n) return a.namespace !== r;
    }
    return true;
  }
  function ho(e3, t, i) {
    e3.push(" ", t, '="', i.replace(/[<>&"\t\n\r]/g, Rp), '"');
  }
  function fu(e3, t, i, n, r, o) {
    r || (r = []), we(
      e3,
      {
        ns: r,
        isHTML: i
      },
      {
        enter: function(a, u) {
          var s = u.ns, l = u.isHTML;
          if (n)
            if (a = n(a), a) {
              if (typeof a == "string") return t.push(a), null;
            } else return null;
          switch (a.nodeType) {
            case Xe:
              var d = a.attributes, c = d.length, f = a.tagName;
              l = Ii.isHTML(a.namespaceURI) || l;
              var m = f;
              if (!l && !a.prefix && a.namespaceURI) {
                for (var h, _ = 0; _ < d.length; _++)
                  if (d.item(_).name === "xmlns") {
                    h = d.item(_).value;
                    break;
                  }
                if (!h)
                  for (var x = s.length - 1; x >= 0; x--) {
                    var E = s[x];
                    if (E.prefix === "" && E.namespace === a.namespaceURI) {
                      h = E.namespace;
                      break;
                    }
                  }
                if (h !== a.namespaceURI)
                  for (var x = s.length - 1; x >= 0; x--) {
                    var E = s[x];
                    if (E.namespace === a.namespaceURI) {
                      E.prefix && (m = E.prefix + ":" + f);
                      break;
                    }
                  }
              }
              t.push("<", m);
              for (var w = s.slice(), y = 0; y < c; y++) {
                var v = d.item(y);
                v.prefix == "xmlns" ? w.push({
                  prefix: v.localName,
                  namespace: v.value
                }) : v.nodeName == "xmlns" && w.push({
                  prefix: "",
                  namespace: v.value
                });
              }
              for (var y = 0; y < c; y++) {
                var v = d.item(y);
                if (Ap(v, l, w)) {
                  var z = v.prefix || "", $ = v.namespaceURI;
                  ho(t, z ? "xmlns:" + z : "xmlns", $), w.push({
                    prefix: z,
                    namespace: $
                  });
                }
                var j = n ? n(v) : v;
                j && (typeof j == "string" ? t.push(j) : ho(t, j.name, j.value));
              }
              if (f === m && Ap(a, l, w)) {
                var K = a.prefix || "", $ = a.namespaceURI;
                ho(t, K ? "xmlns:" + K : "xmlns", $), w.push({
                  prefix: K,
                  namespace: $
                });
              }
              var C = a.firstChild;
              if (C || l && !/^(?:meta|link|img|br|hr|input)$/i.test(f)) {
                if (t.push(">"), l && /^script$/i.test(f)) {
                  for (; C; )
                    C.data ? t.push(C.data) : fu(C, t, l, n, w.slice(), o), C = C.nextSibling;
                  return t.push("</", f, ">"), null;
                }
                return {
                  ns: w,
                  isHTML: l,
                  tag: m
                };
              } else return t.push("/>"), null;
            case Pp:
            case Et:
              return {
                ns: s.slice(),
                isHTML: l,
                tag: null
              };
            case Pr:
              return ho(t, a.name, a.value), null;
            case bo:
              return t.push(a.data.replace(/[<&>]/g, Rp)), null;
            case zp:
              if (o && a.data.indexOf("]]>") !== -1)
                throw new re(Tr, 'The CDATASection data contains "]]>"');
              return t.push(
                "<![CDATA[",
                a.data.replace(/]]>/g, "]]]]><![CDATA[>"),
                "]]>"
              ), null;
            case au:
              if (o && a.data.indexOf("-->") !== -1)
                throw new re(Tr, 'The comment node data contains "-->"');
              return t.push("<!--", a.data, "-->"), null;
            case Ip:
              if (o) {
                if (a.publicId && !/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(
                  a.publicId
                ))
                  throw new re(
                    Tr,
                    "DocumentType publicId is not a valid PubidLiteral"
                  );
                if (a.systemId && !/^("[^"]*"|'[^']*')$/.test(a.systemId))
                  throw new re(
                    Tr,
                    "DocumentType systemId is not a valid SystemLiteral"
                  );
                if (a.internalSubset && a.internalSubset.indexOf("]>") !== -1)
                  throw new re(
                    Tr,
                    'DocumentType internalSubset contains "]>"'
                  );
              }
              var B = a.publicId, P = a.systemId;
              if (t.push("<!DOCTYPE ", a.name), B)
                t.push(" PUBLIC ", B), P && P != "." && t.push(" ", P), t.push(">");
              else if (P && P != ".") t.push(" SYSTEM ", P, ">");
              else {
                var G = a.internalSubset;
                G && t.push(" [", G, "]"), t.push(">");
              }
              return null;
            case ou:
              if (o && a.data.indexOf("?>") !== -1)
                throw new re(
                  Tr,
                  'The ProcessingInstruction data contains "?>"'
                );
              return t.push("<?", a.target, " ", a.data, "?>"), null;
            case Tp:
              return t.push("&", a.nodeName, ";"), null;
            default:
              return t.push("??", a.nodeName), null;
          }
        },
        exit: function(a, u) {
          u && u.tag && t.push("</", u.tag, ">");
        }
      }
    );
  }
  function vw(e3, t, i) {
    var n;
    return we(t, null, {
      enter: function(r, o) {
        var a = r.cloneNode(false);
        a.ownerDocument = e3, a.parentNode = null, o === null ? n = a : o.appendChild(a);
        var u = r.nodeType === Pr || i;
        return u ? a : null;
      }
    }), n;
  }
  function Vp(e3, t, i) {
    var n;
    return we(t, null, {
      enter: function(r, o) {
        var a = new r.constructor();
        for (var u in r)
          if (Object.prototype.hasOwnProperty.call(r, u)) {
            var s = r[u];
            typeof s != "object" && s != a[u] && (a[u] = s);
          }
        r.childNodes && (a.childNodes = new zt()), a.ownerDocument = e3;
        var l = i;
        switch (a.nodeType) {
          case Xe:
            var d = r.attributes, c = a.attributes = new yo(), f = d.length;
            c._ownerElement = a;
            for (var m = 0; m < f; m++)
              a.setAttributeNode(Vp(e3, d.item(m), true));
            break;
          case Pr:
            l = true;
        }
        return o !== null ? o.appendChild(a) : n = a, l ? a : null;
      }
    }), n;
  }
  function Bp(e3, t, i) {
    e3[t] = i;
  }
  try {
    Object.defineProperty && (Object.defineProperty(Ir.prototype, "length", {
      get: function() {
        return su(this), this.$$length;
      }
    }), Object.defineProperty(ee.prototype, "textContent", {
      get: function() {
        if (this.nodeType === Xe || this.nodeType === Et) {
          var e3 = [];
          return we(this, null, {
            enter: function(t) {
              if (t.nodeType === Xe || t.nodeType === Et) return true;
              if (t.nodeType === ou || t.nodeType === au) return null;
              e3.push(t.nodeValue);
            }
          }), e3.join("");
        }
        return this.nodeValue;
      },
      set: function(e3) {
        switch (this.nodeType) {
          case Xe:
          case Et:
            for (; this.firstChild; ) this.removeChild(this.firstChild);
            (e3 || String(e3)) && this.appendChild(this.ownerDocument.createTextNode(e3));
            break;
          default:
            this.data = e3, this.value = e3, this.nodeValue = e3;
        }
      }
    }), Bp = function(e3, t, i) {
      e3["$$" + t] = i;
    });
  } catch {
  }
  Pt.DocumentType = xo;
  Pt.DOMException = re;
  Pt.DOMImplementation = Np;
  Pt.Element = tr;
  Pt.Node = ee;
  Pt.NodeList = zt;
  Pt.walkDOM = we;
  Pt.XMLSerializer = Fp;
});
var Gp = Mt((Ci) => {
  "use strict";
  var Hp = Pi().freeze;
  Ci.XML_ENTITIES = Hp({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  });
  Ci.HTML_ENTITIES = Hp({
    Aacute: "\xC1",
    aacute: "\xE1",
    Abreve: "\u0102",
    abreve: "\u0103",
    ac: "\u223E",
    acd: "\u223F",
    acE: "\u223E\u0333",
    Acirc: "\xC2",
    acirc: "\xE2",
    acute: "\xB4",
    Acy: "\u0410",
    acy: "\u0430",
    AElig: "\xC6",
    aelig: "\xE6",
    af: "\u2061",
    Afr: "\u{1D504}",
    afr: "\u{1D51E}",
    Agrave: "\xC0",
    agrave: "\xE0",
    alefsym: "\u2135",
    aleph: "\u2135",
    Alpha: "\u0391",
    alpha: "\u03B1",
    Amacr: "\u0100",
    amacr: "\u0101",
    amalg: "\u2A3F",
    AMP: "&",
    amp: "&",
    And: "\u2A53",
    and: "\u2227",
    andand: "\u2A55",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    ange: "\u29A4",
    angle: "\u2220",
    angmsd: "\u2221",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angst: "\xC5",
    angzarr: "\u237C",
    Aogon: "\u0104",
    aogon: "\u0105",
    Aopf: "\u{1D538}",
    aopf: "\u{1D552}",
    ap: "\u2248",
    apacir: "\u2A6F",
    apE: "\u2A70",
    ape: "\u224A",
    apid: "\u224B",
    apos: "'",
    ApplyFunction: "\u2061",
    approx: "\u2248",
    approxeq: "\u224A",
    Aring: "\xC5",
    aring: "\xE5",
    Ascr: "\u{1D49C}",
    ascr: "\u{1D4B6}",
    Assign: "\u2254",
    ast: "*",
    asymp: "\u2248",
    asympeq: "\u224D",
    Atilde: "\xC3",
    atilde: "\xE3",
    Auml: "\xC4",
    auml: "\xE4",
    awconint: "\u2233",
    awint: "\u2A11",
    backcong: "\u224C",
    backepsilon: "\u03F6",
    backprime: "\u2035",
    backsim: "\u223D",
    backsimeq: "\u22CD",
    Backslash: "\u2216",
    Barv: "\u2AE7",
    barvee: "\u22BD",
    Barwed: "\u2306",
    barwed: "\u2305",
    barwedge: "\u2305",
    bbrk: "\u23B5",
    bbrktbrk: "\u23B6",
    bcong: "\u224C",
    Bcy: "\u0411",
    bcy: "\u0431",
    bdquo: "\u201E",
    becaus: "\u2235",
    Because: "\u2235",
    because: "\u2235",
    bemptyv: "\u29B0",
    bepsi: "\u03F6",
    bernou: "\u212C",
    Bernoullis: "\u212C",
    Beta: "\u0392",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    Bfr: "\u{1D505}",
    bfr: "\u{1D51F}",
    bigcap: "\u22C2",
    bigcirc: "\u25EF",
    bigcup: "\u22C3",
    bigodot: "\u2A00",
    bigoplus: "\u2A01",
    bigotimes: "\u2A02",
    bigsqcup: "\u2A06",
    bigstar: "\u2605",
    bigtriangledown: "\u25BD",
    bigtriangleup: "\u25B3",
    biguplus: "\u2A04",
    bigvee: "\u22C1",
    bigwedge: "\u22C0",
    bkarow: "\u290D",
    blacklozenge: "\u29EB",
    blacksquare: "\u25AA",
    blacktriangle: "\u25B4",
    blacktriangledown: "\u25BE",
    blacktriangleleft: "\u25C2",
    blacktriangleright: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bNot: "\u2AED",
    bnot: "\u2310",
    Bopf: "\u{1D539}",
    bopf: "\u{1D553}",
    bot: "\u22A5",
    bottom: "\u22A5",
    bowtie: "\u22C8",
    boxbox: "\u29C9",
    boxDL: "\u2557",
    boxDl: "\u2556",
    boxdL: "\u2555",
    boxdl: "\u2510",
    boxDR: "\u2554",
    boxDr: "\u2553",
    boxdR: "\u2552",
    boxdr: "\u250C",
    boxH: "\u2550",
    boxh: "\u2500",
    boxHD: "\u2566",
    boxHd: "\u2564",
    boxhD: "\u2565",
    boxhd: "\u252C",
    boxHU: "\u2569",
    boxHu: "\u2567",
    boxhU: "\u2568",
    boxhu: "\u2534",
    boxminus: "\u229F",
    boxplus: "\u229E",
    boxtimes: "\u22A0",
    boxUL: "\u255D",
    boxUl: "\u255C",
    boxuL: "\u255B",
    boxul: "\u2518",
    boxUR: "\u255A",
    boxUr: "\u2559",
    boxuR: "\u2558",
    boxur: "\u2514",
    boxV: "\u2551",
    boxv: "\u2502",
    boxVH: "\u256C",
    boxVh: "\u256B",
    boxvH: "\u256A",
    boxvh: "\u253C",
    boxVL: "\u2563",
    boxVl: "\u2562",
    boxvL: "\u2561",
    boxvl: "\u2524",
    boxVR: "\u2560",
    boxVr: "\u255F",
    boxvR: "\u255E",
    boxvr: "\u251C",
    bprime: "\u2035",
    Breve: "\u02D8",
    breve: "\u02D8",
    brvbar: "\xA6",
    Bscr: "\u212C",
    bscr: "\u{1D4B7}",
    bsemi: "\u204F",
    bsim: "\u223D",
    bsime: "\u22CD",
    bsol: "\\",
    bsolb: "\u29C5",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bump: "\u224E",
    bumpE: "\u2AAE",
    bumpe: "\u224F",
    Bumpeq: "\u224E",
    bumpeq: "\u224F",
    Cacute: "\u0106",
    cacute: "\u0107",
    Cap: "\u22D2",
    cap: "\u2229",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    capcup: "\u2A47",
    capdot: "\u2A40",
    CapitalDifferentialD: "\u2145",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    caron: "\u02C7",
    Cayleys: "\u212D",
    ccaps: "\u2A4D",
    Ccaron: "\u010C",
    ccaron: "\u010D",
    Ccedil: "\xC7",
    ccedil: "\xE7",
    Ccirc: "\u0108",
    ccirc: "\u0109",
    Cconint: "\u2230",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    Cdot: "\u010A",
    cdot: "\u010B",
    cedil: "\xB8",
    Cedilla: "\xB8",
    cemptyv: "\u29B2",
    cent: "\xA2",
    CenterDot: "\xB7",
    centerdot: "\xB7",
    Cfr: "\u212D",
    cfr: "\u{1D520}",
    CHcy: "\u0427",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    Chi: "\u03A7",
    chi: "\u03C7",
    cir: "\u25CB",
    circ: "\u02C6",
    circeq: "\u2257",
    circlearrowleft: "\u21BA",
    circlearrowright: "\u21BB",
    circledast: "\u229B",
    circledcirc: "\u229A",
    circleddash: "\u229D",
    CircleDot: "\u2299",
    circledR: "\xAE",
    circledS: "\u24C8",
    CircleMinus: "\u2296",
    CirclePlus: "\u2295",
    CircleTimes: "\u2297",
    cirE: "\u29C3",
    cire: "\u2257",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    ClockwiseContourIntegral: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    CloseCurlyQuote: "\u2019",
    clubs: "\u2663",
    clubsuit: "\u2663",
    Colon: "\u2237",
    colon: ":",
    Colone: "\u2A74",
    colone: "\u2254",
    coloneq: "\u2254",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    compfn: "\u2218",
    complement: "\u2201",
    complexes: "\u2102",
    cong: "\u2245",
    congdot: "\u2A6D",
    Congruent: "\u2261",
    Conint: "\u222F",
    conint: "\u222E",
    ContourIntegral: "\u222E",
    Copf: "\u2102",
    copf: "\u{1D554}",
    coprod: "\u2210",
    Coproduct: "\u2210",
    COPY: "\xA9",
    copy: "\xA9",
    copysr: "\u2117",
    CounterClockwiseContourIntegral: "\u2233",
    crarr: "\u21B5",
    Cross: "\u2A2F",
    cross: "\u2717",
    Cscr: "\u{1D49E}",
    cscr: "\u{1D4B8}",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    cuesc: "\u22DF",
    cularr: "\u21B6",
    cularrp: "\u293D",
    Cup: "\u22D3",
    cup: "\u222A",
    cupbrcap: "\u2A48",
    CupCap: "\u224D",
    cupcap: "\u2A46",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curarrm: "\u293C",
    curlyeqprec: "\u22DE",
    curlyeqsucc: "\u22DF",
    curlyvee: "\u22CE",
    curlywedge: "\u22CF",
    curren: "\xA4",
    curvearrowleft: "\u21B6",
    curvearrowright: "\u21B7",
    cuvee: "\u22CE",
    cuwed: "\u22CF",
    cwconint: "\u2232",
    cwint: "\u2231",
    cylcty: "\u232D",
    Dagger: "\u2021",
    dagger: "\u2020",
    daleth: "\u2138",
    Darr: "\u21A1",
    dArr: "\u21D3",
    darr: "\u2193",
    dash: "\u2010",
    Dashv: "\u2AE4",
    dashv: "\u22A3",
    dbkarow: "\u290F",
    dblac: "\u02DD",
    Dcaron: "\u010E",
    dcaron: "\u010F",
    Dcy: "\u0414",
    dcy: "\u0434",
    DD: "\u2145",
    dd: "\u2146",
    ddagger: "\u2021",
    ddarr: "\u21CA",
    DDotrahd: "\u2911",
    ddotseq: "\u2A77",
    deg: "\xB0",
    Del: "\u2207",
    Delta: "\u0394",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    Dfr: "\u{1D507}",
    dfr: "\u{1D521}",
    dHar: "\u2965",
    dharl: "\u21C3",
    dharr: "\u21C2",
    DiacriticalAcute: "\xB4",
    DiacriticalDot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    DiacriticalGrave: "`",
    DiacriticalTilde: "\u02DC",
    diam: "\u22C4",
    Diamond: "\u22C4",
    diamond: "\u22C4",
    diamondsuit: "\u2666",
    diams: "\u2666",
    die: "\xA8",
    DifferentialD: "\u2146",
    digamma: "\u03DD",
    disin: "\u22F2",
    div: "\xF7",
    divide: "\xF7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    DJcy: "\u0402",
    djcy: "\u0452",
    dlcorn: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    Dopf: "\u{1D53B}",
    dopf: "\u{1D555}",
    Dot: "\xA8",
    dot: "\u02D9",
    DotDot: "\u20DC",
    doteq: "\u2250",
    doteqdot: "\u2251",
    DotEqual: "\u2250",
    dotminus: "\u2238",
    dotplus: "\u2214",
    dotsquare: "\u22A1",
    doublebarwedge: "\u2306",
    DoubleContourIntegral: "\u222F",
    DoubleDot: "\xA8",
    DoubleDownArrow: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    DoubleLeftTee: "\u2AE4",
    DoubleLongLeftArrow: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    DoubleRightArrow: "\u21D2",
    DoubleRightTee: "\u22A8",
    DoubleUpArrow: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    DoubleVerticalBar: "\u2225",
    DownArrow: "\u2193",
    Downarrow: "\u21D3",
    downarrow: "\u2193",
    DownArrowBar: "\u2913",
    DownArrowUpArrow: "\u21F5",
    DownBreve: "\u0311",
    downdownarrows: "\u21CA",
    downharpoonleft: "\u21C3",
    downharpoonright: "\u21C2",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVector: "\u21BD",
    DownLeftVectorBar: "\u2956",
    DownRightTeeVector: "\u295F",
    DownRightVector: "\u21C1",
    DownRightVectorBar: "\u2957",
    DownTee: "\u22A4",
    DownTeeArrow: "\u21A7",
    drbkarow: "\u2910",
    drcorn: "\u231F",
    drcrop: "\u230C",
    Dscr: "\u{1D49F}",
    dscr: "\u{1D4B9}",
    DScy: "\u0405",
    dscy: "\u0455",
    dsol: "\u29F6",
    Dstrok: "\u0110",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    dtrif: "\u25BE",
    duarr: "\u21F5",
    duhar: "\u296F",
    dwangle: "\u29A6",
    DZcy: "\u040F",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    Eacute: "\xC9",
    eacute: "\xE9",
    easter: "\u2A6E",
    Ecaron: "\u011A",
    ecaron: "\u011B",
    ecir: "\u2256",
    Ecirc: "\xCA",
    ecirc: "\xEA",
    ecolon: "\u2255",
    Ecy: "\u042D",
    ecy: "\u044D",
    eDDot: "\u2A77",
    Edot: "\u0116",
    eDot: "\u2251",
    edot: "\u0117",
    ee: "\u2147",
    efDot: "\u2252",
    Efr: "\u{1D508}",
    efr: "\u{1D522}",
    eg: "\u2A9A",
    Egrave: "\xC8",
    egrave: "\xE8",
    egs: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    Element: "\u2208",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    elsdot: "\u2A97",
    Emacr: "\u0112",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    EmptySmallSquare: "\u25FB",
    emptyv: "\u2205",
    EmptyVerySmallSquare: "\u25AB",
    emsp: "\u2003",
    emsp13: "\u2004",
    emsp14: "\u2005",
    ENG: "\u014A",
    eng: "\u014B",
    ensp: "\u2002",
    Eogon: "\u0118",
    eogon: "\u0119",
    Eopf: "\u{1D53C}",
    eopf: "\u{1D556}",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    Epsilon: "\u0395",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    eqcirc: "\u2256",
    eqcolon: "\u2255",
    eqsim: "\u2242",
    eqslantgtr: "\u2A96",
    eqslantless: "\u2A95",
    Equal: "\u2A75",
    equals: "=",
    EqualTilde: "\u2242",
    equest: "\u225F",
    Equilibrium: "\u21CC",
    equiv: "\u2261",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erarr: "\u2971",
    erDot: "\u2253",
    Escr: "\u2130",
    escr: "\u212F",
    esdot: "\u2250",
    Esim: "\u2A73",
    esim: "\u2242",
    Eta: "\u0397",
    eta: "\u03B7",
    ETH: "\xD0",
    eth: "\xF0",
    Euml: "\xCB",
    euml: "\xEB",
    euro: "\u20AC",
    excl: "!",
    exist: "\u2203",
    Exists: "\u2203",
    expectation: "\u2130",
    ExponentialE: "\u2147",
    exponentiale: "\u2147",
    fallingdotseq: "\u2252",
    Fcy: "\u0424",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    Ffr: "\u{1D509}",
    ffr: "\u{1D523}",
    filig: "\uFB01",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    Fopf: "\u{1D53D}",
    fopf: "\u{1D557}",
    ForAll: "\u2200",
    forall: "\u2200",
    fork: "\u22D4",
    forkv: "\u2AD9",
    Fouriertrf: "\u2131",
    fpartint: "\u2A0D",
    frac12: "\xBD",
    frac13: "\u2153",
    frac14: "\xBC",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xBE",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    Fscr: "\u2131",
    fscr: "\u{1D4BB}",
    gacute: "\u01F5",
    Gamma: "\u0393",
    gamma: "\u03B3",
    Gammad: "\u03DC",
    gammad: "\u03DD",
    gap: "\u2A86",
    Gbreve: "\u011E",
    gbreve: "\u011F",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    gcirc: "\u011D",
    Gcy: "\u0413",
    gcy: "\u0433",
    Gdot: "\u0120",
    gdot: "\u0121",
    gE: "\u2267",
    ge: "\u2265",
    gEl: "\u2A8C",
    gel: "\u22DB",
    geq: "\u2265",
    geqq: "\u2267",
    geqslant: "\u2A7E",
    ges: "\u2A7E",
    gescc: "\u2AA9",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    Gfr: "\u{1D50A}",
    gfr: "\u{1D524}",
    Gg: "\u22D9",
    gg: "\u226B",
    ggg: "\u22D9",
    gimel: "\u2137",
    GJcy: "\u0403",
    gjcy: "\u0453",
    gl: "\u2277",
    gla: "\u2AA5",
    glE: "\u2A92",
    glj: "\u2AA4",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gnE: "\u2269",
    gne: "\u2A88",
    gneq: "\u2A88",
    gneqq: "\u2269",
    gnsim: "\u22E7",
    Gopf: "\u{1D53E}",
    gopf: "\u{1D558}",
    grave: "`",
    GreaterEqual: "\u2265",
    GreaterEqualLess: "\u22DB",
    GreaterFullEqual: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    GreaterTilde: "\u2273",
    Gscr: "\u{1D4A2}",
    gscr: "\u210A",
    gsim: "\u2273",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    Gt: "\u226B",
    GT: ">",
    gt: ">",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gtdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrapprox: "\u2A86",
    gtrarr: "\u2978",
    gtrdot: "\u22D7",
    gtreqless: "\u22DB",
    gtreqqless: "\u2A8C",
    gtrless: "\u2277",
    gtrsim: "\u2273",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    Hacek: "\u02C7",
    hairsp: "\u200A",
    half: "\xBD",
    hamilt: "\u210B",
    HARDcy: "\u042A",
    hardcy: "\u044A",
    hArr: "\u21D4",
    harr: "\u2194",
    harrcir: "\u2948",
    harrw: "\u21AD",
    Hat: "^",
    hbar: "\u210F",
    Hcirc: "\u0124",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    hercon: "\u22B9",
    Hfr: "\u210C",
    hfr: "\u{1D525}",
    HilbertSpace: "\u210B",
    hksearow: "\u2925",
    hkswarow: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    hookrightarrow: "\u21AA",
    Hopf: "\u210D",
    hopf: "\u{1D559}",
    horbar: "\u2015",
    HorizontalLine: "\u2500",
    Hscr: "\u210B",
    hscr: "\u{1D4BD}",
    hslash: "\u210F",
    Hstrok: "\u0126",
    hstrok: "\u0127",
    HumpDownHump: "\u224E",
    HumpEqual: "\u224F",
    hybull: "\u2043",
    hyphen: "\u2010",
    Iacute: "\xCD",
    iacute: "\xED",
    ic: "\u2063",
    Icirc: "\xCE",
    icirc: "\xEE",
    Icy: "\u0418",
    icy: "\u0438",
    Idot: "\u0130",
    IEcy: "\u0415",
    iecy: "\u0435",
    iexcl: "\xA1",
    iff: "\u21D4",
    Ifr: "\u2111",
    ifr: "\u{1D526}",
    Igrave: "\xCC",
    igrave: "\xEC",
    ii: "\u2148",
    iiiint: "\u2A0C",
    iiint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    IJlig: "\u0132",
    ijlig: "\u0133",
    Im: "\u2111",
    Imacr: "\u012A",
    imacr: "\u012B",
    image: "\u2111",
    ImaginaryI: "\u2148",
    imagline: "\u2110",
    imagpart: "\u2111",
    imath: "\u0131",
    imof: "\u22B7",
    imped: "\u01B5",
    Implies: "\u21D2",
    in: "\u2208",
    incare: "\u2105",
    infin: "\u221E",
    infintie: "\u29DD",
    inodot: "\u0131",
    Int: "\u222C",
    int: "\u222B",
    intcal: "\u22BA",
    integers: "\u2124",
    Integral: "\u222B",
    intercal: "\u22BA",
    Intersection: "\u22C2",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    InvisibleComma: "\u2063",
    InvisibleTimes: "\u2062",
    IOcy: "\u0401",
    iocy: "\u0451",
    Iogon: "\u012E",
    iogon: "\u012F",
    Iopf: "\u{1D540}",
    iopf: "\u{1D55A}",
    Iota: "\u0399",
    iota: "\u03B9",
    iprod: "\u2A3C",
    iquest: "\xBF",
    Iscr: "\u2110",
    iscr: "\u{1D4BE}",
    isin: "\u2208",
    isindot: "\u22F5",
    isinE: "\u22F9",
    isins: "\u22F4",
    isinsv: "\u22F3",
    isinv: "\u2208",
    it: "\u2062",
    Itilde: "\u0128",
    itilde: "\u0129",
    Iukcy: "\u0406",
    iukcy: "\u0456",
    Iuml: "\xCF",
    iuml: "\xEF",
    Jcirc: "\u0134",
    jcirc: "\u0135",
    Jcy: "\u0419",
    jcy: "\u0439",
    Jfr: "\u{1D50D}",
    jfr: "\u{1D527}",
    jmath: "\u0237",
    Jopf: "\u{1D541}",
    jopf: "\u{1D55B}",
    Jscr: "\u{1D4A5}",
    jscr: "\u{1D4BF}",
    Jsercy: "\u0408",
    jsercy: "\u0458",
    Jukcy: "\u0404",
    jukcy: "\u0454",
    Kappa: "\u039A",
    kappa: "\u03BA",
    kappav: "\u03F0",
    Kcedil: "\u0136",
    kcedil: "\u0137",
    Kcy: "\u041A",
    kcy: "\u043A",
    Kfr: "\u{1D50E}",
    kfr: "\u{1D528}",
    kgreen: "\u0138",
    KHcy: "\u0425",
    khcy: "\u0445",
    KJcy: "\u040C",
    kjcy: "\u045C",
    Kopf: "\u{1D542}",
    kopf: "\u{1D55C}",
    Kscr: "\u{1D4A6}",
    kscr: "\u{1D4C0}",
    lAarr: "\u21DA",
    Lacute: "\u0139",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lagran: "\u2112",
    Lambda: "\u039B",
    lambda: "\u03BB",
    Lang: "\u27EA",
    lang: "\u27E8",
    langd: "\u2991",
    langle: "\u27E8",
    lap: "\u2A85",
    Laplacetrf: "\u2112",
    laquo: "\xAB",
    Larr: "\u219E",
    lArr: "\u21D0",
    larr: "\u2190",
    larrb: "\u21E4",
    larrbfs: "\u291F",
    larrfs: "\u291D",
    larrhk: "\u21A9",
    larrlp: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    lat: "\u2AAB",
    lAtail: "\u291B",
    latail: "\u2919",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lBarr: "\u290E",
    lbarr: "\u290C",
    lbbrk: "\u2772",
    lbrace: "{",
    lbrack: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    Lcaron: "\u013D",
    lcaron: "\u013E",
    Lcedil: "\u013B",
    lcedil: "\u013C",
    lceil: "\u2308",
    lcub: "{",
    Lcy: "\u041B",
    lcy: "\u043B",
    ldca: "\u2936",
    ldquo: "\u201C",
    ldquor: "\u201E",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    lE: "\u2266",
    le: "\u2264",
    LeftAngleBracket: "\u27E8",
    LeftArrow: "\u2190",
    Leftarrow: "\u21D0",
    leftarrow: "\u2190",
    LeftArrowBar: "\u21E4",
    LeftArrowRightArrow: "\u21C6",
    leftarrowtail: "\u21A2",
    LeftCeiling: "\u2308",
    LeftDoubleBracket: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVector: "\u21C3",
    LeftDownVectorBar: "\u2959",
    LeftFloor: "\u230A",
    leftharpoondown: "\u21BD",
    leftharpoonup: "\u21BC",
    leftleftarrows: "\u21C7",
    LeftRightArrow: "\u2194",
    Leftrightarrow: "\u21D4",
    leftrightarrow: "\u2194",
    leftrightarrows: "\u21C6",
    leftrightharpoons: "\u21CB",
    leftrightsquigarrow: "\u21AD",
    LeftRightVector: "\u294E",
    LeftTee: "\u22A3",
    LeftTeeArrow: "\u21A4",
    LeftTeeVector: "\u295A",
    leftthreetimes: "\u22CB",
    LeftTriangle: "\u22B2",
    LeftTriangleBar: "\u29CF",
    LeftTriangleEqual: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVector: "\u21BF",
    LeftUpVectorBar: "\u2958",
    LeftVector: "\u21BC",
    LeftVectorBar: "\u2952",
    lEg: "\u2A8B",
    leg: "\u22DA",
    leq: "\u2264",
    leqq: "\u2266",
    leqslant: "\u2A7D",
    les: "\u2A7D",
    lescc: "\u2AA8",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessapprox: "\u2A85",
    lessdot: "\u22D6",
    lesseqgtr: "\u22DA",
    lesseqqgtr: "\u2A8B",
    LessEqualGreater: "\u22DA",
    LessFullEqual: "\u2266",
    LessGreater: "\u2276",
    lessgtr: "\u2276",
    LessLess: "\u2AA1",
    lesssim: "\u2272",
    LessSlantEqual: "\u2A7D",
    LessTilde: "\u2272",
    lfisht: "\u297C",
    lfloor: "\u230A",
    Lfr: "\u{1D50F}",
    lfr: "\u{1D529}",
    lg: "\u2276",
    lgE: "\u2A91",
    lHar: "\u2962",
    lhard: "\u21BD",
    lharu: "\u21BC",
    lharul: "\u296A",
    lhblk: "\u2584",
    LJcy: "\u0409",
    ljcy: "\u0459",
    Ll: "\u22D8",
    ll: "\u226A",
    llarr: "\u21C7",
    llcorner: "\u231E",
    Lleftarrow: "\u21DA",
    llhard: "\u296B",
    lltri: "\u25FA",
    Lmidot: "\u013F",
    lmidot: "\u0140",
    lmoust: "\u23B0",
    lmoustache: "\u23B0",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lnE: "\u2268",
    lne: "\u2A87",
    lneq: "\u2A87",
    lneqq: "\u2268",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    lobrk: "\u27E6",
    LongLeftArrow: "\u27F5",
    Longleftarrow: "\u27F8",
    longleftarrow: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    Longleftrightarrow: "\u27FA",
    longleftrightarrow: "\u27F7",
    longmapsto: "\u27FC",
    LongRightArrow: "\u27F6",
    Longrightarrow: "\u27F9",
    longrightarrow: "\u27F6",
    looparrowleft: "\u21AB",
    looparrowright: "\u21AC",
    lopar: "\u2985",
    Lopf: "\u{1D543}",
    lopf: "\u{1D55D}",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    lowbar: "_",
    LowerLeftArrow: "\u2199",
    LowerRightArrow: "\u2198",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lozf: "\u29EB",
    lpar: "(",
    lparlt: "\u2993",
    lrarr: "\u21C6",
    lrcorner: "\u231F",
    lrhar: "\u21CB",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    Lscr: "\u2112",
    lscr: "\u{1D4C1}",
    Lsh: "\u21B0",
    lsh: "\u21B0",
    lsim: "\u2272",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsqb: "[",
    lsquo: "\u2018",
    lsquor: "\u201A",
    Lstrok: "\u0141",
    lstrok: "\u0142",
    Lt: "\u226A",
    LT: "<",
    lt: "<",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    ltdot: "\u22D6",
    lthree: "\u22CB",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltri: "\u25C3",
    ltrie: "\u22B4",
    ltrif: "\u25C2",
    ltrPar: "\u2996",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    macr: "\xAF",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    Map: "\u2905",
    map: "\u21A6",
    mapsto: "\u21A6",
    mapstodown: "\u21A7",
    mapstoleft: "\u21A4",
    mapstoup: "\u21A5",
    marker: "\u25AE",
    mcomma: "\u2A29",
    Mcy: "\u041C",
    mcy: "\u043C",
    mdash: "\u2014",
    mDDot: "\u223A",
    measuredangle: "\u2221",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mfr: "\u{1D510}",
    mfr: "\u{1D52A}",
    mho: "\u2127",
    micro: "\xB5",
    mid: "\u2223",
    midast: "*",
    midcir: "\u2AF0",
    middot: "\xB7",
    minus: "\u2212",
    minusb: "\u229F",
    minusd: "\u2238",
    minusdu: "\u2A2A",
    MinusPlus: "\u2213",
    mlcp: "\u2ADB",
    mldr: "\u2026",
    mnplus: "\u2213",
    models: "\u22A7",
    Mopf: "\u{1D544}",
    mopf: "\u{1D55E}",
    mp: "\u2213",
    Mscr: "\u2133",
    mscr: "\u{1D4C2}",
    mstpos: "\u223E",
    Mu: "\u039C",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nabla: "\u2207",
    Nacute: "\u0143",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    nap: "\u2249",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    napprox: "\u2249",
    natur: "\u266E",
    natural: "\u266E",
    naturals: "\u2115",
    nbsp: "\xA0",
    nbump: "\u224E\u0338",
    nbumpe: "\u224F\u0338",
    ncap: "\u2A43",
    Ncaron: "\u0147",
    ncaron: "\u0148",
    Ncedil: "\u0145",
    ncedil: "\u0146",
    ncong: "\u2247",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    Ncy: "\u041D",
    ncy: "\u043D",
    ndash: "\u2013",
    ne: "\u2260",
    nearhk: "\u2924",
    neArr: "\u21D7",
    nearr: "\u2197",
    nearrow: "\u2197",
    nedot: "\u2250\u0338",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    nequiv: "\u2262",
    nesear: "\u2928",
    nesim: "\u2242\u0338",
    NestedGreaterGreater: "\u226B",
    NestedLessLess: "\u226A",
    NewLine: `
`,
    nexist: "\u2204",
    nexists: "\u2204",
    Nfr: "\u{1D511}",
    nfr: "\u{1D52B}",
    ngE: "\u2267\u0338",
    nge: "\u2271",
    ngeq: "\u2271",
    ngeqq: "\u2267\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    nGg: "\u22D9\u0338",
    ngsim: "\u2275",
    nGt: "\u226B\u20D2",
    ngt: "\u226F",
    ngtr: "\u226F",
    nGtv: "\u226B\u0338",
    nhArr: "\u21CE",
    nharr: "\u21AE",
    nhpar: "\u2AF2",
    ni: "\u220B",
    nis: "\u22FC",
    nisd: "\u22FA",
    niv: "\u220B",
    NJcy: "\u040A",
    njcy: "\u045A",
    nlArr: "\u21CD",
    nlarr: "\u219A",
    nldr: "\u2025",
    nlE: "\u2266\u0338",
    nle: "\u2270",
    nLeftarrow: "\u21CD",
    nleftarrow: "\u219A",
    nLeftrightarrow: "\u21CE",
    nleftrightarrow: "\u21AE",
    nleq: "\u2270",
    nleqq: "\u2266\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    nless: "\u226E",
    nLl: "\u22D8\u0338",
    nlsim: "\u2274",
    nLt: "\u226A\u20D2",
    nlt: "\u226E",
    nltri: "\u22EA",
    nltrie: "\u22EC",
    nLtv: "\u226A\u0338",
    nmid: "\u2224",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xA0",
    Nopf: "\u2115",
    nopf: "\u{1D55F}",
    Not: "\u2AEC",
    not: "\xAC",
    NotCongruent: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    NotElement: "\u2209",
    NotEqual: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    NotExists: "\u2204",
    NotGreater: "\u226F",
    NotGreaterEqual: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    notin: "\u2209",
    notindot: "\u22F5\u0338",
    notinE: "\u22F9\u0338",
    notinva: "\u2209",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    NotLeftTriangle: "\u22EA",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangleEqual: "\u22EC",
    NotLess: "\u226E",
    NotLessEqual: "\u2270",
    NotLessGreater: "\u2278",
    NotLessLess: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    notni: "\u220C",
    notniva: "\u220C",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    NotPrecedes: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    NotReverseElement: "\u220C",
    NotRightTriangle: "\u22EB",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangleEqual: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    NotSubset: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    NotSucceeds: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    NotTilde: "\u2241",
    NotTildeEqual: "\u2244",
    NotTildeFullEqual: "\u2247",
    NotTildeTilde: "\u2249",
    NotVerticalBar: "\u2224",
    npar: "\u2226",
    nparallel: "\u2226",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    npr: "\u2280",
    nprcue: "\u22E0",
    npre: "\u2AAF\u0338",
    nprec: "\u2280",
    npreceq: "\u2AAF\u0338",
    nrArr: "\u21CF",
    nrarr: "\u219B",
    nrarrc: "\u2933\u0338",
    nrarrw: "\u219D\u0338",
    nRightarrow: "\u21CF",
    nrightarrow: "\u219B",
    nrtri: "\u22EB",
    nrtrie: "\u22ED",
    nsc: "\u2281",
    nsccue: "\u22E1",
    nsce: "\u2AB0\u0338",
    Nscr: "\u{1D4A9}",
    nscr: "\u{1D4C3}",
    nshortmid: "\u2224",
    nshortparallel: "\u2226",
    nsim: "\u2241",
    nsime: "\u2244",
    nsimeq: "\u2244",
    nsmid: "\u2224",
    nspar: "\u2226",
    nsqsube: "\u22E2",
    nsqsupe: "\u22E3",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsube: "\u2288",
    nsubset: "\u2282\u20D2",
    nsubseteq: "\u2288",
    nsubseteqq: "\u2AC5\u0338",
    nsucc: "\u2281",
    nsucceq: "\u2AB0\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupe: "\u2289",
    nsupset: "\u2283\u20D2",
    nsupseteq: "\u2289",
    nsupseteqq: "\u2AC6\u0338",
    ntgl: "\u2279",
    Ntilde: "\xD1",
    ntilde: "\xF1",
    ntlg: "\u2278",
    ntriangleleft: "\u22EA",
    ntrianglelefteq: "\u22EC",
    ntriangleright: "\u22EB",
    ntrianglerighteq: "\u22ED",
    Nu: "\u039D",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvap: "\u224D\u20D2",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    nvDash: "\u22AD",
    nvdash: "\u22AC",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvHarr: "\u2904",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwarhk: "\u2923",
    nwArr: "\u21D6",
    nwarr: "\u2196",
    nwarrow: "\u2196",
    nwnear: "\u2927",
    Oacute: "\xD3",
    oacute: "\xF3",
    oast: "\u229B",
    ocir: "\u229A",
    Ocirc: "\xD4",
    ocirc: "\xF4",
    Ocy: "\u041E",
    ocy: "\u043E",
    odash: "\u229D",
    Odblac: "\u0150",
    odblac: "\u0151",
    odiv: "\u2A38",
    odot: "\u2299",
    odsold: "\u29BC",
    OElig: "\u0152",
    oelig: "\u0153",
    ofcir: "\u29BF",
    Ofr: "\u{1D512}",
    ofr: "\u{1D52C}",
    ogon: "\u02DB",
    Ograve: "\xD2",
    ograve: "\xF2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    ohm: "\u03A9",
    oint: "\u222E",
    olarr: "\u21BA",
    olcir: "\u29BE",
    olcross: "\u29BB",
    oline: "\u203E",
    olt: "\u29C0",
    Omacr: "\u014C",
    omacr: "\u014D",
    Omega: "\u03A9",
    omega: "\u03C9",
    Omicron: "\u039F",
    omicron: "\u03BF",
    omid: "\u29B6",
    ominus: "\u2296",
    Oopf: "\u{1D546}",
    oopf: "\u{1D560}",
    opar: "\u29B7",
    OpenCurlyDoubleQuote: "\u201C",
    OpenCurlyQuote: "\u2018",
    operp: "\u29B9",
    oplus: "\u2295",
    Or: "\u2A54",
    or: "\u2228",
    orarr: "\u21BB",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    ordf: "\xAA",
    ordm: "\xBA",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oS: "\u24C8",
    Oscr: "\u{1D4AA}",
    oscr: "\u2134",
    Oslash: "\xD8",
    oslash: "\xF8",
    osol: "\u2298",
    Otilde: "\xD5",
    otilde: "\xF5",
    Otimes: "\u2A37",
    otimes: "\u2297",
    otimesas: "\u2A36",
    Ouml: "\xD6",
    ouml: "\xF6",
    ovbar: "\u233D",
    OverBar: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    OverParenthesis: "\u23DC",
    par: "\u2225",
    para: "\xB6",
    parallel: "\u2225",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    part: "\u2202",
    PartialD: "\u2202",
    Pcy: "\u041F",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    perp: "\u22A5",
    pertenk: "\u2031",
    Pfr: "\u{1D513}",
    pfr: "\u{1D52D}",
    Phi: "\u03A6",
    phi: "\u03C6",
    phiv: "\u03D5",
    phmmat: "\u2133",
    phone: "\u260E",
    Pi: "\u03A0",
    pi: "\u03C0",
    pitchfork: "\u22D4",
    piv: "\u03D6",
    planck: "\u210F",
    planckh: "\u210E",
    plankv: "\u210F",
    plus: "+",
    plusacir: "\u2A23",
    plusb: "\u229E",
    pluscir: "\u2A22",
    plusdo: "\u2214",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    PlusMinus: "\xB1",
    plusmn: "\xB1",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pm: "\xB1",
    Poincareplane: "\u210C",
    pointint: "\u2A15",
    Popf: "\u2119",
    popf: "\u{1D561}",
    pound: "\xA3",
    Pr: "\u2ABB",
    pr: "\u227A",
    prap: "\u2AB7",
    prcue: "\u227C",
    prE: "\u2AB3",
    pre: "\u2AAF",
    prec: "\u227A",
    precapprox: "\u2AB7",
    preccurlyeq: "\u227C",
    Precedes: "\u227A",
    PrecedesEqual: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    PrecedesTilde: "\u227E",
    preceq: "\u2AAF",
    precnapprox: "\u2AB9",
    precneqq: "\u2AB5",
    precnsim: "\u22E8",
    precsim: "\u227E",
    Prime: "\u2033",
    prime: "\u2032",
    primes: "\u2119",
    prnap: "\u2AB9",
    prnE: "\u2AB5",
    prnsim: "\u22E8",
    prod: "\u220F",
    Product: "\u220F",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prop: "\u221D",
    Proportion: "\u2237",
    Proportional: "\u221D",
    propto: "\u221D",
    prsim: "\u227E",
    prurel: "\u22B0",
    Pscr: "\u{1D4AB}",
    pscr: "\u{1D4C5}",
    Psi: "\u03A8",
    psi: "\u03C8",
    puncsp: "\u2008",
    Qfr: "\u{1D514}",
    qfr: "\u{1D52E}",
    qint: "\u2A0C",
    Qopf: "\u211A",
    qopf: "\u{1D562}",
    qprime: "\u2057",
    Qscr: "\u{1D4AC}",
    qscr: "\u{1D4C6}",
    quaternions: "\u210D",
    quatint: "\u2A16",
    quest: "?",
    questeq: "\u225F",
    QUOT: '"',
    quot: '"',
    rAarr: "\u21DB",
    race: "\u223D\u0331",
    Racute: "\u0154",
    racute: "\u0155",
    radic: "\u221A",
    raemptyv: "\u29B3",
    Rang: "\u27EB",
    rang: "\u27E9",
    rangd: "\u2992",
    range: "\u29A5",
    rangle: "\u27E9",
    raquo: "\xBB",
    Rarr: "\u21A0",
    rArr: "\u21D2",
    rarr: "\u2192",
    rarrap: "\u2975",
    rarrb: "\u21E5",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarrfs: "\u291E",
    rarrhk: "\u21AA",
    rarrlp: "\u21AC",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    Rarrtl: "\u2916",
    rarrtl: "\u21A3",
    rarrw: "\u219D",
    rAtail: "\u291C",
    ratail: "\u291A",
    ratio: "\u2236",
    rationals: "\u211A",
    RBarr: "\u2910",
    rBarr: "\u290F",
    rbarr: "\u290D",
    rbbrk: "\u2773",
    rbrace: "}",
    rbrack: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    Rcaron: "\u0158",
    rcaron: "\u0159",
    Rcedil: "\u0156",
    rcedil: "\u0157",
    rceil: "\u2309",
    rcub: "}",
    Rcy: "\u0420",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdquo: "\u201D",
    rdquor: "\u201D",
    rdsh: "\u21B3",
    Re: "\u211C",
    real: "\u211C",
    realine: "\u211B",
    realpart: "\u211C",
    reals: "\u211D",
    rect: "\u25AD",
    REG: "\xAE",
    reg: "\xAE",
    ReverseElement: "\u220B",
    ReverseEquilibrium: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    rfisht: "\u297D",
    rfloor: "\u230B",
    Rfr: "\u211C",
    rfr: "\u{1D52F}",
    rHar: "\u2964",
    rhard: "\u21C1",
    rharu: "\u21C0",
    rharul: "\u296C",
    Rho: "\u03A1",
    rho: "\u03C1",
    rhov: "\u03F1",
    RightAngleBracket: "\u27E9",
    RightArrow: "\u2192",
    Rightarrow: "\u21D2",
    rightarrow: "\u2192",
    RightArrowBar: "\u21E5",
    RightArrowLeftArrow: "\u21C4",
    rightarrowtail: "\u21A3",
    RightCeiling: "\u2309",
    RightDoubleBracket: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVector: "\u21C2",
    RightDownVectorBar: "\u2955",
    RightFloor: "\u230B",
    rightharpoondown: "\u21C1",
    rightharpoonup: "\u21C0",
    rightleftarrows: "\u21C4",
    rightleftharpoons: "\u21CC",
    rightrightarrows: "\u21C9",
    rightsquigarrow: "\u219D",
    RightTee: "\u22A2",
    RightTeeArrow: "\u21A6",
    RightTeeVector: "\u295B",
    rightthreetimes: "\u22CC",
    RightTriangle: "\u22B3",
    RightTriangleBar: "\u29D0",
    RightTriangleEqual: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVector: "\u21BE",
    RightUpVectorBar: "\u2954",
    RightVector: "\u21C0",
    RightVectorBar: "\u2953",
    ring: "\u02DA",
    risingdotseq: "\u2253",
    rlarr: "\u21C4",
    rlhar: "\u21CC",
    rlm: "\u200F",
    rmoust: "\u23B1",
    rmoustache: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    robrk: "\u27E7",
    ropar: "\u2986",
    Ropf: "\u211D",
    ropf: "\u{1D563}",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    RoundImplies: "\u2970",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rrarr: "\u21C9",
    Rrightarrow: "\u21DB",
    rsaquo: "\u203A",
    Rscr: "\u211B",
    rscr: "\u{1D4C7}",
    Rsh: "\u21B1",
    rsh: "\u21B1",
    rsqb: "]",
    rsquo: "\u2019",
    rsquor: "\u2019",
    rthree: "\u22CC",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    rtrie: "\u22B5",
    rtrif: "\u25B8",
    rtriltri: "\u29CE",
    RuleDelayed: "\u29F4",
    ruluhar: "\u2968",
    rx: "\u211E",
    Sacute: "\u015A",
    sacute: "\u015B",
    sbquo: "\u201A",
    Sc: "\u2ABC",
    sc: "\u227B",
    scap: "\u2AB8",
    Scaron: "\u0160",
    scaron: "\u0161",
    sccue: "\u227D",
    scE: "\u2AB4",
    sce: "\u2AB0",
    Scedil: "\u015E",
    scedil: "\u015F",
    Scirc: "\u015C",
    scirc: "\u015D",
    scnap: "\u2ABA",
    scnE: "\u2AB6",
    scnsim: "\u22E9",
    scpolint: "\u2A13",
    scsim: "\u227F",
    Scy: "\u0421",
    scy: "\u0441",
    sdot: "\u22C5",
    sdotb: "\u22A1",
    sdote: "\u2A66",
    searhk: "\u2925",
    seArr: "\u21D8",
    searr: "\u2198",
    searrow: "\u2198",
    sect: "\xA7",
    semi: ";",
    seswar: "\u2929",
    setminus: "\u2216",
    setmn: "\u2216",
    sext: "\u2736",
    Sfr: "\u{1D516}",
    sfr: "\u{1D530}",
    sfrown: "\u2322",
    sharp: "\u266F",
    SHCHcy: "\u0429",
    shchcy: "\u0449",
    SHcy: "\u0428",
    shcy: "\u0448",
    ShortDownArrow: "\u2193",
    ShortLeftArrow: "\u2190",
    shortmid: "\u2223",
    shortparallel: "\u2225",
    ShortRightArrow: "\u2192",
    ShortUpArrow: "\u2191",
    shy: "\xAD",
    Sigma: "\u03A3",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    sim: "\u223C",
    simdot: "\u2A6A",
    sime: "\u2243",
    simeq: "\u2243",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    slarr: "\u2190",
    SmallCircle: "\u2218",
    smallsetminus: "\u2216",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smid: "\u2223",
    smile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    SOFTcy: "\u042C",
    softcy: "\u044C",
    sol: "/",
    solb: "\u29C4",
    solbar: "\u233F",
    Sopf: "\u{1D54A}",
    sopf: "\u{1D564}",
    spades: "\u2660",
    spadesuit: "\u2660",
    spar: "\u2225",
    sqcap: "\u2293",
    sqcaps: "\u2293\uFE00",
    sqcup: "\u2294",
    sqcups: "\u2294\uFE00",
    Sqrt: "\u221A",
    sqsub: "\u228F",
    sqsube: "\u2291",
    sqsubset: "\u228F",
    sqsubseteq: "\u2291",
    sqsup: "\u2290",
    sqsupe: "\u2292",
    sqsupset: "\u2290",
    sqsupseteq: "\u2292",
    squ: "\u25A1",
    Square: "\u25A1",
    square: "\u25A1",
    SquareIntersection: "\u2293",
    SquareSubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    SquareSuperset: "\u2290",
    SquareSupersetEqual: "\u2292",
    SquareUnion: "\u2294",
    squarf: "\u25AA",
    squf: "\u25AA",
    srarr: "\u2192",
    Sscr: "\u{1D4AE}",
    sscr: "\u{1D4C8}",
    ssetmn: "\u2216",
    ssmile: "\u2323",
    sstarf: "\u22C6",
    Star: "\u22C6",
    star: "\u2606",
    starf: "\u2605",
    straightepsilon: "\u03F5",
    straightphi: "\u03D5",
    strns: "\xAF",
    Sub: "\u22D0",
    sub: "\u2282",
    subdot: "\u2ABD",
    subE: "\u2AC5",
    sube: "\u2286",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subne: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    Subset: "\u22D0",
    subset: "\u2282",
    subseteq: "\u2286",
    subseteqq: "\u2AC5",
    SubsetEqual: "\u2286",
    subsetneq: "\u228A",
    subsetneqq: "\u2ACB",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    succ: "\u227B",
    succapprox: "\u2AB8",
    succcurlyeq: "\u227D",
    Succeeds: "\u227B",
    SucceedsEqual: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    SucceedsTilde: "\u227F",
    succeq: "\u2AB0",
    succnapprox: "\u2ABA",
    succneqq: "\u2AB6",
    succnsim: "\u22E9",
    succsim: "\u227F",
    SuchThat: "\u220B",
    Sum: "\u2211",
    sum: "\u2211",
    sung: "\u266A",
    Sup: "\u22D1",
    sup: "\u2283",
    sup1: "\xB9",
    sup2: "\xB2",
    sup3: "\xB3",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supE: "\u2AC6",
    supe: "\u2287",
    supedot: "\u2AC4",
    Superset: "\u2283",
    SupersetEqual: "\u2287",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supne: "\u228B",
    supplus: "\u2AC0",
    Supset: "\u22D1",
    supset: "\u2283",
    supseteq: "\u2287",
    supseteqq: "\u2AC6",
    supsetneq: "\u228B",
    supsetneqq: "\u2ACC",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swarhk: "\u2926",
    swArr: "\u21D9",
    swarr: "\u2199",
    swarrow: "\u2199",
    swnwar: "\u292A",
    szlig: "\xDF",
    Tab: "	",
    target: "\u2316",
    Tau: "\u03A4",
    tau: "\u03C4",
    tbrk: "\u23B4",
    Tcaron: "\u0164",
    tcaron: "\u0165",
    Tcedil: "\u0162",
    tcedil: "\u0163",
    Tcy: "\u0422",
    tcy: "\u0442",
    tdot: "\u20DB",
    telrec: "\u2315",
    Tfr: "\u{1D517}",
    tfr: "\u{1D531}",
    there4: "\u2234",
    Therefore: "\u2234",
    therefore: "\u2234",
    Theta: "\u0398",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    thickapprox: "\u2248",
    thicksim: "\u223C",
    ThickSpace: "\u205F\u200A",
    thinsp: "\u2009",
    ThinSpace: "\u2009",
    thkap: "\u2248",
    thksim: "\u223C",
    THORN: "\xDE",
    thorn: "\xFE",
    Tilde: "\u223C",
    tilde: "\u02DC",
    TildeEqual: "\u2243",
    TildeFullEqual: "\u2245",
    TildeTilde: "\u2248",
    times: "\xD7",
    timesb: "\u22A0",
    timesbar: "\u2A31",
    timesd: "\u2A30",
    tint: "\u222D",
    toea: "\u2928",
    top: "\u22A4",
    topbot: "\u2336",
    topcir: "\u2AF1",
    Topf: "\u{1D54B}",
    topf: "\u{1D565}",
    topfork: "\u2ADA",
    tosa: "\u2929",
    tprime: "\u2034",
    TRADE: "\u2122",
    trade: "\u2122",
    triangle: "\u25B5",
    triangledown: "\u25BF",
    triangleleft: "\u25C3",
    trianglelefteq: "\u22B4",
    triangleq: "\u225C",
    triangleright: "\u25B9",
    trianglerighteq: "\u22B5",
    tridot: "\u25EC",
    trie: "\u225C",
    triminus: "\u2A3A",
    TripleDot: "\u20DB",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    Tscr: "\u{1D4AF}",
    tscr: "\u{1D4C9}",
    TScy: "\u0426",
    tscy: "\u0446",
    TSHcy: "\u040B",
    tshcy: "\u045B",
    Tstrok: "\u0166",
    tstrok: "\u0167",
    twixt: "\u226C",
    twoheadleftarrow: "\u219E",
    twoheadrightarrow: "\u21A0",
    Uacute: "\xDA",
    uacute: "\xFA",
    Uarr: "\u219F",
    uArr: "\u21D1",
    uarr: "\u2191",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    ubrcy: "\u045E",
    Ubreve: "\u016C",
    ubreve: "\u016D",
    Ucirc: "\xDB",
    ucirc: "\xFB",
    Ucy: "\u0423",
    ucy: "\u0443",
    udarr: "\u21C5",
    Udblac: "\u0170",
    udblac: "\u0171",
    udhar: "\u296E",
    ufisht: "\u297E",
    Ufr: "\u{1D518}",
    ufr: "\u{1D532}",
    Ugrave: "\xD9",
    ugrave: "\xF9",
    uHar: "\u2963",
    uharl: "\u21BF",
    uharr: "\u21BE",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    Umacr: "\u016A",
    umacr: "\u016B",
    uml: "\xA8",
    UnderBar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    UnionPlus: "\u228E",
    Uogon: "\u0172",
    uogon: "\u0173",
    Uopf: "\u{1D54C}",
    uopf: "\u{1D566}",
    UpArrow: "\u2191",
    Uparrow: "\u21D1",
    uparrow: "\u2191",
    UpArrowBar: "\u2912",
    UpArrowDownArrow: "\u21C5",
    UpDownArrow: "\u2195",
    Updownarrow: "\u21D5",
    updownarrow: "\u2195",
    UpEquilibrium: "\u296E",
    upharpoonleft: "\u21BF",
    upharpoonright: "\u21BE",
    uplus: "\u228E",
    UpperLeftArrow: "\u2196",
    UpperRightArrow: "\u2197",
    Upsi: "\u03D2",
    upsi: "\u03C5",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    upsilon: "\u03C5",
    UpTee: "\u22A5",
    UpTeeArrow: "\u21A5",
    upuparrows: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    Uring: "\u016E",
    uring: "\u016F",
    urtri: "\u25F9",
    Uscr: "\u{1D4B0}",
    uscr: "\u{1D4CA}",
    utdot: "\u22F0",
    Utilde: "\u0168",
    utilde: "\u0169",
    utri: "\u25B5",
    utrif: "\u25B4",
    uuarr: "\u21C8",
    Uuml: "\xDC",
    uuml: "\xFC",
    uwangle: "\u29A7",
    vangrt: "\u299C",
    varepsilon: "\u03F5",
    varkappa: "\u03F0",
    varnothing: "\u2205",
    varphi: "\u03D5",
    varpi: "\u03D6",
    varpropto: "\u221D",
    vArr: "\u21D5",
    varr: "\u2195",
    varrho: "\u03F1",
    varsigma: "\u03C2",
    varsubsetneq: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vartheta: "\u03D1",
    vartriangleleft: "\u22B2",
    vartriangleright: "\u22B3",
    Vbar: "\u2AEB",
    vBar: "\u2AE8",
    vBarv: "\u2AE9",
    Vcy: "\u0412",
    vcy: "\u0432",
    VDash: "\u22AB",
    Vdash: "\u22A9",
    vDash: "\u22A8",
    vdash: "\u22A2",
    Vdashl: "\u2AE6",
    Vee: "\u22C1",
    vee: "\u2228",
    veebar: "\u22BB",
    veeeq: "\u225A",
    vellip: "\u22EE",
    Verbar: "\u2016",
    verbar: "|",
    Vert: "\u2016",
    vert: "|",
    VerticalBar: "\u2223",
    VerticalLine: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    VeryThinSpace: "\u200A",
    Vfr: "\u{1D519}",
    vfr: "\u{1D533}",
    vltri: "\u22B2",
    vnsub: "\u2282\u20D2",
    vnsup: "\u2283\u20D2",
    Vopf: "\u{1D54D}",
    vopf: "\u{1D567}",
    vprop: "\u221D",
    vrtri: "\u22B3",
    Vscr: "\u{1D4B1}",
    vscr: "\u{1D4CB}",
    vsubnE: "\u2ACB\uFE00",
    vsubne: "\u228A\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vsupne: "\u228B\uFE00",
    Vvdash: "\u22AA",
    vzigzag: "\u299A",
    Wcirc: "\u0174",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    Wedge: "\u22C0",
    wedge: "\u2227",
    wedgeq: "\u2259",
    weierp: "\u2118",
    Wfr: "\u{1D51A}",
    wfr: "\u{1D534}",
    Wopf: "\u{1D54E}",
    wopf: "\u{1D568}",
    wp: "\u2118",
    wr: "\u2240",
    wreath: "\u2240",
    Wscr: "\u{1D4B2}",
    wscr: "\u{1D4CC}",
    xcap: "\u22C2",
    xcirc: "\u25EF",
    xcup: "\u22C3",
    xdtri: "\u25BD",
    Xfr: "\u{1D51B}",
    xfr: "\u{1D535}",
    xhArr: "\u27FA",
    xharr: "\u27F7",
    Xi: "\u039E",
    xi: "\u03BE",
    xlArr: "\u27F8",
    xlarr: "\u27F5",
    xmap: "\u27FC",
    xnis: "\u22FB",
    xodot: "\u2A00",
    Xopf: "\u{1D54F}",
    xopf: "\u{1D569}",
    xoplus: "\u2A01",
    xotime: "\u2A02",
    xrArr: "\u27F9",
    xrarr: "\u27F6",
    Xscr: "\u{1D4B3}",
    xscr: "\u{1D4CD}",
    xsqcup: "\u2A06",
    xuplus: "\u2A04",
    xutri: "\u25B3",
    xvee: "\u22C1",
    xwedge: "\u22C0",
    Yacute: "\xDD",
    yacute: "\xFD",
    YAcy: "\u042F",
    yacy: "\u044F",
    Ycirc: "\u0176",
    ycirc: "\u0177",
    Ycy: "\u042B",
    ycy: "\u044B",
    yen: "\xA5",
    Yfr: "\u{1D51C}",
    yfr: "\u{1D536}",
    YIcy: "\u0407",
    yicy: "\u0457",
    Yopf: "\u{1D550}",
    yopf: "\u{1D56A}",
    Yscr: "\u{1D4B4}",
    yscr: "\u{1D4CE}",
    YUcy: "\u042E",
    yucy: "\u044E",
    Yuml: "\u0178",
    yuml: "\xFF",
    Zacute: "\u0179",
    zacute: "\u017A",
    Zcaron: "\u017D",
    zcaron: "\u017E",
    Zcy: "\u0417",
    zcy: "\u0437",
    Zdot: "\u017B",
    zdot: "\u017C",
    zeetrf: "\u2128",
    ZeroWidthSpace: "\u200B",
    Zeta: "\u0396",
    zeta: "\u03B6",
    Zfr: "\u2128",
    zfr: "\u{1D537}",
    ZHcy: "\u0416",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    Zopf: "\u2124",
    zopf: "\u{1D56B}",
    Zscr: "\u{1D4B5}",
    zscr: "\u{1D4CF}",
    zwj: "\u200D",
    zwnj: "\u200C"
  });
  Ci.entityMap = Ci.HTML_ENTITIES;
});
var ef = Mt((bu) => {
  var Ui = Pi().NAMESPACE, hu = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Zp = new RegExp(
    "[\\-\\.0-9" + hu.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"
  ), Wp = new RegExp(
    "^" + hu.source + Zp.source + "*(?::" + hu.source + Zp.source + "*)?$"
  ), Mi = 0, Vt = 1, $r = 2, ji = 3, Or = 4, Nr = 5, qi = 6, ko = 7;
  function Rr(e3, t) {
    this.message = e3, this.locator = t, Error.captureStackTrace && Error.captureStackTrace(this, Rr);
  }
  Rr.prototype = new Error();
  Rr.prototype.name = Rr.name;
  function Jp() {
  }
  Jp.prototype = {
    parse: function(e3, t, i) {
      var n = this.domBuilder;
      n.startDocument(), Yp(t, t = {}), ww(e3, t, i, n, this.errorHandler), n.endDocument();
    }
  };
  function ww(e3, t, i, n, r) {
    function o(Z) {
      if (Z > 65535) {
        Z -= 65536;
        var pe = 55296 + (Z >> 10), gr = 56320 + (Z & 1023);
        return String.fromCharCode(pe, gr);
      } else return String.fromCharCode(Z);
    }
    function a(Z) {
      var pe = Z.slice(1, -1);
      return Object.hasOwnProperty.call(i, pe) ? i[pe] : pe.charAt(0) === "#" ? o(parseInt(pe.substr(1).replace("x", "0x"))) : (r.error("entity not found:" + Z), Z);
    }
    function u(Z) {
      if (Z > _) {
        var pe = e3.substring(_, Z).replace(/&#?\w+;/g, a);
        f && s(_), n.characters(pe, 0, Z - _), _ = Z;
      }
    }
    function s(Z, pe) {
      for (; Z >= d && (pe = c.exec(e3)); )
        l = pe.index, d = l + pe[0].length, f.lineNumber++;
      f.columnNumber = Z - l + 1;
    }
    for (var l = 0, d = 0, c = /.*(?:\r\n?|\n)|.*$/g, f = n.locator, m = [
      {
        currentNSMap: t
      }
    ], h = {}, _ = 0; ; ) {
      try {
        var x = e3.indexOf("<", _);
        if (x < 0) {
          if (!e3.substr(_).match(/^\s*$/)) {
            var E = n.doc, w = E.createTextNode(e3.substr(_));
            E.appendChild(w), n.currentElement = w;
          }
          return;
        }
        switch (x > _ && u(x), e3.charAt(x + 1)) {
          case "/":
            var P = e3.indexOf(">", x + 3), y = e3.substring(x + 2, P).replace(/[ \t\n\r]+$/g, ""), v = m.pop();
            P < 0 ? (y = e3.substring(x + 2).replace(/[\s<].*/, ""), r.error("end tag name: " + y + " is not complete:" + v.tagName), P = x + 1 + y.length) : y.match(/\s</) && (y = y.replace(/[\s<].*/, ""), r.error("end tag name: " + y + " maybe not complete"), P = x + 1 + y.length);
            var z = v.localNSMap, $ = v.tagName == y, j = $ || v.tagName && v.tagName.toLowerCase() == y.toLowerCase();
            if (j) {
              if (n.endElement(v.uri, v.localName, y), z)
                for (var K in z)
                  Object.prototype.hasOwnProperty.call(z, K) && n.endPrefixMapping(K);
              $ || r.fatalError(
                "end tag name: " + y + " is not match the current start tagName:" + v.tagName
              );
            } else m.push(v);
            P++;
            break;
          case "?":
            f && s(x), P = Aw(e3, x, n);
            break;
          case "!":
            f && s(x), P = kw(e3, x, n, r);
            break;
          default:
            f && s(x);
            var C = new Xp(), B = m[m.length - 1].currentNSMap, P = Sw(e3, x, C, B, a, r), G = C.length;
            if (!C.closed && Dw(e3, P, C.tagName, h) && (C.closed = true, i.nbsp || r.warning("unclosed xml attribute")), f && G) {
              for (var Y = Kp(f, {}), ue = 0; ue < G; ue++) {
                var Ae = C[ue];
                s(Ae.offset), Ae.locator = Kp(f, {});
              }
              n.locator = Y, Qp(C, n, B) && m.push(C), n.locator = f;
            } else Qp(C, n, B) && m.push(C);
            Ui.isHTML(C.uri) && !C.closed ? P = xw(e3, P, C.tagName, a, n) : P++;
        }
      } catch (Z) {
        if (Z instanceof Rr) throw Z;
        r.error("element parse error: " + Z), P = -1;
      }
      P > _ ? _ = P : u(Math.max(x, _) + 1);
    }
  }
  function Kp(e3, t) {
    return t.lineNumber = e3.lineNumber, t.columnNumber = e3.columnNumber, t;
  }
  function Sw(e3, t, i, n, r, o) {
    function a(m, h, _) {
      i.attributeNames.hasOwnProperty(m) && o.fatalError("Attribute " + m + " redefined"), i.addValue(m, h.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, r), _);
    }
    for (var u, s, l = ++t, d = Mi; ; ) {
      var c = e3.charAt(l);
      switch (c) {
        case "=":
          if (d === Vt) u = e3.slice(t, l), d = ji;
          else if (d === $r) d = ji;
          else throw new Error("attribute equal must after attrName");
          break;
        case "'":
        case '"':
          if (d === ji || d === Vt) {
            if (d === Vt && (o.warning('attribute value must after "="'), u = e3.slice(t, l)), t = l + 1, l = e3.indexOf(c, t), l > 0)
              s = e3.slice(t, l), a(u, s, t - 1), d = Nr;
            else throw new Error("attribute value no end '" + c + "' match");
          } else if (d == Or)
            s = e3.slice(t, l), a(u, s, t), o.warning('attribute "' + u + '" missed start quot(' + c + ")!!"), t = l + 1, d = Nr;
          else throw new Error('attribute value must after "="');
          break;
        case "/":
          switch (d) {
            case Mi:
              i.setTagName(e3.slice(t, l));
            case Nr:
            case qi:
            case ko:
              d = ko, i.closed = true;
            case Or:
            case Vt:
              break;
            case $r:
              i.closed = true;
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          return o.error("unexpected end of input"), d == Mi && i.setTagName(e3.slice(t, l)), l;
        case ">":
          switch (d) {
            case Mi:
              i.setTagName(e3.slice(t, l));
            case Nr:
            case qi:
            case ko:
              break;
            case Or:
            case Vt:
              s = e3.slice(t, l), s.slice(-1) === "/" && (i.closed = true, s = s.slice(0, -1));
            case $r:
              d === $r && (s = u), d == Or ? (o.warning('attribute "' + s + '" missed quot(")!'), a(u, s, t)) : ((!Ui.isHTML(n[""]) || !s.match(/^(?:disabled|checked|selected)$/i)) && o.warning(
                'attribute "' + s + '" missed value!! "' + s + '" instead!!'
              ), a(s, s, t));
              break;
            case ji:
              throw new Error("attribute value missed!!");
          }
          return l;
        case "\x80":
          c = " ";
        default:
          if (c <= " ")
            switch (d) {
              case Mi:
                i.setTagName(e3.slice(t, l)), d = qi;
                break;
              case Vt:
                u = e3.slice(t, l), d = $r;
                break;
              case Or:
                var s = e3.slice(t, l);
                o.warning('attribute "' + s + '" missed quot(")!!'), a(u, s, t);
              case Nr:
                d = qi;
                break;
            }
          else
            switch (d) {
              case $r:
                var f = i.tagName;
                (!Ui.isHTML(n[""]) || !u.match(/^(?:disabled|checked|selected)$/i)) && o.warning(
                  'attribute "' + u + '" missed value!! "' + u + '" instead2!!'
                ), a(u, u, t), t = l, d = Vt;
                break;
              case Nr:
                o.warning('attribute space is required"' + u + '"!!');
              case qi:
                d = Vt, t = l;
                break;
              case ji:
                d = Or, t = l;
                break;
              case ko:
                throw new Error(
                  "elements closed character '/' and '>' must be connected to"
                );
            }
      }
      l++;
    }
  }
  function Qp(e3, t, i) {
    for (var n = e3.tagName, r = null, c = e3.length; c--; ) {
      var o = e3[c], a = o.qName, u = o.value, f = a.indexOf(":");
      if (f > 0)
        var s = o.prefix = a.slice(0, f), l = a.slice(f + 1), d = s === "xmlns" && l;
      else l = a, s = null, d = a === "xmlns" && "";
      o.localName = l, d !== false && (r == null && (r = {}, Yp(i, i = {})), i[d] = r[d] = u, o.uri = Ui.XMLNS, t.startPrefixMapping(d, u));
    }
    for (var c = e3.length; c--; ) {
      o = e3[c];
      var s = o.prefix;
      s && (s === "xml" && (o.uri = Ui.XML), s !== "xmlns" && (o.uri = i[s || ""]));
    }
    var f = n.indexOf(":");
    f > 0 ? (s = e3.prefix = n.slice(0, f), l = e3.localName = n.slice(f + 1)) : (s = null, l = e3.localName = n);
    var m = e3.uri = i[s || ""];
    if (t.startElement(m, l, n, e3), e3.closed) {
      if (t.endElement(m, l, n), r)
        for (s in r)
          Object.prototype.hasOwnProperty.call(r, s) && t.endPrefixMapping(s);
    } else return e3.currentNSMap = i, e3.localNSMap = r, true;
  }
  function xw(e3, t, i, n, r) {
    if (/^(?:script|textarea)$/i.test(i)) {
      var o = e3.indexOf("</" + i + ">", t), a = e3.substring(t + 1, o);
      if (/[&<]/.test(a))
        return /^script$/i.test(i) ? (r.characters(a, 0, a.length), o) : (a = a.replace(/&#?\w+;/g, n), r.characters(a, 0, a.length), o);
    }
    return t + 1;
  }
  function Dw(e3, t, i, n) {
    var r = n[i];
    return r == null && (r = e3.lastIndexOf("</" + i + ">"), r < t && (r = e3.lastIndexOf("</" + i)), n[i] = r), r < t;
  }
  function Yp(e3, t) {
    for (var i in e3)
      Object.prototype.hasOwnProperty.call(e3, i) && (t[i] = e3[i]);
  }
  function kw(e3, t, i, n) {
    var r = e3.charAt(t + 2);
    switch (r) {
      case "-":
        if (e3.charAt(t + 3) === "-") {
          var o = e3.indexOf("-->", t + 4);
          return o > t ? (i.comment(e3, t + 4, o - t - 4), o + 3) : (n.error("Unclosed comment"), -1);
        } else return -1;
      default:
        if (e3.substr(t + 3, 6) == "CDATA[") {
          var o = e3.indexOf("]]>", t + 9);
          return i.startCDATA(), i.characters(e3, t + 9, o - t - 9), i.endCDATA(), o + 3;
        }
        var a = Ew(e3, t), u = a.length;
        if (u > 1 && /!doctype/i.test(a[0][0])) {
          var s = a[1][0], l = false, d = false;
          u > 3 && (/^public$/i.test(a[2][0]) ? (l = a[3][0], d = u > 4 && a[4][0]) : /^system$/i.test(a[2][0]) && (d = a[3][0]));
          var c = a[u - 1];
          return i.startDTD(s, l, d), i.endDTD(), c.index + c[0].length;
        }
    }
    return -1;
  }
  function Aw(e3, t, i) {
    var n = e3.indexOf("?>", t);
    if (n) {
      var r = e3.substring(t, n).match(/^<\?(\S*)\s*([\s\S]*?)$/);
      if (r) {
        var o = r[0].length;
        return i.processingInstruction(r[1], r[2]), n + 2;
      } else return -1;
    }
    return -1;
  }
  function Xp() {
    this.attributeNames = {};
  }
  Xp.prototype = {
    setTagName: function(e3) {
      if (!Wp.test(e3)) throw new Error("invalid tagName:" + e3);
      this.tagName = e3;
    },
    addValue: function(e3, t, i) {
      if (!Wp.test(e3)) throw new Error("invalid attribute:" + e3);
      this.attributeNames[e3] = this.length, this[this.length++] = {
        qName: e3,
        value: t,
        offset: i
      };
    },
    length: 0,
    getLocalName: function(e3) {
      return this[e3].localName;
    },
    getLocator: function(e3) {
      return this[e3].locator;
    },
    getQName: function(e3) {
      return this[e3].qName;
    },
    getURI: function(e3) {
      return this[e3].uri;
    },
    getValue: function(e3) {
      return this[e3].value;
    }
  };
  function Ew(e3, t) {
    var i, n = [], r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (r.lastIndex = t, r.exec(e3); i = r.exec(e3); )
      if (n.push(i), i[1]) return n;
  }
  bu.XMLReader = Jp;
  bu.ParseError = Rr;
});
var uf = Mt((Eo) => {
  var zw = Pi(), Tw = gu(), tf = Gp(), of = ef(), Pw = Tw.DOMImplementation, rf = zw.NAMESPACE, Iw = of.ParseError, $w = of.XMLReader;
  function af(e3) {
    return e3.replace(
      /\r[\n\u0085]/g,
      `
`
    ).replace(
      /[\r\u0085\u2028]/g,
      `
`
    );
  }
  function sf(e3) {
    this.options = e3 || {
      locator: {}
    };
  }
  sf.prototype.parseFromString = function(e3, t) {
    var i = this.options, n = new $w(), r = i.domBuilder || new Fi(), o = i.errorHandler, a = i.locator, u = i.xmlns || {}, s = /\/x?html?$/.test(t), l = s ? tf.HTML_ENTITIES : tf.XML_ENTITIES;
    a && r.setDocumentLocator(a), n.errorHandler = Ow(o, r, a), n.domBuilder = i.domBuilder || r, s && (u[""] = rf.HTML), u.xml = u.xml || rf.XML;
    var d = i.normalizeLineEndings || af;
    return e3 && typeof e3 == "string" ? n.parse(d(e3), u, l) : n.errorHandler.error("invalid doc source"), r.doc;
  };
  function Ow(e3, t, i) {
    if (!e3) {
      if (t instanceof Fi) return t;
      e3 = t;
    }
    var n = {}, r = e3 instanceof Function;
    i = i || {};
    function o(a) {
      var u = e3[a];
      !u && r && (u = e3.length == 2 ? function(s) {
        e3(a, s);
      } : e3), n[a] = u && function(s) {
        u("[xmldom " + a + "]	" + s + yu(i));
      } || function() {
      };
    }
    return o("warning"), o("error"), o("fatalError"), n;
  }
  function Fi() {
    this.cdata = false;
  }
  function Cr(e3, t) {
    t.lineNumber = e3.lineNumber, t.columnNumber = e3.columnNumber;
  }
  Fi.prototype = {
    startDocument: function() {
      this.doc = new Pw().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
    },
    startElement: function(e3, t, i, n) {
      var r = this.doc, o = r.createElementNS(e3, i || t), a = n.length;
      Ao(this, o), this.currentElement = o, this.locator && Cr(this.locator, o);
      for (var u = 0; u < a; u++) {
        var e3 = n.getURI(u), s = n.getValue(u), i = n.getQName(u), l = r.createAttributeNS(e3, i);
        this.locator && Cr(n.getLocator(u), l), l.value = l.nodeValue = s, o.setAttributeNode(l);
      }
    },
    endElement: function(e3, t, i) {
      var n = this.currentElement, r = n.tagName;
      this.currentElement = n.parentNode;
    },
    startPrefixMapping: function(e3, t) {
    },
    endPrefixMapping: function(e3) {
    },
    processingInstruction: function(e3, t) {
      var i = this.doc.createProcessingInstruction(e3, t);
      this.locator && Cr(this.locator, i), Ao(this, i);
    },
    ignorableWhitespace: function(e3, t, i) {
    },
    characters: function(e3, t, i) {
      if (e3 = nf.apply(this, arguments), e3) {
        if (this.cdata) var n = this.doc.createCDATASection(e3);
        else var n = this.doc.createTextNode(e3);
        this.currentElement ? this.currentElement.appendChild(n) : /^\s*$/.test(e3) && this.doc.appendChild(n), this.locator && Cr(this.locator, n);
      }
    },
    skippedEntity: function(e3) {
    },
    endDocument: function() {
      this.doc.normalize();
    },
    setDocumentLocator: function(e3) {
      (this.locator = e3) && (e3.lineNumber = 0);
    },
    comment: function(e3, t, i) {
      e3 = nf.apply(this, arguments);
      var n = this.doc.createComment(e3);
      this.locator && Cr(this.locator, n), Ao(this, n);
    },
    startCDATA: function() {
      this.cdata = true;
    },
    endCDATA: function() {
      this.cdata = false;
    },
    startDTD: function(e3, t, i) {
      var n = this.doc.implementation;
      if (n && n.createDocumentType) {
        var r = n.createDocumentType(e3, t, i);
        this.locator && Cr(this.locator, r), Ao(this, r), this.doc.doctype = r;
      }
    },
    warning: function(e3) {
      console.warn("[xmldom warning]	" + e3, yu(this.locator));
    },
    error: function(e3) {
      console.error("[xmldom error]	" + e3, yu(this.locator));
    },
    fatalError: function(e3) {
      throw new Iw(e3, this.locator);
    }
  };
  function yu(e3) {
    if (e3)
      return `
@` + (e3.systemId || "") + "#[line:" + e3.lineNumber + ",col:" + e3.columnNumber + "]";
  }
  function nf(e3, t, i) {
    return typeof e3 == "string" ? e3.substr(t, i) : e3.length >= t + i || t ? new java.lang.String(e3, t, i) + "" : e3;
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
    /\w+/g,
    function(e3) {
      Fi.prototype[e3] = function() {
        return null;
      };
    }
  );
  function Ao(e3, t) {
    e3.currentElement ? e3.currentElement.appendChild(t) : e3.doc.appendChild(t);
  }
  Eo.__DOMHandler = Fi;
  Eo.normalizeLineEndings = af;
  Eo.DOMParser = sf;
});
var df = Mt((zo) => {
  var lf = gu();
  zo.DOMImplementation = lf.DOMImplementation;
  zo.XMLSerializer = lf.XMLSerializer;
  zo.DOMParser = uf().DOMParser;
});
var _r, D_, cs, mr, In, _s = ft(() => {
  _r = {
    JS_EVAL_TYPE_GLOBAL: 0,
    JS_EVAL_TYPE_MODULE: 1,
    JS_EVAL_TYPE_DIRECT: 2,
    JS_EVAL_TYPE_INDIRECT: 3,
    JS_EVAL_TYPE_MASK: 3,
    JS_EVAL_FLAG_STRICT: 8,
    JS_EVAL_FLAG_STRIP: 16,
    JS_EVAL_FLAG_COMPILE_ONLY: 32,
    JS_EVAL_FLAG_BACKTRACE_BARRIER: 64
  }, D_ = {
    BaseObjects: 1,
    Date: 2,
    Eval: 4,
    StringNormalize: 8,
    RegExp: 16,
    RegExpCompiler: 32,
    JSON: 64,
    Proxy: 128,
    MapSet: 256,
    TypedArrays: 512,
    Promise: 1024,
    BigInt: 2048,
    BigFloat: 4096,
    BigDecimal: 8192,
    OperatorOverloading: 16384,
    BignumExt: 32768
  }, cs = {
    Pending: 0,
    Fulfilled: 1,
    Rejected: 2
  }, mr = {
    JS_GPN_STRING_MASK: 1,
    JS_GPN_SYMBOL_MASK: 2,
    JS_GPN_PRIVATE_MASK: 4,
    JS_GPN_ENUM_ONLY: 16,
    JS_GPN_SET_ENUM: 32,
    QTS_GPN_NUMBER_MASK: 64,
    QTS_STANDARD_COMPLIANT_NUMBER: 128
  }, In = {
    IsStrictlyEqual: 0,
    IsSameValue: 1,
    IsSameValueZero: 2
  };
});
function $n(...e3) {
  T_ && console.log("quickjs-emscripten:", ...e3);
}
function* Wb(e3) {
  return yield e3;
}
function rD(e3) {
  return Wb(I_(e3));
}
function jb(e3, t) {
  return (...i) => {
    let n = t.call(e3, P_, ...i);
    return I_(n);
  };
}
function iD(e3, t) {
  let i = t.call(e3, P_);
  return I_(i);
}
function I_(e3) {
  function t(i) {
    return i.done ? i.value : i.value instanceof Promise ? i.value.then(
      (n) => t(e3.next(n)),
      (n) => t(e3.throw(n))
    ) : t(e3.next(i.value));
  }
  return t(e3.next());
}
function k_(e3, t) {
  let i;
  try {
    e3.dispose();
  } catch (n) {
    i = n;
  }
  if (t && i)
    throw Object.assign(t, {
      message: `${t.message}
 Then, failed to dispose scope: ${i.message}`,
      disposeError: i
    }), t;
  if (t || i) throw t || i;
}
function nD(e3) {
  let t = e3 ? Array.from(e3) : [];
  function i() {
    return t.forEach((r) => r.alive ? r.dispose() : void 0);
  }
  function n() {
    return t.some((r) => r.alive);
  }
  return Object.defineProperty(t, z_, {
    configurable: true,
    enumerable: false,
    value: i
  }), Object.defineProperty(t, "dispose", {
    configurable: true,
    enumerable: false,
    value: i
  }), Object.defineProperty(t, "alive", {
    configurable: true,
    enumerable: false,
    get: n
  }), t;
}
function ps(e3) {
  return !!(e3 && (typeof e3 == "object" || typeof e3 == "function") && "alive" in e3 && typeof e3.alive == "boolean" && "dispose" in e3 && typeof e3.dispose == "function");
}
function uD(e3) {
  if (!e3) return 0;
  let t = 0;
  for (let [i, n] of Object.entries(e3)) {
    if (!(i in D_)) throw new Hb(i);
    n && (t |= D_[i]);
  }
  return t;
}
function lD(e3) {
  if (typeof e3 == "number") return e3;
  if (e3 === void 0) return 0;
  let { type: t, strict: i, strip: n, compileOnly: r, backtraceBarrier: o } = e3, a = 0;
  return t === "global" && (a |= _r.JS_EVAL_TYPE_GLOBAL), t === "module" && (a |= _r.JS_EVAL_TYPE_MODULE), i && (a |= _r.JS_EVAL_FLAG_STRICT), n && (a |= _r.JS_EVAL_FLAG_STRIP), r && (a |= _r.JS_EVAL_FLAG_COMPILE_ONLY), o && (a |= _r.JS_EVAL_FLAG_BACKTRACE_BARRIER), a;
}
function dD(e3) {
  if (typeof e3 == "number") return e3;
  if (e3 === void 0) return 0;
  let {
    strings: t,
    symbols: i,
    quickjsPrivate: n,
    onlyEnumerable: r,
    numbers: o,
    numbersAsStrings: a
  } = e3, u = 0;
  return t && (u |= mr.JS_GPN_STRING_MASK), i && (u |= mr.JS_GPN_SYMBOL_MASK), n && (u |= mr.JS_GPN_PRIVATE_MASK), r && (u |= mr.JS_GPN_ENUM_ONLY), o && (u |= mr.QTS_GPN_NUMBER_MASK), a && (u |= mr.QTS_STANDARD_COMPLIANT_NUMBER), u;
}
function cD(...e3) {
  let t = [];
  for (let i of e3) i !== void 0 && (t = t.concat(i));
  return t;
}
function N_(e3, t) {
  t.interruptHandler && e3.setInterruptHandler(t.interruptHandler), t.maxStackSizeBytes !== void 0 && e3.setMaxStackSize(t.maxStackSizeBytes), t.memoryLimitBytes !== void 0 && e3.setMemoryLimit(t.memoryLimitBytes);
}
function R_(e3, t) {
  t.moduleLoader && e3.setModuleLoader(t.moduleLoader), t.shouldInterrupt && e3.setInterruptHandler(t.shouldInterrupt), t.memoryLimitBytes !== void 0 && e3.setMemoryLimit(t.memoryLimitBytes), t.maxStackSizeBytes !== void 0 && e3.setMaxStackSize(t.maxStackSizeBytes);
}
var Jx, Yx, T_, Xx, A_, Fb, E_, Lb, Vb, Bb, eD, tD, Hb, Gb, Zb, P_, Qt, z_, qb, Me, pr, Ub, _t, $_, oD, aD, ci, sD, Jb, u1, l1, _D, mD, pD, fD, gD, O_, Yb, Xb = ft(() => {
  _s();
  _s();
  Jx = Object.defineProperty, Yx = (e3, t) => {
    for (var i in t)
      Jx(e3, i, {
        get: t[i],
        enumerable: true
      });
  }, T_ = false;
  Xx = {};
  Yx(Xx, {
    QuickJSAsyncifyError: () => Vb,
    QuickJSAsyncifySuspended: () => Bb,
    QuickJSEmptyGetOwnPropertyNames: () => Zb,
    QuickJSEmscriptenModuleError: () => tD,
    QuickJSMemoryLeakDetected: () => eD,
    QuickJSNotImplemented: () => Lb,
    QuickJSPromisePending: () => Gb,
    QuickJSUnknownIntrinsic: () => Hb,
    QuickJSUnwrapError: () => A_,
    QuickJSUseAfterFree: () => E_,
    QuickJSWrongOwner: () => Fb
  });
  A_ = class extends Error {
    constructor(e3, t) {
      let i = typeof e3 == "object" && e3 && "message" in e3 ? String(e3.message) : String(e3);
      super(i), this.cause = e3, this.context = t, this.name = "QuickJSUnwrapError";
    }
  }, Fb = class extends Error {
    constructor() {
      super(...arguments), this.name = "QuickJSWrongOwner";
    }
  }, E_ = class extends Error {
    constructor() {
      super(...arguments), this.name = "QuickJSUseAfterFree";
    }
  }, Lb = class extends Error {
    constructor() {
      super(...arguments), this.name = "QuickJSNotImplemented";
    }
  }, Vb = class extends Error {
    constructor() {
      super(...arguments), this.name = "QuickJSAsyncifyError";
    }
  }, Bb = class extends Error {
    constructor() {
      super(...arguments), this.name = "QuickJSAsyncifySuspended";
    }
  }, eD = class extends Error {
    constructor() {
      super(...arguments), this.name = "QuickJSMemoryLeakDetected";
    }
  }, tD = class extends Error {
    constructor() {
      super(...arguments), this.name = "QuickJSEmscriptenModuleError";
    }
  }, Hb = class extends TypeError {
    constructor() {
      super(...arguments), this.name = "QuickJSUnknownIntrinsic";
    }
  }, Gb = class extends Error {
    constructor() {
      super(...arguments), this.name = "QuickJSPromisePending";
    }
  }, Zb = class extends Error {
    constructor() {
      super(...arguments), this.name = "QuickJSEmptyGetOwnPropertyNames";
    }
  };
  P_ = Wb;
  P_.of = rD;
  Qt = class {
    [Symbol.dispose]() {
      return this.dispose();
    }
  }, z_ = Symbol.dispose ?? Symbol.for("Symbol.dispose"), qb = Qt.prototype;
  qb[z_] || (qb[z_] = function() {
    return this.dispose();
  });
  Me = class Kb extends Qt {
    constructor(t, i, n, r) {
      super(), this._value = t, this.copier = i, this.disposer = n, this._owner = r, this._alive = true, this._constructorStack = T_ ? new Error("Lifetime constructed").stack : void 0;
    }
    get alive() {
      return this._alive;
    }
    get value() {
      return this.assertAlive(), this._value;
    }
    get owner() {
      return this._owner;
    }
    get dupable() {
      return !!this.copier;
    }
    dup() {
      if (this.assertAlive(), !this.copier)
        throw new Error("Non-dupable lifetime");
      return new Kb(
        this.copier(this._value),
        this.copier,
        this.disposer,
        this._owner
      );
    }
    consume(t) {
      this.assertAlive();
      let i = t(this);
      return this.dispose(), i;
    }
    map(t) {
      return this.assertAlive(), t(this);
    }
    tap(t) {
      return t(this), this;
    }
    dispose() {
      this.assertAlive(), this.disposer && this.disposer(this._value), this._alive = false;
    }
    assertAlive() {
      if (!this.alive)
        throw this._constructorStack ? new E_(`Lifetime not alive
${this._constructorStack}
Lifetime used`) : new E_("Lifetime not alive");
    }
  }, pr = class extends Me {
    constructor(e3, t) {
      super(e3, void 0, void 0, t);
    }
    get dupable() {
      return true;
    }
    dup() {
      return this;
    }
    dispose() {
    }
  }, Ub = class extends Me {
    constructor(e3, t, i, n) {
      super(e3, t, i, n);
    }
    dispose() {
      this._alive = false;
    }
  };
  _t = class ms extends Qt {
    constructor() {
      super(...arguments), this._disposables = new Me(/* @__PURE__ */ new Set()), this.manage = (t) => (this._disposables.value.add(t), t);
    }
    static withScope(t) {
      let i = new ms(), n;
      try {
        return t(i);
      } catch (r) {
        throw n = r, r;
      } finally {
        k_(i, n);
      }
    }
    static withScopeMaybeAsync(t, i) {
      return iD(void 0, function* (n) {
        let r = new ms(), o;
        try {
          return yield* n.of(i.call(t, n, r));
        } catch (a) {
          throw o = a, a;
        } finally {
          k_(r, o);
        }
      });
    }
    static async withScopeAsync(t) {
      let i = new ms(), n;
      try {
        return await t(i);
      } catch (r) {
        throw n = r, r;
      } finally {
        k_(i, n);
      }
    }
    get alive() {
      return this._disposables.alive;
    }
    dispose() {
      let t = Array.from(this._disposables.value.values()).reverse();
      for (let i of t) i.alive && i.dispose();
      this._disposables.dispose();
    }
  };
  $_ = class Qb extends Qt {
    static success(t) {
      return new oD(t);
    }
    static fail(t, i) {
      return new aD(t, i);
    }
    static is(t) {
      return t instanceof Qb;
    }
  }, oD = class extends $_ {
    constructor(e3) {
      super(), this.value = e3;
    }
    get alive() {
      return ps(this.value) ? this.value.alive : true;
    }
    dispose() {
      ps(this.value) && this.value.dispose();
    }
    unwrap() {
      return this.value;
    }
    unwrapOr(e3) {
      return this.value;
    }
  }, aD = class extends $_ {
    constructor(e3, t) {
      super(), this.error = e3, this.onUnwrap = t;
    }
    get alive() {
      return ps(this.error) ? this.error.alive : true;
    }
    dispose() {
      ps(this.error) && this.error.dispose();
    }
    unwrap() {
      throw this.onUnwrap(this), this.error;
    }
    unwrapOr(e3) {
      return e3;
    }
  }, ci = $_, sD = class extends Qt {
    constructor(e3) {
      super(), this.resolve = (t) => {
        this.resolveHandle.alive && (this.context.unwrapResult(
          this.context.callFunction(
            this.resolveHandle,
            this.context.undefined,
            t || this.context.undefined
          )
        ).dispose(), this.disposeResolvers(), this.onSettled());
      }, this.reject = (t) => {
        this.rejectHandle.alive && (this.context.unwrapResult(
          this.context.callFunction(
            this.rejectHandle,
            this.context.undefined,
            t || this.context.undefined
          )
        ).dispose(), this.disposeResolvers(), this.onSettled());
      }, this.dispose = () => {
        this.handle.alive && this.handle.dispose(), this.disposeResolvers();
      }, this.context = e3.context, this.owner = e3.context.runtime, this.handle = e3.promiseHandle, this.settled = new Promise((t) => {
        this.onSettled = t;
      }), this.resolveHandle = e3.resolveHandle, this.rejectHandle = e3.rejectHandle;
    }
    get alive() {
      return this.handle.alive || this.resolveHandle.alive || this.rejectHandle.alive;
    }
    disposeResolvers() {
      this.resolveHandle.alive && this.resolveHandle.dispose(), this.rejectHandle.alive && this.rejectHandle.dispose();
    }
  }, Jb = class {
    constructor(e3) {
      this.module = e3;
    }
    toPointerArray(e3) {
      let t = new Int32Array(e3.map((r) => r.value)), i = t.length * t.BYTES_PER_ELEMENT, n = this.module._malloc(i);
      return new Uint8Array(this.module.HEAPU8.buffer, n, i).set(
        new Uint8Array(t.buffer)
      ), new Me(n, void 0, (r) => this.module._free(r));
    }
    newTypedArray(e3, t) {
      let i = new e3(new Array(t).fill(0)), n = i.length * i.BYTES_PER_ELEMENT, r = this.module._malloc(n), o = new e3(this.module.HEAPU8.buffer, r, t);
      return o.set(i), new Me(
        {
          typedArray: o,
          ptr: r
        },
        void 0,
        (a) => this.module._free(a.ptr)
      );
    }
    newMutablePointerArray(e3) {
      return this.newTypedArray(Int32Array, e3);
    }
    newHeapCharPointer(e3) {
      let t = this.module.lengthBytesUTF8(e3), i = t + 1, n = this.module._malloc(i);
      return this.module.stringToUTF8(e3, n, i), new Me(
        {
          ptr: n,
          strlen: t
        },
        void 0,
        (r) => this.module._free(r.ptr)
      );
    }
    newHeapBufferPointer(e3) {
      let t = e3.byteLength, i = this.module._malloc(t);
      return this.module.HEAPU8.set(e3, i), new Me(
        {
          pointer: i,
          numBytes: t
        },
        void 0,
        (n) => this.module._free(n.pointer)
      );
    }
    consumeHeapCharPointer(e3) {
      let t = this.module.UTF8ToString(e3);
      return this.module._free(e3), t;
    }
  }, u1 = Symbol("Unstable"), l1 = Object.freeze({
    BaseObjects: true,
    Date: true,
    Eval: true,
    StringNormalize: true,
    RegExp: true,
    JSON: true,
    Proxy: true,
    MapSet: true,
    TypedArrays: true,
    Promise: true
  });
  _D = class extends Qt {
    constructor(e3, t) {
      super(), this.handle = e3, this.context = t, this._isDone = false, this.owner = t.runtime;
    }
    [Symbol.iterator]() {
      return this;
    }
    next(e3) {
      if (!this.alive || this._isDone)
        return {
          done: true,
          value: void 0
        };
      let t = this._next ?? (this._next = this.context.getProp(this.handle, "next"));
      return this.callIteratorMethod(t, e3);
    }
    return(e3) {
      if (!this.alive)
        return {
          done: true,
          value: void 0
        };
      let t = this.context.getProp(this.handle, "return");
      if (t === this.context.undefined && e3 === void 0)
        return this.dispose(), {
          done: true,
          value: void 0
        };
      let i = this.callIteratorMethod(t, e3);
      return t.dispose(), this.dispose(), i;
    }
    throw(e3) {
      if (!this.alive)
        return {
          done: true,
          value: void 0
        };
      let t = e3 instanceof Me ? e3 : this.context.newError(e3), i = this.context.getProp(this.handle, "throw"), n = this.callIteratorMethod(i, e3);
      return t.alive && t.dispose(), i.dispose(), this.dispose(), n;
    }
    get alive() {
      return this.handle.alive;
    }
    dispose() {
      this._isDone = true, this.handle.dispose(), this._next?.dispose();
    }
    callIteratorMethod(e3, t) {
      let i = t ? this.context.callFunction(e3, this.handle, t) : this.context.callFunction(e3, this.handle);
      if (i.error)
        return this.dispose(), {
          value: i
        };
      let n = this.context.getProp(i.value, "done").consume((o) => this.context.dump(o));
      if (n)
        return i.value.dispose(), this.dispose(), {
          done: n,
          value: void 0
        };
      let r = this.context.getProp(i.value, "value");
      return i.value.dispose(), {
        value: ci.success(r),
        done: n
      };
    }
  }, mD = class extends Jb {
    constructor(e3) {
      super(e3.module), this.scope = new _t(), this.copyJSValue = (t) => this.ffi.QTS_DupValuePointer(this.ctx.value, t), this.freeJSValue = (t) => {
        this.ffi.QTS_FreeValuePointer(this.ctx.value, t);
      }, e3.ownedLifetimes?.forEach((t) => this.scope.manage(t)), this.owner = e3.owner, this.module = e3.module, this.ffi = e3.ffi, this.rt = e3.rt, this.ctx = this.scope.manage(e3.ctx);
    }
    get alive() {
      return this.scope.alive;
    }
    dispose() {
      return this.scope.dispose();
    }
    [Symbol.dispose]() {
      return this.dispose();
    }
    manage(e3) {
      return this.scope.manage(e3);
    }
    consumeJSCharPointer(e3) {
      let t = this.module.UTF8ToString(e3);
      return this.ffi.QTS_FreeCString(this.ctx.value, e3), t;
    }
    heapValueHandle(e3) {
      return new Me(e3, this.copyJSValue, this.freeJSValue, this.owner);
    }
    staticHeapValueHandle(e3) {
      return this.manage(this.heapValueHandle(e3)), new pr(e3, this.owner);
    }
  }, pD = class extends Qt {
    constructor(e3) {
      super(), this._undefined = void 0, this._null = void 0, this._false = void 0, this._true = void 0, this._global = void 0, this._BigInt = void 0, this._Symbol = void 0, this._SymbolIterator = void 0, this._SymbolAsyncIterator = void 0, this.fnNextId = -32768, this.fnMaps = /* @__PURE__ */ new Map(), this.cToHostCallbacks = {
        callFunction: (t, i, n, r, o) => {
          if (t !== this.ctx.value)
            throw new Error(
              "QuickJSContext instance received C -> JS call with mismatched ctx"
            );
          let a = this.getFunction(o);
          if (!a)
            throw new Error(
              `QuickJSContext had no callback with id ${o}`
            );
          return _t.withScopeMaybeAsync(this, function* (u, s) {
            let l = s.manage(
              new Ub(
                i,
                this.memory.copyJSValue,
                this.memory.freeJSValue,
                this.runtime
              )
            ), d = new Array(n);
            for (let c = 0; c < n; c++) {
              let f = this.ffi.QTS_ArgvGetJSValueConstPointer(r, c);
              d[c] = s.manage(
                new Ub(
                  f,
                  this.memory.copyJSValue,
                  this.memory.freeJSValue,
                  this.runtime
                )
              );
            }
            try {
              let c = yield* u(a.apply(l, d));
              if (c) {
                if ("error" in c && c.error)
                  throw this.runtime.debugLog("throw error", c.error), c.error;
                let f = s.manage(c instanceof Me ? c : c.value);
                return this.ffi.QTS_DupValuePointer(
                  this.ctx.value,
                  f.value
                );
              }
              return 0;
            } catch (c) {
              return this.errorToHandle(c).consume(
                (f) => this.ffi.QTS_Throw(this.ctx.value, f.value)
              );
            }
          });
        }
      }, this.runtime = e3.runtime, this.module = e3.module, this.ffi = e3.ffi, this.rt = e3.rt, this.ctx = e3.ctx, this.memory = new mD({
        ...e3,
        owner: this.runtime
      }), e3.callbacks.setContextCallbacks(
        this.ctx.value,
        this.cToHostCallbacks
      ), this.dump = this.dump.bind(this), this.getString = this.getString.bind(this), this.getNumber = this.getNumber.bind(this), this.resolvePromise = this.resolvePromise.bind(this), this.uint32Out = this.memory.manage(
        this.memory.newTypedArray(Uint32Array, 1)
      );
    }
    get alive() {
      return this.memory.alive;
    }
    dispose() {
      this.memory.dispose();
    }
    get undefined() {
      if (this._undefined) return this._undefined;
      let e3 = this.ffi.QTS_GetUndefined();
      return this._undefined = new pr(e3);
    }
    get null() {
      if (this._null) return this._null;
      let e3 = this.ffi.QTS_GetNull();
      return this._null = new pr(e3);
    }
    get true() {
      if (this._true) return this._true;
      let e3 = this.ffi.QTS_GetTrue();
      return this._true = new pr(e3);
    }
    get false() {
      if (this._false) return this._false;
      let e3 = this.ffi.QTS_GetFalse();
      return this._false = new pr(e3);
    }
    get global() {
      if (this._global) return this._global;
      let e3 = this.ffi.QTS_GetGlobalObject(this.ctx.value);
      return this._global = this.memory.staticHeapValueHandle(e3), this._global;
    }
    newNumber(e3) {
      return this.memory.heapValueHandle(
        this.ffi.QTS_NewFloat64(this.ctx.value, e3)
      );
    }
    newString(e3) {
      let t = this.memory.newHeapCharPointer(e3).consume(
        (i) => this.ffi.QTS_NewString(this.ctx.value, i.value.ptr)
      );
      return this.memory.heapValueHandle(t);
    }
    newUniqueSymbol(e3) {
      let t = (typeof e3 == "symbol" ? e3.description : e3) ?? "", i = this.memory.newHeapCharPointer(t).consume(
        (n) => this.ffi.QTS_NewSymbol(this.ctx.value, n.value.ptr, 0)
      );
      return this.memory.heapValueHandle(i);
    }
    newSymbolFor(e3) {
      let t = (typeof e3 == "symbol" ? e3.description : e3) ?? "", i = this.memory.newHeapCharPointer(t).consume(
        (n) => this.ffi.QTS_NewSymbol(this.ctx.value, n.value.ptr, 1)
      );
      return this.memory.heapValueHandle(i);
    }
    getWellKnownSymbol(e3) {
      return this._Symbol ?? (this._Symbol = this.memory.manage(
        this.getProp(this.global, "Symbol")
      )), this.getProp(this._Symbol, e3);
    }
    newBigInt(e3) {
      if (!this._BigInt) {
        let n = this.getProp(this.global, "BigInt");
        this.memory.manage(n), this._BigInt = new pr(n.value, this.runtime);
      }
      let t = this._BigInt, i = String(e3);
      return this.newString(i).consume(
        (n) => this.unwrapResult(this.callFunction(t, this.undefined, n))
      );
    }
    newObject(e3) {
      e3 && this.runtime.assertOwned(e3);
      let t = e3 ? this.ffi.QTS_NewObjectProto(this.ctx.value, e3.value) : this.ffi.QTS_NewObject(this.ctx.value);
      return this.memory.heapValueHandle(t);
    }
    newArray() {
      let e3 = this.ffi.QTS_NewArray(this.ctx.value);
      return this.memory.heapValueHandle(e3);
    }
    newArrayBuffer(e3) {
      let t = new Uint8Array(e3), i = this.memory.newHeapBufferPointer(t), n = this.ffi.QTS_NewArrayBuffer(
        this.ctx.value,
        i.value.pointer,
        t.length
      );
      return this.memory.heapValueHandle(n);
    }
    newPromise(e3) {
      let t = _t.withScope((i) => {
        let n = i.manage(this.memory.newMutablePointerArray(2)), r = this.ffi.QTS_NewPromiseCapability(
          this.ctx.value,
          n.value.ptr
        ), o = this.memory.heapValueHandle(r), [a, u] = Array.from(n.value.typedArray).map(
          (s) => this.memory.heapValueHandle(s)
        );
        return new sD({
          context: this,
          promiseHandle: o,
          resolveHandle: a,
          rejectHandle: u
        });
      });
      return e3 && typeof e3 == "function" && (e3 = new Promise(e3)), e3 && Promise.resolve(e3).then(
        t.resolve,
        (i) => i instanceof Me ? t.reject(i) : this.newError(i).consume(t.reject)
      ), t;
    }
    newFunction(e3, t) {
      let i = ++this.fnNextId;
      return this.setFunction(i, t), this.memory.heapValueHandle(
        this.ffi.QTS_NewFunction(this.ctx.value, i, e3)
      );
    }
    newError(e3) {
      let t = this.memory.heapValueHandle(
        this.ffi.QTS_NewError(this.ctx.value)
      );
      return e3 && typeof e3 == "object" ? (e3.name !== void 0 && this.newString(e3.name).consume(
        (i) => this.setProp(t, "name", i)
      ), e3.message !== void 0 && this.newString(e3.message).consume(
        (i) => this.setProp(t, "message", i)
      )) : typeof e3 == "string" ? this.newString(e3).consume(
        (i) => this.setProp(t, "message", i)
      ) : e3 !== void 0 && this.newString(String(e3)).consume(
        (i) => this.setProp(t, "message", i)
      ), t;
    }
    typeof(e3) {
      return this.runtime.assertOwned(e3), this.memory.consumeHeapCharPointer(
        this.ffi.QTS_Typeof(this.ctx.value, e3.value)
      );
    }
    getNumber(e3) {
      return this.runtime.assertOwned(e3), this.ffi.QTS_GetFloat64(this.ctx.value, e3.value);
    }
    getString(e3) {
      return this.runtime.assertOwned(e3), this.memory.consumeJSCharPointer(
        this.ffi.QTS_GetString(this.ctx.value, e3.value)
      );
    }
    getSymbol(e3) {
      this.runtime.assertOwned(e3);
      let t = this.memory.consumeJSCharPointer(
        this.ffi.QTS_GetSymbolDescriptionOrKey(this.ctx.value, e3.value)
      );
      return this.ffi.QTS_IsGlobalSymbol(this.ctx.value, e3.value) ? Symbol.for(t) : Symbol(t);
    }
    getBigInt(e3) {
      this.runtime.assertOwned(e3);
      let t = this.getString(e3);
      return BigInt(t);
    }
    getArrayBuffer(e3) {
      this.runtime.assertOwned(e3);
      let t = this.ffi.QTS_GetArrayBufferLength(this.ctx.value, e3.value), i = this.ffi.QTS_GetArrayBuffer(this.ctx.value, e3.value);
      if (!i)
        throw new Error("Couldn't allocate memory to get ArrayBuffer");
      return new Me(
        this.module.HEAPU8.subarray(i, i + t),
        void 0,
        () => this.module._free(i)
      );
    }
    getPromiseState(e3) {
      this.runtime.assertOwned(e3);
      let t = this.ffi.QTS_PromiseState(this.ctx.value, e3.value);
      if (t < 0)
        return {
          type: "fulfilled",
          value: e3,
          notAPromise: true
        };
      if (t === cs.Pending)
        return {
          type: "pending",
          get error() {
            return new Gb("Cannot unwrap a pending promise");
          }
        };
      let i = this.ffi.QTS_PromiseResult(this.ctx.value, e3.value), n = this.memory.heapValueHandle(i);
      if (t === cs.Fulfilled)
        return {
          type: "fulfilled",
          value: n
        };
      if (t === cs.Rejected)
        return {
          type: "rejected",
          error: n
        };
      throw n.dispose(), new Error(`Unknown JSPromiseStateEnum: ${t}`);
    }
    resolvePromise(e3) {
      this.runtime.assertOwned(e3);
      let t = _t.withScope((i) => {
        let n = i.manage(this.getProp(this.global, "Promise")), r = i.manage(this.getProp(n, "resolve"));
        return this.callFunction(r, n, e3);
      });
      return t.error ? Promise.resolve(t) : new Promise((i) => {
        _t.withScope((n) => {
          let r = n.manage(
            this.newFunction("resolve", (s) => {
              i(this.success(s && s.dup()));
            })
          ), o = n.manage(
            this.newFunction("reject", (s) => {
              i(this.fail(s && s.dup()));
            })
          ), a = n.manage(t.value), u = n.manage(this.getProp(a, "then"));
          this.callFunction(u, a, r, o).unwrap().dispose();
        });
      });
    }
    isEqual(e3, t, i = In.IsStrictlyEqual) {
      if (e3 === t) return true;
      this.runtime.assertOwned(e3), this.runtime.assertOwned(t);
      let n = this.ffi.QTS_IsEqual(this.ctx.value, e3.value, t.value, i);
      if (n === -1) throw new Lb("WASM variant does not expose equality");
      return !!n;
    }
    eq(e3, t) {
      return this.isEqual(e3, t, In.IsStrictlyEqual);
    }
    sameValue(e3, t) {
      return this.isEqual(e3, t, In.IsSameValue);
    }
    sameValueZero(e3, t) {
      return this.isEqual(e3, t, In.IsSameValueZero);
    }
    getProp(e3, t) {
      this.runtime.assertOwned(e3);
      let i;
      return typeof t == "number" && t >= 0 ? i = this.ffi.QTS_GetPropNumber(this.ctx.value, e3.value, t) : i = this.borrowPropertyKey(t).consume(
        (n) => this.ffi.QTS_GetProp(this.ctx.value, e3.value, n.value)
      ), this.memory.heapValueHandle(i);
    }
    getLength(e3) {
      if (this.runtime.assertOwned(e3), !(this.ffi.QTS_GetLength(
        this.ctx.value,
        this.uint32Out.value.ptr,
        e3.value
      ) < 0))
        return this.uint32Out.value.typedArray[0];
    }
    getOwnPropertyNames(e3, t = {
      strings: true,
      numbersAsStrings: true
    }) {
      this.runtime.assertOwned(e3), e3.value;
      let i = dD(t);
      if (i === 0)
        throw new Zb("No options set, will return an empty array");
      return _t.withScope((n) => {
        let r = n.manage(this.memory.newMutablePointerArray(1)), o = this.ffi.QTS_GetOwnPropertyNames(
          this.ctx.value,
          r.value.ptr,
          this.uint32Out.value.ptr,
          e3.value,
          i
        );
        if (o) return this.fail(this.memory.heapValueHandle(o));
        let a = this.uint32Out.value.typedArray[0], u = r.value.typedArray[0], s = new Uint32Array(this.module.HEAP8.buffer, u, a), l = Array.from(s).map((d) => this.memory.heapValueHandle(d));
        return this.ffi.QTS_FreeVoidPointer(this.ctx.value, u), this.success(nD(l));
      });
    }
    getIterator(e3) {
      let t = this._SymbolIterator ?? (this._SymbolIterator = this.memory.manage(
        this.getWellKnownSymbol("iterator")
      ));
      return _t.withScope((i) => {
        let n = i.manage(this.getProp(e3, t)), r = this.callFunction(n, e3);
        return r.error ? r : this.success(new _D(r.value, this));
      });
    }
    setProp(e3, t, i) {
      this.runtime.assertOwned(e3), this.borrowPropertyKey(t).consume(
        (n) => this.ffi.QTS_SetProp(this.ctx.value, e3.value, n.value, i.value)
      );
    }
    defineProp(e3, t, i) {
      this.runtime.assertOwned(e3), _t.withScope((n) => {
        let r = n.manage(this.borrowPropertyKey(t)), o = i.value || this.undefined, a = !!i.configurable, u = !!i.enumerable, s = !!i.value, l = i.get ? n.manage(this.newFunction(i.get.name, i.get)) : this.undefined, d = i.set ? n.manage(this.newFunction(i.set.name, i.set)) : this.undefined;
        this.ffi.QTS_DefineProp(
          this.ctx.value,
          e3.value,
          r.value,
          o.value,
          l.value,
          d.value,
          a,
          u,
          s
        );
      });
    }
    callFunction(e3, t, ...i) {
      this.runtime.assertOwned(e3);
      let n, r = i[0];
      r === void 0 || Array.isArray(r) ? n = r ?? [] : n = i;
      let o = this.memory.toPointerArray(n).consume(
        (u) => this.ffi.QTS_Call(
          this.ctx.value,
          e3.value,
          t.value,
          n.length,
          u.value
        )
      ), a = this.ffi.QTS_ResolveException(this.ctx.value, o);
      return a ? (this.ffi.QTS_FreeValuePointer(this.ctx.value, o), this.fail(this.memory.heapValueHandle(a))) : this.success(this.memory.heapValueHandle(o));
    }
    callMethod(e3, t, i = []) {
      return this.getProp(e3, t).consume((n) => this.callFunction(n, e3, i));
    }
    evalCode(e3, t = "eval.js", i) {
      let n = i === void 0 ? 1 : 0, r = lD(i), o = this.memory.newHeapCharPointer(e3).consume(
        (u) => this.ffi.QTS_Eval(
          this.ctx.value,
          u.value.ptr,
          u.value.strlen,
          t,
          n,
          r
        )
      ), a = this.ffi.QTS_ResolveException(this.ctx.value, o);
      return a ? (this.ffi.QTS_FreeValuePointer(this.ctx.value, o), this.fail(this.memory.heapValueHandle(a))) : this.success(this.memory.heapValueHandle(o));
    }
    throw(e3) {
      return this.errorToHandle(e3).consume(
        (t) => this.ffi.QTS_Throw(this.ctx.value, t.value)
      );
    }
    borrowPropertyKey(e3) {
      return typeof e3 == "number" ? this.newNumber(e3) : typeof e3 == "string" ? this.newString(e3) : new pr(e3.value, this.runtime);
    }
    getMemory(e3) {
      if (e3 === this.rt.value) return this.memory;
      throw new Error(
        "Private API. Cannot get memory from a different runtime"
      );
    }
    dump(e3) {
      this.runtime.assertOwned(e3);
      let t = this.typeof(e3);
      if (t === "string") return this.getString(e3);
      if (t === "number") return this.getNumber(e3);
      if (t === "bigint") return this.getBigInt(e3);
      if (t === "undefined") return;
      if (t === "symbol") return this.getSymbol(e3);
      let i = this.getPromiseState(e3);
      if (i.type === "fulfilled" && !i.notAPromise)
        return e3.dispose(), {
          type: i.type,
          value: i.value.consume(this.dump)
        };
      if (i.type === "pending")
        return e3.dispose(), {
          type: i.type
        };
      if (i.type === "rejected")
        return e3.dispose(), {
          type: i.type,
          error: i.error.consume(this.dump)
        };
      let n = this.memory.consumeJSCharPointer(
        this.ffi.QTS_Dump(this.ctx.value, e3.value)
      );
      try {
        return JSON.parse(n);
      } catch {
        return n;
      }
    }
    unwrapResult(e3) {
      if (e3.error) {
        let t = "context" in e3.error ? e3.error.context : this, i = e3.error.consume((n) => this.dump(n));
        if (i && typeof i == "object" && typeof i.message == "string") {
          let { message: n, name: r, stack: o, ...a } = i, u = new A_(i, t);
          typeof r == "string" && (u.name = i.name), u.message = n;
          let s = u.stack;
          throw typeof o == "string" && (u.stack = `${r}: ${n}
${i.stack}Host: ${s}`), Object.assign(u, a), u;
        }
        throw new A_(i);
      }
      return e3.value;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return this.alive ? `${this.constructor.name} { ctx: ${this.ctx.value} rt: ${this.rt.value} }` : `${this.constructor.name} { disposed }`;
    }
    getFunction(e3) {
      let t = e3 >> 8, i = this.fnMaps.get(t);
      if (i) return i.get(e3);
    }
    setFunction(e3, t) {
      let i = e3 >> 8, n = this.fnMaps.get(i);
      return n || (n = /* @__PURE__ */ new Map(), this.fnMaps.set(i, n)), n.set(e3, t);
    }
    errorToHandle(e3) {
      return e3 instanceof Me ? e3 : this.newError(e3);
    }
    encodeBinaryJSON(e3) {
      let t = this.ffi.QTS_bjson_encode(this.ctx.value, e3.value);
      return this.memory.heapValueHandle(t);
    }
    decodeBinaryJSON(e3) {
      let t = this.ffi.QTS_bjson_decode(this.ctx.value, e3.value);
      return this.memory.heapValueHandle(t);
    }
    success(e3) {
      return ci.success(e3);
    }
    fail(e3) {
      return ci.fail(e3, (t) => this.unwrapResult(t));
    }
  }, fD = class extends Qt {
    constructor(e3) {
      super(), this.scope = new _t(), this.contextMap = /* @__PURE__ */ new Map(), this._debugMode = false, this.cToHostCallbacks = {
        shouldInterrupt: (t) => {
          if (t !== this.rt.value)
            throw new Error(
              "QuickJSContext instance received C -> JS interrupt with mismatched rt"
            );
          let i = this.interruptHandler;
          if (!i)
            throw new Error("QuickJSContext had no interrupt handler");
          return i(this) ? 1 : 0;
        },
        loadModuleSource: jb(this, function* (t, i, n, r) {
          let o = this.moduleLoader;
          if (!o) throw new Error("Runtime has no module loader");
          if (i !== this.rt.value)
            throw new Error("Runtime pointer mismatch");
          let a = this.contextMap.get(n) ?? this.newContext({
            contextPointer: n
          });
          try {
            let u = yield* t(o(r, a));
            if (typeof u == "object" && "error" in u && u.error)
              throw this.debugLog(
                "cToHostLoadModule: loader returned error",
                u.error
              ), u.error;
            let s = typeof u == "string" ? u : "value" in u ? u.value : u;
            return this.memory.newHeapCharPointer(s).value.ptr;
          } catch (u) {
            return this.debugLog("cToHostLoadModule: caught error", u), a.throw(u), 0;
          }
        }),
        normalizeModule: jb(this, function* (t, i, n, r, o) {
          let a = this.moduleNormalizer;
          if (!a) throw new Error("Runtime has no module normalizer");
          if (i !== this.rt.value)
            throw new Error("Runtime pointer mismatch");
          let u = this.contextMap.get(n) ?? this.newContext({
            contextPointer: n
          });
          try {
            let s = yield* t(a(r, o, u));
            if (typeof s == "object" && "error" in s && s.error)
              throw this.debugLog(
                "cToHostNormalizeModule: normalizer returned error",
                s.error
              ), s.error;
            let l = typeof s == "string" ? s : s.value;
            return u.getMemory(this.rt.value).newHeapCharPointer(l).value.ptr;
          } catch (s) {
            return this.debugLog("normalizeModule: caught error", s), u.throw(s), 0;
          }
        })
      }, e3.ownedLifetimes?.forEach((t) => this.scope.manage(t)), this.module = e3.module, this.memory = new Jb(this.module), this.ffi = e3.ffi, this.rt = e3.rt, this.callbacks = e3.callbacks, this.scope.manage(this.rt), this.callbacks.setRuntimeCallbacks(
        this.rt.value,
        this.cToHostCallbacks
      ), this.executePendingJobs = this.executePendingJobs.bind(this), T_ && this.setDebugMode(true);
    }
    get alive() {
      return this.scope.alive;
    }
    dispose() {
      return this.scope.dispose();
    }
    newContext(e3 = {}) {
      let t = uD(e3.intrinsics), i = new Me(
        e3.contextPointer || this.ffi.QTS_NewContext(this.rt.value, t),
        void 0,
        (r) => {
          this.contextMap.delete(r), this.callbacks.deleteContext(r), this.ffi.QTS_FreeContext(r);
        }
      ), n = new pD({
        module: this.module,
        ctx: i,
        ffi: this.ffi,
        rt: this.rt,
        ownedLifetimes: e3.ownedLifetimes,
        runtime: this,
        callbacks: this.callbacks
      });
      return this.contextMap.set(i.value, n), n;
    }
    setModuleLoader(e3, t) {
      this.moduleLoader = e3, this.moduleNormalizer = t, this.ffi.QTS_RuntimeEnableModuleLoader(
        this.rt.value,
        this.moduleNormalizer ? 1 : 0
      );
    }
    removeModuleLoader() {
      this.moduleLoader = void 0, this.ffi.QTS_RuntimeDisableModuleLoader(this.rt.value);
    }
    hasPendingJob() {
      return !!this.ffi.QTS_IsJobPending(this.rt.value);
    }
    setInterruptHandler(e3) {
      let t = this.interruptHandler;
      this.interruptHandler = e3, t || this.ffi.QTS_RuntimeEnableInterruptHandler(this.rt.value);
    }
    removeInterruptHandler() {
      this.interruptHandler && (this.ffi.QTS_RuntimeDisableInterruptHandler(this.rt.value), this.interruptHandler = void 0);
    }
    executePendingJobs(e3 = -1) {
      let t = this.memory.newMutablePointerArray(1), i = this.ffi.QTS_ExecutePendingJob(
        this.rt.value,
        e3 ?? -1,
        t.value.ptr
      ), n = t.value.typedArray[0];
      if (t.dispose(), n === 0)
        return this.ffi.QTS_FreeValuePointerRuntime(this.rt.value, i), ci.success(0);
      let r = this.contextMap.get(n) ?? this.newContext({
        contextPointer: n
      }), o = r.getMemory(this.rt.value).heapValueHandle(i);
      if (r.typeof(o) === "number") {
        let a = r.getNumber(o);
        return o.dispose(), ci.success(a);
      } else {
        let a = Object.assign(o, {
          context: r
        });
        return ci.fail(a, (u) => r.unwrapResult(u));
      }
    }
    setMemoryLimit(e3) {
      if (e3 < 0 && e3 !== -1)
        throw new Error(
          "Cannot set memory limit to negative number. To unset, pass -1"
        );
      this.ffi.QTS_RuntimeSetMemoryLimit(this.rt.value, e3);
    }
    computeMemoryUsage() {
      let e3 = this.getSystemContext().getMemory(this.rt.value);
      return e3.heapValueHandle(
        this.ffi.QTS_RuntimeComputeMemoryUsage(this.rt.value, e3.ctx.value)
      );
    }
    dumpMemoryUsage() {
      return this.memory.consumeHeapCharPointer(
        this.ffi.QTS_RuntimeDumpMemoryUsage(this.rt.value)
      );
    }
    setMaxStackSize(e3) {
      if (e3 < 0)
        throw new Error(
          "Cannot set memory limit to negative number. To unset, pass 0."
        );
      this.ffi.QTS_RuntimeSetMaxStackSize(this.rt.value, e3);
    }
    assertOwned(e3) {
      if (e3.owner && e3.owner.rt !== this.rt)
        throw new Fb(
          `Handle is not owned by this runtime: ${e3.owner.rt.value} != ${this.rt.value}`
        );
    }
    setDebugMode(e3) {
      this._debugMode = e3, this.ffi.DEBUG && this.rt.alive && this.ffi.QTS_SetDebugLogEnabled(this.rt.value, e3 ? 1 : 0);
    }
    isDebugMode() {
      return this._debugMode;
    }
    debugLog(...e3) {
      this._debugMode && console.log("quickjs-emscripten:", ...e3);
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return this.alive ? `${this.constructor.name} { rt: ${this.rt.value} }` : `${this.constructor.name} { disposed }`;
    }
    getSystemContext() {
      return this.context || (this.context = this.scope.manage(this.newContext())), this.context;
    }
  }, gD = class {
    constructor(e3) {
      this.callFunction = e3.callFunction, this.shouldInterrupt = e3.shouldInterrupt, this.loadModuleSource = e3.loadModuleSource, this.normalizeModule = e3.normalizeModule;
    }
  }, O_ = class {
    constructor(e3) {
      this.contextCallbacks = /* @__PURE__ */ new Map(), this.runtimeCallbacks = /* @__PURE__ */ new Map(), this.suspendedCount = 0, this.cToHostCallbacks = new gD({
        callFunction: (t, i, n, r, o, a) => this.handleAsyncify(t, () => {
          try {
            let u = this.contextCallbacks.get(i);
            if (!u)
              throw new Error(
                `QuickJSContext(ctx = ${i}) not found for C function call "${a}"`
              );
            return u.callFunction(i, n, r, o, a);
          } catch (u) {
            return console.error("[C to host error: returning null]", u), 0;
          }
        }),
        shouldInterrupt: (t, i) => this.handleAsyncify(t, () => {
          try {
            let n = this.runtimeCallbacks.get(i);
            if (!n)
              throw new Error(
                `QuickJSRuntime(rt = ${i}) not found for C interrupt`
              );
            return n.shouldInterrupt(i);
          } catch (n) {
            return console.error(
              "[C to host interrupt: returning error]",
              n
            ), 1;
          }
        }),
        loadModuleSource: (t, i, n, r) => this.handleAsyncify(t, () => {
          try {
            let o = this.runtimeCallbacks.get(i);
            if (!o)
              throw new Error(
                `QuickJSRuntime(rt = ${i}) not found for C module loader`
              );
            let a = o.loadModuleSource;
            if (!a)
              throw new Error(
                `QuickJSRuntime(rt = ${i}) does not support module loading`
              );
            return a(i, n, r);
          } catch (o) {
            return console.error(
              "[C to host module loader error: returning null]",
              o
            ), 0;
          }
        }),
        normalizeModule: (t, i, n, r, o) => this.handleAsyncify(t, () => {
          try {
            let a = this.runtimeCallbacks.get(i);
            if (!a)
              throw new Error(
                `QuickJSRuntime(rt = ${i}) not found for C module loader`
              );
            let u = a.normalizeModule;
            if (!u)
              throw new Error(
                `QuickJSRuntime(rt = ${i}) does not support module loading`
              );
            return u(i, n, r, o);
          } catch (a) {
            return console.error(
              "[C to host module loader error: returning null]",
              a
            ), 0;
          }
        })
      }), this.module = e3, this.module.callbacks = this.cToHostCallbacks;
    }
    setRuntimeCallbacks(e3, t) {
      this.runtimeCallbacks.set(e3, t);
    }
    deleteRuntime(e3) {
      this.runtimeCallbacks.delete(e3);
    }
    setContextCallbacks(e3, t) {
      this.contextCallbacks.set(e3, t);
    }
    deleteContext(e3) {
      this.contextCallbacks.delete(e3);
    }
    handleAsyncify(e3, t) {
      if (e3)
        return e3.handleSleep((n) => {
          try {
            let r = t();
            if (!(r instanceof Promise)) {
              $n("asyncify.handleSleep: not suspending:", r), n(r);
              return;
            }
            if (this.suspended)
              throw new Vb(`Already suspended at: ${this.suspended.stack}
Attempted to suspend at:`);
            this.suspended = new Bb(`(${this.suspendedCount++})`), $n("asyncify.handleSleep: suspending:", this.suspended), r.then(
              (o) => {
                this.suspended = void 0, $n("asyncify.handleSleep: resolved:", o), n(o);
              },
              (o) => {
                $n("asyncify.handleSleep: rejected:", o), console.error(
                  "QuickJS: cannot handle error in suspended function",
                  o
                ), this.suspended = void 0;
              }
            );
          } catch (r) {
            throw $n("asyncify.handleSleep: error:", r), this.suspended = void 0, r;
          }
        });
      let i = t();
      if (i instanceof Promise)
        throw new Error(
          "Promise return value not supported in non-asyncify context."
        );
      return i;
    }
  };
  Yb = class {
    constructor(e3, t) {
      this.module = e3, this.ffi = t, this.callbacks = new O_(e3);
    }
    newRuntime(e3 = {}) {
      let t = new Me(this.ffi.QTS_NewRuntime(), void 0, (n) => {
        this.callbacks.deleteRuntime(n), this.ffi.QTS_FreeRuntime(n);
      }), i = new fD({
        module: this.module,
        callbacks: this.callbacks,
        ffi: this.ffi,
        rt: t
      });
      return N_(i, e3), e3.moduleLoader && i.setModuleLoader(e3.moduleLoader), i;
    }
    newContext(e3 = {}) {
      let t = this.newRuntime(), i = t.newContext({
        ...e3,
        ownedLifetimes: cD(t, e3.ownedLifetimes)
      });
      return t.context = i, i;
    }
    evalCode(e3, t = {}) {
      return _t.withScope((i) => {
        let n = i.manage(this.newContext());
        R_(n.runtime, t);
        let r = n.evalCode(e3, "eval.js");
        if (t.memoryLimitBytes !== void 0 && n.runtime.setMemoryLimit(-1), r.error)
          throw n.dump(i.manage(r.error));
        return n.dump(i.manage(r.value));
      });
    }
    getWasmMemory() {
      let e3 = this.module.quickjsEmscriptenInit?.(() => {
      })?.getWasmMemory?.();
      if (!e3)
        throw new Error(
          "Variant does not support getting WebAssembly.Memory"
        );
      return e3;
    }
    getFFI() {
      return this.ffi;
    }
  };
});
var ey = {};
et(ey, {
  QuickJSModuleCallbacks: () => O_,
  QuickJSWASMModule: () => Yb,
  applyBaseRuntimeOptions: () => N_,
  applyModuleEvalRuntimeOptions: () => R_
});
var ty = ft(() => {
  Xb();
});
var iy = {};
et(iy, {
  QuickJSFFI: () => hD
});
var hD, ny = ft(() => {
  hD = class {
    constructor(e3) {
      this.module = e3, this.DEBUG = false, this.QTS_Throw = this.module.cwrap("QTS_Throw", "number", [
        "number",
        "number"
      ]), this.QTS_NewError = this.module.cwrap("QTS_NewError", "number", [
        "number"
      ]), this.QTS_RuntimeSetMemoryLimit = this.module.cwrap(
        "QTS_RuntimeSetMemoryLimit",
        null,
        ["number", "number"]
      ), this.QTS_RuntimeComputeMemoryUsage = this.module.cwrap(
        "QTS_RuntimeComputeMemoryUsage",
        "number",
        ["number", "number"]
      ), this.QTS_RuntimeDumpMemoryUsage = this.module.cwrap(
        "QTS_RuntimeDumpMemoryUsage",
        "number",
        ["number"]
      ), this.QTS_RecoverableLeakCheck = this.module.cwrap(
        "QTS_RecoverableLeakCheck",
        "number",
        []
      ), this.QTS_BuildIsSanitizeLeak = this.module.cwrap(
        "QTS_BuildIsSanitizeLeak",
        "number",
        []
      ), this.QTS_RuntimeSetMaxStackSize = this.module.cwrap(
        "QTS_RuntimeSetMaxStackSize",
        null,
        ["number", "number"]
      ), this.QTS_GetUndefined = this.module.cwrap(
        "QTS_GetUndefined",
        "number",
        []
      ), this.QTS_GetNull = this.module.cwrap("QTS_GetNull", "number", []), this.QTS_GetFalse = this.module.cwrap("QTS_GetFalse", "number", []), this.QTS_GetTrue = this.module.cwrap("QTS_GetTrue", "number", []), this.QTS_NewRuntime = this.module.cwrap(
        "QTS_NewRuntime",
        "number",
        []
      ), this.QTS_FreeRuntime = this.module.cwrap("QTS_FreeRuntime", null, [
        "number"
      ]), this.QTS_NewContext = this.module.cwrap("QTS_NewContext", "number", [
        "number",
        "number"
      ]), this.QTS_FreeContext = this.module.cwrap("QTS_FreeContext", null, [
        "number"
      ]), this.QTS_FreeValuePointer = this.module.cwrap(
        "QTS_FreeValuePointer",
        null,
        ["number", "number"]
      ), this.QTS_FreeValuePointerRuntime = this.module.cwrap(
        "QTS_FreeValuePointerRuntime",
        null,
        ["number", "number"]
      ), this.QTS_FreeVoidPointer = this.module.cwrap(
        "QTS_FreeVoidPointer",
        null,
        ["number", "number"]
      ), this.QTS_FreeCString = this.module.cwrap("QTS_FreeCString", null, [
        "number",
        "number"
      ]), this.QTS_DupValuePointer = this.module.cwrap(
        "QTS_DupValuePointer",
        "number",
        ["number", "number"]
      ), this.QTS_NewObject = this.module.cwrap("QTS_NewObject", "number", [
        "number"
      ]), this.QTS_NewObjectProto = this.module.cwrap(
        "QTS_NewObjectProto",
        "number",
        ["number", "number"]
      ), this.QTS_NewArray = this.module.cwrap("QTS_NewArray", "number", [
        "number"
      ]), this.QTS_NewArrayBuffer = this.module.cwrap(
        "QTS_NewArrayBuffer",
        "number",
        ["number", "number", "number"]
      ), this.QTS_NewFloat64 = this.module.cwrap("QTS_NewFloat64", "number", [
        "number",
        "number"
      ]), this.QTS_GetFloat64 = this.module.cwrap("QTS_GetFloat64", "number", [
        "number",
        "number"
      ]), this.QTS_NewString = this.module.cwrap("QTS_NewString", "number", [
        "number",
        "number"
      ]), this.QTS_GetString = this.module.cwrap("QTS_GetString", "number", [
        "number",
        "number"
      ]), this.QTS_GetArrayBuffer = this.module.cwrap(
        "QTS_GetArrayBuffer",
        "number",
        ["number", "number"]
      ), this.QTS_GetArrayBufferLength = this.module.cwrap(
        "QTS_GetArrayBufferLength",
        "number",
        ["number", "number"]
      ), this.QTS_NewSymbol = this.module.cwrap("QTS_NewSymbol", "number", [
        "number",
        "number",
        "number"
      ]), this.QTS_GetSymbolDescriptionOrKey = this.module.cwrap(
        "QTS_GetSymbolDescriptionOrKey",
        "number",
        ["number", "number"]
      ), this.QTS_IsGlobalSymbol = this.module.cwrap(
        "QTS_IsGlobalSymbol",
        "number",
        ["number", "number"]
      ), this.QTS_IsJobPending = this.module.cwrap(
        "QTS_IsJobPending",
        "number",
        ["number"]
      ), this.QTS_ExecutePendingJob = this.module.cwrap(
        "QTS_ExecutePendingJob",
        "number",
        ["number", "number", "number"]
      ), this.QTS_GetProp = this.module.cwrap("QTS_GetProp", "number", [
        "number",
        "number",
        "number"
      ]), this.QTS_GetPropNumber = this.module.cwrap(
        "QTS_GetPropNumber",
        "number",
        ["number", "number", "number"]
      ), this.QTS_SetProp = this.module.cwrap("QTS_SetProp", null, [
        "number",
        "number",
        "number",
        "number"
      ]), this.QTS_DefineProp = this.module.cwrap("QTS_DefineProp", null, [
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "boolean",
        "boolean",
        "boolean"
      ]), this.QTS_GetOwnPropertyNames = this.module.cwrap(
        "QTS_GetOwnPropertyNames",
        "number",
        ["number", "number", "number", "number", "number"]
      ), this.QTS_Call = this.module.cwrap("QTS_Call", "number", [
        "number",
        "number",
        "number",
        "number",
        "number"
      ]), this.QTS_ResolveException = this.module.cwrap(
        "QTS_ResolveException",
        "number",
        ["number", "number"]
      ), this.QTS_Dump = this.module.cwrap("QTS_Dump", "number", [
        "number",
        "number"
      ]), this.QTS_Eval = this.module.cwrap("QTS_Eval", "number", [
        "number",
        "number",
        "number",
        "string",
        "number",
        "number"
      ]), this.QTS_GetModuleNamespace = this.module.cwrap(
        "QTS_GetModuleNamespace",
        "number",
        ["number", "number"]
      ), this.QTS_Typeof = this.module.cwrap("QTS_Typeof", "number", [
        "number",
        "number"
      ]), this.QTS_GetLength = this.module.cwrap("QTS_GetLength", "number", [
        "number",
        "number",
        "number"
      ]), this.QTS_IsEqual = this.module.cwrap("QTS_IsEqual", "number", [
        "number",
        "number",
        "number",
        "number"
      ]), this.QTS_GetGlobalObject = this.module.cwrap(
        "QTS_GetGlobalObject",
        "number",
        ["number"]
      ), this.QTS_NewPromiseCapability = this.module.cwrap(
        "QTS_NewPromiseCapability",
        "number",
        ["number", "number"]
      ), this.QTS_PromiseState = this.module.cwrap(
        "QTS_PromiseState",
        "number",
        ["number", "number"]
      ), this.QTS_PromiseResult = this.module.cwrap(
        "QTS_PromiseResult",
        "number",
        ["number", "number"]
      ), this.QTS_TestStringArg = this.module.cwrap(
        "QTS_TestStringArg",
        null,
        ["string"]
      ), this.QTS_GetDebugLogEnabled = this.module.cwrap(
        "QTS_GetDebugLogEnabled",
        "number",
        ["number"]
      ), this.QTS_SetDebugLogEnabled = this.module.cwrap(
        "QTS_SetDebugLogEnabled",
        null,
        ["number", "number"]
      ), this.QTS_BuildIsDebug = this.module.cwrap(
        "QTS_BuildIsDebug",
        "number",
        []
      ), this.QTS_BuildIsAsyncify = this.module.cwrap(
        "QTS_BuildIsAsyncify",
        "number",
        []
      ), this.QTS_NewFunction = this.module.cwrap(
        "QTS_NewFunction",
        "number",
        ["number", "number", "string"]
      ), this.QTS_ArgvGetJSValueConstPointer = this.module.cwrap(
        "QTS_ArgvGetJSValueConstPointer",
        "number",
        ["number", "number"]
      ), this.QTS_RuntimeEnableInterruptHandler = this.module.cwrap(
        "QTS_RuntimeEnableInterruptHandler",
        null,
        ["number"]
      ), this.QTS_RuntimeDisableInterruptHandler = this.module.cwrap(
        "QTS_RuntimeDisableInterruptHandler",
        null,
        ["number"]
      ), this.QTS_RuntimeEnableModuleLoader = this.module.cwrap(
        "QTS_RuntimeEnableModuleLoader",
        null,
        ["number", "number"]
      ), this.QTS_RuntimeDisableModuleLoader = this.module.cwrap(
        "QTS_RuntimeDisableModuleLoader",
        null,
        ["number"]
      ), this.QTS_bjson_encode = this.module.cwrap(
        "QTS_bjson_encode",
        "number",
        ["number", "number"]
      ), this.QTS_bjson_decode = this.module.cwrap(
        "QTS_bjson_decode",
        "number",
        ["number", "number"]
      );
    }
  };
});
var oy = {};
et(oy, {
  default: () => yD
});
var bD, yD, ay = ft(() => {
  bD = (() => {
    var e3 = import.meta.url;
    return function(t = {}) {
      var i, n = t, r, o, a = new Promise((p, g) => {
        r = p, o = g;
      }), u = typeof window == "object", s = typeof importScripts == "function";
      function l(p) {
        p = {
          log: p || function() {
          }
        };
        for (let g of l.Ia) g(p);
        return n.quickJSEmscriptenExtensions = p;
      }
      l.Ia = [], n.quickjsEmscriptenInit = l, l.Ia.push((p) => {
        p.getWasmMemory = function() {
          return w;
        };
      });
      var d = Object.assign({}, n), c = "./this.program", f = "", m, h;
      (u || s) && (s ? f = self.location.href : typeof document < "u" && document.currentScript && (f = document.currentScript.src), e3 && (f = e3), f.startsWith("blob:") ? f = "" : f = f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1), s && (h = (p) => {
        var g = new XMLHttpRequest();
        return g.open("GET", p, false), g.responseType = "arraybuffer", g.send(null), new Uint8Array(g.response);
      }), m = (p) => fetch(p, {
        credentials: "same-origin"
      }).then(
        (g) => g.ok ? g.arrayBuffer() : Promise.reject(Error(g.status + " : " + g.url))
      ));
      var _ = n.print || console.log.bind(console), x = n.printErr || console.error.bind(console);
      Object.assign(n, d), d = null, n.thisProgram && (c = n.thisProgram);
      var E = n.wasmBinary, w, y = false, v, z, $, j, K;
      function C() {
        var p = w.buffer;
        n.HEAP8 = z = new Int8Array(p), n.HEAP16 = new Int16Array(p), n.HEAPU8 = $ = new Uint8Array(p), n.HEAPU16 = new Uint16Array(p), n.HEAP32 = j = new Int32Array(p), n.HEAPU32 = K = new Uint32Array(p), n.HEAPF32 = new Float32Array(p), n.HEAPF64 = new Float64Array(p);
      }
      n.wasmMemory ? w = n.wasmMemory : w = new WebAssembly.Memory({
        initial: (n.INITIAL_MEMORY || 16777216) / 65536,
        maximum: 32768
      }), C();
      var B = [], P = [], G = [];
      function Y() {
        var p = n.preRun.shift();
        B.unshift(p);
      }
      var ue = 0, Ae = null, Z = null;
      function pe(p) {
        throw n.onAbort?.(p), p = "Aborted(" + p + ")", x(p), y = true, v = 1, p = new WebAssembly.RuntimeError(
          p + ". Build with -sASSERTIONS for more info."
        ), o(p), p;
      }
      var gr = (p) => p.startsWith("data:application/octet-stream;base64,"), Je;
      function rm(p) {
        if (p == Je && E) return new Uint8Array(E);
        if (h) return h(p);
        throw "both async and sync fetching of the wasm failed";
      }
      function Ky(p) {
        return E ? Promise.resolve().then(() => rm(p)) : m(p).then(
          (g) => new Uint8Array(g),
          () => rm(p)
        );
      }
      function im(p, g, D) {
        return Ky(p).then((O) => WebAssembly.instantiate(O, g)).then(D, (O) => {
          x(`failed to asynchronously prepare wasm: ${O}`), pe(O);
        });
      }
      function Qy(p, g) {
        var D = Je;
        return E || typeof WebAssembly.instantiateStreaming != "function" || gr(D) || typeof fetch != "function" ? im(D, p, g) : fetch(D, {
          credentials: "same-origin"
        }).then(
          (O) => WebAssembly.instantiateStreaming(O, p).then(g, function(F) {
            return x(`wasm streaming compile failed: ${F}`), x("falling back to ArrayBuffer instantiation"), im(D, p, g);
          })
        );
      }
      function nm(p) {
        this.name = "ExitStatus", this.message = `Program terminated with exit(${p})`, this.status = p;
      }
      var vs = (p) => {
        for (; 0 < p.length; ) p.shift()(n);
      }, ws = n.noExitRuntime || true, om = typeof TextDecoder < "u" ? new TextDecoder() : void 0, pt = (p, g, D) => {
        var O = g + D;
        for (D = g; p[D] && !(D >= O); ) ++D;
        if (16 < D - g && p.buffer && om)
          return om.decode(p.subarray(g, D));
        for (O = ""; g < D; ) {
          var F = p[g++];
          if (F & 128) {
            var J = p[g++] & 63;
            if ((F & 224) == 192)
              O += String.fromCharCode((F & 31) << 6 | J);
            else {
              var X = p[g++] & 63;
              F = (F & 240) == 224 ? (F & 15) << 12 | J << 6 | X : (F & 7) << 18 | J << 12 | X << 6 | p[g++] & 63, 65536 > F ? O += String.fromCharCode(F) : (F -= 65536, O += String.fromCharCode(
                55296 | F >> 10,
                56320 | F & 1023
              ));
            }
          } else O += String.fromCharCode(F);
        }
        return O;
      }, Jy = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Yy = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], hi = {}, am = (p) => {
        if (!(p instanceof nm || p == "unwind")) throw p;
      }, Ss = 0, sm = (p) => {
        throw v = p, ws || 0 < Ss || (n.onExit?.(p), y = true), new nm(p);
      }, Xy = (p) => {
        if (!y)
          try {
            if (p(), !(ws || 0 < Ss))
              try {
                v = p = v, sm(p);
              } catch (g) {
                am(g);
              }
          } catch (g) {
            am(g);
          }
      }, um;
      um = () => performance.now();
      var hr = (p, g, D) => {
        var O = $;
        if (!(0 < D)) return 0;
        var F = g;
        D = g + D - 1;
        for (var J = 0; J < p.length; ++J) {
          var X = p.charCodeAt(J);
          if (55296 <= X && 57343 >= X) {
            var Ee = p.charCodeAt(++J);
            X = 65536 + ((X & 1023) << 10) | Ee & 1023;
          }
          if (127 >= X) {
            if (g >= D) break;
            O[g++] = X;
          } else {
            if (2047 >= X) {
              if (g + 1 >= D) break;
              O[g++] = 192 | X >> 6;
            } else {
              if (65535 >= X) {
                if (g + 2 >= D) break;
                O[g++] = 224 | X >> 12;
              } else {
                if (g + 3 >= D) break;
                O[g++] = 240 | X >> 18, O[g++] = 128 | X >> 12 & 63;
              }
              O[g++] = 128 | X >> 6 & 63;
            }
            O[g++] = 128 | X & 63;
          }
        }
        return O[g] = 0, g - F;
      }, xs = {}, lm = () => {
        if (!Ds) {
          var p = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
            _: c || "./this.program"
          }, g;
          for (g in xs) xs[g] === void 0 ? delete p[g] : p[g] = xs[g];
          var D = [];
          for (g in p) D.push(`${g}=${p[g]}`);
          Ds = D;
        }
        return Ds;
      }, Ds, ev = [null, [], []], dm = (p) => {
        for (var g = 0, D = 0; D < p.length; ++D) {
          var O = p.charCodeAt(D);
          127 >= O ? g++ : 2047 >= O ? g += 2 : 55296 <= O && 57343 >= O ? (g += 4, ++D) : g += 3;
        }
        return g;
      }, tv = (p, g, D, O) => {
        var F = {
          string: (ze) => {
            var Ye = 0;
            if (ze != null && ze !== 0) {
              Ye = dm(ze) + 1;
              var fm = ks(Ye);
              hr(ze, fm, Ye), Ye = fm;
            }
            return Ye;
          },
          array: (ze) => {
            var Ye = ks(ze.length);
            return z.set(ze, Ye), Ye;
          }
        };
        p = n["_" + p];
        var J = [], X = 0;
        if (O)
          for (var Ee = 0; Ee < O.length; Ee++) {
            var Ct = F[D[Ee]];
            Ct ? (X === 0 && (X = mm()), J[Ee] = Ct(O[Ee])) : J[Ee] = O[Ee];
          }
        return D = p(...J), D = (function(ze) {
          return X !== 0 && _m(X), g === "string" ? ze ? pt($, ze) : "" : g === "boolean" ? !!ze : ze;
        })(D);
      }, rv = {
        b: (p, g, D, O) => {
          pe(
            `Assertion failed: ${p ? pt($, p) : ""}, at: ` + [
              g ? g ? pt($, g) : "" : "unknown filename",
              D,
              O ? O ? pt($, O) : "" : "unknown function"
            ]
          );
        },
        q: () => {
          pe("");
        },
        n: () => {
          ws = false, Ss = 0;
        },
        j: function(p, g, D) {
          p = new Date(
            1e3 * (g + 2097152 >>> 0 < 4194305 - !!p ? (p >>> 0) + 4294967296 * g : NaN)
          ), j[D >> 2] = p.getSeconds(), j[D + 4 >> 2] = p.getMinutes(), j[D + 8 >> 2] = p.getHours(), j[D + 12 >> 2] = p.getDate(), j[D + 16 >> 2] = p.getMonth(), j[D + 20 >> 2] = p.getFullYear() - 1900, j[D + 24 >> 2] = p.getDay(), g = p.getFullYear(), j[D + 28 >> 2] = (g % 4 !== 0 || g % 100 === 0 && g % 400 !== 0 ? Yy : Jy)[p.getMonth()] + p.getDate() - 1 | 0, j[D + 36 >> 2] = -(60 * p.getTimezoneOffset()), g = new Date(p.getFullYear(), 6, 1).getTimezoneOffset();
          var O = new Date(p.getFullYear(), 0, 1).getTimezoneOffset();
          j[D + 32 >> 2] = (g != O && p.getTimezoneOffset() == Math.min(O, g)) | 0;
        },
        l: (p, g) => {
          if (hi[p] && (clearTimeout(hi[p].id), delete hi[p]), !g)
            return 0;
          var D = setTimeout(() => {
            delete hi[p], Xy(() => cm(p, um()));
          }, g);
          return hi[p] = {
            id: D,
            Na: g
          }, 0;
        },
        o: (p, g, D, O) => {
          var F = (/* @__PURE__ */ new Date()).getFullYear(), J = new Date(F, 0, 1).getTimezoneOffset();
          F = new Date(F, 6, 1).getTimezoneOffset(), K[p >> 2] = 60 * Math.max(J, F), j[g >> 2] = +(J != F), g = (X) => {
            var Ee = Math.abs(X);
            return `UTC${0 <= X ? "-" : "+"}${String(Math.floor(Ee / 60)).padStart(2, "0")}${String(Ee % 60).padStart(2, "0")}`;
          }, p = g(J), g = g(F), F < J ? (hr(p, D, 17), hr(g, O, 17)) : (hr(p, O, 17), hr(g, D, 17));
        },
        p: () => Date.now(),
        m: (p) => {
          var g = $.length;
          if (p >>>= 0, 2147483648 < p) return false;
          for (var D = 1; 4 >= D; D *= 2) {
            var O = g * (1 + 0.2 / D);
            O = Math.min(O, p + 100663296);
            e: {
              O = (Math.min(
                2147483648,
                65536 * Math.ceil(Math.max(p, O) / 65536)
              ) - w.buffer.byteLength + 65535) / 65536;
              try {
                w.grow(O), C();
                var F = 1;
                break e;
              } catch {
              }
              F = void 0;
            }
            if (F) return true;
          }
          return false;
        },
        f: (p, g) => {
          var D = 0;
          return lm().forEach((O, F) => {
            var J = g + D;
            for (F = K[p + 4 * F >> 2] = J, J = 0; J < O.length; ++J)
              z[F++] = O.charCodeAt(J);
            z[F] = 0, D += O.length + 1;
          }), 0;
        },
        g: (p, g) => {
          var D = lm();
          K[p >> 2] = D.length;
          var O = 0;
          return D.forEach((F) => O += F.length + 1), K[g >> 2] = O, 0;
        },
        e: () => 52,
        k: function() {
          return 70;
        },
        d: (p, g, D, O) => {
          for (var F = 0, J = 0; J < D; J++) {
            var X = K[g >> 2], Ee = K[g + 4 >> 2];
            g += 8;
            for (var Ct = 0; Ct < Ee; Ct++) {
              var ze = $[X + Ct], Ye = ev[p];
              ze === 0 || ze === 10 ? ((p === 1 ? _ : x)(pt(Ye, 0)), Ye.length = 0) : Ye.push(ze);
            }
            F += Ee;
          }
          return K[O >> 2] = F, 0;
        },
        a: w,
        c: sm,
        s: function(p, g, D, O, F) {
          return n.callbacks.callFunction(void 0, p, g, D, O, F);
        },
        r: function(p) {
          return n.callbacks.shouldInterrupt(void 0, p);
        },
        i: function(p, g, D) {
          return D = D ? pt($, D) : "", n.callbacks.loadModuleSource(void 0, p, g, D);
        },
        h: function(p, g, D, O) {
          return D = D ? pt($, D) : "", O = O ? pt($, O) : "", n.callbacks.normalizeModule(void 0, p, g, D, O);
        }
      }, M = (function() {
        function p(D) {
          return M = D.exports, P.unshift(M.t), ue--, n.monitorRunDependencies?.(ue), ue == 0 && (Ae !== null && (clearInterval(Ae), Ae = null), Z && (D = Z, Z = null, D())), M;
        }
        var g = {
          a: rv
        };
        if (ue++, n.monitorRunDependencies?.(ue), n.instantiateWasm)
          try {
            return n.instantiateWasm(g, p);
          } catch (D) {
            x(`Module.instantiateWasm callback failed with error: ${D}`), o(D);
          }
        return Je ||= n.locateFile ? gr("emscripten-module.wasm") ? "emscripten-module.wasm" : n.locateFile ? n.locateFile("emscripten-module.wasm", f) : f + "emscripten-module.wasm" : new URL("emscripten-module.wasm", import.meta.url).href, Qy(g, function(D) {
          p(D.instance);
        }).catch(o), {};
      })();
      n._malloc = (p) => (n._malloc = M.u)(p), n._QTS_Throw = (p, g) => (n._QTS_Throw = M.v)(p, g), n._QTS_NewError = (p) => (n._QTS_NewError = M.w)(p), n._QTS_RuntimeSetMemoryLimit = (p, g) => (n._QTS_RuntimeSetMemoryLimit = M.x)(p, g), n._QTS_RuntimeComputeMemoryUsage = (p, g) => (n._QTS_RuntimeComputeMemoryUsage = M.y)(p, g), n._QTS_RuntimeDumpMemoryUsage = (p) => (n._QTS_RuntimeDumpMemoryUsage = M.z)(p), n._QTS_RecoverableLeakCheck = () => (n._QTS_RecoverableLeakCheck = M.A)(), n._QTS_BuildIsSanitizeLeak = () => (n._QTS_BuildIsSanitizeLeak = M.B)(), n._QTS_RuntimeSetMaxStackSize = (p, g) => (n._QTS_RuntimeSetMaxStackSize = M.C)(p, g), n._QTS_GetUndefined = () => (n._QTS_GetUndefined = M.D)(), n._QTS_GetNull = () => (n._QTS_GetNull = M.E)(), n._QTS_GetFalse = () => (n._QTS_GetFalse = M.F)(), n._QTS_GetTrue = () => (n._QTS_GetTrue = M.G)(), n._QTS_NewRuntime = () => (n._QTS_NewRuntime = M.H)(), n._QTS_FreeRuntime = (p) => (n._QTS_FreeRuntime = M.I)(p), n._free = (p) => (n._free = M.J)(p), n._QTS_NewContext = (p, g) => (n._QTS_NewContext = M.K)(p, g), n._QTS_FreeContext = (p) => (n._QTS_FreeContext = M.L)(p), n._QTS_FreeValuePointer = (p, g) => (n._QTS_FreeValuePointer = M.M)(p, g), n._QTS_FreeValuePointerRuntime = (p, g) => (n._QTS_FreeValuePointerRuntime = M.N)(p, g), n._QTS_FreeVoidPointer = (p, g) => (n._QTS_FreeVoidPointer = M.O)(p, g), n._QTS_FreeCString = (p, g) => (n._QTS_FreeCString = M.P)(p, g), n._QTS_DupValuePointer = (p, g) => (n._QTS_DupValuePointer = M.Q)(p, g), n._QTS_NewObject = (p) => (n._QTS_NewObject = M.R)(p), n._QTS_NewObjectProto = (p, g) => (n._QTS_NewObjectProto = M.S)(p, g), n._QTS_NewArray = (p) => (n._QTS_NewArray = M.T)(p), n._QTS_NewArrayBuffer = (p, g, D) => (n._QTS_NewArrayBuffer = M.U)(p, g, D), n._QTS_NewFloat64 = (p, g) => (n._QTS_NewFloat64 = M.V)(p, g), n._QTS_GetFloat64 = (p, g) => (n._QTS_GetFloat64 = M.W)(p, g), n._QTS_NewString = (p, g) => (n._QTS_NewString = M.X)(p, g), n._QTS_GetString = (p, g) => (n._QTS_GetString = M.Y)(p, g), n._QTS_GetArrayBuffer = (p, g) => (n._QTS_GetArrayBuffer = M.Z)(p, g), n._QTS_GetArrayBufferLength = (p, g) => (n._QTS_GetArrayBufferLength = M._)(p, g), n._QTS_NewSymbol = (p, g, D) => (n._QTS_NewSymbol = M.$)(p, g, D), n._QTS_GetSymbolDescriptionOrKey = (p, g) => (n._QTS_GetSymbolDescriptionOrKey = M.aa)(p, g), n._QTS_IsGlobalSymbol = (p, g) => (n._QTS_IsGlobalSymbol = M.ba)(p, g), n._QTS_IsJobPending = (p) => (n._QTS_IsJobPending = M.ca)(p), n._QTS_ExecutePendingJob = (p, g, D) => (n._QTS_ExecutePendingJob = M.da)(p, g, D), n._QTS_GetProp = (p, g, D) => (n._QTS_GetProp = M.ea)(p, g, D), n._QTS_GetPropNumber = (p, g, D) => (n._QTS_GetPropNumber = M.fa)(p, g, D), n._QTS_SetProp = (p, g, D, O) => (n._QTS_SetProp = M.ga)(p, g, D, O), n._QTS_DefineProp = (p, g, D, O, F, J, X, Ee, Ct) => (n._QTS_DefineProp = M.ha)(p, g, D, O, F, J, X, Ee, Ct), n._QTS_GetOwnPropertyNames = (p, g, D, O, F) => (n._QTS_GetOwnPropertyNames = M.ia)(p, g, D, O, F), n._QTS_Call = (p, g, D, O, F) => (n._QTS_Call = M.ja)(p, g, D, O, F), n._QTS_ResolveException = (p, g) => (n._QTS_ResolveException = M.ka)(p, g), n._QTS_Dump = (p, g) => (n._QTS_Dump = M.la)(p, g), n._QTS_Eval = (p, g, D, O, F, J) => (n._QTS_Eval = M.ma)(p, g, D, O, F, J), n._QTS_GetModuleNamespace = (p, g) => (n._QTS_GetModuleNamespace = M.na)(p, g), n._QTS_Typeof = (p, g) => (n._QTS_Typeof = M.oa)(p, g), n._QTS_GetLength = (p, g, D) => (n._QTS_GetLength = M.pa)(p, g, D), n._QTS_IsEqual = (p, g, D, O) => (n._QTS_IsEqual = M.qa)(p, g, D, O), n._QTS_GetGlobalObject = (p) => (n._QTS_GetGlobalObject = M.ra)(p), n._QTS_NewPromiseCapability = (p, g) => (n._QTS_NewPromiseCapability = M.sa)(p, g), n._QTS_PromiseState = (p, g) => (n._QTS_PromiseState = M.ta)(p, g), n._QTS_PromiseResult = (p, g) => (n._QTS_PromiseResult = M.ua)(p, g), n._QTS_TestStringArg = (p) => (n._QTS_TestStringArg = M.va)(p), n._QTS_GetDebugLogEnabled = (p) => (n._QTS_GetDebugLogEnabled = M.wa)(p), n._QTS_SetDebugLogEnabled = (p, g) => (n._QTS_SetDebugLogEnabled = M.xa)(p, g), n._QTS_BuildIsDebug = () => (n._QTS_BuildIsDebug = M.ya)(), n._QTS_BuildIsAsyncify = () => (n._QTS_BuildIsAsyncify = M.za)(), n._QTS_NewFunction = (p, g, D) => (n._QTS_NewFunction = M.Aa)(p, g, D), n._QTS_ArgvGetJSValueConstPointer = (p, g) => (n._QTS_ArgvGetJSValueConstPointer = M.Ba)(p, g), n._QTS_RuntimeEnableInterruptHandler = (p) => (n._QTS_RuntimeEnableInterruptHandler = M.Ca)(p), n._QTS_RuntimeDisableInterruptHandler = (p) => (n._QTS_RuntimeDisableInterruptHandler = M.Da)(p), n._QTS_RuntimeEnableModuleLoader = (p, g) => (n._QTS_RuntimeEnableModuleLoader = M.Ea)(p, g), n._QTS_RuntimeDisableModuleLoader = (p) => (n._QTS_RuntimeDisableModuleLoader = M.Fa)(p), n._QTS_bjson_encode = (p, g) => (n._QTS_bjson_encode = M.Ga)(p, g), n._QTS_bjson_decode = (p, g) => (n._QTS_bjson_decode = M.Ha)(p, g);
      var cm = (p, g) => (cm = M.Ja)(p, g), _m = (p) => (_m = M.Ka)(p), ks = (p) => (ks = M.La)(p), mm = () => (mm = M.Ma)();
      n.cwrap = (p, g, D, O) => {
        var F = !D || D.every((J) => J === "number" || J === "boolean");
        return g !== "string" && F && !O ? n["_" + p] : (...J) => tv(p, g, D, J);
      }, n.UTF8ToString = (p, g) => p ? pt($, p, g) : "", n.stringToUTF8 = (p, g, D) => hr(p, g, D), n.lengthBytesUTF8 = dm;
      var jn;
      Z = function p() {
        jn || pm(), jn || (Z = p);
      };
      function pm() {
        function p() {
          if (!jn && (jn = true, n.calledRun = true, !y)) {
            if (vs(P), r(n), n.onRuntimeInitialized?.(), n.postRun)
              for (typeof n.postRun == "function" && (n.postRun = [n.postRun]); n.postRun.length; ) {
                var g = n.postRun.shift();
                G.unshift(g);
              }
            vs(G);
          }
        }
        if (!(0 < ue)) {
          if (n.preRun)
            for (typeof n.preRun == "function" && (n.preRun = [n.preRun]); n.preRun.length; )
              Y();
          vs(B), 0 < ue || (n.setStatus ? (n.setStatus("Running..."), setTimeout(function() {
            setTimeout(function() {
              n.setStatus("");
            }, 1), p();
          }, 1)) : p());
        }
      }
      if (n.preInit)
        for (typeof n.preInit == "function" && (n.preInit = [n.preInit]); 0 < n.preInit.length; )
          n.preInit.pop()();
      return pm(), i = a, i;
    };
  })(), yD = bD;
});
var H = ve(Ie(), 1);
function jt(e3) {
  var t = String(e3);
  if (t === "[object Object]")
    try {
      t = JSON.stringify(e3);
    } catch {
    }
  return t;
}
var lv = (function() {
  function e3() {
  }
  return e3.prototype.isSome = function() {
    return false;
  }, e3.prototype.isNone = function() {
    return true;
  }, e3.prototype[Symbol.iterator] = function() {
    return {
      next: function() {
        return {
          done: true,
          value: void 0
        };
      }
    };
  }, e3.prototype.unwrapOr = function(t) {
    return t;
  }, e3.prototype.expect = function(t) {
    throw new Error("".concat(t));
  }, e3.prototype.unwrap = function() {
    throw new Error("Tried to unwrap None");
  }, e3.prototype.map = function(t) {
    return this;
  }, e3.prototype.mapOr = function(t, i) {
    return t;
  }, e3.prototype.mapOrElse = function(t, i) {
    return t();
  }, e3.prototype.or = function(t) {
    return t;
  }, e3.prototype.orElse = function(t) {
    return t();
  }, e3.prototype.andThen = function(t) {
    return this;
  }, e3.prototype.toResult = function(t) {
    return I(t);
  }, e3.prototype.toString = function() {
    return "None";
  }, e3.prototype.toAsyncOption = function() {
    return new bi(A);
  }, e3;
})(), A = new lv();
Object.freeze(A);
var dv = (function() {
  function e3(t) {
    if (!(this instanceof e3)) return new e3(t);
    this.value = t;
  }
  return e3.prototype.isSome = function() {
    return true;
  }, e3.prototype.isNone = function() {
    return false;
  }, e3.prototype[Symbol.iterator] = function() {
    var t = Object(this.value);
    return Symbol.iterator in t ? t[Symbol.iterator]() : {
      next: function() {
        return {
          done: true,
          value: void 0
        };
      }
    };
  }, e3.prototype.unwrapOr = function(t) {
    return this.value;
  }, e3.prototype.expect = function(t) {
    return this.value;
  }, e3.prototype.unwrap = function() {
    return this.value;
  }, e3.prototype.map = function(t) {
    return q(t(this.value));
  }, e3.prototype.mapOr = function(t, i) {
    return i(this.value);
  }, e3.prototype.mapOrElse = function(t, i) {
    return i(this.value);
  }, e3.prototype.or = function(t) {
    return this;
  }, e3.prototype.orElse = function(t) {
    return this;
  }, e3.prototype.andThen = function(t) {
    return t(this.value);
  }, e3.prototype.toResult = function(t) {
    return L(this.value);
  }, e3.prototype.toAsyncOption = function() {
    return new bi(this);
  }, e3.prototype.safeUnwrap = function() {
    return this.value;
  }, e3.prototype.toString = function() {
    return "Some(".concat(jt(this.value), ")");
  }, e3.EMPTY = new e3(void 0), e3;
})(), q = dv, qn;
(function(e3) {
  function t() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    for (var a = [], u = 0, s = r; u < s.length; u++) {
      var l = s[u];
      if (l.isSome()) a.push(l.value);
      else return l;
    }
    return q(a);
  }
  e3.all = t;
  function i() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    for (var a = 0, u = r; a < u.length; a++) {
      var s = u[a];
      if (s.isSome()) return s;
    }
    return A;
  }
  e3.any = i;
  function n(r) {
    return r instanceof q || r === A;
  }
  e3.isOption = n;
})(qn || (qn = {}));
var br = function(e3, t, i) {
  if (i || arguments.length === 2)
    for (var n = 0, r = t.length, o; n < r; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e3.concat(o || Array.prototype.slice.call(t));
}, cv = (function() {
  function e3(t) {
    if (!(this instanceof e3)) return new e3(t);
    this.error = t;
    var i = new Error().stack.split(
      `
`
    ).slice(2);
    i && i.length > 0 && i[0].includes("ErrImpl") && i.shift(), this._stack = i.join(`
`);
  }
  return e3.prototype.isOk = function() {
    return false;
  }, e3.prototype.isErr = function() {
    return true;
  }, e3.prototype[Symbol.iterator] = function() {
    return {
      next: function() {
        return {
          done: true,
          value: void 0
        };
      }
    };
  }, e3.prototype.else = function(t) {
    return t;
  }, e3.prototype.unwrapOr = function(t) {
    return t;
  }, e3.prototype.expect = function(t) {
    throw new Error(
      "".concat(t, " - Error: ").concat(
        jt(this.error),
        `
`
      ).concat(this._stack),
      {
        cause: this.error
      }
    );
  }, e3.prototype.expectErr = function(t) {
    return this.error;
  }, e3.prototype.unwrap = function() {
    throw new Error(
      "Tried to unwrap Error: ".concat(
        jt(this.error),
        `
`
      ).concat(this._stack),
      {
        cause: this.error
      }
    );
  }, e3.prototype.unwrapErr = function() {
    return this.error;
  }, e3.prototype.map = function(t) {
    return this;
  }, e3.prototype.andThen = function(t) {
    return this;
  }, e3.prototype.mapErr = function(t) {
    return new I(t(this.error));
  }, e3.prototype.mapOr = function(t, i) {
    return t;
  }, e3.prototype.mapOrElse = function(t, i) {
    return t(this.error);
  }, e3.prototype.or = function(t) {
    return t;
  }, e3.prototype.orElse = function(t) {
    return t(this.error);
  }, e3.prototype.toOption = function() {
    return A;
  }, e3.prototype.toString = function() {
    return "Err(".concat(jt(this.error), ")");
  }, Object.defineProperty(e3.prototype, "stack", {
    get: function() {
      return "".concat(
        this,
        `
`
      ).concat(this._stack);
    },
    enumerable: false,
    configurable: true
  }), e3.prototype.toAsyncResult = function() {
    return new yi(this);
  }, e3.EMPTY = new e3(void 0), e3;
})();
var I = cv, _v = (function() {
  function e3(t) {
    if (!(this instanceof e3)) return new e3(t);
    this.value = t;
  }
  return e3.prototype.isOk = function() {
    return true;
  }, e3.prototype.isErr = function() {
    return false;
  }, e3.prototype[Symbol.iterator] = function() {
    var t = Object(this.value);
    return Symbol.iterator in t ? t[Symbol.iterator]() : {
      next: function() {
        return {
          done: true,
          value: void 0
        };
      }
    };
  }, e3.prototype.else = function(t) {
    return this.value;
  }, e3.prototype.unwrapOr = function(t) {
    return this.value;
  }, e3.prototype.expect = function(t) {
    return this.value;
  }, e3.prototype.expectErr = function(t) {
    throw new Error(t);
  }, e3.prototype.unwrap = function() {
    return this.value;
  }, e3.prototype.unwrapErr = function() {
    throw new Error("Tried to unwrap Ok: ".concat(jt(this.value)), {
      cause: this.value
    });
  }, e3.prototype.map = function(t) {
    return new L(t(this.value));
  }, e3.prototype.andThen = function(t) {
    return t(this.value);
  }, e3.prototype.mapErr = function(t) {
    return this;
  }, e3.prototype.mapOr = function(t, i) {
    return i(this.value);
  }, e3.prototype.mapOrElse = function(t, i) {
    return i(this.value);
  }, e3.prototype.or = function(t) {
    return this;
  }, e3.prototype.orElse = function(t) {
    return this;
  }, e3.prototype.toOption = function() {
    return q(this.value);
  }, e3.prototype.safeUnwrap = function() {
    return this.value;
  }, e3.prototype.toString = function() {
    return "Ok(".concat(jt(this.value), ")");
  }, e3.prototype.toAsyncResult = function() {
    return new yi(this);
  }, e3.EMPTY = new e3(void 0), e3;
})();
var L = _v, Un;
(function(e3) {
  function t(u) {
    for (var s = [], l = 1; l < arguments.length; l++) s[l - 1] = arguments[l];
    for (var d = u === void 0 ? [] : Array.isArray(u) ? u : br([u], s, true), c = [], f = 0, m = d; f < m.length; f++) {
      var h = m[f];
      if (h.isOk()) c.push(h.value);
      else return h;
    }
    return new L(c);
  }
  e3.all = t;
  function i(u) {
    for (var s = [], l = 1; l < arguments.length; l++) s[l - 1] = arguments[l];
    for (var d = u === void 0 ? [] : Array.isArray(u) ? u : br([u], s, true), c = [], f = 0, m = d; f < m.length; f++) {
      var h = m[f];
      if (h.isOk()) return h;
      c.push(h.error);
    }
    return new I(c);
  }
  e3.any = i;
  function n(u) {
    try {
      return new L(u());
    } catch (s) {
      return new I(s);
    }
  }
  e3.wrap = n;
  function r(u) {
    try {
      return u().then(function(s) {
        return new L(s);
      }).catch(function(s) {
        return new I(s);
      });
    } catch (s) {
      return Promise.resolve(new I(s));
    }
  }
  e3.wrapAsync = r;
  function o(u) {
    return u.reduce(
      function(s, l) {
        var d = s[0], c = s[1];
        return l.isOk() ? [br(br([], d, true), [l.value], false), c] : [d, br(br([], c, true), [l.error], false)];
      },
      [[], []]
    );
  }
  e3.partition = o;
  function a(u) {
    return u instanceof I || u instanceof L;
  }
  e3.isResult = a;
})(Un || (Un = {}));
var Fn = function(e3, t, i, n) {
  function r(o) {
    return o instanceof i ? o : new i(function(a) {
      a(o);
    });
  }
  return new (i || (i = Promise))(function(o, a) {
    function u(d) {
      try {
        l(n.next(d));
      } catch (c) {
        a(c);
      }
    }
    function s(d) {
      try {
        l(n.throw(d));
      } catch (c) {
        a(c);
      }
    }
    function l(d) {
      d.done ? o(d.value) : r(d.value).then(u, s);
    }
    l((n = n.apply(e3, t || [])).next());
  });
}, Ln = function(e3, t) {
  var i = {
    label: 0,
    sent: function() {
      if (o[0] & 1) throw o[1];
      return o[1];
    },
    trys: [],
    ops: []
  }, n, r, o, a;
  return a = {
    next: u(0),
    throw: u(1),
    return: u(2)
  }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(l) {
    return function(d) {
      return s([l, d]);
    };
  }
  function s(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, l[0] && (i = 0)), i; )
      try {
        if (n = 1, r && (o = l[0] & 2 ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done)
          return o;
        switch (r = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return i.label++, {
              value: l[1],
              done: false
            };
          case 5:
            i.label++, r = l[1], l = [0];
            continue;
          case 7:
            l = i.ops.pop(), i.trys.pop();
            continue;
          default:
            if (o = i.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              i = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              i.label = l[1];
              break;
            }
            if (l[0] === 6 && i.label < o[1]) {
              i.label = o[1], o = l;
              break;
            }
            if (o && i.label < o[2]) {
              i.label = o[2], i.ops.push(l);
              break;
            }
            o[2] && i.ops.pop(), i.trys.pop();
            continue;
        }
        l = t.call(e3, i);
      } catch (d) {
        l = [6, d], r = 0;
      } finally {
        n = o = 0;
      }
    if (l[0] & 5) throw l[1];
    return {
      value: l[0] ? l[1] : void 0,
      done: true
    };
  }
}, yi = (function() {
  function e3(t) {
    this.promise = Promise.resolve(t);
  }
  return e3.prototype.andThen = function(t) {
    var i = this;
    return this.thenInternal(function(n) {
      return Fn(i, void 0, void 0, function() {
        var r;
        return Ln(this, function(o) {
          return n.isErr() ? [2, n] : (r = t(n.value), [2, r instanceof e3 ? r.promise : r]);
        });
      });
    });
  }, e3.prototype.map = function(t) {
    var i = this;
    return this.thenInternal(function(n) {
      return Fn(i, void 0, void 0, function() {
        var r;
        return Ln(this, function(o) {
          switch (o.label) {
            case 0:
              return n.isErr() ? [2, n] : (r = L, [4, t(n.value)]);
            case 1:
              return [2, r.apply(void 0, [o.sent()])];
          }
        });
      });
    });
  }, e3.prototype.mapErr = function(t) {
    var i = this;
    return this.thenInternal(function(n) {
      return Fn(i, void 0, void 0, function() {
        var r;
        return Ln(this, function(o) {
          switch (o.label) {
            case 0:
              return n.isOk() ? [2, n] : (r = I, [4, t(n.error)]);
            case 1:
              return [2, r.apply(void 0, [o.sent()])];
          }
        });
      });
    });
  }, e3.prototype.or = function(t) {
    return this.orElse(function() {
      return t;
    });
  }, e3.prototype.orElse = function(t) {
    var i = this;
    return this.thenInternal(function(n) {
      return Fn(i, void 0, void 0, function() {
        var r;
        return Ln(this, function(o) {
          return n.isOk() ? [2, n] : (r = t(n.error), [2, r instanceof e3 ? r.promise : r]);
        });
      });
    });
  }, e3.prototype.toOption = function() {
    return new bi(
      this.promise.then(function(t) {
        return t.toOption();
      })
    );
  }, e3.prototype.thenInternal = function(t) {
    return new e3(this.promise.then(t));
  }, e3;
})();
var zs = function(e3, t, i, n) {
  function r(o) {
    return o instanceof i ? o : new i(function(a) {
      a(o);
    });
  }
  return new (i || (i = Promise))(function(o, a) {
    function u(d) {
      try {
        l(n.next(d));
      } catch (c) {
        a(c);
      }
    }
    function s(d) {
      try {
        l(n.throw(d));
      } catch (c) {
        a(c);
      }
    }
    function l(d) {
      d.done ? o(d.value) : r(d.value).then(u, s);
    }
    l((n = n.apply(e3, t || [])).next());
  });
}, Ts = function(e3, t) {
  var i = {
    label: 0,
    sent: function() {
      if (o[0] & 1) throw o[1];
      return o[1];
    },
    trys: [],
    ops: []
  }, n, r, o, a;
  return a = {
    next: u(0),
    throw: u(1),
    return: u(2)
  }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function u(l) {
    return function(d) {
      return s([l, d]);
    };
  }
  function s(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, l[0] && (i = 0)), i; )
      try {
        if (n = 1, r && (o = l[0] & 2 ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done)
          return o;
        switch (r = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return i.label++, {
              value: l[1],
              done: false
            };
          case 5:
            i.label++, r = l[1], l = [0];
            continue;
          case 7:
            l = i.ops.pop(), i.trys.pop();
            continue;
          default:
            if (o = i.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              i = 0;
              continue;
            }
            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
              i.label = l[1];
              break;
            }
            if (l[0] === 6 && i.label < o[1]) {
              i.label = o[1], o = l;
              break;
            }
            if (o && i.label < o[2]) {
              i.label = o[2], i.ops.push(l);
              break;
            }
            o[2] && i.ops.pop(), i.trys.pop();
            continue;
        }
        l = t.call(e3, i);
      } catch (d) {
        l = [6, d], r = 0;
      } finally {
        n = o = 0;
      }
    if (l[0] & 5) throw l[1];
    return {
      value: l[0] ? l[1] : void 0,
      done: true
    };
  }
}, bi = (function() {
  function e3(t) {
    this.promise = Promise.resolve(t);
  }
  return e3.prototype.andThen = function(t) {
    var i = this;
    return this.thenInternal(function(n) {
      return zs(i, void 0, void 0, function() {
        var r;
        return Ts(this, function(o) {
          return n.isNone() ? [2, n] : (r = t(n.value), [2, r instanceof e3 ? r.promise : r]);
        });
      });
    });
  }, e3.prototype.map = function(t) {
    var i = this;
    return this.thenInternal(function(n) {
      return zs(i, void 0, void 0, function() {
        var r;
        return Ts(this, function(o) {
          switch (o.label) {
            case 0:
              return n.isNone() ? [2, n] : (r = q, [4, t(n.value)]);
            case 1:
              return [2, r.apply(void 0, [o.sent()])];
          }
        });
      });
    });
  }, e3.prototype.or = function(t) {
    return this.orElse(function() {
      return t;
    });
  }, e3.prototype.orElse = function(t) {
    var i = this;
    return this.thenInternal(function(n) {
      return zs(i, void 0, void 0, function() {
        var r;
        return Ts(this, function(o) {
          return n.isSome() ? [2, n] : (r = t(), [2, r instanceof e3 ? r.promise : r]);
        });
      });
    });
  }, e3.prototype.toResult = function(t) {
    return new yi(
      this.promise.then(function(i) {
        return i.toResult(t);
      })
    );
  }, e3.prototype.thenInternal = function(t) {
    return new e3(this.promise.then(t));
  }, e3;
})();
function Te(e3) {
  if (e3.__serde_tag == "primitive") return e3.__serde_val;
  if (e3.__serde_tag == "object") {
    let t = {};
    for (let [i, n] of Object.entries(e3.__serde_val)) {
      let r = n;
      t[i] = Te(r);
    }
    return t;
  } else {
    if (e3.__serde_tag == "map")
      return new Map(e3.__serde_val.map(([t, i]) => [Te(t), Te(i)]));
    if (e3.__serde_tag == "set") return new Set(e3.__serde_val.map(Te));
    if (e3.__serde_tag == "url") return new URL(e3.__serde_val);
    if (e3.__serde_tag == "array") return e3.__serde_val.map(Te);
    if (e3.__serde_tag == "headers") return new Headers(e3.__serde_val);
    if (e3.__serde_tag == "regex")
      return new RegExp(e3.__serde_val[0], e3.__serde_val[1]);
    if (e3.__serde_tag == "some") return q(Te(e3.__serde_val));
    if (e3.__serde_tag == "none") return A;
    if (e3.__serde_tag == "ok") return L(Te(e3.__serde_val));
    if (e3.__serde_tag == "err") return I(Te(e3.__serde_val));
    throw new Error("Unreachable");
  }
}
function ae(e3) {
  if (typeof e3 == "string")
    return {
      __serde_tag: "primitive",
      __serde_val: e3
    };
  if (typeof e3 == "number")
    return {
      __serde_tag: "primitive",
      __serde_val: e3
    };
  if (typeof e3 == "boolean")
    return {
      __serde_tag: "primitive",
      __serde_val: e3
    };
  if (typeof e3 > "u")
    return {
      __serde_tag: "primitive",
      __serde_val: e3
    };
  if (e3 == null)
    return {
      __serde_tag: "primitive",
      __serde_val: e3
    };
  if (Array.isArray(e3))
    return {
      __serde_tag: "array",
      __serde_val: e3.map((t) => ae(t))
    };
  if (e3 instanceof URL)
    return {
      __serde_tag: "url",
      __serde_val: e3.href
    };
  if (e3 instanceof Headers) {
    let t = [];
    return e3.forEach((i, n) => {
      t.push([n, i]);
    }), {
      __serde_tag: "headers",
      __serde_val: t
    };
  } else {
    if (e3 instanceof Set)
      return {
        __serde_tag: "set",
        __serde_val: [...e3.values()].map(ae)
      };
    if (e3 instanceof Map)
      return {
        __serde_tag: "map",
        __serde_val: [...e3.entries()].map(([t, i]) => [ae(t), ae(i)])
      };
    if (e3 instanceof RegExp)
      return {
        __serde_tag: "regex",
        __serde_val: [e3.source, e3.flags]
      };
    if (qn.isOption(e3))
      return e3.isSome() ? {
        __serde_tag: "some",
        __serde_val: ae(e3.value)
      } : {
        __serde_tag: "none"
      };
    if (Un.isResult(e3))
      return e3.isOk() ? {
        __serde_tag: "ok",
        __serde_val: ae(e3.value)
      } : {
        __serde_tag: "err",
        __serde_val: ae(e3.error)
      };
    if (typeof e3 == "object") {
      let t = {};
      for (let [i, n] of Object.entries(e3)) t[i] = ae(n);
      return {
        __serde_tag: "object",
        __serde_val: t
      };
    } else throw new Error("Unreachable");
  }
}
function je(e3) {
  return Te(ae(e3));
}
var Ft = ve(Ie(), 1);
$e();
Ps();
var Is = new BroadcastChannel("worker_service");
function yr(e3) {
  let t = ht.FromServiceToWorker;
  Is.postMessage({
    msg: e3,
    channel: t
  });
}
function Jt(e3) {
  let t = (i) => {
    let n = i.data.msg;
    i.data.channel == ht.FromWorkerToService && e3(n);
  };
  return Is.addEventListener("message", t), () => {
    Is.removeEventListener("message", t);
  };
}
var ht = {
  FromInjectedToService: 0,
  FromContentToService: 1,
  FromServiceToWorker: 2,
  FromWorkerToService: 3,
  FromUntrustedInjectedToTrusted: 4,
  FromTrustedInjectedToUntrusted: 5,
  FromServiceToContent: 6,
  FromServiceToInjected: 7,
  FromServiceToService: 8
};
var Im = false;
async function ensureWorkerHost() {
  if (!qe) {
    Im || (Im = true, await Promise.resolve().then(() => (Pm(), pv)));
    return;
  }
  try {
    await chrome.offscreen.createDocument({
      url: "/factory/factory.html",
      reasons: [chrome.offscreen.Reason.WORKERS],
      justification: "Needed to create workers"
    });
  } catch (e3) {
    if ((e3 instanceof Error ? e3.message : e3) !== "Only a single offscreen document may be created.")
      throw e3;
  }
}
async function ensureDownloadWorkerReady() {
  await ensureWorkerHost(), await new Promise((e3, t) => {
    let i = setTimeout(() => {
      Vn() && t("Timed out waiting for the worker to start");
    }, 1e4), n = Jt((r) => {
      r.name == "is_ready_success" && (clearTimeout(i), e3(), n());
    });
    yr({
      name: "is_ready",
      data: null
    });
  });
}
$e();
function Ns(e3, t) {
  let i = new URLSearchParams();
  for (let [n, r] of e3) i.set(n, r);
  for (let [n, r] of t) i.set(n, r);
  return i.toString();
}
function le(e3, t) {
  try {
    if (e3) return q(new URL(e3, t));
  } catch {
  }
  return A;
}
function Oe(e3) {
  return e3 && e3 > 0 ? q(e3) : A;
}
function Rs(e3) {
  return e3 && e3 > 0 ? q(e3) : A;
}
function Cs(e3, t) {
  if (e3.size !== t.size) return false;
  let i = Array.from(e3), n = Array.from(t);
  return i.every((r, o) => r === n[o]);
}
var $m = ["mp4", "webm", "mkv"], Om = ["mp3", "m4a", "ogg"], Ms = [...$m, ...Om];
function Nm(e3) {
  return Ms.includes(e3);
}
function wi(e3) {
  return $m.includes(e3);
}
function Yt(e3) {
  return Om.includes(e3);
}
function Hn(e3, t) {
  return wi(e3) ? it(e3, t) : gv(e3);
}
function gv(e3) {
  if (e3 == "mp3") return "mp3";
  if (e3 == "m4a") return "mp3";
  if (e3 == "ogg") return "mp3";
  throw new Error("Unreachable");
}
function it(e3, t) {
  if (e3 == "mp4") return t;
  if (e3 == "webm") return "mkv";
  if (e3 == "mkv") return "mkv";
  throw new Error("Unreachable");
}
var hv = [
  {
    mime_reg: /(avc1|avc3).*/i,
    demuxer: "mp4",
    codec: "H264"
  },
  {
    mime_reg: /(hvc1|hev1|hevc|h265|h\.265).*/i,
    demuxer: "mp4",
    codec: "H265"
  },
  {
    mime_reg: /mp4v\.20.*/i,
    demuxer: "mp4",
    codec: "MP4V"
  },
  {
    mime_reg: /av0?1.*/i,
    demuxer: "webm",
    codec: "AV1"
  },
  {
    mime_reg: /vp0?8.*/i,
    demuxer: "webm",
    codec: "VP8"
  },
  {
    mime_reg: /vp0?9.*/i,
    demuxer: "webm",
    codec: "VP9"
  }
], bv = [
  {
    mime_reg: /(aac|mp4a.40).*/i,
    demuxer: "m4a",
    codec: "AAC"
  },
  {
    mime_reg: /(\.?mp3|mp4a\.69|mp4a\.6b).*/i,
    demuxer: "mp3",
    codec: "MP3"
  },
  {
    mime_reg: /(opus|(mp4a\.ad.*))/i,
    demuxer: "ogg",
    codec: "Opus"
  },
  {
    mime_reg: /vorbis/i,
    demuxer: "ogg",
    codec: "Vorbis"
  }
];
function Gn(e3) {
  for (let t of hv) if (t.mime_reg.test(e3)) return q(t.demuxer);
  return A;
}
function Rm(e3) {
  for (let t of bv) if (t.mime_reg.test(e3)) return q(t.demuxer);
  return A;
}
var Cm = [
  {
    regex: /(?:x-)?(?:pn-)?wave?/i,
    audio: "wav",
    video: "wav"
  },
  {
    regex: /(?:x-)?3gpp2?/i,
    audio: "mp3",
    video: "3gpp"
  },
  {
    regex: /(?:x-)?flac/i,
    audio: "flac",
    video: "flac"
  },
  {
    regex: /(?:x-)?flv/i,
    audio: "mp3",
    video: "flv"
  },
  {
    regex: /(?:x-)?m4a/i,
    audio: "m4a",
    video: "m4a"
  },
  {
    regex: /(?:x-)?m4v/i,
    audio: "mp3",
    video: "m4v"
  },
  {
    regex: /(?:x-)?matroska/i,
    audio: "mp3",
    video: "mkv"
  },
  {
    regex: /(?:x-)?mov/i,
    audio: "mp3",
    video: "mov"
  },
  {
    regex: /(?:x-)?mp2t/i,
    audio: "mp3",
    video: "mp2t"
  },
  {
    regex: /(?:x-)?mp4/i,
    audio: "mp3",
    video: "mp4"
  },
  {
    regex: /(?:x-)?mpeg/i,
    audio: "mp3",
    video: "mpeg"
  },
  {
    regex: /(?:x-)?mts/i,
    audio: "mp3",
    video: "mt2s"
  },
  {
    regex: /(?:x-)?msvideo/i,
    audio: "avi",
    video: "avi"
  },
  {
    regex: /(?:x-)?og./i,
    audio: "oga",
    video: "ogv"
  },
  {
    regex: /(?:x-)?webm/i,
    audio: "oga",
    video: "webm"
  },
  {
    regex: /(?:x-)?mkv/i,
    audio: "mp3",
    video: "mkv"
  },
  {
    regex: /(?:x-)?vorbis/i,
    audio: "oga",
    video: "ogv"
  }
], yv = /* @__PURE__ */ new Set([
  "3g2",
  "3gp",
  "aac",
  "ac3",
  "aiff",
  "amr",
  "ape",
  "asf",
  "au",
  "avi",
  "divx",
  "dts",
  "dv",
  "f4v",
  "flac",
  "flv",
  "h264",
  "m2t",
  "m2ts",
  "m2v",
  "m4a",
  "m4v",
  "mka",
  "mkv",
  "mov",
  "mp2",
  "mp3",
  "mp4",
  "mpe",
  "mpeg",
  "mpg",
  "mpv",
  "mts",
  "mxf",
  "oga",
  "ogg",
  "ogm",
  "ogv",
  "opus",
  "qt",
  "ra",
  "rm",
  "rmvb",
  "snd",
  "ts",
  "vob",
  "voc",
  "wav",
  "webm",
  "wma",
  "wmv",
  "wv",
  "y4m"
]);
function Mm(e3) {
  return yv.has(e3);
}
function vv(e3, t) {
  let o = wv(e3.size, t.size);
  if (o != 0) return o;
  let a = e3.bitrate.unwrapOr(0), u = t.bitrate.unwrapOr(0);
  return a > u ? -1 : a < u ? 1 : 0;
}
function wv(e3, t) {
  let o = e3.map((u) => u.height).unwrapOr(0), a = t.map((u) => u.height).unwrapOr(0);
  return o > a ? -1 : o < a ? 1 : 0;
}
function Wn(e3, t) {
  if (e3.preferred_entry.isSome() && e3.playlist[e3.preferred_entry.value])
    return e3.preferred_entry.value;
  if (t)
    for (let i of Ms) {
      let n = 0;
      for (let { quality: r, demuxer: o } of e3.playlist) {
        if (i == o && r.size.isSome() && r.size.value.height == t) return n;
        n++;
      }
    }
  else return 0;
  return 0;
}
function Kn(e3) {
  let t = e3.playlist.find(
    (n) => n.quality.size.isSome() && n.quality.size.value.height == 480
  ), i = e3.playlist.find(
    (n) => n.quality.size.isSome() && n.quality.size.value.height == 260
  );
  return t || i || e3.playlist[e3.playlist.length - 1];
}
function Qn(e3) {
  return [...e3.values()].sort((t, i) => vv(t.quality, i.quality));
}
function vr(e3) {
  return e3.length > 0;
}
function createInitialSessionState() {
  return {
    current_win_tab: {
      tab_id: A,
      win_id: A
    },
    notifications: /* @__PURE__ */ new Map(),
    discovered: /* @__PURE__ */ new Map(),
    downloading: /* @__PURE__ */ new Map(),
    transient_history: [],
    suspecting_saveas: false,
    advertize_premium: {
      advertize: false
    }
  };
}
var Yn = (function() {
  function e3() {
    this.listeners = {};
  }
  var t = e3.prototype;
  return t.on = function(n, r) {
    this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push(r);
  }, t.off = function(n, r) {
    if (!this.listeners[n]) return false;
    var o = this.listeners[n].indexOf(r);
    return this.listeners[n] = this.listeners[n].slice(0), this.listeners[n].splice(o, 1), o > -1;
  }, t.trigger = function(n) {
    var r = this.listeners[n];
    if (r)
      if (arguments.length === 2)
        for (var o = r.length, a = 0; a < o; ++a)
          r[a].call(this, arguments[1]);
      else
        for (var u = Array.prototype.slice.call(arguments, 1), s = r.length, l = 0; l < s; ++l)
          r[l].apply(this, u);
  }, t.dispose = function() {
    this.listeners = {};
  }, t.pipe = function(n) {
    this.on("data", function(r) {
      n.push(r);
    });
  }, e3;
})();
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var n in i) ({}).hasOwnProperty.call(i, n) && (e3[n] = i[n]);
    }
    return e3;
  }, Xt.apply(null, arguments);
}
var qs = ve(Xn()), Sv = function(t) {
  return qs.default.atob ? qs.default.atob(t) : Buffer.from(t, "base64").toString("binary");
};
function xi(e3) {
  for (var t = Sv(e3), i = new Uint8Array(t.length), n = 0; n < t.length; n++)
    i[n] = t.charCodeAt(n);
  return i;
}
var Ls = class extends Yn {
  constructor() {
    super(), this.buffer = "";
  }
  push(t) {
    let i;
    for (this.buffer += t, i = this.buffer.indexOf(`
`); i > -1; i = this.buffer.indexOf(`
`))
      this.trigger("data", this.buffer.substring(0, i)), this.buffer = this.buffer.substring(i + 1);
  }
}, xv = "	", Us = function(e3) {
  let t = /([0-9.]*)?@?([0-9.]*)?/.exec(e3 || ""), i = {};
  return t[1] && (i.length = parseInt(t[1], 10)), t[2] && (i.offset = parseInt(t[2], 10)), i;
}, Dv = function() {
  let i = '(?:[^=]*)=(?:"[^"]*"|[^,]*)';
  return new RegExp("(?:^|,)(" + i + ")");
}, Ne = function(e3) {
  let t = {};
  if (!e3) return t;
  let i = e3.split(Dv()), n = i.length, r;
  for (; n--; )
    i[n] !== "" && (r = /([^=]*)=(.*)/.exec(i[n]).slice(1), r[0] = r[0].replace(/^\s+|\s+$/g, ""), r[1] = r[1].replace(/^\s+|\s+$/g, ""), r[1] = r[1].replace(/^['"](.*)['"]$/g, "$1"), t[r[0]] = r[1]);
  return t;
}, qm = (e3) => {
  let t = e3.split("x"), i = {};
  return t[0] && (i.width = parseInt(t[0], 10)), t[1] && (i.height = parseInt(t[1], 10)), i;
}, Vs = class extends Yn {
  constructor() {
    super(), this.customParsers = [], this.tagMappers = [];
  }
  push(t) {
    let i, n;
    if (t = t.trim(), t.length === 0) return;
    if (t[0] !== "#") {
      this.trigger("data", {
        type: "uri",
        uri: t
      });
      return;
    }
    this.tagMappers.reduce(
      (o, a) => {
        let u = a(t);
        return u === t ? o : o.concat([u]);
      },
      [t]
    ).forEach((o) => {
      for (let a = 0; a < this.customParsers.length; a++)
        if (this.customParsers[a].call(this, o)) return;
      if (o.indexOf("#EXT") !== 0) {
        this.trigger("data", {
          type: "comment",
          text: o.slice(1)
        });
        return;
      }
      if (o = o.replace("\r", ""), i = /^#EXTM3U/.exec(o), i) {
        this.trigger("data", {
          type: "tag",
          tagType: "m3u"
        });
        return;
      }
      if (i = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "inf"
        }, i[1] && (n.duration = parseFloat(i[1])), i[2] && (n.title = i[2]), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "targetduration"
        }, i[1] && (n.duration = parseInt(i[1], 10)), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-VERSION:([0-9.]*)?/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "version"
        }, i[1] && (n.version = parseInt(i[1], 10)), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "media-sequence"
        }, i[1] && (n.number = parseInt(i[1], 10)), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "discontinuity-sequence"
        }, i[1] && (n.number = parseInt(i[1], 10)), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "playlist-type"
        }, i[1] && (n.playlistType = i[1]), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-BYTERANGE:(.*)?$/.exec(o), i) {
        n = Xt(Us(i[1]), {
          type: "tag",
          tagType: "byterange"
        }), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "allow-cache"
        }, i[1] && (n.allowed = !/NO/.test(i[1])), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-MAP:(.*)$/.exec(o), i) {
        if (n = {
          type: "tag",
          tagType: "map"
        }, i[1]) {
          let a = Ne(i[1]);
          a.URI && (n.uri = a.URI), a.BYTERANGE && (n.byterange = Us(a.BYTERANGE));
        }
        this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-STREAM-INF:(.*)$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "stream-inf"
        }, i[1] && (n.attributes = Ne(i[1]), n.attributes.RESOLUTION && (n.attributes.RESOLUTION = qm(n.attributes.RESOLUTION)), n.attributes.BANDWIDTH && (n.attributes.BANDWIDTH = parseInt(
          n.attributes.BANDWIDTH,
          10
        )), n.attributes["FRAME-RATE"] && (n.attributes["FRAME-RATE"] = parseFloat(
          n.attributes["FRAME-RATE"]
        )), n.attributes["PROGRAM-ID"] && (n.attributes["PROGRAM-ID"] = parseInt(
          n.attributes["PROGRAM-ID"],
          10
        ))), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-MEDIA:(.*)$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "media"
        }, i[1] && (n.attributes = Ne(i[1])), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-ENDLIST/.exec(o), i) {
        this.trigger("data", {
          type: "tag",
          tagType: "endlist"
        });
        return;
      }
      if (i = /^#EXT-X-DISCONTINUITY/.exec(o), i) {
        this.trigger("data", {
          type: "tag",
          tagType: "discontinuity"
        });
        return;
      }
      if (i = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "program-date-time"
        }, i[1] && (n.dateTimeString = i[1], n.dateTimeObject = new Date(i[1])), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-KEY:(.*)$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "key"
        }, i[1] && (n.attributes = Ne(i[1]), n.attributes.IV && (n.attributes.IV.substring(0, 2).toLowerCase() === "0x" && (n.attributes.IV = n.attributes.IV.substring(2)), n.attributes.IV = n.attributes.IV.match(/.{8}/g), n.attributes.IV[0] = parseInt(n.attributes.IV[0], 16), n.attributes.IV[1] = parseInt(n.attributes.IV[1], 16), n.attributes.IV[2] = parseInt(n.attributes.IV[2], 16), n.attributes.IV[3] = parseInt(n.attributes.IV[3], 16), n.attributes.IV = new Uint32Array(n.attributes.IV))), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-START:(.*)$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "start"
        }, i[1] && (n.attributes = Ne(i[1]), n.attributes["TIME-OFFSET"] = parseFloat(
          n.attributes["TIME-OFFSET"]
        ), n.attributes.PRECISE = /YES/.test(n.attributes.PRECISE)), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "cue-out-cont"
        }, i[1] ? n.data = i[1] : n.data = "", this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-CUE-OUT:(.*)?$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "cue-out"
        }, i[1] ? n.data = i[1] : n.data = "", this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-CUE-IN:?(.*)?$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "cue-in"
        }, i[1] ? n.data = i[1] : n.data = "", this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-SKIP:(.*)$/.exec(o), i && i[1]) {
        n = {
          type: "tag",
          tagType: "skip"
        }, n.attributes = Ne(i[1]), n.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (n.attributes["SKIPPED-SEGMENTS"] = parseInt(
          n.attributes["SKIPPED-SEGMENTS"],
          10
        )), n.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (n.attributes["RECENTLY-REMOVED-DATERANGES"] = n.attributes["RECENTLY-REMOVED-DATERANGES"].split(xv)), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-PART:(.*)$/.exec(o), i && i[1]) {
        n = {
          type: "tag",
          tagType: "part"
        }, n.attributes = Ne(i[1]), ["DURATION"].forEach(function(a) {
          n.attributes.hasOwnProperty(a) && (n.attributes[a] = parseFloat(n.attributes[a]));
        }), ["INDEPENDENT", "GAP"].forEach(function(a) {
          n.attributes.hasOwnProperty(a) && (n.attributes[a] = /YES/.test(n.attributes[a]));
        }), n.attributes.hasOwnProperty("BYTERANGE") && (n.attributes.byterange = Us(n.attributes.BYTERANGE)), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(o), i && i[1]) {
        n = {
          type: "tag",
          tagType: "server-control"
        }, n.attributes = Ne(i[1]), ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(
          function(a) {
            n.attributes.hasOwnProperty(a) && (n.attributes[a] = parseFloat(n.attributes[a]));
          }
        ), ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function(a) {
          n.attributes.hasOwnProperty(a) && (n.attributes[a] = /YES/.test(n.attributes[a]));
        }), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-PART-INF:(.*)$/.exec(o), i && i[1]) {
        n = {
          type: "tag",
          tagType: "part-inf"
        }, n.attributes = Ne(i[1]), ["PART-TARGET"].forEach(function(a) {
          n.attributes.hasOwnProperty(a) && (n.attributes[a] = parseFloat(n.attributes[a]));
        }), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(o), i && i[1]) {
        n = {
          type: "tag",
          tagType: "preload-hint"
        }, n.attributes = Ne(i[1]), ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function(a) {
          if (n.attributes.hasOwnProperty(a)) {
            n.attributes[a] = parseInt(n.attributes[a], 10);
            let u = a === "BYTERANGE-LENGTH" ? "length" : "offset";
            n.attributes.byterange = n.attributes.byterange || {}, n.attributes.byterange[u] = n.attributes[a], delete n.attributes[a];
          }
        }), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(o), i && i[1]) {
        n = {
          type: "tag",
          tagType: "rendition-report"
        }, n.attributes = Ne(i[1]), ["LAST-MSN", "LAST-PART"].forEach(function(a) {
          n.attributes.hasOwnProperty(a) && (n.attributes[a] = parseInt(n.attributes[a], 10));
        }), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-DATERANGE:(.*)$/.exec(o), i && i[1]) {
        n = {
          type: "tag",
          tagType: "daterange"
        }, n.attributes = Ne(i[1]), ["ID", "CLASS"].forEach(function(u) {
          n.attributes.hasOwnProperty(u) && (n.attributes[u] = String(n.attributes[u]));
        }), ["START-DATE", "END-DATE"].forEach(function(u) {
          n.attributes.hasOwnProperty(u) && (n.attributes[u] = new Date(n.attributes[u]));
        }), ["DURATION", "PLANNED-DURATION"].forEach(function(u) {
          n.attributes.hasOwnProperty(u) && (n.attributes[u] = parseFloat(n.attributes[u]));
        }), ["END-ON-NEXT"].forEach(function(u) {
          n.attributes.hasOwnProperty(u) && (n.attributes[u] = /YES/i.test(n.attributes[u]));
        }), ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function(u) {
          n.attributes.hasOwnProperty(u) && (n.attributes[u] = n.attributes[u].toString(16));
        });
        let a = /^X-([A-Z]+-)+[A-Z]+$/;
        for (let u in n.attributes) {
          if (!a.test(u)) continue;
          let s = /[0-9A-Fa-f]{6}/g.test(n.attributes[u]), l = /^\d+(\.\d+)?$/.test(n.attributes[u]);
          n.attributes[u] = s ? n.attributes[u].toString(16) : l ? parseFloat(n.attributes[u]) : String(n.attributes[u]);
        }
        this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(o), i) {
        this.trigger("data", {
          type: "tag",
          tagType: "independent-segments"
        });
        return;
      }
      if (i = /^#EXT-X-I-FRAMES-ONLY/.exec(o), i) {
        this.trigger("data", {
          type: "tag",
          tagType: "i-frames-only"
        });
        return;
      }
      if (i = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "content-steering"
        }, n.attributes = Ne(i[1]), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-I-FRAME-STREAM-INF:(.*)$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "i-frame-playlist"
        }, n.attributes = Ne(i[1]), n.attributes.URI && (n.uri = n.attributes.URI), n.attributes.BANDWIDTH && (n.attributes.BANDWIDTH = parseInt(n.attributes.BANDWIDTH, 10)), n.attributes.RESOLUTION && (n.attributes.RESOLUTION = qm(n.attributes.RESOLUTION)), n.attributes["AVERAGE-BANDWIDTH"] && (n.attributes["AVERAGE-BANDWIDTH"] = parseInt(
          n.attributes["AVERAGE-BANDWIDTH"],
          10
        )), n.attributes["FRAME-RATE"] && (n.attributes["FRAME-RATE"] = parseFloat(
          n.attributes["FRAME-RATE"]
        )), this.trigger("data", n);
        return;
      }
      if (i = /^#EXT-X-DEFINE:(.*)$/.exec(o), i) {
        n = {
          type: "tag",
          tagType: "define"
        }, n.attributes = Ne(i[1]), this.trigger("data", n);
        return;
      }
      this.trigger("data", {
        type: "tag",
        data: o.slice(4)
      });
    });
  }
  addParser({ expression: t, customType: i, dataParser: n, segment: r }) {
    typeof n != "function" && (n = (o) => o), this.customParsers.push((o) => {
      if (t.exec(o))
        return this.trigger("data", {
          type: "custom",
          data: n(o),
          customType: i,
          segment: r
        }), true;
    });
  }
  addTagMapper({ expression: t, map: i }) {
    let n = (r) => t.test(r) ? i(r) : r;
    this.tagMappers.push(n);
  }
}, kv = (e3) => e3.toLowerCase().replace(/-(\w)/g, (t) => t[1].toUpperCase()), Ut = function(e3) {
  let t = {};
  return Object.keys(e3).forEach(function(i) {
    t[kv(i)] = e3[i];
  }), t;
}, Fs = function(e3) {
  let { serverControl: t, targetDuration: i, partTargetDuration: n } = e3;
  if (!t) return;
  let r = "#EXT-X-SERVER-CONTROL", o = "holdBack", a = "partHoldBack", u = i && i * 3, s = n && n * 2;
  i && !t.hasOwnProperty(o) && (t[o] = u, this.trigger("info", {
    message: `${r} defaulting HOLD-BACK to targetDuration * 3 (${u}).`
  })), u && t[o] < u && (this.trigger("warn", {
    message: `${r} clamping HOLD-BACK (${t[o]}) to targetDuration * 3 (${u})`
  }), t[o] = u), n && !t.hasOwnProperty(a) && (t[a] = n * 3, this.trigger("info", {
    message: `${r} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${t[a]}).`
  })), n && t[a] < s && (this.trigger("warn", {
    message: `${r} clamping PART-HOLD-BACK (${t[a]}) to partTargetDuration * 2 (${s}).`
  }), t[a] = s);
}, wr = class extends Yn {
  constructor(t = {}) {
    super(), this.lineStream = new Ls(), this.parseStream = new Vs(), this.lineStream.pipe(this.parseStream), this.mainDefinitions = t.mainDefinitions || {}, this.params = new URL(t.uri, "https://a.com").searchParams, this.lastProgramDateTime = null;
    let i = this, n = [], r = {}, o, a, u = false, s = function() {
    }, l = {
      AUDIO: {},
      VIDEO: {},
      "CLOSED-CAPTIONS": {},
      SUBTITLES: {}
    }, d = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", c = 0;
    this.manifest = {
      allowCache: true,
      discontinuityStarts: [],
      dateRanges: [],
      iFramePlaylists: [],
      segments: []
    };
    let f = 0, m = 0, h = {};
    this.on("end", () => {
      r.uri || !r.parts && !r.preloadHints || (!r.map && o && (r.map = o), !r.key && a && (r.key = a), !r.timeline && typeof c == "number" && (r.timeline = c), this.manifest.preloadSegment = r);
    }), this.parseStream.on("data", function(_) {
      let x, E;
      if (i.manifest.definitions) {
        for (let w in i.manifest.definitions)
          if (_.uri && (_.uri = _.uri.replace(`{$${w}}`, i.manifest.definitions[w])), _.attributes)
            for (let y in _.attributes)
              typeof _.attributes[y] == "string" && (_.attributes[y] = _.attributes[y].replace(
                `{$${w}}`,
                i.manifest.definitions[w]
              ));
      }
      ({
        tag() {
          ({
            version() {
              _.version && (this.manifest.version = _.version);
            },
            "allow-cache"() {
              this.manifest.allowCache = _.allowed, "allowed" in _ || (this.trigger("info", {
                message: "defaulting allowCache to YES"
              }), this.manifest.allowCache = true);
            },
            byterange() {
              let w = {};
              "length" in _ && (r.byterange = w, w.length = _.length, "offset" in _ || (_.offset = f)), "offset" in _ && (r.byterange = w, w.offset = _.offset), f = w.offset + w.length;
            },
            endlist() {
              this.manifest.endList = true;
            },
            inf() {
              "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                message: "defaulting media sequence to zero"
              })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                message: "defaulting discontinuity sequence to zero"
              })), _.title && (r.title = _.title), _.duration > 0 && (r.duration = _.duration), _.duration === 0 && (r.duration = 0.01, this.trigger("info", {
                message: "updating zero segment duration to a small value"
              })), this.manifest.segments = n;
            },
            key() {
              if (!_.attributes) {
                this.trigger("warn", {
                  message: "ignoring key declaration without attribute list"
                });
                return;
              }
              if (_.attributes.METHOD === "NONE") {
                a = null;
                return;
              }
              if (!_.attributes.URI) {
                this.trigger("warn", {
                  message: "ignoring key declaration without URI"
                });
                return;
              }
              if (_.attributes.KEYFORMAT === "com.apple.streamingkeydelivery") {
                this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.apple.fps.1_0"] = {
                  attributes: _.attributes
                };
                return;
              }
              if (_.attributes.KEYFORMAT === "com.microsoft.playready") {
                this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.microsoft.playready"] = {
                  uri: _.attributes.URI
                };
                return;
              }
              if (_.attributes.KEYFORMAT === d) {
                if ([
                  "SAMPLE-AES",
                  "SAMPLE-AES-CTR",
                  "SAMPLE-AES-CENC"
                ].indexOf(_.attributes.METHOD) === -1) {
                  this.trigger("warn", {
                    message: "invalid key method provided for Widevine"
                  });
                  return;
                }
                if (_.attributes.METHOD === "SAMPLE-AES-CENC" && this.trigger("warn", {
                  message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
                }), _.attributes.URI.substring(0, 23) !== "data:text/plain;base64,") {
                  this.trigger("warn", {
                    message: "invalid key URI provided for Widevine"
                  });
                  return;
                }
                if (!(_.attributes.KEYID && _.attributes.KEYID.substring(0, 2) === "0x")) {
                  this.trigger("warn", {
                    message: "invalid key ID provided for Widevine"
                  });
                  return;
                }
                this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.widevine.alpha"] = {
                  attributes: {
                    schemeIdUri: _.attributes.KEYFORMAT,
                    keyId: _.attributes.KEYID.substring(2)
                  },
                  pssh: xi(_.attributes.URI.split(",")[1])
                };
                return;
              }
              _.attributes.METHOD || this.trigger("warn", {
                message: "defaulting key method to AES-128"
              }), a = {
                method: _.attributes.METHOD || "AES-128",
                uri: _.attributes.URI
              }, typeof _.attributes.IV < "u" && (a.iv = _.attributes.IV);
            },
            "media-sequence"() {
              if (!isFinite(_.number)) {
                this.trigger("warn", {
                  message: "ignoring invalid media sequence: " + _.number
                });
                return;
              }
              this.manifest.mediaSequence = _.number;
            },
            "discontinuity-sequence"() {
              if (!isFinite(_.number)) {
                this.trigger("warn", {
                  message: "ignoring invalid discontinuity sequence: " + _.number
                });
                return;
              }
              this.manifest.discontinuitySequence = _.number, c = _.number;
            },
            "playlist-type"() {
              if (!/VOD|EVENT/.test(_.playlistType)) {
                this.trigger("warn", {
                  message: "ignoring unknown playlist type: " + _.playlist
                });
                return;
              }
              this.manifest.playlistType = _.playlistType;
            },
            map() {
              o = {}, _.uri && (o.uri = _.uri), _.byterange && (o.byterange = _.byterange), a && (o.key = a);
            },
            "stream-inf"() {
              if (this.manifest.playlists = n, this.manifest.mediaGroups = this.manifest.mediaGroups || l, !_.attributes) {
                this.trigger("warn", {
                  message: "ignoring empty stream-inf attributes"
                });
                return;
              }
              r.attributes || (r.attributes = {}), Xt(r.attributes, _.attributes);
            },
            media() {
              if (this.manifest.mediaGroups = this.manifest.mediaGroups || l, !(_.attributes && _.attributes.TYPE && _.attributes["GROUP-ID"] && _.attributes.NAME)) {
                this.trigger("warn", {
                  message: "ignoring incomplete or missing media group"
                });
                return;
              }
              let w = this.manifest.mediaGroups[_.attributes.TYPE];
              w[_.attributes["GROUP-ID"]] = w[_.attributes["GROUP-ID"]] || {}, x = w[_.attributes["GROUP-ID"]], E = {
                default: /yes/i.test(_.attributes.DEFAULT)
              }, E.default ? E.autoselect = true : E.autoselect = /yes/i.test(_.attributes.AUTOSELECT), _.attributes.LANGUAGE && (E.language = _.attributes.LANGUAGE), _.attributes.URI && (E.uri = _.attributes.URI), _.attributes["INSTREAM-ID"] && (E.instreamId = _.attributes["INSTREAM-ID"]), _.attributes.CHARACTERISTICS && (E.characteristics = _.attributes.CHARACTERISTICS), _.attributes.FORCED && (E.forced = /yes/i.test(_.attributes.FORCED)), x[_.attributes.NAME] = E;
            },
            discontinuity() {
              c += 1, r.discontinuity = true, this.manifest.discontinuityStarts.push(n.length);
            },
            "program-date-time"() {
              typeof this.manifest.dateTimeString > "u" && (this.manifest.dateTimeString = _.dateTimeString, this.manifest.dateTimeObject = _.dateTimeObject), r.dateTimeString = _.dateTimeString, r.dateTimeObject = _.dateTimeObject;
              let { lastProgramDateTime: w } = this;
              this.lastProgramDateTime = new Date(
                _.dateTimeString
              ).getTime(), w === null && this.manifest.segments.reduceRight(
                (y, v) => (v.programDateTime = y - v.duration * 1e3, v.programDateTime),
                this.lastProgramDateTime
              );
            },
            targetduration() {
              if (!isFinite(_.duration) || _.duration < 0) {
                this.trigger("warn", {
                  message: "ignoring invalid target duration: " + _.duration
                });
                return;
              }
              this.manifest.targetDuration = _.duration, Fs.call(this, this.manifest);
            },
            start() {
              if (!_.attributes || isNaN(_.attributes["TIME-OFFSET"])) {
                this.trigger("warn", {
                  message: "ignoring start declaration without appropriate attribute list"
                });
                return;
              }
              this.manifest.start = {
                timeOffset: _.attributes["TIME-OFFSET"],
                precise: _.attributes.PRECISE
              };
            },
            "cue-out"() {
              r.cueOut = _.data;
            },
            "cue-out-cont"() {
              r.cueOutCont = _.data;
            },
            "cue-in"() {
              r.cueIn = _.data;
            },
            skip() {
              this.manifest.skip = Ut(_.attributes), this.warnOnMissingAttributes_(
                "#EXT-X-SKIP",
                _.attributes,
                ["SKIPPED-SEGMENTS"]
              );
            },
            part() {
              u = true;
              let w = this.manifest.segments.length, y = Ut(_.attributes);
              r.parts = r.parts || [], r.parts.push(y), y.byterange && (y.byterange.hasOwnProperty("offset") || (y.byterange.offset = m), m = y.byterange.offset + y.byterange.length);
              let v = r.parts.length - 1;
              this.warnOnMissingAttributes_(
                `#EXT-X-PART #${v} for segment #${w}`,
                _.attributes,
                ["URI", "DURATION"]
              ), this.manifest.renditionReports && this.manifest.renditionReports.forEach((z, $) => {
                z.hasOwnProperty("lastPart") || this.trigger("warn", {
                  message: `#EXT-X-RENDITION-REPORT #${$} lacks required attribute(s): LAST-PART`
                });
              });
            },
            "server-control"() {
              let w = this.manifest.serverControl = Ut(_.attributes);
              w.hasOwnProperty("canBlockReload") || (w.canBlockReload = false, this.trigger("info", {
                message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"
              })), Fs.call(this, this.manifest), w.canSkipDateranges && !w.hasOwnProperty("canSkipUntil") && this.trigger("warn", {
                message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"
              });
            },
            "preload-hint"() {
              let w = this.manifest.segments.length, y = Ut(_.attributes), v = y.type && y.type === "PART";
              r.preloadHints = r.preloadHints || [], r.preloadHints.push(y), y.byterange && (y.byterange.hasOwnProperty("offset") || (y.byterange.offset = v ? m : 0, v && (m = y.byterange.offset + y.byterange.length)));
              let z = r.preloadHints.length - 1;
              if (this.warnOnMissingAttributes_(
                `#EXT-X-PRELOAD-HINT #${z} for segment #${w}`,
                _.attributes,
                ["TYPE", "URI"]
              ), !!y.type)
                for (let $ = 0; $ < r.preloadHints.length - 1; $++) {
                  let j = r.preloadHints[$];
                  j.type && j.type === y.type && this.trigger("warn", {
                    message: `#EXT-X-PRELOAD-HINT #${z} for segment #${w} has the same TYPE ${y.type} as preload hint #${$}`
                  });
                }
            },
            "rendition-report"() {
              let w = Ut(_.attributes);
              this.manifest.renditionReports = this.manifest.renditionReports || [], this.manifest.renditionReports.push(w);
              let y = this.manifest.renditionReports.length - 1, v = ["LAST-MSN", "URI"];
              u && v.push("LAST-PART"), this.warnOnMissingAttributes_(
                `#EXT-X-RENDITION-REPORT #${y}`,
                _.attributes,
                v
              );
            },
            "part-inf"() {
              this.manifest.partInf = Ut(_.attributes), this.warnOnMissingAttributes_(
                "#EXT-X-PART-INF",
                _.attributes,
                ["PART-TARGET"]
              ), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), Fs.call(this, this.manifest);
            },
            daterange() {
              this.manifest.dateRanges.push(Ut(_.attributes));
              let w = this.manifest.dateRanges.length - 1;
              this.warnOnMissingAttributes_(
                `#EXT-X-DATERANGE #${w}`,
                _.attributes,
                ["ID", "START-DATE"]
              );
              let y = this.manifest.dateRanges[w];
              y.endDate && y.startDate && new Date(y.endDate) < new Date(y.startDate) && this.trigger("warn", {
                message: "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE"
              }), y.duration && y.duration < 0 && this.trigger("warn", {
                message: "EXT-X-DATERANGE DURATION must not be negative"
              }), y.plannedDuration && y.plannedDuration < 0 && this.trigger("warn", {
                message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative"
              });
              let v = !!y.endOnNext;
              if (v && !y.class && this.trigger("warn", {
                message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute"
              }), v && (y.duration || y.endDate) && this.trigger("warn", {
                message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes"
              }), y.duration && y.endDate) {
                let $ = y.startDate.getTime() + y.duration * 1e3;
                this.manifest.dateRanges[w].endDate = new Date($);
              }
              if (!h[y.id]) h[y.id] = y;
              else {
                for (let $ in h[y.id])
                  if (y[$] && JSON.stringify(h[y.id][$]) !== JSON.stringify(y[$])) {
                    this.trigger("warn", {
                      message: "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values"
                    });
                    break;
                  }
                let z = this.manifest.dateRanges.findIndex(
                  ($) => $.id === y.id
                );
                this.manifest.dateRanges[z] = Xt(
                  this.manifest.dateRanges[z],
                  y
                ), h[y.id] = Xt(h[y.id], y), this.manifest.dateRanges.pop();
              }
            },
            "independent-segments"() {
              this.manifest.independentSegments = true;
            },
            "i-frames-only"() {
              this.manifest.iFramesOnly = true, this.requiredCompatibilityversion(
                this.manifest.version,
                4
              );
            },
            "content-steering"() {
              this.manifest.contentSteering = Ut(_.attributes), this.warnOnMissingAttributes_(
                "#EXT-X-CONTENT-STEERING",
                _.attributes,
                ["SERVER-URI"]
              );
            },
            define() {
              this.manifest.definitions = this.manifest.definitions || {};
              let w = (y, v) => {
                if (y in this.manifest.definitions) {
                  this.trigger("error", {
                    message: `EXT-X-DEFINE: Duplicate name ${y}`
                  });
                  return;
                }
                this.manifest.definitions[y] = v;
              };
              if ("QUERYPARAM" in _.attributes) {
                if ("NAME" in _.attributes || "IMPORT" in _.attributes) {
                  this.trigger("error", {
                    message: "EXT-X-DEFINE: Invalid attributes"
                  });
                  return;
                }
                let y = this.params.get(_.attributes.QUERYPARAM);
                if (!y) {
                  this.trigger("error", {
                    message: `EXT-X-DEFINE: No query param ${_.attributes.QUERYPARAM}`
                  });
                  return;
                }
                w(_.attributes.QUERYPARAM, decodeURIComponent(y));
                return;
              }
              if ("NAME" in _.attributes) {
                if ("IMPORT" in _.attributes) {
                  this.trigger("error", {
                    message: "EXT-X-DEFINE: Invalid attributes"
                  });
                  return;
                }
                if (!("VALUE" in _.attributes) || typeof _.attributes.VALUE != "string") {
                  this.trigger("error", {
                    message: `EXT-X-DEFINE: No value for ${_.attributes.NAME}`
                  });
                  return;
                }
                w(_.attributes.NAME, _.attributes.VALUE);
                return;
              }
              if ("IMPORT" in _.attributes) {
                if (!this.mainDefinitions[_.attributes.IMPORT]) {
                  this.trigger("error", {
                    message: `EXT-X-DEFINE: No value ${_.attributes.IMPORT} to import, or IMPORT used on main playlist`
                  });
                  return;
                }
                w(
                  _.attributes.IMPORT,
                  this.mainDefinitions[_.attributes.IMPORT]
                );
                return;
              }
              this.trigger("error", {
                message: "EXT-X-DEFINE: No attribute"
              });
            },
            "i-frame-playlist"() {
              this.manifest.iFramePlaylists.push({
                attributes: _.attributes,
                uri: _.uri,
                timeline: c
              }), this.warnOnMissingAttributes_(
                "#EXT-X-I-FRAME-STREAM-INF",
                _.attributes,
                ["BANDWIDTH", "URI"]
              );
            }
          }[_.tagType] || s).call(i);
        },
        uri() {
          r.uri = _.uri, n.push(r), this.manifest.targetDuration && !("duration" in r) && (this.trigger("warn", {
            message: "defaulting segment duration to the target duration"
          }), r.duration = this.manifest.targetDuration), a && (r.key = a), r.timeline = c, o && (r.map = o), m = 0, this.lastProgramDateTime !== null && (r.programDateTime = this.lastProgramDateTime, this.lastProgramDateTime += r.duration * 1e3), r = {};
        },
        comment() {
        },
        custom() {
          _.segment ? (r.custom = r.custom || {}, r.custom[_.customType] = _.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[_.customType] = _.data);
        }
      })[_.type].call(i);
    });
  }
  requiredCompatibilityversion(t, i) {
    (t < i || !t) && this.trigger("warn", {
      message: `manifest must be at least version ${i}`
    });
  }
  warnOnMissingAttributes_(t, i, n) {
    let r = [];
    n.forEach(function(o) {
      i.hasOwnProperty(o) || r.push(o);
    }), r.length && this.trigger("warn", {
      message: `${t} lacks required attribute(s): ${r.join(", ")}`
    });
  }
  push(t) {
    this.lineStream.push(t);
  }
  end() {
    this.lineStream.push(`
`), this.manifest.dateRanges.length && this.lastProgramDateTime === null && this.trigger("warn", {
      message: "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag"
    }), this.lastProgramDateTime = null, this.trigger("end");
  }
  addParser(t) {
    this.parseStream.addParser(t);
  }
  addTagMapper(t) {
    this.parseStream.addTagMapper(t);
  }
};
var Av = /* @__PURE__ */ new Set([
  "com.microsoft.playready",
  "com.apple.streamingkeydelivery",
  "com.widevine.alpha"
]);
function eo(e3) {
  return Object.keys(e3).some((t) => Av.has(t));
}
var Di = [
  "am",
  "ar",
  "ar-EG",
  "ar-SA",
  "ar-MA",
  "ha",
  "he",
  "mt",
  "om",
  "so",
  "ti",
  "ceb",
  "fil",
  "id",
  "jv",
  "mg",
  "mi",
  "ms",
  "haw",
  "sm",
  "su",
  "to",
  "kn",
  "ml",
  "ta",
  "te",
  "af",
  "da",
  "de",
  "de-AT",
  "de-CH",
  "en",
  "en-AU",
  "en-CA",
  "en-GB",
  "en-IE",
  "en-IN",
  "en-NZ",
  "en-US",
  "en-ZA",
  "fy",
  "is",
  "lb",
  "nb",
  "nl",
  "nl-BE",
  "nn",
  "sv",
  "yi",
  "as",
  "bn",
  "bn-IN",
  "fa",
  "fa-AF",
  "gu",
  "hi",
  "ks",
  "ku",
  "mr",
  "ne",
  "or",
  "pa",
  "ps",
  "sd",
  "si",
  "tg",
  "ur",
  "ca",
  "co",
  "es",
  "es-419",
  "es-PE",
  "es-CR",
  "es-HN",
  "es-AR",
  "es-CL",
  "es-CO",
  "es-ES",
  "es-MX",
  "fr",
  "fr-BE",
  "fr-CA",
  "fr-CH",
  "gl",
  "ht",
  "it",
  "it-CH",
  "oc",
  "pt",
  "pt-BR",
  "pt-PT",
  "rm",
  "ro",
  "sc",
  "wa",
  "br",
  "cy",
  "ga",
  "gd",
  "gv",
  "kw",
  "be",
  "bg",
  "bs",
  "cs",
  "hr",
  "mk",
  "pl",
  "ru",
  "sk",
  "sl",
  "sr-Cyrl",
  "sr-Latn",
  "uk",
  "lt",
  "lv",
  "et",
  "fi",
  "hu",
  "se",
  "az",
  "az-Latn",
  "az-Cyrl",
  "ba",
  "cv",
  "kk",
  "ky",
  "tk",
  "tr",
  "tt",
  "ug",
  "uz",
  "uz-Latn",
  "uz-Cyrl",
  "mn",
  "mn-Cyrl",
  "mn-Mong",
  "bo",
  "dz",
  "my",
  "yue",
  "zh",
  "zh-Hans",
  "zh-CN",
  "zh-SG",
  "zh-Hant",
  "zh-HK",
  "zh-TW",
  "ja",
  "ko",
  "km",
  "lo",
  "th",
  "vi",
  "hy",
  "ka",
  "ak",
  "ee",
  "ig",
  "kg",
  "ki",
  "ln",
  "lg",
  "nd",
  "ny",
  "rn",
  "rw",
  "sn",
  "st",
  "sw",
  "tn",
  "ts",
  "tw",
  "wo",
  "xh",
  "yo",
  "zu",
  "lu",
  "el",
  "sq",
  "eu",
  "ay",
  "gn",
  "nv",
  "qu",
  "mul"
], Ev = new Set(Di);
function bt(e3) {
  return e3 ? Ev.has(e3) : false;
}
function Bs() {
  let e3 = /* @__PURE__ */ new Set();
  for (let t of navigator.languages) {
    let i = t;
    if ((i == "tl" || i.startsWith("tl-")) && (i = "fil"), bt(i)) {
      e3.add(i);
      continue;
    }
    let n = i.split("-")[0];
    bt(n) && e3.add(n);
  }
  return e3.add("en"), e3;
}
function yt(e3, t, i) {
  let n = /* @__PURE__ */ new Map();
  for (let o of e3) {
    let a = i(o);
    n.set(a, o);
    let u = a.split("-")[0];
    u && n.set(u, o);
  }
  let r;
  for (let o of t) if (r = n.get(o), r) return q(r);
  for (let o of t) {
    let a = o.split("-")[0];
    if (!a) continue;
    let u = n.get(a);
    if (u) return q(u);
    for (let [s, l] of n) if (s.split("-")[0] === a) return q(l);
  }
  return A;
}
var ik = (() => {
  let e3 = (t) => {
    try {
      return new Intl.DisplayNames([navigator.language], {
        type: "language",
        fallback: "none"
      }).of(t) ?? t;
    } catch {
      return t;
    }
  };
  return new Map(
    Di.map((t) => ({
      code: t,
      native_name: e3(t)
    })).sort((t, i) => t.native_name.localeCompare(i.native_name)).map((t) => [t.code, t])
  );
})();
qt();
function Sr(e3) {
  let t;
  try {
    let n = new wr();
    n.push(e3), n.end(), t = n.manifest;
  } catch {
  }
  if (!t) return I("parse error");
  let i = t.segments;
  return !Array.isArray(i) || i.length == 0 ? I("not a valid m3u8") : L(t);
}
function to(e3) {
  let t = e3.segments;
  return !Array.isArray(t) || t.length == 0 ? I("not a valid m3u8") : t.every((n) => {
    let o = n.uri.split(/[?#]/)[0];
    return o ? o.substring(o.lastIndexOf(".") + 1).toLowerCase().match(/vtt|srt|webvtt|ttml/) : false;
  }) ? I("subtitle playlist") : L(e3);
}
function zv(e3) {
  let t = new Date((/* @__PURE__ */ new Date()).getTime() - 6e5);
  return !e3.dateTimeObject && !e3.programDateTime ? false : typeof e3.dateTimeObject == "object" ? e3.dateTimeObject > t : typeof e3.programDateTime == "number" ? e3.programDateTime > t.getTime() : false;
}
function ro(e3) {
  if (!Array.isArray(e3.segments) || e3.segments.some((n) => typeof n.duration != "number"))
    return "unknown";
  let t = e3.segments[e3.segments.length - 1];
  return t && zv(t) ? "live" : e3.segments.reduce(
    (n, r) => (typeof r.duration == "number" && (n += r.duration), n),
    0
  );
}
function Um(e3, t, i, n = false, r = false) {
  let o;
  try {
    let l = new wr();
    l.push(e3), l.end(), o = l.manifest;
  } catch {
  }
  if (!o) return I("parse error");
  if (!o.playlists) return I("Not a master M3U8");
  let a = o.playlists, u = o.mediaGroups.AUDIO ?? {}, s = [];
  for (let l of a) {
    if (typeof l.uri != "string") continue;
    let d = "mp4";
    if (l.attributes.CODECS) {
      let w = Gn(l.attributes.CODECS);
      if (w.isNone()) continue;
      d = w.value;
    }
    if (!("FRAME-RATE" in l.attributes) && "RESOLUTION" in l.attributes, l.attributes["VIDEO-RANGE"] && l.attributes["VIDEO-RANGE"] == "PQ")
      continue;
    let c = le(l.uri, t.href);
    if (c.isNone()) continue;
    let f = A, m = A;
    if (l.attributes.AUDIO) {
      let w = u[l.attributes.AUDIO];
      if (w) {
        if (i.isSome()) {
          let y = yt(Object.values(w), i.value, (v) => v.language ?? "");
          if (y.isSome())
            f = le(y.value.uri, t.href), m = bt(y.value.language) ? q(y.value.language) : A;
          else {
            let v = Object.values(w).find((z) => z.default);
            f = v ? le(v.uri, t.href) : A;
          }
        } else
          for (let y of Object.values(w))
            if (y.uri && (f = le(y.uri, t.href)), y.default) break;
      }
    }
    let h = A, _ = A;
    l.attributes.RESOLUTION && (h = q({
      height: l.attributes.RESOLUTION.height,
      width: l.attributes.RESOLUTION.width
    })), l.attributes.BANDWIDTH && (_ = q(l.attributes.BANDWIDTH));
    let x = {
      size: h,
      bitrate: _
    }, E = c.value;
    if (n ? E.search = Ns(E.searchParams, t.searchParams) : r && (E.search = ""), f.isSome()) {
      let w = f.value;
      n ? w.search = Ns(E.searchParams, t.searchParams) : r && (w.search = ""), s.push({
        demuxer: d,
        quality: x,
        av: {
          video: E,
          audio: w
        },
        audio_language: m
      });
    } else
      s.push({
        demuxer: d,
        quality: x,
        av: {
          video: E,
          audio: false
        },
        audio_language: m
      });
  }
  return s = Qn(s), vr(s) ? L(s) : I("Empty playlist");
}
function Fm(e3, t) {
  let i;
  try {
    let s = new wr();
    s.push(e3), s.end(), i = s.manifest;
  } catch {
  }
  if (!i) return I("parse error");
  if (!i.mediaGroups) return I("No media groups candidate");
  let n = [], r = i.mediaGroups?.SUBTITLES ?? {}, o = i.mediaGroups?.["CLOSED-CAPTIONS"] ?? {}, a = [
    ...Object.values(r).flatMap((s) => Object.values(s)),
    ...Object.values(o).flatMap((s) => Object.values(s))
  ];
  if (a.length == 0) return I("Empty subtitles");
  let u;
  for (let s of a)
    u = le(s.uri), bt(s.language) && u.isSome() && n.push({
      hash: `subtitle_hash_${he(u.value.href)}`,
      initiator: t,
      language: s.language,
      url: u.value,
      type: "http"
    });
  return vr(n) ? L(q(n)) : I("no subtitles");
}
function io(e3) {
  return e3.contentProtection ? eo(e3.contentProtection) : false;
}
var Hs = ve(Ie(), 1), Lm = [/^Sec-/i, /^Cookie$/i, /^Date$/i, /^Origin$/i, /^Referer$/i], Vm = [
  /Range/i,
  /^Proxy-/i,
  /^User-Agent$/i,
  /^Accept-Charset$/i,
  /^Accept-Encoding$/i,
  /^Access-Control-Request-Headers$/i,
  /^Access-Control-Request-Method$/i,
  /^Connection$/i,
  /^Content-Length$/i,
  /^DNT$/i,
  /^Expect$/i,
  /^Keep-Alive$/i,
  /^Permissions-Policy$/i,
  /^TE$/i,
  /^Trailer$/i,
  /^Transfer-Encoding$/i,
  /^Upgrade$/i,
  /^Via$/i,
  /^Host/i
], Tv = 750;
function no(e3) {
  return new URL(".", e3).href + "*";
}
async function Bm(e3) {
  let t = no(e3.url);
  return await Gs([t], e3.headers);
}
async function Hm(e3) {
  let t = Gm(e3.headers);
  if (t.entries().next().done) return L([]);
  e3.will_use_jsfetch ? Zm(e3.headers) : Zs(e3.headers);
  let i = e3.will_use_jsfetch ? e3.headers : t, n = [];
  n.push(e3.url), e3.strategy == "m3u8_audio_video_two_sources" && n.push(e3.url_audio), (e3.strategy == "m3u8_audio_video_one_source" || e3.strategy == "m3u8_audio_video_two_sources") && e3.subtitles.isSome() && n.push(e3.subtitles.value.url);
  let r = [], o = /* @__PURE__ */ new Set();
  for (let u of n) {
    let s = new URL(".", u).href + "*", l = await oo([s], i);
    r = [...r, ...l];
    let d;
    try {
      d = await fetch(u, {
        headers: e3.headers
      });
    } catch (_) {
      return console.warn(
        `Unable to fetch m3u8 for creating headers. Continuing anyways. Error: ${_}`
      ), L(r);
    }
    if (!d.ok)
      return console.warn(
        `Unable to fetch m3u8 for creating headers. Continuing anyways. Received status: ${d.statusText}`
      ), L(r);
    if (!d.body)
      return console.warn(
        "Unable to fetch m3u8 for creating headers. No body. Continuing anyways."
      ), L(r);
    let c = await d.text(), f = Sr(c);
    if (f.isErr())
      return console.warn(
        `Error when parsing manifest to create headers. Continuing anyways. Error: ${f.error}`
      ), L(r);
    let m = f.value;
    if (!Array.isArray(m.segments))
      return console.warn(
        `Expected segments array when parsing m3u8: ${u}. Continuing anyways`
      ), L(r);
    if (!m.segments || m.segments.length == 0) return L(r);
    let h = Tv / n.length;
    for (let _ of m.segments) {
      let x = _.uri;
      if (x) {
        let y = new URL(x, u), v = no(y);
        if (o.add(v), o.size >= h) break;
      }
      let E = _.map;
      if (E && "uri" in E) {
        let y = E.uri, v = new URL(y, u), z = no(v);
        if (o.size < h && (o.add(z), o.size >= h)) break;
      }
      let w = _.key;
      if (w && "uri" in w) {
        let y = w.uri, v = new URL(y, u), z = no(v);
        if (o.size < h && (o.add(z), o.size >= h)) break;
      }
    }
  }
  let a = [];
  return a = await oo([...o], i), L([...r, ...a]);
}
function Gs(e3, t) {
  return Zm(t), oo(e3, t);
}
function vt(e3, t) {
  let i = Gm(t);
  return oo(e3, i);
}
async function oo(e3, t) {
  let i = [];
  if (t.forEach((o, a) => {
    i.push({
      operation: "set",
      header: a,
      value: o
    });
  }), i.length == 0)
    return [];
  let n = [], r = [];
  for (let o of e3) {
    let a = Math.ceil(Math.random() * 1e8);
    n.push(a);
    let u = {
      id: a,
      priority: 1,
      action: {
        type: "modifyHeaders",
        requestHeaders: i
      },
      condition: {
        urlFilter: o,
        resourceTypes: ["xmlhttprequest"]
      }
    };
    r.push(u);
  }
  try {
    await Hs.default.declarativeNetRequest.updateSessionRules({
      addRules: r
    });
  } catch (o) {
    return console.error("Error setting headers for urls"), console.error(o.toString()), [];
  }
  return n;
}
async function wt(e3) {
  if (e3.length)
    try {
      await Hs.default.declarativeNetRequest.updateSessionRules({
        removeRuleIds: e3
      });
    } catch (t) {
      console.error(`Error when removing header rules: ${t.toString()}`);
    }
}
function Gm(e3) {
  let t = new Headers();
  return e3.forEach((i, n) => {
    for (let r of Lm) n.match(r) && t.set(n, i);
  }), t;
}
function Zm(e3) {
  let t = [];
  for (let i of e3.keys())
    for (let n of Vm)
      if (i.match(n)) {
        t.push(i);
        break;
      }
  for (let i of t) e3.delete(i);
}
function Zs(e3) {
  let t = [];
  for (let i of e3.keys()) {
    for (let n of Vm)
      if (i.match(n)) {
        t.push(i);
        break;
      }
    for (let n of Lm)
      if (i.match(n)) {
        t.push(i);
        break;
      }
  }
  for (let i of t) e3.delete(i);
}
function Ws(e3) {
  return e3.user_abort ? "User abort" : e3.e4XX_5XX_failure ? `HTTP error. Status: ${e3.status}.` : e3.percentage_incomplete ? "Incomplete percentage." : `Error. ${e3.message}.`;
}
function xr() {
  return {
    user_abort: true,
    e4XX_5XX_failure: false,
    other_failure: false,
    percentage_incomplete: false
  };
}
function ao(e3) {
  return {
    user_abort: false,
    e4XX_5XX_failure: false,
    percentage_incomplete: false,
    other_failure: true,
    message: e3
  };
}
function Wm(e3) {
  return {
    user_abort: false,
    e4XX_5XX_failure: true,
    percentage_incomplete: false,
    other_failure: false,
    status: e3
  };
}
var Js = ve(Ie(), 1);
function Pv(e3, t) {
  let i = e3.slice(0, t).split(/\r\n|\n|\r/g);
  return [i.length, i.pop().length + 1];
}
function Iv(e3, t, i) {
  let n = e3.split(/\r\n|\n|\r/g), r = "", o = (Math.log10(t + 1) | 0) + 1;
  for (let a = t - 1; a <= t + 1; a++) {
    let u = n[a - 1];
    u && (r += a.toString().padEnd(o, " "), r += ":  ", r += u, r += `
`, a === t && (r += " ".repeat(o + i + 2), r += `^
`));
  }
  return r;
}
var W = class extends Error {
  line;
  column;
  codeblock;
  constructor(t, i) {
    let [n, r] = Pv(i.toml, i.ptr), o = Iv(i.toml, n, r);
    super(
      `Invalid TOML document: ${t}

${o}`,
      i
    ), this.line = n, this.column = r, this.codeblock = o;
  }
};
function $v(e3, t) {
  let i = 0;
  for (; e3[t - ++i] === "\\"; ) ;
  return --i && i % 2;
}
function so(e3, t = 0, i = e3.length) {
  let n = e3.indexOf(
    `
`,
    t
  );
  return e3[n - 1] === "\r" && n--, n <= i ? n : -1;
}
function Dr(e3, t) {
  for (let i = t; i < e3.length; i++) {
    let n = e3[i];
    if (n === `
`)
      return i;
    if (n === "\r" && e3[i + 1] === `
`)
      return i + 1;
    if (n < " " && n !== "	" || n === "\x7F")
      throw new W("control characters are not allowed in comments", {
        toml: e3,
        ptr: t
      });
  }
  return e3.length;
}
function Ge(e3, t, i, n) {
  let r;
  for (; ; ) {
    for (; (r = e3[t]) === " " || r === "	" || !i && (r === `
` || r === "\r" && e3[t + 1] === `
`); )
      t++;
    if (n || r !== "#") break;
    t = Dr(e3, t);
  }
  return t;
}
function Km(e3, t, i, n, r = false) {
  if (!n) return t = so(e3, t), t < 0 ? e3.length : t;
  for (let o = t; o < e3.length; o++) {
    let a = e3[o];
    if (a === "#") o = so(e3, o);
    else {
      if (a === i) return o + 1;
      if (a === n || r && (a === `
` || a === "\r" && e3[o + 1] === `
`))
        return o;
    }
  }
  throw new W("cannot find end of structure", {
    toml: e3,
    ptr: t
  });
}
function uo(e3, t) {
  let i = e3[t], n = i === e3[t + 1] && e3[t + 1] === e3[t + 2] ? e3.slice(t, t + 3) : i;
  t += n.length - 1;
  do
    t = e3.indexOf(n, ++t);
  while (t > -1 && i !== "'" && $v(e3, t));
  return t > -1 && (t += n.length, n.length > 1 && (e3[t] === i && t++, e3[t] === i && t++)), t;
}
var Ov = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i, ki = class e extends Date {
  #t = false;
  #r = false;
  #e = null;
  constructor(t) {
    let i = true, n = true, r = "Z";
    if (typeof t == "string") {
      let o = t.match(Ov);
      o ? (o[1] || (i = false, t = `0000-01-01T${t}`), n = !!o[2], n && t[10] === " " && (t = t.replace(" ", "T")), o[2] && +o[2] > 23 ? t = "" : (r = o[3] || null, t = t.toUpperCase(), !r && n && (t += "Z"))) : t = "";
    }
    super(t), isNaN(this.getTime()) || (this.#t = i, this.#r = n, this.#e = r);
  }
  isDateTime() {
    return this.#t && this.#r;
  }
  isLocal() {
    return !this.#t || !this.#r || !this.#e;
  }
  isDate() {
    return this.#t && !this.#r;
  }
  isTime() {
    return this.#r && !this.#t;
  }
  isValid() {
    return this.#t || this.#r;
  }
  toISOString() {
    let t = super.toISOString();
    if (this.isDate()) return t.slice(0, 10);
    if (this.isTime()) return t.slice(11, 23);
    if (this.#e === null) return t.slice(0, -1);
    if (this.#e === "Z") return t;
    let i = +this.#e.slice(1, 3) * 60 + +this.#e.slice(4, 6);
    return i = this.#e[0] === "-" ? i : -i, new Date(this.getTime() - i * 6e4).toISOString().slice(0, -1) + this.#e;
  }
  static wrapAsOffsetDateTime(t, i = "Z") {
    let n = new e(t);
    return n.#e = i, n;
  }
  static wrapAsLocalDateTime(t) {
    let i = new e(t);
    return i.#e = null, i;
  }
  static wrapAsLocalDate(t) {
    let i = new e(t);
    return i.#r = false, i.#e = null, i;
  }
  static wrapAsLocalTime(t) {
    let i = new e(t);
    return i.#t = false, i.#e = null, i;
  }
};
var Nv = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/, Rv = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/, Cv = /^[+-]?0[0-9_]/, Mv = /^[0-9a-f]{2,8}$/i, Qm = {
  b: "\b",
  t: "	",
  n: `
`,
  f: "\f",
  r: "\r",
  e: "\x1B",
  '"': '"',
  "\\": "\\"
};
function lo(e3, t = 0, i = e3.length) {
  let n = e3[t] === "'", r = e3[t++] === e3[t] && e3[t] === e3[t + 1];
  r && (i -= 2, e3[t += 2] === "\r" && t++, e3[t] === `
` && t++);
  let o = 0, a, u = "", s = t;
  for (; t < i - 1; ) {
    let l = e3[t++];
    if (l === `
` || l === "\r" && e3[t] === `
`) {
      if (!r)
        throw new W("newlines are not allowed in strings", {
          toml: e3,
          ptr: t - 1
        });
    } else if (l < " " && l !== "	" || l === "\x7F")
      throw new W("control characters are not allowed in strings", {
        toml: e3,
        ptr: t - 1
      });
    if (a) {
      if (a = false, l === "x" || l === "u" || l === "U") {
        let d = e3.slice(t, t += l === "x" ? 2 : l === "u" ? 4 : 8);
        if (!Mv.test(d))
          throw new W("invalid unicode escape", {
            toml: e3,
            ptr: o
          });
        try {
          u += String.fromCodePoint(parseInt(d, 16));
        } catch {
          throw new W("invalid unicode escape", {
            toml: e3,
            ptr: o
          });
        }
      } else if (r && (l === `
` || l === " " || l === "	" || l === "\r")) {
        if (t = Ge(e3, t - 1, true), e3[t] !== `
` && e3[t] !== "\r")
          throw new W(
            "invalid escape: only line-ending whitespace may be escaped",
            {
              toml: e3,
              ptr: o
            }
          );
        t = Ge(e3, t);
      } else if (l in Qm) u += Qm[l];
      else
        throw new W("unrecognized escape sequence", {
          toml: e3,
          ptr: o
        });
      s = t;
    } else !n && l === "\\" && (o = t - 1, a = true, u += e3.slice(s, o));
  }
  return u + e3.slice(s, i - 1);
}
function Jm(e3, t, i, n) {
  if (e3 === "true") return true;
  if (e3 === "false") return false;
  if (e3 === "-inf") return -1 / 0;
  if (e3 === "inf" || e3 === "+inf") return 1 / 0;
  if (e3 === "nan" || e3 === "+nan" || e3 === "-nan") return NaN;
  if (e3 === "-0") return n ? 0n : 0;
  let r = Nv.test(e3);
  if (r || Rv.test(e3)) {
    if (Cv.test(e3))
      throw new W("leading zeroes are not allowed", {
        toml: t,
        ptr: i
      });
    e3 = e3.replace(/_/g, "");
    let a = +e3;
    if (isNaN(a))
      throw new W("invalid number", {
        toml: t,
        ptr: i
      });
    if (r) {
      if ((r = !Number.isSafeInteger(a)) && !n)
        throw new W("integer value cannot be represented losslessly", {
          toml: t,
          ptr: i
        });
      (r || n === true) && (a = BigInt(e3));
    }
    return a;
  }
  let o = new ki(e3);
  if (!o.isValid())
    throw new W("invalid value", {
      toml: t,
      ptr: i
    });
  return o;
}
function jv(e3, t, i) {
  let n = e3.slice(t, i), r = n.indexOf("#");
  return r > -1 && (Dr(e3, r), n = n.slice(0, r)), [n.trimEnd(), r];
}
function Ai(e3, t, i, n, r) {
  if (n === 0)
    throw new W("document contains excessively nested structures. aborting.", {
      toml: e3,
      ptr: t
    });
  let o = e3[t];
  if (o === "[" || o === "{") {
    let [s, l] = o === "[" ? Xm(e3, t, n, r) : Ym(e3, t, n, r);
    if (i) {
      if (l = Ge(e3, l), e3[l] === ",") l++;
      else if (e3[l] !== i)
        throw new W("expected comma or end of structure", {
          toml: e3,
          ptr: l
        });
    }
    return [s, l];
  }
  let a;
  if (o === '"' || o === "'") {
    a = uo(e3, t);
    let s = lo(e3, t, a);
    if (i) {
      if (a = Ge(e3, a), e3[a] && e3[a] !== "," && e3[a] !== i && e3[a] !== `
` && e3[a] !== "\r")
        throw new W("unexpected character encountered", {
          toml: e3,
          ptr: a
        });
      a += +(e3[a] === ",");
    }
    return [s, a];
  }
  a = Km(e3, t, ",", i);
  let u = jv(e3, t, a - +(e3[a - 1] === ","));
  if (!u[0])
    throw new W("incomplete key-value declaration: no value specified", {
      toml: e3,
      ptr: t
    });
  return i && u[1] > -1 && (a = Ge(e3, t + u[1]), a += +(e3[a] === ",")), [Jm(u[0], e3, t, r), a];
}
var qv = /^[a-zA-Z0-9-_]+[ \t]*$/;
function co(e3, t, i = "=") {
  let n = t - 1, r = [], o = e3.indexOf(i, t);
  if (o < 0)
    throw new W("incomplete key-value: cannot find end of key", {
      toml: e3,
      ptr: t
    });
  do {
    let a = e3[t = ++n];
    if (a !== " " && a !== "	")
      if (a === '"' || a === "'") {
        if (a === e3[t + 1] && a === e3[t + 2])
          throw new W("multiline strings are not allowed in keys", {
            toml: e3,
            ptr: t
          });
        let u = uo(e3, t);
        if (u < 0)
          throw new W("unfinished string encountered", {
            toml: e3,
            ptr: t
          });
        n = e3.indexOf(".", u);
        let s = e3.slice(u, n < 0 || n > o ? o : n), l = so(s);
        if (l > -1)
          throw new W("newlines are not allowed in keys", {
            toml: e3,
            ptr: t + n + l
          });
        if (s.trimStart())
          throw new W("found extra tokens after the string part", {
            toml: e3,
            ptr: u
          });
        if (o < u && (o = e3.indexOf(i, u), o < 0))
          throw new W("incomplete key-value: cannot find end of key", {
            toml: e3,
            ptr: t
          });
        r.push(lo(e3, t, u));
      } else {
        n = e3.indexOf(".", t);
        let u = e3.slice(t, n < 0 || n > o ? o : n);
        if (!qv.test(u))
          throw new W(
            "only letter, numbers, dashes and underscores are allowed in keys",
            {
              toml: e3,
              ptr: t
            }
          );
        r.push(u.trimEnd());
      }
  } while (n + 1 && n < o);
  return [r, Ge(e3, o + 1, true, true)];
}
function Ym(e3, t, i, n) {
  let r = {}, o = /* @__PURE__ */ new Set(), a;
  for (t++; (a = e3[t++]) !== "}" && a; ) {
    if (a === ",")
      throw new W("expected value, found comma", {
        toml: e3,
        ptr: t - 1
      });
    if (a === "#") t = Dr(e3, t);
    else if (a !== " " && a !== "	" && a !== `
` && a !== "\r") {
      let u, s = r, l = false, [d, c] = co(e3, t - 1);
      for (let h = 0; h < d.length; h++) {
        if (h && (s = l ? s[u] : s[u] = {}), u = d[h], (l = Object.hasOwn(s, u)) && (typeof s[u] != "object" || o.has(s[u])))
          throw new W("trying to redefine an already defined value", {
            toml: e3,
            ptr: t
          });
        !l && u === "__proto__" && Object.defineProperty(s, u, {
          enumerable: true,
          configurable: true,
          writable: true
        });
      }
      if (l)
        throw new W("trying to redefine an already defined value", {
          toml: e3,
          ptr: t
        });
      let [f, m] = Ai(e3, c, "}", i - 1, n);
      o.add(f), s[u] = f, t = m;
    }
  }
  if (!a)
    throw new W("unfinished table encountered", {
      toml: e3,
      ptr: t
    });
  return [r, t];
}
function Xm(e3, t, i, n) {
  let r = [], o;
  for (t++; (o = e3[t++]) !== "]" && o; ) {
    if (o === ",")
      throw new W("expected value, found comma", {
        toml: e3,
        ptr: t - 1
      });
    if (o === "#") t = Dr(e3, t);
    else if (o !== " " && o !== "	" && o !== `
` && o !== "\r") {
      let a = Ai(e3, t - 1, "]", i - 1, n);
      r.push(a[0]), t = a[1];
    }
  }
  if (!o)
    throw new W("unfinished array encountered", {
      toml: e3,
      ptr: t
    });
  return [r, t];
}
function ep(e3, t, i, n) {
  let r = t, o = i, a, u = false, s;
  for (let l = 0; l < e3.length; l++) {
    if (l) {
      if (r = u ? r[a] : r[a] = {}, o = (s = o[a]).c, n === 0 && (s.t === 1 || s.t === 2))
        return null;
      if (s.t === 2) {
        let d = r.length - 1;
        r = r[d], o = o[d].c;
      }
    }
    if (a = e3[l], (u = Object.hasOwn(r, a)) && o[a]?.t === 0 && o[a]?.d)
      return null;
    u || (a === "__proto__" && (Object.defineProperty(r, a, {
      enumerable: true,
      configurable: true,
      writable: true
    }), Object.defineProperty(o, a, {
      enumerable: true,
      configurable: true,
      writable: true
    })), o[a] = {
      t: l < e3.length - 1 && n === 2 ? 3 : n,
      d: false,
      i: 0,
      c: {}
    });
  }
  if (s = o[a], s.t !== n && !(n === 1 && s.t === 3) || (n === 2 && (s.d || (s.d = true, r[a] = []), r[a].push(r = {}), s.c[s.i++] = s = {
    t: 1,
    d: false,
    i: 0,
    c: {}
  }), s.d))
    return null;
  if (s.d = true, n === 1) r = u ? r[a] : r[a] = {};
  else if (n === 0 && u) return null;
  return [a, r, s.c];
}
function Ks(e3, { maxDepth: t = 1e3, integersAsBigInt: i } = {}) {
  let n = {}, r = {}, o = n, a = r;
  for (let u = Ge(e3, 0); u < e3.length; ) {
    if (e3[u] === "[") {
      let s = e3[++u] === "[", l = co(e3, u += +s, "]");
      if (s) {
        if (e3[l[1] - 1] !== "]")
          throw new W("expected end of table declaration", {
            toml: e3,
            ptr: l[1] - 1
          });
        l[1]++;
      }
      let d = ep(l[0], n, r, s ? 2 : 1);
      if (!d)
        throw new W("trying to redefine an already defined table or value", {
          toml: e3,
          ptr: u
        });
      a = d[2], o = d[1], u = l[1];
    } else {
      let s = co(e3, u), l = ep(s[0], o, a, 0);
      if (!l)
        throw new W("trying to redefine an already defined table or value", {
          toml: e3,
          ptr: u
        });
      let d = Ai(e3, s[1], void 0, t, i);
      l[1][l[0]] = d[0], u = d[1];
    }
    if (u = Ge(e3, u, true), e3[u] && e3[u] !== `
` && e3[u] !== "\r")
      throw new W(
        "each key-value declaration must be followed by an end-of-line",
        {
          toml: e3,
          ptr: u
        }
      );
    u = Ge(e3, u);
  }
  return n;
}
var er = "";
function tp(e3, t) {
  return e3 + t;
}
async function rp(e3, t, i, n, r) {
  if (i.isSome()) {
    for (let o of t)
      if (i.value.href.includes(o.url)) {
        let a = null;
        if (o.selector) {
          let s = o.selector;
          try {
            let l = {
              tabId: r
            };
            a = (await Js.default.scripting.executeScript({
              target: l,
              world: Js.default.scripting.ExecutionWorld.MAIN,
              args: [s],
              func: (c) => {
                let f = document.querySelector(c);
                return f?.content || f?.textContent;
              }
            }))[0]?.result || null;
          } catch {
          }
        }
        let u = [];
        if (o.replace)
          for (let s of o.replace) {
            let l = s.to, d = s.from;
            try {
              d = new RegExp(d, "gi");
            } catch {
            }
            u.push({
              from: d,
              to: l
            });
          }
        return {
          template: o.template,
          selector: a,
          max_length: o.max_length || e3.max_length,
          replace: u,
          subdir: tp(n, o.subdir || er),
          force_doc_title: o.force_doc_title === true
        };
      }
  }
  return {
    template: e3.template,
    selector: null,
    max_length: e3.max_length,
    subdir: n,
    force_doc_title: e3.force_doc_title === true,
    replace: []
  };
}
function Fv(e3) {
  let t = 0, i = [];
  for (let n of e3) {
    if (t++, typeof n != "object") return I(`invalid rule object ${t}`);
    if (!("template" in n) || typeof n.template != "string")
      return I(`"template = \u2026" is missing or invalid in rule ${t}`);
    if (!("url" in n) || typeof n.url != "string")
      return I(`"url = \u2026" is missing or invalid in rule ${t}`);
    let r = {
      max_length: null,
      selector: null,
      template: n.template,
      url: n.url,
      force_doc_title: n.force_doc_title === true
    };
    if ("max_length" in n && (typeof n.max_length != "number" || n.max_length < 1))
      return I(`"max_length = \u2026" invalid in rule ${t}`);
    if (r.max_length = n.max_length || null, "selector" in n) {
      if (typeof n.selector != "string" || n.selector.length == 0)
        return I(`"selectors = \u2026" is not a valid string in rule ${t}`);
      r.selector = n.selector;
    }
    if (typeof n.directory == "string") {
      let o = Lv(n.directory);
      if (o.isOk()) r.subdir = o.value;
      else return o;
    }
    if ("replace" in n)
      if (Array.isArray(n.replace))
        for (let o of n.replace) {
          if (typeof o != "object") return I("invalid replace value");
          if (r.replace = [], "from" in o && typeof o.from == "string") {
            if ("to" in o && typeof o.to == "string")
              r.replace.push({
                to: o.to,
                from: o.from
              });
            else
              return I(
                '"replace" is missing "to" field, or "to" field is not a string'
              );
          } else
            return I(
              '"replace" is missing "from" field, or "from" field is not a string'
            );
        }
      else return I('"replace" is not an array');
    i.push(r);
  }
  return L(i);
}
function Lv(e3) {
  if (e3 == "") return L(er);
  e3.startsWith("/") && (e3 = e3.slice(1)), e3.endsWith("/") && (e3 = e3.slice(0, -1));
  let t = e3.split("/");
  for (let n of t)
    if (St(n) != n)
      return I(
        'This not a valid path. Avoid special characters. Use "/" between directories.'
      );
  let i = t.join("/") + "/";
  return i.length > 255 ? I("Path too long") : L(i);
}
function ip(e3) {
  let t;
  try {
    t = Ks(e3);
  } catch {
    return I("Invalid syntax");
  }
  if (typeof t.max_length != "number" || t.max_length < 1)
    return I("Default `max_length` value invalid or missing");
  if (typeof t.template != "string" || t.template.length == 0)
    return I("Default `template` value invalid or missing");
  let i = {
    max_length: t.max_length,
    template: t.template,
    force_doc_title: t.force_doc_title === true
  };
  return Array.isArray(t.rule) ? Fv(t.rule).map((r) => ({
    default_: i,
    rules: r
  })) : L({
    default_: i,
    rules: []
  });
}
function Ei() {
  return {
    default_: {
      max_length: 64,
      template: "%title"
    },
    rules: []
  };
}
function St(e3) {
  let t = e3.trim().normalize("NFC").replace(/^\.+/gu, "").replace(/[^\p{L}\p{N}\p{M}\-\s_\.]/gu, "").replace(/-+/gu, "-").replace(/\s+/gu, " ").replace(/^(\s|-)+/gu, "").substring(0, 190).replace(/(\s|-)+$/gu, "");
  return t.length == 0 ? "no-name" : t;
}
function kr(e3, t) {
  let {
    template: i,
    selector: n,
    max_length: r,
    replace: o,
    subdir: a
  } = t.smartnaming_rule, u, s;
  if (u = e3.title.or(t.title).or(e3.filename).map((c) => c.trim()).unwrapOr(void 0), t.url.isSome()) {
    let c = t.url.value.host.split(".").slice(-2);
    c.pop(), s = c[0];
  }
  let l = i, d = (c, f) => {
    f ? l = l.replace(c, f) : (l = l.replace(` ${c}`, ""), l = l.replace(`-${c}`, ""), l = l.replace(`_${c}`, ""), l = l.replace(`${c}`, ""));
  };
  d("%title", u), d("%hostname", s), d("%selector", n), l = l || u || s || "", l = St(l).substring(0, r);
  for (let c of o) l = l.replaceAll(c.from, c.to);
  return l = St(l).substring(0, r), {
    basename: l,
    subdir: a
  };
}
qt();
function xt(e3, t, i) {
  let n = i.split(".").slice(-2).join("."), r = `behaviour_hash_${he(t)}`, o = `domain_hash_${he(n)}`, a = e3.remote_behaviours.websites;
  return a.has(r) && a.get(r).has(o);
}
function _o(e3, t) {
  return xt(e3, "BLOCK_MEDIA_DETECTION", t.hostname);
}
function oe(e3, t) {
  return xt(e3, "CARRY_GET_PARAM_WEBSITES", t.hostname);
}
function Ys(e3, t) {
  return xt(e3, "STRIP_GET_PARAM_WEBSITES", t.hostname);
}
function np(e3, t) {
  return xt(e3, "AUDIO_ONLY_WEBSITES", t.hostname);
}
function Xs(e3, t) {
  return xt(e3, "FIFO_DISCOVERED_WEBSITES", t.hostname);
}
function op(e3, t) {
  return xt(e3, "FILTER_HTTP_M3U8_MEDIA", t.hostname);
}
function ap(e3, t, i) {
  return t.isNone() ? false : xt(e3, "CONVERT_MPD_URL_TO_M3U8", t.value.host) && i.match(/\.mpd/i) != null;
}
function sp(e3, t) {
  return xt(e3, "DISABLE_PREVIEW_LOADING", t.hostname);
}
function up(e3, t) {
  return xt(e3, "ALLOW_SMALL_FILE_DETECTION", t.hostname);
}
var Bv = [
  "m3u8_video_preview",
  "m3u8_audio_only",
  "m3u8_audio_video_one_source",
  "m3u8_audio_video_two_sources"
], Hv = ["mpd_audio_video_one_source", "mpd_audio_only", "mpd_video_preview"];
function lp(e3) {
  return Bv.includes(e3.strategy);
}
function dp(e3) {
  return Hv.includes(e3.strategy);
}
function cp(e3, t) {
  let i = `download_${crypto.randomUUID()}`, n = "unused", r = er;
  if (t.type == "m3u8_playlist") {
    let o = Kn(t);
    if (Yt(o.demuxer) || o.av.video == false) return A;
    let a = it(o.demuxer, "mp4"), u = {
      download_id: i,
      headers: je(t.sent_headers),
      good_basename: n,
      muxer: a,
      subdir: r,
      will_use_jsfetch: false,
      save_as: false,
      strategy: "m3u8_video_preview",
      url: o.av.video,
      extension: a,
      is_youtube: t.is_youtube,
      throttle: false,
      carry_get_params: oe(e3, t.master_url),
      cache: t.cache
    };
    return q(u);
  } else if (t.type == "youtube_format") {
    let o = Kn(t);
    if (Yt(o.demuxer) || o.av.video == false) return A;
    let a = it(o.demuxer, "mp4"), u = {
      download_id: i,
      headers: je(t.sent_headers),
      good_basename: n,
      muxer: a,
      subdir: r,
      will_use_jsfetch: false,
      save_as: false,
      strategy: "youtube_video_preview",
      url: o.av.video.url,
      carry_get_params: false,
      content_length: o.av.video.content_length,
      extension: a,
      is_youtube: t.is_youtube,
      throttle: false,
      cache: t.cache
    };
    return q(u);
  } else if (t.type == "m3u8") {
    if (Yt(t.demuxer)) return A;
    let o = it(t.demuxer, "mp4"), a = {
      download_id: i,
      headers: je(t.sent_headers),
      good_basename: n,
      muxer: o,
      subdir: r,
      will_use_jsfetch: false,
      save_as: false,
      strategy: "m3u8_video_preview",
      url: t.url,
      carry_get_params: oe(e3, t.url),
      extension: o,
      is_youtube: t.is_youtube,
      throttle: false,
      cache: t.cache
    };
    return q(a);
  } else if (t.type == "mpd_playlist") {
    let o = Kn(t);
    if (Yt(o.demuxer)) return A;
    let a = it(o.demuxer, "mp4"), u = {
      download_id: i,
      headers: je(t.sent_headers),
      good_basename: n,
      muxer: a,
      subdir: r,
      entry: o.index,
      duration: t.duration,
      will_use_jsfetch: true,
      save_as: false,
      strategy: "mpd_video_preview",
      url: t.master_url,
      carry_get_params: oe(e3, t.master_url),
      extension: a,
      is_youtube: t.is_youtube,
      throttle: false,
      cache: t.cache
    };
    return q(u);
  } else if (t.type == "http_playlist") {
    let o = {
      download_id: i,
      headers: je(t.sent_headers),
      good_basename: n,
      subdir: r,
      muxer: "mp4",
      will_use_jsfetch: true,
      size: A,
      save_as: false,
      strategy: "http_video_preview_jsfetch",
      url: t.playlist[0].av.video,
      carry_get_params: oe(e3, t.playlist[0].av.video),
      extension: "mp4",
      is_youtube: t.is_youtube,
      throttle: false,
      cache: t.cache
    };
    return q(o);
  } else throw new Error("Unreachable");
}
function buildMpdArgumentsLegacy(e3, t, i, n, r, o, a) {
  n = St(n);
  let u = `download_${crypto.randomUUID()}`, s = je(e3.sent_headers), l = e3.playlist[o], d = e3.playlist[o].index, c = zi(a, e3);
  if (t || Yt(e3.playlist[o].demuxer))
    return {
      download_id: u,
      headers: s,
      good_basename: n,
      subdir: r,
      save_as: i,
      will_use_jsfetch: true,
      muxer: "mp3",
      strategy: "mpd_audio_only",
      url: e3.master_url,
      carry_get_params: oe(a, e3.master_url),
      entry: d,
      duration: e3.duration,
      extension: "mp3",
      is_youtube: e3.is_youtube,
      throttle: c,
      cache: e3.cache,
      audio_language: l.audio_language,
      audio_track_id: l.audio_id
    };
  {
    let f = e3.subtitles.andThen(
      (m) => yt(m, a.subtitle_languages, (h) => h.language)
    );
    return {
      download_id: u,
      headers: s,
      good_basename: n,
      subdir: r,
      save_as: i,
      will_use_jsfetch: true,
      muxer: a.preferred_av_muxer,
      strategy: "mpd_audio_video_one_source",
      url: e3.master_url,
      carry_get_params: oe(a, e3.master_url),
      entry: d,
      duration: e3.duration,
      extension: a.preferred_av_muxer,
      is_youtube: e3.is_youtube,
      throttle: c,
      cache: e3.cache,
      subtitles: f,
      audio_language: l.audio_language,
      audio_track_id: l.audio_id
    };
  }
}
function buildYoutubeArgumentsLegacy(e3, t, i, n, r, o, a) {
  n = St(n);
  let u = `download_${crypto.randomUUID()}`, s = e3.playlist[o], l = je(e3.sent_headers), d = zi(a, e3);
  if (s.av.video == false)
    return {
      download_id: u,
      headers: l,
      good_basename: n,
      subdir: r,
      save_as: i,
      will_use_jsfetch: false,
      strategy: "youtube_audio_only",
      muxer: "mp3",
      url: s.av.audio.url,
      carry_get_params: oe(a, s.av.audio.url),
      content_length: s.av.audio.content_length,
      extension: "mp3",
      is_youtube: e3.is_youtube,
      throttle: d,
      cache: e3.cache,
      duration: e3.duration,
      audio_language: s.audio_language
    };
  if (t)
    return s.av.audio ? {
      download_id: u,
      headers: l,
      good_basename: n,
      subdir: r,
      save_as: i,
      will_use_jsfetch: false,
      strategy: "youtube_audio_only",
      muxer: "mp3",
      url: s.av.audio.url,
      carry_get_params: oe(a, s.av.audio.url),
      content_length: s.av.audio.content_length,
      extension: "mp3",
      is_youtube: e3.is_youtube,
      throttle: d,
      cache: e3.cache,
      duration: e3.duration,
      audio_language: s.audio_language
    } : {
      download_id: u,
      headers: l,
      good_basename: n,
      subdir: r,
      save_as: i,
      will_use_jsfetch: false,
      strategy: "youtube_audio_only",
      muxer: "mp3",
      url: s.av.video.url,
      carry_get_params: oe(a, s.av.video.url),
      content_length: s.av.video.content_length,
      extension: "mp3",
      is_youtube: e3.is_youtube,
      throttle: d,
      cache: e3.cache,
      duration: e3.duration,
      audio_language: s.audio_language
    };
  {
    let c = s.demuxer, f = it(c, a.preferred_av_muxer), m = e3.subtitles.andThen(
      (h) => yt(h, a.subtitle_languages, (_) => _.language)
    );
    return s.av.audio ? {
      download_id: u,
      headers: l,
      good_basename: n,
      subdir: r,
      muxer: f,
      save_as: i,
      will_use_jsfetch: false,
      strategy: "youtube_audio_video_two_sources",
      url: s.av.video.url,
      carry_get_params: oe(a, s.av.video.url),
      content_length: s.av.video.content_length,
      url_audio: s.av.audio.url,
      audio_content_length: s.av.audio.content_length,
      extension: f,
      is_youtube: e3.is_youtube,
      throttle: d,
      cache: e3.cache,
      subtitles: m,
      audio_language: s.audio_language
    } : {
      download_id: u,
      headers: l,
      good_basename: n,
      subdir: r,
      muxer: f,
      save_as: i,
      will_use_jsfetch: false,
      strategy: "youtube_audio_video_one_source",
      url: s.av.video.url,
      carry_get_params: oe(a, s.av.video.url),
      content_length: s.av.video.content_length,
      extension: f,
      is_youtube: e3.is_youtube,
      throttle: d,
      cache: e3.cache,
      subtitles: m,
      audio_language: s.audio_language
    };
  }
}
function buildHlsPlaylistArgumentsLegacy(e3, t, i, n, r, o, a) {
  n = St(n);
  let u = `download_${crypto.randomUUID()}`, s = e3.playlist[o], l = je(e3.sent_headers), d = e3.duration, c = zi(a, e3);
  if (s.av.video == false)
    return {
      download_id: u,
      headers: l,
      good_basename: n,
      subdir: r,
      duration: d,
      save_as: i,
      will_use_jsfetch: false,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: s.av.audio,
      carry_get_params: oe(a, s.av.audio),
      extension: "mp3",
      is_youtube: e3.is_youtube,
      throttle: c,
      cache: e3.cache,
      audio_language: s.audio_language
    };
  if (t)
    return s.av.audio ? {
      download_id: u,
      headers: l,
      good_basename: n,
      subdir: r,
      duration: d,
      save_as: i,
      will_use_jsfetch: false,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: s.av.audio,
      carry_get_params: oe(a, s.av.audio),
      extension: "mp3",
      is_youtube: e3.is_youtube,
      throttle: c,
      cache: e3.cache,
      audio_language: s.audio_language
    } : {
      download_id: u,
      headers: l,
      good_basename: n,
      subdir: r,
      duration: d,
      save_as: i,
      will_use_jsfetch: false,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: s.av.video,
      carry_get_params: oe(a, s.av.video),
      extension: "mp3",
      is_youtube: e3.is_youtube,
      throttle: c,
      cache: e3.cache,
      audio_language: s.audio_language
    };
  {
    let f = s.demuxer, m = it(f, a.preferred_av_muxer), h = e3.subtitles.andThen(
      (_) => yt(_, a.subtitle_languages, (x) => x.language)
    );
    return s.av.audio ? {
      download_id: u,
      headers: l,
      good_basename: n,
      subdir: r,
      muxer: m,
      duration: d,
      save_as: i,
      will_use_jsfetch: false,
      strategy: "m3u8_audio_video_two_sources",
      url: s.av.video,
      url_audio: s.av.audio,
      carry_get_params: oe(a, s.av.video),
      extension: m,
      is_youtube: e3.is_youtube,
      throttle: c,
      cache: e3.cache,
      subtitles: h,
      audio_language: s.audio_language
    } : {
      download_id: u,
      headers: l,
      good_basename: n,
      subdir: r,
      muxer: m,
      duration: d,
      save_as: i,
      will_use_jsfetch: false,
      strategy: "m3u8_audio_video_one_source",
      url: s.av.video,
      carry_get_params: oe(a, s.av.video),
      extension: m,
      is_youtube: e3.is_youtube,
      throttle: c,
      cache: e3.cache,
      subtitles: h,
      audio_language: s.audio_language
    };
  }
}
function buildDirectHlsArgumentsLegacy(e3, t, i, n, r, o) {
  n = St(n);
  let a = `download_${crypto.randomUUID()}`, u = je(e3.sent_headers), s = e3.url, l = e3.duration, d = zi(o, e3);
  if (t || Yt(e3.demuxer))
    return {
      save_as: i,
      subdir: r,
      duration: l,
      will_use_jsfetch: true,
      download_id: a,
      headers: u,
      strategy: "m3u8_audio_only",
      muxer: "mp3",
      url: s,
      carry_get_params: oe(o, s),
      good_basename: n,
      extension: "mp3",
      is_youtube: e3.is_youtube,
      throttle: d,
      cache: e3.cache,
      audio_language: A
    };
  {
    let c = it(e3.demuxer, o.preferred_av_muxer), f = e3.subtitles.andThen(
      (m) => yt(m, o.subtitle_languages, (h) => h.language)
    );
    return {
      download_id: a,
      headers: u,
      subdir: r,
      duration: l,
      will_use_jsfetch: true,
      save_as: i,
      strategy: "m3u8_audio_video_one_source",
      muxer: c,
      url: s,
      carry_get_params: oe(o, s),
      good_basename: n,
      extension: c,
      is_youtube: e3.is_youtube,
      throttle: d,
      cache: e3.cache,
      subtitles: f,
      audio_language: A
    };
  }
}
function buildHttpDownloadArgumentsLegacy(e3, t, i, n, r, o, a) {
  n = St(n);
  let u = `download_${crypto.randomUUID()}`, s = e3.playlist[o], l = e3.extension == "flv" && s.size.isNone(), d = e3.libav_demuxer.isSome() && wi(e3.libav_demuxer.value) && e3.supports_byte_ranges || l, c = zi(a, e3);
  if (t) {
    let f = s.av.audio || s.av.video;
    return {
      save_as: i,
      download_id: u,
      subdir: r,
      will_use_jsfetch: true,
      headers: je(e3.sent_headers),
      strategy: "http_strip_audio_jsfetch",
      url: f,
      carry_get_params: oe(a, f),
      good_basename: n,
      muxer: "mp3",
      extension: "mp3",
      is_youtube: e3.is_youtube,
      size: s.av.audio ? A : s.size,
      throttle: c,
      cache: e3.cache
    };
  }
  if (d) {
    let f, m = "";
    if (e3.libav_demuxer.isSome() ? (f = Hn(e3.libav_demuxer.value, a.preferred_av_muxer), m = f) : (f = a.preferred_av_muxer, m = a.preferred_av_muxer), s.av.audio) {
      let h = s.demuxer, _ = it(h, a.preferred_av_muxer);
      return {
        save_as: i,
        download_id: u,
        subdir: r,
        will_use_jsfetch: true,
        headers: je(e3.sent_headers),
        strategy: "http_audio_video_two_sources_jsfetch",
        url: s.av.video,
        url_audio: s.av.audio,
        carry_get_params: oe(a, s.av.video),
        good_basename: n,
        muxer: _,
        extension: _,
        size: s.size,
        duration: e3.duration,
        is_youtube: e3.is_youtube,
        throttle: c,
        cache: e3.cache
      };
    } else
      return {
        save_as: i,
        download_id: u,
        subdir: r,
        will_use_jsfetch: true,
        headers: je(e3.sent_headers),
        strategy: "http_audio_video_one_source_jsfetch",
        url: s.av.video,
        carry_get_params: oe(a, s.av.video),
        good_basename: n,
        muxer: f,
        extension: m,
        size: s.size,
        is_youtube: e3.is_youtube,
        throttle: c,
        cache: e3.cache
      };
  } else
    return {
      save_as: i,
      download_id: u,
      subdir: r,
      will_use_jsfetch: false,
      headers: je(e3.sent_headers),
      strategy: "http_audio_video_one_source",
      url: s.av.video,
      carry_get_params: oe(a, s.av.video),
      good_basename: n,
      size: s.size,
      extension: e3.extension,
      is_youtube: e3.is_youtube,
      throttle: c,
      cache: e3.cache
    };
}
function zi(e3, t) {
  return t.is_youtube && e3.youtube_throttle;
}
function buildDownloadArgumentsLegacy(e3, t, i, n, r, o, a) {
  if (e3.type == "http_playlist")
    return buildHttpDownloadArgumentsLegacy(e3, t, i, n, r, o, a);
  if (e3.type == "m3u8") return buildDirectHlsArgumentsLegacy(e3, t, i, n, r, a);
  if (e3.type == "m3u8_playlist")
    return buildHlsPlaylistArgumentsLegacy(e3, t, i, n, r, o, a);
  if (e3.type == "youtube_format") {
    if (typeof o == "number")
      return buildYoutubeArgumentsLegacy(e3, t, i, n, r, o, a);
    throw "Missing playlist_entry";
  } else if (e3.type == "mpd_playlist") {
    if (typeof o == "number")
      return buildMpdArgumentsLegacy(e3, t, i, n, r, o, a);
    throw "Missing playlist_entry";
  } else throw new Error("Unreachable");
}
var Jv = chrome.runtime.id, mo = /* @__PURE__ */ new Map();
function Yv() {
  qe && (chrome.downloads.onDeterminingFilename.hasListener(eu) || chrome.downloads.onDeterminingFilename.addListener(eu));
}
function Xv() {
  qe && mo.size == 0 && chrome.downloads.onDeterminingFilename.removeListener(eu);
}
function eu(e3, t) {
  if (e3.byExtensionId !== Jv) {
    t();
    return;
  }
  let i = mo.get(e3.finalUrl);
  if (!i) {
    t();
    return;
  }
  mo.delete(e3.finalUrl), t({
    filename: i,
    conflictAction: "uniquify"
  });
}
async function ew(e3) {
  if (!Number.isInteger(e3))
    return I({
      details: "Invalid browser download ID."
    });
  let t;
  try {
    t = await Ft.default.downloads.search({
      id: e3
    });
  } catch (n) {
    return I({
      details: n?.message || "Invalid downloadId"
    });
  }
  if (!t.length)
    return I({
      details: "Error downloading file, ID not found."
    });
  let i = t[0];
  if (i.error)
    return I({
      details: i.error
    });
  if (i.state == "interrupted")
    return I({
      details: "Download was interrupted."
    });
  if (i.state == "complete") return L(i.filename);
  return new Promise((n) => {
    let r = false, o = () => {
      Ft.default.downloads.onChanged.removeListener(a);
    }, u = (t3) => {
      r || (r = true, o(), n(t3));
    }, s = async () => {
      try {
        let t3 = await Ft.default.downloads.search({
          id: e3
        });
        if (!t3.length) {
          u(
            I({
              details: "Download ID disappeared."
            })
          );
          return;
        }
        let n3 = t3[0];
        n3.state == "complete" ? u(L(n3.filename)) : n3.state == "interrupted" && u(
          n3.error ? I({
            interrupt_reason: n3.error
          }) : I({
            details: "Download interrupted."
          })
        );
      } catch (t3) {
        u(
          I({
            details: t3?.message || "Invalid downloadId"
          })
        );
      }
    }, a = (t3) => {
      t3.id === e3 && s();
    };
    Ft.default.downloads.onChanged.addListener(a), s();
  });
}
async function dispatchDownloadToWorker(e3) {
  await ensureDownloadWorkerReady();
  let t = [];
  if (e3.url.protocol != "data:")
    if (lp(e3)) {
      e3.will_use_jsfetch = !e3.carry_get_params;
      let n = await Hm(e3);
      if (n.isErr()) return n;
      t = n.value;
    } else if (dp(e3)) t = await Bm(e3);
    else if (e3.will_use_jsfetch) {
      let n = [e3.url.href];
      e3.strategy == "http_audio_video_two_sources_jsfetch" && n.push(e3.url_audio.href), t = await Gs(n, e3.headers);
    } else t = await vt([e3.url.href], e3.headers);
  Zs(e3.headers), yr({
    name: "download",
    data: {
      download_args: ae(e3)
    }
  });
  let i = await new Promise((n) => {
    let r = Jt((o) => {
      o.name == "download_error" && o.data.download_id == e3.download_id && (r(), n(I(o.data.error))), o.name == "download_result" && o.data.download_id == e3.download_id && (r(), n(L(o.data)));
    });
  });
  return await wt(t), i;
}
async function executeDownloadAndSave(e3, t, i) {
  try {
    let n = await t.queueTask(
      () => dispatchDownloadToWorker(e3),
      e3.download_id,
      e3.is_youtube
    );
    if (n.isErr())
      return I({
        details: n.error
      });
    if (n.value.aborted_no_partial)
      return L({
        aborted_no_partial: true,
        ending_reason: n.value.ending_reason
      });
    let {
      internal_filename: r,
      internal_bloburl: o,
      ending_reason: a
    } = n.value;
    if (!o) throw new Error("No blob provided");
    let u = e3.subdir + e3.good_basename + "." + e3.extension, s = {
      url: o,
      conflictAction: "uniquify",
      filename: u,
      saveAs: e3.save_as
    };
    qe && mo.set(o, u), Ue && i && (s.incognito = true);
    let l = Date.now(), d, c;
    try {
      Yv(), c = await Ft.default.downloads.download(s), d = await ew(c), Xv();
    } catch (h) {
      if (h?.message === "Download canceled by the user")
        d = I({
          interrupt_reason: "USER_CANCELED"
        });
      else throw h;
    }
    let f = Date.now() - l;
    setTimeout(async () => {
      try {
        await (await navigator.storage.getDirectory()).removeEntry(r);
        yr({
          name: "revoke_blob_url",
          data: {
            blob_url: o
          }
        });
      } catch (e4) {
      }
    }, 3e4);
    if (d.isErr()) {
      let h = d.error;
      if (c) {
        return L({
          ending_reason: "end_of_file",
          browser_downloads_duration_ms: f,
          aborted_no_partial: false,
          browser_download_id: c,
          path: u
        });
      }
      return h.interrupt_reason == "USER_CANCELED" ? L({
        aborted_no_partial: true,
        ending_reason: xr()
      }) : (h.details, d);
    }
    return d.map((h) => ({
      ending_reason: a,
      browser_downloads_duration_ms: f,
      aborted_no_partial: false,
      browser_download_id: c,
      path: h
    }));
  } catch (n) {
    return console.error(n), I({
      details: n.toString()
    });
  }
}
function abortWorkerDownload(e3) {
  yr({
    name: "abort_download",
    data: {
      download_id: e3
    }
  });
}
qt();
var po = [];
function kt(e3) {
  for (let t of po) t(e3);
}
function mp(e3) {
  return po.push(e3), () => {
    po = po.filter((t) => t != e3);
  };
}
var Lt = ve(Ie(), 1);
async function tw(e3, t) {
  await Lt.default.runtime.sendMessage({
    msg: e3,
    channel: t
  });
}
async function sendToInjectedWithRetry(e3, t) {
  await rw(e3, t, ht.FromServiceToInjected, 10);
}
async function rw(e3, t, i, n) {
  for (let r = 0; r < n; r++)
    try {
      await Lt.default.tabs.sendMessage(e3, {
        msg: t,
        channel: i
      });
      return;
    } catch (o) {
      console.warn(`Error sending message to tab ${e3} : ${o}`), await new Promise((a) => setTimeout(a, 1e3));
    }
  console.warn(`Timeout sending message to ${e3}`);
}
async function iw(e3, t, i) {
  await Lt.default.tabs.sendMessage(e3, {
    msg: t,
    channel: i
  });
}
async function sendToContent(e3) {
  let t = ht.FromServiceToContent;
  try {
    return await tw(e3, t), true;
  } catch {
    return false;
  }
}
function sendToInjected(e3, t) {
  let i = ht.FromServiceToInjected;
  iw(e3, t, i);
}
function onInjectedMessage(e3) {
  let t = (i, n) => {
    i.channel == ht.FromInjectedToService && e3(i.msg, n);
  };
  return Lt.default.runtime.onMessage.addListener(t), () => {
    Lt.default.runtime.onMessage.removeListener(t);
  };
}
function onContentMessage(e3) {
  let t = async (i, n) => {
    i.channel == ht.FromContentToService && await e3(i.msg, n);
  };
  return Lt.default.runtime.onMessage.addListener(t), () => {
    Lt.default.runtime.onMessage.removeListener(t);
  };
}
var Du = ve(Ie(), 1);
$e();
var Er = ve(Xn()), gp = "https://example.com", nw = function(t, i) {
  if (/^[a-z]+:/i.test(i)) return i;
  /^data:/.test(t) && (t = Er.default.location && Er.default.location.href || "");
  var n = /^\/\//.test(t), r = !Er.default.location && !/\/\//i.test(t);
  t = new Er.default.URL(t, Er.default.location || gp);
  var o = new URL(i, t);
  return r ? o.href.slice(gp.length) : n ? o.href.slice(o.protocol.length) : o.href;
}, go = nw;
var Re = ve(Xn());
var hp = function(t, i, n) {
  i.forEach(function(r) {
    for (var o in t.mediaGroups[r])
      for (var a in t.mediaGroups[r][o]) {
        var u = t.mediaGroups[r][o][a];
        n(u, r, o, a);
      }
  });
};
var bf = ve(df());
var cf = (e3) => !!e3 && typeof e3 == "object", xe = (...e3) => e3.reduce(
  (t, i) => (typeof i != "object" || Object.keys(i).forEach((n) => {
    Array.isArray(t[n]) && Array.isArray(i[n]) ? t[n] = t[n].concat(i[n]) : cf(t[n]) && cf(i[n]) ? t[n] = xe(t[n], i[n]) : t[n] = i[n];
  }), t),
  {}
), yf = (e3) => Object.keys(e3).map((t) => e3[t]), Nw = (e3, t) => {
  let i = [];
  for (let n = e3; n < t; n++) i.push(n);
  return i;
}, jr = (e3) => e3.reduce((t, i) => t.concat(i), []), vf = (e3) => {
  if (!e3.length) return [];
  let t = [];
  for (let i = 0; i < e3.length; i++) t.push(e3[i]);
  return t;
}, Rw = (e3, t) => e3.reduce((i, n, r) => (n[t] && i.push(r), i), []), Cw = (e3, t) => yf(
  e3.reduce(
    (i, n) => (n.forEach((r) => {
      i[t(r)] = r;
    }), i),
    {}
  )
), Li = {
  INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
  INVALID_NUMBER_OF_CONTENT_STEERING: "INVALID_NUMBER_OF_CONTENT_STEERING",
  DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
  DASH_INVALID_XML: "DASH_INVALID_XML",
  NO_BASE_URL: "NO_BASE_URL",
  MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION",
  SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
  UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME"
}, Vi = ({
  baseUrl: e3 = "",
  source: t = "",
  range: i = "",
  indexRange: n = ""
}) => {
  let r = {
    uri: t,
    resolvedUri: go(e3 || "", t)
  };
  if (i || n) {
    let a = (i || n).split("-"), u = Re.default.BigInt ? Re.default.BigInt(a[0]) : parseInt(a[0], 10), s = Re.default.BigInt ? Re.default.BigInt(a[1]) : parseInt(a[1], 10);
    u < Number.MAX_SAFE_INTEGER && typeof u == "bigint" && (u = Number(u)), s < Number.MAX_SAFE_INTEGER && typeof s == "bigint" && (s = Number(s));
    let l;
    typeof s == "bigint" || typeof u == "bigint" ? l = Re.default.BigInt(s) - Re.default.BigInt(u) + Re.default.BigInt(1) : l = s - u + 1, typeof l == "bigint" && l < Number.MAX_SAFE_INTEGER && (l = Number(l)), r.byterange = {
      length: l,
      offset: u
    };
  }
  return r;
}, Mw = (e3) => {
  let t;
  return typeof e3.offset == "bigint" || typeof e3.length == "bigint" ? t = Re.default.BigInt(e3.offset) + Re.default.BigInt(e3.length) - Re.default.BigInt(1) : t = e3.offset + e3.length - 1, `${e3.offset}-${t}`;
}, _f = (e3) => (e3 && typeof e3 != "number" && (e3 = parseInt(e3, 10)), isNaN(e3) ? null : e3), jw = {
  static(e3) {
    let {
      duration: t,
      timescale: i = 1,
      sourceDuration: n,
      periodDuration: r
    } = e3, o = _f(e3.endNumber), a = t / i;
    return typeof o == "number" ? {
      start: 0,
      end: o
    } : typeof r == "number" ? {
      start: 0,
      end: r / a
    } : {
      start: 0,
      end: n / a
    };
  },
  dynamic(e3) {
    let {
      NOW: t,
      clientOffset: i,
      availabilityStartTime: n,
      timescale: r = 1,
      duration: o,
      periodStart: a = 0,
      minimumUpdatePeriod: u = 0,
      timeShiftBufferDepth: s = 1 / 0
    } = e3, l = _f(e3.endNumber), d = (t + i) / 1e3, c = n + a, m = d + u - c, h = Math.ceil(m * r / o), _ = Math.floor((d - c - s) * r / o), x = Math.floor((d - c) * r / o);
    return {
      start: Math.max(0, _),
      end: typeof l == "number" ? l : Math.min(h, x)
    };
  }
}, qw = (e3) => (t) => {
  let {
    duration: i,
    timescale: n = 1,
    periodStart: r,
    startNumber: o = 1
  } = e3;
  return {
    number: o + t,
    duration: i / n,
    timeline: r,
    time: t * i
  };
}, wu = (e3) => {
  let {
    type: t,
    duration: i,
    timescale: n = 1,
    periodDuration: r,
    sourceDuration: o
  } = e3, { start: a, end: u } = jw[t](e3), s = Nw(a, u).map(qw(e3));
  if (t === "static") {
    let l = s.length - 1, d = typeof r == "number" ? r : o;
    s[l].duration = d - i / n * l;
  }
  return s;
}, wf = (e3) => {
  let {
    baseUrl: t,
    initialization: i = {},
    sourceDuration: n,
    indexRange: r = "",
    periodStart: o,
    presentationTime: a,
    number: u = 0,
    duration: s
  } = e3;
  if (!t) throw new Error(Li.NO_BASE_URL);
  let l = Vi({
    baseUrl: t,
    source: i.sourceURL,
    range: i.range
  }), d = Vi({
    baseUrl: t,
    source: t,
    indexRange: r
  });
  if (d.map = l, s) {
    let c = wu(e3);
    c.length && (d.duration = c[0].duration, d.timeline = c[0].timeline);
  } else n && (d.duration = n, d.timeline = o);
  return d.presentationTime = a || o, d.number = u, [d];
}, Uw = (e3, t, i) => {
  let n = e3.sidx.map ? e3.sidx.map : null, r = e3.sidx.duration, o = e3.timeline || 0, a = e3.sidx.byterange, u = a.offset + a.length, s = t.timescale, l = t.references.filter((x) => x.referenceType !== 1), d = [], c = e3.endList ? "static" : "dynamic", f = e3.sidx.timeline, m = f, h = e3.mediaSequence || 0, _;
  typeof t.firstOffset == "bigint" ? _ = Re.default.BigInt(u) + t.firstOffset : _ = u + t.firstOffset;
  for (let x = 0; x < l.length; x++) {
    let E = t.references[x], w = E.referencedSize, y = E.subsegmentDuration, v;
    typeof _ == "bigint" ? v = _ + Re.default.BigInt(w) - Re.default.BigInt(1) : v = _ + w - 1;
    let z = `${_}-${v}`, j = wf({
      baseUrl: i,
      timescale: s,
      timeline: o,
      periodStart: f,
      presentationTime: m,
      number: h,
      duration: y,
      sourceDuration: r,
      indexRange: z,
      type: c
    })[0];
    n && (j.map = n), d.push(j), typeof _ == "bigint" ? _ += Re.default.BigInt(w) : _ += w, m += y / s, h++;
  }
  return e3.segments = d, e3;
}, Fw = ["AUDIO", "SUBTITLES"], Lw = 1 / 60, Sf = (e3) => Cw(e3, ({ timeline: t }) => t).sort(
  (t, i) => t.timeline > i.timeline ? 1 : -1
), Vw = (e3, t) => {
  for (let i = 0; i < e3.length; i++)
    if (e3[i].attributes.NAME === t) return e3[i];
  return null;
}, mf = (e3) => {
  let t = [];
  return hp(e3, Fw, (i, n, r, o) => {
    t = t.concat(i.playlists || []);
  }), t;
}, pf = ({ playlist: e3, mediaSequence: t }) => {
  e3.mediaSequence = t, e3.segments.forEach((i, n) => {
    i.number = e3.mediaSequence + n;
  });
}, Bw = ({ oldPlaylists: e3, newPlaylists: t, timelineStarts: i }) => {
  t.forEach((n) => {
    n.discontinuitySequence = i.findIndex(function({ timeline: s }) {
      return s === n.timeline;
    });
    let r = Vw(e3, n.attributes.NAME);
    if (!r || n.sidx) return;
    let o = n.segments[0], a = r.segments.findIndex(function(s) {
      return Math.abs(s.presentationTime - o.presentationTime) < Lw;
    });
    if (a === -1) {
      pf({
        playlist: n,
        mediaSequence: r.mediaSequence + r.segments.length
      }), n.segments[0].discontinuity = true, n.discontinuityStarts.unshift(0), (!r.segments.length && n.timeline > r.timeline || r.segments.length && n.timeline > r.segments[r.segments.length - 1].timeline) && n.discontinuitySequence--;
      return;
    }
    r.segments[a].discontinuity && !o.discontinuity && (o.discontinuity = true, n.discontinuityStarts.unshift(0), n.discontinuitySequence--), pf({
      playlist: n,
      mediaSequence: r.segments[a].number
    });
  });
}, Hw = ({ oldManifest: e3, newManifest: t }) => {
  let i = e3.playlists.concat(mf(e3)), n = t.playlists.concat(mf(t));
  return t.timelineStarts = Sf([e3.timelineStarts, t.timelineStarts]), Bw({
    oldPlaylists: i,
    newPlaylists: n,
    timelineStarts: t.timelineStarts
  }), t;
}, Gw = (e3) => e3 && e3.uri + "-" + Mw(e3.byterange), vu = (e3) => {
  let t = e3.reduce(function(n, r) {
    return n[r.attributes.baseUrl] || (n[r.attributes.baseUrl] = []), n[r.attributes.baseUrl].push(r), n;
  }, {}), i = [];
  return Object.values(t).forEach((n) => {
    let r = yf(
      n.reduce((o, a) => {
        let u = a.attributes.id + (a.attributes.lang || "");
        return o[u] ? (a.segments && (a.segments[0] && (a.segments[0].discontinuity = true), o[u].segments.push(...a.segments)), a.attributes.contentProtection && (o[u].attributes.contentProtection = a.attributes.contentProtection)) : (o[u] = a, o[u].attributes.timelineStarts = []), o[u].attributes.timelineStarts.push({
          start: a.attributes.periodStart,
          timeline: a.attributes.periodStart
        }), o;
      }, {})
    );
    i = i.concat(r);
  }), i.map(
    (n) => (n.discontinuityStarts = Rw(n.segments || [], "discontinuity"), n)
  );
}, Su = (e3, t) => {
  let i = Gw(e3.sidx), n = i && t[i] && t[i].sidx;
  return n && Uw(e3, n, e3.sidx.resolvedUri), e3;
}, Zw = (e3, t = {}) => {
  if (!Object.keys(t).length) return e3;
  for (let i in e3) e3[i] = Su(e3[i], t);
  return e3;
}, Ww = ({
  attributes: e3,
  segments: t,
  sidx: i,
  mediaSequence: n,
  discontinuitySequence: r,
  discontinuityStarts: o
}, a) => {
  let u = {
    attributes: {
      NAME: e3.id,
      BANDWIDTH: e3.bandwidth,
      CODECS: e3.codecs,
      "PROGRAM-ID": 1
    },
    uri: "",
    endList: e3.type === "static",
    timeline: e3.periodStart,
    resolvedUri: e3.baseUrl || "",
    targetDuration: e3.duration,
    discontinuitySequence: r,
    discontinuityStarts: o,
    timelineStarts: e3.timelineStarts,
    mediaSequence: n,
    segments: t
  };
  return e3.contentProtection && (u.contentProtection = e3.contentProtection), e3.serviceLocation && (u.attributes.serviceLocation = e3.serviceLocation), i && (u.sidx = i), a && (u.attributes.AUDIO = "audio", u.attributes.SUBTITLES = "subs"), u;
}, Kw = ({
  attributes: e3,
  segments: t,
  mediaSequence: i,
  discontinuityStarts: n,
  discontinuitySequence: r
}) => {
  typeof t > "u" && (t = [
    {
      uri: e3.baseUrl,
      timeline: e3.periodStart,
      resolvedUri: e3.baseUrl || "",
      duration: e3.sourceDuration,
      number: 0
    }
  ], e3.duration = e3.sourceDuration);
  let o = {
    NAME: e3.id,
    BANDWIDTH: e3.bandwidth,
    "PROGRAM-ID": 1
  };
  e3.codecs && (o.CODECS = e3.codecs);
  let a = {
    attributes: o,
    uri: "",
    endList: e3.type === "static",
    timeline: e3.periodStart,
    resolvedUri: e3.baseUrl || "",
    targetDuration: e3.duration,
    timelineStarts: e3.timelineStarts,
    discontinuityStarts: n,
    discontinuitySequence: r,
    mediaSequence: i,
    segments: t
  };
  return e3.serviceLocation && (a.attributes.serviceLocation = e3.serviceLocation), a;
}, Qw = (e3, t = {}, i = false) => {
  let n, r = e3.reduce((o, a) => {
    let u = a.attributes.role && a.attributes.role.value || "", s = a.attributes.lang || "", l = a.attributes.label || "main";
    if (s && !a.attributes.label) {
      let c = u ? ` (${u})` : "";
      l = `${a.attributes.lang}${c}`;
    }
    o[l] || (o[l] = {
      language: s,
      autoselect: true,
      default: u === "main",
      playlists: [],
      uri: ""
    });
    let d = Su(Ww(a, i), t);
    return o[l].playlists.push(d), typeof n > "u" && u === "main" && (n = a, n.default = true), o;
  }, {});
  if (!n) {
    let o = Object.keys(r)[0];
    r[o].default = true;
  }
  return r;
}, Jw = (e3, t = {}) => e3.reduce((i, n) => {
  let r = n.attributes.label || n.attributes.lang || "text", o = n.attributes.lang || "und";
  return i[r] || (i[r] = {
    language: o,
    default: false,
    autoselect: false,
    playlists: [],
    uri: ""
  }), i[r].playlists.push(Su(Kw(n), t)), i;
}, {}), Yw = (e3) => e3.reduce(
  (t, i) => (i && i.forEach((n) => {
    let { channel: r, language: o } = n;
    t[o] = {
      autoselect: false,
      default: false,
      instreamId: r,
      language: o
    }, n.hasOwnProperty("aspectRatio") && (t[o].aspectRatio = n.aspectRatio), n.hasOwnProperty("easyReader") && (t[o].easyReader = n.easyReader), n.hasOwnProperty("3D") && (t[o]["3D"] = n["3D"]);
  }), t),
  {}
), Xw = ({ attributes: e3, segments: t, sidx: i, discontinuityStarts: n }) => {
  let r = {
    attributes: {
      NAME: e3.id,
      AUDIO: "audio",
      SUBTITLES: "subs",
      RESOLUTION: {
        width: e3.width,
        height: e3.height
      },
      CODECS: e3.codecs,
      BANDWIDTH: e3.bandwidth,
      "PROGRAM-ID": 1
    },
    uri: "",
    endList: e3.type === "static",
    timeline: e3.periodStart,
    resolvedUri: e3.baseUrl || "",
    targetDuration: e3.duration,
    discontinuityStarts: n,
    timelineStarts: e3.timelineStarts,
    segments: t
  };
  return e3.frameRate && (r.attributes["FRAME-RATE"] = e3.frameRate), e3.contentProtection && (r.contentProtection = e3.contentProtection), e3.serviceLocation && (r.attributes.serviceLocation = e3.serviceLocation), i && (r.sidx = i), r;
}, eS = ({ attributes: e3 }) => e3.mimeType === "video/mp4" || e3.mimeType === "video/webm" || e3.contentType === "video", tS = ({ attributes: e3 }) => e3.mimeType === "audio/mp4" || e3.mimeType === "audio/webm" || e3.contentType === "audio", rS = ({ attributes: e3 }) => e3.mimeType === "text/vtt" || e3.contentType === "text", iS = (e3, t) => {
  e3.forEach((i) => {
    i.mediaSequence = 0, i.discontinuitySequence = t.findIndex(function({ timeline: n }) {
      return n === i.timeline;
    }), i.segments && i.segments.forEach((n, r) => {
      n.number = r;
    });
  });
}, ff = (e3) => e3 ? Object.keys(e3).reduce((t, i) => {
  let n = e3[i];
  return t.concat(n.playlists);
}, []) : [], nS = ({
  dashPlaylists: e3,
  locations: t,
  contentSteering: i,
  sidxMapping: n = {},
  previousManifest: r,
  eventStream: o
}) => {
  if (!e3.length) return {};
  let {
    sourceDuration: a,
    type: u,
    suggestedPresentationDelay: s,
    minimumUpdatePeriod: l
  } = e3[0].attributes, d = vu(e3.filter(eS)).map(Xw), c = vu(e3.filter(tS)), f = vu(e3.filter(rS)), m = e3.map((v) => v.attributes.captionServices).filter(Boolean), h = {
    allowCache: true,
    discontinuityStarts: [],
    segments: [],
    endList: true,
    mediaGroups: {
      AUDIO: {},
      VIDEO: {},
      "CLOSED-CAPTIONS": {},
      SUBTITLES: {}
    },
    uri: "",
    duration: a,
    playlists: Zw(d, n)
  };
  l >= 0 && (h.minimumUpdatePeriod = l * 1e3), t && (h.locations = t), i && (h.contentSteering = i), u === "dynamic" && (h.suggestedPresentationDelay = s), o && o.length > 0 && (h.eventStream = o);
  let _ = h.playlists.length === 0, x = c.length ? Qw(c, n, _) : null, E = f.length ? Jw(f, n) : null, w = d.concat(ff(x), ff(E)), y = w.map(({ timelineStarts: v }) => v);
  return h.timelineStarts = Sf(y), iS(w, h.timelineStarts), x && (h.mediaGroups.AUDIO.audio = x), E && (h.mediaGroups.SUBTITLES.subs = E), m.length && (h.mediaGroups["CLOSED-CAPTIONS"].cc = Yw(m)), r ? Hw({
    oldManifest: r,
    newManifest: h
  }) : h;
}, oS = (e3, t, i) => {
  let {
    NOW: n,
    clientOffset: r,
    availabilityStartTime: o,
    timescale: a = 1,
    periodStart: u = 0,
    minimumUpdatePeriod: s = 0
  } = e3, l = (n + r) / 1e3, d = o + u, f = l + s - d;
  return Math.ceil((f * a - t) / i);
}, xf = (e3, t) => {
  let {
    type: i,
    minimumUpdatePeriod: n = 0,
    media: r = "",
    sourceDuration: o,
    timescale: a = 1,
    startNumber: u = 1,
    periodStart: s
  } = e3, l = [], d = -1;
  for (let c = 0; c < t.length; c++) {
    let f = t[c], m = f.d, h = f.r || 0, _ = f.t || 0;
    d < 0 && (d = _), _ && _ > d && (d = _);
    let x;
    if (h < 0) {
      let y = c + 1;
      y === t.length ? i === "dynamic" && n > 0 && r.indexOf("$Number$") > 0 ? x = oS(e3, d, m) : x = (o * a - d) / m : x = (t[y].t - d) / m;
    } else x = h + 1;
    let E = u + l.length + x, w = u + l.length;
    for (; w < E; )
      l.push({
        number: w,
        duration: m / a,
        time: d,
        timeline: s
      }), d += m, w++;
  }
  return l;
}, aS = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g, sS = (e3) => (t, i, n, r) => {
  if (t === "$$") return "$";
  if (typeof e3[i] > "u") return t;
  let o = "" + e3[i];
  return i === "RepresentationID" || (n ? r = parseInt(r, 10) : r = 1, o.length >= r) ? o : `${new Array(r - o.length + 1).join("0")}${o}`;
}, gf = (e3, t) => e3.replace(aS, sS(t)), uS = (e3, t) => !e3.duration && !t ? [
  {
    number: e3.startNumber || 1,
    duration: e3.sourceDuration,
    time: 0,
    timeline: e3.periodStart
  }
] : e3.duration ? wu(e3) : xf(e3, t), lS = (e3, t) => {
  let i = {
    RepresentationID: e3.id,
    Bandwidth: e3.bandwidth || 0
  }, {
    initialization: n = {
      sourceURL: "",
      range: ""
    }
  } = e3, r = Vi({
    baseUrl: e3.baseUrl,
    source: gf(n.sourceURL, i),
    range: n.range
  });
  return uS(e3, t).map((a) => {
    i.Number = a.number, i.Time = a.time;
    let u = gf(e3.media || "", i), s = e3.timescale || 1, l = e3.presentationTimeOffset || 0, d = e3.periodStart + (a.time - l) / s;
    return {
      uri: u,
      timeline: a.timeline,
      duration: a.duration,
      resolvedUri: go(e3.baseUrl || "", u),
      map: r,
      number: a.number,
      presentationTime: d
    };
  });
}, dS = (e3, t) => {
  let { baseUrl: i, initialization: n = {} } = e3, r = Vi({
    baseUrl: i,
    source: n.sourceURL,
    range: n.range
  }), o = Vi({
    baseUrl: i,
    source: t.media,
    range: t.mediaRange
  });
  return o.map = r, o;
}, cS = (e3, t) => {
  let { duration: i, segmentUrls: n = [], periodStart: r } = e3;
  if (!i && !t || i && t) throw new Error(Li.SEGMENT_TIME_UNSPECIFIED);
  let o = n.map((s) => dS(e3, s)), a;
  return i && (a = wu(e3)), t && (a = xf(e3, t)), a.map((s, l) => {
    if (o[l]) {
      let d = o[l], c = e3.timescale || 1, f = e3.presentationTimeOffset || 0;
      return d.timeline = s.timeline, d.duration = s.duration, d.number = s.number, d.presentationTime = r + (s.time - f) / c, d;
    }
  }).filter((s) => s);
}, _S = ({ attributes: e3, segmentInfo: t }) => {
  let i, n;
  t.template ? (n = lS, i = xe(e3, t.template)) : t.base ? (n = wf, i = xe(e3, t.base)) : t.list && (n = cS, i = xe(e3, t.list));
  let r = {
    attributes: e3
  };
  if (!n) return r;
  let o = n(i, t.segmentTimeline);
  if (i.duration) {
    let { duration: a, timescale: u = 1 } = i;
    i.duration = a / u;
  } else
    o.length ? i.duration = o.reduce(
      (a, u) => Math.max(a, Math.ceil(u.duration)),
      0
    ) : i.duration = 0;
  return r.attributes = i, r.segments = o, t.base && i.indexRange && (r.sidx = o[0], r.segments = []), r;
}, mS = (e3) => e3.map(_S), de = (e3, t) => vf(e3.childNodes).filter(({ tagName: i }) => i === t), Bi = (e3) => e3.textContent.trim(), pS = (e3) => parseFloat(e3.split("/").reduce((t, i) => t / i)), Mr = (e3) => {
  let u = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(
    e3
  );
  if (!u) return 0;
  let [s, l, d, c, f, m] = u.slice(1);
  return parseFloat(s || 0) * 31536e3 + parseFloat(l || 0) * 2592e3 + parseFloat(d || 0) * 86400 + parseFloat(c || 0) * 3600 + parseFloat(f || 0) * 60 + parseFloat(m || 0);
}, fS = (e3) => (/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e3) && (e3 += "Z"), Date.parse(e3)), hf = {
  mediaPresentationDuration(e3) {
    return Mr(e3);
  },
  availabilityStartTime(e3) {
    return fS(e3) / 1e3;
  },
  minimumUpdatePeriod(e3) {
    return Mr(e3);
  },
  suggestedPresentationDelay(e3) {
    return Mr(e3);
  },
  type(e3) {
    return e3;
  },
  timeShiftBufferDepth(e3) {
    return Mr(e3);
  },
  start(e3) {
    return Mr(e3);
  },
  width(e3) {
    return parseInt(e3, 10);
  },
  height(e3) {
    return parseInt(e3, 10);
  },
  bandwidth(e3) {
    return parseInt(e3, 10);
  },
  frameRate(e3) {
    return pS(e3);
  },
  startNumber(e3) {
    return parseInt(e3, 10);
  },
  timescale(e3) {
    return parseInt(e3, 10);
  },
  presentationTimeOffset(e3) {
    return parseInt(e3, 10);
  },
  duration(e3) {
    let t = parseInt(e3, 10);
    return isNaN(t) ? Mr(e3) : t;
  },
  d(e3) {
    return parseInt(e3, 10);
  },
  t(e3) {
    return parseInt(e3, 10);
  },
  r(e3) {
    return parseInt(e3, 10);
  },
  presentationTime(e3) {
    return parseInt(e3, 10);
  },
  DEFAULT(e3) {
    return e3;
  }
}, be = (e3) => e3 && e3.attributes ? vf(e3.attributes).reduce((t, i) => {
  let n = hf[i.name] || hf.DEFAULT;
  return t[i.name] = n(i.value), t;
}, {}) : {}, gS = {
  "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
  "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
  "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
  "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
  "urn:mpeg:dash:mp4protection:2011": "mp4protection"
}, To = (e3, t) => t.length ? jr(
  e3.map(function(i) {
    return t.map(function(n) {
      let r = Bi(n), o = go(i.baseUrl, r), a = xe(be(n), {
        baseUrl: o
      });
      return o !== r && !a.serviceLocation && i.serviceLocation && (a.serviceLocation = i.serviceLocation), a;
    });
  })
) : e3, xu = (e3) => {
  let t = de(e3, "SegmentTemplate")[0], i = de(e3, "SegmentList")[0], n = i && de(i, "SegmentURL").map(
    (c) => xe(
      {
        tag: "SegmentURL"
      },
      be(c)
    )
  ), r = de(e3, "SegmentBase")[0], o = i || t, a = o && de(o, "SegmentTimeline")[0], u = i || r || t, s = u && de(u, "Initialization")[0], l = t && be(t);
  l && s ? l.initialization = s && be(s) : l && l.initialization && (l.initialization = {
    sourceURL: l.initialization
  });
  let d = {
    template: l,
    segmentTimeline: a && de(a, "S").map((c) => be(c)),
    list: i && xe(be(i), {
      segmentUrls: n,
      initialization: be(s)
    }),
    base: r && xe(be(r), {
      initialization: be(s)
    })
  };
  return Object.keys(d).forEach((c) => {
    d[c] || delete d[c];
  }), d;
}, hS = (e3, t, i) => (n) => {
  let r = de(n, "BaseURL"), o = To(t, r), a = xe(e3, be(n)), u = xu(n);
  return o.map((s) => ({
    segmentInfo: xe(i, u),
    attributes: xe(a, s)
  }));
}, bS = (e3) => e3.reduce((t, i) => {
  let n = be(i);
  n.schemeIdUri && (n.schemeIdUri = n.schemeIdUri.toLowerCase());
  let r = gS[n.schemeIdUri];
  if (r) {
    t[r] = {
      attributes: n
    };
    let o = de(i, "cenc:pssh")[0];
    if (o) {
      let a = Bi(o);
      t[r].pssh = a && xi(a);
    }
  }
  return t;
}, {}), yS = (e3) => {
  if (e3.schemeIdUri === "urn:scte:dash:cc:cea-608:2015")
    return (typeof e3.value != "string" ? [] : e3.value.split(";")).map((i) => {
      let n, r;
      return r = i, /^CC\d=/.test(i) ? [n, r] = i.split("=") : /^CC\d$/.test(i) && (n = i), {
        channel: n,
        language: r
      };
    });
  if (e3.schemeIdUri === "urn:scte:dash:cc:cea-708:2015")
    return (typeof e3.value != "string" ? [] : e3.value.split(";")).map((i) => {
      let n = {
        channel: void 0,
        language: void 0,
        aspectRatio: 1,
        easyReader: 0,
        "3D": 0
      };
      if (/=/.test(i)) {
        let [r, o = ""] = i.split("=");
        n.channel = r, n.language = i, o.split(",").forEach((a) => {
          let [u, s] = a.split(":");
          u === "lang" ? n.language = s : u === "er" ? n.easyReader = Number(s) : u === "war" ? n.aspectRatio = Number(s) : u === "3D" && (n["3D"] = Number(s));
        });
      } else n.language = i;
      return n.channel && (n.channel = "SERVICE" + n.channel), n;
    });
}, vS = (e3) => jr(
  de(e3.node, "EventStream").map((t) => {
    let i = be(t), n = i.schemeIdUri;
    return de(t, "Event").map((r) => {
      let o = be(r), a = o.presentationTime || 0, u = i.timescale || 1, s = o.duration || 0, l = a / u + e3.attributes.start;
      return {
        schemeIdUri: n,
        value: i.value,
        id: o.id,
        start: l,
        end: l + s / u,
        messageData: Bi(r) || o.messageData,
        contentEncoding: i.contentEncoding,
        presentationTimeOffset: i.presentationTimeOffset || 0
      };
    });
  })
), wS = (e3, t, i) => (n) => {
  let r = be(n), o = To(t, de(n, "BaseURL")), a = de(n, "Role")[0], u = {
    role: be(a)
  }, s = xe(e3, r, u), l = de(n, "Accessibility")[0], d = yS(be(l));
  d && (s = xe(s, {
    captionServices: d
  }));
  let c = de(n, "Label")[0];
  if (c && c.childNodes.length) {
    let x = c.childNodes[0].nodeValue.trim();
    s = xe(s, {
      label: x
    });
  }
  let f = bS(de(n, "ContentProtection"));
  Object.keys(f).length && (s = xe(s, {
    contentProtection: f
  }));
  let m = xu(n), h = de(n, "Representation"), _ = xe(i, m);
  return jr(h.map(hS(s, o, _)));
}, SS = (e3, t) => (i, n) => {
  let r = To(t, de(i.node, "BaseURL")), o = xe(e3, {
    periodStart: i.attributes.start
  });
  typeof i.attributes.duration == "number" && (o.periodDuration = i.attributes.duration);
  let a = de(i.node, "AdaptationSet"), u = xu(i.node);
  return jr(a.map(wS(o, r, u)));
}, xS = (e3, t) => {
  if (e3.length > 1 && t({
    type: "warn",
    message: "The MPD manifest should contain no more than one ContentSteering tag"
  }), !e3.length)
    return null;
  let i = xe(
    {
      serverURL: Bi(e3[0])
    },
    be(e3[0])
  );
  return i.queryBeforeStart = i.queryBeforeStart === "true", i;
}, DS = ({ attributes: e3, priorPeriodAttributes: t, mpdType: i }) => typeof e3.start == "number" ? e3.start : t && typeof t.start == "number" && typeof t.duration == "number" ? t.start + t.duration : !t && i === "static" ? 0 : null, kS = (e3, t = {}) => {
  let {
    manifestUri: i = "",
    NOW: n = Date.now(),
    clientOffset: r = 0,
    eventHandler: o = function() {
    }
  } = t, a = de(e3, "Period");
  if (!a.length) throw new Error(Li.INVALID_NUMBER_OF_PERIOD);
  let u = de(e3, "Location"), s = be(e3), l = To(
    [
      {
        baseUrl: i
      }
    ],
    de(e3, "BaseURL")
  ), d = de(e3, "ContentSteering");
  s.type = s.type || "static", s.sourceDuration = s.mediaPresentationDuration || 0, s.NOW = n, s.clientOffset = r, u.length && (s.locations = u.map(Bi));
  let c = [];
  return a.forEach((f, m) => {
    let h = be(f), _ = c[m - 1];
    h.start = DS({
      attributes: h,
      priorPeriodAttributes: _ ? _.attributes : null,
      mpdType: s.type
    }), c.push({
      node: f,
      attributes: h
    });
  }), {
    locations: s.locations,
    contentSteeringInfo: xS(d, o),
    representationInfo: jr(c.map(SS(s, l))),
    eventStream: jr(c.map(vS))
  };
}, AS = (e3) => {
  if (e3 === "") throw new Error(Li.DASH_EMPTY_MANIFEST);
  let t = new bf.DOMParser(), i, n;
  try {
    i = t.parseFromString(e3, "application/xml"), n = i && i.documentElement.tagName === "MPD" ? i.documentElement : null;
  } catch {
  }
  if (!n || n && n.getElementsByTagName("parsererror").length > 0)
    throw new Error(Li.DASH_INVALID_XML);
  return n;
};
var Df = (e3, t = {}) => {
  let i = kS(AS(e3), t), n = mS(i.representationInfo);
  return nS({
    dashPlaylists: n,
    locations: i.locations,
    contentSteering: i.contentSteeringInfo,
    sidxMapping: t.sidxMapping,
    previousManifest: t.previousManifest,
    eventStream: i.eventStream
  });
};
qt();
function ES(e3) {
  for (let t in e3) {
    let i = e3[t];
    for (let n in i) {
      let r = i[n];
      if ("playlists" in r) return q(r.playlists);
    }
  }
  return A;
}
function kf(e3, t) {
  try {
    return zS(e3, t);
  } catch (i) {
    return I(`Error parsing MPD: ${i}`);
  }
}
function zS(e3, t) {
  let i = Df(e3), n = i.duration || "unknown", r = PS(i), o = [], a = i.playlists;
  if (a.length == 0) {
    let m = ES(i.mediaGroups.AUDIO);
    m.isSome() && (a = m.value);
  }
  let u = [
    ...Object.values(i.mediaGroups.AUDIO).flatMap((m) => Object.values(m))
  ], s, l, d, c = A;
  if (t.isSome()) {
    let m = yt(u, t.value, (h) => h.language ?? "");
    m.isSome() && (l = m.value, c = l?.language && bt(l?.language) ? q(l.language) : A);
  }
  (t.isNone() || !l) && (l = u.filter((m) => m.default)[0], c = l?.language && bt(l?.language) ? q(l.language) : A), d = l?.playlists.reduce(
    (m, h) => (h.attributes.BANDWIDTH ?? 0) > (m.attributes.BANDWIDTH ?? 0) ? h : m
  ), s = d ? q(d) : A;
  let f = 0;
  for (let m of a) {
    if (!m.attributes.CODECS) continue;
    let h = Gn(m.attributes.CODECS);
    if (h.isNone() && (h = Rm(m.attributes.CODECS), h.isNone())) continue;
    let _ = A;
    m.attributes.RESOLUTION && m.attributes.RESOLUTION.width && m.attributes.RESOLUTION.height && (_ = q({
      width: m.attributes.RESOLUTION.width,
      height: m.attributes.RESOLUTION.height
    }));
    let x;
    m.attributes.BANDWIDTH ? x = {
      bitrate: q(m.attributes.BANDWIDTH),
      size: _
    } : x = {
      bitrate: A,
      size: _
    };
    let E = {
      quality: x,
      demuxer: h.value,
      index: f,
      audio_id: s.isSome() && s.value.attributes.NAME ? q(s.value.attributes.NAME) : A,
      audio_language: c
    };
    o.push(E), f++;
  }
  return o = Qn(o), vr(o) ? L([o, n, r, i]) : I("No playlists");
}
function Af(e3, t) {
  try {
    return TS(e3, t);
  } catch (i) {
    return I(`Error parsing MPD: ${i}`);
  }
}
function TS(e3, t) {
  let i = [], n = e3.mediaGroups?.SUBTITLES ?? {}, r = e3.mediaGroups?.["CLOSED-CAPTIONS"] ?? {}, o = [
    ...Object.values(n).flatMap((s) => Object.values(s)),
    ...Object.values(r).flatMap((s) => Object.values(s))
  ], a, u;
  for (let s of o)
    s.playlists[0]?.attributes.CODECS != "wvtt" && (u = s.playlists[0]?.attributes.NAME, a = u ? q(u) : A, bt(s.language) && a.isSome() && i.push({
      hash: `subtitle_hash_${he(a.value)}`,
      initiator: t,
      language: s.language,
      type: "id",
      id: a.value
    }));
  return vr(i) ? L(q(i)) : I("no subtitles");
}
function PS(e3) {
  for (let t of e3.playlists)
    if (t.contentProtection && eo(t.contentProtection)) return true;
  return false;
}
async function Ef(e3, t) {
  let i = e3[0].av.video || e3[0].av.audio;
  try {
    let n = await vt([i.href], t), r = await fetch(i, {
      headers: t,
      signal: AbortSignal.timeout(5e3)
    });
    await wt(n);
    let o = await r.text(), a = Sr(o);
    if (a.isOk() && to(a.value).isOk()) {
      let u = ro(a.value), s = io(a.value);
      return {
        duration: u,
        has_drm: s
      };
    }
  } catch {
    console.warn(
      "request timeout while calculating duration & checking for DRM"
    );
  }
  return {
    duration: "unknown",
    has_drm: false
  };
}
async function qr(...e3) {
  let t;
  try {
    t = await fetch(...e3);
  } catch (i) {
    return i instanceof DOMException && i.name == "AbortError" ? I(xr()) : I(ao(i.toString()));
  }
  return t.status >= 400 && t.status <= 599 ? I(Wm(t.status)) : t.ok ? t.body != null ? L(t) : I(ao("No body")) : I(ao(`Unkown failure - status ${t.status}`));
}
var IS = /* @__PURE__ */ new Set([
  "youtube.com",
  "instagram.com",
  "ok.ru",
  "vk.com",
  "vk.ru",
  "vkvideo.ru",
  "canva.com",
  "iq.com",
  "vimeo.com",
  "kick.com",
  "javrank.com"
]);
function ku(e3, t) {
  let i = new Headers(), n = e3.get(t);
  if (n) for (let { name: r, value: o } of n[1]) o && i.append(r, o);
  return i;
}
async function detectHlsResponse(e3, t, i, n) {
  let r = ku(t, n.requestId), o = le(i);
  if (o.isNone()) return false;
  let a = o.value;
  Ys(e3, a) && (a.search = "");
  let u = await vt([a.href], r), s = await fetch(a, {
    headers: r
  });
  if (wt(u), !s.ok) return false;
  let l = await s.text(), d = e3.preferred_audio_strategy, c = e3.preferred_audio_languages, f = d == "original" ? A : q(c), m = Um(l, a, f, oe(e3, a), Ys(e3, a)), h = Oe(n.tabId), _ = le(n.initiator || n.originUrl), x = A, E = Fm(l, _);
  if (E.isOk() && (x = E.value), m.isOk()) {
    let w = m.value, { duration: y, has_drm: v } = await Ef(w, r);
    return kt({
      name: "on_media",
      data: {
        tab_id: h,
        media: {
          master_url: a,
          is_youtube: false,
          preferred_entry: A,
          duration: y,
          initiator: _,
          hash: `media_hash_${he(l + a.href)}`,
          sent_headers: r,
          thumbnail_url: A,
          title: A,
          filename: A,
          type: "m3u8_playlist",
          playlist: w,
          discovery_timestamp_ms: Date.now(),
          has_drm: v,
          cache: "default",
          subtitles: x
        }
      }
    }), true;
  } else {
    let w = Sr(l);
    if (w.isOk() && to(w.value).isOk()) {
      let y = ro(w.value), v = false;
      return _.isSome() && (v = np(e3, _.value)), kt({
        name: "on_media",
        data: {
          tab_id: h,
          media: {
            is_youtube: false,
            has_drm: io(w.value),
            duration: y,
            initiator: _,
            hash: `media_hash_${he(l + a.href)}`,
            sent_headers: r,
            thumbnail_url: A,
            title: A,
            filename: A,
            type: "m3u8",
            url: a,
            demuxer: v ? "mp3" : "mp4",
            discovery_timestamp_ms: Date.now(),
            cache: "default",
            subtitles: x
          }
        }
      }), true;
    }
  }
  return false;
}
async function detectDashResponse(e3, t, i, n, r) {
  let o = ku(i, r.requestId), a = le(n);
  if (a.isNone()) return false;
  let u = a.value, s = await vt([u.href], o), l = await fetch(u, {
    headers: o
  });
  if (wt(s), !l.ok) return false;
  let d = await l.text(), c = e3.preferred_audio_strategy, f = e3.preferred_audio_languages, m = c == "original" ? A : q(f), h = kf(d, m);
  if (h.isErr()) return console.log(h.error), false;
  let _ = Oe(r.tabId), x = le(r.initiator || r.originUrl);
  x.isSome() && t.set(x.value.href, Date.now());
  let [E, w, y, v] = h.value, z = A, $ = Af(v, x);
  return $.isOk() && (z = $.value), kt({
    name: "on_media",
    data: {
      tab_id: _,
      media: {
        master_url: u,
        has_drm: y,
        is_youtube: false,
        preferred_entry: A,
        duration: w,
        initiator: x,
        hash: `media_hash_${he(d)}`,
        sent_headers: o,
        thumbnail_url: A,
        title: A,
        filename: A,
        type: "mpd_playlist",
        playlist: E,
        discovery_timestamp_ms: Date.now(),
        cache: "default",
        subtitles: z
      }
    }
  }), true;
}
function If(e3) {
  if (!e3) return A;
  let t = e3.split(";");
  if (t[0] && (e3 = t[0].trim().toLowerCase()), t = e3.split("/"), !t[0] || !t[1])
    return A;
  let i = t[0] == "audio" ? "audio" : "video";
  for (let n of Cm) {
    let { regex: r } = n;
    if (r.test(t[1])) return q(n[i]);
  }
  return A;
}
function Tf(e3) {
  if (e3) {
    let t = e3.match(/^(.*)\.([^\.]+)$/);
    if (t && t[1] && t[2])
      return q({
        basename: t[1],
        extension_lowercase: t[2].toLowerCase()
      });
  }
  return A;
}
function OS(e3, t, i) {
  let n, r;
  if (i.isSome() && (n = i.value.pathname.split("/").pop()), e3) {
    let f = e3.match(
      /filename\*=(?:UTF-8'')?['"]?([^'";]*)['"]?|filename=['"]?([^'";]*)['"]?/i
    );
    f && (f[1] ? r = decodeURIComponent(f[1]) : f[2] && (r = f[2]));
  }
  let o = [], a = Tf(n), u = Tf(r);
  a.isSome() && o.push(a.value), u.isSome() && o.push(u.value);
  let s = If(t);
  s.isSome() && o.push({
    basename: void 0,
    extension_lowercase: s.value
  });
  let l = A, d, c = A;
  for (let f of o) {
    let { basename: m, extension_lowercase: h } = f;
    Mm(h) && (d = h, m && (c = q(m)));
  }
  return d && Nm(d) && (l = q(d), wi(l.value) && (d = Hn(l.value, "mp4"))), d || (d = "mp4", l = A), [l, d, c];
}
function detectHttpMediaResponse(e3, t, i, n, r) {
  let o = le(n.url);
  if (o.isNone()) return false;
  let a, u = i.get("content-length"), s = i.get("content-range");
  if (typeof s == "string" && (u = s.split("/")?.[1] || u), u && (a = parseInt(u), !isNaN(a) && a < 5e5 && !up(r, o.value)))
    return false;
  let l = le(n.initiator || n.originUrl);
  if (l.isSome() && e3.has(l.value.href) && (!a || a < 2e7)) return false;
  let d = ku(t, n.requestId), c = A;
  if (u) {
    let x = parseInt(u);
    isNaN(x) || (c = q(x));
  }
  let f = i.get("accept-ranges") == "bytes" || i.has("content-range"), [m, h, _] = OS(i.get("content-disposition"), i.get("content-type"), o);
  return kt({
    name: "on_media",
    data: {
      tab_id: Oe(n.tabId),
      media: {
        is_youtube: false,
        initiator: l,
        duration: "unknown",
        hash: `media_hash_${he(o.value.href)}`,
        sent_headers: d,
        thumbnail_url: A,
        title: A,
        filename: _,
        type: "http_playlist",
        libav_demuxer: m,
        extension: h,
        discovery_timestamp_ms: Date.now(),
        supports_byte_ranges: f,
        has_drm: false,
        cache: "default",
        preferred_entry: A,
        playlist: [
          {
            quality: {
              size: A,
              bitrate: A
            },
            demuxer: m.unwrapOr("mp4"),
            size: c,
            av: {
              video: o.value,
              audio: false
            }
          }
        ]
      }
    }
  }), true;
}
async function Pf(e3, t, i, n) {
  let r = await qr(i, {
    headers: n
  });
  if (r.isOk()) {
    let o = await r.value.json();
    sendToInjectedWithRetry(e3, {
      name: t,
      data: o
    });
  }
}
async function handleResponseStarted(e3, t, i, n) {
  if (n.statusCode < 200 || n.statusCode > 299) return;
  let r = le(n.initiator || n.originUrl);
  if (r.isSome() && (_o(e3(), r.value) || /^(moz|chrome)-extension/.test(r.value.href) || !r.value.href.startsWith("http")))
    return;
  let o = new Headers();
  if (n.responseHeaders) {
    for (let { name: d, value: c } of n.responseHeaders)
      if (c)
        try {
          o.append(d, c);
        } catch {
          console.warn("Failed to add header. Invalid header?", d, c);
        }
  }
  let a = le(n.url);
  if (a.isSome()) {
    let d = a.value;
    if (d.pathname.match(/\.ts$|\.m4s$|\.m2ts$/i)) return;
    if (d.host == "player.vimeo.com" && d.pathname.endsWith("/config")) {
      let c = Oe(n.tabId);
      if (c.isSome()) {
        Pf(c.value, "vimeo_on_config", n.url, o);
        return;
      }
    } else if (d.host == "intl-api.iq.com" && d.pathname.endsWith("/dash")) {
      let c = Oe(n.tabId);
      if (c.isSome()) {
        Pf(c.value, "iqyi_on_config", n.url, o);
        return;
      }
    }
  }
  if (r.isSome()) {
    let d = r.value.hostname.split(".").slice(-2).join(".");
    if (IS.has(d)) return;
  }
  if (n.tabId <= 0 && (r.isNone() || !r.value.href.startsWith("http"))) return;
  let u = o.get("content-type"), s = e3();
  if (n.type == "xmlhttprequest" || n.type == "other" || n.type == "main_frame" || n.type == "media") {
    let d = u?.match(/mpegurl/i), c = n.url.match(/hls|m3u8/i), f = n.url.match(/\/api\/playlist\/master\//);
    if ((d || c || f) && await detectHlsResponse(s, i, n.url, n)) return;
    if (ap(s, r, n.url)) {
      let _ = n.url.replace(".mpd", ".m3u8");
      if (await detectHlsResponse(s, i, _, n)) return;
    }
    let m = u?.match(/dash/i), h = n.url.match(/\.mpd/i);
    if ((m || h) && await detectDashResponse(s, t, i, n.url, n)) return;
  }
  let l = If(u);
  (n.type == "media" || l.isSome()) && detectHttpMediaResponse(t, i, o, n, s);
}
function registerWebRequestDetection(e3) {
  let t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), n = ["xmlhttprequest", "media", "main_frame", "sub_frame", "other"], r = ["<all_urls>"];
  {
    let l = function(d) {
      for (let [c, [f]] of t.entries()) d - f > s && t.delete(c);
      for (let [c, f] of i.entries()) d - f > s && i.delete(c);
    };
    var o = l;
    let a = qe ? ["requestHeaders", "extraHeaders"] : ["requestHeaders"], u = 0;
    Du.default.webRequest.onSendHeaders.addListener(
      (d) => {
        d.timeStamp - u > s && (u = d.timeStamp, l(d.timeStamp)), d.requestHeaders && t.set(d.requestId, [d.timeStamp, d.requestHeaders]);
      },
      {
        urls: r,
        types: n
      },
      a
    );
    let s = 600 * 1e3;
  }
  {
    let a = qe ? ["responseHeaders", "extraHeaders"] : ["responseHeaders"];
    Du.default.webRequest.onResponseStarted.addListener(
      (u) => {
        handleResponseStarted(e3, i, t, u);
      },
      {
        urls: r,
        types: n
      },
      a
    );
  }
}
var Of = ve(Ie(), 1);
async function Nf(e3, t) {
  let i = (a) => {
    let u = [
      {
        sel: "#vp-preview",
        attr: "data-thumb"
      },
      {
        sel: "video",
        attr: "poster"
      },
      {
        sel: "meta[name*=':image' i], meta[property*=':image' i]",
        attr: "content"
      },
      {
        sel: "link[rel='image_src'], link[rel='thumbnail'], link[as='image']",
        attr: "href"
      }
    ], s = null;
    for (let d of u) {
      let c = [...document.querySelectorAll(d.sel)];
      for (let f of c) {
        let m = f.getAttribute(d.attr);
        if (typeof m == "string") {
          s = m;
          break;
        }
      }
      if (s) break;
    }
    let l = document.title;
    if (!a || !l) {
      let d = [
        ...document.querySelectorAll(
          "meta[name*=':title' i], meta[property*=':title' i]"
        )
      ];
      for (let c of d)
        if (c.content) {
          l = c.content;
          break;
        }
    }
    return {
      thumbnail_res: s,
      title_res: l
    };
  }, n = await Of.default.scripting.executeScript({
    target: {
      tabId: e3
    },
    injectImmediately: true,
    args: [t],
    func: i
  }), r = A;
  typeof n?.[0]?.result?.thumbnail_res == "string" && (n[0].result.thumbnail_res.startsWith("//") ? r = le("https:" + n[0].result.thumbnail_res) : r = le(n[0].result.thumbnail_res));
  let o = A;
  return typeof n?.[0]?.result?.title_res == "string" && n[0].result.title_res && (o = q(n[0].result.title_res)), {
    thumbnail: r,
    title: o
  };
}
var Ur = ve(Ie(), 1);
async function Rf() {
  let t = (await Ur.default.tabs.query({
    currentWindow: true,
    active: true
  }))[0];
  return t ? {
    tab_id: Oe(t.id),
    win_id: Rs(t.windowId)
  } : {
    tab_id: A,
    win_id: A
  };
}
function Cf(e3) {
  let t = async (i, n) => {
    if (n) {
      let r;
      try {
        r = await Ur.default.tabs.get(n);
      } catch {
      }
      if (r) {
        let o = r.url || r.pendingUrl;
        if (o && o.startsWith("chrome-extension")) return;
        let a = Oe(n);
        if (a.isSome()) {
          let u = Rs(i);
          e3({
            win_id: u,
            tab_id: a
          });
        }
      }
    }
  };
  Ur.default.tabs.onActivated.addListener((i) => {
    t(i.windowId, i.tabId);
  }), Ur.default.windows.onFocusChanged.addListener(async () => {
    let i = await Ur.default.tabs.query({
      lastFocusedWindow: true,
      active: true
    });
    t(i[0]?.windowId, i[0]?.id);
  });
}
var rr = /* @__PURE__ */ new Map(), Au = null;
function registerPreviewHandler(e3, t) {
  onContentMessage(async (i) => {
    if (i.name == "request_preview") {
      let n = i.data.tab_id, r = i.data.media_hash, o = e3().discovered.get(n)?.media.get(r), a = () => {
        rr.delete(u), sendToContent({
          name: "on_no_preview",
          data: {
            media_hash: r
          }
        });
      };
      if (!o || o.type == "http_playlist" && !o.supports_byte_ranges) {
        a();
        return;
      }
      let u = `${n}_${r}`, s = rr.get(u);
      if (s) {
        s.filename.isSome() && sendToContent({
          name: "on_preview_available",
          data: {
            tab_id: n,
            media_hash: r,
            filename: s.filename.value
          }
        });
        return;
      }
      let l = cp(t(), o);
      if (l.isNone()) {
        console.error("Couln't build download args for preview"), a();
        return;
      }
      if (sp(t(), l.value.url)) {
        a();
        return;
      }
      let d = l.value;
      rr.set(u, {
        tab_id: n,
        media_hash: r,
        filename: A
      });
      let c = await dispatchDownloadToWorker(d);
      if (c.isOk() && !c.value.aborted_no_partial) {
        let f = c.value.internal_filename;
        rr.set(u, {
          tab_id: n,
          media_hash: r,
          filename: q(f)
        }), sendToContent({
          name: "on_preview_available",
          data: {
            tab_id: n,
            media_hash: r,
            filename: f
          }
        }), schedulePreviewCleanup(e3);
      } else
        c.isErr() && console.error(`Error while build preview: ${c.error}`), a();
    }
  });
}
function schedulePreviewCleanup(e3) {
  Au || (Au = setTimeout(async () => {
    Au = null;
    let t = await navigator.storage.getDirectory(), i = (r) => {
      let o = `${r.tab_id}_${r.media_hash}`;
      r.filename.isSome() && (t.removeEntry(r.filename.value), rr.delete(o));
    }, n = await sendToContent({
      name: "ping",
      data: null
    });
    for (let r of rr.values()) {
      let o = e3().current_win_tab.tab_id;
      n && o.isSome() ? r.tab_id != o.value && i(r) : i(r);
    }
    rr.size > 0 && schedulePreviewCleanup(e3);
  }, 2e4));
}
var Kt = ve(Ie(), 1);
$e();
$e();
var Tn = ve(Ie(), 1);
var S = {};
et(S, {
  $brand: () => Gi,
  $input: () => Ko,
  $output: () => Wo,
  NEVER: () => Jh,
  ZodAny: () => Ac,
  ZodArray: () => Tc,
  ZodBase64: () => Ha,
  ZodBase64URL: () => Ga,
  ZodBigInt: () => di,
  ZodBigIntFormat: () => Ka,
  ZodBoolean: () => li,
  ZodCIDRv4: () => Va,
  ZodCIDRv6: () => Ba,
  ZodCUID: () => Ca,
  ZodCUID2: () => Ma,
  ZodCatch: () => Kc,
  ZodCustom: () => En,
  ZodDate: () => Dn,
  ZodDefault: () => Vc,
  ZodDiscriminatedUnion: () => Pc,
  ZodE164: () => Za,
  ZodEmail: () => $a,
  ZodEmoji: () => Na,
  ZodEnum: () => si,
  ZodError: () => Wg,
  ZodFile: () => Uc,
  ZodGUID: () => hn,
  ZodIPv4: () => Fa,
  ZodIPv6: () => La,
  ZodISODate: () => mn,
  ZodISODateTime: () => _n,
  ZodISODuration: () => fn,
  ZodISOTime: () => pn,
  ZodIntersection: () => Ic,
  ZodIssueCode: () => Qh,
  ZodJWT: () => Wa,
  ZodKSUID: () => Ua,
  ZodLazy: () => t_,
  ZodLiteral: () => jc,
  ZodMap: () => Rc,
  ZodNaN: () => Jc,
  ZodNanoID: () => Ra,
  ZodNever: () => Ec,
  ZodNonOptional: () => rs,
  ZodNull: () => Dc,
  ZodNullable: () => Lc,
  ZodNumber: () => ui,
  ZodNumberFormat: () => cr,
  ZodObject: () => kn,
  ZodOptional: () => ts,
  ZodPipe: () => is,
  ZodPrefault: () => Hc,
  ZodPromise: () => i_,
  ZodReadonly: () => Yc,
  ZodRealError: () => dr,
  ZodRecord: () => Xa,
  ZodSet: () => Cc,
  ZodString: () => Sn,
  ZodStringFormat: () => ne,
  ZodSuccess: () => Wc,
  ZodSymbol: () => Sc,
  ZodTemplateLiteral: () => e_,
  ZodTransform: () => Fc,
  ZodTuple: () => Oc,
  ZodType: () => Q,
  ZodULID: () => ja,
  ZodURL: () => Oa,
  ZodUUID: () => ct,
  ZodUndefined: () => xc,
  ZodUnion: () => Ya,
  ZodUnknown: () => Qa,
  ZodVoid: () => zc,
  ZodXID: () => qa,
  _ZodString: () => Ia,
  _default: () => Bc,
  any: () => Ah,
  array: () => Ja,
  base64: () => mh,
  base64url: () => ph,
  bigint: () => wh,
  boolean: () => wc,
  catch: () => Qc,
  check: () => n_,
  cidrv4: () => ch,
  cidrv6: () => _h,
  clone: () => Be,
  coerce: () => ns,
  config: () => se,
  core: () => dt,
  cuid: () => nh,
  cuid2: () => oh,
  custom: () => Hh,
  date: () => zh,
  default: () => xx,
  discriminatedUnion: () => Oh,
  e164: () => fh,
  email: () => Kg,
  emoji: () => rh,
  endsWith: () => ti,
  enum: () => Mc,
  file: () => qh,
  flattenError: () => Vr,
  float32: () => hh,
  float64: () => bh,
  formatError: () => Br,
  function: () => xa,
  getErrorMap: () => Xh,
  globalRegistry: () => tt,
  gt: () => ut,
  gte: () => Ce,
  guid: () => Qg,
  includes: () => Xr,
  instanceof: () => Gh,
  int: () => Pa,
  int32: () => yh,
  int64: () => Sh,
  intersection: () => $c,
  ipv4: () => lh,
  ipv6: () => dh,
  iso: () => gn,
  json: () => Wh,
  jwt: () => gh,
  keyof: () => Th,
  ksuid: () => uh,
  lazy: () => r_,
  length: () => lr,
  literal: () => qc,
  locales: () => Gr,
  looseObject: () => $h,
  lowercase: () => Jr,
  lt: () => st,
  lte: () => We,
  map: () => Ch,
  maxLength: () => ur,
  maxSize: () => sr,
  mime: () => ri,
  minLength: () => $t,
  minSize: () => Wt,
  multipleOf: () => Zt,
  nan: () => Lh,
  nanoid: () => ih,
  nativeEnum: () => jh,
  negative: () => ba,
  never: () => xn,
  nonnegative: () => va,
  nonoptional: () => Zc,
  nonpositive: () => ya,
  normalize: () => ii,
  null: () => kc,
  nullable: () => vn,
  nullish: () => Uh,
  number: () => vc,
  object: () => Ph,
  optional: () => yn,
  overwrite: () => lt,
  parse: () => ka,
  parseAsync: () => Aa,
  partialRecord: () => Rh,
  pipe: () => wn,
  positive: () => ha,
  prefault: () => Gc,
  preprocess: () => Kh,
  prettifyError: () => $o,
  promise: () => Bh,
  property: () => wa,
  readonly: () => Xc,
  record: () => Nc,
  refine: () => o_,
  regex: () => Qr,
  regexes: () => Ht,
  registry: () => un,
  safeParse: () => Ea,
  safeParseAsync: () => za,
  set: () => Mh,
  setErrorMap: () => Yh,
  size: () => Kr,
  startsWith: () => ei,
  strictObject: () => Ih,
  string: () => Ta,
  stringbool: () => Zh,
  success: () => Fh,
  superRefine: () => a_,
  symbol: () => Dh,
  templateLiteral: () => Vh,
  toJSONSchema: () => Da,
  toLowerCase: () => oi,
  toUpperCase: () => ai,
  transform: () => es,
  treeifyError: () => Io,
  trim: () => ni,
  tuple: () => Nh,
  uint32: () => vh,
  uint64: () => xh,
  ulid: () => ah,
  undefined: () => kh,
  union: () => An,
  unknown: () => bn,
  uppercase: () => Yr,
  url: () => th,
  uuid: () => Jg,
  uuidv4: () => Yg,
  uuidv6: () => Xg,
  uuidv7: () => eh,
  void: () => Eh,
  xid: () => sh,
  z: () => os
});
var os = {};
et(os, {
  $brand: () => Gi,
  $input: () => Ko,
  $output: () => Wo,
  NEVER: () => Jh,
  ZodAny: () => Ac,
  ZodArray: () => Tc,
  ZodBase64: () => Ha,
  ZodBase64URL: () => Ga,
  ZodBigInt: () => di,
  ZodBigIntFormat: () => Ka,
  ZodBoolean: () => li,
  ZodCIDRv4: () => Va,
  ZodCIDRv6: () => Ba,
  ZodCUID: () => Ca,
  ZodCUID2: () => Ma,
  ZodCatch: () => Kc,
  ZodCustom: () => En,
  ZodDate: () => Dn,
  ZodDefault: () => Vc,
  ZodDiscriminatedUnion: () => Pc,
  ZodE164: () => Za,
  ZodEmail: () => $a,
  ZodEmoji: () => Na,
  ZodEnum: () => si,
  ZodError: () => Wg,
  ZodFile: () => Uc,
  ZodGUID: () => hn,
  ZodIPv4: () => Fa,
  ZodIPv6: () => La,
  ZodISODate: () => mn,
  ZodISODateTime: () => _n,
  ZodISODuration: () => fn,
  ZodISOTime: () => pn,
  ZodIntersection: () => Ic,
  ZodIssueCode: () => Qh,
  ZodJWT: () => Wa,
  ZodKSUID: () => Ua,
  ZodLazy: () => t_,
  ZodLiteral: () => jc,
  ZodMap: () => Rc,
  ZodNaN: () => Jc,
  ZodNanoID: () => Ra,
  ZodNever: () => Ec,
  ZodNonOptional: () => rs,
  ZodNull: () => Dc,
  ZodNullable: () => Lc,
  ZodNumber: () => ui,
  ZodNumberFormat: () => cr,
  ZodObject: () => kn,
  ZodOptional: () => ts,
  ZodPipe: () => is,
  ZodPrefault: () => Hc,
  ZodPromise: () => i_,
  ZodReadonly: () => Yc,
  ZodRealError: () => dr,
  ZodRecord: () => Xa,
  ZodSet: () => Cc,
  ZodString: () => Sn,
  ZodStringFormat: () => ne,
  ZodSuccess: () => Wc,
  ZodSymbol: () => Sc,
  ZodTemplateLiteral: () => e_,
  ZodTransform: () => Fc,
  ZodTuple: () => Oc,
  ZodType: () => Q,
  ZodULID: () => ja,
  ZodURL: () => Oa,
  ZodUUID: () => ct,
  ZodUndefined: () => xc,
  ZodUnion: () => Ya,
  ZodUnknown: () => Qa,
  ZodVoid: () => zc,
  ZodXID: () => qa,
  _ZodString: () => Ia,
  _default: () => Bc,
  any: () => Ah,
  array: () => Ja,
  base64: () => mh,
  base64url: () => ph,
  bigint: () => wh,
  boolean: () => wc,
  catch: () => Qc,
  check: () => n_,
  cidrv4: () => ch,
  cidrv6: () => _h,
  clone: () => Be,
  coerce: () => ns,
  config: () => se,
  core: () => dt,
  cuid: () => nh,
  cuid2: () => oh,
  custom: () => Hh,
  date: () => zh,
  discriminatedUnion: () => Oh,
  e164: () => fh,
  email: () => Kg,
  emoji: () => rh,
  endsWith: () => ti,
  enum: () => Mc,
  file: () => qh,
  flattenError: () => Vr,
  float32: () => hh,
  float64: () => bh,
  formatError: () => Br,
  function: () => xa,
  getErrorMap: () => Xh,
  globalRegistry: () => tt,
  gt: () => ut,
  gte: () => Ce,
  guid: () => Qg,
  includes: () => Xr,
  instanceof: () => Gh,
  int: () => Pa,
  int32: () => yh,
  int64: () => Sh,
  intersection: () => $c,
  ipv4: () => lh,
  ipv6: () => dh,
  iso: () => gn,
  json: () => Wh,
  jwt: () => gh,
  keyof: () => Th,
  ksuid: () => uh,
  lazy: () => r_,
  length: () => lr,
  literal: () => qc,
  locales: () => Gr,
  looseObject: () => $h,
  lowercase: () => Jr,
  lt: () => st,
  lte: () => We,
  map: () => Ch,
  maxLength: () => ur,
  maxSize: () => sr,
  mime: () => ri,
  minLength: () => $t,
  minSize: () => Wt,
  multipleOf: () => Zt,
  nan: () => Lh,
  nanoid: () => ih,
  nativeEnum: () => jh,
  negative: () => ba,
  never: () => xn,
  nonnegative: () => va,
  nonoptional: () => Zc,
  nonpositive: () => ya,
  normalize: () => ii,
  null: () => kc,
  nullable: () => vn,
  nullish: () => Uh,
  number: () => vc,
  object: () => Ph,
  optional: () => yn,
  overwrite: () => lt,
  parse: () => ka,
  parseAsync: () => Aa,
  partialRecord: () => Rh,
  pipe: () => wn,
  positive: () => ha,
  prefault: () => Gc,
  preprocess: () => Kh,
  prettifyError: () => $o,
  promise: () => Bh,
  property: () => wa,
  readonly: () => Xc,
  record: () => Nc,
  refine: () => o_,
  regex: () => Qr,
  regexes: () => Ht,
  registry: () => un,
  safeParse: () => Ea,
  safeParseAsync: () => za,
  set: () => Mh,
  setErrorMap: () => Yh,
  size: () => Kr,
  startsWith: () => ei,
  strictObject: () => Ih,
  string: () => Ta,
  stringbool: () => Zh,
  success: () => Fh,
  superRefine: () => a_,
  symbol: () => Dh,
  templateLiteral: () => Vh,
  toJSONSchema: () => Da,
  toLowerCase: () => oi,
  toUpperCase: () => ai,
  transform: () => es,
  treeifyError: () => Io,
  trim: () => ni,
  tuple: () => Nh,
  uint32: () => vh,
  uint64: () => xh,
  ulid: () => ah,
  undefined: () => kh,
  union: () => An,
  unknown: () => bn,
  uppercase: () => Yr,
  url: () => th,
  uuid: () => Jg,
  uuidv4: () => Yg,
  uuidv6: () => Xg,
  uuidv7: () => eh,
  void: () => Eh,
  xid: () => sh
});
var dt = {};
et(dt, {
  $ZodAny: () => dd,
  $ZodArray: () => an,
  $ZodAsyncError: () => at,
  $ZodBase64: () => td,
  $ZodBase64URL: () => rd,
  $ZodBigInt: () => Ho,
  $ZodBigIntFormat: () => ad,
  $ZodBoolean: () => on,
  $ZodCIDRv4: () => Yl,
  $ZodCIDRv6: () => Xl,
  $ZodCUID: () => Fl,
  $ZodCUID2: () => Ll,
  $ZodCatch: () => Pd,
  $ZodCheck: () => ce,
  $ZodCheckBigIntFormat: () => hl,
  $ZodCheckEndsWith: () => Tl,
  $ZodCheckGreaterThan: () => Fo,
  $ZodCheckIncludes: () => El,
  $ZodCheckLengthEquals: () => xl,
  $ZodCheckLessThan: () => Uo,
  $ZodCheckLowerCase: () => kl,
  $ZodCheckMaxLength: () => wl,
  $ZodCheckMaxSize: () => bl,
  $ZodCheckMimeType: () => Il,
  $ZodCheckMinLength: () => Sl,
  $ZodCheckMinSize: () => yl,
  $ZodCheckMultipleOf: () => fl,
  $ZodCheckNumberFormat: () => gl,
  $ZodCheckOverwrite: () => $l,
  $ZodCheckProperty: () => Pl,
  $ZodCheckRegex: () => Dl,
  $ZodCheckSizeEquals: () => vl,
  $ZodCheckStartsWith: () => zl,
  $ZodCheckStringFormat: () => Hr,
  $ZodCheckUpperCase: () => Al,
  $ZodCustom: () => Cd,
  $ZodDate: () => md,
  $ZodDefault: () => Ad,
  $ZodDiscriminatedUnion: () => fd,
  $ZodE164: () => id,
  $ZodEmail: () => Ml,
  $ZodEmoji: () => ql,
  $ZodEnum: () => vd,
  $ZodError: () => tn,
  $ZodFile: () => Sd,
  $ZodFunction: () => Sa,
  $ZodGUID: () => Rl,
  $ZodIPv4: () => Ql,
  $ZodIPv6: () => Jl,
  $ZodISODate: () => Zl,
  $ZodISODateTime: () => Gl,
  $ZodISODuration: () => Kl,
  $ZodISOTime: () => Wl,
  $ZodIntersection: () => gd,
  $ZodJWT: () => nd,
  $ZodKSUID: () => Hl,
  $ZodLazy: () => Rd,
  $ZodLiteral: () => wd,
  $ZodMap: () => bd,
  $ZodNaN: () => Id,
  $ZodNanoID: () => Ul,
  $ZodNever: () => cd,
  $ZodNonOptional: () => zd,
  $ZodNull: () => ld,
  $ZodNullable: () => kd,
  $ZodNumber: () => Bo,
  $ZodNumberFormat: () => od,
  $ZodObject: () => pd,
  $ZodOptional: () => Dd,
  $ZodPipe: () => sn,
  $ZodPrefault: () => Ed,
  $ZodPromise: () => Nd,
  $ZodReadonly: () => $d,
  $ZodRealError: () => Lr,
  $ZodRecord: () => hd,
  $ZodRegistry: () => Zr,
  $ZodSet: () => yd,
  $ZodString: () => nn,
  $ZodStringFormat: () => ie,
  $ZodSuccess: () => Td,
  $ZodSymbol: () => sd,
  $ZodTemplateLiteral: () => Od,
  $ZodTransform: () => xd,
  $ZodTuple: () => ar,
  $ZodType: () => V,
  $ZodULID: () => Vl,
  $ZodURL: () => jl,
  $ZodUUID: () => Cl,
  $ZodUndefined: () => ud,
  $ZodUnion: () => Go,
  $ZodUnknown: () => Gt,
  $ZodVoid: () => _d,
  $ZodXID: () => Bl,
  $brand: () => Gi,
  $constructor: () => b,
  $input: () => Ko,
  $output: () => Wo,
  Doc: () => rn,
  JSONSchema: () => Hg,
  JSONSchemaGenerator: () => cn,
  _any: () => oc,
  _array: () => dn,
  _base64: () => ma,
  _base64url: () => pa,
  _bigint: () => Yd,
  _boolean: () => Qd,
  _catch: () => lx,
  _cidrv4: () => ca,
  _cidrv6: () => _a,
  _coercedBigint: () => Xd,
  _coercedBoolean: () => Jd,
  _coercedDate: () => lc,
  _coercedNumber: () => Bd,
  _coercedString: () => jd,
  _cuid: () => na,
  _cuid2: () => oa,
  _custom: () => mc,
  _date: () => uc,
  _default: () => ax,
  _discriminatedUnion: () => K2,
  _e164: () => fa,
  _email: () => Qo,
  _emoji: () => ra,
  _endsWith: () => ti,
  _enum: () => ex,
  _file: () => _c,
  _float32: () => Gd,
  _float64: () => Zd,
  _gt: () => ut,
  _gte: () => Ce,
  _guid: () => ln,
  _includes: () => Xr,
  _int: () => Hd,
  _int32: () => Wd,
  _int64: () => ec,
  _intersection: () => Q2,
  _ipv4: () => la,
  _ipv6: () => da,
  _isoDate: () => Ud,
  _isoDateTime: () => qd,
  _isoDuration: () => Ld,
  _isoTime: () => Fd,
  _jwt: () => ga,
  _ksuid: () => ua,
  _lazy: () => mx,
  _length: () => lr,
  _literal: () => rx,
  _lowercase: () => Jr,
  _lt: () => st,
  _lte: () => We,
  _map: () => Y2,
  _max: () => We,
  _maxLength: () => ur,
  _maxSize: () => sr,
  _mime: () => ri,
  _min: () => Ce,
  _minLength: () => $t,
  _minSize: () => Wt,
  _multipleOf: () => Zt,
  _nan: () => dc,
  _nanoid: () => ia,
  _nativeEnum: () => tx,
  _negative: () => ba,
  _never: () => ac,
  _nonnegative: () => va,
  _nonoptional: () => sx,
  _nonpositive: () => ya,
  _normalize: () => ii,
  _null: () => nc,
  _nullable: () => ox,
  _number: () => Vd,
  _optional: () => nx,
  _overwrite: () => lt,
  _parse: () => Oo,
  _parseAsync: () => Ro,
  _pipe: () => dx,
  _positive: () => ha,
  _promise: () => px,
  _property: () => wa,
  _readonly: () => cx,
  _record: () => J2,
  _refine: () => pc,
  _regex: () => Qr,
  _safeParse: () => Mo,
  _safeParseAsync: () => jo,
  _set: () => X2,
  _size: () => Kr,
  _startsWith: () => ei,
  _string: () => Md,
  _stringbool: () => fc,
  _success: () => ux,
  _symbol: () => rc,
  _templateLiteral: () => _x,
  _toLowerCase: () => oi,
  _toUpperCase: () => ai,
  _transform: () => ix,
  _trim: () => ni,
  _tuple: () => cc,
  _uint32: () => Kd,
  _uint64: () => tc,
  _ulid: () => aa,
  _undefined: () => ic,
  _union: () => W2,
  _unknown: () => Wr,
  _uppercase: () => Yr,
  _url: () => ta,
  _uuid: () => Jo,
  _uuidv4: () => Yo,
  _uuidv6: () => Xo,
  _uuidv7: () => ea,
  _void: () => sc,
  _xid: () => sa,
  clone: () => Be,
  config: () => se,
  flattenError: () => Vr,
  formatError: () => Br,
  function: () => xa,
  globalConfig: () => Hi,
  globalRegistry: () => tt,
  isValidBase64: () => ed,
  isValidBase64URL: () => ng,
  isValidJWT: () => og,
  locales: () => Gr,
  parse: () => No,
  parseAsync: () => Co,
  prettifyError: () => $o,
  regexes: () => Ht,
  registry: () => un,
  safeParse: () => ju,
  safeParseAsync: () => qu,
  toDotPath: () => Uf,
  toJSONSchema: () => Da,
  treeifyError: () => Io,
  util: () => N,
  version: () => Ol
});
function b(e3, t, i) {
  function n(u, s) {
    var l;
    Object.defineProperty(u, "_zod", {
      value: u._zod ?? {},
      enumerable: false
    }), (l = u._zod).traits ?? (l.traits = /* @__PURE__ */ new Set()), u._zod.traits.add(e3), t(u, s);
    for (let d in a.prototype)
      d in u || Object.defineProperty(u, d, {
        value: a.prototype[d].bind(u)
      });
    u._zod.constr = a, u._zod.def = s;
  }
  let r = i?.Parent ?? Object;
  class o extends r {
  }
  Object.defineProperty(o, "name", {
    value: e3
  });
  function a(u) {
    var s;
    let l = i?.Parent ? new o() : this;
    n(l, u), (s = l._zod).deferred ?? (s.deferred = []);
    for (let d of l._zod.deferred) d();
    return l;
  }
  return Object.defineProperty(a, "init", {
    value: n
  }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (u) => i?.Parent && u instanceof i.Parent ? true : u?._zod?.traits?.has(e3)
  }), Object.defineProperty(a, "name", {
    value: e3
  }), a;
}
var Gi = Symbol("zod_brand"), at = class extends Error {
  constructor() {
    super(
      "Encountered Promise during synchronous parse. Use .parseAsync() instead."
    );
  }
}, Hi = {};
function se(e3) {
  return e3 && Object.assign(Hi, e3), Hi;
}
var N = {};
et(N, {
  BIGINT_FORMAT_RANGES: () => Cu,
  Class: () => zu,
  NUMBER_FORMAT_RANGES: () => Ru,
  aborted: () => nr,
  allowsEval: () => $u,
  assert: () => US,
  assertEqual: () => CS,
  assertIs: () => jS,
  assertNever: () => qS,
  assertNotEqual: () => MS,
  assignProp: () => Iu,
  cached: () => Ki,
  cleanEnum: () => YS,
  cleanRegex: () => Qi,
  clone: () => Be,
  createTransparentProxy: () => HS,
  defineLazy: () => te,
  esc: () => ir,
  escapeRegex: () => It,
  extend: () => WS,
  finalizeIssue: () => Ze,
  floatSafeRemainder: () => Pu,
  getElementAtPath: () => FS,
  getEnumValues: () => Wi,
  getLengthableOrigin: () => en,
  getParsedType: () => BS,
  getSizableOrigin: () => Xi,
  isObject: () => Fr,
  isPlainObject: () => Ji,
  issue: () => Mu,
  joinValues: () => k,
  jsonStringifyReplacer: () => Tu,
  merge: () => KS,
  normalizeParams: () => T,
  nullish: () => Bt,
  numKeys: () => VS,
  omit: () => ZS,
  optionalKeys: () => Nu,
  partial: () => QS,
  pick: () => GS,
  prefixIssues: () => He,
  primitiveTypes: () => Ou,
  promiseAllObject: () => LS,
  propertyKeyTypes: () => Yi,
  randomString: () => Po,
  required: () => JS,
  stringifyPrimitive: () => R,
  unwrapMessage: () => Zi
});
function CS(e3) {
  return e3;
}
function MS(e3) {
  return e3;
}
function jS(e3) {
}
function qS(e3) {
  throw new Error();
}
function US(e3) {
}
function Wi(e3) {
  let t = Object.values(e3).filter((n) => typeof n == "number");
  return Object.entries(e3).filter(([n, r]) => t.indexOf(+n) === -1).map(([n, r]) => r);
}
function k(e3, t = "|") {
  return e3.map((i) => R(i)).join(t);
}
function Tu(e3, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Ki(e3) {
  return {
    get value() {
      {
        let i = e3();
        return Object.defineProperty(this, "value", {
          value: i
        }), i;
      }
      throw new Error("cached value already set");
    }
  };
}
function Bt(e3) {
  return e3 == null;
}
function Qi(e3) {
  let t = e3.startsWith("^") ? 1 : 0, i = e3.endsWith("$") ? e3.length - 1 : e3.length;
  return e3.slice(t, i);
}
function Pu(e3, t) {
  let i = (e3.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, r = i > n ? i : n, o = Number.parseInt(e3.toFixed(r).replace(".", "")), a = Number.parseInt(t.toFixed(r).replace(".", ""));
  return o % a / 10 ** r;
}
function te(e3, t, i) {
  Object.defineProperty(e3, t, {
    get() {
      {
        let r = i();
        return e3[t] = r, r;
      }
      throw new Error("cached value already set");
    },
    set(r) {
      Object.defineProperty(e3, t, {
        value: r
      });
    },
    configurable: true
  });
}
function Iu(e3, t, i) {
  Object.defineProperty(e3, t, {
    value: i,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function FS(e3, t) {
  return t ? t.reduce((i, n) => i?.[n], e3) : e3;
}
function LS(e3) {
  let t = Object.keys(e3), i = t.map((n) => e3[n]);
  return Promise.all(i).then((n) => {
    let r = {};
    for (let o = 0; o < t.length; o++) r[t[o]] = n[o];
    return r;
  });
}
function Po(e3 = 10) {
  let t = "abcdefghijklmnopqrstuvwxyz", i = "";
  for (let n = 0; n < e3; n++) i += t[Math.floor(Math.random() * t.length)];
  return i;
}
function ir(e3) {
  return JSON.stringify(e3);
}
function Fr(e3) {
  return typeof e3 == "object" && e3 !== null && !Array.isArray(e3);
}
var $u = Ki(() => {
  try {
    let e3 = Function;
    return new e3(""), true;
  } catch {
    return false;
  }
});
function Ji(e3) {
  if (Fr(e3) === false) return false;
  let t = e3.constructor;
  if (t === void 0) return true;
  let i = t.prototype;
  return !(Fr(i) === false || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === false);
}
function VS(e3) {
  let t = 0;
  for (let i in e3) Object.prototype.hasOwnProperty.call(e3, i) && t++;
  return t;
}
var BS = (e3) => {
  let t = typeof e3;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(e3) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(e3) ? "array" : e3 === null ? "null" : e3.then && typeof e3.then == "function" && e3.catch && typeof e3.catch == "function" ? "promise" : typeof Map < "u" && e3 instanceof Map ? "map" : typeof Set < "u" && e3 instanceof Set ? "set" : typeof Date < "u" && e3 instanceof Date ? "date" : typeof File < "u" && e3 instanceof File ? "file" : "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
}, Yi = /* @__PURE__ */ new Set(["string", "number", "symbol"]), Ou = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function It(e3) {
  return e3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Be(e3, t, i) {
  let n = new e3._zod.constr(t ?? e3._zod.def);
  return (!t || i?.parent) && (n._zod.parent = e3), n;
}
function T(e3) {
  let t = e3;
  if (!t) return {};
  if (typeof t == "string")
    return {
      error: () => t
    };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? {
    ...t,
    error: () => t.error
  } : t;
}
function HS(e3) {
  let t;
  return new Proxy(
    {},
    {
      get(i, n, r) {
        return t ?? (t = e3()), Reflect.get(t, n, r);
      },
      set(i, n, r, o) {
        return t ?? (t = e3()), Reflect.set(t, n, r, o);
      },
      has(i, n) {
        return t ?? (t = e3()), Reflect.has(t, n);
      },
      deleteProperty(i, n) {
        return t ?? (t = e3()), Reflect.deleteProperty(t, n);
      },
      ownKeys(i) {
        return t ?? (t = e3()), Reflect.ownKeys(t);
      },
      getOwnPropertyDescriptor(i, n) {
        return t ?? (t = e3()), Reflect.getOwnPropertyDescriptor(t, n);
      },
      defineProperty(i, n, r) {
        return t ?? (t = e3()), Reflect.defineProperty(t, n, r);
      }
    }
  );
}
function R(e3) {
  return typeof e3 == "bigint" ? e3.toString() + "n" : typeof e3 == "string" ? `"${e3}"` : `${e3}`;
}
function Nu(e3) {
  return Object.keys(e3).filter(
    (t) => e3[t]._zod.optin === "optional" && e3[t]._zod.optout === "optional"
  );
}
var Ru = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Cu = {
  int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
  uint64: [BigInt(0), BigInt("18446744073709551615")]
};
function GS(e3, t) {
  let i = {}, n = e3._zod.def;
  for (let r in t) {
    if (!(r in n.shape)) throw new Error(`Unrecognized key: "${r}"`);
    t[r] && (i[r] = n.shape[r]);
  }
  return Be(e3, {
    ...e3._zod.def,
    shape: i,
    checks: []
  });
}
function ZS(e3, t) {
  let i = {
    ...e3._zod.def.shape
  }, n = e3._zod.def;
  for (let r in t) {
    if (!(r in n.shape)) throw new Error(`Unrecognized key: "${r}"`);
    t[r] && delete i[r];
  }
  return Be(e3, {
    ...e3._zod.def,
    shape: i,
    checks: []
  });
}
function WS(e3, t) {
  let i = {
    ...e3._zod.def,
    get shape() {
      let n = {
        ...e3._zod.def.shape,
        ...t
      };
      return Iu(this, "shape", n), n;
    },
    checks: []
  };
  return Be(e3, i);
}
function KS(e3, t) {
  return Be(e3, {
    ...e3._zod.def,
    get shape() {
      let i = {
        ...e3._zod.def.shape,
        ...t._zod.def.shape
      };
      return Iu(this, "shape", i), i;
    },
    catchall: t._zod.def.catchall,
    checks: []
  });
}
function QS(e3, t, i) {
  let n = t._zod.def.shape, r = {
    ...n
  };
  if (i)
    for (let o in i) {
      if (!(o in n)) throw new Error(`Unrecognized key: "${o}"`);
      i[o] && (r[o] = e3 ? new e3({
        type: "optional",
        innerType: n[o]
      }) : n[o]);
    }
  else
    for (let o in n)
      r[o] = e3 ? new e3({
        type: "optional",
        innerType: n[o]
      }) : n[o];
  return Be(t, {
    ...t._zod.def,
    shape: r,
    checks: []
  });
}
function JS(e3, t, i) {
  let n = t._zod.def.shape, r = {
    ...n
  };
  if (i)
    for (let o in i) {
      if (!(o in r)) throw new Error(`Unrecognized key: "${o}"`);
      i[o] && (r[o] = new e3({
        type: "nonoptional",
        innerType: n[o]
      }));
    }
  else
    for (let o in n)
      r[o] = new e3({
        type: "nonoptional",
        innerType: n[o]
      });
  return Be(t, {
    ...t._zod.def,
    shape: r,
    checks: []
  });
}
function nr(e3, t = 0) {
  for (let i = t; i < e3.issues.length; i++)
    if (e3.issues[i].continue !== true) return true;
  return false;
}
function He(e3, t) {
  return t.map((i) => {
    var n;
    return (n = i).path ?? (n.path = []), i.path.unshift(e3), i;
  });
}
function Zi(e3) {
  return typeof e3 == "string" ? e3 : e3?.message;
}
function Ze(e3, t, i) {
  let n = {
    ...e3,
    path: e3.path ?? []
  };
  if (!e3.message) {
    let r = Zi(e3.inst?._zod.def?.error?.(e3)) ?? Zi(t?.error?.(e3)) ?? Zi(i.customError?.(e3)) ?? Zi(i.localeError?.(e3)) ?? "Invalid input";
    n.message = r;
  }
  return delete n.inst, delete n.continue, t?.reportInput || delete n.input, n;
}
function Xi(e3) {
  return e3 instanceof Set ? "set" : e3 instanceof Map ? "map" : e3 instanceof File ? "file" : "unknown";
}
function en(e3) {
  return Array.isArray(e3) ? "array" : typeof e3 == "string" ? "string" : "unknown";
}
function Mu(...e3) {
  let [t, i, n] = e3;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: i,
    inst: n
  } : {
    ...t
  };
}
function YS(e3) {
  return Object.entries(e3).filter(([t, i]) => Number.isNaN(Number.parseInt(t, 10))).map((t) => t[1]);
}
var zu = class {
  constructor(...t) {
  }
};
var qf = (e3, t) => {
  e3.name = "$ZodError", Object.defineProperty(e3, "_zod", {
    value: e3._zod,
    enumerable: false
  }), Object.defineProperty(e3, "issues", {
    value: t,
    enumerable: false
  }), Object.defineProperty(e3, "message", {
    get() {
      return JSON.stringify(t, Tu, 2);
    },
    enumerable: true
  });
}, tn = b("$ZodError", qf), Lr = b("$ZodError", qf, {
  Parent: Error
});
function Vr(e3, t = (i) => i.message) {
  let i = {}, n = [];
  for (let r of e3.issues)
    r.path.length > 0 ? (i[r.path[0]] = i[r.path[0]] || [], i[r.path[0]].push(t(r))) : n.push(t(r));
  return {
    formErrors: n,
    fieldErrors: i
  };
}
function Br(e3, t) {
  let i = t || function(o) {
    return o.message;
  }, n = {
    _errors: []
  }, r = (o) => {
    for (let a of o.issues)
      if (a.code === "invalid_union" && a.errors.length)
        a.errors.map(
          (u) => r({
            issues: u
          })
        );
      else if (a.code === "invalid_key")
        r({
          issues: a.issues
        });
      else if (a.code === "invalid_element")
        r({
          issues: a.issues
        });
      else if (a.path.length === 0) n._errors.push(i(a));
      else {
        let u = n, s = 0;
        for (; s < a.path.length; ) {
          let l = a.path[s];
          s === a.path.length - 1 ? (u[l] = u[l] || {
            _errors: []
          }, u[l]._errors.push(i(a))) : u[l] = u[l] || {
            _errors: []
          }, u = u[l], s++;
        }
      }
  };
  return r(e3), n;
}
function Io(e3, t) {
  let i = t || function(o) {
    return o.message;
  }, n = {
    errors: []
  }, r = (o, a = []) => {
    var u, s;
    for (let l of o.issues)
      if (l.code === "invalid_union" && l.errors.length)
        l.errors.map(
          (d) => r(
            {
              issues: d
            },
            l.path
          )
        );
      else if (l.code === "invalid_key")
        r(
          {
            issues: l.issues
          },
          l.path
        );
      else if (l.code === "invalid_element")
        r(
          {
            issues: l.issues
          },
          l.path
        );
      else {
        let d = [...a, ...l.path];
        if (d.length === 0) {
          n.errors.push(i(l));
          continue;
        }
        let c = n, f = 0;
        for (; f < d.length; ) {
          let m = d[f], h = f === d.length - 1;
          typeof m == "string" ? (c.properties ?? (c.properties = {}), (u = c.properties)[m] ?? (u[m] = {
            errors: []
          }), c = c.properties[m]) : (c.items ?? (c.items = []), (s = c.items)[m] ?? (s[m] = {
            errors: []
          }), c = c.items[m]), h && c.errors.push(i(l)), f++;
        }
      }
  };
  return r(e3), n;
}
function Uf(e3) {
  let t = [];
  for (let i of e3)
    typeof i == "number" ? t.push(`[${i}]`) : typeof i == "symbol" ? t.push(`[${JSON.stringify(String(i))}]`) : /[^\w$]/.test(i) ? t.push(`[${JSON.stringify(i)}]`) : (t.length && t.push("."), t.push(i));
  return t.join("");
}
function $o(e3) {
  let t = [], i = [...e3.issues].sort((n, r) => n.path.length - r.path.length);
  for (let n of i)
    t.push(`\u2716 ${n.message}`), n.path?.length && t.push(`  \u2192 at ${Uf(n.path)}`);
  return t.join(`
`);
}
var Oo = (e3) => (t, i, n, r) => {
  let o = n ? Object.assign(n, {
    async: false
  }) : {
    async: false
  }, a = t._zod.run(
    {
      value: i,
      issues: []
    },
    o
  );
  if (a instanceof Promise) throw new at();
  if (a.issues.length) {
    let u = new (r?.Err ?? e3)(a.issues.map((s) => Ze(s, o, se())));
    throw Error.captureStackTrace(u, r?.callee), u;
  }
  return a.value;
}, No = Oo(Lr), Ro = (e3) => async (t, i, n, r) => {
  let o = n ? Object.assign(n, {
    async: true
  }) : {
    async: true
  }, a = t._zod.run(
    {
      value: i,
      issues: []
    },
    o
  );
  if (a instanceof Promise && (a = await a), a.issues.length) {
    let u = new (r?.Err ?? e3)(a.issues.map((s) => Ze(s, o, se())));
    throw Error.captureStackTrace(u, r?.callee), u;
  }
  return a.value;
}, Co = Ro(Lr), Mo = (e3) => (t, i, n) => {
  let r = n ? {
    ...n,
    async: false
  } : {
    async: false
  }, o = t._zod.run(
    {
      value: i,
      issues: []
    },
    r
  );
  if (o instanceof Promise) throw new at();
  return o.issues.length ? {
    success: false,
    error: new (e3 ?? tn)(o.issues.map((a) => Ze(a, r, se())))
  } : {
    success: true,
    data: o.value
  };
}, ju = Mo(Lr), jo = (e3) => async (t, i, n) => {
  let r = n ? Object.assign(n, {
    async: true
  }) : {
    async: true
  }, o = t._zod.run(
    {
      value: i,
      issues: []
    },
    r
  );
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: false,
    error: new e3(o.issues.map((a) => Ze(a, r, se())))
  } : {
    success: true,
    data: o.value
  };
}, qu = jo(Lr);
var Ht = {};
et(Ht, {
  _emoji: () => Ff,
  base64: () => el,
  base64url: () => qo,
  bigint: () => sl,
  boolean: () => dl,
  browserEmail: () => s2,
  cidrv4: () => Yu,
  cidrv6: () => Xu,
  cuid: () => Uu,
  cuid2: () => Fu,
  date: () => il,
  datetime: () => ol,
  domain: () => u2,
  duration: () => Gu,
  e164: () => rl,
  email: () => Wu,
  emoji: () => Ku,
  extendedDuration: () => e2,
  guid: () => Zu,
  hostname: () => tl,
  html5Email: () => n2,
  integer: () => ul,
  ipv4: () => Qu,
  ipv6: () => Ju,
  ksuid: () => Bu,
  lowercase: () => ml,
  nanoid: () => Hu,
  null: () => cl,
  number: () => ll,
  rfc5322Email: () => o2,
  string: () => al,
  time: () => nl,
  ulid: () => Lu,
  undefined: () => _l,
  unicodeEmail: () => a2,
  uppercase: () => pl,
  uuid: () => or,
  uuid4: () => t2,
  uuid6: () => r2,
  uuid7: () => i2,
  xid: () => Vu
});
var Uu = /^[cC][^\s-]{8,}$/, Fu = /^[0-9a-z]+$/, Lu = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Vu = /^[0-9a-vA-V]{20}$/, Bu = /^[A-Za-z0-9]{27}$/, Hu = /^[a-zA-Z0-9_-]{21}$/, Gu = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, e2 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Zu = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, or = (e3) => e3 ? new RegExp(
  `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e3}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/, t2 = or(4), r2 = or(6), i2 = or(7), Wu = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, n2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, o2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, a2 = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, s2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Ff = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Ku() {
  return new RegExp(Ff, "u");
}
var Qu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ju = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/, Yu = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Xu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, el = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, qo = /^[A-Za-z0-9_-]*$/, tl = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/, u2 = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, rl = /^\+(?:[0-9]){6,14}[0-9]$/, Lf = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", il = new RegExp(`^${Lf}$`);
function Vf(e3) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e3.precision ? t = `${t}\\.\\d{${e3.precision}}` : e3.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function nl(e3) {
  return new RegExp(`^${Vf(e3)}$`);
}
function ol(e3) {
  let t = `${Lf}T${Vf(e3)}`, i = [];
  return i.push(e3.local ? "Z?" : "Z"), e3.offset && i.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${i.join("|")})`, new RegExp(`^${t}$`);
}
var al = (e3) => {
  let t = e3 ? `[\\s\\S]{${e3?.minimum ?? 0},${e3?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, sl = /^\d+n?$/, ul = /^\d+$/, ll = /^-?\d+(?:\.\d+)?/i, dl = /true|false/i, cl = /null/i;
var _l = /undefined/i;
var ml = /^[^A-Z]*$/, pl = /^[^a-z]*$/;
var ce = b("$ZodCheck", (e3, t) => {
  var i;
  e3._zod ?? (e3._zod = {}), e3._zod.def = t, (i = e3._zod).onattach ?? (i.onattach = []);
}), Hf = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Uo = b("$ZodCheckLessThan", (e3, t) => {
  ce.init(e3, t);
  let i = Hf[typeof t.value];
  e3._zod.onattach.push((n) => {
    let r = n._zod.bag, o = (t.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < o && (t.inclusive ? r.maximum = t.value : r.exclusiveMaximum = t.value);
  }), e3._zod.check = (n) => {
    (t.inclusive ? n.value <= t.value : n.value < t.value) || n.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e3,
      continue: !t.abort
    });
  };
}), Fo = b("$ZodCheckGreaterThan", (e3, t) => {
  ce.init(e3, t);
  let i = Hf[typeof t.value];
  e3._zod.onattach.push((n) => {
    let r = n._zod.bag, o = (t.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > o && (t.inclusive ? r.minimum = t.value : r.exclusiveMinimum = t.value);
  }), e3._zod.check = (n) => {
    (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e3,
      continue: !t.abort
    });
  };
}), fl = b("$ZodCheckMultipleOf", (e3, t) => {
  ce.init(e3, t), e3._zod.onattach.push((i) => {
    var n;
    (n = i._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e3._zod.check = (i) => {
    if (typeof i.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % t.value === BigInt(0) : Pu(i.value, t.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: i.value,
      inst: e3,
      continue: !t.abort
    });
  };
}), gl = b("$ZodCheckNumberFormat", (e3, t) => {
  ce.init(e3, t), t.format = t.format || "float64";
  let i = t.format?.includes("int"), n = i ? "int" : "number", [r, o] = Ru[t.format];
  e3._zod.onattach.push((a) => {
    let u = a._zod.bag;
    u.format = t.format, u.minimum = r, u.maximum = o, i && (u.pattern = ul);
  }), e3._zod.check = (a) => {
    let u = a.value;
    if (i) {
      if (!Number.isInteger(u)) {
        a.issues.push({
          expected: n,
          format: t.format,
          code: "invalid_type",
          input: u,
          inst: e3
        });
        return;
      }
      if (!Number.isSafeInteger(u)) {
        u > 0 ? a.issues.push({
          input: u,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e3,
          origin: n,
          continue: !t.abort
        }) : a.issues.push({
          input: u,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e3,
          origin: n,
          continue: !t.abort
        });
        return;
      }
    }
    u < r && a.issues.push({
      origin: "number",
      input: u,
      code: "too_small",
      minimum: r,
      inclusive: true,
      inst: e3,
      continue: !t.abort
    }), u > o && a.issues.push({
      origin: "number",
      input: u,
      code: "too_big",
      maximum: o,
      inst: e3
    });
  };
}), hl = b("$ZodCheckBigIntFormat", (e3, t) => {
  ce.init(e3, t);
  let [i, n] = Cu[t.format];
  e3._zod.onattach.push((r) => {
    let o = r._zod.bag;
    o.format = t.format, o.minimum = i, o.maximum = n;
  }), e3._zod.check = (r) => {
    let o = r.value;
    o < i && r.issues.push({
      origin: "bigint",
      input: o,
      code: "too_small",
      minimum: i,
      inclusive: true,
      inst: e3,
      continue: !t.abort
    }), o > n && r.issues.push({
      origin: "bigint",
      input: o,
      code: "too_big",
      maximum: n,
      inst: e3
    });
  };
}), bl = b("$ZodCheckMaxSize", (e3, t) => {
  ce.init(e3, t), e3._zod.when = (i) => {
    let n = i.value;
    return !Bt(n) && n.size !== void 0;
  }, e3._zod.onattach.push((i) => {
    let n = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (i._zod.bag.maximum = t.maximum);
  }), e3._zod.check = (i) => {
    let n = i.value;
    n.size <= t.maximum || i.issues.push({
      origin: Xi(n),
      code: "too_big",
      maximum: t.maximum,
      input: n,
      inst: e3,
      continue: !t.abort
    });
  };
}), yl = b("$ZodCheckMinSize", (e3, t) => {
  ce.init(e3, t), e3._zod.when = (i) => {
    let n = i.value;
    return !Bt(n) && n.size !== void 0;
  }, e3._zod.onattach.push((i) => {
    let n = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (i._zod.bag.minimum = t.minimum);
  }), e3._zod.check = (i) => {
    let n = i.value;
    n.size >= t.minimum || i.issues.push({
      origin: Xi(n),
      code: "too_small",
      minimum: t.minimum,
      input: n,
      inst: e3,
      continue: !t.abort
    });
  };
}), vl = b("$ZodCheckSizeEquals", (e3, t) => {
  ce.init(e3, t), e3._zod.when = (i) => {
    let n = i.value;
    return !Bt(n) && n.size !== void 0;
  }, e3._zod.onattach.push((i) => {
    let n = i._zod.bag;
    n.minimum = t.size, n.maximum = t.size, n.size = t.size;
  }), e3._zod.check = (i) => {
    let n = i.value, r = n.size;
    if (r === t.size) return;
    let o = r > t.size;
    i.issues.push({
      origin: Xi(n),
      ...o ? {
        code: "too_big",
        maximum: t.size
      } : {
        code: "too_small",
        minimum: t.size
      },
      input: i.value,
      inst: e3,
      continue: !t.abort
    });
  };
}), wl = b("$ZodCheckMaxLength", (e3, t) => {
  ce.init(e3, t), e3._zod.when = (i) => {
    let n = i.value;
    return !Bt(n) && n.length !== void 0;
  }, e3._zod.onattach.push((i) => {
    let n = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (i._zod.bag.maximum = t.maximum);
  }), e3._zod.check = (i) => {
    let n = i.value;
    if (n.length <= t.maximum) return;
    let o = en(n);
    i.issues.push({
      origin: o,
      code: "too_big",
      maximum: t.maximum,
      inclusive: true,
      input: n,
      inst: e3,
      continue: !t.abort
    });
  };
}), Sl = b("$ZodCheckMinLength", (e3, t) => {
  ce.init(e3, t), e3._zod.when = (i) => {
    let n = i.value;
    return !Bt(n) && n.length !== void 0;
  }, e3._zod.onattach.push((i) => {
    let n = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (i._zod.bag.minimum = t.minimum);
  }), e3._zod.check = (i) => {
    let n = i.value;
    if (n.length >= t.minimum) return;
    let o = en(n);
    i.issues.push({
      origin: o,
      code: "too_small",
      minimum: t.minimum,
      inclusive: true,
      input: n,
      inst: e3,
      continue: !t.abort
    });
  };
}), xl = b("$ZodCheckLengthEquals", (e3, t) => {
  ce.init(e3, t), e3._zod.when = (i) => {
    let n = i.value;
    return !Bt(n) && n.length !== void 0;
  }, e3._zod.onattach.push((i) => {
    let n = i._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e3._zod.check = (i) => {
    let n = i.value, r = n.length;
    if (r === t.length) return;
    let o = en(n), a = r > t.length;
    i.issues.push({
      origin: o,
      ...a ? {
        code: "too_big",
        maximum: t.length
      } : {
        code: "too_small",
        minimum: t.length
      },
      input: i.value,
      inst: e3,
      continue: !t.abort
    });
  };
}), Hr = b("$ZodCheckStringFormat", (e3, t) => {
  var i;
  ce.init(e3, t), e3._zod.onattach.push((n) => {
    let r = n._zod.bag;
    r.format = t.format, t.pattern && (r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(t.pattern));
  }), (i = e3._zod).check ?? (i.check = (n) => {
    if (!t.pattern) throw new Error("Not implemented.");
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: n.value,
      ...t.pattern ? {
        pattern: t.pattern.toString()
      } : {},
      inst: e3,
      continue: !t.abort
    });
  });
}), Dl = b("$ZodCheckRegex", (e3, t) => {
  Hr.init(e3, t), e3._zod.check = (i) => {
    t.pattern.lastIndex = 0, !t.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: t.pattern.toString(),
      inst: e3,
      continue: !t.abort
    });
  };
}), kl = b("$ZodCheckLowerCase", (e3, t) => {
  t.pattern ?? (t.pattern = ml), Hr.init(e3, t);
}), Al = b("$ZodCheckUpperCase", (e3, t) => {
  t.pattern ?? (t.pattern = pl), Hr.init(e3, t);
}), El = b("$ZodCheckIncludes", (e3, t) => {
  ce.init(e3, t);
  let i = It(t.includes), n = new RegExp(
    typeof t.position == "number" ? `^.{${t.position}}${i}` : i
  );
  t.pattern = n, e3._zod.onattach.push((r) => {
    let o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e3._zod.check = (r) => {
    r.value.includes(t.includes, t.position) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: r.value,
      inst: e3,
      continue: !t.abort
    });
  };
}), zl = b("$ZodCheckStartsWith", (e3, t) => {
  ce.init(e3, t);
  let i = new RegExp(`^${It(t.prefix)}.*`);
  t.pattern ?? (t.pattern = i), e3._zod.onattach.push((n) => {
    let r = n._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(i);
  }), e3._zod.check = (n) => {
    n.value.startsWith(t.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e3,
      continue: !t.abort
    });
  };
}), Tl = b("$ZodCheckEndsWith", (e3, t) => {
  ce.init(e3, t);
  let i = new RegExp(`.*${It(t.suffix)}$`);
  t.pattern ?? (t.pattern = i), e3._zod.onattach.push((n) => {
    let r = n._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(i);
  }), e3._zod.check = (n) => {
    n.value.endsWith(t.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e3,
      continue: !t.abort
    });
  };
});
function Bf(e3, t, i) {
  e3.issues.length && t.issues.push(...He(i, e3.issues));
}
var Pl = b("$ZodCheckProperty", (e3, t) => {
  ce.init(e3, t), e3._zod.check = (i) => {
    let n = t.schema._zod.run(
      {
        value: i.value[t.property],
        issues: []
      },
      {}
    );
    if (n instanceof Promise) return n.then((r) => Bf(r, i, t.property));
    Bf(n, i, t.property);
  };
}), Il = b("$ZodCheckMimeType", (e3, t) => {
  ce.init(e3, t);
  let i = new Set(t.mime);
  e3._zod.onattach.push((n) => {
    n._zod.bag.mime = t.mime;
  }), e3._zod.check = (n) => {
    i.has(n.value.type) || n.issues.push({
      code: "invalid_value",
      values: t.mime,
      input: n.value.type,
      path: ["type"],
      inst: e3
    });
  };
}), $l = b("$ZodCheckOverwrite", (e3, t) => {
  ce.init(e3, t), e3._zod.check = (i) => {
    i.value = t.tx(i.value);
  };
});
var rn = class {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, {
        execution: "sync"
      }), t(this, {
        execution: "async"
      });
      return;
    }
    let n = t.split(
      `
`
    ).filter((a) => a), r = Math.min(...n.map((a) => a.length - a.trimStart().length)), o = n.map((a) => a.slice(r)).map((a) => " ".repeat(this.indent * 2) + a);
    for (let a of o) this.content.push(a);
  }
  compile() {
    let t = Function, i = this?.args, r = [...(this?.content ?? [""]).map((o) => `  ${o}`)];
    return new t(
      ...i,
      r.join(`
`)
    );
  }
};
var Ol = {
  major: 4,
  minor: 0,
  patch: 0
};
var V = b("$ZodType", (e3, t) => {
  var i;
  e3 ?? (e3 = {}), e3._zod.id = t.type + "_" + Po(10), e3._zod.def = t, e3._zod.bag = e3._zod.bag || {}, e3._zod.version = Ol;
  let n = [...e3._zod.def.checks ?? []];
  e3._zod.traits.has("$ZodCheck") && n.unshift(e3);
  for (let r of n) for (let o of r._zod.onattach) o(e3);
  if (n.length === 0)
    (i = e3._zod).deferred ?? (i.deferred = []), e3._zod.deferred?.push(() => {
      e3._zod.run = e3._zod.parse;
    });
  else {
    let r = (o, a, u) => {
      let s = nr(o), l;
      for (let d of a) {
        if (d._zod.when) {
          if (!d._zod.when(o)) continue;
        } else if (s) continue;
        let c = o.issues.length, f = d._zod.check(o);
        if (f instanceof Promise && u?.async === false) throw new at();
        if (l || f instanceof Promise)
          l = (l ?? Promise.resolve()).then(async () => {
            await f, o.issues.length !== c && (s || (s = nr(o, c)));
          });
        else {
          if (o.issues.length === c) continue;
          s || (s = nr(o, c));
        }
      }
      return l ? l.then(() => o) : o;
    };
    e3._zod.run = (o, a) => {
      let u = e3._zod.parse(o, a);
      if (u instanceof Promise) {
        if (a.async === false) throw new at();
        return u.then((s) => r(s, n, a));
      }
      return r(u, n, a);
    };
  }
  e3["~standard"] = {
    validate: (r) => {
      try {
        let o = ju(e3, r);
        return o.success ? {
          value: o.data
        } : {
          issues: o.error?.issues
        };
      } catch {
        return qu(e3, r).then(
          (a) => a.success ? {
            value: a.data
          } : {
            issues: a.error?.issues
          }
        );
      }
    },
    vendor: "zod",
    version: 1
  };
}), nn = b("$ZodString", (e3, t) => {
  V.init(e3, t), e3._zod.pattern = [...e3?._zod.bag?.patterns ?? []].pop() ?? al(e3._zod.bag), e3._zod.parse = (i, n) => {
    if (t.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: e3
    }), i;
  };
}), ie = b("$ZodStringFormat", (e3, t) => {
  Hr.init(e3, t), nn.init(e3, t);
}), Rl = b("$ZodGUID", (e3, t) => {
  t.pattern ?? (t.pattern = Zu), ie.init(e3, t);
}), Cl = b("$ZodUUID", (e3, t) => {
  if (t.version) {
    let n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = or(n));
  } else t.pattern ?? (t.pattern = or());
  ie.init(e3, t);
}), Ml = b("$ZodEmail", (e3, t) => {
  t.pattern ?? (t.pattern = Wu), ie.init(e3, t);
}), jl = b("$ZodURL", (e3, t) => {
  ie.init(e3, t), e3._zod.check = (i) => {
    try {
      let n = new URL(i.value);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: tl.source,
        input: i.value,
        inst: e3,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(
        n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol
      ) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: i.value,
        inst: e3,
        continue: !t.abort
      }));
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: e3,
        continue: !t.abort
      });
    }
  };
}), ql = b("$ZodEmoji", (e3, t) => {
  t.pattern ?? (t.pattern = Ku()), ie.init(e3, t);
}), Ul = b("$ZodNanoID", (e3, t) => {
  t.pattern ?? (t.pattern = Hu), ie.init(e3, t);
}), Fl = b("$ZodCUID", (e3, t) => {
  t.pattern ?? (t.pattern = Uu), ie.init(e3, t);
}), Ll = b("$ZodCUID2", (e3, t) => {
  t.pattern ?? (t.pattern = Fu), ie.init(e3, t);
}), Vl = b("$ZodULID", (e3, t) => {
  t.pattern ?? (t.pattern = Lu), ie.init(e3, t);
}), Bl = b("$ZodXID", (e3, t) => {
  t.pattern ?? (t.pattern = Vu), ie.init(e3, t);
}), Hl = b("$ZodKSUID", (e3, t) => {
  t.pattern ?? (t.pattern = Bu), ie.init(e3, t);
}), Gl = b("$ZodISODateTime", (e3, t) => {
  t.pattern ?? (t.pattern = ol(t)), ie.init(e3, t);
}), Zl = b("$ZodISODate", (e3, t) => {
  t.pattern ?? (t.pattern = il), ie.init(e3, t);
}), Wl = b("$ZodISOTime", (e3, t) => {
  t.pattern ?? (t.pattern = nl(t)), ie.init(e3, t);
}), Kl = b("$ZodISODuration", (e3, t) => {
  t.pattern ?? (t.pattern = Gu), ie.init(e3, t);
}), Ql = b("$ZodIPv4", (e3, t) => {
  t.pattern ?? (t.pattern = Qu), ie.init(e3, t), e3._zod.onattach.push((i) => {
    let n = i._zod.bag;
    n.format = "ipv4";
  });
}), Jl = b("$ZodIPv6", (e3, t) => {
  t.pattern ?? (t.pattern = Ju), ie.init(e3, t), e3._zod.onattach.push((i) => {
    let n = i._zod.bag;
    n.format = "ipv6";
  }), e3._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: e3,
        continue: !t.abort
      });
    }
  };
}), Yl = b("$ZodCIDRv4", (e3, t) => {
  t.pattern ?? (t.pattern = Yu), ie.init(e3, t);
}), Xl = b("$ZodCIDRv6", (e3, t) => {
  t.pattern ?? (t.pattern = Xu), ie.init(e3, t), e3._zod.check = (i) => {
    let [n, r] = i.value.split("/");
    try {
      if (!r) throw new Error();
      let o = Number(r);
      if (`${o}` !== r) throw new Error();
      if (o < 0 || o > 128) throw new Error();
      new URL(`http://[${n}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: e3,
        continue: !t.abort
      });
    }
  };
});
function ed(e3) {
  if (e3 === "") return true;
  if (e3.length % 4 !== 0) return false;
  try {
    return atob(e3), true;
  } catch {
    return false;
  }
}
var td = b("$ZodBase64", (e3, t) => {
  t.pattern ?? (t.pattern = el), ie.init(e3, t), e3._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), e3._zod.check = (i) => {
    ed(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: e3,
      continue: !t.abort
    });
  };
});
function ng(e3) {
  if (!qo.test(e3)) return false;
  let t = e3.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), i = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return ed(i);
}
var rd = b("$ZodBase64URL", (e3, t) => {
  t.pattern ?? (t.pattern = qo), ie.init(e3, t), e3._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), e3._zod.check = (i) => {
    ng(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: e3,
      continue: !t.abort
    });
  };
}), id = b("$ZodE164", (e3, t) => {
  t.pattern ?? (t.pattern = rl), ie.init(e3, t);
});
function og(e3, t = null) {
  try {
    let i = e3.split(".");
    if (i.length !== 3) return false;
    let [n] = i, r = JSON.parse(atob(n));
    return !("typ" in r && r?.typ !== "JWT" || !r.alg || t && (!("alg" in r) || r.alg !== t));
  } catch {
    return false;
  }
}
var nd = b("$ZodJWT", (e3, t) => {
  ie.init(e3, t), e3._zod.check = (i) => {
    og(i.value, t.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: e3,
      continue: !t.abort
    });
  };
}), Bo = b("$ZodNumber", (e3, t) => {
  V.init(e3, t), e3._zod.pattern = e3._zod.bag.pattern ?? ll, e3._zod.parse = (i, n) => {
    if (t.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    let r = i.value;
    if (typeof r == "number" && !Number.isNaN(r) && Number.isFinite(r))
      return i;
    let o = typeof r == "number" ? Number.isNaN(r) ? "NaN" : Number.isFinite(r) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: r,
      inst: e3,
      ...o ? {
        received: o
      } : {}
    }), i;
  };
}), od = b("$ZodNumber", (e3, t) => {
  gl.init(e3, t), Bo.init(e3, t);
}), on = b("$ZodBoolean", (e3, t) => {
  V.init(e3, t), e3._zod.pattern = dl, e3._zod.parse = (i, n) => {
    if (t.coerce)
      try {
        i.value = !!i.value;
      } catch {
      }
    let r = i.value;
    return typeof r == "boolean" || i.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: r,
      inst: e3
    }), i;
  };
}), Ho = b("$ZodBigInt", (e3, t) => {
  V.init(e3, t), e3._zod.pattern = sl, e3._zod.parse = (i, n) => {
    if (t.coerce)
      try {
        i.value = BigInt(i.value);
      } catch {
      }
    let { value: r } = i;
    return typeof r == "bigint" || i.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: r,
      inst: e3
    }), i;
  };
}), ad = b("$ZodBigInt", (e3, t) => {
  hl.init(e3, t), Ho.init(e3, t);
}), sd = b("$ZodSymbol", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    let { value: r } = i;
    return typeof r == "symbol" || i.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: r,
      inst: e3
    }), i;
  };
}), ud = b("$ZodUndefined", (e3, t) => {
  V.init(e3, t), e3._zod.pattern = _l, e3._zod.values = /* @__PURE__ */ new Set([void 0]), e3._zod.parse = (i, n) => {
    let { value: r } = i;
    return typeof r > "u" || i.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: r,
      inst: e3
    }), i;
  };
}), ld = b("$ZodNull", (e3, t) => {
  V.init(e3, t), e3._zod.pattern = cl, e3._zod.values = /* @__PURE__ */ new Set([null]), e3._zod.parse = (i, n) => {
    let { value: r } = i;
    return r === null || i.issues.push({
      expected: "null",
      code: "invalid_type",
      input: r,
      inst: e3
    }), i;
  };
}), dd = b("$ZodAny", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i) => i;
}), Gt = b("$ZodUnknown", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i) => i;
}), cd = b("$ZodNever", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: e3
  }), i);
}), _d = b("$ZodVoid", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    let { value: r } = i;
    return typeof r > "u" || i.issues.push({
      expected: "void",
      code: "invalid_type",
      input: r,
      inst: e3
    }), i;
  };
}), md = b("$ZodDate", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    if (t.coerce)
      try {
        i.value = new Date(i.value);
      } catch {
      }
    let r = i.value, o = r instanceof Date;
    return o && !Number.isNaN(r.getTime()) || i.issues.push({
      expected: "date",
      code: "invalid_type",
      input: r,
      ...o ? {
        received: "Invalid Date"
      } : {},
      inst: e3
    }), i;
  };
});
function Zf(e3, t, i) {
  e3.issues.length && t.issues.push(...He(i, e3.issues)), t.value[i] = e3.value;
}
var an = b("$ZodArray", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    let r = i.value;
    if (!Array.isArray(r))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: r,
        inst: e3
      }), i;
    i.value = Array(r.length);
    let o = [];
    for (let a = 0; a < r.length; a++) {
      let u = r[a], s = t.element._zod.run(
        {
          value: u,
          issues: []
        },
        n
      );
      s instanceof Promise ? o.push(s.then((l) => Zf(l, i, a))) : Zf(s, i, a);
    }
    return o.length ? Promise.all(o).then(() => i) : i;
  };
});
function Lo(e3, t, i) {
  e3.issues.length && t.issues.push(...He(i, e3.issues)), t.value[i] = e3.value;
}
function Wf(e3, t, i, n) {
  e3.issues.length ? n[i] === void 0 ? i in n ? t.value[i] = void 0 : t.value[i] = e3.value : t.issues.push(...He(i, e3.issues)) : e3.value === void 0 ? i in n && (t.value[i] = void 0) : t.value[i] = e3.value;
}
var pd = b("$ZodObject", (e3, t) => {
  V.init(e3, t);
  let i = Ki(() => {
    let c = Object.keys(t.shape);
    for (let m of c)
      if (!(t.shape[m] instanceof V))
        throw new Error(`Invalid element at key "${m}": expected a Zod schema`);
    let f = Nu(t.shape);
    return {
      shape: t.shape,
      keys: c,
      keySet: new Set(c),
      numKeys: c.length,
      optionalKeys: new Set(f)
    };
  });
  te(e3._zod, "propValues", () => {
    let c = t.shape, f = {};
    for (let m in c) {
      let h = c[m]._zod;
      if (h.values) {
        f[m] ?? (f[m] = /* @__PURE__ */ new Set());
        for (let _ of h.values) f[m].add(_);
      }
    }
    return f;
  });
  let n = (c) => {
    let f = new rn(["shape", "payload", "ctx"]), { keys: m, optionalKeys: h } = i.value, _ = (w) => {
      let y = ir(w);
      return `shape[${y}]._zod.run({ value: input[${y}], issues: [] }, ctx)`;
    };
    f.write("const input = payload.value;");
    let x = /* @__PURE__ */ Object.create(null);
    for (let w of m) x[w] = Po(15);
    f.write("const newResult = {}");
    for (let w of m)
      if (h.has(w)) {
        let y = x[w];
        f.write(`const ${y} = ${_(w)};`);
        let v = ir(w);
        f.write(`
        if (${y}.issues.length) {
          if (input[${v}] === undefined) {
            if (${v} in input) {
              newResult[${v}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${y}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${v}, ...iss.path] : [${v}],
              }))
            );
          }
        } else if (${y}.value === undefined) {
          if (${v} in input) newResult[${v}] = undefined;
        } else {
          newResult[${v}] = ${y}.value;
        }
        `);
      } else {
        let y = x[w];
        f.write(`const ${y} = ${_(w)};`), f.write(`
          if (${y}.issues.length) payload.issues = payload.issues.concat(${y}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${ir(w)}, ...iss.path] : [${ir(w)}]
          })));`), f.write(`newResult[${ir(w)}] = ${y}.value`);
      }
    f.write("payload.value = newResult;"), f.write("return payload;");
    let E = f.compile();
    return (w, y) => E(c, w, y);
  }, r, o = Fr, a = !Hi.jitless, s = a && $u.value, { catchall: l } = t, d;
  e3._zod.parse = (c, f) => {
    d ?? (d = i.value);
    let m = c.value;
    if (!o(m))
      return c.issues.push({
        expected: "object",
        code: "invalid_type",
        input: m,
        inst: e3
      }), c;
    let h = [];
    if (a && s && f?.async === false && f.jitless !== true)
      r || (r = n(t.shape)), c = r(c, f);
    else {
      c.value = {};
      let y = d.shape;
      for (let v of d.keys) {
        let z = y[v], $ = z._zod.run(
          {
            value: m[v],
            issues: []
          },
          f
        ), j = z._zod.optin === "optional" && z._zod.optout === "optional";
        $ instanceof Promise ? h.push($.then((K) => j ? Wf(K, c, v, m) : Lo(K, c, v))) : j ? Wf($, c, v, m) : Lo($, c, v);
      }
    }
    if (!l) return h.length ? Promise.all(h).then(() => c) : c;
    let _ = [], x = d.keySet, E = l._zod, w = E.def.type;
    for (let y of Object.keys(m)) {
      if (x.has(y)) continue;
      if (w === "never") {
        _.push(y);
        continue;
      }
      let v = E.run(
        {
          value: m[y],
          issues: []
        },
        f
      );
      v instanceof Promise ? h.push(v.then((z) => Lo(z, c, y))) : Lo(v, c, y);
    }
    return _.length && c.issues.push({
      code: "unrecognized_keys",
      keys: _,
      input: m,
      inst: e3
    }), h.length ? Promise.all(h).then(() => c) : c;
  };
});
function Kf(e3, t, i, n) {
  for (let r of e3) if (r.issues.length === 0) return t.value = r.value, t;
  return t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: i,
    errors: e3.map((r) => r.issues.map((o) => Ze(o, n, se())))
  }), t;
}
var Go = b("$ZodUnion", (e3, t) => {
  V.init(e3, t), te(e3._zod, "values", () => {
    if (t.options.every((i) => i._zod.values))
      return new Set(t.options.flatMap((i) => Array.from(i._zod.values)));
  }), te(e3._zod, "pattern", () => {
    if (t.options.every((i) => i._zod.pattern)) {
      let i = t.options.map((n) => n._zod.pattern);
      return new RegExp(`^(${i.map((n) => Qi(n.source)).join("|")})$`);
    }
  }), e3._zod.parse = (i, n) => {
    let r = false, o = [];
    for (let a of t.options) {
      let u = a._zod.run(
        {
          value: i.value,
          issues: []
        },
        n
      );
      if (u instanceof Promise) o.push(u), r = true;
      else {
        if (u.issues.length === 0) return u;
        o.push(u);
      }
    }
    return r ? Promise.all(o).then((a) => Kf(a, i, e3, n)) : Kf(o, i, e3, n);
  };
}), fd = b("$ZodDiscriminatedUnion", (e3, t) => {
  Go.init(e3, t);
  let i = e3._zod.parse;
  te(e3._zod, "propValues", () => {
    let r = {};
    for (let o of t.options) {
      let a = o._zod.propValues;
      if (!a || Object.keys(a).length === 0)
        throw new Error(
          `Invalid discriminated union option at index "${t.options.indexOf(o)}"`
        );
      for (let [u, s] of Object.entries(a)) {
        r[u] || (r[u] = /* @__PURE__ */ new Set());
        for (let l of s) r[u].add(l);
      }
    }
    return r;
  });
  let n = Ki(() => {
    let r = t.options, o = /* @__PURE__ */ new Map();
    for (let a of r) {
      let u = a._zod.propValues[t.discriminator];
      if (!u || u.size === 0)
        throw new Error(
          `Invalid discriminated union option at index "${t.options.indexOf(a)}"`
        );
      for (let s of u) {
        if (o.has(s))
          throw new Error(`Duplicate discriminator value "${String(s)}"`);
        o.set(s, a);
      }
    }
    return o;
  });
  e3._zod.parse = (r, o) => {
    let a = r.value;
    if (!Fr(a))
      return r.issues.push({
        code: "invalid_type",
        expected: "object",
        input: a,
        inst: e3
      }), r;
    let u = n.value.get(a?.[t.discriminator]);
    return u ? u._zod.run(r, o) : t.unionFallback ? i(r, o) : (r.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      input: a,
      path: [t.discriminator],
      inst: e3
    }), r);
  };
}), gd = b("$ZodIntersection", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    let { value: r } = i, o = t.left._zod.run(
      {
        value: r,
        issues: []
      },
      n
    ), a = t.right._zod.run(
      {
        value: r,
        issues: []
      },
      n
    );
    return o instanceof Promise || a instanceof Promise ? Promise.all([o, a]).then(([s, l]) => Qf(i, s, l)) : Qf(i, o, a);
  };
});
function Nl(e3, t) {
  if (e3 === t)
    return {
      valid: true,
      data: e3
    };
  if (e3 instanceof Date && t instanceof Date && +e3 == +t)
    return {
      valid: true,
      data: e3
    };
  if (Ji(e3) && Ji(t)) {
    let i = Object.keys(t), n = Object.keys(e3).filter((o) => i.indexOf(o) !== -1), r = {
      ...e3,
      ...t
    };
    for (let o of n) {
      let a = Nl(e3[o], t[o]);
      if (!a.valid)
        return {
          valid: false,
          mergeErrorPath: [o, ...a.mergeErrorPath]
        };
      r[o] = a.data;
    }
    return {
      valid: true,
      data: r
    };
  }
  if (Array.isArray(e3) && Array.isArray(t)) {
    if (e3.length !== t.length)
      return {
        valid: false,
        mergeErrorPath: []
      };
    let i = [];
    for (let n = 0; n < e3.length; n++) {
      let r = e3[n], o = t[n], a = Nl(r, o);
      if (!a.valid)
        return {
          valid: false,
          mergeErrorPath: [n, ...a.mergeErrorPath]
        };
      i.push(a.data);
    }
    return {
      valid: true,
      data: i
    };
  }
  return {
    valid: false,
    mergeErrorPath: []
  };
}
function Qf(e3, t, i) {
  if (t.issues.length && e3.issues.push(...t.issues), i.issues.length && e3.issues.push(...i.issues), nr(e3))
    return e3;
  let n = Nl(t.value, i.value);
  if (!n.valid)
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`
    );
  return e3.value = n.data, e3;
}
var ar = b("$ZodTuple", (e3, t) => {
  V.init(e3, t);
  let i = t.items, n = i.length - [...i].reverse().findIndex((r) => r._zod.optin !== "optional");
  e3._zod.parse = (r, o) => {
    let a = r.value;
    if (!Array.isArray(a))
      return r.issues.push({
        input: a,
        inst: e3,
        expected: "tuple",
        code: "invalid_type"
      }), r;
    r.value = [];
    let u = [];
    if (!t.rest) {
      let l = a.length > i.length, d = a.length < n - 1;
      if (l || d)
        return r.issues.push({
          input: a,
          inst: e3,
          origin: "array",
          ...l ? {
            code: "too_big",
            maximum: i.length
          } : {
            code: "too_small",
            minimum: i.length
          }
        }), r;
    }
    let s = -1;
    for (let l of i) {
      if (s++, s >= a.length && s >= n) continue;
      let d = l._zod.run(
        {
          value: a[s],
          issues: []
        },
        o
      );
      d instanceof Promise ? u.push(d.then((c) => Vo(c, r, s))) : Vo(d, r, s);
    }
    if (t.rest) {
      let l = a.slice(i.length);
      for (let d of l) {
        s++;
        let c = t.rest._zod.run(
          {
            value: d,
            issues: []
          },
          o
        );
        c instanceof Promise ? u.push(c.then((f) => Vo(f, r, s))) : Vo(c, r, s);
      }
    }
    return u.length ? Promise.all(u).then(() => r) : r;
  };
});
function Vo(e3, t, i) {
  e3.issues.length && t.issues.push(...He(i, e3.issues)), t.value[i] = e3.value;
}
var hd = b("$ZodRecord", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    let r = i.value;
    if (!Ji(r))
      return i.issues.push({
        expected: "record",
        code: "invalid_type",
        input: r,
        inst: e3
      }), i;
    let o = [];
    if (t.keyType._zod.values) {
      let a = t.keyType._zod.values;
      i.value = {};
      for (let s of a)
        if (typeof s == "string" || typeof s == "number" || typeof s == "symbol") {
          let l = t.valueType._zod.run(
            {
              value: r[s],
              issues: []
            },
            n
          );
          l instanceof Promise ? o.push(
            l.then((d) => {
              d.issues.length && i.issues.push(...He(s, d.issues)), i.value[s] = d.value;
            })
          ) : (l.issues.length && i.issues.push(...He(s, l.issues)), i.value[s] = l.value);
        }
      let u;
      for (let s in r) a.has(s) || (u = u ?? [], u.push(s));
      u && u.length > 0 && i.issues.push({
        code: "unrecognized_keys",
        input: r,
        inst: e3,
        keys: u
      });
    } else {
      i.value = {};
      for (let a of Reflect.ownKeys(r)) {
        if (a === "__proto__") continue;
        let u = t.keyType._zod.run(
          {
            value: a,
            issues: []
          },
          n
        );
        if (u instanceof Promise)
          throw new Error(
            "Async schemas not supported in object keys currently"
          );
        if (u.issues.length) {
          i.issues.push({
            origin: "record",
            code: "invalid_key",
            issues: u.issues.map((l) => Ze(l, n, se())),
            input: a,
            path: [a],
            inst: e3
          }), i.value[u.value] = u.value;
          continue;
        }
        let s = t.valueType._zod.run(
          {
            value: r[a],
            issues: []
          },
          n
        );
        s instanceof Promise ? o.push(
          s.then((l) => {
            l.issues.length && i.issues.push(...He(a, l.issues)), i.value[u.value] = l.value;
          })
        ) : (s.issues.length && i.issues.push(...He(a, s.issues)), i.value[u.value] = s.value);
      }
    }
    return o.length ? Promise.all(o).then(() => i) : i;
  };
}), bd = b("$ZodMap", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    let r = i.value;
    if (!(r instanceof Map))
      return i.issues.push({
        expected: "map",
        code: "invalid_type",
        input: r,
        inst: e3
      }), i;
    let o = [];
    i.value = /* @__PURE__ */ new Map();
    for (let [a, u] of r) {
      let s = t.keyType._zod.run(
        {
          value: a,
          issues: []
        },
        n
      ), l = t.valueType._zod.run(
        {
          value: u,
          issues: []
        },
        n
      );
      s instanceof Promise || l instanceof Promise ? o.push(
        Promise.all([s, l]).then(([d, c]) => {
          Jf(d, c, i, a, r, e3, n);
        })
      ) : Jf(s, l, i, a, r, e3, n);
    }
    return o.length ? Promise.all(o).then(() => i) : i;
  };
});
function Jf(e3, t, i, n, r, o, a) {
  e3.issues.length && (Yi.has(typeof n) ? i.issues.push(...He(n, e3.issues)) : i.issues.push({
    origin: "map",
    code: "invalid_key",
    input: r,
    inst: o,
    issues: e3.issues.map((u) => Ze(u, a, se()))
  })), t.issues.length && (Yi.has(typeof n) ? i.issues.push(...He(n, t.issues)) : i.issues.push({
    origin: "map",
    code: "invalid_element",
    input: r,
    inst: o,
    key: n,
    issues: t.issues.map((u) => Ze(u, a, se()))
  })), i.value.set(e3.value, t.value);
}
var yd = b("$ZodSet", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    let r = i.value;
    if (!(r instanceof Set))
      return i.issues.push({
        input: r,
        inst: e3,
        expected: "set",
        code: "invalid_type"
      }), i;
    let o = [];
    i.value = /* @__PURE__ */ new Set();
    for (let a of r) {
      let u = t.valueType._zod.run(
        {
          value: a,
          issues: []
        },
        n
      );
      u instanceof Promise ? o.push(u.then((s) => Yf(s, i))) : Yf(u, i);
    }
    return o.length ? Promise.all(o).then(() => i) : i;
  };
});
function Yf(e3, t) {
  e3.issues.length && t.issues.push(...e3.issues), t.value.add(e3.value);
}
var vd = b("$ZodEnum", (e3, t) => {
  V.init(e3, t);
  let i = Wi(t.entries);
  e3._zod.values = new Set(i), e3._zod.pattern = new RegExp(
    `^(${i.filter((n) => Yi.has(typeof n)).map((n) => typeof n == "string" ? It(n) : n.toString()).join("|")})$`
  ), e3._zod.parse = (n, r) => {
    let o = n.value;
    return e3._zod.values.has(o) || n.issues.push({
      code: "invalid_value",
      values: i,
      input: o,
      inst: e3
    }), n;
  };
}), wd = b("$ZodLiteral", (e3, t) => {
  V.init(e3, t), e3._zod.values = new Set(t.values), e3._zod.pattern = new RegExp(
    `^(${t.values.map((i) => typeof i == "string" ? It(i) : i ? i.toString() : String(i)).join("|")})$`
  ), e3._zod.parse = (i, n) => {
    let r = i.value;
    return e3._zod.values.has(r) || i.issues.push({
      code: "invalid_value",
      values: t.values,
      input: r,
      inst: e3
    }), i;
  };
}), Sd = b("$ZodFile", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    let r = i.value;
    return r instanceof File || i.issues.push({
      expected: "file",
      code: "invalid_type",
      input: r,
      inst: e3
    }), i;
  };
}), xd = b("$ZodTransform", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    let r = t.transform(i.value, i);
    if (n.async)
      return (r instanceof Promise ? r : Promise.resolve(r)).then(
        (a) => (i.value = a, i)
      );
    if (r instanceof Promise) throw new at();
    return i.value = r, i;
  };
}), Dd = b("$ZodOptional", (e3, t) => {
  V.init(e3, t), e3._zod.optin = "optional", e3._zod.optout = "optional", te(
    e3._zod,
    "values",
    () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0
  ), te(e3._zod, "pattern", () => {
    let i = t.innerType._zod.pattern;
    return i ? new RegExp(`^(${Qi(i.source)})?$`) : void 0;
  }), e3._zod.parse = (i, n) => i.value === void 0 ? i : t.innerType._zod.run(i, n);
}), kd = b("$ZodNullable", (e3, t) => {
  V.init(e3, t), te(e3._zod, "optin", () => t.innerType._zod.optin), te(e3._zod, "optout", () => t.innerType._zod.optout), te(e3._zod, "pattern", () => {
    let i = t.innerType._zod.pattern;
    return i ? new RegExp(`^(${Qi(i.source)}|null)$`) : void 0;
  }), te(
    e3._zod,
    "values",
    () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0
  ), e3._zod.parse = (i, n) => i.value === null ? i : t.innerType._zod.run(i, n);
}), Ad = b("$ZodDefault", (e3, t) => {
  V.init(e3, t), e3._zod.optin = "optional", te(e3._zod, "values", () => t.innerType._zod.values), e3._zod.parse = (i, n) => {
    if (i.value === void 0) return i.value = t.defaultValue, i;
    let r = t.innerType._zod.run(i, n);
    return r instanceof Promise ? r.then((o) => Xf(o, t)) : Xf(r, t);
  };
});
function Xf(e3, t) {
  return e3.value === void 0 && (e3.value = t.defaultValue), e3;
}
var Ed = b("$ZodPrefault", (e3, t) => {
  V.init(e3, t), e3._zod.optin = "optional", te(e3._zod, "values", () => t.innerType._zod.values), e3._zod.parse = (i, n) => (i.value === void 0 && (i.value = t.defaultValue), t.innerType._zod.run(i, n));
}), zd = b("$ZodNonOptional", (e3, t) => {
  V.init(e3, t), te(e3._zod, "values", () => {
    let i = t.innerType._zod.values;
    return i ? new Set([...i].filter((n) => n !== void 0)) : void 0;
  }), e3._zod.parse = (i, n) => {
    let r = t.innerType._zod.run(i, n);
    return r instanceof Promise ? r.then((o) => eg(o, e3)) : eg(r, e3);
  };
});
function eg(e3, t) {
  return !e3.issues.length && e3.value === void 0 && e3.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e3.value,
    inst: t
  }), e3;
}
var Td = b("$ZodSuccess", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => {
    let r = t.innerType._zod.run(i, n);
    return r instanceof Promise ? r.then((o) => (i.value = o.issues.length === 0, i)) : (i.value = r.issues.length === 0, i);
  };
}), Pd = b("$ZodCatch", (e3, t) => {
  V.init(e3, t), te(e3._zod, "optin", () => t.innerType._zod.optin), te(e3._zod, "optout", () => t.innerType._zod.optout), te(e3._zod, "values", () => t.innerType._zod.values), e3._zod.parse = (i, n) => {
    let r = t.innerType._zod.run(i, n);
    return r instanceof Promise ? r.then(
      (o) => (i.value = o.value, o.issues.length && (i.value = t.catchValue({
        ...i,
        error: {
          issues: o.issues.map((a) => Ze(a, n, se()))
        },
        input: i.value
      }), i.issues = []), i)
    ) : (i.value = r.value, r.issues.length && (i.value = t.catchValue({
      ...i,
      error: {
        issues: r.issues.map((o) => Ze(o, n, se()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), Id = b("$ZodNaN", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => ((typeof i.value != "number" || !Number.isNaN(i.value)) && i.issues.push({
    input: i.value,
    inst: e3,
    expected: "nan",
    code: "invalid_type"
  }), i);
}), sn = b("$ZodPipe", (e3, t) => {
  V.init(e3, t), te(e3._zod, "values", () => t.in._zod.values), te(e3._zod, "optin", () => t.in._zod.optin), te(e3._zod, "optout", () => t.out._zod.optout), e3._zod.parse = (i, n) => {
    let r = t.in._zod.run(i, n);
    return r instanceof Promise ? r.then((o) => tg(o, t, n)) : tg(r, t, n);
  };
});
function tg(e3, t, i) {
  return nr(e3) ? e3 : t.out._zod.run(
    {
      value: e3.value,
      issues: e3.issues
    },
    i
  );
}
var $d = b("$ZodReadonly", (e3, t) => {
  V.init(e3, t), te(e3._zod, "propValues", () => t.innerType._zod.propValues), te(e3._zod, "optin", () => t.innerType._zod.optin), te(e3._zod, "optout", () => t.innerType._zod.optout), e3._zod.parse = (i, n) => {
    let r = t.innerType._zod.run(i, n);
    return r instanceof Promise ? r.then(rg) : rg(r);
  };
});
function rg(e3) {
  return e3.value = Object.freeze(e3.value), e3;
}
var Od = b("$ZodTemplateLiteral", (e3, t) => {
  V.init(e3, t);
  let i = [];
  for (let n of t.parts)
    if (n instanceof V) {
      if (!n._zod.pattern)
        throw new Error(
          `Invalid template literal part, no pattern found: ${[...n._zod.traits].shift()}`
        );
      let r = n._zod.pattern instanceof RegExp ? n._zod.pattern.source : n._zod.pattern;
      if (!r)
        throw new Error(`Invalid template literal part: ${n._zod.traits}`);
      let o = r.startsWith("^") ? 1 : 0, a = r.endsWith("$") ? r.length - 1 : r.length;
      i.push(r.slice(o, a));
    } else if (n === null || Ou.has(typeof n)) i.push(It(`${n}`));
    else throw new Error(`Invalid template literal part: ${n}`);
  e3._zod.pattern = new RegExp(`^${i.join("")}$`), e3._zod.parse = (n, r) => typeof n.value != "string" ? (n.issues.push({
    input: n.value,
    inst: e3,
    expected: "template_literal",
    code: "invalid_type"
  }), n) : (e3._zod.pattern.lastIndex = 0, e3._zod.pattern.test(n.value) || n.issues.push({
    input: n.value,
    inst: e3,
    code: "invalid_format",
    format: "template_literal",
    pattern: e3._zod.pattern.source
  }), n);
}), Nd = b("$ZodPromise", (e3, t) => {
  V.init(e3, t), e3._zod.parse = (i, n) => Promise.resolve(i.value).then(
    (r) => t.innerType._zod.run(
      {
        value: r,
        issues: []
      },
      n
    )
  );
}), Rd = b("$ZodLazy", (e3, t) => {
  V.init(e3, t), te(e3._zod, "innerType", () => t.getter()), te(e3._zod, "pattern", () => e3._zod.innerType._zod.pattern), te(e3._zod, "propValues", () => e3._zod.innerType._zod.propValues), te(e3._zod, "optin", () => e3._zod.innerType._zod.optin), te(e3._zod, "optout", () => e3._zod.innerType._zod.optout), e3._zod.parse = (i, n) => e3._zod.innerType._zod.run(i, n);
}), Cd = b("$ZodCustom", (e3, t) => {
  ce.init(e3, t), V.init(e3, t), e3._zod.parse = (i, n) => i, e3._zod.check = (i) => {
    let n = i.value, r = t.fn(n);
    if (r instanceof Promise) return r.then((o) => ig(o, i, n, e3));
    ig(r, i, n, e3);
  };
});
function ig(e3, t, i, n) {
  if (!e3) {
    let r = {
      code: "custom",
      input: i,
      inst: n,
      path: [...n._zod.def.path ?? []],
      continue: !n._zod.def.abort
    };
    n._zod.def.params && (r.params = n._zod.def.params), t.issues.push(Mu(r));
  }
}
var Gr = {};
et(Gr, {
  ar: () => sg,
  az: () => ug,
  be: () => dg,
  ca: () => cg,
  cs: () => _g,
  de: () => mg,
  en: () => Zo,
  es: () => pg,
  fa: () => fg,
  fi: () => gg,
  fr: () => hg,
  frCA: () => bg,
  he: () => yg,
  hu: () => vg,
  id: () => wg,
  it: () => Sg,
  ja: () => xg,
  kh: () => Dg,
  ko: () => kg,
  mk: () => Ag,
  ms: () => Eg,
  nl: () => zg,
  no: () => Tg,
  ota: () => Pg,
  pl: () => Ig,
  pt: () => $g,
  ru: () => Ng,
  sl: () => Rg,
  sv: () => Cg,
  ta: () => Mg,
  th: () => jg,
  tr: () => qg,
  ua: () => Ug,
  ur: () => Fg,
  vi: () => Lg,
  zhCN: () => Vg,
  zhTW: () => Bg
});
var l2 = () => {
  let e3 = {
    string: {
      unit: "\u062D\u0631\u0641",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A"
    },
    file: {
      unit: "\u0628\u0627\u064A\u062A",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A"
    },
    array: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A"
    },
    set: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u0645\u062F\u062E\u0644",
    email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    url: "\u0631\u0627\u0628\u0637",
    emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
    ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
    cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
    cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
    base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
    base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
    json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
    e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
    jwt: "JWT",
    template_literal: "\u0645\u062F\u062E\u0644"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${r.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${R(r.values[0])}` : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${r.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${r.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"}` : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${r.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${r.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${r.minimum.toString()} ${a.unit}` : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${r.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${r.prefix}"` : o.format === "ends_with" ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${o.suffix}"` : o.format === "includes" ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${o.includes}"` : o.format === "regex" ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${o.pattern}` : `${n[o.format] ?? r.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${r.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${r.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${r.keys.length > 1 ? "\u0629" : ""}: ${k(r.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${r.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${r.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function sg() {
  return {
    localeError: l2()
  };
}
var d2 = () => {
  let e3 = {
    string: {
      unit: "simvol",
      verb: "olmal\u0131d\u0131r"
    },
    file: {
      unit: "bayt",
      verb: "olmal\u0131d\u0131r"
    },
    array: {
      unit: "element",
      verb: "olmal\u0131d\u0131r"
    },
    set: {
      unit: "element",
      verb: "olmal\u0131d\u0131r"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${r.expected}, daxil olan ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${R(r.values[0])}` : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${r.origin ?? "d\u0259y\u0259r"} ${o}${r.maximum.toString()} ${a.unit ?? "element"}` : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${r.origin ?? "d\u0259y\u0259r"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${o}${r.minimum.toString()} ${a.unit}` : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Yanl\u0131\u015F m\u0259tn: "${o.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r` : o.format === "ends_with" ? `Yanl\u0131\u015F m\u0259tn: "${o.suffix}" il\u0259 bitm\u0259lidir` : o.format === "includes" ? `Yanl\u0131\u015F m\u0259tn: "${o.includes}" daxil olmal\u0131d\u0131r` : o.format === "regex" ? `Yanl\u0131\u015F m\u0259tn: ${o.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r` : `Yanl\u0131\u015F ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${r.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${r.keys.length > 1 ? "lar" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${r.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return "Yanl\u0131\u015F d\u0259y\u0259r";
    }
  };
};
function ug() {
  return {
    localeError: d2()
  };
}
function lg(e3, t, i, n) {
  let r = Math.abs(e3), o = r % 10, a = r % 100;
  return a >= 11 && a <= 19 ? n : o === 1 ? t : o >= 2 && o <= 4 ? i : n;
}
var c2 = () => {
  let e3 = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "\u043B\u0456\u043A";
      case "object": {
        if (Array.isArray(r)) return "\u043C\u0430\u0441\u0456\u045E";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u0443\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0430\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0447\u0430\u0441",
    duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
    cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
    base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
    json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
    e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0443\u0432\u043E\u0434"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${r.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${R(r.values[0])}` : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        if (a) {
          let u = Number(r.maximum), s = lg(u, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${o}${r.maximum.toString()} ${s}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        if (a) {
          let u = Number(r.minimum), s = lg(u, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${o}${r.minimum.toString()} ${s}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${o.prefix}"` : o.format === "ends_with" ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${o.suffix}"` : o.format === "includes" ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${o.includes}"` : o.format === "regex" ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}` : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${r.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${r.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${r.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${r.origin}`;
      default:
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
    }
  };
};
function dg() {
  return {
    localeError: c2()
  };
}
var _2 = () => {
  let e3 = {
    string: {
      unit: "car\xE0cters",
      verb: "contenir"
    },
    file: {
      unit: "bytes",
      verb: "contenir"
    },
    array: {
      unit: "elements",
      verb: "contenir"
    },
    set: {
      unit: "elements",
      verb: "contenir"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "entrada",
    email: "adre\xE7a electr\xF2nica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adre\xE7a IPv4",
    ipv6: "adre\xE7a IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Tipus inv\xE0lid: s'esperava ${r.expected}, s'ha rebut ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Valor inv\xE0lid: s'esperava ${R(r.values[0])}` : `Opci\xF3 inv\xE0lida: s'esperava una de ${k(r.values, " o ")}`;
      case "too_big": {
        let o = r.inclusive ? "com a m\xE0xim" : "menys de", a = t(r.origin);
        return a ? `Massa gran: s'esperava que ${r.origin ?? "el valor"} contingu\xE9s ${o} ${r.maximum.toString()} ${a.unit ?? "elements"}` : `Massa gran: s'esperava que ${r.origin ?? "el valor"} fos ${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? "com a m\xEDnim" : "m\xE9s de", a = t(r.origin);
        return a ? `Massa petit: s'esperava que ${r.origin} contingu\xE9s ${o} ${r.minimum.toString()} ${a.unit}` : `Massa petit: s'esperava que ${r.origin} fos ${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Format inv\xE0lid: ha de comen\xE7ar amb "${o.prefix}"` : o.format === "ends_with" ? `Format inv\xE0lid: ha d'acabar amb "${o.suffix}"` : o.format === "includes" ? `Format inv\xE0lid: ha d'incloure "${o.includes}"` : o.format === "regex" ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${o.pattern}` : `Format inv\xE0lid per a ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${r.divisor}`;
      case "unrecognized_keys":
        return `Clau${r.keys.length > 1 ? "s" : ""} no reconeguda${r.keys.length > 1 ? "s" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${r.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      case "invalid_element":
        return `Element inv\xE0lid a ${r.origin}`;
      default:
        return "Entrada inv\xE0lida";
    }
  };
};
function cg() {
  return {
    localeError: _2()
  };
}
var m2 = () => {
  let e3 = {
    string: {
      unit: "znak\u016F",
      verb: "m\xEDt"
    },
    file: {
      unit: "bajt\u016F",
      verb: "m\xEDt"
    },
    array: {
      unit: "prvk\u016F",
      verb: "m\xEDt"
    },
    set: {
      unit: "prvk\u016F",
      verb: "m\xEDt"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "\u010D\xEDslo";
      case "string":
        return "\u0159et\u011Bzec";
      case "boolean":
        return "boolean";
      case "bigint":
        return "bigint";
      case "function":
        return "funkce";
      case "symbol":
        return "symbol";
      case "undefined":
        return "undefined";
      case "object": {
        if (Array.isArray(r)) return "pole";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "regul\xE1rn\xED v\xFDraz",
    email: "e-mailov\xE1 adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a \u010Das ve form\xE1tu ISO",
    date: "datum ve form\xE1tu ISO",
    time: "\u010Das ve form\xE1tu ISO",
    duration: "doba trv\xE1n\xED ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
    base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
    json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
    e164: "\u010D\xEDslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${r.expected}, obdr\u017Eeno ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${R(r.values[0])}` : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${r.origin ?? "hodnota"} mus\xED m\xEDt ${o}${r.maximum.toString()} ${a.unit ?? "prvk\u016F"}` : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${r.origin ?? "hodnota"} mus\xED b\xFDt ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${r.origin ?? "hodnota"} mus\xED m\xEDt ${o}${r.minimum.toString()} ${a.unit ?? "prvk\u016F"}` : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${r.origin ?? "hodnota"} mus\xED b\xFDt ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${o.prefix}"` : o.format === "ends_with" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${o.suffix}"` : o.format === "includes" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${o.includes}"` : o.format === "regex" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${o.pattern}` : `Neplatn\xFD form\xE1t ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${r.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${r.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${r.origin}`;
      default:
        return "Neplatn\xFD vstup";
    }
  };
};
function _g() {
  return {
    localeError: m2()
  };
}
var p2 = () => {
  let e3 = {
    string: {
      unit: "Zeichen",
      verb: "zu haben"
    },
    file: {
      unit: "Bytes",
      verb: "zu haben"
    },
    array: {
      unit: "Elemente",
      verb: "zu haben"
    },
    set: {
      unit: "Elemente",
      verb: "zu haben"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "Zahl";
      case "object": {
        if (Array.isArray(r)) return "Array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ung\xFCltige Eingabe: erwartet ${r.expected}, erhalten ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Ung\xFCltige Eingabe: erwartet ${R(r.values[0])}` : `Ung\xFCltige Option: erwartet eine von ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Zu gro\xDF: erwartet, dass ${r.origin ?? "Wert"} ${o}${r.maximum.toString()} ${a.unit ?? "Elemente"} hat` : `Zu gro\xDF: erwartet, dass ${r.origin ?? "Wert"} ${o}${r.maximum.toString()} ist`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Zu klein: erwartet, dass ${r.origin} ${o}${r.minimum.toString()} ${a.unit} hat` : `Zu klein: erwartet, dass ${r.origin} ${o}${r.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Ung\xFCltiger String: muss mit "${o.prefix}" beginnen` : o.format === "ends_with" ? `Ung\xFCltiger String: muss mit "${o.suffix}" enden` : o.format === "includes" ? `Ung\xFCltiger String: muss "${o.includes}" enthalten` : o.format === "regex" ? `Ung\xFCltiger String: muss dem Muster ${o.pattern} entsprechen` : `Ung\xFCltig: ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${r.divisor} sein`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${r.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${r.origin}`;
      default:
        return "Ung\xFCltige Eingabe";
    }
  };
};
function mg() {
  return {
    localeError: p2()
  };
}
var f2 = (e3) => {
  let t = typeof e3;
  switch (t) {
    case "number":
      return Number.isNaN(e3) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(e3)) return "array";
      if (e3 === null) return "null";
      if (Object.getPrototypeOf(e3) !== Object.prototype && e3.constructor)
        return e3.constructor.name;
    }
  }
  return t;
}, g2 = () => {
  let e3 = {
    string: {
      unit: "characters",
      verb: "to have"
    },
    file: {
      unit: "bytes",
      verb: "to have"
    },
    array: {
      unit: "items",
      verb: "to have"
    },
    set: {
      unit: "items",
      verb: "to have"
    }
  };
  function t(n) {
    return e3[n] ?? null;
  }
  let i = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Invalid input: expected ${n.expected}, received ${f2(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Invalid input: expected ${R(n.values[0])}` : `Invalid option: expected one of ${k(n.values, "|")}`;
      case "too_big": {
        let r = n.inclusive ? "<=" : "<", o = t(n.origin);
        return o ? `Too big: expected ${n.origin ?? "value"} to have ${r}${n.maximum.toString()} ${o.unit ?? "elements"}` : `Too big: expected ${n.origin ?? "value"} to be ${r}${n.maximum.toString()}`;
      }
      case "too_small": {
        let r = n.inclusive ? ">=" : ">", o = t(n.origin);
        return o ? `Too small: expected ${n.origin} to have ${r}${n.minimum.toString()} ${o.unit}` : `Too small: expected ${n.origin} to be ${r}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = n;
        return r.format === "starts_with" ? `Invalid string: must start with "${r.prefix}"` : r.format === "ends_with" ? `Invalid string: must end with "${r.suffix}"` : r.format === "includes" ? `Invalid string: must include "${r.includes}"` : r.format === "regex" ? `Invalid string: must match pattern ${r.pattern}` : `Invalid ${i[r.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${n.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${n.keys.length > 1 ? "s" : ""}: ${k(n.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${n.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${n.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function Zo() {
  return {
    localeError: g2()
  };
}
var h2 = () => {
  let e3 = {
    string: {
      unit: "caracteres",
      verb: "tener"
    },
    file: {
      unit: "bytes",
      verb: "tener"
    },
    array: {
      unit: "elementos",
      verb: "tener"
    },
    set: {
      unit: "elementos",
      verb: "tener"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "n\xFAmero";
      case "object": {
        if (Array.isArray(r)) return "arreglo";
        if (r === null) return "nulo";
        if (Object.getPrototypeOf(r) !== Object.prototype)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "entrada",
    email: "direcci\xF3n de correo electr\xF3nico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duraci\xF3n ISO",
    ipv4: "direcci\xF3n IPv4",
    ipv6: "direcci\xF3n IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Entrada inv\xE1lida: se esperaba ${r.expected}, recibido ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Entrada inv\xE1lida: se esperaba ${R(r.values[0])}` : `Opci\xF3n inv\xE1lida: se esperaba una de ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Demasiado grande: se esperaba que ${r.origin ?? "valor"} tuviera ${o}${r.maximum.toString()} ${a.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${r.origin ?? "valor"} fuera ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Demasiado peque\xF1o: se esperaba que ${r.origin} tuviera ${o}${r.minimum.toString()} ${a.unit}` : `Demasiado peque\xF1o: se esperaba que ${r.origin} fuera ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Cadena inv\xE1lida: debe comenzar con "${o.prefix}"` : o.format === "ends_with" ? `Cadena inv\xE1lida: debe terminar en "${o.suffix}"` : o.format === "includes" ? `Cadena inv\xE1lida: debe incluir "${o.includes}"` : o.format === "regex" ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${o.pattern}` : `Inv\xE1lido ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${r.divisor}`;
      case "unrecognized_keys":
        return `Llave${r.keys.length > 1 ? "s" : ""} desconocida${r.keys.length > 1 ? "s" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${r.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${r.origin}`;
      default:
        return "Entrada inv\xE1lida";
    }
  };
};
function pg() {
  return {
    localeError: h2()
  };
}
var b2 = () => {
  let e3 = {
    string: {
      unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F"
    },
    file: {
      unit: "\u0628\u0627\u06CC\u062A",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F"
    },
    array: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F"
    },
    set: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "\u0639\u062F\u062F";
      case "object": {
        if (Array.isArray(r)) return "\u0622\u0631\u0627\u06CC\u0647";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u0648\u0631\u0648\u062F\u06CC",
    email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
    url: "URL",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
    time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    ipv4: "IPv4 \u0622\u062F\u0631\u0633",
    ipv6: "IPv6 \u0622\u062F\u0631\u0633",
    cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
    cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
    base64: "base64-encoded \u0631\u0634\u062A\u0647",
    base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
    json_string: "JSON \u0631\u0634\u062A\u0647",
    e164: "E.164 \u0639\u062F\u062F",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u06CC"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${r.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${i(r.input)} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      case "invalid_value":
        return r.values.length === 1 ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${R(r.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F` : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${k(r.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${r.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${r.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F` : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${r.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${r.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${r.origin} \u0628\u0627\u06CC\u062F ${o}${r.minimum.toString()} ${a.unit} \u0628\u0627\u0634\u062F` : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${r.origin} \u0628\u0627\u06CC\u062F ${o}${r.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F` : o.format === "ends_with" ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F` : o.format === "includes" ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${o.includes}" \u0628\u0627\u0634\u062F` : o.format === "regex" ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${o.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F` : `${n[o.format] ?? r.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${r.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${r.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${r.origin}`;
      case "invalid_union":
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${r.origin}`;
      default:
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
    }
  };
};
function fg() {
  return {
    localeError: b2()
  };
}
var y2 = () => {
  let e3 = {
    string: {
      unit: "merkki\xE4",
      subject: "merkkijonon"
    },
    file: {
      unit: "tavua",
      subject: "tiedoston"
    },
    array: {
      unit: "alkiota",
      subject: "listan"
    },
    set: {
      unit: "alkiota",
      subject: "joukon"
    },
    number: {
      unit: "",
      subject: "luvun"
    },
    bigint: {
      unit: "",
      subject: "suuren kokonaisluvun"
    },
    int: {
      unit: "",
      subject: "kokonaisluvun"
    },
    date: {
      unit: "",
      subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "s\xE4\xE4nn\xF6llinen lauseke",
    email: "s\xE4hk\xF6postiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${r.expected}, oli ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${R(r.values[0])}` : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Liian suuri: ${a.subject} t\xE4ytyy olla ${o}${r.maximum.toString()} ${a.unit}`.trim() : `Liian suuri: arvon t\xE4ytyy olla ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Liian pieni: ${a.subject} t\xE4ytyy olla ${o}${r.minimum.toString()} ${a.unit}`.trim() : `Liian pieni: arvon t\xE4ytyy olla ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${o.prefix}"` : o.format === "ends_with" ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${o.suffix}"` : o.format === "includes" ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${o.includes}"` : o.format === "regex" ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${o.pattern}` : `Virheellinen ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${r.divisor} monikerta`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen sy\xF6te";
    }
  };
};
function gg() {
  return {
    localeError: y2()
  };
}
var v2 = () => {
  let e3 = {
    string: {
      unit: "caract\xE8res",
      verb: "avoir"
    },
    file: {
      unit: "octets",
      verb: "avoir"
    },
    array: {
      unit: "\xE9l\xE9ments",
      verb: "avoir"
    },
    set: {
      unit: "\xE9l\xE9ments",
      verb: "avoir"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "nombre";
      case "object": {
        if (Array.isArray(r)) return "tableau";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "entr\xE9e",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : ${r.expected} attendu, ${i(r.input)} re\xE7u`;
      case "invalid_value":
        return r.values.length === 1 ? `Entr\xE9e invalide : ${R(r.values[0])} attendu` : `Option invalide : une valeur parmi ${k(r.values, "|")} attendue`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Trop grand : ${r.origin ?? "valeur"} doit ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "\xE9l\xE9ment(s)"}` : `Trop grand : ${r.origin ?? "valeur"} doit \xEAtre ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Trop petit : ${r.origin} doit ${a.verb} ${o}${r.minimum.toString()} ${a.unit}` : `Trop petit : ${r.origin} doit \xEAtre ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"` : o.format === "ends_with" ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"` : o.format === "includes" ? `Cha\xEEne invalide : doit inclure "${o.includes}"` : o.format === "regex" ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${o.pattern}` : `${n[o.format] ?? r.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${r.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${r.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${r.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function hg() {
  return {
    localeError: v2()
  };
}
var w2 = () => {
  let e3 = {
    string: {
      unit: "caract\xE8res",
      verb: "avoir"
    },
    file: {
      unit: "octets",
      verb: "avoir"
    },
    array: {
      unit: "\xE9l\xE9ments",
      verb: "avoir"
    },
    set: {
      unit: "\xE9l\xE9ments",
      verb: "avoir"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "entr\xE9e",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : attendu ${r.expected}, re\xE7u ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Entr\xE9e invalide : attendu ${R(r.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "\u2264" : "<", a = t(r.origin);
        return a ? `Trop grand : attendu que ${r.origin ?? "la valeur"} ait ${o}${r.maximum.toString()} ${a.unit}` : `Trop grand : attendu que ${r.origin ?? "la valeur"} soit ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? "\u2265" : ">", a = t(r.origin);
        return a ? `Trop petit : attendu que ${r.origin} ait ${o}${r.minimum.toString()} ${a.unit}` : `Trop petit : attendu que ${r.origin} soit ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"` : o.format === "ends_with" ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"` : o.format === "includes" ? `Cha\xEEne invalide : doit inclure "${o.includes}"` : o.format === "regex" ? `Cha\xEEne invalide : doit correspondre au motif ${o.pattern}` : `${n[o.format] ?? r.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${r.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${r.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${r.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function bg() {
  return {
    localeError: w2()
  };
}
var S2 = () => {
  let e3 = {
    string: {
      unit: "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC"
    },
    file: {
      unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC"
    },
    array: {
      unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC"
    },
    set: {
      unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u05E7\u05DC\u05D8",
    email: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
    url: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
    emoji: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
    date: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO",
    time: "\u05D6\u05DE\u05DF ISO",
    duration: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
    ipv4: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4",
    ipv6: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6",
    cidrv4: "\u05D8\u05D5\u05D5\u05D7 IPv4",
    cidrv6: "\u05D8\u05D5\u05D5\u05D7 IPv6",
    base64: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
    base64url: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
    json_string: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
    e164: "\u05DE\u05E1\u05E4\u05E8 E.164",
    jwt: "JWT",
    template_literal: "\u05E7\u05DC\u05D8"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${r.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${R(r.values[0])}` : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05D0\u05D7\u05EA \u05DE\u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA  ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${r.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.maximum.toString()} ${a.unit ?? "elements"}` : `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${r.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${r.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.minimum.toString()} ${a.unit}` : `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${r.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1"${o.prefix}"` : o.format === "ends_with" ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${o.suffix}"` : o.format === "includes" ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${o.includes}"` : o.format === "regex" ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${o.pattern}` : `${n[o.format] ?? r.format} \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${r.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${r.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${r.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `\u05DE\u05E4\u05EA\u05D7 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${r.origin}`;
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element":
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${r.origin}`;
      default:
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
    }
  };
};
function yg() {
  return {
    localeError: S2()
  };
}
var x2 = () => {
  let e3 = {
    string: {
      unit: "karakter",
      verb: "legyen"
    },
    file: {
      unit: "byte",
      verb: "legyen"
    },
    array: {
      unit: "elem",
      verb: "legyen"
    },
    set: {
      unit: "elem",
      verb: "legyen"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "sz\xE1m";
      case "object": {
        if (Array.isArray(r)) return "t\xF6mb";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "bemenet",
    email: "email c\xEDm",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO id\u0151b\xE9lyeg",
    date: "ISO d\xE1tum",
    time: "ISO id\u0151",
    duration: "ISO id\u0151intervallum",
    ipv4: "IPv4 c\xEDm",
    ipv6: "IPv6 c\xEDm",
    cidrv4: "IPv4 tartom\xE1ny",
    cidrv6: "IPv6 tartom\xE1ny",
    base64: "base64-k\xF3dolt string",
    base64url: "base64url-k\xF3dolt string",
    json_string: "JSON string",
    e164: "E.164 sz\xE1m",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${r.expected}, a kapott \xE9rt\xE9k ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${R(r.values[0])}` : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `T\xFAl nagy: ${r.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${o}${r.maximum.toString()} ${a.unit ?? "elem"}` : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${r.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${r.origin} m\xE9rete t\xFAl kicsi ${o}${r.minimum.toString()} ${a.unit}` : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${r.origin} t\xFAl kicsi ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\xC9rv\xE9nytelen string: "${o.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie` : o.format === "ends_with" ? `\xC9rv\xE9nytelen string: "${o.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie` : o.format === "includes" ? `\xC9rv\xE9nytelen string: "${o.includes}" \xE9rt\xE9ket kell tartalmaznia` : o.format === "regex" ? `\xC9rv\xE9nytelen string: ${o.pattern} mint\xE1nak kell megfelelnie` : `\xC9rv\xE9nytelen ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${r.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${r.keys.length > 1 ? "s" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${r.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${r.origin}`;
      default:
        return "\xC9rv\xE9nytelen bemenet";
    }
  };
};
function vg() {
  return {
    localeError: x2()
  };
}
var D2 = () => {
  let e3 = {
    string: {
      unit: "karakter",
      verb: "memiliki"
    },
    file: {
      unit: "byte",
      verb: "memiliki"
    },
    array: {
      unit: "item",
      verb: "memiliki"
    },
    set: {
      unit: "item",
      verb: "memiliki"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${r.expected}, diterima ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Input tidak valid: diharapkan ${R(r.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Terlalu besar: diharapkan ${r.origin ?? "value"} memiliki ${o}${r.maximum.toString()} ${a.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${r.origin ?? "value"} menjadi ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Terlalu kecil: diharapkan ${r.origin} memiliki ${o}${r.minimum.toString()} ${a.unit}` : `Terlalu kecil: diharapkan ${r.origin} menjadi ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${o.prefix}"` : o.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${o.suffix}"` : o.format === "includes" ? `String tidak valid: harus menyertakan "${o.includes}"` : o.format === "regex" ? `String tidak valid: harus sesuai pola ${o.pattern}` : `${n[o.format] ?? r.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${r.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${r.keys.length > 1 ? "s" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${r.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${r.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function wg() {
  return {
    localeError: D2()
  };
}
var k2 = () => {
  let e3 = {
    string: {
      unit: "caratteri",
      verb: "avere"
    },
    file: {
      unit: "byte",
      verb: "avere"
    },
    array: {
      unit: "elementi",
      verb: "avere"
    },
    set: {
      unit: "elementi",
      verb: "avere"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "numero";
      case "object": {
        if (Array.isArray(r)) return "vettore";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Input non valido: atteso ${r.expected}, ricevuto ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Input non valido: atteso ${R(r.values[0])}` : `Opzione non valida: atteso uno tra ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Troppo grande: ${r.origin ?? "valore"} deve avere ${o}${r.maximum.toString()} ${a.unit ?? "elementi"}` : `Troppo grande: ${r.origin ?? "valore"} deve essere ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Troppo piccolo: ${r.origin} deve avere ${o}${r.minimum.toString()} ${a.unit}` : `Troppo piccolo: ${r.origin} deve essere ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Stringa non valida: deve iniziare con "${o.prefix}"` : o.format === "ends_with" ? `Stringa non valida: deve terminare con "${o.suffix}"` : o.format === "includes" ? `Stringa non valida: deve includere "${o.includes}"` : o.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${o.pattern}` : `Invalid ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${r.divisor}`;
      case "unrecognized_keys":
        return `Chiav${r.keys.length > 1 ? "i" : "e"} non riconosciut${r.keys.length > 1 ? "e" : "a"}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${r.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${r.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function Sg() {
  return {
    localeError: k2()
  };
}
var A2 = () => {
  let e3 = {
    string: {
      unit: "\u6587\u5B57",
      verb: "\u3067\u3042\u308B"
    },
    file: {
      unit: "\u30D0\u30A4\u30C8",
      verb: "\u3067\u3042\u308B"
    },
    array: {
      unit: "\u8981\u7D20",
      verb: "\u3067\u3042\u308B"
    },
    set: {
      unit: "\u8981\u7D20",
      verb: "\u3067\u3042\u308B"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "\u6570\u5024";
      case "object": {
        if (Array.isArray(r)) return "\u914D\u5217";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u5165\u529B\u5024",
    email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    url: "URL",
    emoji: "\u7D75\u6587\u5B57",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u6642",
    date: "ISO\u65E5\u4ED8",
    time: "ISO\u6642\u523B",
    duration: "ISO\u671F\u9593",
    ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
    ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
    cidrv4: "IPv4\u7BC4\u56F2",
    cidrv6: "IPv6\u7BC4\u56F2",
    base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    json_string: "JSON\u6587\u5B57\u5217",
    e164: "E.164\u756A\u53F7",
    jwt: "JWT",
    template_literal: "\u5165\u529B\u5024"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u7121\u52B9\u306A\u5165\u529B: ${r.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${i(r.input)}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      case "invalid_value":
        return r.values.length === 1 ? `\u7121\u52B9\u306A\u5165\u529B: ${R(r.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F` : `\u7121\u52B9\u306A\u9078\u629E: ${k(r.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${r.origin ?? "\u5024"}\u306F${r.maximum.toString()}${a.unit ?? "\u8981\u7D20"}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : `\u5927\u304D\u3059\u304E\u308B\u5024: ${r.origin ?? "\u5024"}\u306F${r.maximum.toString()}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${r.origin}\u306F${r.minimum.toString()}${a.unit}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${r.origin}\u306F${r.minimum.toString()}${o}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : o.format === "ends_with" ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : o.format === "includes" ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : o.format === "regex" ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${o.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059` : `\u7121\u52B9\u306A${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${r.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${r.keys.length > 1 ? "\u7FA4" : ""}: ${k(r.keys, "\u3001")}`;
      case "invalid_key":
        return `${r.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${r.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return "\u7121\u52B9\u306A\u5165\u529B";
    }
  };
};
function xg() {
  return {
    localeError: A2()
  };
}
var E2 = () => {
  let e3 = {
    string: {
      unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793"
    },
    file: {
      unit: "\u1794\u17C3",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793"
    },
    array: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793"
    },
    set: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "\u1798\u17B7\u1793\u1798\u17C2\u1793\u1787\u17B6\u179B\u17C1\u1781 (NaN)" : "\u179B\u17C1\u1781";
      case "object": {
        if (Array.isArray(r)) return "\u17A2\u17B6\u179A\u17C1 (Array)";
        if (r === null)
          return "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
    url: "URL",
    emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
    date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
    time: "\u1798\u17C9\u17C4\u1784 ISO",
    duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
    ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
    base64url: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
    json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
    e164: "\u179B\u17C1\u1781 E.164",
    jwt: "JWT",
    template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${R(r.values[0])}` : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${r.maximum.toString()} ${a.unit ?? "\u1792\u17B6\u178F\u17BB"}` : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin} ${o} ${r.minimum.toString()} ${a.unit}` : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${r.origin} ${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${o.prefix}"` : o.format === "ends_with" ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${o.suffix}"` : o.format === "includes" ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${o.includes}"` : o.format === "regex" ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${o.pattern}` : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${r.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${r.origin}`;
      case "invalid_union":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${r.origin}`;
      default:
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
    }
  };
};
function Dg() {
  return {
    localeError: E2()
  };
}
var z2 = () => {
  let e3 = {
    string: {
      unit: "\uBB38\uC790",
      verb: "to have"
    },
    file: {
      unit: "\uBC14\uC774\uD2B8",
      verb: "to have"
    },
    array: {
      unit: "\uAC1C",
      verb: "to have"
    },
    set: {
      unit: "\uAC1C",
      verb: "to have"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\uC785\uB825",
    email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
    url: "URL",
    emoji: "\uC774\uBAA8\uC9C0",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
    date: "ISO \uB0A0\uC9DC",
    time: "ISO \uC2DC\uAC04",
    duration: "ISO \uAE30\uAC04",
    ipv4: "IPv4 \uC8FC\uC18C",
    ipv6: "IPv6 \uC8FC\uC18C",
    cidrv4: "IPv4 \uBC94\uC704",
    cidrv6: "IPv6 \uBC94\uC704",
    base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    json_string: "JSON \uBB38\uC790\uC5F4",
    e164: "E.164 \uBC88\uD638",
    jwt: "JWT",
    template_literal: "\uC785\uB825"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${r.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${i(r.input)}\uC785\uB2C8\uB2E4`;
      case "invalid_value":
        return r.values.length === 1 ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${R(r.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4` : `\uC798\uBABB\uB41C \uC635\uC158: ${k(r.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        let o = r.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC", a = o === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4", u = t(r.origin), s = u?.unit ?? "\uC694\uC18C";
        return u ? `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${r.maximum.toString()}${s} ${o}${a}` : `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${r.maximum.toString()} ${o}${a}`;
      }
      case "too_small": {
        let o = r.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC", a = o === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4", u = t(r.origin), s = u?.unit ?? "\uC694\uC18C";
        return u ? `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${r.minimum.toString()}${s} ${o}${a}` : `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${r.minimum.toString()} ${o}${a}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4` : o.format === "ends_with" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4` : o.format === "includes" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4` : o.format === "regex" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${o.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4` : `\uC798\uBABB\uB41C ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${r.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${r.origin}`;
      case "invalid_union":
        return "\uC798\uBABB\uB41C \uC785\uB825";
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${r.origin}`;
      default:
        return "\uC798\uBABB\uB41C \uC785\uB825";
    }
  };
};
function kg() {
  return {
    localeError: z2()
  };
}
var T2 = () => {
  let e3 = {
    string: {
      unit: "\u0437\u043D\u0430\u0446\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442"
    },
    file: {
      unit: "\u0431\u0430\u0458\u0442\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442"
    },
    array: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442"
    },
    set: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "\u0431\u0440\u043E\u0458";
      case "object": {
        if (Array.isArray(r)) return "\u043D\u0438\u0437\u0430";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u0432\u043D\u0435\u0441",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u045F\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0443\u043C",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
    cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
    cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
    base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    json_string: "JSON \u043D\u0438\u0437\u0430",
    e164: "E.164 \u0431\u0440\u043E\u0458",
    jwt: "JWT",
    template_literal: "\u0432\u043D\u0435\u0441"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Invalid input: expected ${R(r.values[0])}` : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${o}${r.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}` : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin} \u0434\u0430 \u0438\u043C\u0430 ${o}${r.minimum.toString()} ${a.unit}` : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${r.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${o.prefix}"` : o.format === "ends_with" ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${o.suffix}"` : o.format === "includes" ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${o.includes}"` : o.format === "regex" ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${o.pattern}` : `Invalid ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${r.divisor}`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${r.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${r.origin}`;
      default:
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
    }
  };
};
function Ag() {
  return {
    localeError: T2()
  };
}
var P2 = () => {
  let e3 = {
    string: {
      unit: "aksara",
      verb: "mempunyai"
    },
    file: {
      unit: "bait",
      verb: "mempunyai"
    },
    array: {
      unit: "elemen",
      verb: "mempunyai"
    },
    set: {
      unit: "elemen",
      verb: "mempunyai"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "nombor";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${r.expected}, diterima ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Input tidak sah: dijangka ${R(r.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Terlalu besar: dijangka ${r.origin ?? "nilai"} ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "elemen"}` : `Terlalu besar: dijangka ${r.origin ?? "nilai"} adalah ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Terlalu kecil: dijangka ${r.origin} ${a.verb} ${o}${r.minimum.toString()} ${a.unit}` : `Terlalu kecil: dijangka ${r.origin} adalah ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${o.prefix}"` : o.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${o.suffix}"` : o.format === "includes" ? `String tidak sah: mesti mengandungi "${o.includes}"` : o.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${o.pattern}` : `${n[o.format] ?? r.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${r.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${r.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${r.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function Eg() {
  return {
    localeError: P2()
  };
}
var I2 = () => {
  let e3 = {
    string: {
      unit: "tekens"
    },
    file: {
      unit: "bytes"
    },
    array: {
      unit: "elementen"
    },
    set: {
      unit: "elementen"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "getal";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${r.expected}, ontving ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Ongeldige invoer: verwacht ${R(r.values[0])}` : `Ongeldige optie: verwacht \xE9\xE9n van ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Te lang: verwacht dat ${r.origin ?? "waarde"} ${o}${r.maximum.toString()} ${a.unit ?? "elementen"} bevat` : `Te lang: verwacht dat ${r.origin ?? "waarde"} ${o}${r.maximum.toString()} is`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Te kort: verwacht dat ${r.origin} ${o}${r.minimum.toString()} ${a.unit} bevat` : `Te kort: verwacht dat ${r.origin} ${o}${r.minimum.toString()} is`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Ongeldige tekst: moet met "${o.prefix}" beginnen` : o.format === "ends_with" ? `Ongeldige tekst: moet op "${o.suffix}" eindigen` : o.format === "includes" ? `Ongeldige tekst: moet "${o.includes}" bevatten` : o.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${o.pattern}` : `Ongeldig: ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${r.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${r.keys.length > 1 ? "s" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${r.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${r.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function zg() {
  return {
    localeError: I2()
  };
}
var $2 = () => {
  let e3 = {
    string: {
      unit: "tegn",
      verb: "\xE5 ha"
    },
    file: {
      unit: "bytes",
      verb: "\xE5 ha"
    },
    array: {
      unit: "elementer",
      verb: "\xE5 inneholde"
    },
    set: {
      unit: "elementer",
      verb: "\xE5 inneholde"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "tall";
      case "object": {
        if (Array.isArray(r)) return "liste";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${r.expected}, fikk ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Ugyldig verdi: forventet ${R(r.values[0])}` : `Ugyldig valg: forventet en av ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `For stor(t): forventet ${r.origin ?? "value"} til \xE5 ha ${o}${r.maximum.toString()} ${a.unit ?? "elementer"}` : `For stor(t): forventet ${r.origin ?? "value"} til \xE5 ha ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `For lite(n): forventet ${r.origin} til \xE5 ha ${o}${r.minimum.toString()} ${a.unit}` : `For lite(n): forventet ${r.origin} til \xE5 ha ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Ugyldig streng: m\xE5 starte med "${o.prefix}"` : o.format === "ends_with" ? `Ugyldig streng: m\xE5 ende med "${o.suffix}"` : o.format === "includes" ? `Ugyldig streng: m\xE5 inneholde "${o.includes}"` : o.format === "regex" ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${o.pattern}` : `Ugyldig ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${r.divisor}`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${r.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${r.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function Tg() {
  return {
    localeError: $2()
  };
}
var O2 = () => {
  let e3 = {
    string: {
      unit: "harf",
      verb: "olmal\u0131d\u0131r"
    },
    file: {
      unit: "bayt",
      verb: "olmal\u0131d\u0131r"
    },
    array: {
      unit: "unsur",
      verb: "olmal\u0131d\u0131r"
    },
    set: {
      unit: "unsur",
      verb: "olmal\u0131d\u0131r"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "numara";
      case "object": {
        if (Array.isArray(r)) return "saf";
        if (r === null) return "gayb";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "giren",
    email: "epostag\xE2h",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO heng\xE2m\u0131",
    date: "ISO tarihi",
    time: "ISO zaman\u0131",
    duration: "ISO m\xFCddeti",
    ipv4: "IPv4 ni\u015F\xE2n\u0131",
    ipv6: "IPv6 ni\u015F\xE2n\u0131",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-\u015Fifreli metin",
    base64url: "base64url-\u015Fifreli metin",
    json_string: "JSON metin",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "giren"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `F\xE2sit giren: umulan ${r.expected}, al\u0131nan ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `F\xE2sit giren: umulan ${R(r.values[0])}` : `F\xE2sit tercih: m\xFBteberler ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Fazla b\xFCy\xFCk: ${r.origin ?? "value"}, ${o}${r.maximum.toString()} ${a.unit ?? "elements"} sahip olmal\u0131yd\u0131.` : `Fazla b\xFCy\xFCk: ${r.origin ?? "value"}, ${o}${r.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Fazla k\xFC\xE7\xFCk: ${r.origin}, ${o}${r.minimum.toString()} ${a.unit} sahip olmal\u0131yd\u0131.` : `Fazla k\xFC\xE7\xFCk: ${r.origin}, ${o}${r.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `F\xE2sit metin: "${o.prefix}" ile ba\u015Flamal\u0131.` : o.format === "ends_with" ? `F\xE2sit metin: "${o.suffix}" ile bitmeli.` : o.format === "includes" ? `F\xE2sit metin: "${o.includes}" ihtiv\xE2 etmeli.` : o.format === "regex" ? `F\xE2sit metin: ${o.pattern} nak\u015F\u0131na uymal\u0131.` : `F\xE2sit ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${r.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${r.keys.length > 1 ? "s" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${r.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return "K\u0131ymet tan\u0131namad\u0131.";
    }
  };
};
function Pg() {
  return {
    localeError: O2()
  };
}
var N2 = () => {
  let e3 = {
    string: {
      unit: "znak\xF3w",
      verb: "mie\u0107"
    },
    file: {
      unit: "bajt\xF3w",
      verb: "mie\u0107"
    },
    array: {
      unit: "element\xF3w",
      verb: "mie\u0107"
    },
    set: {
      unit: "element\xF3w",
      verb: "mie\u0107"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "liczba";
      case "object": {
        if (Array.isArray(r)) return "tablica";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "wyra\u017Cenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
    base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
    json_string: "ci\u0105g znak\xF3w w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wej\u015Bcie"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${r.expected}, otrzymano ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${R(r.values[0])}` : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${r.maximum.toString()} ${a.unit ?? "element\xF3w"}` : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${r.minimum.toString()} ${a.unit ?? "element\xF3w"}` : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${o.prefix}"` : o.format === "ends_with" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${o.suffix}"` : o.format === "includes" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${o.includes}"` : o.format === "regex" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${o.pattern}` : `Nieprawid\u0142ow(y/a/e) ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${r.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${r.keys.length > 1 ? "s" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${r.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${r.origin}`;
      default:
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
    }
  };
};
function Ig() {
  return {
    localeError: N2()
  };
}
var R2 = () => {
  let e3 = {
    string: {
      unit: "caracteres",
      verb: "ter"
    },
    file: {
      unit: "bytes",
      verb: "ter"
    },
    array: {
      unit: "itens",
      verb: "ter"
    },
    set: {
      unit: "itens",
      verb: "ter"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "n\xFAmero";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "nulo";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "padr\xE3o",
    email: "endere\xE7o de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "dura\xE7\xE3o ISO",
    ipv4: "endere\xE7o IPv4",
    ipv6: "endere\xE7o IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Tipo inv\xE1lido: esperado ${r.expected}, recebido ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Entrada inv\xE1lida: esperado ${R(r.values[0])}` : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Muito grande: esperado que ${r.origin ?? "valor"} tivesse ${o}${r.maximum.toString()} ${a.unit ?? "elementos"}` : `Muito grande: esperado que ${r.origin ?? "valor"} fosse ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Muito pequeno: esperado que ${r.origin} tivesse ${o}${r.minimum.toString()} ${a.unit}` : `Muito pequeno: esperado que ${r.origin} fosse ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Texto inv\xE1lido: deve come\xE7ar com "${o.prefix}"` : o.format === "ends_with" ? `Texto inv\xE1lido: deve terminar com "${o.suffix}"` : o.format === "includes" ? `Texto inv\xE1lido: deve incluir "${o.includes}"` : o.format === "regex" ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${o.pattern}` : `${n[o.format] ?? r.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${r.divisor}`;
      case "unrecognized_keys":
        return `Chave${r.keys.length > 1 ? "s" : ""} desconhecida${r.keys.length > 1 ? "s" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${r.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${r.origin}`;
      default:
        return "Campo inv\xE1lido";
    }
  };
};
function $g() {
  return {
    localeError: R2()
  };
}
function Og(e3, t, i, n) {
  let r = Math.abs(e3), o = r % 10, a = r % 100;
  return a >= 11 && a <= 19 ? n : o === 1 ? t : o >= 2 && o <= 4 ? i : n;
}
var C2 = () => {
  let e3 = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
      case "object": {
        if (Array.isArray(r)) return "\u043C\u0430\u0441\u0441\u0438\u0432";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u0432\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u044F",
    duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
    base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
    json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0432\u043E\u0434"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${r.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${R(r.values[0])}` : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        if (a) {
          let u = Number(r.maximum), s = Og(u, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${r.maximum.toString()} ${s}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        if (a) {
          let u = Number(r.minimum), s = Og(u, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${r.minimum.toString()} ${s}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${r.origin} \u0431\u0443\u0434\u0435\u0442 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${o.prefix}"` : o.format === "ends_with" ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${o.suffix}"` : o.format === "includes" ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${o.includes}"` : o.format === "regex" ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}` : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${r.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${r.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${r.keys.length > 1 ? "\u0438" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${r.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${r.origin}`;
      default:
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
    }
  };
};
function Ng() {
  return {
    localeError: C2()
  };
}
var M2 = () => {
  let e3 = {
    string: {
      unit: "znakov",
      verb: "imeti"
    },
    file: {
      unit: "bajtov",
      verb: "imeti"
    },
    array: {
      unit: "elementov",
      verb: "imeti"
    },
    set: {
      unit: "elementov",
      verb: "imeti"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "\u0161tevilo";
      case "object": {
        if (Array.isArray(r)) return "tabela";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "vnos",
    email: "e-po\u0161tni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in \u010Das",
    date: "ISO datum",
    time: "ISO \u010Das",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 \u0161tevilka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Neveljaven vnos: pri\u010Dakovano ${r.expected}, prejeto ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Neveljaven vnos: pri\u010Dakovano ${R(r.values[0])}` : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Preveliko: pri\u010Dakovano, da bo ${r.origin ?? "vrednost"} imelo ${o}${r.maximum.toString()} ${a.unit ?? "elementov"}` : `Preveliko: pri\u010Dakovano, da bo ${r.origin ?? "vrednost"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Premajhno: pri\u010Dakovano, da bo ${r.origin} imelo ${o}${r.minimum.toString()} ${a.unit}` : `Premajhno: pri\u010Dakovano, da bo ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Neveljaven niz: mora se za\u010Deti z "${o.prefix}"` : o.format === "ends_with" ? `Neveljaven niz: mora se kon\u010Dati z "${o.suffix}"` : o.format === "includes" ? `Neveljaven niz: mora vsebovati "${o.includes}"` : o.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${o.pattern}` : `Neveljaven ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${r.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${r.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${r.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${r.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function Rg() {
  return {
    localeError: M2()
  };
}
var j2 = () => {
  let e3 = {
    string: {
      unit: "tecken",
      verb: "att ha"
    },
    file: {
      unit: "bytes",
      verb: "att ha"
    },
    array: {
      unit: "objekt",
      verb: "att inneh\xE5lla"
    },
    set: {
      unit: "objekt",
      verb: "att inneh\xE5lla"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "antal";
      case "object": {
        if (Array.isArray(r)) return "lista";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "regulj\xE4rt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad str\xE4ng",
    base64url: "base64url-kodad str\xE4ng",
    json_string: "JSON-str\xE4ng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `Ogiltig inmatning: f\xF6rv\xE4ntat ${r.expected}, fick ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${R(r.values[0])}` : `Ogiltigt val: f\xF6rv\xE4ntade en av ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.maximum.toString()} ${a.unit ?? "element"}` : `F\xF6r stor(t): f\xF6rv\xE4ntat ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.minimum.toString()} ${a.unit}` : `F\xF6r lite(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${o.prefix}"` : o.format === "ends_with" ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${o.suffix}"` : o.format === "includes" ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${o.includes}"` : o.format === "regex" ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${o.pattern}"` : `Ogiltig(t) ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${r.divisor}`;
      case "unrecognized_keys":
        return `${r.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${r.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${r.origin ?? "v\xE4rdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function Cg() {
  return {
    localeError: j2()
  };
}
var q2 = () => {
  let e3 = {
    string: {
      unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD"
    },
    file: {
      unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD"
    },
    array: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD"
    },
    set: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "\u0B8E\u0BA3\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BBE\u0BA4\u0BA4\u0BC1" : "\u0B8E\u0BA3\u0BCD";
      case "object": {
        if (Array.isArray(r)) return "\u0B85\u0BA3\u0BBF";
        if (r === null) return "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
    email: "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
    time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
    ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
    e164: "E.164 \u0B8E\u0BA3\u0BCD",
    jwt: "JWT",
    template_literal: "input"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${R(r.values[0])}` : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${k(r.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${r.maximum.toString()} ${a.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${r.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin} ${o}${r.minimum.toString()} ${a.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${r.origin} ${o}${r.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : o.format === "ends_with" ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : o.format === "includes" ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : o.format === "regex" ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${o.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD` : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${r.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${r.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${r.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
    }
  };
};
function Mg() {
  return {
    localeError: q2()
  };
}
var U2 = () => {
  let e3 = {
    string: {
      unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35"
    },
    file: {
      unit: "\u0E44\u0E1A\u0E15\u0E4C",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35"
    },
    array: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35"
    },
    set: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 (NaN)" : "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02";
      case "object": {
        if (Array.isArray(r))
          return "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)";
        if (r === null)
          return "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
    url: "URL",
    emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
    time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
    ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
    cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
    cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
    base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
    base64url: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
    json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
    e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
    jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
    template_literal: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${r.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${R(r.values[0])}` : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19" : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32", a = t(r.origin);
        return a ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.maximum.toString()} ${a.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}` : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22" : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32", a = t(r.origin);
        return a ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.minimum.toString()} ${a.unit}` : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${r.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${o.prefix}"` : o.format === "ends_with" ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${o.suffix}"` : o.format === "includes" ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${o.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21` : o.format === "regex" ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${o.pattern}` : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${r.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${r.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${r.origin}`;
      default:
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
    }
  };
};
function jg() {
  return {
    localeError: U2()
  };
}
var F2 = (e3) => {
  let t = typeof e3;
  switch (t) {
    case "number":
      return Number.isNaN(e3) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(e3)) return "array";
      if (e3 === null) return "null";
      if (Object.getPrototypeOf(e3) !== Object.prototype && e3.constructor)
        return e3.constructor.name;
    }
  }
  return t;
}, L2 = () => {
  let e3 = {
    string: {
      unit: "karakter",
      verb: "olmal\u0131"
    },
    file: {
      unit: "bayt",
      verb: "olmal\u0131"
    },
    array: {
      unit: "\xF6\u011Fe",
      verb: "olmal\u0131"
    },
    set: {
      unit: "\xF6\u011Fe",
      verb: "olmal\u0131"
    }
  };
  function t(n) {
    return e3[n] ?? null;
  }
  let i = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO s\xFCre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aral\u0131\u011F\u0131",
    cidrv6: "IPv6 aral\u0131\u011F\u0131",
    base64: "base64 ile \u015Fifrelenmi\u015F metin",
    base64url: "base64url ile \u015Fifrelenmi\u015F metin",
    json_string: "JSON dizesi",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "\u015Eablon dizesi"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ge\xE7ersiz de\u011Fer: beklenen ${n.expected}, al\u0131nan ${F2(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ge\xE7ersiz de\u011Fer: beklenen ${R(n.values[0])}` : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${k(n.values, "|")}`;
      case "too_big": {
        let r = n.inclusive ? "<=" : "<", o = t(n.origin);
        return o ? `\xC7ok b\xFCy\xFCk: beklenen ${n.origin ?? "de\u011Fer"} ${r}${n.maximum.toString()} ${o.unit ?? "\xF6\u011Fe"}` : `\xC7ok b\xFCy\xFCk: beklenen ${n.origin ?? "de\u011Fer"} ${r}${n.maximum.toString()}`;
      }
      case "too_small": {
        let r = n.inclusive ? ">=" : ">", o = t(n.origin);
        return o ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${n.origin} ${r}${n.minimum.toString()} ${o.unit}` : `\xC7ok k\xFC\xE7\xFCk: beklenen ${n.origin} ${r}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = n;
        return r.format === "starts_with" ? `Ge\xE7ersiz metin: "${r.prefix}" ile ba\u015Flamal\u0131` : r.format === "ends_with" ? `Ge\xE7ersiz metin: "${r.suffix}" ile bitmeli` : r.format === "includes" ? `Ge\xE7ersiz metin: "${r.includes}" i\xE7ermeli` : r.format === "regex" ? `Ge\xE7ersiz metin: ${r.pattern} desenine uymal\u0131` : `Ge\xE7ersiz ${i[r.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ge\xE7ersiz say\u0131: ${n.divisor} ile tam b\xF6l\xFCnebilmeli`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar${n.keys.length > 1 ? "lar" : ""}: ${k(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} i\xE7inde ge\xE7ersiz anahtar`;
      case "invalid_union":
        return "Ge\xE7ersiz de\u011Fer";
      case "invalid_element":
        return `${n.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
      default:
        return "Ge\xE7ersiz de\u011Fer";
    }
  };
};
function qg() {
  return {
    localeError: L2()
  };
}
var V2 = () => {
  let e3 = {
    string: {
      unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435"
    },
    file: {
      unit: "\u0431\u0430\u0439\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435"
    },
    array: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435"
    },
    set: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
      case "object": {
        if (Array.isArray(r)) return "\u043C\u0430\u0441\u0438\u0432";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
    date: "\u0434\u0430\u0442\u0430 ISO",
    time: "\u0447\u0430\u0441 ISO",
    duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
    ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
    ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
    cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
    cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
    base64: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
    base64url: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
    json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${r.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${R(r.values[0])}` : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}` : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin} ${a.verb} ${o}${r.minimum.toString()} ${a.unit}` : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${r.origin} \u0431\u0443\u0434\u0435 ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${o.prefix}"` : o.format === "ends_with" ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${o.suffix}"` : o.format === "includes" ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${o.includes}"` : o.format === "regex" ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}` : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${r.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${r.keys.length > 1 ? "\u0456" : ""}: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${r.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${r.origin}`;
      default:
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
    }
  };
};
function Ug() {
  return {
    localeError: V2()
  };
}
var B2 = () => {
  let e3 = {
    string: {
      unit: "\u062D\u0631\u0648\u0641",
      verb: "\u06C1\u0648\u0646\u0627"
    },
    file: {
      unit: "\u0628\u0627\u0626\u0679\u0633",
      verb: "\u06C1\u0648\u0646\u0627"
    },
    array: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627"
    },
    set: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "\u0646\u0645\u0628\u0631";
      case "object": {
        if (Array.isArray(r)) return "\u0622\u0631\u06D2";
        if (r === null) return "\u0646\u0644";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u0627\u0646 \u067E\u0679",
    email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
    uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
    nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
    ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
    xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
    ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
    date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
    time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
    duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
    ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
    cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
    base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    base64url: "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
    e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
    jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
    template_literal: "\u0627\u0646 \u067E\u0679"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${r.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${i(r.input)} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      case "invalid_value":
        return r.values.length === 1 ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${R(r.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627` : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${k(r.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${r.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${o}${r.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2` : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${r.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${o}${r.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${r.origin} \u06A9\u06D2 ${o}${r.minimum.toString()} ${a.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2` : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${r.origin} \u06A9\u0627 ${o}${r.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2` : o.format === "ends_with" ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2` : o.format === "includes" ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2` : o.format === "regex" ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${o.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2` : `\u063A\u0644\u0637 ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${r.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${r.keys.length > 1 ? "\u0632" : ""}: ${k(r.keys, "\u060C ")}`;
      case "invalid_key":
        return `${r.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${r.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
    }
  };
};
function Fg() {
  return {
    localeError: B2()
  };
}
var H2 = () => {
  let e3 = {
    string: {
      unit: "k\xFD t\u1EF1",
      verb: "c\xF3"
    },
    file: {
      unit: "byte",
      verb: "c\xF3"
    },
    array: {
      unit: "ph\u1EA7n t\u1EED",
      verb: "c\xF3"
    },
    set: {
      unit: "ph\u1EA7n t\u1EED",
      verb: "c\xF3"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "s\u1ED1";
      case "object": {
        if (Array.isArray(r)) return "m\u1EA3ng";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u0111\u1EA7u v\xE0o",
    email: "\u0111\u1ECBa ch\u1EC9 email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ng\xE0y gi\u1EDD ISO",
    date: "ng\xE0y ISO",
    time: "gi\u1EDD ISO",
    duration: "kho\u1EA3ng th\u1EDDi gian ISO",
    ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
    ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
    cidrv4: "d\u1EA3i IPv4",
    cidrv6: "d\u1EA3i IPv6",
    base64: "chu\u1ED7i m\xE3 h\xF3a base64",
    base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
    json_string: "chu\u1ED7i JSON",
    e164: "s\u1ED1 E.164",
    jwt: "JWT",
    template_literal: "\u0111\u1EA7u v\xE0o"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${r.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${R(r.values[0])}` : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${r.origin ?? "gi\xE1 tr\u1ECB"} ${a.verb} ${o}${r.maximum.toString()} ${a.unit ?? "ph\u1EA7n t\u1EED"}` : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${r.origin ?? "gi\xE1 tr\u1ECB"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${r.origin} ${a.verb} ${o}${r.minimum.toString()} ${a.unit}` : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${o.prefix}"` : o.format === "ends_with" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${o.suffix}"` : o.format === "includes" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${o.includes}"` : o.format === "regex" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${o.pattern}` : `${n[o.format] ?? r.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${r.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${r.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${r.origin}`;
      default:
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
    }
  };
};
function Lg() {
  return {
    localeError: H2()
  };
}
var G2 = () => {
  let e3 = {
    string: {
      unit: "\u5B57\u7B26",
      verb: "\u5305\u542B"
    },
    file: {
      unit: "\u5B57\u8282",
      verb: "\u5305\u542B"
    },
    array: {
      unit: "\u9879",
      verb: "\u5305\u542B"
    },
    set: {
      unit: "\u9879",
      verb: "\u5305\u542B"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "\u975E\u6570\u5B57(NaN)" : "\u6570\u5B57";
      case "object": {
        if (Array.isArray(r)) return "\u6570\u7EC4";
        if (r === null) return "\u7A7A\u503C(null)";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u8F93\u5165",
    email: "\u7535\u5B50\u90AE\u4EF6",
    url: "URL",
    emoji: "\u8868\u60C5\u7B26\u53F7",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u671F\u65F6\u95F4",
    date: "ISO\u65E5\u671F",
    time: "ISO\u65F6\u95F4",
    duration: "ISO\u65F6\u957F",
    ipv4: "IPv4\u5730\u5740",
    ipv6: "IPv6\u5730\u5740",
    cidrv4: "IPv4\u7F51\u6BB5",
    cidrv6: "IPv6\u7F51\u6BB5",
    base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
    base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
    json_string: "JSON\u5B57\u7B26\u4E32",
    e164: "E.164\u53F7\u7801",
    jwt: "JWT",
    template_literal: "\u8F93\u5165"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${r.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${R(r.values[0])}` : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${r.origin ?? "\u503C"} ${o}${r.maximum.toString()} ${a.unit ?? "\u4E2A\u5143\u7D20"}` : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${r.origin ?? "\u503C"} ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${r.origin} ${o}${r.minimum.toString()} ${a.unit}` : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${r.origin} ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.prefix}" \u5F00\u5934` : o.format === "ends_with" ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.suffix}" \u7ED3\u5C3E` : o.format === "includes" ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${o.includes}"` : o.format === "regex" ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${o.pattern}` : `\u65E0\u6548${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${r.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${k(r.keys, ", ")}`;
      case "invalid_key":
        return `${r.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${r.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return "\u65E0\u6548\u8F93\u5165";
    }
  };
};
function Vg() {
  return {
    localeError: G2()
  };
}
var Z2 = () => {
  let e3 = {
    string: {
      unit: "\u5B57\u5143",
      verb: "\u64C1\u6709"
    },
    file: {
      unit: "\u4F4D\u5143\u7D44",
      verb: "\u64C1\u6709"
    },
    array: {
      unit: "\u9805\u76EE",
      verb: "\u64C1\u6709"
    },
    set: {
      unit: "\u9805\u76EE",
      verb: "\u64C1\u6709"
    }
  };
  function t(r) {
    return e3[r] ?? null;
  }
  let i = (r) => {
    let o = typeof r;
    switch (o) {
      case "number":
        return Number.isNaN(r) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(r)) return "array";
        if (r === null) return "null";
        if (Object.getPrototypeOf(r) !== Object.prototype && r.constructor)
          return r.constructor.name;
      }
    }
    return o;
  }, n = {
    regex: "\u8F38\u5165",
    email: "\u90F5\u4EF6\u5730\u5740",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u65E5\u671F\u6642\u9593",
    date: "ISO \u65E5\u671F",
    time: "ISO \u6642\u9593",
    duration: "ISO \u671F\u9593",
    ipv4: "IPv4 \u4F4D\u5740",
    ipv6: "IPv6 \u4F4D\u5740",
    cidrv4: "IPv4 \u7BC4\u570D",
    cidrv6: "IPv6 \u7BC4\u570D",
    base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
    base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
    json_string: "JSON \u5B57\u4E32",
    e164: "E.164 \u6578\u503C",
    jwt: "JWT",
    template_literal: "\u8F38\u5165"
  };
  return (r) => {
    switch (r.code) {
      case "invalid_type":
        return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${r.expected}\uFF0C\u4F46\u6536\u5230 ${i(r.input)}`;
      case "invalid_value":
        return r.values.length === 1 ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${R(r.values[0])}` : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${k(r.values, "|")}`;
      case "too_big": {
        let o = r.inclusive ? "<=" : "<", a = t(r.origin);
        return a ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${r.origin ?? "\u503C"} \u61C9\u70BA ${o}${r.maximum.toString()} ${a.unit ?? "\u500B\u5143\u7D20"}` : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${r.origin ?? "\u503C"} \u61C9\u70BA ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        let o = r.inclusive ? ">=" : ">", a = t(r.origin);
        return a ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${r.origin} \u61C9\u70BA ${o}${r.minimum.toString()} ${a.unit}` : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${r.origin} \u61C9\u70BA ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        let o = r;
        return o.format === "starts_with" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.prefix}" \u958B\u982D` : o.format === "ends_with" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.suffix}" \u7D50\u5C3E` : o.format === "includes" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${o.includes}"` : o.format === "regex" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${o.pattern}` : `\u7121\u6548\u7684 ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${r.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${r.keys.length > 1 ? "\u5011" : ""}\uFF1A${k(r.keys, "\u3001")}`;
      case "invalid_key":
        return `${r.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${r.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
    }
  };
};
function Bg() {
  return {
    localeError: Z2()
  };
}
var Wo = Symbol("ZodOutput"), Ko = Symbol("ZodInput"), Zr = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...i) {
    let n = i[0];
    if (this._map.set(t, n), n && typeof n == "object" && "id" in n) {
      if (this._idmap.has(n.id))
        throw new Error(`ID ${n.id} already exists in the registry`);
      this._idmap.set(n.id, t);
    }
    return this;
  }
  remove(t) {
    return this._map.delete(t), this;
  }
  get(t) {
    let i = t._zod.parent;
    if (i) {
      let n = {
        ...this.get(i) ?? {}
      };
      return delete n.id, {
        ...n,
        ...this._map.get(t)
      };
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
};
function un() {
  return new Zr();
}
var tt = un();
function Md(e3, t) {
  return new e3({
    type: "string",
    ...T(t)
  });
}
function jd(e3, t) {
  return new e3({
    type: "string",
    coerce: true,
    ...T(t)
  });
}
function Qo(e3, t) {
  return new e3({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function ln(e3, t) {
  return new e3({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function Jo(e3, t) {
  return new e3({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function Yo(e3, t) {
  return new e3({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...T(t)
  });
}
function Xo(e3, t) {
  return new e3({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...T(t)
  });
}
function ea(e3, t) {
  return new e3({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...T(t)
  });
}
function ta(e3, t) {
  return new e3({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function ra(e3, t) {
  return new e3({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function ia(e3, t) {
  return new e3({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function na(e3, t) {
  return new e3({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function oa(e3, t) {
  return new e3({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function aa(e3, t) {
  return new e3({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function sa(e3, t) {
  return new e3({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function ua(e3, t) {
  return new e3({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function la(e3, t) {
  return new e3({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function da(e3, t) {
  return new e3({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function ca(e3, t) {
  return new e3({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function _a(e3, t) {
  return new e3({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function ma(e3, t) {
  return new e3({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function pa(e3, t) {
  return new e3({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function fa(e3, t) {
  return new e3({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function ga(e3, t) {
  return new e3({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...T(t)
  });
}
function qd(e3, t) {
  return new e3({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...T(t)
  });
}
function Ud(e3, t) {
  return new e3({
    type: "string",
    format: "date",
    check: "string_format",
    ...T(t)
  });
}
function Fd(e3, t) {
  return new e3({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...T(t)
  });
}
function Ld(e3, t) {
  return new e3({
    type: "string",
    format: "duration",
    check: "string_format",
    ...T(t)
  });
}
function Vd(e3, t) {
  return new e3({
    type: "number",
    checks: [],
    ...T(t)
  });
}
function Bd(e3, t) {
  return new e3({
    type: "number",
    coerce: true,
    checks: [],
    ...T(t)
  });
}
function Hd(e3, t) {
  return new e3({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...T(t)
  });
}
function Gd(e3, t) {
  return new e3({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float32",
    ...T(t)
  });
}
function Zd(e3, t) {
  return new e3({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float64",
    ...T(t)
  });
}
function Wd(e3, t) {
  return new e3({
    type: "number",
    check: "number_format",
    abort: false,
    format: "int32",
    ...T(t)
  });
}
function Kd(e3, t) {
  return new e3({
    type: "number",
    check: "number_format",
    abort: false,
    format: "uint32",
    ...T(t)
  });
}
function Qd(e3, t) {
  return new e3({
    type: "boolean",
    ...T(t)
  });
}
function Jd(e3, t) {
  return new e3({
    type: "boolean",
    coerce: true,
    ...T(t)
  });
}
function Yd(e3, t) {
  return new e3({
    type: "bigint",
    ...T(t)
  });
}
function Xd(e3, t) {
  return new e3({
    type: "bigint",
    coerce: true,
    ...T(t)
  });
}
function ec(e3, t) {
  return new e3({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "int64",
    ...T(t)
  });
}
function tc(e3, t) {
  return new e3({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "uint64",
    ...T(t)
  });
}
function rc(e3, t) {
  return new e3({
    type: "symbol",
    ...T(t)
  });
}
function ic(e3, t) {
  return new e3({
    type: "undefined",
    ...T(t)
  });
}
function nc(e3, t) {
  return new e3({
    type: "null",
    ...T(t)
  });
}
function oc(e3) {
  return new e3({
    type: "any"
  });
}
function Wr(e3) {
  return new e3({
    type: "unknown"
  });
}
function ac(e3, t) {
  return new e3({
    type: "never",
    ...T(t)
  });
}
function sc(e3, t) {
  return new e3({
    type: "void",
    ...T(t)
  });
}
function uc(e3, t) {
  return new e3({
    type: "date",
    ...T(t)
  });
}
function lc(e3, t) {
  return new e3({
    type: "date",
    coerce: true,
    ...T(t)
  });
}
function dc(e3, t) {
  return new e3({
    type: "nan",
    ...T(t)
  });
}
function st(e3, t) {
  return new Uo({
    check: "less_than",
    ...T(t),
    value: e3,
    inclusive: false
  });
}
function We(e3, t) {
  return new Uo({
    check: "less_than",
    ...T(t),
    value: e3,
    inclusive: true
  });
}
function ut(e3, t) {
  return new Fo({
    check: "greater_than",
    ...T(t),
    value: e3,
    inclusive: false
  });
}
function Ce(e3, t) {
  return new Fo({
    check: "greater_than",
    ...T(t),
    value: e3,
    inclusive: true
  });
}
function ha(e3) {
  return ut(0, e3);
}
function ba(e3) {
  return st(0, e3);
}
function ya(e3) {
  return We(0, e3);
}
function va(e3) {
  return Ce(0, e3);
}
function Zt(e3, t) {
  return new fl({
    check: "multiple_of",
    ...T(t),
    value: e3
  });
}
function sr(e3, t) {
  return new bl({
    check: "max_size",
    ...T(t),
    maximum: e3
  });
}
function Wt(e3, t) {
  return new yl({
    check: "min_size",
    ...T(t),
    minimum: e3
  });
}
function Kr(e3, t) {
  return new vl({
    check: "size_equals",
    ...T(t),
    size: e3
  });
}
function ur(e3, t) {
  return new wl({
    check: "max_length",
    ...T(t),
    maximum: e3
  });
}
function $t(e3, t) {
  return new Sl({
    check: "min_length",
    ...T(t),
    minimum: e3
  });
}
function lr(e3, t) {
  return new xl({
    check: "length_equals",
    ...T(t),
    length: e3
  });
}
function Qr(e3, t) {
  return new Dl({
    check: "string_format",
    format: "regex",
    ...T(t),
    pattern: e3
  });
}
function Jr(e3) {
  return new kl({
    check: "string_format",
    format: "lowercase",
    ...T(e3)
  });
}
function Yr(e3) {
  return new Al({
    check: "string_format",
    format: "uppercase",
    ...T(e3)
  });
}
function Xr(e3, t) {
  return new El({
    check: "string_format",
    format: "includes",
    ...T(t),
    includes: e3
  });
}
function ei(e3, t) {
  return new zl({
    check: "string_format",
    format: "starts_with",
    ...T(t),
    prefix: e3
  });
}
function ti(e3, t) {
  return new Tl({
    check: "string_format",
    format: "ends_with",
    ...T(t),
    suffix: e3
  });
}
function wa(e3, t, i) {
  return new Pl({
    check: "property",
    property: e3,
    schema: t,
    ...T(i)
  });
}
function ri(e3, t) {
  return new Il({
    check: "mime_type",
    mime: e3,
    ...T(t)
  });
}
function lt(e3) {
  return new $l({
    check: "overwrite",
    tx: e3
  });
}
function ii(e3) {
  return lt((t) => t.normalize(e3));
}
function ni() {
  return lt((e3) => e3.trim());
}
function oi() {
  return lt((e3) => e3.toLowerCase());
}
function ai() {
  return lt((e3) => e3.toUpperCase());
}
function dn(e3, t, i) {
  return new e3({
    type: "array",
    element: t,
    ...T(i)
  });
}
function W2(e3, t, i) {
  return new e3({
    type: "union",
    options: t,
    ...T(i)
  });
}
function K2(e3, t, i, n) {
  return new e3({
    type: "union",
    options: i,
    discriminator: t,
    ...T(n)
  });
}
function Q2(e3, t, i) {
  return new e3({
    type: "intersection",
    left: t,
    right: i
  });
}
function cc(e3, t, i, n) {
  let r = i instanceof V, o = r ? n : i, a = r ? i : null;
  return new e3({
    type: "tuple",
    items: t,
    rest: a,
    ...T(o)
  });
}
function J2(e3, t, i, n) {
  return new e3({
    type: "record",
    keyType: t,
    valueType: i,
    ...T(n)
  });
}
function Y2(e3, t, i, n) {
  return new e3({
    type: "map",
    keyType: t,
    valueType: i,
    ...T(n)
  });
}
function X2(e3, t, i) {
  return new e3({
    type: "set",
    valueType: t,
    ...T(i)
  });
}
function ex(e3, t, i) {
  let n = Array.isArray(t) ? Object.fromEntries(t.map((r) => [r, r])) : t;
  return new e3({
    type: "enum",
    entries: n,
    ...T(i)
  });
}
function tx(e3, t, i) {
  return new e3({
    type: "enum",
    entries: t,
    ...T(i)
  });
}
function rx(e3, t, i) {
  return new e3({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...T(i)
  });
}
function _c(e3, t) {
  return new e3({
    type: "file",
    ...T(t)
  });
}
function ix(e3, t) {
  return new e3({
    type: "transform",
    transform: t
  });
}
function nx(e3, t) {
  return new e3({
    type: "optional",
    innerType: t
  });
}
function ox(e3, t) {
  return new e3({
    type: "nullable",
    innerType: t
  });
}
function ax(e3, t, i) {
  return new e3({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof i == "function" ? i() : i;
    }
  });
}
function sx(e3, t, i) {
  return new e3({
    type: "nonoptional",
    innerType: t,
    ...T(i)
  });
}
function ux(e3, t) {
  return new e3({
    type: "success",
    innerType: t
  });
}
function lx(e3, t, i) {
  return new e3({
    type: "catch",
    innerType: t,
    catchValue: typeof i == "function" ? i : () => i
  });
}
function dx(e3, t, i) {
  return new e3({
    type: "pipe",
    in: t,
    out: i
  });
}
function cx(e3, t) {
  return new e3({
    type: "readonly",
    innerType: t
  });
}
function _x(e3, t, i) {
  return new e3({
    type: "template_literal",
    parts: t,
    ...T(i)
  });
}
function mx(e3, t) {
  return new e3({
    type: "lazy",
    getter: t
  });
}
function px(e3, t) {
  return new e3({
    type: "promise",
    innerType: t
  });
}
function mc(e3, t, i) {
  let n = T(i);
  return n.abort ?? (n.abort = true), new e3({
    type: "custom",
    check: "custom",
    fn: t,
    ...n
  });
}
function pc(e3, t, i) {
  return new e3({
    type: "custom",
    check: "custom",
    fn: t,
    ...T(i)
  });
}
function fc(e3, t) {
  let { case: i, error: n, truthy: r, falsy: o } = T(t), a = new Set(r ?? ["true", "1", "yes", "on", "y", "enabled"]), u = new Set(o ?? ["false", "0", "no", "off", "n", "disabled"]), s = e3.Pipe ?? sn, l = e3.Boolean ?? on, d = e3.Unknown ?? Gt, c = new d({
    type: "unknown",
    checks: [
      {
        _zod: {
          check: (f) => {
            if (typeof f.value == "string") {
              let m = f.value;
              i !== "sensitive" && (m = m.toLowerCase()), a.has(m) ? f.value = true : u.has(m) ? f.value = false : f.issues.push({
                code: "invalid_value",
                expected: "stringbool",
                values: [...a, ...u],
                input: f.value,
                inst: c
              });
            } else
              f.issues.push({
                code: "invalid_type",
                expected: "string",
                input: f.value
              });
          },
          def: {
            check: "custom"
          },
          onattach: []
        }
      }
    ],
    error: n
  });
  return new s({
    type: "pipe",
    in: c,
    out: new l({
      type: "boolean",
      error: n
    }),
    error: n
  });
}
var Sa = class {
  constructor(t) {
    this._def = t, this.def = t;
  }
  implement(t) {
    if (typeof t != "function")
      throw new Error("implement() must be called with a function");
    let i = (...n) => {
      let r = this._def.input ? No(this._def.input, n, void 0, {
        callee: i
      }) : n;
      if (!Array.isArray(r))
        throw new Error(
          "Invalid arguments schema: not an array or tuple schema."
        );
      let o = t(...r);
      return this._def.output ? No(this._def.output, o, void 0, {
        callee: i
      }) : o;
    };
    return i;
  }
  implementAsync(t) {
    if (typeof t != "function")
      throw new Error("implement() must be called with a function");
    let i = async (...n) => {
      let r = this._def.input ? await Co(this._def.input, n, void 0, {
        callee: i
      }) : n;
      if (!Array.isArray(r))
        throw new Error(
          "Invalid arguments schema: not an array or tuple schema."
        );
      let o = await t(...r);
      return this._def.output ? Co(this._def.output, o, void 0, {
        callee: i
      }) : o;
    };
    return i;
  }
  input(...t) {
    let i = this.constructor;
    return Array.isArray(t[0]) ? new i({
      type: "function",
      input: new ar({
        type: "tuple",
        items: t[0],
        rest: t[1]
      }),
      output: this._def.output
    }) : new i({
      type: "function",
      input: t[0],
      output: this._def.output
    });
  }
  output(t) {
    let i = this.constructor;
    return new i({
      type: "function",
      input: this._def.input,
      output: t
    });
  }
};
function xa(e3) {
  return new Sa({
    type: "function",
    input: Array.isArray(e3?.input) ? cc(ar, e3?.input) : e3?.input ?? dn(an, Wr(Gt)),
    output: e3?.output ?? Wr(Gt)
  });
}
var cn = class {
  constructor(t) {
    this.counter = 0, this.metadataRegistry = t?.metadata ?? tt, this.target = t?.target ?? "draft-2020-12", this.unrepresentable = t?.unrepresentable ?? "throw", this.override = t?.override ?? (() => {
    }), this.io = t?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(t, i = {
    path: [],
    schemaPath: []
  }) {
    var n;
    let r = t._zod.def, o = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
    }, a = this.seen.get(t);
    if (a)
      return a.count++, i.schemaPath.includes(t) && (a.cycle = i.path), a.schema;
    let u = {
      schema: {},
      count: 1,
      cycle: void 0
    };
    this.seen.set(t, u), t._zod.toJSONSchema && (u.schema = t._zod.toJSONSchema());
    let s = {
      ...i,
      schemaPath: [...i.schemaPath, t],
      path: i.path
    }, l = t._zod.parent;
    if (l) u.ref = l, this.process(l, s), this.seen.get(l).isParent = true;
    else {
      let f = u.schema;
      switch (r.type) {
        case "string": {
          let m = f;
          m.type = "string";
          let {
            minimum: h,
            maximum: _,
            format: x,
            patterns: E,
            contentEncoding: w
          } = t._zod.bag;
          if (typeof h == "number" && (m.minLength = h), typeof _ == "number" && (m.maxLength = _), x && (m.format = o[x] ?? x, m.format === "" && delete m.format), w && (m.contentEncoding = w), E && E.size > 0) {
            let y = [...E];
            y.length === 1 ? m.pattern = y[0].source : y.length > 1 && (u.schema.allOf = [
              ...y.map((v) => ({
                ...this.target === "draft-7" ? {
                  type: "string"
                } : {},
                pattern: v.source
              }))
            ]);
          }
          break;
        }
        case "number": {
          let m = f, {
            minimum: h,
            maximum: _,
            format: x,
            multipleOf: E,
            exclusiveMaximum: w,
            exclusiveMinimum: y
          } = t._zod.bag;
          typeof x == "string" && x.includes("int") ? m.type = "integer" : m.type = "number", typeof y == "number" && (m.exclusiveMinimum = y), typeof h == "number" && (m.minimum = h, typeof y == "number" && (y >= h ? delete m.minimum : delete m.exclusiveMinimum)), typeof w == "number" && (m.exclusiveMaximum = w), typeof _ == "number" && (m.maximum = _, typeof w == "number" && (w <= _ ? delete m.maximum : delete m.exclusiveMaximum)), typeof E == "number" && (m.multipleOf = E);
          break;
        }
        case "boolean": {
          let m = f;
          m.type = "boolean";
          break;
        }
        case "bigint": {
          if (this.unrepresentable === "throw")
            throw new Error("BigInt cannot be represented in JSON Schema");
          break;
        }
        case "symbol": {
          if (this.unrepresentable === "throw")
            throw new Error("Symbols cannot be represented in JSON Schema");
          break;
        }
        case "undefined": {
          let m = f;
          m.type = "null";
          break;
        }
        case "null": {
          f.type = "null";
          break;
        }
        case "any":
          break;
        case "unknown":
          break;
        case "never": {
          f.not = {};
          break;
        }
        case "void": {
          if (this.unrepresentable === "throw")
            throw new Error("Void cannot be represented in JSON Schema");
          break;
        }
        case "date": {
          if (this.unrepresentable === "throw")
            throw new Error("Date cannot be represented in JSON Schema");
          break;
        }
        case "array": {
          let m = f, { minimum: h, maximum: _ } = t._zod.bag;
          typeof h == "number" && (m.minItems = h), typeof _ == "number" && (m.maxItems = _), m.type = "array", m.items = this.process(r.element, {
            ...s,
            path: [...s.path, "items"]
          });
          break;
        }
        case "object": {
          let m = f;
          m.type = "object", m.properties = {};
          let h = r.shape;
          for (let E in h)
            m.properties[E] = this.process(h[E], {
              ...s,
              path: [...s.path, "properties", E]
            });
          let _ = new Set(Object.keys(h)), x = new Set(
            [..._].filter((E) => {
              let w = r.shape[E]._zod;
              return this.io === "input" ? w.optin === void 0 : w.optout === void 0;
            })
          );
          x.size > 0 && (m.required = Array.from(x)), r.catchall?._zod.def.type === "never" ? m.additionalProperties = false : r.catchall ? r.catchall && (m.additionalProperties = this.process(r.catchall, {
            ...s,
            path: [...s.path, "additionalProperties"]
          })) : this.io === "output" && (m.additionalProperties = false);
          break;
        }
        case "union": {
          let m = f;
          m.anyOf = r.options.map(
            (h, _) => this.process(h, {
              ...s,
              path: [...s.path, "anyOf", _]
            })
          );
          break;
        }
        case "intersection": {
          let m = f, h = this.process(r.left, {
            ...s,
            path: [...s.path, "allOf", 0]
          }), _ = this.process(r.right, {
            ...s,
            path: [...s.path, "allOf", 1]
          }), x = (w) => "allOf" in w && Object.keys(w).length === 1, E = [...x(h) ? h.allOf : [h], ...x(_) ? _.allOf : [_]];
          m.allOf = E;
          break;
        }
        case "tuple": {
          let m = f;
          m.type = "array";
          let h = r.items.map(
            (E, w) => this.process(E, {
              ...s,
              path: [...s.path, "prefixItems", w]
            })
          );
          if (this.target === "draft-2020-12" ? m.prefixItems = h : m.items = h, r.rest) {
            let E = this.process(r.rest, {
              ...s,
              path: [...s.path, "items"]
            });
            this.target === "draft-2020-12" ? m.items = E : m.additionalItems = E;
          }
          r.rest && (m.items = this.process(r.rest, {
            ...s,
            path: [...s.path, "items"]
          }));
          let { minimum: _, maximum: x } = t._zod.bag;
          typeof _ == "number" && (m.minItems = _), typeof x == "number" && (m.maxItems = x);
          break;
        }
        case "record": {
          let m = f;
          m.type = "object", m.propertyNames = this.process(r.keyType, {
            ...s,
            path: [...s.path, "propertyNames"]
          }), m.additionalProperties = this.process(r.valueType, {
            ...s,
            path: [...s.path, "additionalProperties"]
          });
          break;
        }
        case "map": {
          if (this.unrepresentable === "throw")
            throw new Error("Map cannot be represented in JSON Schema");
          break;
        }
        case "set": {
          if (this.unrepresentable === "throw")
            throw new Error("Set cannot be represented in JSON Schema");
          break;
        }
        case "enum": {
          let m = f, h = Wi(r.entries);
          h.every((_) => typeof _ == "number") && (m.type = "number"), h.every((_) => typeof _ == "string") && (m.type = "string"), m.enum = h;
          break;
        }
        case "literal": {
          let m = f, h = [];
          for (let _ of r.values)
            if (_ === void 0) {
              if (this.unrepresentable === "throw")
                throw new Error(
                  "Literal `undefined` cannot be represented in JSON Schema"
                );
            } else if (typeof _ == "bigint") {
              if (this.unrepresentable === "throw")
                throw new Error(
                  "BigInt literals cannot be represented in JSON Schema"
                );
              h.push(Number(_));
            } else h.push(_);
          if (h.length !== 0)
            if (h.length === 1) {
              let _ = h[0];
              m.type = _ === null ? "null" : typeof _, m.const = _;
            } else
              h.every((_) => typeof _ == "number") && (m.type = "number"), h.every((_) => typeof _ == "string") && (m.type = "string"), h.every((_) => typeof _ == "boolean") && (m.type = "string"), h.every((_) => _ === null) && (m.type = "null"), m.enum = h;
          break;
        }
        case "file": {
          let m = f, h = {
            type: "string",
            format: "binary",
            contentEncoding: "binary"
          }, { minimum: _, maximum: x, mime: E } = t._zod.bag;
          _ !== void 0 && (h.minLength = _), x !== void 0 && (h.maxLength = x), E ? E.length === 1 ? (h.contentMediaType = E[0], Object.assign(m, h)) : m.anyOf = E.map((w) => ({
            ...h,
            contentMediaType: w
          })) : Object.assign(m, h);
          break;
        }
        case "transform": {
          if (this.unrepresentable === "throw")
            throw new Error("Transforms cannot be represented in JSON Schema");
          break;
        }
        case "nullable": {
          let m = this.process(r.innerType, s);
          f.anyOf = [
            m,
            {
              type: "null"
            }
          ];
          break;
        }
        case "nonoptional": {
          this.process(r.innerType, s), u.ref = r.innerType;
          break;
        }
        case "success": {
          let m = f;
          m.type = "boolean";
          break;
        }
        case "default": {
          this.process(r.innerType, s), u.ref = r.innerType, f.default = r.defaultValue;
          break;
        }
        case "prefault": {
          this.process(r.innerType, s), u.ref = r.innerType, this.io === "input" && (f._prefault = r.defaultValue);
          break;
        }
        case "catch": {
          this.process(r.innerType, s), u.ref = r.innerType;
          let m;
          try {
            m = r.catchValue(void 0);
          } catch {
            throw new Error(
              "Dynamic catch values are not supported in JSON Schema"
            );
          }
          f.default = m;
          break;
        }
        case "nan": {
          if (this.unrepresentable === "throw")
            throw new Error("NaN cannot be represented in JSON Schema");
          break;
        }
        case "template_literal": {
          let m = f, h = t._zod.pattern;
          if (!h) throw new Error("Pattern not found in template literal");
          m.type = "string", m.pattern = h.source;
          break;
        }
        case "pipe": {
          let m = this.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
          this.process(m, s), u.ref = m;
          break;
        }
        case "readonly": {
          this.process(r.innerType, s), u.ref = r.innerType, f.readOnly = true;
          break;
        }
        case "promise": {
          this.process(r.innerType, s), u.ref = r.innerType;
          break;
        }
        case "optional": {
          this.process(r.innerType, s), u.ref = r.innerType;
          break;
        }
        case "lazy": {
          let m = t._zod.innerType;
          this.process(m, s), u.ref = m;
          break;
        }
        case "custom": {
          if (this.unrepresentable === "throw")
            throw new Error(
              "Custom types cannot be represented in JSON Schema"
            );
          break;
        }
        default:
      }
    }
    let d = this.metadataRegistry.get(t);
    return d && Object.assign(u.schema, d), this.io === "input" && ye(t) && (delete u.schema.examples, delete u.schema.default), this.io === "input" && u.schema._prefault && ((n = u.schema).default ?? (n.default = u.schema._prefault)), delete u.schema._prefault, this.seen.get(t).schema;
  }
  emit(t, i) {
    let n = {
      cycles: i?.cycles ?? "ref",
      reused: i?.reused ?? "inline",
      external: i?.external ?? void 0
    }, r = this.seen.get(t);
    if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
    let o = (d) => {
      let c = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (n.external) {
        let _ = n.external.registry.get(d[0])?.id;
        if (_)
          return {
            ref: n.external.uri(_)
          };
        let x = d[1].defId ?? d[1].schema.id ?? `schema${this.counter++}`;
        return d[1].defId = x, {
          defId: x,
          ref: `${n.external.uri("__shared")}#/${c}/${x}`
        };
      }
      if (d[1] === r)
        return {
          ref: "#"
        };
      let m = `#/${c}/`, h = d[1].schema.id ?? `__schema${this.counter++}`;
      return {
        defId: h,
        ref: m + h
      };
    }, a = (d) => {
      if (d[1].schema.$ref) return;
      let c = d[1], { ref: f, defId: m } = o(d);
      c.def = {
        ...c.schema
      }, m && (c.defId = m);
      let h = c.schema;
      for (let _ in h) delete h[_];
      h.$ref = f;
    };
    for (let d of this.seen.entries()) {
      let c = d[1];
      if (t === d[0]) {
        a(d);
        continue;
      }
      if (n.external) {
        let m = n.external.registry.get(d[0])?.id;
        if (t !== d[0] && m) {
          a(d);
          continue;
        }
      }
      if (this.metadataRegistry.get(d[0])?.id) {
        a(d);
        continue;
      }
      if (c.cycle) {
        if (n.cycles === "throw")
          throw new Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        n.cycles === "ref" && a(d);
        continue;
      }
      if (c.count > 1 && n.reused === "ref") {
        a(d);
        continue;
      }
    }
    let u = (d, c) => {
      let f = this.seen.get(d), m = f.def ?? f.schema, h = {
        ...m
      };
      if (f.ref === null) return;
      let _ = f.ref;
      if (f.ref = null, _) {
        u(_, c);
        let x = this.seen.get(_).schema;
        x.$ref && c.target === "draft-7" ? (m.allOf = m.allOf ?? [], m.allOf.push(x)) : (Object.assign(m, x), Object.assign(m, h));
      }
      f.isParent || this.override({
        zodSchema: d,
        jsonSchema: m
      });
    };
    for (let d of [...this.seen.entries()].reverse())
      u(d[0], {
        target: this.target
      });
    let s = {};
    this.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? s.$schema = "http://json-schema.org/draft-07/schema#" : console.warn(`Invalid target: ${this.target}`), Object.assign(s, r.def);
    let l = n.external?.defs ?? {};
    for (let d of this.seen.entries()) {
      let c = d[1];
      c.def && c.defId && (l[c.defId] = c.def);
    }
    !n.external && Object.keys(l).length > 0 && (this.target === "draft-2020-12" ? s.$defs = l : s.definitions = l);
    try {
      return JSON.parse(JSON.stringify(s));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
};
function Da(e3, t) {
  if (e3 instanceof Zr) {
    let n = new cn(t), r = {};
    for (let u of e3._idmap.entries()) {
      let [s, l] = u;
      n.process(l);
    }
    let o = {}, a = {
      registry: e3,
      uri: t?.uri || ((u) => u),
      defs: r
    };
    for (let u of e3._idmap.entries()) {
      let [s, l] = u;
      o[s] = n.emit(l, {
        ...t,
        external: a
      });
    }
    if (Object.keys(r).length > 0) {
      let u = n.target === "draft-2020-12" ? "$defs" : "definitions";
      o.__shared = {
        [u]: r
      };
    }
    return {
      schemas: o
    };
  }
  let i = new cn(t);
  return i.process(e3), i.emit(e3, t);
}
function ye(e3, t) {
  let i = t ?? {
    seen: /* @__PURE__ */ new Set()
  };
  if (i.seen.has(e3)) return false;
  i.seen.add(e3);
  let r = e3._zod.def;
  switch (r.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return false;
    case "array":
      return ye(r.element, i);
    case "object": {
      for (let o in r.shape) if (ye(r.shape[o], i)) return true;
      return false;
    }
    case "union": {
      for (let o of r.options) if (ye(o, i)) return true;
      return false;
    }
    case "intersection":
      return ye(r.left, i) || ye(r.right, i);
    case "tuple": {
      for (let o of r.items) if (ye(o, i)) return true;
      return !!(r.rest && ye(r.rest, i));
    }
    case "record":
      return ye(r.keyType, i) || ye(r.valueType, i);
    case "map":
      return ye(r.keyType, i) || ye(r.valueType, i);
    case "set":
      return ye(r.valueType, i);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return ye(r.innerType, i);
    case "lazy":
      return ye(r.getter(), i);
    case "default":
      return ye(r.innerType, i);
    case "prefault":
      return ye(r.innerType, i);
    case "custom":
      return false;
    case "transform":
      return true;
    case "pipe":
      return ye(r.in, i) || ye(r.out, i);
    case "success":
      return false;
    case "catch":
      return false;
    default:
  }
  throw new Error(`Unknown schema type: ${r.type}`);
}
var Hg = {};
var gn = {};
et(gn, {
  ZodISODate: () => mn,
  ZodISODateTime: () => _n,
  ZodISODuration: () => fn,
  ZodISOTime: () => pn,
  date: () => hc,
  datetime: () => gc,
  duration: () => yc,
  time: () => bc
});
var _n = b("ZodISODateTime", (e3, t) => {
  Gl.init(e3, t), ne.init(e3, t);
});
function gc(e3) {
  return qd(_n, e3);
}
var mn = b("ZodISODate", (e3, t) => {
  Zl.init(e3, t), ne.init(e3, t);
});
function hc(e3) {
  return Ud(mn, e3);
}
var pn = b("ZodISOTime", (e3, t) => {
  Wl.init(e3, t), ne.init(e3, t);
});
function bc(e3) {
  return Fd(pn, e3);
}
var fn = b("ZodISODuration", (e3, t) => {
  Kl.init(e3, t), ne.init(e3, t);
});
function yc(e3) {
  return Ld(fn, e3);
}
var Zg = (e3, t) => {
  tn.init(e3, t), e3.name = "ZodError", Object.defineProperties(e3, {
    format: {
      value: (i) => Br(e3, i)
    },
    flatten: {
      value: (i) => Vr(e3, i)
    },
    addIssue: {
      value: (i) => e3.issues.push(i)
    },
    addIssues: {
      value: (i) => e3.issues.push(...i)
    },
    isEmpty: {
      get() {
        return e3.issues.length === 0;
      }
    }
  });
}, Wg = b("ZodError", Zg), dr = b("ZodError", Zg, {
  Parent: Error
});
var ka = Oo(dr), Aa = Ro(dr), Ea = Mo(dr), za = jo(dr);
var Q = b(
  "ZodType",
  (e3, t) => (V.init(e3, t), e3.def = t, Object.defineProperty(e3, "_def", {
    value: t
  }), e3.check = (...i) => e3.clone({
    ...t,
    checks: [
      ...t.checks ?? [],
      ...i.map(
        (n) => typeof n == "function" ? {
          _zod: {
            check: n,
            def: {
              check: "custom"
            },
            onattach: []
          }
        } : n
      )
    ]
  }), e3.clone = (i, n) => Be(e3, i, n), e3.brand = () => e3, e3.register = (i, n) => (i.add(e3, n), e3), e3.parse = (i, n) => ka(e3, i, n, {
    callee: e3.parse
  }), e3.safeParse = (i, n) => Ea(e3, i, n), e3.parseAsync = async (i, n) => Aa(e3, i, n, {
    callee: e3.parseAsync
  }), e3.safeParseAsync = async (i, n) => za(e3, i, n), e3.spa = e3.safeParseAsync, e3.refine = (i, n) => e3.check(o_(i, n)), e3.superRefine = (i) => e3.check(a_(i)), e3.overwrite = (i) => e3.check(lt(i)), e3.optional = () => yn(e3), e3.nullable = () => vn(e3), e3.nullish = () => yn(vn(e3)), e3.nonoptional = (i) => Zc(e3, i), e3.array = () => Ja(e3), e3.or = (i) => An([e3, i]), e3.and = (i) => $c(e3, i), e3.transform = (i) => wn(e3, es(i)), e3.default = (i) => Bc(e3, i), e3.prefault = (i) => Gc(e3, i), e3.catch = (i) => Qc(e3, i), e3.pipe = (i) => wn(e3, i), e3.readonly = () => Xc(e3), e3.describe = (i) => {
    let n = e3.clone();
    return tt.add(n, {
      description: i
    }), n;
  }, Object.defineProperty(e3, "description", {
    get() {
      return tt.get(e3)?.description;
    },
    configurable: true
  }), e3.meta = (...i) => {
    if (i.length === 0) return tt.get(e3);
    let n = e3.clone();
    return tt.add(n, i[0]), n;
  }, e3.isOptional = () => e3.safeParse(void 0).success, e3.isNullable = () => e3.safeParse(null).success, e3)
), Ia = b("_ZodString", (e3, t) => {
  nn.init(e3, t), Q.init(e3, t);
  let i = e3._zod.bag;
  e3.format = i.format ?? null, e3.minLength = i.minimum ?? null, e3.maxLength = i.maximum ?? null, e3.regex = (...n) => e3.check(Qr(...n)), e3.includes = (...n) => e3.check(Xr(...n)), e3.startsWith = (...n) => e3.check(ei(...n)), e3.endsWith = (...n) => e3.check(ti(...n)), e3.min = (...n) => e3.check($t(...n)), e3.max = (...n) => e3.check(ur(...n)), e3.length = (...n) => e3.check(lr(...n)), e3.nonempty = (...n) => e3.check($t(1, ...n)), e3.lowercase = (n) => e3.check(Jr(n)), e3.uppercase = (n) => e3.check(Yr(n)), e3.trim = () => e3.check(ni()), e3.normalize = (...n) => e3.check(ii(...n)), e3.toLowerCase = () => e3.check(oi()), e3.toUpperCase = () => e3.check(ai());
}), Sn = b("ZodString", (e3, t) => {
  nn.init(e3, t), Ia.init(e3, t), e3.email = (i) => e3.check(Qo($a, i)), e3.url = (i) => e3.check(ta(Oa, i)), e3.jwt = (i) => e3.check(ga(Wa, i)), e3.emoji = (i) => e3.check(ra(Na, i)), e3.guid = (i) => e3.check(ln(hn, i)), e3.uuid = (i) => e3.check(Jo(ct, i)), e3.uuidv4 = (i) => e3.check(Yo(ct, i)), e3.uuidv6 = (i) => e3.check(Xo(ct, i)), e3.uuidv7 = (i) => e3.check(ea(ct, i)), e3.nanoid = (i) => e3.check(ia(Ra, i)), e3.guid = (i) => e3.check(ln(hn, i)), e3.cuid = (i) => e3.check(na(Ca, i)), e3.cuid2 = (i) => e3.check(oa(Ma, i)), e3.ulid = (i) => e3.check(aa(ja, i)), e3.base64 = (i) => e3.check(ma(Ha, i)), e3.base64url = (i) => e3.check(pa(Ga, i)), e3.xid = (i) => e3.check(sa(qa, i)), e3.ksuid = (i) => e3.check(ua(Ua, i)), e3.ipv4 = (i) => e3.check(la(Fa, i)), e3.ipv6 = (i) => e3.check(da(La, i)), e3.cidrv4 = (i) => e3.check(ca(Va, i)), e3.cidrv6 = (i) => e3.check(_a(Ba, i)), e3.e164 = (i) => e3.check(fa(Za, i)), e3.datetime = (i) => e3.check(gc(i)), e3.date = (i) => e3.check(hc(i)), e3.time = (i) => e3.check(bc(i)), e3.duration = (i) => e3.check(yc(i));
});
function Ta(e3) {
  return Md(Sn, e3);
}
var ne = b("ZodStringFormat", (e3, t) => {
  ie.init(e3, t), Ia.init(e3, t);
}), $a = b("ZodEmail", (e3, t) => {
  Ml.init(e3, t), ne.init(e3, t);
});
function Kg(e3) {
  return Qo($a, e3);
}
var hn = b("ZodGUID", (e3, t) => {
  Rl.init(e3, t), ne.init(e3, t);
});
function Qg(e3) {
  return ln(hn, e3);
}
var ct = b("ZodUUID", (e3, t) => {
  Cl.init(e3, t), ne.init(e3, t);
});
function Jg(e3) {
  return Jo(ct, e3);
}
function Yg(e3) {
  return Yo(ct, e3);
}
function Xg(e3) {
  return Xo(ct, e3);
}
function eh(e3) {
  return ea(ct, e3);
}
var Oa = b("ZodURL", (e3, t) => {
  jl.init(e3, t), ne.init(e3, t);
});
function th(e3) {
  return ta(Oa, e3);
}
var Na = b("ZodEmoji", (e3, t) => {
  ql.init(e3, t), ne.init(e3, t);
});
function rh(e3) {
  return ra(Na, e3);
}
var Ra = b("ZodNanoID", (e3, t) => {
  Ul.init(e3, t), ne.init(e3, t);
});
function ih(e3) {
  return ia(Ra, e3);
}
var Ca = b("ZodCUID", (e3, t) => {
  Fl.init(e3, t), ne.init(e3, t);
});
function nh(e3) {
  return na(Ca, e3);
}
var Ma = b("ZodCUID2", (e3, t) => {
  Ll.init(e3, t), ne.init(e3, t);
});
function oh(e3) {
  return oa(Ma, e3);
}
var ja = b("ZodULID", (e3, t) => {
  Vl.init(e3, t), ne.init(e3, t);
});
function ah(e3) {
  return aa(ja, e3);
}
var qa = b("ZodXID", (e3, t) => {
  Bl.init(e3, t), ne.init(e3, t);
});
function sh(e3) {
  return sa(qa, e3);
}
var Ua = b("ZodKSUID", (e3, t) => {
  Hl.init(e3, t), ne.init(e3, t);
});
function uh(e3) {
  return ua(Ua, e3);
}
var Fa = b("ZodIPv4", (e3, t) => {
  Ql.init(e3, t), ne.init(e3, t);
});
function lh(e3) {
  return la(Fa, e3);
}
var La = b("ZodIPv6", (e3, t) => {
  Jl.init(e3, t), ne.init(e3, t);
});
function dh(e3) {
  return da(La, e3);
}
var Va = b("ZodCIDRv4", (e3, t) => {
  Yl.init(e3, t), ne.init(e3, t);
});
function ch(e3) {
  return ca(Va, e3);
}
var Ba = b("ZodCIDRv6", (e3, t) => {
  Xl.init(e3, t), ne.init(e3, t);
});
function _h(e3) {
  return _a(Ba, e3);
}
var Ha = b("ZodBase64", (e3, t) => {
  td.init(e3, t), ne.init(e3, t);
});
function mh(e3) {
  return ma(Ha, e3);
}
var Ga = b("ZodBase64URL", (e3, t) => {
  rd.init(e3, t), ne.init(e3, t);
});
function ph(e3) {
  return pa(Ga, e3);
}
var Za = b("ZodE164", (e3, t) => {
  id.init(e3, t), ne.init(e3, t);
});
function fh(e3) {
  return fa(Za, e3);
}
var Wa = b("ZodJWT", (e3, t) => {
  nd.init(e3, t), ne.init(e3, t);
});
function gh(e3) {
  return ga(Wa, e3);
}
var ui = b("ZodNumber", (e3, t) => {
  Bo.init(e3, t), Q.init(e3, t), e3.gt = (n, r) => e3.check(ut(n, r)), e3.gte = (n, r) => e3.check(Ce(n, r)), e3.min = (n, r) => e3.check(Ce(n, r)), e3.lt = (n, r) => e3.check(st(n, r)), e3.lte = (n, r) => e3.check(We(n, r)), e3.max = (n, r) => e3.check(We(n, r)), e3.int = (n) => e3.check(Pa(n)), e3.safe = (n) => e3.check(Pa(n)), e3.positive = (n) => e3.check(ut(0, n)), e3.nonnegative = (n) => e3.check(Ce(0, n)), e3.negative = (n) => e3.check(st(0, n)), e3.nonpositive = (n) => e3.check(We(0, n)), e3.multipleOf = (n, r) => e3.check(Zt(n, r)), e3.step = (n, r) => e3.check(Zt(n, r)), e3.finite = () => e3;
  let i = e3._zod.bag;
  e3.minValue = Math.max(
    i.minimum ?? Number.NEGATIVE_INFINITY,
    i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY
  ) ?? null, e3.maxValue = Math.min(
    i.maximum ?? Number.POSITIVE_INFINITY,
    i.exclusiveMaximum ?? Number.POSITIVE_INFINITY
  ) ?? null, e3.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), e3.isFinite = true, e3.format = i.format ?? null;
});
function vc(e3) {
  return Vd(ui, e3);
}
var cr = b("ZodNumberFormat", (e3, t) => {
  od.init(e3, t), ui.init(e3, t);
});
function Pa(e3) {
  return Hd(cr, e3);
}
function hh(e3) {
  return Gd(cr, e3);
}
function bh(e3) {
  return Zd(cr, e3);
}
function yh(e3) {
  return Wd(cr, e3);
}
function vh(e3) {
  return Kd(cr, e3);
}
var li = b("ZodBoolean", (e3, t) => {
  on.init(e3, t), Q.init(e3, t);
});
function wc(e3) {
  return Qd(li, e3);
}
var di = b("ZodBigInt", (e3, t) => {
  Ho.init(e3, t), Q.init(e3, t), e3.gte = (n, r) => e3.check(Ce(n, r)), e3.min = (n, r) => e3.check(Ce(n, r)), e3.gt = (n, r) => e3.check(ut(n, r)), e3.gte = (n, r) => e3.check(Ce(n, r)), e3.min = (n, r) => e3.check(Ce(n, r)), e3.lt = (n, r) => e3.check(st(n, r)), e3.lte = (n, r) => e3.check(We(n, r)), e3.max = (n, r) => e3.check(We(n, r)), e3.positive = (n) => e3.check(ut(BigInt(0), n)), e3.negative = (n) => e3.check(st(BigInt(0), n)), e3.nonpositive = (n) => e3.check(We(BigInt(0), n)), e3.nonnegative = (n) => e3.check(Ce(BigInt(0), n)), e3.multipleOf = (n, r) => e3.check(Zt(n, r));
  let i = e3._zod.bag;
  e3.minValue = i.minimum ?? null, e3.maxValue = i.maximum ?? null, e3.format = i.format ?? null;
});
function wh(e3) {
  return Yd(di, e3);
}
var Ka = b("ZodBigIntFormat", (e3, t) => {
  ad.init(e3, t), di.init(e3, t);
});
function Sh(e3) {
  return ec(Ka, e3);
}
function xh(e3) {
  return tc(Ka, e3);
}
var Sc = b("ZodSymbol", (e3, t) => {
  sd.init(e3, t), Q.init(e3, t);
});
function Dh(e3) {
  return rc(Sc, e3);
}
var xc = b("ZodUndefined", (e3, t) => {
  ud.init(e3, t), Q.init(e3, t);
});
function kh(e3) {
  return ic(xc, e3);
}
var Dc = b("ZodNull", (e3, t) => {
  ld.init(e3, t), Q.init(e3, t);
});
function kc(e3) {
  return nc(Dc, e3);
}
var Ac = b("ZodAny", (e3, t) => {
  dd.init(e3, t), Q.init(e3, t);
});
function Ah() {
  return oc(Ac);
}
var Qa = b("ZodUnknown", (e3, t) => {
  Gt.init(e3, t), Q.init(e3, t);
});
function bn() {
  return Wr(Qa);
}
var Ec = b("ZodNever", (e3, t) => {
  cd.init(e3, t), Q.init(e3, t);
});
function xn(e3) {
  return ac(Ec, e3);
}
var zc = b("ZodVoid", (e3, t) => {
  _d.init(e3, t), Q.init(e3, t);
});
function Eh(e3) {
  return sc(zc, e3);
}
var Dn = b("ZodDate", (e3, t) => {
  md.init(e3, t), Q.init(e3, t), e3.min = (n, r) => e3.check(Ce(n, r)), e3.max = (n, r) => e3.check(We(n, r));
  let i = e3._zod.bag;
  e3.minDate = i.minimum ? new Date(i.minimum) : null, e3.maxDate = i.maximum ? new Date(i.maximum) : null;
});
function zh(e3) {
  return uc(Dn, e3);
}
var Tc = b("ZodArray", (e3, t) => {
  an.init(e3, t), Q.init(e3, t), e3.element = t.element, e3.min = (i, n) => e3.check($t(i, n)), e3.nonempty = (i) => e3.check($t(1, i)), e3.max = (i, n) => e3.check(ur(i, n)), e3.length = (i, n) => e3.check(lr(i, n)), e3.unwrap = () => e3.element;
});
function Ja(e3, t) {
  return dn(Tc, e3, t);
}
function Th(e3) {
  let t = e3._zod.def.shape;
  return qc(Object.keys(t));
}
var kn = b("ZodObject", (e3, t) => {
  pd.init(e3, t), Q.init(e3, t), N.defineLazy(
    e3,
    "shape",
    () => Object.fromEntries(Object.entries(e3._zod.def.shape))
  ), e3.keyof = () => Mc(Object.keys(e3._zod.def.shape)), e3.catchall = (i) => e3.clone({
    ...e3._zod.def,
    catchall: i
  }), e3.passthrough = () => e3.clone({
    ...e3._zod.def,
    catchall: bn()
  }), e3.loose = () => e3.clone({
    ...e3._zod.def,
    catchall: bn()
  }), e3.strict = () => e3.clone({
    ...e3._zod.def,
    catchall: xn()
  }), e3.strip = () => e3.clone({
    ...e3._zod.def,
    catchall: void 0
  }), e3.extend = (i) => N.extend(e3, i), e3.merge = (i) => N.merge(e3, i), e3.pick = (i) => N.pick(e3, i), e3.omit = (i) => N.omit(e3, i), e3.partial = (...i) => N.partial(ts, e3, i[0]), e3.required = (...i) => N.required(rs, e3, i[0]);
});
function Ph(e3, t) {
  let i = {
    type: "object",
    get shape() {
      return N.assignProp(this, "shape", {
        ...e3
      }), this.shape;
    },
    ...N.normalizeParams(t)
  };
  return new kn(i);
}
function Ih(e3, t) {
  return new kn({
    type: "object",
    get shape() {
      return N.assignProp(this, "shape", {
        ...e3
      }), this.shape;
    },
    catchall: xn(),
    ...N.normalizeParams(t)
  });
}
function $h(e3, t) {
  return new kn({
    type: "object",
    get shape() {
      return N.assignProp(this, "shape", {
        ...e3
      }), this.shape;
    },
    catchall: bn(),
    ...N.normalizeParams(t)
  });
}
var Ya = b("ZodUnion", (e3, t) => {
  Go.init(e3, t), Q.init(e3, t), e3.options = t.options;
});
function An(e3, t) {
  return new Ya({
    type: "union",
    options: e3,
    ...N.normalizeParams(t)
  });
}
var Pc = b("ZodDiscriminatedUnion", (e3, t) => {
  Ya.init(e3, t), fd.init(e3, t);
});
function Oh(e3, t, i) {
  return new Pc({
    type: "union",
    options: t,
    discriminator: e3,
    ...N.normalizeParams(i)
  });
}
var Ic = b("ZodIntersection", (e3, t) => {
  gd.init(e3, t), Q.init(e3, t);
});
function $c(e3, t) {
  return new Ic({
    type: "intersection",
    left: e3,
    right: t
  });
}
var Oc = b("ZodTuple", (e3, t) => {
  ar.init(e3, t), Q.init(e3, t), e3.rest = (i) => e3.clone({
    ...e3._zod.def,
    rest: i
  });
});
function Nh(e3, t, i) {
  let n = t instanceof V, r = n ? i : t, o = n ? t : null;
  return new Oc({
    type: "tuple",
    items: e3,
    rest: o,
    ...N.normalizeParams(r)
  });
}
var Xa = b("ZodRecord", (e3, t) => {
  hd.init(e3, t), Q.init(e3, t), e3.keyType = t.keyType, e3.valueType = t.valueType;
});
function Nc(e3, t, i) {
  return new Xa({
    type: "record",
    keyType: e3,
    valueType: t,
    ...N.normalizeParams(i)
  });
}
function Rh(e3, t, i) {
  return new Xa({
    type: "record",
    keyType: An([e3, xn()]),
    valueType: t,
    ...N.normalizeParams(i)
  });
}
var Rc = b("ZodMap", (e3, t) => {
  bd.init(e3, t), Q.init(e3, t), e3.keyType = t.keyType, e3.valueType = t.valueType;
});
function Ch(e3, t, i) {
  return new Rc({
    type: "map",
    keyType: e3,
    valueType: t,
    ...N.normalizeParams(i)
  });
}
var Cc = b("ZodSet", (e3, t) => {
  yd.init(e3, t), Q.init(e3, t), e3.min = (...i) => e3.check(Wt(...i)), e3.nonempty = (i) => e3.check(Wt(1, i)), e3.max = (...i) => e3.check(sr(...i)), e3.size = (...i) => e3.check(Kr(...i));
});
function Mh(e3, t) {
  return new Cc({
    type: "set",
    valueType: e3,
    ...N.normalizeParams(t)
  });
}
var si = b("ZodEnum", (e3, t) => {
  vd.init(e3, t), Q.init(e3, t), e3.enum = t.entries, e3.options = Object.values(t.entries);
  let i = new Set(Object.keys(t.entries));
  e3.extract = (n, r) => {
    let o = {};
    for (let a of n)
      if (i.has(a)) o[a] = t.entries[a];
      else throw new Error(`Key ${a} not found in enum`);
    return new si({
      ...t,
      checks: [],
      ...N.normalizeParams(r),
      entries: o
    });
  }, e3.exclude = (n, r) => {
    let o = {
      ...t.entries
    };
    for (let a of n)
      if (i.has(a)) delete o[a];
      else throw new Error(`Key ${a} not found in enum`);
    return new si({
      ...t,
      checks: [],
      ...N.normalizeParams(r),
      entries: o
    });
  };
});
function Mc(e3, t) {
  let i = Array.isArray(e3) ? Object.fromEntries(e3.map((n) => [n, n])) : e3;
  return new si({
    type: "enum",
    entries: i,
    ...N.normalizeParams(t)
  });
}
function jh(e3, t) {
  return new si({
    type: "enum",
    entries: e3,
    ...N.normalizeParams(t)
  });
}
var jc = b("ZodLiteral", (e3, t) => {
  wd.init(e3, t), Q.init(e3, t), e3.values = new Set(t.values), Object.defineProperty(e3, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error(
          "This schema contains multiple valid literal values. Use `.values` instead."
        );
      return t.values[0];
    }
  });
});
function qc(e3, t) {
  return new jc({
    type: "literal",
    values: Array.isArray(e3) ? e3 : [e3],
    ...N.normalizeParams(t)
  });
}
var Uc = b("ZodFile", (e3, t) => {
  Sd.init(e3, t), Q.init(e3, t), e3.min = (i, n) => e3.check(Wt(i, n)), e3.max = (i, n) => e3.check(sr(i, n)), e3.mime = (i, n) => e3.check(ri(Array.isArray(i) ? i : [i], n));
});
function qh(e3) {
  return _c(Uc, e3);
}
var Fc = b("ZodTransform", (e3, t) => {
  xd.init(e3, t), Q.init(e3, t), e3._zod.parse = (i, n) => {
    i.addIssue = (o) => {
      if (typeof o == "string") i.issues.push(N.issue(o, i.value, t));
      else {
        let a = o;
        a.fatal && (a.continue = false), a.code ?? (a.code = "custom"), a.input ?? (a.input = i.value), a.inst ?? (a.inst = e3), a.continue ?? (a.continue = true), i.issues.push(N.issue(a));
      }
    };
    let r = t.transform(i.value, i);
    return r instanceof Promise ? r.then((o) => (i.value = o, i)) : (i.value = r, i);
  };
});
function es(e3) {
  return new Fc({
    type: "transform",
    transform: e3
  });
}
var ts = b("ZodOptional", (e3, t) => {
  Dd.init(e3, t), Q.init(e3, t), e3.unwrap = () => e3._zod.def.innerType;
});
function yn(e3) {
  return new ts({
    type: "optional",
    innerType: e3
  });
}
var Lc = b("ZodNullable", (e3, t) => {
  kd.init(e3, t), Q.init(e3, t), e3.unwrap = () => e3._zod.def.innerType;
});
function vn(e3) {
  return new Lc({
    type: "nullable",
    innerType: e3
  });
}
function Uh(e3) {
  return yn(vn(e3));
}
var Vc = b("ZodDefault", (e3, t) => {
  Ad.init(e3, t), Q.init(e3, t), e3.unwrap = () => e3._zod.def.innerType, e3.removeDefault = e3.unwrap;
});
function Bc(e3, t) {
  return new Vc({
    type: "default",
    innerType: e3,
    get defaultValue() {
      return typeof t == "function" ? t() : t;
    }
  });
}
var Hc = b("ZodPrefault", (e3, t) => {
  Ed.init(e3, t), Q.init(e3, t), e3.unwrap = () => e3._zod.def.innerType;
});
function Gc(e3, t) {
  return new Hc({
    type: "prefault",
    innerType: e3,
    get defaultValue() {
      return typeof t == "function" ? t() : t;
    }
  });
}
var rs = b("ZodNonOptional", (e3, t) => {
  zd.init(e3, t), Q.init(e3, t), e3.unwrap = () => e3._zod.def.innerType;
});
function Zc(e3, t) {
  return new rs({
    type: "nonoptional",
    innerType: e3,
    ...N.normalizeParams(t)
  });
}
var Wc = b("ZodSuccess", (e3, t) => {
  Td.init(e3, t), Q.init(e3, t), e3.unwrap = () => e3._zod.def.innerType;
});
function Fh(e3) {
  return new Wc({
    type: "success",
    innerType: e3
  });
}
var Kc = b("ZodCatch", (e3, t) => {
  Pd.init(e3, t), Q.init(e3, t), e3.unwrap = () => e3._zod.def.innerType, e3.removeCatch = e3.unwrap;
});
function Qc(e3, t) {
  return new Kc({
    type: "catch",
    innerType: e3,
    catchValue: typeof t == "function" ? t : () => t
  });
}
var Jc = b("ZodNaN", (e3, t) => {
  Id.init(e3, t), Q.init(e3, t);
});
function Lh(e3) {
  return dc(Jc, e3);
}
var is = b("ZodPipe", (e3, t) => {
  sn.init(e3, t), Q.init(e3, t), e3.in = t.in, e3.out = t.out;
});
function wn(e3, t) {
  return new is({
    type: "pipe",
    in: e3,
    out: t
  });
}
var Yc = b("ZodReadonly", (e3, t) => {
  $d.init(e3, t), Q.init(e3, t);
});
function Xc(e3) {
  return new Yc({
    type: "readonly",
    innerType: e3
  });
}
var e_ = b("ZodTemplateLiteral", (e3, t) => {
  Od.init(e3, t), Q.init(e3, t);
});
function Vh(e3, t) {
  return new e_({
    type: "template_literal",
    parts: e3,
    ...N.normalizeParams(t)
  });
}
var t_ = b("ZodLazy", (e3, t) => {
  Rd.init(e3, t), Q.init(e3, t), e3.unwrap = () => e3._zod.def.getter();
});
function r_(e3) {
  return new t_({
    type: "lazy",
    getter: e3
  });
}
var i_ = b("ZodPromise", (e3, t) => {
  Nd.init(e3, t), Q.init(e3, t), e3.unwrap = () => e3._zod.def.innerType;
});
function Bh(e3) {
  return new i_({
    type: "promise",
    innerType: e3
  });
}
var En = b("ZodCustom", (e3, t) => {
  Cd.init(e3, t), Q.init(e3, t);
});
function n_(e3, t) {
  let i = new ce({
    check: "custom",
    ...N.normalizeParams(t)
  });
  return i._zod.check = e3, i;
}
function Hh(e3, t) {
  return mc(En, e3 ?? (() => true), t);
}
function o_(e3, t = {}) {
  return pc(En, e3, t);
}
function a_(e3, t) {
  let i = n_(
    (n) => (n.addIssue = (r) => {
      if (typeof r == "string")
        n.issues.push(N.issue(r, n.value, i._zod.def));
      else {
        let o = r;
        o.fatal && (o.continue = false), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = i), o.continue ?? (o.continue = !i._zod.def.abort), n.issues.push(N.issue(o));
      }
    }, e3(n.value, n)),
    t
  );
  return i;
}
function Gh(e3, t = {
  error: `Input not instance of ${e3.name}`
}) {
  let i = new En({
    type: "custom",
    check: "custom",
    fn: (n) => n instanceof e3,
    abort: true,
    ...N.normalizeParams(t)
  });
  return i._zod.bag.Class = e3, i;
}
var Zh = (...e3) => fc(
  {
    Pipe: is,
    Boolean: li,
    Unknown: Qa
  },
  ...e3
);
function Wh(e3) {
  let t = r_(() => An([Ta(e3), vc(), wc(), kc(), Ja(t), Nc(Ta(), t)]));
  return t;
}
function Kh(e3, t) {
  return wn(es(e3), t);
}
var Qh = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
}, hx = Object.freeze({
  status: "aborted"
}), Jh = hx;
function Yh(e3) {
  se({
    customError: e3
  });
}
function Xh() {
  return se().customError;
}
var ns = {};
et(ns, {
  bigint: () => wx,
  boolean: () => vx,
  date: () => Sx,
  number: () => yx,
  string: () => bx
});
function bx(e3) {
  return jd(Sn, e3);
}
function yx(e3) {
  return Bd(ui, e3);
}
function vx(e3) {
  return Jd(li, e3);
}
function wx(e3) {
  return Xd(di, e3);
}
function Sx(e3) {
  return lc(Dn, e3);
}
se(Zo());
var eb = os;
var xx = eb;
$e();
Ue && se({
  jitless: true
});
var tb = [
  "ar",
  "bg",
  "ca",
  "co",
  "cs",
  "da",
  "de",
  "dsb",
  "el",
  "en",
  "es",
  "fa",
  "fr",
  "hsb",
  "hu",
  "id",
  "is",
  "it",
  "ja",
  "ko",
  "nb",
  "nl",
  "pl",
  "pt-BR",
  "ro",
  "ru",
  "sk",
  "sl",
  "sv",
  "tr",
  "uk",
  "zh-CN",
  "zh-TW"
], as = [
  "appDesc",
  "restore_purchase_button",
  "get_premium_button",
  "get_premium_description",
  "back",
  "rm_notifications_all",
  "waiting_for_media",
  "nomedia_title",
  "nomedia_description",
  "nomedia_reload_button",
  "nomedia_reload_button_tooltip",
  "show_nomedia_button",
  "show_nomedia_button_tooltip",
  "setting_button_tooltip",
  "history_button_tooltip",
  "show_all_history_button",
  "complete_title",
  "hide_complete_button",
  "translate_button_tooltip",
  "help_button_tooltip",
  "next_download",
  "open_source_tab_button_tooltip",
  "retry_download_button_tooltip",
  "delete_file_button_tooltip",
  "download_directory_button_tooltip",
  "clear_downloaded_tooltip",
  "show_in_popup_button_tooltip",
  "show_in_sidebar_button_tooltip",
  "video_not_playing_button_tooltip",
  "play",
  "warn_drm_tooltip",
  "version_title",
  "account_title",
  "one_hundred_downloads_title",
  "leave_review_description",
  "leave_review_button",
  "account_status",
  "account_status_premium",
  "free_account",
  "copy_to_clipboard",
  "my_account_button",
  "download_title",
  "show_notification",
  "max_parallel_downloads",
  "saveas_detected_warning",
  "change_saveas_setting",
  "download_directory_title",
  "download_directory_description",
  "change_browser_download_directory",
  "bad_download_subdirectory_warning",
  "download_subdirectory",
  "private_browsing_title",
  "private_browsing_warning",
  "private_browsing_notifications",
  "private_browsing_button",
  "throttle_youtube",
  "prefer_original_audio",
  "settings_history_title",
  "transient_history_description",
  "history_limit",
  "appearance_title",
  "theme_title",
  "theme_light",
  "theme_dark",
  "theme_system",
  "popup_size_title",
  "popup_size_small",
  "popup_size_medium",
  "popup_size_big",
  "font_size_title",
  "font_size_default",
  "font_size_large",
  "font_size_verylarge",
  "panel_position_title",
  "use_popup",
  "use_sidebar",
  "behavior_title",
  "controls_title",
  "show_in_context_menu",
  "restart_addon",
  "reset_settings",
  "preferred_quality",
  "preferred_quality_highest",
  "preferred_quality_1080p",
  "preferred_quality_720p",
  "preferred_quality_480p",
  "prefer_mkv",
  "preview_mode_title",
  "preview_mode_none",
  "preview_mode_video",
  "preview_mode_image",
  "media_discovered_ordering_title",
  "order_media_smart",
  "order_media_by_newest",
  "order_media_by_oldest",
  "languages_title",
  "settings_subtitles_title",
  "settings_audio_tracks_title",
  "history_title",
  "history_warning",
  "history_warning_2",
  "enable_history",
  "clear_history",
  "disable_history",
  "no_downloads_yet",
  "download_failed",
  "download_failed_description",
  "download_interrupted",
  "download_interrupted_description",
  "download_with_drm_failed_description",
  "no_youtube",
  "no_youtube_description",
  "no_youtube_description_2",
  "premium_required",
  "premium_yt_required_description",
  "youtube_too_many_downloads",
  "youtube_too_many_downloads_description",
  "stop",
  "cancel",
  "copy_url",
  "always_copy_url",
  "download_button",
  "download_as_button_and_menu",
  "rename_short",
  "always_download_as_menu",
  "download_audio_button",
  "download_audio_and_video_menu",
  "always_download_audio_and_video_for_this_website",
  "download_audio_only_menu",
  "audio_only_for_this_website",
  "details",
  "report",
  "reporting",
  "reported_thankyou",
  "move_lang_up",
  "move_lang_down",
  "remove_lang",
  "add_lang"
], s_ = [
  "add_to_chrome",
  "add_to_firefox",
  "add_to_browser",
  "get_premium_button",
  "faq_title",
  "faq_other_questions",
  "faq_ask",
  "landing_nav_links_0",
  "landing_nav_links_1",
  "landing_hero_quote",
  "landing_hero_author",
  "landing_hero_source",
  "landing_hero_title",
  "landing_hero_subtitle",
  "landing_hero_signature",
  "landing_hero_badges_0",
  "landing_hero_badges_1",
  "landing_hero_badges_2",
  "landing_hero_badges_3",
  "landing_section_1_simple_by_design_title",
  "landing_section_1_simple_by_design_paragraph",
  "landing_section_1_simple_by_design_items_0",
  "landing_section_1_simple_by_design_items_1",
  "landing_section_1_simple_by_design_items_2",
  "landing_section_2_powerful_reliable_title",
  "landing_section_2_powerful_reliable_paragraph",
  "landing_section_3_privacy_title",
  "landing_section_3_privacy_paragraph",
  "landing_section_3_privacy_items_0",
  "landing_section_3_privacy_items_1",
  "landing_section_4_stats_stats_0_value",
  "landing_section_4_stats_stats_0_description",
  "landing_section_4_stats_stats_1_value",
  "landing_section_4_stats_stats_1_description",
  "landing_section_4_stats_stats_2_value",
  "landing_section_4_stats_stats_2_description",
  "landing_section_5_premium_title_a",
  "landing_section_5_premium_title_b",
  "landing_section_5_premium_paragraph",
  "landing_section_6_browsers_label",
  "landing_cta_banner_title",
  "landing_cta_banner_paragraph",
  "landing_footer_paragraph",
  "landing_footer_links_1",
  "landing_footer_links_2",
  "landing_footer_links_3",
  "landing_footer_title",
  "landing_footer_title_2",
  "landing_footer_title_3",
  "landing_footer_donate",
  "landing_faq_items_0_question",
  "landing_faq_items_0_answer",
  "landing_faq_items_1_question",
  "landing_faq_items_1_answer",
  "landing_faq_items_2_question",
  "landing_faq_items_2_answer",
  "landing_faq_items_3_question",
  "landing_faq_items_3_answer",
  "landing_faq_items_4_question",
  "landing_faq_items_4_answer",
  "landing_faq_items_5_question",
  "landing_faq_items_5_answer",
  "landing_restore_purchase",
  "premium_hero_title",
  "premium_hero_subtitle",
  "premium_card_basic_title",
  "premium_card_basic_description",
  "premium_card_basic_features_included_0",
  "premium_card_basic_features_included_1",
  "premium_card_basic_features_excluded_0",
  "premium_card_premium_title",
  "premium_card_premium_badges_0",
  "premium_card_premium_description",
  "premium_card_premium_features_included_0",
  "premium_card_premium_features_included_1",
  "premium_card_premium_features_included_2",
  "premium_card_premium_features_included_3",
  "premium_card_premium_button",
  "premium_recover_premium",
  "premium_recover_premium_click_here",
  "premium_faq_items_0_question",
  "premium_faq_items_0_answer",
  "premium_faq_items_1_question",
  "premium_faq_items_1_answer",
  "premium_faq_items_2_question",
  "premium_faq_items_2_answer",
  "premium_faq_items_3_question",
  "premium_faq_items_3_answer",
  "premium_supported_payment_methods",
  "premium_free",
  "premium_subscription_title",
  "premium_per_year",
  "premium_proceed_to_payment",
  "premium_plan_subscription_title",
  "premium_plan_subscription_period",
  "premium_plan_subscription_tagline",
  "premium_subscribe_button",
  "premium_plan_lifetime_title",
  "premium_plan_lifetime_period",
  "premium_plan_lifetime_tagline",
  "premium_buy_button",
  "issue_title",
  "issue_submit",
  "issue_thank_you",
  "issue_back",
  "issue_enter_email",
  "issue_email_sent",
  "issue_or_digit",
  "issue_just_digit",
  "issue_i_have_a_code",
  "issue_i_have_a_key",
  "issue_key",
  "rapid_release_title",
  "rapid_release_paragraph",
  "rapid_release_primary_button",
  "rapid_release_note",
  "activation_title",
  "activation_subtitle",
  "activation_loading",
  "activate_error",
  "activate_no_addon_found",
  "activate_no_method_found",
  "activate_help_me",
  "welcome_hero_title",
  "welcome_hero_subtitle",
  "welcome_card_items_0",
  "welcome_card_items_1",
  "goodbye_hero_title",
  "goodbye_hero_subtitle",
  "goodbye_form_question",
  "goodbye_form_answer_options_0",
  "goodbye_form_answer_options_1",
  "goodbye_form_answer_options_2",
  "goodbye_form_answer_options_3",
  "goodbye_form_answer_options_4",
  "goodbye_form_answer_options_5",
  "goodbye_form_placeholder",
  "goodbye_form_cta",
  "goodbye_thank_you"
];
var cP = new Set(tb), Dx = S.enum(as), kx = S.enum(s_), rb = S.map(Dx, S.string()), ib = S.map(kx, S.string()), _P = new Set(as);
function u_(e3) {
  return e3.templateLiteral(["behaviour_hash_", e3.number()]);
}
function l_(e3) {
  return e3.templateLiteral(["domain_hash_", e3.number()]);
}
function nb(e3) {
  return e3.strictObject({
    ALLOW_BRAVE_YT_DL: e3.boolean()
  });
}
function d_(e3) {
  return e3.templateLiteral(["experiment_hash_", e3.number()]);
}
function c_(e3) {
  return e3.enum(["ERROR", "WARN", "HAPPY"]);
}
function ob(e3) {
  return e3.strictObject({
    CARRY_GET_PARAM_WEBSITES: e3.array(e3.string()),
    STRIP_GET_PARAM_WEBSITES: e3.array(e3.string()),
    AUDIO_ONLY_WEBSITES: e3.array(e3.string()),
    DISABLE_PREVIEW_LOADING: e3.array(e3.string()),
    FIFO_DISCOVERED_WEBSITES: e3.array(e3.string()),
    FILTER_HTTP_M3U8_MEDIA: e3.array(e3.string()),
    CONVERT_MPD_URL_TO_M3U8: e3.array(e3.string()),
    ALLOW_SMALL_FILE_DETECTION: e3.array(e3.string()),
    BLOCK_MEDIA_DETECTION: e3.array(e3.string())
  });
}
function Ex(e3) {
  return e3.record(d_(e3), e3.boolean());
}
function __(e3) {
  return e3.enum(["no_cookies_no_vdata", "no_cookies_vdata", "cookies"]);
}
function ab(e3) {
  return ob(e3).keyof();
}
function zx(e3) {
  return nb(e3);
}
function sb(e3) {
  return nb(e3).keyof();
}
function ss(e3) {
  return e3.strictObject({
    player_id: e3.string().optional(),
    media_scan_configuration: e3.array(
      e3.strictObject({
        client: e3.enum([
          "IOS",
          "WEB",
          "MWEB",
          "ANDROID",
          "YTMUSIC",
          "YTMUSIC_ANDROID",
          "YTSTUDIO_ANDROID",
          "TV",
          "TV_SIMPLY",
          "TV_EMBEDDED",
          "YTKIDS",
          "WEB_EMBEDDED",
          "WEB_CREATOR",
          "ANDROID_VR",
          "VISIONOS"
        ]),
        implementation: __(e3)
      })
    )
  });
}
function Tx(e3) {
  return e3.strictObject({
    behaviour_hash: u_(e3),
    domain_hash_set: e3.array(l_(e3))
  });
}
var zn = 4;
function Px(e3) {
  return e3.strictObject({
    schema_version: e3.literal(zn),
    remote_notifications: e3.array(
      e3.strictObject({
        title: e3.string(),
        description: e3.string(),
        level: c_(e3),
        link_to: e3.string().optional()
      })
    ),
    behaviours: e3.strictObject({
      advertize_premium: e3.boolean(),
      gyt_scanner: ss(e3),
      websites: ob(e3)
    }),
    experiments: zx(e3)
  });
}
function ub(e3) {
  return Px(e3).extend({
    rules_revision: e3.string(),
    behaviours: e3.strictObject({
      advertize_premium: e3.boolean(),
      gyt_scanner: ss(e3),
      websites: e3.array(Tx(e3))
    }),
    experiments: Ex(e3)
  });
}
$e();
var $x = zn, lb = `https://files.openmediadownloader.net/${$x}/ruleset-${hm}-${gt}.json`, db = u_(S), cb = l_(S), m_ = ub(S), _b = c_(S), mb = ss(S), gP = __(S), hP = ab(S), pb = d_(S), bP = sb(S);
var gb = S.templateLiteral(["notification_", S.string()]), Ox = S.instanceof(URL), hb = S.object({
  type: S.literal("remote"),
  title: S.string(),
  details: S.string(),
  url: Ox.optional(),
  level: _b
});
qt();
var bb = {
  schema_version: 4,
  remote_notifications: [],
  behaviours: {
    advertize_premium: false,
    gyt_scanner: {
      player_id: "",
      media_scan_configuration: [
        {
          client: "VISIONOS",
          implementation: "no_cookies_no_vdata"
        },
        {
          client: "ANDROID_VR",
          implementation: "no_cookies_no_vdata"
        },
        {
          client: "IOS",
          implementation: "no_cookies_no_vdata"
        },
        {
          client: "WEB",
          implementation: "no_cookies_vdata"
        },
        {
          client: "WEB_EMBEDDED",
          implementation: "no_cookies_vdata"
        },
        {
          client: "WEB",
          implementation: "cookies"
        },
        {
          client: "WEB_EMBEDDED",
          implementation: "cookies"
        }
      ]
    },
    websites: [
      {
        behaviour_hash: "behaviour_hash_154935787860009",
        domain_hash_set: ["domain_hash_6608573326002331"]
      },
      {
        behaviour_hash: "behaviour_hash_1315705546100808",
        domain_hash_set: ["domain_hash_726826014639917"]
      },
      {
        behaviour_hash: "behaviour_hash_5442823870738372",
        domain_hash_set: ["domain_hash_7071161895522280"]
      },
      {
        behaviour_hash: "behaviour_hash_5594683955913774",
        domain_hash_set: ["domain_hash_5134534004467113"]
      },
      {
        behaviour_hash: "behaviour_hash_169748210392549",
        domain_hash_set: [
          "domain_hash_8954482409440681",
          "domain_hash_7130661336534249",
          "domain_hash_8900746365645186",
          "domain_hash_5928169562036030",
          "domain_hash_7252627821995380",
          "domain_hash_3789434795510791"
        ]
      },
      {
        behaviour_hash: "behaviour_hash_4462004333852502",
        domain_hash_set: [
          "domain_hash_4457827731818674",
          "domain_hash_7301359081326091",
          "domain_hash_7252627821995380",
          "domain_hash_5349644781176809",
          "domain_hash_6145635700516446",
          "domain_hash_405123053181564"
        ]
      },
      {
        behaviour_hash: "behaviour_hash_1928834492410043",
        domain_hash_set: ["domain_hash_6432464261771654"]
      },
      {
        behaviour_hash: "behaviour_hash_2625634307936170",
        domain_hash_set: ["domain_hash_1753743671717066"]
      },
      {
        behaviour_hash: "behaviour_hash_2168192316009402",
        domain_hash_set: []
      }
    ]
  },
  experiments: {
    experiment_hash_1986546207779496: true
  },
  rules_revision: "10.5.49.2"
};
function yb() {
  let e3 = m_.safeParse(bb);
  return e3.error ? (console.error("FATAL: default ruleset is not valid"), {
    schema_version: zn,
    behaviours: {
      advertize_premium: false,
      gyt_scanner: {
        media_scan_configuration: []
      },
      websites: []
    },
    remote_notifications: [],
    rules_revision: "",
    experiments: {}
  }) : e3.data;
}
async function Rx(e3) {
  let t = await qr(e3, {
    cache: "no-store"
  });
  if (t.isOk()) {
    let i = await t.value.json(), n = m_.safeParse(i);
    return n.error ? I(`invalid json received ${n.error}`) : L(n.data);
  } else return I(`Bad fetch for remote config ${t.error}`);
}
function p_(e3) {
  let t = /* @__PURE__ */ new Map();
  for (let i of e3.remote_notifications)
    t.set(`notification_${he(i.description)}`, {
      type: "remote",
      details: i.description,
      level: i.level,
      title: i.title,
      url: le(i?.link_to).unwrapOr(void 0)
    });
  return t;
}
function f_(e3) {
  let t = /* @__PURE__ */ new Map(), i = e3.behaviours.websites;
  for (let n of i) t.set(n.behaviour_hash, new Set(n.domain_hash_set));
  return t;
}
async function vb() {
  let t = U().ruleset_last_refresh_ms;
  if (Math.floor((Date.now() - t) / 864e5) < 1) {
    console.log("Sync not needed");
    return;
  }
  _e((r) => r.ruleset_last_refresh_ms = Date.now());
  let n = await Rx(lb);
  n.isOk() ? n.value.rules_revision != U().remote_ruleset_revision && _e((r) => {
    r.remote_ruleset_revision = n.value.rules_revision, r.remote_notifications = p_(n.value), r.remote_behaviours = {
      advertize_premium: n.value.behaviours.advertize_premium,
      gyt_scanner: n.value.behaviours.gyt_scanner,
      websites: f_(n.value)
    }, r.experiments = n.value.experiments;
  }) : console.warn(n.error);
}
function wb(e3, t) {
  let i = `experiment_hash_${he(t)}`;
  return i in e3.experiments ? e3.experiments[i] : false;
}
var xb = S.templateLiteral(["ded_", S.string()]), Cx = S.templateLiteral(["media_hash_", S.number()]), Sb = S.enum(["download", "download_as", "download_audio", "copy"]), Mx = S.enum(["popup", "sidebar"]), h_ = S.string().brand("directorypath"), jx = S.strictObject({
  downloaded_id: xb,
  media_hash: Cx,
  path: S.string(),
  browser_download_id: S.number(),
  download_timestamp: S.number(),
  origin_url: S.nullable(S.url()),
  origin_favicon_url: S.nullable(S.url()),
  has_drm: S.boolean(),
  subdir: S.optional(h_)
}), qx = S.enum(["SUBSCRIPTION", "LIFETIME", "GOLDEN"]), b_ = S.object({
  iat: S.optional(S.number()),
  user_id: S.number(),
  store: S.string().max(256),
  jti: S.string().max(512),
  valid_until: S.number(),
  exp: S.number(),
  developer: S.boolean().optional(),
  entitlement_type: qx.optional()
}), Ux = b_.extend({
  raw: S.string()
}), Fx = S.enum(["original", "user_language"]), Lx = S.enum(["none", "video", "image"]), Vx = S.enum(["system", "light", "dark"]), Bx = S.enum(["big", "medium", "small"]), Hx = S.enum(["verylarge", "large", "default"]), Gx = S.strictObject({
  max_length: S.number(),
  template: S.string(),
  force_doc_title: S.optional(S.boolean())
}), Zx = S.strictObject({
  template: S.string(),
  url: S.string(),
  max_length: S.nullable(S.number()),
  selector: S.nullable(S.string()),
  subdir: S.optional(h_),
  force_doc_title: S.optional(S.boolean()),
  replace: S.optional(
    S.array(
      S.strictObject({
        from: S.string(),
        to: S.string()
      })
    )
  )
}), Wx = S.enum(["SMART", "OLDEST", "NEWEST"]), g_ = S.strictObject({
  version: S.number(),
  default_action: Sb,
  default_action_per_hostname: S.map(S.string(), Sb),
  downloaded: S.map(xb, jx),
  jwt: S.nullable(Ux),
  lsd: S.number(),
  dockmode: Mx,
  download_directory: h_,
  youtube_throttle: S.boolean(),
  preferred_audio_strategy: Fx,
  preferred_audio_languages: S.set(S.enum(Di)),
  max_concurrent_downloads: S.number(),
  show_desktop_notifications: S.boolean(),
  show_desktop_notifications_private: S.boolean(),
  history_days: S.number(),
  show_transient_history: S.boolean(),
  ui_theme: Vx,
  use_context_menu: S.boolean(),
  dont_ask_for_user_review: S.boolean(),
  successful_downloads_count: S.number(),
  preferred_quality: S.nullable(S.number()),
  preferred_av_muxer: S.enum(["mp4", "mkv"]),
  hide_nomedia_box: S.boolean(),
  popup_size: Bx,
  font_size: Hx,
  preferred_discovered_media_order: Wx,
  smartnaming: S.strictObject({
    source: S.nullable(S.string()),
    compiled: S.strictObject({
      default_: Gx,
      rules: S.array(Zx)
    })
  }),
  preview_mode: Lx,
  last_migration_request: S.number(),
  custom_strings: S.strictObject({
    web: ib,
    addon: rb
  }),
  remote_ruleset_revision: S.string(),
  remote_notifications: S.map(gb, hb),
  remote_behaviours: S.strictObject({
    advertize_premium: S.boolean(),
    gyt_scanner: mb,
    websites: S.map(db, S.set(cb))
  }),
  experiments: S.record(pb, S.boolean()),
  ruleset_last_refresh_ms: S.number(),
  subtitle_languages: S.set(S.enum(Di))
}), qP = g_.readonly();
function normalizePersistentStateLegacy(e3) {
  let t = createDefaultPersistentStateLegacy();
  if (e3 && typeof e3 == "object") {
    "audio_strategy" in t && "youtube_audio_strategy" in e3 && (t.preferred_audio_strategy = e3.youtube_audio_strategy);
    for (let i of Object.keys(g_.shape)) {
      let n = g_.shape[i];
      if (i in e3) {
        let r = e3[i], o = n.safeParse(r);
        if (o.success) t[i] = o.data;
        else {
          for (let a of o.error.issues)
            console.warn("Zod issue"), console.warn(a.path.join(".")), console.warn(a.message);
          console.warn(o.error.issues), console.warn(o.error.type), console.warn(o.error.message), console.warn(
            `Failed to import past persitent state field: ${i}. Fallback to default. Value was:`,
            r
          );
        }
      }
    }
  }
  return t;
}
var y_ = 1710169438e3;
function createDefaultPersistentStateLegacy() {
  let e3 = yb();
  return {
    version: 1,
    default_action_per_hostname: /* @__PURE__ */ new Map(),
    downloaded: /* @__PURE__ */ new Map(),
    jwt: null,
    lsd: y_,
    default_action: "download",
    hide_nomedia_box: true,
    dont_ask_for_user_review: false,
    dockmode: "popup",
    download_directory: er,
    youtube_throttle: true,
    preferred_audio_strategy: "original",
    preferred_audio_languages: Bs(),
    max_concurrent_downloads: 6,
    show_desktop_notifications: true,
    show_desktop_notifications_private: false,
    history_days: 0,
    show_transient_history: true,
    ui_theme: "system",
    use_context_menu: true,
    preferred_quality: 1080,
    preferred_av_muxer: "mp4",
    popup_size: "medium",
    font_size: "default",
    preferred_discovered_media_order: "SMART",
    successful_downloads_count: 0,
    smartnaming: {
      source: null,
      compiled: Ei()
    },
    preview_mode: "video",
    last_migration_request: 0,
    custom_strings: {
      addon: /* @__PURE__ */ new Map(),
      web: /* @__PURE__ */ new Map()
    },
    remote_ruleset_revision: e3.rules_revision,
    remote_notifications: p_(e3),
    remote_behaviours: {
      advertize_premium: e3.behaviours.advertize_premium,
      gyt_scanner: e3.behaviours.gyt_scanner,
      websites: f_(e3)
    },
    experiments: e3.experiments,
    ruleset_last_refresh_ms: 0,
    subtitle_languages: Bs()
  };
}
var ls = "global_session_state", ds = "global_persistent_state", Ab = "session";
function w_(e3) {
  let t = ae(e3);
  return Tn.storage[Ab].set({
    [ls]: t
  });
}
function S_(e3) {
  let t = ae(e3);
  return Tn.storage.local.set({
    [ds]: t
  });
}
async function Eb() {
  let e3 = await Tn.storage[Ab].get(ls);
  if (ls in e3) {
    let t = e3[ls];
    return Te(t);
  } else return createInitialSessionState();
}
async function zb() {
  let e3 = await Tn.storage.local.get(ds);
  if (ds in e3) {
    let t = e3[ds];
    return normalizePersistentStateLegacy(Te(t));
  }
  return createDefaultPersistentStateLegacy();
}
async function Tb(e3) {
  globalThis._session_state = await Eb(), globalThis._session_state_write_timeout = A, globalThis._session_state_write_callback = e3;
}
async function Pb(e3) {
  globalThis._persistent_state = await zb(), await S_(globalThis._persistent_state), globalThis._persistent_state_write_timeout = A, globalThis._persistent_state_write_callback = e3;
}
function De(e3) {
  let t = e3(globalThis._session_state);
  return globalThis._session_state_write_timeout.isNone() && (globalThis._session_state_write_timeout = q(setTimeout(Ib, 500))), t;
}
function ke(e3) {
  let t = e3(globalThis._session_state);
  return Ib(), t;
}
function fe() {
  return globalThis._session_state;
}
function Ib() {
  w_(fe()).catch((e3) => {
    console.error(e3), (e3.message?.includes("QuotaExceededError") || e3.message?.includes("Session storage quota bytes exceeded")) && (console.error(`Storage quota exceeded, state not saved: ${e3}`), console.warn("Purging session state"), globalThis._session_state = {
      ...createInitialSessionState(),
      current_win_tab: globalThis._session_state.current_win_tab,
      downloading: globalThis._session_state.downloading
    }, w_(globalThis._session_state));
  });
  try {
    globalThis._session_state_write_callback();
  } catch (e3) {
    console.error(e3);
  }
  globalThis._session_state_write_timeout.isSome() && (clearTimeout(globalThis._session_state_write_timeout.value), globalThis._session_state_write_timeout = A);
}
function _e(e3) {
  let t = e3(globalThis._persistent_state);
  return globalThis._persistent_state_write_timeout.isNone() && (globalThis._persistent_state_write_timeout = q(setTimeout($b, 500))), t;
}
function me(e3) {
  let t = e3(globalThis._persistent_state);
  return $b(), t;
}
function U() {
  return globalThis._persistent_state;
}
function $b() {
  S_(U());
  try {
    globalThis._persistent_state_write_callback();
  } catch (e3) {
    console.error(e3);
  }
  globalThis._persistent_state_write_timeout.isSome() && (clearTimeout(globalThis._persistent_state_write_timeout.value), globalThis._persistent_state_write_timeout = A);
}
function x_() {
  Kt.default.sidebarAction.toggle();
}
function Qx(e3, t) {
  if (Ob(e3), _e((i) => i.dockmode = e3), !Ue)
    if (e3 == "popup")
      try {
        t.isSome() ? chrome.action.openPopup({
          windowId: t.value
        }) : chrome.action.openPopup();
      } catch {
      }
    else
      e3 == "sidebar" && t.isSome() && chrome.sidePanel?.open({
        windowId: t.value
      });
}
function Ob(e3) {
  Ue ? e3 == "sidebar" ? (Kt.default.action.onClicked.addListener(x_), Kt.default.action.setPopup({
    popup: null
  })) : e3 == "popup" ? (Kt.default.action.onClicked.removeListener(x_), Kt.default.action.setPopup({
    popup: "/content/popup.html"
  })) : e3 == "window" && (Kt.default.action.onClicked.removeListener(x_), Kt.default.action.setPopup({
    popup: null
  })) : chrome.sidePanel ? e3 == "sidebar" ? (chrome.sidePanel.setOptions({
    enabled: true
  }), chrome.sidePanel.setPanelBehavior({
    openPanelOnActionClick: true
  }), chrome.action.setPopup({
    popup: ""
  })) : e3 == "popup" && (chrome.sidePanel.setOptions({
    enabled: false
  }), chrome.sidePanel.setPanelBehavior({
    openPanelOnActionClick: false
  }), chrome.action.setPopup({
    popup: chrome.runtime.getURL("/content/popup.html")
  })) : chrome.action.setPopup({
    popup: chrome.runtime.getURL("/content/popup.html")
  });
}
function Nb() {
  Ob(U().dockmode), onContentMessage((e3) => {
    if (e3.name == "redock") {
      let t = fe().current_win_tab.win_id;
      Qx(e3.data.mode, t);
    }
    return Promise.resolve();
  });
}
var Rb = ve(Ie(), 1);
async function Cb(e3, t) {
  return t.has_drm ? true : (await Rb.default.scripting.executeScript({
    target: {
      tabId: e3
    },
    func: () => {
      let n = [...document.querySelectorAll("video")];
      for (let r of n) if (r.mediaKeys instanceof MediaKeys) return true;
      return false;
    }
  }))[0]?.result ?? false;
}
$e();
function Mb(e3, t) {
  if (e3.current_win_tab.tab_id.isSome()) {
    let i = e3.current_win_tab.tab_id.value, n = e3.discovered.get(i);
    if (n && n.meta.isSome()) {
      let r = n.meta.value, o = n.media.values().next()?.value;
      if (o) {
        let a = r.default_action == "download_as", u = r.default_action == "download_audio", { basename: s, subdir: l } = kr(o, r), d;
        if ("playlist" in o) {
          let c = Wn(o, t.preferred_quality);
          d = buildDownloadArgumentsLegacy(o, u, a, s, l, c, t);
        } else d = buildDownloadArgumentsLegacy(o, u, a, s, l, void 0, t);
        r.default_action == "copy" ? Ue ? navigator.clipboard.writeText(d.url.href) : browser.scripting.executeScript({
          target: {
            tabId: r.tab_id
          },
          func: (c) => navigator.clipboard.writeText(c),
          args: [d.url.href]
        }) : kt({
          name: "do_download",
          data: {
            download_args: ae(d),
            meta: ae(r),
            media: ae(o)
          }
        });
      }
    }
  }
}
var DownloadQueueLegacy = class {
  constructor(t, i, n) {
    this._running = 0;
    this._ytRunning = 0;
    this._ytDelay = 0;
    this._lastYtTaskTimestamp = 0;
    this._schedulePending = false;
    this._queue = [];
    if (t <= 0 || !Number.isFinite(t))
      throw new Error("capacity must be a positive finite number");
    if (i <= 0 || !Number.isFinite(i))
      throw new Error("youtube capacity must be a positive finite number");
    if (t < i)
      throw new Error("youtube capacity must be inferior or equal to capacity");
    this._ytDelay = n, this._totalCapacity = t, this._ytCapacity = i;
  }
  getStats() {
    return {
      capacity: this._totalCapacity,
      ytCapacity: this._ytCapacity,
      running: this._running,
      ytRunning: this._ytRunning,
      pending: this._queue.length
    };
  }
  queueTask(t, i, n) {
    return new Promise((r, o) => {
      let a = {
        id: i,
        is_youtube: n,
        reject: o,
        resolve: r,
        task: t
      };
      this._queue.push(a), this._schedule();
    });
  }
  cancelPendingTask(t) {
    let i = this._queue.findIndex((n) => n.id === t);
    if (i >= 0) {
      let [n] = this._queue.splice(i, 1);
      return n?.resolve(
        L({
          download_id: t,
          aborted_no_partial: true,
          ending_reason: xr()
        })
      ), true;
    } else return false;
  }
  setTotalCapacity(t) {
    if (t <= 0 || !Number.isFinite(t))
      throw new Error("capacity must be a positive finite number");
    if (t < this._ytCapacity)
      throw new Error("capacity must be superior or equal to youtube capacity");
    this._totalCapacity = t, this._schedule();
  }
  setYoutubeCapacity(t) {
    if (t <= 0 || !Number.isFinite(t))
      throw new Error("youtube capacity must be a positive finite number");
    if (t > this._totalCapacity)
      throw new Error(
        "youtube capacity must be lower or equal to the total capacity"
      );
    this._ytCapacity = t, this._schedule();
  }
  _schedule() {
    for (; this._running < this._totalCapacity; ) {
      let t, i = -1, n = Date.now() - this._lastYtTaskTimestamp, r = this._ytCapacity > 1, o = this._ytRunning < this._ytCapacity && (r || n > this._ytDelay);
      for (let [a, u] of this._queue.entries())
        if (!u.is_youtube || o) {
          t = u, i = a;
          break;
        }
      if (!t || i < 0) {
        this._queue.some((a) => a.is_youtube) && !this._schedulePending && (this._schedulePending = true, setTimeout(() => {
          this._schedulePending = false, this._schedule();
        }, 1e3));
        break;
      }
      this._queue.splice(i, 1), this._running++, t.is_youtube && this._ytRunning++, t.task().then((a) => {
        t.resolve(a);
      }).catch((a) => {
        t.reject(a);
      }).finally(() => {
        this._running--, t.is_youtube && (this._lastYtTaskTimestamp = Date.now(), this._ytRunning--), this._schedule();
      });
    }
  }
};
_s();
async function ry(e3) {
  let t = C_(await e3), [i, n, { QuickJSWASMModule: r }] = await Promise.all([
    t.importModuleLoader().then(C_),
    t.importFFI(),
    Promise.resolve().then(() => (ty(), ey)).then(C_)
  ]), o = await i();
  o.type = "sync";
  let a = new n(o);
  return new r(o, a);
}
function C_(e3) {
  return e3 && "default" in e3 && e3.default ? e3.default && "default" in e3.default && e3.default.default ? e3.default.default : e3.default : e3;
}
var vD = {
  type: "sync",
  importFFI: () => Promise.resolve().then(() => (ny(), iy)).then((e3) => e3.QuickJSFFI),
  importModuleLoader: () => Promise.resolve().then(() => (ay(), oy)).then((e3) => e3.default)
}, On = vD;
async function M_(e3 = On) {
  return ry(e3);
}
function j_(e3) {
  let t = e3.split(".").map((i) => parseInt(i));
  return t.length != 3 && t.length != 4 ? A : t.some(isNaN) ? A : (t.length == 3 && t.push(0), q({
    a: t[0],
    b: t[1],
    c: t[2],
    d: t[3]
  }));
}
$e();
var sy = ve(Ie(), 1);
$e();
async function q_() {
  return Promise.resolve(true);
  if (bm) return false;
  let e3 = await sy.default.runtime.getPlatformInfo();
  return e3.os == "linux" || e3.os == "openbsd";
}
async function uy() {
  let e3 = navigator;
  return "brave" in navigator && typeof e3.brave?.isBrave == "function" ? await e3.brave.isBrave() : false;
}
$e();
$e();
var _i = new TextEncoder(), Ot = new TextDecoder(), rI = 2 ** 32;
function ly(...e3) {
  let t = e3.reduce((r, { length: o }) => r + o, 0), i = new Uint8Array(t), n = 0;
  for (let r of e3) i.set(r, n), n += r.length;
  return i;
}
function dy(e3) {
  if (Uint8Array.fromBase64) return Uint8Array.fromBase64(e3);
  let t = atob(e3), i = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) i[n] = t.charCodeAt(n);
  return i;
}
function mi(e3) {
  if (Uint8Array.fromBase64)
    return Uint8Array.fromBase64(typeof e3 == "string" ? e3 : Ot.decode(e3), {
      alphabet: "base64url"
    });
  let t = e3;
  t instanceof Uint8Array && (t = Ot.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  try {
    return dy(t);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}
var Nt = class extends Error {
  static code = "ERR_JOSE_GENERIC";
  code = "ERR_JOSE_GENERIC";
  constructor(t, i) {
    super(t, i), this.name = this.constructor.name, Error.captureStackTrace?.(this, this.constructor);
  }
}, Ke = class extends Nt {
  static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  claim;
  reason;
  payload;
  constructor(t, i, n = "unspecified", r = "unspecified") {
    super(t, {
      cause: {
        claim: n,
        reason: r,
        payload: i
      }
    }), this.claim = n, this.reason = r, this.payload = i;
  }
}, Nn = class extends Nt {
  static code = "ERR_JWT_EXPIRED";
  code = "ERR_JWT_EXPIRED";
  claim;
  reason;
  payload;
  constructor(t, i, n = "unspecified", r = "unspecified") {
    super(t, {
      cause: {
        claim: n,
        reason: r,
        payload: i
      }
    }), this.claim = n, this.reason = r, this.payload = i;
  }
}, fs = class extends Nt {
  static code = "ERR_JOSE_ALG_NOT_ALLOWED";
  code = "ERR_JOSE_ALG_NOT_ALLOWED";
}, Qe = class extends Nt {
  static code = "ERR_JOSE_NOT_SUPPORTED";
  code = "ERR_JOSE_NOT_SUPPORTED";
};
var ge = class extends Nt {
  static code = "ERR_JWS_INVALID";
  code = "ERR_JWS_INVALID";
}, pi = class extends Nt {
  static code = "ERR_JWT_INVALID";
  code = "ERR_JWT_INVALID";
};
var gs = class extends Nt {
  static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  constructor(t = "signature verification failed", i) {
    super(t, i);
  }
};
function Rt(e3, t = "algorithm.name") {
  return new TypeError(
    `CryptoKey does not support this operation, its ${t} must be ${e3}`
  );
}
function Rn(e3, t) {
  return e3.name === t;
}
function U_(e3) {
  return parseInt(e3.name.slice(4), 10);
}
function DD(e3) {
  switch (e3) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function kD(e3, t) {
  if (t && !e3.usages.includes(t))
    throw new TypeError(
      `CryptoKey does not support this operation, its usages must include ${t}.`
    );
}
function cy(e3, t, i) {
  switch (t) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!Rn(e3.algorithm, "HMAC")) throw Rt("HMAC");
      let n = parseInt(t.slice(2), 10);
      if (U_(e3.algorithm.hash) !== n) throw Rt(`SHA-${n}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!Rn(e3.algorithm, "RSASSA-PKCS1-v1_5")) throw Rt("RSASSA-PKCS1-v1_5");
      let n = parseInt(t.slice(2), 10);
      if (U_(e3.algorithm.hash) !== n) throw Rt(`SHA-${n}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!Rn(e3.algorithm, "RSA-PSS")) throw Rt("RSA-PSS");
      let n = parseInt(t.slice(2), 10);
      if (U_(e3.algorithm.hash) !== n) throw Rt(`SHA-${n}`, "algorithm.hash");
      break;
    }
    case "Ed25519":
    case "EdDSA": {
      if (!Rn(e3.algorithm, "Ed25519")) throw Rt("Ed25519");
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!Rn(e3.algorithm, "ECDSA")) throw Rt("ECDSA");
      let n = DD(t);
      if (e3.algorithm.namedCurve !== n) throw Rt(n, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  kD(e3, i);
}
function _y(e3, t, ...i) {
  if (i = i.filter(Boolean), i.length > 2) {
    let n = i.pop();
    e3 += `one of type ${i.join(", ")}, or ${n}.`;
  } else
    i.length === 2 ? e3 += `one of type ${i[0]} or ${i[1]}.` : e3 += `of type ${i[0]}.`;
  return t == null ? e3 += ` Received ${t}` : typeof t == "function" && t.name ? e3 += ` Received function ${t.name}` : typeof t == "object" && t != null && t.constructor?.name && (e3 += ` Received an instance of ${t.constructor.name}`), e3;
}
var my = (e3, ...t) => _y("Key must be ", e3, ...t);
function F_(e3, t, ...i) {
  return _y(`Key for the ${e3} algorithm must be `, t, ...i);
}
function L_(e3) {
  return e3?.[Symbol.toStringTag] === "CryptoKey";
}
function V_(e3) {
  return e3?.[Symbol.toStringTag] === "KeyObject";
}
var B_ = (e3) => L_(e3) || V_(e3);
var py = (...e3) => {
  let t = e3.filter(Boolean);
  if (t.length === 0 || t.length === 1) return true;
  let i;
  for (let n of t) {
    let r = Object.keys(n);
    if (!i || i.size === 0) {
      i = new Set(r);
      continue;
    }
    for (let o of r) {
      if (i.has(o)) return false;
      i.add(o);
    }
  }
  return true;
};
function AD(e3) {
  return typeof e3 == "object" && e3 !== null;
}
var fr = (e3) => {
  if (!AD(e3) || Object.prototype.toString.call(e3) !== "[object Object]")
    return false;
  if (Object.getPrototypeOf(e3) === null) return true;
  let t = e3;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e3) === t;
};
var fy = (e3, t) => {
  if (e3.startsWith("RS") || e3.startsWith("PS")) {
    let { modulusLength: i } = t.algorithm;
    if (typeof i != "number" || i < 2048)
      throw new TypeError(
        `${e3} requires key modulusLength to be 2048 bits or larger`
      );
  }
};
var hs = (e3, t, i = 0) => {
  i === 0 && (t.unshift(t.length), t.unshift(6));
  let n = e3.indexOf(t[0], i);
  if (n === -1) return false;
  let r = e3.subarray(n, n + t.length);
  return r.length !== t.length ? false : r.every((o, a) => o === t[a]) || hs(e3, t, n + 1);
}, ED = (e3) => {
  switch (true) {
    case hs(e3, [42, 134, 72, 206, 61, 3, 1, 7]):
      return "P-256";
    case hs(e3, [43, 129, 4, 0, 34]):
      return "P-384";
    case hs(e3, [43, 129, 4, 0, 35]):
      return "P-521";
    default:
      return;
  }
}, zD = async (e3, t, i, n, r) => {
  let o, a, u = new Uint8Array(
    atob(i.replace(e3, "")).split("").map((l) => l.charCodeAt(0))
  ), s = t === "spki";
  switch (n) {
    case "PS256":
    case "PS384":
    case "PS512":
      o = {
        name: "RSA-PSS",
        hash: `SHA-${n.slice(-3)}`
      }, a = s ? ["verify"] : ["sign"];
      break;
    case "RS256":
    case "RS384":
    case "RS512":
      o = {
        name: "RSASSA-PKCS1-v1_5",
        hash: `SHA-${n.slice(-3)}`
      }, a = s ? ["verify"] : ["sign"];
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      o = {
        name: "RSA-OAEP",
        hash: `SHA-${parseInt(n.slice(-3), 10) || 1}`
      }, a = s ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
      break;
    case "ES256":
      o = {
        name: "ECDSA",
        namedCurve: "P-256"
      }, a = s ? ["verify"] : ["sign"];
      break;
    case "ES384":
      o = {
        name: "ECDSA",
        namedCurve: "P-384"
      }, a = s ? ["verify"] : ["sign"];
      break;
    case "ES512":
      o = {
        name: "ECDSA",
        namedCurve: "P-521"
      }, a = s ? ["verify"] : ["sign"];
      break;
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      let l = ED(u);
      o = l?.startsWith("P-") ? {
        name: "ECDH",
        namedCurve: l
      } : {
        name: "X25519"
      }, a = s ? [] : ["deriveBits"];
      break;
    }
    case "Ed25519":
    case "EdDSA":
      o = {
        name: "Ed25519"
      }, a = s ? ["verify"] : ["sign"];
      break;
    default:
      throw new Qe('Invalid or unsupported "alg" (Algorithm) value');
  }
  return crypto.subtle.importKey(t, u, o, r?.extractable ?? !!s, a);
};
var gy = (e3, t, i) => zD(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", e3, t, i);
function TD(e3) {
  let t, i;
  switch (e3.kty) {
    case "RSA": {
      switch (e3.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          t = {
            name: "RSA-PSS",
            hash: `SHA-${e3.alg.slice(-3)}`
          }, i = e3.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          t = {
            name: "RSASSA-PKCS1-v1_5",
            hash: `SHA-${e3.alg.slice(-3)}`
          }, i = e3.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          t = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(e3.alg.slice(-3), 10) || 1}`
          }, i = e3.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new Qe(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
          );
      }
      break;
    }
    case "EC": {
      switch (e3.alg) {
        case "ES256":
          t = {
            name: "ECDSA",
            namedCurve: "P-256"
          }, i = e3.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          t = {
            name: "ECDSA",
            namedCurve: "P-384"
          }, i = e3.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          t = {
            name: "ECDSA",
            namedCurve: "P-521"
          }, i = e3.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          t = {
            name: "ECDH",
            namedCurve: e3.crv
          }, i = e3.d ? ["deriveBits"] : [];
          break;
        default:
          throw new Qe(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
          );
      }
      break;
    }
    case "OKP": {
      switch (e3.alg) {
        case "Ed25519":
        case "EdDSA":
          t = {
            name: "Ed25519"
          }, i = e3.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          t = {
            name: e3.crv
          }, i = e3.d ? ["deriveBits"] : [];
          break;
        default:
          throw new Qe(
            'Invalid or unsupported JWK "alg" (Algorithm) Parameter value'
          );
      }
      break;
    }
    default:
      throw new Qe(
        'Invalid or unsupported JWK "kty" (Key Type) Parameter value'
      );
  }
  return {
    algorithm: t,
    keyUsages: i
  };
}
var hy = async (e3) => {
  if (!e3.alg)
    throw new TypeError(
      '"alg" argument is required when "jwk.alg" is not present'
    );
  let { algorithm: t, keyUsages: i } = TD(e3), n = {
    ...e3
  };
  return delete n.alg, delete n.use, crypto.subtle.importKey("jwk", n, t, e3.ext ?? !e3.d, e3.key_ops ?? i);
};
async function H_(e3, t, i) {
  if (typeof e3 != "string" || e3.indexOf("-----BEGIN PUBLIC KEY-----") !== 0)
    throw new TypeError('"spki" must be SPKI formatted string');
  return gy(e3, t, i);
}
var by = (e3, t, i, n, r) => {
  if (r.crit !== void 0 && n?.crit === void 0)
    throw new e3(
      '"crit" (Critical) Header Parameter MUST be integrity protected'
    );
  if (!n || n.crit === void 0) return /* @__PURE__ */ new Set();
  if (!Array.isArray(n.crit) || n.crit.length === 0 || n.crit.some((a) => typeof a != "string" || a.length === 0))
    throw new e3(
      '"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present'
    );
  let o;
  i !== void 0 ? o = new Map([...Object.entries(i), ...t.entries()]) : o = t;
  for (let a of n.crit) {
    if (!o.has(a))
      throw new Qe(`Extension Header Parameter "${a}" is not recognized`);
    if (r[a] === void 0)
      throw new e3(`Extension Header Parameter "${a}" is missing`);
    if (o.get(a) && n[a] === void 0)
      throw new e3(
        `Extension Header Parameter "${a}" MUST be integrity protected`
      );
  }
  return new Set(n.crit);
};
var yy = (e3, t) => {
  if (t !== void 0 && (!Array.isArray(t) || t.some((i) => typeof i != "string")))
    throw new TypeError(`"${e3}" option must be an array of strings`);
  if (t) return new Set(t);
};
function Cn(e3) {
  return fr(e3) && typeof e3.kty == "string";
}
function vy(e3) {
  return e3.kty !== "oct" && typeof e3.d == "string";
}
function wy(e3) {
  return e3.kty !== "oct" && typeof e3.d > "u";
}
function Sy(e3) {
  return e3.kty === "oct" && typeof e3.k == "string";
}
var fi, xy = async (e3, t, i, n = false) => {
  fi ||= /* @__PURE__ */ new WeakMap();
  let r = fi.get(e3);
  if (r?.[i]) return r[i];
  let o = await hy({
    ...t,
    alg: i
  });
  return n && Object.freeze(e3), r ? r[i] = o : fi.set(e3, {
    [i]: o
  }), o;
}, ID = (e3, t) => {
  fi ||= /* @__PURE__ */ new WeakMap();
  let i = fi.get(e3);
  if (i?.[t]) return i[t];
  let n = e3.type === "public", r = !!n, o;
  if (e3.asymmetricKeyType === "x25519") {
    switch (t) {
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW":
        break;
      default:
        throw new TypeError(
          "given KeyObject instance cannot be used for this algorithm"
        );
    }
    o = e3.toCryptoKey(e3.asymmetricKeyType, r, n ? [] : ["deriveBits"]);
  }
  if (e3.asymmetricKeyType === "ed25519") {
    if (t !== "EdDSA" && t !== "Ed25519")
      throw new TypeError(
        "given KeyObject instance cannot be used for this algorithm"
      );
    o = e3.toCryptoKey(e3.asymmetricKeyType, r, [n ? "verify" : "sign"]);
  }
  if (e3.asymmetricKeyType === "rsa") {
    let a;
    switch (t) {
      case "RSA-OAEP":
        a = "SHA-1";
        break;
      case "RS256":
      case "PS256":
      case "RSA-OAEP-256":
        a = "SHA-256";
        break;
      case "RS384":
      case "PS384":
      case "RSA-OAEP-384":
        a = "SHA-384";
        break;
      case "RS512":
      case "PS512":
      case "RSA-OAEP-512":
        a = "SHA-512";
        break;
      default:
        throw new TypeError(
          "given KeyObject instance cannot be used for this algorithm"
        );
    }
    if (t.startsWith("RSA-OAEP"))
      return e3.toCryptoKey(
        {
          name: "RSA-OAEP",
          hash: a
        },
        r,
        n ? ["encrypt"] : ["decrypt"]
      );
    o = e3.toCryptoKey(
      {
        name: t.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
        hash: a
      },
      r,
      [n ? "verify" : "sign"]
    );
  }
  if (e3.asymmetricKeyType === "ec") {
    let u = (/* @__PURE__ */ new Map([
      ["prime256v1", "P-256"],
      ["secp384r1", "P-384"],
      ["secp521r1", "P-521"]
    ])).get(e3.asymmetricKeyDetails?.namedCurve);
    if (!u)
      throw new TypeError(
        "given KeyObject instance cannot be used for this algorithm"
      );
    t === "ES256" && u === "P-256" && (o = e3.toCryptoKey(
      {
        name: "ECDSA",
        namedCurve: u
      },
      r,
      [n ? "verify" : "sign"]
    )), t === "ES384" && u === "P-384" && (o = e3.toCryptoKey(
      {
        name: "ECDSA",
        namedCurve: u
      },
      r,
      [n ? "verify" : "sign"]
    )), t === "ES512" && u === "P-521" && (o = e3.toCryptoKey(
      {
        name: "ECDSA",
        namedCurve: u
      },
      r,
      [n ? "verify" : "sign"]
    )), t.startsWith("ECDH-ES") && (o = e3.toCryptoKey(
      {
        name: "ECDH",
        namedCurve: u
      },
      r,
      n ? [] : ["deriveBits"]
    ));
  }
  if (!o)
    throw new TypeError(
      "given KeyObject instance cannot be used for this algorithm"
    );
  return i ? i[t] = o : fi.set(e3, {
    [t]: o
  }), o;
}, Dy = async (e3, t) => {
  if (e3 instanceof Uint8Array || L_(e3)) return e3;
  if (V_(e3)) {
    if (e3.type === "secret") return e3.export();
    if ("toCryptoKey" in e3 && typeof e3.toCryptoKey == "function")
      try {
        return ID(e3, t);
      } catch (n) {
        if (n instanceof TypeError) throw n;
      }
    let i = e3.export({
      format: "jwk"
    });
    return xy(e3, i, t);
  }
  if (Cn(e3)) return e3.k ? mi(e3.k) : xy(e3, e3, t, true);
  throw new Error("unreachable");
};
var gi = (e3) => e3?.[Symbol.toStringTag], G_ = (e3, t, i) => {
  if (t.use !== void 0) {
    let n;
    switch (i) {
      case "sign":
      case "verify":
        n = "sig";
        break;
      case "encrypt":
      case "decrypt":
        n = "enc";
        break;
    }
    if (t.use !== n)
      throw new TypeError(
        `Invalid key for this operation, its "use" must be "${n}" when present`
      );
  }
  if (t.alg !== void 0 && t.alg !== e3)
    throw new TypeError(
      `Invalid key for this operation, its "alg" must be "${e3}" when present`
    );
  if (Array.isArray(t.key_ops)) {
    let n;
    switch (true) {
      case (i === "sign" || i === "verify"):
      case e3 === "dir":
      case e3.includes("CBC-HS"):
        n = i;
        break;
      case e3.startsWith("PBES2"):
        n = "deriveBits";
        break;
      case /^A\d{3}(?:GCM)?(?:KW)?$/.test(e3):
        !e3.includes("GCM") && e3.endsWith("KW") ? n = i === "encrypt" ? "wrapKey" : "unwrapKey" : n = i;
        break;
      case (i === "encrypt" && e3.startsWith("RSA")):
        n = "wrapKey";
        break;
      case i === "decrypt":
        n = e3.startsWith("RSA") ? "unwrapKey" : "deriveBits";
        break;
    }
    if (n && t.key_ops?.includes?.(n) === false)
      throw new TypeError(
        `Invalid key for this operation, its "key_ops" must include "${n}" when present`
      );
  }
  return true;
}, $D = (e3, t, i) => {
  if (!(t instanceof Uint8Array)) {
    if (Cn(t)) {
      if (Sy(t) && G_(e3, t, i)) return;
      throw new TypeError(
        'JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present'
      );
    }
    if (!B_(t))
      throw new TypeError(
        F_(e3, t, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array")
      );
    if (t.type !== "secret")
      throw new TypeError(
        `${gi(t)} instances for symmetric algorithms must be of type "secret"`
      );
  }
}, OD = (e3, t, i) => {
  if (Cn(t))
    switch (i) {
      case "decrypt":
      case "sign":
        if (vy(t) && G_(e3, t, i)) return;
        throw new TypeError(
          "JSON Web Key for this operation be a private JWK"
        );
      case "encrypt":
      case "verify":
        if (wy(t) && G_(e3, t, i)) return;
        throw new TypeError(
          "JSON Web Key for this operation be a public JWK"
        );
    }
  if (!B_(t))
    throw new TypeError(F_(e3, t, "CryptoKey", "KeyObject", "JSON Web Key"));
  if (t.type === "secret")
    throw new TypeError(
      `${gi(t)} instances for asymmetric algorithms must not be of type "secret"`
    );
  if (t.type === "public")
    switch (i) {
      case "sign":
        throw new TypeError(
          `${gi(t)} instances for asymmetric algorithm signing must be of type "private"`
        );
      case "decrypt":
        throw new TypeError(
          `${gi(t)} instances for asymmetric algorithm decryption must be of type "private"`
        );
      default:
        break;
    }
  if (t.type === "private")
    switch (i) {
      case "verify":
        throw new TypeError(
          `${gi(t)} instances for asymmetric algorithm verifying must be of type "public"`
        );
      case "encrypt":
        throw new TypeError(
          `${gi(t)} instances for asymmetric algorithm encryption must be of type "public"`
        );
      default:
        break;
    }
}, ky = (e3, t, i) => {
  e3.startsWith("HS") || e3 === "dir" || e3.startsWith("PBES2") || /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(e3) || /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(e3) ? $D(e3, t, i) : OD(e3, t, i);
};
var Ay = (e3, t) => {
  let i = `SHA-${e3.slice(-3)}`;
  switch (e3) {
    case "HS256":
    case "HS384":
    case "HS512":
      return {
        hash: i,
        name: "HMAC"
      };
    case "PS256":
    case "PS384":
    case "PS512":
      return {
        hash: i,
        name: "RSA-PSS",
        saltLength: parseInt(e3.slice(-3), 10) >> 3
      };
    case "RS256":
    case "RS384":
    case "RS512":
      return {
        hash: i,
        name: "RSASSA-PKCS1-v1_5"
      };
    case "ES256":
    case "ES384":
    case "ES512":
      return {
        hash: i,
        name: "ECDSA",
        namedCurve: t.namedCurve
      };
    case "Ed25519":
    case "EdDSA":
      return {
        name: "Ed25519"
      };
    default:
      throw new Qe(
        `alg ${e3} is not supported either by JOSE or your javascript runtime`
      );
  }
};
var Ey = async (e3, t, i) => {
  if (t instanceof Uint8Array) {
    if (!e3.startsWith("HS"))
      throw new TypeError(my(t, "CryptoKey", "KeyObject", "JSON Web Key"));
    return crypto.subtle.importKey(
      "raw",
      t,
      {
        hash: `SHA-${e3.slice(-3)}`,
        name: "HMAC"
      },
      false,
      [i]
    );
  }
  return cy(t, e3, i), t;
};
var zy = async (e3, t, i, n) => {
  let r = await Ey(e3, t, "verify");
  fy(e3, r);
  let o = Ay(e3, r.algorithm);
  try {
    return await crypto.subtle.verify(o, r, i, n);
  } catch {
    return false;
  }
};
async function Ty(e3, t, i) {
  if (!fr(e3)) throw new ge("Flattened JWS must be an object");
  if (e3.protected === void 0 && e3.header === void 0)
    throw new ge(
      'Flattened JWS must have either of the "protected" or "header" members'
    );
  if (e3.protected !== void 0 && typeof e3.protected != "string")
    throw new ge("JWS Protected Header incorrect type");
  if (e3.payload === void 0) throw new ge("JWS Payload missing");
  if (typeof e3.signature != "string")
    throw new ge("JWS Signature missing or incorrect type");
  if (e3.header !== void 0 && !fr(e3.header))
    throw new ge("JWS Unprotected Header incorrect type");
  let n = {};
  if (e3.protected)
    try {
      let x = mi(e3.protected);
      n = JSON.parse(Ot.decode(x));
    } catch {
      throw new ge("JWS Protected Header is invalid");
    }
  if (!py(n, e3.header))
    throw new ge(
      "JWS Protected and JWS Unprotected Header Parameter names must be disjoint"
    );
  let r = {
    ...n,
    ...e3.header
  }, o = by(ge, /* @__PURE__ */ new Map([["b64", true]]), i?.crit, n, r), a = true;
  if (o.has("b64") && (a = n.b64, typeof a != "boolean"))
    throw new ge(
      'The "b64" (base64url-encode payload) Header Parameter must be a boolean'
    );
  let { alg: u } = r;
  if (typeof u != "string" || !u)
    throw new ge('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  let s = i && yy("algorithms", i.algorithms);
  if (s && !s.has(u))
    throw new fs('"alg" (Algorithm) Header Parameter value not allowed');
  if (a) {
    if (typeof e3.payload != "string")
      throw new ge("JWS Payload must be a string");
  } else if (typeof e3.payload != "string" && !(e3.payload instanceof Uint8Array))
    throw new ge("JWS Payload must be a string or an Uint8Array instance");
  let l = false;
  typeof t == "function" && (t = await t(n, e3), l = true), ky(u, t, "verify");
  let d = ly(
    _i.encode(e3.protected ?? ""),
    _i.encode("."),
    typeof e3.payload == "string" ? _i.encode(e3.payload) : e3.payload
  ), c;
  try {
    c = mi(e3.signature);
  } catch {
    throw new ge("Failed to base64url decode the signature");
  }
  let f = await Dy(t, u);
  if (!await zy(u, f, c, d)) throw new gs();
  let h;
  if (a)
    try {
      h = mi(e3.payload);
    } catch {
      throw new ge("Failed to base64url decode the payload");
    }
  else
    typeof e3.payload == "string" ? h = _i.encode(e3.payload) : h = e3.payload;
  let _ = {
    payload: h
  };
  return e3.protected !== void 0 && (_.protectedHeader = n), e3.header !== void 0 && (_.unprotectedHeader = e3.header), l ? {
    ..._,
    key: f
  } : _;
}
async function Py(e3, t, i) {
  if (e3 instanceof Uint8Array && (e3 = Ot.decode(e3)), typeof e3 != "string")
    throw new ge("Compact JWS must be a string or Uint8Array");
  let { 0: n, 1: r, 2: o, length: a } = e3.split(".");
  if (a !== 3) throw new ge("Invalid Compact JWS");
  let u = await Ty(
    {
      payload: r,
      protected: n,
      signature: o
    },
    t,
    i
  ), s = {
    payload: u.payload,
    protectedHeader: u.protectedHeader
  };
  return typeof t == "function" ? {
    ...s,
    key: u.key
  } : s;
}
var Iy = (e3) => Math.floor(e3.getTime() / 1e3);
var ND = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i, Z_ = (e3) => {
  let t = ND.exec(e3);
  if (!t || t[4] && t[1]) throw new TypeError("Invalid time period format");
  let i = parseFloat(t[2]), n = t[3].toLowerCase(), r;
  switch (n) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      r = Math.round(i);
      break;
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      r = Math.round(i * 60);
      break;
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      r = Math.round(i * 3600);
      break;
    case "day":
    case "days":
    case "d":
      r = Math.round(i * 86400);
      break;
    case "week":
    case "weeks":
    case "w":
      r = Math.round(i * 604800);
      break;
    default:
      r = Math.round(i * 31557600);
      break;
  }
  return t[1] === "-" || t[4] === "ago" ? -r : r;
};
var $y = (e3) => e3.toLowerCase().replace(/^application\//, ""), RD = (e3, t) => typeof e3 == "string" ? t.includes(e3) : Array.isArray(e3) ? t.some(Set.prototype.has.bind(new Set(e3))) : false;
function Oy(e3, t, i = {}) {
  let n;
  try {
    n = JSON.parse(Ot.decode(t));
  } catch {
  }
  if (!fr(n)) throw new pi("JWT Claims Set must be a top-level JSON object");
  let { typ: r } = i;
  if (r && (typeof e3.typ != "string" || $y(e3.typ) !== $y(r)))
    throw new Ke('unexpected "typ" JWT header value', n, "typ", "check_failed");
  let {
    requiredClaims: o = [],
    issuer: a,
    subject: u,
    audience: s,
    maxTokenAge: l
  } = i, d = [...o];
  l !== void 0 && d.push("iat"), s !== void 0 && d.push("aud"), u !== void 0 && d.push("sub"), a !== void 0 && d.push("iss");
  for (let h of new Set(d.reverse()))
    if (!(h in n))
      throw new Ke(`missing required "${h}" claim`, n, h, "missing");
  if (a && !(Array.isArray(a) ? a : [a]).includes(n.iss))
    throw new Ke('unexpected "iss" claim value', n, "iss", "check_failed");
  if (u && n.sub !== u)
    throw new Ke('unexpected "sub" claim value', n, "sub", "check_failed");
  if (s && !RD(n.aud, typeof s == "string" ? [s] : s))
    throw new Ke('unexpected "aud" claim value', n, "aud", "check_failed");
  let c;
  switch (typeof i.clockTolerance) {
    case "string":
      c = Z_(i.clockTolerance);
      break;
    case "number":
      c = i.clockTolerance;
      break;
    case "undefined":
      c = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  let { currentDate: f } = i, m = Iy(f || /* @__PURE__ */ new Date());
  if ((n.iat !== void 0 || l) && typeof n.iat != "number")
    throw new Ke('"iat" claim must be a number', n, "iat", "invalid");
  if (n.nbf !== void 0) {
    if (typeof n.nbf != "number")
      throw new Ke('"nbf" claim must be a number', n, "nbf", "invalid");
    if (n.nbf > m + c)
      throw new Ke(
        '"nbf" claim timestamp check failed',
        n,
        "nbf",
        "check_failed"
      );
  }
  if (n.exp !== void 0) {
    if (typeof n.exp != "number")
      throw new Ke('"exp" claim must be a number', n, "exp", "invalid");
    if (n.exp <= m - c)
      throw new Nn(
        '"exp" claim timestamp check failed',
        n,
        "exp",
        "check_failed"
      );
  }
  if (l) {
    let h = m - n.iat, _ = typeof l == "number" ? l : Z_(l);
    if (h - c > _)
      throw new Nn(
        '"iat" claim timestamp check failed (too far in the past)',
        n,
        "iat",
        "check_failed"
      );
    if (h < 0 - c)
      throw new Ke(
        '"iat" claim timestamp check failed (it should be in the past)',
        n,
        "iat",
        "check_failed"
      );
  }
  return n;
}
async function W_(e3, t, i) {
  let n = await Py(e3, t, i);
  if (n.protectedHeader.crit?.includes("b64") && n.protectedHeader.b64 === false)
    throw new pi("JWTs MUST NOT use unencoded payload");
  let o = {
    payload: Oy(n.protectedHeader, n.payload, i),
    protectedHeader: n.protectedHeader
  };
  return typeof t == "function" ? {
    ...o,
    key: n.key
  } : o;
}
var Ny = 3, MD = [1e3, 3e3, 5e3], jD = 14400 * 60 * 1e3, qD = 4320 * 60 * 1e3, Cy = gt.toUpperCase();
async function My(e3) {
  if (!e3 || !e3.value)
    return I(
      "Activation failed. No token, v9 key, or checkout session id present."
    );
  try {
    let t = e3.method == "key" ? xm : Sm, i = await qy(t, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        [e3.method]: e3.value,
        store: Cy
      }),
      signal: AbortSignal.timeout(15e3)
    });
    if (i.isErr()) return I(i.error.message);
    let r = await i.value.json();
    if (!r.jwt)
      return I(
        "Activation failed for an unknown reason (No JWT in activation response)."
      );
    let o = await Q_(r.jwt);
    if (!o.valid)
      return I("Activation failed for an unknown reason (not valid).");
    if (!o.jwt || !o.jwt.raw)
      return I("Activation failed for an unknown reason (not jwt).");
    let a = o.jwt;
    return _e((u) => u.jwt = a), L.EMPTY;
  } catch (t) {
    return I(`Activation failed: ${t}.`);
  }
}
async function jy(e3) {
  return true;
  if (vi) return true;
  if (!e3) return false;
  let t = await Q_(e3);
  if (!t.valid && t.can_refresh && t.jwt) return (await Ry(t.jwt)).valid;
  if (!t.valid || !t.jwt) return false;
  let i = t.jwt, n = /* @__PURE__ */ new Date(), r = new Date(i.exp * 1e3), o = new Date(i.valid_until * 1e3), a = Math.abs(o.getTime() - n.getTime()), u = Math.abs(r.getTime() - n.getTime());
  return (a <= qD || u <= jD) && await Ry(i), true;
}
function UD(e3) {
  let t = /* @__PURE__ */ new Date();
  return new Date(e3.valid_until * 1e3) > t;
}
function K_(e3) {
  let t = /* @__PURE__ */ new Date();
  return new Date(e3.exp * 1e3) > t;
}
async function Q_(e3) {
  try {
    let t = await H_(vm(), "ES256"), i = (await W_(e3, t)).payload, n = b_.safeParse(i);
    if (!n.success)
      return console.error(`Error validating JWT: ${n.error}`), {
        valid: false,
        can_refresh: false
      };
    let r = n.data, o = UD(r), a = r.store === Cy || r.store === "ALL", u = o && a, s = K_(r);
    return {
      jwt: {
        ...n.data,
        raw: e3
      },
      valid: u,
      can_refresh: s
    };
  } catch (t) {
    return console.error(`Error validating jwt: ${t}`), console.error(`${e3}`), {
      valid: false,
      can_refresh: false
    };
  }
}
async function Ry(e3) {
  try {
    let t = await qy(wm, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jwt: e3.raw
      }),
      signal: AbortSignal.timeout(15e3)
    });
    if (t.isErr())
      return t.error.reactivateRequired ? (_e((a) => a.jwt = null), {
        valid: false,
        can_refresh: false
      }) : {
        valid: false,
        can_refresh: K_(e3)
      };
    let n = await t.value.json(), r = await Q_(n.jwt), o = r.jwt;
    return r.valid && o && _e((a) => a.jwt = o), r;
  } catch (t) {
    return console.error("Refresh request failed:", t), {
      valid: false,
      can_refresh: K_(e3)
    };
  }
}
async function qy(e3, t) {
  let i = `Unknown error fetching ${e3}`;
  for (let n = 0; n < Ny + 1; ++n) {
    try {
      let r = await fetch(e3, t);
      if (r.ok) return L(r);
      if (r.status < 500) {
        let o = `${r.status}`, a = false;
        try {
          let u = await r.json();
          u.message && typeof u.message == "string" && (o = u.message), u.reactivateRequired && typeof u.reactivateRequired == "boolean" && (a = u.reactivateRequired);
        } catch {
        }
        return I({
          status: r.status,
          message: o,
          reactivateRequired: a
        });
      } else i = `Request to ${e3} failed with code: ${r.status}`;
    } catch (r) {
      r instanceof DOMException && r.name === "AbortError" ? i = `Request to ${e3} timed out` : i = `Request to ${e3} failed: ${r}`;
    }
    console.error(i), n < Ny && await new Promise((r) => setTimeout(r, MD[n]));
  }
  return I({
    message: i,
    reactivateRequired: false
  });
}
var mt = ve(Ie(), 1);
var Y_ = 12;
function J_(e3) {
  return new Promise((t) => mt.default.contextMenus.create(e3, t));
}
async function Uy() {
  let e3 = mt.default.runtime.getManifest();
  await mt.default.contextMenus.removeAll(), await J_({
    contexts: ["all"],
    id: "omd-top",
    title: e3.name
  }), await J_({
    contexts: ["all"],
    id: "omd-sub-header",
    enabled: false,
    title: "Download:",
    parentId: "omd-top"
  });
  let t = /* @__PURE__ */ new Map();
  for (let i = 0; i < Y_; i++) {
    let n = `omd-sub-${i}`;
    t.set(n, A), await J_({
      contexts: ["all"],
      id: n,
      title: "n/a",
      parentId: "omd-top"
    });
  }
  return mt.default.contextMenus.onClicked.addListener((i) => {
    let n = i.menuItemId, r = t.get(n);
    r && r.isSome() && kt(r.value);
  }), t;
}
function Fy(e3) {
  let t = e3.use_context_menu;
  return mt.default.contextMenus.update("omd-top", {
    visible: t
  });
}
function Ly(e3, t, i) {
  let n = [];
  if (e3.current_win_tab.tab_id.isSome()) {
    let r = e3.current_win_tab.tab_id.value, o = e3.discovered.get(r);
    if (o && o.meta.isSome()) {
      let a = o.meta.value, u = 0;
      for (let s of o.media.values()) {
        if (u >= Y_) break;
        let { basename: l, subdir: d } = kr(s, a), c;
        if ("playlist" in s) {
          let h = Wn(s, t.preferred_quality);
          c = buildDownloadArgumentsLegacy(s, false, false, l, d, h, t);
        } else c = buildDownloadArgumentsLegacy(s, false, false, l, d, void 0, t);
        let f = {
          name: "do_download",
          data: {
            download_args: ae(c),
            meta: ae(a),
            media: ae(s)
          }
        }, m = `omd-sub-${u}`;
        i.set(m, q(f)), n.push({
          title: `${l}.${c.extension}`,
          visible: true
        }), u++;
      }
    }
  }
  n.length > 0 ? mt.default.contextMenus.update("omd-sub-header", {
    title: "Download:"
  }) : mt.default.contextMenus.update("omd-sub-header", {
    title: "No Media"
  });
  for (let r = 0; r < Y_; r++) {
    let o = n[r];
    o ? mt.default.contextMenus.update(`omd-sub-${r}`, o) : mt.default.contextMenus.update(`omd-sub-${r}`, {
      visible: false
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
    return super.set(i, n), this.chop();
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
function X_(e3, t) {
  ke((i) => i.notifications.set(e3, t));
}
var Zy = q_();
async function updatePremiumBannerState() {
  let e3 = await Zy, t = 7200 * 1e3, i = Date.now(), n = U().lsd, o = i - n > t, a = !!U().jwt, u = U().remote_behaviours.advertize_premium, s = fe().advertize_premium;
  if (e3 || a || !u)
    s.advertize && De(
      (l) => l.advertize_premium = {
        advertize: false
      }
    );
  else if (o)
    (!s.advertize || s.blocked) && De(
      (l) => l.advertize_premium = {
        advertize: false,
        blocked: false
      }
    );
  else if (!s.advertize || !s.blocked) {
    let l = {
      advertize: false,
      blocked: false,
      snooze: false
    };
    De((d) => d.advertize_premium = l);
  }
}
function updateToolbarIndicator(e3, t) {
  let n = null;
  if (e3.current_win_tab.tab_id.isSome()) {
    n = e3.discovered.get(e3.current_win_tab.tab_id.value);
    n && n.media.size > 0 ? H.default.action.setIcon({
      path: "/bitmaps/logo-128-color.png"
    }) : H.default.action.setIcon({
      path: "/bitmaps/logo-128-grey.png"
    });
  }
  let i = e3.notifications.size + t.remote_notifications.size;
  if (i > 0) {
    H.default.action.setBadgeText({
      text: i.toString()
    }), H.default.action.setBadgeBackgroundColor({
      color: [255, 0, 0, 190]
    }), H.default.action.setBadgeTextColor({
      color: "white"
    });
  } else if (e3.downloading.size > 0) {
    H.default.action.setBadgeText({
      text: e3.downloading.size.toString()
    }), H.default.action.setBadgeBackgroundColor({
      color: "#0284c7"
    }), H.default.action.setBadgeTextColor({
      color: "white"
    });
  } else if (n && n.media.size > 0) {
    H.default.action.setBadgeText({
      text: n.media.size.toString()
    }), H.default.action.setBadgeBackgroundColor({
      color: "#2563eb"
    }), H.default.action.setBadgeTextColor({
      color: "white"
    });
  } else {
    H.default.action.setBadgeText({
      text: ""
    });
  }
}
function resolveDefaultAction(e3) {
  let t, i = U();
  return e3.isSome() && (t = i.default_action_per_hostname.get(e3.value.hostname)), t || (t = i.default_action), (t == "download_as" || t == "copy") && (t = "download"), t;
}
async function createTabMetadata(e3) {
  if (!fe().discovered.get(e3)) return;
  let t;
  try {
    t = await H.default.tabs.get(e3);
  } catch {
    console.warn("CreateMetaForTab: couldn't find the tab");
    return;
  }
  if (!fe().discovered.get(e3)) return;
  let n = le(t.favIconUrl), r = le(t.url);
  if (r.isSome() && r.value.protocol === "chrome") return;
  let o = resolveDefaultAction(r), { download_directory: a } = U(), { default_: u, rules: s } = U().smartnaming.compiled, l = await rp(u, s, r, a, e3), d = await Nf(e3, l.force_doc_title), c = {
    incognito: t.incognito,
    tab_id: e3,
    title: d.title,
    thumbnail_url: d.thumbnail,
    favicon_url: n,
    url: r,
    default_action: o,
    smartnaming_rule: l
  };
  De((f) => {
    let m = f.discovered.get(e3);
    m && (m.meta = q(c));
  });
}
function shouldAcceptDiscoveredMedia(e3, t) {
  if (e3.initiator.isSome() && _o(U(), e3.initiator.value)) return false;
  let i = e3.type != "http_playlist" && e3.type != "m3u8", n = e3.initiator.isSome() && Xs(U(), e3.initiator.value);
  if (!i && !n && ([...t.values()].some(
    (o) => o.type === "m3u8_playlist" || o.type === "mpd_playlist" || o.type === "youtube_format"
  ) && e3.initiator.isSome() && op(U(), e3.initiator.value) || [...t.values()].filter((o) => o.type == e3.type).length > 10))
    return false;
  if (e3.type == "m3u8")
    for (let r of [...t.values()].filter((o) => o.type == "m3u8_playlist"))
      for (let o of r.playlist) {
        let a = o.av;
        if (a.audio && e3.url.href == a.audio.href || a.video && e3.url.href == a.video.href)
          return false;
      }
  return true;
}
function primaryMediaUrlLegacy(e3) {
  try {
    return e3.type == "http_playlist" ? e3.playlist?.[0]?.av?.video : e3.type == "m3u8" ? e3.url : null;
  } catch {
    return null;
  }
}
function mediaTokensLegacy(e3) {
  let t = primaryMediaUrlLegacy(e3);
  if (!t) return /* @__PURE__ */ new Set();
  let i;
  try {
    i = decodeURIComponent(t.pathname).toLowerCase();
  } catch {
    i = t.pathname.toLowerCase();
  }
  return new Set(
    i.split(/[^a-z0-9]+/).filter(
      (e4) => e4.length >= 8 && !/^(playlist|manifest|master|video|index)$/.test(e4)
    )
  );
}
function isSameGenericVideoLegacy(e3, t) {
  if (!e3.initiator?.isSome?.() || !t.initiator?.isSome?.() || e3.initiator.value.href != t.initiator.value.href)
    return false;
  if (!((e3.type == "http_playlist" || e3.type == "m3u8") && (t.type == "http_playlist" || t.type == "m3u8")))
    return false;
  if (e3.type == "http_playlist" && t.type == "http_playlist" && e3.extension != t.extension)
    return false;
  if (e3.type == "m3u8" && t.type == "m3u8" && e3.demuxer != t.demuxer) return false;
  if (Math.abs(
    (e3.discovery_timestamp_ms || 0) - (t.discovery_timestamp_ms || 0)
  ) > 6e4)
    return false;
  let i = primaryMediaUrlLegacy(e3), n = primaryMediaUrlLegacy(t);
  if (!i || !n) return false;
  if (i.pathname == n.pathname) return true;
  let r = mediaTokensLegacy(e3), o = mediaTokensLegacy(t);
  for (let a3 of r) if (o.has(a3)) return true;
  let a = e3.title?.isSome?.() && t.title?.isSome?.() && e3.title.value == t.title.value, u = typeof e3.duration == "number" && typeof t.duration == "number" && Math.abs(e3.duration - t.duration) < 1;
  return !!(a && u);
}
function mediaQualityScoreLegacy(e3) {
  let t = primaryMediaUrlLegacy(e3), i = 0;
  if (t) {
    let n = t.href.match(/(?:2160|1440|1080|720|480|360)p?/gi);
    n && (i = Math.max(...n.map((e4) => parseInt(e4) || 0)) * 1e12);
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
        800: 2160
      };
      i = Math.max(i, (a[o[1]] || 0) * 1e12);
    }
  }
  if (e3.type == "http_playlist") {
    let t3 = e3.playlist?.[0];
    if (t3?.quality?.size?.isSome?.())
      i += Number(t3.quality.size.value.height || 0) * 1e12;
    if (t3?.quality?.bitrate?.isSome?.())
      i += Number(t3.quality.bitrate.value || 0) * 1e4;
    if (t3?.size?.isSome?.()) i += Number(t3.size.value || 0);
  }
  return i;
}
function upsertDiscoveredMediaLegacy(e3, t) {
  if (e3.type == "http_playlist" || e3.type == "m3u8") {
    for (let [i, n] of [...t.entries()])
      if (isSameGenericVideoLegacy(e3, n)) {
        let r = [...fe().downloading.values()].some((e4) => e4.media.hash == n.hash) || fe().transient_history.some((e4) => e4.media_hash == n.hash);
        if (r || mediaQualityScoreLegacy(n) >= mediaQualityScoreLegacy(e3))
          return;
        t.delete(i);
      }
  }
  if (t.set(e3.hash, e3), e3.type == "m3u8_playlist") {
    let i = /* @__PURE__ */ new Set();
    for (let { av: n } of e3.playlist)
      n.audio && i.add(n.audio.href), n.video && i.add(n.video.href);
    for (let [n, r] of t.entries())
      r.type == "m3u8" && i.has(r.url.href) && t.delete(n);
  }
  if (e3.type == "mpd_playlist")
    for (let [i, n] of t.entries()) {
      if (n.type != "http_playlist") continue;
      let r = n.initiator.isSome() && e3.initiator.isSome() && n.initiator.value.href == e3.initiator.value.href, o = n.playlist[0].size, a = o.isSome() && o.value > 2e7;
      r && !a && t.delete(i);
    }
}
function removeDiscoveredMedia(e3, t) {
  De((i) => {
    i.discovered.get(t).media.delete(e3);
  });
}
function pruneDownloadHistory(e3) {
  let t = Date.now(), i = e3 * 24 * 60 * 60 * 1e3, n = [...U().downloaded.entries()], r = n.filter(([, a]) => t - a.download_timestamp < i), o = n.filter(([, a]) => t - a.download_timestamp >= i).map(([, a]) => a);
  _e((a) => {
    a.downloaded = new Map(
      r.sort(([u, s], [l, d]) => d.download_timestamp - s.download_timestamp)
    );
  });
  for (let a of o)
    H.default.downloads.erase({
      id: a.browser_download_id
    }).catch(() => {
    });
}
function removeMatchingDownloads(e3, t) {
  for (let [i, n] of e3)
    "browser_download_id" in t && n.browser_download_id == t.browser_download_id && e3.delete(i), "media_hash" in t && n.media_hash == t.media_hash && e3.delete(i);
}
async function handleDetectedMedia(e3, t) {
  let i = fe().discovered.get(t), n = await Zy;
  !(!!U().jwt || vi || n) && "subtitles" in e3 && !e3.is_youtube && (e3.subtitles = A), i ? i.media.has(e3.hash) || shouldAcceptDiscoveredMedia(e3, i.media) && De((o) => {
    let a = o.discovered.get(t);
    upsertDiscoveredMediaLegacy(e3, a.media);
  }) : shouldAcceptDiscoveredMedia(e3, /* @__PURE__ */ new Map()) && De(
    (o) => o.discovered.set(t, {
      meta: A,
      media: e3.initiator.isSome() && Xs(U(), e3.initiator.value) ? new bs(30, [[e3.hash, e3]]) : /* @__PURE__ */ new Map([[e3.hash, e3]])
    })
  ), createTabMetadata(t);
}
{
  {
    let e3 = ["xmlhttprequest", "media", "other"], t = ["<all_urls>"];
    H.default.webRequest.onSendHeaders.addListener(() => {
    }, {
      types: e3,
      urls: t
    }), H.default.webRequest.onResponseStarted.addListener(() => {
    }, {
      types: e3,
      urls: t
    }), H.default.action.onClicked.addListener(() => {
    }), H.default.windows.onFocusChanged.addListener(() => {
    }), H.default.tabs.onRemoved.addListener(() => {
    }), H.default.tabs.onUpdated.addListener(() => {
    }), H.default.tabs.onActivated.addListener(() => {
    }), H.default.runtime.onMessage.addListener(() => {
    }), H.default.downloads.onChanged.addListener(() => {
    }), H.default.downloads.onErased.addListener(() => {
    }), H.default.webNavigation.onBeforeNavigate.addListener(() => {
    }), H.default.webNavigation.onDOMContentLoaded.addListener(() => {
    });
  }
  H.default.runtime.onInstalled.addListener((e3) => {
    let t = e3.reason == "install", i = e3.reason == "update", n = H.default.runtime.getManifest(), r = j_(n.version);
    if (r.isNone()) {
      console.error("Can't parse version");
      return;
    }
    if (t)
      H.default.storage.local.set({
        first_version_installed: r.value
      });
  });
}
var Hy;
async function handleDownloadRequest(e3, t, i) {
  let n = Te(e3.data.download_args), r = Te(e3.data.media), o = Te(e3.data.meta);
  {
    for (let C of fe().downloading.values()) if (C.media.hash == r.hash) return;
    for (let C of fe().transient_history) if (C.media_hash == r.hash) return;
  }
  let a = 7200 * 1e3, u = Date.now(), s = r.type == "http_playlist", l = r.is_youtube, d = U().lsd, c = u - d, f = await uy(), m = wb(U(), "ALLOW_BRAVE_YT_DL") && f;
  if (false) {
  }
  let h = await q_(), _ = c > a;
  if (false) {
    if (qe && !s) {
      ke(
        (C) => C.advertize_premium = {
          advertize: false,
          blocked: false,
          snooze: true
        }
      ), clearTimeout(Hy), Hy = setTimeout(() => {
        ke((C) => {
          C.advertize_premium.advertize && C.advertize_premium.blocked && C.advertize_premium.snooze && (C.advertize_premium.snooze = false);
        });
      }, 2e3);
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
      details: ""
    };
    X_(`notification_${crypto.randomUUID()}`, C);
    return;
  }
  let x = Cb(o.tab_id, r);
  ke((C) => {
    C.downloading.set(n.download_id, {
      bitrate: 0,
      status: "queuing",
      download_args: n,
      media: r,
      meta: o
    });
  });
  let E, w = () => clearInterval(E), y = () => {
    let C = Date.now(), B = 0;
    E = setInterval(() => {
      De((P) => {
        let G = P.downloading.get(n.download_id);
        if (G.status == "downloading") {
          let Y = Date.now(), ue = G.fetched_bytes_count - B, Ae = Y - C;
          C = Y, G.bitrate = 1e3 * ue / Ae, B = G.fetched_bytes_count;
        }
      });
    }, 2e3);
  }, v = false, z = () => {
    if (!v && (v = true, !Ue || l)) {
      let C = u, B = U().lsd;
      C > B && (B < y_ + 2 ? _e((P) => P.lsd++) : _e((P) => P.lsd = C));
    }
  }, $ = Jt((C) => {
    if (C.name == "download_progress" && C.data.download_id == n.download_id) {
      E || y();
      let B = C.data.progress;
      B.status == "finalizing" ? ke((P) => {
        let G = P.downloading.get(n.download_id);
        G.status = B.status;
      }) : De((P) => {
        let G = P.downloading.get(n.download_id);
        G.status != "finalizing" && (G.status = B.status, G.status == "downloading" && B.status == "downloading" && (G.percent = B.percent, G.fetched_bytes_count = B.fetched_bytes_count, G.output_duration_s = B.output_duration_s)), !s && G.status == "downloading" && G.fetched_bytes_count > 0 && z();
      });
    }
  }), j = await executeDownloadAndSave(n, i, o.incognito);
  $(), w();
  let K = await x;
  ke((C) => {
    C.downloading.delete(n.download_id);
    let B = {
      max_concurrent_download: U().max_concurrent_downloads,
      strategy: n.strategy,
      download_args_url: n.url.href,
      jsf: n.will_use_jsfetch
    };
    if (j.isOk() && !j.value.aborted_no_partial) {
      qe && !n.save_as && j.value.browser_downloads_duration_ms && j.value.browser_downloads_duration_ms > 5e3 && (C.suspecting_saveas = true), s || z();
      let { path: P, browser_download_id: G, ending_reason: Y } = j.value;
      U().show_desktop_notifications && (!o.incognito || U().show_desktop_notifications_private) && H.default.notifications.create(n.download_id, {
        type: "basic",
        title: "Download complete",
        iconUrl: H.default.runtime.getURL("/bitmaps/logo-128-color.png"),
        message: P
      });
      let ue = `ded_${crypto.randomUUID()}`, Ae = {
        has_drm: K,
        downloaded_id: ue,
        path: P,
        browser_download_id: G,
        media_hash: r.hash,
        download_timestamp: Date.now(),
        origin_url: o.url.isSome() ? o.url.value.href : null,
        origin_favicon_url: o.favicon_url.isSome() ? o.favicon_url.value.href : null,
        subdir: n.save_as ? void 0 : n.subdir
      };
      U().history_days > 0 && _e((Je) => {
        removeMatchingDownloads(Je.downloaded, {
          media_hash: r.hash
        }), Je.downloaded.set(ue, Ae);
      });
      let Z = 99;
      if (C.transient_history.push(Ae), C.transient_history.length > Z && C.transient_history.splice(0, C.transient_history.length - Z), Y != "end_of_file" && !Y.user_abort)
        if (l && Y.e4XX_5XX_failure && Y.status == 403)
          C.notifications.set("notification_youtube_403", {
            type: "youtube_403",
            timestamp: u,
            url: o.url.unwrapOr(null)
          });
        else {
          B.ending_reason = Ws(Y);
          let Je = {
            type: "download_interrupted",
            timestamp: u,
            url: o.url.unwrapOr(null),
            favicon: o.favicon_url.unwrapOr(null),
            media_type: r.type,
            details: JSON.stringify(B)
          };
          C.notifications.set(`notification_${crypto.randomUUID()}`, Je);
        }
      _e((Je) => Je.successful_downloads_count++);
    } else if (j.isOk()) {
      let { ending_reason: P } = j.value;
      if (P != "end_of_file" && !P.user_abort)
        if (l && P.e4XX_5XX_failure && P.status == 403)
          C.notifications.set("notification_youtube_403", {
            type: "youtube_403",
            timestamp: u,
            url: o.url.unwrapOr(null)
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
            details: JSON.stringify(B)
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
        details: JSON.stringify(B)
      };
      j.error.interrupt_reason && (P.interrupt_reason = j.error.interrupt_reason), C.notifications.set(`notification_${crypto.randomUUID()}`, P);
    }
  });
}
var startServiceWorker = async () => {
  console.log("service::start - ", /* @__PURE__ */ new Date());
  try {
    let i = await navigator.storage.getDirectory(), n = await Array.fromAsync(i.keys());
    Promise.allSettled(
      n.map((r) => (console.warn(`main::purging ${r}`), i.removeEntry(r)))
    );
  } catch (i) {
    console.error("main::purging failed", i);
  }
  let e3 = await Uy();
  await Tb(() => {
    updateToolbarIndicator(fe(), U()), Ly(fe(), U(), e3);
  }), await Pb(() => {
    updatePremiumBannerState(), updateToolbarIndicator(fe(), U()), Fy(U());
  }), vb(), ke((i) => {
    i.downloading.size > 0 && console.warn("Downloadings during startup."), i.downloading.clear();
  });
  let t;
  {
    let i = U().jwt;
    i != null ? t = jy(i.raw) : vi && (t = Promise.resolve(true));
  }
  Nb();
  {
    let i = await Rf();
    De((n) => n.current_win_tab = i), Cf((n) => {
      ke((r) => r.current_win_tab = n);
    });
  }
  {
    {
      let i = (n) => {
        let r = Oe(n.tabId);
        n.frameId == 0 && r.isSome() && fe().discovered.has(r.value) && De((o) => o.discovered.delete(r.value));
      };
      H.default.webNavigation.onBeforeNavigate.addListener(i), H.default.tabs.onRemoved.addListener(
        (n) => i({
          tabId: n,
          frameId: 0
        })
      );
    }
    H.default.tabs.onUpdated.addListener((i) => {
      let n = Oe(i);
      n.isSome() && createTabMetadata(n.value);
    }), H.default.webNavigation.onDOMContentLoaded.addListener((i) => {
      if (i.frameId == 0) {
        let n = Oe(i.tabId);
        n.isSome() && createTabMetadata(n.value);
      }
    });
  }
  H.default.downloads.onErased.addListener((i) => {
    _e((n) => {
      removeMatchingDownloads(n.downloaded, {
        browser_download_id: i
      });
    }), De((n) => {
      n.transient_history = n.transient_history.filter(
        (r) => r.browser_download_id != i
      );
    });
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
        let d = await t, c = a.data.key, f = await My(c);
        t = Promise.resolve(d || f.isOk()), d || f.isOk() ? (sendToInjected(l, {
          name: "on_activate_addon_success",
          data: null
        }), ke((m) => {
          m.notifications.delete("notification_limit");
        })) : sendToInjected(l, {
          name: "on_activate_addon_failure",
          data: f.error
        });
      } else if (a.name == "qjs") {
        if (!i)
          try {
            i = await M_(On);
          } catch (f) {
            console.error("qjs load failed", f), sendToInjected(s.value, {
              name: "qjs_result",
              data: JSON.stringify({
                error: "qjs load failed",
                uid: a.data.uid
              })
            });
            return;
          }
        let d = i.newContext(), c = d.evalCode(a.data.code);
        if (c.error) {
          let f = d.dump(c.error), m = `${f.name}: ${f.message}`;
          c.error.dispose(), sendToInjected(s.value, {
            name: "qjs_result",
            data: JSON.stringify({
              error: m,
              uid: a.data.uid
            })
          });
        } else {
          let f = d.dump(c.value);
          c.value.dispose();
          try {
            let m = JSON.stringify({
              success: f,
              uid: a.data.uid
            });
            sendToInjected(s.value, {
              name: "qjs_result",
              data: m
            });
          } catch {
            sendToInjected(s.value, {
              name: "qjs_result",
              data: JSON.stringify({
                error: "not json",
                uid: a.data.uid
              })
            });
          }
        }
        d.dispose();
      } else if (a.name == "do_fetch_from_service") {
        let d = await vt([a.data.url], new Headers(a.data.fetch_headers)), c = await qr(a.data.url, {
          method: a.data.method,
          headers: a.data.fetch_headers,
          body: new URLSearchParams(a.data.body_params)
        });
        if (wt(d), c.isOk()) {
          let f = await c.value.json();
          sendToInjected(s.value, {
            name: "on_fetch_from_service",
            data: {
              json: f,
              uid: a.data.uid
            }
          });
        } else
          console.warn(`Failed to retrieve json info for url ${a.data.url}`), sendToInjected(s.value, {
            name: "on_fetch_from_service_failed",
            data: {
              uid: a.data.uid
            }
          });
      } else a.name == "remove_media" && removeDiscoveredMedia(a.data.hash, l);
    });
    let n = U().max_concurrent_downloads, r = U().youtube_throttle ? 1 : n, o = new DownloadQueueLegacy(n, r, 6e3);
    mp(async (a) => {
      if (a.name == "do_download") await handleDownloadRequest(a, await t, o);
      else if (a.name == "on_media") {
        let { tab_id: u, media: s } = a.data;
        if (u.isSome()) handleDetectedMedia(s, u.value);
        else if (s.initiator.isSome()) {
          let l = s.initiator.value, d = await H.default.tabs.query({
            url: l.href
          });
          d.length == 0 && (d = await H.default.tabs.query({
            url: l.origin + "/*"
          })), d.length == 0 && console.warn("Orphan media");
          for (let c of d) {
            let f = Oe(c.id);
            f.isNone() || handleDetectedMedia(s, f.value);
          }
        }
      }
    }), onContentMessage(async (a, u) => {
      if (a.name == "abort_download")
        ke((s) => {
          let l = s.downloading.get(a.data.download_id);
          l.status = "finalizing";
        }), o.cancelPendingTask(a.data.download_id) || abortWorkerDownload(a.data.download_id);
      else if (a.name == "rm_notification")
        ke((s) => s.notifications.delete(a.data.notification_id)), me((s) => s.remote_notifications.delete(a.data.notification_id));
      else if (a.name == "rm_notifications_all")
        ke((s) => s.notifications.clear()), me((s) => s.remote_notifications.clear());
      else if (a.name == "set_default_action")
        _e((s) => {
          let l = a.data.hostname, d = a.data.action;
          d == "download_audio" || d == "download" ? s.default_action_per_hostname.set(l, d) : (s.default_action_per_hostname.delete(l), s.default_action = d);
        }), De((s) => {
          for (let l of s.discovered.values())
            if (l.meta.isSome()) {
              let d = l.meta.value;
              d = {
                ...d,
                default_action: resolveDefaultAction(d.url)
              }, l.meta = q(d);
            }
        });
      else if (a.name == "dismiss_banner")
        U().remote_behaviours.advertize_premium || ke(
          (s) => s.advertize_premium = {
            advertize: false
          }
        );
      else if (a.name == "dismiss_media")
        ke((s) => {
          let l = s.discovered.get(a.data.tab_id);
          l && l.media.delete(a.data.media_hash);
        });
      else if (a.name == "rm_download") {
        try {
          await H.default.downloads.removeFile(a.data.browser_download_id);
        } catch {
        }
        try {
          await H.default.downloads.erase({
            id: a.data.browser_download_id
          });
        } catch {
        }
        _e((s) => {
          removeMatchingDownloads(s.downloaded, {
            browser_download_id: a.data.browser_download_id
          });
        }), De((s) => {
          s.transient_history = s.transient_history.filter(
            (l) => l.browser_download_id != a.data.browser_download_id
          );
        });
      } else if (a.name == "retry_download") {
        let s = `media_hash_${he(crypto.randomUUID())}`;
        ke((l) => {
          let d = l.discovered.get(a.data.tab_id)?.media.get(a.data.media_hash);
          d && l.discovered.get(a.data.tab_id)?.media.set(s, {
            ...d,
            cache: "reload",
            hash: s
          });
        });
      } else if (a.name == "update_media_preferred_entry")
        De((s) => {
          if (s.current_win_tab.tab_id.isSome()) {
            let l = s.discovered.get(s.current_win_tab.tab_id.value)?.media.get(a.data.media_hash);
            l && "playlist" in l && (l.preferred_entry = q(a.data.playlist_index));
          }
        });
      else if (a.name == "do_download") handleDownloadRequest(a, await t, o);
      else if (a.name == "clear-history") pruneDownloadHistory(0);
      else if (a.name == "mut-settings") {
        if ("preferred_audio_strategy" in a.data) {
          let s = a.data.preferred_audio_strategy;
          U().preferred_audio_strategy != s && me((l) => l.preferred_audio_strategy = s);
        } else if ("preferred_audio_languages" in a.data) {
          let s = new Set(a.data.preferred_audio_languages);
          s.size > 0 && !Cs(s, U().preferred_audio_languages) && me((l) => l.preferred_audio_languages = s);
        } else if ("hide_nomedia_box" in a.data) {
          let s = a.data.hide_nomedia_box;
          U().hide_nomedia_box != s && me((l) => l.hide_nomedia_box = s);
        } else if ("max_concurrent_downloads" in a.data) {
          let s = a.data.max_concurrent_downloads;
          U().max_concurrent_downloads != s && (o.setTotalCapacity(s), U().youtube_throttle ? o.setYoutubeCapacity(1) : o.setYoutubeCapacity(s), me((l) => l.max_concurrent_downloads = s));
        } else if ("show_desktop_notifications" in a.data) {
          let s = a.data.show_desktop_notifications;
          U().show_desktop_notifications != s && me((l) => l.show_desktop_notifications = s);
        } else if ("preferred_quality" in a.data) {
          let s = a.data.preferred_quality;
          U().preferred_quality != s && me((l) => l.preferred_quality = s);
        } else if ("always_download_as_mkv" in a.data)
          a.data.always_download_as_mkv ? me((l) => l.preferred_av_muxer = "mkv") : me((l) => l.preferred_av_muxer = "mp4");
        else if ("preview_mode" in a.data) {
          let s = a.data.preview_mode;
          U().preview_mode != s && me((l) => l.preview_mode = s);
        } else if ("show_desktop_notifications_private" in a.data) {
          let s = a.data.show_desktop_notifications_private;
          U().show_desktop_notifications_private != s && me((l) => l.show_desktop_notifications_private = s);
        } else if ("show_transient_history" in a.data) {
          let s = a.data.show_transient_history;
          U().show_transient_history != s && me((l) => l.show_transient_history = s), pruneDownloadHistory(U().history_days);
        } else if ("history_days" in a.data) {
          let s = a.data.history_days;
          U().history_days != s && me((l) => l.history_days = s), pruneDownloadHistory(U().history_days);
        } else if ("ui_theme" in a.data) {
          let s = a.data.ui_theme;
          U().ui_theme != s && me((l) => l.ui_theme = s);
        } else if ("popup_size" in a.data) {
          let s = a.data.popup_size;
          U().popup_size != s && me((l) => l.popup_size = s);
        } else if ("font_size" in a.data) {
          let s = a.data.font_size;
          U().font_size != s && me((l) => l.font_size = s);
        } else if ("youtube_throttle" in a.data) {
          let s = a.data.youtube_throttle;
          U().youtube_throttle != s && (s ? o.setYoutubeCapacity(1) : o.setYoutubeCapacity(U().max_concurrent_downloads), me((l) => l.youtube_throttle = s));
        } else if ("use_context_menu" in a.data) {
          let s = a.data.use_context_menu;
          U().use_context_menu != s && me((l) => l.use_context_menu = s);
        } else if ("download_directory" in a.data) {
          let s = a.data.download_directory;
          U().download_directory != s && me((d) => d.download_directory = s);
          let l = fe().current_win_tab.tab_id;
          l.isSome() && createTabMetadata(l.value);
        } else if ("preferred_discovered_order" in a.data) {
          let s = a.data.preferred_discovered_order;
          U().preferred_discovered_media_order != s && me((l) => l.preferred_discovered_media_order = s);
        } else if ("subtitles_language" in a.data) {
          let s = new Set(a.data.subtitles_language);
          s.size > 0 && !Cs(s, U().subtitle_languages) && me((l) => l.subtitle_languages = s);
        } else a.data;
      } else if (a.name == "show-review-page")
        _e((s) => s.dont_ask_for_user_review = true), ke(
          (s) => s.notifications.delete("notification_one_hundred_downloads")
        );
      else if (a.name != "request_preview")
        if (a.name == "rm-custom-strings")
          _e((s) => {
            s.custom_strings.web.clear(), s.custom_strings.addon.clear();
          });
        else if (a.name == "update-custom-web-string")
          _e((s) => {
            s.custom_strings.web.set(a.data.key, a.data.value);
          });
        else if (a.name == "update-custom-addon-string")
          _e((s) => {
            s.custom_strings.addon.set(a.data.key, a.data.value);
          });
        else if (a.name == "reset-suspicious-saveas")
          De((s) => {
            s.suspecting_saveas = false;
          });
        else if (a.name == "update-smartnaming") {
          let s = a.data;
          _e((d) => {
            if (d.smartnaming.source = s, !s)
              d.smartnaming.compiled = Ei();
            else {
              let c = ip(s);
              c.isOk() ? d.smartnaming.compiled = c.value : d.smartnaming.compiled = Ei();
            }
          });
          let l = fe().current_win_tab.tab_id;
          l.isSome() && createTabMetadata(l.value);
        } else
          a.name == "redock" || a.name == "clear-completed" && ke((s) => {
            for (let l of s.transient_history)
              for (let d of s.discovered.values())
                d.media.delete(l.media_hash);
            s.transient_history = [];
          });
    });
  }
  registerWebRequestDetection(U), registerPreviewHandler(fe, U), pruneDownloadHistory(U().history_days), H.default.commands.onCommand.addListener((i) => {
    i == "default-action" && Mb(fe(), U());
  }), console.log("service::end");
};
startServiceWorker();
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
//# sourceMappingURL=main.js.map
