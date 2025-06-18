import { Switch } from "@src/components/ui/switch";
import { ComponentProps } from "react";
import Input from "./Input";

type ToggleProps = {
  label: string;
  description?: string;
} & ComponentProps<typeof Switch>;

const Toggle = ({ label, description, ...rest }: ToggleProps) => {
  return (
    <Input label={label} description={description}>
      <Switch {...rest} />
    </Input>
  );
};

export default Toggle;
