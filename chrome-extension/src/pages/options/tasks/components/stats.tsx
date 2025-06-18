import { UpdateIcon, CheckIcon, FileTextIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@src/components/ui/card";
import { Label } from "@src/components/ui/label";
import { GradingTask, GradingTaskStatusEnum } from "@src/types";

const Stats = ({ data }: { data: GradingTask[] }) => {
  const total = data.length;
  const ready = data.filter(
    (t) => t.details.status === GradingTaskStatusEnum.SUCCESS
  ).length;
  const queued = data.filter(
    (t) =>
      t.details.status === GradingTaskStatusEnum.PENDING ||
      t.details.status === GradingTaskStatusEnum.STARTED
  ).length;

  const stats = [
    {
      title: "Total",
      value: total,
      icon: (
        <FileTextIcon className="text-blue-500 w-6 h-6" aria-hidden="true" />
      ),
      color: "bg-blue-100",
    },
    {
      title: "Ready",
      value: ready,
      icon: <CheckIcon className="text-green-500 w-6 h-6" aria-hidden="true" />,
      color: "bg-green-100",
    },
    {
      title: "Queued",
      value: queued,
      icon: (
        <UpdateIcon className="text-yellow-500 w-6 h-6" aria-hidden="true" />
      ),
      color: "bg-yellow-100",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-2">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className={`flex flex-col items-center justify-between p-1`}
          style={{ width: "165px" }}
          role="region"
          aria-labelledby={`${stat.title}-title`}
        >
          <CardHeader className="w-full flex items-center justify-between">
            <CardTitle
              id={`${stat.title}-title`}
              className="text-lg font-semibold"
            >
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-2">
            <Label className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
              {stat.value}
              {stat.icon}
            </Label>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;
