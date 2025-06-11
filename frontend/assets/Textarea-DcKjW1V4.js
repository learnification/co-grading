import {
  r as c,
  d as C,
  K as Yn,
  j as h,
  p as _e,
  u as te,
  P as q,
  g as Z,
  v as qr,
  W as pe,
  f as Kn,
  s as Qt,
  S as Xn,
  Z as Zr,
  o as Ft,
  q as Ye,
  e as ne,
  Q as Qr,
  I as Jr,
  J as Jt,
  H as ea,
  m as ta,
  G as na,
  n as oa,
  z as ra,
  _ as aa,
  a0 as sa,
  x as ia,
} from "./createLucideIcon-Ck8SqCQ8.js";
var Sn = ["light", "dark"],
  la = "(prefers-color-scheme: dark)",
  ca = c.createContext(void 0),
  da = { setTheme: (e) => {}, themes: [] },
  ua = () => {
    var e;
    return (e = c.useContext(ca)) != null ? e : da;
  };
c.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: o,
    enableColorScheme: r,
    defaultTheme: a,
    value: s,
    attrs: i,
    nonce: d,
  }) => {
    let u = a === "system",
      p =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${i
              .map((v) => `'${v}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      m = r
        ? Sn.includes(a) && a
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      g = (v, f = !1, y = !0) => {
        let b = s ? s[v] : v,
          w = f ? v + "|| ''" : `'${b}'`,
          x = "";
        return (
          r &&
            y &&
            !f &&
            Sn.includes(v) &&
            (x += `d.style.colorScheme = '${v}';`),
          n === "class"
            ? f || b
              ? (x += `c.add(${w})`)
              : (x += "null")
            : b && (x += `d[s](n,${w})`),
          x
        );
      },
      l = e
        ? `!function(){${p}${g(e)}}()`
        : o
        ? `!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${la}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g(
            "dark"
          )}}else{${g("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${g(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + g(a, !1, !1) + "}"
          }${m}}catch(e){}}()`
        : `!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${g(s ? "x[e]" : "e", !0)}}else{${g(
            a,
            !1,
            !1
          )};}${m}}catch(t){}}();`;
    return c.createElement("script", {
      nonce: d,
      dangerouslySetInnerHTML: { __html: l },
    });
  }
);
var fa = (e) => {
    switch (e) {
      case "success":
        return ha;
      case "info":
        return va;
      case "warning":
        return ga;
      case "error":
        return ya;
      default:
        return null;
    }
  },
  pa = Array(12).fill(0),
  ma = ({ visible: e, className: t }) =>
    C.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      C.createElement(
        "div",
        { className: "sonner-spinner" },
        pa.map((n, o) =>
          C.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${o}`,
          })
        )
      )
    ),
  ha = C.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    C.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  ga = C.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    C.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  va = C.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    C.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  ya = C.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    C.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  wa = C.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    C.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    C.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  xa = () => {
    let [e, t] = C.useState(document.hidden);
    return (
      C.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Wt = 1,
  ba = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...o } = e,
            r =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Wt++,
            a = this.toasts.find((i) => i.id === r),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            a
              ? (this.toasts = this.toasts.map((i) =>
                  i.id === r
                    ? (this.publish({ ...i, ...e, id: r, title: n }),
                      { ...i, ...e, id: r, dismissible: s, title: n })
                    : i
                ))
              : this.addToast({ title: n, ...o, dismissible: s, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let o = e instanceof Promise ? e : e(),
            r = n !== void 0,
            a,
            s = o
              .then(async (d) => {
                if (((a = ["resolve", d]), C.isValidElement(d)))
                  (r = !1), this.create({ id: n, type: "default", message: d });
                else if (Ea(d) && !d.ok) {
                  r = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${d.status}`)
                        : t.error,
                    p =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${d.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: p,
                  });
                } else if (t.success !== void 0) {
                  r = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(d)
                        : t.success,
                    p =
                      typeof t.description == "function"
                        ? await t.description(d)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: p,
                  });
                }
              })
              .catch(async (d) => {
                if (((a = ["reject", d]), t.error !== void 0)) {
                  r = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(d) : t.error,
                    p =
                      typeof t.description == "function"
                        ? await t.description(d)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: p,
                  });
                }
              })
              .finally(() => {
                var d;
                r && (this.dismiss(n), (n = void 0)),
                  (d = t.finally) == null || d.call(t);
              }),
            i = () =>
              new Promise((d, u) =>
                s.then(() => (a[0] === "reject" ? u(a[1]) : d(a[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: i }
            : Object.assign(n, { unwrap: i });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Wt++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  se = new ba(),
  Sa = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Wt++;
    return se.addToast({ title: e, ...t, id: n }), n;
  },
  Ea = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  Ca = Sa,
  Ra = () => se.toasts,
  Gl = Object.assign(
    Ca,
    {
      success: se.success,
      info: se.info,
      warning: se.warning,
      error: se.error,
      custom: se.custom,
      message: se.message,
      promise: se.promise,
      dismiss: se.dismiss,
      loading: se.loading,
    },
    { getHistory: Ra }
  );
function Na(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    o = document.createElement("style");
  (o.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(o, n.firstChild)
      : n.appendChild(o),
    o.styleSheet
      ? (o.styleSheet.cssText = e)
      : o.appendChild(document.createTextNode(e));
}
Na(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function st(e) {
  return e.label !== void 0;
}
var Pa = 3,
  Ta = "32px",
  En = 4e3,
  Aa = 356,
  Oa = 14,
  Da = 20,
  Ia = 200;
function Ma(...e) {
  return e.filter(Boolean).join(" ");
}
var ka = (e) => {
  var t, n, o, r, a, s, i, d, u, p, m;
  let {
      invert: g,
      toast: l,
      unstyled: v,
      interacting: f,
      setHeights: y,
      visibleToasts: b,
      heights: w,
      index: x,
      toasts: S,
      expanded: E,
      removeToast: T,
      defaultRichColors: R,
      closeButton: O,
      style: _,
      cancelButtonStyle: $,
      actionButtonStyle: z,
      className: L = "",
      descriptionClassName: F = "",
      duration: k,
      position: G,
      gap: D,
      loadingIcon: M,
      expandByDefault: A,
      classNames: P,
      icons: K,
      closeButtonAriaLabel: ae = "Close toast",
      pauseWhenPageIsHidden: W,
      cn: j,
    } = e,
    [H, ee] = C.useState(!1),
    [re, N] = C.useState(!1),
    [Y, J] = C.useState(!1),
    [V, B] = C.useState(!1),
    [U, oe] = C.useState(!1),
    [ce, Se] = C.useState(0),
    [Me, Re] = C.useState(0),
    Fe = C.useRef(l.duration || k || En),
    ke = C.useRef(null),
    je = C.useRef(null),
    Fr = x === 0,
    Wr = x + 1 <= b,
    de = l.type,
    We = l.dismissible !== !1,
    Hr = l.className || "",
    Vr = l.descriptionClassName || "",
    rt = C.useMemo(
      () => w.findIndex((I) => I.toastId === l.id) || 0,
      [w, l.id]
    ),
    zr = C.useMemo(() => {
      var I;
      return (I = l.closeButton) != null ? I : O;
    }, [l.closeButton, O]);
  C.useMemo(() => l.duration || k || En, [l.duration, k]);
  let Tt = C.useRef(0),
    He = C.useRef(0),
    wn = C.useRef(0),
    at = C.useRef(null),
    [Ur, Yr] = G.split("-"),
    xn = C.useMemo(
      () => w.reduce((I, X, Q) => (Q >= rt ? I : I + X.height), 0),
      [w, rt]
    ),
    bn = xa(),
    Kr = l.invert || g,
    At = de === "loading";
  (He.current = C.useMemo(() => rt * D + xn, [rt, xn])),
    C.useEffect(() => {
      ee(!0);
    }, []),
    C.useEffect(() => {
      let I = je.current;
      if (I) {
        let X = I.getBoundingClientRect().height;
        return (
          Re(X),
          y((Q) => [{ toastId: l.id, height: X, position: l.position }, ...Q]),
          () => y((Q) => Q.filter((ue) => ue.toastId !== l.id))
        );
      }
    }, [y, l.id]),
    C.useLayoutEffect(() => {
      if (!H) return;
      let I = je.current,
        X = I.style.height;
      I.style.height = "auto";
      let Q = I.getBoundingClientRect().height;
      (I.style.height = X),
        Re(Q),
        y((ue) =>
          ue.find((ve) => ve.toastId === l.id)
            ? ue.map((ve) => (ve.toastId === l.id ? { ...ve, height: Q } : ve))
            : [{ toastId: l.id, height: Q, position: l.position }, ...ue]
        );
    }, [H, l.title, l.description, y, l.id]);
  let Ne = C.useCallback(() => {
    N(!0),
      Se(He.current),
      y((I) => I.filter((X) => X.toastId !== l.id)),
      setTimeout(() => {
        T(l);
      }, Ia);
  }, [l, T, y, He]);
  C.useEffect(() => {
    if (
      (l.promise && de === "loading") ||
      l.duration === 1 / 0 ||
      l.type === "loading"
    )
      return;
    let I;
    return (
      E || f || (W && bn)
        ? (() => {
            if (wn.current < Tt.current) {
              let X = new Date().getTime() - Tt.current;
              Fe.current = Fe.current - X;
            }
            wn.current = new Date().getTime();
          })()
        : Fe.current !== 1 / 0 &&
          ((Tt.current = new Date().getTime()),
          (I = setTimeout(() => {
            var X;
            (X = l.onAutoClose) == null || X.call(l, l), Ne();
          }, Fe.current))),
      () => clearTimeout(I)
    );
  }, [E, f, l, de, W, bn, Ne]),
    C.useEffect(() => {
      l.delete && Ne();
    }, [Ne, l.delete]);
  function Xr() {
    var I, X, Q;
    return K != null && K.loading
      ? C.createElement(
          "div",
          {
            className: j(
              P == null ? void 0 : P.loader,
              (I = l == null ? void 0 : l.classNames) == null
                ? void 0
                : I.loader,
              "sonner-loader"
            ),
            "data-visible": de === "loading",
          },
          K.loading
        )
      : M
      ? C.createElement(
          "div",
          {
            className: j(
              P == null ? void 0 : P.loader,
              (X = l == null ? void 0 : l.classNames) == null
                ? void 0
                : X.loader,
              "sonner-loader"
            ),
            "data-visible": de === "loading",
          },
          M
        )
      : C.createElement(ma, {
          className: j(
            P == null ? void 0 : P.loader,
            (Q = l == null ? void 0 : l.classNames) == null ? void 0 : Q.loader
          ),
          visible: de === "loading",
        });
  }
  return C.createElement(
    "li",
    {
      tabIndex: 0,
      ref: je,
      className: j(
        L,
        Hr,
        P == null ? void 0 : P.toast,
        (t = l == null ? void 0 : l.classNames) == null ? void 0 : t.toast,
        P == null ? void 0 : P.default,
        P == null ? void 0 : P[de],
        (n = l == null ? void 0 : l.classNames) == null ? void 0 : n[de]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (o = l.richColors) != null ? o : R,
      "data-styled": !(l.jsx || l.unstyled || v),
      "data-mounted": H,
      "data-promise": !!l.promise,
      "data-swiped": U,
      "data-removed": re,
      "data-visible": Wr,
      "data-y-position": Ur,
      "data-x-position": Yr,
      "data-index": x,
      "data-front": Fr,
      "data-swiping": Y,
      "data-dismissible": We,
      "data-type": de,
      "data-invert": Kr,
      "data-swipe-out": V,
      "data-expanded": !!(E || (A && H)),
      style: {
        "--index": x,
        "--toasts-before": x,
        "--z-index": S.length - x,
        "--offset": `${re ? ce : He.current}px`,
        "--initial-height": A ? "auto" : `${Me}px`,
        ..._,
        ...l.style,
      },
      onPointerDown: (I) => {
        At ||
          !We ||
          ((ke.current = new Date()),
          Se(He.current),
          I.target.setPointerCapture(I.pointerId),
          I.target.tagName !== "BUTTON" &&
            (J(!0), (at.current = { x: I.clientX, y: I.clientY })));
      },
      onPointerUp: () => {
        var I, X, Q, ue;
        if (V || !We) return;
        at.current = null;
        let ve = Number(
            ((I = je.current) == null
              ? void 0
              : I.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0
          ),
          Ot =
            new Date().getTime() -
            ((X = ke.current) == null ? void 0 : X.getTime()),
          Gr = Math.abs(ve) / Ot;
        if (Math.abs(ve) >= Da || Gr > 0.11) {
          Se(He.current),
            (Q = l.onDismiss) == null || Q.call(l, l),
            Ne(),
            B(!0),
            oe(!1);
          return;
        }
        (ue = je.current) == null ||
          ue.style.setProperty("--swipe-amount", "0px"),
          J(!1);
      },
      onPointerMove: (I) => {
        var X, Q, ue;
        if (!at.current || !We) return;
        let ve = I.clientY - at.current.y,
          Ot =
            ((X = window.getSelection()) == null
              ? void 0
              : X.toString().length) > 0;
        Number(
          ((Q = je.current) == null
            ? void 0
            : Q.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0
        ) > 0 && oe(!0),
          !Ot &&
            ((ue = je.current) == null ||
              ue.style.setProperty("--swipe-amount", `${Math.max(0, ve)}px`));
      },
    },
    zr && !l.jsx
      ? C.createElement(
          "button",
          {
            "aria-label": ae,
            "data-disabled": At,
            "data-close-button": !0,
            onClick:
              At || !We
                ? () => {}
                : () => {
                    var I;
                    Ne(), (I = l.onDismiss) == null || I.call(l, l);
                  },
            className: j(
              P == null ? void 0 : P.closeButton,
              (r = l == null ? void 0 : l.classNames) == null
                ? void 0
                : r.closeButton
            ),
          },
          (a = K == null ? void 0 : K.close) != null ? a : wa
        )
      : null,
    l.jsx || C.isValidElement(l.title)
      ? l.jsx
        ? l.jsx
        : typeof l.title == "function"
        ? l.title()
        : l.title
      : C.createElement(
          C.Fragment,
          null,
          de || l.icon || l.promise
            ? C.createElement(
                "div",
                {
                  "data-icon": "",
                  className: j(
                    P == null ? void 0 : P.icon,
                    (s = l == null ? void 0 : l.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                l.promise || (l.type === "loading" && !l.icon)
                  ? l.icon || Xr()
                  : null,
                l.type !== "loading"
                  ? l.icon || (K == null ? void 0 : K[de]) || fa(de)
                  : null
              )
            : null,
          C.createElement(
            "div",
            {
              "data-content": "",
              className: j(
                P == null ? void 0 : P.content,
                (i = l == null ? void 0 : l.classNames) == null
                  ? void 0
                  : i.content
              ),
            },
            C.createElement(
              "div",
              {
                "data-title": "",
                className: j(
                  P == null ? void 0 : P.title,
                  (d = l == null ? void 0 : l.classNames) == null
                    ? void 0
                    : d.title
                ),
              },
              typeof l.title == "function" ? l.title() : l.title
            ),
            l.description
              ? C.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: j(
                      F,
                      Vr,
                      P == null ? void 0 : P.description,
                      (u = l == null ? void 0 : l.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof l.description == "function"
                    ? l.description()
                    : l.description
                )
              : null
          ),
          C.isValidElement(l.cancel)
            ? l.cancel
            : l.cancel && st(l.cancel)
            ? C.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: l.cancelButtonStyle || $,
                  onClick: (I) => {
                    var X, Q;
                    st(l.cancel) &&
                      We &&
                      ((Q = (X = l.cancel).onClick) == null || Q.call(X, I),
                      Ne());
                  },
                  className: j(
                    P == null ? void 0 : P.cancelButton,
                    (p = l == null ? void 0 : l.classNames) == null
                      ? void 0
                      : p.cancelButton
                  ),
                },
                l.cancel.label
              )
            : null,
          C.isValidElement(l.action)
            ? l.action
            : l.action && st(l.action)
            ? C.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: l.actionButtonStyle || z,
                  onClick: (I) => {
                    var X, Q;
                    st(l.action) &&
                      ((Q = (X = l.action).onClick) == null || Q.call(X, I),
                      !I.defaultPrevented && Ne());
                  },
                  className: j(
                    P == null ? void 0 : P.actionButton,
                    (m = l == null ? void 0 : l.classNames) == null
                      ? void 0
                      : m.actionButton
                  ),
                },
                l.action.label
              )
            : null
        )
  );
};
function Cn() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var ja = c.forwardRef(function (e, t) {
  let {
      invert: n,
      position: o = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: a,
      closeButton: s,
      className: i,
      offset: d,
      theme: u = "light",
      richColors: p,
      duration: m,
      style: g,
      visibleToasts: l = Pa,
      toastOptions: v,
      dir: f = Cn(),
      gap: y = Oa,
      loadingIcon: b,
      icons: w,
      containerAriaLabel: x = "Notifications",
      pauseWhenPageIsHidden: S,
      cn: E = Ma,
    } = e,
    [T, R] = C.useState([]),
    O = C.useMemo(
      () =>
        Array.from(
          new Set(
            [o].concat(T.filter((W) => W.position).map((W) => W.position))
          )
        ),
      [T, o]
    ),
    [_, $] = C.useState([]),
    [z, L] = C.useState(!1),
    [F, k] = C.useState(!1),
    [G, D] = C.useState(
      u !== "system"
        ? u
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    M = C.useRef(null),
    A = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    P = C.useRef(null),
    K = C.useRef(!1),
    ae = C.useCallback((W) => {
      R((j) => {
        var H;
        return (
          ((H = j.find((ee) => ee.id === W.id)) != null && H.delete) ||
            se.dismiss(W.id),
          j.filter(({ id: ee }) => ee !== W.id)
        );
      });
    }, []);
  return (
    C.useEffect(
      () =>
        se.subscribe((W) => {
          if (W.dismiss) {
            R((j) => j.map((H) => (H.id === W.id ? { ...H, delete: !0 } : H)));
            return;
          }
          setTimeout(() => {
            Yn.flushSync(() => {
              R((j) => {
                let H = j.findIndex((ee) => ee.id === W.id);
                return H !== -1
                  ? [...j.slice(0, H), { ...j[H], ...W }, ...j.slice(H + 1)]
                  : [W, ...j];
              });
            });
          });
        }),
      []
    ),
    C.useEffect(() => {
      if (u !== "system") {
        D(u);
        return;
      }
      if (
        (u === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? D("dark")
            : D("light")),
        typeof window > "u")
      )
        return;
      let W = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        W.addEventListener("change", ({ matches: j }) => {
          D(j ? "dark" : "light");
        });
      } catch {
        W.addListener(({ matches: H }) => {
          try {
            D(H ? "dark" : "light");
          } catch (ee) {
            console.error(ee);
          }
        });
      }
    }, [u]),
    C.useEffect(() => {
      T.length <= 1 && L(!1);
    }, [T]),
    C.useEffect(() => {
      let W = (j) => {
        var H, ee;
        r.every((re) => j[re] || j.code === re) &&
          (L(!0), (H = M.current) == null || H.focus()),
          j.code === "Escape" &&
            (document.activeElement === M.current ||
              ((ee = M.current) != null &&
                ee.contains(document.activeElement))) &&
            L(!1);
      };
      return (
        document.addEventListener("keydown", W),
        () => document.removeEventListener("keydown", W)
      );
    }, [r]),
    C.useEffect(() => {
      if (M.current)
        return () => {
          P.current &&
            (P.current.focus({ preventScroll: !0 }),
            (P.current = null),
            (K.current = !1));
        };
    }, [M.current]),
    C.createElement(
      "section",
      {
        "aria-label": `${x} ${A}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
      },
      O.map((W, j) => {
        var H;
        let [ee, re] = W.split("-");
        return T.length
          ? C.createElement(
              "ol",
              {
                key: W,
                dir: f === "auto" ? Cn() : f,
                tabIndex: -1,
                ref: M,
                className: i,
                "data-sonner-toaster": !0,
                "data-theme": G,
                "data-y-position": ee,
                "data-lifted": z && T.length > 1 && !a,
                "data-x-position": re,
                style: {
                  "--front-toast-height": `${
                    ((H = _[0]) == null ? void 0 : H.height) || 0
                  }px`,
                  "--offset": typeof d == "number" ? `${d}px` : d || Ta,
                  "--width": `${Aa}px`,
                  "--gap": `${y}px`,
                  ...g,
                },
                onBlur: (N) => {
                  K.current &&
                    !N.currentTarget.contains(N.relatedTarget) &&
                    ((K.current = !1),
                    P.current &&
                      (P.current.focus({ preventScroll: !0 }),
                      (P.current = null)));
                },
                onFocus: (N) => {
                  (N.target instanceof HTMLElement &&
                    N.target.dataset.dismissible === "false") ||
                    K.current ||
                    ((K.current = !0), (P.current = N.relatedTarget));
                },
                onMouseEnter: () => L(!0),
                onMouseMove: () => L(!0),
                onMouseLeave: () => {
                  F || L(!1);
                },
                onPointerDown: (N) => {
                  (N.target instanceof HTMLElement &&
                    N.target.dataset.dismissible === "false") ||
                    k(!0);
                },
                onPointerUp: () => k(!1),
              },
              T.filter((N) => (!N.position && j === 0) || N.position === W).map(
                (N, Y) => {
                  var J, V;
                  return C.createElement(ka, {
                    key: N.id,
                    icons: w,
                    index: Y,
                    toast: N,
                    defaultRichColors: p,
                    duration:
                      (J = v == null ? void 0 : v.duration) != null ? J : m,
                    className: v == null ? void 0 : v.className,
                    descriptionClassName:
                      v == null ? void 0 : v.descriptionClassName,
                    invert: n,
                    visibleToasts: l,
                    closeButton:
                      (V = v == null ? void 0 : v.closeButton) != null ? V : s,
                    interacting: F,
                    position: W,
                    style: v == null ? void 0 : v.style,
                    unstyled: v == null ? void 0 : v.unstyled,
                    classNames: v == null ? void 0 : v.classNames,
                    cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                    actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                    removeToast: ae,
                    toasts: T.filter((B) => B.position == N.position),
                    heights: _.filter((B) => B.position == N.position),
                    setHeights: $,
                    expandByDefault: a,
                    gap: y,
                    loadingIcon: b,
                    expanded: z,
                    pauseWhenPageIsHidden: S,
                    cn: E,
                  });
                }
              )
            )
          : null;
      })
    )
  );
});
const ql = ({ ...e }) => {
  const { theme: t = "system" } = ua();
  return h.jsx(ja, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
function _a(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _e(e);
  c.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return (
      t.addEventListener("keydown", o, { capture: !0 }),
      () => t.removeEventListener("keydown", o, { capture: !0 })
    );
  }, [n, t]);
}
var La = "DismissableLayer",
  Ht = "dismissableLayer.update",
  Ba = "dismissableLayer.pointerDownOutside",
  $a = "dismissableLayer.focusOutside",
  Rn,
  Gn = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  en = c.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: r,
        onFocusOutside: a,
        onInteractOutside: s,
        onDismiss: i,
        ...d
      } = e,
      u = c.useContext(Gn),
      [p, m] = c.useState(null),
      g =
        (p == null ? void 0 : p.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, l] = c.useState({}),
      v = te(t, (R) => m(R)),
      f = Array.from(u.layers),
      [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = f.indexOf(y),
      w = p ? f.indexOf(p) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = w >= b,
      E = Ha((R) => {
        const O = R.target,
          _ = [...u.branches].some(($) => $.contains(O));
        !S ||
          _ ||
          (r == null || r(R),
          s == null || s(R),
          R.defaultPrevented || i == null || i());
      }, g),
      T = Va((R) => {
        const O = R.target;
        [...u.branches].some(($) => $.contains(O)) ||
          (a == null || a(R),
          s == null || s(R),
          R.defaultPrevented || i == null || i());
      }, g);
    return (
      _a((R) => {
        w === u.layers.size - 1 &&
          (o == null || o(R),
          !R.defaultPrevented && i && (R.preventDefault(), i()));
      }, g),
      c.useEffect(() => {
        if (p)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Rn = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(p)),
            u.layers.add(p),
            Nn(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = Rn);
            }
          );
      }, [p, g, n, u]),
      c.useEffect(
        () => () => {
          p &&
            (u.layers.delete(p),
            u.layersWithOutsidePointerEventsDisabled.delete(p),
            Nn());
        },
        [p, u]
      ),
      c.useEffect(() => {
        const R = () => l({});
        return (
          document.addEventListener(Ht, R),
          () => document.removeEventListener(Ht, R)
        );
      }, []),
      h.jsx(q.div, {
        ...d,
        ref: v,
        style: {
          pointerEvents: x ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Z(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Z(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Z(e.onPointerDownCapture, E.onPointerDownCapture),
      })
    );
  });
en.displayName = La;
var Fa = "DismissableLayerBranch",
  Wa = c.forwardRef((e, t) => {
    const n = c.useContext(Gn),
      o = c.useRef(null),
      r = te(t, o);
    return (
      c.useEffect(() => {
        const a = o.current;
        if (a)
          return (
            n.branches.add(a),
            () => {
              n.branches.delete(a);
            }
          );
      }, [n.branches]),
      h.jsx(q.div, { ...e, ref: r })
    );
  });
Wa.displayName = Fa;
function Ha(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _e(e),
    o = c.useRef(!1),
    r = c.useRef(() => {});
  return (
    c.useEffect(() => {
      const a = (i) => {
          if (i.target && !o.current) {
            let d = function () {
              qn(Ba, n, u, { discrete: !0 });
            };
            const u = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", r.current),
                (r.current = d),
                t.addEventListener("click", r.current, { once: !0 }))
              : d();
          } else t.removeEventListener("click", r.current);
          o.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", a),
          t.removeEventListener("click", r.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function Va(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _e(e),
    o = c.useRef(!1);
  return (
    c.useEffect(() => {
      const r = (a) => {
        a.target &&
          !o.current &&
          qn($a, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", r),
        () => t.removeEventListener("focusin", r)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function Nn() {
  const e = new CustomEvent(Ht);
  document.dispatchEvent(e);
}
function qn(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }),
    o ? qr(r, a) : r.dispatchEvent(a);
}
var Dt = "focusScope.autoFocusOnMount",
  It = "focusScope.autoFocusOnUnmount",
  Pn = { bubbles: !1, cancelable: !0 },
  za = "FocusScope",
  tn = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: o = !1,
        onMountAutoFocus: r,
        onUnmountAutoFocus: a,
        ...s
      } = e,
      [i, d] = c.useState(null),
      u = _e(r),
      p = _e(a),
      m = c.useRef(null),
      g = te(t, (f) => d(f)),
      l = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    c.useEffect(() => {
      if (o) {
        let f = function (x) {
            if (l.paused || !i) return;
            const S = x.target;
            i.contains(S) ? (m.current = S) : Pe(m.current, { select: !0 });
          },
          y = function (x) {
            if (l.paused || !i) return;
            const S = x.relatedTarget;
            S !== null && (i.contains(S) || Pe(m.current, { select: !0 }));
          },
          b = function (x) {
            if (document.activeElement === document.body)
              for (const E of x) E.removedNodes.length > 0 && Pe(i);
          };
        document.addEventListener("focusin", f),
          document.addEventListener("focusout", y);
        const w = new MutationObserver(b);
        return (
          i && w.observe(i, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", f),
              document.removeEventListener("focusout", y),
              w.disconnect();
          }
        );
      }
    }, [o, i, l.paused]),
      c.useEffect(() => {
        if (i) {
          An.add(l);
          const f = document.activeElement;
          if (!i.contains(f)) {
            const b = new CustomEvent(Dt, Pn);
            i.addEventListener(Dt, u),
              i.dispatchEvent(b),
              b.defaultPrevented ||
                (Ua(qa(Zn(i)), { select: !0 }),
                document.activeElement === f && Pe(i));
          }
          return () => {
            i.removeEventListener(Dt, u),
              setTimeout(() => {
                const b = new CustomEvent(It, Pn);
                i.addEventListener(It, p),
                  i.dispatchEvent(b),
                  b.defaultPrevented || Pe(f ?? document.body, { select: !0 }),
                  i.removeEventListener(It, p),
                  An.remove(l);
              }, 0);
          };
        }
      }, [i, u, p, l]);
    const v = c.useCallback(
      (f) => {
        if ((!n && !o) || l.paused) return;
        const y = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
          b = document.activeElement;
        if (y && b) {
          const w = f.currentTarget,
            [x, S] = Ya(w);
          x && S
            ? !f.shiftKey && b === S
              ? (f.preventDefault(), n && Pe(x, { select: !0 }))
              : f.shiftKey &&
                b === x &&
                (f.preventDefault(), n && Pe(S, { select: !0 }))
            : b === w && f.preventDefault();
        }
      },
      [n, o, l.paused]
    );
    return h.jsx(q.div, { tabIndex: -1, ...s, ref: g, onKeyDown: v });
  });
tn.displayName = za;
function Ua(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if ((Pe(o, { select: t }), document.activeElement !== n)) return;
}
function Ya(e) {
  const t = Zn(e),
    n = Tn(t, e),
    o = Tn(t.reverse(), e);
  return [n, o];
}
function Zn(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const r = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || r
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Tn(e, t) {
  for (const n of e) if (!Ka(n, { upTo: t })) return n;
}
function Ka(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Xa(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Xa(e) && t && e.select();
  }
}
var An = Ga();
function Ga() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = On(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = On(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function On(e, t) {
  const n = [...e],
    o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function qa(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Za = "Portal",
  nn = c.forwardRef((e, t) => {
    var i;
    const { container: n, ...o } = e,
      [r, a] = c.useState(!1);
    pe(() => a(!0), []);
    const s =
      n ||
      (r &&
        ((i = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : i.body));
    return s ? Yn.createPortal(h.jsx(q.div, { ...o, ref: t }), s) : null;
  });
nn.displayName = Za;
var Mt = 0;
function Qn() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Dn()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Dn()),
      Mt++,
      () => {
        Mt === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Mt--;
      }
    );
  }, []);
}
function Dn() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var ye = function () {
  return (
    (ye =
      Object.assign ||
      function (t) {
        for (var n, o = 1, r = arguments.length; o < r; o++) {
          n = arguments[o];
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
        }
        return t;
      }),
    ye.apply(this, arguments)
  );
};
function Jn(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
        (n[o[r]] = e[o[r]]);
  return n;
}
function Qa(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, a; o < r; o++)
      (a || !(o in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, o)), (a[o] = t[o]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var ft = "right-scroll-bar-position",
  pt = "width-before-scroll-bar",
  Ja = "with-scroll-bars-hidden",
  es = "--removed-body-scroll-bar-size";
function kt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ts(e, t) {
  var n = c.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && ((n.value = o), n.callback(o, r));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var ns = typeof window < "u" ? c.useLayoutEffect : c.useEffect,
  In = new WeakMap();
function os(e, t) {
  var n = ts(null, function (o) {
    return e.forEach(function (r) {
      return kt(r, o);
    });
  });
  return (
    ns(
      function () {
        var o = In.get(n);
        if (o) {
          var r = new Set(o),
            a = new Set(e),
            s = n.current;
          r.forEach(function (i) {
            a.has(i) || kt(i, null);
          }),
            a.forEach(function (i) {
              r.has(i) || kt(i, s);
            });
        }
        In.set(n, e);
      },
      [e]
    ),
    n
  );
}
function rs(e) {
  return e;
}
function as(e, t) {
  t === void 0 && (t = rs);
  var n = [],
    o = !1,
    r = {
      read: function () {
        if (o)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (a) {
        var s = t(a, o);
        return (
          n.push(s),
          function () {
            n = n.filter(function (i) {
              return i !== s;
            });
          }
        );
      },
      assignSyncMedium: function (a) {
        for (o = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(a);
        }
        n = {
          push: function (i) {
            return a(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (a) {
        o = !0;
        var s = [];
        if (n.length) {
          var i = n;
          (n = []), i.forEach(a), (s = n);
        }
        var d = function () {
            var p = s;
            (s = []), p.forEach(a);
          },
          u = function () {
            return Promise.resolve().then(d);
          };
        u(),
          (n = {
            push: function (p) {
              s.push(p), u();
            },
            filter: function (p) {
              return (s = s.filter(p)), n;
            },
          });
      },
    };
  return r;
}
function ss(e) {
  e === void 0 && (e = {});
  var t = as(null);
  return (t.options = ye({ async: !0, ssr: !1 }, e)), t;
}
var eo = function (e) {
  var t = e.sideCar,
    n = Jn(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var o = t.read();
  if (!o) throw new Error("Sidecar medium not found");
  return c.createElement(o, ye({}, n));
};
eo.isSideCarExport = !0;
function is(e, t) {
  return e.useMedium(t), eo;
}
var to = ss(),
  jt = function () {},
  bt = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      o = c.useState({
        onScrollCapture: jt,
        onWheelCapture: jt,
        onTouchMoveCapture: jt,
      }),
      r = o[0],
      a = o[1],
      s = e.forwardProps,
      i = e.children,
      d = e.className,
      u = e.removeScrollBar,
      p = e.enabled,
      m = e.shards,
      g = e.sideCar,
      l = e.noIsolation,
      v = e.inert,
      f = e.allowPinchZoom,
      y = e.as,
      b = y === void 0 ? "div" : y,
      w = e.gapMode,
      x = Jn(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      S = g,
      E = os([n, t]),
      T = ye(ye({}, x), r);
    return c.createElement(
      c.Fragment,
      null,
      p &&
        c.createElement(S, {
          sideCar: to,
          removeScrollBar: u,
          shards: m,
          noIsolation: l,
          inert: v,
          setCallbacks: a,
          allowPinchZoom: !!f,
          lockRef: n,
          gapMode: w,
        }),
      s
        ? c.cloneElement(c.Children.only(i), ye(ye({}, T), { ref: E }))
        : c.createElement(b, ye({}, T, { className: d, ref: E }), i)
    );
  });
bt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
bt.classNames = { fullWidth: pt, zeroRight: ft };
var ls = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function cs() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ls();
  return t && e.setAttribute("nonce", t), e;
}
function ds(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function us(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var fs = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = cs()) && (ds(t, n), us(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  ps = function () {
    var e = fs();
    return function (t, n) {
      c.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  no = function () {
    var e = ps(),
      t = function (n) {
        var o = n.styles,
          r = n.dynamic;
        return e(o, r), null;
      };
    return t;
  },
  ms = { left: 0, top: 0, right: 0, gap: 0 },
  _t = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  hs = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      o = t[e === "padding" ? "paddingTop" : "marginTop"],
      r = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [_t(n), _t(o), _t(r)];
  },
  gs = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return ms;
    var t = hs(e),
      n = document.documentElement.clientWidth,
      o = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, o - n + t[2] - t[0]),
    };
  },
  vs = no(),
  Ke = "data-scroll-locked",
  ys = function (e, t, n, o) {
    var r = e.left,
      a = e.top,
      s = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Ja,
          ` {
   overflow: hidden `
        )
        .concat(
          o,
          `;
   padding-right: `
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  body[`
        )
        .concat(
          Ke,
          `] {
    overflow: hidden `
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(o, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  r,
                  `px;
    padding-top: `
                )
                .concat(
                  a,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(i, "px ")
                .concat(
                  o,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(i, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          ft,
          ` {
    right: `
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  
  .`
        )
        .concat(
          pt,
          ` {
    margin-right: `
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  
  .`
        )
        .concat(ft, " .")
        .concat(
          ft,
          ` {
    right: 0 `
        )
        .concat(
          o,
          `;
  }
  
  .`
        )
        .concat(pt, " .")
        .concat(
          pt,
          ` {
    margin-right: 0 `
        )
        .concat(
          o,
          `;
  }
  
  body[`
        )
        .concat(
          Ke,
          `] {
    `
        )
        .concat(es, ": ")
        .concat(
          i,
          `px;
  }
`
        )
    );
  },
  Mn = function () {
    var e = parseInt(document.body.getAttribute(Ke) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  ws = function () {
    c.useEffect(function () {
      return (
        document.body.setAttribute(Ke, (Mn() + 1).toString()),
        function () {
          var e = Mn() - 1;
          e <= 0
            ? document.body.removeAttribute(Ke)
            : document.body.setAttribute(Ke, e.toString());
        }
      );
    }, []);
  },
  xs = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      o = e.gapMode,
      r = o === void 0 ? "margin" : o;
    ws();
    var a = c.useMemo(
      function () {
        return gs(r);
      },
      [r]
    );
    return c.createElement(vs, { styles: ys(a, !t, r, n ? "" : "!important") });
  },
  Vt = !1;
if (typeof window < "u")
  try {
    var it = Object.defineProperty({}, "passive", {
      get: function () {
        return (Vt = !0), !0;
      },
    });
    window.addEventListener("test", it, it),
      window.removeEventListener("test", it, it);
  } catch {
    Vt = !1;
  }
var Ve = Vt ? { passive: !1 } : !1,
  bs = function (e) {
    return e.tagName === "TEXTAREA";
  },
  oo = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !bs(e) && n[t] === "visible")
    );
  },
  Ss = function (e) {
    return oo(e, "overflowY");
  },
  Es = function (e) {
    return oo(e, "overflowX");
  },
  kn = function (e, t) {
    var n = t.ownerDocument,
      o = t;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var r = ro(e, o);
      if (r) {
        var a = ao(e, o),
          s = a[1],
          i = a[2];
        if (s > i) return !0;
      }
      o = o.parentNode;
    } while (o && o !== n.body);
    return !1;
  },
  Cs = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      o = e.clientHeight;
    return [t, n, o];
  },
  Rs = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      o = e.clientWidth;
    return [t, n, o];
  },
  ro = function (e, t) {
    return e === "v" ? Ss(t) : Es(t);
  },
  ao = function (e, t) {
    return e === "v" ? Cs(t) : Rs(t);
  },
  Ns = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Ps = function (e, t, n, o, r) {
    var a = Ns(e, window.getComputedStyle(t).direction),
      s = a * o,
      i = n.target,
      d = t.contains(i),
      u = !1,
      p = s > 0,
      m = 0,
      g = 0;
    do {
      var l = ao(e, i),
        v = l[0],
        f = l[1],
        y = l[2],
        b = f - y - a * v;
      (v || b) && ro(e, i) && ((m += b), (g += v)),
        i instanceof ShadowRoot ? (i = i.host) : (i = i.parentNode);
    } while ((!d && i !== document.body) || (d && (t.contains(i) || t === i)));
    return (
      ((p && (Math.abs(m) < 1 || !r)) || (!p && (Math.abs(g) < 1 || !r))) &&
        (u = !0),
      u
    );
  },
  lt = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  jn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  _n = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Ts = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  As = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Os = 0,
  ze = [];
function Ds(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    o = c.useRef(),
    r = c.useState(Os++)[0],
    a = c.useState(no)[0],
    s = c.useRef(e);
  c.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(r));
          var f = Qa([e.lockRef.current], (e.shards || []).map(_n), !0).filter(
            Boolean
          );
          return (
            f.forEach(function (y) {
              return y.classList.add("allow-interactivity-".concat(r));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(r)),
                f.forEach(function (y) {
                  return y.classList.remove("allow-interactivity-".concat(r));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var i = c.useCallback(function (f, y) {
      if (
        ("touches" in f && f.touches.length === 2) ||
        (f.type === "wheel" && f.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var b = lt(f),
        w = n.current,
        x = "deltaX" in f ? f.deltaX : w[0] - b[0],
        S = "deltaY" in f ? f.deltaY : w[1] - b[1],
        E,
        T = f.target,
        R = Math.abs(x) > Math.abs(S) ? "h" : "v";
      if ("touches" in f && R === "h" && T.type === "range") return !1;
      var O = kn(R, T);
      if (!O) return !0;
      if ((O ? (E = R) : ((E = R === "v" ? "h" : "v"), (O = kn(R, T))), !O))
        return !1;
      if (
        (!o.current && "changedTouches" in f && (x || S) && (o.current = E), !E)
      )
        return !0;
      var _ = o.current || E;
      return Ps(_, y, f, _ === "h" ? x : S, !0);
    }, []),
    d = c.useCallback(function (f) {
      var y = f;
      if (!(!ze.length || ze[ze.length - 1] !== a)) {
        var b = "deltaY" in y ? jn(y) : lt(y),
          w = t.current.filter(function (E) {
            return (
              E.name === y.type &&
              (E.target === y.target || y.target === E.shadowParent) &&
              Ts(E.delta, b)
            );
          })[0];
        if (w && w.should) {
          y.cancelable && y.preventDefault();
          return;
        }
        if (!w) {
          var x = (s.current.shards || [])
              .map(_n)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(y.target);
              }),
            S = x.length > 0 ? i(y, x[0]) : !s.current.noIsolation;
          S && y.cancelable && y.preventDefault();
        }
      }
    }, []),
    u = c.useCallback(function (f, y, b, w) {
      var x = { name: f, delta: y, target: b, should: w, shadowParent: Is(b) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== x;
          });
        }, 1);
    }, []),
    p = c.useCallback(function (f) {
      (n.current = lt(f)), (o.current = void 0);
    }, []),
    m = c.useCallback(function (f) {
      u(f.type, jn(f), f.target, i(f, e.lockRef.current));
    }, []),
    g = c.useCallback(function (f) {
      u(f.type, lt(f), f.target, i(f, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return (
      ze.push(a),
      e.setCallbacks({
        onScrollCapture: m,
        onWheelCapture: m,
        onTouchMoveCapture: g,
      }),
      document.addEventListener("wheel", d, Ve),
      document.addEventListener("touchmove", d, Ve),
      document.addEventListener("touchstart", p, Ve),
      function () {
        (ze = ze.filter(function (f) {
          return f !== a;
        })),
          document.removeEventListener("wheel", d, Ve),
          document.removeEventListener("touchmove", d, Ve),
          document.removeEventListener("touchstart", p, Ve);
      }
    );
  }, []);
  var l = e.removeScrollBar,
    v = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    v ? c.createElement(a, { styles: As(r) }) : null,
    l ? c.createElement(xs, { gapMode: e.gapMode }) : null
  );
}
function Is(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Ms = is(to, Ds);
var on = c.forwardRef(function (e, t) {
  return c.createElement(bt, ye({}, e, { ref: t, sideCar: Ms }));
});
on.classNames = bt.classNames;
var ks = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Ue = new WeakMap(),
  ct = new WeakMap(),
  dt = {},
  Lt = 0,
  so = function (e) {
    return e && (e.host || so(e.parentNode));
  },
  js = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var o = so(n);
        return o && e.contains(o)
          ? o
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  _s = function (e, t, n, o) {
    var r = js(t, Array.isArray(e) ? e : [e]);
    dt[n] || (dt[n] = new WeakMap());
    var a = dt[n],
      s = [],
      i = new Set(),
      d = new Set(r),
      u = function (m) {
        !m || i.has(m) || (i.add(m), u(m.parentNode));
      };
    r.forEach(u);
    var p = function (m) {
      !m ||
        d.has(m) ||
        Array.prototype.forEach.call(m.children, function (g) {
          if (i.has(g)) p(g);
          else
            try {
              var l = g.getAttribute(o),
                v = l !== null && l !== "false",
                f = (Ue.get(g) || 0) + 1,
                y = (a.get(g) || 0) + 1;
              Ue.set(g, f),
                a.set(g, y),
                s.push(g),
                f === 1 && v && ct.set(g, !0),
                y === 1 && g.setAttribute(n, "true"),
                v || g.setAttribute(o, "true");
            } catch (b) {
              console.error("aria-hidden: cannot operate on ", g, b);
            }
        });
    };
    return (
      p(t),
      i.clear(),
      Lt++,
      function () {
        s.forEach(function (m) {
          var g = Ue.get(m) - 1,
            l = a.get(m) - 1;
          Ue.set(m, g),
            a.set(m, l),
            g || (ct.has(m) || m.removeAttribute(o), ct.delete(m)),
            l || m.removeAttribute(n);
        }),
          Lt--,
          Lt ||
            ((Ue = new WeakMap()),
            (Ue = new WeakMap()),
            (ct = new WeakMap()),
            (dt = {}));
      }
    );
  },
  io = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var o = Array.from(Array.isArray(e) ? e : [e]),
      r = ks(e);
    return r
      ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))),
        _s(o, r, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  rn = "Dialog",
  [lo, Zl] = Kn(rn),
  [Ls, ge] = lo(rn),
  co = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: a,
        modal: s = !0,
      } = e,
      i = c.useRef(null),
      d = c.useRef(null),
      [u = !1, p] = Ft({ prop: o, defaultProp: r, onChange: a });
    return h.jsx(Ls, {
      scope: t,
      triggerRef: i,
      contentRef: d,
      contentId: Ye(),
      titleId: Ye(),
      descriptionId: Ye(),
      open: u,
      onOpenChange: p,
      onOpenToggle: c.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: n,
    });
  };
co.displayName = rn;
var uo = "DialogTrigger",
  fo = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ge(uo, n),
      a = te(t, r.triggerRef);
    return h.jsx(q.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": r.open,
      "aria-controls": r.contentId,
      "data-state": ln(r.open),
      ...o,
      ref: a,
      onClick: Z(e.onClick, r.onOpenToggle),
    });
  });
fo.displayName = uo;
var an = "DialogPortal",
  [Bs, po] = lo(an, { forceMount: void 0 }),
  mo = (e) => {
    const { __scopeDialog: t, forceMount: n, children: o, container: r } = e,
      a = ge(an, t);
    return h.jsx(Bs, {
      scope: t,
      forceMount: n,
      children: c.Children.map(o, (s) =>
        h.jsx(Qt, {
          present: n || a.open,
          children: h.jsx(nn, { asChild: !0, container: r, children: s }),
        })
      ),
    });
  };
mo.displayName = an;
var ht = "DialogOverlay",
  ho = c.forwardRef((e, t) => {
    const n = po(ht, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...r } = e,
      a = ge(ht, e.__scopeDialog);
    return a.modal
      ? h.jsx(Qt, {
          present: o || a.open,
          children: h.jsx($s, { ...r, ref: t }),
        })
      : null;
  });
ho.displayName = ht;
var $s = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ge(ht, n);
    return h.jsx(on, {
      as: Xn,
      allowPinchZoom: !0,
      shards: [r.contentRef],
      children: h.jsx(q.div, {
        "data-state": ln(r.open),
        ...o,
        ref: t,
        style: { pointerEvents: "auto", ...o.style },
      }),
    });
  }),
  Le = "DialogContent",
  go = c.forwardRef((e, t) => {
    const n = po(Le, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...r } = e,
      a = ge(Le, e.__scopeDialog);
    return h.jsx(Qt, {
      present: o || a.open,
      children: a.modal
        ? h.jsx(Fs, { ...r, ref: t })
        : h.jsx(Ws, { ...r, ref: t }),
    });
  });
go.displayName = Le;
var Fs = c.forwardRef((e, t) => {
    const n = ge(Le, e.__scopeDialog),
      o = c.useRef(null),
      r = te(t, n.contentRef, o);
    return (
      c.useEffect(() => {
        const a = o.current;
        if (a) return io(a);
      }, []),
      h.jsx(vo, {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Z(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: Z(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent,
            i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: Z(e.onFocusOutside, (a) => a.preventDefault()),
      })
    );
  }),
  Ws = c.forwardRef((e, t) => {
    const n = ge(Le, e.__scopeDialog),
      o = c.useRef(!1),
      r = c.useRef(!1);
    return h.jsx(vo, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (a) => {
        var s, i;
        (s = e.onCloseAutoFocus) == null || s.call(e, a),
          a.defaultPrevented ||
            (o.current || (i = n.triggerRef.current) == null || i.focus(),
            a.preventDefault()),
          (o.current = !1),
          (r.current = !1);
      },
      onInteractOutside: (a) => {
        var d, u;
        (d = e.onInteractOutside) == null || d.call(e, a),
          a.defaultPrevented ||
            ((o.current = !0),
            a.detail.originalEvent.type === "pointerdown" && (r.current = !0));
        const s = a.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) &&
          a.preventDefault(),
          a.detail.originalEvent.type === "focusin" &&
            r.current &&
            a.preventDefault();
      },
    });
  }),
  vo = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: o,
        onOpenAutoFocus: r,
        onCloseAutoFocus: a,
        ...s
      } = e,
      i = ge(Le, n),
      d = c.useRef(null),
      u = te(t, d);
    return (
      Qn(),
      h.jsxs(h.Fragment, {
        children: [
          h.jsx(tn, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: r,
            onUnmountAutoFocus: a,
            children: h.jsx(en, {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": ln(i.open),
              ...s,
              ref: u,
              onDismiss: () => i.onOpenChange(!1),
            }),
          }),
          h.jsxs(h.Fragment, {
            children: [
              h.jsx(Hs, { titleId: i.titleId }),
              h.jsx(zs, { contentRef: d, descriptionId: i.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  sn = "DialogTitle",
  yo = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ge(sn, n);
    return h.jsx(q.h2, { id: r.titleId, ...o, ref: t });
  });
yo.displayName = sn;
var wo = "DialogDescription",
  xo = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ge(wo, n);
    return h.jsx(q.p, { id: r.descriptionId, ...o, ref: t });
  });
xo.displayName = wo;
var bo = "DialogClose",
  So = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ge(bo, n);
    return h.jsx(q.button, {
      type: "button",
      ...o,
      ref: t,
      onClick: Z(e.onClick, () => r.onOpenChange(!1)),
    });
  });
So.displayName = bo;
function ln(e) {
  return e ? "open" : "closed";
}
var Eo = "DialogTitleWarning",
  [Ql, Co] = Zr(Eo, { contentName: Le, titleName: sn, docsSlug: "dialog" }),
  Hs = ({ titleId: e }) => {
    const t = Co(Eo),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      c.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  Vs = "DialogDescriptionWarning",
  zs = ({ contentRef: e, descriptionId: t }) => {
    const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      Co(Vs).contentName
    }}.`;
    return (
      c.useEffect(() => {
        var a;
        const r =
          (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
        t && r && (document.getElementById(t) || console.warn(o));
      }, [o, e, t]),
      null
    );
  },
  Us = co,
  Ys = fo,
  Ks = mo,
  Ro = ho,
  No = go,
  Po = yo,
  To = xo,
  Xs = So;
const Jl = Us,
  ec = Ys,
  Gs = Ks,
  Ao = c.forwardRef(({ className: e, ...t }, n) =>
    h.jsx(Ro, {
      ref: n,
      className: ne(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
    })
  );
Ao.displayName = Ro.displayName;
const qs = c.forwardRef(({ className: e, children: t, ...n }, o) =>
  h.jsxs(Gs, {
    children: [
      h.jsx(Ao, {}),
      h.jsxs(No, {
        ref: o,
        className: ne(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...n,
        children: [
          t,
          h.jsxs(Xs, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              h.jsx(Qr, { className: "h-4 w-4" }),
              h.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
qs.displayName = No.displayName;
const Zs = ({ className: e, ...t }) =>
  h.jsx("div", {
    className: ne("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
Zs.displayName = "DialogHeader";
const Qs = ({ className: e, ...t }) =>
  h.jsx("div", {
    className: ne(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t,
  });
Qs.displayName = "DialogFooter";
const Js = c.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Po, {
    ref: n,
    className: ne("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
Js.displayName = Po.displayName;
const ei = c.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(To, { ref: n, className: ne("text-sm text-muted-foreground", e), ...t })
);
ei.displayName = To.displayName;
const ti = c.forwardRef(({ className: e, type: t, ...n }, o) =>
  h.jsx("input", {
    type: t,
    className: ne(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: o,
    ...n,
  })
);
ti.displayName = "Input";
var ni = "Label",
  Oo = c.forwardRef((e, t) =>
    h.jsx(q.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var r;
        n.target.closest("button, input, select, textarea") ||
          ((r = e.onMouseDown) == null || r.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
Oo.displayName = ni;
var Do = Oo;
const oi = Jr(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  ri = c.forwardRef(({ className: e, ...t }, n) =>
    h.jsx(Do, { ref: n, className: ne(oi(), e), ...t })
  );
ri.displayName = Do.displayName;
function Ln(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
const ai = ["top", "right", "bottom", "left"],
  Te = Math.min,
  ie = Math.max,
  gt = Math.round,
  ut = Math.floor,
  we = (e) => ({ x: e, y: e }),
  si = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ii = { start: "end", end: "start" };
function zt(e, t, n) {
  return ie(e, Te(t, n));
}
function Ee(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ce(e) {
  return e.split("-")[0];
}
function qe(e) {
  return e.split("-")[1];
}
function cn(e) {
  return e === "x" ? "y" : "x";
}
function dn(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  return ["top", "bottom"].includes(Ce(e)) ? "y" : "x";
}
function un(e) {
  return cn(Ae(e));
}
function li(e, t, n) {
  n === void 0 && (n = !1);
  const o = qe(e),
    r = un(e),
    a = dn(r);
  let s =
    r === "x"
      ? o === (n ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
      ? "bottom"
      : "top";
  return t.reference[a] > t.floating[a] && (s = vt(s)), [s, vt(s)];
}
function ci(e) {
  const t = vt(e);
  return [Ut(e), t, Ut(t)];
}
function Ut(e) {
  return e.replace(/start|end/g, (t) => ii[t]);
}
function di(e, t, n) {
  const o = ["left", "right"],
    r = ["right", "left"],
    a = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? r : o) : t ? o : r;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function ui(e, t, n, o) {
  const r = qe(e);
  let a = di(Ce(e), n === "start", o);
  return (
    r && ((a = a.map((s) => s + "-" + r)), t && (a = a.concat(a.map(Ut)))), a
  );
}
function vt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => si[t]);
}
function fi(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Io(e) {
  return typeof e != "number"
    ? fi(e)
    : { top: e, right: e, bottom: e, left: e };
}
function yt(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n,
  };
}
function Bn(e, t, n) {
  let { reference: o, floating: r } = e;
  const a = Ae(t),
    s = un(t),
    i = dn(s),
    d = Ce(t),
    u = a === "y",
    p = o.x + o.width / 2 - r.width / 2,
    m = o.y + o.height / 2 - r.height / 2,
    g = o[i] / 2 - r[i] / 2;
  let l;
  switch (d) {
    case "top":
      l = { x: p, y: o.y - r.height };
      break;
    case "bottom":
      l = { x: p, y: o.y + o.height };
      break;
    case "right":
      l = { x: o.x + o.width, y: m };
      break;
    case "left":
      l = { x: o.x - r.width, y: m };
      break;
    default:
      l = { x: o.x, y: o.y };
  }
  switch (qe(t)) {
    case "start":
      l[s] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      l[s] += g * (n && u ? -1 : 1);
      break;
  }
  return l;
}
const pi = async (e, t, n) => {
  const {
      placement: o = "bottom",
      strategy: r = "absolute",
      middleware: a = [],
      platform: s,
    } = n,
    i = a.filter(Boolean),
    d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: r }),
    { x: p, y: m } = Bn(u, o, d),
    g = o,
    l = {},
    v = 0;
  for (let f = 0; f < i.length; f++) {
    const { name: y, fn: b } = i[f],
      {
        x: w,
        y: x,
        data: S,
        reset: E,
      } = await b({
        x: p,
        y: m,
        initialPlacement: o,
        placement: g,
        strategy: r,
        middlewareData: l,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (p = w ?? p),
      (m = x ?? m),
      (l = { ...l, [y]: { ...l[y], ...S } }),
      E &&
        v <= 50 &&
        (v++,
        typeof E == "object" &&
          (E.placement && (g = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: r,
                  })
                : E.rects),
          ({ x: p, y: m } = Bn(u, g, d))),
        (f = -1));
  }
  return { x: p, y: m, placement: g, strategy: r, middlewareData: l };
};
async function et(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: a, rects: s, elements: i, strategy: d } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: m = "floating",
      altBoundary: g = !1,
      padding: l = 0,
    } = Ee(t, e),
    v = Io(l),
    y = i[g ? (m === "floating" ? "reference" : "floating") : m],
    b = yt(
      await a.getClippingRect({
        element:
          (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null ||
          n
            ? y
            : y.contextElement ||
              (await (a.getDocumentElement == null
                ? void 0
                : a.getDocumentElement(i.floating))),
        boundary: u,
        rootBoundary: p,
        strategy: d,
      })
    ),
    w =
      m === "floating"
        ? { x: o, y: r, width: s.floating.width, height: s.floating.height }
        : s.reference,
    x = await (a.getOffsetParent == null
      ? void 0
      : a.getOffsetParent(i.floating)),
    S = (await (a.isElement == null ? void 0 : a.isElement(x)))
      ? (await (a.getScale == null ? void 0 : a.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = yt(
      a.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: i,
            rect: w,
            offsetParent: x,
            strategy: d,
          })
        : w
    );
  return {
    top: (b.top - E.top + v.top) / S.y,
    bottom: (E.bottom - b.bottom + v.bottom) / S.y,
    left: (b.left - E.left + v.left) / S.x,
    right: (E.right - b.right + v.right) / S.x,
  };
}
const mi = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: o,
          placement: r,
          rects: a,
          platform: s,
          elements: i,
          middlewareData: d,
        } = t,
        { element: u, padding: p = 0 } = Ee(e, t) || {};
      if (u == null) return {};
      const m = Io(p),
        g = { x: n, y: o },
        l = un(r),
        v = dn(l),
        f = await s.getDimensions(u),
        y = l === "y",
        b = y ? "top" : "left",
        w = y ? "bottom" : "right",
        x = y ? "clientHeight" : "clientWidth",
        S = a.reference[v] + a.reference[l] - g[l] - a.floating[v],
        E = g[l] - a.reference[l],
        T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let R = T ? T[x] : 0;
      (!R || !(await (s.isElement == null ? void 0 : s.isElement(T)))) &&
        (R = i.floating[x] || a.floating[v]);
      const O = S / 2 - E / 2,
        _ = R / 2 - f[v] / 2 - 1,
        $ = Te(m[b], _),
        z = Te(m[w], _),
        L = $,
        F = R - f[v] - z,
        k = R / 2 - f[v] / 2 + O,
        G = zt(L, k, F),
        D =
          !d.arrow &&
          qe(r) != null &&
          k !== G &&
          a.reference[v] / 2 - (k < L ? $ : z) - f[v] / 2 < 0,
        M = D ? (k < L ? k - L : k - F) : 0;
      return {
        [l]: g[l] + M,
        data: {
          [l]: G,
          centerOffset: k - G - M,
          ...(D && { alignmentOffset: M }),
        },
        reset: D,
      };
    },
  }),
  hi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, o;
          const {
              placement: r,
              middlewareData: a,
              rects: s,
              initialPlacement: i,
              platform: d,
              elements: u,
            } = t,
            {
              mainAxis: p = !0,
              crossAxis: m = !0,
              fallbackPlacements: g,
              fallbackStrategy: l = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: f = !0,
              ...y
            } = Ee(e, t);
          if ((n = a.arrow) != null && n.alignmentOffset) return {};
          const b = Ce(r),
            w = Ae(i),
            x = Ce(i) === i,
            S = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)),
            E = g || (x || !f ? [vt(i)] : ci(i)),
            T = v !== "none";
          !g && T && E.push(...ui(i, f, v, S));
          const R = [i, ...E],
            O = await et(t, y),
            _ = [];
          let $ = ((o = a.flip) == null ? void 0 : o.overflows) || [];
          if ((p && _.push(O[b]), m)) {
            const k = li(r, s, S);
            _.push(O[k[0]], O[k[1]]);
          }
          if (
            (($ = [...$, { placement: r, overflows: _ }]),
            !_.every((k) => k <= 0))
          ) {
            var z, L;
            const k = (((z = a.flip) == null ? void 0 : z.index) || 0) + 1,
              G = R[k];
            if (G)
              return {
                data: { index: k, overflows: $ },
                reset: { placement: G },
              };
            let D =
              (L = $.filter((M) => M.overflows[0] <= 0).sort(
                (M, A) => M.overflows[1] - A.overflows[1]
              )[0]) == null
                ? void 0
                : L.placement;
            if (!D)
              switch (l) {
                case "bestFit": {
                  var F;
                  const M =
                    (F = $.filter((A) => {
                      if (T) {
                        const P = Ae(A.placement);
                        return P === w || P === "y";
                      }
                      return !0;
                    })
                      .map((A) => [
                        A.placement,
                        A.overflows
                          .filter((P) => P > 0)
                          .reduce((P, K) => P + K, 0),
                      ])
                      .sort((A, P) => A[1] - P[1])[0]) == null
                      ? void 0
                      : F[0];
                  M && (D = M);
                  break;
                }
                case "initialPlacement":
                  D = i;
                  break;
              }
            if (r !== D) return { reset: { placement: D } };
          }
          return {};
        },
      }
    );
  };
function $n(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Fn(e) {
  return ai.some((t) => e[t] >= 0);
}
const gi = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: o = "referenceHidden", ...r } = Ee(e, t);
        switch (o) {
          case "referenceHidden": {
            const a = await et(t, { ...r, elementContext: "reference" }),
              s = $n(a, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: Fn(s) },
            };
          }
          case "escaped": {
            const a = await et(t, { ...r, altBoundary: !0 }),
              s = $n(a, n.floating);
            return { data: { escapedOffsets: s, escaped: Fn(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function vi(e, t) {
  const { placement: n, platform: o, elements: r } = e,
    a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    s = Ce(n),
    i = qe(n),
    d = Ae(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    p = a && d ? -1 : 1,
    m = Ee(t, e);
  let {
    mainAxis: g,
    crossAxis: l,
    alignmentAxis: v,
  } = typeof m == "number"
    ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis,
      };
  return (
    i && typeof v == "number" && (l = i === "end" ? v * -1 : v),
    d ? { x: l * p, y: g * u } : { x: g * u, y: l * p }
  );
}
const yi = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, o;
          const { x: r, y: a, placement: s, middlewareData: i } = t,
            d = await vi(t, e);
          return s === ((n = i.offset) == null ? void 0 : n.placement) &&
            (o = i.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: r + d.x, y: a + d.y, data: { ...d, placement: s } };
        },
      }
    );
  },
  wi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: r } = t,
            {
              mainAxis: a = !0,
              crossAxis: s = !1,
              limiter: i = {
                fn: (y) => {
                  let { x: b, y: w } = y;
                  return { x: b, y: w };
                },
              },
              ...d
            } = Ee(e, t),
            u = { x: n, y: o },
            p = await et(t, d),
            m = Ae(Ce(r)),
            g = cn(m);
          let l = u[g],
            v = u[m];
          if (a) {
            const y = g === "y" ? "top" : "left",
              b = g === "y" ? "bottom" : "right",
              w = l + p[y],
              x = l - p[b];
            l = zt(w, l, x);
          }
          if (s) {
            const y = m === "y" ? "top" : "left",
              b = m === "y" ? "bottom" : "right",
              w = v + p[y],
              x = v - p[b];
            v = zt(w, v, x);
          }
          const f = i.fn({ ...t, [g]: l, [m]: v });
          return {
            ...f,
            data: { x: f.x - n, y: f.y - o, enabled: { [g]: a, [m]: s } },
          };
        },
      }
    );
  },
  xi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: o, placement: r, rects: a, middlewareData: s } = t,
            { offset: i = 0, mainAxis: d = !0, crossAxis: u = !0 } = Ee(e, t),
            p = { x: n, y: o },
            m = Ae(r),
            g = cn(m);
          let l = p[g],
            v = p[m];
          const f = Ee(i, t),
            y =
              typeof f == "number"
                ? { mainAxis: f, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...f };
          if (d) {
            const x = g === "y" ? "height" : "width",
              S = a.reference[g] - a.floating[x] + y.mainAxis,
              E = a.reference[g] + a.reference[x] - y.mainAxis;
            l < S ? (l = S) : l > E && (l = E);
          }
          if (u) {
            var b, w;
            const x = g === "y" ? "width" : "height",
              S = ["top", "left"].includes(Ce(r)),
              E =
                a.reference[m] -
                a.floating[x] +
                ((S && ((b = s.offset) == null ? void 0 : b[m])) || 0) +
                (S ? 0 : y.crossAxis),
              T =
                a.reference[m] +
                a.reference[x] +
                (S ? 0 : ((w = s.offset) == null ? void 0 : w[m]) || 0) -
                (S ? y.crossAxis : 0);
            v < E ? (v = E) : v > T && (v = T);
          }
          return { [g]: l, [m]: v };
        },
      }
    );
  },
  bi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, o;
          const { placement: r, rects: a, platform: s, elements: i } = t,
            { apply: d = () => {}, ...u } = Ee(e, t),
            p = await et(t, u),
            m = Ce(r),
            g = qe(r),
            l = Ae(r) === "y",
            { width: v, height: f } = a.floating;
          let y, b;
          m === "top" || m === "bottom"
            ? ((y = m),
              (b =
                g ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((b = m), (y = g === "end" ? "top" : "bottom"));
          const w = f - p.top - p.bottom,
            x = v - p.left - p.right,
            S = Te(f - p[y], w),
            E = Te(v - p[b], x),
            T = !t.middlewareData.shift;
          let R = S,
            O = E;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (O = x),
            (o = t.middlewareData.shift) != null && o.enabled.y && (R = w),
            T && !g)
          ) {
            const $ = ie(p.left, 0),
              z = ie(p.right, 0),
              L = ie(p.top, 0),
              F = ie(p.bottom, 0);
            l
              ? (O = v - 2 * ($ !== 0 || z !== 0 ? $ + z : ie(p.left, p.right)))
              : (R =
                  f - 2 * (L !== 0 || F !== 0 ? L + F : ie(p.top, p.bottom)));
          }
          await d({ ...t, availableWidth: O, availableHeight: R });
          const _ = await s.getDimensions(i.floating);
          return v !== _.width || f !== _.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function St() {
  return typeof window < "u";
}
function Ze(e) {
  return Mo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function le(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function be(e) {
  var t;
  return (t = (Mo(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Mo(e) {
  return St() ? e instanceof Node || e instanceof le(e).Node : !1;
}
function me(e) {
  return St() ? e instanceof Element || e instanceof le(e).Element : !1;
}
function xe(e) {
  return St() ? e instanceof HTMLElement || e instanceof le(e).HTMLElement : !1;
}
function Wn(e) {
  return !St() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof le(e).ShadowRoot;
}
function nt(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = he(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + o + n) &&
    !["inline", "contents"].includes(r)
  );
}
function Si(e) {
  return ["table", "td", "th"].includes(Ze(e));
}
function Et(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function fn(e) {
  const t = pn(),
    n = me(e) ? he(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((o) =>
      (n.willChange || "").includes(o)
    ) ||
    ["paint", "layout", "strict", "content"].some((o) =>
      (n.contain || "").includes(o)
    )
  );
}
function Ei(e) {
  let t = Oe(e);
  for (; xe(t) && !Ge(t); ) {
    if (fn(t)) return t;
    if (Et(t)) return null;
    t = Oe(t);
  }
  return null;
}
function pn() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ge(e) {
  return ["html", "body", "#document"].includes(Ze(e));
}
function he(e) {
  return le(e).getComputedStyle(e);
}
function Ct(e) {
  return me(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Oe(e) {
  if (Ze(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Wn(e) && e.host) || be(e);
  return Wn(t) ? t.host : t;
}
function ko(e) {
  const t = Oe(e);
  return Ge(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : xe(t) && nt(t)
    ? t
    : ko(t);
}
function tt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = ko(e),
    a = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
    s = le(r);
  if (a) {
    const i = Yt(s);
    return t.concat(
      s,
      s.visualViewport || [],
      nt(r) ? r : [],
      i && n ? tt(i) : []
    );
  }
  return t.concat(r, tt(r, [], n));
}
function Yt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function jo(e) {
  const t = he(e);
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0;
  const r = xe(e),
    a = r ? e.offsetWidth : n,
    s = r ? e.offsetHeight : o,
    i = gt(n) !== a || gt(o) !== s;
  return i && ((n = a), (o = s)), { width: n, height: o, $: i };
}
function mn(e) {
  return me(e) ? e : e.contextElement;
}
function Xe(e) {
  const t = mn(e);
  if (!xe(t)) return we(1);
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: a } = jo(t);
  let s = (a ? gt(n.width) : n.width) / o,
    i = (a ? gt(n.height) : n.height) / r;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    { x: s, y: i }
  );
}
const Ci = we(0);
function _o(e) {
  const t = le(e);
  return !pn() || !t.visualViewport
    ? Ci
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Ri(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== le(e)) ? !1 : t;
}
function Be(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    a = mn(e);
  let s = we(1);
  t && (o ? me(o) && (s = Xe(o)) : (s = Xe(e)));
  const i = Ri(a, n, o) ? _o(a) : we(0);
  let d = (r.left + i.x) / s.x,
    u = (r.top + i.y) / s.y,
    p = r.width / s.x,
    m = r.height / s.y;
  if (a) {
    const g = le(a),
      l = o && me(o) ? le(o) : o;
    let v = g,
      f = Yt(v);
    for (; f && o && l !== v; ) {
      const y = Xe(f),
        b = f.getBoundingClientRect(),
        w = he(f),
        x = b.left + (f.clientLeft + parseFloat(w.paddingLeft)) * y.x,
        S = b.top + (f.clientTop + parseFloat(w.paddingTop)) * y.y;
      (d *= y.x),
        (u *= y.y),
        (p *= y.x),
        (m *= y.y),
        (d += x),
        (u += S),
        (v = le(f)),
        (f = Yt(v));
    }
  }
  return yt({ width: p, height: m, x: d, y: u });
}
function hn(e, t) {
  const n = Ct(e).scrollLeft;
  return t ? t.left + n : Be(be(e)).left + n;
}
function Lo(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    r = o.left + t.scrollLeft - (n ? 0 : hn(e, o)),
    a = o.top + t.scrollTop;
  return { x: r, y: a };
}
function Ni(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const a = r === "fixed",
    s = be(o),
    i = t ? Et(t.floating) : !1;
  if (o === s || (i && a)) return n;
  let d = { scrollLeft: 0, scrollTop: 0 },
    u = we(1);
  const p = we(0),
    m = xe(o);
  if (
    (m || (!m && !a)) &&
    ((Ze(o) !== "body" || nt(s)) && (d = Ct(o)), xe(o))
  ) {
    const l = Be(o);
    (u = Xe(o)), (p.x = l.x + o.clientLeft), (p.y = l.y + o.clientTop);
  }
  const g = s && !m && !a ? Lo(s, d, !0) : we(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - d.scrollLeft * u.x + p.x + g.x,
    y: n.y * u.y - d.scrollTop * u.y + p.y + g.y,
  };
}
function Pi(e) {
  return Array.from(e.getClientRects());
}
function Ti(e) {
  const t = be(e),
    n = Ct(e),
    o = e.ownerDocument.body,
    r = ie(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    a = ie(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + hn(e);
  const i = -n.scrollTop;
  return (
    he(o).direction === "rtl" && (s += ie(t.clientWidth, o.clientWidth) - r),
    { width: r, height: a, x: s, y: i }
  );
}
function Ai(e, t) {
  const n = le(e),
    o = be(e),
    r = n.visualViewport;
  let a = o.clientWidth,
    s = o.clientHeight,
    i = 0,
    d = 0;
  if (r) {
    (a = r.width), (s = r.height);
    const u = pn();
    (!u || (u && t === "fixed")) && ((i = r.offsetLeft), (d = r.offsetTop));
  }
  return { width: a, height: s, x: i, y: d };
}
function Oi(e, t) {
  const n = Be(e, !0, t === "fixed"),
    o = n.top + e.clientTop,
    r = n.left + e.clientLeft,
    a = xe(e) ? Xe(e) : we(1),
    s = e.clientWidth * a.x,
    i = e.clientHeight * a.y,
    d = r * a.x,
    u = o * a.y;
  return { width: s, height: i, x: d, y: u };
}
function Hn(e, t, n) {
  let o;
  if (t === "viewport") o = Ai(e, n);
  else if (t === "document") o = Ti(be(e));
  else if (me(t)) o = Oi(t, n);
  else {
    const r = _o(e);
    o = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
  }
  return yt(o);
}
function Bo(e, t) {
  const n = Oe(e);
  return n === t || !me(n) || Ge(n)
    ? !1
    : he(n).position === "fixed" || Bo(n, t);
}
function Di(e, t) {
  const n = t.get(e);
  if (n) return n;
  let o = tt(e, [], !1).filter((i) => me(i) && Ze(i) !== "body"),
    r = null;
  const a = he(e).position === "fixed";
  let s = a ? Oe(e) : e;
  for (; me(s) && !Ge(s); ) {
    const i = he(s),
      d = fn(s);
    !d && i.position === "fixed" && (r = null),
      (
        a
          ? !d && !r
          : (!d &&
              i.position === "static" &&
              !!r &&
              ["absolute", "fixed"].includes(r.position)) ||
            (nt(s) && !d && Bo(e, s))
      )
        ? (o = o.filter((p) => p !== s))
        : (r = i),
      (s = Oe(s));
  }
  return t.set(e, o), o;
}
function Ii(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Et(t)
          ? []
          : Di(t, this._c)
        : [].concat(n)),
      o,
    ],
    i = s[0],
    d = s.reduce((u, p) => {
      const m = Hn(t, p, r);
      return (
        (u.top = ie(m.top, u.top)),
        (u.right = Te(m.right, u.right)),
        (u.bottom = Te(m.bottom, u.bottom)),
        (u.left = ie(m.left, u.left)),
        u
      );
    }, Hn(t, i, r));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top,
  };
}
function Mi(e) {
  const { width: t, height: n } = jo(e);
  return { width: t, height: n };
}
function ki(e, t, n) {
  const o = xe(t),
    r = be(t),
    a = n === "fixed",
    s = Be(e, !0, a, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const d = we(0);
  if (o || (!o && !a))
    if (((Ze(t) !== "body" || nt(r)) && (i = Ct(t)), o)) {
      const g = Be(t, !0, a, t);
      (d.x = g.x + t.clientLeft), (d.y = g.y + t.clientTop);
    } else r && (d.x = hn(r));
  const u = r && !o && !a ? Lo(r, i) : we(0),
    p = s.left + i.scrollLeft - d.x - u.x,
    m = s.top + i.scrollTop - d.y - u.y;
  return { x: p, y: m, width: s.width, height: s.height };
}
function Bt(e) {
  return he(e).position === "static";
}
function Vn(e, t) {
  if (!xe(e) || he(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return be(e) === n && (n = n.ownerDocument.body), n;
}
function $o(e, t) {
  const n = le(e);
  if (Et(e)) return n;
  if (!xe(e)) {
    let r = Oe(e);
    for (; r && !Ge(r); ) {
      if (me(r) && !Bt(r)) return r;
      r = Oe(r);
    }
    return n;
  }
  let o = Vn(e, t);
  for (; o && Si(o) && Bt(o); ) o = Vn(o, t);
  return o && Ge(o) && Bt(o) && !fn(o) ? n : o || Ei(e) || n;
}
const ji = async function (e) {
  const t = this.getOffsetParent || $o,
    n = this.getDimensions,
    o = await n(e.floating);
  return {
    reference: ki(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function _i(e) {
  return he(e).direction === "rtl";
}
const Li = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ni,
  getDocumentElement: be,
  getClippingRect: Ii,
  getOffsetParent: $o,
  getElementRects: ji,
  getClientRects: Pi,
  getDimensions: Mi,
  getScale: Xe,
  isElement: me,
  isRTL: _i,
};
function Bi(e, t) {
  let n = null,
    o;
  const r = be(e);
  function a() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), (n = null);
  }
  function s(i, d) {
    i === void 0 && (i = !1), d === void 0 && (d = 1), a();
    const { left: u, top: p, width: m, height: g } = e.getBoundingClientRect();
    if ((i || t(), !m || !g)) return;
    const l = ut(p),
      v = ut(r.clientWidth - (u + m)),
      f = ut(r.clientHeight - (p + g)),
      y = ut(u),
      w = {
        rootMargin: -l + "px " + -v + "px " + -f + "px " + -y + "px",
        threshold: ie(0, Te(1, d)) || 1,
      };
    let x = !0;
    function S(E) {
      const T = E[0].intersectionRatio;
      if (T !== d) {
        if (!x) return s();
        T
          ? s(!1, T)
          : (o = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...w, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, w);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function $i(e, t, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: a = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: i = typeof IntersectionObserver == "function",
      animationFrame: d = !1,
    } = o,
    u = mn(e),
    p = r || a ? [...(u ? tt(u) : []), ...tt(t)] : [];
  p.forEach((b) => {
    r && b.addEventListener("scroll", n, { passive: !0 }),
      a && b.addEventListener("resize", n);
  });
  const m = u && i ? Bi(u, n) : null;
  let g = -1,
    l = null;
  s &&
    ((l = new ResizeObserver((b) => {
      let [w] = b;
      w &&
        w.target === u &&
        l &&
        (l.unobserve(t),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var x;
          (x = l) == null || x.observe(t);
        }))),
        n();
    })),
    u && !d && l.observe(u),
    l.observe(t));
  let v,
    f = d ? Be(e) : null;
  d && y();
  function y() {
    const b = Be(e);
    f &&
      (b.x !== f.x ||
        b.y !== f.y ||
        b.width !== f.width ||
        b.height !== f.height) &&
      n(),
      (f = b),
      (v = requestAnimationFrame(y));
  }
  return (
    n(),
    () => {
      var b;
      p.forEach((w) => {
        r && w.removeEventListener("scroll", n),
          a && w.removeEventListener("resize", n);
      }),
        m == null || m(),
        (b = l) == null || b.disconnect(),
        (l = null),
        d && cancelAnimationFrame(v);
    }
  );
}
const Fi = yi,
  Wi = wi,
  Hi = hi,
  Vi = bi,
  zi = gi,
  zn = mi,
  Ui = xi,
  Yi = (e, t, n) => {
    const o = new Map(),
      r = { platform: Li, ...n },
      a = { ...r.platform, _c: o };
    return pi(e, t, { ...r, platform: a });
  };
var mt = typeof document < "u" ? c.useLayoutEffect : c.useEffect;
function wt(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (o = n; o-- !== 0; ) if (!wt(e[o], t[o])) return !1;
      return !0;
    }
    if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length))
      return !1;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1;
    for (o = n; o-- !== 0; ) {
      const a = r[o];
      if (!(a === "_owner" && e.$$typeof) && !wt(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Fo(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Un(e, t) {
  const n = Fo(e);
  return Math.round(t * n) / n;
}
function $t(e) {
  const t = c.useRef(e);
  return (
    mt(() => {
      t.current = e;
    }),
    t
  );
}
function Ki(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: o = [],
      platform: r,
      elements: { reference: a, floating: s } = {},
      transform: i = !0,
      whileElementsMounted: d,
      open: u,
    } = e,
    [p, m] = c.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [g, l] = c.useState(o);
  wt(g, o) || l(o);
  const [v, f] = c.useState(null),
    [y, b] = c.useState(null),
    w = c.useCallback((A) => {
      A !== T.current && ((T.current = A), f(A));
    }, []),
    x = c.useCallback((A) => {
      A !== R.current && ((R.current = A), b(A));
    }, []),
    S = a || v,
    E = s || y,
    T = c.useRef(null),
    R = c.useRef(null),
    O = c.useRef(p),
    _ = d != null,
    $ = $t(d),
    z = $t(r),
    L = $t(u),
    F = c.useCallback(() => {
      if (!T.current || !R.current) return;
      const A = { placement: t, strategy: n, middleware: g };
      z.current && (A.platform = z.current),
        Yi(T.current, R.current, A).then((P) => {
          const K = { ...P, isPositioned: L.current !== !1 };
          k.current &&
            !wt(O.current, K) &&
            ((O.current = K),
            Jt.flushSync(() => {
              m(K);
            }));
        });
    }, [g, t, n, z, L]);
  mt(() => {
    u === !1 &&
      O.current.isPositioned &&
      ((O.current.isPositioned = !1), m((A) => ({ ...A, isPositioned: !1 })));
  }, [u]);
  const k = c.useRef(!1);
  mt(
    () => (
      (k.current = !0),
      () => {
        k.current = !1;
      }
    ),
    []
  ),
    mt(() => {
      if ((S && (T.current = S), E && (R.current = E), S && E)) {
        if ($.current) return $.current(S, E, F);
        F();
      }
    }, [S, E, F, $, _]);
  const G = c.useMemo(
      () => ({ reference: T, floating: R, setReference: w, setFloating: x }),
      [w, x]
    ),
    D = c.useMemo(() => ({ reference: S, floating: E }), [S, E]),
    M = c.useMemo(() => {
      const A = { position: n, left: 0, top: 0 };
      if (!D.floating) return A;
      const P = Un(D.floating, p.x),
        K = Un(D.floating, p.y);
      return i
        ? {
            ...A,
            transform: "translate(" + P + "px, " + K + "px)",
            ...(Fo(D.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: P, top: K };
    }, [n, i, D.floating, p.x, p.y]);
  return c.useMemo(
    () => ({ ...p, update: F, refs: G, elements: D, floatingStyles: M }),
    [p, F, G, D, M]
  );
}
const Xi = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: o, padding: r } = typeof e == "function" ? e(n) : e;
        return o && t(o)
          ? o.current != null
            ? zn({ element: o.current, padding: r }).fn(n)
            : {}
          : o
          ? zn({ element: o, padding: r }).fn(n)
          : {};
      },
    };
  },
  Gi = (e, t) => ({ ...Fi(e), options: [e, t] }),
  qi = (e, t) => ({ ...Wi(e), options: [e, t] }),
  Zi = (e, t) => ({ ...Ui(e), options: [e, t] }),
  Qi = (e, t) => ({ ...Hi(e), options: [e, t] }),
  Ji = (e, t) => ({ ...Vi(e), options: [e, t] }),
  el = (e, t) => ({ ...zi(e), options: [e, t] }),
  tl = (e, t) => ({ ...Xi(e), options: [e, t] });
var nl = "Arrow",
  Wo = c.forwardRef((e, t) => {
    const { children: n, width: o = 10, height: r = 5, ...a } = e;
    return h.jsx(q.svg, {
      ...a,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : h.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Wo.displayName = nl;
var ol = Wo;
function rl(e, t = []) {
  let n = [];
  function o(a, s) {
    const i = c.createContext(s),
      d = n.length;
    n = [...n, s];
    function u(m) {
      const { scope: g, children: l, ...v } = m,
        f = (g == null ? void 0 : g[e][d]) || i,
        y = c.useMemo(() => v, Object.values(v));
      return h.jsx(f.Provider, { value: y, children: l });
    }
    function p(m, g) {
      const l = (g == null ? void 0 : g[e][d]) || i,
        v = c.useContext(l);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return (u.displayName = a + "Provider"), [u, p];
  }
  const r = () => {
    const a = n.map((s) => c.createContext(s));
    return function (i) {
      const d = (i == null ? void 0 : i[e]) || a;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: d } }), [i, d]);
    };
  };
  return (r.scopeName = e), [o, al(r, ...t)];
}
function al(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function (a) {
      const s = o.reduce((i, { useScope: d, scopeName: u }) => {
        const m = d(a)[`__scope${u}`];
        return { ...i, ...m };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var gn = "Popper",
  [Ho, Vo] = rl(gn),
  [sl, zo] = Ho(gn),
  Uo = (e) => {
    const { __scopePopper: t, children: n } = e,
      [o, r] = c.useState(null);
    return h.jsx(sl, { scope: t, anchor: o, onAnchorChange: r, children: n });
  };
Uo.displayName = gn;
var Yo = "PopperAnchor",
  Ko = c.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e,
      a = zo(Yo, n),
      s = c.useRef(null),
      i = te(t, s);
    return (
      c.useEffect(() => {
        a.onAnchorChange((o == null ? void 0 : o.current) || s.current);
      }),
      o ? null : h.jsx(q.div, { ...r, ref: i })
    );
  });
Ko.displayName = Yo;
var vn = "PopperContent",
  [il, ll] = Ho(vn),
  Xo = c.forwardRef((e, t) => {
    var N, Y, J, V, B, U;
    const {
        __scopePopper: n,
        side: o = "bottom",
        sideOffset: r = 0,
        align: a = "center",
        alignOffset: s = 0,
        arrowPadding: i = 0,
        avoidCollisions: d = !0,
        collisionBoundary: u = [],
        collisionPadding: p = 0,
        sticky: m = "partial",
        hideWhenDetached: g = !1,
        updatePositionStrategy: l = "optimized",
        onPlaced: v,
        ...f
      } = e,
      y = zo(vn, n),
      [b, w] = c.useState(null),
      x = te(t, (oe) => w(oe)),
      [S, E] = c.useState(null),
      T = ea(S),
      R = (T == null ? void 0 : T.width) ?? 0,
      O = (T == null ? void 0 : T.height) ?? 0,
      _ = o + (a !== "center" ? "-" + a : ""),
      $ =
        typeof p == "number"
          ? p
          : { top: 0, right: 0, bottom: 0, left: 0, ...p },
      z = Array.isArray(u) ? u : [u],
      L = z.length > 0,
      F = { padding: $, boundary: z.filter(dl), altBoundary: L },
      {
        refs: k,
        floatingStyles: G,
        placement: D,
        isPositioned: M,
        middlewareData: A,
      } = Ki({
        strategy: "fixed",
        placement: _,
        whileElementsMounted: (...oe) =>
          $i(...oe, { animationFrame: l === "always" }),
        elements: { reference: y.anchor },
        middleware: [
          Gi({ mainAxis: r + O, alignmentAxis: s }),
          d &&
            qi({
              mainAxis: !0,
              crossAxis: !1,
              limiter: m === "partial" ? Zi() : void 0,
              ...F,
            }),
          d && Qi({ ...F }),
          Ji({
            ...F,
            apply: ({
              elements: oe,
              rects: ce,
              availableWidth: Se,
              availableHeight: Me,
            }) => {
              const { width: Re, height: Fe } = ce.reference,
                ke = oe.floating.style;
              ke.setProperty("--radix-popper-available-width", `${Se}px`),
                ke.setProperty("--radix-popper-available-height", `${Me}px`),
                ke.setProperty("--radix-popper-anchor-width", `${Re}px`),
                ke.setProperty("--radix-popper-anchor-height", `${Fe}px`);
            },
          }),
          S && tl({ element: S, padding: i }),
          ul({ arrowWidth: R, arrowHeight: O }),
          g && el({ strategy: "referenceHidden", ...F }),
        ],
      }),
      [P, K] = Zo(D),
      ae = _e(v);
    pe(() => {
      M && (ae == null || ae());
    }, [M, ae]);
    const W = (N = A.arrow) == null ? void 0 : N.x,
      j = (Y = A.arrow) == null ? void 0 : Y.y,
      H = ((J = A.arrow) == null ? void 0 : J.centerOffset) !== 0,
      [ee, re] = c.useState();
    return (
      pe(() => {
        b && re(window.getComputedStyle(b).zIndex);
      }, [b]),
      h.jsx("div", {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: M ? G.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ee,
          "--radix-popper-transform-origin": [
            (V = A.transformOrigin) == null ? void 0 : V.x,
            (B = A.transformOrigin) == null ? void 0 : B.y,
          ].join(" "),
          ...(((U = A.hide) == null ? void 0 : U.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: h.jsx(il, {
          scope: n,
          placedSide: P,
          onArrowChange: E,
          arrowX: W,
          arrowY: j,
          shouldHideArrow: H,
          children: h.jsx(q.div, {
            "data-side": P,
            "data-align": K,
            ...f,
            ref: x,
            style: { ...f.style, animation: M ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Xo.displayName = vn;
var Go = "PopperArrow",
  cl = { top: "bottom", right: "left", bottom: "top", left: "right" },
  qo = c.forwardRef(function (t, n) {
    const { __scopePopper: o, ...r } = t,
      a = ll(Go, o),
      s = cl[a.placedSide];
    return h.jsx("span", {
      ref: a.onArrowChange,
      style: {
        position: "absolute",
        left: a.arrowX,
        top: a.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[a.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[a.placedSide],
        visibility: a.shouldHideArrow ? "hidden" : void 0,
      },
      children: h.jsx(ol, {
        ...r,
        ref: n,
        style: { ...r.style, display: "block" },
      }),
    });
  });
qo.displayName = Go;
function dl(e) {
  return e !== null;
}
var ul = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, b, w;
    const { placement: n, rects: o, middlewareData: r } = t,
      s = ((y = r.arrow) == null ? void 0 : y.centerOffset) !== 0,
      i = s ? 0 : e.arrowWidth,
      d = s ? 0 : e.arrowHeight,
      [u, p] = Zo(n),
      m = { start: "0%", center: "50%", end: "100%" }[p],
      g = (((b = r.arrow) == null ? void 0 : b.x) ?? 0) + i / 2,
      l = (((w = r.arrow) == null ? void 0 : w.y) ?? 0) + d / 2;
    let v = "",
      f = "";
    return (
      u === "bottom"
        ? ((v = s ? m : `${g}px`), (f = `${-d}px`))
        : u === "top"
        ? ((v = s ? m : `${g}px`), (f = `${o.floating.height + d}px`))
        : u === "right"
        ? ((v = `${-d}px`), (f = s ? m : `${l}px`))
        : u === "left" &&
          ((v = `${o.floating.width + d}px`), (f = s ? m : `${l}px`)),
      { data: { x: v, y: f } }
    );
  },
});
function Zo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var fl = Uo,
  pl = Ko,
  ml = Xo,
  hl = qo,
  gl = "VisuallyHidden",
  Qo = c.forwardRef((e, t) =>
    h.jsx(q.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
Qo.displayName = gl;
var vl = [" ", "Enter", "ArrowUp", "ArrowDown"],
  yl = [" ", "Enter"],
  ot = "Select",
  [Rt, Nt, wl] = ta(ot),
  [Qe, tc] = Kn(ot, [wl, Vo]),
  Pt = Vo(),
  [xl, De] = Qe(ot),
  [bl, Sl] = Qe(ot),
  Jo = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: a,
        value: s,
        defaultValue: i,
        onValueChange: d,
        dir: u,
        name: p,
        autoComplete: m,
        disabled: g,
        required: l,
        form: v,
      } = e,
      f = Pt(t),
      [y, b] = c.useState(null),
      [w, x] = c.useState(null),
      [S, E] = c.useState(!1),
      T = oa(u),
      [R = !1, O] = Ft({ prop: o, defaultProp: r, onChange: a }),
      [_, $] = Ft({ prop: s, defaultProp: i, onChange: d }),
      z = c.useRef(null),
      L = y ? v || !!y.closest("form") : !0,
      [F, k] = c.useState(new Set()),
      G = Array.from(F)
        .map((D) => D.props.value)
        .join(";");
    return h.jsx(fl, {
      ...f,
      children: h.jsxs(xl, {
        required: l,
        scope: t,
        trigger: y,
        onTriggerChange: b,
        valueNode: w,
        onValueNodeChange: x,
        valueNodeHasChildren: S,
        onValueNodeHasChildrenChange: E,
        contentId: Ye(),
        value: _,
        onValueChange: $,
        open: R,
        onOpenChange: O,
        dir: T,
        triggerPointerDownPosRef: z,
        disabled: g,
        children: [
          h.jsx(Rt.Provider, {
            scope: t,
            children: h.jsx(bl, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: c.useCallback((D) => {
                k((M) => new Set(M).add(D));
              }, []),
              onNativeOptionRemove: c.useCallback((D) => {
                k((M) => {
                  const A = new Set(M);
                  return A.delete(D), A;
                });
              }, []),
              children: n,
            }),
          }),
          L
            ? h.jsxs(
                Cr,
                {
                  "aria-hidden": !0,
                  required: l,
                  tabIndex: -1,
                  name: p,
                  autoComplete: m,
                  value: _,
                  onChange: (D) => $(D.target.value),
                  disabled: g,
                  form: v,
                  children: [
                    _ === void 0 ? h.jsx("option", { value: "" }) : null,
                    Array.from(F),
                  ],
                },
                G
              )
            : null,
        ],
      }),
    });
  };
Jo.displayName = ot;
var er = "SelectTrigger",
  tr = c.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e,
      a = Pt(n),
      s = De(er, n),
      i = s.disabled || o,
      d = te(t, s.onTriggerChange),
      u = Nt(n),
      p = c.useRef("touch"),
      [m, g, l] = Rr((f) => {
        const y = u().filter((x) => !x.disabled),
          b = y.find((x) => x.value === s.value),
          w = Nr(y, f, b);
        w !== void 0 && s.onValueChange(w.value);
      }),
      v = (f) => {
        i || (s.onOpenChange(!0), l()),
          f &&
            (s.triggerPointerDownPosRef.current = {
              x: Math.round(f.pageX),
              y: Math.round(f.pageY),
            });
      };
    return h.jsx(pl, {
      asChild: !0,
      ...a,
      children: h.jsx(q.button, {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Er(s.value) ? "" : void 0,
        ...r,
        ref: d,
        onClick: Z(r.onClick, (f) => {
          f.currentTarget.focus(), p.current !== "mouse" && v(f);
        }),
        onPointerDown: Z(r.onPointerDown, (f) => {
          p.current = f.pointerType;
          const y = f.target;
          y.hasPointerCapture(f.pointerId) &&
            y.releasePointerCapture(f.pointerId),
            f.button === 0 &&
              f.ctrlKey === !1 &&
              f.pointerType === "mouse" &&
              (v(f), f.preventDefault());
        }),
        onKeyDown: Z(r.onKeyDown, (f) => {
          const y = m.current !== "";
          !(f.ctrlKey || f.altKey || f.metaKey) &&
            f.key.length === 1 &&
            g(f.key),
            !(y && f.key === " ") &&
              vl.includes(f.key) &&
              (v(), f.preventDefault());
        }),
      }),
    });
  });
tr.displayName = er;
var nr = "SelectValue",
  or = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: o,
        style: r,
        children: a,
        placeholder: s = "",
        ...i
      } = e,
      d = De(nr, n),
      { onValueNodeHasChildrenChange: u } = d,
      p = a !== void 0,
      m = te(t, d.onValueNodeChange);
    return (
      pe(() => {
        u(p);
      }, [u, p]),
      h.jsx(q.span, {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: Er(d.value) ? h.jsx(h.Fragment, { children: s }) : a,
      })
    );
  });
or.displayName = nr;
var El = "SelectIcon",
  rr = c.forwardRef((e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return h.jsx(q.span, {
      "aria-hidden": !0,
      ...r,
      ref: t,
      children: o || "▼",
    });
  });
rr.displayName = El;
var Cl = "SelectPortal",
  ar = (e) => h.jsx(nn, { asChild: !0, ...e });
ar.displayName = Cl;
var $e = "SelectContent",
  sr = c.forwardRef((e, t) => {
    const n = De($e, e.__scopeSelect),
      [o, r] = c.useState();
    if (
      (pe(() => {
        r(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const a = o;
      return a
        ? Jt.createPortal(
            h.jsx(ir, {
              scope: e.__scopeSelect,
              children: h.jsx(Rt.Slot, {
                scope: e.__scopeSelect,
                children: h.jsx("div", { children: e.children }),
              }),
            }),
            a
          )
        : null;
    }
    return h.jsx(lr, { ...e, ref: t });
  });
sr.displayName = $e;
var fe = 10,
  [ir, Ie] = Qe($e),
  Rl = "SelectContentImpl",
  lr = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: o = "item-aligned",
        onCloseAutoFocus: r,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        side: i,
        sideOffset: d,
        align: u,
        alignOffset: p,
        arrowPadding: m,
        collisionBoundary: g,
        collisionPadding: l,
        sticky: v,
        hideWhenDetached: f,
        avoidCollisions: y,
        ...b
      } = e,
      w = De($e, n),
      [x, S] = c.useState(null),
      [E, T] = c.useState(null),
      R = te(t, (N) => S(N)),
      [O, _] = c.useState(null),
      [$, z] = c.useState(null),
      L = Nt(n),
      [F, k] = c.useState(!1),
      G = c.useRef(!1);
    c.useEffect(() => {
      if (x) return io(x);
    }, [x]),
      Qn();
    const D = c.useCallback(
        (N) => {
          const [Y, ...J] = L().map((U) => U.ref.current),
            [V] = J.slice(-1),
            B = document.activeElement;
          for (const U of N)
            if (
              U === B ||
              (U == null || U.scrollIntoView({ block: "nearest" }),
              U === Y && E && (E.scrollTop = 0),
              U === V && E && (E.scrollTop = E.scrollHeight),
              U == null || U.focus(),
              document.activeElement !== B)
            )
              return;
        },
        [L, E]
      ),
      M = c.useCallback(() => D([O, x]), [D, O, x]);
    c.useEffect(() => {
      F && M();
    }, [F, M]);
    const { onOpenChange: A, triggerPointerDownPosRef: P } = w;
    c.useEffect(() => {
      if (x) {
        let N = { x: 0, y: 0 };
        const Y = (V) => {
            var B, U;
            N = {
              x: Math.abs(
                Math.round(V.pageX) -
                  (((B = P.current) == null ? void 0 : B.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(V.pageY) -
                  (((U = P.current) == null ? void 0 : U.y) ?? 0)
              ),
            };
          },
          J = (V) => {
            N.x <= 10 && N.y <= 10
              ? V.preventDefault()
              : x.contains(V.target) || A(!1),
              document.removeEventListener("pointermove", Y),
              (P.current = null);
          };
        return (
          P.current !== null &&
            (document.addEventListener("pointermove", Y),
            document.addEventListener("pointerup", J, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", Y),
              document.removeEventListener("pointerup", J, { capture: !0 });
          }
        );
      }
    }, [x, A, P]),
      c.useEffect(() => {
        const N = () => A(!1);
        return (
          window.addEventListener("blur", N),
          window.addEventListener("resize", N),
          () => {
            window.removeEventListener("blur", N),
              window.removeEventListener("resize", N);
          }
        );
      }, [A]);
    const [K, ae] = Rr((N) => {
        const Y = L().filter((B) => !B.disabled),
          J = Y.find((B) => B.ref.current === document.activeElement),
          V = Nr(Y, N, J);
        V && setTimeout(() => V.ref.current.focus());
      }),
      W = c.useCallback(
        (N, Y, J) => {
          const V = !G.current && !J;
          ((w.value !== void 0 && w.value === Y) || V) &&
            (_(N), V && (G.current = !0));
        },
        [w.value]
      ),
      j = c.useCallback(() => (x == null ? void 0 : x.focus()), [x]),
      H = c.useCallback(
        (N, Y, J) => {
          const V = !G.current && !J;
          ((w.value !== void 0 && w.value === Y) || V) && z(N);
        },
        [w.value]
      ),
      ee = o === "popper" ? Kt : cr,
      re =
        ee === Kt
          ? {
              side: i,
              sideOffset: d,
              align: u,
              alignOffset: p,
              arrowPadding: m,
              collisionBoundary: g,
              collisionPadding: l,
              sticky: v,
              hideWhenDetached: f,
              avoidCollisions: y,
            }
          : {};
    return h.jsx(ir, {
      scope: n,
      content: x,
      viewport: E,
      onViewportChange: T,
      itemRefCallback: W,
      selectedItem: O,
      onItemLeave: j,
      itemTextRefCallback: H,
      focusSelectedItem: M,
      selectedItemText: $,
      position: o,
      isPositioned: F,
      searchRef: K,
      children: h.jsx(on, {
        as: Xn,
        allowPinchZoom: !0,
        children: h.jsx(tn, {
          asChild: !0,
          trapped: w.open,
          onMountAutoFocus: (N) => {
            N.preventDefault();
          },
          onUnmountAutoFocus: Z(r, (N) => {
            var Y;
            (Y = w.trigger) == null || Y.focus({ preventScroll: !0 }),
              N.preventDefault();
          }),
          children: h.jsx(en, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: (N) => N.preventDefault(),
            onDismiss: () => w.onOpenChange(!1),
            children: h.jsx(ee, {
              role: "listbox",
              id: w.contentId,
              "data-state": w.open ? "open" : "closed",
              dir: w.dir,
              onContextMenu: (N) => N.preventDefault(),
              ...b,
              ...re,
              onPlaced: () => k(!0),
              ref: R,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...b.style,
              },
              onKeyDown: Z(b.onKeyDown, (N) => {
                const Y = N.ctrlKey || N.altKey || N.metaKey;
                if (
                  (N.key === "Tab" && N.preventDefault(),
                  !Y && N.key.length === 1 && ae(N.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(N.key))
                ) {
                  let V = L()
                    .filter((B) => !B.disabled)
                    .map((B) => B.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(N.key) &&
                      (V = V.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(N.key))
                  ) {
                    const B = N.target,
                      U = V.indexOf(B);
                    V = V.slice(U + 1);
                  }
                  setTimeout(() => D(V)), N.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
lr.displayName = Rl;
var Nl = "SelectItemAlignedPosition",
  cr = c.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: o, ...r } = e,
      a = De($e, n),
      s = Ie($e, n),
      [i, d] = c.useState(null),
      [u, p] = c.useState(null),
      m = te(t, (R) => p(R)),
      g = Nt(n),
      l = c.useRef(!1),
      v = c.useRef(!0),
      {
        viewport: f,
        selectedItem: y,
        selectedItemText: b,
        focusSelectedItem: w,
      } = s,
      x = c.useCallback(() => {
        if (a.trigger && a.valueNode && i && u && f && y && b) {
          const R = a.trigger.getBoundingClientRect(),
            O = u.getBoundingClientRect(),
            _ = a.valueNode.getBoundingClientRect(),
            $ = b.getBoundingClientRect();
          if (a.dir !== "rtl") {
            const B = $.left - O.left,
              U = _.left - B,
              oe = R.left - U,
              ce = R.width + oe,
              Se = Math.max(ce, O.width),
              Me = window.innerWidth - fe,
              Re = Ln(U, [fe, Math.max(fe, Me - Se)]);
            (i.style.minWidth = ce + "px"), (i.style.left = Re + "px");
          } else {
            const B = O.right - $.right,
              U = window.innerWidth - _.right - B,
              oe = window.innerWidth - R.right - U,
              ce = R.width + oe,
              Se = Math.max(ce, O.width),
              Me = window.innerWidth - fe,
              Re = Ln(U, [fe, Math.max(fe, Me - Se)]);
            (i.style.minWidth = ce + "px"), (i.style.right = Re + "px");
          }
          const z = g(),
            L = window.innerHeight - fe * 2,
            F = f.scrollHeight,
            k = window.getComputedStyle(u),
            G = parseInt(k.borderTopWidth, 10),
            D = parseInt(k.paddingTop, 10),
            M = parseInt(k.borderBottomWidth, 10),
            A = parseInt(k.paddingBottom, 10),
            P = G + D + F + A + M,
            K = Math.min(y.offsetHeight * 5, P),
            ae = window.getComputedStyle(f),
            W = parseInt(ae.paddingTop, 10),
            j = parseInt(ae.paddingBottom, 10),
            H = R.top + R.height / 2 - fe,
            ee = L - H,
            re = y.offsetHeight / 2,
            N = y.offsetTop + re,
            Y = G + D + N,
            J = P - Y;
          if (Y <= H) {
            const B = z.length > 0 && y === z[z.length - 1].ref.current;
            i.style.bottom = "0px";
            const U = u.clientHeight - f.offsetTop - f.offsetHeight,
              oe = Math.max(ee, re + (B ? j : 0) + U + M),
              ce = Y + oe;
            i.style.height = ce + "px";
          } else {
            const B = z.length > 0 && y === z[0].ref.current;
            i.style.top = "0px";
            const oe = Math.max(H, G + f.offsetTop + (B ? W : 0) + re) + J;
            (i.style.height = oe + "px"), (f.scrollTop = Y - H + f.offsetTop);
          }
          (i.style.margin = `${fe}px 0`),
            (i.style.minHeight = K + "px"),
            (i.style.maxHeight = L + "px"),
            o == null || o(),
            requestAnimationFrame(() => (l.current = !0));
        }
      }, [g, a.trigger, a.valueNode, i, u, f, y, b, a.dir, o]);
    pe(() => x(), [x]);
    const [S, E] = c.useState();
    pe(() => {
      u && E(window.getComputedStyle(u).zIndex);
    }, [u]);
    const T = c.useCallback(
      (R) => {
        R && v.current === !0 && (x(), w == null || w(), (v.current = !1));
      },
      [x, w]
    );
    return h.jsx(Tl, {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: l,
      onScrollButtonChange: T,
      children: h.jsx("div", {
        ref: d,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: S,
        },
        children: h.jsx(q.div, {
          ...r,
          ref: m,
          style: { boxSizing: "border-box", maxHeight: "100%", ...r.style },
        }),
      }),
    });
  });
cr.displayName = Nl;
var Pl = "SelectPopperPosition",
  Kt = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: o = "start",
        collisionPadding: r = fe,
        ...a
      } = e,
      s = Pt(n);
    return h.jsx(ml, {
      ...s,
      ...a,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Kt.displayName = Pl;
var [Tl, yn] = Qe($e, {}),
  Xt = "SelectViewport",
  dr = c.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e,
      a = Ie(Xt, n),
      s = yn(Xt, n),
      i = te(t, a.onViewportChange),
      d = c.useRef(0);
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: o,
        }),
        h.jsx(Rt.Slot, {
          scope: n,
          children: h.jsx(q.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...r,
            ref: i,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...r.style,
            },
            onScroll: Z(r.onScroll, (u) => {
              const p = u.currentTarget,
                { contentWrapper: m, shouldExpandOnScrollRef: g } = s;
              if (g != null && g.current && m) {
                const l = Math.abs(d.current - p.scrollTop);
                if (l > 0) {
                  const v = window.innerHeight - fe * 2,
                    f = parseFloat(m.style.minHeight),
                    y = parseFloat(m.style.height),
                    b = Math.max(f, y);
                  if (b < v) {
                    const w = b + l,
                      x = Math.min(v, w),
                      S = w - x;
                    (m.style.height = x + "px"),
                      m.style.bottom === "0px" &&
                        ((p.scrollTop = S > 0 ? S : 0),
                        (m.style.justifyContent = "flex-end"));
                  }
                }
              }
              d.current = p.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
dr.displayName = Xt;
var ur = "SelectGroup",
  [Al, Ol] = Qe(ur),
  Dl = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = Ye();
    return h.jsx(Al, {
      scope: n,
      id: r,
      children: h.jsx(q.div, {
        role: "group",
        "aria-labelledby": r,
        ...o,
        ref: t,
      }),
    });
  });
Dl.displayName = ur;
var fr = "SelectLabel",
  pr = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = Ol(fr, n);
    return h.jsx(q.div, { id: r.id, ...o, ref: t });
  });
pr.displayName = fr;
var xt = "SelectItem",
  [Il, mr] = Qe(xt),
  hr = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: o,
        disabled: r = !1,
        textValue: a,
        ...s
      } = e,
      i = De(xt, n),
      d = Ie(xt, n),
      u = i.value === o,
      [p, m] = c.useState(a ?? ""),
      [g, l] = c.useState(!1),
      v = te(t, (w) => {
        var x;
        return (x = d.itemRefCallback) == null ? void 0 : x.call(d, w, o, r);
      }),
      f = Ye(),
      y = c.useRef("touch"),
      b = () => {
        r || (i.onValueChange(o), i.onOpenChange(!1));
      };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return h.jsx(Il, {
      scope: n,
      value: o,
      disabled: r,
      textId: f,
      isSelected: u,
      onItemTextChange: c.useCallback((w) => {
        m((x) => x || ((w == null ? void 0 : w.textContent) ?? "").trim());
      }, []),
      children: h.jsx(Rt.ItemSlot, {
        scope: n,
        value: o,
        disabled: r,
        textValue: p,
        children: h.jsx(q.div, {
          role: "option",
          "aria-labelledby": f,
          "data-highlighted": g ? "" : void 0,
          "aria-selected": u && g,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": r || void 0,
          "data-disabled": r ? "" : void 0,
          tabIndex: r ? void 0 : -1,
          ...s,
          ref: v,
          onFocus: Z(s.onFocus, () => l(!0)),
          onBlur: Z(s.onBlur, () => l(!1)),
          onClick: Z(s.onClick, () => {
            y.current !== "mouse" && b();
          }),
          onPointerUp: Z(s.onPointerUp, () => {
            y.current === "mouse" && b();
          }),
          onPointerDown: Z(s.onPointerDown, (w) => {
            y.current = w.pointerType;
          }),
          onPointerMove: Z(s.onPointerMove, (w) => {
            var x;
            (y.current = w.pointerType),
              r
                ? (x = d.onItemLeave) == null || x.call(d)
                : y.current === "mouse" &&
                  w.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: Z(s.onPointerLeave, (w) => {
            var x;
            w.currentTarget === document.activeElement &&
              ((x = d.onItemLeave) == null || x.call(d));
          }),
          onKeyDown: Z(s.onKeyDown, (w) => {
            var S;
            (((S = d.searchRef) == null ? void 0 : S.current) !== "" &&
              w.key === " ") ||
              (yl.includes(w.key) && b(), w.key === " " && w.preventDefault());
          }),
        }),
      }),
    });
  });
hr.displayName = xt;
var Je = "SelectItemText",
  gr = c.forwardRef((e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...a } = e,
      s = De(Je, n),
      i = Ie(Je, n),
      d = mr(Je, n),
      u = Sl(Je, n),
      [p, m] = c.useState(null),
      g = te(
        t,
        (b) => m(b),
        d.onItemTextChange,
        (b) => {
          var w;
          return (w = i.itemTextRefCallback) == null
            ? void 0
            : w.call(i, b, d.value, d.disabled);
        }
      ),
      l = p == null ? void 0 : p.textContent,
      v = c.useMemo(
        () =>
          h.jsx(
            "option",
            { value: d.value, disabled: d.disabled, children: l },
            d.value
          ),
        [d.disabled, d.value, l]
      ),
      { onNativeOptionAdd: f, onNativeOptionRemove: y } = u;
    return (
      pe(() => (f(v), () => y(v)), [f, y, v]),
      h.jsxs(h.Fragment, {
        children: [
          h.jsx(q.span, { id: d.textId, ...a, ref: g }),
          d.isSelected && s.valueNode && !s.valueNodeHasChildren
            ? Jt.createPortal(a.children, s.valueNode)
            : null,
        ],
      })
    );
  });
gr.displayName = Je;
var vr = "SelectItemIndicator",
  yr = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return mr(vr, n).isSelected
      ? h.jsx(q.span, { "aria-hidden": !0, ...o, ref: t })
      : null;
  });
yr.displayName = vr;
var Gt = "SelectScrollUpButton",
  wr = c.forwardRef((e, t) => {
    const n = Ie(Gt, e.__scopeSelect),
      o = yn(Gt, e.__scopeSelect),
      [r, a] = c.useState(!1),
      s = te(t, o.onScrollButtonChange);
    return (
      pe(() => {
        if (n.viewport && n.isPositioned) {
          let i = function () {
            const u = d.scrollTop > 0;
            a(u);
          };
          const d = n.viewport;
          return (
            i(),
            d.addEventListener("scroll", i),
            () => d.removeEventListener("scroll", i)
          );
        }
      }, [n.viewport, n.isPositioned]),
      r
        ? h.jsx(br, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: d } = n;
              i && d && (i.scrollTop = i.scrollTop - d.offsetHeight);
            },
          })
        : null
    );
  });
wr.displayName = Gt;
var qt = "SelectScrollDownButton",
  xr = c.forwardRef((e, t) => {
    const n = Ie(qt, e.__scopeSelect),
      o = yn(qt, e.__scopeSelect),
      [r, a] = c.useState(!1),
      s = te(t, o.onScrollButtonChange);
    return (
      pe(() => {
        if (n.viewport && n.isPositioned) {
          let i = function () {
            const u = d.scrollHeight - d.clientHeight,
              p = Math.ceil(d.scrollTop) < u;
            a(p);
          };
          const d = n.viewport;
          return (
            i(),
            d.addEventListener("scroll", i),
            () => d.removeEventListener("scroll", i)
          );
        }
      }, [n.viewport, n.isPositioned]),
      r
        ? h.jsx(br, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: d } = n;
              i && d && (i.scrollTop = i.scrollTop + d.offsetHeight);
            },
          })
        : null
    );
  });
xr.displayName = qt;
var br = c.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: o, ...r } = e,
      a = Ie("SelectScrollButton", n),
      s = c.useRef(null),
      i = Nt(n),
      d = c.useCallback(() => {
        s.current !== null &&
          (window.clearInterval(s.current), (s.current = null));
      }, []);
    return (
      c.useEffect(() => () => d(), [d]),
      pe(() => {
        var p;
        const u = i().find((m) => m.ref.current === document.activeElement);
        (p = u == null ? void 0 : u.ref.current) == null ||
          p.scrollIntoView({ block: "nearest" });
      }, [i]),
      h.jsx(q.div, {
        "aria-hidden": !0,
        ...r,
        ref: t,
        style: { flexShrink: 0, ...r.style },
        onPointerDown: Z(r.onPointerDown, () => {
          s.current === null && (s.current = window.setInterval(o, 50));
        }),
        onPointerMove: Z(r.onPointerMove, () => {
          var u;
          (u = a.onItemLeave) == null || u.call(a),
            s.current === null && (s.current = window.setInterval(o, 50));
        }),
        onPointerLeave: Z(r.onPointerLeave, () => {
          d();
        }),
      })
    );
  }),
  Ml = "SelectSeparator",
  Sr = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return h.jsx(q.div, { "aria-hidden": !0, ...o, ref: t });
  });
Sr.displayName = Ml;
var Zt = "SelectArrow",
  kl = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = Pt(n),
      a = De(Zt, n),
      s = Ie(Zt, n);
    return a.open && s.position === "popper"
      ? h.jsx(hl, { ...r, ...o, ref: t })
      : null;
  });
kl.displayName = Zt;
function Er(e) {
  return e === "" || e === void 0;
}
var Cr = c.forwardRef((e, t) => {
  const { value: n, ...o } = e,
    r = c.useRef(null),
    a = te(t, r),
    s = na(n);
  return (
    c.useEffect(() => {
      const i = r.current,
        d = window.HTMLSelectElement.prototype,
        p = Object.getOwnPropertyDescriptor(d, "value").set;
      if (s !== n && p) {
        const m = new Event("change", { bubbles: !0 });
        p.call(i, n), i.dispatchEvent(m);
      }
    }, [s, n]),
    h.jsx(Qo, {
      asChild: !0,
      children: h.jsx("select", { ...o, ref: a, defaultValue: n }),
    })
  );
});
Cr.displayName = "BubbleSelect";
function Rr(e) {
  const t = _e(e),
    n = c.useRef(""),
    o = c.useRef(0),
    r = c.useCallback(
      (s) => {
        const i = n.current + s;
        t(i),
          (function d(u) {
            (n.current = u),
              window.clearTimeout(o.current),
              u !== "" && (o.current = window.setTimeout(() => d(""), 1e3));
          })(i);
      },
      [t]
    ),
    a = c.useCallback(() => {
      (n.current = ""), window.clearTimeout(o.current);
    }, []);
  return c.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, a];
}
function Nr(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    a = n ? e.indexOf(n) : -1;
  let s = jl(e, Math.max(a, 0));
  r.length === 1 && (s = s.filter((u) => u !== n));
  const d = s.find((u) =>
    u.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return d !== n ? d : void 0;
}
function jl(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var _l = Jo,
  Pr = tr,
  Ll = or,
  Bl = rr,
  $l = ar,
  Tr = sr,
  Fl = dr,
  Ar = pr,
  Or = hr,
  Wl = gr,
  Hl = yr,
  Dr = wr,
  Ir = xr,
  Mr = Sr;
const Vl = _l,
  zl = Ll,
  kr = c.forwardRef(({ className: e, children: t, ...n }, o) =>
    h.jsxs(Pr, {
      ref: o,
      className: ne(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e
      ),
      ...n,
      children: [
        t,
        h.jsx(Bl, {
          asChild: !0,
          children: h.jsx(ra, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
kr.displayName = Pr.displayName;
const jr = c.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Dr, {
    ref: n,
    className: ne("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: h.jsx(aa, {}),
  })
);
jr.displayName = Dr.displayName;
const _r = c.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Ir, {
    ref: n,
    className: ne("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: h.jsx(sa, {}),
  })
);
_r.displayName = Ir.displayName;
const Lr = c.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...o }, r) =>
    h.jsx($l, {
      children: h.jsxs(Tr, {
        ref: r,
        className: ne(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e
        ),
        position: n,
        ...o,
        children: [
          h.jsx(jr, {}),
          h.jsx(Fl, {
            className: ne(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          h.jsx(_r, {}),
        ],
      }),
    })
);
Lr.displayName = Tr.displayName;
const Ul = c.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Ar, {
    ref: n,
    className: ne("px-2 py-1.5 text-sm font-semibold", e),
    ...t,
  })
);
Ul.displayName = Ar.displayName;
const Br = c.forwardRef(({ className: e, children: t, ...n }, o) =>
  h.jsxs(Or, {
    ref: o,
    className: ne(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      h.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: h.jsx(Hl, { children: h.jsx(ia, { className: "h-4 w-4" }) }),
      }),
      h.jsx(Wl, { children: t }),
    ],
  })
);
Br.displayName = Or.displayName;
const Yl = c.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Mr, { ref: n, className: ne("-mx-1 my-1 h-px bg-muted", e), ...t })
);
Yl.displayName = Mr.displayName;
const Kl = ({ label: e, description: t, children: n }) =>
  h.jsxs("div", {
    className:
      "grid grid-cols-[1fr_auto] gap-x-4 border-b border-[#d3d3d3] py-6 items-center",
    children: [
      h.jsxs("div", {
        children: [
          h.jsx("label", {
            className: "block text-base font-bold text-[#323232] pb-1",
            children: e,
          }),
          t && h.jsx("p", { className: "text-sm text-[#505050]", children: t }),
        ],
      }),
      h.jsx("div", { children: n }),
    ],
  });
function nc({
  label: e,
  description: t,
  options: n,
  onChange: o,
  defaultValue: r,
}) {
  const a = n.reduce((s, i) => ((s[i.toString()] = i), s), {});
  return h.jsx(Kl, {
    label: e,
    description: t,
    children: h.jsxs(Vl, {
      onValueChange: (s) => {
        const i = a[s];
        i !== void 0 && o(i);
      },
      defaultValue: r == null ? void 0 : r.toString(),
      children: [
        h.jsx(kr, {
          className: "capitalize",
          children: h.jsx(zl, { placeholder: "Select an option" }),
        }),
        h.jsx(Lr, {
          children: n.map((s, i) =>
            h.jsx(
              Br,
              { value: s.toString(), className: "capitalize", children: s },
              i
            )
          ),
        }),
      ],
    }),
  });
}
const $r = c.forwardRef(({ className: e, ...t }, n) =>
  h.jsx("textarea", {
    className: ne(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
$r.displayName = "Textarea";
const oc = ({ label: e, description: t, errorMessage: n, ...o }) =>
  h.jsxs("div", {
    className: "grid gap-x-4 border-b border-[#d3d3d3] py-6 items-center",
    children: [
      h.jsxs("div", {
        children: [
          h.jsx("label", {
            className: "block text-base font-bold text-[#323232] pb-1",
            children: e,
          }),
          t && h.jsx("p", { className: "text-sm text-[#505050]", children: t }),
        ],
      }),
      h.jsxs("div", {
        children: [
          h.jsx($r, {
            ...o,
            rows: 4,
            maxLength: 150,
            className:
              "w-full mt-2 px-4 text-sm border border-[#d3d3d3] rounded-md focus:outline-none focus:border-[#323232] focus:ring focus:ring-opacity-50 focus:ring-[#323232]",
          }),
          n &&
            h.jsx("p", { className: "text-sm text-red-500 mt-1", children: n }),
        ],
      }),
    ],
  });
export {
  pl as A,
  pt as B,
  No as C,
  Jl as D,
  ft as E,
  tn as F,
  no as G,
  Qa as H,
  ti as I,
  xs as J,
  is as K,
  ri as L,
  Vl as M,
  kr as N,
  Ro as O,
  Ks as P,
  zl as Q,
  Us as R,
  nc as S,
  oc as T,
  Lr as U,
  Br as V,
  Ql as W,
  $r as X,
  Jn as _,
  ec as a,
  qs as b,
  Zs as c,
  Js as d,
  ei as e,
  Qs as f,
  ql as g,
  Kl as h,
  Zl as i,
  Ys as j,
  Po as k,
  To as l,
  Xs as m,
  Vo as n,
  io as o,
  en as p,
  ml as q,
  hl as r,
  on as s,
  Gl as t,
  Qn as u,
  nn as v,
  fl as w,
  ss as x,
  os as y,
  ye as z,
};
