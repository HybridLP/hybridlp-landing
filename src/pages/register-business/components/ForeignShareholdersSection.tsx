import { Plus } from "lucide-react";
import PersonDetailsForm from "./PersonDetailsForm";
import CorporateAffiliateForm from "./CorporateAffiliateForm";
import { PersonParticulars, CorporateAffiliate } from "../types/cacTypes";
import { createDefaultPerson, createDefaultCorporateAffiliate } from "../utils/companyHelpers";

interface Props {
  nigerianShareholders: PersonParticulars[];
  setNigerianShareholders: React.Dispatch<React.SetStateAction<PersonParticulars[]>>;
  foreignShareholders: PersonParticulars[];
  setForeignShareholders: React.Dispatch<React.SetStateAction<PersonParticulars[]>>;
  foreignCorporates: CorporateAffiliate[];
  setForeignCorporates: React.Dispatch<React.SetStateAction<CorporateAffiliate[]>>;
}

export default function ForeignShareholdersSection({
  nigerianShareholders,
  setNigerianShareholders,
  foreignShareholders,
  setForeignShareholders,
  foreignCorporates,
  setForeignCorporates,
}: Props) {
  return (
    <div className="space-y-5 pt-1">
      {/* 6 - 7. Nigerian Shareholders */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-base font-semibold text-[#CAA500] inter-font">
            6. Nigerian Shareholders (Where applicable)
          </h4>
          <button
            type="button"
            onClick={() => setNigerianShareholders((prev) => [...prev, createDefaultPerson()])}
            className="text-xs text-[#CAA500] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add Nigerian Shareholder
          </button>
        </div>
        {nigerianShareholders.map((ns, i) => (
          <PersonDetailsForm
            key={i}
            roleTitle="Nigerian Shareholder"
            index={i}
            person={ns}
            canRemove={nigerianShareholders.length > 0}
            onRemove={() => setNigerianShareholders((prev) => prev.filter((_, idx) => idx !== i))}
            onChange={(field, val) => {
              setNigerianShareholders((prev) => {
                const next = [...prev];
                next[i] = { ...next[i], [field]: val };
                return next;
              });
            }}
            showShares={true}
          />
        ))}
      </div>

      {/* 8 - 9. Foreign Individual Shareholders */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-base font-semibold text-[#CAA500] inter-font">
            8. Foreign Individual Shareholders
          </h4>
          <button
            type="button"
            onClick={() => setForeignShareholders((prev) => [...prev, createDefaultPerson()])}
            className="text-xs text-[#CAA500] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add Foreign Individual Shareholder
          </button>
        </div>
        {foreignShareholders.map((fs, i) => (
          <PersonDetailsForm
            key={i}
            roleTitle="Foreign Individual Shareholder"
            index={i}
            person={fs}
            canRemove={foreignShareholders.length > 1}
            onRemove={() => setForeignShareholders((prev) => prev.filter((_, idx) => idx !== i))}
            onChange={(field, val) => {
              setForeignShareholders((prev) => {
                const next = [...prev];
                next[i] = { ...next[i], [field]: val };
                return next;
              });
            }}
            showShares={true}
            showCountryOfResidence={true}
          />
        ))}
      </div>

      {/* 10 - 11. Foreign Corporate Shareholders */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-[#CAA500] inter-font">
            10. Foreign Corporate Shareholders (Where applicable)
          </h4>
          <button
            type="button"
            onClick={() => setForeignCorporates((prev) => [...prev, createDefaultCorporateAffiliate()])}
            className="text-xs text-[#CAA500] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Add Foreign Corporate Shareholder
          </button>
        </div>
        {foreignCorporates.map((fc, i) => (
          <CorporateAffiliateForm
            key={i}
            title="Foreign Corporate Shareholder"
            index={i}
            affiliate={fc}
            canRemove={true}
            onRemove={() => setForeignCorporates((prev) => prev.filter((_, idx) => idx !== i))}
            onChange={(field, val) => {
              setForeignCorporates((prev) => {
                const next = [...prev];
                next[i] = { ...next[i], [field]: val };
                return next;
              });
            }}
            isForeign={true}
            showAuthorisedRep={true}
          />
        ))}
      </div>
    </div>
  );
}
