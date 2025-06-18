import { UserSettings } from "@src/types/settings";
import {
  Assignment,
  Course,
  GradeSubmissionRequest,
  Submission,
  User,
} from "@src/types";
import { assignmentsKey, coursesKey } from "@src/constants/keys";
import { getItem, setItem } from "@src/lib/chromeUtils";

/**
 * Interface representing the Canvas service context.
 */
export interface CanvasContext {
  baseURL: string;
  token: string;
}

/**
 * Initializes the CanvasContext by fetching settings from Chrome storage.
 * @returns A Promise that resolves to a CanvasContext object.
 */
export const initializeCanvasContext = async (): Promise<CanvasContext> => {
  const settings = await getItem<UserSettings>("settings");
  if (!settings) {
    throw new Error("Settings not found in storage");
  }
  const { baseURL, token } = settings;
  return { baseURL, token };
};

/**
 * Validates the provided settings by fetching user details.
 * @param token The Canvas API token.
 * @param baseURL The Canvas API base URL.
 */
export const validateSettings = async (token: string, baseURL: string) => {
  const response = await fetch(`${baseURL}/api/v1/users/self`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const user = await response.json();
  return user as User;
};

/**
 * Makes an API call to the Canvas LMS.
 * @param context The Canvas service context containing baseURL and token.
 * @param url The endpoint URL (relative to /api/v1).
 * @param params Optional query parameters.
 * @param requestInit Optional fetch request options.
 * @returns A Promise that resolves to the response data parsed as type T.
 */
export const request = async <T>(
  url: string,
  params: Record<string, string> = {},
  requestInit: RequestInit = {}
): Promise<T> => {
  const { baseURL, token } = await initializeCanvasContext();
  const endpoint = `${baseURL}/api/v1${url}`;
  const urlObj = new URL(endpoint);

  // Parse existing query parameters from the URL
  const [, queryString] = url.split("?");
  if (queryString) {
    const existingParams = new URLSearchParams(queryString);
    existingParams.forEach((value, key) => {
      urlObj.searchParams.append(key, value);
    });
  }

  // Append additional query parameters
  Object.entries(params).forEach(([key, value]) => {
    urlObj.searchParams.append(key, String(value));
  });

  // Set default per_page parameter if not already set
  if (!urlObj.searchParams.has("per_page")) {
    urlObj.searchParams.set("per_page", "1000");
  }

  const response = await fetch(urlObj.toString(), {
    ...requestInit,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...requestInit.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HTTP error! status: ${response.status}, message: ${errorText}`
    );
  }

  return (await response.json()) as T;
};

/**
 * Retrieves user details.
 * @param userId Optional user ID to fetch a specific user. If not provided, fetches the current user.
 * @returns A Promise that resolves to the User object.
 */
export const getUser = async (userId?: string): Promise<User> => {
  const url = userId ? `/users/${userId}` : "/users/self";
  return await request<User>(url);
};

/**
 * Fetches all courses for the current user.
 * @param params Optional query parameters.
 * @returns A Promise that resolves to an array of Course objects.
 */
export const getCourses = async (
  params: Record<string, string> = {}
): Promise<Course[]> => {
  return request<Course[]>("/courses", params);
};

/**
 * Fetches a single course by ID.
 * @param courseId The ID of the course.
 * @param params Optional query parameters.
 * @returns A Promise that resolves to the Course object.
 */
export const getCourse = async (
  courseId: string,
  params: Record<string, string> = {}
): Promise<Course> => {
  const course = await request<Course>(`/courses/${courseId}`, params);

  return {
    ...course,
    id: course.id.toString(),
  };
};

/**
 * Fetches a single assignment by course and assignment ID.
 * @param courseId The ID of the course.
 * @param assignmentId The ID of the assignment.
 * @param params Optional query parameters.
 * @returns A Promise that resolves to the Assignment object.
 */
export const getAssignment = async (
  courseId: string,
  assignmentId: string,
  params: Record<string, string> = {}
): Promise<Assignment> => {
  const assignment = await request<Assignment>(
    `/courses/${courseId}/assignments/${assignmentId}`,
    params
  );

  return {
    ...assignment,
    id: assignment.id.toString(),
  };
};

/**
 * Fetches all assignments for a given course.
 * @param courseId The ID of the course.
 * @param params Optional query parameters.
 * @returns A Promise that resolves to an array of Assignment objects.
 */
export const getAssignments = async (
  courseId: string,
  params: Record<string, string> = {}
): Promise<Assignment[]> => {
  const assignments = await request<Assignment[]>(
    `/courses/${courseId}/assignments`,
    params
  );

  return assignments.map((assignment) => ({
    ...assignment,
    id: assignment.id.toString(),
  }));
};

/**
 * Fetches all submissions for a given course and assignment.
 * @param courseId The ID of the course.
 * @param assignmentId The ID of the assignment.
 * @param params Optional query parameters.
 * @returns A Promise that resolves to an array of Submission objects.
 */
export const getSubmissions = async (
  courseId: string,
  assignmentId: string,
  params: Record<string, string> = {}
): Promise<Submission[]> => {
  const submissions = await request<Submission[]>(
    `/courses/${courseId}/assignments/${assignmentId}/submissions`,
    params
  );

  return submissions.map((submission) => ({
    ...submission,
    id: submission.id.toString(),
  }));
};

/**
 * Fetches active courses where the user is a teacher or TA.
 * @returns A Promise that resolves to an array of active teaching Course objects.
 */
export const getTeachingCourses = async (): Promise<Course[]> => {
  const [teacherCourses, taCourses] = await Promise.all([
    request<Course[]>("/courses", {
      enrollment_type: "teacher",
      enrollment_state: "active",
      "include[]": "needs_grading_count",
    }),
    request<Course[]>("/courses", {
      enrollment_type: "ta",
      enrollment_state: "active",
      "include[]": "needs_grading_count",
    }),
  ]);

  // Combine and deduplicate courses
  const coursesMap = new Map<string, Course>();
  [...teacherCourses, ...taCourses].forEach((course) => {
    coursesMap.set(course.id, {
      ...course,
      id: course.id.toString(),
    });
  });

  return Array.from(coursesMap.values());
};

/**
 * Fetches assignments for the given courses and calculates the total number of ungraded submissions.
 * @param courses An array of Course objects.
 * @returns A Promise that resolves to an object containing assignments by course and the total number of ungraded submissions.
 */
export const getAssignmentsData = async (
  courses: Course[]
): Promise<{
  assignmentsByCourse: Record<string, Assignment[]>;
  totalNeedsGradingCount: number;
}> => {
  const assignmentsResults = await Promise.all(
    courses.map((course) =>
      request<Assignment[]>(`/courses/${course.id}/assignments`, {
        "include[]": "needs_grading_count",
      }).then((assignments) => ({
        courseId: course.id,
        assignments: assignments.map((assignment) => ({
          ...assignment,
          id: assignment.id.toString(),
        })),
      }))
    )
  );

  let totalNeedsGradingCount = 0;
  const assignmentsByCourse: Record<string, Assignment[]> = {};

  assignmentsResults.forEach(({ courseId, assignments }) => {
    const needsGradingAssignments = assignments.filter((assignment) => {
      if (assignment.needs_grading_count) {
        totalNeedsGradingCount += assignment.needs_grading_count;
        return true;
      }
      return false;
    });

    assignmentsByCourse[courseId] = needsGradingAssignments;
  });

  return { assignmentsByCourse, totalNeedsGradingCount };
};

/**
 * Retrieves the latest data from the Canvas API, updates Chrome storage, and sets the browser badge.
 */
export const refreshData = async (): Promise<void> => {
  const courses = await getTeachingCourses();
  const { totalNeedsGradingCount, assignmentsByCourse } =
    await getAssignmentsData(courses);

  await setItem(coursesKey, courses);
  await setItem(assignmentsKey, assignmentsByCourse);

  const badgeText =
    totalNeedsGradingCount > 99
      ? "99+"
      : totalNeedsGradingCount > 0
      ? totalNeedsGradingCount.toString()
      : "";

  await chrome.action.setBadgeText({ text: badgeText });
};

/**
 * Fetches specific Canvas data from a given URL.
 * @param url The endpoint URL (relative to /api/v1).
 * @param params Optional query parameters.
 * @returns A Promise that resolves to an object containing graded, ungraded, and not submitted counts.
 */
export const getCanvasData = async (
  url: string,
  params: Record<string, string> = {}
): Promise<{
  graded: number;
  ungraded: number;
  not_submitted: number;
}> => {
  return await request(url, params);
};

/**
 * Submits a grade for a specific assignment and user.
 * @param gradeRequest The grade submission request details.
 */
export const submitGrade = async (
  gradeRequest: GradeSubmissionRequest
): Promise<void> => {
  const { courseId, assignmentId, userId, grade, comment } = gradeRequest;
  await request(
    `/courses/${courseId}/assignments/${assignmentId}/submissions/${userId}`,
    {},
    {
      method: "PUT",
      body: JSON.stringify({
        submission: {
          posted_grade: grade,
        },
        comment: {
          text_comment: comment,
        },
      }),
    }
  );
};
