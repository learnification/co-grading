import {
  CheckCircledIcon,
  CrossCircledIcon,
  StopwatchIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import { GradingTaskStatusEnum } from "@src/types";

export const statuses = [
  {
    value: GradingTaskStatusEnum.PENDING,
    label: "Pending",
    icon: StopwatchIcon,
    backgroundColor: "#ffb22440",
  },
  {
    value: GradingTaskStatusEnum.SUCCESS,
    label: "Success",
    icon: CheckCircledIcon,
    backgroundColor: "#46a75840",
  },
  {
    value: GradingTaskStatusEnum.FAILURE,
    label: "Failure",
    icon: CrossCircledIcon,
    backgroundColor: "#e5484d40",
  },
  {
    value: GradingTaskStatusEnum.STARTED,
    label: "Started",
    icon: LightningBoltIcon,
    backgroundColor: "#14166740",
  },
];
