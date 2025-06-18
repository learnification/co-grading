import { Card, CardHeader, CardContent } from "@src/components/ui/card";
import DynamicContent from "@src/lib/dynamicContent";
import { Course, Assignment } from "@src/types/canvas"; // Adjust the import path as necessary

interface HeaderSectionProps {
  course: Course;
  assignment: Assignment;
}

const HeaderSection = ({ course, assignment }: HeaderSectionProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold">{assignment.name}</h2>
        <p className="text-gray-600">{course.name}</p>
      </CardHeader>
      <CardContent>
        <DynamicContent htmlString={assignment.description} />
        {/* <div className="mt-2 text-gray-700">{assignment.description}</div> */}
        {assignment.due_at && (
          <caption className="mt-2 text-gray-500">
            Due Date: {new Date(assignment.due_at).toLocaleDateString()}
          </caption>
        )}
      </CardContent>
    </Card>
  );
};

export default HeaderSection;
