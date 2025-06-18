import { likeTasksKey } from "@src/constants/keys";
import { getItem, setItem } from "@src/lib/chromeUtils";

export const likeTask = async (taskId: string, like: boolean) => {
  return setItem(likeTasksKey(taskId), like);
};

export const getLikeStatus = async (taskId: string) => {
  return await getItem<boolean>(likeTasksKey(taskId));
};
