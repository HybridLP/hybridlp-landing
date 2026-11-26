import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  FileSearch,
  FileSignature,
  MailWarning,
  Building2,
  ClipboardCheck,
  Receipt,
  Scale,
  Users,
  FileCheck2,
  BookOpenCheck,
} from "lucide-react";
import { QUICK_SERVICES, type QuickServiceOption } from "../constants";

const ICONS: Record<string, React.ReactNode> = {
  register_business: <BriefcaseBusiness className="w-5 h-5" />,
  request_legal_drafting: <FileText className="w-5 h-5" />,
  vet_agreement: <FileSearch className="w-5 h-5" />,
  agreements: <FileSignature className="w-5 h-5" />,
  letters_notices_petitions: <MailWarning className="w-5 h-5" />,
  verify_company_status: <Building2 className="w-5 h-5" />,
  file_annual_returns: <ClipboardCheck className="w-5 h-5" />,
  confirm_tax_liability: <Receipt className="w-5 h-5" />,
  court_appearance: <Scale className="w-5 h-5" />,
  attend_meeting: <Users className="w-5 h-5" />,
  review_agreement: <FileCheck2 className="w-5 h-5" />,
  legal_opinion: <BookOpenCheck className="w-5 h-5" />,
};

interface Props {
  onSelect: (service: QuickServiceOption) => void;
}

export default function QuickServiceGrid({ onSelect }: Props) {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {QUICK_SERVICES.map((item, idx) => {
          const isDark = idx % 2 === 0;
          const cardClass = `group text-left rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col justify-between min-h-[148px] ${
            isDark
              ? "bg-[#333333] text-white hover:bg-[#262626]"
              : "bg-[#E6E6E6] text-[#333333] hover:bg-[#dcdcdc]"
          }`;
          const content = (
            <>
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`p-2.5 rounded-xl ${
                    isDark ? "bg-white/10 text-[#E9DFB0]" : "bg-[#333333] text-white"
                  }`}
                >
                  {ICONS[item.id]}
                </div>
                <ArrowRight
                  className={`w-4 h-4 mt-1 transition-transform duration-300 group-hover:translate-x-1 ${
                    isDark ? "text-gray-300" : "text-[#545454]"
                  }`}
                />
              </div>

              <div className="mt-4">
                <h4 className="text-base font-semibold inter-font leading-snug">
                  {item.label}
                </h4>
                <p
                  className={`text-xs mt-1 leading-relaxed ${
                    isDark ? "text-gray-300" : "text-[#545454]"
                  }`}
                >
                  {item.hint}
                </p>
              </div>
            </>
          );

          return item.href ? (
            <Link
              key={item.id}
              to={item.href}
              style={{ boxShadow: "-4px 10px 20px 0px #00000028" }}
              className={cardClass}
            >
              {content}
            </Link>
          ) : (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item)}
              style={{ boxShadow: "-4px 10px 20px 0px #00000028" }}
              className={cardClass}
            >
              {content}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-[#545454] pt-2">
        <span>Managing an ongoing case or prefer a full workspace?</span>
        <a
          href="https://app.hybridlp.com/login"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[#333333] underline hover:opacity-75"
        >
          Open Briefspace instead →
        </a>
      </div>
    </div>
  );
}
