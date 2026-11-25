import { Plus } from "lucide-react";
import CorporateAffiliateForm from "./CorporateAffiliateForm";
import { CorporateAffiliate } from "../types/cacTypes";

interface Props {
  corporatePartners: CorporateAffiliate[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (idx: number, field: keyof CorporateAffiliate, val: any) => void;
}

export default function PartnershipCorporateSection({
  corporatePartners,
  onAdd,
  onRemove,
  onChange,
}: Props) {
  return (
    <div className="pt-2">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-[#CAA500] inter-font">
          12. Corporate Partners (Where applicable)
        </h4>
        <button
          type="button"
          onClick={onAdd}
          className="text-xs text-[#CAA500] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" /> Add Corporate Partner
        </button>
      </div>
      {corporatePartners.map((cp, i) => (
        <CorporateAffiliateForm
          key={i}
          title="Corporate Partner"
          index={i}
          affiliate={cp}
          canRemove={true}
          onRemove={() => onRemove(i)}
          onChange={(field, val) => onChange(i, field, val)}
        />
      ))}
    </div>
  );
}
