import { Assignment, Course, Submission } from "./canvas";
import { EvaluationSettings } from "./settings";

/**
 * Represents a request to initiate grading for an assignment.
 */
export interface GradingRequest {
  course: Course;
  assignment: Assignment;
  submissions: Submission[];
  settings: EvaluationSettings;
  documentId?: string;
}

/**
 * Represents the feedback for a single submission.
 */
export interface SubmissionFeedback {
  submissionId: string; // Identifier for the submission
  score: number; // Assigned score
  feedback: string; // Constructive feedback for the student
}

/**
 * Maps user IDs to their respective feedback.
 */
export interface GradingResults {
  [userId: string]: SubmissionFeedback;
}

/**
 * Enum representing possible statuses of a grading task.
 */
export enum GradingTaskStatusEnum {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
  FAILURE = "FAILURE",
  STARTED = "STARTED",
}

/**
 * Represents a successfully completed grading task.
 */
export interface SuccessfulGradingTask {
  status: GradingTaskStatusEnum.SUCCESS;
  result: GradingResults;
  traceback: null;
}

/**
 * Represents a grading task that is still in progress.
 */
export interface PendingGradingTask {
  status: GradingTaskStatusEnum.PENDING;
  result: null;
  traceback: null;
}

/**
 * Represents a grading task that has failed.
 */
export interface FailedGradingTask {
  status: GradingTaskStatusEnum.FAILURE;
  result: null;
  traceback: string;
}

/**
 * Represents a grading task that has started but not yet completed.
 */
export interface StartedGradingTask {
  status: GradingTaskStatusEnum.STARTED;
  result: null;
  traceback: null;
}

/**
 * Union type representing all possible grading task statuses.
 */
export type GradingTaskState =
  | SuccessfulGradingTask
  | PendingGradingTask
  | FailedGradingTask
  | StartedGradingTask;

/**
 * Represents a grading task with its details and current status.
 */
export interface GradingTask {
  id: string; // Unique identifier for the task
  request: GradingRequest; // Details of the grading request
  details: GradingTaskState; // Current status and related information

  // Additional metadata
  isViewed?: boolean; // Whether the task has been viewed by the user
  createdAt: Date; // Task creation date
}
