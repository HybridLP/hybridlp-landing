import { StructureItem } from "../data/structures";
import EnterpriseForm from "./EnterpriseForm";
import CompanySharesForm from "./CompanySharesForm";
import PartnershipForm from "./PartnershipForm";
import IncorporatedTrusteesForm from "./IncorporatedTrusteesForm";
import ConglomerateForm from "./ConglomerateForm";
import ForeignParticipationForm from "./ForeignParticipationForm";

interface Props {
  structure: StructureItem;
  onSuccess: (data: { fullName: string; email: string; phone: string; businessName: string }) => void;
}

export default function RegistrationFormSwitcher({ structure, onSuccess }: Props) {
  switch (structure.id) {
    case "enterprise":
      return <EnterpriseForm onSuccess={onSuccess} />;

    case "ltd":
    case "plc":
    case "guarantee":
    case "unlimited":
      return <CompanySharesForm structure={structure} onSuccess={onSuccess} />;

    case "lp":
    case "llp":
      return <PartnershipForm structure={structure} onSuccess={onSuccess} />;

    case "it":
      return <IncorporatedTrusteesForm structure={structure} onSuccess={onSuccess} />;

    case "group":
    case "holding":
    case "consortium":
      return <ConglomerateForm structure={structure} onSuccess={onSuccess} />;

    case "foreign":
      return <ForeignParticipationForm structure={structure} onSuccess={onSuccess} />;

    default:
      return <CompanySharesForm structure={structure} onSuccess={onSuccess} />;
  }
}
