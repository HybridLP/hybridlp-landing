import React, { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import CompanyGeneralInfo from "./CompanyGeneralInfo";
import PartnershipGeneralPartnersSection from "./PartnershipGeneralPartnersSection";
import PartnershipSecondaryPartnersSection from "./PartnershipSecondaryPartnersSection";
import PartnershipCorporateSection from "./PartnershipCorporateSection";
import PartnershipCommencementSection from "./PartnershipCommencementSection";
import { StructureItem } from "../data/structures";
import { PersonParticulars, CorporateAffiliate } from "../types/cacTypes";
import { createDefaultPerson, createDefaultCorporateAffiliate } from "../utils/companyHelpers";
import { buildPartnershipSubmission } from "../utils/partnershipHelpers";
import { serviceRequestService } from "../../../services/serviceRequestService";

interface Props {
  structure: StructureItem;
  onSuccess: (data: { fullName: string; email: string; phone: string; businessName: string }) => void;
}

export default function PartnershipForm({ structure, onSuccess }: Props) {
  const isLLP = structure.id === "llp";
  const secondaryTitle = isLLP ? "Designated Partner" : "Limited Partner";

  const [businessName1, setBusinessName1] = useState("");
  const [businessName2, setBusinessName2] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [commencementDate, setCommencementDate] = useState("");
  const [duration, setDuration] = useState("");
  const [agreementTerms, setAgreementTerms] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [generalPartners, setGeneralPartners] = useState<PersonParticulars[]>([createDefaultPerson()]);
  const [secondaryPartners, setSecondaryPartners] = useState<PersonParticulars[]>([createDefaultPerson()]);
  const [corporatePartners, setCorporatePartners] = useState<CorporateAffiliate[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePartnerChange = (
    setList: React.Dispatch<React.SetStateAction<PersonParticulars[]>>,
    idx: number,
    field: keyof PersonParticulars,
    val: any
  ) => {
    setList((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: val };
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const firstGp = generalPartners[0];
    const firstSp = secondaryPartners[0];

    if (!firstGp?.idDocument || !firstGp?.signature) {
      setError("Please upload the valid ID and signature for General Partner 1.");
      return;
    }
    if (!firstSp?.idDocument || !firstSp?.signature) {
      setError(`Please upload the valid ID and signature for ${secondaryTitle} 1.`);
      return;
    }

    setLoading(true);

    try {
      const payload = buildPartnershipSubmission({
        structure,
        businessName1,
        businessName2,
        natureOfBusiness,
        businessAddress,
        businessPhone,
        businessEmail,
        commencementDate,
        duration,
        agreementTerms,
        generalPartners,
        secondaryPartners,
        corporatePartners,
        additionalNotes,
      });

      await serviceRequestService.submit(payload);

      onSuccess({
        fullName: firstGp.fullName,
        email: firstGp.email || businessEmail,
        phone: firstGp.phone || businessPhone,
        businessName: businessName1,
      });
    } catch (err: any) {
      console.error("Partnership registration error:", err);
      setError(err?.response?.data?.error || "Failed to submit partnership registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 lato-regular">
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* 1 - 4. Partnership General Information */}
      <CompanyGeneralInfo
        businessName1={businessName1}
        setBusinessName1={setBusinessName1}
        businessName2={businessName2}
        setBusinessName2={setBusinessName2}
        natureOfBusiness={natureOfBusiness}
        setNatureOfBusiness={setNatureOfBusiness}
        businessAddress={businessAddress}
        setBusinessAddress={setBusinessAddress}
        businessPhone={businessPhone}
        setBusinessPhone={setBusinessPhone}
        businessEmail={businessEmail}
        setBusinessEmail={setBusinessEmail}
        entityLabel="Partnership"
      />

      {/* 5 - 6 & 11. Commencement, Duration & Terms */}
      <PartnershipCommencementSection
        commencementDate={commencementDate}
        setCommencementDate={setCommencementDate}
        duration={duration}
        setDuration={setDuration}
        agreementTerms={agreementTerms}
        setAgreementTerms={setAgreementTerms}
        additionalNotes={additionalNotes}
        setAdditionalNotes={setAdditionalNotes}
      />

      {/* 7 - 8. General Partners */}
      <PartnershipGeneralPartnersSection
        partners={generalPartners}
        onChange={(idx, field, val) => handlePartnerChange(setGeneralPartners, idx, field, val)}
        onAdd={() => setGeneralPartners((prev) => [...prev, createDefaultPerson()])}
        onRemove={(i) => setGeneralPartners((prev) => prev.filter((_, idx) => idx !== i))}
      />

      {/* 9 - 10. Limited / Designated Partners */}
      <PartnershipSecondaryPartnersSection
        secondaryTitle={secondaryTitle}
        isLLP={isLLP}
        partners={secondaryPartners}
        onChange={(idx, field, val) => handlePartnerChange(setSecondaryPartners, idx, field, val)}
        onAdd={() => setSecondaryPartners((prev) => [...prev, createDefaultPerson()])}
        onRemove={(i) => setSecondaryPartners((prev) => prev.filter((_, idx) => idx !== i))}
      />

      {/* 12. Corporate Partners (Where applicable) */}
      <PartnershipCorporateSection
        corporatePartners={corporatePartners}
        onAdd={() => setCorporatePartners((prev) => [...prev, createDefaultCorporateAffiliate()])}
        onRemove={(i) => setCorporatePartners((prev) => prev.filter((_, idx) => idx !== i))}
        onChange={(i, field, val) => {
          setCorporatePartners((prev) => {
            const next = [...prev];
            next[i] = { ...next[i], [field]: val };
            return next;
          });
        }}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-linear-to-b from-[#CAA500] to-[#825900] text-white py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 active:scale-98 cursor-pointer"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5" /> Submit {structure.shortName} Registration
          </>
        )}
      </button>
    </form>
  );
}
