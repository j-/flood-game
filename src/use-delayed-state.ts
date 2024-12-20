import { useEffect, useRef, useState } from 'react';

export const useDelayedState = <T>(state: T, delayMs: number) => {
  const mountedRef = useRef(false);
  const [current, setCurrent] = useState(state);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const clock = setTimeout(() => {
      setCurrent(state);
    }, delayMs);

    return () => {
      if (!mountedRef.current) {
        clearTimeout(clock);
      }
    };
  }, [state, delayMs]);

  return current;
};
