import { useEffect, useRef } from "react";

export const useOnClickOutside = (
  onCLick: (event: MouseEvent | TouchEvent) => void,
) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      onCLick(event);
    };

    document.addEventListener("mousedown", listener);

    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);

      document.removeEventListener("touchstart", listener);
    };
  }, [onCLick]);

  return ref;
};
