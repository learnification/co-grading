import "@assets/styles/tailwind.css";
import ReactDOM from "react-dom/client";
import { Toaster } from "@src/components/ui/sonner";
import {
  OPEN_OPTIONS_PAGE,
  TOGGLE_INJECTION,
  userSettingsKey,
} from "@src/constants/keys";
import { UserSettings } from "@src/types";
import { createRoot } from "react-dom/client";
import { RequestDialog } from "./RequestDialog";
import { getItem } from "@src/lib/chromeUtils";
import { getTasks } from "@src/services/queries/tasks";
import { getCourse } from "@src/apis";

const BUTTON_ID = "ai-feedback-button";
const GRADING_STATUS_ID = "ai-feedback-status";
const TARGET_SELECTOR = ".assignment-buttons";
const STATUS_TARGET_SELECTOR = "#sidebar_content";

const createGradingStatus = async () => {
  const currentUrl = window.location.pathname;
  const urlParts = currentUrl.split("/");
  const assignmentId = urlParts[4];
  const status = document.createElement("div");
  status.className = `p-4 m-4 bg-blue-100 text-blue-800 hover:cursor-pointer font-semibold text-lg rounded-lg shadow-md flex flex-wrap flex-row items-center justify-center`;
  status.innerHTML = `
    <h2 class="text-center mb-1">AI Grading Status</h2>
`;
  status.id = GRADING_STATUS_ID;
  status.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: OPEN_OPTIONS_PAGE, payload: "#task" });
  });

  try {
    const tasks = await getTasks({ assignmentId });

    // Extract all submissionIds and count of unique submissions
    const allSubmissions = tasks.flatMap((task) => task.request.submissions);
    const allSubmissionIds = allSubmissions.map((submission) => submission.id);
    const gradedSubmissionsCount = new Set(allSubmissionIds).size;

    status.innerHTML += `<p class="text-center" style="margin-bottom: 0;">${gradedSubmissionsCount} submissions graded</p>`;
  } catch (error) {
    status.innerHTML += `<p class="text-center" style="margin-bottom: 0;">Error fetching grading status</p>`;
  }
  return status;
};

const insertGradingStatus = async () => {
  const statusTarget = document.querySelector(STATUS_TARGET_SELECTOR);
  if (statusTarget && !statusTarget.querySelector(`#${GRADING_STATUS_ID}`)) {
    const status = await createGradingStatus();
    statusTarget.appendChild(status);
  }
};

const insertToasts = () => {
  const toastsContainer = document.createElement("div");
  toastsContainer.id = "ai-feedback-toasts";
  createRoot(toastsContainer).render(<Toaster richColors />);
  document.body.appendChild(toastsContainer);
};

// Function to Insert the AI Feedback Button into Target Elements
const insertButton = async () => {
  const targetElements = document.querySelectorAll(TARGET_SELECTOR);
  const settings: UserSettings | undefined = await getItem(userSettingsKey);

  targetElements.forEach((element) => {
    if (!element.querySelector(`#${BUTTON_ID}`)) {
      const container = document.createElement("div");
      container.style.display = "inline-flex";
      container.style.verticalAlign = "middle";
      container.id = BUTTON_ID;
      element.insertBefore(container, element.firstChild);
      const root = ReactDOM.createRoot(container);
      root.render(<RequestDialog initialSettings={settings?.evaluation} />);
    }
  });
};

(async () => {
  const courseId = window.location.pathname.split("/")[2];
  const course = await getCourse(courseId);
  const { type } = course.enrollments[0];
  const isTeacher = type === "teacher" || type === "ta";

  if ((await getItem(TOGGLE_INJECTION)) && isTeacher) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", async () => {
        await insertButton();
        insertToasts();
        await insertGradingStatus();
      });
    } else {
      insertButton();
      insertToasts();
      await insertGradingStatus();
    }
  }
})();

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach(async (node) => {
      const courseId = window.location.pathname.split("/")[2];
      const course = await getCourse(courseId);
      const { type } = course.enrollments[0];
      const isTeacher = type === "teacher" || type === "ta";
      if (!(await getItem(TOGGLE_INJECTION)) || !isTeacher) {
        return;
      }
      if (node instanceof HTMLElement) {
        if (
          node.matches(TARGET_SELECTOR) ||
          node.querySelector(TARGET_SELECTOR)
        ) {
          insertButton();
        }

        if (
          node.matches(STATUS_TARGET_SELECTOR) ||
          node.querySelector(STATUS_TARGET_SELECTOR)
        ) {
          await insertGradingStatus();
        }
      }
    });
  });
});

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true });
