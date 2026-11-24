import { useEffect, useState } from "react";

interface SlideInSectionProps {
  children: React.ReactNode;
  trigger: any; // The value that triggers the animation
  className?: string;
  style?: React.CSSProperties;
}

const SlideInSection = ({ children, trigger, className = "", style }: SlideInSectionProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <div
      className={`transition-all duration-1500 ease-out ${
        animate 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-10'
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default SlideInSection;