interface InputProps {
  label: string | JSX.Element;
  description?: string | JSX.Element;
  children: JSX.Element;
}

const Input = ({ label, description, children }: InputProps) => (
  <div className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-[#d3d3d3] py-6 items-center">
    <div>
      <label className="block text-base font-bold text-[#323232] pb-1">
        {label}
      </label>
      {description && <p className="text-sm text-[#505050]">{description}</p>}
    </div>
    <div>{children}</div>
  </div>
);

export default Input;
