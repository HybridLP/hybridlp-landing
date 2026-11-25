import {
  Building2,
  Shield,
  Users,
  FileText,
  Scale,
  Landmark,
  UserCheck,
  HeartHandshake,
} from "lucide-react";
import React from "react";

export interface StructureItem {
  id: string;
  title: string;
  shortName: string;
  icon: React.ReactNode;
  description: string;
}

export const STRUCTURES: StructureItem[] = [
  {
    id: "enterprise",
    title: "1. Enterprise / Business Name",
    shortName: "Enterprise / Business Name",
    icon: <Building2 className="w-8 h-8 text-[#CAA500]" />,
    description:
      "Ideal for individuals or small businesses operating under a registered business name. Simple, affordable and suitable for sole proprietorships and partnerships.",
  },
  {
    id: "ltd",
    title: "2. Limited Liability Company (Ltd.)",
    shortName: "Limited Liability Company (Ltd.)",
    icon: <Shield className="w-8 h-8 text-[#CAA500]" />,
    description:
      "A popular structure for businesses owned by shareholders. Legal personality is separate from owners, and liability is limited to share capital.",
  },
  {
    id: "unlimited",
    title: "3. Unlimited Liability Company (Ltd./Unlimited)",
    shortName: "Unlimited Liability Company",
    icon: <Scale className="w-8 h-8 text-[#CAA500]" />,
    description:
      "A company where members may have unlimited liability for company debts, suitable where owners assume greater personal responsibility.",
  },
  {
    id: "guarantee",
    title: "4. Limited by Guarantee",
    shortName: "Limited by Guarantee",
    icon: <HeartHandshake className="w-8 h-8 text-[#CAA500]" />,
    description:
      "A non-profit company established to pursue charitable, educational, religious or social objectives with no share capital.",
  },
  {
    id: "plc",
    title: "5. Public Limited Company (PLC)",
    shortName: "Public Limited Company (PLC)",
    icon: <Landmark className="w-8 h-8 text-[#CAA500]" />,
    description:
      "Designed for larger businesses with the capacity to raise capital from the public and operate on a broader corporate scale.",
  },
  {
    id: "lp",
    title: "6. Limited Partnership (LP)",
    shortName: "Limited Partnership (LP)",
    icon: <Users className="w-8 h-8 text-[#CAA500]" />,
    description:
      "A partnership comprising at least one general partner with unlimited liability and limited partners with liability capped to contribution.",
  },
  {
    id: "llp",
    title: "7. Limited Liability Partnership (LLP)",
    shortName: "Limited Liability Partnership (LLP)",
    icon: <UserCheck className="w-8 h-8 text-[#CAA500]" />,
    description:
      "A flexible partnership structure combining partnership benefits with limited liability protection for all partners.",
  },
  {
    id: "ngo",
    title: "8. NGO / Association / Club",
    shortName: "NGO / Association / Club",
    icon: <FileText className="w-8 h-8 text-[#CAA500]" />,
    description:
      "Suitable for charitable, religious, cultural, and community organizations to operate and hold property in their registered name.",
  },
];
