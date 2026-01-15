import { useEffect, useState } from "react";

const stages = [
  {
    label: "Instructions",
    color: "bg-linear-to-b from-[#4C9C00] to-[#A6F55B]",
    lineColor: "bg-green-500/20",
    target: 25,
  },
  {
    label: "Collaboration",
    color: "bg-[#C6AD33]",
    lineColor: "bg-yellow-500/20",
    target: 50,
  },
  {
    label: "Execution",
    color: "bg-[#339FC6]",
    lineColor: "bg-[#339FC6]/20",
    target: 75,
  },
  {
    label: "Result",
    color: "bg-[#E86937]",
    lineColor: "bg-[#E86937]/20",
    target: 100,
  },
];

const AnimatedCard = () => {
  // State to trigger the start of animations
  const [startAnimation, setStartAnimation] = useState(false);
  // State to hold current percentage values for text counter
  const [counts, setCounts] = useState(stages.map(() => 0));

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newCounts = prevCounts.map((count, index) => {
          const target = stages[index].target;
          if (count < target) {
            // Target duration: 2500ms
            // Interval: 16ms
            // Total steps = 2500 / 16 = ~156 steps
            // Step size = target / 156.
            // For target 100: 100/156 = 0.64. We need floats or keep it simple integers.
            // If we use simple integers, Math.ceil(100/156) is 1.
            // 1 * 156 = 156% -> too fast? 156 steps * 1 = 156.
            // Actually, if step is 1, it takes 100 steps. 100 * 16ms = 1600ms = 1.6s.
            // If we want 2.5s, we need 2500ms / 100 steps = 25ms interval for step 1.
            // Let's stick to integer steps for cleanest text roughly matching the ball.
            // To make it 2500ms with step 1 (implied), we need interval ~25ms.
            // Let's try 30ms interval with step 1. 30ms * 100 = 3000ms = 3s. a bit slower than 2.5s.
            // Let's try 25ms interval.
            const step = 1;
            return Math.min(count + step, target);
          }
          return count;
        });

        // If all reached target, clear interval
        if (newCounts.every((c, i) => c === stages[i].target)) {
          clearInterval(interval);
        }
        return newCounts;
      });
    }, 25); // 25ms * 100 = 2.5s for 0-100%

    return () => clearInterval(interval);
  }, [startAnimation]);

  return (
    <div className="w-full  h-[175px] md:h-[230px] text-start   rounded-lg object-cover bg-[#E6E6E6] px-6 md:px-[47px] py-6 md:py-6">
      <h3 className="text-md manrope md:text-lg font-semibold text-gray-800 mb-2 md:mb-6 pointer-events-none select-none">
        Instructions to Execution
      </h3>

      <div className="flex flex-col gap-1 md:gap-2">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-center w-full gap-2 group">
            {/* Dot & Label Container - Fixed Width */}
            <div className="flex items-center gap-2 w-[120px]  shrink-0">
              <div
                className={` md:w-3 md:h-3 w-2.5 h-2.5 rounded-full flex-shrink-0 ${stage.color} `}
              />

              {/* Label */}
              <div className="manrope font-regular text-sm md:text-md text-[#545454] pointer-events-none select-none">
                {stage.label}
              </div>
            </div>

            {/* Progress Line Container - Flexible Width */}
            <div className="flex-1 relative mr-2">
              {/* ball to be moved horizontally */}
              <div
                className={`w-2 h-2 absolute bottom-[50%] translate-y-[50%] rounded-full ${stage.color} transition-all duration-[2500ms] ease-out z-10`}
                style={{
                  left: startAnimation ? `${stage.target}%` : "0%",
                  transitionDelay: `${index * 200}ms`,
                }}
              />
              {/* line */}
              <div className={`w-full h-[0.5px] bg-[#545454]/30 `} />
            </div>

            {/* Percentage to be increased - Fixed Width */}
            <div
              className={`text-[#545454] manrope font-regular text-sm md:text-md transition-opacity duration-500 pointer-events-none select-none tabular-nums w-12 text-left shrink-0`}
            >
              {counts[index]}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCard;
