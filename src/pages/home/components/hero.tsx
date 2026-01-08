import { Link } from "react-router-dom";
import stat from "../../../assets_/stat.png";
import profile from "../../../assets_/profile.png";
import lawyer from "../../../assets_/lawyer.png";

export default () => {
  return (
    <section
      className={`flex min-h-screen relative  md:h-[120dvh]  pt-[27%] md:pt-[15%] pb-8 md:pb-0  items-center  overflow-y-hidden`}
    >
      <div
            className="absolute h-full top-0 left-0 right-0 inset-0 z-50 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(179.41deg, rgba(0, 10, 29, 0) 74.58%, rgba(0, 10, 29, 0.99) 99.51%, #000A1D 110.35%)`,
            }}
          />
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
          Providing Tailored Legal Counsel and Solutions
        </p>
        <Link
          className="bg-gradient-to-b from-[#CAA500] to-[#825900] text-white w-full max-w-[280px] md:max-w-[320px] lg:w-[268px] text-[16px] rounded-full text-center py-3 px-6 md:p-4 mb-6 md:mb-8"
          to="https://app.hybridlp.com"
        >
          <span className="text-white lato-regular">Get a lawyer</span>
        </Link>
        <div className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-4 relative  w-full lg:max-h-[600px]  mt-auto -mb-[10%] lg:-mb- md:pb-8 md:mb-4 md:mt-8 px-4 lg:px-[312px]">
          
          <div className="flex flex-col  gap-3 md:gap-4 w-full md:w-auto lg:h-full lg:w-[488px]">
            <img
              src={stat}
              className="w-full h-full md:h-[240px] lg:h-full rounded-lg object-cover"
              alt="Statistics"
            />
            <img
              src={profile}
              className="w-full h-full md:h-[240px] lg:h-full rounded-lg object-cover"
              alt="Statistics"
            />

            {/* <div className="relative w-full h-full md:h-[240px] lg:h-full rounded-lg overflow-hidden border border-gray-800">
              <img
                src={profile}
                alt="Profile"
                className="absolute inset-0 w-full h-full block   md:object-cover md:object-center"
              />

              <div
                style={
                  {
                    "--mobile-perc": `${mobilePerc}%`,
                    "--desktop-perc": `${desktopPerc}%`,
                    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) var(--bg-perc, var(--mobile-perc)), #00102E)`,
                  } as React.CSSProperties
                }
                className="absolute inset-0 [--bg-perc:var(--mobile-perc)] md:[--bg-perc:var(--desktop-perc)]"
              />
            </div> */}
          </div>
          <img
            className="h-auto md:h-[503px] lg:h-[503px]  w-full md:w-auto lg:w-[367px] rounded-lg object-cover"
            src={lawyer}
            alt="lawyer"
          />
        </div>
      </div>
    </section>
  );
};
