// useLocalStorage.ts
import { useState, useEffect } from "react";

const getStoredValue = <T>(key: string, defaultValue: T[]): T[] => {
  const savedItem = localStorage.getItem(key);
  if (savedItem) {
    return JSON.parse(savedItem);
  }
  return defaultValue; // Return default value (an empty array) if item is not found
};

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T[]
): [T[], React.Dispatch<React.SetStateAction<T[]>>] => {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, defaultValue); // Initialize with default value
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
