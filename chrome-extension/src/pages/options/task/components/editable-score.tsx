import { useState } from "react";
import { Input } from "@src/components/ui/input";

interface EditableScoreProps {
  initialScore: number;
  onSave: (newScore: number) => void;
}

const EditableScore = ({ initialScore, onSave }: EditableScoreProps) => {
  const [score, setScore] = useState(initialScore);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScore = Number(e.target.value);
    setScore(newScore);
    onSave(newScore);
  };

  return (
    <div>
      <div className="flex flex-col space-y-2">
        <Input type="number" value={score} onChange={onChange} />
      </div>
    </div>
  );
};

export default EditableScore;
