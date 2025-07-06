import { useCallback, useRef } from 'react';

/**
 * Custom hook for throttling function calls
 * @param {Function} callback - Function to throttle
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Throttled function
 */
export const useThrottle = (callback, delay) => {
  const lastRun = useRef(Date.now());

  return useCallback(
    (...args) => {
      if (Date.now() - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = Date.now();
      }
    },
    [callback, delay]
  );
};

/**
 * Custom hook for debouncing function calls
 * @param {Function} callback - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);

  return useCallback(
    (...args) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );
};

/**
 * Custom hook for optimized scroll handling
 * @param {Function} callback - Scroll callback function
 * @param {number} throttleMs - Throttle delay in milliseconds
 * @returns {Function} Optimized scroll handler
 */
export const useOptimizedScroll = (callback, throttleMs = 16) => {
  const ticking = useRef(false);

  return useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        callback();
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [callback]);
};

/**
 * Custom hook for optimized mouse tracking
 * @param {Function} callback - Mouse move callback
 * @param {number} throttleMs - Throttle delay in milliseconds
 * @returns {Function} Optimized mouse handler
 */
export const useOptimizedMouseMove = (callback, throttleMs = 16) => {
  const frameId = useRef(null);

  return useCallback(
    (event) => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      
      frameId.current = requestAnimationFrame(() => {
        callback(event);
      });
    },
    [callback]
  );
};
