import { I as fi, m as gi } from "./manifest-D274No9N.js";
import {
  c as Ro,
  j as l,
  d as he,
  r as u,
  e as W,
  S as Eo,
  f as Nn,
  u as ct,
  g as ae,
  h as rd,
  i as pi,
  B as ve,
  k as sd,
  C as od,
  l as ad,
  L as id,
  m as mi,
  n as hi,
  o as ns,
  p as rs,
  P as $e,
  q as Vr,
  s as rn,
  t as vi,
  v as ld,
  w as yi,
  x as ss,
  D as cd,
  A as ba,
  y as Ra,
  z as ud,
  E as dd,
  F as fd,
  G as gd,
  H as pd,
  I as md,
  M as hd,
  $ as vd,
  J as xi,
  K as yd,
  N as xd,
  O as _d,
  Q as wd,
  T as Sd,
  U as Cd,
  V as bd,
  W as _i,
  X as Rd,
  Y as Ed,
  a as Ad,
} from "./createLucideIcon-Ck8SqCQ8.js";
import {
  h as $r,
  I as fr,
  L as wi,
  i as Si,
  j as Td,
  O as Nd,
  W as Id,
  C as kd,
  k as Md,
  l as Pd,
  m as Ci,
  P as Dd,
  R as Fd,
  S as Ts,
  T as $d,
  t as Wt,
  n as os,
  A as Ao,
  o as To,
  u as bi,
  F as Ri,
  p as Ei,
  q as Ai,
  r as Ti,
  s as Ni,
  v as Ii,
  w as ki,
  x as jd,
  _ as Od,
  y as Ld,
  z as vn,
  B as Vd,
  E as Ud,
  G as Gd,
  H as zd,
  J as Hd,
  K as Bd,
  M as Zd,
  N as Wd,
  Q as qd,
  U as Kd,
  V as Yd,
  X as Xd,
  g as Jd,
} from "./Textarea-DcKjW1V4.js";
import {
  C as Rt,
  u as Ur,
  g as mt,
  h as Qd,
  V as No,
  D as ef,
  b as Mi,
  d as tf,
  E as nf,
  f as rf,
  S as sf,
  m as of,
  P as af,
  c as lf,
  j as cf,
} from "./grading-BF2zApe_.js";
import { C as uf } from "./CanvasService-BNUUX2rn.js";
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const df = Ro("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ff = Ro("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr",
    },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gf = Ro("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Ea = ({ label: e, description: t, errorMessage: n, ...r }) =>
    l.jsx($r, {
      label: e,
      description: t,
      children: l.jsxs("div", {
        children: [
          l.jsx(fr, {
            ...r,
            className:
              "w-64 mt-2 px-4 text-sm border border-[#d3d3d3] rounded-md focus:outline-none focus:border-[#323232] focus:ring focus:ring-opacity-50 focus:ring-[#323232]",
          }),
          n &&
            l.jsx("p", { className: "text-sm text-red-500 mt-1", children: n }),
        ],
      }),
    });
var gr = (e) => e.type === "checkbox",
  Yt = (e) => e instanceof Date,
  Le = (e) => e == null;
const Pi = (e) => typeof e == "object";
var Ae = (e) => !Le(e) && !Array.isArray(e) && Pi(e) && !Yt(e),
  Di = (e) =>
    Ae(e) && e.target ? (gr(e.target) ? e.target.checked : e.target.value) : e,
  pf = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  Fi = (e, t) => e.has(pf(t)),
  mf = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Ae(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Io =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Be(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(Io && (e instanceof Blob || e instanceof FileList)) &&
    (n || Ae(e))
  )
    if (((t = n ? [] : {}), !n && !mf(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Be(e[r]));
  else return e;
  return t;
}
var as = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Re = (e) => e === void 0,
  k = (e, t, n) => {
    if (!t || !Ae(e)) return n;
    const r = as(t.split(/[,[\].]+?/)).reduce((s, o) => (Le(s) ? s : s[o]), e);
    return Re(r) || r === e ? (Re(e[t]) ? n : e[t]) : r;
  },
  Je = (e) => typeof e == "boolean",
  ko = (e) => /^\w*$/.test(e),
  $i = (e) => as(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  pe = (e, t, n) => {
    let r = -1;
    const s = ko(t) ? [t] : $i(t),
      o = s.length,
      a = o - 1;
    for (; ++r < o; ) {
      const i = s[r];
      let c = n;
      if (r !== a) {
        const d = e[i];
        c = Ae(d) || Array.isArray(d) ? d : isNaN(+s[r + 1]) ? {} : [];
      }
      if (i === "__proto__") return;
      (e[i] = c), (e = e[i]);
    }
    return e;
  };
const Gr = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  st = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  St = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  ji = he.createContext(null),
  is = () => he.useContext(ji),
  hf = (e) => {
    const { children: t, ...n } = e;
    return he.createElement(ji.Provider, { value: n }, t);
  };
var Oi = (e, t, n, r = !0) => {
    const s = { defaultValues: t._defaultValues };
    for (const o in e)
      Object.defineProperty(s, o, {
        get: () => {
          const a = o;
          return (
            t._proxyFormState[a] !== st.all &&
              (t._proxyFormState[a] = !r || st.all),
            n && (n[a] = !0),
            e[a]
          );
        },
      });
    return s;
  },
  Ze = (e) => Ae(e) && !Object.keys(e).length,
  Li = (e, t, n, r) => {
    n(e);
    const { name: s, ...o } = e;
    return (
      Ze(o) ||
      Object.keys(o).length >= Object.keys(t).length ||
      Object.keys(o).find((a) => t[a] === (!r || st.all))
    );
  },
  Bn = (e) => (Array.isArray(e) ? e : [e]),
  Vi = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    Bn(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Mo(e) {
  const t = he.useRef(e);
  (t.current = e),
    he.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function vf(e) {
  const t = is(),
    { control: n = t.control, disabled: r, name: s, exact: o } = e || {},
    [a, i] = he.useState(n._formState),
    c = he.useRef(!0),
    d = he.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    f = he.useRef(s);
  return (
    (f.current = s),
    Mo({
      disabled: r,
      next: (g) =>
        c.current &&
        Vi(f.current, g.name, o) &&
        Li(g, d.current, n._updateFormState) &&
        i({ ...n._formState, ...g }),
      subject: n._subjects.state,
    }),
    he.useEffect(
      () => (
        (c.current = !0),
        d.current.isValid && n._updateValid(!0),
        () => {
          c.current = !1;
        }
      ),
      [n]
    ),
    Oi(a, n, d.current, !1)
  );
}
var ht = (e) => typeof e == "string",
  Ui = (e, t, n, r, s) =>
    ht(e)
      ? (r && t.watch.add(e), k(n, e, s))
      : Array.isArray(e)
      ? e.map((o) => (r && t.watch.add(o), k(n, o)))
      : (r && (t.watchAll = !0), n);
function yf(e) {
  const t = is(),
    {
      control: n = t.control,
      name: r,
      defaultValue: s,
      disabled: o,
      exact: a,
    } = e || {},
    i = he.useRef(r);
  (i.current = r),
    Mo({
      disabled: o,
      subject: n._subjects.values,
      next: (f) => {
        Vi(i.current, f.name, a) &&
          d(Be(Ui(i.current, n._names, f.values || n._formValues, !1, s)));
      },
    });
  const [c, d] = he.useState(n._getWatch(r, s));
  return he.useEffect(() => n._removeUnmounted()), c;
}
function xf(e) {
  const t = is(),
    { name: n, disabled: r, control: s = t.control, shouldUnregister: o } = e,
    a = Fi(s._names.array, n),
    i = yf({
      control: s,
      name: n,
      defaultValue: k(s._formValues, n, k(s._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    c = vf({ control: s, name: n, exact: !0 }),
    d = he.useRef(
      s.register(n, {
        ...e.rules,
        value: i,
        ...(Je(e.disabled) ? { disabled: e.disabled } : {}),
      })
    );
  return (
    he.useEffect(() => {
      const f = s._options.shouldUnregister || o,
        g = (m, p) => {
          const y = k(s._fields, m);
          y && y._f && (y._f.mount = p);
        };
      if ((g(n, !0), f)) {
        const m = Be(k(s._options.defaultValues, n));
        pe(s._defaultValues, n, m),
          Re(k(s._formValues, n)) && pe(s._formValues, n, m);
      }
      return () => {
        (a ? f && !s._state.action : f) ? s.unregister(n) : g(n, !1);
      };
    }, [n, s, a, o]),
    he.useEffect(() => {
      k(s._fields, n) &&
        s._updateDisabledField({
          disabled: r,
          fields: s._fields,
          name: n,
          value: k(s._fields, n)._f.value,
        });
    }, [r, n, s]),
    {
      field: {
        name: n,
        value: i,
        ...(Je(r) || c.disabled ? { disabled: c.disabled || r } : {}),
        onChange: he.useCallback(
          (f) =>
            d.current.onChange({
              target: { value: Di(f), name: n },
              type: Gr.CHANGE,
            }),
          [n]
        ),
        onBlur: he.useCallback(
          () =>
            d.current.onBlur({
              target: { value: k(s._formValues, n), name: n },
              type: Gr.BLUR,
            }),
          [n, s]
        ),
        ref: he.useCallback(
          (f) => {
            const g = k(s._fields, n);
            g &&
              f &&
              (g._f.ref = {
                focus: () => f.focus(),
                select: () => f.select(),
                setCustomValidity: (m) => f.setCustomValidity(m),
                reportValidity: () => f.reportValidity(),
              });
          },
          [s._fields, n]
        ),
      },
      formState: c,
      fieldState: Object.defineProperties(
        {},
        {
          invalid: { enumerable: !0, get: () => !!k(c.errors, n) },
          isDirty: { enumerable: !0, get: () => !!k(c.dirtyFields, n) },
          isTouched: { enumerable: !0, get: () => !!k(c.touchedFields, n) },
          isValidating: {
            enumerable: !0,
            get: () => !!k(c.validatingFields, n),
          },
          error: { enumerable: !0, get: () => k(c.errors, n) },
        }
      ),
    }
  );
}
const _f = (e) => e.render(xf(e));
var Gi = (e, t, n, r, s) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: s || !0 },
        }
      : {},
  Aa = (e) => ({
    isOnSubmit: !e || e === st.onSubmit,
    isOnBlur: e === st.onBlur,
    isOnChange: e === st.onChange,
    isOnAll: e === st.all,
    isOnTouch: e === st.onTouched,
  }),
  Ta = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const Zn = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const o = k(e, s);
    if (o) {
      const { _f: a, ...i } = o;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], s) && !r) return !0;
        if (a.ref && t(a.ref, a.name) && !r) return !0;
        if (Zn(i, t)) break;
      } else if (Ae(i) && Zn(i, t)) break;
    }
  }
};
var wf = (e, t, n) => {
    const r = Bn(k(e, n));
    return pe(r, "root", t[n]), pe(e, n, r), e;
  },
  Po = (e) => e.type === "file",
  pt = (e) => typeof e == "function",
  zr = (e) => {
    if (!Io) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  jr = (e) => ht(e),
  Do = (e) => e.type === "radio",
  Hr = (e) => e instanceof RegExp;
const Na = { value: !1, isValid: !1 },
  Ia = { value: !0, isValid: !0 };
var zi = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Re(e[0].attributes.value)
        ? Re(e[0].value) || e[0].value === ""
          ? Ia
          : { value: e[0].value, isValid: !0 }
        : Ia
      : Na;
  }
  return Na;
};
const ka = { isValid: !1, value: null };
var Hi = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        ka
      )
    : ka;
function Ma(e, t, n = "validate") {
  if (jr(e) || (Array.isArray(e) && e.every(jr)) || (Je(e) && !e))
    return { type: n, message: jr(e) ? e : "", ref: t };
}
var fn = (e) => (Ae(e) && !Hr(e) ? e : { value: e, message: "" }),
  Pa = async (e, t, n, r, s) => {
    const {
        ref: o,
        refs: a,
        required: i,
        maxLength: c,
        minLength: d,
        min: f,
        max: g,
        pattern: m,
        validate: p,
        name: y,
        valueAsNumber: x,
        mount: S,
        disabled: C,
      } = e._f,
      R = k(t, y);
    if (!S || C) return {};
    const P = a ? a[0] : o,
      N = (D) => {
        r &&
          P.reportValidity &&
          (P.setCustomValidity(Je(D) ? "" : D || ""), P.reportValidity());
      },
      I = {},
      K = Do(o),
      te = gr(o),
      U = K || te,
      ge =
        ((x || Po(o)) && Re(o.value) && Re(R)) ||
        (zr(o) && o.value === "") ||
        R === "" ||
        (Array.isArray(R) && !R.length),
      ce = Gi.bind(null, y, n, I),
      ue = (D, Y, oe, me = St.maxLength, ye = St.minLength) => {
        const Te = D ? Y : oe;
        I[y] = {
          type: D ? me : ye,
          message: Te,
          ref: o,
          ...ce(D ? me : ye, Te),
        };
      };
    if (
      s
        ? !Array.isArray(R) || !R.length
        : i &&
          ((!U && (ge || Le(R))) ||
            (Je(R) && !R) ||
            (te && !zi(a).isValid) ||
            (K && !Hi(a).isValid))
    ) {
      const { value: D, message: Y } = jr(i)
        ? { value: !!i, message: i }
        : fn(i);
      if (
        D &&
        ((I[y] = {
          type: St.required,
          message: Y,
          ref: P,
          ...ce(St.required, Y),
        }),
        !n)
      )
        return N(Y), I;
    }
    if (!ge && (!Le(f) || !Le(g))) {
      let D, Y;
      const oe = fn(g),
        me = fn(f);
      if (!Le(R) && !isNaN(R)) {
        const ye = o.valueAsNumber || (R && +R);
        Le(oe.value) || (D = ye > oe.value),
          Le(me.value) || (Y = ye < me.value);
      } else {
        const ye = o.valueAsDate || new Date(R),
          Te = (_e) => new Date(new Date().toDateString() + " " + _e),
          Ie = o.type == "time",
          q = o.type == "week";
        ht(oe.value) &&
          R &&
          (D = Ie
            ? Te(R) > Te(oe.value)
            : q
            ? R > oe.value
            : ye > new Date(oe.value)),
          ht(me.value) &&
            R &&
            (Y = Ie
              ? Te(R) < Te(me.value)
              : q
              ? R < me.value
              : ye < new Date(me.value));
      }
      if ((D || Y) && (ue(!!D, oe.message, me.message, St.max, St.min), !n))
        return N(I[y].message), I;
    }
    if ((c || d) && !ge && (ht(R) || (s && Array.isArray(R)))) {
      const D = fn(c),
        Y = fn(d),
        oe = !Le(D.value) && R.length > +D.value,
        me = !Le(Y.value) && R.length < +Y.value;
      if ((oe || me) && (ue(oe, D.message, Y.message), !n))
        return N(I[y].message), I;
    }
    if (m && !ge && ht(R)) {
      const { value: D, message: Y } = fn(m);
      if (
        Hr(D) &&
        !R.match(D) &&
        ((I[y] = {
          type: St.pattern,
          message: Y,
          ref: o,
          ...ce(St.pattern, Y),
        }),
        !n)
      )
        return N(Y), I;
    }
    if (p) {
      if (pt(p)) {
        const D = await p(R, t),
          Y = Ma(D, P);
        if (Y && ((I[y] = { ...Y, ...ce(St.validate, Y.message) }), !n))
          return N(Y.message), I;
      } else if (Ae(p)) {
        let D = {};
        for (const Y in p) {
          if (!Ze(D) && !n) break;
          const oe = Ma(await p[Y](R, t), P, Y);
          oe &&
            ((D = { ...oe, ...ce(Y, oe.message) }),
            N(oe.message),
            n && (I[y] = D));
        }
        if (!Ze(D) && ((I[y] = { ref: P, ...D }), !n)) return I;
      }
    }
    return N(!0), I;
  };
function Sf(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = Re(e) ? r++ : e[t[r++]];
  return e;
}
function Cf(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Re(e[t])) return !1;
  return !0;
}
function Ne(e, t) {
  const n = Array.isArray(t) ? t : ko(t) ? [t] : $i(t),
    r = n.length === 1 ? e : Sf(e, n),
    s = n.length - 1,
    o = n[s];
  return (
    r && delete r[o],
    s !== 0 &&
      ((Ae(r) && Ze(r)) || (Array.isArray(r) && Cf(r))) &&
      Ne(e, n.slice(0, -1)),
    e
  );
}
var Ns = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (s) => {
        for (const o of e) o.next && o.next(s);
      },
      subscribe: (s) => (
        e.push(s),
        {
          unsubscribe: () => {
            e = e.filter((o) => o !== s);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  to = (e) => Le(e) || !Pi(e);
function kt(e, t) {
  if (to(e) || to(t)) return e === t;
  if (Yt(e) && Yt(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const s of n) {
    const o = e[s];
    if (!r.includes(s)) return !1;
    if (s !== "ref") {
      const a = t[s];
      if (
        (Yt(o) && Yt(a)) ||
        (Ae(o) && Ae(a)) ||
        (Array.isArray(o) && Array.isArray(a))
          ? !kt(o, a)
          : o !== a
      )
        return !1;
    }
  }
  return !0;
}
var Bi = (e) => e.type === "select-multiple",
  bf = (e) => Do(e) || gr(e),
  Is = (e) => zr(e) && e.isConnected,
  Zi = (e) => {
    for (const t in e) if (pt(e[t])) return !0;
    return !1;
  };
function Br(e, t = {}) {
  const n = Array.isArray(e);
  if (Ae(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Ae(e[r]) && !Zi(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), Br(e[r], t[r]))
        : Le(e[r]) || (t[r] = !0);
  return t;
}
function Wi(e, t, n) {
  const r = Array.isArray(e);
  if (Ae(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || (Ae(e[s]) && !Zi(e[s]))
        ? Re(t) || to(n[s])
          ? (n[s] = Array.isArray(e[s]) ? Br(e[s], []) : { ...Br(e[s]) })
          : Wi(e[s], Le(t) ? {} : t[s], n[s])
        : (n[s] = !kt(e[s], t[s]));
  return n;
}
var Pn = (e, t) => Wi(e, t, Br(t)),
  qi = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    Re(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && ht(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function ks(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Po(t)
      ? t.files
      : Do(t)
      ? Hi(e.refs).value
      : Bi(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : gr(t)
      ? zi(e.refs).value
      : qi(Re(t.value) ? e.ref.value : t.value, e);
}
var Rf = (e, t, n, r) => {
    const s = {};
    for (const o of e) {
      const a = k(t, o);
      a && pe(s, o, a._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: r,
    };
  },
  Dn = (e) =>
    Re(e)
      ? e
      : Hr(e)
      ? e.source
      : Ae(e)
      ? Hr(e.value)
        ? e.value.source
        : e.value
      : e;
const Da = "AsyncFunction";
var Ef = (e) =>
    (!e || !e.validate) &&
    !!(
      (pt(e.validate) && e.validate.constructor.name === Da) ||
      (Ae(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === Da))
    ),
  Af = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Fa(e, t, n) {
  const r = k(e, n);
  if (r || ko(n)) return { error: r, name: n };
  const s = n.split(".");
  for (; s.length; ) {
    const o = s.join("."),
      a = k(t, o),
      i = k(e, o);
    if (a && !Array.isArray(a) && n !== o) return { name: n };
    if (i && i.type) return { name: o, error: i };
    s.pop();
  }
  return { name: n };
}
var Tf = (e, t, n, r, s) =>
    s.isOnAll
      ? !1
      : !n && s.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : s.isOnBlur)
      ? !e
      : (n ? r.isOnChange : s.isOnChange)
      ? e
      : !0,
  Nf = (e, t) => !as(k(e, t)).length && Ne(e, t);
const If = {
  mode: st.onSubmit,
  reValidateMode: st.onChange,
  shouldFocusError: !0,
};
function kf(e = {}) {
  let t = { ...If, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: pt(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    s =
      Ae(t.defaultValues) || Ae(t.values)
        ? Be(t.defaultValues || t.values) || {}
        : {},
    o = t.shouldUnregister ? {} : Be(s),
    a = { action: !1, mount: !1, watch: !1 },
    i = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    c,
    d = 0;
  const f = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    g = { values: Ns(), array: Ns(), state: Ns() },
    m = Aa(t.mode),
    p = Aa(t.reValidateMode),
    y = t.criteriaMode === st.all,
    x = (h) => (_) => {
      clearTimeout(d), (d = setTimeout(h, _));
    },
    S = async (h) => {
      if (!t.disabled && (f.isValid || h)) {
        const _ = t.resolver ? Ze((await U()).errors) : await ce(r, !0);
        _ !== n.isValid && g.state.next({ isValid: _ });
      }
    },
    C = (h, _) => {
      !t.disabled &&
        (f.isValidating || f.validatingFields) &&
        ((h || Array.from(i.mount)).forEach((w) => {
          w && (_ ? pe(n.validatingFields, w, _) : Ne(n.validatingFields, w));
        }),
        g.state.next({
          validatingFields: n.validatingFields,
          isValidating: !Ze(n.validatingFields),
        }));
    },
    R = (h, _ = [], w, $, M = !0, A = !0) => {
      if ($ && w && !t.disabled) {
        if (((a.action = !0), A && Array.isArray(k(r, h)))) {
          const z = w(k(r, h), $.argA, $.argB);
          M && pe(r, h, z);
        }
        if (A && Array.isArray(k(n.errors, h))) {
          const z = w(k(n.errors, h), $.argA, $.argB);
          M && pe(n.errors, h, z), Nf(n.errors, h);
        }
        if (f.touchedFields && A && Array.isArray(k(n.touchedFields, h))) {
          const z = w(k(n.touchedFields, h), $.argA, $.argB);
          M && pe(n.touchedFields, h, z);
        }
        f.dirtyFields && (n.dirtyFields = Pn(s, o)),
          g.state.next({
            name: h,
            isDirty: D(h, _),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else pe(o, h, _);
    },
    P = (h, _) => {
      pe(n.errors, h, _), g.state.next({ errors: n.errors });
    },
    N = (h) => {
      (n.errors = h), g.state.next({ errors: n.errors, isValid: !1 });
    },
    I = (h, _, w, $) => {
      const M = k(r, h);
      if (M) {
        const A = k(o, h, Re(w) ? k(s, h) : w);
        Re(A) || ($ && $.defaultChecked) || _
          ? pe(o, h, _ ? A : ks(M._f))
          : me(h, A),
          a.mount && S();
      }
    },
    K = (h, _, w, $, M) => {
      let A = !1,
        z = !1;
      const Q = { name: h };
      if (!t.disabled) {
        const xe = !!(k(r, h) && k(r, h)._f && k(r, h)._f.disabled);
        if (!w || $) {
          f.isDirty &&
            ((z = n.isDirty),
            (n.isDirty = Q.isDirty = D()),
            (A = z !== Q.isDirty));
          const Ee = xe || kt(k(s, h), _);
          (z = !!(!xe && k(n.dirtyFields, h))),
            Ee || xe ? Ne(n.dirtyFields, h) : pe(n.dirtyFields, h, !0),
            (Q.dirtyFields = n.dirtyFields),
            (A = A || (f.dirtyFields && z !== !Ee));
        }
        if (w) {
          const Ee = k(n.touchedFields, h);
          Ee ||
            (pe(n.touchedFields, h, w),
            (Q.touchedFields = n.touchedFields),
            (A = A || (f.touchedFields && Ee !== w)));
        }
        A && M && g.state.next(Q);
      }
      return A ? Q : {};
    },
    te = (h, _, w, $) => {
      const M = k(n.errors, h),
        A = f.isValid && Je(_) && n.isValid !== _;
      if (
        (e.delayError && w
          ? ((c = x(() => P(h, w))), c(e.delayError))
          : (clearTimeout(d),
            (c = null),
            w ? pe(n.errors, h, w) : Ne(n.errors, h)),
        (w ? !kt(M, w) : M) || !Ze($) || A)
      ) {
        const z = {
          ...$,
          ...(A && Je(_) ? { isValid: _ } : {}),
          errors: n.errors,
          name: h,
        };
        (n = { ...n, ...z }), g.state.next(z);
      }
    },
    U = async (h) => {
      C(h, !0);
      const _ = await t.resolver(
        o,
        t.context,
        Rf(h || i.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return C(h), _;
    },
    ge = async (h) => {
      const { errors: _ } = await U(h);
      if (h)
        for (const w of h) {
          const $ = k(_, w);
          $ ? pe(n.errors, w, $) : Ne(n.errors, w);
        }
      else n.errors = _;
      return _;
    },
    ce = async (h, _, w = { valid: !0 }) => {
      for (const $ in h) {
        const M = h[$];
        if (M) {
          const { _f: A, ...z } = M;
          if (A) {
            const Q = i.array.has(A.name),
              xe = M._f && Ef(M._f);
            xe && f.validatingFields && C([$], !0);
            const Ee = await Pa(M, o, y, t.shouldUseNativeValidation && !_, Q);
            if (
              (xe && f.validatingFields && C([$]),
              Ee[A.name] && ((w.valid = !1), _))
            )
              break;
            !_ &&
              (k(Ee, A.name)
                ? Q
                  ? wf(n.errors, Ee, A.name)
                  : pe(n.errors, A.name, Ee[A.name])
                : Ne(n.errors, A.name));
          }
          !Ze(z) && (await ce(z, _, w));
        }
      }
      return w.valid;
    },
    ue = () => {
      for (const h of i.unMount) {
        const _ = k(r, h);
        _ &&
          (_._f.refs ? _._f.refs.every((w) => !Is(w)) : !Is(_._f.ref)) &&
          ne(h);
      }
      i.unMount = new Set();
    },
    D = (h, _) => !t.disabled && (h && _ && pe(o, h, _), !kt(le(), s)),
    Y = (h, _, w) =>
      Ui(h, i, { ...(a.mount ? o : Re(_) ? s : ht(h) ? { [h]: _ } : _) }, w, _),
    oe = (h) =>
      as(k(a.mount ? o : s, h, e.shouldUnregister ? k(s, h, []) : [])),
    me = (h, _, w = {}) => {
      const $ = k(r, h);
      let M = _;
      if ($) {
        const A = $._f;
        A &&
          (!A.disabled && pe(o, h, qi(_, A)),
          (M = zr(A.ref) && Le(_) ? "" : _),
          Bi(A.ref)
            ? [...A.ref.options].forEach(
                (z) => (z.selected = M.includes(z.value))
              )
            : A.refs
            ? gr(A.ref)
              ? A.refs.length > 1
                ? A.refs.forEach(
                    (z) =>
                      (!z.defaultChecked || !z.disabled) &&
                      (z.checked = Array.isArray(M)
                        ? !!M.find((Q) => Q === z.value)
                        : M === z.value)
                  )
                : A.refs[0] && (A.refs[0].checked = !!M)
              : A.refs.forEach((z) => (z.checked = z.value === M))
            : Po(A.ref)
            ? (A.ref.value = "")
            : ((A.ref.value = M),
              A.ref.type || g.values.next({ name: h, values: { ...o } })));
      }
      (w.shouldDirty || w.shouldTouch) &&
        K(h, M, w.shouldTouch, w.shouldDirty, !0),
        w.shouldValidate && _e(h);
    },
    ye = (h, _, w) => {
      for (const $ in _) {
        const M = _[$],
          A = `${h}.${$}`,
          z = k(r, A);
        (i.array.has(h) || Ae(M) || (z && !z._f)) && !Yt(M)
          ? ye(A, M, w)
          : me(A, M, w);
      }
    },
    Te = (h, _, w = {}) => {
      const $ = k(r, h),
        M = i.array.has(h),
        A = Be(_);
      pe(o, h, A),
        M
          ? (g.array.next({ name: h, values: { ...o } }),
            (f.isDirty || f.dirtyFields) &&
              w.shouldDirty &&
              g.state.next({
                name: h,
                dirtyFields: Pn(s, o),
                isDirty: D(h, A),
              }))
          : $ && !$._f && !Le(A)
          ? ye(h, A, w)
          : me(h, A, w),
        Ta(h, i) && g.state.next({ ...n }),
        g.values.next({ name: a.mount ? h : void 0, values: { ...o } });
    },
    Ie = async (h) => {
      a.mount = !0;
      const _ = h.target;
      let w = _.name,
        $ = !0;
      const M = k(r, w),
        A = () => (_.type ? ks(M._f) : Di(h)),
        z = (Q) => {
          $ =
            Number.isNaN(Q) ||
            (Yt(Q) && isNaN(Q.getTime())) ||
            kt(Q, k(o, w, Q));
        };
      if (M) {
        let Q, xe;
        const Ee = A(),
          dt = h.type === Gr.BLUR || h.type === Gr.FOCUS_OUT,
          br =
            (!Af(M._f) && !t.resolver && !k(n.errors, w) && !M._f.deps) ||
            Tf(dt, k(n.touchedFields, w), n.isSubmitted, p, m),
          Ht = Ta(w, i, dt);
        pe(o, w, Ee),
          dt
            ? (M._f.onBlur && M._f.onBlur(h), c && c(0))
            : M._f.onChange && M._f.onChange(h);
        const cn = K(w, Ee, dt, !1),
          un = !Ze(cn) || Ht;
        if (
          (!dt && g.values.next({ name: w, type: h.type, values: { ...o } }),
          br)
        )
          return (
            f.isValid && (e.mode === "onBlur" ? dt && S() : S()),
            un && g.state.next({ name: w, ...(Ht ? {} : cn) })
          );
        if ((!dt && Ht && g.state.next({ ...n }), t.resolver)) {
          const { errors: Bt } = await U([w]);
          if ((z(Ee), $)) {
            const nt = Fa(n.errors, r, w),
              _t = Fa(Bt, r, nt.name || w);
            (Q = _t.error), (w = _t.name), (xe = Ze(Bt));
          }
        } else
          C([w], !0),
            (Q = (await Pa(M, o, y, t.shouldUseNativeValidation))[w]),
            C([w]),
            z(Ee),
            $ && (Q ? (xe = !1) : f.isValid && (xe = await ce(r, !0)));
        $ && (M._f.deps && _e(M._f.deps), te(w, xe, Q, cn));
      }
    },
    q = (h, _) => {
      if (k(n.errors, _) && h.focus) return h.focus(), 1;
    },
    _e = async (h, _ = {}) => {
      let w, $;
      const M = Bn(h);
      if (t.resolver) {
        const A = await ge(Re(h) ? h : M);
        (w = Ze(A)), ($ = h ? !M.some((z) => k(A, z)) : w);
      } else
        h
          ? (($ = (
              await Promise.all(
                M.map(async (A) => {
                  const z = k(r, A);
                  return await ce(z && z._f ? { [A]: z } : z);
                })
              )
            ).every(Boolean)),
            !(!$ && !n.isValid) && S())
          : ($ = w = await ce(r));
      return (
        g.state.next({
          ...(!ht(h) || (f.isValid && w !== n.isValid) ? {} : { name: h }),
          ...(t.resolver || !h ? { isValid: w } : {}),
          errors: n.errors,
        }),
        _.shouldFocus && !$ && Zn(r, q, h ? M : i.mount),
        $
      );
    },
    le = (h) => {
      const _ = { ...(a.mount ? o : s) };
      return Re(h) ? _ : ht(h) ? k(_, h) : h.map((w) => k(_, w));
    },
    b = (h, _) => ({
      invalid: !!k((_ || n).errors, h),
      isDirty: !!k((_ || n).dirtyFields, h),
      error: k((_ || n).errors, h),
      isValidating: !!k(n.validatingFields, h),
      isTouched: !!k((_ || n).touchedFields, h),
    }),
    L = (h) => {
      h && Bn(h).forEach((_) => Ne(n.errors, _)),
        g.state.next({ errors: h ? n.errors : {} });
    },
    ee = (h, _, w) => {
      const $ = (k(r, h, { _f: {} })._f || {}).ref,
        M = k(n.errors, h) || {},
        { ref: A, message: z, type: Q, ...xe } = M;
      pe(n.errors, h, { ...xe, ..._, ref: $ }),
        g.state.next({ name: h, errors: n.errors, isValid: !1 }),
        w && w.shouldFocus && $ && $.focus && $.focus();
    },
    F = (h, _) =>
      pt(h)
        ? g.values.subscribe({ next: (w) => h(Y(void 0, _), w) })
        : Y(h, _, !0),
    ne = (h, _ = {}) => {
      for (const w of h ? Bn(h) : i.mount)
        i.mount.delete(w),
          i.array.delete(w),
          _.keepValue || (Ne(r, w), Ne(o, w)),
          !_.keepError && Ne(n.errors, w),
          !_.keepDirty && Ne(n.dirtyFields, w),
          !_.keepTouched && Ne(n.touchedFields, w),
          !_.keepIsValidating && Ne(n.validatingFields, w),
          !t.shouldUnregister && !_.keepDefaultValue && Ne(s, w);
      g.values.next({ values: { ...o } }),
        g.state.next({ ...n, ...(_.keepDirty ? { isDirty: D() } : {}) }),
        !_.keepIsValid && S();
    },
    fe = ({ disabled: h, name: _, field: w, fields: $, value: M }) => {
      if ((Je(h) && a.mount) || h) {
        const A = h ? void 0 : Re(M) ? ks(w ? w._f : k($, _)._f) : M;
        pe(o, _, A), K(_, A, !1, !1, !0);
      }
    },
    be = (h, _ = {}) => {
      let w = k(r, h);
      const $ = Je(_.disabled) || Je(t.disabled);
      return (
        pe(r, h, {
          ...(w || {}),
          _f: {
            ...(w && w._f ? w._f : { ref: { name: h } }),
            name: h,
            mount: !0,
            ..._,
          },
        }),
        i.mount.add(h),
        w
          ? fe({
              field: w,
              disabled: Je(_.disabled) ? _.disabled : t.disabled,
              name: h,
              value: _.value,
            })
          : I(h, !0, _.value),
        {
          ...($ ? { disabled: _.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!_.required,
                min: Dn(_.min),
                max: Dn(_.max),
                minLength: Dn(_.minLength),
                maxLength: Dn(_.maxLength),
                pattern: Dn(_.pattern),
              }
            : {}),
          name: h,
          onChange: Ie,
          onBlur: Ie,
          ref: (M) => {
            if (M) {
              be(h, _), (w = k(r, h));
              const A =
                  (Re(M.value) &&
                    M.querySelectorAll &&
                    M.querySelectorAll("input,select,textarea")[0]) ||
                  M,
                z = bf(A),
                Q = w._f.refs || [];
              if (z ? Q.find((xe) => xe === A) : A === w._f.ref) return;
              pe(r, h, {
                _f: {
                  ...w._f,
                  ...(z
                    ? {
                        refs: [
                          ...Q.filter(Is),
                          A,
                          ...(Array.isArray(k(s, h)) ? [{}] : []),
                        ],
                        ref: { type: A.type, name: h },
                      }
                    : { ref: A }),
                },
              }),
                I(h, !1, void 0, A);
            } else
              (w = k(r, h, {})),
                w._f && (w._f.mount = !1),
                (t.shouldUnregister || _.shouldUnregister) &&
                  !(Fi(i.array, h) && a.action) &&
                  i.unMount.add(h);
          },
        }
      );
    },
    we = () => t.shouldFocusError && Zn(r, q, i.mount),
    Xe = (h) => {
      Je(h) &&
        (g.state.next({ disabled: h }),
        Zn(
          r,
          (_, w) => {
            const $ = k(r, w);
            $ &&
              ((_.disabled = $._f.disabled || h),
              Array.isArray($._f.refs) &&
                $._f.refs.forEach((M) => {
                  M.disabled = $._f.disabled || h;
                }));
          },
          0,
          !1
        ));
    },
    In = (h, _) => async (w) => {
      let $;
      if (
        (w &&
          (w.preventDefault && w.preventDefault(), w.persist && w.persist()),
        t.disabled)
      ) {
        _ && (await _({ ...n.errors }, w));
        return;
      }
      let M = Be(o);
      if ((g.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: A, values: z } = await U();
        (n.errors = A), (M = z);
      } else await ce(r);
      if ((Ne(n.errors, "root"), Ze(n.errors))) {
        g.state.next({ errors: {} });
        try {
          await h(M, w);
        } catch (A) {
          $ = A;
        }
      } else _ && (await _({ ...n.errors }, w)), we(), setTimeout(we);
      if (
        (g.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ze(n.errors) && !$,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        $)
      )
        throw $;
    },
    Tt = (h, _ = {}) => {
      k(r, h) &&
        (Re(_.defaultValue)
          ? Te(h, Be(k(s, h)))
          : (Te(h, _.defaultValue), pe(s, h, Be(_.defaultValue))),
        _.keepTouched || Ne(n.touchedFields, h),
        _.keepDirty ||
          (Ne(n.dirtyFields, h),
          (n.isDirty = _.defaultValue ? D(h, Be(k(s, h))) : D())),
        _.keepError || (Ne(n.errors, h), f.isValid && S()),
        g.state.next({ ...n }));
    },
    ln = (h, _ = {}) => {
      const w = h ? Be(h) : s,
        $ = Be(w),
        M = Ze(h),
        A = M ? s : $;
      if ((_.keepDefaultValues || (s = w), !_.keepValues)) {
        if (_.keepDirtyValues) {
          const z = new Set([...i.mount, ...Object.keys(Pn(s, o))]);
          for (const Q of Array.from(z))
            k(n.dirtyFields, Q) ? pe(A, Q, k(o, Q)) : Te(Q, k(A, Q));
        } else {
          if (Io && Re(h))
            for (const z of i.mount) {
              const Q = k(r, z);
              if (Q && Q._f) {
                const xe = Array.isArray(Q._f.refs) ? Q._f.refs[0] : Q._f.ref;
                if (zr(xe)) {
                  const Ee = xe.closest("form");
                  if (Ee) {
                    Ee.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (o = e.shouldUnregister ? (_.keepDefaultValues ? Be(s) : {}) : Be(A)),
          g.array.next({ values: { ...A } }),
          g.values.next({ values: { ...A } });
      }
      (i = {
        mount: _.keepDirtyValues ? i.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (a.mount = !f.isValid || !!_.keepIsValid || !!_.keepDirtyValues),
        (a.watch = !!e.shouldUnregister),
        g.state.next({
          submitCount: _.keepSubmitCount ? n.submitCount : 0,
          isDirty: M
            ? !1
            : _.keepDirty
            ? n.isDirty
            : !!(_.keepDefaultValues && !kt(h, s)),
          isSubmitted: _.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: M
            ? {}
            : _.keepDirtyValues
            ? _.keepDefaultValues && o
              ? Pn(s, o)
              : n.dirtyFields
            : _.keepDefaultValues && h
            ? Pn(s, h)
            : _.keepDirty
            ? n.dirtyFields
            : {},
          touchedFields: _.keepTouched ? n.touchedFields : {},
          errors: _.keepErrors ? n.errors : {},
          isSubmitSuccessful: _.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    ut = (h, _) => ln(pt(h) ? h(o) : h, _);
  return {
    control: {
      register: be,
      unregister: ne,
      getFieldState: b,
      handleSubmit: In,
      setError: ee,
      _executeSchema: U,
      _getWatch: Y,
      _getDirty: D,
      _updateValid: S,
      _removeUnmounted: ue,
      _updateFieldArray: R,
      _updateDisabledField: fe,
      _getFieldArray: oe,
      _reset: ln,
      _resetDefaultValues: () =>
        pt(t.defaultValues) &&
        t.defaultValues().then((h) => {
          ut(h, t.resetOptions), g.state.next({ isLoading: !1 });
        }),
      _updateFormState: (h) => {
        n = { ...n, ...h };
      },
      _disableForm: Xe,
      _subjects: g,
      _proxyFormState: f,
      _setErrors: N,
      get _fields() {
        return r;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return a;
      },
      set _state(h) {
        a = h;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return i;
      },
      set _names(h) {
        i = h;
      },
      get _formState() {
        return n;
      },
      set _formState(h) {
        n = h;
      },
      get _options() {
        return t;
      },
      set _options(h) {
        t = { ...t, ...h };
      },
    },
    trigger: _e,
    register: be,
    handleSubmit: In,
    watch: F,
    setValue: Te,
    getValues: le,
    reset: ut,
    resetField: Tt,
    clearErrors: L,
    unregister: ne,
    setError: ee,
    setFocus: (h, _ = {}) => {
      const w = k(r, h),
        $ = w && w._f;
      if ($) {
        const M = $.refs ? $.refs[0] : $.ref;
        M.focus && (M.focus(), _.shouldSelect && pt(M.select) && M.select());
      }
    },
    getFieldState: b,
  };
}
function Mf(e = {}) {
  const t = he.useRef(),
    n = he.useRef(),
    [r, s] = he.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: pt(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: pt(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...kf(e), formState: r });
  const o = t.current.control;
  return (
    (o._options = e),
    Mo({
      subject: o._subjects.state,
      next: (a) => {
        Li(a, o._proxyFormState, o._updateFormState, !0) &&
          s({ ...o._formState });
      },
    }),
    he.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    he.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const a = o._getDirty();
        a !== r.isDirty && o._subjects.state.next({ isDirty: a });
      }
    }, [o, r.isDirty]),
    he.useEffect(() => {
      e.values && !kt(e.values, n.current)
        ? (o._reset(e.values, o._options.resetOptions),
          (n.current = e.values),
          s((a) => ({ ...a })))
        : o._resetDefaultValues();
    }, [e.values, o]),
    he.useEffect(() => {
      e.errors && o._setErrors(e.errors);
    }, [e.errors, o]),
    he.useEffect(() => {
      o._state.mount || (o._updateValid(), (o._state.mount = !0)),
        o._state.watch &&
          ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted();
    }),
    he.useEffect(() => {
      e.shouldUnregister && o._subjects.values.next({ values: o._getWatch() });
    }, [e.shouldUnregister, o]),
    (t.current.formState = Oi(r, o)),
    t.current
  );
}
const $a = (e, t, n) => {
    if (e && "reportValidity" in e) {
      const r = k(n, t);
      e.setCustomValidity((r && r.message) || ""), e.reportValidity();
    }
  },
  Ki = (e, t) => {
    for (const n in t.fields) {
      const r = t.fields[n];
      r && r.ref && "reportValidity" in r.ref
        ? $a(r.ref, n, e)
        : r.refs && r.refs.forEach((s) => $a(s, n, e));
    }
  },
  Pf = (e, t) => {
    t.shouldUseNativeValidation && Ki(e, t);
    const n = {};
    for (const r in e) {
      const s = k(t.fields, r),
        o = Object.assign(e[r] || {}, { ref: s && s.ref });
      if (Df(t.names || Object.keys(e), r)) {
        const a = Object.assign({}, k(n, r));
        pe(a, "root", o), pe(n, r, a);
      } else pe(n, r, o);
    }
    return n;
  },
  Df = (e, t) => e.some((n) => n.startsWith(t + "."));
var Ff = function (e, t) {
    for (var n = {}; e.length; ) {
      var r = e[0],
        s = r.code,
        o = r.message,
        a = r.path.join(".");
      if (!n[a])
        if ("unionErrors" in r) {
          var i = r.unionErrors[0].errors[0];
          n[a] = { message: i.message, type: i.code };
        } else n[a] = { message: o, type: s };
      if (
        ("unionErrors" in r &&
          r.unionErrors.forEach(function (f) {
            return f.errors.forEach(function (g) {
              return e.push(g);
            });
          }),
        t)
      ) {
        var c = n[a].types,
          d = c && c[r.code];
        n[a] = Gi(a, t, n, s, d ? [].concat(d, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  $f = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (r, s, o) {
        try {
          return Promise.resolve(
            (function (a, i) {
              try {
                var c = Promise.resolve(
                  e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)
                ).then(function (d) {
                  return (
                    o.shouldUseNativeValidation && Ki({}, o),
                    { errors: {}, values: n.raw ? r : d }
                  );
                });
              } catch (d) {
                return i(d);
              }
              return c && c.then ? c.then(void 0, i) : c;
            })(0, function (a) {
              if (
                (function (i) {
                  return Array.isArray(i == null ? void 0 : i.errors);
                })(a)
              )
                return {
                  values: {},
                  errors: Pf(
                    Ff(
                      a.errors,
                      !o.shouldUseNativeValidation && o.criteriaMode === "all"
                    ),
                    o
                  ),
                };
              throw a;
            })
          );
        } catch (a) {
          return Promise.reject(a);
        }
      }
    );
  };
const jf = hf,
  Yi = u.createContext({}),
  gn = ({ ...e }) =>
    l.jsx(Yi.Provider, {
      value: { name: e.name },
      children: l.jsx(_f, { ...e }),
    }),
  ls = () => {
    const e = u.useContext(Yi),
      t = u.useContext(Xi),
      { getFieldState: n, formState: r } = is(),
      s = n(e.name, r);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: o } = t;
    return {
      id: o,
      name: e.name,
      formItemId: `${o}-form-item`,
      formDescriptionId: `${o}-form-item-description`,
      formMessageId: `${o}-form-item-message`,
      ...s,
    };
  },
  Xi = u.createContext({}),
  Of = u.forwardRef(({ className: e, ...t }, n) => {
    const r = u.useId();
    return l.jsx(Xi.Provider, {
      value: { id: r },
      children: l.jsx("div", { ref: n, className: W("space-y-2", e), ...t }),
    });
  });
Of.displayName = "FormItem";
const Lf = u.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: s } = ls();
  return l.jsx(wi, {
    ref: n,
    className: W(r && "text-destructive", e),
    htmlFor: s,
    ...t,
  });
});
Lf.displayName = "FormLabel";
const Vf = u.forwardRef(({ ...e }, t) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: s,
    formMessageId: o,
  } = ls();
  return l.jsx(Eo, {
    ref: t,
    id: r,
    "aria-describedby": n ? `${s} ${o}` : `${s}`,
    "aria-invalid": !!n,
    ...e,
  });
});
Vf.displayName = "FormControl";
const Uf = u.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ls();
  return l.jsx("p", {
    ref: n,
    id: r,
    className: W("text-[0.8rem] text-muted-foreground", e),
    ...t,
  });
});
Uf.displayName = "FormDescription";
const Gf = u.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: s, formMessageId: o } = ls(),
    a = s ? String(s == null ? void 0 : s.message) : t;
  return a
    ? l.jsx("p", {
        ref: r,
        id: o,
        className: W("text-[0.8rem] font-medium text-destructive", e),
        ...n,
        children: a,
      })
    : null;
});
Gf.displayName = "FormMessage";
var de;
(function (e) {
  e.assertEqual = (s) => s;
  function t(s) {}
  e.assertIs = t;
  function n(s) {
    throw new Error();
  }
  (e.assertNever = n),
    (e.arrayToEnum = (s) => {
      const o = {};
      for (const a of s) o[a] = a;
      return o;
    }),
    (e.getValidEnumValues = (s) => {
      const o = e.objectKeys(s).filter((i) => typeof s[s[i]] != "number"),
        a = {};
      for (const i of o) a[i] = s[i];
      return e.objectValues(a);
    }),
    (e.objectValues = (s) =>
      e.objectKeys(s).map(function (o) {
        return s[o];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const o = [];
            for (const a in s)
              Object.prototype.hasOwnProperty.call(s, a) && o.push(a);
            return o;
          }),
    (e.find = (s, o) => {
      for (const a of s) if (o(a)) return a;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (s) => Number.isInteger(s)
        : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s);
  function r(s, o = " | ") {
    return s.map((a) => (typeof a == "string" ? `'${a}'` : a)).join(o);
  }
  (e.joinValues = r),
    (e.jsonStringifyReplacer = (s, o) =>
      typeof o == "bigint" ? o.toString() : o);
})(de || (de = {}));
var no;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(no || (no = {}));
const O = de.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Mt = (e) => {
    switch (typeof e) {
      case "undefined":
        return O.undefined;
      case "string":
        return O.string;
      case "number":
        return isNaN(e) ? O.nan : O.number;
      case "boolean":
        return O.boolean;
      case "function":
        return O.function;
      case "bigint":
        return O.bigint;
      case "symbol":
        return O.symbol;
      case "object":
        return Array.isArray(e)
          ? O.array
          : e === null
          ? O.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? O.promise
          : typeof Map < "u" && e instanceof Map
          ? O.map
          : typeof Set < "u" && e instanceof Set
          ? O.set
          : typeof Date < "u" && e instanceof Date
          ? O.date
          : O.object;
      default:
        return O.unknown;
    }
  },
  E = de.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  zf = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class qe extends Error {
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      });
    const n = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = "ZodError"),
      (this.issues = t);
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n =
        t ||
        function (o) {
          return o.message;
        },
      r = { _errors: [] },
      s = (o) => {
        for (const a of o.issues)
          if (a.code === "invalid_union") a.unionErrors.map(s);
          else if (a.code === "invalid_return_type") s(a.returnTypeError);
          else if (a.code === "invalid_arguments") s(a.argumentsError);
          else if (a.path.length === 0) r._errors.push(n(a));
          else {
            let i = r,
              c = 0;
            for (; c < a.path.length; ) {
              const d = a.path[c];
              c === a.path.length - 1
                ? ((i[d] = i[d] || { _errors: [] }), i[d]._errors.push(n(a)))
                : (i[d] = i[d] || { _errors: [] }),
                (i = i[d]),
                c++;
            }
          }
      };
    return s(this), r;
  }
  static assert(t) {
    if (!(t instanceof qe)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, de.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const s of this.issues)
      s.path.length > 0
        ? ((n[s.path[0]] = n[s.path[0]] || []), n[s.path[0]].push(t(s)))
        : r.push(t(s));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
qe.create = (e) => new qe(e);
const Rn = (e, t) => {
  let n;
  switch (e.code) {
    case E.invalid_type:
      e.received === O.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case E.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        de.jsonStringifyReplacer
      )}`;
      break;
    case E.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${de.joinValues(e.keys, ", ")}`;
      break;
    case E.invalid_union:
      n = "Invalid input";
      break;
    case E.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${de.joinValues(e.options)}`;
      break;
    case E.invalid_enum_value:
      n = `Invalid enum value. Expected ${de.joinValues(
        e.options
      )}, received '${e.received}'`;
      break;
    case E.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case E.invalid_return_type:
      n = "Invalid function return type";
      break;
    case E.invalid_date:
      n = "Invalid date";
      break;
    case E.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : de.assertNever(e.validation)
        : e.validation !== "regex"
        ? (n = `Invalid ${e.validation}`)
        : (n = "Invalid");
      break;
    case E.too_small:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
          } ${e.minimum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "over"
          } ${e.minimum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${e.minimum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(e.minimum))}`)
        : (n = "Invalid input");
      break;
    case E.too_big:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
          } ${e.maximum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "under"
          } ${e.maximum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "bigint"
        ? (n = `BigInt must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(e.maximum))}`)
        : (n = "Invalid input");
      break;
    case E.custom:
      n = "Invalid input";
      break;
    case E.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case E.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case E.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), de.assertNever(e);
  }
  return { message: n };
};
let Ji = Rn;
function Hf(e) {
  Ji = e;
}
function Zr() {
  return Ji;
}
const Wr = (e) => {
    const { data: t, path: n, errorMaps: r, issueData: s } = e,
      o = [...n, ...(s.path || [])],
      a = { ...s, path: o };
    if (s.message !== void 0) return { ...s, path: o, message: s.message };
    let i = "";
    const c = r
      .filter((d) => !!d)
      .slice()
      .reverse();
    for (const d of c) i = d(a, { data: t, defaultError: i }).message;
    return { ...s, path: o, message: i };
  },
  Bf = [];
function j(e, t) {
  const n = Zr(),
    r = Wr({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === Rn ? void 0 : Rn,
      ].filter((s) => !!s),
    });
  e.common.issues.push(r);
}
class Fe {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted") return J;
      s.status === "dirty" && t.dirty(), r.push(s.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const s of n) {
      const o = await s.key,
        a = await s.value;
      r.push({ key: o, value: a });
    }
    return Fe.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: o, value: a } = s;
      if (o.status === "aborted" || a.status === "aborted") return J;
      o.status === "dirty" && t.dirty(),
        a.status === "dirty" && t.dirty(),
        o.value !== "__proto__" &&
          (typeof a.value < "u" || s.alwaysSet) &&
          (r[o.value] = a.value);
    }
    return { status: t.value, value: r };
  }
}
const J = Object.freeze({ status: "aborted" }),
  _n = (e) => ({ status: "dirty", value: e }),
  Ve = (e) => ({ status: "valid", value: e }),
  ro = (e) => e.status === "aborted",
  so = (e) => e.status === "dirty",
  qn = (e) => e.status === "valid",
  Kn = (e) => typeof Promise < "u" && e instanceof Promise;
function qr(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return t.get(e);
}
function Qi(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !s : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return t.set(e, n), n;
}
var H;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message);
})(H || (H = {}));
var Gn, zn;
class yt {
  constructor(t, n, r, s) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = n),
      (this._path = r),
      (this._key = s);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const ja = (e, t) => {
  if (qn(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new qe(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function re(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: s,
  } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: s }
    : {
        errorMap: (a, i) => {
          var c, d;
          const { message: f } = e;
          return a.code === "invalid_enum_value"
            ? { message: f ?? i.defaultError }
            : typeof i.data > "u"
            ? {
                message:
                  (c = f ?? r) !== null && c !== void 0 ? c : i.defaultError,
              }
            : a.code !== "invalid_type"
            ? { message: i.defaultError }
            : {
                message:
                  (d = f ?? n) !== null && d !== void 0 ? d : i.defaultError,
              };
        },
        description: s,
      };
}
class se {
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Mt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: Mt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new Fe(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Mt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Kn(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const s = {
        common: {
          issues: [],
          async:
            (r = n == null ? void 0 : n.async) !== null && r !== void 0
              ? r
              : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Mt(t),
      },
      o = this._parseSync({ data: t, path: s.path, parent: s });
    return ja(s, o);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Mt(t),
      },
      s = this._parse({ data: t, path: r.path, parent: r }),
      o = await (Kn(s) ? s : Promise.resolve(s));
    return ja(r, o);
  }
  refine(t, n) {
    const r = (s) =>
      typeof n == "string" || typeof n > "u"
        ? { message: n }
        : typeof n == "function"
        ? n(s)
        : n;
    return this._refinement((s, o) => {
      const a = t(s),
        i = () => o.addIssue({ code: E.custom, ...r(s) });
      return typeof Promise < "u" && a instanceof Promise
        ? a.then((c) => (c ? !0 : (i(), !1)))
        : a
        ? !0
        : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, s) =>
      t(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1)
    );
  }
  _refinement(t) {
    return new lt({
      schema: this,
      typeName: X.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return vt.create(this, this._def);
  }
  nullable() {
    return Vt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return at.create(this, this._def);
  }
  promise() {
    return An.create(this, this._def);
  }
  or(t) {
    return Qn.create([this, t], this._def);
  }
  and(t) {
    return er.create(this, t, this._def);
  }
  transform(t) {
    return new lt({
      ...re(this._def),
      schema: this,
      typeName: X.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new or({
      ...re(this._def),
      innerType: this,
      defaultValue: n,
      typeName: X.ZodDefault,
    });
  }
  brand() {
    return new Fo({ typeName: X.ZodBranded, type: this, ...re(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ar({
      ...re(this._def),
      innerType: this,
      catchValue: n,
      typeName: X.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return pr.create(this, t);
  }
  readonly() {
    return ir.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Zf = /^c[^\s-]{8,}$/i,
  Wf = /^[0-9a-z]+$/,
  qf = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  Kf =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Yf = /^[a-z0-9_-]{21}$/i,
  Xf =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Jf =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Qf = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ms;
const eg =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  tg =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ng = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  el =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  rg = new RegExp(`^${el}$`);
function tl(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function sg(e) {
  return new RegExp(`^${tl(e)}$`);
}
function nl(e) {
  let t = `${el}T${tl(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function og(e, t) {
  return !!(
    ((t === "v4" || !t) && eg.test(e)) ||
    ((t === "v6" || !t) && tg.test(e))
  );
}
class ot extends se {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== O.string)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        j(o, {
          code: E.invalid_type,
          expected: O.string,
          received: o.parsedType,
        }),
        J
      );
    }
    const r = new Fe();
    let s;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value &&
          ((s = this._getOrReturnCtx(t, s)),
          j(s, {
            code: E.too_small,
            minimum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "max")
        t.data.length > o.value &&
          ((s = this._getOrReturnCtx(t, s)),
          j(s, {
            code: E.too_big,
            maximum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "length") {
        const a = t.data.length > o.value,
          i = t.data.length < o.value;
        (a || i) &&
          ((s = this._getOrReturnCtx(t, s)),
          a
            ? j(s, {
                code: E.too_big,
                maximum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message,
              })
            : i &&
              j(s, {
                code: E.too_small,
                minimum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message,
              }),
          r.dirty());
      } else if (o.kind === "email")
        Jf.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          j(s, {
            validation: "email",
            code: E.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "emoji")
        Ms || (Ms = new RegExp(Qf, "u")),
          Ms.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            j(s, {
              validation: "emoji",
              code: E.invalid_string,
              message: o.message,
            }),
            r.dirty());
      else if (o.kind === "uuid")
        Kf.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          j(s, {
            validation: "uuid",
            code: E.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "nanoid")
        Yf.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          j(s, {
            validation: "nanoid",
            code: E.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "cuid")
        Zf.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          j(s, {
            validation: "cuid",
            code: E.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "cuid2")
        Wf.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          j(s, {
            validation: "cuid2",
            code: E.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "ulid")
        qf.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          j(s, {
            validation: "ulid",
            code: E.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (s = this._getOrReturnCtx(t, s)),
            j(s, {
              validation: "url",
              code: E.invalid_string,
              message: o.message,
            }),
            r.dirty();
        }
      else
        o.kind === "regex"
          ? ((o.regex.lastIndex = 0),
            o.regex.test(t.data) ||
              ((s = this._getOrReturnCtx(t, s)),
              j(s, {
                validation: "regex",
                code: E.invalid_string,
                message: o.message,
              }),
              r.dirty()))
          : o.kind === "trim"
          ? (t.data = t.data.trim())
          : o.kind === "includes"
          ? t.data.includes(o.value, o.position) ||
            ((s = this._getOrReturnCtx(t, s)),
            j(s, {
              code: E.invalid_string,
              validation: { includes: o.value, position: o.position },
              message: o.message,
            }),
            r.dirty())
          : o.kind === "toLowerCase"
          ? (t.data = t.data.toLowerCase())
          : o.kind === "toUpperCase"
          ? (t.data = t.data.toUpperCase())
          : o.kind === "startsWith"
          ? t.data.startsWith(o.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            j(s, {
              code: E.invalid_string,
              validation: { startsWith: o.value },
              message: o.message,
            }),
            r.dirty())
          : o.kind === "endsWith"
          ? t.data.endsWith(o.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            j(s, {
              code: E.invalid_string,
              validation: { endsWith: o.value },
              message: o.message,
            }),
            r.dirty())
          : o.kind === "datetime"
          ? nl(o).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            j(s, {
              code: E.invalid_string,
              validation: "datetime",
              message: o.message,
            }),
            r.dirty())
          : o.kind === "date"
          ? rg.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            j(s, {
              code: E.invalid_string,
              validation: "date",
              message: o.message,
            }),
            r.dirty())
          : o.kind === "time"
          ? sg(o).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            j(s, {
              code: E.invalid_string,
              validation: "time",
              message: o.message,
            }),
            r.dirty())
          : o.kind === "duration"
          ? Xf.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            j(s, {
              validation: "duration",
              code: E.invalid_string,
              message: o.message,
            }),
            r.dirty())
          : o.kind === "ip"
          ? og(t.data, o.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            j(s, {
              validation: "ip",
              code: E.invalid_string,
              message: o.message,
            }),
            r.dirty())
          : o.kind === "base64"
          ? ng.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            j(s, {
              validation: "base64",
              code: E.invalid_string,
              message: o.message,
            }),
            r.dirty())
          : de.assertNever(o);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: E.invalid_string,
      ...H.errToObj(r),
    });
  }
  _addCheck(t) {
    return new ot({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...H.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...H.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...H.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...H.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...H.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...H.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...H.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...H.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...H.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...H.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          offset:
            (n = t == null ? void 0 : t.offset) !== null && n !== void 0
              ? n
              : !1,
          local:
            (r = t == null ? void 0 : t.local) !== null && r !== void 0
              ? r
              : !1,
          ...H.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "time", precision: null, message: t })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          ...H.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...H.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...H.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...H.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...H.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...H.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...H.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...H.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...H.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, H.errToObj(t));
  }
  trim() {
    return new ot({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new ot({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new ot({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
ot.create = (e) => {
  var t;
  return new ot({
    checks: [],
    typeName: X.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...re(e),
  });
};
function ag(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    s = n > r ? n : r,
    o = parseInt(e.toFixed(s).replace(".", "")),
    a = parseInt(t.toFixed(s).replace(".", ""));
  return (o % a) / Math.pow(10, s);
}
class jt extends se {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== O.number)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        j(o, {
          code: E.invalid_type,
          expected: O.number,
          received: o.parsedType,
        }),
        J
      );
    }
    let r;
    const s = new Fe();
    for (const o of this._def.checks)
      o.kind === "int"
        ? de.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          j(r, {
            code: E.invalid_type,
            expected: "integer",
            received: "float",
            message: o.message,
          }),
          s.dirty())
        : o.kind === "min"
        ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          j(r, {
            code: E.too_small,
            minimum: o.value,
            type: "number",
            inclusive: o.inclusive,
            exact: !1,
            message: o.message,
          }),
          s.dirty())
        : o.kind === "max"
        ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          j(r, {
            code: E.too_big,
            maximum: o.value,
            type: "number",
            inclusive: o.inclusive,
            exact: !1,
            message: o.message,
          }),
          s.dirty())
        : o.kind === "multipleOf"
        ? ag(t.data, o.value) !== 0 &&
          ((r = this._getOrReturnCtx(t, r)),
          j(r, {
            code: E.not_multiple_of,
            multipleOf: o.value,
            message: o.message,
          }),
          s.dirty())
        : o.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          j(r, { code: E.not_finite, message: o.message }),
          s.dirty())
        : de.assertNever(o);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, H.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, H.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, H.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, H.toString(n));
  }
  setLimit(t, n, r, s) {
    return new jt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: H.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new jt({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: H.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: H.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: H.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: H.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: H.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: H.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: H.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: H.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: H.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && de.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
jt.create = (e) =>
  new jt({
    checks: [],
    typeName: X.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...re(e),
  });
class Ot extends se {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = BigInt(t.data)),
      this._getType(t) !== O.bigint)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        j(o, {
          code: E.invalid_type,
          expected: O.bigint,
          received: o.parsedType,
        }),
        J
      );
    }
    let r;
    const s = new Fe();
    for (const o of this._def.checks)
      o.kind === "min"
        ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          j(r, {
            code: E.too_small,
            type: "bigint",
            minimum: o.value,
            inclusive: o.inclusive,
            message: o.message,
          }),
          s.dirty())
        : o.kind === "max"
        ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          j(r, {
            code: E.too_big,
            type: "bigint",
            maximum: o.value,
            inclusive: o.inclusive,
            message: o.message,
          }),
          s.dirty())
        : o.kind === "multipleOf"
        ? t.data % o.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(t, r)),
          j(r, {
            code: E.not_multiple_of,
            multipleOf: o.value,
            message: o.message,
          }),
          s.dirty())
        : de.assertNever(o);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, H.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, H.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, H.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, H.toString(n));
  }
  setLimit(t, n, r, s) {
    return new Ot({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: H.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new Ot({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: H.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: H.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: H.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: H.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: H.toString(n),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Ot.create = (e) => {
  var t;
  return new Ot({
    checks: [],
    typeName: X.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...re(e),
  });
};
class Yn extends se {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== O.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        j(r, {
          code: E.invalid_type,
          expected: O.boolean,
          received: r.parsedType,
        }),
        J
      );
    }
    return Ve(t.data);
  }
}
Yn.create = (e) =>
  new Yn({
    typeName: X.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...re(e),
  });
class Jt extends se {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== O.date)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        j(o, {
          code: E.invalid_type,
          expected: O.date,
          received: o.parsedType,
        }),
        J
      );
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return j(o, { code: E.invalid_date }), J;
    }
    const r = new Fe();
    let s;
    for (const o of this._def.checks)
      o.kind === "min"
        ? t.data.getTime() < o.value &&
          ((s = this._getOrReturnCtx(t, s)),
          j(s, {
            code: E.too_small,
            message: o.message,
            inclusive: !0,
            exact: !1,
            minimum: o.value,
            type: "date",
          }),
          r.dirty())
        : o.kind === "max"
        ? t.data.getTime() > o.value &&
          ((s = this._getOrReturnCtx(t, s)),
          j(s, {
            code: E.too_big,
            message: o.message,
            inclusive: !0,
            exact: !1,
            maximum: o.value,
            type: "date",
          }),
          r.dirty())
        : de.assertNever(o);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new Jt({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: H.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: H.toString(n),
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
Jt.create = (e) =>
  new Jt({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: X.ZodDate,
    ...re(e),
  });
class Kr extends se {
  _parse(t) {
    if (this._getType(t) !== O.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        j(r, {
          code: E.invalid_type,
          expected: O.symbol,
          received: r.parsedType,
        }),
        J
      );
    }
    return Ve(t.data);
  }
}
Kr.create = (e) => new Kr({ typeName: X.ZodSymbol, ...re(e) });
class Xn extends se {
  _parse(t) {
    if (this._getType(t) !== O.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        j(r, {
          code: E.invalid_type,
          expected: O.undefined,
          received: r.parsedType,
        }),
        J
      );
    }
    return Ve(t.data);
  }
}
Xn.create = (e) => new Xn({ typeName: X.ZodUndefined, ...re(e) });
class Jn extends se {
  _parse(t) {
    if (this._getType(t) !== O.null) {
      const r = this._getOrReturnCtx(t);
      return (
        j(r, {
          code: E.invalid_type,
          expected: O.null,
          received: r.parsedType,
        }),
        J
      );
    }
    return Ve(t.data);
  }
}
Jn.create = (e) => new Jn({ typeName: X.ZodNull, ...re(e) });
class En extends se {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return Ve(t.data);
  }
}
En.create = (e) => new En({ typeName: X.ZodAny, ...re(e) });
class Xt extends se {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return Ve(t.data);
  }
}
Xt.create = (e) => new Xt({ typeName: X.ZodUnknown, ...re(e) });
class Et extends se {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      j(n, { code: E.invalid_type, expected: O.never, received: n.parsedType }),
      J
    );
  }
}
Et.create = (e) => new Et({ typeName: X.ZodNever, ...re(e) });
class Yr extends se {
  _parse(t) {
    if (this._getType(t) !== O.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        j(r, {
          code: E.invalid_type,
          expected: O.void,
          received: r.parsedType,
        }),
        J
      );
    }
    return Ve(t.data);
  }
}
Yr.create = (e) => new Yr({ typeName: X.ZodVoid, ...re(e) });
class at extends se {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      s = this._def;
    if (n.parsedType !== O.array)
      return (
        j(n, {
          code: E.invalid_type,
          expected: O.array,
          received: n.parsedType,
        }),
        J
      );
    if (s.exactLength !== null) {
      const a = n.data.length > s.exactLength.value,
        i = n.data.length < s.exactLength.value;
      (a || i) &&
        (j(n, {
          code: a ? E.too_big : E.too_small,
          minimum: i ? s.exactLength.value : void 0,
          maximum: a ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (s.minLength !== null &&
        n.data.length < s.minLength.value &&
        (j(n, {
          code: E.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        r.dirty()),
      s.maxLength !== null &&
        n.data.length > s.maxLength.value &&
        (j(n, {
          code: E.too_big,
          maximum: s.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((a, i) => s.type._parseAsync(new yt(n, a, n.path, i)))
      ).then((a) => Fe.mergeArray(r, a));
    const o = [...n.data].map((a, i) =>
      s.type._parseSync(new yt(n, a, n.path, i))
    );
    return Fe.mergeArray(r, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new at({
      ...this._def,
      minLength: { value: t, message: H.toString(n) },
    });
  }
  max(t, n) {
    return new at({
      ...this._def,
      maxLength: { value: t, message: H.toString(n) },
    });
  }
  length(t, n) {
    return new at({
      ...this._def,
      exactLength: { value: t, message: H.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
at.create = (e, t) =>
  new at({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: X.ZodArray,
    ...re(t),
  });
function yn(e) {
  if (e instanceof Ce) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = vt.create(yn(r));
    }
    return new Ce({ ...e._def, shape: () => t });
  } else
    return e instanceof at
      ? new at({ ...e._def, type: yn(e.element) })
      : e instanceof vt
      ? vt.create(yn(e.unwrap()))
      : e instanceof Vt
      ? Vt.create(yn(e.unwrap()))
      : e instanceof xt
      ? xt.create(e.items.map((t) => yn(t)))
      : e;
}
class Ce extends se {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = de.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== O.object) {
      const d = this._getOrReturnCtx(t);
      return (
        j(d, {
          code: E.invalid_type,
          expected: O.object,
          received: d.parsedType,
        }),
        J
      );
    }
    const { status: r, ctx: s } = this._processInputParams(t),
      { shape: o, keys: a } = this._getCached(),
      i = [];
    if (
      !(this._def.catchall instanceof Et && this._def.unknownKeys === "strip")
    )
      for (const d in s.data) a.includes(d) || i.push(d);
    const c = [];
    for (const d of a) {
      const f = o[d],
        g = s.data[d];
      c.push({
        key: { status: "valid", value: d },
        value: f._parse(new yt(s, g, s.path, d)),
        alwaysSet: d in s.data,
      });
    }
    if (this._def.catchall instanceof Et) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const f of i)
          c.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: s.data[f] },
          });
      else if (d === "strict")
        i.length > 0 &&
          (j(s, { code: E.unrecognized_keys, keys: i }), r.dirty());
      else if (d !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const f of i) {
        const g = s.data[f];
        c.push({
          key: { status: "valid", value: f },
          value: d._parse(new yt(s, g, s.path, f)),
          alwaysSet: f in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const d = [];
            for (const f of c) {
              const g = await f.key,
                m = await f.value;
              d.push({ key: g, value: m, alwaysSet: f.alwaysSet });
            }
            return d;
          })
          .then((d) => Fe.mergeObjectSync(r, d))
      : Fe.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      H.errToObj,
      new Ce({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var s, o, a, i;
                const c =
                  (a =
                    (o = (s = this._def).errorMap) === null || o === void 0
                      ? void 0
                      : o.call(s, n, r).message) !== null && a !== void 0
                    ? a
                    : r.defaultError;
                return n.code === "unrecognized_keys"
                  ? {
                      message:
                        (i = H.errToObj(t).message) !== null && i !== void 0
                          ? i
                          : c,
                    }
                  : { message: c };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Ce({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new Ce({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new Ce({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new Ce({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: X.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new Ce({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      de.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new Ce({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      de.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new Ce({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return yn(this);
  }
  partial(t) {
    const n = {};
    return (
      de.objectKeys(this.shape).forEach((r) => {
        const s = this.shape[r];
        t && !t[r] ? (n[r] = s) : (n[r] = s.optional());
      }),
      new Ce({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      de.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let o = this.shape[r];
          for (; o instanceof vt; ) o = o._def.innerType;
          n[r] = o;
        }
      }),
      new Ce({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return rl(de.objectKeys(this.shape));
  }
}
Ce.create = (e, t) =>
  new Ce({
    shape: () => e,
    unknownKeys: "strip",
    catchall: Et.create(),
    typeName: X.ZodObject,
    ...re(t),
  });
Ce.strictCreate = (e, t) =>
  new Ce({
    shape: () => e,
    unknownKeys: "strict",
    catchall: Et.create(),
    typeName: X.ZodObject,
    ...re(t),
  });
Ce.lazycreate = (e, t) =>
  new Ce({
    shape: e,
    unknownKeys: "strip",
    catchall: Et.create(),
    typeName: X.ZodObject,
    ...re(t),
  });
class Qn extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function s(o) {
      for (const i of o) if (i.result.status === "valid") return i.result;
      for (const i of o)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((i) => new qe(i.ctx.common.issues));
      return j(n, { code: E.invalid_union, unionErrors: a }), J;
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (o) => {
          const a = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await o._parseAsync({
              data: n.data,
              path: n.path,
              parent: a,
            }),
            ctx: a,
          };
        })
      ).then(s);
    {
      let o;
      const a = [];
      for (const c of r) {
        const d = { ...n, common: { ...n.common, issues: [] }, parent: null },
          f = c._parseSync({ data: n.data, path: n.path, parent: d });
        if (f.status === "valid") return f;
        f.status === "dirty" && !o && (o = { result: f, ctx: d }),
          d.common.issues.length && a.push(d.common.issues);
      }
      if (o) return n.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((c) => new qe(c));
      return j(n, { code: E.invalid_union, unionErrors: i }), J;
    }
  }
  get options() {
    return this._def.options;
  }
}
Qn.create = (e, t) => new Qn({ options: e, typeName: X.ZodUnion, ...re(t) });
const Ct = (e) =>
  e instanceof nr
    ? Ct(e.schema)
    : e instanceof lt
    ? Ct(e.innerType())
    : e instanceof rr
    ? [e.value]
    : e instanceof Lt
    ? e.options
    : e instanceof sr
    ? de.objectValues(e.enum)
    : e instanceof or
    ? Ct(e._def.innerType)
    : e instanceof Xn
    ? [void 0]
    : e instanceof Jn
    ? [null]
    : e instanceof vt
    ? [void 0, ...Ct(e.unwrap())]
    : e instanceof Vt
    ? [null, ...Ct(e.unwrap())]
    : e instanceof Fo || e instanceof ir
    ? Ct(e.unwrap())
    : e instanceof ar
    ? Ct(e._def.innerType)
    : [];
class cs extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== O.object)
      return (
        j(n, {
          code: E.invalid_type,
          expected: O.object,
          received: n.parsedType,
        }),
        J
      );
    const r = this.discriminator,
      s = n.data[r],
      o = this.optionsMap.get(s);
    return o
      ? n.common.async
        ? o._parseAsync({ data: n.data, path: n.path, parent: n })
        : o._parseSync({ data: n.data, path: n.path, parent: n })
      : (j(n, {
          code: E.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        J);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, n, r) {
    const s = new Map();
    for (const o of n) {
      const a = Ct(o.shape[t]);
      if (!a.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        );
      for (const i of a) {
        if (s.has(i))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(
              i
            )}`
          );
        s.set(i, o);
      }
    }
    return new cs({
      typeName: X.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...re(r),
    });
  }
}
function oo(e, t) {
  const n = Mt(e),
    r = Mt(t);
  if (e === t) return { valid: !0, data: e };
  if (n === O.object && r === O.object) {
    const s = de.objectKeys(t),
      o = de.objectKeys(e).filter((i) => s.indexOf(i) !== -1),
      a = { ...e, ...t };
    for (const i of o) {
      const c = oo(e[i], t[i]);
      if (!c.valid) return { valid: !1 };
      a[i] = c.data;
    }
    return { valid: !0, data: a };
  } else if (n === O.array && r === O.array) {
    if (e.length !== t.length) return { valid: !1 };
    const s = [];
    for (let o = 0; o < e.length; o++) {
      const a = e[o],
        i = t[o],
        c = oo(a, i);
      if (!c.valid) return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return n === O.date && r === O.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class er extends se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = (o, a) => {
        if (ro(o) || ro(a)) return J;
        const i = oo(o.value, a.value);
        return i.valid
          ? ((so(o) || so(a)) && n.dirty(), { status: n.value, value: i.data })
          : (j(r, { code: E.invalid_intersection_types }), J);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([o, a]) => s(o, a))
      : s(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
        );
  }
}
er.create = (e, t, n) =>
  new er({ left: e, right: t, typeName: X.ZodIntersection, ...re(n) });
class xt extends se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== O.array)
      return (
        j(r, {
          code: E.invalid_type,
          expected: O.array,
          received: r.parsedType,
        }),
        J
      );
    if (r.data.length < this._def.items.length)
      return (
        j(r, {
          code: E.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        J
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (j(r, {
        code: E.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const o = [...r.data]
      .map((a, i) => {
        const c = this._def.items[i] || this._def.rest;
        return c ? c._parse(new yt(r, a, r.path, i)) : null;
      })
      .filter((a) => !!a);
    return r.common.async
      ? Promise.all(o).then((a) => Fe.mergeArray(n, a))
      : Fe.mergeArray(n, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new xt({ ...this._def, rest: t });
  }
}
xt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new xt({ items: e, typeName: X.ZodTuple, rest: null, ...re(t) });
};
class tr extends se {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== O.object)
      return (
        j(r, {
          code: E.invalid_type,
          expected: O.object,
          received: r.parsedType,
        }),
        J
      );
    const s = [],
      o = this._def.keyType,
      a = this._def.valueType;
    for (const i in r.data)
      s.push({
        key: o._parse(new yt(r, i, r.path, i)),
        value: a._parse(new yt(r, r.data[i], r.path, i)),
        alwaysSet: i in r.data,
      });
    return r.common.async
      ? Fe.mergeObjectAsync(n, s)
      : Fe.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof se
      ? new tr({ keyType: t, valueType: n, typeName: X.ZodRecord, ...re(r) })
      : new tr({
          keyType: ot.create(),
          valueType: t,
          typeName: X.ZodRecord,
          ...re(n),
        });
  }
}
class Xr extends se {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== O.map)
      return (
        j(r, { code: E.invalid_type, expected: O.map, received: r.parsedType }),
        J
      );
    const s = this._def.keyType,
      o = this._def.valueType,
      a = [...r.data.entries()].map(([i, c], d) => ({
        key: s._parse(new yt(r, i, r.path, [d, "key"])),
        value: o._parse(new yt(r, c, r.path, [d, "value"])),
      }));
    if (r.common.async) {
      const i = new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const d = await c.key,
            f = await c.value;
          if (d.status === "aborted" || f.status === "aborted") return J;
          (d.status === "dirty" || f.status === "dirty") && n.dirty(),
            i.set(d.value, f.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = new Map();
      for (const c of a) {
        const d = c.key,
          f = c.value;
        if (d.status === "aborted" || f.status === "aborted") return J;
        (d.status === "dirty" || f.status === "dirty") && n.dirty(),
          i.set(d.value, f.value);
      }
      return { status: n.value, value: i };
    }
  }
}
Xr.create = (e, t, n) =>
  new Xr({ valueType: t, keyType: e, typeName: X.ZodMap, ...re(n) });
class Qt extends se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== O.set)
      return (
        j(r, { code: E.invalid_type, expected: O.set, received: r.parsedType }),
        J
      );
    const s = this._def;
    s.minSize !== null &&
      r.data.size < s.minSize.value &&
      (j(r, {
        code: E.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      n.dirty()),
      s.maxSize !== null &&
        r.data.size > s.maxSize.value &&
        (j(r, {
          code: E.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        n.dirty());
    const o = this._def.valueType;
    function a(c) {
      const d = new Set();
      for (const f of c) {
        if (f.status === "aborted") return J;
        f.status === "dirty" && n.dirty(), d.add(f.value);
      }
      return { status: n.value, value: d };
    }
    const i = [...r.data.values()].map((c, d) =>
      o._parse(new yt(r, c, r.path, d))
    );
    return r.common.async ? Promise.all(i).then((c) => a(c)) : a(i);
  }
  min(t, n) {
    return new Qt({
      ...this._def,
      minSize: { value: t, message: H.toString(n) },
    });
  }
  max(t, n) {
    return new Qt({
      ...this._def,
      maxSize: { value: t, message: H.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Qt.create = (e, t) =>
  new Qt({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: X.ZodSet,
    ...re(t),
  });
class wn extends se {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== O.function)
      return (
        j(n, {
          code: E.invalid_type,
          expected: O.function,
          received: n.parsedType,
        }),
        J
      );
    function r(i, c) {
      return Wr({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Zr(),
          Rn,
        ].filter((d) => !!d),
        issueData: { code: E.invalid_arguments, argumentsError: c },
      });
    }
    function s(i, c) {
      return Wr({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Zr(),
          Rn,
        ].filter((d) => !!d),
        issueData: { code: E.invalid_return_type, returnTypeError: c },
      });
    }
    const o = { errorMap: n.common.contextualErrorMap },
      a = n.data;
    if (this._def.returns instanceof An) {
      const i = this;
      return Ve(async function (...c) {
        const d = new qe([]),
          f = await i._def.args.parseAsync(c, o).catch((p) => {
            throw (d.addIssue(r(c, p)), d);
          }),
          g = await Reflect.apply(a, this, f);
        return await i._def.returns._def.type.parseAsync(g, o).catch((p) => {
          throw (d.addIssue(s(g, p)), d);
        });
      });
    } else {
      const i = this;
      return Ve(function (...c) {
        const d = i._def.args.safeParse(c, o);
        if (!d.success) throw new qe([r(c, d.error)]);
        const f = Reflect.apply(a, this, d.data),
          g = i._def.returns.safeParse(f, o);
        if (!g.success) throw new qe([s(f, g.error)]);
        return g.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new wn({ ...this._def, args: xt.create(t).rest(Xt.create()) });
  }
  returns(t) {
    return new wn({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new wn({
      args: t || xt.create([]).rest(Xt.create()),
      returns: n || Xt.create(),
      typeName: X.ZodFunction,
      ...re(r),
    });
  }
}
class nr extends se {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
nr.create = (e, t) => new nr({ getter: e, typeName: X.ZodLazy, ...re(t) });
class rr extends se {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        j(n, {
          received: n.data,
          code: E.invalid_literal,
          expected: this._def.value,
        }),
        J
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
rr.create = (e, t) => new rr({ value: e, typeName: X.ZodLiteral, ...re(t) });
function rl(e, t) {
  return new Lt({ values: e, typeName: X.ZodEnum, ...re(t) });
}
class Lt extends se {
  constructor() {
    super(...arguments), Gn.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        j(n, {
          expected: de.joinValues(r),
          received: n.parsedType,
          code: E.invalid_type,
        }),
        J
      );
    }
    if (
      (qr(this, Gn) || Qi(this, Gn, new Set(this._def.values)),
      !qr(this, Gn).has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        j(n, { received: n.data, code: E.invalid_enum_value, options: r }), J
      );
    }
    return Ve(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return Lt.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return Lt.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n }
    );
  }
}
Gn = new WeakMap();
Lt.create = rl;
class sr extends se {
  constructor() {
    super(...arguments), zn.set(this, void 0);
  }
  _parse(t) {
    const n = de.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== O.string && r.parsedType !== O.number) {
      const s = de.objectValues(n);
      return (
        j(r, {
          expected: de.joinValues(s),
          received: r.parsedType,
          code: E.invalid_type,
        }),
        J
      );
    }
    if (
      (qr(this, zn) ||
        Qi(this, zn, new Set(de.getValidEnumValues(this._def.values))),
      !qr(this, zn).has(t.data))
    ) {
      const s = de.objectValues(n);
      return (
        j(r, { received: r.data, code: E.invalid_enum_value, options: s }), J
      );
    }
    return Ve(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
zn = new WeakMap();
sr.create = (e, t) =>
  new sr({ values: e, typeName: X.ZodNativeEnum, ...re(t) });
class An extends se {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== O.promise && n.common.async === !1)
      return (
        j(n, {
          code: E.invalid_type,
          expected: O.promise,
          received: n.parsedType,
        }),
        J
      );
    const r = n.parsedType === O.promise ? n.data : Promise.resolve(n.data);
    return Ve(
      r.then((s) =>
        this._def.type.parseAsync(s, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        })
      )
    );
  }
}
An.create = (e, t) => new An({ type: e, typeName: X.ZodPromise, ...re(t) });
class lt extends se {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === X.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = this._def.effect || null,
      o = {
        addIssue: (a) => {
          j(r, a), a.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((o.addIssue = o.addIssue.bind(o)), s.type === "preprocess")) {
      const a = s.transform(r.data, o);
      if (r.common.async)
        return Promise.resolve(a).then(async (i) => {
          if (n.value === "aborted") return J;
          const c = await this._def.schema._parseAsync({
            data: i,
            path: r.path,
            parent: r,
          });
          return c.status === "aborted"
            ? J
            : c.status === "dirty" || n.value === "dirty"
            ? _n(c.value)
            : c;
        });
      {
        if (n.value === "aborted") return J;
        const i = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r,
        });
        return i.status === "aborted"
          ? J
          : i.status === "dirty" || n.value === "dirty"
          ? _n(i.value)
          : i;
      }
    }
    if (s.type === "refinement") {
      const a = (i) => {
        const c = s.refinement(i, o);
        if (r.common.async) return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return i;
      };
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return i.status === "aborted"
          ? J
          : (i.status === "dirty" && n.dirty(),
            a(i.value),
            { status: n.value, value: i.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((i) =>
            i.status === "aborted"
              ? J
              : (i.status === "dirty" && n.dirty(),
                a(i.value).then(() => ({ status: n.value, value: i.value })))
          );
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!qn(a)) return a;
        const i = s.transform(a.value, o);
        if (i instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: n.value, value: i };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((a) =>
            qn(a)
              ? Promise.resolve(s.transform(a.value, o)).then((i) => ({
                  status: n.value,
                  value: i,
                }))
              : a
          );
    de.assertNever(s);
  }
}
lt.create = (e, t, n) =>
  new lt({ schema: e, typeName: X.ZodEffects, effect: t, ...re(n) });
lt.createWithPreprocess = (e, t, n) =>
  new lt({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: X.ZodEffects,
    ...re(n),
  });
class vt extends se {
  _parse(t) {
    return this._getType(t) === O.undefined
      ? Ve(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
vt.create = (e, t) =>
  new vt({ innerType: e, typeName: X.ZodOptional, ...re(t) });
class Vt extends se {
  _parse(t) {
    return this._getType(t) === O.null
      ? Ve(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Vt.create = (e, t) =>
  new Vt({ innerType: e, typeName: X.ZodNullable, ...re(t) });
class or extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === O.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
or.create = (e, t) =>
  new or({
    innerType: e,
    typeName: X.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...re(t),
  });
class ar extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      s = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return Kn(s)
      ? s.then((o) => ({
          status: "valid",
          value:
            o.status === "valid"
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new qe(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new qe(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ar.create = (e, t) =>
  new ar({
    innerType: e,
    typeName: X.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...re(t),
  });
class Jr extends se {
  _parse(t) {
    if (this._getType(t) !== O.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        j(r, { code: E.invalid_type, expected: O.nan, received: r.parsedType }),
        J
      );
    }
    return { status: "valid", value: t.data };
  }
}
Jr.create = (e) => new Jr({ typeName: X.ZodNaN, ...re(e) });
const ig = Symbol("zod_brand");
class Fo extends se {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class pr extends se {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return o.status === "aborted"
          ? J
          : o.status === "dirty"
          ? (n.dirty(), _n(o.value))
          : this._def.out._parseAsync({
              data: o.value,
              path: r.path,
              parent: r,
            });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return s.status === "aborted"
        ? J
        : s.status === "dirty"
        ? (n.dirty(), { status: "dirty", value: s.value })
        : this._def.out._parseSync({ data: s.value, path: r.path, parent: r });
    }
  }
  static create(t, n) {
    return new pr({ in: t, out: n, typeName: X.ZodPipeline });
  }
}
class ir extends se {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (s) => (qn(s) && (s.value = Object.freeze(s.value)), s);
    return Kn(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ir.create = (e, t) =>
  new ir({ innerType: e, typeName: X.ZodReadonly, ...re(t) });
function sl(e, t = {}, n) {
  return e
    ? En.create().superRefine((r, s) => {
        var o, a;
        if (!e(r)) {
          const i =
              typeof t == "function"
                ? t(r)
                : typeof t == "string"
                ? { message: t }
                : t,
            c =
              (a = (o = i.fatal) !== null && o !== void 0 ? o : n) !== null &&
              a !== void 0
                ? a
                : !0,
            d = typeof i == "string" ? { message: i } : i;
          s.addIssue({ code: "custom", ...d, fatal: c });
        }
      })
    : En.create();
}
const lg = { object: Ce.lazycreate };
var X;
(function (e) {
  (e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly");
})(X || (X = {}));
const cg = (e, t = { message: `Input not instance of ${e.name}` }) =>
    sl((n) => n instanceof e, t),
  ol = ot.create,
  al = jt.create,
  ug = Jr.create,
  dg = Ot.create,
  il = Yn.create,
  fg = Jt.create,
  gg = Kr.create,
  pg = Xn.create,
  mg = Jn.create,
  hg = En.create,
  vg = Xt.create,
  yg = Et.create,
  xg = Yr.create,
  _g = at.create,
  wg = Ce.create,
  Sg = Ce.strictCreate,
  Cg = Qn.create,
  bg = cs.create,
  Rg = er.create,
  Eg = xt.create,
  Ag = tr.create,
  Tg = Xr.create,
  Ng = Qt.create,
  Ig = wn.create,
  kg = nr.create,
  Mg = rr.create,
  Pg = Lt.create,
  Dg = sr.create,
  Fg = An.create,
  Oa = lt.create,
  $g = vt.create,
  jg = Vt.create,
  Og = lt.createWithPreprocess,
  Lg = pr.create,
  Vg = () => ol().optional(),
  Ug = () => al().optional(),
  Gg = () => il().optional(),
  zg = {
    string: (e) => ot.create({ ...e, coerce: !0 }),
    number: (e) => jt.create({ ...e, coerce: !0 }),
    boolean: (e) => Yn.create({ ...e, coerce: !0 }),
    bigint: (e) => Ot.create({ ...e, coerce: !0 }),
    date: (e) => Jt.create({ ...e, coerce: !0 }),
  },
  Hg = J;
var Nt = Object.freeze({
    __proto__: null,
    defaultErrorMap: Rn,
    setErrorMap: Hf,
    getErrorMap: Zr,
    makeIssue: Wr,
    EMPTY_PATH: Bf,
    addIssueToContext: j,
    ParseStatus: Fe,
    INVALID: J,
    DIRTY: _n,
    OK: Ve,
    isAborted: ro,
    isDirty: so,
    isValid: qn,
    isAsync: Kn,
    get util() {
      return de;
    },
    get objectUtil() {
      return no;
    },
    ZodParsedType: O,
    getParsedType: Mt,
    ZodType: se,
    datetimeRegex: nl,
    ZodString: ot,
    ZodNumber: jt,
    ZodBigInt: Ot,
    ZodBoolean: Yn,
    ZodDate: Jt,
    ZodSymbol: Kr,
    ZodUndefined: Xn,
    ZodNull: Jn,
    ZodAny: En,
    ZodUnknown: Xt,
    ZodNever: Et,
    ZodVoid: Yr,
    ZodArray: at,
    ZodObject: Ce,
    ZodUnion: Qn,
    ZodDiscriminatedUnion: cs,
    ZodIntersection: er,
    ZodTuple: xt,
    ZodRecord: tr,
    ZodMap: Xr,
    ZodSet: Qt,
    ZodFunction: wn,
    ZodLazy: nr,
    ZodLiteral: rr,
    ZodEnum: Lt,
    ZodNativeEnum: sr,
    ZodPromise: An,
    ZodEffects: lt,
    ZodTransformer: lt,
    ZodOptional: vt,
    ZodNullable: Vt,
    ZodDefault: or,
    ZodCatch: ar,
    ZodNaN: Jr,
    BRAND: ig,
    ZodBranded: Fo,
    ZodPipeline: pr,
    ZodReadonly: ir,
    custom: sl,
    Schema: se,
    ZodSchema: se,
    late: lg,
    get ZodFirstPartyTypeKind() {
      return X;
    },
    coerce: zg,
    any: hg,
    array: _g,
    bigint: dg,
    boolean: il,
    date: fg,
    discriminatedUnion: bg,
    effect: Oa,
    enum: Pg,
    function: Ig,
    instanceof: cg,
    intersection: Rg,
    lazy: kg,
    literal: Mg,
    map: Tg,
    nan: ug,
    nativeEnum: Dg,
    never: yg,
    null: mg,
    nullable: jg,
    number: al,
    object: wg,
    oboolean: Gg,
    onumber: Ug,
    optional: $g,
    ostring: Vg,
    pipeline: Lg,
    preprocess: Og,
    promise: Fg,
    record: Ag,
    set: Ng,
    strictObject: Sg,
    string: ol,
    symbol: gg,
    transformer: Oa,
    tuple: Eg,
    undefined: pg,
    union: Cg,
    unknown: vg,
    void: xg,
    NEVER: Hg,
    ZodIssueCode: E,
    quotelessJson: zf,
    ZodError: qe,
  }),
  ll = "AlertDialog",
  [Bg, wx] = Nn(ll, [Si]),
  At = Si(),
  cl = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = At(t);
    return l.jsx(Fd, { ...r, ...n, modal: !0 });
  };
cl.displayName = ll;
var Zg = "AlertDialogTrigger",
  ul = u.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      s = At(n);
    return l.jsx(Td, { ...s, ...r, ref: t });
  });
ul.displayName = Zg;
var Wg = "AlertDialogPortal",
  dl = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = At(t);
    return l.jsx(Dd, { ...r, ...n });
  };
dl.displayName = Wg;
var qg = "AlertDialogOverlay",
  fl = u.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      s = At(n);
    return l.jsx(Nd, { ...s, ...r, ref: t });
  });
fl.displayName = qg;
var Sn = "AlertDialogContent",
  [Kg, Yg] = Bg(Sn),
  gl = u.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, children: r, ...s } = e,
      o = At(n),
      a = u.useRef(null),
      i = ct(t, a),
      c = u.useRef(null);
    return l.jsx(Id, {
      contentName: Sn,
      titleName: pl,
      docsSlug: "alert-dialog",
      children: l.jsx(Kg, {
        scope: n,
        cancelRef: c,
        children: l.jsxs(kd, {
          role: "alertdialog",
          ...o,
          ...s,
          ref: i,
          onOpenAutoFocus: ae(s.onOpenAutoFocus, (d) => {
            var f;
            d.preventDefault(),
              (f = c.current) == null || f.focus({ preventScroll: !0 });
          }),
          onPointerDownOutside: (d) => d.preventDefault(),
          onInteractOutside: (d) => d.preventDefault(),
          children: [l.jsx(rd, { children: r }), l.jsx(Jg, { contentRef: a })],
        }),
      }),
    });
  });
gl.displayName = Sn;
var pl = "AlertDialogTitle",
  ml = u.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      s = At(n);
    return l.jsx(Md, { ...s, ...r, ref: t });
  });
ml.displayName = pl;
var hl = "AlertDialogDescription",
  vl = u.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      s = At(n);
    return l.jsx(Pd, { ...s, ...r, ref: t });
  });
vl.displayName = hl;
var Xg = "AlertDialogAction",
  yl = u.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      s = At(n);
    return l.jsx(Ci, { ...s, ...r, ref: t });
  });
yl.displayName = Xg;
var xl = "AlertDialogCancel",
  _l = u.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      { cancelRef: s } = Yg(xl, n),
      o = At(n),
      a = ct(t, s);
    return l.jsx(Ci, { ...o, ...r, ref: a });
  });
_l.displayName = xl;
var Jg = ({ contentRef: e }) => {
    const t = `\`${Sn}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Sn}\` by passing a \`${hl}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Sn}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return (
      u.useEffect(() => {
        var r;
        document.getElementById(
          (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
        ) || console.warn(t);
      }, [t, e]),
      null
    );
  },
  Qg = cl,
  ep = ul,
  tp = dl,
  wl = fl,
  Sl = gl,
  Cl = yl,
  bl = _l,
  Rl = ml,
  El = vl;
const $o = Qg,
  Al = ep,
  np = tp,
  Tl = u.forwardRef(({ className: e, ...t }, n) =>
    l.jsx(wl, {
      className: W(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
Tl.displayName = wl.displayName;
const us = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsxs(np, {
    children: [
      l.jsx(Tl, {}),
      l.jsx(Sl, {
        ref: n,
        className: W(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...t,
      }),
    ],
  })
);
us.displayName = Sl.displayName;
const ds = ({ className: e, ...t }) =>
  l.jsx("div", {
    className: W("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
ds.displayName = "AlertDialogHeader";
const fs = ({ className: e, ...t }) =>
  l.jsx("div", {
    className: W(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t,
  });
fs.displayName = "AlertDialogFooter";
const gs = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(Rl, { ref: n, className: W("text-lg font-semibold", e), ...t })
);
gs.displayName = Rl.displayName;
const ps = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(El, { ref: n, className: W("text-sm text-muted-foreground", e), ...t })
);
ps.displayName = El.displayName;
const ms = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(Cl, { ref: n, className: W(pi(), e), ...t })
);
ms.displayName = Cl.displayName;
const hs = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(bl, {
    ref: n,
    className: W(pi({ variant: "outline" }), "mt-2 sm:mt-0", e),
    ...t,
  })
);
hs.displayName = bl.displayName;
const La = Nt.object({
  token: Nt.string().min(1, "Please enter a valid API token"),
  baseURL: Nt.string().url("Please enter a valid URL"),
  evaluation: Nt.object({
    strictness: Nt.enum(["strict", "moderate", "loose"]),
    tone: Nt.enum(["formal", "friendly", "constructive"]),
    length: Nt.enum(["short", "medium", "detailed"]),
    customFeedbackPrompt: Nt.string(),
  }),
});
function rp({ initialData: e, onSave: t }) {
  const n = {
      token: "",
      baseURL: "",
      evaluation: {
        strictness: "moderate",
        tone: "constructive",
        length: "medium",
        customFeedbackPrompt: "",
      },
    },
    r = Mf({ defaultValues: e || n, resolver: $f(La) }),
    s = u.createRef();
  u.useEffect(() => {
    r.reset(e || n);
  }, [e, r]);
  const o = () => {
      r.reset(n), t(null);
    },
    a = async (c) => {
      var f;
      const d = (f = c.target.files) == null ? void 0 : f[0];
      if (d)
        try {
          const g = await d.text(),
            m = JSON.parse(g);
          La.parse(m), r.reset(m), t(m), (s.current.value = "");
        } catch (g) {
          Wt.error("Failed to import settings: uploaded file is invalid."),
            console.error("Options: Error importing settings:", g);
        }
    },
    i = async () => {
      try {
        const c = await Rt.getItem(Ur),
          d = JSON.stringify(c, null, 2),
          f = new Blob([d], { type: "application/json" }),
          g = URL.createObjectURL(f),
          m = document.createElement("a");
        (m.href = g),
          (m.download = "canvas_settings.json"),
          m.click(),
          URL.revokeObjectURL(g);
      } catch (c) {
        console.error("Options: Error exporting settings:", c),
          Wt.error("Failed to export settings");
      }
    };
  return l.jsxs(l.Fragment, {
    children: [
      l.jsxs("header", {
        className:
          "fixed top-0 w-full flex justify-between items-center h-16 p-4 bg-white z-10",
        children: [
          l.jsxs("div", {
            className: "flex items-center",
            children: [
              l.jsx("img", { src: fi, alt: "Icon", className: "w-8 h-8 mr-2" }),
              l.jsx("span", {
                className: "text-xl font-bold text-gray-800",
                children: gi.name,
              }),
            ],
          }),
          l.jsxs("div", {
            className: "flex gap-4",
            children: [
              l.jsx(ve, {
                onClick: () => {
                  window.location.hash = "#task";
                },
                variant: "secondary",
                children: "View Tasks",
              }),
              l.jsx(ve, {
                onClick: r.handleSubmit(t),
                disabled: !r.formState.isDirty,
                children: "Save settings",
              }),
            ],
          }),
        ],
      }),
      l.jsx("div", {
        className: "max-w-2xl mx-auto mt-24 p-4",
        children: l.jsxs(jf, {
          ...r,
          children: [
            l.jsxs("section", {
              className: "mb-8",
              children: [
                l.jsx("h2", {
                  className: "text-2xl font-semibold mb-4",
                  children: "Canvas Settings",
                }),
                l.jsx(gn, {
                  control: r.control,
                  name: "baseURL",
                  render: ({ field: c, fieldState: d }) => {
                    var f;
                    return l.jsx(Ea, {
                      label: "Canvas URL",
                      description: "The base URL of your Canvas instance",
                      placeholder: "https://example.instructure.com",
                      errorMessage: (f = d.error) == null ? void 0 : f.message,
                      ...c,
                    });
                  },
                }),
                l.jsx(gn, {
                  control: r.control,
                  name: "token",
                  render: ({ field: c, fieldState: d }) => {
                    var f;
                    return l.jsx(Ea, {
                      label: "API Token",
                      description: "The API token to authenticate with Canvas",
                      errorMessage: (f = d.error) == null ? void 0 : f.message,
                      ...c,
                    });
                  },
                }),
              ],
            }),
            l.jsxs("section", {
              className: "mb-8",
              children: [
                l.jsx("h2", {
                  className: "text-2xl font-semibold mb-4",
                  children: "AI Settings",
                }),
                l.jsx("div", {
                  children: l.jsx(gn, {
                    control: r.control,
                    name: "evaluation.strictness",
                    render: ({ field: c }) =>
                      l.jsx(Ts, {
                        label: "Grading Strictness",
                        description: "The strictness of grading suggestions",
                        options: ["loose", "moderate", "strict"],
                        ...c,
                        defaultValue: c.value,
                        onChange: c.onChange,
                      }),
                  }),
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx(gn, {
                      control: r.control,
                      name: "evaluation.customFeedbackPrompt",
                      render: ({ field: c }) =>
                        l.jsx($d, {
                          label: "Custom Feedback Prompt",
                          description:
                            "A custom prompt for feedback suggestions",
                          placeholder:
                            "Please focus on giving constructive feedback that encourages learning and improvement.",
                          ...c,
                        }),
                    }),
                    l.jsx(gn, {
                      control: r.control,
                      name: "evaluation.tone",
                      render: ({ field: c }) =>
                        l.jsx(Ts, {
                          label: "Feedback Tone",
                          description: "The tone of feedback suggestions",
                          options: ["formal", "friendly", "constructive"],
                          ...c,
                          defaultValue: c.value,
                          onChange: c.onChange,
                        }),
                    }),
                    l.jsx(gn, {
                      control: r.control,
                      name: "evaluation.length",
                      render: ({ field: c }) =>
                        l.jsx(Ts, {
                          label: "Feedback Length",
                          description: l.jsxs("p", {
                            children: [
                              "short: 1-2 sentences",
                              l.jsx("br", {}),
                              "medium: 2-3 sentences",
                              l.jsx("br", {}),
                              "detailed: 3+ sentences",
                            ],
                          }),
                          options: ["short", "medium", "detailed"],
                          ...c,
                          defaultValue: c.value,
                          onChange: c.onChange,
                        }),
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("section", {
              className: "mb-8",
              children: [
                l.jsx("h2", {
                  className: "text-2xl font-semibold mb-4 text-red-600",
                  children: "Danger Zone",
                }),
                l.jsx($r, {
                  label: "Reset",
                  description: "Reset all settings to default",
                  children: l.jsxs($o, {
                    children: [
                      l.jsx(ve, {
                        asChild: !0,
                        variant: "destructive",
                        children: l.jsx(Al, {
                          type: "button",
                          children: "Reset",
                        }),
                      }),
                      l.jsxs(us, {
                        children: [
                          l.jsxs(ds, {
                            children: [
                              l.jsx(gs, {
                                children: "Are you absolutely sure?",
                              }),
                              l.jsx(ps, {
                                children:
                                  "This action cannot be undone. This will permanently reset all settings to their default values.",
                              }),
                            ],
                          }),
                          l.jsxs(fs, {
                            children: [
                              l.jsx(hs, { children: "Cancel" }),
                              l.jsx(ms, { onClick: o, children: "Continue" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                l.jsx($r, {
                  label: "Import Settings",
                  description: "It will overwrite all current settings",
                  children: l.jsxs(l.Fragment, {
                    children: [
                      l.jsx(fr, {
                        type: "file",
                        ref: s,
                        onChange: a,
                        accept: "application/json",
                        className: "hidden",
                      }),
                      l.jsx(ve, {
                        onClick: () => {
                          var c;
                          return (c = s.current) == null ? void 0 : c.click();
                        },
                        variant: "secondary",
                        children: "Import",
                      }),
                    ],
                  }),
                }),
                l.jsx($r, {
                  label: "Export Settings",
                  description: "Export all saved settings to a JSON file",
                  children: l.jsx(ve, {
                    variant: "secondary",
                    onClick: i,
                    children: "Export",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Nl = [
  {
    value: mt.PENDING,
    label: "Pending",
    icon: sd,
    backgroundColor: "#ffb22440",
  },
  {
    value: mt.SUCCESS,
    label: "Success",
    icon: od,
    backgroundColor: "#46a75840",
  },
  {
    value: mt.FAILURE,
    label: "Failure",
    icon: ad,
    backgroundColor: "#e5484d40",
  },
  {
    value: mt.STARTED,
    label: "Started",
    icon: id,
    backgroundColor: "#14166740",
  },
];
function sp(e, t = []) {
  let n = [];
  function r(o, a) {
    const i = u.createContext(a),
      c = n.length;
    n = [...n, a];
    function d(g) {
      const { scope: m, children: p, ...y } = g,
        x = (m == null ? void 0 : m[e][c]) || i,
        S = u.useMemo(() => y, Object.values(y));
      return l.jsx(x.Provider, { value: S, children: p });
    }
    function f(g, m) {
      const p = (m == null ? void 0 : m[e][c]) || i,
        y = u.useContext(p);
      if (y) return y;
      if (a !== void 0) return a;
      throw new Error(`\`${g}\` must be used within \`${o}\``);
    }
    return (d.displayName = o + "Provider"), [d, f];
  }
  const s = () => {
    const o = n.map((a) => u.createContext(a));
    return function (i) {
      const c = (i == null ? void 0 : i[e]) || o;
      return u.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: c } }), [i, c]);
    };
  };
  return (s.scopeName = e), [r, op(s, ...t)];
}
function op(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (o) {
      const a = r.reduce((i, { useScope: c, scopeName: d }) => {
        const g = c(o)[`__scope${d}`];
        return { ...i, ...g };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Ps = "rovingFocusGroup.onEntryFocus",
  ap = { bubbles: !1, cancelable: !0 },
  vs = "RovingFocusGroup",
  [ao, Il, ip] = mi(vs),
  [lp, kl] = sp(vs, [ip]),
  [cp, up] = lp(vs),
  Ml = u.forwardRef((e, t) =>
    l.jsx(ao.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: l.jsx(ao.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: l.jsx(dp, { ...e, ref: t }),
      }),
    })
  );
Ml.displayName = vs;
var dp = u.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: s = !1,
        dir: o,
        currentTabStopId: a,
        defaultCurrentTabStopId: i,
        onCurrentTabStopIdChange: c,
        onEntryFocus: d,
        preventScrollOnEntryFocus: f = !1,
        ...g
      } = e,
      m = u.useRef(null),
      p = ct(t, m),
      y = hi(o),
      [x = null, S] = ns({ prop: a, defaultProp: i, onChange: c }),
      [C, R] = u.useState(!1),
      P = rs(d),
      N = Il(n),
      I = u.useRef(!1),
      [K, te] = u.useState(0);
    return (
      u.useEffect(() => {
        const U = m.current;
        if (U)
          return U.addEventListener(Ps, P), () => U.removeEventListener(Ps, P);
      }, [P]),
      l.jsx(cp, {
        scope: n,
        orientation: r,
        dir: y,
        loop: s,
        currentTabStopId: x,
        onItemFocus: u.useCallback((U) => S(U), [S]),
        onItemShiftTab: u.useCallback(() => R(!0), []),
        onFocusableItemAdd: u.useCallback(() => te((U) => U + 1), []),
        onFocusableItemRemove: u.useCallback(() => te((U) => U - 1), []),
        children: l.jsx($e.div, {
          tabIndex: C || K === 0 ? -1 : 0,
          "data-orientation": r,
          ...g,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: ae(e.onMouseDown, () => {
            I.current = !0;
          }),
          onFocus: ae(e.onFocus, (U) => {
            const ge = !I.current;
            if (U.target === U.currentTarget && ge && !C) {
              const ce = new CustomEvent(Ps, ap);
              if ((U.currentTarget.dispatchEvent(ce), !ce.defaultPrevented)) {
                const ue = N().filter((ye) => ye.focusable),
                  D = ue.find((ye) => ye.active),
                  Y = ue.find((ye) => ye.id === x),
                  me = [D, Y, ...ue]
                    .filter(Boolean)
                    .map((ye) => ye.ref.current);
                Fl(me, f);
              }
            }
            I.current = !1;
          }),
          onBlur: ae(e.onBlur, () => R(!1)),
        }),
      })
    );
  }),
  Pl = "RovingFocusGroupItem",
  Dl = u.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: s = !1,
        tabStopId: o,
        ...a
      } = e,
      i = Vr(),
      c = o || i,
      d = up(Pl, n),
      f = d.currentTabStopId === c,
      g = Il(n),
      { onFocusableItemAdd: m, onFocusableItemRemove: p } = d;
    return (
      u.useEffect(() => {
        if (r) return m(), () => p();
      }, [r, m, p]),
      l.jsx(ao.ItemSlot, {
        scope: n,
        id: c,
        focusable: r,
        active: s,
        children: l.jsx($e.span, {
          tabIndex: f ? 0 : -1,
          "data-orientation": d.orientation,
          ...a,
          ref: t,
          onMouseDown: ae(e.onMouseDown, (y) => {
            r ? d.onItemFocus(c) : y.preventDefault();
          }),
          onFocus: ae(e.onFocus, () => d.onItemFocus(c)),
          onKeyDown: ae(e.onKeyDown, (y) => {
            if (y.key === "Tab" && y.shiftKey) {
              d.onItemShiftTab();
              return;
            }
            if (y.target !== y.currentTarget) return;
            const x = pp(y, d.orientation, d.dir);
            if (x !== void 0) {
              if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
              y.preventDefault();
              let C = g()
                .filter((R) => R.focusable)
                .map((R) => R.ref.current);
              if (x === "last") C.reverse();
              else if (x === "prev" || x === "next") {
                x === "prev" && C.reverse();
                const R = C.indexOf(y.currentTarget);
                C = d.loop ? mp(C, R + 1) : C.slice(R + 1);
              }
              setTimeout(() => Fl(C));
            }
          }),
        }),
      })
    );
  });
Dl.displayName = Pl;
var fp = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function gp(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function pp(e, t, n) {
  const r = gp(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return fp[r];
}
function Fl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function mp(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var hp = Ml,
  vp = Dl,
  io = ["Enter", " "],
  yp = ["ArrowDown", "PageUp", "Home"],
  $l = ["ArrowUp", "PageDown", "End"],
  xp = [...yp, ...$l],
  _p = { ltr: [...io, "ArrowRight"], rtl: [...io, "ArrowLeft"] },
  wp = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  mr = "Menu",
  [lr, Sp, Cp] = mi(mr),
  [sn, jl] = Nn(mr, [Cp, os, kl]),
  ys = os(),
  Ol = kl(),
  [bp, on] = sn(mr),
  [Rp, hr] = sn(mr),
  Ll = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: s,
        onOpenChange: o,
        modal: a = !0,
      } = e,
      i = ys(t),
      [c, d] = u.useState(null),
      f = u.useRef(!1),
      g = rs(o),
      m = hi(s);
    return (
      u.useEffect(() => {
        const p = () => {
            (f.current = !0),
              document.addEventListener("pointerdown", y, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", y, {
                capture: !0,
                once: !0,
              });
          },
          y = () => (f.current = !1);
        return (
          document.addEventListener("keydown", p, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", p, { capture: !0 }),
              document.removeEventListener("pointerdown", y, { capture: !0 }),
              document.removeEventListener("pointermove", y, { capture: !0 });
          }
        );
      }, []),
      l.jsx(ki, {
        ...i,
        children: l.jsx(bp, {
          scope: t,
          open: n,
          onOpenChange: g,
          content: c,
          onContentChange: d,
          children: l.jsx(Rp, {
            scope: t,
            onClose: u.useCallback(() => g(!1), [g]),
            isUsingKeyboardRef: f,
            dir: m,
            modal: a,
            children: r,
          }),
        }),
      })
    );
  };
Ll.displayName = mr;
var Ep = "MenuAnchor",
  jo = u.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      s = ys(n);
    return l.jsx(Ao, { ...s, ...r, ref: t });
  });
jo.displayName = Ep;
var Oo = "MenuPortal",
  [Ap, Vl] = sn(Oo, { forceMount: void 0 }),
  Ul = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: s } = e,
      o = on(Oo, t);
    return l.jsx(Ap, {
      scope: t,
      forceMount: n,
      children: l.jsx(rn, {
        present: n || o.open,
        children: l.jsx(Ii, { asChild: !0, container: s, children: r }),
      }),
    });
  };
Ul.displayName = Oo;
var Qe = "MenuContent",
  [Tp, Lo] = sn(Qe),
  Gl = u.forwardRef((e, t) => {
    const n = Vl(Qe, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...s } = e,
      o = on(Qe, e.__scopeMenu),
      a = hr(Qe, e.__scopeMenu);
    return l.jsx(lr.Provider, {
      scope: e.__scopeMenu,
      children: l.jsx(rn, {
        present: r || o.open,
        children: l.jsx(lr.Slot, {
          scope: e.__scopeMenu,
          children: a.modal
            ? l.jsx(Np, { ...s, ref: t })
            : l.jsx(Ip, { ...s, ref: t }),
        }),
      }),
    });
  }),
  Np = u.forwardRef((e, t) => {
    const n = on(Qe, e.__scopeMenu),
      r = u.useRef(null),
      s = ct(t, r);
    return (
      u.useEffect(() => {
        const o = r.current;
        if (o) return To(o);
      }, []),
      l.jsx(Vo, {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: ae(e.onFocusOutside, (o) => o.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  Ip = u.forwardRef((e, t) => {
    const n = on(Qe, e.__scopeMenu);
    return l.jsx(Vo, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  Vo = u.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: s,
        onOpenAutoFocus: o,
        onCloseAutoFocus: a,
        disableOutsidePointerEvents: i,
        onEntryFocus: c,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        onFocusOutside: g,
        onInteractOutside: m,
        onDismiss: p,
        disableOutsideScroll: y,
        ...x
      } = e,
      S = on(Qe, n),
      C = hr(Qe, n),
      R = ys(n),
      P = Ol(n),
      N = Sp(n),
      [I, K] = u.useState(null),
      te = u.useRef(null),
      U = ct(t, te, S.onContentChange),
      ge = u.useRef(0),
      ce = u.useRef(""),
      ue = u.useRef(0),
      D = u.useRef(null),
      Y = u.useRef("right"),
      oe = u.useRef(0),
      me = y ? Ni : u.Fragment,
      ye = y ? { as: Eo, allowPinchZoom: !0 } : void 0,
      Te = (q) => {
        var fe, be;
        const _e = ce.current + q,
          le = N().filter((we) => !we.disabled),
          b = document.activeElement,
          L =
            (fe = le.find((we) => we.ref.current === b)) == null
              ? void 0
              : fe.textValue,
          ee = le.map((we) => we.textValue),
          F = Gp(ee, _e, L),
          ne =
            (be = le.find((we) => we.textValue === F)) == null
              ? void 0
              : be.ref.current;
        (function we(Xe) {
          (ce.current = Xe),
            window.clearTimeout(ge.current),
            Xe !== "" && (ge.current = window.setTimeout(() => we(""), 1e3));
        })(_e),
          ne && setTimeout(() => ne.focus());
      };
    u.useEffect(() => () => window.clearTimeout(ge.current), []), bi();
    const Ie = u.useCallback((q) => {
      var le, b;
      return (
        Y.current === ((le = D.current) == null ? void 0 : le.side) &&
        Hp(q, (b = D.current) == null ? void 0 : b.area)
      );
    }, []);
    return l.jsx(Tp, {
      scope: n,
      searchRef: ce,
      onItemEnter: u.useCallback(
        (q) => {
          Ie(q) && q.preventDefault();
        },
        [Ie]
      ),
      onItemLeave: u.useCallback(
        (q) => {
          var _e;
          Ie(q) || ((_e = te.current) == null || _e.focus(), K(null));
        },
        [Ie]
      ),
      onTriggerLeave: u.useCallback(
        (q) => {
          Ie(q) && q.preventDefault();
        },
        [Ie]
      ),
      pointerGraceTimerRef: ue,
      onPointerGraceIntentChange: u.useCallback((q) => {
        D.current = q;
      }, []),
      children: l.jsx(me, {
        ...ye,
        children: l.jsx(Ri, {
          asChild: !0,
          trapped: s,
          onMountAutoFocus: ae(o, (q) => {
            var _e;
            q.preventDefault(),
              (_e = te.current) == null || _e.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: a,
          children: l.jsx(Ei, {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: d,
            onPointerDownOutside: f,
            onFocusOutside: g,
            onInteractOutside: m,
            onDismiss: p,
            children: l.jsx(hp, {
              asChild: !0,
              ...P,
              dir: C.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: I,
              onCurrentTabStopIdChange: K,
              onEntryFocus: ae(c, (q) => {
                C.isUsingKeyboardRef.current || q.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: l.jsx(Ai, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": sc(S.open),
                "data-radix-menu-content": "",
                dir: C.dir,
                ...R,
                ...x,
                ref: U,
                style: { outline: "none", ...x.style },
                onKeyDown: ae(x.onKeyDown, (q) => {
                  const le =
                      q.target.closest("[data-radix-menu-content]") ===
                      q.currentTarget,
                    b = q.ctrlKey || q.altKey || q.metaKey,
                    L = q.key.length === 1;
                  le &&
                    (q.key === "Tab" && q.preventDefault(),
                    !b && L && Te(q.key));
                  const ee = te.current;
                  if (q.target !== ee || !xp.includes(q.key)) return;
                  q.preventDefault();
                  const ne = N()
                    .filter((fe) => !fe.disabled)
                    .map((fe) => fe.ref.current);
                  $l.includes(q.key) && ne.reverse(), Vp(ne);
                }),
                onBlur: ae(e.onBlur, (q) => {
                  q.currentTarget.contains(q.target) ||
                    (window.clearTimeout(ge.current), (ce.current = ""));
                }),
                onPointerMove: ae(
                  e.onPointerMove,
                  cr((q) => {
                    const _e = q.target,
                      le = oe.current !== q.clientX;
                    if (q.currentTarget.contains(_e) && le) {
                      const b = q.clientX > oe.current ? "right" : "left";
                      (Y.current = b), (oe.current = q.clientX);
                    }
                  })
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
Gl.displayName = Qe;
var kp = "MenuGroup",
  Uo = u.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return l.jsx($e.div, { role: "group", ...r, ref: t });
  });
Uo.displayName = kp;
var Mp = "MenuLabel",
  zl = u.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return l.jsx($e.div, { ...r, ref: t });
  });
zl.displayName = Mp;
var Qr = "MenuItem",
  Va = "menu.itemSelect",
  xs = u.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...s } = e,
      o = u.useRef(null),
      a = hr(Qr, e.__scopeMenu),
      i = Lo(Qr, e.__scopeMenu),
      c = ct(t, o),
      d = u.useRef(!1),
      f = () => {
        const g = o.current;
        if (!n && g) {
          const m = new CustomEvent(Va, { bubbles: !0, cancelable: !0 });
          g.addEventListener(Va, (p) => (r == null ? void 0 : r(p)), {
            once: !0,
          }),
            ld(g, m),
            m.defaultPrevented ? (d.current = !1) : a.onClose();
        }
      };
    return l.jsx(Hl, {
      ...s,
      ref: c,
      disabled: n,
      onClick: ae(e.onClick, f),
      onPointerDown: (g) => {
        var m;
        (m = e.onPointerDown) == null || m.call(e, g), (d.current = !0);
      },
      onPointerUp: ae(e.onPointerUp, (g) => {
        var m;
        d.current || (m = g.currentTarget) == null || m.click();
      }),
      onKeyDown: ae(e.onKeyDown, (g) => {
        const m = i.searchRef.current !== "";
        n ||
          (m && g.key === " ") ||
          (io.includes(g.key) && (g.currentTarget.click(), g.preventDefault()));
      }),
    });
  });
xs.displayName = Qr;
var Hl = u.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: s, ...o } = e,
      a = Lo(Qr, n),
      i = Ol(n),
      c = u.useRef(null),
      d = ct(t, c),
      [f, g] = u.useState(!1),
      [m, p] = u.useState("");
    return (
      u.useEffect(() => {
        const y = c.current;
        y && p((y.textContent ?? "").trim());
      }, [o.children]),
      l.jsx(lr.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: s ?? m,
        children: l.jsx(vp, {
          asChild: !0,
          ...i,
          focusable: !r,
          children: l.jsx($e.div, {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...o,
            ref: d,
            onPointerMove: ae(
              e.onPointerMove,
              cr((y) => {
                r
                  ? a.onItemLeave(y)
                  : (a.onItemEnter(y),
                    y.defaultPrevented ||
                      y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ae(
              e.onPointerLeave,
              cr((y) => a.onItemLeave(y))
            ),
            onFocus: ae(e.onFocus, () => g(!0)),
            onBlur: ae(e.onBlur, () => g(!1)),
          }),
        }),
      })
    );
  }),
  Pp = "MenuCheckboxItem",
  Bl = u.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...s } = e;
    return l.jsx(Yl, {
      scope: e.__scopeMenu,
      checked: n,
      children: l.jsx(xs, {
        role: "menuitemcheckbox",
        "aria-checked": es(n) ? "mixed" : n,
        ...s,
        ref: t,
        "data-state": zo(n),
        onSelect: ae(
          s.onSelect,
          () => (r == null ? void 0 : r(es(n) ? !0 : !n)),
          { checkForDefaultPrevented: !1 }
        ),
      }),
    });
  });
Bl.displayName = Pp;
var Zl = "MenuRadioGroup",
  [Dp, Fp] = sn(Zl, { value: void 0, onValueChange: () => {} }),
  Wl = u.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...s } = e,
      o = rs(r);
    return l.jsx(Dp, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: o,
      children: l.jsx(Uo, { ...s, ref: t }),
    });
  });
Wl.displayName = Zl;
var ql = "MenuRadioItem",
  Kl = u.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      s = Fp(ql, e.__scopeMenu),
      o = n === s.value;
    return l.jsx(Yl, {
      scope: e.__scopeMenu,
      checked: o,
      children: l.jsx(xs, {
        role: "menuitemradio",
        "aria-checked": o,
        ...r,
        ref: t,
        "data-state": zo(o),
        onSelect: ae(
          r.onSelect,
          () => {
            var a;
            return (a = s.onValueChange) == null ? void 0 : a.call(s, n);
          },
          { checkForDefaultPrevented: !1 }
        ),
      }),
    });
  });
Kl.displayName = ql;
var Go = "MenuItemIndicator",
  [Yl, $p] = sn(Go, { checked: !1 }),
  Xl = u.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...s } = e,
      o = $p(Go, n);
    return l.jsx(rn, {
      present: r || es(o.checked) || o.checked === !0,
      children: l.jsx($e.span, { ...s, ref: t, "data-state": zo(o.checked) }),
    });
  });
Xl.displayName = Go;
var jp = "MenuSeparator",
  Jl = u.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return l.jsx($e.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t,
    });
  });
Jl.displayName = jp;
var Op = "MenuArrow",
  Ql = u.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      s = ys(n);
    return l.jsx(Ti, { ...s, ...r, ref: t });
  });
Ql.displayName = Op;
var Lp = "MenuSub",
  [Sx, ec] = sn(Lp),
  Hn = "MenuSubTrigger",
  tc = u.forwardRef((e, t) => {
    const n = on(Hn, e.__scopeMenu),
      r = hr(Hn, e.__scopeMenu),
      s = ec(Hn, e.__scopeMenu),
      o = Lo(Hn, e.__scopeMenu),
      a = u.useRef(null),
      { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = o,
      d = { __scopeMenu: e.__scopeMenu },
      f = u.useCallback(() => {
        a.current && window.clearTimeout(a.current), (a.current = null);
      }, []);
    return (
      u.useEffect(() => f, [f]),
      u.useEffect(() => {
        const g = i.current;
        return () => {
          window.clearTimeout(g), c(null);
        };
      }, [i, c]),
      l.jsx(jo, {
        asChild: !0,
        ...d,
        children: l.jsx(Hl, {
          id: s.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": s.contentId,
          "data-state": sc(n.open),
          ...e,
          ref: vi(t, s.onTriggerChange),
          onClick: (g) => {
            var m;
            (m = e.onClick) == null || m.call(e, g),
              !(e.disabled || g.defaultPrevented) &&
                (g.currentTarget.focus(), n.open || n.onOpenChange(!0));
          },
          onPointerMove: ae(
            e.onPointerMove,
            cr((g) => {
              o.onItemEnter(g),
                !g.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !a.current &&
                  (o.onPointerGraceIntentChange(null),
                  (a.current = window.setTimeout(() => {
                    n.onOpenChange(!0), f();
                  }, 100)));
            })
          ),
          onPointerLeave: ae(
            e.onPointerLeave,
            cr((g) => {
              var p, y;
              f();
              const m =
                (p = n.content) == null ? void 0 : p.getBoundingClientRect();
              if (m) {
                const x = (y = n.content) == null ? void 0 : y.dataset.side,
                  S = x === "right",
                  C = S ? -5 : 5,
                  R = m[S ? "left" : "right"],
                  P = m[S ? "right" : "left"];
                o.onPointerGraceIntentChange({
                  area: [
                    { x: g.clientX + C, y: g.clientY },
                    { x: R, y: m.top },
                    { x: P, y: m.top },
                    { x: P, y: m.bottom },
                    { x: R, y: m.bottom },
                  ],
                  side: x,
                }),
                  window.clearTimeout(i.current),
                  (i.current = window.setTimeout(
                    () => o.onPointerGraceIntentChange(null),
                    300
                  ));
              } else {
                if ((o.onTriggerLeave(g), g.defaultPrevented)) return;
                o.onPointerGraceIntentChange(null);
              }
            })
          ),
          onKeyDown: ae(e.onKeyDown, (g) => {
            var p;
            const m = o.searchRef.current !== "";
            e.disabled ||
              (m && g.key === " ") ||
              (_p[r.dir].includes(g.key) &&
                (n.onOpenChange(!0),
                (p = n.content) == null || p.focus(),
                g.preventDefault()));
          }),
        }),
      })
    );
  });
tc.displayName = Hn;
var nc = "MenuSubContent",
  rc = u.forwardRef((e, t) => {
    const n = Vl(Qe, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...s } = e,
      o = on(Qe, e.__scopeMenu),
      a = hr(Qe, e.__scopeMenu),
      i = ec(nc, e.__scopeMenu),
      c = u.useRef(null),
      d = ct(t, c);
    return l.jsx(lr.Provider, {
      scope: e.__scopeMenu,
      children: l.jsx(rn, {
        present: r || o.open,
        children: l.jsx(lr.Slot, {
          scope: e.__scopeMenu,
          children: l.jsx(Vo, {
            id: i.contentId,
            "aria-labelledby": i.triggerId,
            ...s,
            ref: d,
            align: "start",
            side: a.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (f) => {
              var g;
              a.isUsingKeyboardRef.current &&
                ((g = c.current) == null || g.focus()),
                f.preventDefault();
            },
            onCloseAutoFocus: (f) => f.preventDefault(),
            onFocusOutside: ae(e.onFocusOutside, (f) => {
              f.target !== i.trigger && o.onOpenChange(!1);
            }),
            onEscapeKeyDown: ae(e.onEscapeKeyDown, (f) => {
              a.onClose(), f.preventDefault();
            }),
            onKeyDown: ae(e.onKeyDown, (f) => {
              var p;
              const g = f.currentTarget.contains(f.target),
                m = wp[a.dir].includes(f.key);
              g &&
                m &&
                (o.onOpenChange(!1),
                (p = i.trigger) == null || p.focus(),
                f.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
rc.displayName = nc;
function sc(e) {
  return e ? "open" : "closed";
}
function es(e) {
  return e === "indeterminate";
}
function zo(e) {
  return es(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Vp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Up(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Gp(e, t, n) {
  const s = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t,
    o = n ? e.indexOf(n) : -1;
  let a = Up(e, Math.max(o, 0));
  s.length === 1 && (a = a.filter((d) => d !== n));
  const c = a.find((d) => d.toLowerCase().startsWith(s.toLowerCase()));
  return c !== n ? c : void 0;
}
function zp(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let o = 0, a = t.length - 1; o < t.length; a = o++) {
    const i = t[o].x,
      c = t[o].y,
      d = t[a].x,
      f = t[a].y;
    c > r != f > r && n < ((d - i) * (r - c)) / (f - c) + i && (s = !s);
  }
  return s;
}
function Hp(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return zp(n, t);
}
function cr(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var Bp = Ll,
  Zp = jo,
  Wp = Ul,
  qp = Gl,
  Kp = Uo,
  Yp = zl,
  Xp = xs,
  Jp = Bl,
  Qp = Wl,
  em = Kl,
  tm = Xl,
  nm = Jl,
  rm = Ql,
  sm = tc,
  om = rc,
  Ho = "DropdownMenu",
  [am, Cx] = Nn(Ho, [jl]),
  ze = jl(),
  [im, oc] = am(Ho),
  ac = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: s,
        defaultOpen: o,
        onOpenChange: a,
        modal: i = !0,
      } = e,
      c = ze(t),
      d = u.useRef(null),
      [f = !1, g] = ns({ prop: s, defaultProp: o, onChange: a });
    return l.jsx(im, {
      scope: t,
      triggerId: Vr(),
      triggerRef: d,
      contentId: Vr(),
      open: f,
      onOpenChange: g,
      onOpenToggle: u.useCallback(() => g((m) => !m), [g]),
      modal: i,
      children: l.jsx(Bp, {
        ...c,
        open: f,
        onOpenChange: g,
        dir: r,
        modal: i,
        children: n,
      }),
    });
  };
ac.displayName = Ho;
var ic = "DropdownMenuTrigger",
  Bo = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...s } = e,
      o = oc(ic, n),
      a = ze(n);
    return l.jsx(Zp, {
      asChild: !0,
      ...a,
      children: l.jsx($e.button, {
        type: "button",
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": o.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...s,
        ref: vi(t, o.triggerRef),
        onPointerDown: ae(e.onPointerDown, (i) => {
          !r &&
            i.button === 0 &&
            i.ctrlKey === !1 &&
            (o.onOpenToggle(), o.open || i.preventDefault());
        }),
        onKeyDown: ae(e.onKeyDown, (i) => {
          r ||
            (["Enter", " "].includes(i.key) && o.onOpenToggle(),
            i.key === "ArrowDown" && o.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        }),
      }),
    });
  });
Bo.displayName = ic;
var lm = "DropdownMenuPortal",
  lc = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = ze(t);
    return l.jsx(Wp, { ...r, ...n });
  };
lc.displayName = lm;
var cc = "DropdownMenuContent",
  uc = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = oc(cc, n),
      o = ze(n),
      a = u.useRef(!1);
    return l.jsx(qp, {
      id: s.contentId,
      "aria-labelledby": s.triggerId,
      ...o,
      ...r,
      ref: t,
      onCloseAutoFocus: ae(e.onCloseAutoFocus, (i) => {
        var c;
        a.current || (c = s.triggerRef.current) == null || c.focus(),
          (a.current = !1),
          i.preventDefault();
      }),
      onInteractOutside: ae(e.onInteractOutside, (i) => {
        const c = i.detail.originalEvent,
          d = c.button === 0 && c.ctrlKey === !0,
          f = c.button === 2 || d;
        (!s.modal || f) && (a.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
uc.displayName = cc;
var cm = "DropdownMenuGroup",
  dc = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(Kp, { ...s, ...r, ref: t });
  });
dc.displayName = cm;
var um = "DropdownMenuLabel",
  fc = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(Yp, { ...s, ...r, ref: t });
  });
fc.displayName = um;
var dm = "DropdownMenuItem",
  gc = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(Xp, { ...s, ...r, ref: t });
  });
gc.displayName = dm;
var fm = "DropdownMenuCheckboxItem",
  pc = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(Jp, { ...s, ...r, ref: t });
  });
pc.displayName = fm;
var gm = "DropdownMenuRadioGroup",
  pm = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(Qp, { ...s, ...r, ref: t });
  });
pm.displayName = gm;
var mm = "DropdownMenuRadioItem",
  mc = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(em, { ...s, ...r, ref: t });
  });
mc.displayName = mm;
var hm = "DropdownMenuItemIndicator",
  hc = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(tm, { ...s, ...r, ref: t });
  });
hc.displayName = hm;
var vm = "DropdownMenuSeparator",
  vc = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(nm, { ...s, ...r, ref: t });
  });
vc.displayName = vm;
var ym = "DropdownMenuArrow",
  xm = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(rm, { ...s, ...r, ref: t });
  });
xm.displayName = ym;
var _m = "DropdownMenuSubTrigger",
  yc = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(sm, { ...s, ...r, ref: t });
  });
yc.displayName = _m;
var wm = "DropdownMenuSubContent",
  xc = u.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      s = ze(n);
    return l.jsx(om, {
      ...s,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
xc.displayName = wm;
var Sm = ac,
  Cm = Bo,
  bm = lc,
  _c = uc,
  Rm = dc,
  wc = fc,
  Sc = gc,
  Cc = pc,
  bc = mc,
  Rc = hc,
  Ec = vc,
  Ac = yc,
  Tc = xc;
const _s = Sm,
  Zo = Cm,
  Em = Rm,
  Am = u.forwardRef(({ className: e, inset: t, children: n, ...r }, s) =>
    l.jsxs(Ac, {
      ref: s,
      className: W(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t && "pl-8",
        e
      ),
      ...r,
      children: [n, l.jsx(yi, { className: "ml-auto h-4 w-4" })],
    })
  );
Am.displayName = Ac.displayName;
const Tm = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(Tc, {
    ref: n,
    className: W(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t,
  })
);
Tm.displayName = Tc.displayName;
const vr = u.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  l.jsx(bm, {
    children: l.jsx(_c, {
      ref: r,
      sideOffset: t,
      className: W(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    }),
  })
);
vr.displayName = _c.displayName;
const Ft = u.forwardRef(({ className: e, inset: t, ...n }, r) =>
  l.jsx(Sc, {
    ref: r,
    className: W(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n,
  })
);
Ft.displayName = Sc.displayName;
const Nc = u.forwardRef(({ className: e, children: t, checked: n, ...r }, s) =>
  l.jsxs(Cc, {
    ref: s,
    className: W(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      l.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: l.jsx(Rc, { children: l.jsx(ss, { className: "h-4 w-4" }) }),
      }),
      t,
    ],
  })
);
Nc.displayName = Cc.displayName;
const Nm = u.forwardRef(({ className: e, children: t, ...n }, r) =>
  l.jsxs(bc, {
    ref: r,
    className: W(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      l.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: l.jsx(Rc, {
          children: l.jsx(cd, { className: "h-4 w-4 fill-current" }),
        }),
      }),
      t,
    ],
  })
);
Nm.displayName = bc.displayName;
const Wo = u.forwardRef(({ className: e, inset: t, ...n }, r) =>
  l.jsx(wc, {
    ref: r,
    className: W("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n,
  })
);
Wo.displayName = wc.displayName;
const yr = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(Ec, { ref: n, className: W("-mx-1 my-1 h-px bg-muted", e), ...t })
);
yr.displayName = Ec.displayName;
function pn({ column: e, title: t, className: n }) {
  return e.getCanSort()
    ? l.jsx("div", {
        className: W("flex items-center space-x-2", n),
        children: l.jsxs(_s, {
          children: [
            l.jsx(Zo, {
              asChild: !0,
              children: l.jsxs(ve, {
                variant: "ghost",
                size: "sm",
                className: "-ml-3 h-8 data-[state=open]:bg-accent",
                children: [
                  l.jsx("span", { children: t }),
                  e.getIsSorted() === "desc"
                    ? l.jsx(ba, { className: "ml-2 h-4 w-4" })
                    : e.getIsSorted() === "asc"
                    ? l.jsx(Ra, { className: "ml-2 h-4 w-4" })
                    : l.jsx(ud, { className: "ml-2 h-4 w-4" }),
                ],
              }),
            }),
            l.jsxs(vr, {
              align: "start",
              children: [
                l.jsxs(Ft, {
                  onClick: () => e.toggleSorting(!1),
                  children: [
                    l.jsx(Ra, {
                      className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70",
                    }),
                    "Asc",
                  ],
                }),
                l.jsxs(Ft, {
                  onClick: () => e.toggleSorting(!0),
                  children: [
                    l.jsx(ba, {
                      className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70",
                    }),
                    "Desc",
                  ],
                }),
                l.jsx(yr, {}),
                l.jsxs(Ft, {
                  onClick: () => e.toggleVisibility(!1),
                  children: [
                    l.jsx(dd, {
                      className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70",
                    }),
                    "Hide",
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    : l.jsx("div", { className: W(n), children: t });
}
function Im({ row: e }) {
  const [t, n] = u.useState(!1),
    r = e.getValue("id"),
    { status: s } = e.getValue("details"),
    o = async (i) => {
      try {
        await chrome.runtime.sendMessage({ type: Qd, payload: i });
      } catch (c) {
        console.error("Failed to delete task:", c);
      } finally {
        n(!1);
      }
    },
    a = async () => {
      await chrome.runtime.sendMessage({ type: No, payload: r });
    };
  return l.jsxs(l.Fragment, {
    children: [
      l.jsxs(_s, {
        modal: !1,
        children: [
          l.jsx(Zo, {
            asChild: !0,
            children: l.jsx(ve, {
              variant: "ghost",
              className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted",
              "aria-label": "Open menu",
              children: l.jsx(fd, { className: "h-4 w-4" }),
            }),
          }),
          l.jsxs(vr, {
            align: "end",
            className: "w-[160px]",
            children: [
              s === mt.SUCCESS &&
                l.jsxs(l.Fragment, {
                  children: [
                    l.jsx(Ft, { onSelect: a, children: "View" }),
                    l.jsx(yr, {}),
                  ],
                }),
              l.jsx(Ft, { onSelect: () => n(!0), children: "Delete" }),
            ],
          }),
        ],
      }),
      l.jsx($o, {
        open: t,
        onOpenChange: n,
        children: l.jsxs(us, {
          children: [
            l.jsxs(ds, {
              children: [
                l.jsx(gs, { children: "Are you sure?" }),
                l.jsx(ps, {
                  children:
                    "This action cannot be undone. This will permanently delete the task and all associated data.",
                }),
              ],
            }),
            l.jsxs(fs, {
              children: [
                l.jsx(hs, { children: "Cancel" }),
                l.jsx(ms, { onClick: () => o(r), children: "Delete" }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var qo = "Checkbox",
  [km, bx] = Nn(qo),
  [Mm, Pm] = km(qo),
  Ic = u.forwardRef((e, t) => {
    const {
        __scopeCheckbox: n,
        name: r,
        checked: s,
        defaultChecked: o,
        required: a,
        disabled: i,
        value: c = "on",
        onCheckedChange: d,
        form: f,
        ...g
      } = e,
      [m, p] = u.useState(null),
      y = ct(t, (N) => p(N)),
      x = u.useRef(!1),
      S = m ? f || !!m.closest("form") : !0,
      [C = !1, R] = ns({ prop: s, defaultProp: o, onChange: d }),
      P = u.useRef(C);
    return (
      u.useEffect(() => {
        const N = m == null ? void 0 : m.form;
        if (N) {
          const I = () => R(P.current);
          return (
            N.addEventListener("reset", I),
            () => N.removeEventListener("reset", I)
          );
        }
      }, [m, R]),
      l.jsxs(Mm, {
        scope: n,
        state: C,
        disabled: i,
        children: [
          l.jsx($e.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": $t(C) ? "mixed" : C,
            "aria-required": a,
            "data-state": Pc(C),
            "data-disabled": i ? "" : void 0,
            disabled: i,
            value: c,
            ...g,
            ref: y,
            onKeyDown: ae(e.onKeyDown, (N) => {
              N.key === "Enter" && N.preventDefault();
            }),
            onClick: ae(e.onClick, (N) => {
              R((I) => ($t(I) ? !0 : !I)),
                S &&
                  ((x.current = N.isPropagationStopped()),
                  x.current || N.stopPropagation());
            }),
          }),
          S &&
            l.jsx(Dm, {
              control: m,
              bubbles: !x.current,
              name: r,
              value: c,
              checked: C,
              required: a,
              disabled: i,
              form: f,
              style: { transform: "translateX(-100%)" },
              defaultChecked: $t(o) ? !1 : o,
            }),
        ],
      })
    );
  });
Ic.displayName = qo;
var kc = "CheckboxIndicator",
  Mc = u.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...s } = e,
      o = Pm(kc, n);
    return l.jsx(rn, {
      present: r || $t(o.state) || o.state === !0,
      children: l.jsx($e.span, {
        "data-state": Pc(o.state),
        "data-disabled": o.disabled ? "" : void 0,
        ...s,
        ref: t,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
Mc.displayName = kc;
var Dm = (e) => {
  const {
      control: t,
      checked: n,
      bubbles: r = !0,
      defaultChecked: s,
      ...o
    } = e,
    a = u.useRef(null),
    i = gd(n),
    c = pd(t);
  u.useEffect(() => {
    const f = a.current,
      g = window.HTMLInputElement.prototype,
      p = Object.getOwnPropertyDescriptor(g, "checked").set;
    if (i !== n && p) {
      const y = new Event("click", { bubbles: r });
      (f.indeterminate = $t(n)), p.call(f, $t(n) ? !1 : n), f.dispatchEvent(y);
    }
  }, [i, n, r]);
  const d = u.useRef($t(n) ? !1 : n);
  return l.jsx("input", {
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: s ?? d.current,
    ...o,
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...c,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0,
    },
  });
};
function $t(e) {
  return e === "indeterminate";
}
function Pc(e) {
  return $t(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Dc = Ic,
  Fm = Mc;
const ts = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(Dc, {
    ref: n,
    className: W(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: l.jsx(Fm, {
      className: W("flex items-center justify-center text-current"),
      children: l.jsx(ss, { className: "h-4 w-4" }),
    }),
  })
);
ts.displayName = Dc.displayName;
const $m = md(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function Or({ className: e, variant: t, ...n }) {
  return l.jsx("div", { className: W($m({ variant: t }), e), ...n });
}
const jm = [
  {
    id: "select",
    header: ({ table: e }) =>
      l.jsx(ts, {
        checked:
          e.getIsAllPageRowsSelected() ||
          (e.getIsSomePageRowsSelected() && "indeterminate"),
        onCheckedChange: (t) => e.toggleAllPageRowsSelected(!!t),
        "aria-label": "Select all",
        className: "translate-y-[2px]",
      }),
    cell: ({ row: e }) =>
      l.jsx(ts, {
        checked: e.getIsSelected(),
        onCheckedChange: (t) => e.toggleSelected(!!t),
        "aria-label": "Select row",
        className: "translate-y-[2px]",
      }),
    enableSorting: !1,
    enableHiding: !1,
  },
  {
    accessorKey: "details",
    header: ({ column: e }) => l.jsx(pn, { column: e, title: "Status" }),
    cell: ({ row: e }) => {
      const { status: t } = e.getValue("details"),
        n = Nl.find((r) => r.value === t);
      return n
        ? l.jsxs("div", {
            className:
              "flex w-[100px] items-center rounded-full px-2 py-1 cursor-pointer",
            style: {
              backgroundColor: n.backgroundColor,
              cursor: n.value === mt.SUCCESS ? "pointer" : "default",
            },
            onClick: async () => {
              n.value === mt.SUCCESS &&
                (await chrome.runtime.sendMessage({
                  type: No,
                  payload: e.getValue("id"),
                }));
            },
            children: [
              n.icon &&
                l.jsx(n.icon, {
                  className: "mr-2 h-4 w-4 text-muted-foreground",
                }),
              l.jsx("span", { children: n.label }),
            ],
          })
        : null;
    },
    filterFn: (e, t, n) => n.includes(e.getValue(t)),
  },
  {
    accessorKey: "id",
    header: ({ column: e }) => l.jsx(pn, { column: e, title: "Task" }),
    cell: ({ row: e }) => {
      const n = e.getValue("id").slice(0, 6);
      return l.jsx("div", {
        className: "w-[40px]",
        children: l.jsx(Or, { children: n }),
      });
    },
  },
  {
    accessorKey: "request",
    id: "Course",
    header: ({ column: e }) => l.jsx(pn, { column: e, title: "Course" }),
    size: 20,
    cell: ({ row: e }) => {
      const { course: t } = e.original.request;
      return l.jsx("div", {
        className: "w-[160px] text-ellipsis overflow-hidden text-nowrap",
        children: t.name,
      });
    },
  },
  {
    accessorKey: "request",
    id: "Assignment",
    header: ({ column: e }) => l.jsx(pn, { column: e, title: "Assignment" }),
    cell: ({ row: e }) => {
      const { assignment: t } = e.original.request;
      return l.jsx("div", {
        className: "flex space-x-2",
        children: l.jsx("span", {
          className: "max-w-[600px] truncate font-medium",
          children: t.name,
        }),
      });
    },
  },
  {
    accessorKey: "request",
    id: "Submissions",
    header: ({ column: e }) => l.jsx(pn, { column: e, title: "Submissions" }),
    cell: ({ row: e }) => {
      const { submissions: t } = e.original.request;
      return l.jsx("div", { className: "w-[30px]", children: t.length });
    },
  },
  {
    accessorKey: "createdAt",
    id: "createdAt",
    header: ({ column: e }) => l.jsx(pn, { column: e, title: "Created" }),
    cell: ({ row: e }) => {
      const t = new Date(e.getValue("createdAt"));
      return l.jsx("div", {
        className: "w-[80px]",
        children: t.toLocaleString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
          minute: "2-digit",
          hour: "2-digit",
          hour12: !1,
        }),
      });
    },
  },
  { id: "actions", cell: ({ row: e }) => l.jsx(Im, { row: e }) },
];
/**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ke(e, t) {
  return (n) => {
    t.setState((r) => ({ ...r, [e]: Dt(n, r[e]) }));
  };
}
function ws(e) {
  return e instanceof Function;
}
function Om(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Lm(e, t) {
  const n = [],
    r = (s) => {
      s.forEach((o) => {
        n.push(o);
        const a = t(o);
        a != null && a.length && r(a);
      });
    };
  return r(e), n;
}
function B(e, t, n) {
  let r = [],
    s;
  return (o) => {
    let a;
    n.key && n.debug && (a = Date.now());
    const i = e(o);
    if (!(i.length !== r.length || i.some((f, g) => r[g] !== f))) return s;
    r = i;
    let d;
    if (
      (n.key && n.debug && (d = Date.now()),
      (s = t(...i)),
      n == null || n.onChange == null || n.onChange(s),
      n.key && n.debug && n != null && n.debug())
    ) {
      const f = Math.round((Date.now() - a) * 100) / 100,
        g = Math.round((Date.now() - d) * 100) / 100,
        m = g / 16,
        p = (y, x) => {
          for (y = String(y); y.length < x; ) y = " " + y;
          return y;
        };
      console.info(
        `%c⏱ ${p(g, 5)} /${p(f, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
              0,
              Math.min(120 - 120 * m, 120)
            )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return s;
  };
}
function Z(e, t, n, r) {
  return {
    debug: () => {
      var s;
      return (s = e == null ? void 0 : e.debugAll) != null ? s : e[t];
    },
    key: !1,
    onChange: r,
  };
}
function Vm(e, t, n, r) {
  const s = () => {
      var a;
      return (a = o.getValue()) != null ? a : e.options.renderFallbackValue;
    },
    o = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(r),
      renderValue: s,
      getContext: B(
        () => [e, n, t, o],
        (a, i, c, d) => ({
          table: a,
          column: i,
          row: c,
          cell: d,
          getValue: d.getValue,
          renderValue: d.renderValue,
        }),
        Z(e.options, "debugCells")
      ),
    };
  return (
    e._features.forEach((a) => {
      a.createCell == null || a.createCell(o, n, t, e);
    }, {}),
    o
  );
}
function Um(e, t, n, r) {
  var s, o;
  const i = { ...e._getDefaultColumnDef(), ...t },
    c = i.accessorKey;
  let d =
      (s =
        (o = i.id) != null
          ? o
          : c
          ? typeof String.prototype.replaceAll == "function"
            ? c.replaceAll(".", "_")
            : c.replace(/\./g, "_")
          : void 0) != null
        ? s
        : typeof i.header == "string"
        ? i.header
        : void 0,
    f;
  if (
    (i.accessorFn
      ? (f = i.accessorFn)
      : c &&
        (c.includes(".")
          ? (f = (m) => {
              let p = m;
              for (const x of c.split(".")) {
                var y;
                p = (y = p) == null ? void 0 : y[x];
              }
              return p;
            })
          : (f = (m) => m[i.accessorKey])),
    !d)
  )
    throw new Error();
  let g = {
    id: `${String(d)}`,
    accessorFn: f,
    parent: r,
    depth: n,
    columnDef: i,
    columns: [],
    getFlatColumns: B(
      () => [!0],
      () => {
        var m;
        return [
          g,
          ...((m = g.columns) == null
            ? void 0
            : m.flatMap((p) => p.getFlatColumns())),
        ];
      },
      Z(e.options, "debugColumns")
    ),
    getLeafColumns: B(
      () => [e._getOrderColumnsFn()],
      (m) => {
        var p;
        if ((p = g.columns) != null && p.length) {
          let y = g.columns.flatMap((x) => x.getLeafColumns());
          return m(y);
        }
        return [g];
      },
      Z(e.options, "debugColumns")
    ),
  };
  for (const m of e._features) m.createColumn == null || m.createColumn(g, e);
  return g;
}
const De = "debugHeaders";
function Ua(e, t, n) {
  var r;
  let o = {
    id: (r = n.id) != null ? r : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const a = [],
        i = (c) => {
          c.subHeaders && c.subHeaders.length && c.subHeaders.map(i), a.push(c);
        };
      return i(o), a;
    },
    getContext: () => ({ table: e, header: o, column: t }),
  };
  return (
    e._features.forEach((a) => {
      a.createHeader == null || a.createHeader(o, e);
    }),
    o
  );
}
const Gm = {
  createTable: (e) => {
    (e.getHeaderGroups = B(
      () => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right,
      ],
      (t, n, r, s) => {
        var o, a;
        const i =
            (o =
              r == null
                ? void 0
                : r.map((g) => n.find((m) => m.id === g)).filter(Boolean)) !=
            null
              ? o
              : [],
          c =
            (a =
              s == null
                ? void 0
                : s.map((g) => n.find((m) => m.id === g)).filter(Boolean)) !=
            null
              ? a
              : [],
          d = n.filter(
            (g) =>
              !(r != null && r.includes(g.id)) &&
              !(s != null && s.includes(g.id))
          );
        return Tr(t, [...i, ...d, ...c], e);
      },
      Z(e.options, De)
    )),
      (e.getCenterHeaderGroups = B(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
          e.getState().columnPinning.right,
        ],
        (t, n, r, s) => (
          (n = n.filter(
            (o) =>
              !(r != null && r.includes(o.id)) &&
              !(s != null && s.includes(o.id))
          )),
          Tr(t, n, e, "center")
        ),
        Z(e.options, De)
      )),
      (e.getLeftHeaderGroups = B(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
        ],
        (t, n, r) => {
          var s;
          const o =
            (s =
              r == null
                ? void 0
                : r.map((a) => n.find((i) => i.id === a)).filter(Boolean)) !=
            null
              ? s
              : [];
          return Tr(t, o, e, "left");
        },
        Z(e.options, De)
      )),
      (e.getRightHeaderGroups = B(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.right,
        ],
        (t, n, r) => {
          var s;
          const o =
            (s =
              r == null
                ? void 0
                : r.map((a) => n.find((i) => i.id === a)).filter(Boolean)) !=
            null
              ? s
              : [];
          return Tr(t, o, e, "right");
        },
        Z(e.options, De)
      )),
      (e.getFooterGroups = B(
        () => [e.getHeaderGroups()],
        (t) => [...t].reverse(),
        Z(e.options, De)
      )),
      (e.getLeftFooterGroups = B(
        () => [e.getLeftHeaderGroups()],
        (t) => [...t].reverse(),
        Z(e.options, De)
      )),
      (e.getCenterFooterGroups = B(
        () => [e.getCenterHeaderGroups()],
        (t) => [...t].reverse(),
        Z(e.options, De)
      )),
      (e.getRightFooterGroups = B(
        () => [e.getRightHeaderGroups()],
        (t) => [...t].reverse(),
        Z(e.options, De)
      )),
      (e.getFlatHeaders = B(
        () => [e.getHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        Z(e.options, De)
      )),
      (e.getLeftFlatHeaders = B(
        () => [e.getLeftHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        Z(e.options, De)
      )),
      (e.getCenterFlatHeaders = B(
        () => [e.getCenterHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        Z(e.options, De)
      )),
      (e.getRightFlatHeaders = B(
        () => [e.getRightHeaderGroups()],
        (t) => t.map((n) => n.headers).flat(),
        Z(e.options, De)
      )),
      (e.getCenterLeafHeaders = B(
        () => [e.getCenterFlatHeaders()],
        (t) =>
          t.filter((n) => {
            var r;
            return !((r = n.subHeaders) != null && r.length);
          }),
        Z(e.options, De)
      )),
      (e.getLeftLeafHeaders = B(
        () => [e.getLeftFlatHeaders()],
        (t) =>
          t.filter((n) => {
            var r;
            return !((r = n.subHeaders) != null && r.length);
          }),
        Z(e.options, De)
      )),
      (e.getRightLeafHeaders = B(
        () => [e.getRightFlatHeaders()],
        (t) =>
          t.filter((n) => {
            var r;
            return !((r = n.subHeaders) != null && r.length);
          }),
        Z(e.options, De)
      )),
      (e.getLeafHeaders = B(
        () => [
          e.getLeftHeaderGroups(),
          e.getCenterHeaderGroups(),
          e.getRightHeaderGroups(),
        ],
        (t, n, r) => {
          var s, o, a, i, c, d;
          return [
            ...((s = (o = t[0]) == null ? void 0 : o.headers) != null ? s : []),
            ...((a = (i = n[0]) == null ? void 0 : i.headers) != null ? a : []),
            ...((c = (d = r[0]) == null ? void 0 : d.headers) != null ? c : []),
          ]
            .map((f) => f.getLeafHeaders())
            .flat();
        },
        Z(e.options, De)
      ));
  },
};
function Tr(e, t, n, r) {
  var s, o;
  let a = 0;
  const i = function (m, p) {
    p === void 0 && (p = 1),
      (a = Math.max(a, p)),
      m
        .filter((y) => y.getIsVisible())
        .forEach((y) => {
          var x;
          (x = y.columns) != null && x.length && i(y.columns, p + 1);
        }, 0);
  };
  i(e);
  let c = [];
  const d = (m, p) => {
      const y = {
          depth: p,
          id: [r, `${p}`].filter(Boolean).join("_"),
          headers: [],
        },
        x = [];
      m.forEach((S) => {
        const C = [...x].reverse()[0],
          R = S.column.depth === y.depth;
        let P,
          N = !1;
        if (
          (R && S.column.parent
            ? (P = S.column.parent)
            : ((P = S.column), (N = !0)),
          C && (C == null ? void 0 : C.column) === P)
        )
          C.subHeaders.push(S);
        else {
          const I = Ua(n, P, {
            id: [r, p, P.id, S == null ? void 0 : S.id]
              .filter(Boolean)
              .join("_"),
            isPlaceholder: N,
            placeholderId: N
              ? `${x.filter((K) => K.column === P).length}`
              : void 0,
            depth: p,
            index: x.length,
          });
          I.subHeaders.push(S), x.push(I);
        }
        y.headers.push(S), (S.headerGroup = y);
      }),
        c.push(y),
        p > 0 && d(x, p - 1);
    },
    f = t.map((m, p) => Ua(n, m, { depth: a, index: p }));
  d(f, a - 1), c.reverse();
  const g = (m) =>
    m
      .filter((y) => y.column.getIsVisible())
      .map((y) => {
        let x = 0,
          S = 0,
          C = [0];
        y.subHeaders && y.subHeaders.length
          ? ((C = []),
            g(y.subHeaders).forEach((P) => {
              let { colSpan: N, rowSpan: I } = P;
              (x += N), C.push(I);
            }))
          : (x = 1);
        const R = Math.min(...C);
        return (
          (S = S + R),
          (y.colSpan = x),
          (y.rowSpan = S),
          { colSpan: x, rowSpan: S }
        );
      });
  return g((s = (o = c[0]) == null ? void 0 : o.headers) != null ? s : []), c;
}
const Ko = (e, t, n, r, s, o, a) => {
    let i = {
      id: t,
      index: r,
      original: n,
      depth: s,
      parentId: a,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (c) => {
        if (i._valuesCache.hasOwnProperty(c)) return i._valuesCache[c];
        const d = e.getColumn(c);
        if (d != null && d.accessorFn)
          return (
            (i._valuesCache[c] = d.accessorFn(i.original, r)), i._valuesCache[c]
          );
      },
      getUniqueValues: (c) => {
        if (i._uniqueValuesCache.hasOwnProperty(c))
          return i._uniqueValuesCache[c];
        const d = e.getColumn(c);
        if (d != null && d.accessorFn)
          return d.columnDef.getUniqueValues
            ? ((i._uniqueValuesCache[c] = d.columnDef.getUniqueValues(
                i.original,
                r
              )),
              i._uniqueValuesCache[c])
            : ((i._uniqueValuesCache[c] = [i.getValue(c)]),
              i._uniqueValuesCache[c]);
      },
      renderValue: (c) => {
        var d;
        return (d = i.getValue(c)) != null ? d : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => Lm(i.subRows, (c) => c.subRows),
      getParentRow: () => (i.parentId ? e.getRow(i.parentId, !0) : void 0),
      getParentRows: () => {
        let c = [],
          d = i;
        for (;;) {
          const f = d.getParentRow();
          if (!f) break;
          c.push(f), (d = f);
        }
        return c.reverse();
      },
      getAllCells: B(
        () => [e.getAllLeafColumns()],
        (c) => c.map((d) => Vm(e, i, d, d.id)),
        Z(e.options, "debugRows")
      ),
      _getAllCellsByColumnId: B(
        () => [i.getAllCells()],
        (c) => c.reduce((d, f) => ((d[f.column.id] = f), d), {}),
        Z(e.options, "debugRows")
      ),
    };
    for (let c = 0; c < e._features.length; c++) {
      const d = e._features[c];
      d == null || d.createRow == null || d.createRow(i, e);
    }
    return i;
  },
  zm = {
    createColumn: (e, t) => {
      (e._getFacetedRowModel =
        t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
        (e.getFacetedRowModel = () =>
          e._getFacetedRowModel
            ? e._getFacetedRowModel()
            : t.getPreFilteredRowModel()),
        (e._getFacetedUniqueValues =
          t.options.getFacetedUniqueValues &&
          t.options.getFacetedUniqueValues(t, e.id)),
        (e.getFacetedUniqueValues = () =>
          e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map()),
        (e._getFacetedMinMaxValues =
          t.options.getFacetedMinMaxValues &&
          t.options.getFacetedMinMaxValues(t, e.id)),
        (e.getFacetedMinMaxValues = () => {
          if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
        });
    },
  },
  Fc = (e, t, n) => {
    var r, s;
    const o =
      n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
    return !!(
      !(
        (s = e.getValue(t)) == null ||
        (s = s.toString()) == null ||
        (s = s.toLowerCase()) == null
      ) && s.includes(o)
    );
  };
Fc.autoRemove = (e) => it(e);
const $c = (e, t, n) => {
  var r;
  return !!(
    !((r = e.getValue(t)) == null || (r = r.toString()) == null) &&
    r.includes(n)
  );
};
$c.autoRemove = (e) => it(e);
const jc = (e, t, n) => {
  var r;
  return (
    ((r = e.getValue(t)) == null || (r = r.toString()) == null
      ? void 0
      : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase())
  );
};
jc.autoRemove = (e) => it(e);
const Oc = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
Oc.autoRemove = (e) => it(e) || !(e != null && e.length);
const Lc = (e, t, n) =>
  !n.some((r) => {
    var s;
    return !((s = e.getValue(t)) != null && s.includes(r));
  });
Lc.autoRemove = (e) => it(e) || !(e != null && e.length);
const Vc = (e, t, n) =>
  n.some((r) => {
    var s;
    return (s = e.getValue(t)) == null ? void 0 : s.includes(r);
  });
Vc.autoRemove = (e) => it(e) || !(e != null && e.length);
const Uc = (e, t, n) => e.getValue(t) === n;
Uc.autoRemove = (e) => it(e);
const Gc = (e, t, n) => e.getValue(t) == n;
Gc.autoRemove = (e) => it(e);
const Yo = (e, t, n) => {
  let [r, s] = n;
  const o = e.getValue(t);
  return o >= r && o <= s;
};
Yo.resolveFilterValue = (e) => {
  let [t, n] = e,
    r = typeof t != "number" ? parseFloat(t) : t,
    s = typeof n != "number" ? parseFloat(n) : n,
    o = t === null || Number.isNaN(r) ? -1 / 0 : r,
    a = n === null || Number.isNaN(s) ? 1 / 0 : s;
  if (o > a) {
    const i = o;
    (o = a), (a = i);
  }
  return [o, a];
};
Yo.autoRemove = (e) => it(e) || (it(e[0]) && it(e[1]));
const bt = {
  includesString: Fc,
  includesStringSensitive: $c,
  equalsString: jc,
  arrIncludes: Oc,
  arrIncludesAll: Lc,
  arrIncludesSome: Vc,
  equals: Uc,
  weakEquals: Gc,
  inNumberRange: Yo,
};
function it(e) {
  return e == null || e === "";
}
const Hm = {
  getDefaultColumnDef: () => ({ filterFn: "auto" }),
  getInitialState: (e) => ({ columnFilters: [], ...e }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ke("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100,
  }),
  createColumn: (e, t) => {
    (e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0],
        r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string"
        ? bt.includesString
        : typeof r == "number"
        ? bt.inNumberRange
        : typeof r == "boolean" || (r !== null && typeof r == "object")
        ? bt.equals
        : Array.isArray(r)
        ? bt.arrIncludes
        : bt.weakEquals;
    }),
      (e.getFilterFn = () => {
        var n, r;
        return ws(e.columnDef.filterFn)
          ? e.columnDef.filterFn
          : e.columnDef.filterFn === "auto"
          ? e.getAutoFilterFn()
          : (n =
              (r = t.options.filterFns) == null
                ? void 0
                : r[e.columnDef.filterFn]) != null
          ? n
          : bt[e.columnDef.filterFn];
      }),
      (e.getCanFilter = () => {
        var n, r, s;
        return (
          ((n = e.columnDef.enableColumnFilter) != null ? n : !0) &&
          ((r = t.options.enableColumnFilters) != null ? r : !0) &&
          ((s = t.options.enableFilters) != null ? s : !0) &&
          !!e.accessorFn
        );
      }),
      (e.getIsFiltered = () => e.getFilterIndex() > -1),
      (e.getFilterValue = () => {
        var n;
        return (n = t.getState().columnFilters) == null ||
          (n = n.find((r) => r.id === e.id)) == null
          ? void 0
          : n.value;
      }),
      (e.getFilterIndex = () => {
        var n, r;
        return (n =
          (r = t.getState().columnFilters) == null
            ? void 0
            : r.findIndex((s) => s.id === e.id)) != null
          ? n
          : -1;
      }),
      (e.setFilterValue = (n) => {
        t.setColumnFilters((r) => {
          const s = e.getFilterFn(),
            o = r == null ? void 0 : r.find((f) => f.id === e.id),
            a = Dt(n, o ? o.value : void 0);
          if (Ga(s, a, e)) {
            var i;
            return (i = r == null ? void 0 : r.filter((f) => f.id !== e.id)) !=
              null
              ? i
              : [];
          }
          const c = { id: e.id, value: a };
          if (o) {
            var d;
            return (d =
              r == null ? void 0 : r.map((f) => (f.id === e.id ? c : f))) !=
              null
              ? d
              : [];
          }
          return r != null && r.length ? [...r, c] : [c];
        });
      });
  },
  createRow: (e, t) => {
    (e.columnFilters = {}), (e.columnFiltersMeta = {});
  },
  createTable: (e) => {
    (e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(),
        r = (s) => {
          var o;
          return (o = Dt(t, s)) == null
            ? void 0
            : o.filter((a) => {
                const i = n.find((c) => c.id === a.id);
                if (i) {
                  const c = i.getFilterFn();
                  if (Ga(c, a.value, i)) return !1;
                }
                return !0;
              });
        };
      e.options.onColumnFiltersChange == null ||
        e.options.onColumnFiltersChange(r);
    }),
      (e.resetColumnFilters = (t) => {
        var n, r;
        e.setColumnFilters(
          t
            ? []
            : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) !=
              null
            ? n
            : []
        );
      }),
      (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
      (e.getFilteredRowModel = () => (
        !e._getFilteredRowModel &&
          e.options.getFilteredRowModel &&
          (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
        e.options.manualFiltering || !e._getFilteredRowModel
          ? e.getPreFilteredRowModel()
          : e._getFilteredRowModel()
      ));
  },
};
function Ga(e, t, n) {
  return (
    (e && e.autoRemove ? e.autoRemove(t, n) : !1) ||
    typeof t > "u" ||
    (typeof t == "string" && !t)
  );
}
const Bm = (e, t, n) =>
    n.reduce((r, s) => {
      const o = s.getValue(e);
      return r + (typeof o == "number" ? o : 0);
    }, 0),
  Zm = (e, t, n) => {
    let r;
    return (
      n.forEach((s) => {
        const o = s.getValue(e);
        o != null && (r > o || (r === void 0 && o >= o)) && (r = o);
      }),
      r
    );
  },
  Wm = (e, t, n) => {
    let r;
    return (
      n.forEach((s) => {
        const o = s.getValue(e);
        o != null && (r < o || (r === void 0 && o >= o)) && (r = o);
      }),
      r
    );
  },
  qm = (e, t, n) => {
    let r, s;
    return (
      n.forEach((o) => {
        const a = o.getValue(e);
        a != null &&
          (r === void 0
            ? a >= a && (r = s = a)
            : (r > a && (r = a), s < a && (s = a)));
      }),
      [r, s]
    );
  },
  Km = (e, t) => {
    let n = 0,
      r = 0;
    if (
      (t.forEach((s) => {
        let o = s.getValue(e);
        o != null && (o = +o) >= o && (++n, (r += o));
      }),
      n)
    )
      return r / n;
  },
  Ym = (e, t) => {
    if (!t.length) return;
    const n = t.map((o) => o.getValue(e));
    if (!Om(n)) return;
    if (n.length === 1) return n[0];
    const r = Math.floor(n.length / 2),
      s = n.sort((o, a) => o - a);
    return n.length % 2 !== 0 ? s[r] : (s[r - 1] + s[r]) / 2;
  },
  Xm = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()),
  Jm = (e, t) => new Set(t.map((n) => n.getValue(e))).size,
  Qm = (e, t) => t.length,
  Ds = {
    sum: Bm,
    min: Zm,
    max: Wm,
    extent: qm,
    mean: Km,
    median: Ym,
    unique: Xm,
    uniqueCount: Jm,
    count: Qm,
  },
  eh = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (e) => {
        var t, n;
        return (t =
          (n = e.getValue()) == null || n.toString == null
            ? void 0
            : n.toString()) != null
          ? t
          : null;
      },
      aggregationFn: "auto",
    }),
    getInitialState: (e) => ({ grouping: [], ...e }),
    getDefaultOptions: (e) => ({
      onGroupingChange: Ke("grouping", e),
      groupedColumnMode: "reorder",
    }),
    createColumn: (e, t) => {
      (e.toggleGrouping = () => {
        t.setGrouping((n) =>
          n != null && n.includes(e.id)
            ? n.filter((r) => r !== e.id)
            : [...(n ?? []), e.id]
        );
      }),
        (e.getCanGroup = () => {
          var n, r;
          return (
            ((n = e.columnDef.enableGrouping) != null ? n : !0) &&
            ((r = t.options.enableGrouping) != null ? r : !0) &&
            (!!e.accessorFn || !!e.columnDef.getGroupingValue)
          );
        }),
        (e.getIsGrouped = () => {
          var n;
          return (n = t.getState().grouping) == null
            ? void 0
            : n.includes(e.id);
        }),
        (e.getGroupedIndex = () => {
          var n;
          return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
        }),
        (e.getToggleGroupingHandler = () => {
          const n = e.getCanGroup();
          return () => {
            n && e.toggleGrouping();
          };
        }),
        (e.getAutoAggregationFn = () => {
          const n = t.getCoreRowModel().flatRows[0],
            r = n == null ? void 0 : n.getValue(e.id);
          if (typeof r == "number") return Ds.sum;
          if (Object.prototype.toString.call(r) === "[object Date]")
            return Ds.extent;
        }),
        (e.getAggregationFn = () => {
          var n, r;
          if (!e) throw new Error();
          return ws(e.columnDef.aggregationFn)
            ? e.columnDef.aggregationFn
            : e.columnDef.aggregationFn === "auto"
            ? e.getAutoAggregationFn()
            : (n =
                (r = t.options.aggregationFns) == null
                  ? void 0
                  : r[e.columnDef.aggregationFn]) != null
            ? n
            : Ds[e.columnDef.aggregationFn];
        });
    },
    createTable: (e) => {
      (e.setGrouping = (t) =>
        e.options.onGroupingChange == null
          ? void 0
          : e.options.onGroupingChange(t)),
        (e.resetGrouping = (t) => {
          var n, r;
          e.setGrouping(
            t
              ? []
              : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null
              ? n
              : []
          );
        }),
        (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
        (e.getGroupedRowModel = () => (
          !e._getGroupedRowModel &&
            e.options.getGroupedRowModel &&
            (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
          e.options.manualGrouping || !e._getGroupedRowModel
            ? e.getPreGroupedRowModel()
            : e._getGroupedRowModel()
        ));
    },
    createRow: (e, t) => {
      (e.getIsGrouped = () => !!e.groupingColumnId),
        (e.getGroupingValue = (n) => {
          if (e._groupingValuesCache.hasOwnProperty(n))
            return e._groupingValuesCache[n];
          const r = t.getColumn(n);
          return r != null && r.columnDef.getGroupingValue
            ? ((e._groupingValuesCache[n] = r.columnDef.getGroupingValue(
                e.original
              )),
              e._groupingValuesCache[n])
            : e.getValue(n);
        }),
        (e._groupingValuesCache = {});
    },
    createCell: (e, t, n, r) => {
      (e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId),
        (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
        (e.getIsAggregated = () => {
          var s;
          return (
            !e.getIsGrouped() &&
            !e.getIsPlaceholder() &&
            !!((s = n.subRows) != null && s.length)
          );
        });
    },
  };
function th(e, t, n) {
  if (!(t != null && t.length) || !n) return e;
  const r = e.filter((o) => !t.includes(o.id));
  return n === "remove"
    ? r
    : [...t.map((o) => e.find((a) => a.id === o)).filter(Boolean), ...r];
}
const nh = {
    getInitialState: (e) => ({ columnOrder: [], ...e }),
    getDefaultOptions: (e) => ({ onColumnOrderChange: Ke("columnOrder", e) }),
    createColumn: (e, t) => {
      (e.getIndex = B(
        (n) => [Wn(t, n)],
        (n) => n.findIndex((r) => r.id === e.id),
        Z(t.options, "debugColumns")
      )),
        (e.getIsFirstColumn = (n) => {
          var r;
          return ((r = Wn(t, n)[0]) == null ? void 0 : r.id) === e.id;
        }),
        (e.getIsLastColumn = (n) => {
          var r;
          const s = Wn(t, n);
          return ((r = s[s.length - 1]) == null ? void 0 : r.id) === e.id;
        });
    },
    createTable: (e) => {
      (e.setColumnOrder = (t) =>
        e.options.onColumnOrderChange == null
          ? void 0
          : e.options.onColumnOrderChange(t)),
        (e.resetColumnOrder = (t) => {
          var n;
          e.setColumnOrder(
            t ? [] : (n = e.initialState.columnOrder) != null ? n : []
          );
        }),
        (e._getOrderColumnsFn = B(
          () => [
            e.getState().columnOrder,
            e.getState().grouping,
            e.options.groupedColumnMode,
          ],
          (t, n, r) => (s) => {
            let o = [];
            if (!(t != null && t.length)) o = s;
            else {
              const a = [...t],
                i = [...s];
              for (; i.length && a.length; ) {
                const c = a.shift(),
                  d = i.findIndex((f) => f.id === c);
                d > -1 && o.push(i.splice(d, 1)[0]);
              }
              o = [...o, ...i];
            }
            return th(o, n, r);
          },
          Z(e.options, "debugTable")
        ));
    },
  },
  Fs = () => ({ left: [], right: [] }),
  rh = {
    getInitialState: (e) => ({ columnPinning: Fs(), ...e }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Ke("columnPinning", e),
    }),
    createColumn: (e, t) => {
      (e.pin = (n) => {
        const r = e
          .getLeafColumns()
          .map((s) => s.id)
          .filter(Boolean);
        t.setColumnPinning((s) => {
          var o, a;
          if (n === "right") {
            var i, c;
            return {
              left: ((i = s == null ? void 0 : s.left) != null ? i : []).filter(
                (g) => !(r != null && r.includes(g))
              ),
              right: [
                ...((c = s == null ? void 0 : s.right) != null ? c : []).filter(
                  (g) => !(r != null && r.includes(g))
                ),
                ...r,
              ],
            };
          }
          if (n === "left") {
            var d, f;
            return {
              left: [
                ...((d = s == null ? void 0 : s.left) != null ? d : []).filter(
                  (g) => !(r != null && r.includes(g))
                ),
                ...r,
              ],
              right: ((f = s == null ? void 0 : s.right) != null
                ? f
                : []
              ).filter((g) => !(r != null && r.includes(g))),
            };
          }
          return {
            left: ((o = s == null ? void 0 : s.left) != null ? o : []).filter(
              (g) => !(r != null && r.includes(g))
            ),
            right: ((a = s == null ? void 0 : s.right) != null ? a : []).filter(
              (g) => !(r != null && r.includes(g))
            ),
          };
        });
      }),
        (e.getCanPin = () =>
          e.getLeafColumns().some((r) => {
            var s, o, a;
            return (
              ((s = r.columnDef.enablePinning) != null ? s : !0) &&
              ((o =
                (a = t.options.enableColumnPinning) != null
                  ? a
                  : t.options.enablePinning) != null
                ? o
                : !0)
            );
          })),
        (e.getIsPinned = () => {
          const n = e.getLeafColumns().map((i) => i.id),
            { left: r, right: s } = t.getState().columnPinning,
            o = n.some((i) => (r == null ? void 0 : r.includes(i))),
            a = n.some((i) => (s == null ? void 0 : s.includes(i)));
          return o ? "left" : a ? "right" : !1;
        }),
        (e.getPinnedIndex = () => {
          var n, r;
          const s = e.getIsPinned();
          return s
            ? (n =
                (r = t.getState().columnPinning) == null || (r = r[s]) == null
                  ? void 0
                  : r.indexOf(e.id)) != null
              ? n
              : -1
            : 0;
        });
    },
    createRow: (e, t) => {
      (e.getCenterVisibleCells = B(
        () => [
          e._getAllVisibleCells(),
          t.getState().columnPinning.left,
          t.getState().columnPinning.right,
        ],
        (n, r, s) => {
          const o = [...(r ?? []), ...(s ?? [])];
          return n.filter((a) => !o.includes(a.column.id));
        },
        Z(t.options, "debugRows")
      )),
        (e.getLeftVisibleCells = B(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
          (n, r) =>
            (r ?? [])
              .map((o) => n.find((a) => a.column.id === o))
              .filter(Boolean)
              .map((o) => ({ ...o, position: "left" })),
          Z(t.options, "debugRows")
        )),
        (e.getRightVisibleCells = B(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
          (n, r) =>
            (r ?? [])
              .map((o) => n.find((a) => a.column.id === o))
              .filter(Boolean)
              .map((o) => ({ ...o, position: "right" })),
          Z(t.options, "debugRows")
        ));
    },
    createTable: (e) => {
      (e.setColumnPinning = (t) =>
        e.options.onColumnPinningChange == null
          ? void 0
          : e.options.onColumnPinningChange(t)),
        (e.resetColumnPinning = (t) => {
          var n, r;
          return e.setColumnPinning(
            t
              ? Fs()
              : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) !=
                null
              ? n
              : Fs()
          );
        }),
        (e.getIsSomeColumnsPinned = (t) => {
          var n;
          const r = e.getState().columnPinning;
          if (!t) {
            var s, o;
            return !!(
              ((s = r.left) != null && s.length) ||
              ((o = r.right) != null && o.length)
            );
          }
          return !!((n = r[t]) != null && n.length);
        }),
        (e.getLeftLeafColumns = B(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
          (t, n) =>
            (n ?? []).map((r) => t.find((s) => s.id === r)).filter(Boolean),
          Z(e.options, "debugColumns")
        )),
        (e.getRightLeafColumns = B(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
          (t, n) =>
            (n ?? []).map((r) => t.find((s) => s.id === r)).filter(Boolean),
          Z(e.options, "debugColumns")
        )),
        (e.getCenterLeafColumns = B(
          () => [
            e.getAllLeafColumns(),
            e.getState().columnPinning.left,
            e.getState().columnPinning.right,
          ],
          (t, n, r) => {
            const s = [...(n ?? []), ...(r ?? [])];
            return t.filter((o) => !s.includes(o.id));
          },
          Z(e.options, "debugColumns")
        ));
    },
  },
  Nr = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
  $s = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: !1,
    columnSizingStart: [],
  }),
  sh = {
    getDefaultColumnDef: () => Nr,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: $s(),
      ...e,
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Ke("columnSizing", e),
      onColumnSizingInfoChange: Ke("columnSizingInfo", e),
    }),
    createColumn: (e, t) => {
      (e.getSize = () => {
        var n, r, s;
        const o = t.getState().columnSizing[e.id];
        return Math.min(
          Math.max(
            (n = e.columnDef.minSize) != null ? n : Nr.minSize,
            (r = o ?? e.columnDef.size) != null ? r : Nr.size
          ),
          (s = e.columnDef.maxSize) != null ? s : Nr.maxSize
        );
      }),
        (e.getStart = B(
          (n) => [n, Wn(t, n), t.getState().columnSizing],
          (n, r) =>
            r.slice(0, e.getIndex(n)).reduce((s, o) => s + o.getSize(), 0),
          Z(t.options, "debugColumns")
        )),
        (e.getAfter = B(
          (n) => [n, Wn(t, n), t.getState().columnSizing],
          (n, r) =>
            r.slice(e.getIndex(n) + 1).reduce((s, o) => s + o.getSize(), 0),
          Z(t.options, "debugColumns")
        )),
        (e.resetSize = () => {
          t.setColumnSizing((n) => {
            let { [e.id]: r, ...s } = n;
            return s;
          });
        }),
        (e.getCanResize = () => {
          var n, r;
          return (
            ((n = e.columnDef.enableResizing) != null ? n : !0) &&
            ((r = t.options.enableColumnResizing) != null ? r : !0)
          );
        }),
        (e.getIsResizing = () =>
          t.getState().columnSizingInfo.isResizingColumn === e.id);
    },
    createHeader: (e, t) => {
      (e.getSize = () => {
        let n = 0;
        const r = (s) => {
          if (s.subHeaders.length) s.subHeaders.forEach(r);
          else {
            var o;
            n += (o = s.column.getSize()) != null ? o : 0;
          }
        };
        return r(e), n;
      }),
        (e.getStart = () => {
          if (e.index > 0) {
            const n = e.headerGroup.headers[e.index - 1];
            return n.getStart() + n.getSize();
          }
          return 0;
        }),
        (e.getResizeHandler = (n) => {
          const r = t.getColumn(e.column.id),
            s = r == null ? void 0 : r.getCanResize();
          return (o) => {
            if (
              !r ||
              !s ||
              (o.persist == null || o.persist(),
              js(o) && o.touches && o.touches.length > 1)
            )
              return;
            const a = e.getSize(),
              i = e
                ? e
                    .getLeafHeaders()
                    .map((C) => [C.column.id, C.column.getSize()])
                : [[r.id, r.getSize()]],
              c = js(o) ? Math.round(o.touches[0].clientX) : o.clientX,
              d = {},
              f = (C, R) => {
                typeof R == "number" &&
                  (t.setColumnSizingInfo((P) => {
                    var N, I;
                    const K =
                        t.options.columnResizeDirection === "rtl" ? -1 : 1,
                      te =
                        (R -
                          ((N = P == null ? void 0 : P.startOffset) != null
                            ? N
                            : 0)) *
                        K,
                      U = Math.max(
                        te /
                          ((I = P == null ? void 0 : P.startSize) != null
                            ? I
                            : 0),
                        -0.999999
                      );
                    return (
                      P.columnSizingStart.forEach((ge) => {
                        let [ce, ue] = ge;
                        d[ce] =
                          Math.round(Math.max(ue + ue * U, 0) * 100) / 100;
                      }),
                      { ...P, deltaOffset: te, deltaPercentage: U }
                    );
                  }),
                  (t.options.columnResizeMode === "onChange" || C === "end") &&
                    t.setColumnSizing((P) => ({ ...P, ...d })));
              },
              g = (C) => f("move", C),
              m = (C) => {
                f("end", C),
                  t.setColumnSizingInfo((R) => ({
                    ...R,
                    isResizingColumn: !1,
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    columnSizingStart: [],
                  }));
              },
              p = n || typeof document < "u" ? document : null,
              y = {
                moveHandler: (C) => g(C.clientX),
                upHandler: (C) => {
                  p == null ||
                    p.removeEventListener("mousemove", y.moveHandler),
                    p == null || p.removeEventListener("mouseup", y.upHandler),
                    m(C.clientX);
                },
              },
              x = {
                moveHandler: (C) => (
                  C.cancelable && (C.preventDefault(), C.stopPropagation()),
                  g(C.touches[0].clientX),
                  !1
                ),
                upHandler: (C) => {
                  var R;
                  p == null ||
                    p.removeEventListener("touchmove", x.moveHandler),
                    p == null || p.removeEventListener("touchend", x.upHandler),
                    C.cancelable && (C.preventDefault(), C.stopPropagation()),
                    m((R = C.touches[0]) == null ? void 0 : R.clientX);
                },
              },
              S = oh() ? { passive: !1 } : !1;
            js(o)
              ? (p == null || p.addEventListener("touchmove", x.moveHandler, S),
                p == null || p.addEventListener("touchend", x.upHandler, S))
              : (p == null || p.addEventListener("mousemove", y.moveHandler, S),
                p == null || p.addEventListener("mouseup", y.upHandler, S)),
              t.setColumnSizingInfo((C) => ({
                ...C,
                startOffset: c,
                startSize: a,
                deltaOffset: 0,
                deltaPercentage: 0,
                columnSizingStart: i,
                isResizingColumn: r.id,
              }));
          };
        });
    },
    createTable: (e) => {
      (e.setColumnSizing = (t) =>
        e.options.onColumnSizingChange == null
          ? void 0
          : e.options.onColumnSizingChange(t)),
        (e.setColumnSizingInfo = (t) =>
          e.options.onColumnSizingInfoChange == null
            ? void 0
            : e.options.onColumnSizingInfoChange(t)),
        (e.resetColumnSizing = (t) => {
          var n;
          e.setColumnSizing(
            t ? {} : (n = e.initialState.columnSizing) != null ? n : {}
          );
        }),
        (e.resetHeaderSizeInfo = (t) => {
          var n;
          e.setColumnSizingInfo(
            t ? $s() : (n = e.initialState.columnSizingInfo) != null ? n : $s()
          );
        }),
        (e.getTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, s) => r + s.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getLeftTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getLeftHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, s) => r + s.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getCenterTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getCenterHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, s) => r + s.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getRightTotalSize = () => {
          var t, n;
          return (t =
            (n = e.getRightHeaderGroups()[0]) == null
              ? void 0
              : n.headers.reduce((r, s) => r + s.getSize(), 0)) != null
            ? t
            : 0;
        });
    },
  };
let Ir = null;
function oh() {
  if (typeof Ir == "boolean") return Ir;
  let e = !1;
  try {
    const t = {
        get passive() {
          return (e = !0), !1;
        },
      },
      n = () => {};
    window.addEventListener("test", n, t),
      window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return (Ir = e), Ir;
}
function js(e) {
  return e.type === "touchstart";
}
const ah = {
  getInitialState: (e) => ({ columnVisibility: {}, ...e }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ke("columnVisibility", e),
  }),
  createColumn: (e, t) => {
    (e.toggleVisibility = (n) => {
      e.getCanHide() &&
        t.setColumnVisibility((r) => ({
          ...r,
          [e.id]: n ?? !e.getIsVisible(),
        }));
    }),
      (e.getIsVisible = () => {
        var n, r;
        const s = e.columns;
        return (n = s.length
          ? s.some((o) => o.getIsVisible())
          : (r = t.getState().columnVisibility) == null
          ? void 0
          : r[e.id]) != null
          ? n
          : !0;
      }),
      (e.getCanHide = () => {
        var n, r;
        return (
          ((n = e.columnDef.enableHiding) != null ? n : !0) &&
          ((r = t.options.enableHiding) != null ? r : !0)
        );
      }),
      (e.getToggleVisibilityHandler = () => (n) => {
        e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
      });
  },
  createRow: (e, t) => {
    (e._getAllVisibleCells = B(
      () => [e.getAllCells(), t.getState().columnVisibility],
      (n) => n.filter((r) => r.column.getIsVisible()),
      Z(t.options, "debugRows")
    )),
      (e.getVisibleCells = B(
        () => [
          e.getLeftVisibleCells(),
          e.getCenterVisibleCells(),
          e.getRightVisibleCells(),
        ],
        (n, r, s) => [...n, ...r, ...s],
        Z(t.options, "debugRows")
      ));
  },
  createTable: (e) => {
    const t = (n, r) =>
      B(
        () => [
          r(),
          r()
            .filter((s) => s.getIsVisible())
            .map((s) => s.id)
            .join("_"),
        ],
        (s) =>
          s.filter((o) => (o.getIsVisible == null ? void 0 : o.getIsVisible())),
        Z(e.options, "debugColumns")
      );
    (e.getVisibleFlatColumns = t("getVisibleFlatColumns", () =>
      e.getAllFlatColumns()
    )),
      (e.getVisibleLeafColumns = t("getVisibleLeafColumns", () =>
        e.getAllLeafColumns()
      )),
      (e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () =>
        e.getLeftLeafColumns()
      )),
      (e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () =>
        e.getRightLeafColumns()
      )),
      (e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () =>
        e.getCenterLeafColumns()
      )),
      (e.setColumnVisibility = (n) =>
        e.options.onColumnVisibilityChange == null
          ? void 0
          : e.options.onColumnVisibilityChange(n)),
      (e.resetColumnVisibility = (n) => {
        var r;
        e.setColumnVisibility(
          n ? {} : (r = e.initialState.columnVisibility) != null ? r : {}
        );
      }),
      (e.toggleAllColumnsVisible = (n) => {
        var r;
        (n = (r = n) != null ? r : !e.getIsAllColumnsVisible()),
          e.setColumnVisibility(
            e
              .getAllLeafColumns()
              .reduce(
                (s, o) => ({
                  ...s,
                  [o.id]: n || !(o.getCanHide != null && o.getCanHide()),
                }),
                {}
              )
          );
      }),
      (e.getIsAllColumnsVisible = () =>
        !e
          .getAllLeafColumns()
          .some((n) => !(n.getIsVisible != null && n.getIsVisible()))),
      (e.getIsSomeColumnsVisible = () =>
        e
          .getAllLeafColumns()
          .some((n) => (n.getIsVisible == null ? void 0 : n.getIsVisible()))),
      (e.getToggleAllColumnsVisibilityHandler = () => (n) => {
        var r;
        e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
      });
  },
};
function Wn(e, t) {
  return t
    ? t === "center"
      ? e.getCenterVisibleLeafColumns()
      : t === "left"
      ? e.getLeftVisibleLeafColumns()
      : e.getRightVisibleLeafColumns()
    : e.getVisibleLeafColumns();
}
const ih = {
    createTable: (e) => {
      (e._getGlobalFacetedRowModel =
        e.options.getFacetedRowModel &&
        e.options.getFacetedRowModel(e, "__global__")),
        (e.getGlobalFacetedRowModel = () =>
          e.options.manualFiltering || !e._getGlobalFacetedRowModel
            ? e.getPreFilteredRowModel()
            : e._getGlobalFacetedRowModel()),
        (e._getGlobalFacetedUniqueValues =
          e.options.getFacetedUniqueValues &&
          e.options.getFacetedUniqueValues(e, "__global__")),
        (e.getGlobalFacetedUniqueValues = () =>
          e._getGlobalFacetedUniqueValues
            ? e._getGlobalFacetedUniqueValues()
            : new Map()),
        (e._getGlobalFacetedMinMaxValues =
          e.options.getFacetedMinMaxValues &&
          e.options.getFacetedMinMaxValues(e, "__global__")),
        (e.getGlobalFacetedMinMaxValues = () => {
          if (e._getGlobalFacetedMinMaxValues)
            return e._getGlobalFacetedMinMaxValues();
        });
    },
  },
  lh = {
    getInitialState: (e) => ({ globalFilter: void 0, ...e }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: Ke("globalFilter", e),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (t) => {
        var n;
        const r =
          (n = e.getCoreRowModel().flatRows[0]) == null ||
          (n = n._getAllCellsByColumnId()[t.id]) == null
            ? void 0
            : n.getValue();
        return typeof r == "string" || typeof r == "number";
      },
    }),
    createColumn: (e, t) => {
      e.getCanGlobalFilter = () => {
        var n, r, s, o;
        return (
          ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) &&
          ((r = t.options.enableGlobalFilter) != null ? r : !0) &&
          ((s = t.options.enableFilters) != null ? s : !0) &&
          ((o =
            t.options.getColumnCanGlobalFilter == null
              ? void 0
              : t.options.getColumnCanGlobalFilter(e)) != null
            ? o
            : !0) &&
          !!e.accessorFn
        );
      };
    },
    createTable: (e) => {
      (e.getGlobalAutoFilterFn = () => bt.includesString),
        (e.getGlobalFilterFn = () => {
          var t, n;
          const { globalFilterFn: r } = e.options;
          return ws(r)
            ? r
            : r === "auto"
            ? e.getGlobalAutoFilterFn()
            : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null
            ? t
            : bt[r];
        }),
        (e.setGlobalFilter = (t) => {
          e.options.onGlobalFilterChange == null ||
            e.options.onGlobalFilterChange(t);
        }),
        (e.resetGlobalFilter = (t) => {
          e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
        });
    },
  },
  ch = {
    getInitialState: (e) => ({ expanded: {}, ...e }),
    getDefaultOptions: (e) => ({
      onExpandedChange: Ke("expanded", e),
      paginateExpandedRows: !0,
    }),
    createTable: (e) => {
      let t = !1,
        n = !1;
      (e._autoResetExpanded = () => {
        var r, s;
        if (!t) {
          e._queue(() => {
            t = !0;
          });
          return;
        }
        if (
          (r =
            (s = e.options.autoResetAll) != null
              ? s
              : e.options.autoResetExpanded) != null
            ? r
            : !e.options.manualExpanding
        ) {
          if (n) return;
          (n = !0),
            e._queue(() => {
              e.resetExpanded(), (n = !1);
            });
        }
      }),
        (e.setExpanded = (r) =>
          e.options.onExpandedChange == null
            ? void 0
            : e.options.onExpandedChange(r)),
        (e.toggleAllRowsExpanded = (r) => {
          r ?? !e.getIsAllRowsExpanded()
            ? e.setExpanded(!0)
            : e.setExpanded({});
        }),
        (e.resetExpanded = (r) => {
          var s, o;
          e.setExpanded(
            r
              ? {}
              : (s = (o = e.initialState) == null ? void 0 : o.expanded) != null
              ? s
              : {}
          );
        }),
        (e.getCanSomeRowsExpand = () =>
          e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand())),
        (e.getToggleAllRowsExpandedHandler = () => (r) => {
          r.persist == null || r.persist(), e.toggleAllRowsExpanded();
        }),
        (e.getIsSomeRowsExpanded = () => {
          const r = e.getState().expanded;
          return r === !0 || Object.values(r).some(Boolean);
        }),
        (e.getIsAllRowsExpanded = () => {
          const r = e.getState().expanded;
          return typeof r == "boolean"
            ? r === !0
            : !(
                !Object.keys(r).length ||
                e.getRowModel().flatRows.some((s) => !s.getIsExpanded())
              );
        }),
        (e.getExpandedDepth = () => {
          let r = 0;
          return (
            (e.getState().expanded === !0
              ? Object.keys(e.getRowModel().rowsById)
              : Object.keys(e.getState().expanded)
            ).forEach((o) => {
              const a = o.split(".");
              r = Math.max(r, a.length);
            }),
            r
          );
        }),
        (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
        (e.getExpandedRowModel = () => (
          !e._getExpandedRowModel &&
            e.options.getExpandedRowModel &&
            (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
          e.options.manualExpanding || !e._getExpandedRowModel
            ? e.getPreExpandedRowModel()
            : e._getExpandedRowModel()
        ));
    },
    createRow: (e, t) => {
      (e.toggleExpanded = (n) => {
        t.setExpanded((r) => {
          var s;
          const o = r === !0 ? !0 : !!(r != null && r[e.id]);
          let a = {};
          if (
            (r === !0
              ? Object.keys(t.getRowModel().rowsById).forEach((i) => {
                  a[i] = !0;
                })
              : (a = r),
            (n = (s = n) != null ? s : !o),
            !o && n)
          )
            return { ...a, [e.id]: !0 };
          if (o && !n) {
            const { [e.id]: i, ...c } = a;
            return c;
          }
          return r;
        });
      }),
        (e.getIsExpanded = () => {
          var n;
          const r = t.getState().expanded;
          return !!((n =
            t.options.getIsRowExpanded == null
              ? void 0
              : t.options.getIsRowExpanded(e)) != null
            ? n
            : r === !0 || (r != null && r[e.id]));
        }),
        (e.getCanExpand = () => {
          var n, r, s;
          return (n =
            t.options.getRowCanExpand == null
              ? void 0
              : t.options.getRowCanExpand(e)) != null
            ? n
            : ((r = t.options.enableExpanding) != null ? r : !0) &&
                !!((s = e.subRows) != null && s.length);
        }),
        (e.getIsAllParentsExpanded = () => {
          let n = !0,
            r = e;
          for (; n && r.parentId; )
            (r = t.getRow(r.parentId, !0)), (n = r.getIsExpanded());
          return n;
        }),
        (e.getToggleExpandedHandler = () => {
          const n = e.getCanExpand();
          return () => {
            n && e.toggleExpanded();
          };
        });
    },
  },
  lo = 0,
  co = 10,
  Os = () => ({ pageIndex: lo, pageSize: co }),
  uh = {
    getInitialState: (e) => ({
      ...e,
      pagination: { ...Os(), ...(e == null ? void 0 : e.pagination) },
    }),
    getDefaultOptions: (e) => ({ onPaginationChange: Ke("pagination", e) }),
    createTable: (e) => {
      let t = !1,
        n = !1;
      (e._autoResetPageIndex = () => {
        var r, s;
        if (!t) {
          e._queue(() => {
            t = !0;
          });
          return;
        }
        if (
          (r =
            (s = e.options.autoResetAll) != null
              ? s
              : e.options.autoResetPageIndex) != null
            ? r
            : !e.options.manualPagination
        ) {
          if (n) return;
          (n = !0),
            e._queue(() => {
              e.resetPageIndex(), (n = !1);
            });
        }
      }),
        (e.setPagination = (r) => {
          const s = (o) => Dt(r, o);
          return e.options.onPaginationChange == null
            ? void 0
            : e.options.onPaginationChange(s);
        }),
        (e.resetPagination = (r) => {
          var s;
          e.setPagination(
            r ? Os() : (s = e.initialState.pagination) != null ? s : Os()
          );
        }),
        (e.setPageIndex = (r) => {
          e.setPagination((s) => {
            let o = Dt(r, s.pageIndex);
            const a =
              typeof e.options.pageCount > "u" || e.options.pageCount === -1
                ? Number.MAX_SAFE_INTEGER
                : e.options.pageCount - 1;
            return (o = Math.max(0, Math.min(o, a))), { ...s, pageIndex: o };
          });
        }),
        (e.resetPageIndex = (r) => {
          var s, o;
          e.setPageIndex(
            r
              ? lo
              : (s =
                  (o = e.initialState) == null || (o = o.pagination) == null
                    ? void 0
                    : o.pageIndex) != null
              ? s
              : lo
          );
        }),
        (e.resetPageSize = (r) => {
          var s, o;
          e.setPageSize(
            r
              ? co
              : (s =
                  (o = e.initialState) == null || (o = o.pagination) == null
                    ? void 0
                    : o.pageSize) != null
              ? s
              : co
          );
        }),
        (e.setPageSize = (r) => {
          e.setPagination((s) => {
            const o = Math.max(1, Dt(r, s.pageSize)),
              a = s.pageSize * s.pageIndex,
              i = Math.floor(a / o);
            return { ...s, pageIndex: i, pageSize: o };
          });
        }),
        (e.setPageCount = (r) =>
          e.setPagination((s) => {
            var o;
            let a = Dt(r, (o = e.options.pageCount) != null ? o : -1);
            return (
              typeof a == "number" && (a = Math.max(-1, a)),
              { ...s, pageCount: a }
            );
          })),
        (e.getPageOptions = B(
          () => [e.getPageCount()],
          (r) => {
            let s = [];
            return (
              r && r > 0 && (s = [...new Array(r)].fill(null).map((o, a) => a)),
              s
            );
          },
          Z(e.options, "debugTable")
        )),
        (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
        (e.getCanNextPage = () => {
          const { pageIndex: r } = e.getState().pagination,
            s = e.getPageCount();
          return s === -1 ? !0 : s === 0 ? !1 : r < s - 1;
        }),
        (e.previousPage = () => e.setPageIndex((r) => r - 1)),
        (e.nextPage = () => e.setPageIndex((r) => r + 1)),
        (e.firstPage = () => e.setPageIndex(0)),
        (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
        (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
        (e.getPaginationRowModel = () => (
          !e._getPaginationRowModel &&
            e.options.getPaginationRowModel &&
            (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
          e.options.manualPagination || !e._getPaginationRowModel
            ? e.getPrePaginationRowModel()
            : e._getPaginationRowModel()
        )),
        (e.getPageCount = () => {
          var r;
          return (r = e.options.pageCount) != null
            ? r
            : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
        }),
        (e.getRowCount = () => {
          var r;
          return (r = e.options.rowCount) != null
            ? r
            : e.getPrePaginationRowModel().rows.length;
        });
    },
  },
  Ls = () => ({ top: [], bottom: [] }),
  dh = {
    getInitialState: (e) => ({ rowPinning: Ls(), ...e }),
    getDefaultOptions: (e) => ({ onRowPinningChange: Ke("rowPinning", e) }),
    createRow: (e, t) => {
      (e.pin = (n, r, s) => {
        const o = r
            ? e.getLeafRows().map((c) => {
                let { id: d } = c;
                return d;
              })
            : [],
          a = s
            ? e.getParentRows().map((c) => {
                let { id: d } = c;
                return d;
              })
            : [],
          i = new Set([...a, e.id, ...o]);
        t.setRowPinning((c) => {
          var d, f;
          if (n === "bottom") {
            var g, m;
            return {
              top: ((g = c == null ? void 0 : c.top) != null ? g : []).filter(
                (x) => !(i != null && i.has(x))
              ),
              bottom: [
                ...((m = c == null ? void 0 : c.bottom) != null
                  ? m
                  : []
                ).filter((x) => !(i != null && i.has(x))),
                ...Array.from(i),
              ],
            };
          }
          if (n === "top") {
            var p, y;
            return {
              top: [
                ...((p = c == null ? void 0 : c.top) != null ? p : []).filter(
                  (x) => !(i != null && i.has(x))
                ),
                ...Array.from(i),
              ],
              bottom: ((y = c == null ? void 0 : c.bottom) != null
                ? y
                : []
              ).filter((x) => !(i != null && i.has(x))),
            };
          }
          return {
            top: ((d = c == null ? void 0 : c.top) != null ? d : []).filter(
              (x) => !(i != null && i.has(x))
            ),
            bottom: ((f = c == null ? void 0 : c.bottom) != null
              ? f
              : []
            ).filter((x) => !(i != null && i.has(x))),
          };
        });
      }),
        (e.getCanPin = () => {
          var n;
          const { enableRowPinning: r, enablePinning: s } = t.options;
          return typeof r == "function" ? r(e) : (n = r ?? s) != null ? n : !0;
        }),
        (e.getIsPinned = () => {
          const n = [e.id],
            { top: r, bottom: s } = t.getState().rowPinning,
            o = n.some((i) => (r == null ? void 0 : r.includes(i))),
            a = n.some((i) => (s == null ? void 0 : s.includes(i)));
          return o ? "top" : a ? "bottom" : !1;
        }),
        (e.getPinnedIndex = () => {
          var n, r;
          const s = e.getIsPinned();
          if (!s) return -1;
          const o =
            (n = s === "top" ? t.getTopRows() : t.getBottomRows()) == null
              ? void 0
              : n.map((a) => {
                  let { id: i } = a;
                  return i;
                });
          return (r = o == null ? void 0 : o.indexOf(e.id)) != null ? r : -1;
        });
    },
    createTable: (e) => {
      (e.setRowPinning = (t) =>
        e.options.onRowPinningChange == null
          ? void 0
          : e.options.onRowPinningChange(t)),
        (e.resetRowPinning = (t) => {
          var n, r;
          return e.setRowPinning(
            t
              ? Ls()
              : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) !=
                null
              ? n
              : Ls()
          );
        }),
        (e.getIsSomeRowsPinned = (t) => {
          var n;
          const r = e.getState().rowPinning;
          if (!t) {
            var s, o;
            return !!(
              ((s = r.top) != null && s.length) ||
              ((o = r.bottom) != null && o.length)
            );
          }
          return !!((n = r[t]) != null && n.length);
        }),
        (e._getPinnedRows = (t, n, r) => {
          var s;
          return (
            (s = e.options.keepPinnedRows) == null || s
              ? (n ?? []).map((a) => {
                  const i = e.getRow(a, !0);
                  return i.getIsAllParentsExpanded() ? i : null;
                })
              : (n ?? []).map((a) => t.find((i) => i.id === a))
          )
            .filter(Boolean)
            .map((a) => ({ ...a, position: r }));
        }),
        (e.getTopRows = B(
          () => [e.getRowModel().rows, e.getState().rowPinning.top],
          (t, n) => e._getPinnedRows(t, n, "top"),
          Z(e.options, "debugRows")
        )),
        (e.getBottomRows = B(
          () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
          (t, n) => e._getPinnedRows(t, n, "bottom"),
          Z(e.options, "debugRows")
        )),
        (e.getCenterRows = B(
          () => [
            e.getRowModel().rows,
            e.getState().rowPinning.top,
            e.getState().rowPinning.bottom,
          ],
          (t, n, r) => {
            const s = new Set([...(n ?? []), ...(r ?? [])]);
            return t.filter((o) => !s.has(o.id));
          },
          Z(e.options, "debugRows")
        ));
    },
  },
  fh = {
    getInitialState: (e) => ({ rowSelection: {}, ...e }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: Ke("rowSelection", e),
      enableRowSelection: !0,
      enableMultiRowSelection: !0,
      enableSubRowSelection: !0,
    }),
    createTable: (e) => {
      (e.setRowSelection = (t) =>
        e.options.onRowSelectionChange == null
          ? void 0
          : e.options.onRowSelectionChange(t)),
        (e.resetRowSelection = (t) => {
          var n;
          return e.setRowSelection(
            t ? {} : (n = e.initialState.rowSelection) != null ? n : {}
          );
        }),
        (e.toggleAllRowsSelected = (t) => {
          e.setRowSelection((n) => {
            t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
            const r = { ...n },
              s = e.getPreGroupedRowModel().flatRows;
            return (
              t
                ? s.forEach((o) => {
                    o.getCanSelect() && (r[o.id] = !0);
                  })
                : s.forEach((o) => {
                    delete r[o.id];
                  }),
              r
            );
          });
        }),
        (e.toggleAllPageRowsSelected = (t) =>
          e.setRowSelection((n) => {
            const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(),
              s = { ...n };
            return (
              e.getRowModel().rows.forEach((o) => {
                uo(s, o.id, r, !0, e);
              }),
              s
            );
          })),
        (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
        (e.getSelectedRowModel = B(
          () => [e.getState().rowSelection, e.getCoreRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Vs(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          Z(e.options, "debugTable")
        )),
        (e.getFilteredSelectedRowModel = B(
          () => [e.getState().rowSelection, e.getFilteredRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Vs(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          Z(e.options, "debugTable")
        )),
        (e.getGroupedSelectedRowModel = B(
          () => [e.getState().rowSelection, e.getSortedRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Vs(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          Z(e.options, "debugTable")
        )),
        (e.getIsAllRowsSelected = () => {
          const t = e.getFilteredRowModel().flatRows,
            { rowSelection: n } = e.getState();
          let r = !!(t.length && Object.keys(n).length);
          return (
            r && t.some((s) => s.getCanSelect() && !n[s.id]) && (r = !1), r
          );
        }),
        (e.getIsAllPageRowsSelected = () => {
          const t = e
              .getPaginationRowModel()
              .flatRows.filter((s) => s.getCanSelect()),
            { rowSelection: n } = e.getState();
          let r = !!t.length;
          return r && t.some((s) => !n[s.id]) && (r = !1), r;
        }),
        (e.getIsSomeRowsSelected = () => {
          var t;
          const n = Object.keys(
            (t = e.getState().rowSelection) != null ? t : {}
          ).length;
          return n > 0 && n < e.getFilteredRowModel().flatRows.length;
        }),
        (e.getIsSomePageRowsSelected = () => {
          const t = e.getPaginationRowModel().flatRows;
          return e.getIsAllPageRowsSelected()
            ? !1
            : t
                .filter((n) => n.getCanSelect())
                .some((n) => n.getIsSelected() || n.getIsSomeSelected());
        }),
        (e.getToggleAllRowsSelectedHandler = () => (t) => {
          e.toggleAllRowsSelected(t.target.checked);
        }),
        (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
          e.toggleAllPageRowsSelected(t.target.checked);
        });
    },
    createRow: (e, t) => {
      (e.toggleSelected = (n, r) => {
        const s = e.getIsSelected();
        t.setRowSelection((o) => {
          var a;
          if (((n = typeof n < "u" ? n : !s), e.getCanSelect() && s === n))
            return o;
          const i = { ...o };
          return (
            uo(
              i,
              e.id,
              n,
              (a = r == null ? void 0 : r.selectChildren) != null ? a : !0,
              t
            ),
            i
          );
        });
      }),
        (e.getIsSelected = () => {
          const { rowSelection: n } = t.getState();
          return Xo(e, n);
        }),
        (e.getIsSomeSelected = () => {
          const { rowSelection: n } = t.getState();
          return fo(e, n) === "some";
        }),
        (e.getIsAllSubRowsSelected = () => {
          const { rowSelection: n } = t.getState();
          return fo(e, n) === "all";
        }),
        (e.getCanSelect = () => {
          var n;
          return typeof t.options.enableRowSelection == "function"
            ? t.options.enableRowSelection(e)
            : (n = t.options.enableRowSelection) != null
            ? n
            : !0;
        }),
        (e.getCanSelectSubRows = () => {
          var n;
          return typeof t.options.enableSubRowSelection == "function"
            ? t.options.enableSubRowSelection(e)
            : (n = t.options.enableSubRowSelection) != null
            ? n
            : !0;
        }),
        (e.getCanMultiSelect = () => {
          var n;
          return typeof t.options.enableMultiRowSelection == "function"
            ? t.options.enableMultiRowSelection(e)
            : (n = t.options.enableMultiRowSelection) != null
            ? n
            : !0;
        }),
        (e.getToggleSelectedHandler = () => {
          const n = e.getCanSelect();
          return (r) => {
            var s;
            n && e.toggleSelected((s = r.target) == null ? void 0 : s.checked);
          };
        });
    },
  },
  uo = (e, t, n, r, s) => {
    var o;
    const a = s.getRow(t, !0);
    n
      ? (a.getCanMultiSelect() || Object.keys(e).forEach((i) => delete e[i]),
        a.getCanSelect() && (e[t] = !0))
      : delete e[t],
      r &&
        (o = a.subRows) != null &&
        o.length &&
        a.getCanSelectSubRows() &&
        a.subRows.forEach((i) => uo(e, i.id, n, r, s));
  };
function Vs(e, t) {
  const n = e.getState().rowSelection,
    r = [],
    s = {},
    o = function (a, i) {
      return a
        .map((c) => {
          var d;
          const f = Xo(c, n);
          if (
            (f && (r.push(c), (s[c.id] = c)),
            (d = c.subRows) != null &&
              d.length &&
              (c = { ...c, subRows: o(c.subRows) }),
            f)
          )
            return c;
        })
        .filter(Boolean);
    };
  return { rows: o(t.rows), flatRows: r, rowsById: s };
}
function Xo(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function fo(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let s = !0,
    o = !1;
  return (
    e.subRows.forEach((a) => {
      if (
        !(o && !s) &&
        (a.getCanSelect() && (Xo(a, t) ? (o = !0) : (s = !1)),
        a.subRows && a.subRows.length)
      ) {
        const i = fo(a, t);
        i === "all" ? (o = !0) : (i === "some" && (o = !0), (s = !1));
      }
    }),
    s ? "all" : o ? "some" : !1
  );
}
const go = /([0-9]+)/gm,
  gh = (e, t, n) =>
    zc(Ut(e.getValue(n)).toLowerCase(), Ut(t.getValue(n)).toLowerCase()),
  ph = (e, t, n) => zc(Ut(e.getValue(n)), Ut(t.getValue(n))),
  mh = (e, t, n) =>
    Jo(Ut(e.getValue(n)).toLowerCase(), Ut(t.getValue(n)).toLowerCase()),
  hh = (e, t, n) => Jo(Ut(e.getValue(n)), Ut(t.getValue(n))),
  vh = (e, t, n) => {
    const r = e.getValue(n),
      s = t.getValue(n);
    return r > s ? 1 : r < s ? -1 : 0;
  },
  yh = (e, t, n) => Jo(e.getValue(n), t.getValue(n));
function Jo(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Ut(e) {
  return typeof e == "number"
    ? isNaN(e) || e === 1 / 0 || e === -1 / 0
      ? ""
      : String(e)
    : typeof e == "string"
    ? e
    : "";
}
function zc(e, t) {
  const n = e.split(go).filter(Boolean),
    r = t.split(go).filter(Boolean);
  for (; n.length && r.length; ) {
    const s = n.shift(),
      o = r.shift(),
      a = parseInt(s, 10),
      i = parseInt(o, 10),
      c = [a, i].sort();
    if (isNaN(c[0])) {
      if (s > o) return 1;
      if (o > s) return -1;
      continue;
    }
    if (isNaN(c[1])) return isNaN(a) ? -1 : 1;
    if (a > i) return 1;
    if (i > a) return -1;
  }
  return n.length - r.length;
}
const Fn = {
    alphanumeric: gh,
    alphanumericCaseSensitive: ph,
    text: mh,
    textCaseSensitive: hh,
    datetime: vh,
    basic: yh,
  },
  xh = {
    getInitialState: (e) => ({ sorting: [], ...e }),
    getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }),
    getDefaultOptions: (e) => ({
      onSortingChange: Ke("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey,
    }),
    createColumn: (e, t) => {
      (e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let r = !1;
        for (const s of n) {
          const o = s == null ? void 0 : s.getValue(e.id);
          if (Object.prototype.toString.call(o) === "[object Date]")
            return Fn.datetime;
          if (typeof o == "string" && ((r = !0), o.split(go).length > 1))
            return Fn.alphanumeric;
        }
        return r ? Fn.text : Fn.basic;
      }),
        (e.getAutoSortDir = () => {
          const n = t.getFilteredRowModel().flatRows[0];
          return typeof (n == null ? void 0 : n.getValue(e.id)) == "string"
            ? "asc"
            : "desc";
        }),
        (e.getSortingFn = () => {
          var n, r;
          if (!e) throw new Error();
          return ws(e.columnDef.sortingFn)
            ? e.columnDef.sortingFn
            : e.columnDef.sortingFn === "auto"
            ? e.getAutoSortingFn()
            : (n =
                (r = t.options.sortingFns) == null
                  ? void 0
                  : r[e.columnDef.sortingFn]) != null
            ? n
            : Fn[e.columnDef.sortingFn];
        }),
        (e.toggleSorting = (n, r) => {
          const s = e.getNextSortingOrder(),
            o = typeof n < "u" && n !== null;
          t.setSorting((a) => {
            const i = a == null ? void 0 : a.find((p) => p.id === e.id),
              c = a == null ? void 0 : a.findIndex((p) => p.id === e.id);
            let d = [],
              f,
              g = o ? n : s === "desc";
            if (
              (a != null && a.length && e.getCanMultiSort() && r
                ? i
                  ? (f = "toggle")
                  : (f = "add")
                : a != null && a.length && c !== a.length - 1
                ? (f = "replace")
                : i
                ? (f = "toggle")
                : (f = "replace"),
              f === "toggle" && (o || s || (f = "remove")),
              f === "add")
            ) {
              var m;
              (d = [...a, { id: e.id, desc: g }]),
                d.splice(
                  0,
                  d.length -
                    ((m = t.options.maxMultiSortColCount) != null
                      ? m
                      : Number.MAX_SAFE_INTEGER)
                );
            } else
              f === "toggle"
                ? (d = a.map((p) => (p.id === e.id ? { ...p, desc: g } : p)))
                : f === "remove"
                ? (d = a.filter((p) => p.id !== e.id))
                : (d = [{ id: e.id, desc: g }]);
            return d;
          });
        }),
        (e.getFirstSortDir = () => {
          var n, r;
          return (
            (n =
              (r = e.columnDef.sortDescFirst) != null
                ? r
                : t.options.sortDescFirst) != null
              ? n
              : e.getAutoSortDir() === "desc"
          )
            ? "desc"
            : "asc";
        }),
        (e.getNextSortingOrder = (n) => {
          var r, s;
          const o = e.getFirstSortDir(),
            a = e.getIsSorted();
          return a
            ? a !== o &&
              ((r = t.options.enableSortingRemoval) == null || r) &&
              (!(n && (s = t.options.enableMultiRemove) != null) || s)
              ? !1
              : a === "desc"
              ? "asc"
              : "desc"
            : o;
        }),
        (e.getCanSort = () => {
          var n, r;
          return (
            ((n = e.columnDef.enableSorting) != null ? n : !0) &&
            ((r = t.options.enableSorting) != null ? r : !0) &&
            !!e.accessorFn
          );
        }),
        (e.getCanMultiSort = () => {
          var n, r;
          return (n =
            (r = e.columnDef.enableMultiSort) != null
              ? r
              : t.options.enableMultiSort) != null
            ? n
            : !!e.accessorFn;
        }),
        (e.getIsSorted = () => {
          var n;
          const r =
            (n = t.getState().sorting) == null
              ? void 0
              : n.find((s) => s.id === e.id);
          return r ? (r.desc ? "desc" : "asc") : !1;
        }),
        (e.getSortIndex = () => {
          var n, r;
          return (n =
            (r = t.getState().sorting) == null
              ? void 0
              : r.findIndex((s) => s.id === e.id)) != null
            ? n
            : -1;
        }),
        (e.clearSorting = () => {
          t.setSorting((n) =>
            n != null && n.length ? n.filter((r) => r.id !== e.id) : []
          );
        }),
        (e.getToggleSortingHandler = () => {
          const n = e.getCanSort();
          return (r) => {
            n &&
              (r.persist == null || r.persist(),
              e.toggleSorting == null ||
                e.toggleSorting(
                  void 0,
                  e.getCanMultiSort()
                    ? t.options.isMultiSortEvent == null
                      ? void 0
                      : t.options.isMultiSortEvent(r)
                    : !1
                ));
          };
        });
    },
    createTable: (e) => {
      (e.setSorting = (t) =>
        e.options.onSortingChange == null
          ? void 0
          : e.options.onSortingChange(t)),
        (e.resetSorting = (t) => {
          var n, r;
          e.setSorting(
            t
              ? []
              : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null
              ? n
              : []
          );
        }),
        (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
        (e.getSortedRowModel = () => (
          !e._getSortedRowModel &&
            e.options.getSortedRowModel &&
            (e._getSortedRowModel = e.options.getSortedRowModel(e)),
          e.options.manualSorting || !e._getSortedRowModel
            ? e.getPreSortedRowModel()
            : e._getSortedRowModel()
        ));
    },
  },
  _h = [Gm, ah, nh, rh, zm, Hm, ih, lh, xh, eh, ch, uh, dh, fh, sh];
function wh(e) {
  var t, n;
  const r = [..._h, ...((t = e._features) != null ? t : [])];
  let s = { _features: r };
  const o = s._features.reduce(
      (m, p) =>
        Object.assign(
          m,
          p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(s)
        ),
      {}
    ),
    a = (m) =>
      s.options.mergeOptions ? s.options.mergeOptions(o, m) : { ...o, ...m };
  let c = { ...{}, ...((n = e.initialState) != null ? n : {}) };
  s._features.forEach((m) => {
    var p;
    c =
      (p = m.getInitialState == null ? void 0 : m.getInitialState(c)) != null
        ? p
        : c;
  });
  const d = [];
  let f = !1;
  const g = {
    _features: r,
    options: { ...o, ...e },
    initialState: c,
    _queue: (m) => {
      d.push(m),
        f ||
          ((f = !0),
          Promise.resolve()
            .then(() => {
              for (; d.length; ) d.shift()();
              f = !1;
            })
            .catch((p) =>
              setTimeout(() => {
                throw p;
              })
            ));
    },
    reset: () => {
      s.setState(s.initialState);
    },
    setOptions: (m) => {
      const p = Dt(m, s.options);
      s.options = a(p);
    },
    getState: () => s.options.state,
    setState: (m) => {
      s.options.onStateChange == null || s.options.onStateChange(m);
    },
    _getRowId: (m, p, y) => {
      var x;
      return (x =
        s.options.getRowId == null ? void 0 : s.options.getRowId(m, p, y)) !=
        null
        ? x
        : `${y ? [y.id, p].join(".") : p}`;
    },
    getCoreRowModel: () => (
      s._getCoreRowModel || (s._getCoreRowModel = s.options.getCoreRowModel(s)),
      s._getCoreRowModel()
    ),
    getRowModel: () => s.getPaginationRowModel(),
    getRow: (m, p) => {
      let y = (p ? s.getPrePaginationRowModel() : s.getRowModel()).rowsById[m];
      if (!y && ((y = s.getCoreRowModel().rowsById[m]), !y)) throw new Error();
      return y;
    },
    _getDefaultColumnDef: B(
      () => [s.options.defaultColumn],
      (m) => {
        var p;
        return (
          (m = (p = m) != null ? p : {}),
          {
            header: (y) => {
              const x = y.header.column.columnDef;
              return x.accessorKey ? x.accessorKey : x.accessorFn ? x.id : null;
            },
            cell: (y) => {
              var x, S;
              return (x =
                (S = y.renderValue()) == null || S.toString == null
                  ? void 0
                  : S.toString()) != null
                ? x
                : null;
            },
            ...s._features.reduce(
              (y, x) =>
                Object.assign(
                  y,
                  x.getDefaultColumnDef == null
                    ? void 0
                    : x.getDefaultColumnDef()
                ),
              {}
            ),
            ...m,
          }
        );
      },
      Z(e, "debugColumns")
    ),
    _getColumnDefs: () => s.options.columns,
    getAllColumns: B(
      () => [s._getColumnDefs()],
      (m) => {
        const p = function (y, x, S) {
          return (
            S === void 0 && (S = 0),
            y.map((C) => {
              const R = Um(s, C, S, x),
                P = C;
              return (R.columns = P.columns ? p(P.columns, R, S + 1) : []), R;
            })
          );
        };
        return p(m);
      },
      Z(e, "debugColumns")
    ),
    getAllFlatColumns: B(
      () => [s.getAllColumns()],
      (m) => m.flatMap((p) => p.getFlatColumns()),
      Z(e, "debugColumns")
    ),
    _getAllFlatColumnsById: B(
      () => [s.getAllFlatColumns()],
      (m) => m.reduce((p, y) => ((p[y.id] = y), p), {}),
      Z(e, "debugColumns")
    ),
    getAllLeafColumns: B(
      () => [s.getAllColumns(), s._getOrderColumnsFn()],
      (m, p) => {
        let y = m.flatMap((x) => x.getLeafColumns());
        return p(y);
      },
      Z(e, "debugColumns")
    ),
    getColumn: (m) => s._getAllFlatColumnsById()[m],
  };
  Object.assign(s, g);
  for (let m = 0; m < s._features.length; m++) {
    const p = s._features[m];
    p == null || p.createTable == null || p.createTable(s);
  }
  return s;
}
function Sh() {
  return (e) =>
    B(
      () => [e.options.data],
      (t) => {
        const n = { rows: [], flatRows: [], rowsById: {} },
          r = function (s, o, a) {
            o === void 0 && (o = 0);
            const i = [];
            for (let d = 0; d < s.length; d++) {
              const f = Ko(
                e,
                e._getRowId(s[d], d, a),
                s[d],
                d,
                o,
                void 0,
                a == null ? void 0 : a.id
              );
              if (
                (n.flatRows.push(f),
                (n.rowsById[f.id] = f),
                i.push(f),
                e.options.getSubRows)
              ) {
                var c;
                (f.originalSubRows = e.options.getSubRows(s[d], d)),
                  (c = f.originalSubRows) != null &&
                    c.length &&
                    (f.subRows = r(f.originalSubRows, o + 1, f));
              }
            }
            return i;
          };
        return (n.rows = r(t)), n;
      },
      Z(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex())
    );
}
function Ch(e) {
  const t = [],
    n = (r) => {
      var s;
      t.push(r),
        (s = r.subRows) != null &&
          s.length &&
          r.getIsExpanded() &&
          r.subRows.forEach(n);
    };
  return (
    e.rows.forEach(n), { rows: t, flatRows: e.flatRows, rowsById: e.rowsById }
  );
}
function Hc(e, t, n) {
  return n.options.filterFromLeafRows ? bh(e, t, n) : Rh(e, t, n);
}
function bh(e, t, n) {
  var r;
  const s = [],
    o = {},
    a = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100,
    i = function (c, d) {
      d === void 0 && (d = 0);
      const f = [];
      for (let m = 0; m < c.length; m++) {
        var g;
        let p = c[m];
        const y = Ko(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
        if (
          ((y.columnFilters = p.columnFilters),
          (g = p.subRows) != null && g.length && d < a)
        ) {
          if (
            ((y.subRows = i(p.subRows, d + 1)),
            (p = y),
            t(p) && !y.subRows.length)
          ) {
            f.push(p), (o[p.id] = p), s.push(p);
            continue;
          }
          if (t(p) || y.subRows.length) {
            f.push(p), (o[p.id] = p), s.push(p);
            continue;
          }
        } else (p = y), t(p) && (f.push(p), (o[p.id] = p), s.push(p));
      }
      return f;
    };
  return { rows: i(e), flatRows: s, rowsById: o };
}
function Rh(e, t, n) {
  var r;
  const s = [],
    o = {},
    a = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100,
    i = function (c, d) {
      d === void 0 && (d = 0);
      const f = [];
      for (let m = 0; m < c.length; m++) {
        let p = c[m];
        if (t(p)) {
          var g;
          if ((g = p.subRows) != null && g.length && d < a) {
            const x = Ko(
              n,
              p.id,
              p.original,
              p.index,
              p.depth,
              void 0,
              p.parentId
            );
            (x.subRows = i(p.subRows, d + 1)), (p = x);
          }
          f.push(p), s.push(p), (o[p.id] = p);
        }
      }
      return f;
    };
  return { rows: i(e), flatRows: s, rowsById: o };
}
function Eh() {
  return (e, t) =>
    B(
      () => [
        e.getPreFilteredRowModel(),
        e.getState().columnFilters,
        e.getState().globalFilter,
        e.getFilteredRowModel(),
      ],
      (n, r, s) => {
        if (!n.rows.length || (!(r != null && r.length) && !s)) return n;
        const o = [
            ...r.map((i) => i.id).filter((i) => i !== t),
            s ? "__global__" : void 0,
          ].filter(Boolean),
          a = (i) => {
            for (let c = 0; c < o.length; c++)
              if (i.columnFilters[o[c]] === !1) return !1;
            return !0;
          };
        return Hc(n.rows, a, e);
      },
      Z(e.options, "debugTable")
    );
}
function Ah() {
  return (e, t) =>
    B(
      () => {
        var n;
        return [(n = e.getColumn(t)) == null ? void 0 : n.getFacetedRowModel()];
      },
      (n) => {
        if (!n) return new Map();
        let r = new Map();
        for (let o = 0; o < n.flatRows.length; o++) {
          const a = n.flatRows[o].getUniqueValues(t);
          for (let i = 0; i < a.length; i++) {
            const c = a[i];
            if (r.has(c)) {
              var s;
              r.set(c, ((s = r.get(c)) != null ? s : 0) + 1);
            } else r.set(c, 1);
          }
        }
        return r;
      },
      Z(e.options, "debugTable")
    );
}
function Th() {
  return (e) =>
    B(
      () => [
        e.getPreFilteredRowModel(),
        e.getState().columnFilters,
        e.getState().globalFilter,
      ],
      (t, n, r) => {
        if (!t.rows.length || (!(n != null && n.length) && !r)) {
          for (let m = 0; m < t.flatRows.length; m++)
            (t.flatRows[m].columnFilters = {}),
              (t.flatRows[m].columnFiltersMeta = {});
          return t;
        }
        const s = [],
          o = [];
        (n ?? []).forEach((m) => {
          var p;
          const y = e.getColumn(m.id);
          if (!y) return;
          const x = y.getFilterFn();
          x &&
            s.push({
              id: m.id,
              filterFn: x,
              resolvedValue:
                (p =
                  x.resolveFilterValue == null
                    ? void 0
                    : x.resolveFilterValue(m.value)) != null
                  ? p
                  : m.value,
            });
        });
        const a = (n ?? []).map((m) => m.id),
          i = e.getGlobalFilterFn(),
          c = e.getAllLeafColumns().filter((m) => m.getCanGlobalFilter());
        r &&
          i &&
          c.length &&
          (a.push("__global__"),
          c.forEach((m) => {
            var p;
            o.push({
              id: m.id,
              filterFn: i,
              resolvedValue:
                (p =
                  i.resolveFilterValue == null
                    ? void 0
                    : i.resolveFilterValue(r)) != null
                  ? p
                  : r,
            });
          }));
        let d, f;
        for (let m = 0; m < t.flatRows.length; m++) {
          const p = t.flatRows[m];
          if (((p.columnFilters = {}), s.length))
            for (let y = 0; y < s.length; y++) {
              d = s[y];
              const x = d.id;
              p.columnFilters[x] = d.filterFn(p, x, d.resolvedValue, (S) => {
                p.columnFiltersMeta[x] = S;
              });
            }
          if (o.length) {
            for (let y = 0; y < o.length; y++) {
              f = o[y];
              const x = f.id;
              if (
                f.filterFn(p, x, f.resolvedValue, (S) => {
                  p.columnFiltersMeta[x] = S;
                })
              ) {
                p.columnFilters.__global__ = !0;
                break;
              }
            }
            p.columnFilters.__global__ !== !0 &&
              (p.columnFilters.__global__ = !1);
          }
        }
        const g = (m) => {
          for (let p = 0; p < a.length; p++)
            if (m.columnFilters[a[p]] === !1) return !1;
          return !0;
        };
        return Hc(t.rows, g, e);
      },
      Z(e.options, "debugTable", "getFilteredRowModel", () =>
        e._autoResetPageIndex()
      )
    );
}
function Nh(e) {
  return (t) =>
    B(
      () => [
        t.getState().pagination,
        t.getPrePaginationRowModel(),
        t.options.paginateExpandedRows ? void 0 : t.getState().expanded,
      ],
      (n, r) => {
        if (!r.rows.length) return r;
        const { pageSize: s, pageIndex: o } = n;
        let { rows: a, flatRows: i, rowsById: c } = r;
        const d = s * o,
          f = d + s;
        a = a.slice(d, f);
        let g;
        t.options.paginateExpandedRows
          ? (g = { rows: a, flatRows: i, rowsById: c })
          : (g = Ch({ rows: a, flatRows: i, rowsById: c })),
          (g.flatRows = []);
        const m = (p) => {
          g.flatRows.push(p), p.subRows.length && p.subRows.forEach(m);
        };
        return g.rows.forEach(m), g;
      },
      Z(t.options, "debugTable")
    );
}
function Ih() {
  return (e) =>
    B(
      () => [e.getState().sorting, e.getPreSortedRowModel()],
      (t, n) => {
        if (!n.rows.length || !(t != null && t.length)) return n;
        const r = e.getState().sorting,
          s = [],
          o = r.filter((c) => {
            var d;
            return (d = e.getColumn(c.id)) == null ? void 0 : d.getCanSort();
          }),
          a = {};
        o.forEach((c) => {
          const d = e.getColumn(c.id);
          d &&
            (a[c.id] = {
              sortUndefined: d.columnDef.sortUndefined,
              invertSorting: d.columnDef.invertSorting,
              sortingFn: d.getSortingFn(),
            });
        });
        const i = (c) => {
          const d = c.map((f) => ({ ...f }));
          return (
            d.sort((f, g) => {
              for (let p = 0; p < o.length; p += 1) {
                var m;
                const y = o[p],
                  x = a[y.id],
                  S = x.sortUndefined,
                  C = (m = y == null ? void 0 : y.desc) != null ? m : !1;
                let R = 0;
                if (S) {
                  const P = f.getValue(y.id),
                    N = g.getValue(y.id),
                    I = P === void 0,
                    K = N === void 0;
                  if (I || K) {
                    if (S === "first") return I ? -1 : 1;
                    if (S === "last") return I ? 1 : -1;
                    R = I && K ? 0 : I ? S : -S;
                  }
                }
                if ((R === 0 && (R = x.sortingFn(f, g, y.id)), R !== 0))
                  return C && (R *= -1), x.invertSorting && (R *= -1), R;
              }
              return f.index - g.index;
            }),
            d.forEach((f) => {
              var g;
              s.push(f),
                (g = f.subRows) != null &&
                  g.length &&
                  (f.subRows = i(f.subRows));
            }),
            d
          );
        };
        return { rows: i(n.rows), flatRows: s, rowsById: n.rowsById };
      },
      Z(e.options, "debugTable", "getSortedRowModel", () =>
        e._autoResetPageIndex()
      )
    );
}
/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function za(e, t) {
  return e ? (kh(e) ? u.createElement(e, t) : e) : null;
}
function kh(e) {
  return Mh(e) || typeof e == "function" || Ph(e);
}
function Mh(e) {
  return (
    typeof e == "function" &&
    (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })()
  );
}
function Ph(e) {
  return (
    typeof e == "object" &&
    typeof e.$$typeof == "symbol" &&
    ["react.memo", "react.forward_ref"].includes(e.$$typeof.description)
  );
}
function Dh(e) {
  const t = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ...e,
    },
    [n] = u.useState(() => ({ current: wh(t) })),
    [r, s] = u.useState(() => n.current.initialState);
  return (
    n.current.setOptions((o) => ({
      ...o,
      ...e,
      state: { ...r, ...e.state },
      onStateChange: (a) => {
        s(a), e.onStateChange == null || e.onStateChange(a);
      },
    })),
    n.current
  );
}
const Qo = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("div", {
    className: "relative w-full overflow-auto",
    children: l.jsx("table", {
      ref: n,
      className: W("w-full caption-bottom text-sm", e),
      ...t,
    }),
  })
);
Qo.displayName = "Table";
const ea = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("thead", { ref: n, className: W("[&_tr]:border-b", e), ...t })
);
ea.displayName = "TableHeader";
const ta = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("tbody", {
    ref: n,
    className: W("[&_tr:last-child]:border-0", e),
    ...t,
  })
);
ta.displayName = "TableBody";
const Fh = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("tfoot", {
    ref: n,
    className: W("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
    ...t,
  })
);
Fh.displayName = "TableFooter";
const Cn = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("tr", {
    ref: n,
    className: W(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t,
  })
);
Cn.displayName = "TableRow";
const qt = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("th", {
    ref: n,
    className: W(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t,
  })
);
qt.displayName = "TableHead";
const Pt = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("td", {
    ref: n,
    className: W(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t,
  })
);
Pt.displayName = "TableCell";
const $h = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("caption", {
    ref: n,
    className: W("mt-4 text-sm text-muted-foreground", e),
    ...t,
  })
);
$h.displayName = "TableCaption";
function jh({ table: e }) {
  const t = async () => {
    try {
      const n = e.getFilteredSelectedRowModel().rows;
      if (n.length === 0) return;
      const r = n.map((s) => s.getValue("id"));
      await chrome.runtime.sendMessage({ type: ef, payload: r });
    } catch (n) {
      console.error("Failed to delete tasks:", n);
    }
  };
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(ve, {
        variant: "destructive",
        className: "ml-auto hidden h-8 lg:flex mr-3",
        disabled: e.getFilteredSelectedRowModel().rows.length === 0,
        onClick: t,
        children: "Delete",
      }),
      l.jsxs(_s, {
        children: [
          l.jsx(Bo, {
            asChild: !0,
            children: l.jsxs(ve, {
              variant: "outline",
              size: "sm",
              className: "ml-auto hidden h-8 lg:flex",
              children: [l.jsx(hd, { className: "mr-2 h-4 w-4" }), "View"],
            }),
          }),
          l.jsxs(vr, {
            align: "end",
            className: "w-[150px]",
            children: [
              l.jsx(Wo, { children: "Toggle columns" }),
              l.jsx(yr, {}),
              e
                .getAllColumns()
                .filter((n) => typeof n.accessorFn < "u" && n.getCanHide())
                .map((n) =>
                  l.jsx(
                    Nc,
                    {
                      className: "capitalize",
                      checked: n.getIsVisible(),
                      onCheckedChange: (r) => n.toggleVisibility(!!r),
                      children: n.id,
                    },
                    n.id
                  )
                ),
            ],
          }),
        ],
      }),
    ],
  });
}
var Ha = 1,
  Oh = 0.9,
  Lh = 0.8,
  Vh = 0.17,
  Us = 0.1,
  Gs = 0.999,
  Uh = 0.9999,
  Gh = 0.99,
  zh = /[\\\/_+.#"@\[\(\{&]/,
  Hh = /[\\\/_+.#"@\[\(\{&]/g,
  Bh = /[\s-]/,
  Bc = /[\s-]/g;
function po(e, t, n, r, s, o, a) {
  if (o === t.length) return s === e.length ? Ha : Gh;
  var i = `${s},${o}`;
  if (a[i] !== void 0) return a[i];
  for (var c = r.charAt(o), d = n.indexOf(c, s), f = 0, g, m, p, y; d >= 0; )
    (g = po(e, t, n, r, d + 1, o + 1, a)),
      g > f &&
        (d === s
          ? (g *= Ha)
          : zh.test(e.charAt(d - 1))
          ? ((g *= Lh),
            (p = e.slice(s, d - 1).match(Hh)),
            p && s > 0 && (g *= Math.pow(Gs, p.length)))
          : Bh.test(e.charAt(d - 1))
          ? ((g *= Oh),
            (y = e.slice(s, d - 1).match(Bc)),
            y && s > 0 && (g *= Math.pow(Gs, y.length)))
          : ((g *= Vh), s > 0 && (g *= Math.pow(Gs, d - s))),
        e.charAt(d) !== t.charAt(o) && (g *= Uh)),
      ((g < Us && n.charAt(d - 1) === r.charAt(o + 1)) ||
        (r.charAt(o + 1) === r.charAt(o) && n.charAt(d - 1) !== r.charAt(o))) &&
        ((m = po(e, t, n, r, d + 1, o + 2, a)), m * Us > g && (g = m * Us)),
      g > f && (f = g),
      (d = n.indexOf(c, d + 1));
  return (a[i] = f), f;
}
function Ba(e) {
  return e.toLowerCase().replace(Bc, " ");
}
function Zh(e, t, n) {
  return (
    (e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e),
    po(e, t, Ba(e), Ba(t), 0, 0, {})
  );
}
function Ue() {
  return (
    (Ue = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ue.apply(null, arguments)
  );
}
function bn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function Wh(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Zc(...e) {
  return (t) => e.forEach((n) => Wh(n, t));
}
function xr(...e) {
  return u.useCallback(Zc(...e), e);
}
function qh(e, t = []) {
  let n = [];
  function r(o, a) {
    const i = u.createContext(a),
      c = n.length;
    n = [...n, a];
    function d(g) {
      const { scope: m, children: p, ...y } = g,
        x = (m == null ? void 0 : m[e][c]) || i,
        S = u.useMemo(() => y, Object.values(y));
      return u.createElement(x.Provider, { value: S }, p);
    }
    function f(g, m) {
      const p = (m == null ? void 0 : m[e][c]) || i,
        y = u.useContext(p);
      if (y) return y;
      if (a !== void 0) return a;
      throw new Error(`\`${g}\` must be used within \`${o}\``);
    }
    return (d.displayName = o + "Provider"), [d, f];
  }
  const s = () => {
    const o = n.map((a) => u.createContext(a));
    return function (i) {
      const c = (i == null ? void 0 : i[e]) || o;
      return u.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: c } }), [i, c]);
    };
  };
  return (s.scopeName = e), [r, Kh(s, ...t)];
}
function Kh(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (o) {
      const a = r.reduce((i, { useScope: c, scopeName: d }) => {
        const g = c(o)[`__scope${d}`];
        return { ...i, ...g };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
const mo =
    globalThis != null && globalThis.document ? u.useLayoutEffect : () => {},
  Yh = vd.useId || (() => {});
let Xh = 0;
function zs(e) {
  const [t, n] = u.useState(Yh());
  return (
    mo(() => {
      e || n((r) => r ?? String(Xh++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function en(e) {
  const t = u.useRef(e);
  return (
    u.useEffect(() => {
      t.current = e;
    }),
    u.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function Jh({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, s] = Qh({ defaultProp: t, onChange: n }),
    o = e !== void 0,
    a = o ? e : r,
    i = en(n),
    c = u.useCallback(
      (d) => {
        if (o) {
          const g = typeof d == "function" ? d(e) : d;
          g !== e && i(g);
        } else s(d);
      },
      [o, e, s, i]
    );
  return [a, c];
}
function Qh({ defaultProp: e, onChange: t }) {
  const n = u.useState(e),
    [r] = n,
    s = u.useRef(r),
    o = en(t);
  return (
    u.useEffect(() => {
      s.current !== r && (o(r), (s.current = r));
    }, [r, s, o]),
    n
  );
}
const na = u.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    s = u.Children.toArray(n),
    o = s.find(tv);
  if (o) {
    const a = o.props.children,
      i = s.map((c) =>
        c === o
          ? u.Children.count(a) > 1
            ? u.Children.only(null)
            : u.isValidElement(a)
            ? a.props.children
            : null
          : c
      );
    return u.createElement(
      ho,
      Ue({}, r, { ref: t }),
      u.isValidElement(a) ? u.cloneElement(a, void 0, i) : null
    );
  }
  return u.createElement(ho, Ue({}, r, { ref: t }), n);
});
na.displayName = "Slot";
const ho = u.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return u.isValidElement(n)
    ? u.cloneElement(n, { ...nv(r, n.props), ref: t ? Zc(t, n.ref) : n.ref })
    : u.Children.count(n) > 1
    ? u.Children.only(null)
    : null;
});
ho.displayName = "SlotClone";
const ev = ({ children: e }) => u.createElement(u.Fragment, null, e);
function tv(e) {
  return u.isValidElement(e) && e.type === ev;
}
function nv(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? s && o
        ? (n[r] = (...i) => {
            o(...i), s(...i);
          })
        : s && (n[r] = s)
      : r === "style"
      ? (n[r] = { ...s, ...o })
      : r === "className" && (n[r] = [s, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
const rv = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  tt = rv.reduce((e, t) => {
    const n = u.forwardRef((r, s) => {
      const { asChild: o, ...a } = r,
        i = o ? na : t;
      return (
        u.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        u.createElement(i, Ue({}, a, { ref: s }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function sv(e, t) {
  e && xi.flushSync(() => e.dispatchEvent(t));
}
function ov(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = en(e);
  u.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const vo = "dismissableLayer.update",
  av = "dismissableLayer.pointerDownOutside",
  iv = "dismissableLayer.focusOutside";
let Za;
const lv = u.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  cv = u.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: a,
        onInteractOutside: i,
        onDismiss: c,
        ...d
      } = e,
      f = u.useContext(lv),
      [g, m] = u.useState(null),
      p =
        (n = g == null ? void 0 : g.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, y] = u.useState({}),
      x = xr(t, (U) => m(U)),
      S = Array.from(f.layers),
      [C] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
      R = S.indexOf(C),
      P = g ? S.indexOf(g) : -1,
      N = f.layersWithOutsidePointerEventsDisabled.size > 0,
      I = P >= R,
      K = uv((U) => {
        const ge = U.target,
          ce = [...f.branches].some((ue) => ue.contains(ge));
        !I ||
          ce ||
          (o == null || o(U),
          i == null || i(U),
          U.defaultPrevented || c == null || c());
      }, p),
      te = dv((U) => {
        const ge = U.target;
        [...f.branches].some((ue) => ue.contains(ge)) ||
          (a == null || a(U),
          i == null || i(U),
          U.defaultPrevented || c == null || c());
      }, p);
    return (
      ov((U) => {
        P === f.layers.size - 1 &&
          (s == null || s(U),
          !U.defaultPrevented && c && (U.preventDefault(), c()));
      }, p),
      u.useEffect(() => {
        if (g)
          return (
            r &&
              (f.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Za = p.body.style.pointerEvents),
                (p.body.style.pointerEvents = "none")),
              f.layersWithOutsidePointerEventsDisabled.add(g)),
            f.layers.add(g),
            Wa(),
            () => {
              r &&
                f.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (p.body.style.pointerEvents = Za);
            }
          );
      }, [g, p, r, f]),
      u.useEffect(
        () => () => {
          g &&
            (f.layers.delete(g),
            f.layersWithOutsidePointerEventsDisabled.delete(g),
            Wa());
        },
        [g, f]
      ),
      u.useEffect(() => {
        const U = () => y({});
        return (
          document.addEventListener(vo, U),
          () => document.removeEventListener(vo, U)
        );
      }, []),
      u.createElement(
        tt.div,
        Ue({}, d, {
          ref: x,
          style: {
            pointerEvents: N ? (I ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: bn(e.onFocusCapture, te.onFocusCapture),
          onBlurCapture: bn(e.onBlurCapture, te.onBlurCapture),
          onPointerDownCapture: bn(
            e.onPointerDownCapture,
            K.onPointerDownCapture
          ),
        })
      )
    );
  });
function uv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = en(e),
    r = u.useRef(!1),
    s = u.useRef(() => {});
  return (
    u.useEffect(() => {
      const o = (i) => {
          if (i.target && !r.current) {
            let d = function () {
              Wc(av, n, c, { discrete: !0 });
            };
            const c = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = d),
                t.addEventListener("click", s.current, { once: !0 }))
              : d();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        window.clearTimeout(a),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", s.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function dv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = en(e),
    r = u.useRef(!1);
  return (
    u.useEffect(() => {
      const s = (o) => {
        o.target &&
          !r.current &&
          Wc(iv, n, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Wa() {
  const e = new CustomEvent(vo);
  document.dispatchEvent(e);
}
function Wc(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }),
    r ? sv(s, o) : s.dispatchEvent(o);
}
const Hs = "focusScope.autoFocusOnMount",
  Bs = "focusScope.autoFocusOnUnmount",
  qa = { bubbles: !1, cancelable: !0 },
  fv = u.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: o,
        ...a
      } = e,
      [i, c] = u.useState(null),
      d = en(s),
      f = en(o),
      g = u.useRef(null),
      m = xr(t, (x) => c(x)),
      p = u.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    u.useEffect(() => {
      if (r) {
        let x = function (P) {
            if (p.paused || !i) return;
            const N = P.target;
            i.contains(N) ? (g.current = N) : It(g.current, { select: !0 });
          },
          S = function (P) {
            if (p.paused || !i) return;
            const N = P.relatedTarget;
            N !== null && (i.contains(N) || It(g.current, { select: !0 }));
          },
          C = function (P) {
            if (document.activeElement === document.body)
              for (const I of P) I.removedNodes.length > 0 && It(i);
          };
        document.addEventListener("focusin", x),
          document.addEventListener("focusout", S);
        const R = new MutationObserver(C);
        return (
          i && R.observe(i, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", x),
              document.removeEventListener("focusout", S),
              R.disconnect();
          }
        );
      }
    }, [r, i, p.paused]),
      u.useEffect(() => {
        if (i) {
          Ya.add(p);
          const x = document.activeElement;
          if (!i.contains(x)) {
            const C = new CustomEvent(Hs, qa);
            i.addEventListener(Hs, d),
              i.dispatchEvent(C),
              C.defaultPrevented ||
                (gv(yv(qc(i)), { select: !0 }),
                document.activeElement === x && It(i));
          }
          return () => {
            i.removeEventListener(Hs, d),
              setTimeout(() => {
                const C = new CustomEvent(Bs, qa);
                i.addEventListener(Bs, f),
                  i.dispatchEvent(C),
                  C.defaultPrevented || It(x ?? document.body, { select: !0 }),
                  i.removeEventListener(Bs, f),
                  Ya.remove(p);
              }, 0);
          };
        }
      }, [i, d, f, p]);
    const y = u.useCallback(
      (x) => {
        if ((!n && !r) || p.paused) return;
        const S = x.key === "Tab" && !x.altKey && !x.ctrlKey && !x.metaKey,
          C = document.activeElement;
        if (S && C) {
          const R = x.currentTarget,
            [P, N] = pv(R);
          P && N
            ? !x.shiftKey && C === N
              ? (x.preventDefault(), n && It(P, { select: !0 }))
              : x.shiftKey &&
                C === P &&
                (x.preventDefault(), n && It(N, { select: !0 }))
            : C === R && x.preventDefault();
        }
      },
      [n, r, p.paused]
    );
    return u.createElement(
      tt.div,
      Ue({ tabIndex: -1 }, a, { ref: m, onKeyDown: y })
    );
  });
function gv(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((It(r, { select: t }), document.activeElement !== n)) return;
}
function pv(e) {
  const t = qc(e),
    n = Ka(t, e),
    r = Ka(t.reverse(), e);
  return [n, r];
}
function qc(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ka(e, t) {
  for (const n of e) if (!mv(n, { upTo: t })) return n;
}
function mv(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function hv(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function It(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && hv(e) && t && e.select();
  }
}
const Ya = vv();
function vv() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Xa(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Xa(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function Xa(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function yv(e) {
  return e.filter((t) => t.tagName !== "A");
}
const xv = u.forwardRef((e, t) => {
  var n;
  const {
    container: r = globalThis == null ||
    (n = globalThis.document) === null ||
    n === void 0
      ? void 0
      : n.body,
    ...s
  } = e;
  return r
    ? yd.createPortal(u.createElement(tt.div, Ue({}, s, { ref: t })), r)
    : null;
});
function _v(e, t) {
  return u.useReducer((n, r) => {
    const s = t[n][r];
    return s ?? n;
  }, e);
}
const Ss = (e) => {
  const { present: t, children: n } = e,
    r = wv(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n),
    o = xr(r.ref, s.ref);
  return typeof n == "function" || r.isPresent
    ? u.cloneElement(s, { ref: o })
    : null;
};
Ss.displayName = "Presence";
function wv(e) {
  const [t, n] = u.useState(),
    r = u.useRef({}),
    s = u.useRef(e),
    o = u.useRef("none"),
    a = e ? "mounted" : "unmounted",
    [i, c] = _v(a, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    u.useEffect(() => {
      const d = kr(r.current);
      o.current = i === "mounted" ? d : "none";
    }, [i]),
    mo(() => {
      const d = r.current,
        f = s.current;
      if (f !== e) {
        const m = o.current,
          p = kr(d);
        e
          ? c("MOUNT")
          : p === "none" || (d == null ? void 0 : d.display) === "none"
          ? c("UNMOUNT")
          : c(f && m !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e);
      }
    }, [e, c]),
    mo(() => {
      if (t) {
        const d = (g) => {
            const p = kr(r.current).includes(g.animationName);
            g.target === t && p && xi.flushSync(() => c("ANIMATION_END"));
          },
          f = (g) => {
            g.target === t && (o.current = kr(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: u.useCallback((d) => {
        d && (r.current = getComputedStyle(d)), n(d);
      }, []),
    }
  );
}
function kr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Zs = 0;
function Sv() {
  u.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : Ja()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : Ja()
      ),
      Zs++,
      () => {
        Zs === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          Zs--;
      }
    );
  }, []);
}
function Ja() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var Kc = jd(),
  Ws = function () {},
  Cs = u.forwardRef(function (e, t) {
    var n = u.useRef(null),
      r = u.useState({
        onScrollCapture: Ws,
        onWheelCapture: Ws,
        onTouchMoveCapture: Ws,
      }),
      s = r[0],
      o = r[1],
      a = e.forwardProps,
      i = e.children,
      c = e.className,
      d = e.removeScrollBar,
      f = e.enabled,
      g = e.shards,
      m = e.sideCar,
      p = e.noIsolation,
      y = e.inert,
      x = e.allowPinchZoom,
      S = e.as,
      C = S === void 0 ? "div" : S,
      R = Od(e, [
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
      ]),
      P = m,
      N = Ld([n, t]),
      I = vn(vn({}, R), s);
    return u.createElement(
      u.Fragment,
      null,
      f &&
        u.createElement(P, {
          sideCar: Kc,
          removeScrollBar: d,
          shards: g,
          noIsolation: p,
          inert: y,
          setCallbacks: o,
          allowPinchZoom: !!x,
          lockRef: n,
        }),
      a
        ? u.cloneElement(u.Children.only(i), vn(vn({}, I), { ref: N }))
        : u.createElement(C, vn({}, I, { className: c, ref: N }), i)
    );
  });
Cs.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Cs.classNames = { fullWidth: Vd, zeroRight: Ud };
var yo = !1;
if (typeof window < "u")
  try {
    var Mr = Object.defineProperty({}, "passive", {
      get: function () {
        return (yo = !0), !0;
      },
    });
    window.addEventListener("test", Mr, Mr),
      window.removeEventListener("test", Mr, Mr);
  } catch {
    yo = !1;
  }
var mn = yo ? { passive: !1 } : !1,
  Cv = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Yc = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Cv(e) && n[t] === "visible")
    );
  },
  bv = function (e) {
    return Yc(e, "overflowY");
  },
  Rv = function (e) {
    return Yc(e, "overflowX");
  },
  Qa = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = Xc(e, n);
      if (r) {
        var s = Jc(e, n),
          o = s[1],
          a = s[2];
        if (o > a) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  Ev = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Av = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Xc = function (e, t) {
    return e === "v" ? bv(t) : Rv(t);
  },
  Jc = function (e, t) {
    return e === "v" ? Ev(t) : Av(t);
  },
  Tv = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Nv = function (e, t, n, r, s) {
    var o = Tv(e, window.getComputedStyle(t).direction),
      a = o * r,
      i = n.target,
      c = t.contains(i),
      d = !1,
      f = a > 0,
      g = 0,
      m = 0;
    do {
      var p = Jc(e, i),
        y = p[0],
        x = p[1],
        S = p[2],
        C = x - S - o * y;
      (y || C) && Xc(e, i) && ((g += C), (m += y)), (i = i.parentNode);
    } while ((!c && i !== document.body) || (c && (t.contains(i) || t === i)));
    return ((f && (g === 0 || !s)) || (!f && (m === 0 || !s))) && (d = !0), d;
  },
  Pr = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  ei = function (e) {
    return [e.deltaX, e.deltaY];
  },
  ti = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Iv = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  kv = function (e) {
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
  Mv = 0,
  hn = [];
function Pv(e) {
  var t = u.useRef([]),
    n = u.useRef([0, 0]),
    r = u.useRef(),
    s = u.useState(Mv++)[0],
    o = u.useState(function () {
      return Gd();
    })[0],
    a = u.useRef(e);
  u.useEffect(
    function () {
      a.current = e;
    },
    [e]
  ),
    u.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var x = zd([e.lockRef.current], (e.shards || []).map(ti), !0).filter(
            Boolean
          );
          return (
            x.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                x.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var i = u.useCallback(function (x, S) {
      if ("touches" in x && x.touches.length === 2)
        return !a.current.allowPinchZoom;
      var C = Pr(x),
        R = n.current,
        P = "deltaX" in x ? x.deltaX : R[0] - C[0],
        N = "deltaY" in x ? x.deltaY : R[1] - C[1],
        I,
        K = x.target,
        te = Math.abs(P) > Math.abs(N) ? "h" : "v";
      if ("touches" in x && te === "h" && K.type === "range") return !1;
      var U = Qa(te, K);
      if (!U) return !0;
      if ((U ? (I = te) : ((I = te === "v" ? "h" : "v"), (U = Qa(te, K))), !U))
        return !1;
      if (
        (!r.current && "changedTouches" in x && (P || N) && (r.current = I), !I)
      )
        return !0;
      var ge = r.current || I;
      return Nv(ge, S, x, ge === "h" ? P : N, !0);
    }, []),
    c = u.useCallback(function (x) {
      var S = x;
      if (!(!hn.length || hn[hn.length - 1] !== o)) {
        var C = "deltaY" in S ? ei(S) : Pr(S),
          R = t.current.filter(function (I) {
            return I.name === S.type && I.target === S.target && Iv(I.delta, C);
          })[0];
        if (R && R.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!R) {
          var P = (a.current.shards || [])
              .map(ti)
              .filter(Boolean)
              .filter(function (I) {
                return I.contains(S.target);
              }),
            N = P.length > 0 ? i(S, P[0]) : !a.current.noIsolation;
          N && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    d = u.useCallback(function (x, S, C, R) {
      var P = { name: x, delta: S, target: C, should: R };
      t.current.push(P),
        setTimeout(function () {
          t.current = t.current.filter(function (N) {
            return N !== P;
          });
        }, 1);
    }, []),
    f = u.useCallback(function (x) {
      (n.current = Pr(x)), (r.current = void 0);
    }, []),
    g = u.useCallback(function (x) {
      d(x.type, ei(x), x.target, i(x, e.lockRef.current));
    }, []),
    m = u.useCallback(function (x) {
      d(x.type, Pr(x), x.target, i(x, e.lockRef.current));
    }, []);
  u.useEffect(function () {
    return (
      hn.push(o),
      e.setCallbacks({
        onScrollCapture: g,
        onWheelCapture: g,
        onTouchMoveCapture: m,
      }),
      document.addEventListener("wheel", c, mn),
      document.addEventListener("touchmove", c, mn),
      document.addEventListener("touchstart", f, mn),
      function () {
        (hn = hn.filter(function (x) {
          return x !== o;
        })),
          document.removeEventListener("wheel", c, mn),
          document.removeEventListener("touchmove", c, mn),
          document.removeEventListener("touchstart", f, mn);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    y = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    y ? u.createElement(o, { styles: kv(s) }) : null,
    p ? u.createElement(Hd, { gapMode: "margin" }) : null
  );
}
const Dv = Bd(Kc, Pv);
var Qc = u.forwardRef(function (e, t) {
  return u.createElement(Cs, vn({}, e, { ref: t, sideCar: Dv }));
});
Qc.classNames = Cs.classNames;
const eu = "Dialog",
  [tu, Rx] = qh(eu),
  [Fv, an] = tu(eu),
  $v = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: o,
        modal: a = !0,
      } = e,
      i = u.useRef(null),
      c = u.useRef(null),
      [d = !1, f] = Jh({ prop: r, defaultProp: s, onChange: o });
    return u.createElement(
      Fv,
      {
        scope: t,
        triggerRef: i,
        contentRef: c,
        contentId: zs(),
        titleId: zs(),
        descriptionId: zs(),
        open: d,
        onOpenChange: f,
        onOpenToggle: u.useCallback(() => f((g) => !g), [f]),
        modal: a,
      },
      n
    );
  },
  nu = "DialogPortal",
  [jv, ru] = tu(nu, { forceMount: void 0 }),
  Ov = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: s } = e,
      o = an(nu, t);
    return u.createElement(
      jv,
      { scope: t, forceMount: n },
      u.Children.map(r, (a) =>
        u.createElement(
          Ss,
          { present: n || o.open },
          u.createElement(xv, { asChild: !0, container: s }, a)
        )
      )
    );
  },
  xo = "DialogOverlay",
  Lv = u.forwardRef((e, t) => {
    const n = ru(xo, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      o = an(xo, e.__scopeDialog);
    return o.modal
      ? u.createElement(
          Ss,
          { present: r || o.open },
          u.createElement(Vv, Ue({}, s, { ref: t }))
        )
      : null;
  }),
  Vv = u.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = an(xo, n);
    return u.createElement(
      Qc,
      { as: na, allowPinchZoom: !0, shards: [s.contentRef] },
      u.createElement(
        tt.div,
        Ue({ "data-state": ou(s.open) }, r, {
          ref: t,
          style: { pointerEvents: "auto", ...r.style },
        })
      )
    );
  }),
  ur = "DialogContent",
  Uv = u.forwardRef((e, t) => {
    const n = ru(ur, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      o = an(ur, e.__scopeDialog);
    return u.createElement(
      Ss,
      { present: r || o.open },
      o.modal
        ? u.createElement(Gv, Ue({}, s, { ref: t }))
        : u.createElement(zv, Ue({}, s, { ref: t }))
    );
  }),
  Gv = u.forwardRef((e, t) => {
    const n = an(ur, e.__scopeDialog),
      r = u.useRef(null),
      s = xr(t, n.contentRef, r);
    return (
      u.useEffect(() => {
        const o = r.current;
        if (o) return To(o);
      }, []),
      u.createElement(
        su,
        Ue({}, e, {
          ref: s,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: bn(e.onCloseAutoFocus, (o) => {
            var a;
            o.preventDefault(),
              (a = n.triggerRef.current) === null || a === void 0 || a.focus();
          }),
          onPointerDownOutside: bn(e.onPointerDownOutside, (o) => {
            const a = o.detail.originalEvent,
              i = a.button === 0 && a.ctrlKey === !0;
            (a.button === 2 || i) && o.preventDefault();
          }),
          onFocusOutside: bn(e.onFocusOutside, (o) => o.preventDefault()),
        })
      )
    );
  }),
  zv = u.forwardRef((e, t) => {
    const n = an(ur, e.__scopeDialog),
      r = u.useRef(!1),
      s = u.useRef(!1);
    return u.createElement(
      su,
      Ue({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var a;
          if (
            ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, o),
            !o.defaultPrevented)
          ) {
            var i;
            r.current ||
              (i = n.triggerRef.current) === null ||
              i === void 0 ||
              i.focus(),
              o.preventDefault();
          }
          (r.current = !1), (s.current = !1);
        },
        onInteractOutside: (o) => {
          var a, i;
          (a = e.onInteractOutside) === null || a === void 0 || a.call(e, o),
            o.defaultPrevented ||
              ((r.current = !0),
              o.detail.originalEvent.type === "pointerdown" &&
                (s.current = !0));
          const c = o.target;
          ((i = n.triggerRef.current) === null || i === void 0
            ? void 0
            : i.contains(c)) && o.preventDefault(),
            o.detail.originalEvent.type === "focusin" &&
              s.current &&
              o.preventDefault();
        },
      })
    );
  }),
  su = u.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: o,
        ...a
      } = e,
      i = an(ur, n),
      c = u.useRef(null),
      d = xr(t, c);
    return (
      Sv(),
      u.createElement(
        u.Fragment,
        null,
        u.createElement(
          fv,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: s,
            onUnmountAutoFocus: o,
          },
          u.createElement(
            cv,
            Ue(
              {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": ou(i.open),
              },
              a,
              { ref: d, onDismiss: () => i.onOpenChange(!1) }
            )
          )
        ),
        !1
      )
    );
  });
function ou(e) {
  return e ? "open" : "closed";
}
const Hv = $v,
  Bv = Ov,
  Zv = Lv,
  Wv = Uv;
var $n = '[cmdk-group=""]',
  qs = '[cmdk-group-items=""]',
  qv = '[cmdk-group-heading=""]',
  ra = '[cmdk-item=""]',
  ni = `${ra}:not([aria-disabled="true"])`,
  _o = "cmdk-item-select",
  Kt = "data-value",
  Kv = (e, t, n) => Zh(e, t, n),
  au = u.createContext(void 0),
  _r = () => u.useContext(au),
  iu = u.createContext(void 0),
  sa = () => u.useContext(iu),
  lu = u.createContext(void 0),
  cu = u.forwardRef((e, t) => {
    let n = xn(() => {
        var b, L;
        return {
          search: "",
          value:
            (L = (b = e.value) != null ? b : e.defaultValue) != null ? L : "",
          filtered: { count: 0, items: new Map(), groups: new Set() },
        };
      }),
      r = xn(() => new Set()),
      s = xn(() => new Map()),
      o = xn(() => new Map()),
      a = xn(() => new Set()),
      i = uu(e),
      {
        label: c,
        children: d,
        value: f,
        onValueChange: g,
        filter: m,
        shouldFilter: p,
        loop: y,
        disablePointerSelection: x = !1,
        vimBindings: S = !0,
        ...C
      } = e,
      R = u.useId(),
      P = u.useId(),
      N = u.useId(),
      I = u.useRef(null),
      K = ay();
    tn(() => {
      if (f !== void 0) {
        let b = f.trim();
        (n.current.value = b), te.emit();
      }
    }, [f]),
      tn(() => {
        K(6, Y);
      }, []);
    let te = u.useMemo(
        () => ({
          subscribe: (b) => (a.current.add(b), () => a.current.delete(b)),
          snapshot: () => n.current,
          setState: (b, L, ee) => {
            var F, ne, fe;
            if (!Object.is(n.current[b], L)) {
              if (((n.current[b] = L), b === "search")) D(), ce(), K(1, ue);
              else if (
                b === "value" &&
                (ee || K(5, Y),
                ((F = i.current) == null ? void 0 : F.value) !== void 0)
              ) {
                let be = L ?? "";
                (fe = (ne = i.current).onValueChange) == null ||
                  fe.call(ne, be);
                return;
              }
              te.emit();
            }
          },
          emit: () => {
            a.current.forEach((b) => b());
          },
        }),
        []
      ),
      U = u.useMemo(
        () => ({
          value: (b, L, ee) => {
            var F;
            L !== ((F = o.current.get(b)) == null ? void 0 : F.value) &&
              (o.current.set(b, { value: L, keywords: ee }),
              n.current.filtered.items.set(b, ge(L, ee)),
              K(2, () => {
                ce(), te.emit();
              }));
          },
          item: (b, L) => (
            r.current.add(b),
            L &&
              (s.current.has(L)
                ? s.current.get(L).add(b)
                : s.current.set(L, new Set([b]))),
            K(3, () => {
              D(), ce(), n.current.value || ue(), te.emit();
            }),
            () => {
              o.current.delete(b),
                r.current.delete(b),
                n.current.filtered.items.delete(b);
              let ee = oe();
              K(4, () => {
                D(),
                  (ee == null ? void 0 : ee.getAttribute("id")) === b && ue(),
                  te.emit();
              });
            }
          ),
          group: (b) => (
            s.current.has(b) || s.current.set(b, new Set()),
            () => {
              o.current.delete(b), s.current.delete(b);
            }
          ),
          filter: () => i.current.shouldFilter,
          label: c || e["aria-label"],
          disablePointerSelection: x,
          listId: R,
          inputId: N,
          labelId: P,
          listInnerRef: I,
        }),
        []
      );
    function ge(b, L) {
      var ee, F;
      let ne =
        (F = (ee = i.current) == null ? void 0 : ee.filter) != null ? F : Kv;
      return b ? ne(b, n.current.search, L) : 0;
    }
    function ce() {
      if (!n.current.search || i.current.shouldFilter === !1) return;
      let b = n.current.filtered.items,
        L = [];
      n.current.filtered.groups.forEach((F) => {
        let ne = s.current.get(F),
          fe = 0;
        ne.forEach((be) => {
          let we = b.get(be);
          fe = Math.max(we, fe);
        }),
          L.push([F, fe]);
      });
      let ee = I.current;
      me()
        .sort((F, ne) => {
          var fe, be;
          let we = F.getAttribute("id"),
            Xe = ne.getAttribute("id");
          return (
            ((fe = b.get(Xe)) != null ? fe : 0) -
            ((be = b.get(we)) != null ? be : 0)
          );
        })
        .forEach((F) => {
          let ne = F.closest(qs);
          ne
            ? ne.appendChild(
                F.parentElement === ne ? F : F.closest(`${qs} > *`)
              )
            : ee.appendChild(
                F.parentElement === ee ? F : F.closest(`${qs} > *`)
              );
        }),
        L.sort((F, ne) => ne[1] - F[1]).forEach((F) => {
          let ne = I.current.querySelector(
            `${$n}[${Kt}="${encodeURIComponent(F[0])}"]`
          );
          ne == null || ne.parentElement.appendChild(ne);
        });
    }
    function ue() {
      let b = me().find((ee) => ee.getAttribute("aria-disabled") !== "true"),
        L = b == null ? void 0 : b.getAttribute(Kt);
      te.setState("value", L || void 0);
    }
    function D() {
      var b, L, ee, F;
      if (!n.current.search || i.current.shouldFilter === !1) {
        n.current.filtered.count = r.current.size;
        return;
      }
      n.current.filtered.groups = new Set();
      let ne = 0;
      for (let fe of r.current) {
        let be =
            (L = (b = o.current.get(fe)) == null ? void 0 : b.value) != null
              ? L
              : "",
          we =
            (F = (ee = o.current.get(fe)) == null ? void 0 : ee.keywords) !=
            null
              ? F
              : [],
          Xe = ge(be, we);
        n.current.filtered.items.set(fe, Xe), Xe > 0 && ne++;
      }
      for (let [fe, be] of s.current)
        for (let we of be)
          if (n.current.filtered.items.get(we) > 0) {
            n.current.filtered.groups.add(fe);
            break;
          }
      n.current.filtered.count = ne;
    }
    function Y() {
      var b, L, ee;
      let F = oe();
      F &&
        (((b = F.parentElement) == null ? void 0 : b.firstChild) === F &&
          ((ee = (L = F.closest($n)) == null ? void 0 : L.querySelector(qv)) ==
            null ||
            ee.scrollIntoView({ block: "nearest" })),
        F.scrollIntoView({ block: "nearest" }));
    }
    function oe() {
      var b;
      return (b = I.current) == null
        ? void 0
        : b.querySelector(`${ra}[aria-selected="true"]`);
    }
    function me() {
      var b;
      return Array.from(
        (b = I.current) == null ? void 0 : b.querySelectorAll(ni)
      );
    }
    function ye(b) {
      let L = me()[b];
      L && te.setState("value", L.getAttribute(Kt));
    }
    function Te(b) {
      var L;
      let ee = oe(),
        F = me(),
        ne = F.findIndex((be) => be === ee),
        fe = F[ne + b];
      (L = i.current) != null &&
        L.loop &&
        (fe =
          ne + b < 0
            ? F[F.length - 1]
            : ne + b === F.length
            ? F[0]
            : F[ne + b]),
        fe && te.setState("value", fe.getAttribute(Kt));
    }
    function Ie(b) {
      let L = oe(),
        ee = L == null ? void 0 : L.closest($n),
        F;
      for (; ee && !F; )
        (ee = b > 0 ? sy(ee, $n) : oy(ee, $n)),
          (F = ee == null ? void 0 : ee.querySelector(ni));
      F ? te.setState("value", F.getAttribute(Kt)) : Te(b);
    }
    let q = () => ye(me().length - 1),
      _e = (b) => {
        b.preventDefault(), b.metaKey ? q() : b.altKey ? Ie(1) : Te(1);
      },
      le = (b) => {
        b.preventDefault(), b.metaKey ? ye(0) : b.altKey ? Ie(-1) : Te(-1);
      };
    return u.createElement(
      tt.div,
      {
        ref: t,
        tabIndex: -1,
        ...C,
        "cmdk-root": "",
        onKeyDown: (b) => {
          var L;
          if (((L = C.onKeyDown) == null || L.call(C, b), !b.defaultPrevented))
            switch (b.key) {
              case "n":
              case "j": {
                S && b.ctrlKey && _e(b);
                break;
              }
              case "ArrowDown": {
                _e(b);
                break;
              }
              case "p":
              case "k": {
                S && b.ctrlKey && le(b);
                break;
              }
              case "ArrowUp": {
                le(b);
                break;
              }
              case "Home": {
                b.preventDefault(), ye(0);
                break;
              }
              case "End": {
                b.preventDefault(), q();
                break;
              }
              case "Enter":
                if (!b.nativeEvent.isComposing && b.keyCode !== 229) {
                  b.preventDefault();
                  let ee = oe();
                  if (ee) {
                    let F = new Event(_o);
                    ee.dispatchEvent(F);
                  }
                }
            }
        },
      },
      u.createElement(
        "label",
        { "cmdk-label": "", htmlFor: U.inputId, id: U.labelId, style: ly },
        c
      ),
      bs(e, (b) =>
        u.createElement(
          iu.Provider,
          { value: te },
          u.createElement(au.Provider, { value: U }, b)
        )
      )
    );
  }),
  Yv = u.forwardRef((e, t) => {
    var n, r;
    let s = u.useId(),
      o = u.useRef(null),
      a = u.useContext(lu),
      i = _r(),
      c = uu(e),
      d =
        (r = (n = c.current) == null ? void 0 : n.forceMount) != null
          ? r
          : a == null
          ? void 0
          : a.forceMount;
    tn(() => {
      if (!d) return i.item(s, a == null ? void 0 : a.id);
    }, [d]);
    let f = du(s, o, [e.value, e.children, o], e.keywords),
      g = sa(),
      m = nn((K) => K.value && K.value === f.current),
      p = nn((K) =>
        d || i.filter() === !1
          ? !0
          : K.search
          ? K.filtered.items.get(s) > 0
          : !0
      );
    u.useEffect(() => {
      let K = o.current;
      if (!(!K || e.disabled))
        return K.addEventListener(_o, y), () => K.removeEventListener(_o, y);
    }, [p, e.onSelect, e.disabled]);
    function y() {
      var K, te;
      x(), (te = (K = c.current).onSelect) == null || te.call(K, f.current);
    }
    function x() {
      g.setState("value", f.current, !0);
    }
    if (!p) return null;
    let {
      disabled: S,
      value: C,
      onSelect: R,
      forceMount: P,
      keywords: N,
      ...I
    } = e;
    return u.createElement(
      tt.div,
      {
        ref: dr([o, t]),
        ...I,
        id: s,
        "cmdk-item": "",
        role: "option",
        "aria-disabled": !!S,
        "aria-selected": !!m,
        "data-disabled": !!S,
        "data-selected": !!m,
        onPointerMove: S || i.disablePointerSelection ? void 0 : x,
        onClick: S ? void 0 : y,
      },
      e.children
    );
  }),
  Xv = u.forwardRef((e, t) => {
    let { heading: n, children: r, forceMount: s, ...o } = e,
      a = u.useId(),
      i = u.useRef(null),
      c = u.useRef(null),
      d = u.useId(),
      f = _r(),
      g = nn((p) =>
        s || f.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0
      );
    tn(() => f.group(a), []), du(a, i, [e.value, e.heading, c]);
    let m = u.useMemo(() => ({ id: a, forceMount: s }), [s]);
    return u.createElement(
      tt.div,
      {
        ref: dr([i, t]),
        ...o,
        "cmdk-group": "",
        role: "presentation",
        hidden: g ? void 0 : !0,
      },
      n &&
        u.createElement(
          "div",
          { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: d },
          n
        ),
      bs(e, (p) =>
        u.createElement(
          "div",
          {
            "cmdk-group-items": "",
            role: "group",
            "aria-labelledby": n ? d : void 0,
          },
          u.createElement(lu.Provider, { value: m }, p)
        )
      )
    );
  }),
  Jv = u.forwardRef((e, t) => {
    let { alwaysRender: n, ...r } = e,
      s = u.useRef(null),
      o = nn((a) => !a.search);
    return !n && !o
      ? null
      : u.createElement(tt.div, {
          ref: dr([s, t]),
          ...r,
          "cmdk-separator": "",
          role: "separator",
        });
  }),
  Qv = u.forwardRef((e, t) => {
    let { onValueChange: n, ...r } = e,
      s = e.value != null,
      o = sa(),
      a = nn((f) => f.search),
      i = nn((f) => f.value),
      c = _r(),
      d = u.useMemo(() => {
        var f;
        let g =
          (f = c.listInnerRef.current) == null
            ? void 0
            : f.querySelector(`${ra}[${Kt}="${encodeURIComponent(i)}"]`);
        return g == null ? void 0 : g.getAttribute("id");
      }, []);
    return (
      u.useEffect(() => {
        e.value != null && o.setState("search", e.value);
      }, [e.value]),
      u.createElement(tt.input, {
        ref: t,
        ...r,
        "cmdk-input": "",
        autoComplete: "off",
        autoCorrect: "off",
        spellCheck: !1,
        "aria-autocomplete": "list",
        role: "combobox",
        "aria-expanded": !0,
        "aria-controls": c.listId,
        "aria-labelledby": c.labelId,
        "aria-activedescendant": d,
        id: c.inputId,
        type: "text",
        value: s ? e.value : a,
        onChange: (f) => {
          s || o.setState("search", f.target.value),
            n == null || n(f.target.value);
        },
      })
    );
  }),
  ey = u.forwardRef((e, t) => {
    let { children: n, label: r = "Suggestions", ...s } = e,
      o = u.useRef(null),
      a = u.useRef(null),
      i = _r();
    return (
      u.useEffect(() => {
        if (a.current && o.current) {
          let c = a.current,
            d = o.current,
            f,
            g = new ResizeObserver(() => {
              f = requestAnimationFrame(() => {
                let m = c.offsetHeight;
                d.style.setProperty("--cmdk-list-height", m.toFixed(1) + "px");
              });
            });
          return (
            g.observe(c),
            () => {
              cancelAnimationFrame(f), g.unobserve(c);
            }
          );
        }
      }, []),
      u.createElement(
        tt.div,
        {
          ref: dr([o, t]),
          ...s,
          "cmdk-list": "",
          role: "listbox",
          "aria-label": r,
          id: i.listId,
        },
        bs(e, (c) =>
          u.createElement(
            "div",
            { ref: dr([a, i.listInnerRef]), "cmdk-list-sizer": "" },
            c
          )
        )
      )
    );
  }),
  ty = u.forwardRef((e, t) => {
    let {
      open: n,
      onOpenChange: r,
      overlayClassName: s,
      contentClassName: o,
      container: a,
      ...i
    } = e;
    return u.createElement(
      Hv,
      { open: n, onOpenChange: r },
      u.createElement(
        Bv,
        { container: a },
        u.createElement(Zv, { "cmdk-overlay": "", className: s }),
        u.createElement(
          Wv,
          { "aria-label": e.label, "cmdk-dialog": "", className: o },
          u.createElement(cu, { ref: t, ...i })
        )
      )
    );
  }),
  ny = u.forwardRef((e, t) =>
    nn((n) => n.filtered.count === 0)
      ? u.createElement(tt.div, {
          ref: t,
          ...e,
          "cmdk-empty": "",
          role: "presentation",
        })
      : null
  ),
  ry = u.forwardRef((e, t) => {
    let { progress: n, children: r, label: s = "Loading...", ...o } = e;
    return u.createElement(
      tt.div,
      {
        ref: t,
        ...o,
        "cmdk-loading": "",
        role: "progressbar",
        "aria-valuenow": n,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": s,
      },
      bs(e, (a) => u.createElement("div", { "aria-hidden": !0 }, a))
    );
  }),
  We = Object.assign(cu, {
    List: ey,
    Item: Yv,
    Input: Qv,
    Group: Xv,
    Separator: Jv,
    Dialog: ty,
    Empty: ny,
    Loading: ry,
  });
function sy(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function oy(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function uu(e) {
  let t = u.useRef(e);
  return (
    tn(() => {
      t.current = e;
    }),
    t
  );
}
var tn = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function xn(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function dr(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function nn(e) {
  let t = sa(),
    n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function du(e, t, n, r = []) {
  let s = u.useRef(),
    o = _r();
  return (
    tn(() => {
      var a;
      let i = (() => {
          var d;
          for (let f of n) {
            if (typeof f == "string") return f.trim();
            if (typeof f == "object" && "current" in f)
              return f.current
                ? (d = f.current.textContent) == null
                  ? void 0
                  : d.trim()
                : s.current;
          }
        })(),
        c = r.map((d) => d.trim());
      o.value(e, i, c),
        (a = t.current) == null || a.setAttribute(Kt, i),
        (s.current = i);
    }),
    s
  );
}
var ay = () => {
  let [e, t] = u.useState(),
    n = xn(() => new Map());
  return (
    tn(() => {
      n.current.forEach((r) => r()), (n.current = new Map());
    }, [e]),
    (r, s) => {
      n.current.set(r, s), t({});
    }
  );
};
function iy(e) {
  let t = e.type;
  return typeof t == "function"
    ? t(e.props)
    : "render" in t
    ? t.render(e.props)
    : e;
}
function bs({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t)
    ? u.cloneElement(iy(t), { ref: t.ref }, n(t.props.children))
    : n(t);
}
var ly = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
};
const fu = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(We, {
    ref: n,
    className: W(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t,
  })
);
fu.displayName = We.displayName;
const gu = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsxs("div", {
    className: "flex items-center border-b px-3",
    "cmdk-input-wrapper": "",
    children: [
      l.jsx(xd, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      l.jsx(We.Input, {
        ref: n,
        className: W(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...t,
      }),
    ],
  })
);
gu.displayName = We.Input.displayName;
const pu = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(We.List, {
    ref: n,
    className: W("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t,
  })
);
pu.displayName = We.List.displayName;
const mu = u.forwardRef((e, t) =>
  l.jsx(We.Empty, { ref: t, className: "py-6 text-center text-sm", ...e })
);
mu.displayName = We.Empty.displayName;
const wo = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(We.Group, {
    ref: n,
    className: W(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t,
  })
);
wo.displayName = We.Group.displayName;
const hu = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(We.Separator, { ref: n, className: W("-mx-1 h-px bg-border", e), ...t })
);
hu.displayName = We.Separator.displayName;
const So = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(We.Item, {
    ref: n,
    className: W(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      e
    ),
    ...t,
  })
);
So.displayName = We.Item.displayName;
var oa = "Popover",
  [vu, Ex] = Nn(oa, [os]),
  wr = os(),
  [cy, Gt] = vu(oa),
  yu = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: o,
        modal: a = !1,
      } = e,
      i = wr(t),
      c = u.useRef(null),
      [d, f] = u.useState(!1),
      [g = !1, m] = ns({ prop: r, defaultProp: s, onChange: o });
    return l.jsx(ki, {
      ...i,
      children: l.jsx(cy, {
        scope: t,
        contentId: Vr(),
        triggerRef: c,
        open: g,
        onOpenChange: m,
        onOpenToggle: u.useCallback(() => m((p) => !p), [m]),
        hasCustomAnchor: d,
        onCustomAnchorAdd: u.useCallback(() => f(!0), []),
        onCustomAnchorRemove: u.useCallback(() => f(!1), []),
        modal: a,
        children: n,
      }),
    });
  };
yu.displayName = oa;
var xu = "PopoverAnchor",
  uy = u.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Gt(xu, n),
      o = wr(n),
      { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = s;
    return (
      u.useEffect(() => (a(), () => i()), [a, i]),
      l.jsx(Ao, { ...o, ...r, ref: t })
    );
  });
uy.displayName = xu;
var _u = "PopoverTrigger",
  wu = u.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Gt(_u, n),
      o = wr(n),
      a = ct(t, s.triggerRef),
      i = l.jsx($e.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Eu(s.open),
        ...r,
        ref: a,
        onClick: ae(e.onClick, s.onOpenToggle),
      });
    return s.hasCustomAnchor
      ? i
      : l.jsx(Ao, { asChild: !0, ...o, children: i });
  });
wu.displayName = _u;
var aa = "PopoverPortal",
  [dy, fy] = vu(aa, { forceMount: void 0 }),
  Su = (e) => {
    const { __scopePopover: t, forceMount: n, children: r, container: s } = e,
      o = Gt(aa, t);
    return l.jsx(dy, {
      scope: t,
      forceMount: n,
      children: l.jsx(rn, {
        present: n || o.open,
        children: l.jsx(Ii, { asChild: !0, container: s, children: r }),
      }),
    });
  };
Su.displayName = aa;
var Tn = "PopoverContent",
  Cu = u.forwardRef((e, t) => {
    const n = fy(Tn, e.__scopePopover),
      { forceMount: r = n.forceMount, ...s } = e,
      o = Gt(Tn, e.__scopePopover);
    return l.jsx(rn, {
      present: r || o.open,
      children: o.modal
        ? l.jsx(gy, { ...s, ref: t })
        : l.jsx(py, { ...s, ref: t }),
    });
  });
Cu.displayName = Tn;
var gy = u.forwardRef((e, t) => {
    const n = Gt(Tn, e.__scopePopover),
      r = u.useRef(null),
      s = ct(t, r),
      o = u.useRef(!1);
    return (
      u.useEffect(() => {
        const a = r.current;
        if (a) return To(a);
      }, []),
      l.jsx(Ni, {
        as: Eo,
        allowPinchZoom: !0,
        children: l.jsx(bu, {
          ...e,
          ref: s,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: ae(e.onCloseAutoFocus, (a) => {
            var i;
            a.preventDefault(),
              o.current || (i = n.triggerRef.current) == null || i.focus();
          }),
          onPointerDownOutside: ae(
            e.onPointerDownOutside,
            (a) => {
              const i = a.detail.originalEvent,
                c = i.button === 0 && i.ctrlKey === !0,
                d = i.button === 2 || c;
              o.current = d;
            },
            { checkForDefaultPrevented: !1 }
          ),
          onFocusOutside: ae(e.onFocusOutside, (a) => a.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  py = u.forwardRef((e, t) => {
    const n = Gt(Tn, e.__scopePopover),
      r = u.useRef(!1),
      s = u.useRef(!1);
    return l.jsx(bu, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (o) => {
        var a, i;
        (a = e.onCloseAutoFocus) == null || a.call(e, o),
          o.defaultPrevented ||
            (r.current || (i = n.triggerRef.current) == null || i.focus(),
            o.preventDefault()),
          (r.current = !1),
          (s.current = !1);
      },
      onInteractOutside: (o) => {
        var c, d;
        (c = e.onInteractOutside) == null || c.call(e, o),
          o.defaultPrevented ||
            ((r.current = !0),
            o.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const a = o.target;
        ((d = n.triggerRef.current) == null ? void 0 : d.contains(a)) &&
          o.preventDefault(),
          o.detail.originalEvent.type === "focusin" &&
            s.current &&
            o.preventDefault();
      },
    });
  }),
  bu = u.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: o,
        disableOutsidePointerEvents: a,
        onEscapeKeyDown: i,
        onPointerDownOutside: c,
        onFocusOutside: d,
        onInteractOutside: f,
        ...g
      } = e,
      m = Gt(Tn, n),
      p = wr(n);
    return (
      bi(),
      l.jsx(Ri, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: o,
        children: l.jsx(Ei, {
          asChild: !0,
          disableOutsidePointerEvents: a,
          onInteractOutside: f,
          onEscapeKeyDown: i,
          onPointerDownOutside: c,
          onFocusOutside: d,
          onDismiss: () => m.onOpenChange(!1),
          children: l.jsx(Ai, {
            "data-state": Eu(m.open),
            role: "dialog",
            id: m.contentId,
            ...p,
            ...g,
            ref: t,
            style: {
              ...g.style,
              "--radix-popover-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  Ru = "PopoverClose",
  my = u.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = Gt(Ru, n);
    return l.jsx($e.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: ae(e.onClick, () => s.onOpenChange(!1)),
    });
  });
my.displayName = Ru;
var hy = "PopoverArrow",
  vy = u.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = wr(n);
    return l.jsx(Ti, { ...s, ...r, ref: t });
  });
vy.displayName = hy;
function Eu(e) {
  return e ? "open" : "closed";
}
var yy = yu,
  xy = wu,
  _y = Su,
  Au = Cu;
const wy = yy,
  Sy = xy,
  Tu = u.forwardRef(
    ({ className: e, align: t = "center", sideOffset: n = 4, ...r }, s) =>
      l.jsx(_y, {
        children: l.jsx(Au, {
          ref: s,
          align: t,
          sideOffset: n,
          className: W(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e
          ),
          ...r,
        }),
      })
  );
Tu.displayName = Au.displayName;
var Cy = "Separator",
  ri = "horizontal",
  by = ["horizontal", "vertical"],
  Nu = u.forwardRef((e, t) => {
    const { decorative: n, orientation: r = ri, ...s } = e,
      o = Ry(r) ? r : ri,
      i = n
        ? { role: "none" }
        : {
            "aria-orientation": o === "vertical" ? o : void 0,
            role: "separator",
          };
    return l.jsx($e.div, { "data-orientation": o, ...i, ...s, ref: t });
  });
Nu.displayName = Cy;
function Ry(e) {
  return by.includes(e);
}
var Iu = Nu;
const ku = u.forwardRef(
  (
    { className: e, orientation: t = "horizontal", decorative: n = !0, ...r },
    s
  ) =>
    l.jsx(Iu, {
      ref: s,
      decorative: n,
      orientation: t,
      className: W(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r,
    })
);
ku.displayName = Iu.displayName;
function Ey({ column: e, title: t, options: n }) {
  const r = e == null ? void 0 : e.getFacetedUniqueValues(),
    s = new Set(e == null ? void 0 : e.getFilterValue());
  return l.jsxs(wy, {
    children: [
      l.jsx(Sy, {
        asChild: !0,
        children: l.jsxs(ve, {
          variant: "outline",
          size: "sm",
          className: "h-8 border-dashed",
          children: [
            l.jsx(_d, { className: "mr-2 h-4 w-4" }),
            t,
            (s == null ? void 0 : s.size) > 0 &&
              l.jsxs(l.Fragment, {
                children: [
                  l.jsx(ku, { orientation: "vertical", className: "mx-2 h-4" }),
                  l.jsx(Or, {
                    variant: "secondary",
                    className: "rounded-sm px-1 font-normal lg:hidden",
                    children: s.size,
                  }),
                  l.jsx("div", {
                    className: "hidden space-x-1 lg:flex",
                    children:
                      s.size > 2
                        ? l.jsxs(Or, {
                            variant: "secondary",
                            className: "rounded-sm px-1 font-normal",
                            children: [s.size, " selected"],
                          })
                        : n
                            .filter((o) => s.has(o.value))
                            .map((o) =>
                              l.jsx(
                                Or,
                                {
                                  variant: "secondary",
                                  className: "rounded-sm px-1 font-normal",
                                  children: o.label,
                                },
                                o.value
                              )
                            ),
                  }),
                ],
              }),
          ],
        }),
      }),
      l.jsx(Tu, {
        className: "w-[200px] p-0",
        align: "start",
        children: l.jsxs(fu, {
          children: [
            l.jsx(gu, { placeholder: t }),
            l.jsxs(pu, {
              children: [
                l.jsx(mu, { children: "No results found." }),
                l.jsx(wo, {
                  children: n.map((o) => {
                    const a = s.has(o.value);
                    return l.jsxs(
                      So,
                      {
                        onSelect: () => {
                          a ? s.delete(o.value) : s.add(o.value);
                          const i = Array.from(s);
                          e == null || e.setFilterValue(i.length ? i : void 0);
                        },
                        children: [
                          l.jsx("div", {
                            className: W(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              a
                                ? "bg-primary text-primary-foreground"
                                : "opacity-50 [&_svg]:invisible"
                            ),
                            children: l.jsx(ss, { className: W("h-4 w-4") }),
                          }),
                          o.icon &&
                            l.jsx(o.icon, {
                              className: "mr-2 h-4 w-4 text-muted-foreground",
                            }),
                          l.jsx("span", { children: o.label }),
                          (r == null ? void 0 : r.get(o.value)) &&
                            l.jsx("span", {
                              className:
                                "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",
                              children: r.get(o.value),
                            }),
                        ],
                      },
                      o.value
                    );
                  }),
                }),
                s.size > 0 &&
                  l.jsxs(l.Fragment, {
                    children: [
                      l.jsx(hu, {}),
                      l.jsx(wo, {
                        children: l.jsx(So, {
                          onSelect: () =>
                            e == null ? void 0 : e.setFilterValue(void 0),
                          className: "justify-center text-center",
                          children: "Clear filters",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Ay({ table: e }) {
  var n;
  const t = e.getState().columnFilters.length > 0;
  return l.jsxs("div", {
    className: "flex items-center justify-between",
    children: [
      l.jsxs("div", {
        className: "flex flex-1 items-center space-x-2",
        children: [
          l.jsx(fr, {
            placeholder: "Filter assignments...",
            value:
              ((n = e.getColumn("Assignment")) == null
                ? void 0
                : n.getFilterValue()) ?? "",
            onChange: (r) => {
              var s;
              return (s = e.getColumn("Assignment")) == null
                ? void 0
                : s.setFilterValue(r.target.value);
            },
            className: "h-8 w-[150px] lg:w-[250px]",
          }),
          e.getColumn("status") &&
            l.jsx(Ey, {
              column: e.getColumn("status"),
              title: "Status",
              options: Nl,
            }),
          t &&
            l.jsxs(ve, {
              variant: "ghost",
              onClick: () => e.resetColumnFilters(),
              className: "h-8 px-2 lg:px-3",
              children: ["Reset", l.jsx(wd, { className: "ml-2 h-4 w-4" })],
            }),
        ],
      }),
      l.jsx(jh, { table: e }),
    ],
  });
}
function Ty({ table: e }) {
  return l.jsxs("div", {
    className: "flex items-center justify-between px-2",
    children: [
      l.jsxs("div", {
        className: "flex-1 text-sm text-muted-foreground",
        children: [
          e.getFilteredSelectedRowModel().rows.length,
          " of",
          " ",
          e.getFilteredRowModel().rows.length,
          " row(s) selected.",
        ],
      }),
      l.jsxs("div", {
        className: "flex items-center space-x-6 lg:space-x-8",
        children: [
          l.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              l.jsx("p", {
                className: "text-sm font-medium",
                children: "Rows per page",
              }),
              l.jsxs(Zd, {
                value: `${e.getState().pagination.pageSize}`,
                onValueChange: (t) => {
                  e.setPageSize(Number(t));
                },
                children: [
                  l.jsx(Wd, {
                    className: "h-8 w-[70px]",
                    children: l.jsx(qd, {
                      placeholder: e.getState().pagination.pageSize,
                    }),
                  }),
                  l.jsx(Kd, {
                    side: "top",
                    children: [10, 20, 30, 40, 50].map((t) =>
                      l.jsx(Yd, { value: `${t}`, children: t }, t)
                    ),
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className:
              "flex w-[100px] items-center justify-center text-sm font-medium",
            children: [
              "Page ",
              e.getState().pagination.pageIndex + 1,
              " of",
              " ",
              e.getPageCount(),
            ],
          }),
          l.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              l.jsxs(ve, {
                variant: "outline",
                className: "hidden h-8 w-8 p-0 lg:flex",
                onClick: () => e.setPageIndex(0),
                disabled: !e.getCanPreviousPage(),
                children: [
                  l.jsx("span", {
                    className: "sr-only",
                    children: "Go to first page",
                  }),
                  l.jsx(Sd, { className: "h-4 w-4" }),
                ],
              }),
              l.jsxs(ve, {
                variant: "outline",
                className: "h-8 w-8 p-0",
                onClick: () => e.previousPage(),
                disabled: !e.getCanPreviousPage(),
                children: [
                  l.jsx("span", {
                    className: "sr-only",
                    children: "Go to previous page",
                  }),
                  l.jsx(Cd, { className: "h-4 w-4" }),
                ],
              }),
              l.jsxs(ve, {
                variant: "outline",
                className: "h-8 w-8 p-0",
                onClick: () => e.nextPage(),
                disabled: !e.getCanNextPage(),
                children: [
                  l.jsx("span", {
                    className: "sr-only",
                    children: "Go to next page",
                  }),
                  l.jsx(yi, { className: "h-4 w-4" }),
                ],
              }),
              l.jsxs(ve, {
                variant: "outline",
                className: "hidden h-8 w-8 p-0 lg:flex",
                onClick: () => e.setPageIndex(e.getPageCount() - 1),
                disabled: !e.getCanNextPage(),
                children: [
                  l.jsx("span", {
                    className: "sr-only",
                    children: "Go to last page",
                  }),
                  l.jsx(bd, { className: "h-4 w-4" }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ny({ columns: e, data: t }) {
  var g;
  const [n, r] = u.useState({}),
    [s, o] = u.useState({ id: !1 }),
    [a, i] = u.useState([]),
    [c, d] = u.useState([{ id: "createdAt", desc: !0 }]),
    f = Dh({
      data: t,
      columns: e,
      state: {
        sorting: c,
        columnVisibility: s,
        rowSelection: n,
        columnFilters: a,
      },
      enableRowSelection: !0,
      onRowSelectionChange: r,
      onSortingChange: d,
      onColumnFiltersChange: i,
      onColumnVisibilityChange: o,
      getCoreRowModel: Sh(),
      getFilteredRowModel: Th(),
      getPaginationRowModel: Nh(),
      getSortedRowModel: Ih(),
      getFacetedRowModel: Eh(),
      getFacetedUniqueValues: Ah(),
    });
  return l.jsxs("div", {
    className: "space-y-4",
    children: [
      l.jsx(Ay, { table: f }),
      l.jsx("div", {
        className: "rounded-md border",
        children: l.jsxs(Qo, {
          children: [
            l.jsx(ea, {
              children: f
                .getHeaderGroups()
                .map((m) =>
                  l.jsx(
                    Cn,
                    {
                      children: m.headers.map((p) =>
                        l.jsx(
                          qt,
                          {
                            colSpan: p.colSpan,
                            children: p.isPlaceholder
                              ? null
                              : za(p.column.columnDef.header, p.getContext()),
                          },
                          p.id
                        )
                      ),
                    },
                    m.id
                  )
                ),
            }),
            l.jsx(ta, {
              children:
                (g = f.getRowModel().rows) != null && g.length
                  ? f
                      .getRowModel()
                      .rows.map((m) =>
                        l.jsx(
                          Cn,
                          {
                            "data-state": m.getIsSelected() && "selected",
                            children: m
                              .getVisibleCells()
                              .map((p) =>
                                l.jsx(
                                  Pt,
                                  {
                                    children: za(
                                      p.column.columnDef.cell,
                                      p.getContext()
                                    ),
                                  },
                                  p.id
                                )
                              ),
                          },
                          m.id
                        )
                      )
                  : l.jsx(Cn, {
                      children: l.jsx(Pt, {
                        colSpan: e.length,
                        className: "h-24 text-center",
                        children: "No results.",
                      }),
                    }),
            }),
          ],
        }),
      }),
      l.jsx(Ty, { table: f }),
    ],
  });
}
var ia = "Avatar",
  [Iy, Ax] = Nn(ia),
  [ky, Mu] = Iy(ia),
  Pu = u.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...r } = e,
      [s, o] = u.useState("idle");
    return l.jsx(ky, {
      scope: n,
      imageLoadingStatus: s,
      onImageLoadingStatusChange: o,
      children: l.jsx($e.span, { ...r, ref: t }),
    });
  });
Pu.displayName = ia;
var Du = "AvatarImage",
  Fu = u.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: s = () => {},
        ...o
      } = e,
      a = Mu(Du, n),
      i = My(r, o.referrerPolicy),
      c = rs((d) => {
        s(d), a.onImageLoadingStatusChange(d);
      });
    return (
      _i(() => {
        i !== "idle" && c(i);
      }, [i, c]),
      i === "loaded" ? l.jsx($e.img, { ...o, ref: t, src: r }) : null
    );
  });
Fu.displayName = Du;
var $u = "AvatarFallback",
  ju = u.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...s } = e,
      o = Mu($u, n),
      [a, i] = u.useState(r === void 0);
    return (
      u.useEffect(() => {
        if (r !== void 0) {
          const c = window.setTimeout(() => i(!0), r);
          return () => window.clearTimeout(c);
        }
      }, [r]),
      a && o.imageLoadingStatus !== "loaded"
        ? l.jsx($e.span, { ...s, ref: t })
        : null
    );
  });
ju.displayName = $u;
function My(e, t) {
  const [n, r] = u.useState("idle");
  return (
    _i(() => {
      if (!e) {
        r("error");
        return;
      }
      let s = !0;
      const o = new window.Image(),
        a = (i) => () => {
          s && r(i);
        };
      return (
        r("loading"),
        (o.onload = a("loaded")),
        (o.onerror = a("error")),
        (o.src = e),
        t && (o.referrerPolicy = t),
        () => {
          s = !1;
        }
      );
    }, [e, t]),
    n
  );
}
var Ou = Pu,
  Lu = Fu,
  Vu = ju;
const Uu = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(Ou, {
    ref: n,
    className: W(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t,
  })
);
Uu.displayName = Ou.displayName;
const Gu = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(Lu, { ref: n, className: W("aspect-square h-full w-full", e), ...t })
);
Gu.displayName = Lu.displayName;
const zu = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx(Vu, {
    ref: n,
    className: W(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t,
  })
);
zu.displayName = Vu.displayName;
function Py() {
  const [e, t] = u.useState(),
    [n, r] = u.useState();
  if (
    (u.useEffect(() => {
      (async () => {
        const i = await Rt.getItem(Mi),
          c = await Rt.getItem(Ur);
        !i || !c || (t(i), r(c));
      })();
    }, []),
    !e)
  )
    return null;
  const s = () => {
      n && chrome.tabs.create({ url: `${n.baseURL}` });
    },
    o = () => {
      window.location.hash = "";
    };
  return l.jsxs(_s, {
    children: [
      l.jsx(Zo, {
        asChild: !0,
        children: l.jsx(ve, {
          variant: "ghost",
          className: "relative h-8 w-8 rounded-full",
          children: l.jsxs(Uu, {
            className: "h-9 w-9",
            children: [
              l.jsx(Gu, { src: e.avatar_url, alt: e.name }),
              l.jsx(zu, { children: e.last_name }),
            ],
          }),
        }),
      }),
      l.jsxs(vr, {
        className: "w-56",
        align: "end",
        forceMount: !0,
        children: [
          l.jsx(Wo, {
            className: "font-normal",
            children: l.jsxs("div", {
              className: "flex flex-col space-y-1",
              children: [
                l.jsx("p", {
                  className: "text-sm font-medium leading-none",
                  children: e.name,
                }),
                l.jsx("p", {
                  className: "text-xs leading-none text-muted-foreground",
                  children: e.id,
                }),
              ],
            }),
          }),
          l.jsx(yr, {}),
          l.jsxs(Em, {
            children: [
              l.jsx(Ft, { onClick: s, children: "Open Canvas" }),
              l.jsx(Ft, { onClick: o, children: "Settings" }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Dy = ({ message: e, type: t, onClose: n }) => {
    const r =
        t === "success"
          ? "bg-green-100"
          : t === "error"
          ? "bg-red-100"
          : "bg-blue-100",
      s =
        t === "success"
          ? "text-green-700"
          : t === "error"
          ? "text-red-700"
          : "text-blue-700";
    return (
      u.useEffect(() => {
        const o = setTimeout(() => {
          n();
        }, 5e3);
        return () => clearTimeout(o);
      }, [n]),
      l.jsxs("div", {
        className: `fixed top-4 right-4 ${r} ${s} px-4 py-3 rounded shadow-md flex items-center space-x-2 z-50`,
        children: [
          l.jsx("span", { children: e }),
          l.jsx(ve, {
            variant: "ghost",
            onClick: n,
            "aria-label": "Close Notification",
            children: l.jsx(gf, { className: "w-4 h-4" }),
          }),
        ],
      })
    );
  },
  la = u.forwardRef(({ className: e, ...t }, n) =>
    l.jsx("div", {
      ref: n,
      className: W("rounded-xl border bg-card text-card-foreground shadow", e),
      ...t,
    })
  );
la.displayName = "Card";
const ca = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("div", {
    ref: n,
    className: W("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
ca.displayName = "CardHeader";
const Hu = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("h3", {
    ref: n,
    className: W("font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
Hu.displayName = "CardTitle";
const Fy = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("p", { ref: n, className: W("text-sm text-muted-foreground", e), ...t })
);
Fy.displayName = "CardDescription";
const ua = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("div", { ref: n, className: W("p-6 pt-0", e), ...t })
);
ua.displayName = "CardContent";
const $y = u.forwardRef(({ className: e, ...t }, n) =>
  l.jsx("div", { ref: n, className: W("flex items-center p-6 pt-0", e), ...t })
);
$y.displayName = "CardFooter";
/*! @license DOMPurify 3.2.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.0/LICENSE */ const {
  entries: Bu,
  setPrototypeOf: si,
  isFrozen: jy,
  getPrototypeOf: Oy,
  getOwnPropertyDescriptor: Ly,
} = Object;
let { freeze: Ge, seal: et, create: Zu } = Object,
  { apply: Co, construct: bo } = typeof Reflect < "u" && Reflect;
Ge ||
  (Ge = function (t) {
    return t;
  });
et ||
  (et = function (t) {
    return t;
  });
Co ||
  (Co = function (t, n, r) {
    return t.apply(n, r);
  });
bo ||
  (bo = function (t, n) {
    return new t(...n);
  });
const Dr = Ye(Array.prototype.forEach),
  oi = Ye(Array.prototype.pop),
  jn = Ye(Array.prototype.push),
  Lr = Ye(String.prototype.toLowerCase),
  Ks = Ye(String.prototype.toString),
  ai = Ye(String.prototype.match),
  On = Ye(String.prototype.replace),
  Vy = Ye(String.prototype.indexOf),
  Uy = Ye(String.prototype.trim),
  rt = Ye(Object.prototype.hasOwnProperty),
  Oe = Ye(RegExp.prototype.test),
  Ln = Gy(TypeError);
function Ye(e) {
  return function (t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1;
      s < n;
      s++
    )
      r[s - 1] = arguments[s];
    return Co(e, t, r);
  };
}
function Gy(e) {
  return function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return bo(e, n);
  };
}
function ie(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lr;
  si && si(e, null);
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const o = n(s);
      o !== s && (jy(t) || (t[r] = o), (s = o));
    }
    e[s] = !0;
  }
  return e;
}
function zy(e) {
  for (let t = 0; t < e.length; t++) rt(e, t) || (e[t] = null);
  return e;
}
function Zt(e) {
  const t = Zu(null);
  for (const [n, r] of Bu(e))
    rt(e, n) &&
      (Array.isArray(r)
        ? (t[n] = zy(r))
        : r && typeof r == "object" && r.constructor === Object
        ? (t[n] = Zt(r))
        : (t[n] = r));
  return t;
}
function Vn(e, t) {
  for (; e !== null; ) {
    const r = Ly(e, t);
    if (r) {
      if (r.get) return Ye(r.get);
      if (typeof r.value == "function") return Ye(r.value);
    }
    e = Oy(e);
  }
  function n() {
    return null;
  }
  return n;
}
const ii = Ge([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ]),
  Ys = Ge([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern",
  ]),
  Xs = Ge([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  Hy = Ge([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  Js = Ge([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts",
  ]),
  By = Ge([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  li = Ge(["#text"]),
  ci = Ge([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "wrap",
    "xmlns",
    "slot",
  ]),
  Qs = Ge([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "amplitude",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "exponent",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "intercept",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "slope",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "tablevalues",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan",
  ]),
  ui = Ge([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns",
  ]),
  Fr = Ge(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  Zy = et(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  Wy = et(/<%[\w\W]*|[\w\W]*%>/gm),
  qy = et(/\${[\w\W]*}/gm),
  Ky = et(/^data-[\-\w.\u00B7-\uFFFF]/),
  Yy = et(/^aria-[\-\w]+$/),
  Wu = et(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  ),
  Xy = et(/^(?:\w+script|data):/i),
  Jy = et(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  qu = et(/^html$/i),
  Qy = et(/^[a-z][.\w]*(-[.\w]+)+$/i);
var di = Object.freeze({
  __proto__: null,
  ARIA_ATTR: Yy,
  ATTR_WHITESPACE: Jy,
  CUSTOM_ELEMENT: Qy,
  DATA_ATTR: Ky,
  DOCTYPE_NAME: qu,
  ERB_EXPR: Wy,
  IS_ALLOWED_URI: Wu,
  IS_SCRIPT_OR_DATA: Xy,
  MUSTACHE_EXPR: Zy,
  TMPLIT_EXPR: qy,
});
const Un = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12,
  },
  ex = function () {
    return typeof window > "u" ? null : window;
  },
  tx = function (t, n) {
    if (typeof t != "object" || typeof t.createPolicy != "function")
      return null;
    let r = null;
    const s = "data-tt-policy-suffix";
    n && n.hasAttribute(s) && (r = n.getAttribute(s));
    const o = "dompurify" + (r ? "#" + r : "");
    try {
      return t.createPolicy(o, {
        createHTML(a) {
          return a;
        },
        createScriptURL(a) {
          return a;
        },
      });
    } catch {
      return (
        console.warn("TrustedTypes policy " + o + " could not be created."),
        null
      );
    }
  };
function Ku() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ex();
  const t = (G) => Ku(G);
  if (
    ((t.version = "3.2.0"),
    (t.removed = []),
    !e || !e.document || e.document.nodeType !== Un.document)
  )
    return (t.isSupported = !1), t;
  let { document: n } = e;
  const r = n,
    s = r.currentScript,
    {
      DocumentFragment: o,
      HTMLTemplateElement: a,
      Node: i,
      Element: c,
      NodeFilter: d,
      NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
      HTMLFormElement: g,
      DOMParser: m,
      trustedTypes: p,
    } = e,
    y = c.prototype,
    x = Vn(y, "cloneNode"),
    S = Vn(y, "remove"),
    C = Vn(y, "nextSibling"),
    R = Vn(y, "childNodes"),
    P = Vn(y, "parentNode");
  if (typeof a == "function") {
    const G = n.createElement("template");
    G.content && G.content.ownerDocument && (n = G.content.ownerDocument);
  }
  let N,
    I = "";
  const {
      implementation: K,
      createNodeIterator: te,
      createDocumentFragment: U,
      getElementsByTagName: ge,
    } = n,
    { importNode: ce } = r;
  let ue = {};
  t.isSupported =
    typeof Bu == "function" &&
    typeof P == "function" &&
    K &&
    K.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: D,
    ERB_EXPR: Y,
    TMPLIT_EXPR: oe,
    DATA_ATTR: me,
    ARIA_ATTR: ye,
    IS_SCRIPT_OR_DATA: Te,
    ATTR_WHITESPACE: Ie,
    CUSTOM_ELEMENT: q,
  } = di;
  let { IS_ALLOWED_URI: _e } = di,
    le = null;
  const b = ie({}, [...ii, ...Ys, ...Xs, ...Js, ...li]);
  let L = null;
  const ee = ie({}, [...ci, ...Qs, ...ui, ...Fr]);
  let F = Object.seal(
      Zu(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      })
    ),
    ne = null,
    fe = null,
    be = !0,
    we = !0,
    Xe = !1,
    In = !0,
    Tt = !1,
    ln = !0,
    ut = !1,
    Sr = !1,
    Cr = !1,
    zt = !1,
    h = !1,
    _ = !1,
    w = !0,
    $ = !1;
  const M = "user-content-";
  let A = !0,
    z = !1,
    Q = {},
    xe = null;
  const Ee = ie({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp",
  ]);
  let dt = null;
  const br = ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ht = null;
  const cn = ie({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    un = "http://www.w3.org/1998/Math/MathML",
    Bt = "http://www.w3.org/2000/svg",
    nt = "http://www.w3.org/1999/xhtml";
  let _t = nt,
    Rs = !1,
    Es = null;
  const Yu = ie({}, [un, Bt, nt], Ks);
  let Rr = ie({}, ["mi", "mo", "mn", "ms", "mtext"]),
    Er = ie({}, ["annotation-xml"]);
  const Xu = ie({}, ["title", "style", "font", "a", "script"]);
  let kn = null;
  const Ju = ["application/xhtml+xml", "text/html"],
    Qu = "text/html";
  let ke = null,
    dn = null;
  const ed = n.createElement("form"),
    da = function (v) {
      return v instanceof RegExp || v instanceof Function;
    },
    As = function () {
      let v =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(dn && dn === v)) {
        if (
          ((!v || typeof v != "object") && (v = {}),
          (v = Zt(v)),
          (kn =
            Ju.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? Qu : v.PARSER_MEDIA_TYPE),
          (ke = kn === "application/xhtml+xml" ? Ks : Lr),
          (le = rt(v, "ALLOWED_TAGS") ? ie({}, v.ALLOWED_TAGS, ke) : b),
          (L = rt(v, "ALLOWED_ATTR") ? ie({}, v.ALLOWED_ATTR, ke) : ee),
          (Es = rt(v, "ALLOWED_NAMESPACES")
            ? ie({}, v.ALLOWED_NAMESPACES, Ks)
            : Yu),
          (Ht = rt(v, "ADD_URI_SAFE_ATTR")
            ? ie(Zt(cn), v.ADD_URI_SAFE_ATTR, ke)
            : cn),
          (dt = rt(v, "ADD_DATA_URI_TAGS")
            ? ie(Zt(br), v.ADD_DATA_URI_TAGS, ke)
            : br),
          (xe = rt(v, "FORBID_CONTENTS") ? ie({}, v.FORBID_CONTENTS, ke) : Ee),
          (ne = rt(v, "FORBID_TAGS") ? ie({}, v.FORBID_TAGS, ke) : {}),
          (fe = rt(v, "FORBID_ATTR") ? ie({}, v.FORBID_ATTR, ke) : {}),
          (Q = rt(v, "USE_PROFILES") ? v.USE_PROFILES : !1),
          (be = v.ALLOW_ARIA_ATTR !== !1),
          (we = v.ALLOW_DATA_ATTR !== !1),
          (Xe = v.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (In = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          (Tt = v.SAFE_FOR_TEMPLATES || !1),
          (ln = v.SAFE_FOR_XML !== !1),
          (ut = v.WHOLE_DOCUMENT || !1),
          (zt = v.RETURN_DOM || !1),
          (h = v.RETURN_DOM_FRAGMENT || !1),
          (_ = v.RETURN_TRUSTED_TYPE || !1),
          (Cr = v.FORCE_BODY || !1),
          (w = v.SANITIZE_DOM !== !1),
          ($ = v.SANITIZE_NAMED_PROPS || !1),
          (A = v.KEEP_CONTENT !== !1),
          (z = v.IN_PLACE || !1),
          (_e = v.ALLOWED_URI_REGEXP || Wu),
          (_t = v.NAMESPACE || nt),
          (Rr = v.MATHML_TEXT_INTEGRATION_POINTS || Rr),
          (Er = v.HTML_INTEGRATION_POINTS || Er),
          (F = v.CUSTOM_ELEMENT_HANDLING || {}),
          v.CUSTOM_ELEMENT_HANDLING &&
            da(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (F.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          v.CUSTOM_ELEMENT_HANDLING &&
            da(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (F.attributeNameCheck =
              v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          v.CUSTOM_ELEMENT_HANDLING &&
            typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
              "boolean" &&
            (F.allowCustomizedBuiltInElements =
              v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          Tt && (we = !1),
          h && (zt = !0),
          Q &&
            ((le = ie({}, li)),
            (L = []),
            Q.html === !0 && (ie(le, ii), ie(L, ci)),
            Q.svg === !0 && (ie(le, Ys), ie(L, Qs), ie(L, Fr)),
            Q.svgFilters === !0 && (ie(le, Xs), ie(L, Qs), ie(L, Fr)),
            Q.mathMl === !0 && (ie(le, Js), ie(L, ui), ie(L, Fr))),
          v.ADD_TAGS && (le === b && (le = Zt(le)), ie(le, v.ADD_TAGS, ke)),
          v.ADD_ATTR && (L === ee && (L = Zt(L)), ie(L, v.ADD_ATTR, ke)),
          v.ADD_URI_SAFE_ATTR && ie(Ht, v.ADD_URI_SAFE_ATTR, ke),
          v.FORBID_CONTENTS &&
            (xe === Ee && (xe = Zt(xe)), ie(xe, v.FORBID_CONTENTS, ke)),
          A && (le["#text"] = !0),
          ut && ie(le, ["html", "head", "body"]),
          le.table && (ie(le, ["tbody"]), delete ne.tbody),
          v.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Ln(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
            );
          if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Ln(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
            );
          (N = v.TRUSTED_TYPES_POLICY), (I = N.createHTML(""));
        } else
          N === void 0 && (N = tx(p, s)),
            N !== null && typeof I == "string" && (I = N.createHTML(""));
        Ge && Ge(v), (dn = v);
      }
    },
    fa = ie({}, [...Ys, ...Xs, ...Hy]),
    ga = ie({}, [...Js, ...By]),
    td = function (v) {
      let T = P(v);
      (!T || !T.tagName) && (T = { namespaceURI: _t, tagName: "template" });
      const V = Lr(v.tagName),
        Se = Lr(T.tagName);
      return Es[v.namespaceURI]
        ? v.namespaceURI === Bt
          ? T.namespaceURI === nt
            ? V === "svg"
            : T.namespaceURI === un
            ? V === "svg" && (Se === "annotation-xml" || Rr[Se])
            : !!fa[V]
          : v.namespaceURI === un
          ? T.namespaceURI === nt
            ? V === "math"
            : T.namespaceURI === Bt
            ? V === "math" && Er[Se]
            : !!ga[V]
          : v.namespaceURI === nt
          ? (T.namespaceURI === Bt && !Er[Se]) ||
            (T.namespaceURI === un && !Rr[Se])
            ? !1
            : !ga[V] && (Xu[V] || !fa[V])
          : !!(kn === "application/xhtml+xml" && Es[v.namespaceURI])
        : !1;
    },
    ft = function (v) {
      jn(t.removed, { element: v });
      try {
        P(v).removeChild(v);
      } catch {
        S(v);
      }
    },
    Ar = function (v, T) {
      try {
        jn(t.removed, { attribute: T.getAttributeNode(v), from: T });
      } catch {
        jn(t.removed, { attribute: null, from: T });
      }
      if ((T.removeAttribute(v), v === "is" && !L[v]))
        if (zt || h)
          try {
            ft(T);
          } catch {}
        else
          try {
            T.setAttribute(v, "");
          } catch {}
    },
    pa = function (v) {
      let T = null,
        V = null;
      if (Cr) v = "<remove></remove>" + v;
      else {
        const Me = ai(v, /^[\r\n\t ]+/);
        V = Me && Me[0];
      }
      kn === "application/xhtml+xml" &&
        _t === nt &&
        (v =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          v +
          "</body></html>");
      const Se = N ? N.createHTML(v) : v;
      if (_t === nt)
        try {
          T = new m().parseFromString(Se, kn);
        } catch {}
      if (!T || !T.documentElement) {
        T = K.createDocument(_t, "template", null);
        try {
          T.documentElement.innerHTML = Rs ? I : Se;
        } catch {}
      }
      const Pe = T.body || T.documentElement;
      return (
        v &&
          V &&
          Pe.insertBefore(n.createTextNode(V), Pe.childNodes[0] || null),
        _t === nt
          ? ge.call(T, ut ? "html" : "body")[0]
          : ut
          ? T.documentElement
          : Pe
      );
    },
    ma = function (v) {
      return te.call(
        v.ownerDocument || v,
        v,
        d.SHOW_ELEMENT |
          d.SHOW_COMMENT |
          d.SHOW_TEXT |
          d.SHOW_PROCESSING_INSTRUCTION |
          d.SHOW_CDATA_SECTION,
        null
      );
    },
    ha = function (v) {
      return (
        v instanceof g &&
        (typeof v.nodeName != "string" ||
          typeof v.textContent != "string" ||
          typeof v.removeChild != "function" ||
          !(v.attributes instanceof f) ||
          typeof v.removeAttribute != "function" ||
          typeof v.setAttribute != "function" ||
          typeof v.namespaceURI != "string" ||
          typeof v.insertBefore != "function" ||
          typeof v.hasChildNodes != "function")
      );
    },
    va = function (v) {
      return typeof i == "function" && v instanceof i;
    };
  function wt(G, v, T) {
    ue[G] &&
      Dr(ue[G], (V) => {
        V.call(t, v, T, dn);
      });
  }
  const ya = function (v) {
      let T = null;
      if ((wt("beforeSanitizeElements", v, null), ha(v))) return ft(v), !0;
      const V = ke(v.nodeName);
      if (
        (wt("uponSanitizeElement", v, { tagName: V, allowedTags: le }),
        (v.hasChildNodes() &&
          !va(v.firstElementChild) &&
          Oe(/<[/\w]/g, v.innerHTML) &&
          Oe(/<[/\w]/g, v.textContent)) ||
          v.nodeType === Un.progressingInstruction ||
          (ln && v.nodeType === Un.comment && Oe(/<[/\w]/g, v.data)))
      )
        return ft(v), !0;
      if (!le[V] || ne[V]) {
        if (
          !ne[V] &&
          _a(V) &&
          ((F.tagNameCheck instanceof RegExp && Oe(F.tagNameCheck, V)) ||
            (F.tagNameCheck instanceof Function && F.tagNameCheck(V)))
        )
          return !1;
        if (A && !xe[V]) {
          const Se = P(v) || v.parentNode,
            Pe = R(v) || v.childNodes;
          if (Pe && Se) {
            const Me = Pe.length;
            for (let He = Me - 1; He >= 0; --He) {
              const gt = x(Pe[He], !0);
              (gt.__removalCount = (v.__removalCount || 0) + 1),
                Se.insertBefore(gt, C(v));
            }
          }
        }
        return ft(v), !0;
      }
      return (v instanceof c && !td(v)) ||
        ((V === "noscript" || V === "noembed" || V === "noframes") &&
          Oe(/<\/no(script|embed|frames)/i, v.innerHTML))
        ? (ft(v), !0)
        : (Tt &&
            v.nodeType === Un.text &&
            ((T = v.textContent),
            Dr([D, Y, oe], (Se) => {
              T = On(T, Se, " ");
            }),
            v.textContent !== T &&
              (jn(t.removed, { element: v.cloneNode() }), (v.textContent = T))),
          wt("afterSanitizeElements", v, null),
          !1);
    },
    xa = function (v, T, V) {
      if (w && (T === "id" || T === "name") && (V in n || V in ed)) return !1;
      if (!(we && !fe[T] && Oe(me, T))) {
        if (!(be && Oe(ye, T))) {
          if (!L[T] || fe[T]) {
            if (
              !(
                (_a(v) &&
                  ((F.tagNameCheck instanceof RegExp &&
                    Oe(F.tagNameCheck, v)) ||
                    (F.tagNameCheck instanceof Function &&
                      F.tagNameCheck(v))) &&
                  ((F.attributeNameCheck instanceof RegExp &&
                    Oe(F.attributeNameCheck, T)) ||
                    (F.attributeNameCheck instanceof Function &&
                      F.attributeNameCheck(T)))) ||
                (T === "is" &&
                  F.allowCustomizedBuiltInElements &&
                  ((F.tagNameCheck instanceof RegExp &&
                    Oe(F.tagNameCheck, V)) ||
                    (F.tagNameCheck instanceof Function && F.tagNameCheck(V))))
              )
            )
              return !1;
          } else if (!Ht[T]) {
            if (!Oe(_e, On(V, Ie, ""))) {
              if (
                !(
                  (T === "src" || T === "xlink:href" || T === "href") &&
                  v !== "script" &&
                  Vy(V, "data:") === 0 &&
                  dt[v]
                )
              ) {
                if (!(Xe && !Oe(Te, On(V, Ie, "")))) {
                  if (V) return !1;
                }
              }
            }
          }
        }
      }
      return !0;
    },
    _a = function (v) {
      return v !== "annotation-xml" && ai(v, q);
    },
    wa = function (v) {
      wt("beforeSanitizeAttributes", v, null);
      const { attributes: T } = v;
      if (!T) return;
      const V = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: L,
        forceKeepAttr: void 0,
      };
      let Se = T.length;
      for (; Se--; ) {
        const Pe = T[Se],
          { name: Me, namespaceURI: He, value: gt } = Pe,
          Mn = ke(Me);
        let je = Me === "value" ? gt : Uy(gt);
        if (
          ((V.attrName = Mn),
          (V.attrValue = je),
          (V.keepAttr = !0),
          (V.forceKeepAttr = void 0),
          wt("uponSanitizeAttribute", v, V),
          (je = V.attrValue),
          $ && (Mn === "id" || Mn === "name") && (Ar(Me, v), (je = M + je)),
          ln && Oe(/((--!?|])>)|<\/(style|title)/i, je))
        ) {
          Ar(Me, v);
          continue;
        }
        if (V.forceKeepAttr || (Ar(Me, v), !V.keepAttr)) continue;
        if (!In && Oe(/\/>/i, je)) {
          Ar(Me, v);
          continue;
        }
        Tt &&
          Dr([D, Y, oe], (Ca) => {
            je = On(je, Ca, " ");
          });
        const Sa = ke(v.nodeName);
        if (xa(Sa, Mn, je)) {
          if (
            N &&
            typeof p == "object" &&
            typeof p.getAttributeType == "function" &&
            !He
          )
            switch (p.getAttributeType(Sa, Mn)) {
              case "TrustedHTML": {
                je = N.createHTML(je);
                break;
              }
              case "TrustedScriptURL": {
                je = N.createScriptURL(je);
                break;
              }
            }
          try {
            He ? v.setAttributeNS(He, Me, je) : v.setAttribute(Me, je),
              ha(v) ? ft(v) : oi(t.removed);
          } catch {}
        }
      }
      wt("afterSanitizeAttributes", v, null);
    },
    nd = function G(v) {
      let T = null;
      const V = ma(v);
      for (wt("beforeSanitizeShadowDOM", v, null); (T = V.nextNode()); )
        wt("uponSanitizeShadowNode", T, null),
          !ya(T) && (T.content instanceof o && G(T.content), wa(T));
      wt("afterSanitizeShadowDOM", v, null);
    };
  return (
    (t.sanitize = function (G) {
      let v =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        T = null,
        V = null,
        Se = null,
        Pe = null;
      if (((Rs = !G), Rs && (G = "<!-->"), typeof G != "string" && !va(G)))
        if (typeof G.toString == "function") {
          if (((G = G.toString()), typeof G != "string"))
            throw Ln("dirty is not a string, aborting");
        } else throw Ln("toString is not a function");
      if (!t.isSupported) return G;
      if (
        (Sr || As(v), (t.removed = []), typeof G == "string" && (z = !1), z)
      ) {
        if (G.nodeName) {
          const gt = ke(G.nodeName);
          if (!le[gt] || ne[gt])
            throw Ln("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (G instanceof i)
        (T = pa("<!---->")),
          (V = T.ownerDocument.importNode(G, !0)),
          (V.nodeType === Un.element && V.nodeName === "BODY") ||
          V.nodeName === "HTML"
            ? (T = V)
            : T.appendChild(V);
      else {
        if (!zt && !Tt && !ut && G.indexOf("<") === -1)
          return N && _ ? N.createHTML(G) : G;
        if (((T = pa(G)), !T)) return zt ? null : _ ? I : "";
      }
      T && Cr && ft(T.firstChild);
      const Me = ma(z ? G : T);
      for (; (Se = Me.nextNode()); )
        ya(Se) || (Se.content instanceof o && nd(Se.content), wa(Se));
      if (z) return G;
      if (zt) {
        if (h)
          for (Pe = U.call(T.ownerDocument); T.firstChild; )
            Pe.appendChild(T.firstChild);
        else Pe = T;
        return (
          (L.shadowroot || L.shadowrootmode) && (Pe = ce.call(r, Pe, !0)), Pe
        );
      }
      let He = ut ? T.outerHTML : T.innerHTML;
      return (
        ut &&
          le["!doctype"] &&
          T.ownerDocument &&
          T.ownerDocument.doctype &&
          T.ownerDocument.doctype.name &&
          Oe(qu, T.ownerDocument.doctype.name) &&
          (He =
            "<!DOCTYPE " +
            T.ownerDocument.doctype.name +
            `>
` +
            He),
        Tt &&
          Dr([D, Y, oe], (gt) => {
            He = On(He, gt, " ");
          }),
        N && _ ? N.createHTML(He) : He
      );
    }),
    (t.setConfig = function () {
      let G =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      As(G), (Sr = !0);
    }),
    (t.clearConfig = function () {
      (dn = null), (Sr = !1);
    }),
    (t.isValidAttribute = function (G, v, T) {
      dn || As({});
      const V = ke(G),
        Se = ke(v);
      return xa(V, Se, T);
    }),
    (t.addHook = function (G, v) {
      typeof v == "function" && ((ue[G] = ue[G] || []), jn(ue[G], v));
    }),
    (t.removeHook = function (G) {
      if (ue[G]) return oi(ue[G]);
    }),
    (t.removeHooks = function (G) {
      ue[G] && (ue[G] = []);
    }),
    (t.removeAllHooks = function () {
      ue = {};
    }),
    t
  );
}
var nx = Ku();
const rx = ({ htmlString: e }) => {
    const [t, n] = u.useState("");
    return (
      u.useEffect(() => {
        if (!e) {
          n("");
          return;
        }
        const r = (i) => {
            const d = new DOMParser().parseFromString(i, "text/html");
            return (
              [
                ...Array.from(d.querySelectorAll("link")),
                ...Array.from(d.querySelectorAll("style")),
                ...Array.from(d.querySelectorAll("script")),
              ].forEach((g) => {
                var m;
                return (m = g.parentNode) == null ? void 0 : m.removeChild(g);
              }),
              d.body.innerHTML
            );
          },
          s = (i) => nx.sanitize(i, { USE_PROFILES: { html: !0 } }),
          o = r(e),
          a = s(o);
        n(a);
      }, [e]),
      l.jsx("div", { dangerouslySetInnerHTML: { __html: t } })
    );
  },
  sx = ({ course: e, assignment: t }) =>
    l.jsxs(la, {
      className: "mb-6",
      children: [
        l.jsxs(ca, {
          children: [
            l.jsx("h2", { className: "text-xl font-bold", children: t.name }),
            l.jsx("p", { className: "text-gray-600", children: e.name }),
          ],
        }),
        l.jsxs(ua, {
          children: [
            l.jsx(rx, { htmlString: t.description }),
            t.due_at &&
              l.jsxs("caption", {
                className: "mt-2 text-gray-500",
                children: [
                  "Due Date: ",
                  new Date(t.due_at).toLocaleDateString(),
                ],
              }),
          ],
        }),
      ],
    }),
  ox = ({ onSearch: e, onFilter: t }) =>
    l.jsx("div", {
      className:
        "flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0",
      children: l.jsx(fr, {
        placeholder: "Search by student name",
        onChange: (n) => e(n.target.value),
        className: "w-full md:w-1/3",
      }),
    }),
  ax = ({ initialFeedback: e, onSave: t }) => {
    const [n, r] = u.useState(!1),
      [s, o] = u.useState(e);
    u.useEffect(() => {
      o(e);
    }, [e]);
    const a = () => {
        t(s), r(!1);
      },
      i = () => {
        o(e), r(!1);
      };
    return l.jsx("div", {
      children: n
        ? l.jsxs("div", {
            className: "flex flex-col space-y-2",
            children: [
              l.jsx(Xd, {
                value: s,
                onChange: (c) => o(c.target.value),
                className: "w-full",
                rows: 4,
              }),
              l.jsxs("div", {
                className: "flex space-x-2",
                children: [
                  l.jsx(ve, { onClick: a, children: "Save" }),
                  l.jsx(ve, {
                    variant: "secondary",
                    onClick: i,
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          })
        : l.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              l.jsx("p", { className: "text-sm", children: s }),
              l.jsx(ve, {
                variant: "outline",
                size: "sm",
                onClick: () => r(!0),
                children: "Edit",
              }),
            ],
          }),
    });
  },
  ix = ({ initialScore: e, onSave: t }) => {
    const [n, r] = u.useState(e),
      s = (o) => {
        const a = Number(o.target.value);
        r(a), t(a);
      };
    return l.jsx("div", {
      children: l.jsx("div", {
        className: "flex flex-col space-y-2",
        children: l.jsx(fr, { type: "number", value: n, onChange: s }),
      }),
    });
  },
  lx = ({
    feedbacks: e,
    submissions: t,
    acceptedSubmissions: n,
    taskId: r,
    onAccept: s,
    onReject: o,
    getStudentName: a,
  }) => {
    const i = (d, f) => {
        chrome.runtime.sendMessage({
          type: tf,
          payload: { taskId: r, userId: d, feedback: f },
        });
      },
      c = (d, f) => {
        chrome.runtime.sendMessage({
          type: nf,
          payload: { taskId: r, userId: d, score: f },
        });
      };
    return l.jsxs(Qo, {
      className: "mb-6",
      children: [
        l.jsx(ea, {
          children: l.jsxs(Cn, {
            children: [
              l.jsx(qt, { children: "Student Name" }),
              l.jsx(qt, { children: "Submission" }),
              l.jsx(qt, { children: "AI Grade" }),
              l.jsx(qt, { children: "AI Feedback" }),
              l.jsx(qt, { children: "Actions" }),
            ],
          }),
        }),
        l.jsx(ta, {
          children: t.map((d) => {
            const f = e[d.user_id],
              g = n.has(d.user_id),
              m = `accept-${d.id}`;
            return l.jsxs(
              Cn,
              {
                className: "hover:bg-gray-50",
                children: [
                  l.jsx(Pt, { children: a(d.user_id) }),
                  l.jsx(Pt, {
                    children: d.preview_url
                      ? l.jsx("a", {
                          href: d.preview_url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-blue-500 underline",
                          children: "View Submission",
                        })
                      : "No submission URL",
                  }),
                  l.jsx(Pt, {
                    children: l.jsx(ix, {
                      initialScore: f.score,
                      onSave: (p) => c(d.user_id, p),
                    }),
                  }),
                  l.jsx(Pt, {
                    children: l.jsx(ax, {
                      initialFeedback: f.feedback,
                      onSave: (p) => i(d.user_id, p),
                    }),
                  }),
                  l.jsx(Pt, {
                    children: l.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        l.jsx(ts, {
                          id: m,
                          checked: g,
                          onCheckedChange: (p) =>
                            p ? s(d.user_id) : o(d.user_id),
                        }),
                        l.jsx("label", {
                          htmlFor: m,
                          className:
                            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                          children: "Accept",
                        }),
                      ],
                    }),
                  }),
                ],
              },
              d.id
            );
          }),
        }),
      ],
    });
  },
  cx = ({ currentPage: e, totalPages: t, onPageChange: n }) =>
    l.jsxs("div", {
      className: "flex justify-center items-center space-x-2 mt-4",
      children: [
        l.jsx(ve, {
          variant: "secondary",
          onClick: () => n(e - 1),
          disabled: e === 1,
          children: "Previous",
        }),
        l.jsxs("span", { children: ["Page ", e, " of ", t] }),
        l.jsx(ve, {
          variant: "secondary",
          onClick: () => n(e + 1),
          disabled: e === t,
          children: "Next",
        }),
      ],
    }),
  ux = ({ onUpload: e, onAcceptAll: t, onRejectAll: n, hasAccepted: r }) =>
    l.jsx(l.Fragment, {
      children: l.jsxs("div", {
        className: "flex justify-end space-x-4 mt-4",
        children: [
          l.jsx(ve, {
            variant: "secondary",
            onClick: t,
            children: "Accept All",
          }),
          l.jsx(ve, {
            variant: "secondary",
            onClick: n,
            children: "Cancel All",
          }),
          l.jsxs($o, {
            children: [
              l.jsx(Al, {
                asChild: !0,
                children: l.jsx(ve, {
                  disabled: !r,
                  children: "Submit to Canvas",
                }),
              }),
              l.jsxs(us, {
                children: [
                  l.jsxs(ds, {
                    children: [
                      l.jsx(gs, { children: "Confirm Submit" }),
                      l.jsx(ps, {
                        children:
                          "Are you sure you want to submit the accepted grades and feedback to Canvas?",
                      }),
                    ],
                  }),
                  l.jsxs(fs, {
                    children: [
                      l.jsx(hs, { children: "Cancel" }),
                      l.jsx(ms, { onClick: e, children: "Confirm" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  eo = 10,
  dx = ({ task: e, onClose: t }) => {
    const { submissions: n } = e.request,
      [r, s] = u.useState(""),
      [o, a] = u.useState(""),
      [i, c] = u.useState(null),
      [d, f] = u.useState(new Set()),
      [g, m] = u.useState(1),
      [p, y] = u.useState(0);
    u.useEffect(() => {
      document.title = e.request.assignment.name + " - Feedback Preview";
    }, []);
    const x = u.useMemo(() => {
        let D = n;
        if (r.trim()) {
          const Y = r.toLowerCase();
          D = D.filter((oe) => ge(oe.user_id).toLowerCase().includes(Y));
        }
        return o && (D = D.filter((Y) => Y.workflow_state === o)), D;
      }, [n, r, o]),
      S = Math.ceil(x.length / eo),
      C = u.useMemo(() => {
        const D = (g - 1) * eo;
        return x.slice(D, D + eo);
      }, [x, g]),
      R = u.useCallback((D) => {
        s(D), m(1);
      }, []),
      P = u.useCallback((D) => {
        a(D), m(1);
      }, []),
      N = u.useCallback((D) => {
        f((Y) => new Set(Y.add(D)));
      }, []),
      I = u.useCallback((D) => {
        f((Y) => {
          const oe = new Set(Y);
          return oe.delete(D), oe;
        });
      }, []),
      K = u.useCallback(() => {
        f(new Set(x.map((D) => D.user_id)));
      }, [x, e]),
      te = u.useCallback(() => {
        f(new Set());
      }, []),
      U = u.useCallback(async () => {
        try {
          if (
            !(
              await chrome.runtime.sendMessage({
                type: rf,
                payload: { taskId: e.id, users: Array.from(d) },
              })
            ).success
          )
            throw new Error("Failed to upload to Canvas.");
          c({
            message: "Grades and feedback successfully uploaded to Canvas.",
            type: "success",
          }),
            f(new Set());
        } catch {
          c({
            message: "Failed to upload to Canvas. Please try again.",
            type: "error",
          });
        }
      }, [d]),
      ge = u.useCallback((D) => `User ${D}`, []),
      ce = u.useCallback(
        async (D) => {
          p === 0 &&
            (y(D),
            await chrome.runtime.sendMessage({
              type: sf,
              payload: { taskId: e.id, score: D },
            }));
        },
        [e]
      ),
      ue = d.size > 0;
    return l.jsxs("div", {
      className: "p-8",
      children: [
        i &&
          l.jsx(Dy, {
            message: i.message,
            type: i.type,
            onClose: () => c(null),
          }),
        l.jsxs("div", {
          className: "flex flex-row justify-between",
          children: [
            l.jsx("button", {
              onClick: t,
              className: "text-blue-600 hover:underline mb-4",
              children: "← Back",
            }),
            l.jsxs("div", {
              className: "gap-3 mr-3",
              children: [
                p >= 0 &&
                  l.jsx(ve, {
                    onClick: () => ce(1),
                    "aria-label": "Good Response",
                    variant: "ghost",
                    size: "icon",
                    className: "size-8",
                    disabled: p !== 0,
                    children: l.jsx(ff, { color: p === 1 ? "green" : "gray" }),
                  }),
                p <= 0 &&
                  l.jsx(ve, {
                    onClick: () => ce(0),
                    "aria-label": "Settings",
                    variant: "ghost",
                    size: "icon",
                    className: "size-8",
                    disabled: p !== 0,
                    children: l.jsx(df, { color: p === -1 ? "red" : "gray" }),
                  }),
              ],
            }),
          ],
        }),
        l.jsx(sx, {
          course: e.request.course,
          assignment: e.request.assignment,
        }),
        l.jsx(ox, { onSearch: R, onFilter: P }),
        e.details.result &&
          l.jsx(lx, {
            submissions: C,
            feedbacks: e.details.result,
            taskId: e.id,
            acceptedSubmissions: d,
            onAccept: N,
            onReject: I,
            getStudentName: ge,
          }),
        S > 1 && l.jsx(cx, { currentPage: g, totalPages: S, onPageChange: m }),
        l.jsx(ux, {
          onUpload: U,
          onAcceptAll: K,
          onRejectAll: te,
          hasAccepted: ue,
        }),
      ],
    });
  },
  fx = ({ data: e }) => {
    const t = e.length,
      n = e.filter((o) => o.details.status === mt.SUCCESS).length,
      r = e.filter(
        (o) =>
          o.details.status === mt.PENDING || o.details.status === mt.STARTED
      ).length,
      s = [
        {
          title: "Total",
          value: t,
          icon: l.jsx(Rd, {
            className: "text-blue-500 w-6 h-6",
            "aria-hidden": "true",
          }),
          color: "bg-blue-100",
        },
        {
          title: "Ready",
          value: n,
          icon: l.jsx(ss, {
            className: "text-green-500 w-6 h-6",
            "aria-hidden": "true",
          }),
          color: "bg-green-100",
        },
        {
          title: "Queued",
          value: r,
          icon: l.jsx(Ed, {
            className: "text-yellow-500 w-6 h-6",
            "aria-hidden": "true",
          }),
          color: "bg-yellow-100",
        },
      ];
    return l.jsx("div", {
      className: "flex flex-wrap gap-4 p-2",
      children: s.map((o) =>
        l.jsxs(
          la,
          {
            className: "flex flex-col items-center justify-between p-1",
            style: { width: "165px" },
            role: "region",
            "aria-labelledby": `${o.title}-title`,
            children: [
              l.jsx(ca, {
                className: "w-full flex items-center justify-between",
                children: l.jsx(Hu, {
                  id: `${o.title}-title`,
                  className: "text-lg font-semibold",
                  children: o.title,
                }),
              }),
              l.jsx(ua, {
                className: "mt-2",
                children: l.jsxs(wi, {
                  className:
                    "text-2xl font-bold text-gray-800 flex items-center justify-center gap-2",
                  children: [o.value, o.icon],
                }),
              }),
            ],
          },
          o.title
        )
      ),
    });
  };
function gx() {
  const [e, t] = u.useState([]),
    [n, r] = u.useState(),
    s = u.useCallback(async () => {
      try {
        const c = ((await Rt.getItem(of)) || []).map((d) => ({
          ...d,
          createdAt: new Date(d.createdAt),
        }));
        t(c);
      } catch (i) {
        return (
          console.error("GradingTaskRepository: Error fetching tasks:", i), []
        );
      }
    }, []);
  u.useEffect(() => {
    const i = (c) => {
      c.type === lf && s(), c.type === No && r(c.payload);
    };
    return (
      (document.title = "Dashboard"),
      (async () => await chrome.runtime.sendMessage({ type: af }))(),
      s(),
      chrome.runtime.onMessage.addListener(i),
      () => {
        chrome.runtime.onMessage.removeListener(i);
      }
    );
  }, []);
  const o = () => {
      window.location.hash = "";
    },
    a = () => {
      r(void 0);
    };
  return n
    ? l.jsx(dx, { task: n, onClose: a })
    : l.jsxs(l.Fragment, {
        children: [
          l.jsxs("header", {
            className:
              "fixed top-0 w-full flex justify-between items-center h-16 p-4 bg-white z-10 border-b border-gray-200",
            children: [
              l.jsxs("div", {
                className: "flex items-center",
                children: [
                  l.jsx("img", {
                    src: fi,
                    alt: "Icon",
                    className: "w-8 h-8 mr-2",
                  }),
                  l.jsx("span", {
                    className: "text-xl font-bold text-gray-800",
                    children: gi.name,
                  }),
                ],
              }),
              l.jsx(ve, {
                onClick: o,
                variant: "secondary",
                children: "Back to Settings",
              }),
            ],
          }),
          l.jsxs("div", {
            className:
              "hidden h-full flex-1 flex-col space-y-8 p-8 md:flex mt-16",
            children: [
              l.jsxs("div", {
                className: "flex items-center justify-between space-y-2",
                children: [
                  l.jsxs("div", {
                    children: [
                      l.jsx("h2", {
                        className: "text-2xl font-bold tracking-tight",
                        children: "Automated Feedback and Grading",
                      }),
                      l.jsx("p", {
                        className: "text-muted-foreground",
                        children:
                          "See personalized AI feedback and grading for your assignments",
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "flex items-center space-x-2",
                    children: l.jsx(Py, {}),
                  }),
                ],
              }),
              l.jsx(fx, { data: e }),
              l.jsx(Ny, { data: e, columns: jm }),
            ],
          }),
        ],
      });
}
const px = () => {
  const [e, t] = u.useState(null),
    [n, r] = u.useState(window.location.hash),
    [s, o] = u.useState(!0);
  u.useEffect(() => {
    const c = async () => {
      try {
        const g = await chrome.runtime.sendMessage({ type: cf });
        g && (window.location.hash = g);
      } catch (g) {
        console.error("Options: Failed to load options data:", g);
      }
    };
    window.location.hash || c(),
      (async () => {
        try {
          const g = await Rt.getItem(Ur);
          t(g);
        } catch (g) {
          t(null),
            console.error("Options: Failed to load settings:", g),
            Wt.error("Failed to load settings.");
        } finally {
          o(!1);
        }
      })();
    const f = () => {
      r(window.location.hash);
    };
    return (
      window.addEventListener("hashchange", f),
      () => {
        window.removeEventListener("hashchange", f);
      }
    );
  }, []),
    u.useEffect(() => {
      window.location.hash || (document.title = "FeedbackAI Settings");
    }, [n]);
  const a = async (c, d) => {
      try {
        return await uf.validateSettings(c, d);
      } catch {
        throw new Error("Invalid token or base URL");
      }
    },
    i = async (c) => {
      if (c === null) {
        try {
          t(null), await Rt.clearAll(), Wt.success("Settings have been reset");
        } catch (d) {
          console.error("Options: Failed to reset settings:", d),
            Wt.error("Failed to reset settings");
        }
        return;
      }
      try {
        const d = await a(c.token, c.baseURL);
        await Rt.clearAll(),
          await Rt.setItem(Ur, c),
          await Rt.setItem(Mi, d),
          t(c),
          Wt.success("Settings saved successfully");
      } catch (d) {
        console.error("Options: Failed to save settings:", d),
          Wt.error(
            "Error saving settings. Please check your token and base URL."
          );
      }
    };
  return s
    ? l.jsx(l.Fragment, {})
    : n.startsWith("#task")
    ? l.jsx(gx, {})
    : l.jsxs(l.Fragment, {
        children: [l.jsx(rp, { initialData: e, onSave: i }), l.jsx(Jd, {})],
      });
};
function mx() {
  const e = document.querySelector("#__root");
  if (!e) throw new Error("Can't find Options root element");
  Ad(e).render(l.jsx(px, {}));
}
mx();
