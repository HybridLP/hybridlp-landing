interface Props {
  commencementDate: string;
  setCommencementDate: (val: string) => void;
  duration: string;
  setDuration: (val: string) => void;
  agreementTerms: string;
  setAgreementTerms: (val: string) => void;
  additionalNotes: string;
  setAdditionalNotes: (val: string) => void;
}

export default function PartnershipCommencementSection({
  commencementDate,
  setCommencementDate,
  duration,
  setDuration,
  agreementTerms,
  setAgreementTerms,
  additionalNotes,
  setAdditionalNotes,
}: Props) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            5. Proposed Commencement Date <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="date"
            required
            value={commencementDate}
            onChange={(e) => setCommencementDate(e.target.value)}
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            6. Proposed Duration of Partnership (Where applicable)
          </label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g. In perpetuity, 10 years, until dissolution"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          11. Proposed Terms & Conditions of Partnership Agreement
        </label>
        <textarea
          rows={3}
          value={agreementTerms}
          onChange={(e) => setAgreementTerms(e.target.value)}
          placeholder="State key terms: capital ratios, management powers, dissolution procedures, profit sharing..."
          className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm resize-y"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          Additional Information (Where necessary)
        </label>
        <textarea
          rows={2}
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          placeholder="Any special remarks or specific instructions for CAC filing..."
          className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm resize-y"
        />
      </div>
    </div>
  );
}
