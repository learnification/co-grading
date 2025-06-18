import { UserSettings } from "@src/types/settings";
import TextInput from "./TextInput";
import Textarea from "./Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@src/components/ui/form";
import { Input as InputField } from "@src/components/ui/input";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import Icon from "@base/public/images/icon48.png";
import { Button } from "@src/components/ui/button";
import manifest from "@base/manifest.json";
import { createRef, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@src/components/ui/alert-dialog";
import Input from "./Input";
import Select from "./Select";
import { toast } from "sonner";
import { userSettingsKey } from "@src/constants/keys";
import { getItem } from "@src/lib/chromeUtils";

interface FormProps {
  initialData: UserSettings | null;
  onSave: (settings: UserSettings | null) => void;
}

const formSchema: ZodType<UserSettings> = z.object({
  token: z.string().min(1, "Please enter a valid API token"),
  baseURL: z.string().url("Please enter a valid URL"),
  evaluation: z.object({
    strictness: z.enum(["strict", "moderate", "loose"]),
    tone: z.enum(["formal", "friendly", "constructive"]),
    length: z.enum(["short", "medium", "detailed"]),
    customFeedbackPrompt: z.string(),
  }),
});

export default function FormComponent({ initialData, onSave }: FormProps) {
  const defaultValues: UserSettings = {
    token: "",
    baseURL: "",
    evaluation: {
      strictness: "moderate",
      tone: "constructive",
      length: "medium",
      customFeedbackPrompt: "",
    },
  };
  const form = useForm<UserSettings>({
    defaultValues: initialData || defaultValues,
    resolver: zodResolver(formSchema),
  });

  const fileUploadRef = createRef<HTMLInputElement>();

  useEffect(() => {
    form.reset(initialData || defaultValues);
  }, [initialData, form]);

  const handleReset = () => {
    form.reset(defaultValues);
    onSave(null);
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const importedSettings: UserSettings = JSON.parse(text);
      formSchema.parse(importedSettings);
      form.reset(importedSettings);
      onSave(importedSettings);
      fileUploadRef.current!.value = "";
    } catch (error) {
      toast.error("Failed to import settings: uploaded file is invalid.");
    }
  };

  const handleExport = async () => {
    try {
      const currentSettings = await getItem<UserSettings>(userSettingsKey);
      const dataStr = JSON.stringify(currentSettings, null, 2);
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "canvas_settings.json";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Failed to export settings");
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center h-16 p-4 bg-white z-10">
        <div className="flex items-center">
          <img src={Icon} alt="Icon" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">
            {manifest.name}
          </span>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              window.location.hash = "#task";
            }}
            variant="secondary"
          >
            View Tasks
          </Button>
          <Button
            onClick={form.handleSubmit(onSave)}
            disabled={!form.formState.isDirty}
          >
            Save settings
          </Button>
        </div>
      </header>
      <div className="max-w-2xl mx-auto mt-24 p-4">
        <Form {...form}>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Canvas Settings</h2>
            <FormField
              control={form.control}
              name="baseURL"
              render={({ field, fieldState }) => (
                <TextInput
                  label="Canvas URL"
                  description="The base URL of your Canvas instance"
                  placeholder="https://example.instructure.com"
                  errorMessage={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <FormField
              control={form.control}
              name="token"
              render={({ field, fieldState }) => (
                <TextInput
                  label="API Token"
                  description="The API token to authenticate with Canvas"
                  errorMessage={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">AI Settings</h2>
            <div>
              <FormField
                control={form.control}
                name="evaluation.strictness"
                render={({ field }) => (
                  <Select
                    label="Grading Strictness"
                    description="The strictness of grading suggestions"
                    options={["loose", "moderate", "strict"]}
                    {...field}
                    defaultValue={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="evaluation.customFeedbackPrompt"
                render={({ field }) => (
                  <Textarea
                    label="Custom Feedback Prompt"
                    description="A custom prompt for feedback suggestions"
                    placeholder="Please focus on giving constructive feedback that encourages learning and improvement."
                    {...field}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="evaluation.tone"
                render={({ field }) => (
                  <Select
                    label="Feedback Tone"
                    description="The tone of feedback suggestions"
                    options={["formal", "friendly", "constructive"]}
                    {...field}
                    defaultValue={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <FormField
                control={form.control}
                name="evaluation.length"
                render={({ field }) => (
                  <Select
                    label="Feedback Length"
                    description={
                      <p>
                        short: 1-2 sentences
                        <br />
                        medium: 2-3 sentences
                        <br />
                        detailed: 3+ sentences
                      </p>
                    }
                    options={["short", "medium", "detailed"]}
                    {...field}
                    defaultValue={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">
              Danger Zone
            </h2>
            <Input label="Reset" description="Reset all settings to default">
              <AlertDialog>
                <Button asChild variant="destructive">
                  <AlertDialogTrigger type="button">Reset</AlertDialogTrigger>
                </Button>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently reset
                      all settings to their default values.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleReset}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Input>
            <Input
              label="Import Settings"
              description="It will overwrite all current settings"
            >
              <>
                <InputField
                  type="file"
                  ref={fileUploadRef}
                  onChange={handleImport}
                  accept="application/json"
                  className="hidden"
                />
                <Button
                  onClick={() => fileUploadRef.current?.click()}
                  variant="secondary"
                >
                  Import
                </Button>
              </>
            </Input>
            <Input
              label="Export Settings"
              description="Export all saved settings to a JSON file"
            >
              <Button variant="secondary" onClick={handleExport}>
                Export
              </Button>
            </Input>
          </section>
        </Form>
      </div>
    </>
  );
}
