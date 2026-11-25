import FileUploadField from "./FileUploadField";
import { PartnerData } from "./PartnerFields";

interface Props {
  partner: PartnerData;
  onChange: (field: keyof PartnerData, value: any) => void;
}

export default function PartnerDocuments({ partner, onChange }: Props) {
  return (
    <div className="space-y-4 pt-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            13. NIMC NIN Number <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            maxLength={11}
            value={partner.nin}
            onChange={(e) => onChange("nin", e.target.value)}
            placeholder="11-digit NIN"
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <FileUploadField
          label="13. Upload NIMC / NIN ID Slip"
          value={partner.idDocument}
          onChange={(f) => onChange("idDocument", f)}
          helperText="Upload NIN slip or National e-ID card"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FileUploadField
          label="14. Passport Photograph"
          required
          accept="image/*"
          value={partner.passportPhoto}
          onChange={(f) => onChange("passportPhoto", f)}
          helperText="Clear passport photo with white background"
        />
        <FileUploadField
          label="15. Scanned Copy / Picture of Signature"
          required
          accept="image/*"
          value={partner.signature}
          onChange={(f) => onChange("signature", f)}
          helperText="Sign on plain paper, take clear photo/scan"
        />
      </div>
    </div>
  );
}
