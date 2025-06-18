import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";

import { Button } from "@src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import { userKey, userSettingsKey } from "@src/constants/keys";
import { getItem } from "@src/lib/chromeUtils";
import { User, UserSettings } from "@src/types";
import { useEffect, useState } from "react";

export function UserNav() {
  const [user, setUser] = useState<User>();
  const [userSettings, setUserSettings] = useState<UserSettings>();

  useEffect(() => {
    const loadUserData = async () => {
      const user = await getItem<User>(userKey);
      const userSettings = await getItem<UserSettings>(userSettingsKey);
      if (!user || !userSettings) {
        return;
      }
      setUser(user);
      setUserSettings(userSettings);
    };

    loadUserData();
  }, []);

  if (!user) {
    return null;
  }

  const openCanvas = () => {
    if (!userSettings) {
      return;
    }

    chrome.tabs.create({
      url: `${userSettings.baseURL}`,
    });
  };

  const openOptionsPage = () => {
    window.location.hash = "";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar_url} alt={user.name} />
            <AvatarFallback>{user.last_name}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.id}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={openCanvas}>Open Canvas</DropdownMenuItem>
          <DropdownMenuItem onClick={openOptionsPage}>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
