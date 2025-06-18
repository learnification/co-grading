export interface User {
  id: string;
  name: string;
  created_at: string;
  sortable_name: string;
  short_name: string;
  avatar_url: string;
  last_name: string;
  first_name: string;
}

export interface Course {
  id: string;
  name: string;
  account_id: string;
  end_at: string | null;
  uuid: string;
  course_code: string;
  created_at: string;
  enrollments: [Enrollment];
  needs_grading_count?: number;
}

export interface Enrollment {
  type: "teacher" | "student" | "ta" | "observer" | "designer";
  user_id: string;
  enrollment_state: "active" | "invited_or_pending" | "completed";
}

export interface Assignment {
  id: string;
  name: string;
  description: string;
  course_id: string;
  created_at: string;
  updated_at: string;
  due_at: string | null;
  html_url: string;
  points_possible: number;
  grading_type: GradingType;
  submissions_download_url: string;
  assignment_group_id: string;
  submission_types: SubmissionType[];
  has_submitted_submissions: boolean;
  needs_grading_count?: number;
}

export type GradingType =
  | "pass_fail"
  | "percent"
  | "letter_grade"
  | "gpa_scale"
  | "points";

export type SubmissionType =
  | "online_text_entry"
  | "online_url"
  | "online_upload"
  | "online_quiz"
  | "media_record";

export type WorkflowState =
  | "submitted"
  | "unsubmitted"
  | "graded"
  | "pending_review";

export interface Submission {
  id: string;
  body: string | null;
  url: string | null;
  assignment_id: string;
  user_id: string;
  submission_type: SubmissionType;
  workflow_state: WorkflowState;
  grade_matches_current_submission: boolean;
  late: boolean;
  missing: boolean;
  preview_url: string;
}

export interface GradeSubmissionRequest {
  courseId: string;
  assignmentId: string;
  userId: string;
  grade: number;
  comment?: string;
}
