import { BookOpen, Scale, Shield } from "lucide-react";
import UserRadianceIcon from "./user-radiance-icon";
import TrackingIcon from "./tracking-icon";
import AssuranceIcon from "./assurance-icon";

const whySectionData = [
  {
    icon: <Scale />,
    title: "Vetted Professionals",
    content:
      "Access a curated network of verified lawyers and law firms with proven track records.",
  },
  {
    icon: <Shield />,
    title: "Secure Platform",
    content:
      "Bank-grade encryption ensures your documents and communications remain confidential.",
  },
  {
    icon: <UserRadianceIcon color="#B89900" />,
    title: "Transparent Pricing",
    content:
      "Compare proposals from multiple lawyers with clear, upfront pricing and no hidden fees.",
  },
  {
    icon: <BookOpen />,
    title: "Legal Resources",
    content:
      "Free access to Nigerian statutes, case law, and professional development materials.",
  },
  {
    icon: <TrackingIcon color="#B89900" />,
    title: "Real-time tracking",
    content:
      "Monitor your case progress with live updates and milestone notifications",
  },
  {
    icon: <AssuranceIcon color="#B89900" />,
    title: "Quality Assurance",
    content:
      "Compare proposals from multiple lawyers with clear, upfront pricing and no hidden fees.",
  },
];

const WhySection = () => {
  return (
    <section className="px-6 lg:px-[153px] mt-10 md:mt-[100px] pb-8 md:pb-16">
      <div className="flex flex-col items-center gap-4 md:gap-6 mb-12 md:my-16 md:w-[712px] mx-auto text-center">
        <h1 className="text-white text-2xl md:text-[40px] inter-font font-semibold">
          Why Choose HybridLP
        </h1>
        <p className="text-sm md:text-[20px] lato-regular">
          We transform your legal experience through a comprehensive and
          intelligent platform designed for an improved legal services delivery
          for clients and legal professionals. Providing access to verified
          lawyers, secured collaboration and transparent case management through
          a digital office solution. Experience the innovation, efficiency,
          trust and legal services redefined with HybridLP
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {whySectionData.map((item, idx) => {
          return (
            <div
              key={idx}
              className=" h-fit md:h-[316px] flex flex-col  px-5 md:px-8 py-8 md:py-[58px] rounded-xl border border-gray-800"
            >
              {/* resizabe icon */}
              <div className="w-full px-2 md:px-8 py-2 md:py-5 rounded-lg bg-[#715E00]/20 border border-[#825900e7] text-[#B89900] flex  [&_svg]:w-5 [&_svg]:h-5 md:[&_svg]:w-8 md:[&_svg]:h-8">
                {item.icon}
              </div>
              <h3 className="text-white lato-regular font-extrabold text-md md:text-[24px] mt-5 md:mt-7 mb-4 md:mb-6">
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
