import { useState, useEffect } from "react";
import { Button } from "@src/components/ui/button";
import { Textarea } from "@src/components/ui/textarea"; // Ensure a Textarea component exists

interface EditableFeedbackProps {
  initialFeedback: string;
  onSave: (newFeedback: string) => void;
}

const EditableFeedback = ({
  initialFeedback,
  onSave,
}: EditableFeedbackProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [feedback, setFeedback] = useState(initialFeedback);

  useEffect(() => {
    setFeedback(initialFeedback);
  }, [initialFeedback]);

  const handleSave = () => {
    onSave(feedback);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFeedback(initialFeedback); // Reset feedback to initial value
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex flex-col space-y-2">
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full"
            rows={4}
          />
          <div className="flex space-x-2">
            <Button onClick={handleSave}>Save</Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <p className="text-sm">{feedback}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditableFeedback;
