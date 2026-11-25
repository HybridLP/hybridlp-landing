import { Plus } from "lucide-react";
import PartnerFields, { PartnerData } from "./PartnerFields";

interface Props {
  partners: PartnerData[];
  isPartnership: boolean;
  onPartnerChange: (index: number, field: keyof PartnerData, value: any) => void;
  onAddPartner: () => void;
  onRemovePartner: (index: number) => void;
}

export default function EnterprisePartnersSection({
  partners,
  isPartnership,
  onPartnerChange,
  onAddPartner,
  onRemovePartner,
}: Props) {
  return (
    <div className="pt-2">
      <h4 className="text-base font-semibold text-[#CAA500] mb-3 inter-font">
        {isPartnership
          ? "Partners Information (Requirements 5 — 15)"
          : "Proprietor Information (Requirements 5 — 15)"}
      </h4>

      {partners.map((partner, index) => (
        <PartnerFields
          key={index}
          index={index}
          partner={partner}
          isPartnership={isPartnership}
          canRemove={partners.length > 1}
          onChange={(field, value) => onPartnerChange(index, field, value)}
          onRemove={() => onRemovePartner(index)}
        />
      ))}

      {isPartnership && (
        <button
          type="button"
          onClick={onAddPartner}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B132B] border border-[#CAA500] text-[#CAA500] hover:bg-[#CAA500]/10 text-sm font-semibold transition-colors cursor-pointer mb-4"
        >
          <Plus className="w-4 h-4" /> Add Another Partner
        </button>
      )}
    </div>
  );
}
