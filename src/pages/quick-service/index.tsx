import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../../assets/logo/favIcon.png";
import authBg from "../../assets/auth-bg.png";
import authBg2 from "../../assets/auth-bg2.png";
import SEO from "../../components/widgets/seo";
import { serviceRequestService } from "../../services/serviceRequestService";
import type { QuickServiceOption } from "./constants";
import QuickServiceGrid from "./components/QuickServiceGrid";
import QuickServiceForm from "./components/QuickServiceForm";
import QuickServiceSuccess from "./components/QuickServiceSuccess";

export default function QuickServicePage() {
  const [selected, setSelected] = useState<QuickServiceOption | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    timeline: "Within 48 hrs",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    setError(null);
    setLoading(true);
    try {
      await serviceRequestService.submit({
        type: "quick_service",
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        subject: selected.label,
        details: form.details,
        metadata: {
          serviceCategory: selected.label,
          serviceId: selected.id,
          urgency: form.timeline,
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
    setSelected(null);
    setForm({ fullName: "", email: "", phone: "", timeline: "Within 48 hrs", details: "" });
  };

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-no-repeat bg-white">
      <SEO
        title="Fast-Track Legal Service | HybridLP"
        description="Get fast legal assistance without creating an account. Submit your request and receive a response via email."
        canonical="https://hybridlp.com/quick-service"
      />
      <img
        src={authBg2}
        alt=""
        className="fixed top-0 w-[60%] md:w-[40%] h-auto md:h-[50%] -left-[10%] md:top-[10%] object-contain opacity-60 md:opacity-100 pointer-events-none"
      />
      <img
        src={authBg}
        alt=""
        className="fixed bottom-0 right-0 w-[70%] md:w-[40%] h-auto md:h-[80%] object-contain opacity-60 md:opacity-100 pointer-events-none"
      />

      <div className="inter-font relative z-20 w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 py-10 bg-[#E9DFB0]/85">
        <div className="w-full max-w-5xl mb-4">
          <NavLink
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#333333] hover:opacity-75 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </NavLink>
        </div>

        <img src={logo} className="size-14 sm:size-16" alt="Hybrid LP" />
        <h3 className="inter-font font-semibold text-black text-lg sm:text-xl mt-2">
          Hybrid LP — Fast-Track Service
        </h3>
        <p className="text-[#545454] mt-1 text-sm sm:text-base inter-font text-center max-w-xl px-4">
          {selected
            ? `Tell us briefly what you need for ${selected.label} and we'll respond via email.`
            : "Simplifying onboarding for clients. Pick what you need — no account required."}
        </p>

        {/* Minimalist progress bar (no badges) */}
        {!submitted && (
          <div className="w-48 h-1 bg-black/10 rounded-full overflow-hidden mt-4">
            <div
              className={`h-full bg-[#333333] transition-all duration-300 ${
                selected ? "w-full" : "w-1/2"
              }`}
            />
          </div>
        )}

        <div className="mt-8 w-full max-w-5xl flex justify-center">
          {submitted && selected ? (
            <QuickServiceSuccess
              serviceLabel={selected.label}
              fullName={form.fullName}
              email={form.email}
              onReset={handleReset}
            />
          ) : !selected ? (
            <QuickServiceGrid onSelect={setSelected} />
          ) : (
            <QuickServiceForm
              selected={selected}
              fullName={form.fullName}
              email={form.email}
              phone={form.phone}
              timeline={form.timeline}
              details={form.details}
              loading={loading}
              error={error}
              onChange={handleChange}
              onBack={() => setSelected(null)}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
