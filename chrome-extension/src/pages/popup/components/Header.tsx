import Icon from "@base/public/images/icon48.png";
import { GearIcon, ReloadIcon } from "@radix-ui/react-icons";
import manifest from "@base/manifest.json";
import { Button } from "@src/components/ui/button";
import { REFRESH_DATA } from "@src/constants/keys";
import { useState } from "react";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSettings = () => {
    chrome.runtime.openOptionsPage();
  };

  const refreshData = async () => {
    setIsLoading(true);
    await chrome.runtime.sendMessage({ type: REFRESH_DATA });
    setIsLoading(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-zinc-200 sticky top-0 z-10">
      <div className="flex items-center">
        <img src={Icon} alt="Icon" className="w-6 h-6 mr-2" />
        <span className="text-lg font-bold text-gray-800">{manifest.name}</span>
      </div>
      <div className="gap-1">
        <Button
          onClick={refreshData}
          aria-label="Refresh"
          variant="ghost"
          size="icon"
          className="size-8"
          disabled={isLoading}
        >
          <ReloadIcon
            className="size-3 animate-spin"
            style={{ animationPlayState: isLoading ? "running" : "paused" }}
          />
        </Button>
        <Button
          onClick={handleSettings}
          aria-label="Settings"
          variant="ghost"
          size="icon"
          className="size-8"
        >
          <GearIcon className="size-3" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
