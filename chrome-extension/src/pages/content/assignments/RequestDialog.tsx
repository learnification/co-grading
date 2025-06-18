import { ReloadIcon } from "@radix-ui/react-icons";
import {
  uploadDocument,
  getAssignment,
  getCourse,
  getSubmissions,
} from "@src/apis";
import { Button } from "@src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@src/components/ui/dialog";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import { OPEN_OPTIONS_PAGE } from "@src/constants/keys";
import Select from "@src/pages/options/components/Select";
import Textarea from "@src/pages/options/components/Textarea";
import { processGradingRequest } from "@src/services/queries/request";
import { EvaluationSettings } from "@src/types";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface RequestDialogProps {
  initialSettings?: EvaluationSettings;
}

export function RequestDialog({ initialSettings }: RequestDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<EvaluationSettings>(
    initialSettings ?? {
      strictness: "moderate",
      tone: "friendly",
      length: "short",
      customFeedbackPrompt: "",
    }
  );
  const [file, setFile] = useState<File>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let documentId: string | undefined;

    if (file) {
      try {
        documentId = await uploadDocument(file);
      } catch (error) {
        toast.error("Error uploading document.", {
          description: "Please try again later.",
        });
        setIsSubmitting(false);
        setOpen(false);
        return;
      }
    }

    const currentUrl = window.location.pathname;
    const urlParts = currentUrl.split("/");
    const courseId = urlParts[2];
    const assignmentId = urlParts[4];

    const course = await getCourse(courseId);
    const assignment = await getAssignment(courseId, assignmentId);
    const submissions = await getSubmissions(courseId, assignmentId);

    try {
      await processGradingRequest({
        course,
        assignment,
        submissions,
        settings,
        documentId,
      });

      const submissionsCount = submissions.length;

      toast.success("Grading request submitted successfully!", {
        description: `${submissionsCount} submission(s) are now being processed.`,
        action: {
          label: "View Status",
          onClick: () => {
            chrome.runtime.sendMessage({
              type: OPEN_OPTIONS_PAGE,
              payload: "#task",
            });
          },
        },
      });
    } catch (error) {
      toast.error("An error occurred while processing your request.", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setOpen(false);
      setFile(undefined);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          id="ai-feedback-button"
          disabled={isSubmitting}
          className="inline-flex items-center px-[14px] py-[8px] m-[2px] text-[1rem] leading-[22px] bg-[#e11d48] text-white font-semibold rounded-[3px] border-[1px] border-solid border-sky-900 hover:bg-[#be123c] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isSubmitting ? (
            <>
              <ReloadIcon className="animate-spin h-5 w-5" />
              <span className="ml-2">Submitting</span>
            </>
          ) : (
            <>
              <Sparkles />
              <span className="ml-2">Autograde</span>
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="p-4 m-4">
        <DialogHeader>
          <DialogTitle>AI Settings</DialogTitle>
          <DialogDescription>
            Configure the AI grading settings for this assignment.
          </DialogDescription>
        </DialogHeader>
        <div className="grid mx-4">
          <Select
            label="Grading Strictness"
            options={["loose", "moderate", "strict"]}
            defaultValue={settings.strictness}
            onChange={(value) => {
              setSettings((prev) => ({
                ...prev,
                strictness: value as EvaluationSettings["strictness"],
              }));
            }}
          />
          <Select
            label="Feedback Tone"
            options={["formal", "friendly", "constructive"]}
            defaultValue={settings.tone}
            onChange={(value) => {
              setSettings((prev) => ({
                ...prev,
                tone: value as EvaluationSettings["tone"],
              }));
            }}
          />
          <Select
            label="Feedback Length"
            options={["short", "medium", "detailed"]}
            defaultValue={settings.length}
            onChange={(value) => {
              setSettings((prev) => ({
                ...prev,
                length: value as EvaluationSettings["length"],
              }));
            }}
          />
          <Textarea
            label="Custom Feedback Prompt"
            defaultValue={settings.customFeedbackPrompt}
            onChange={(e) => {
              setSettings((prev) => ({
                ...prev,
                customFeedbackPrompt: e.target.value,
              }));
            }}
          />
          <div>
            <Label htmlFor="file">
              Resources which may help the AI to grade better (optional)
            </Label>
            <Input
              id="file"
              type="file"
              accept=".pdf,application/pdf"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <ReloadIcon className="animate-spin h-5 w-5" />
                <span className="ml-2">Submitting</span>
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
