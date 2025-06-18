/**
 * Stores a key-value pair in Chrome's local storage.
 *
 * @param key - The key under which the value will be stored.
 * @param value - The value to store. Can be of any type.
 * @returns A Promise that resolves when the value is successfully stored.
 */
export const setItem = (key: string, value: unknown): Promise<void> =>
  chrome.storage.local.set({ [key]: value });

/**
 * Retrieves a value from Chrome's local storage by its key.
 *
 * @typeParam T - The expected type of the retrieved value.
 * @param key - The key of the value to retrieve.
 * @returns A Promise that resolves to the value associated with the key, or undefined if the key does not exist.
 */
export const getItem = <T>(key: string): Promise<T | undefined> =>
  chrome.storage.local.get(key).then((result) => result[key]);

/**
 * Removes a key-value pair from Chrome's local storage.
 *
 * @param key - The key of the item to remove.
 * @returns A Promise that resolves when the item is successfully removed.
 */
export const removeItem = (key: string): Promise<void> =>
  chrome.storage.local.remove(key);

/**
 * Retrieves the URL of the currently active tab in the current window.
 *
 * @returns A Promise that resolves to the active tab's URL as a string, or null if no active tab is found.
 */
export const getActiveTabUrl = async (): Promise<string | null> => {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  const activeTab = tabs[0];
  return activeTab?.url ?? null;
};

/**
 * Resets the extension's data by clearing both local and sync storage,
 * and updates the browser action badge text to indicate a reset.
 *
 * @returns A Promise that resolves when all reset operations are complete.
 */
export const resetData = () =>
  Promise.all([
    chrome.storage.local.clear(),
    chrome.storage.sync.clear(),
    chrome.action.setBadgeText({ text: "!" }),
  ]);
