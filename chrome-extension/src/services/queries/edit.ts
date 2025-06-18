import { GradingTaskStatusEnum } from "@src/types";
import { getTask } from "./tasks";
import { tasksKey } from "@src/constants/keys";
import { setItem } from "@src/lib/chromeUtils";

export const editScore = async (
  taskId: string,
  userId: string,
  score: number
) => {
  const task = await getTask(taskId);
  if (!task || task.details.status !== GradingTaskStatusEnum.SUCCESS) {
    return;
  }
  if (task.details.result[userId]) {
    task.details.result[userId].score = score;
    await setItem(tasksKey(taskId), task);
  }
};

export const editFeedback = async (
  taskId: string,
  userId: string,
  feedback: string
) => {
  const task = await getTask(taskId);
  if (!task || task.details.status !== GradingTaskStatusEnum.SUCCESS) {
    return;
  }
  if (task.details.result[userId]) {
    task.details.result[userId].feedback = feedback;
    await setItem(tasksKey(taskId), task);
  }
};
