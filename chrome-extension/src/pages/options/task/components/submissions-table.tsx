import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@src/components/ui/table";
import EditableFeedback from "./editable-feedback";
import { GradingResults, Submission } from "@src/types";
import { Checkbox } from "@src/components/ui/checkbox";
import EditableScore from "./editable-score";
import { editFeedback, editScore } from "@src/services/queries/edit";

interface SubmissionsTableProps {
  feedbacks: GradingResults;
  submissions: Submission[];
  acceptedSubmissions: Set<string>; // Set of user IDs
  taskId: string;
  onAccept: (userId: string) => void;
  onReject: (userId: string) => void;
  getStudentName: (userId: string) => string;
}

const SubmissionsTable = ({
  feedbacks,
  submissions,
  acceptedSubmissions,
  taskId,
  onAccept,
  onReject,
  getStudentName,
}: SubmissionsTableProps) => {
  const handleSaveFeedback = async (userId: string, feedback: string) =>
    await editFeedback(taskId, userId, feedback);

  const handleSaveScore = async (userId: string, score: number) =>
    await editScore(taskId, userId, score);

  return (
    <Table className="mb-6">
      <TableHeader>
        <TableRow>
          <TableHead>Student Name</TableHead>
          <TableHead>Submission</TableHead>
          <TableHead>AI Grade</TableHead>
          <TableHead>AI Feedback</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions.map((submission) => {
          const feedback = feedbacks[submission.user_id];
          const isAccepted = acceptedSubmissions.has(submission.user_id);
          const checkboxId = `accept-${submission.id}`;

          return (
            <TableRow key={submission.id} className="hover:bg-gray-50">
              <TableCell>{getStudentName(submission.user_id)}</TableCell>
              <TableCell>
                {submission.preview_url ? (
                  <a
                    href={submission.preview_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Submission
                  </a>
                ) : (
                  "No submission URL"
                )}
              </TableCell>
              <TableCell>
                <EditableScore
                  initialScore={feedback.score}
                  onSave={(newScore) =>
                    handleSaveScore(submission.user_id, newScore)
                  }
                />
              </TableCell>
              <TableCell>
                <EditableFeedback
                  initialFeedback={feedback.feedback}
                  onSave={(newFeedback) =>
                    handleSaveFeedback(submission.user_id, newFeedback)
                  }
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={checkboxId}
                    checked={isAccepted}
                    onCheckedChange={(checked) =>
                      checked
                        ? onAccept(submission.user_id)
                        : onReject(submission.user_id)
                    }
                  />
                  <label
                    htmlFor={checkboxId}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept
                  </label>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default SubmissionsTable;
