import bg from "../../../assets_/brief-submission.jpg";
import alarm from "../../../assets_/alarm-clock.png";
import arrowUpRight from "../../../assets_/maki_arrow.png";
import arrowright from "../../../assets_/guidance_.png";
import arrowDown from "../../../assets_/down-arrow.png";
import expertAss from "../../../assets_/expert_assignment.png";
import { Link } from "react-router-dom";
import AnimatedSection from "../../../components/widgets/animated-section";
export default () => {
  return (
    <div className="  text-black flex flex-col items-center   w-full mb-4 px-16 md:px-30">
      <h6 className="text-black font-bold mx-auto h-10 bg-gray-100 w-fit p-4 flex items-center  justify-center rounded-md  text-center  lg:text-[18px] lato-regular">
        Sharing briefs
      </h6>
      <AnimatedSection>
        <h3 className="font-medium text-white text-xl mx-auto text-center lg:text-[40px] inter-font">
          From Briefs To action
        </h3>
      </AnimatedSection>
      <AnimatedSection>
        <p className="text-[20px] text-center text-white w-[70%] mx-auto leading-[32px] lato-regular font-normal">
          Don’t let time delay your justice, share your legal matter and let our
          expert lawyers take swift, strategic action toward a lasting solution.
        </p>
      </AnimatedSection>
      <div className="flex  gap-4   lg:justify-between lg:h-[39.5rem] mt-16 ">
        {/* Left Column (Submit Brief + We Assign) */}
        <div className="flex flex-col gap-6 py-0  w-[60%] lg:h-[39.5rem] justify-between">
          {/* Submit Your Brief */}

          <AnimatedSection delay={0}>
            <div className="flex gap-4 lg:h-full ">
              <div className="flex  flex-col justify-between  bg-gradient-to-bl from-[#C6EEE5] to-[#FFF5C2] rounded-xl lg:p-12 gap-6 min-h-[260px]  w-1/2 h-full">
                <h3 className="text-xl font-semibold inter-font text-[40px]">
                  Submit
                  <br />
                  Your Brief
                </h3>
                <p className="text-sm mt-2 text-black text-[16px] font-normal lato-regular">
                  Provide the full details of your legal matter i.e. documents,
                  voice notes, timelines. Everything your lawyer needs to hit
                  the ground running.
                </p>
              </div>
              <div
                className="flex flex-col gap-4 w-1/2  rounded-xl h-[100%] "
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Link
                  to="#"
                  className="mt-auto m-4 px-4 py-2 rounded-md flex items-center justify-between gap-2 bg-white/30 backdrop-blur-sm  font-semibold "
                >
                  <span className="text-white inter-font font-semibold text-[32px]">
                    Submit
                  </span>
                  <img src={arrowUpRight} className="size-8" color="white" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* We Assign The Right Experts */}
          <AnimatedSection delay={150}>
            <div className="flex relative flex-col bg-gradient-to-bl from-[#FFF5C2] to-[#C6EEE5] rounded-xl mt-auto h-full lg:p-12">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-[40px] inter-font">
                  We Assign
                  <br />
                  The Right Experts
                </h3>
                <img src={expertAss} alt="icon" className="size-20" />
              </div>
              <p className="text-sm mt-2 text-black text-[16px] lato-regular">
                Our system intelligently matches your case with seasoned,
                verified lawyers who specialize in your type of matter, so
                you're never left guessing.
              </p>
              <img
                src={arrowDown}
                className="absolute top-0 size-16 right-[0%] bottom-[20%]"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Get to Work Button */}
        <div className="flex flex-col space-y-6 items-center justify-center rounded-xl lg:flex-1 h-full">
          <div
            className="w-full h-[90%] flex flex-col justify-end rounded-xl overflow-hidden relative  bg-gradient-to-b from-[rgba(255,255,255,0.5)] to-[#000] bg-blend-darken"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mb-9 mx-9 text-white">
              <h3 className="text-lg font-normal inter-font text-[40px]">
                Your Private Workspace
              </h3>
            </div>
          </div>
          <Link
            to="#"
            className="relative px-20 text-xl text-white flex items-center bg-gradient-to-b from-[#DED08A] to-[#FFFFFF70] blur-[15px]- backdrop-blur-[15px]   w-full h-[15%]  shadow-lg shadow-gray p-3 rounded-2xl"
          >
            <div className="text-white text-[20px] lg:text-[32px] inter-font w-[70%]">
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
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

