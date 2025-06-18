import { submitGradingRequest } from "@src/apis";
import { GradingRequest, GradingTask, GradingTaskStatusEnum } from "@src/types";
import { addTask } from "./tasks";

export const processGradingRequest = async (request: GradingRequest) => {
  const id = await submitGradingRequest(request);

  const newTask: GradingTask = {
    id,
    request,
    details: {
      status: GradingTaskStatusEnum.PENDING,
      result: null,
      traceback: null,
    },
    createdAt: new Date(),
    isViewed: false,
  };

  await addTask(newTask);

  return newTask;
};
