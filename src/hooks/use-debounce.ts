import React, { useRef } from "react";

export default function useDebounce(
  callback: Function,
  timeout: number
): Function {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const debouncedFunction = (...args: any[]) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, timeout);
  };

  return debouncedFunction;
}
