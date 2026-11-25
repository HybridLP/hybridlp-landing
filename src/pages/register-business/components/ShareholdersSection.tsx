import { Plus } from "lucide-react";
import PersonDetailsForm from "./PersonDetailsForm";
import { PersonParticulars } from "../types/cacTypes";

interface Props {
  shareholders: PersonParticulars[];
  onChange: (index: number, field: keyof PersonParticulars, val: any) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  showShareClass?: boolean;
}

export default function ShareholdersSection({
  shareholders,
  onChange,
  onAdd,
  onRemove,
  showShareClass = false,
}: Props) {
  return (
    <div className="pt-2">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-base font-semibold text-[#CAA500] inter-font">
          Shareholders Information (Requirement 7)
        </h4>
        <span className="text-xs text-gray-400">
          Total: {shareholders.length} Shareholder{shareholders.length > 1 ? "s" : ""}
        </span>
      </div>

      {shareholders.map((shareholder, index) => (
        <PersonDetailsForm
          key={index}
          roleTitle="Shareholder"
          index={index}
          person={shareholder}
          canRemove={shareholders.length > 1}
          onRemove={() => onRemove(index)}
          onChange={(field, val) => onChange(index, field, val)}
          showShares={true}
          showShareClass={showShareClass}
        />
      ))}

      <button
        type="button"
        onClick={onAdd}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0B132B] border border-[#CAA500] text-[#CAA500] hover:bg-[#CAA500]/10 text-sm font-semibold transition-colors cursor-pointer mb-5"
      >
        <Plus className="w-4 h-4" /> Add Another Shareholder
      </button>
    </div>
  );
}
