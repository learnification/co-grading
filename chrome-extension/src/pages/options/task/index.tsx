import { useState, useMemo, useCallback, useEffect } from "react";
import {
  GradeSubmissionRequest,
  GradingTask,
  GradingTaskStatusEnum,
} from "@src/types";
import Notification from "./components/notification";
import HeaderSection from "./components/header";
import SearchAndFilter from "./components/search";
import SubmissionsTable from "./components/submissions-table";
import Pagination from "./components/pagination";
import ActionPanel from "./components/action-panel";
import { Button } from "@src/components/ui/button";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { submitGrade, scoreEvaluation } from "@src/apis";
import { getLikeStatus, likeTask } from "@src/services/queries/likes";

interface GradingPreviewPageProps {
  task: GradingTask;
  onClose: () => void;
}

const SUBMISSIONS_PER_PAGE = 10;

const GradingPreviewPage = ({ task, onClose }: GradingPreviewPageProps) => {
  const { submissions } = task.request;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const [acceptedGradings, setAcceptedGradings] = useState<Set<string>>(
    new Set()
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [likeStatus, setLikeStatus] = useState<boolean>();

  useEffect(() => {
    document.title = task.request.assignment.name + " - Feedback Preview";
    getLikeStatus(task.id).then((status) => {
      setLikeStatus(status);
      console.log(status);
    });
  }, []);

  // Compute filtered submissions based on search and filter criteria
  const filteredSubmissions = useMemo(() => {
    let filtered = submissions;

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter((submission) =>
        getStudentName(submission.user_id).toLowerCase().includes(lowerQuery)
      );
    }

    if (filterStatus) {
      filtered = filtered.filter(
        (submission) => submission.workflow_state === filterStatus
      );
    }

    return filtered;
  }, [submissions, searchQuery, filterStatus]);

  // Pagination calculations
  const totalPages = Math.ceil(
    filteredSubmissions.length / SUBMISSIONS_PER_PAGE
  );
  const paginatedSubmissions = useMemo(() => {
    const start = (currentPage - 1) * SUBMISSIONS_PER_PAGE;
    return filteredSubmissions.slice(start, start + SUBMISSIONS_PER_PAGE);
  }, [filteredSubmissions, currentPage]);

  // Handler for search input
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  // Handler for filter selection
  const handleFilter = useCallback((status: string) => {
    setFilterStatus(status);
    setCurrentPage(1);
  }, []);

  // Handler to accept an individual grading
  const handleAccept = useCallback((userId: string) => {
    setAcceptedGradings((prev) => new Set(prev.add(userId)));
  }, []);

  // Handler to reject an individual grading
  const handleReject = useCallback((userId: string) => {
    setAcceptedGradings((prev) => {
      const next = new Set(prev);
      next.delete(userId);
      return next;
    });
  }, []);

  // Handler to accept all filtered submissions
  const handleAcceptAll = useCallback(() => {
    setAcceptedGradings(new Set(filteredSubmissions.map((s) => s.user_id)));
  }, [filteredSubmissions, task]);

  // Handler to reject all accepted gradings
  const handleRejectAll = useCallback(() => {
    setAcceptedGradings(new Set());
  }, []);

  const handleUpload = async () => {
    try {
      if (task.details.status !== GradingTaskStatusEnum.SUCCESS) {
        throw new Error("Task is not in STARTED status");
      }

      const { course, assignment } = task.request;
      const { result } = task.details;

      const requests: GradeSubmissionRequest[] = Array.from(acceptedGradings)
        .filter((userId) => result[userId])
        .map((userId) => ({
          courseId: course.id,
          assignmentId: assignment.id,
          userId,
          grade: result[userId].score,
          comment: result[userId].feedback,
        }));

      await Promise.all(requests.map(submitGrade));

      // Reset accepted submissions after successful upload
      setAcceptedGradings(new Set());

      setNotification({
        message: "Grades and feedback successfully uploaded to Canvas.",
        type: "success",
      });
    } catch (error) {
      setNotification({
        message: "Failed to upload to Canvas. Please try again.",
        type: "error",
      });
    }
  };

  // Placeholder function to get student name by user_id
  const getStudentName = useCallback((userId: string): string => {
    // TODO: Implement actual logic here, e.g., fetch from a users map or API
    return `User ${userId}`;
  }, []);

  const handleLike = async (like: boolean) => {
    likeTask(task.id, like);
    await scoreEvaluation(task.id, like ? 1 : 0);
    setLikeStatus(like);
  };

  // Determine if there are any accepted submissions
  const hasAccepted = acceptedGradings.size > 0;

  return (
    <div className="p-8">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <div className="flex flex-row justify-between">
        <button
          onClick={onClose}
          className="text-blue-600 hover:underline mb-4"
        >
          &larr; Back
        </button>
        <div className="gap-3 mr-3">
          {likeStatus !== false && (
            <Button
              onClick={() => handleLike(true)}
              aria-label="Good Response"
              variant="ghost"
              size="icon"
              className="size-8"
              disabled={typeof likeStatus !== "undefined"}
            >
              <ThumbsUpIcon color={likeStatus ? "green" : "gray"} />
            </Button>
          )}
          {likeStatus !== true && (
            <Button
              onClick={() => handleLike(false)}
              aria-label="Settings"
              variant="ghost"
              size="icon"
              className="size-8"
              disabled={typeof likeStatus !== "undefined"}
            >
              <ThumbsDownIcon color={likeStatus === false ? "red" : "gray"} />
            </Button>
          )}
        </div>
      </div>
      <HeaderSection
        course={task.request.course}
        assignment={task.request.assignment}
      />

      <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />

      {task.details.result && (
        <SubmissionsTable
          submissions={paginatedSubmissions}
          feedbacks={task.details.result}
          taskId={task.id}
          acceptedSubmissions={acceptedGradings}
          onAccept={handleAccept}
          onReject={handleReject}
          getStudentName={getStudentName}
        />
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      <ActionPanel
        onUpload={handleUpload}
        onAcceptAll={handleAcceptAll}
        onRejectAll={handleRejectAll}
        hasAccepted={hasAccepted}
      />
    </div>
  );
};

export default GradingPreviewPage;
