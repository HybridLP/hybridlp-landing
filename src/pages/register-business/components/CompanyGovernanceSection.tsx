import ShareholdersSection from "./ShareholdersSection";
import DirectorsSection from "./DirectorsSection";
import SecretaryDetailsForm from "./SecretaryDetailsForm";
import { PersonParticulars, SecretaryParticulars } from "../types/cacTypes";
import { createDefaultPerson } from "../utils/companyHelpers";

interface Props {
  shareholders: PersonParticulars[];
  setShareholders: React.Dispatch<React.SetStateAction<PersonParticulars[]>>;
  directors: PersonParticulars[];
  setDirectors: React.Dispatch<React.SetStateAction<PersonParticulars[]>>;
  secretary: SecretaryParticulars;
  setSecretary: React.Dispatch<React.SetStateAction<SecretaryParticulars>>;
  showShareClass?: boolean;
  showProfessionalQualification?: boolean;
  secretaryRequired?: boolean;
}

export default function CompanyGovernanceSection({
  shareholders,
  setShareholders,
  directors,
  setDirectors,
  secretary,
  setSecretary,
  showShareClass = false,
  showProfessionalQualification = false,
  secretaryRequired = false,
}: Props) {
  return (
    <div className="space-y-4 pt-1">
      <ShareholdersSection
        shareholders={shareholders}
        showShareClass={showShareClass}
        onChange={(idx, field, val) => {
          setShareholders((prev) => {
            const next = [...prev];
            next[idx] = { ...next[idx], [field]: val };
            return next;
          });
        }}
        onAdd={() => setShareholders((prev) => [...prev, createDefaultPerson()])}
        onRemove={(i) => setShareholders((prev) => prev.filter((_, idx) => idx !== i))}
      />

      <DirectorsSection
        directors={directors}
        onChange={(idx, field, val) => {
          setDirectors((prev) => {
            const next = [...prev];
            next[idx] = { ...next[idx], [field]: val };
            return next;
          });
        }}
        onAdd={() => setDirectors((prev) => [...prev, createDefaultPerson()])}
        onRemove={(i) => setDirectors((prev) => prev.filter((_, idx) => idx !== i))}
      />

      <SecretaryDetailsForm
        secretary={secretary}
        onChange={(field, val) => setSecretary((prev) => ({ ...prev, [field]: val }))}
        showProfessionalQualification={showProfessionalQualification}
        required={secretaryRequired}
      />
    </div>
  );
}
