import { TASKS_UPDATED, tasksIndexKey, tasksKey } from "@src/constants/keys";
import { getItem, removeItem, setItem } from "@src/lib/chromeUtils";
import { GradingTask } from "@src/types";

export const getTask = async (id: string): Promise<GradingTask | undefined> => {
  const task = await getItem<GradingTask>(tasksKey(id));
  if (task) {
    return deserialize(task);
  }
};

interface TasksFilter {
  courseId?: string;
  assignmentId?: string;
}

export const getTasks = async (
  filter?: TasksFilter
): Promise<GradingTask[]> => {
  const { courseId, assignmentId } = filter ?? {};

  const keys = await getItem<string[]>(tasksIndexKey());
  if (!keys) return [];

  const tasks = (await Promise.all(keys.map((id) => getTask(id)))).filter(
    (task) => task !== null && task !== undefined
  );

  tasks.filter((task) => {
    const matchesCourse = courseId ? task.request.course.id === courseId : true;
    const matchesAssignment = assignmentId
      ? task.request.assignment.id === assignmentId
      : true;

    return matchesCourse && matchesAssignment;
  });

  return tasks.filter((task) => {
    const matchesCourse = courseId ? task.request.course.id === courseId : true;
    const matchesAssignment = assignmentId
      ? task.request.assignment.id === assignmentId
      : true;

    return matchesCourse && matchesAssignment;
  });
};

export const addTask = async (task: GradingTask) => {
  await Promise.all([
    await setItem(tasksKey(task.id), serialize(task)),
    await addTaskToIndex(task.id),
  ]);
  await chrome.runtime.sendMessage({ type: TASKS_UPDATED, payload: "#task" });
};

export const deleteTasks = async (taskIds: string[]): Promise<void> => {
  await Promise.all(
    taskIds.map(async (taskId) => {
      await removeTaskFromIndex(taskId);
      await removeItem(tasksKey(taskId));
    })
  );
  await chrome.runtime.sendMessage({ type: TASKS_UPDATED });
};

export const updateTask = async (
  taskId: string,
  updatedTask: GradingTask
): Promise<void> => {
  await setItem(tasksKey(taskId), serialize(updatedTask));
};

const addTaskToIndex = async (taskKey: string): Promise<void> => {
  const keys = await getItem<string[]>(tasksIndexKey());

  if (keys) {
    keys.push(taskKey);
    await setItem(tasksIndexKey(), keys);
  } else {
    await setItem(tasksIndexKey(), [taskKey]);
  }
};

const removeTaskFromIndex = async (taskKey: string): Promise<void> => {
  const keys = await getItem<string[]>(tasksIndexKey());

  if (keys) {
    const index = keys.indexOf(taskKey);
    if (index !== -1) {
      keys.splice(index, 1);
      await setItem(tasksIndexKey(), keys);
    }
  }
};

const serialize = (task: GradingTask) => {
  return {
    ...task,
    createdAt: task.createdAt.toISOString(),
  };
};

const deserialize = (task: GradingTask): GradingTask => {
  return {
    ...task,
    createdAt: new Date(task.createdAt),
  };
};
