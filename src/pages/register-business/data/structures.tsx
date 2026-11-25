import {
  Building2,
  Briefcase,
  Landmark,
  HeartHandshake,
  Scale,
  Users,
  UserCheck,
  Shield,
  Layers,
  Network,
  Handshake,
  Globe,
} from "lucide-react";
import React from "react";

export interface StructureItem {
  id: string;
  title: string;
  shortName: string;
  category: "Enterprise" | "Companies" | "Partnerships" | "Non-Profit" | "Corporate Groups";
  icon: React.ReactNode;
  description: string;
}

export const STRUCTURES: StructureItem[] = [
  {
    id: "enterprise",
    title: "1. Enterprise / Business Name",
    shortName: "Enterprise / Business Name",
    category: "Enterprise",
    icon: <Building2 className="w-7 h-7 text-[#CAA500]" />,
    description: "Sole proprietorships & partnerships under Part E of CAMA. Fast, affordable trade registration.",
  },
  {
    id: "ltd",
    title: "2. Private Company Limited by Shares (LTD)",
    shortName: "Private Company (LTD)",
    category: "Companies",
    icon: <Briefcase className="w-7 h-7 text-[#CAA500]" />,
    description: "Nigeria's standard corporate vehicle. Share capital, limited liability, separate legal personality.",
  },
  {
    id: "plc",
    title: "3. Public Company Limited by Shares (PLC)",
    shortName: "Public Company (PLC)",
    category: "Companies",
    icon: <Landmark className="w-7 h-7 text-[#CAA500]" />,
    description: "For corporate entities capable of offering shares to the public and large-scale operations.",
  },
  {
    id: "guarantee",
    title: "4. Company Limited by Guarantee (LTD/GTE)",
    shortName: "Limited by Guarantee (LTD/GTE)",
    category: "Companies",
    icon: <HeartHandshake className="w-7 h-7 text-[#CAA500]" />,
    description: "Non-profit company promoting commerce, art, science, education or charity with members as guarantors.",
  },
  {
    id: "unlimited",
    title: "5. Unlimited Company (ULTD)",
    shortName: "Unlimited Company (ULTD)",
    category: "Companies",
    icon: <Scale className="w-7 h-7 text-[#CAA500]" />,
    description: "Corporate entity where shareholders hold unlimited legal liability for company obligations.",
  },
  {
    id: "lp",
    title: "6. Limited Partnership (LP)",
    shortName: "Limited Partnership (LP)",
    category: "Partnerships",
    icon: <Users className="w-7 h-7 text-[#CAA500]" />,
    description: "Partnership with at least one general partner (unlimited) and limited partners with capped liability.",
  },
  {
    id: "llp",
    title: "7. Limited Liability Partnership (LLP)",
    shortName: "Limited Liability Partnership (LLP)",
    category: "Partnerships",
    icon: <UserCheck className="w-7 h-7 text-[#CAA500]" />,
    description: "Separate legal corporate body combining partnership flexibility with limited liability for all partners.",
  },
  {
    id: "it",
    title: "8. Incorporated Trustees (IT)",
    shortName: "Incorporated Trustees (NGO/Church)",
    category: "Non-Profit",
    icon: <Shield className="w-7 h-7 text-[#CAA500]" />,
    description: "NGOs, foundations, churches, mosques, clubs, and charitable bodies registered under Part F of CAMA.",
  },
  {
    id: "group",
    title: "9. Group of Companies",
    shortName: "Group of Companies",
    category: "Corporate Groups",
    icon: <Network className="w-7 h-7 text-[#CAA500]" />,
    description: "Multi-corporate umbrella formed by 3 or more associated companies with common ownership.",
  },
  {
    id: "holding",
    title: "10. Holding Company",
    shortName: "Holding Company",
    category: "Corporate Groups",
    icon: <Layers className="w-7 h-7 text-[#CAA500]" />,
    description: "Parent company holding controlling interests across operating subsidiary corporate entities.",
  },
  {
    id: "consortium",
    title: "11. Consortium Company",
    shortName: "Consortium Company",
    category: "Corporate Groups",
    icon: <Handshake className="w-7 h-7 text-[#CAA500]" />,
    description: "Joint venture corporate company formed by participating firms for specialized contracts or projects.",
  },
  {
    id: "foreign",
    title: "12. Company with Foreign Participation",
    shortName: "Foreign Participation Company",
    category: "Companies",
    icon: <Globe className="w-7 h-7 text-[#CAA500]" />,
    description: "Corporate entity with foreign individual or corporate shareholders, compliant with NIPC & NOTAP.",
  },
];
