import { useEffect, useState, useRef } from "react";
import SEO from "../../components/widgets/seo";
import { Building2, ArrowDown } from "lucide-react";
import { STRUCTURES, StructureItem } from "./data/structures";
import StructuresGrid from "./components/StructuresGrid";
import BottomBanner from "./components/BottomBanner";
import FormSuccess from "./components/FormSuccess";
import RegistrationFormSwitcher from "./components/RegistrationFormSwitcher";

export default function RegisterBusiness() {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedStructure, setSelectedStructure] = useState<StructureItem>(STRUCTURES[0]);
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    businessName: string;
  } | null>(null);

  const scrollToForm = (structure?: StructureItem) => {
    if (structure) {
      setSelectedStructure(structure);
    }
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (window.location.hash === "#form" || window.location.hash === "#registration-form") {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  const handleSuccess = (data: { fullName: string; email: string; phone: string; businessName: string }) => {
    setSubmittedData(data);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen text-white pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-[#0B132B]">
      <SEO
        title="Register Your Business | HybridLP"
        description="Choose the right business structure for your goals. Register your business name, Ltd, PLC, NGO or LLP with expert legal assistance."
        canonical="https://hybridlp.com/register-business"
      />

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 mt-6 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold inter-font mb-6 leading-tight">
          Choose the Structure That Fits Your Business.
        </h1>
        <p className="text-gray-300 text-base md:text-lg lg:text-xl lato-regular leading-relaxed mb-6">
          Not sure what type of business to register? Select a structure below to open its specific registration form, or let our legal counsel advise you.
        </p>
        <button
          type="button"
          onClick={() => scrollToForm()}
          className="inline-flex items-center gap-2 bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:opacity-90 transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <ArrowDown className="w-4 h-4" />
          Fill {selectedStructure.shortName} Form
        </button>
      </div>

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold inter-font text-[#CAA500]">
          Choose Your Business Structure
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Click any card to load its respective registration requirements below
        </p>
      </div>

      {/* Grid of Business Structures */}
      <StructuresGrid
        selectedStructureId={selectedStructure.id}
        onSelectStructure={(item) => scrollToForm(item)}
      />

      {/* Bottom Action Banner (without external CAC button) */}
      <BottomBanner onScrollToForm={() => scrollToForm()} />

      {/* Dynamic Business Registration Form Section */}
      <div ref={formRef} id="registration-form" className="max-w-4xl mx-auto scroll-mt-28">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15233F] border border-gray-800 text-[#CAA500] text-xs md:text-sm font-semibold mb-3">
            <Building2 className="w-4 h-4" />
            {selectedStructure.title}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold inter-font text-white mb-3">
            {selectedStructure.shortName} Registration Form
          </h2>
          <p className="text-gray-300 text-sm md:text-base lato-regular max-w-xl mx-auto">
            {selectedStructure.id === "enterprise"
              ? "Complete the 16 required details for your Enterprise / Business Name registration. Our accredited lawyers will process your CAC documentation."
              : `Fill in the registration details for ${selectedStructure.shortName}. Our CAC accredited lawyers will review and file your application.`}
          </p>
        </div>

        {submittedData ? (
          <FormSuccess
            fullName={submittedData.fullName}
            email={submittedData.email}
            phone={submittedData.phone}
            structure={selectedStructure.shortName}
            businessName={submittedData.businessName}
            onReset={() => setSubmittedData(null)}
          />
        ) : (
          <div className="bg-[#15233F] border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl">
            <RegistrationFormSwitcher structure={selectedStructure} onSuccess={handleSuccess} />
          </div>
        )}
      </div>
    </div>
  );
}
