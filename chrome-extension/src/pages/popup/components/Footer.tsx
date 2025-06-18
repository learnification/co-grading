import { Switch } from "@src/components/ui/switch";

interface FooterProps {
  enableOnSite: boolean;
  handleToggle: (checked: boolean) => void;
}

const Footer = ({ enableOnSite, handleToggle }: FooterProps) => {
  return (
    <div className="flex px-2 py-3 gap-2 items-center border-t border-zinc-200">
      <Switch onCheckedChange={handleToggle} checked={enableOnSite}></Switch>
      <p className="text-sm text-[#4b4b4b]">Enable on site</p>
    </div>
  );
};

export default Footer;
