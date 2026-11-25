interface Props {
  isHolding: boolean;
  isConsortium: boolean;
  projectDetails: string;
  setProjectDetails: (val: string) => void;
  consortiumDuration: string;
  setConsortiumDuration: (val: string) => void;
  consortiumTerms: string;
  setConsortiumTerms: (val: string) => void;
  controllingInterestDetails: string;
  setControllingInterestDetails: (val: string) => void;
}

export default function ConglomerateSpecialDetails({
  isHolding,
  isConsortium,
  projectDetails,
  setProjectDetails,
  consortiumDuration,
  setConsortiumDuration,
  consortiumTerms,
  setConsortiumTerms,
  controllingInterestDetails,
  setControllingInterestDetails,
}: Props) {
  if (isConsortium) {
    return (
      <div className="space-y-4 pt-1">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            3. Details of the Project / Business for Consortium Formation <span className="text-[#CAA500]">*</span>
          </label>
          <textarea
            required
            rows={3}
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            placeholder="Describe the specialized infrastructure, government tender, mining or joint venture project..."
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm resize-y"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              7. Proposed Duration of the Consortium
            </label>
            <input
              type="text"
              value={consortiumDuration}
              onChange={(e) => setConsortiumDuration(e.target.value)}
              placeholder="e.g. 5 years / Project completion"
              className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              14. Proposed Terms of Consortium Agreement
            </label>
            <input
              type="text"
              value={consortiumTerms}
              onChange={(e) => setConsortiumTerms(e.target.value)}
              placeholder="Profit sharing, liabilities, governing law"
              className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
            />
          </div>
        </div>
      </div>
    );
  }

  if (isHolding) {
    return (
      <div className="pt-1">
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          13. Details of Proposed Acquisition of Controlling Interests in Subsidiaries <span className="text-[#CAA500]">*</span>
        </label>
        <textarea
          required
          rows={3}
          value={controllingInterestDetails}
          onChange={(e) => setControllingInterestDetails(e.target.value)}
          placeholder="State equity percentages, share purchase agreements, or parent company control structure (minimum 51% in each subsidiary)..."
          className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm resize-y"
        />
      </div>
    );
  }

  return null;
}
