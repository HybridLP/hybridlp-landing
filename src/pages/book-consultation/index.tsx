import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, AlertCircle, ArrowLeft, ShieldCheck, Send } from "lucide-react";
import SEO from "../../components/widgets/seo";
import { serviceRequestService } from "../../services/serviceRequestService";
import CustomSelect from "../../components/ui/select";
import { PRACTICE_AREAS, CONSULTATION_MODES, URGENCY_LEVELS } from "./constants";
import ConsultationSuccess from "./components/ConsultationSuccess";

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    practiceArea: PRACTICE_AREAS[0],
    subject: "",
    details: "",
    mode: CONSULTATION_MODES[0],
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name?: string; value: string } }
  ) => {
    const { name, value } = e.target;
    if (name) setFormData((prev) => ({ ...prev, [name]: value }));
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
      setError(err?.response?.data?.error || "Failed to schedule your consultation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      practiceArea: PRACTICE_AREAS[0],
      subject: "",
      details: "",
      mode: CONSULTATION_MODES[0],
      preferredDate: "",
      urgency: URGENCY_LEVELS[0],
    });
  };

  return (
    <div className="min-h-screen text-white pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-[#0B132B]">
      <SEO
        title="Book a Legal Consultation | HybridLP"
        description="Book a dedicated consultation session with verified legal experts in corporate, real estate, litigation, tech law and more."
        canonical="https://hybridlp.com/book-consultation"
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#CAA500] transition-colors lato-regular">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15233F] border border-gray-800 text-[#CAA500] text-xs md:text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" /> Legal Consultation
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold inter-font mb-4 text-white leading-tight">
            Book a Legal Consultation
          </h1>
          <p className="text-gray-300 text-base md:text-lg lato-regular max-w-2xl mx-auto leading-relaxed">
            Discuss your case, regulatory question, or corporate matter directly with seasoned legal counsel. Select your area of interest and tell us about your situation.
          </p>
        </div>

        {submitted ? (
          <ConsultationSuccess {...formData} onReset={handleReset} />
        ) : (
          <div className="bg-[#15233F] border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl">
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 lato-regular">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name <span className="text-[#CAA500]">*</span></label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="e.g. Chioma Okeke" className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address <span className="text-[#CAA500]">*</span></label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="e.g. chioma@example.com" className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number <span className="text-[#CAA500]">*</span></label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="e.g. +234 802 345 6789" className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors" />
                </div>
                <div>
                  <CustomSelect label="Legal Practice Area" required name="practiceArea" value={formData.practiceArea} onChange={handleChange} options={PRACTICE_AREAS} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Topic / Matter Summary <span className="text-[#CAA500]">*</span></label>
                <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="e.g. Commercial Lease Dispute Resolution" className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Brief Overview of Your Case / Questions <span className="text-[#CAA500]">*</span></label>
                <textarea name="details" required rows={5} value={formData.details} onChange={handleChange} placeholder="Please provide background of the situation, parties involved, and key questions..." className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors resize-y" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <CustomSelect label="Consultation Mode" required name="mode" value={formData.mode} onChange={handleChange} options={CONSULTATION_MODES} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date (Optional)</label>
                  <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#CAA500] transition-colors" />
                </div>
                <div>
                  <CustomSelect label="Urgency Level" name="urgency" value={formData.urgency} onChange={handleChange} options={URGENCY_LEVELS} />
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 text-xs text-gray-400">
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#CAA500]" /><span>Strict confidentiality & attorney-client privilege</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#CAA500]" /><span>Flexible scheduling with verified practitioners</span></div>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-linear-to-b from-[#CAA500] to-[#825900] text-white py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 active:scale-98 cursor-pointer">
                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><Send className="w-5 h-5" /> Book Legal Consultation</>}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
