import bg from "../../../assets_/submit-bg.png"
import workspace from "../../../assets_/workspace.jpg"
import alarm from "../../../assets_/alarm-clock.png";
import arrowUpRight from "../../../assets_/maki_arrow.png";
import arrowright from "../../../assets_/guidance_.png";
import arrowDown from "../../../assets_/down-arrow.png";
import expertAss from "../../../assets_/expert_assignment.png";
import { Link } from "react-router-dom";
import AnimatedSection from "../../../components/widgets/animated-section";
export default () => {
  return (
    <div className="text-black flex flex-col items-center w-full mb-4 px-4 md:px-8 lg:px-16 xl:px-30">
      <h6 className="text-black font-bold mx-auto h-10 bg-gray-100 w-fit px-4 py-2 flex items-center justify-center rounded-md text-center text-sm md:text-base lg:text-[18px] lato-regular">
        Sharing briefs
      </h6>
      <AnimatedSection>
        <h3 className="font-medium text-white text-2xl md:text-3xl mx-auto text-center lg:text-[40px] inter-font mt-4 mb-4">
          From Briefs To Action
        </h3>
      </AnimatedSection>
      <AnimatedSection>
        <p className="text-base md:text-lg lg:text-[20px] text-center text-white w-full md:w-[80%] lg:w-[70%] mx-auto leading-relaxed md:leading-[28px] lg:leading-[32px] lato-regular font-normal mb-8 md:mb-12 lg:mb-16">
          Don’t let time delay your justice, share your legal matter and let our
          expert lawyers take swift, strategic action toward a lasting solution.
        </p>
      </AnimatedSection>
      {/* Mobile Layout - Stacked Cards */}
      <div className="block lg:hidden w-full space-y-6 mt-8">
        {/* Submit Your Brief - Mobile */}
        <AnimatedSection delay={0}>
          <div className="bg-gradient-to-bl from-[#C6EEE5] to-[#FFF5C2] rounded-xl p-6 min-h-[200px]">
            <h3 className="text-2xl font-semibold inter-font mb-4">
              Submit Your Brief
            </h3>
            <p className="text-sm text-black font-normal lato-regular leading-relaxed">
              Provide the full details of your legal matter i.e. documents,
              voice notes, timelines. Everything your lawyer needs to hit
              the ground running.
            </p>
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
          <div className="bg-gradient-to-bl from-[#FFF5C2] to-[#C6EEE5] rounded-xl p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold inter-font flex-1">
                We Assign The Right Experts
              </h3>
              <img src={expertAss} alt="icon" className="size-16 ml-4" />
            </div>
            <p className="text-sm text-black lato-regular leading-relaxed">
              Our system intelligently matches your case with seasoned,
              verified lawyers who specialize in your type of matter, so
              you're never left guessing.
            </p>
          </div>
        </AnimatedSection>

        {/* Private Workspace - Mobile */}
        <AnimatedSection delay={300}>
          <div
            className="w-full h-64 flex flex-col justify-end rounded-xl overflow-hidden relative bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[#000] bg-blend-darken"
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
            className="relative px-6 py-4 text-white flex items-center justify-between bg-gradient-to-b from-[#DED08A] to-[#FFFFFF70] backdrop-blur-[15px] w-full shadow-lg rounded-2xl"
          >
            <div className="text-white text-xl inter-font">
              Get to Work
            </div>
            <div className="flex items-center gap-2">
              <img src={alarm} alt="" className="size-8" />
              <img src={arrowright} alt="" className="size-6" />
            </div>
          </Link>
        </AnimatedSection>
      </div>

      {/* Desktop Layout - Original Complex Grid */}
      <div className="hidden lg:flex gap-4 justify-between h-[39.5rem] w-full">
        {/* Left Column (Submit Brief + We Assign) */}
        <div className="flex flex-col gap-6 py-0 w-[60%] h-[39.5rem] justify-between">
          {/* Submit Your Brief */}
          <AnimatedSection delay={0}>
            <div className="flex gap-4 h-full">
              <div className="flex flex-col justify-between bg-gradient-to-bl from-[#C6EEE5] to-[#FFF5C2] rounded-xl p-8 lg:p-12 gap-6 min-h-[260px] w-1/2 h-full">
                <h3 className="text-2xl lg:text-[40px] font-semibold inter-font">
                  Submit
                  <br />
                  Your Brief
                </h3>
                <p className="text-sm lg:text-[16px] text-black font-normal lato-regular">
                  Provide the full details of your legal matter i.e. documents,
                  voice notes, timelines. Everything your lawyer needs to hit
                  the ground running.
                </p>
              </div>
              <div
                className="flex flex-col gap-4 w-1/2 rounded-xl h-[100%]"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link
                  to="#"
                  className="mt-auto m-4 px-4 py-2 rounded-md flex items-center justify-between gap-2 bg-white/30 backdrop-blur-sm font-semibold"
                >
                  <span className="text-white inter-font font-semibold text-2xl lg:text-[32px]">
                    Submit
                  </span>
                  <img src={arrowUpRight} className="size-8" alt="arrow" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* We Assign The Right Experts */}
          <AnimatedSection delay={150}>
            <div className="flex relative flex-col bg-gradient-to-bl from-[#FFF5C2] to-[#C6EEE5] rounded-xl mt-auto h-full p-8 lg:p-12">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl lg:text-[40px] font-semibold inter-font">
                  We Assign
                  <br />
                  The Right Experts
                </h3>
                <img src={expertAss} alt="icon" className="size-20" />
              </div>
              <p className="text-sm lg:text-[16px] mt-2 text-black lato-regular">
                Our system intelligently matches your case with seasoned,
                verified lawyers who specialize in your type of matter, so
                you're never left guessing.
              </p>
              <img
                src={arrowDown}
                className="absolute top-0 size-16 right-[0%] bottom-[20%]"
                alt="arrow"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Right Column - Get to Work */}
        <div className="flex flex-col space-y-6 items-center justify-center rounded-xl flex-1 h-full">
          <div
            className="w-full h-[90%] flex flex-col justify-end rounded-xl overflow-hidden relative bg-gradient-to-b from-[rgba(255,255,255,0.5)] to-[#000] bg-blend-darken"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mb-9 mx-9 text-white">
              <h3 className="text-2xl lg:text-[40px] font-normal inter-font">
                Your Private Workspace
              </h3>
            </div>
          </div>
          <Link
            to="#"
            className="relative px-12 lg:px-20 text-xl text-white flex items-center bg-gradient-to-b from-[#DED08A] to-[#FFFFFF70] backdrop-blur-[15px] w-full h-[15%] shadow-lg p-3 rounded-2xl"
          >
            <div className="text-white text-xl lg:text-[32px] inter-font w-[70%]">
              Get to Work
            </div>
            <img
              src={alarm}
              alt=""
              loading="lazy"
              className="size-10 ml-auto"
            />
            <img
              src={arrowright}
              className="absolute left-0 size-8 top-[30%] bottom-[20%]"
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

