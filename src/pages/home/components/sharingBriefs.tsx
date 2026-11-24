import bg from "../../../assets/brief-submission.jpg";
import workspace from "../../../assets/workspace.jpg";
import alarm from "../../../assets/alarm-clock.png";
import arrowUpRight from "../../../assets/maki_arrow.png";
import arrowright from "../../../assets/guidance_.png";
import arrowDown from "../../../assets/down-arrow.png";
import expertAss from "../../../assets/expert_assignment.png";
import lineImg from "../../../assets/line.png";
import { Link } from "react-router-dom";

import AnimatedSection from "../../../components/widgets/animated-section";
export default () => {
  return (
    <div
      id="briefs"
      className="text-black flex flex-col items-center w-full mb-4 px-4 md:px-8 lg:px-20 xl:px-30 mt-6 sm:mt-16 md:mt-20 lg:mt-28"
    >
      <h6 className="text-black font-bold mx-auto h-10 bg-gray-100 w-fit px-4 py-2 flex items-center justify-center rounded-md text-center text-sm md:text-base lg:text-[18px] lato-regular">
        Sharing briefs
      </h6>
      <AnimatedSection>
        <h3 className="font-medium text-white text-2xl md:text-3xl mx-auto text-center lg:text-[40px] inter-font mt-4 mb-4">
          Tell us what happened
        </h3>
      </AnimatedSection>
      <AnimatedSection>
        <p className="text-sm md:text-lg lg:text-[20px] text-center text-gray-400 w-full md:w-[80%] lg:w-[70%] mx-auto leading-relaxed md:leading-[28px] lg:leading-[32px] lato-regular font-normal mb-8 md:mb-12 lg:mb-16">
          We help you navigate legal complexities to deliver stronger outcomes.
          Present your matter and the Verified Legal Practitioner and/or a legal
          team will act with speed, strategy and precision to secure decisive
          solutions.
        </p>
      </AnimatedSection>
      {/* Mobile Layout - Stacked Cards */}
      <div className="block md:hidden w-full space-y-6 mt-8">
        {/* Submit Your Brief - Mobile */}
        <AnimatedSection delay={0}>
          <div className="relative bg-linear-to-bl from-[#C6EEE5] to-[#FFF5C2] rounded-xl p-6 min-h-[200px]">
            <h3 className="text-2xl font-semibold inter-font mb-4">
              Submit Your Brief
            </h3>
            <p className="text-sm text-black font-normal lato-regular leading-relaxed">
              Provide the full details of your legal matter i.e. documents,
              voice notes, timelines. Everything your lawyer needs to hit the
              ground running.
            </p>
            <img src="" alt="" className="absolute top-[10%] -right-[50%]" />
          </div>
        </AnimatedSection>

        {/* Submit Button Card - Mobile */}
        <AnimatedSection delay={100}>
          <div
            className="rounded-xl h-48 flex flex-col justify-end relative overflow-hidden"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Link
              to="#"
              className="m-4 px-4 py-3 rounded-md flex items-center justify-between gap-2 bg-white/30 backdrop-blur-sm font-semibold"
            >
              <span className="text-white inter-font font-semibold text-xl">
                Submit
              </span>
              <img src={arrowUpRight} className="size-6" alt="arrow" />
            </Link>
          </div>
        </AnimatedSection>

        {/* We Assign Experts - Mobile */}
        <AnimatedSection delay={200}>
          <div className="bg-linear-to-bl from-[#FFF5C2] to-[#C6EEE5] rounded-xl p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold inter-font flex-1">
                We assign to you the most experienced team
              </h3>
              <img src={expertAss} alt="icon" className="size-16 ml-4" />
            </div>
            <p className="text-sm text-black lato-regular leading-relaxed">
              Our system intelligently matches your case with seasoned, verified
              lawyers who specialize in your type of matter, so you're never
              left guessing.
            </p>
          </div>
        </AnimatedSection>

        {/* Private Workspace - Mobile */}
        <AnimatedSection delay={300}>
          <div
            className="w-full h-64 flex flex-col justify-end rounded-xl overflow-hidden relative bg-linear-to-b from-[rgba(255,255,255,0.3)] to-[#000] bg-blend-darken"
            style={{
              backgroundImage: `url(${workspace})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="p-6 text-white">
              <h3 className="text-2xl font-normal inter-font">
                Your Private Workspace
              </h3>
            </div>
          </div>
        </AnimatedSection>

        {/* Get to Work Button - Mobile */}
        <AnimatedSection delay={400}>
          <Link
            to="#"
            className="relative px-6 py-4 text-white flex items-center justify-between bg-linear-to-b from-[#DED08A] to-[#FFFFFF70] backdrop-blur-[15px] w-full shadow-lg rounded-2xl"
          >
            <div className="text-white text-xl inter-font">Get to Work</div>
            <div className="flex items-center gap-2">
              <img src={alarm} alt="" className="size-8" />
              <img src={arrowright} alt="" className="size-6" />
            </div>
          </Link>
        </AnimatedSection>
      </div>

      {/* Tablet & Desktop Layout - Original Complex Grid */}
      <div className="hidden md:flex items-stretch gap-3 lg:gap-4 justify-between md:min-h-[520px] lg:min-h-[600px] xl:min-h-[660px] w-full">
        {/* Left Column (Submit Brief + We Assign) */}
        <div className="flex flex-col gap-3 lg:gap-4 py-0 w-[60%]">
          {/* Submit Your Brief */}
          <AnimatedSection className="flex-1 min-h-0 flex" delay={0}>
            <div className="flex gap-3 lg:gap-4 w-full h-full">
              <div className="flex flex-col relative justify-between bg-linear-to-bl from-[#C6EEE5] to-[#FFF5C2] rounded-xl p-5 lg:p-7 xl:p-8 gap-3 lg:gap-5 w-1/2 h-full">
                <h3 className="text-xl lg:text-[30px] xl:text-[40px] font-semibold inter-font leading-tight">
                  Submit
                  <br />
                  Your Brief
                </h3>
                <p className="text-xs lg:text-[14px] xl:text-[16px] text-black font-normal lato-regular leading-snug lg:leading-relaxed pr-5 lg:pr-7">
                  Provide the full details of your legal matter i.e. documents,
                  voice notes, timelines. Everything your lawyer needs to hit
                  the ground running.
                </p>
                <img
                  src={lineImg}
                  alt=""
                  className="absolute top-[30%] right-0 w-8 h-14 lg:w-[56px] lg:h-[96px]"
                />
              </div>
              <div
                className="bg-cover relative w-1/2 h-full rounded-xl px-4 lg:px-6 flex flex-col justify-end pb-5 lg:pb-8 bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                  WebkitBackgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  src={arrowright}
                  alt=""
                  className="absolute top-[30%] left-0 w-8 h-14 lg:w-[56px] lg:h-[96px]"
                />

                <Link
                  to="#"
                  className="px-3 lg:px-4 py-2 rounded-md flex items-center justify-between gap-2 bg-white/30 backdrop-blur-sm font-semibold"
                >
                  <span className="text-white inter-font font-semibold text-lg lg:text-[26px] xl:text-[32px]">
                    Submit
                  </span>
                  <img src={arrowUpRight} className="size-6 lg:size-8" alt="arrow" />
                </Link>
                <img
                  src={lineImg}
                  alt=""
                  className="absolute rotate-90 right-[0%] -bottom-7 lg:-bottom-11 w-8 h-14 lg:w-[56px] lg:h-[96px]"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* We assign to you the most experienced team */}
          <AnimatedSection delay={150} className="flex-1 min-h-0 flex">
            <div className="flex relative flex-col justify-between bg-linear-to-bl from-[#FFF5C2] to-[#C6EEE5] rounded-xl w-full h-full p-5 lg:p-7 xl:p-8">
              <div className="flex justify-between items-center gap-3 pr-8 lg:pr-10">
                <h3 className="text-xl lg:text-[30px] xl:text-[40px] font-semibold inter-font leading-tight">
                  We assign to <br />
                  you the most experienced team
                </h3>
                <img src={expertAss} alt="icon" className="size-12 lg:size-16 xl:size-20 shrink-0" />
              </div>
              <p className="text-xs lg:text-[14px] xl:text-[16px] mt-3 text-black lato-regular leading-snug lg:leading-relaxed pr-8 lg:pr-12">
                Our system intelligently matches your case with seasoned,
                verified lawyers who specialize in your type of matter, so
                you're never left guessing.
              </p>
              <img
                src={arrowDown}
                className="absolute top-0 size-10 lg:size-16 right-[0%]"
                alt="arrow"
              />
              <img
                src={lineImg}
                alt=""
                className="absolute right-[0%] bottom-[36px] lg:bottom-[48.5px] translate-y-1/2 w-8 h-10 lg:w-[56px] lg:h-[56px]"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Right Column - Get to Work */}
        <div className="flex flex-col gap-3 lg:gap-4 items-center justify-between rounded-xl flex-1">
          <div
            className="w-full flex-1 min-h-0 flex flex-col justify-end rounded-xl overflow-hidden relative bg-linear-to-b from-[rgba(255,255,255,0.5)] to-[#000] bg-blend-darken"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mb-6 mx-5 lg:mb-9 lg:mx-9 text-white">
              <h3 className="text-xl lg:text-[30px] xl:text-[40px] font-normal inter-font leading-tight">
                Your Private Workspace
              </h3>
            </div>
          </div>
          <Link
            to="#"
            className="relative px-8 lg:px-12 xl:px-20 text-base lg:text-xl text-white flex items-center bg-linear-to-b from-[#DED08A] to-[#FFFFFF70] backdrop-blur-[15px] w-full h-[72px] lg:h-[97px] shrink-0 shadow-lg p-3 rounded-2xl"
          >
            <div className="text-white text-lg lg:text-[26px] xl:text-[32px] inter-font w-[75%]">
              Get to Work
            </div>
            <img
              src={alarm}
              alt=""
              loading="lazy"
              className="size-7 lg:size-10 ml-auto"
            />
            <img
              src={arrowright}
              className="absolute left-0 w-6 h-10 lg:w-8 lg:h-[56px] top-1/2 -translate-y-1/2"
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
