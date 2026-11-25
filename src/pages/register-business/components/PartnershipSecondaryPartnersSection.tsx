import { Plus } from "lucide-react";
import PersonDetailsForm from "./PersonDetailsForm";
import { PersonParticulars } from "../types/cacTypes";

interface Props {
  secondaryTitle: string;
  isLLP: boolean;
  partners: PersonParticulars[];
  onChange: (idx: number, field: keyof PersonParticulars, val: any) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
}

export default function PartnershipSecondaryPartnersSection({
  secondaryTitle,
  isLLP,
  partners,
  onChange,
  onAdd,
  onRemove,
}: Props) {
  return (
    <div className="pt-2">
      <h4 className="text-base font-semibold text-[#CAA500] mb-3 inter-font">
        {secondaryTitle}s Information (Requirements 9 — 10)
      </h4>
      {partners.map((sp, i) => (
        <PersonDetailsForm
          key={i}
          roleTitle={secondaryTitle}
          index={i}
          person={sp}
          canRemove={partners.length > 1}
          onRemove={() => onRemove(i)}
          onChange={(field, val) => onChange(i, field, val)}
          showPartnershipContribution={!isLLP}
        />
      ))}
      <button
        type="button"
        onClick={onAdd}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B132B] border border-[#CAA500] text-[#CAA500] hover:bg-[#CAA500]/10 text-sm font-semibold transition-colors cursor-pointer mb-5"
      >
        <Plus className="w-4 h-4" /> Add Another {secondaryTitle}
      </button>
    </div>
  );
}
