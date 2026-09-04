import { BookOpen, Scale, Shield } from "lucide-react";
import UserRadianceIcon from "./user-radiance-icon";
import TrackingIcon from "./tracking-icon";
import AssuranceIcon from "./assurance-icon";
import OurServicesSection from "./our-services-section";

const whySectionData = [
  {
    icon: <Scale />,
    title: "We Listen",
    content:
      "Every legal matter begins with understanding your unique circumstances.",
  },
  {
    icon: <Shield />,
    title: "We Explain",
    content: "We make complex legal issues easier to understand.",
  },
  {
    icon: <UserRadianceIcon color="#B89900" />,
    title: "We Collaborate",
    content:
      "Our approach allows the right minds and expertise to come together when necessary.",
  },
  {
    icon: <BookOpen />,
    title: "We Stay Accountable",
    content:
      "Clear processes, communication and feedback help us maintain high professional standards.",
  },
  {
    icon: <TrackingIcon color="#B89900" />,
    title: "We Protect Your Information",
    content:
      "Confidentiality and secure handling of client information remain central to our practice.",
  },
  {
    icon: <AssuranceIcon color="#B89900" />,
    title: "We Embrace Innovation",
    content:
      "We leverage appropriate technology to improve efficiency, accessibility and service delivery.",
  },
];

const WhySection = () => {
  return (
    <section className="px-6 lg:px-[153px] pb-8 md:pb-16">
      <OurServicesSection />

      {/* Not Sure What Legal Help You Need? Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#15233F] border border-gray-800 rounded-xl p-6 md:p-8 my-8 md:my-12 gap-4">
        <h2 className="text-white text-xl md:text-2xl font-semibold inter-font text-center md:text-left">
          Not Sure What Legal Help You Need?
        </h2>
        <a
          href="https://app.hybridlp.com"
          className="bg-linear-to-b from-[#CAA500] to-[#825900] text-white text-sm md:text-base font-semibold py-3 px-6 rounded-lg transition-all duration-300 active:scale-95 whitespace-nowrap hover:opacity-90 flex items-center gap-2"
        >
          Tell Us About Your Matter
        </a>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-6 mb-12 md:my-16 md:w-[712px] mx-auto text-center">
        <h1 className="text-white text-2xl md:text-[40px] inter-font font-semibold">
          Why Choose Hybrid LP
        </h1>
        <p className="text-sm md:text-[20px] lato-regular text-gray-400">
          We transform your legal experience through a comprehensive and
          intelligent platform designed for an improved legal services delivery.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {whySectionData.map((item, idx) => {
          return (
            <div
              key={idx}
              className="relative h-fit md:h-[280px] flex flex-col px-5 md:px-8 py-8 md:py-[40px] rounded-xl border border-gray-800"
            >
              {/* resizabe icon */}
              <div className="w-full px-2 md:px-8 py-2 md:py-5 rounded-lg bg-[#715E00]/20 border border-[#825900e7] text-[#B89900] flex [&_svg]:w-5 [&_svg]:h-5 md:[&_svg]:w-8 md:[&_svg]:h-8">
                {item.icon}
              </div>
              <h3 className="text-white lato-regular font-extrabold text-md md:text-[24px] mt-5 md:mt-7 mb-2 md:mb-4">
                {item.title}
              </h3>
              <p className="lato-regular text-xs md:text-[18px] font-regular text-gray-500">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhySection;
