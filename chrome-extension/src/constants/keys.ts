export const userSettingsKey = "settings";
export const userKey = "user";
export const coursesKey = "courses";
export const assignmentsKey = "assignments";
export const TOGGLE_INJECTION = "toggleInjection";

// messages
export const REFRESH_DATA = "refreshData";
export const RELOAD_ASSIGNMENTS = "reloadAssignments";
export const POLL_TASK_STATUSES = "pollTaskStatuses";
export const OPEN_OPTIONS_PAGE = "openOptionsPage";
export const GET_OPTIONS_DATA = "getOptionsData";
export const TASKS_UPDATED = "tasksUpdated";
export const VIEW_TASK = "viewTask";

// Tasks
export const tasksKey = (taskId: string) => `tasks#${taskId}`;
export const likeTasksKey = (taskId: string) => `tasks:likes#${taskId}`;
export const tasksViewsKey = (taskId: string) => `tasks:views#${taskId}`;
export const tasksIndexKey = () => "idx:tasks";
