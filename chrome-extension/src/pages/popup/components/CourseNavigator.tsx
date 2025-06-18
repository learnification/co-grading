import { useEffect, useState, useMemo, useCallback } from "react";
import { Assignment, Course } from "@src/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@src/components/ui/accordion";
import Confirmation from "./Confirmation";
import { assignmentsKey, coursesKey, REFRESH_DATA } from "@src/constants/keys";
import { getItem } from "@src/lib/chromeUtils";

export default function CourseNavigator() {
  const [activeCourses, setActiveCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [assignmentsByCourse, setAssignmentsByCourse] = useState<{
    [courseId: string]: Assignment[];
  }>({});
  const [selectedAssignment, setSelectedAssignment] = useState<{
    course: Course;
    assignment: Assignment;
  } | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    Promise.all([
      getItem<Course[]>(coursesKey),
      getItem<Record<number, Assignment[]>>(assignmentsKey),
    ])
      .then(([courses, assignments]) => {
        setActiveCourses(courses || []);
        setAssignmentsByCourse(assignments || {});
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchData();

    const messageListener = async (message: Record<string, unknown>) => {
      if (message.type === REFRESH_DATA) await fetchData();
    };

    chrome.runtime.onMessage.addListener(messageListener);
    return () => chrome.runtime.onMessage.removeListener(messageListener);
  }, [fetchData]);

  // Handler for when an assignment is clicked
  const handleAssignmentClick = (course: Course, assignment: Assignment) => {
    setSelectedAssignment({ course, assignment });
  };

  // Handler for going back from the confirmation view
  const handleBack = () => {
    setSelectedAssignment(null);
  };

  // Memoize sorted courses to avoid unnecessary sorting on every render
  const sortedCourses = useMemo(() => {
    return [...activeCourses].sort(
      (a, b) => (b.needs_grading_count || 0) - (a.needs_grading_count || 0)
    );
  }, [activeCourses]);

  // Render the Confirmation component if an assignment is selected
  if (selectedAssignment) {
    return (
      <Confirmation
        course={selectedAssignment.course}
        assignment={selectedAssignment.assignment}
        onBack={handleBack}
      />
    );
  }

  const renderConfirmation = () => {
    if (!selectedAssignment) return null;
    const { course, assignment } = selectedAssignment;
    return (
      <Confirmation
        course={course}
        assignment={assignment}
        onBack={handleBack}
      />
    );
  };

  const renderAssignments = (course: Course, assignments: Assignment[]) => {
    const assignmentsNeedingGrading = assignments.filter(
      (assignment) =>
        assignment.needs_grading_count && assignment.needs_grading_count > 0
    );

    if (assignmentsNeedingGrading.length === 0) {
      return (
        <p className="text-gray-500 p-2 text-xs">
          No assignments need grading in this course.
        </p>
      );
    }

    return (
      <ul className="text-xs">
        {assignmentsNeedingGrading.map((assignment) => (
          <li
            key={assignment.id}
            className="p-2 hover:bg-gray-50 cursor-pointer"
            onClick={() => handleAssignmentClick(course, assignment)}
          >
            <p>
              {assignment.name}
              <br />
              <span className="text-gray-500">
                ({assignment.needs_grading_count}{" "}
                {assignment.needs_grading_count === 1
                  ? "ungraded submission"
                  : "ungraded submissions"}
                )
              </span>
            </p>
          </li>
        ))}
      </ul>
    );
  };

  // Main render logic
  if (selectedAssignment) {
    return renderConfirmation();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-gray-500">Loading data...</p>
      </div>
    );
  }

  if (!activeCourses.length) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-gray-500">No active courses found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-y-auto h-96">
      <Accordion type="single" collapsible>
        {sortedCourses.map((course) => {
          const assignments = assignmentsByCourse[course.id] || [];
          return (
            <AccordionItem key={course.id} value={course.id.toString()}>
              <AccordionTrigger className="text-left text-xs font-bold">
                <p>
                  {course.name}
                  <br />
                  {assignments.length > 0 && (
                    <span className="text-gray-500">
                      ({assignments.length}{" "}
                      {assignments.length === 1 ? "assignment" : "assignments"})
                    </span>
                  )}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                {renderAssignments(course, assignments)}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
