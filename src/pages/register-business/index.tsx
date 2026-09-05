import cacFormPdf from "../../assets/CAC FORM.pdf";
import { useEffect } from "react";
import SEO from "../../components/widgets/seo";
import { Building2, Shield, Users, FileText, Scale, Landmark, UserCheck, HeartHandshake } from "lucide-react";

export default function RegisterBusiness() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const structures = [
    {
      icon: <Building2 className="w-8 h-8 text-[#CAA500]" />,
      title: "1. Enterprise / Business Name",
      description:
        "Ideal for individuals or small businesses operating under a registered business name. Simple, affordable and suitable for many sole proprietorships and small-scale ventures.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#CAA500]" />,
      title: "2. Limited Liability Company (Ltd.)",
      description:
        "A popular structure for businesses owned by shareholders. The Company has its own legal personality, and the liability of members is generally limited to their investment in the company, i.e members are not liable for the company’s debts beyond the agreed contribution(shareholding).",
    },
    {
      icon: <Scale className="w-8 h-8 text-[#CAA500]" />,
      title: "3. Unlimited Liability Company (Ltd./Unlimited)",
      description:
        "A company where members may have unlimited liability for the company’s debts, subject to the applicable law. Suitable for businesses where the owners are prepared to assume greater personal responsibility.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#CAA500]" />,
      title: "4. Limited by Guarantee",
      description:
        "A non-profit company established to pursue charitable, educational, religious, social or other public-interest objectives, with no share capital and no distribution of profits to members.",
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#CAA500]" />,
      title: "5. Public Limited Company (PLC)",
      description:
        "Designed for larger businesses with the capacity to raise capital from the public and operate on a broader corporate scale. It is subject to more extensive regulatory and corporate governance requirements.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#CAA500]" />,
      title: "6. Limited Partnership (LP)",
      description:
        "A partnership comprising at least one general partner with unlimited liability and one or more limited partners whose liability is generally limited to their agreed contribution.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#CAA500]" />,
      title: "7. Limited Liability Partnership (LLP)",
      description:
        "A flexible partnership structure that combines partnership features with limited liability protection for its partners. It can be suitable for professional practices and other businesses operated by partners.",
    },
    {
      icon: <FileText className="w-8 h-8 text-[#CAA500]" />,
      title: "8. NGO/Association/Club",
      description:
        "Suitable for charitable, religious, educational, social, cultural and other non-profit organisations. Registration provides a recognised legal framework for the organisation/association to operate and hold property in its own name.",
    },
  ];

  return (
    <div className="min-h-screen text-white pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-32">
      <SEO
        title="Register Your Business | HybridLP"
        description="Choose the right business structure for your goals. Register your business name, Ltd, PLC, NGO or LLP with expert legal assistance."
        canonical="https://hybridlp.com/register-business"
      />

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold inter-font mb-6 leading-tight">
          Choose the Structure That Fits Your Business.
        </h1>
        <p className="text-gray-300 text-base md:text-lg lg:text-xl lato-regular leading-relaxed">
          Not sure what type of business to register? Are you starting the business alone? We can help you register with the structure that best suits your goals.
        </p>
      </div>

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold inter-font text-[#CAA500]">
          Choose Your Business Structure
        </h2>
      </div>

      {/* Grid of Business Structures */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
        {structures.map((item, index) => (
          <div
            key={index}
            className="bg-[#15233F] border border-gray-800 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-[#CAA500]/50 transition-all duration-300 shadow-lg"
          >
            <div>
              <div className="mb-4 p-3 bg-[#715E00]/20 border border-[#825900]/40 rounded-lg w-fit">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold inter-font mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base lato-regular leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Banner */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#15233F] to-[#0D1629] border border-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold inter-font mb-4 text-white">
          Not Sure Which One Is Right for You?
        </h2>
        <p className="text-gray-300 text-base md:text-lg lato-regular mb-8">
          Tell us what you want to do. We’ll help you choose the right structure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://icrp.cac.gov.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all shadow-md active:scale-95"
          >
            Register your Business
          </a>
          <a
            href={cacFormPdf}
            download="CAC_FORM.pdf"
            className="w-full sm:w-auto bg-transparent border-2 border-[#CAA500] text-[#CAA500] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#CAA500]/10 transition-all active:scale-95 text-center"
          >
            Get a Lawyer to do it for you
          </a>
        </div>
      </div>
    </div>
  );
}
