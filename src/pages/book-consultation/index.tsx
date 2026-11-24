import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle2, AlertCircle, ArrowLeft, Video, Phone, Users, ShieldCheck, Send } from "lucide-react";
import SEO from "../../components/widgets/seo";
import { serviceRequestService } from "../../services/serviceRequestService";
import CustomSelect from "../../components/ui/select";

const PRACTICE_AREAS = [
  "Corporate & Commercial Law",
  "Real Estate & Property Law",
  "Dispute Resolution & Arbitration",
  "Human Rights Enforcement",
  "Labour & Employment Matters",
  "Immigration & Cross-Border Law",
  "Family & Personal Law Practice",
  "Intellectual Property, Tech & IT Law",
  "Cyber Security & Data Protection",
  "Sports Law",
  "Mining & Natural Resources Compliance",
  "General Legal Advisory",
];

const CONSULTATION_MODES = [
  { id: "virtual", label: "Virtual Video Call (Google Meet / Zoom)", icon: Video },
  { id: "phone", label: "Direct Phone Call", icon: Phone },
  { id: "in_person", label: "In-Person Meeting", icon: Users },
];

const URGENCY_LEVELS = [
  "Standard (Within a few days)",
  "High Priority (Within 24 - 48 hours)",
  "Immediate / Urgent",
];

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    practiceArea: PRACTICE_AREAS[0],
    subject: "",
    details: "",
    mode: CONSULTATION_MODES[0].label,
    preferredDate: "",
    urgency: URGENCY_LEVELS[0],
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
        type: "consultation",
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: `${formData.practiceArea}: ${formData.subject}`,
        details: formData.details,
        metadata: {
          practiceArea: formData.practiceArea,
          consultationTopic: formData.subject,
          preferredMode: formData.mode,
          preferredDate: formData.preferredDate || "Earliest available",
          urgency: formData.urgency,
        },
      });

      setSubmitted(true);
    } catch (err: any) {
      console.error("Consultation booking error:", err);
      setError(
        err?.response?.data?.error ||
          "Failed to schedule your consultation. Please check your inputs or try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-[#0B132B]">
      <SEO
        title="Book a Legal Consultation | HybridLP"
        description="Book a dedicated consultation session with verified legal experts in corporate, real estate, litigation, tech law and more."
        canonical="https://hybridlp.com/book-consultation"
      />

      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 mt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#CAA500] transition-colors lato-regular"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold inter-font mb-4 text-white leading-tight">
            Book a Legal Consultation
          </h1>
          <p className="text-gray-300 text-base md:text-lg lato-regular max-w-2xl mx-auto leading-relaxed">
            Discuss your case, regulatory question, or corporate matter directly with seasoned legal counsel. Select your area of interest and tell us about your situation.
          </p>
        </div>

        {submitted ? (
          /* Success Screen */
          <div className="bg-[#15233F] border border-[#CAA500]/40 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold inter-font text-white mb-3">
              Consultation Scheduled!
            </h2>
            <p className="text-gray-300 text-base md:text-lg lato-regular max-w-xl mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Your consultation request has been registered. A confirmation email has been dispatched to <strong className="text-[#CAA500]">{formData.email}</strong>. Our legal team will contact you to finalize the session details.
            </p>

            <div className="bg-[#0B132B] border border-gray-800 rounded-xl p-6 max-w-md mx-auto text-left mb-8 space-y-2 text-sm lato-regular">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Practice Area:</span>
                <span className="text-white font-medium">{formData.practiceArea}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 py-2">
                <span className="text-gray-400">Preferred Mode:</span>
                <span className="text-white font-medium">{formData.mode}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 py-2">
                <span className="text-gray-400">Preferred Date:</span>
                <span className="text-white font-medium">{formData.preferredDate || "Earliest available"}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-400">Urgency:</span>
                <span className="text-white font-medium">{formData.urgency}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    practiceArea: PRACTICE_AREAS[0],
                    subject: "",
                    details: "",
                    mode: CONSULTATION_MODES[0].label,
                    preferredDate: "",
                    urgency: URGENCY_LEVELS[0],
                  });
                }}
                className="w-full sm:w-auto bg-transparent border border-[#CAA500] text-[#CAA500] px-6 py-3 rounded-lg font-semibold hover:bg-[#CAA500]/10 transition-all text-sm md:text-base"
              >
                Book Another Consultation
              </button>
              <Link
                to="/"
                className="w-full sm:w-auto bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all text-sm md:text-base"
              >
                Return to Home
              </Link>
            </div>
          </div>
        ) : (
          /* Consultation Form */
          <div className="bg-[#15233F] border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl">
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 lato-regular">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-[#CAA500]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Chioma Okeke"
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
                    placeholder="e.g. chioma@example.com"
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    placeholder="e.g. +234 802 345 6789"
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>

                <div>
                  <CustomSelect
                    label="Legal Practice Area"
                    required
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleChange}
                    options={PRACTICE_AREAS}
                  />
                </div>
              </div>

              {/* Consultation Topic */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Topic / Matter Summary <span className="text-[#CAA500]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Shareholder Agreement Dispute and Resolution Strategy"
                  className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Brief Overview of Your Case / Questions <span className="text-[#CAA500]">*</span>
                </label>
                <textarea
                  name="details"
                  required
                  rows={5}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Please provide a brief background of the situation, the parties involved, any relevant dates or prior legal actions, and what specific advice or outcomes you are looking to achieve..."
                  className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors resize-y"
                />
              </div>

              {/* Mode, Date & Urgency */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <CustomSelect
                    label="Consultation Mode"
                    required
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    options={CONSULTATION_MODES.map((item) => ({ label: item.label, value: item.label }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>

                <div>
                  <CustomSelect
                    label="Urgency Level"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    options={URGENCY_LEVELS}
                  />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#CAA500]" />
                  <span>Strict confidentiality & attorney-client privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#CAA500]" />
                  <span>Flexible scheduling with verified practitioners</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-b from-[#CAA500] to-[#825900] text-white py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 active:scale-98"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Scheduling Consultation...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Book Legal Consultation
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
