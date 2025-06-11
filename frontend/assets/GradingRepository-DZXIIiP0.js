import { g as n, C as d, m as c } from "./grading-BF2zApe_.js";
const o = "http://localhost:8000/api/v1";
class T {
  constructor(s) {
    this.repository = s;
  }
  async initiateGrading(s) {
    console.log("[Function Called] initiateGrading with argument:", s);
    try {
      const t = {
        id: (await this.postData(`${o}/grading/generate`, s)).task_id,
        request: s,
        details: { status: n.PENDING, result: null, traceback: null },
        createdAt: new Date(),
        isViewed: !1,
      };
      return await this.repository.addTask(t), t;
    } catch (a) {
      throw (console.error("ServerAPI: Error grading assignment:", a), a);
    }
  }
  async updatePendingTask() {
    try {
      const a = (await this.repository.getAllTasks())
        .filter(
          (t) =>
            t.details.status === n.PENDING || t.details.status === n.STARTED
        )
        .map(async (t) => {
          try {
            const e = await this.fetchData(`${o}/grading/status/${t.id}`);
            (t.details = e), await this.repository.updateTask(t.id, t);
          } catch (e) {
            console.error(
              `GradingTaskService: Error updating task status for task ID ${t.id}:`,
              e
            );
          }
        });
      await Promise.all(a);
    } catch (s) {
      console.error("GradingTaskService: Error updating pending tasks:", s);
    }
  }
  async getTasks() {
    return this.repository.getAllTasks();
  }
  async addTask(s) {
    await this.repository.addTask(s);
  }
  async getTask(s) {
    return await this.repository.getTask(s);
  }
  async getTasksByAssignment(s) {
    return await this.repository.getTasksByAssignment(s);
  }
  async getTasksByCourse(s) {
    return await this.repository.getTasksByCourse(s);
  }
  async deleteTask(s) {
    await this.repository.deleteTask(s);
  }
  async deleteTasks(s) {
    await this.repository.deleteTasks(s);
  }
  async updateTask(s, a) {
    await this.repository.updateTask(s, a);
  }
  async editFeedback(s, a, t) {
    await this.repository.editFeedback(s, a, t);
  }
  async editScore(s, a, t) {
    await this.repository.editScore(s, a, t);
  }
  async scoreEvaluation(s, a) {
    await this.postData(`${o}/scores`, { evaluation_id: s, score: a });
  }
  async fetchData(s) {
    const a = await fetch(s, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!a.ok) {
      const t = await a.text();
      throw new Error(`Request failed: ${t}`);
    }
    return a.json();
  }
  async postData(s, a) {
    console.log("POST DATA: ", s, a);
    const t = await fetch(s, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(a),
    });
    if (!t.ok) {
      const e = await t.text();
      throw new Error(`Request failed: ${e}`);
    }
    return t.json();
  }
}
class y {
  async addTask(s) {
    const a = await this.getAllStoredTasks();
    a.push(s), await this.saveAllTasks(a);
  }
  async deleteTask(s) {
    const a = await this.getAllStoredTasks(),
      t = a.findIndex((e) => e.id === s);
    t !== -1 && (a.splice(t, 1), await this.saveAllTasks(a));
  }
  async deleteTasks(s) {
    const t = (await this.getAllStoredTasks()).filter((e) => !s.includes(e.id));
    await this.saveAllTasks(t);
  }
  async getTask(s) {
    return (await this.getAllStoredTasks()).find((t) => t.id === s) || null;
  }
  async getTasksByAssignment(s) {
    return (await this.getAllStoredTasks()).filter(
      (t) => t.request.assignment.id === s
    );
  }
  async getTasksByCourse(s) {
    return (await this.getAllStoredTasks()).filter(
      (t) => t.request.course.id === s
    );
  }
  async getAllTasks() {
    return this.getAllStoredTasks();
  }
  async updateTask(s, a) {
    const t = await this.getAllStoredTasks(),
      e = t.findIndex((r) => r.id === s);
    e !== -1 && ((t[e] = a), await this.saveAllTasks(t));
  }
  async editFeedback(s, a, t) {
    const e = await this.getAllStoredTasks();
    console.log(e);
    const r = e.find((i) => i.id === s);
    r &&
      (r.details.status === "SUCCESS" && (r.details.result[a].feedback = t),
      await this.saveAllTasks(e));
  }
  async editScore(s, a, t) {
    const e = await this.getAllStoredTasks(),
      r = e.find((i) => i.id === s);
    r &&
      (r.details.status === "SUCCESS" && (r.details.result[a].score = t),
      await this.saveAllTasks(e));
  }
  async getAllStoredTasks() {
    try {
      return ((await d.getItem(c)) || []).map((a) => ({
        ...a,
        createdAt: new Date(a.createdAt),
      }));
    } catch (s) {
      return (
        console.error("GradingTaskRepository: Error fetching tasks:", s), []
      );
    }
  }
  async saveAllTasks(s) {
    const a = s.map((t) => ({ ...t, createdAt: t.createdAt.toISOString() }));
    await d.setItem(c, a);
  }
}
export { o as B, y as G, T as a };
