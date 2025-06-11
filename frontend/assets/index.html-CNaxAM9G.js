import { I as Re, m as _e } from "./manifest-D274No9N.js";
import {
  c as Q,
  r as l,
  j as e,
  B as S,
  R as Pe,
  a1 as Ee,
  f as D,
  o as _,
  q as Z,
  P as I,
  g as $,
  s as Le,
  u as B,
  W as Oe,
  m as Te,
  d as y,
  n as Me,
  e as k,
  a0 as De,
  G as $e,
  H as Be,
  a as Ge,
} from "./createLucideIcon-Ck8SqCQ8.js";
import {
  l as ee,
  C as A,
  u as ze,
  e as He,
  n as Ue,
  o as Fe,
  b as Ve,
  T as X,
} from "./grading-BF2zApe_.js";
import { i as Ke } from "./actions-DCwID940.js";
import "./GradingRepository-DZXIIiP0.js";
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qe = Q("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const We = Q("LoaderCircle", [
    ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
  ]),
  Je = () => {
    const [t, s] = l.useState(!1),
      n = () => {
        chrome.runtime.openOptionsPage();
      },
      o = async () => {
        try {
          s(!0), await chrome.runtime.sendMessage({ type: ee });
        } catch (r) {
          console.error("Error refreshing data:", r);
        } finally {
          s(!1);
        }
      };
    return e.jsxs("header", {
      className:
        "flex items-center justify-between p-4 bg-white border-b border-zinc-200 sticky top-0 z-10",
      children: [
        e.jsxs("div", {
          className: "flex items-center",
          children: [
            e.jsx("img", { src: Re, alt: "Icon", className: "w-6 h-6 mr-2" }),
            e.jsx("span", {
              className: "text-lg font-bold text-gray-800",
              children: _e.name,
            }),
          ],
        }),
        e.jsxs("div", {
          className: "gap-1",
          children: [
            e.jsx(S, {
              onClick: o,
              "aria-label": "Refresh",
              variant: "ghost",
              size: "icon",
              className: "size-8",
              disabled: t,
              children: e.jsx(Pe, {
                className: "size-3 animate-spin",
                style: { animationPlayState: t ? "running" : "paused" },
              }),
            }),
            e.jsx(S, {
              onClick: n,
              "aria-label": "Settings",
              variant: "ghost",
              size: "icon",
              className: "size-8",
              children: e.jsx(Ee, { className: "size-3" }),
            }),
          ],
        }),
      ],
    });
  };
var G = "Collapsible",
  [Xe, te] = D(G),
  [Ye, z] = Xe(G),
  ne = l.forwardRef((t, s) => {
    const {
        __scopeCollapsible: n,
        open: o,
        defaultOpen: r,
        disabled: a,
        onOpenChange: c,
        ...d
      } = t,
      [p = !1, f] = _({ prop: o, defaultProp: r, onChange: c });
    return e.jsx(Ye, {
      scope: n,
      disabled: a,
      contentId: Z(),
      open: p,
      onOpenToggle: l.useCallback(() => f((h) => !h), [f]),
      children: e.jsx(I.div, {
        "data-state": U(p),
        "data-disabled": a ? "" : void 0,
        ...d,
        ref: s,
      }),
    });
  });
ne.displayName = G;
var se = "CollapsibleTrigger",
  oe = l.forwardRef((t, s) => {
    const { __scopeCollapsible: n, ...o } = t,
      r = z(se, n);
    return e.jsx(I.button, {
      type: "button",
      "aria-controls": r.contentId,
      "aria-expanded": r.open || !1,
      "data-state": U(r.open),
      "data-disabled": r.disabled ? "" : void 0,
      disabled: r.disabled,
      ...o,
      ref: s,
      onClick: $(t.onClick, r.onOpenToggle),
    });
  });
oe.displayName = se;
var H = "CollapsibleContent",
  re = l.forwardRef((t, s) => {
    const { forceMount: n, ...o } = t,
      r = z(H, t.__scopeCollapsible);
    return e.jsx(Le, {
      present: n || r.open,
      children: ({ present: a }) => e.jsx(Qe, { ...o, ref: s, present: a }),
    });
  });
re.displayName = H;
var Qe = l.forwardRef((t, s) => {
  const { __scopeCollapsible: n, present: o, children: r, ...a } = t,
    c = z(H, n),
    [d, p] = l.useState(o),
    f = l.useRef(null),
    h = B(s, f),
    m = l.useRef(0),
    g = m.current,
    x = l.useRef(0),
    N = x.current,
    C = c.open || d,
    j = l.useRef(C),
    u = l.useRef();
  return (
    l.useEffect(() => {
      const i = requestAnimationFrame(() => (j.current = !1));
      return () => cancelAnimationFrame(i);
    }, []),
    Oe(() => {
      const i = f.current;
      if (i) {
        (u.current = u.current || {
          transitionDuration: i.style.transitionDuration,
          animationName: i.style.animationName,
        }),
          (i.style.transitionDuration = "0s"),
          (i.style.animationName = "none");
        const b = i.getBoundingClientRect();
        (m.current = b.height),
          (x.current = b.width),
          j.current ||
            ((i.style.transitionDuration = u.current.transitionDuration),
            (i.style.animationName = u.current.animationName)),
          p(o);
      }
    }, [c.open, o]),
    e.jsx(I.div, {
      "data-state": U(c.open),
      "data-disabled": c.disabled ? "" : void 0,
      id: c.contentId,
      hidden: !C,
      ...a,
      ref: h,
      style: {
        "--radix-collapsible-content-height": g ? `${g}px` : void 0,
        "--radix-collapsible-content-width": N ? `${N}px` : void 0,
        ...t.style,
      },
      children: C && r,
    })
  );
});
function U(t) {
  return t ? "open" : "closed";
}
var Ze = ne,
  et = oe,
  tt = re,
  w = "Accordion",
  nt = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [F, st, ot] = Te(w),
  [P, Rt] = D(w, [ot, te]),
  V = te(),
  ae = y.forwardRef((t, s) => {
    const { type: n, ...o } = t,
      r = o,
      a = o;
    return e.jsx(F.Provider, {
      scope: t.__scopeAccordion,
      children:
        n === "multiple"
          ? e.jsx(it, { ...a, ref: s })
          : e.jsx(ct, { ...r, ref: s }),
    });
  });
ae.displayName = w;
var [ce, rt] = P(w),
  [ie, at] = P(w, { collapsible: !1 }),
  ct = y.forwardRef((t, s) => {
    const {
        value: n,
        defaultValue: o,
        onValueChange: r = () => {},
        collapsible: a = !1,
        ...c
      } = t,
      [d, p] = _({ prop: n, defaultProp: o, onChange: r });
    return e.jsx(ce, {
      scope: t.__scopeAccordion,
      value: d ? [d] : [],
      onItemOpen: p,
      onItemClose: y.useCallback(() => a && p(""), [a, p]),
      children: e.jsx(ie, {
        scope: t.__scopeAccordion,
        collapsible: a,
        children: e.jsx(le, { ...c, ref: s }),
      }),
    });
  }),
  it = y.forwardRef((t, s) => {
    const { value: n, defaultValue: o, onValueChange: r = () => {}, ...a } = t,
      [c = [], d] = _({ prop: n, defaultProp: o, onChange: r }),
      p = y.useCallback((h) => d((m = []) => [...m, h]), [d]),
      f = y.useCallback((h) => d((m = []) => m.filter((g) => g !== h)), [d]);
    return e.jsx(ce, {
      scope: t.__scopeAccordion,
      value: c,
      onItemOpen: p,
      onItemClose: f,
      children: e.jsx(ie, {
        scope: t.__scopeAccordion,
        collapsible: !0,
        children: e.jsx(le, { ...a, ref: s }),
      }),
    });
  }),
  [lt, E] = P(w),
  le = y.forwardRef((t, s) => {
    const {
        __scopeAccordion: n,
        disabled: o,
        dir: r,
        orientation: a = "vertical",
        ...c
      } = t,
      d = y.useRef(null),
      p = B(d, s),
      f = st(n),
      m = Me(r) === "ltr",
      g = $(t.onKeyDown, (x) => {
        var W;
        if (!nt.includes(x.key)) return;
        const N = x.target,
          C = f().filter((T) => {
            var J;
            return !((J = T.ref.current) != null && J.disabled);
          }),
          j = C.findIndex((T) => T.ref.current === N),
          u = C.length;
        if (j === -1) return;
        x.preventDefault();
        let i = j;
        const b = 0,
          v = u - 1,
          L = () => {
            (i = j + 1), i > v && (i = b);
          },
          O = () => {
            (i = j - 1), i < b && (i = v);
          };
        switch (x.key) {
          case "Home":
            i = b;
            break;
          case "End":
            i = v;
            break;
          case "ArrowRight":
            a === "horizontal" && (m ? L() : O());
            break;
          case "ArrowDown":
            a === "vertical" && L();
            break;
          case "ArrowLeft":
            a === "horizontal" && (m ? O() : L());
            break;
          case "ArrowUp":
            a === "vertical" && O();
            break;
        }
        const ke = i % u;
        (W = C[ke].ref.current) == null || W.focus();
      });
    return e.jsx(lt, {
      scope: n,
      disabled: o,
      direction: r,
      orientation: a,
      children: e.jsx(F.Slot, {
        scope: n,
        children: e.jsx(I.div, {
          ...c,
          "data-orientation": a,
          ref: p,
          onKeyDown: o ? void 0 : g,
        }),
      }),
    });
  }),
  R = "AccordionItem",
  [dt, K] = P(R),
  de = y.forwardRef((t, s) => {
    const { __scopeAccordion: n, value: o, ...r } = t,
      a = E(R, n),
      c = rt(R, n),
      d = V(n),
      p = Z(),
      f = (o && c.value.includes(o)) || !1,
      h = a.disabled || t.disabled;
    return e.jsx(dt, {
      scope: n,
      open: f,
      disabled: h,
      triggerId: p,
      children: e.jsx(Ze, {
        "data-orientation": a.orientation,
        "data-state": ge(f),
        ...d,
        ...r,
        ref: s,
        disabled: h,
        open: f,
        onOpenChange: (m) => {
          m ? c.onItemOpen(o) : c.onItemClose(o);
        },
      }),
    });
  });
de.displayName = R;
var ue = "AccordionHeader",
  pe = y.forwardRef((t, s) => {
    const { __scopeAccordion: n, ...o } = t,
      r = E(w, n),
      a = K(ue, n);
    return e.jsx(I.h3, {
      "data-orientation": r.orientation,
      "data-state": ge(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      ...o,
      ref: s,
    });
  });
pe.displayName = ue;
var M = "AccordionTrigger",
  me = y.forwardRef((t, s) => {
    const { __scopeAccordion: n, ...o } = t,
      r = E(w, n),
      a = K(M, n),
      c = at(M, n),
      d = V(n);
    return e.jsx(F.ItemSlot, {
      scope: n,
      children: e.jsx(et, {
        "aria-disabled": (a.open && !c.collapsible) || void 0,
        "data-orientation": r.orientation,
        id: a.triggerId,
        ...d,
        ...o,
        ref: s,
      }),
    });
  });
me.displayName = M;
var fe = "AccordionContent",
  he = y.forwardRef((t, s) => {
    const { __scopeAccordion: n, ...o } = t,
      r = E(w, n),
      a = K(fe, n),
      c = V(n);
    return e.jsx(tt, {
      role: "region",
      "aria-labelledby": a.triggerId,
      "data-orientation": r.orientation,
      ...c,
      ...o,
      ref: s,
      style: {
        "--radix-accordion-content-height":
          "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width":
          "var(--radix-collapsible-content-width)",
        ...t.style,
      },
    });
  });
he.displayName = fe;
function ge(t) {
  return t ? "open" : "closed";
}
var ut = ae,
  pt = de,
  mt = pe,
  xe = me,
  be = he;
const ft = ut,
  ve = l.forwardRef(({ className: t, ...s }, n) =>
    e.jsx(pt, { ref: n, className: t, ...s })
  );
ve.displayName = "AccordionItem";
const Ce = l.forwardRef(({ className: t, children: s, ...n }, o) =>
  e.jsx(mt, {
    className: "flex",
    children: e.jsxs(xe, {
      ref: o,
      className: k(
        "flex flex-1 items-center gap-2 px-2 py-4 text-sm font-medium transition-all hover:bg-slate-100 [&[data-state=open]>svg]:rotate-180",
        t
      ),
      ...n,
      children: [
        e.jsx(De, {
          className:
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
        }),
        s,
      ],
    }),
  })
);
Ce.displayName = xe.displayName;
const je = l.forwardRef(({ className: t, children: s, ...n }, o) =>
  e.jsx(be, {
    ref: o,
    className:
      "pl-4 overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: e.jsx("div", { className: k("px-2", t), children: s }),
  })
);
je.displayName = be.displayName;
function Y({ course: t, assignment: s, onBack: n }) {
  console.log("**********************************************");
  const [o, r] = l.useState(""),
    [a, c] = l.useState(!1),
    [d, p] = l.useState(!1);
  l.useEffect(() => {
    (async () => {
      const g = await A.getItem("settings");
      if (!g) return;
      const { baseURL: x } = g;
      r(x);
    })();
  }, []);
  const f = l.useCallback(async () => {
      chrome.tabs.create({ url: `${o}/courses/${t.id}/assignments/${s.id}` });
    }, [o, t, s]),
    h = async () => {
      try {
        c(!0);
        console.log("**********************************************");
        const m = await A.getItem(ze);
        if (!m) throw new Error("User settings not found");
        const { submissions: g } = await chrome.runtime.sendMessage({
            type: He,
            payload: { courseId: t.id, assignmentId: s.id },
          }),
          x = {
            course: t,
            assignment: s,
            submissions: g,
            settings: m.evaluation,
          },
          { success: N } = await Ke(x);
        console.log("**********************************************");
        if (!N) throw new Error("Failed to send grading request");
        console.log("**********************************************");
        p(!0);
      } catch (m) {
        console.log("AHHHHHH");
        console.error(m), p(!1);
      } finally {
        c(!1);
      }
    };
  return e.jsxs("div", {
    className: "p-4",
    children: [
      e.jsx("button", {
        onClick: n,
        className: "text-blue-600 hover:underline mb-4",
        children: "← Back",
      }),
      e.jsx("h2", {
        className: "text-xl font-semibold mb-2 hover:underline cursor-pointer",
        onClick: f,
        children: s.name,
      }),
      e.jsx("div", {
        className: "mb-4 text-sm font-medium",
        children: e.jsx(S, {
          variant: "link",
          className: "text-wrap px-0 text-left",
          onClick: () => {
            chrome.tabs.create({ url: `${o}/courses/${t.id}` });
          },
          children: t.name,
        }),
      }),
      e.jsx("div", {
        className: "mb-6 text-sm",
        children: e.jsxs("p", {
          className: "font-medium",
          children: ["Needs Grading: ", s.needs_grading_count],
        }),
      }),
      e.jsx(S, {
        onClick: f,
        className: "w-full my-3",
        variant: "outline",
        children: "View in Canvas",
      }),
      e.jsx(S, {
        onClick: h,
        className: "w-full flex items-center justify-center",
        disabled: a || d,
        children: a
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsx(We, { className: "mr-2 h-4 w-4 animate-spin" }),
                "Autograding...",
              ],
            })
          : d
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsx(qe, { className: "mr-2 h-4 w-4 text-green-500" }),
                "Requested Successfully",
              ],
            })
          : "Autograde",
      }),
    ],
  });
}
function ht() {
  const [t, s] = l.useState([]),
    [n, o] = l.useState(!0),
    [r, a] = l.useState({}),
    [c, d] = l.useState(null),
    p = l.useCallback(async () => {
      o(!0);
      try {
        const [u, i] = await Promise.all([A.getItem(Ue), A.getItem(Fe)]);
        s(u || []), a(i || {});
      } catch (u) {
        console.error("Error fetching data:", u);
      } finally {
        o(!1);
      }
    }, []);
  l.useEffect(() => {
    p();
    const u = (i) => {
      i.type === ee && p();
    };
    return (
      chrome.runtime.onMessage.addListener(u),
      () => chrome.runtime.onMessage.removeListener(u)
    );
  }, [p]);
  const f = (u, i) => {
      d({ course: u, assignment: i });
    },
    h = () => {
      d(null);
    },
    m = l.useMemo(
      () =>
        [...t].sort(
          (u, i) => (i.needs_grading_count || 0) - (u.needs_grading_count || 0)
        ),
      [t]
    );
  if (c)
    return e.jsx(Y, { course: c.course, assignment: c.assignment, onBack: h });
  const g = () =>
      e.jsx("div", {
        className: "flex items-center justify-center h-96",
        children: e.jsx("p", {
          className: "text-gray-500",
          children: "Loading data...",
        }),
      }),
    x = () =>
      e.jsx("div", {
        className: "flex items-center justify-center h-96",
        children: e.jsx("p", {
          className: "text-gray-500",
          children: "No active courses found.",
        }),
      }),
    N = () => {
      if (!c) return null;
      const { course: u, assignment: i } = c;
      return e.jsx(Y, { course: u, assignment: i, onBack: h });
    },
    C = (u, i) => {
      const b = i.filter(
        (v) => v.needs_grading_count && v.needs_grading_count > 0
      );
      return b.length === 0
        ? e.jsx("p", {
            className: "text-gray-500 p-2 text-xs",
            children: "No assignments need grading in this course.",
          })
        : e.jsx("ul", {
            className: "text-xs",
            children: b.map((v) =>
              e.jsx(
                "li",
                {
                  className: "p-2 hover:bg-gray-50 cursor-pointer",
                  onClick: () => f(u, v),
                  children: e.jsxs("p", {
                    children: [
                      v.name,
                      e.jsx("br", {}),
                      e.jsxs("span", {
                        className: "text-gray-500",
                        children: [
                          "(",
                          v.needs_grading_count,
                          " ",
                          v.needs_grading_count === 1
                            ? "ungraded submission"
                            : "ungraded submissions",
                          ")",
                        ],
                      }),
                    ],
                  }),
                },
                v.id
              )
            ),
          });
    },
    j = () =>
      e.jsx("div", {
        className: "overflow-y-auto h-96",
        children: e.jsx(ft, {
          type: "single",
          collapsible: !0,
          children: m.map((u) => {
            const i = r[u.id] || [];
            return e.jsxs(
              ve,
              {
                value: u.id.toString(),
                children: [
                  e.jsx(Ce, {
                    className: "text-left text-xs font-bold",
                    children: e.jsxs("p", {
                      children: [
                        u.name,
                        e.jsx("br", {}),
                        i.length > 0 &&
                          e.jsxs("span", {
                            className: "text-gray-500",
                            children: [
                              "(",
                              i.length,
                              " ",
                              i.length === 1 ? "assignment" : "assignments",
                              ")",
                            ],
                          }),
                      ],
                    }),
                  }),
                  e.jsx(je, { children: C(u, i) }),
                ],
              },
              u.id
            );
          }),
        }),
      });
  return c ? N() : n ? g() : t.length ? j() : x();
}
var q = "Switch",
  [gt, _t] = D(q),
  [xt, bt] = gt(q),
  ye = l.forwardRef((t, s) => {
    const {
        __scopeSwitch: n,
        name: o,
        checked: r,
        defaultChecked: a,
        required: c,
        disabled: d,
        value: p = "on",
        onCheckedChange: f,
        form: h,
        ...m
      } = t,
      [g, x] = l.useState(null),
      N = B(s, (b) => x(b)),
      C = l.useRef(!1),
      j = g ? h || !!g.closest("form") : !0,
      [u = !1, i] = _({ prop: r, defaultProp: a, onChange: f });
    return e.jsxs(xt, {
      scope: n,
      checked: u,
      disabled: d,
      children: [
        e.jsx(I.button, {
          type: "button",
          role: "switch",
          "aria-checked": u,
          "aria-required": c,
          "data-state": Ae(u),
          "data-disabled": d ? "" : void 0,
          disabled: d,
          value: p,
          ...m,
          ref: N,
          onClick: $(t.onClick, (b) => {
            i((v) => !v),
              j &&
                ((C.current = b.isPropagationStopped()),
                C.current || b.stopPropagation());
          }),
        }),
        j &&
          e.jsx(vt, {
            control: g,
            bubbles: !C.current,
            name: o,
            value: p,
            checked: u,
            required: c,
            disabled: d,
            form: h,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
ye.displayName = q;
var Ne = "SwitchThumb",
  we = l.forwardRef((t, s) => {
    const { __scopeSwitch: n, ...o } = t,
      r = bt(Ne, n);
    return e.jsx(I.span, {
      "data-state": Ae(r.checked),
      "data-disabled": r.disabled ? "" : void 0,
      ...o,
      ref: s,
    });
  });
we.displayName = Ne;
var vt = (t) => {
  const { control: s, checked: n, bubbles: o = !0, ...r } = t,
    a = l.useRef(null),
    c = $e(n),
    d = Be(s);
  return (
    l.useEffect(() => {
      const p = a.current,
        f = window.HTMLInputElement.prototype,
        m = Object.getOwnPropertyDescriptor(f, "checked").set;
      if (c !== n && m) {
        const g = new Event("click", { bubbles: o });
        m.call(p, n), p.dispatchEvent(g);
      }
    }, [c, n, o]),
    e.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...r,
      tabIndex: -1,
      ref: a,
      style: {
        ...t.style,
        ...d,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function Ae(t) {
  return t ? "checked" : "unchecked";
}
var Ie = ye,
  Ct = we;
const Se = l.forwardRef(({ className: t, ...s }, n) =>
  e.jsx(Ie, {
    className: k(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      t
    ),
    ...s,
    ref: n,
    children: e.jsx(Ct, {
      className: k(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      ),
    }),
  })
);
Se.displayName = Ie.displayName;
const jt = ({ enableOnSite: t, handleToggle: s }) =>
    e.jsxs("div", {
      className: "flex px-2 py-3 gap-2 items-center border-t border-zinc-200",
      children: [
        e.jsx(Se, { onCheckedChange: s, checked: t }),
        e.jsx("p", {
          className: "text-sm text-[#4b4b4b]",
          children: "Enable on site",
        }),
      ],
    }),
  yt = () => {
    const [t, s] = l.useState(!1),
      [n, o] = l.useState(!1),
      [r, a] = l.useState(!0);
    l.useEffect(() => {
      try {
        A.getItem(Ve).then(() => s(!0)), A.getItem(X).then((d) => d && o(d));
      } catch (d) {
        console.error("Error fetching data:", d);
      } finally {
        a(!1);
      }
    }, []);
    const c = async (d) => {
      await A.setItem(X, d), o(d);
    };
    return r
      ? e.jsx("div", {
          className: "flex items-center justify-center w-72 h-96",
          children: "Loading...",
        })
      : t
      ? e.jsxs("div", {
          className: "w-72",
          children: [
            e.jsx(Je, {}),
            e.jsx(ht, {}),
            e.jsx(jt, { enableOnSite: n, handleToggle: c }),
          ],
        })
      : e.jsxs("div", {
          className: "w-72 p-4",
          children: [
            e.jsx("h1", {
              className: "text-xl font-bold mb-2",
              children: "FeedbackAI",
            }),
            e.jsx("p", {
              className: "text-sm text-gray-700 mb-4",
              children:
                "Please set your API token and base URL in the settings to continue.",
            }),
            e.jsx(S, {
              onClick: () => chrome.runtime.openOptionsPage(),
              children: "Open Settings",
            }),
          ],
        });
  };
function Nt() {
  const t = document.querySelector("#__root");
  if (!t) throw new Error("Can't find Popup root element");
  Ge(t).render(e.jsx(yt, {}));
}
Nt();
