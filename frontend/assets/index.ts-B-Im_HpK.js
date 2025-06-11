var f = Object.defineProperty;
var O = (r, e, s) =>
  e in r
    ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (r[e] = s);
var k = (r, e, s) => O(r, typeof e != "symbol" ? e + "" : e, s);
import { G as L, a as D } from "./GradingRepository-DZXIIiP0.js";
import {
  C as m,
  b as M,
  T as B,
  R as T,
  P as S,
  c as n,
  S as G,
  a as C,
  E as N,
  d as P,
  e as U,
  f as K,
  g as z,
  V as v,
  D as F,
  h as x,
  i as V,
  j as H,
  O as j,
  k as q,
  G as Y,
  l as E,
} from "./grading-BF2zApe_.js";
import { C as J } from "./CanvasService-BNUUX2rn.js";
console.log("Service worker code loaded and running");
const R = 30,
  W = 1;
class Q {
  constructor(e, s) {
    k(this, "optionsData", "");
    (this.canvasService = e), (this.gradingService = s);
  }
  async initialize() {
    try {
      console.log("Initializing BackgroundService...");
      this.setupEventListeners(),
        this.initializeAlarms(),
        await this.setupInitialData();
      console.log("BackgroundService initialized successfully.");
    } catch (e) {
      console.error("BackgroundService: Initialization failed:", e);
    }
  }
  async setupInitialData() {
    console.log("SHHHHHHHHHHHHHHH");
    try {
      console.log("Fetching user data...");
      const e = await this.canvasService.getUser();
      console.log("User data fetched:", e);
      await m.setItem(M, e), await this.canvasService.refreshData();
      console.log("Refreshing Canvas data...");
    } catch {}
  }
  setupEventListeners() {
    chrome.runtime.onInstalled.addListener(this.handleOnInstalled.bind(this)),
      chrome.alarms.onAlarm.addListener(this.handleAlarm.bind(this)),
      chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));
  }
  handleOnInstalled(e) {
    e.reason === chrome.runtime.OnInstalledReason.INSTALL &&
      (chrome.runtime.openOptionsPage().catch((s) => {
        console.error("BackgroundService: Failed to open options page:", s);
      }),
      m
        .setItem(B, !0)
        .catch((s) =>
          console.error("BackgroundService: Failed to enable injection:", s)
        ));
  }
  initializeAlarms() {
    console.log("Setting up alarms...");
    chrome.alarms.create(T, { periodInMinutes: R }),
      chrome.alarms.create(S, { periodInMinutes: W });
    console.log("Alarms created: ", T, " and ", S);
  }
  async handleAlarm(e) {
    console.log("Alarm triggered:", e.name);
    try {
      switch (e.name) {
        case T:
          console.log("Refreshing data...");
          await this.canvasService.refreshData();
          break;
        case S:
          console.log("Updating pending tasks...");
          await this.gradingService.updatePendingTask(),
            chrome.runtime.sendMessage({ type: n });
          break;
        default:
          console.warn("BackgroundService: Unknown alarm:", e);
      }
    } catch (s) {
      console.error("BackgroundService: Error handling alarm:", s);
    }
  }
  handleMessage(e, s, a) {
    console.log("Message received:", e.type, e.payload);
    console.log("Sender info:", s);
    console.log("Is response callback a function?", typeof a === "function");
    return (
      (async () => {
        try {
          switch (e.type) {
            case E:
              console.log("Refreshing data in response to message...");
              await this.canvasService.refreshData(),
                a(!0),
                chrome.runtime.sendMessage({ type: E });
              break;
            case Y:
              const u = await this.gradingService.getTasksByAssignment(
                e.payload
              );
              a({ success: !0, tasks: u });
              break;
            case q:
              const I = await this.gradingService.getTasksByCourse(e.payload);
              a({ success: !0, tasks: I });
              break;
            case S:
              await this.gradingService.updatePendingTask(),
                a({ success: !0 }),
                chrome.runtime.sendMessage({ type: n });
              break;
            case j:
              (this.optionsData = e.payload), chrome.runtime.openOptionsPage();
              break;
            case H:
              a(this.optionsData);
              break;
            case V:
              const y = await this.gradingService.getTasks();
              a({ success: !0, tasks: y });
              break;
            case x:
              await this.gradingService.deleteTask(e.payload),
                a({ success: !0 }),
                chrome.runtime.sendMessage({ type: n });
              break;
            case F:
              const p = e.payload;
              await this.gradingService.deleteTasks(p),
                a({ success: !0 }),
                chrome.runtime.sendMessage({ type: n });
              break;
            case v:
              const o = await this.gradingService.getTask(e.payload);
              if (!o) {
                a({ success: !1, error: "Task not found" });
                break;
              }
              a({ success: !0 }),
                chrome.runtime.sendMessage({ type: v, payload: o }),
                (o.isViewed = !0),
                this.gradingService.updateTask(o.id, o);
              break;
            case K:
              {
                console.log("HERE!!!!!!");
                const { taskId: i, users: c } = e.payload,
                  t = await this.gradingService.getTask(i);
                if (!t || t.details.status !== z.SUCCESS) {
                  a({ success: !1, error: "Task not found" });
                  break;
                }
                const l = t.details.result,
                  h = [];
                c.forEach((d) => {
                  if (l[d]) {
                    const g = l[d];
                    h.push({
                      courseId: t.request.course.id,
                      assignmentId: t.request.assignment.id,
                      userId: d,
                      grade: g.score,
                      comment: g.feedback,
                    });
                  }
                }),
                  await Promise.all(
                    h.map((d) => this.canvasService.submitGrade(d))
                  ),
                  a({ success: !0 });
              }
              break;
            case U:
              console.log("MADE IT");
              const {
                  courseId: A,
                  assignmentId: b,
                  params: w = {},
                } = e.payload,
                _ = await this.canvasService.getSubmissions(A, b, w);
              console.log("Sending response back with submissions:", _);
              a({ success: !0, submissions: _ });
              break;
            case P:
              {
                const { taskId: i, userId: c, feedback: t } = e.payload;
                await this.gradingService.editFeedback(i, c, t);
              }
              break;
            case N:
              {
                const { taskId: i, userId: c, score: t } = e.payload;
                await this.gradingService.editScore(i, c, t);
              }
              break;
            case C:
              {
                const i = e.payload,
                  c = await this.canvasService.getCourse(i),
                  { type: t } = c.enrollments[0];
                a({ success: !0, isTeacher: t === "teacher" || t === "ta" });
              }
              break;
            case G:
              {
                const { taskId: i, score: c } = e.payload;
                await this.gradingService.scoreEvaluation(i, c);
              }
              break;
            case n:
              chrome.runtime.sendMessage({ type: n });
              break;
            default:
              a({ success: !1, error: "Unknown message type" });
          }
        } catch (u) {
          console.error("BackgroundService: Error refreshing data:", u),
            a({ success: !1, error: u });
        }
      })(),
      !0
    );
  }
}
const X = async () => {
    console.log("Creating services...");
    try {
      const r = await J.create(),
        e = new L(),
        s = new D(e);
      console.log(
        "Services created successfully. Initializing BackgroundService..."
      );
      await new Q(r, s).initialize();
      console.log("Background services initialized.");
    } catch {
      chrome.action.setBadgeText({ text: "!" });
    }
  },
  Z = () => {
    console.log("Setting up onInstalled listener...");
    chrome.runtime.onInstalled.addListener((r) => {
      r.reason === chrome.runtime.OnInstalledReason.INSTALL &&
        chrome.runtime.openOptionsPage();
    }),
      X();
  };
Z();
export { X as initializeBackgroundServices };
