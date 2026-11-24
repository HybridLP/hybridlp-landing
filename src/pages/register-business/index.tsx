import cacFormPdf from "../../assets/CAC FORM.pdf";
import { useEffect, useState, useRef } from "react";
import SEO from "../../components/widgets/seo";
import {
  Building2,
  Shield,
  Users,
  FileText,
  Scale,
  Landmark,
  UserCheck,
  HeartHandshake,
  CheckCircle2,
  AlertCircle,
  ArrowDown,
  Send,
  ShieldCheck,
} from "lucide-react";
import { serviceRequestService } from "../../services/serviceRequestService";
import CustomSelect from "../../components/ui/select";

const STRUCTURE_OPTIONS = [
  "Enterprise / Business Name",
  "Limited Liability Company (Ltd.)",
  "Unlimited Liability Company (Ltd./Unlimited)",
  "Limited by Guarantee",
  "Public Limited Company (PLC)",
  "Limited Partnership (LP)",
  "Limited Liability Partnership (LLP)",
  "NGO / Incorporated Trustees / Club",
];

export default function RegisterBusiness() {
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    structure: STRUCTURE_OPTIONS[0],
    businessName1: "",
    businessName2: "",
    businessNature: "",
    businessAddress: "",
    directorsCount: "1",
    additionalNotes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollToForm = (structureName?: string) => {
    if (structureName) {
      const matched = STRUCTURE_OPTIONS.find((s) =>
        structureName.toLowerCase().includes(s.toLowerCase().split("/")[0].trim())
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, structure: matched }));
      }
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
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | { target: { name?: string; value: string } }
  ) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await serviceRequestService.submit({
        type: "business_registration",
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: `${formData.structure}: ${formData.businessName1}`,
        details: formData.businessNature,
        metadata: {
          structure: formData.structure,
          proposedBusinessName1: formData.businessName1,
          proposedBusinessName2: formData.businessName2 || undefined,
          natureOfBusiness: formData.businessNature,
          registeredAddress: formData.businessAddress,
          directorsOrPartnersCount: formData.directorsCount || undefined,
          additionalNotes: formData.additionalNotes || undefined,
        },
      });

      setSubmitted(true);
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } catch (err: any) {
      console.error("Business registration error:", err);
      setError(
        err?.response?.data?.error ||
          "Failed to submit your business registration request. Please check your inputs or try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
    <div className="min-h-screen text-white pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-[#0B132B]">
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
        <p className="text-gray-300 text-base md:text-lg lg:text-xl lato-regular leading-relaxed mb-6">
          Not sure what type of business to register? Are you starting the business alone? We can help you register with the structure that best suits your goals.
        </p>
        <button
          onClick={() => scrollToForm()}
          className="inline-flex items-center gap-2 bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:opacity-90 transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <ArrowDown className="w-4 h-4" />
          Fill Business Registration Form
        </button>
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
            onClick={() => scrollToForm(item.title)}
            className="bg-[#15233F] border border-gray-800 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-[#CAA500]/50 transition-all duration-300 shadow-lg cursor-pointer group"
          >
            <div>
              <div className="mb-4 p-3 bg-[#715E00]/20 border border-[#825900]/40 rounded-lg w-fit group-hover:border-[#CAA500] transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold inter-font mb-3 text-white group-hover:text-[#CAA500] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base lato-regular leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center gap-2 text-xs text-[#CAA500] font-medium">
              <span>Click to select & register this structure</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Banner */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#15233F] to-[#0D1629] border border-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl mb-16">
        <h2 className="text-2xl md:text-3xl font-bold inter-font mb-4 text-white">
          Not Sure Which One Is Right for You?
        </h2>
        <p className="text-gray-300 text-base md:text-lg lato-regular mb-8">
          Tell us what you want to do. We’ll help you choose the right structure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToForm()}
            className="w-full sm:w-auto bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all shadow-md active:scale-95 text-center cursor-pointer"
          >
            Register your Business With Us
          </button>
          <a
            href={cacFormPdf}
            download="CAC_FORM.pdf"
            className="w-full sm:w-auto bg-transparent border-2 border-[#CAA500] text-[#CAA500] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#CAA500]/10 transition-all active:scale-95 text-center"
          >
            Download CAC Form (PDF)
          </a>
        </div>
      </div>

      {/* Business Registration Form Section */}
      <div ref={formRef} id="registration-form" className="max-w-4xl mx-auto scroll-mt-28">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15233F] border border-gray-800 text-[#CAA500] text-xs md:text-sm font-semibold mb-3">
            <Building2 className="w-4 h-4" />
            Online Registration Form
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold inter-font text-white mb-3">
            Business Registration Form
          </h2>
          <p className="text-gray-300 text-sm md:text-base lato-regular max-w-xl mx-auto">
            Fill in your business details below. Our corporate accreditation lawyers will review your information, conduct name availability checks with CAC, and manage your registration from start to finish.
          </p>
        </div>

        {submitted ? (
          /* Success Screen */
          <div className="bg-[#15233F] border border-[#CAA500]/40 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold inter-font text-white mb-3">
              Registration Form Submitted!
            </h3>
            <p className="text-gray-300 text-base lato-regular max-w-xl mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Your registration request for <strong className="text-[#CAA500]">{formData.businessName1}</strong> ({formData.structure}) has been received. A confirmation has been sent to <strong className="text-white">{formData.email}</strong>.
            </p>

            <div className="bg-[#0B132B] border border-gray-800 rounded-xl p-6 max-w-md mx-auto text-left mb-8 space-y-2 text-sm lato-regular">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Proposed Name:</span>
                <span className="text-white font-medium">{formData.businessName1}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 py-2">
                <span className="text-gray-400">Structure:</span>
                <span className="text-white font-medium">{formData.structure}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-400">Applicant Phone:</span>
                <span className="text-white font-medium">{formData.phone}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  structure: STRUCTURE_OPTIONS[0],
                  businessName1: "",
                  businessName2: "",
                  businessNature: "",
                  businessAddress: "",
                  directorsCount: "1",
                  additionalNotes: "",
                });
              }}
              className="bg-transparent border border-[#CAA500] text-[#CAA500] px-6 py-3 rounded-lg font-semibold hover:bg-[#CAA500]/10 transition-all text-sm md:text-base cursor-pointer"
            >
              Register Another Business
            </button>
          </div>
        ) : (
          /* Form */
          <div className="bg-[#15233F] border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl">
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 lato-regular">
              {/* Structure Selection */}
              <div>
                <CustomSelect
                  label="Select Business Structure"
                  required
                  name="structure"
                  value={formData.structure}
                  onChange={handleChange}
                  options={STRUCTURE_OPTIONS}
                />
              </div>

              {/* Proposed Business Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Proposed Business Name (1st Choice) <span className="text-[#CAA500]">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName1"
                    required
                    value={formData.businessName1}
                    onChange={handleChange}
                    placeholder="e.g. Apex Global Logistics Ltd."
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Alternative Business Name (2nd Choice)
                  </label>
                  <input
                    type="text"
                    name="businessName2"
                    value={formData.businessName2}
                    onChange={handleChange}
                    placeholder="e.g. Apex Freight & Cargo Ltd."
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>
              </div>

              {/* Applicant Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Applicant / Promoter Full Name <span className="text-[#CAA500]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Emeka Okafor"
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-[#CAA500]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. emeka@example.com"
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number <span className="text-[#CAA500]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +234 803 456 7890"
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>
              </div>

              {/* Nature of Business */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nature of Business / General Activities <span className="text-[#CAA500]">*</span>
                </label>
                <textarea
                  name="businessNature"
                  required
                  rows={4}
                  value={formData.businessNature}
                  onChange={handleChange}
                  placeholder="Describe what the company or enterprise does (e.g. general merchandise, IT services, import/export, agriculture, consulting, logistics)..."
                  className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors resize-y"
                />
              </div>

              {/* Address & Number of Directors */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Registered Business Address <span className="text-[#CAA500]">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessAddress"
                    required
                    value={formData.businessAddress}
                    onChange={handleChange}
                    placeholder="Street, City, State (e.g. 15 Marina Street, Lagos Island, Lagos State)"
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Number of Directors / Partners
                  </label>
                  <input
                    type="number"
                    name="directorsCount"
                    min="1"
                    value={formData.directorsCount}
                    onChange={handleChange}
                    placeholder="1"
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes or Questions (Optional)
                </label>
                <input
                  type="text"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Share capital preferences, special objects, or CAC queries"
                  className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                />
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#CAA500]" />
                  <span>CAC Accredited Legal Practitioners</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#CAA500]" />
                  <span>Full documentation & certificate delivery</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-b from-[#CAA500] to-[#825900] text-white py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 active:scale-98 cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting Registration Form...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Business Registration Form
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
