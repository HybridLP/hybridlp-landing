import { Plus } from "lucide-react";
import PersonDetailsForm from "./PersonDetailsForm";
import { PersonParticulars } from "../types/cacTypes";

interface Props {
  trustees: PersonParticulars[];
  onChange: (idx: number, field: keyof PersonParticulars, val: any) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
}

export default function TrusteesSection({
  trustees,
  onChange,
  onAdd,
  onRemove,
}: Props) {
  return (
    <div className="pt-2">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-base font-semibold text-[#CAA500] inter-font">
          Trustees Information (Requirements 9 — 10)
        </h4>
        <span className="text-xs text-gray-400">
          Total: {trustees.length} Trustee{trustees.length > 1 ? "s" : ""}
        </span>
      </div>

      {trustees.map((t, i) => (
        <PersonDetailsForm
          key={i}
          roleTitle="Trustee"
          index={i}
          person={t}
          canRemove={trustees.length > 1}
          onRemove={() => onRemove(i)}
          onChange={(field, val) => onChange(i, field, val)}
          showPassportPhoto={true}
        />
      ))}

      <button
        type="button"
        onClick={onAdd}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B132B] border border-[#CAA500] text-[#CAA500] hover:bg-[#CAA500]/10 text-sm font-semibold transition-colors cursor-pointer mb-5"
      >
        <Plus className="w-4 h-4" /> Add Another Trustee
      </button>
    </div>
  );
}
