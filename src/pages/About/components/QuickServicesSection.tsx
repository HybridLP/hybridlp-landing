import { Building2, FileText, CalendarCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Register a Business",
    description:
      "Full CAC corporate registration for Enterprises, Ltd Companies, Partnerships, NGOs, Holding & Foreign companies.",
    href: "/register-business",
    badge: "CAC Accredited",
    icon: <Building2 className="w-6 h-6 text-[#CAA500]" />,
    buttonText: "Register Business",
  },
  {
    title: "Request Legal Drafting",
    description:
      "Custom agreements, NDA, employment contracts, terms, deed of assignment, and corporate resolutions crafted by seasoned lawyers.",
    href: "/request-legal-drafting",
    badge: "Direct Legal Filing",
    icon: <FileText className="w-6 h-6 text-[#CAA500]" />,
    buttonText: "Request Drafting",
  },
  {
    title: "Book a Consultation",
    description:
      "Schedule a dedicated virtual or in-person advisory session with verified legal practitioners in your practice area.",
    href: "/book-consultation",
    badge: "Expert Advisory",
    icon: <CalendarCheck className="w-6 h-6 text-[#CAA500]" />,
    buttonText: "Book Session",
  },
];

export default function QuickServicesSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-32 my-10 md:my-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[#CAA500] text-xs md:text-sm font-semibold tracking-wider uppercase bg-[#CAA500]/10 px-3 py-1 rounded-full border border-[#CAA500]/20">
            Self-Service Legal Portal
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-3 inter-font">
            Already Know What You Need?
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-2 lato-regular">
            Get your corporate filings, legal contracts, or consultation started immediately without waiting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((item) => (
            <div
              key={item.title}
              className="bg-[#0B132B] border border-gray-800 hover:border-[#CAA500]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#CAA500]/10 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#15233F] border border-gray-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#CAA500] bg-[#CAA500]/10 border border-[#CAA500]/30 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 inter-font group-hover:text-[#CAA500] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed lato-regular mb-6">
                  {item.description}
                </p>
              </div>

              <Link
                to={item.href}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-linear-to-b from-[#CAA500] to-[#825900] text-white text-sm font-semibold hover:opacity-90 transition-all active:scale-98 shadow-md"
              >
                <span>{item.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
