import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowLeft, Clock, ShieldCheck, Send } from "lucide-react";
import SEO from "../../components/widgets/seo";
import { serviceRequestService } from "../../services/serviceRequestService";
import CustomSelect from "../../components/ui/select";
import { DOCUMENT_TYPES, TURNAROUND_TIMES } from "./constants";
import DraftingSuccess from "./components/DraftingSuccess";

export default function RequestLegalDrafting() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    documentType: DOCUMENT_TYPES[0],
    subject: "",
    details: "",
    turnaround: TURNAROUND_TIMES[1],
    additionalNotes: "",
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
        type: "legal_drafting",
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: `${formData.documentType}: ${formData.subject}`,
        details: formData.details,
        metadata: {
          documentType: formData.documentType,
          documentTitle: formData.subject,
          requestedTurnaround: formData.turnaround,
          additionalNotes: formData.additionalNotes || undefined,
        },
      });
      setSubmitted(true);
    } catch (err: any) {
      setError(err?.response?.data?.error || "Could not submit your request. Please try again.");
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
      documentType: DOCUMENT_TYPES[0],
      subject: "",
      details: "",
      turnaround: TURNAROUND_TIMES[1],
      additionalNotes: "",
    });
  };

  return (
    <div className="min-h-screen text-white pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-[#0B132B]">
      <SEO
        title="Request Legal Drafting | HybridLP"
        description="Request custom, legally binding agreements and contracts drafted by certified legal practitioners."
        canonical="https://hybridlp.com/request-legal-drafting"
      />
      <div className="max-w-4xl mx-auto">


        <div className="text-center mb-10 mt-6 md:mb-12">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold inter-font mb-4 text-white leading-tight">
            Request Expert Legal Drafting
          </h1>
          <p className="text-gray-300 text-base md:text-lg lato-regular max-w-2xl mx-auto leading-relaxed">
            Need contracts, agreements, notices, or custom corporate instruments? Fill out the form below and our verified legal practitioners will handle your draft with precision.
          </p>
        </div>

        {submitted ? (
          <DraftingSuccess {...formData} onReset={handleReset} />
        ) : (
          <div className="bg-[#15233F] border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl">
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 lato-regular">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name <span className="text-[#CAA500]">*</span></label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="e.g. Adebayo Johnson" className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address <span className="text-[#CAA500]">*</span></label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="e.g. adebayo@example.com" className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number <span className="text-[#CAA500]">*</span></label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="e.g. +234 801 234 5678" className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors" />
                </div>
                <div>
                  <CustomSelect label="Document Category" required name="documentType" value={formData.documentType} onChange={handleChange} options={DOCUMENT_TYPES} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Document Title or Purpose <span className="text-[#CAA500]">*</span></label>
                <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="e.g. Residential Tenancy Agreement for Lekki Phase 1" className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Drafting Instructions & Specific Clauses <span className="text-[#CAA500]">*</span></label>
                <textarea name="details" required rows={5} value={formData.details} onChange={handleChange} placeholder="Detail key terms, parties, financial terms, payment schedules, duration, or special clauses..." className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors resize-y" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <CustomSelect label="Preferred Turnaround Time" name="turnaround" value={formData.turnaround} onChange={handleChange} options={TURNAROUND_TIMES} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Additional Notes (Optional)</label>
                  <input type="text" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} placeholder="Any background reference or notes" className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors" />
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 text-xs text-gray-400">
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#CAA500]" /><span>Drafted by certified Nigerian legal practitioners</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#CAA500]" /><span>Swift response and customized consultation</span></div>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-linear-to-b from-[#CAA500] to-[#825900] text-white py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 active:scale-98 cursor-pointer">
                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><Send className="w-5 h-5" /> Submit Legal Drafting Request</>}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
