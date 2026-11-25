import CustomSelect from "../../../components/ui/select";

interface Props {
  businessName1: string;
  setBusinessName1: (val: string) => void;
  businessName2: string;
  setBusinessName2: (val: string) => void;
  proprietorshipType: string;
  setProprietorshipType: (val: string) => void;
  natureOfBusiness: string;
  setNatureOfBusiness: (val: string) => void;
  businessAddress: string;
  setBusinessAddress: (val: string) => void;
  businessPhone: string;
  setBusinessPhone: (val: string) => void;
  businessEmail: string;
  setBusinessEmail: (val: string) => void;
}

export default function EnterpriseBusinessInfo({
  businessName1,
  setBusinessName1,
  businessName2,
  setBusinessName2,
  proprietorshipType,
  setProprietorshipType,
  natureOfBusiness,
  setNatureOfBusiness,
  businessAddress,
  setBusinessAddress,
  businessPhone,
  setBusinessPhone,
  businessEmail,
  setBusinessEmail,
}: Props) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            1. Proposed Business Name (1st Choice) <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={businessName1}
            onChange={(e) => setBusinessName1(e.target.value)}
            placeholder="e.g. Apex Global Ventures"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            1. Alternative Business Name (2nd Choice) <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={businessName2}
            onChange={(e) => setBusinessName2(e.target.value)}
            placeholder="e.g. Apex Premier Enterprise"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      <div>
        <CustomSelect
          label="2. Type of Enterprise Ownership"
          required
          value={proprietorshipType}
          onChange={(e) => setProprietorshipType(e.target.value)}
          options={["Sole Proprietorship", "Partnership"]}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          3. Nature/Purpose of Business or Principal Activities <span className="text-[#CAA500]">*</span>
        </label>
        <textarea
          required
          rows={3}
          value={natureOfBusiness}
          onChange={(e) => setNatureOfBusiness(e.target.value)}
          placeholder="Describe your business activities (e.g. general merchandise, wholesale/retail trade, IT consultancy, logistics, agriculture, fashion design)..."
          className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm resize-y"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            4. Business Address <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            placeholder="Street, City, State"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            4. Business Phone <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="tel"
            required
            value={businessPhone}
            onChange={(e) => setBusinessPhone(e.target.value)}
            placeholder="+234..."
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            4. Business Email <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="email"
            required
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            placeholder="info@business.com"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>
    </div>
  );
}
