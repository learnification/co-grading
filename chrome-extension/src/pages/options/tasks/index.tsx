import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { useCallback, useEffect, useState } from "react";
import { GradingTask } from "@src/types";
import {
  POLL_TASK_STATUSES,
  TASKS_UPDATED,
  VIEW_TASK,
} from "@src/constants/keys";
import Icon from "@base/public/images/icon48.png";
import manifest from "@base/manifest.json";
import { Button } from "@src/components/ui/button";
import GradingPreviewPage from "../task";
import Stats from "./components/stats";

import { getTasks } from "@src/services/queries/tasks";

export default function TaskPage() {
  const [tasks, setTasks] = useState<GradingTask[]>([]);
  const [selectedTask, setSelectedTask] = useState<GradingTask>();

  useEffect(() => {
    document.title = "Dashboard";

    const messageListener = (message: Record<string, unknown>) => {
      if (message.type === TASKS_UPDATED) {
        getTasks().then(setTasks);
      }
      if (message.type === VIEW_TASK) {
        setSelectedTask(message.payload as GradingTask);
      }
    };

    chrome.runtime.sendMessage({ type: POLL_TASK_STATUSES }).then(() => {
      getTasks().then(setTasks);
    });

    chrome.runtime.onMessage.addListener(messageListener);

    return () => {
      chrome.runtime.onMessage.removeListener(messageListener);
    };
  }, []);

  const handleBack = () => {
    window.location.hash = "";
  };

  const removeSelectedTask = () => {
    setSelectedTask(undefined);
  };

  if (selectedTask) {
    return (
      <GradingPreviewPage task={selectedTask} onClose={removeSelectedTask} />
    );
  }

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center h-16 p-4 bg-white z-10 border-b border-gray-200">
        <div className="flex items-center">
          <img src={Icon} alt="Icon" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">
            {manifest.name}
          </span>
        </div>
        <Button onClick={handleBack} variant="secondary">
          Back to Settings
        </Button>
      </header>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex mt-16">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Automated Feedback and Grading
            </h2>
            <p className="text-muted-foreground">
              See personalized AI feedback and grading for your assignments
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <Stats data={tasks} />
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
