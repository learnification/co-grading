import { Button } from "@src/components/ui/button";
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

interface ActionPanelProps {
  onUpload: () => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  hasAccepted: boolean;
}

const ActionPanel = ({
  onUpload,
  onAcceptAll,
  onRejectAll,
  hasAccepted,
}: ActionPanelProps) => {
  return (
    <>
      <div className="flex justify-end space-x-4 mt-4">
        {/* Accept All */}
        <Button variant="secondary" onClick={onAcceptAll}>
          Accept All
        </Button>
        {/* Cancel All with Confirmation */}
        <Button variant="secondary" onClick={onRejectAll}>
          Cancel All
        </Button>

        {/* Submit to Canvas with Confirmation */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button disabled={!hasAccepted}>Submit to Canvas</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Submit</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to submit the accepted grades and feedback
                to Canvas?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onUpload}>Confirm</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default ActionPanel;
