import React, { useRef } from "react";
import { Upload, X, Check, FileText } from "lucide-react";

interface Props {
  label: string;
  required?: boolean;
  accept?: string;
  value?: { name: string; size: number; dataUrl: string } | null;
  onChange: (file: { name: string; size: number; dataUrl: string } | null) => void;
  helperText?: string;
}

export default function FileUploadField({
  label,
  required,
  accept = "image/*,application/pdf",
  value,
  onChange,
  helperText,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      alert("File size exceeds 8MB. Please select a smaller file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      onChange({
        name: file.name,
        size: file.size,
        dataUrl: reader.result as string,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-300 mb-1.5">
        {label} {required && <span className="text-[#CAA500]">*</span>}
      </label>

      {value ? (
        <div className="flex items-center justify-between p-3 bg-[#0B132B] border border-[#CAA500]/40 rounded-lg">
          <div className="flex items-center gap-2.5 overflow-hidden">
            {value.dataUrl.startsWith("data:image/") ? (
              <img
                src={value.dataUrl}
                alt="Preview"
                className="w-10 h-10 rounded object-cover border border-gray-700 flex-shrink-0"
              />
            ) : (
              <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[#CAA500]" />
              </div>
            )}
            <div className="truncate">
              <p className="text-sm text-white font-medium truncate">{value.name}</p>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Ready ({(value.size / 1024).toFixed(0)} KB)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              onChange(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded transition-colors cursor-pointer"
            title="Remove file"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          className="border border-dashed border-gray-700 hover:border-[#CAA500] bg-[#0B132B]/50 hover:bg-[#0B132B] rounded-lg p-3 text-center cursor-pointer transition-colors"
        >
          <Upload className="w-5 h-5 text-gray-400 mx-auto mb-1" />
          <p className="text-xs text-gray-300">
            <span className="text-[#CAA500] font-medium">Click to upload</span> {helperText || "PNG, JPG, PDF up to 8MB"}
          </p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFile}
        className="hidden"
      />
    </div>
  );
}
