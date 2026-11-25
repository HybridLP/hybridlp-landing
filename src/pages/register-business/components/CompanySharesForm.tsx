import React, { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import CompanyGeneralInfo from "./CompanyGeneralInfo";
import CompanyGovernanceSection from "./CompanyGovernanceSection";
import { StructureItem } from "../data/structures";
import { PersonParticulars, SecretaryParticulars } from "../types/cacTypes";
import {
  createDefaultPerson,
  createDefaultSecretary,
  buildCompanySharesSubmission,
} from "../utils/companyHelpers";
import { serviceRequestService } from "../../../services/serviceRequestService";

interface Props {
  structure: StructureItem;
  onSuccess: (data: { fullName: string; email: string; phone: string; businessName: string }) => void;
}

export default function CompanySharesForm({ structure, onSuccess }: Props) {
  const isPLC = structure.id === "plc";
  const isGuarantee = structure.id === "guarantee";

  const [businessName1, setBusinessName1] = useState("");
  const [businessName2, setBusinessName2] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [shareCapital, setShareCapital] = useState("1,000,000 Ordinary Shares of N1.00 each");
  const [fundingSource, setFundingSource] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [shareholders, setShareholders] = useState<PersonParticulars[]>([createDefaultPerson()]);
  const [directors, setDirectors] = useState<PersonParticulars[]>([createDefaultPerson(), createDefaultPerson()]);
  const [secretary, setSecretary] = useState<SecretaryParticulars>(createDefaultSecretary());

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const firstShareholder = shareholders[0];
    const firstDirector = directors[0];

    if (!firstShareholder?.idDocument || !firstShareholder?.signature) {
      setError("Please upload the valid ID and signature for Shareholder 1.");
      return;
    }
    if (!firstDirector?.idDocument || !firstDirector?.signature) {
      setError("Please upload the valid ID and signature for Director 1.");
      return;
    }

    setLoading(true);

    try {
      const payload = buildCompanySharesSubmission({
        structure,
        businessName1,
        businessName2,
        natureOfBusiness,
        businessAddress,
        businessPhone,
        businessEmail,
        shareCapital,
        fundingSource,
        shareholders,
        directors,
        secretary,
        additionalNotes,
      });

      await serviceRequestService.submit(payload);

      onSuccess({
        fullName: firstDirector.fullName || firstShareholder.fullName,
        email: firstDirector.email || businessEmail,
        phone: firstDirector.phone || businessPhone,
        businessName: businessName1,
      });
    } catch (err: any) {
      console.error("Company registration submission error:", err);
      setError(err?.response?.data?.error || "Failed to submit company registration. Please check your inputs.");
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
        showShareCapital={!isGuarantee}
        shareCapital={shareCapital}
        setShareCapital={setShareCapital}
        showFundingSource={isGuarantee}
        fundingSource={fundingSource}
        setFundingSource={setFundingSource}
        entityLabel="Company"
      />

      {/* Governance: Shareholders, Directors, Secretary */}
      <CompanyGovernanceSection
        shareholders={shareholders}
        setShareholders={setShareholders}
        directors={directors}
        setDirectors={setDirectors}
        secretary={secretary}
        setSecretary={setSecretary}
        showShareClass={isPLC}
        showProfessionalQualification={isPLC}
        secretaryRequired={isPLC}
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
          placeholder="Any special clauses, particular objectives, or instructions for CAC filing..."
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
