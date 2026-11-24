import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string;
  description?: string;
}

export interface CustomSelectProps {
  label?: string;
  name?: string;
  value: string;
  onChange: (e: { target: { name?: string; value: string } }) => void;
  options: (string | SelectOption)[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
  disabled?: boolean;
}

export default function CustomSelect({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required = false,
  error,
  className = "",
  disabled = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options to SelectOption objects
  const normalizedOptions: SelectOption[] = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange({
      target: {
        name,
        value: optionValue,
      },
    });
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label} {required && <span className="text-[#CAA500]">*</span>}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className={`w-full bg-[#0B132B] border ${
            error
              ? "border-red-500 ring-1 ring-red-500/30"
              : isOpen
              ? "border-[#CAA500] ring-2 ring-[#CAA500]/20"
              : "border-gray-700 hover:border-gray-600"
          } rounded-lg px-4 py-3 text-left flex items-center justify-between text-white text-sm md:text-base transition-all duration-200 outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <span className={`truncate ${!selectedOption ? "text-gray-500" : "text-white"}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ml-2 ${
              isOpen ? "rotate-180 text-[#CAA500]" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div
            role="listbox"
            className="absolute z-50 w-full mt-1.5 bg-[#15233F] border border-gray-700 rounded-xl shadow-2xl overflow-hidden py-1 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700"
          >
            {normalizedOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-400 text-center">
                No options available
              </div>
            ) : (
              normalizedOptions.map((option) => {
                const isSelected = option.value === value;
                return (
                  <div
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option.value)}
                    className={`px-4 py-3 flex items-center justify-between text-sm md:text-base cursor-pointer transition-colors duration-150 ${
                      isSelected
                        ? "bg-[#CAA500]/15 text-[#CAA500] font-semibold"
                        : "text-gray-200 hover:bg-[#0B132B] hover:text-[#CAA500]"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span>{option.label}</span>
                      {option.description && (
                        <span className="text-xs text-gray-400 mt-0.5">
                          {option.description}
                        </span>
                      )}
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#CAA500] flex-shrink-0 ml-2" />
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}
