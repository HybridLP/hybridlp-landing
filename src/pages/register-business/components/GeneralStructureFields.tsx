import type { ChangeEvent } from "react";

export interface GeneralStructureFormData {
  fullName: string;
  email: string;
  phone: string;
  businessName1: string;
  businessName2: string;
  businessNature: string;
  businessAddress: string;
  directorsCount: string;
  shareCapital: string;
  additionalNotes: string;
}

interface Props {
  formData: GeneralStructureFormData;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function GeneralStructureFields({ formData, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Proposed Name (1st Choice) <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            name="businessName1"
            required
            value={formData.businessName1}
            onChange={onChange}
            placeholder="e.g. Apex Continental Logistics Ltd."
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Alternative Name (2nd Choice) <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            name="businessName2"
            required
            value={formData.businessName2}
            onChange={onChange}
            placeholder="e.g. Apex Global Shipping Ltd."
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Applicant / Promoter Name <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={onChange}
            placeholder="Full Legal Name"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Email Address <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={onChange}
            placeholder="promoter@email.com"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Phone Number <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={onChange}
            placeholder="+234..."
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          Principal Objects / Nature of Business <span className="text-[#CAA500]">*</span>
        </label>
        <textarea
          name="businessNature"
          required
          rows={3}
          value={formData.businessNature}
          onChange={onChange}
          placeholder="Describe the company's business activities, objectives and operations..."
          className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm resize-y"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Registered Office Address <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            name="businessAddress"
            required
            value={formData.businessAddress}
            onChange={onChange}
            placeholder="Office Street Address, City, State"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Number of Directors / Trustees
          </label>
          <input
            type="number"
            min="1"
            name="directorsCount"
            value={formData.directorsCount}
            onChange={onChange}
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          Additional Notes / Specific Instructions (Optional)
        </label>
        <textarea
          rows={2}
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={onChange}
          placeholder="Authorized share capital, special articles of association, or particular requests..."
          className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm resize-y"
        />
      </div>
    </div>
  );
}
