import { getTasks, updateTask } from "@src/services/queries/tasks";
import { GradingRequest, GradingTaskStatusEnum } from "@src/types";

const BASE_URL = "http://localhost:8000/api/v1";

export const submitGradingRequest = async (
  request: GradingRequest
): Promise<string> => {
  const response = await fetch(`${BASE_URL}/grading/generate`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  return data.task_id;
};

export const updatePendingTasks = async (): Promise<void> => {
  const tasks = await getTasks();
  const pendingTasks = tasks.filter(
    (task) =>
      task.details.status === GradingTaskStatusEnum.PENDING ||
      task.details.status === GradingTaskStatusEnum.STARTED
  );

  await Promise.all(
    pendingTasks.map(async (task) => {
      const response = await fetch(`${BASE_URL}/grading/status/${task.id}`);
      const status = await response.json();
      task.details = status;
      await updateTask(task.id, task);
    })
  );
};

export const scoreEvaluation = async (
  taskId: string,
  score: number
): Promise<void> => {
  console.log(score);
  await fetch(`${BASE_URL}/scores`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ evaluation_id: taskId, score }),
  });
};

export const uploadDocument = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}/documents/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data.pdf_id;
};
