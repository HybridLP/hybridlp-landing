import { Plus } from "lucide-react";
import CorporateAffiliateForm from "./CorporateAffiliateForm";
import { CorporateAffiliate } from "../types/cacTypes";
import { createDefaultCorporateAffiliate } from "../utils/companyHelpers";

interface Props {
  affiliateLabel: string;
  affiliates: CorporateAffiliate[];
  setAffiliates: React.Dispatch<React.SetStateAction<CorporateAffiliate[]>>;
  showAuthorisedRep?: boolean;
}

export default function ConglomerateAffiliatesSection({
  affiliateLabel,
  affiliates,
  setAffiliates,
  showAuthorisedRep = false,
}: Props) {
  return (
    <div className="pt-2">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-base font-semibold text-[#CAA500] inter-font">
          Details of {affiliateLabel} (Min. 2 Required)
        </h4>
        <span className="text-xs text-gray-400">
          Total: {affiliates.length}
        </span>
      </div>

      {affiliates.map((affiliate, i) => (
        <CorporateAffiliateForm
          key={i}
          title={affiliateLabel.replace(/ies$/, "y")}
          index={i}
          affiliate={affiliate}
          canRemove={affiliates.length > 2}
          onRemove={() => setAffiliates((prev) => prev.filter((_, idx) => idx !== i))}
          onChange={(field, val) => {
            setAffiliates((prev) => {
              const next = [...prev];
              next[i] = { ...next[i], [field]: val };
              return next;
            });
          }}
          showAuthorisedRep={showAuthorisedRep}
        />
      ))}

      <button
        type="button"
        onClick={() => setAffiliates((prev) => [...prev, createDefaultCorporateAffiliate()])}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B132B] border border-[#CAA500] text-[#CAA500] hover:bg-[#CAA500]/10 text-sm font-semibold transition-colors cursor-pointer mb-5"
      >
        <Plus className="w-4 h-4" /> Add Another {affiliateLabel.replace(/ies$/, "y")}
      </button>
    </div>
  );
}
