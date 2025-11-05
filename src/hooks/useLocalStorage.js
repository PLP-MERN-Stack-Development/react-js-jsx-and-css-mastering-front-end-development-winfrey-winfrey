import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key); //loading the data from local storage if possible
    return saved ? JSON.parse(saved) : initialValue; //returns a JSON string if saved and the initialValue if not saved
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
