import { useState } from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import { Button } from "@src/components/ui/button";
import { TASKS_UPDATED, VIEW_TASK } from "@src/constants/keys";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@src/components/ui/alert-dialog";
import { GradingTaskState, GradingTaskStatusEnum } from "@src/types";
import { deleteTasks } from "@src/services/queries/tasks";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const taskId: string = row.getValue("id");
  const { status } = row.getValue("details") as GradingTaskState;

  const deleteTask = async (id: string) => {
    await deleteTasks([id]);
    setIsAlertOpen(false);
  };

  const handleView = async () => {
    await chrome.runtime.sendMessage({ type: VIEW_TASK, payload: taskId });
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            aria-label="Open menu"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          {status === GradingTaskStatusEnum.SUCCESS && (
            <>
              <DropdownMenuItem onSelect={handleView}>View</DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuItem onSelect={() => setIsAlertOpen(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              task and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteTask(taskId)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
