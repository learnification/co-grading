import { ColumnDef } from "@tanstack/react-table";
import { statuses } from "../data/data";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Checkbox } from "@src/components/ui/checkbox";
import {
  GradingTask,
  GradingTaskState,
  GradingTaskStatusEnum,
} from "@src/types";
import { Badge } from "@src/components/ui/badge";
import { VIEW_TASK } from "@src/constants/keys";

export const columns: ColumnDef<GradingTask>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "details",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const { status: statusValue } = row.getValue(
        "details"
      ) as GradingTaskState;
      const status = statuses.find((status) => status.value === statusValue);

      if (!status) {
        return null;
      }

      return (
        <div
          className="flex w-[100px] items-center rounded-full px-2 py-1 cursor-pointer"
          style={{
            backgroundColor: status.backgroundColor,
            cursor:
              status.value === GradingTaskStatusEnum.SUCCESS
                ? "pointer"
                : "default",
          }}
          onClick={async () => {
            if (status.value === GradingTaskStatusEnum.SUCCESS) {
              await chrome.runtime.sendMessage({
                type: VIEW_TASK,
                payload: row.getValue("id"),
              });
            }
          }}
        >
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
    cell: ({ row }) => {
      const taskId = row.getValue("id") as string;
      const abbreviatedTaskId = taskId.slice(0, 6);
      return (
        <div className="w-[40px]">
          <Badge>{abbreviatedTaskId}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "request",
    id: "Course",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Course" />
    ),
    size: 20,
    cell: ({ row }) => {
      const { course } = row.original.request;
      return (
        <div className="w-[160px] text-ellipsis overflow-hidden text-nowrap">
          {course.name}
        </div>
      );
    },
  },
  {
    accessorKey: "request",
    id: "Assignment",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Assignment" />;
    },
    cell: ({ row }) => {
      const { assignment } = row.original.request;
      return (
        <div className="flex space-x-2">
          <span className="max-w-[600px] truncate font-medium">
            {assignment.name}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "request",
    id: "Submissions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Submissions" />
    ),
    cell: ({ row }) => {
      const { submissions } = row.original.request;
      return <div className="w-[30px]">{submissions.length}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    id: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created" />
    ),
    cell: ({ row }) => {
      const date: Date = row.getValue("createdAt");
      return (
        <div className="w-[80px]">
          {date.toLocaleString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
            minute: "2-digit",
            hour: "2-digit",
            hour12: false,
          })}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
