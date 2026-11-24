import { useState } from "react";
import briefs from "../../../assets/briefs.png";
import collaborate from "../../../assets/collaborate.jpg";
import shareBriefs from "../../../assets/sharing briefs.png";
import AnimatedSection from "../../../components/widgets/animated-section";
import SlideInSection from "../../../components/widgets/slide-in-section";
import { NavLink } from "react-router-dom";
const items = [
  {
    title: "Self-service",
    content:
      "Manage your case files, track progress, schedule appointments, and submit queries from a secure client dashboard.",
  },
  {
    title: "Collaborate",
    content:
      "Work with expert lawyers in a secure digital workspace that enhances communication and streamlines workflows.",
  },
  {
    title: "Quality Service Regulation",
    content:
      "Comprehensive regulatory mechanisms to promote transparency, professionalism, accountability and consistent service quality.",
  },
];
export default () => {
  const [clicked, setClicked] = useState(0);

  return (
    <>
      <div className="flex  sm:py-8 pt-0 sm:pt-4 md:py-12 lg:pt-16 flex-col gap-6 md:gap-8 lg:gap-10  text-white px-4 md:px-8 lg:px-20 xl:px-32 lg:min-h-screen">
        <h1 className="inter-font text-white mb-4 sm:mt-4 md:mt-8 lg:mt-12 text-[24px] font-semibold text-center md:text-3xl lg:text-[40px]">
          How It Works
        </h1>
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden  sm:mt-6">
          {/* Image Section - Mobile */}
          <div className="relative mb-6">
            <SlideInSection
              trigger={clicked}
              className="w-full h-64 rounded-lg relative overflow-hidden"
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
              {/* Dots Indicator - Mobile */}
              <div className="flex justify-center space-x-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`rounded-full h-3 transition-all duration-300 ${
                      clicked === index ? "bg-white w-8" : "bg-gray-300 w-3"
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
                  className={`rounded-md ${
                    clicked === idx ? "border-l-8" : "border-l-4"
                  } border-[#DED08A] h-fit cursor-pointer flex flex-col w-full   p-4 bg-[#1D1D1D] transition-all duration-300 ${
                    clicked === idx && "shadow-lg"
                  }`}
                  style={{
                    boxShadow:
                      clicked === idx
                        ? "0px 4px 10px 0px #FFFFFF33 inset, 0px -1px 10px 0px #FFFFFF40 inset"
                        : "none",
                  }}
                >
                  <h3 className="text-lg inter-font mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-normal text-xs lato-regular leading-relaxed">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </AnimatedSection>
        </div>

        {/* Tablet & Desktop Layout - Side by Side */}
        <div className="hidden md:flex justify-between mt-4 lg:mt-8 md:gap-8 lg:gap-16 xl:gap-[128px] items-stretch">
          <AnimatedSection className="flex flex-col space-y-3 lg:space-y-4 md:w-[46%] lg:w-[40%]">
            {items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setClicked(idx)}
                  className={`rounded-md ${
                    clicked === idx
                      ? "border-l-8 lg:border-l-10 shadow-xs shadowed pl-3 lg:pl-4"
                      : "border-l-2 pl-4 lg:pl-6"
                  } border-[#DED08A] cursor-pointer flex flex-col gap-2 lg:gap-[12px] w-full h-fit md:p-3 lg:pt-3 lg:pb-2 lg:px-2 bg-[#1D1D1D] transition-all duration-300 `}
                  style={{
                    boxShadow:
                      clicked === idx
                        ? "0px 4px 10px 0px #FFFFFF33 inset, 0px -1px 10px 0px #FFFFFF40 inset"
                        : undefined,
                  }}
                >
                  <h3 className="md:text-lg lg:text-[24px] inter-font">{item.title}</h3>
                  <p className="text-gray-500 font-normal md:text-sm lg:text-[18px] lato-regular leading-snug lg:leading-normal">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </AnimatedSection>


          <SlideInSection
            trigger={clicked}
            className="flex-1 h-auto min-h-[320px] lg:min-h-full rounded-lg relative"
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
            <div className="flex justify-end space-x-2 absolute md:-top-7 lg:-top-[10%] right-0">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`rounded-full md:w-3 md:h-3 lg:w-4 lg:h-4 bg-gray-300 transition-all duration-300 ${
                    clicked === index && "bg-[#fff] md:w-7 lg:w-10"
                  }`}
                />
              ))}
            </div>
          </SlideInSection>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 lg:gap-8 mt-6">
          <div className="flex flex-col space-y-4 items-center md:items-start md:w-[38%] lg:w-auto">
            <h6 className="text-black h-12 md:h-14 bg-gray-100 w-fit px-4 md:px-6 flex items-center justify-center rounded-md text-center text-sm md:text-base lato-regular">
              About HybridLP
            </h6>
            <h1 className="text-2xl md:text-2xl lg:text-[40px] text-white font-bold inter leading-tight text-center md:text-left">
              Your Legal Network
            </h1>
          </div>
          <div className="flex flex-col gap-3 text-gray-400 text-sm md:text-base lg:text-[18px] lato-regular font-normal md:w-[58%] lg:w-[55%] leading-relaxed text-center md:text-start">
            <h3 className="text-white text-lg md:text-xl font-semibold inter-font">
              Law Is About People, not just Paperwork
            </h3>
            <p>
              We understand that behind every legal matter is a person, a family, a business or an important decision.
            </p>
            <p>
              Hybrid Lp offers legal Technology in diverse areas, with verified and experienced lawyers in Arbitration, Dispute Resolution, Real Estate, Human Right Enforcement, Labour/Employment related matters, Election Petition, Immigration matters, Trans-boarder or International disputes, Family and Personal law practice, Intellectual Property, Technology and IT law compliance, Cyber Security and Data protection, Sports law, Mining and Natural Resources law compliance, Legal Drafting, Legal Advisory, Business Registration & Corporate matters.{" "}
              <NavLink to="/about" className="text-[#DED08A] cursor-pointer font-semibold whitespace-nowrap">
                Read more
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
