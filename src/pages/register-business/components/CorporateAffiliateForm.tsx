import { Building, Trash2 } from "lucide-react";
import FileUploadField from "./FileUploadField";
import { CorporateAffiliate } from "../types/cacTypes";

interface Props {
  title: string;
  index: number;
  affiliate: CorporateAffiliate;
  canRemove?: boolean;
  onRemove?: () => void;
  onChange: (field: keyof CorporateAffiliate, val: any) => void;
  isForeign?: boolean;
  showAuthorisedRep?: boolean;
}

export default function CorporateAffiliateForm({
  title,
  index,
  affiliate,
  canRemove = false,
  onRemove,
  onChange,
  isForeign = false,
  showAuthorisedRep = false,
}: Props) {
  return (
    <div className="bg-[#0B132B] border border-gray-700/80 rounded-xl p-5 md:p-6 mb-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-gray-800">
        <div className="flex items-center gap-2 text-white font-semibold inter-font">
          <Building className="w-4 h-4 text-[#CAA500]" />
          <span>{title} {index + 1}</span>
        </div>
        {canRemove && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" /> Remove {title}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Registered Corporate Name <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={affiliate.companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            placeholder="e.g. Apex Continental Logistics Ltd."
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            {isForeign ? "Foreign Registration Number" : "RC / Registration Number"} <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={affiliate.rcNumber || ""}
            onChange={(e) => onChange("rcNumber", e.target.value)}
            placeholder={isForeign ? "e.g. 12345678 (Delaware/UK)" : "e.g. RC 123456"}
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FileUploadField
          label="Certificate of Incorporation"
          required
          value={affiliate.incorporationCert}
          onChange={(file) => onChange("incorporationCert", file)}
          helperText="Upload official CAC or Foreign incorporation certificate"
        />
        <FileUploadField
          label="Memorandum & Articles of Association (MEMART)"
          required
          value={affiliate.memArt}
          onChange={(file) => onChange("memArt", file)}
          helperText="Upload registered constitutional documents"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FileUploadField
          label={isForeign ? "Good Standing / Status Document" : "CAC Status Report"}
          required
          value={affiliate.statusReport}
          onChange={(file) => onChange("statusReport", file)}
          helperText="Official document evidencing active corporate status"
        />
        <FileUploadField
          label="Evidence of Filing Annual Returns"
          required={!isForeign}
          value={affiliate.annualReturns}
          onChange={(file) => onChange("annualReturns", file)}
          helperText="Latest annual returns acknowledgment / filing receipt"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FileUploadField
          label="Board Resolution Consenting to Formation"
          required
          value={affiliate.resolution}
          onChange={(file) => onChange("resolution", file)}
          helperText="Certified board resolution authorizing participation"
        />
        {isForeign && (
          <FileUploadField
            label="Certified English Translation (Where applicable)"
            value={affiliate.translation}
            onChange={(file) => onChange("translation", file)}
            helperText="Official certified English translation if non-English"
          />
        )}
      </div>

      {showAuthorisedRep && (
        <div className="pt-3 border-t border-gray-800 space-y-3">
          <h5 className="text-sm font-semibold text-[#CAA500] inter-font">
            Authorised Representative Particulars
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Representative Full Name"
              value={affiliate.repName || ""}
              onChange={(e) => onChange("repName", e.target.value)}
              className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-xs"
            />
            <input
              type="text"
              placeholder="Designation / Position"
              value={affiliate.repDesignation || ""}
              onChange={(e) => onChange("repDesignation", e.target.value)}
              className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-xs"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={affiliate.repEmail || ""}
              onChange={(e) => onChange("repEmail", e.target.value)}
              className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-xs"
            />
          </div>
        </div>
      )}
    </div>
  );
}
