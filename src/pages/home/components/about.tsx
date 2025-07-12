import { useEffect, useState } from "react";
import briefs from "../../../assets_/brief-submission.jpg";
import collaborate from "../../../assets_/collaborate.jpg";
import shareBriefs from "../../../assets_/sticky-note.jpg";
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
      <div className=" flex py-20 flex-col  gap-10 bg-black text-white md:px-30">
        <div className="flex justify-between items-end  ">
          <div className=" flex flex-col space-y-4  ">
            <h6 className="text-black h-14 bg-gray-100 w-[40%] flex items-center justify-center rounded-md  text-center text-[16px] lato-regular ">
              About HybridLP
            </h6>
            <h1 className="text-[30px] lg:text-[40px] text-white font-bold inter">
              Your Legal Powerhouse
            </h1>
          </div>
          <p className="text-white text-[20px] lato-regular font-normal w-[59%]">
            Hybrid Law Practice is your legal powerhouse designed for your
            seamless legal offering/service experience. Every brief,
            collaboration, interview find it’s place, keeping you at the top of
            your game.
          </p>
        </div>
        <div className="flex  justify-between mt-8">
          <AnimatedSection className="flex flex-col space-y-4  w-[42%]">
            {items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setClicked(idx)}
                  className={` rounded-md  ${
                    clicked === idx ? "border-l-10" : "border-l-2"
                  } border-[#DED08A] cursor-pointer flex flex-col w-full h-28 shadow-xs  p-2 bg-[#1D1D1D] ${clicked===idx &&"shadowed"}`}
                  style={{
                    boxShadow:
                      "0px 4px 10px 0px #FFFFFF33 inset  0px -1px 10px 0px #FFFFFF40 inset",
                  }}
                >
                  <h3 className="text-[24px] inter-font">{item.title}</h3>
                  <p className="text-white font-normal text-[14px] md:text-lg lator-regular ">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </AnimatedSection>
          <SlideInSection
            trigger={clicked}
            className={` w-[53%] h-inherit rounded-lg `}
            style={{
              backgroundImage: `url(${
                clicked === 0
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
              {[1, 2, 3].map((_, index) => (
                <div
                  className={`rounded-full w-4 h-4 bg-gray-300 ${
                    clicked === index && "bg-[#fff] w-10"
                  }`}
                  key={index}
                />
              ))}
            </div>
          </SlideInSection>
        </div>
      </div>
    </>
  );
};
