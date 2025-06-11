const c = "settings",
  n = "user",
  E = "courses",
  i = "assignments",
  l = "toggleInjection",
  S = "gradingTaskKey",
  T = "refreshData",
  m = "reloadAssignments",
  g = "pollTaskStatuses",
  A = "getTasksByAssignment",
  _ = "getTasksByCourse",
  u = "openOptionsPage",
  I = "getOptionsData",
  h = "getAllTasks",
  D = "deleteTask",
  O = "deleteTasks",
  C = "tasksUpdated",
  K = "getSubmissions",
  d = "viewTask",
  N = "submitGrade",
  R = "editFeedback",
  P = "editScore",
  U = "checkIsTeacher",
  G = "scoreEvaluation";
class L {
  static setItem(e, s) {
    return new Promise((o, t) => {
      chrome.storage.local.set({ [e]: s }, () => {
        chrome.runtime.lastError
          ? t(
              new Error(
                `Failed to set "${e}" in storage: ${chrome.runtime.lastError.message}`
              )
            )
          : o();
      });
    });
  }
  static getItem(e) {
    return new Promise((s, o) => {
      chrome.storage.local.get(e, (t) => {
        chrome.runtime.lastError
          ? o(
              new Error(
                `Failed to get "${e}" from storage: ${chrome.runtime.lastError.message}`
              )
            )
          : e in t
          ? s(t[e])
          : s(null);
      });
    });
  }
  static async getActiveTabUrl() {
    try {
      const s = (await chrome.tabs.query({ active: !0, currentWindow: !0 }))[0];
      return (s == null ? void 0 : s.url) ?? null;
    } catch (e) {
      return (
        console.error("ChromeService: Error retrieving active tab URL:", e),
        null
      );
    }
  }
  static clearAll() {
    return new Promise((e, s) => {
      chrome.storage.local.clear(() => {
        chrome.runtime.lastError
          ? s(
              new Error(
                `Failed to clear local storage: ${chrome.runtime.lastError.message}`
              )
            )
          : chrome.storage.sync.clear(() => {
              chrome.runtime.lastError
                ? s(
                    new Error(
                      `Failed to clear sync storage: ${chrome.runtime.lastError.message}`
                    )
                  )
                : (chrome.action.setBadgeText({ text: "!" }), e());
            });
      });
    });
  }
}
var a = ((r) => (
  (r.SUCCESS = "SUCCESS"),
  (r.PENDING = "PENDING"),
  (r.FAILURE = "FAILURE"),
  (r.STARTED = "STARTED"),
  r
))(a || {});
export {
  L as C,
  O as D,
  P as E,
  A as G,
  u as O,
  g as P,
  m as R,
  G as S,
  l as T,
  d as V,
  U as a,
  n as b,
  C as c,
  R as d,
  K as e,
  N as f,
  a as g,
  D as h,
  h as i,
  I as j,
  _ as k,
  T as l,
  S as m,
  E as n,
  i as o,
  c as u,
};
