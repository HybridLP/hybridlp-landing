import PersonDetailsForm from "./PersonDetailsForm";
import { PersonParticulars } from "../types/cacTypes";

interface Props {
  chairman: PersonParticulars;
  setChairman: React.Dispatch<React.SetStateAction<PersonParticulars>>;
  secretary: PersonParticulars;
  setSecretary: React.Dispatch<React.SetStateAction<PersonParticulars>>;
}

export default function TrusteeOfficialsSection({
  chairman,
  setChairman,
  secretary,
  setSecretary,
}: Props) {
  return (
    <div className="space-y-4 pt-1">
      {/* 7. Chairman Details */}
      <div>
        <h4 className="text-base font-semibold text-[#CAA500] mb-2 inter-font">
          7. Particulars of the Chairman
        </h4>
        <PersonDetailsForm
          roleTitle="Chairman"
          index={0}
          person={chairman}
          onChange={(field, val) => setChairman((prev) => ({ ...prev, [field]: val }))}
        />
      </div>

      {/* 8. Secretary Details */}
      <div>
        <h4 className="text-base font-semibold text-[#CAA500] mb-2 inter-font">
          8. Particulars of the Secretary
        </h4>
        <PersonDetailsForm
          roleTitle="Secretary"
          index={0}
          person={secretary}
          onChange={(field, val) => setSecretary((prev) => ({ ...prev, [field]: val }))}
        />
      </div>
    </div>
  );
}
