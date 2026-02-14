import DynamicLawyerCard, { stages } from "./dynamic-lawyer-card";
import { useState, useEffect } from "react";

const ctaStages = [
  { text: "Get a lawyer", to: "https://app.hybridlp.com" },
  { text: "request for Legal Advice", to: "https://app.hybridlp.com" },
  { text: "explore our services", to: "#briefs" },
];

export default () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ctaIndex, setCtaIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isCtaVisible, setIsCtaVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setIsCtaVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % stages.length);
        setIsVisible(true);
        setCtaIndex((prev) => (prev + 1) % ctaStages.length);
        setIsCtaVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentLawyer = stages[currentIndex];
  const currentCta = ctaStages[ctaIndex];

  return (
    <section
      className={`flex min-h-screen relative  md:min-h-[130dvh]  pt-[27%] md:pt-[10%] pb-8 md:pb-0  items-center   overflow-hidden-`}
    >
      <div className="absolute h-full top-0 left-0 right-0 inset-0 z-50 pointer-events-none" />
      <div className="flex flex-col items-center text-center w-full   ">
        <h3 className="uppercase text-[14px] md:text-[16px] lato-regular w-fit">
          Hybrid Law Practice
        </h3>
        <div className="mt-2 md:mt-4">
          <h1 className="text-white inter-font text-center text-3xl md:text-4xl lg:text-[56px] whitespace-wrap font-bold leading-tight">
            Connect with
          </h1>
          <h1 className="text-white inter-font text-center text-3xl md:text-4xl lg:text-[56px] whitespace-wrap font-bold leading-tight">
            Legal Experts
          </h1>
        </div>

        <p className="text-white text-center font-regular text-[16px] md:text-[18px] lg:text-[24px] lator-regular italic w-fit my-4 md:my-6 lg:my-8 px-4 md:px-0">
          Experience Digital Legal Service Delivery
        </p>
        <a
          className="bg-linear-to-b from-[#CAA500] to-[#825900] text-white w-full max-w-[280px] md:max-w-[320px] lg:w-[268px] text-[16px] rounded-full text-center py-3 px-6 md:p-4 mb-6 md:mb-8 transition-all duration-300 active:scale-95 h-[52px] md:h-[60px] flex items-center justify-center overflow-hidden"
          href={currentCta.to}
        >
          <span
            className={`text-white lato-regular transition-all duration-500 capitalize transform ${
              isCtaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            {currentCta.text}
          </span>
        </a>
        <div className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-4 relative  w-full   mt-auto  md:pb-8 md:mb-4 md:mt-8 px-4 lg:px-[312px]">
          <div className="flex flex-col  gap-3 md:gap-4 w-full md:w-auto  lg:w-[774px]">
            <img
              className={`h-[478px] w-full rounded-lg object-cover  object-center  transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[50%]"
              }`}
              src={currentLawyer.image}
              alt="lawyer"
            />
            <div
              className={`transition-all h-[175px] md:h-[175px] duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-[50%]"
              }`}
            >
              <DynamicLawyerCard data={currentLawyer} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
