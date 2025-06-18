import { useState, useEffect } from "react";
import Form from "./components/Form";
import { toast } from "sonner";
import { Toaster } from "@src/components/ui/sonner";
import { User, UserSettings } from "@src/types";
import {
  GET_OPTIONS_DATA,
  userSettingsKey,
  userKey,
  REFRESH_DATA,
} from "@src/constants/keys";
import Task from "./tasks";
import { getItem, resetData, setItem } from "@src/lib/chromeUtils";
import { validateSettings } from "@src/apis";

const Options = () => {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [currentScreen, setCurrentScreen] = useState(window.location.hash);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Added loading state

  useEffect(() => {
    const loadOptionsData = async () => {
      const data = await chrome.runtime.sendMessage({
        type: GET_OPTIONS_DATA,
      });
      if (data) window.location.hash = data;
    };

    if (!window.location.hash) {
      loadOptionsData();
    }

    const loadSettings = async () => {
      try {
        const storedSettings = await getItem<UserSettings>(userSettingsKey);
        setSettings(storedSettings ?? null);
      } catch (error) {
        setSettings(null);
        toast.error("Failed to load settings.");
      } finally {
        setIsLoading(false);
      }
    };
    loadSettings();

    const handleHashChange = () => {
      setCurrentScreen(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      document.title = "FeedbackAI Settings";
    }
  }, [currentScreen]);

  /**
   * Validates the new Canvas settings by fetching user details.
   * @param token The new Canvas API token.
   * @param baseURL The new Canvas base URL.
   * @returns The fetched User details.
   * @throws If validation fails.
   */
  const validateNewSettings = async (
    token: string,
    baseURL: string
  ): Promise<User> => {
    try {
      return await validateSettings(token, baseURL);
    } catch (error) {
      throw new Error("Invalid token or base URL");
    }
  };

  const handleSave = async (newSettings: UserSettings | null) => {
    if (newSettings === null) {
      try {
        setSettings(null);
        await resetData();
        toast.success("Settings have been reset");
      } catch (error) {
        toast.error("Failed to reset settings");
      }
      return;
    }

    try {
      const user: User = await validateNewSettings(
        newSettings.token,
        newSettings.baseURL
      );

      const oldUser = await getItem<User>(userKey);
      if (oldUser && oldUser.id !== user.id) {
        await resetData();
      }

      await Promise.all([
        setItem(userSettingsKey, newSettings),
        setItem(userKey, user),
      ]);

      chrome.runtime.sendMessage({ type: REFRESH_DATA });
      setSettings(newSettings);
      toast.success("Settings saved successfully");
    } catch (error) {
      toast.error(
        "Error saving settings. Please check your token and base URL."
      );
    }
  };

  if (isLoading) {
    return <></>;
  }

  if (currentScreen.startsWith("#task")) {
    return <Task />;
  }

  return (
    <>
      <Form initialData={settings} onSave={handleSave} />
      <Toaster />
    </>
  );
};

export default Options;
