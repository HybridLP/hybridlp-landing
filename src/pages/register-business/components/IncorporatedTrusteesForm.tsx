import React, { useState } from "react";
import { Send, AlertCircle } from "lucide-react";
import CompanyGeneralInfo from "./CompanyGeneralInfo";
import TrusteeOfficialsSection from "./TrusteeOfficialsSection";
import TrusteesSection from "./TrusteesSection";
import TrusteeMetaSection, { TRUSTEE_CATEGORIES } from "./TrusteeMetaSection";
import { StructureItem } from "../data/structures";
import { PersonParticulars, FileMeta } from "../types/cacTypes";
import { createDefaultPerson } from "../utils/companyHelpers";
import { buildTrusteeSubmission } from "../utils/trusteeHelpers";
import { serviceRequestService } from "../../../services/serviceRequestService";

interface Props {
  structure: StructureItem;
  onSuccess: (data: { fullName: string; email: string; phone: string; businessName: string }) => void;
}

export default function IncorporatedTrusteesForm({ structure, onSuccess }: Props) {
  const [orgName1, setOrgName1] = useState("");
  const [orgName2, setOrgName2] = useState("");
  const [orgName3, setOrgName3] = useState("");
  const [category, setCategory] = useState(TRUSTEE_CATEGORIES[0]);
  const [aimsAndObjectives, setAimsAndObjectives] = useState("");
  const [dateEstablished, setDateEstablished] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fundingSources, setFundingSources] = useState("");
  const [constitutionFile, setConstitutionFile] = useState<FileMeta | null>(null);
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [chairman, setChairman] = useState<PersonParticulars>(createDefaultPerson());
  const [secretary, setSecretary] = useState<PersonParticulars>(createDefaultPerson());
  const [trustees, setTrustees] = useState<PersonParticulars[]>([createDefaultPerson(), createDefaultPerson()]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!chairman.signature) {
      setError("Please upload the scanned signature of the Chairman.");
      return;
    }
    if (!secretary.signature) {
      setError("Please upload the scanned signature of the Secretary.");
      return;
    }
    if (!trustees[0]?.passportPhoto || !trustees[0]?.signature) {
      setError("Please upload passport photo and signature for Trustee 1.");
      return;
    }

    setLoading(true);

    try {
      const payload = buildTrusteeSubmission({
        structure,
        orgName1,
        orgName2,
        orgName3,
        category,
        aimsAndObjectives,
        dateEstablished,
        address,
        phone,
        email,
        chairman,
        secretary,
        trustees,
        fundingSources,
        constitutionFile,
        additionalNotes,
      });

      await serviceRequestService.submit(payload);

      onSuccess({
        fullName: chairman.fullName || trustees[0].fullName,
        email: chairman.email || email,
        phone: chairman.phone || phone,
        businessName: orgName1,
      });
    } catch (err: any) {
      console.error("Trustees registration error:", err);
      setError(err?.response?.data?.error || "Failed to submit organisation registration.");
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

      {/* 1 - 6. Organisation General Information */}
      <CompanyGeneralInfo
        businessName1={orgName1}
        setBusinessName1={setOrgName1}
        businessName2={orgName2}
        setBusinessName2={setOrgName2}
        businessName3={orgName3}
        setBusinessName3={setOrgName3}
        natureOfBusiness={aimsAndObjectives}
        setNatureOfBusiness={setAimsAndObjectives}
        businessAddress={address}
        setBusinessAddress={setAddress}
        businessPhone={phone}
        setBusinessPhone={setPhone}
        businessEmail={email}
        setBusinessEmail={setEmail}
        isTrustees={true}
        entityLabel="Organisation"
      />

      {/* 2 & 4 & 11 - 12. Meta Information */}
      <TrusteeMetaSection
        category={category}
        setCategory={setCategory}
        dateEstablished={dateEstablished}
        setDateEstablished={setDateEstablished}
        fundingSources={fundingSources}
        setFundingSources={setFundingSources}
        constitutionFile={constitutionFile}
        setConstitutionFile={setConstitutionFile}
        additionalNotes={additionalNotes}
        setAdditionalNotes={setAdditionalNotes}
      />

      {/* 7 - 8. Chairman & Secretary Details */}
      <TrusteeOfficialsSection
        chairman={chairman}
        setChairman={setChairman}
        secretary={secretary}
        setSecretary={setSecretary}
      />

      {/* 9 - 10. Trustees Details */}
      <TrusteesSection
        trustees={trustees}
        onChange={(idx, field, val) => {
          setTrustees((prev) => {
            const next = [...prev];
            next[idx] = { ...next[idx], [field]: val };
            return next;
          });
        }}
        onAdd={() => setTrustees((prev) => [...prev, createDefaultPerson()])}
        onRemove={(i) => setTrustees((prev) => prev.filter((_, idx) => idx !== i))}
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
