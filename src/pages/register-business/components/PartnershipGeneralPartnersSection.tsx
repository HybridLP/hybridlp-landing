import { Plus } from "lucide-react";
import PersonDetailsForm from "./PersonDetailsForm";
import { PersonParticulars } from "../types/cacTypes";

interface Props {
  partners: PersonParticulars[];
  onChange: (idx: number, field: keyof PersonParticulars, val: any) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
}

export default function PartnershipGeneralPartnersSection({
  partners,
  onChange,
  onAdd,
  onRemove,
}: Props) {
  return (
    <div className="pt-2">
      <h4 className="text-base font-semibold text-[#CAA500] mb-3 inter-font">
        General Partners Information (Requirements 7 — 8)
      </h4>
      {partners.map((gp, i) => (
        <PersonDetailsForm
          key={i}
          roleTitle="General Partner"
          index={i}
          person={gp}
          canRemove={partners.length > 1}
          onRemove={() => onRemove(i)}
          onChange={(field, val) => onChange(i, field, val)}
          showPartnershipContribution={true}
        />
      ))}
      <button
        type="button"
        onClick={onAdd}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B132B] border border-[#CAA500] text-[#CAA500] hover:bg-[#CAA500]/10 text-sm font-semibold transition-colors cursor-pointer mb-5"
      >
        <Plus className="w-4 h-4" /> Add Another General Partner
      </button>
    </div>
  );
}
