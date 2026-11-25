import React, { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import CompanyGeneralInfo from "./CompanyGeneralInfo";
import ConglomerateAffiliatesSection from "./ConglomerateAffiliatesSection";
import ConglomerateSpecialDetails from "./ConglomerateSpecialDetails";
import CompanyGovernanceSection from "./CompanyGovernanceSection";
import { StructureItem } from "../data/structures";
import { PersonParticulars, SecretaryParticulars, CorporateAffiliate } from "../types/cacTypes";
import { createDefaultPerson, createDefaultSecretary, createDefaultCorporateAffiliate } from "../utils/companyHelpers";
import { buildConglomerateSubmission } from "../utils/conglomerateHelpers";
import { serviceRequestService } from "../../../services/serviceRequestService";

interface Props {
  structure: StructureItem;
  onSuccess: (data: { fullName: string; email: string; phone: string; businessName: string }) => void;
}

export default function ConglomerateForm({ structure, onSuccess }: Props) {
  const isHolding = structure.id === "holding";
  const isConsortium = structure.id === "consortium";
  const affiliateLabel = isHolding ? "Subsidiary Companies" : isConsortium ? "Participating Companies" : "Associated Companies";

  const [businessName1, setBusinessName1] = useState("");
  const [businessName2, setBusinessName2] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [shareCapital, setShareCapital] = useState("10,000,000 Ordinary Shares of N1.00 each");
  const [projectDetails, setProjectDetails] = useState("");
  const [consortiumDuration, setConsortiumDuration] = useState("");
  const [consortiumTerms, setConsortiumTerms] = useState("");
  const [controllingInterestDetails, setControllingInterestDetails] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [affiliates, setAffiliates] = useState<CorporateAffiliate[]>([
    createDefaultCorporateAffiliate(),
    createDefaultCorporateAffiliate(),
  ]);
  const [shareholders, setShareholders] = useState<PersonParticulars[]>([createDefaultPerson()]);
  const [directors, setDirectors] = useState<PersonParticulars[]>([createDefaultPerson(), createDefaultPerson()]);
  const [secretary, setSecretary] = useState<SecretaryParticulars>(createDefaultSecretary());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!affiliates[0]?.incorporationCert || !affiliates[1]?.incorporationCert) {
      setError(`Please upload Certificate of Incorporation for at least two ${affiliateLabel}.`);
      return;
    }
    if (!shareholders[0]?.idDocument || !shareholders[0]?.signature) {
      setError("Please upload valid ID and signature for Shareholder 1.");
      return;
    }
    if (!directors[0]?.idDocument || !directors[0]?.signature) {
      setError("Please upload valid ID and signature for Director 1.");
      return;
    }

    setLoading(true);

    try {
      const payload = buildConglomerateSubmission({
        structure,
        businessName1,
        businessName2,
        natureOfBusiness,
        businessAddress,
        businessPhone,
        businessEmail,
        shareCapital,
        projectDetails,
        consortiumDuration,
        consortiumTerms,
        controllingInterestDetails,
        affiliates,
        shareholders,
        directors,
        secretary,
        additionalNotes,
      });

      await serviceRequestService.submit(payload);

      onSuccess({
        fullName: directors[0]?.fullName || shareholders[0]?.fullName,
        email: directors[0]?.email || businessEmail,
        phone: directors[0]?.phone || businessPhone,
        businessName: businessName1,
      });
    } catch (err: any) {
      console.error("Conglomerate registration error:", err);
      setError(err?.response?.data?.error || "Failed to submit conglomerate registration.");
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

      {/* 1 - 5. General Info */}
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

      {/* Special Conglomerate Details (Project / Consortium / Holding Acquisition) */}
      <ConglomerateSpecialDetails
        isHolding={isHolding}
        isConsortium={isConsortium}
        projectDetails={projectDetails}
        setProjectDetails={setProjectDetails}
        consortiumDuration={consortiumDuration}
        setConsortiumDuration={setConsortiumDuration}
        consortiumTerms={consortiumTerms}
        setConsortiumTerms={setConsortiumTerms}
        controllingInterestDetails={controllingInterestDetails}
        setControllingInterestDetails={setControllingInterestDetails}
      />

      {/* Affiliated / Subsidiary / Participating Companies */}
      <ConglomerateAffiliatesSection
        affiliateLabel={affiliateLabel}
        affiliates={affiliates}
        setAffiliates={setAffiliates}
        showAuthorisedRep={isConsortium}
      />

      {/* Governance: Shareholders, Directors, Secretary */}
      <CompanyGovernanceSection
        shareholders={shareholders}
        setShareholders={setShareholders}
        directors={directors}
        setDirectors={setDirectors}
        secretary={secretary}
        setSecretary={setSecretary}
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
          placeholder="Any special remarks, group resolutions or CAC directives..."
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
