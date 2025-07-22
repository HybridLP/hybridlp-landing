import { useState } from "react";
import briefs from "../../../assets_/briefs.png";
import collaborate from "../../../assets_/collaborate.jpg";
import shareBriefs from "../../../assets_/sharing briefs.png";
import AnimatedSection from "../../../components/widgets/animated-section";
import SlideInSection from "../../../components/widgets/slide-in-section";
const items = [
  {
    title: "Briefs",
    content:
      "When you’ve got a dispute, just open Hybrid LP and brief the most capable lawyers in the field.",
  },
  {
    title: "Collaborate",
    content:
      "Which-ever area of law your brief falls, you get merged with the best lawyers in the field to address your brief.",
  },
  {
    title: "Share Briefs",
    content:
      "Lawyers share personal briefs with colleague lawyers to collaborate and fast track productivity.",
  },
];
export default () => {
  const [clicked, setClicked] = useState(0);

  return (
    <>
      <div className="flex py-8 md:py-16 lg:py-20 flex-col gap-6 md:gap-8 lg:gap-10 bg-black text-white px-4 md:px-8 lg:px-16 xl:px-30">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-0">
          <div className=" flex flex-col space-y-4  ">
            <h6 className="text-black h-12 md:h-14 bg-gray-100 w-fit px-4 md:px-6 flex items-center justify-center rounded-md text-center text-sm md:text-base lato-regular">
              About HybridLP
            </h6>
            <h1 className="text-2xl md:text-3xl lg:text-[40px] text-white font-bold inter leading-tight">
              Your Legal Powerhouse
            </h1>
          </div>
          <p className="text-white text-base md:text-lg lg:text-[20px] lato-regular font-normal lg:w-[59%] leading-relaxed">
            Hybrid Law Practice is your legal powerhouse designed for your
            seamless legal offering/service experience. Every brief,
            collaboration, interview find it’s place, keeping you at the top of
            your game.
          </p>
        </div>
        {/* Mobile Layout - Stacked */}
        <div className="block lg:hidden mt-6">
          {/* Image Section - Mobile */}
          <div className="relative mb-6">
            <SlideInSection
              trigger={clicked}
              className="w-full h-64 md:h-80 rounded-lg relative overflow-hidden"
              style={{
                backgroundImage: `url(${clicked === 0
                    ? briefs
                    : clicked === 1
                      ? collaborate
                      : shareBriefs
                  })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Dots Indicator - Mobile */}
              <div className="flex justify-center space-x-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`rounded-full h-3 transition-all duration-300 ${clicked === index
                        ? "bg-white w-8"
                        : "bg-gray-300 w-3"
                      }`}
                  />
                ))}
              </div>
            </SlideInSection>
          </div>

          {/* Feature Cards - Mobile */}
          <AnimatedSection className="flex flex-col space-y-4">
            {items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setClicked(idx)}
                  className={`rounded-md ${clicked === idx ? "border-l-8" : "border-l-4"
                    } border-[#DED08A] cursor-pointer flex flex-col w-full min-h-[100px] p-4 bg-[#1D1D1D] transition-all duration-300 ${clicked === idx && "shadow-lg"
                    }`}
                  style={{
                    boxShadow: clicked === idx
                      ? "0px 4px 10px 0px #FFFFFF33 inset, 0px -1px 10px 0px #FFFFFF40 inset"
                      : "none",
                  }}
                >
                  <h3 className="text-xl md:text-2xl inter-font mb-2">{item.title}</h3>
                  <p className="text-white font-normal text-sm md:text-base lato-regular leading-relaxed">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </AnimatedSection>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex justify-between mt-8">
          <AnimatedSection className="flex flex-col space-y-4 w-[42%]">
            {items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setClicked(idx)}
                  className={`rounded-md ${clicked === idx ? "border-l-10" : "border-l-2"
                    } border-[#DED08A] cursor-pointer flex flex-col w-full h-28 shadow-xs p-2 bg-[#1D1D1D] transition-all duration-300 ${clicked === idx && "shadowed"
                    }`}
                  style={{
                    boxShadow:
                      "0px 4px 10px 0px #FFFFFF33 inset, 0px -1px 10px 0px #FFFFFF40 inset",
                  }}
                >
                  <h3 className="text-[24px] inter-font">{item.title}</h3>
                  <p className="text-white font-normal text-[14px] md:text-lg lato-regular">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </AnimatedSection>

          <SlideInSection
            trigger={clicked}
            className="w-[53%] h-inherit rounded-lg relative"
            style={{
              backgroundImage: `url(${clicked === 0
                  ? briefs
                  : clicked === 1
                    ? collaborate
                    : shareBriefs
                })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex justify-end space-x-2 absolute -top-[10%] right-0">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`rounded-full w-4 h-4 bg-gray-300 transition-all duration-300 ${clicked === index && "bg-[#fff] w-10"
                    }`}
                />
              ))}
            </div>
          </SlideInSection>
        </div>
      </div>
    </>
  );
};
