import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import consultationImg from "../../../assets_/service-consultation.png";
import documentationImg from "../../../assets_/service-documentation.png";
import disputeImg from "../../../assets_/service-dispute.png";
import researchImg from "../../../assets_/service-research.png";
import advocacyImg from "../../../assets_/service-advocacy.png";
import proBonoImg from "../../../assets_/service-pro-bono.png";

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicesContents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + servicesContents.length) % servicesContents.length,
    );
  };

  const currentService = servicesContents[currentSlide];

  return (
    <div className="bg-[#15233F] p-6 md:p-16 relative rounded-xl overflow-hidden min-h-[448px] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-[50px] items-center md:items-start">
        <div className="flex flex-col flex-1 gap-4 md:gap-6 order-2 md:order-1">
          <h4 className="w-fit bg-[#C6AD33] py-2 px-4 text-base md:text-lg rounded-lg text-white">
            Our services
          </h4>
          <h3 className="text-white text-lg md:text-xl md:text-[32px] font-semibold inter-font leading-tight">
            {currentService.title}
          </h3>
          <p className="text-[#B0B0B0] text-sm md:text-[20px] font-regular lato-regular leading-relaxed">
            {currentService.content}
          </p>
        </div>
        <img
          className="w-full md:w-[300px] aspect-[4/3] md:h-[320px] bg-[#AFAFAF] rounded-lg object-cover object-center order-1 md:order-2"
          src={currentService.img}
          loading="lazy"
          alt={currentService.title}
        />
      </div>
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex items-center justify-between px-2 md:px-16 pointer-events-none">
        <button
          className="outline-none p-2 bg-white/10 md:bg-transparent rounded-full md:rounded-none cursor-pointer text-white pointer-events-auto transition-colors hover:bg-white/20"
          onClick={prevSlide}
        >
          <ChevronLeft />
        </button>
        <button
          className="outline-none p-2 bg-white/10 md:bg-transparent rounded-full md:rounded-none cursor-pointer text-white pointer-events-auto transition-colors hover:bg-white/20"
          onClick={nextSlide}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

const servicesContents = [
  {
    title: "Legal Advice & Consultation",
    content:
      " Corporate matters (e.g., company registration, intellectual property, commercial disputes, mergers & acquisitions), Tax Planning & Compliance, Labour/Employment Law, Family Law (e.g., divorce, child custody, estate planning), Immigration Law, Cyber Security & Data Protection, Real Estate, Environmental Law, Admiralty & Maritime Law, Energy & Natural Resources Law, Sports Law.",
    img: consultationImg,
  },
  {
    title: "Legal Drafting & Documentation",
    content:
      " Letters, Legal Opinions, Document Review, Petitions, Notices, Contracts (e.g., commercial contracts, service agreements, non-disclosure agreements), Wills & Trusts, Pleadings & Court Filings, Regulatory Submissions, Policy Development.",
    img: documentationImg,
  },
  {
    title: "Dispute Resolution and Litigation",
    content:
      " Arbitration, Conciliation, Mediation, Litigation (Civil, Criminal, Commercial matters, Enforcement of Fundamental Rights & Election Petition)",
    img: disputeImg,
  },
  {
    title: "Legal Research & Analysis",
    content:
      " Case Law Research, Statutory Analysis, Legal Opinions, Legal Memos, Policy Research.",
    img: researchImg,
  },
  {
    title: "Client Representation & Advocacy",
    content:
      "More: Court Appearances, Administrative Hearings, Regulatory Representation, Negotiations on Behalf of Clients, Legal Guardianship, Power of Attorney.",
    img: advocacyImg,
  },
  {
    title: "Pro Bono Services",
    content:
      " General Legal Aid, Human Rights Advocacy, Community Legal Support, Legal Representation for Indigent Clients, Public Interest Litigation.",
    img: proBonoImg,
  },
];
