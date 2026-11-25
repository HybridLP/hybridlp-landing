interface Props {
  businessName1: string;
  setBusinessName1: (val: string) => void;
  businessName2: string;
  setBusinessName2: (val: string) => void;
  businessName3?: string;
  setBusinessName3?: (val: string) => void;
  natureOfBusiness: string;
  setNatureOfBusiness: (val: string) => void;
  businessAddress: string;
  setBusinessAddress: (val: string) => void;
  businessPhone: string;
  setBusinessPhone: (val: string) => void;
  businessEmail: string;
  setBusinessEmail: (val: string) => void;
  shareCapital?: string;
  setShareCapital?: (val: string) => void;
  fundingSource?: string;
  setFundingSource?: (val: string) => void;
  showShareCapital?: boolean;
  showFundingSource?: boolean;
  isTrustees?: boolean;
  entityLabel?: string;
}

export default function CompanyGeneralInfo({
  businessName1,
  setBusinessName1,
  businessName2,
  setBusinessName2,
  businessName3,
  setBusinessName3,
  natureOfBusiness,
  setNatureOfBusiness,
  businessAddress,
  setBusinessAddress,
  businessPhone,
  setBusinessPhone,
  businessEmail,
  setBusinessEmail,
  shareCapital,
  setShareCapital,
  fundingSource,
  setFundingSource,
  showShareCapital = false,
  showFundingSource = false,
  isTrustees = false,
  entityLabel = "Company",
}: Props) {
  return (
    <div className="space-y-5">
      <div className={`grid grid-cols-1 ${isTrustees ? "md:grid-cols-3" : "md:grid-cols-2"} gap-4`}>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            1. Proposed {entityLabel} Name (1st Choice) <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={businessName1}
            onChange={(e) => setBusinessName1(e.target.value)}
            placeholder={`e.g. Apex Global Solutions ${isTrustees ? "Foundation" : "Ltd."}`}
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            {isTrustees ? "2." : "1."} Alternative Name (2nd Choice) <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={businessName2}
            onChange={(e) => setBusinessName2(e.target.value)}
            placeholder="e.g. Apex Continental Solutions"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        {isTrustees && setBusinessName3 && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              3. Proposed Name (3rd Choice) <span className="text-[#CAA500]">*</span>
            </label>
            <input
              type="text"
              required
              value={businessName3 || ""}
              onChange={(e) => setBusinessName3(e.target.value)}
              placeholder="e.g. Apex Alliance International"
              className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
            />
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          {isTrustees ? "3. Aims and Objectives of the Organisation" : `2. Nature/Purpose of Business or Principal Activities`} <span className="text-[#CAA500]">*</span>
        </label>
        <textarea
          required
          rows={3}
          value={natureOfBusiness}
          onChange={(e) => setNatureOfBusiness(e.target.value)}
          placeholder={isTrustees ? "State clearly the non-profit aims and objectives of the organisation..." : "Describe primary business activities, services, trade, manufacturing or consultancy..."}
          className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm resize-y"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Registered Office Address <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            placeholder="Street Address, City, State"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            {entityLabel} Telephone Number <span className="text-[#CAA500]">*</span>
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
            {entityLabel} Email Address <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="email"
            required
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            placeholder={`contact@${entityLabel.toLowerCase().replace(/\s+/g, '')}.com`}
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      {showShareCapital && setShareCapital && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Proposed Issued Share Capital (NGN) <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={shareCapital || ""}
            onChange={(e) => setShareCapital(e.target.value)}
            placeholder="e.g. 1,000,000 Ordinary Shares of N1.00 each"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      )}

      {showFundingSource && setFundingSource && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            Proposed Source(s) of Funding <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={fundingSource || ""}
            onChange={(e) => setFundingSource(e.target.value)}
            placeholder="e.g. Member dues, grants, donations, fundraising, voluntary contributions"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      )}
    </div>
  );
}
