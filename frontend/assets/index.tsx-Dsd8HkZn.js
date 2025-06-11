import {
  c as H,
  r as u,
  j as e,
  B as I,
  R as k,
  a as U,
  b as B,
} from "./createLucideIcon-Ck8SqCQ8.js";
import {
  D as V,
  a as $,
  b as z,
  c as K,
  d as J,
  e as Y,
  S as b,
  T as Q,
  L as W,
  I as X,
  f as Z,
  t as y,
  g as ee,
} from "./Textarea-DcKjW1V4.js";
import {
  C as T,
  u as te,
  O as N,
  a as M,
  T as D,
  G as se,
} from "./grading-BF2zApe_.js";
import { u as ae, i as ne } from "./actions-DCwID940.js";
import { C as re } from "./CanvasService-BNUUX2rn.js";
import "./GradingRepository-DZXIIiP0.js";
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oe = H("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
function ie() {
  const [a, n] = u.useState(!0),
    [s, r] = u.useState(!1),
    [c, m] = u.useState(!1),
    [l, i] = u.useState({
      strictness: "moderate",
      tone: "friendly",
      length: "medium",
      customFeedbackPrompt: "",
    }),
    [g, d] = u.useState();
  u.useEffect(() => {
    (async () => {
      try {
        const t = await T.getItem(te);
        t && t.evaluation && i(t.evaluation);
      } catch (t) {
        console.error("RequestDialog: Failed to load user settings:", t);
      } finally {
        n(!1);
      }
    })();
  }, []);
  const G = async (o) => {
    console.log("**********************************************");
    o.preventDefault(), r(!0);
    let t;
    if (g)
      try {
        t = await ae(g);
      } catch (p) {
        console.error("Error uploading document", p),
          y.error("Error uploading document.", {
            description: "Please try again later.",
          }),
          r(!1),
          m(!1);
        return;
      }
    const j = window.location.pathname.split("/"),
      h = j[2],
      C = j[4],
      f = await re.create(),
      _ = await f.getCourse(h),
      q = await f.getAssignment(h, C),
      v = await f.getSubmissions(h, C);
    try {
      console.log("**********************************************");
      const R = await ne({
          course: _,
          assignment: q,
          submissions: v,
          settings: l,
          documentId: t,
        }),
        { success: O } = R;
      if (!O) throw new Error("Failed to initiate grading request");
      const P = v.length;
      y.success("Grading request submitted successfully!", {
        description: `${P} submission(s) are now being processed.`,
        action: {
          label: "View Status",
          onClick: () => {
            chrome.runtime.sendMessage({ type: N, payload: "#task" });
          },
        },
      });
    } catch (p) {
      console.error("Error during grading request", p),
        y.error("An error occurred while processing your request.", {
          description: "Please try again later.",
        });
    } finally {
      r(!1),
        m(!1),
        d(void 0),
        i({
          strictness: "moderate",
          tone: "friendly",
          length: "medium",
          customFeedbackPrompt: "",
        });
    }
  };
  return a
    ? e.jsx(e.Fragment, {})
    : e.jsxs(V, {
        open: c,
        onOpenChange: m,
        children: [
          e.jsx($, {
            asChild: !0,
            children: e.jsx(I, {
              variant: "outline",
              id: "ai-feedback-button",
              disabled: s,
              className:
                "inline-flex items-center px-[14px] py-[8px] m-[2px] text-[1rem] leading-[22px] bg-[#e11d48] text-white font-semibold rounded-[3px] border-[1px] border-solid border-sky-900 hover:bg-[#be123c] focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: s
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(k, { className: "animate-spin h-5 w-5" }),
                      e.jsx("span", {
                        className: "ml-2",
                        children: "Submitting",
                      }),
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(oe, {}),
                      e.jsx("span", {
                        className: "ml-2",
                        children: "Autograde",
                      }),
                    ],
                  }),
            }),
          }),
          e.jsxs(z, {
            className: "p-4 m-4",
            children: [
              e.jsxs(K, {
                children: [
                  e.jsx(J, { children: "AI Settings" }),
                  e.jsx(Y, {
                    children:
                      "Configure the AI grading settings for this assignment.",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid mx-4",
                children: [
                  e.jsx(b, {
                    label: "Grading Strictness",
                    options: ["loose", "moderate", "strict"],
                    defaultValue: l.strictness,
                    onChange: (o) => {
                      i((t) => ({ ...t, strictness: o }));
                    },
                  }),
                  e.jsx(b, {
                    label: "Feedback Tone",
                    options: ["formal", "friendly", "constructive"],
                    defaultValue: l.tone,
                    onChange: (o) => {
                      i((t) => ({ ...t, tone: o }));
                    },
                  }),
                  e.jsx(b, {
                    label: "Feedback Length",
                    options: ["short", "medium", "detailed"],
                    defaultValue: l.length,
                    onChange: (o) => {
                      i((t) => ({ ...t, length: o }));
                    },
                  }),
                  e.jsx(Q, {
                    label: "Custom Feedback Prompt",
                    defaultValue: l.customFeedbackPrompt,
                    onChange: (o) => {
                      i((t) => ({
                        ...t,
                        customFeedbackPrompt: o.target.value,
                      }));
                    },
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(W, {
                        htmlFor: "file",
                        children:
                          "Resources which may help the AI to grade better (optional)",
                      }),
                      e.jsx(X, {
                        id: "file",
                        type: "file",
                        accept: ".pdf,application/pdf",
                        onChange: (o) => {
                          var t;
                          d((t = o.target.files) == null ? void 0 : t[0]);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(Z, {
                children: e.jsx(I, {
                  type: "submit",
                  onClick: G,
                  className:
                    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                  disabled: s,
                  children: s
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(k, { className: "animate-spin h-5 w-5" }),
                          e.jsx("span", {
                            className: "ml-2",
                            children: "Submitting",
                          }),
                        ],
                      })
                    : "Submit",
                }),
              }),
            ],
          }),
        ],
      });
}
const A = "ai-feedback-button",
  F = "ai-feedback-status",
  x = ".assignment-buttons",
  S = "#sidebar_content",
  ce = async () => {
    const n = window.location.pathname.split("/"),
      s = parseInt(n[4]),
      r = document.createElement("div");
    (r.className =
      "p-4 m-4 bg-blue-100 text-blue-800 hover:cursor-pointer font-semibold text-lg rounded-lg shadow-md flex flex-wrap flex-row items-center justify-center"),
      (r.innerHTML = `
    <h2 class="text-center mb-1">AI Grading Status</h2>
`),
      (r.id = F),
      r.addEventListener("click", () => {
        chrome.runtime.sendMessage({ type: N, payload: "#task" });
      });
    try {
      const i = (
          await chrome.runtime.sendMessage({ type: se, payload: s })
        ).tasks
          .flatMap((d) => d.request.submissions)
          .map((d) => d.id),
        g = new Set(i).size;
      r.innerHTML += `<p class="text-center" style="margin-bottom: 0;">${g} submissions graded</p>`;
    } catch (c) {
      (r.innerHTML +=
        '<p class="text-center" style="margin-bottom: 0;">Error fetching grading status</p>'),
        console.error("Error fetching tasks:", c);
    }
    return r;
  },
  w = async () => {
    const a = document.querySelector(S);
    if (a && !a.querySelector(`#${F}`))
      try {
        const n = await ce();
        a.appendChild(n);
      } catch (n) {
        console.error("Error inserting grading status:", n);
      }
  },
  L = () => {
    const a = document.createElement("div");
    (a.id = "ai-feedback-toasts"),
      U(a).render(e.jsx(ee, { richColors: !0 })),
      document.body.appendChild(a);
  },
  E = () => {
    document.querySelectorAll(x).forEach((n) => {
      if (!n.querySelector(`#${A}`)) {
        const s = document.createElement("div");
        (s.style.display = "inline-flex"),
          (s.style.verticalAlign = "middle"),
          (s.id = A),
          n.insertBefore(s, n.firstChild),
          B.createRoot(s).render(e.jsx(ie, {}));
      }
    });
  };
(async () => {
  const a = window.location.pathname.split("/")[2],
    { isTeacher: n } = await chrome.runtime.sendMessage({
      type: M,
      payload: a,
    });
  (await T.getItem(D)) &&
    n &&
    (document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", async () => {
          E(), L(), await w();
        })
      : (E(), L(), await w()));
})();
const le = new MutationObserver((a) => {
  a.forEach((n) => {
    n.addedNodes.forEach(async (s) => {
      const r = window.location.pathname.split("/")[2],
        { isTeacher: c } = await chrome.runtime.sendMessage({
          type: M,
          payload: r,
        });
      !(await T.getItem(D)) ||
        !c ||
        (s instanceof HTMLElement &&
          ((s.matches(x) || s.querySelector(x)) && E(),
          (s.matches(S) || s.querySelector(S)) && (await w())));
    });
  });
});
le.observe(document.body, { childList: !0, subtree: !0 });
