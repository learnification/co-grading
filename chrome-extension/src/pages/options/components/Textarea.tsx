import { ComponentProps } from "react";
import { Textarea as _Textarea } from "@src/components/ui/textarea";

type TextareaProps = {
  label: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
} & ComponentProps<typeof _Textarea>;

const Textarea = ({
  label,
  description,
  errorMessage,
  ...props
}: TextareaProps) => {
  return (
    <div className="grid gap-x-4 border-b border-[#d3d3d3] py-6 items-center">
      <div>
        <label className="block text-base font-bold text-[#323232] pb-1">
          {label}
        </label>
        {description && <p className="text-sm text-[#505050]">{description}</p>}
      </div>
      <div>
        <_Textarea
          {...props}
          rows={4}
          maxLength={150}
          className="w-full mt-2 px-4 text-sm border border-[#d3d3d3] rounded-md focus:outline-none focus:border-[#323232] focus:ring focus:ring-opacity-50 focus:ring-[#323232]"
        />
        {errorMessage && (
          <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Textarea;
