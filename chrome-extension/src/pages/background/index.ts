import { updatePendingTasks, refreshData } from "@src/apis";
import {
  GET_OPTIONS_DATA,
  OPEN_OPTIONS_PAGE,
  POLL_TASK_STATUSES,
  REFRESH_DATA,
  RELOAD_ASSIGNMENTS,
  TASKS_UPDATED,
  VIEW_TASK,
} from "@src/constants/keys";
import { getTask, updateTask } from "@src/services/queries/tasks";

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.runtime.openOptionsPage();
  }
});

chrome.alarms.create(RELOAD_ASSIGNMENTS, { periodInMinutes: 30 });

chrome.alarms.create(POLL_TASK_STATUSES, { periodInMinutes: 0.5 });

chrome.alarms.onAlarm.addListener(async (alarm) => {
  switch (alarm.name) {
    case RELOAD_ASSIGNMENTS:
      await refreshData();
      break;
    case POLL_TASK_STATUSES:
      await updatePendingTasks();
      chrome.runtime.sendMessage({ type: TASKS_UPDATED });
      break;
    default:
      console.warn("Unknown alarm:", alarm);
  }
});

let optionsData = "";

function handleMessage(
  message: Record<string, unknown>,
  _: chrome.runtime.MessageSender,
  sendResponse: (response?: unknown) => void
): boolean {
  (async () => {
    switch (message.type) {
      case REFRESH_DATA:
        await refreshData();
        chrome.runtime.sendMessage({ type: REFRESH_DATA });
        sendResponse(true);
        break;

      case POLL_TASK_STATUSES:
        await updatePendingTasks();
        chrome.runtime.sendMessage({ type: TASKS_UPDATED });
        sendResponse({ success: true });
        break;

      case OPEN_OPTIONS_PAGE:
        optionsData = message.payload as string;
        chrome.runtime.openOptionsPage();
        sendResponse({ success: true });
        break;

      case GET_OPTIONS_DATA:
        sendResponse(optionsData);
        break;

      case VIEW_TASK:
        const selectedTask = await getTask(message.payload as string);
        if (!selectedTask) {
          sendResponse({ success: false, error: "Task not found" });
          break;
        }
        chrome.runtime.sendMessage({
          type: VIEW_TASK,
          payload: selectedTask,
        });
        selectedTask.isViewed = true;
        await updateTask(selectedTask.id, selectedTask);
        sendResponse({ success: true });
        break;

      case TASKS_UPDATED:
        chrome.runtime.sendMessage({ type: TASKS_UPDATED });
        sendResponse({ success: true });
        break;

      default:
        sendResponse({ success: false, error: "Unknown message type" });
    }
  })();
  return true;
}

chrome.runtime.onMessage.addListener(handleMessage);
