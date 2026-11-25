import { ArrowDown, Check } from "lucide-react";
import { STRUCTURES, StructureItem } from "../data/structures";

interface Props {
  selectedStructureId: string;
  onSelectStructure: (item: StructureItem) => void;
}

export default function StructuresGrid({
  selectedStructureId,
  onSelectStructure,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
      {STRUCTURES.map((item) => {
        const isSelected = selectedStructureId === item.id;
        return (
          <div
            key={item.id}
            onClick={() => onSelectStructure(item)}
            className={`bg-[#15233F] border ${
              isSelected
                ? "border-[#CAA500] ring-2 ring-[#CAA500]/30 shadow-2xl"
                : "border-gray-800 hover:border-[#CAA500]/50"
            } rounded-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-lg cursor-pointer group`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#715E00]/20 border border-[#825900]/40 rounded-lg w-fit group-hover:border-[#CAA500] transition-colors">
                  {item.icon}
                </div>
                {isSelected && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CAA500]/20 text-[#CAA500] text-xs font-semibold">
                    <Check className="w-3.5 h-3.5" /> Selected Form
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold inter-font mb-3 text-white group-hover:text-[#CAA500] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base lato-regular leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center justify-between text-xs text-[#CAA500] font-medium">
              <span>{isSelected ? "Filling this form below" : "Click to view & fill this form"}</span>
              <ArrowDown className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-y-0.5" : ""}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
