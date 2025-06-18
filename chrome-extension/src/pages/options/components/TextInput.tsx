import Input from "./Input";
import { Input as _TextInput } from "@src/components/ui/input";

type TextInputProps = {
  label: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
  label,
  description,
  errorMessage,
  ...props
}: TextInputProps) => {
  return (
    <Input label={label} description={description}>
      <div>
        <_TextInput
          {...props}
          className="w-64 mt-2 px-4 text-sm border border-[#d3d3d3] rounded-md focus:outline-none focus:border-[#323232] focus:ring focus:ring-opacity-50 focus:ring-[#323232]"
        />
        {errorMessage && (
          <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
        )}
      </div>
    </Input>
  );
};

export default TextInput;
