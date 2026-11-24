// hooks/useIntersectionObserver.js
import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally, unobserve after it becomes visible if you only want the animation once
          observer.unobserve(entry.target);
        } else {
          // If you want the animation to reset when scrolling out of view, uncomment this
          // setIsVisible(false);
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]); // Re-run effect if options change (though typically static)

  return [elementRef, isVisible];
};

export default useIntersectionObserver;