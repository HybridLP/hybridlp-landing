import React, { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import EnterpriseBusinessInfo from "./EnterpriseBusinessInfo";
import EnterprisePartnersSection from "./EnterprisePartnersSection";
import { PartnerData } from "./PartnerFields";
import { serviceRequestService } from "../../../services/serviceRequestService";
import { createDefaultPartner, buildEnterpriseSubmission } from "../utils/enterpriseHelpers";

interface Props {
  onSuccess: (data: { fullName: string; email: string; phone: string; businessName: string }) => void;
}

export default function EnterpriseForm({ onSuccess }: Props) {
  const [businessName1, setBusinessName1] = useState("");
  const [businessName2, setBusinessName2] = useState("");
  const [proprietorshipType, setProprietorshipType] = useState("Sole Proprietorship");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [partners, setPartners] = useState<PartnerData[]>([createDefaultPartner()]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isPartnership = proprietorshipType === "Partnership";

  const handlePartnerChange = (index: number, field: keyof PartnerData, value: any) => {
    setPartners((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addPartner = () => setPartners((prev) => [...prev, createDefaultPartner()]);

  const removePartner = (index: number) => {
    if (partners.length <= 1) return;
    setPartners((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const firstPartner = partners[0];
    if (!firstPartner?.passportPhoto) {
      setError("Please upload the passport photograph of the proprietor / partner.");
      return;
    }
    if (!firstPartner?.signature) {
      setError("Please upload the scanned copy or picture of the signature.");
      return;
    }

    setLoading(true);

    try {
      const payload = buildEnterpriseSubmission({
        businessName1,
        businessName2,
        proprietorshipType,
        natureOfBusiness,
        businessAddress,
        businessPhone,
        businessEmail,
        additionalInfo,
        partners,
      });

      await serviceRequestService.submit(payload);

      onSuccess({
        fullName: firstPartner.fullName,
        email: firstPartner.personalEmail || businessEmail,
        phone: firstPartner.personalPhone || businessPhone,
        businessName: businessName1,
      });
    } catch (err: any) {
      console.error("Enterprise registration submission error:", err);
      setError(err?.response?.data?.error || "Failed to submit registration. Please check your inputs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 lato-regular">
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* 1 - 4. Business Information */}
      <EnterpriseBusinessInfo
        businessName1={businessName1}
        setBusinessName1={setBusinessName1}
        businessName2={businessName2}
        setBusinessName2={setBusinessName2}
        proprietorshipType={proprietorshipType}
        setProprietorshipType={setProprietorshipType}
        natureOfBusiness={natureOfBusiness}
        setNatureOfBusiness={setNatureOfBusiness}
        businessAddress={businessAddress}
        setBusinessAddress={setBusinessAddress}
        businessPhone={businessPhone}
        setBusinessPhone={setBusinessPhone}
        businessEmail={businessEmail}
        setBusinessEmail={setBusinessEmail}
      />

      {/* 5 - 15. Proprietor / Partners Details */}
      <EnterprisePartnersSection
        partners={partners}
        isPartnership={isPartnership}
        onPartnerChange={handlePartnerChange}
        onAddPartner={addPartner}
        onRemovePartner={removePartner}
      />

      {/* 16. Additional information */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          16. Additional Information (Where necessary)
        </label>
        <textarea
          rows={2}
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          placeholder="Any special remarks, branch office, or particular CAC request..."
          className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-linear-to-b from-[#CAA500] to-[#825900] text-white py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 active:scale-98 cursor-pointer"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5" /> Submit Enterprise Registration Form
          </>
        )}
      </button>
    </form>
  );
}
