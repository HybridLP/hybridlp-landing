import { BookOpen, Scale, Shield } from "lucide-react";
import UserRadianceIcon from "./user-radiance-icon";

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
    icon: <UserRadianceIcon size={32} color="#B89900" />,
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
];

const WhySection = () => {
  return (
    <section className="px-6 lg:px-[153px] py-16">
      <div className="flex flex-col items-center gap-4 md:gap-6 mb-12 md:my-16 md:w-[712px] mx-auto text-center">
        <h1 className="text-white text-3xl md:text-[40px] inter-font font-semibold">
          Why Choose HybridLP
        </h1>
        <p className="text-lg md:text-[20px] lato-regular">
          Experience the future of legal services with our comprehensive
          platform designed for modern clients and professionals.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {whySectionData.map((item, idx) => {
          return (
            <div
              key={idx}
              className=" h-[250px] md:h-[316px] flex flex-col p-6 md:p-[58px] rounded-xl border border-[#A97D00]"
            >
              <div className="w-full px-4 text-6 md:text-8  md:px-8 py-3 md:py-5 rounded-lg bg-[#715E00]/50 border border-[#825900] text-[#B89900] ">
                {item.icon}
              </div>
              <h3 className="text-white lato-regular font-extrabold text-xl md:text-[24px] mt-7 mb-4 md:mb-6">
                {item.title}
              </h3>
              <p className="lato-regular text-base md:text-[18px]">
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
