import { User, Trash2 } from "lucide-react";
import PartnerPersonalInfo from "./PartnerPersonalInfo";
import PartnerDocuments from "./PartnerDocuments";

export interface FileMeta {
  name: string;
  size: number;
  dataUrl: string;
}

export interface PartnerData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  residentialAddress: string;
  personalEmail: string;
  personalPhone: string;
  occupation: string;
  nin: string;
  idDocument: FileMeta | null;
  passportPhoto: FileMeta | null;
  signature: FileMeta | null;
}

interface Props {
  partner: PartnerData;
  index: number;
  isPartnership: boolean;
  canRemove: boolean;
  onChange: (field: keyof PartnerData, value: any) => void;
  onRemove?: () => void;
}

export default function PartnerFields({
  partner,
  index,
  isPartnership,
  canRemove,
  onChange,
  onRemove,
}: Props) {
  const title = isPartnership ? `Partner ${index + 1}` : "Proprietor Details";

  return (
    <div className="bg-[#0B132B] border border-gray-700/80 rounded-xl p-5 md:p-6 mb-6 space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-gray-800">
        <div className="flex items-center gap-2 text-white font-semibold inter-font">
          <User className="w-4 h-4 text-[#CAA500]" />
          <span>{title}</span>
        </div>
        {canRemove && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" /> Remove Partner
          </button>
        )}
      </div>

      <PartnerPersonalInfo partner={partner} onChange={onChange} />
      <PartnerDocuments partner={partner} onChange={onChange} />
    </div>
  );
}
