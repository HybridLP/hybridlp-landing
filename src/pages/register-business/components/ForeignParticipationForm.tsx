import React, { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import CompanyGeneralInfo from "./CompanyGeneralInfo";
import ForeignShareholdersSection from "./ForeignShareholdersSection";
import DirectorsSection from "./DirectorsSection";
import SecretaryDetailsForm from "./SecretaryDetailsForm";
import { StructureItem } from "../data/structures";
import { PersonParticulars, SecretaryParticulars, CorporateAffiliate } from "../types/cacTypes";
import { createDefaultPerson, createDefaultSecretary } from "../utils/companyHelpers";
import { buildForeignSubmission } from "../utils/foreignHelpers";
import { serviceRequestService } from "../../../services/serviceRequestService";

interface Props {
  structure: StructureItem;
  onSuccess: (data: { fullName: string; email: string; phone: string; businessName: string }) => void;
}

export default function ForeignParticipationForm({ structure, onSuccess }: Props) {
  const [businessName1, setBusinessName1] = useState("");
  const [businessName2, setBusinessName2] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [shareCapital, setShareCapital] = useState("10,000,000 Ordinary Shares of N1.00 each (NIPC Compliant)");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [nigerianShareholders, setNigerianShareholders] = useState<PersonParticulars[]>([createDefaultPerson()]);
  const [foreignShareholders, setForeignShareholders] = useState<PersonParticulars[]>([createDefaultPerson()]);
  const [foreignCorporates, setForeignCorporates] = useState<CorporateAffiliate[]>([]);
  const [directors, setDirectors] = useState<PersonParticulars[]>([createDefaultPerson(), createDefaultPerson()]);
  const [secretary, setSecretary] = useState<SecretaryParticulars>(createDefaultSecretary());

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const firstForeign = foreignShareholders[0];
    if (!firstForeign?.idDocument || !firstForeign?.signature) {
      setError("Please upload International Passport and signature for Foreign Shareholder 1.");
      return;
    }
    if (!directors[0]?.idDocument || !directors[0]?.signature) {
      setError("Please upload valid ID/Passport and signature for Director 1.");
      return;
    }

    setLoading(true);

    try {
      const payload = buildForeignSubmission({
        structure,
        businessName1,
        businessName2,
        natureOfBusiness,
        businessAddress,
        businessPhone,
        businessEmail,
        shareCapital,
        nigerianShareholders,
        foreignShareholders,
        foreignCorporates,
        directors,
        secretary,
        additionalNotes,
      });

      await serviceRequestService.submit(payload);

      onSuccess({
        fullName: directors[0]?.fullName || foreignShareholders[0]?.fullName,
        email: directors[0]?.email || businessEmail,
        phone: directors[0]?.phone || businessPhone,
        businessName: businessName1,
      });
    } catch (err: any) {
      console.error("Foreign participation registration error:", err);
      setError(err?.response?.data?.error || "Failed to submit registration. Please check your inputs.");
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

      {/* 1 - 5. Company General Information */}
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
        showShareCapital={true}
        shareCapital={shareCapital}
        setShareCapital={setShareCapital}
        entityLabel="Company"
      />

      {/* 6 - 11. Shareholders (Nigerian, Foreign Individual, Foreign Corporate) */}
      <ForeignShareholdersSection
        nigerianShareholders={nigerianShareholders}
        setNigerianShareholders={setNigerianShareholders}
        foreignShareholders={foreignShareholders}
        setForeignShareholders={setForeignShareholders}
        foreignCorporates={foreignCorporates}
        setForeignCorporates={setForeignCorporates}
      />

      {/* 12 - 13. Directors Information */}
      <DirectorsSection
        directors={directors}
        onChange={(idx, field, val) => {
          setDirectors((prev) => {
            const next = [...prev];
            next[idx] = { ...next[idx], [field]: val };
            return next;
          });
        }}
        onAdd={() => setDirectors((prev) => [...prev, createDefaultPerson()])}
        onRemove={(i) => setDirectors((prev) => prev.filter((_, idx) => idx !== i))}
      />

      {/* 14. Particulars of Company Secretary */}
      <SecretaryDetailsForm
        secretary={secretary}
        onChange={(field, val) => setSecretary((prev) => ({ ...prev, [field]: val }))}
      />

      {/* Additional information */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          Additional Information or Documentation (Where necessary)
        </label>
        <textarea
          rows={2}
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          placeholder="NIPC registration directives, business permits, or specific expatriate quota requests..."
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
            <Send className="w-5 h-5" /> Submit {structure.shortName} Registration
          </>
        )}
      </button>
    </form>
  );
}
