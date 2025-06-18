import { Course, Assignment, UserSettings } from "@src/types";
import { Button } from "@src/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { userSettingsKey } from "@src/constants/keys";
import { getSubmissions } from "@src/apis";
import { getItem } from "@src/lib/chromeUtils";
import { processGradingRequest } from "@src/services/queries/request";

interface ConfirmationProps {
  course: Course;
  assignment: Assignment;
  onBack: () => void;
}

export default function Confirmation({
  course,
  assignment,
  onBack,
}: ConfirmationProps) {
  const [baseURL, setBaseURL] = useState<string>("");
  const [isGrading, setIsGrading] = useState(false);
  const [gradingSuccess, setGradingSuccess] = useState(false);

  useEffect(() => {
    const fetchBaseURL = async () => {
      const settings = await getItem<UserSettings>("settings");
      if (!settings) {
        return;
      }
      const { baseURL } = settings;
      setBaseURL(baseURL);
    };
    fetchBaseURL();
  }, []);

  const viewOnCanvas = useCallback(async () => {
    chrome.tabs.create({
      url: `${baseURL}/courses/${course.id}/assignments/${assignment.id}`,
    });
  }, [baseURL, course, assignment]);

  const handleGrading = async () => {
    try {
      setIsGrading(true);
      const userSettings = await getItem<UserSettings>(userSettingsKey);
      if (!userSettings) {
        throw new Error("User settings not found");
      }

      const submissions = await getSubmissions(course.id, assignment.id);

      await processGradingRequest({
        course: course,
        assignment: assignment,
        submissions: submissions,
        settings: userSettings.evaluation,
      });

      setGradingSuccess(true);
    } catch (error) {
      setGradingSuccess(false);
    } finally {
      setIsGrading(false);
    }
  };

  return (
    <div className="p-4">
      <button onClick={onBack} className="text-blue-600 hover:underline mb-4">
        &larr; Back
      </button>
      <h2
        className="text-xl font-semibold mb-2 hover:underline cursor-pointer"
        onClick={viewOnCanvas}
      >
        {assignment.name}
      </h2>
      <div className="mb-4 text-sm font-medium">
        <Button
          variant="link"
          className="text-wrap px-0 text-left"
          onClick={() => {
            chrome.tabs.create({ url: `${baseURL}/courses/${course.id}` });
          }}
        >
          {course.name}
        </Button>
      </div>
      <div className="mb-6 text-sm">
        <p className="font-medium">
          Needs Grading: {assignment.needs_grading_count}
        </p>
      </div>
      <Button onClick={viewOnCanvas} className="w-full my-3" variant="outline">
        View in Canvas
      </Button>
      <Button
        onClick={handleGrading}
        className="w-full flex items-center justify-center"
        disabled={isGrading || gradingSuccess} // Disable during grading or after success
      >
        {isGrading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Autograding...
          </>
        ) : gradingSuccess ? (
          <>
            <Check className="mr-2 h-4 w-4 text-green-500" />
            Requested Successfully
          </>
        ) : (
          "Autograde"
        )}
      </Button>
    </div>
  );
}
