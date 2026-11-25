import FileUploadField from "./FileUploadField";
import { SecretaryParticulars } from "../types/cacTypes";

interface Props {
  secretary: SecretaryParticulars;
  onChange: (field: keyof SecretaryParticulars, val: any) => void;
  showProfessionalQualification?: boolean;
  required?: boolean;
}

export default function SecretaryDetailsForm({
  secretary,
  onChange,
  showProfessionalQualification = false,
  required = false,
}: Props) {
  return (
    <div className="bg-[#0B132B] border border-gray-700/80 rounded-xl p-5 md:p-6 mb-5 space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-gray-800">
        <div>
          <h4 className="text-base font-semibold text-white inter-font">
            Particulars of the Company Secretary {required ? "" : "(Optional)"}
          </h4>
          <p className="text-xs text-gray-400 mt-0.5">
            {required
              ? "Statutory company secretary particulars required for filing"
              : "Appoint a corporate secretary or leave unchecked to appoint subsequently"}
          </p>
        </div>
        {!required && (
          <label className="flex items-center gap-2 cursor-pointer text-xs text-[#CAA500] font-medium">
            <input
              type="checkbox"
              checked={secretary.hasSecretary}
              onChange={(e) => onChange("hasSecretary", e.target.checked)}
              className="rounded accent-[#CAA500] w-4 h-4 cursor-pointer"
            />
            Include Secretary Now
          </label>
        )}
      </div>

      {(required || secretary.hasSecretary) && (
        <div className="space-y-4 pt-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Full Name <span className="text-[#CAA500]">*</span>
              </label>
              <input
                type="text"
                required
                value={secretary.fullName}
                onChange={(e) => onChange("fullName", e.target.value)}
                placeholder="Secretary Legal Name"
                className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Date of Birth <span className="text-[#CAA500]">*</span>
              </label>
              <input
                type="date"
                required
                value={secretary.dateOfBirth}
                onChange={(e) => onChange("dateOfBirth", e.target.value)}
                className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#CAA500] text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Nationality <span className="text-[#CAA500]">*</span>
              </label>
              <input
                type="text"
                required
                value={secretary.nationality}
                onChange={(e) => onChange("nationality", e.target.value)}
                placeholder="e.g. Nigerian"
                className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Address (Include House No. & LGA) <span className="text-[#CAA500]">*</span>
              </label>
              <input
                type="text"
                required
                value={secretary.address}
                onChange={(e) => onChange("address", e.target.value)}
                placeholder="House No, Street, Town, LGA, State"
                className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Occupation <span className="text-[#CAA500]">*</span>
              </label>
              <input
                type="text"
                required
                value={secretary.occupation}
                onChange={(e) => onChange("occupation", e.target.value)}
                placeholder="e.g. Legal Practitioner / Chartered Secretary"
                className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
              />
            </div>
          </div>

          {showProfessionalQualification && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Professional Qualification (e.g. NBA / ICSAN / ICAN) <span className="text-[#CAA500]">*</span>
              </label>
              <input
                type="text"
                required
                value={secretary.professionalQualification || ""}
                onChange={(e) => onChange("professionalQualification", e.target.value)}
                placeholder="e.g. Barrister & Solicitor of Supreme Court of Nigeria / ACIS"
                className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Email Address <span className="text-[#CAA500]">*</span>
              </label>
              <input
                type="email"
                required
                value={secretary.email}
                onChange={(e) => onChange("email", e.target.value)}
                placeholder="secretary@email.com"
                className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Phone Number <span className="text-[#CAA500]">*</span>
              </label>
              <input
                type="tel"
                required
                value={secretary.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                placeholder="+234..."
                className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
              />
            </div>
          </div>

          <div className="pt-2">
            <FileUploadField
              label="Scanned Copy or Picture of Secretary's Signature"
              required
              value={secretary.signature}
              onChange={(file) => onChange("signature", file)}
              helperText="Upload clear signature copy on white paper"
            />
          </div>
        </div>
      )}
    </div>
  );
}
