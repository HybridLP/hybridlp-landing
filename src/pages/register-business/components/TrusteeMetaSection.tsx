import CustomSelect from "../../../components/ui/select";
import FileUploadField from "./FileUploadField";
import { FileMeta } from "../types/cacTypes";

export const TRUSTEE_CATEGORIES = [
  "Non-Governmental Organisation (NGO)",
  "Charitable Foundation",
  "Church / Christian Ministry",
  "Mosque / Islamic Association",
  "Professional / Trade Association",
  "Community Development Association",
  "Social Club / Cultural Society",
  "Educational / Research Initiative",
];

interface Props {
  category: string;
  setCategory: (val: string) => void;
  dateEstablished: string;
  setDateEstablished: (val: string) => void;
  fundingSources: string;
  setFundingSources: (val: string) => void;
  constitutionFile: FileMeta | null;
  setConstitutionFile: (val: FileMeta | null) => void;
  additionalNotes: string;
  setAdditionalNotes: (val: string) => void;
}

export default function TrusteeMetaSection({
  category,
  setCategory,
  dateEstablished,
  setDateEstablished,
  fundingSources,
  setFundingSources,
  constitutionFile,
  setConstitutionFile,
  additionalNotes,
  setAdditionalNotes,
}: Props) {
  return (
    <div className="space-y-4">
      {/* 2 & 4. Category & Date of Establishment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <CustomSelect
            label="2. Nature / Category of Organisation"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={TRUSTEE_CATEGORIES}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            4. Date of Establishment of the Organisation <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="date"
            required
            value={dateEstablished}
            onChange={(e) => setDateEstablished(e.target.value)}
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
      </div>

      {/* 11 - 12. Funding & Existing Constitution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">
            11. Proposed Sources of Funding <span className="text-[#CAA500]">*</span>
          </label>
          <input
            type="text"
            required
            value={fundingSources}
            onChange={(e) => setFundingSources(e.target.value)}
            placeholder="e.g. Member subscriptions, donations, grants, events"
            className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm"
          />
        </div>
        <div>
          <FileUploadField
            label="12. Existing Constitution (If available)"
            value={constitutionFile}
            onChange={setConstitutionFile}
            helperText="Upload existing constitution document (PDF or DOC)"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          Additional Information (Where necessary)
        </label>
        <textarea
          rows={2}
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          placeholder="Any special remarks or CAC filing directives..."
          className="w-full bg-[#0B132B] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#CAA500] text-sm resize-y"
        />
      </div>
    </div>
  );
}
