import {
  Select as _Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import Input from "./Input";

type SelectProps<T extends string | number> = {
  label: string | JSX.Element;
  description?: string | JSX.Element;
  options: T[];
  onChange: (value: T) => void;
  defaultValue?: T;
};

export default function Select<T extends string | number>({
  label,
  description,
  options,
  onChange,
  defaultValue,
}: SelectProps<T>) {
  // Create a mapping from string representations to actual values
  const optionMap = options.reduce((map, option) => {
    map[option.toString()] = option;
    return map;
  }, {} as Record<string, T>);

  return (
    <Input label={label} description={description}>
      <_Select
        onValueChange={(value) => {
          const selectedValue = optionMap[value];
          if (selectedValue !== undefined) {
            onChange(selectedValue);
          }
        }}
        defaultValue={defaultValue?.toString()}
      >
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, i) => (
            <SelectItem
              key={i}
              value={option.toString()}
              className="capitalize"
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </_Select>
    </Input>
  );
}
