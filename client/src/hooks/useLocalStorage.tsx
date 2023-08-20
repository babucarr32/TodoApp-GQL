import React, { useEffect } from "react";

function useLocalStorage() {
  const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  return [setLocalStorage];
}

export default useLocalStorage;
