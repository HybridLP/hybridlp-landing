import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  CheckCircle2, AlertCircle, ArrowLeft, Clock, ShieldCheck, Send } from "lucide-react";
import SEO from "../../components/widgets/seo";
import { serviceRequestService } from "../../services/serviceRequestService";
import CustomSelect from "../../components/ui/select";

const DOCUMENT_TYPES = [
  "Non-Disclosure Agreement (NDA)",
  "Commercial Contract / Service Agreement",
  "Employment / Independent Contractor Agreement",
  "Tenancy / Residential / Commercial Lease Agreement",
  "Power of Attorney",
  "Partnership Agreement / Joint Venture",
  "Memorandum of Understanding (MOU)",
  "Wills & Estate Planning Document",
  "Legal Notice / Demand Letter",
  "Company Policy / Website Terms & Privacy Policy",
  "Loan / Promissory Note",
  "Other Custom Legal Document",
];

const TURNAROUND_TIMES = [
  "Urgent (24 - 48 hours)",
  "Standard (3 - 5 business days)",
  "1 - 2 weeks",
  "Flexible",
];

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
      console.error("Drafting request error:", err);
      setError(
        err?.response?.data?.error ||
          "We could not submit your request at this moment. Please check your information or try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-[#0B132B]">
      <SEO
        title="Request Legal Drafting | HybridLP"
        description="Request custom, legally binding agreements and contracts drafted by certified legal practitioners. Fast, professional, and secure."
        canonical="https://hybridlp.com/request-legal-drafting"
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
            Request Expert Legal Drafting
          </h1>
          <p className="text-gray-300 text-base md:text-lg lato-regular max-w-2xl mx-auto leading-relaxed">
            Need contracts, agreements, notices, or custom corporate instruments? Fill out the form below and our verified legal practitioners will handle your draft with precision.
          </p>
        </div>

        {submitted ? (
          /* Success Screen */
          <div className="bg-[#15233F] border border-[#CAA500]/40 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold inter-font text-white mb-3">
              Request Received Successfully!
            </h2>
            <p className="text-gray-300 text-base md:text-lg lato-regular max-w-xl mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. A confirmation email has been sent to <strong className="text-[#CAA500]">{formData.email}</strong>. Our legal team will review your specifications and contact you shortly.
            </p>

            <div className="bg-[#0B132B] border border-gray-800 rounded-xl p-6 max-w-md mx-auto text-left mb-8 space-y-2 text-sm lato-regular">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Document Type:</span>
                <span className="text-white font-medium">{formData.documentType}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 py-2">
                <span className="text-gray-400">Turnaround:</span>
                <span className="text-white font-medium">{formData.turnaround}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-400">Contact Phone:</span>
                <span className="text-white font-medium">{formData.phone}</span>
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
                    documentType: DOCUMENT_TYPES[0],
                    subject: "",
                    details: "",
                    turnaround: TURNAROUND_TIMES[1],
                    additionalNotes: "",
                  });
                }}
                className="w-full sm:w-auto bg-transparent border border-[#CAA500] text-[#CAA500] px-6 py-3 rounded-lg font-semibold hover:bg-[#CAA500]/10 transition-all text-sm md:text-base"
              >
                Submit Another Request
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
          /* Drafting Form */
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
                    placeholder="e.g. Adebayo Johnson"
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
                    placeholder="e.g. adebayo@example.com"
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
                    placeholder="e.g. +234 801 234 5678"
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>

                <div>
                  <CustomSelect
                    label="Document Category"
                    required
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleChange}
                    options={DOCUMENT_TYPES}
                  />
                </div>
              </div>

              {/* Document Details */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Document Title or Purpose <span className="text-[#CAA500]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Residential Tenancy Agreement for Property at Lekki Phase 1"
                  className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Drafting Instructions & Specific Clauses <span className="text-[#CAA500]">*</span>
                </label>
                <textarea
                  name="details"
                  required
                  rows={5}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Detail the key terms, parties involved, financial terms, payment schedules, duration, restrictive covenants, or any special clauses you wish to incorporate..."
                  className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors resize-y"
                />
              </div>

              {/* Turnaround & Additional Notes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <CustomSelect
                    label="Preferred Turnaround Time"
                    name="turnaround"
                    value={formData.turnaround}
                    onChange={handleChange}
                    options={TURNAROUND_TIMES}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <input
                    type="text"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Any links, background reference, or questions"
                    className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] transition-colors"
                  />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#CAA500]" />
                  <span>Drafted by certified Nigerian legal practitioners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#CAA500]" />
                  <span>Swift response and customized consultation</span>
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
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Legal Drafting Request
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
