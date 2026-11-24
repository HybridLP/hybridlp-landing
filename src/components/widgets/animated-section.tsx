import { useScrollAnimation } from "../../utils/useScrollAnimation";

const AnimatedSection = ({
  children,
  delay = 0,
  className,
  style
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
    
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;