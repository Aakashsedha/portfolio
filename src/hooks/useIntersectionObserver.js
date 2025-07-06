import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for intersection observer with animation support
 * @param {Object} options - Intersection observer options
 * @returns {Array} [ref, isVisible, hasAnimated]
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        ...options
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin, options.once, hasAnimated]);

  return [ref, isVisible, hasAnimated];
};

/**
 * Custom hook for multiple elements intersection observer
 * @param {Object} options - Intersection observer options
 * @returns {Function} Function to register elements
 */
export const useMultipleIntersectionObserver = (options = {}) => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);
  const elementsRef = useRef(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.dataset.observerId;
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, elementId]));
          } else if (!options.once) {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              newSet.delete(elementId);
              return newSet;
            });
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        ...options
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  const registerElement = (element, id) => {
    if (element && observerRef.current) {
      element.dataset.observerId = id;
      observerRef.current.observe(element);
      elementsRef.current.set(id, element);
    }
  };

  const unregisterElement = (id) => {
    const element = elementsRef.current.get(id);
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
      elementsRef.current.delete(id);
      setVisibleElements(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  return { registerElement, unregisterElement, visibleElements };
};

/**
 * Custom hook for scroll-triggered animations
 * @param {string} animationClass - CSS class to apply when visible
 * @param {Object} options - Intersection observer options
 * @returns {Array} [ref, isVisible]
 */
export const useScrollAnimation = (animationClass = 'animate-on-scroll', options = {}) => {
  const [ref, isVisible] = useIntersectionObserver({ once: true, ...options });

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add(animationClass);
      if (isVisible) {
        ref.current.classList.add('visible');
      }
    }
  }, [isVisible, animationClass]);

  return [ref, isVisible];
};
