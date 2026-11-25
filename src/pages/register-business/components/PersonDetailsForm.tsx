import { Trash2, User } from "lucide-react";
import FileUploadField from "./FileUploadField";
import PersonBasicFields from "./PersonBasicFields";
import { PersonParticulars } from "../types/cacTypes";

interface Props {
  roleTitle: string;
  index: number;
  person: PersonParticulars;
  canRemove?: boolean;
  onRemove?: () => void;
  onChange: (field: keyof PersonParticulars, val: any) => void;
  showShares?: boolean;
  showShareClass?: boolean;
  showPartnershipContribution?: boolean;
  showPassportPhoto?: boolean;
  showCountryOfResidence?: boolean;
}

export default function PersonDetailsForm({
  roleTitle,
  index,
  person,
  canRemove = false,
  onRemove,
  onChange,
  showShares = false,
  showShareClass = false,
  showPartnershipContribution = false,
  showPassportPhoto = false,
  showCountryOfResidence = false,
}: Props) {
  return (
    <div className="bg-[#0B132B] border border-gray-700/80 rounded-xl p-5 md:p-6 mb-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-gray-800">
        <div className="flex items-center gap-2 text-white font-semibold inter-font">
          <User className="w-4 h-4 text-[#CAA500]" />
          <span>{roleTitle} {index + 1}</span>
        </div>
        {canRemove && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" /> Remove {roleTitle}
          </button>
        )}
      </div>

      <PersonBasicFields
        person={person}
        onChange={onChange}
        showCountryOfResidence={showCountryOfResidence}
      />

      {showShares && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Percentage of Shares (%) <span className="text-[#CAA500]">*</span>
            </label>
            <input
              type="text"
              required
              value={person.sharesPercentage || ""}
              onChange={(e) => onChange("sharesPercentage", e.target.value)}
              placeholder="e.g. 50%"
              className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
            />
          </div>
          {showShareClass && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Class of Shares
              </label>
              <input
                type="text"
                value={person.sharesClass || ""}
                onChange={(e) => onChange("sharesClass", e.target.value)}
                placeholder="Ordinary / Preference"
                className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
              />
            </div>
          )}
        </div>
      )}

      {showPartnershipContribution && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Capital Contribution & Nature
            </label>
            <input
              type="text"
              value={person.capitalContribution || ""}
              onChange={(e) => onChange("capitalContribution", e.target.value)}
              placeholder="e.g. NGN 5,000,000 (Cash/Assets)"
              className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Agreed Profit-Sharing Percentage (%)
            </label>
            <input
              type="text"
              value={person.profitSharingPercentage || ""}
              onChange={(e) => onChange("profitSharingPercentage", e.target.value)}
              placeholder="e.g. 50%"
              className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <FileUploadField
          label="Valid Identification (NIN / International Passport / DL)"
          required
          value={person.idDocument}
          onChange={(file) => onChange("idDocument", file)}
          helperText="Upload clear scanned copy or picture (PNG, JPG, PDF up to 8MB)"
        />
        <FileUploadField
          label="Scanned Copy or Picture of Signature"
          required
          value={person.signature}
          onChange={(file) => onChange("signature", file)}
          helperText="Sign clearly on white paper and upload"
        />
      </div>

      {showPassportPhoto && (
        <div className="pt-2">
          <FileUploadField
            label="Passport Photograph (White background)"
            required
            value={person.passportPhoto}
            onChange={(file) => onChange("passportPhoto", file)}
            helperText="Clear passport photograph (JPG or PNG up to 8MB)"
          />
        </div>
      )}
    </div>
  );
}
