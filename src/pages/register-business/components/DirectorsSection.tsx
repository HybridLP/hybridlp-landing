import { Plus } from "lucide-react";
import PersonDetailsForm from "./PersonDetailsForm";
import { PersonParticulars } from "../types/cacTypes";

interface Props {
  directors: PersonParticulars[];
  onChange: (index: number, field: keyof PersonParticulars, val: any) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
}

export default function DirectorsSection({
  directors,
  onChange,
  onAdd,
  onRemove,
}: Props) {
  return (
    <div className="pt-2">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-base font-semibold text-[#CAA500] inter-font">
          Directors Information (Requirement 9)
        </h4>
        <span className="text-xs text-gray-400">
          Total: {directors.length} Director{directors.length > 1 ? "s" : ""}
        </span>
      </div>

      {directors.map((director, index) => (
        <PersonDetailsForm
          key={index}
          roleTitle="Director"
          index={index}
          person={director}
          canRemove={directors.length > 1}
          onRemove={() => onRemove(index)}
          onChange={(field, val) => onChange(index, field, val)}
        />
      ))}

      <button
        type="button"
        onClick={onAdd}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B132B] border border-[#CAA500] text-[#CAA500] hover:bg-[#CAA500]/10 text-sm font-semibold transition-colors cursor-pointer mb-5"
      >
        <Plus className="w-4 h-4" /> Add Another Director
      </button>
    </div>
  );
}
