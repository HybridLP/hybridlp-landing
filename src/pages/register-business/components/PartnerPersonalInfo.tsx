import CustomSelect from "../../../components/ui/select";
import { PartnerData } from "./PartnerFields";

interface Props {
  partner: PartnerData;
  onChange: (field: keyof PartnerData, value: any) => void;
}

const GENDERS = ["Male", "Female", "Other"];
const NATIONALITIES = ["Nigerian", "Ghanaian", "Kenyan", "South African", "British", "American", "Canadian", "Other"];

export default function PartnerPersonalInfo({ partner, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            5. Full Name <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={partner.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="First, Middle & Surname"
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            6. Date of Birth <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="date"
            required
            value={partner.dateOfBirth}
            onChange={(e) => onChange("dateOfBirth", e.target.value)}
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomSelect
          label="7. Gender"
          required
          value={partner.gender}
          onChange={(e) => onChange("gender", e.target.value)}
          options={GENDERS}
        />
        <CustomSelect
          label="8. Nationality"
          required
          value={partner.nationality}
          onChange={(e) => onChange("nationality", e.target.value)}
          options={NATIONALITIES}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          9. Residential Address <span className="text-[#CAA500]">*</span>
        </label>
        <input
          type="text"
          required
          value={partner.residentialAddress}
          onChange={(e) => onChange("residentialAddress", e.target.value)}
          placeholder="House/Street, City, State"
          className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            10. Personal Email <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="email"
            required
            value={partner.personalEmail}
            onChange={(e) => onChange("personalEmail", e.target.value)}
            placeholder="proprietor@email.com"
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            11. Personal Phone <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="tel"
            required
            value={partner.personalPhone}
            onChange={(e) => onChange("personalPhone", e.target.value)}
            placeholder="+234..."
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            12. Occupation <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={partner.occupation}
            onChange={(e) => onChange("occupation", e.target.value)}
            placeholder="e.g. Businessman, Engineer"
            className="w-full bg-[#15233F] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>
    </div>
  );
}
