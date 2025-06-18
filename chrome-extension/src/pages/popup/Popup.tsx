import { useState, useEffect } from "react";
import { Header, CourseNavigator, Footer } from "./components";
import { TOGGLE_INJECTION, userKey } from "@src/constants/keys";
import { User } from "@src/types";
import { Button } from "@src/components/ui/button";
import { getItem, setItem } from "@src/lib/chromeUtils";

const Popup = () => {
  const [hasSettings, setHasSettings] = useState(false);
  const [enableOnSite, setEnableOnSite] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItem<User>(userKey).then(() => setHasSettings(true));
    getItem<boolean>(TOGGLE_INJECTION).then(
      (value) => value && setEnableOnSite(value)
    );
    setIsLoading(false);
  }, []);

  const handleToggle = async (checked: boolean) => {
    await setItem(TOGGLE_INJECTION, checked);
    setEnableOnSite(checked);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-72 h-96">
        Loading...
      </div>
    );
  }

  if (!hasSettings) {
    return (
      <div className="w-72 p-4">
        <h1 className="text-xl font-bold mb-2">FeedbackAI</h1>
        <p className="text-sm text-gray-700 mb-4">
          Please set your API token and base URL in the settings to continue.
        </p>
        <Button onClick={() => chrome.runtime.openOptionsPage()}>
          Open Settings
        </Button>
      </div>
    );
  }

  return (
    <div className="w-72">
      <Header />
      <CourseNavigator />
      <Footer enableOnSite={enableOnSite} handleToggle={handleToggle} />
    </div>
  );
};

export default Popup;
