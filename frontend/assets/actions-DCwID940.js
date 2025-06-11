import { c as s } from "./grading-BF2zApe_.js";
import { a as r, G as n, B as o } from "./GradingRepository-DZXIIiP0.js";
const p = async (e) => {
    try {
      console.log("HELLO");
      console.log("Data before grading:", JSON.stringify(e, null, 2));
      const t = await new r(new n()).initiateGrading(e);
      return chrome.runtime.sendMessage({ type: s }), { success: !0, task: t };
    } catch (a) {
      return { success: !1, error: a };
    }
  },
  u = async (e) => {
    const a = new FormData();
    return (
      a.append("file", e),
      (
        await (
          await fetch(`${o}/documents/upload`, { method: "POST", body: a })
        ).json()
      ).pdf_id
    );
  };
export { p as i, u };
