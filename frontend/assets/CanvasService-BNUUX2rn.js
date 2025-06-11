var l = Object.defineProperty;
var w = (u, e, s) =>
  e in u
    ? l(u, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (u[e] = s);
var g = (u, e, s) => w(u, typeof e != "symbol" ? e + "" : e, s);
import { C as m, n as y, o as p } from "./grading-BF2zApe_.js";
class h {
  constructor(e, s) {
    g(this, "baseURL");
    g(this, "token");
    (this.baseURL = e), (this.token = s);
  }
  static async create() {
    const e = await m.getItem("settings");
    if (!e) throw new Error("Settings not found in storage");
    const { baseURL: s, token: t } = e;
    return new h(s, t);
  }
  static async validateSettings(e, s) {
    return await new h(s, e).getUser();
  }
  async request(e, s = {}, t = {}) {
    try {
      const r = `${this.baseURL}/api/v1${e}`,
        n = new URL(r),
        [, i] = e.split("?");
      i &&
        new URLSearchParams(i).forEach((c, d) => {
          n.searchParams.append(d, c);
        }),
        Object.entries(s).forEach(([o, c]) => {
          n.searchParams.append(o, String(c));
        }),
        n.searchParams.has("per_page") ||
          n.searchParams.set("per_page", "1000");
      const a = await fetch(n.toString(), {
        ...t,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
          ...t.headers,
        },
      });
      if (!a.ok) {
        const o = await a.text();
        throw new Error(`HTTP error! status: ${a.status}, message: ${o}`);
      }
      return await a.json();
    } catch (r) {
      throw r instanceof Error
        ? new Error(`DataService Request Failed: ${r.message}`)
        : new Error("An unknown error occurred during DataService request.");
    }
  }
  async getUser(e) {
    const s = e ? `/users/${e}` : "/users/self";
    return await this.request(s);
  }
  async getCourses(e = {}) {
    return this.request("/courses", e);
  }
  async getCourse(e, s = {}) {
    return this.request(`/courses/${e}`, s);
  }
  async getAssignment(e, s, t = {}) {
    return this.request(`/courses/${e}/assignments/${s}`, t);
  }
  async getAssignments(e, s = {}) {
    return this.request(`/courses/${e}/assignments`, s);
  }
  async getSubmissions(e, s, t = {}) {
    return this.request(`/courses/${e}/assignments/${s}/submissions`, t);
  }
  async getTeachingCourses() {
    const [e, s] = await Promise.all([
        this.request("/courses", {
          enrollment_type: "teacher",
          enrollment_state: "active",
          "include[]": "needs_grading_count",
        }),
        this.request("/courses", {
          enrollment_type: "ta",
          enrollment_state: "active",
          "include[]": "needs_grading_count",
        }),
      ]),
      t = new Map();
    return (
      [...e, ...s].forEach((r) => {
        t.set(r.id, r);
      }),
      Array.from(t.values())
    );
  }
  async getAssignmentsData(e) {
    const s = e.map((i) =>
        this.request(`/courses/${i.id}/assignments`, {
          "include[]": "needs_grading_count",
        }).then((a) => ({ courseId: i.id, assignments: a }))
      ),
      t = await Promise.all(s);
    let r = 0;
    const n = {};
    return (
      t.forEach(({ courseId: i, assignments: a }) => {
        const o = a.filter((c) =>
          c.needs_grading_count ? ((r += c.needs_grading_count), !0) : !1
        );
        n[i] = o;
      }),
      { assignmentsByCourse: n, totalNeedsGradingCount: r }
    );
  }
  async refreshData() {
    try {
      const e = await this.getTeachingCourses(),
        { totalNeedsGradingCount: s, assignmentsByCourse: t } =
          await this.getAssignmentsData(e);
      await m.setItem(y, e), await m.setItem(p, t);
      const r = s > 99 ? "99+" : s > 0 ? s.toString() : "";
      await chrome.action.setBadgeText({ text: r });
    } catch {
      await chrome.action.setBadgeText({ text: "" });
    }
  }
  async getCanvasData(e, s = {}) {
    return this.request(e, s);
  }
  async submitGrade({
    courseId: e,
    assignmentId: s,
    userId: t,
    grade: r,
    comment: n,
  }) {
    await this.request(
      `/courses/${e}/assignments/${s}/submissions/${t}`,
      {},
      {
        method: "PUT",
        body: JSON.stringify({
          submission: { posted_grade: r },
          comment: { text_comment: n },
        }),
      }
    );
  }
}
export { h as C };
