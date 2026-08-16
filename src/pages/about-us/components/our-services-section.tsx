import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, TouchEvent } from "react";
import consultationImg from "../../../assets/service-consultation.png";
import documentationImg from "../../../assets/service-documentation.png";
import disputeImg from "../../../assets/service-dispute.png";
import researchImg from "../../../assets/service-research.png";
import advocacyImg from "../../../assets/service-advocacy.png";
import proBonoImg from "../../../assets/service-pro-bono.png";

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicesContents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + servicesContents.length) % servicesContents.length,
    );
  };

  // Add automated auto-slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesContents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full overflow-hidden md:min-h-[500px]">
      {/* MOBILE VIEW */}
      <div className="md:hidden  w-full pb-12 flex flex-col items-center">
        {/* Mobile Badge */}
        <div className="bg-[#E8E8E8] px-6 py-2 rounded-lg mt-4 mb-10 shadow-sm">
          <span className="text-[#0A0F1E] text-sm font-medium tracking-wide lato-regular">
            Our Services
          </span>
        </div>

        {/* Mobile Card */}
        <div
          className="w-full bg-[#15233F] overflow-hidden shadow-2xl shadow-[#15233F]/50 mb-12 relative rounded-t-xl "
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {servicesContents.map((service, index) => (
              <div 
                key={index} 
                className={`w-full flex-shrink-0 flex flex-col transition-opacity duration-[600ms] ${currentSlide === index ? "opacity-100" : "opacity-30"}`}
              >
                {/* Mobile Image */}
                <div className="w-full aspect-[4/3]">
                  <img
                    className="w-full h-full object-cover"
                    src={service.img}
                    loading="lazy"
                    alt={service.title}
                  />
                </div>

                {/* Mobile Content */}
                <div className="p-6 pb-10 flex flex-col items-center">
                  <h3 className="text-white text-xl font-bold mb-6 text-center leading-tight interf-font">
                    {service.title}
                  </h3>
                  <p className="text-[#94A3B8] text-[15px] lato-regular font-normal leading-relaxed text-center px-2">
                    {service.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center items-center gap-2.5">
          {servicesContents.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === index
                  ? "w-8 h-[3px] bg-white"
                  : "w-2 h-2 bg-[#1E293B]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW - MAINTAINED STRICTLY */}
      <div className="hidden md:flex bg-[#15233F] group relative rounded-xl overflow-hidden min-h-[448px] flex-col justify-center">
        <div 
          className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {servicesContents.map((service, index) => (
            <div 
              key={index} 
              className={`w-full flex-shrink-0 flex flex-row justify-between gap-[50px] items-start p-16 transition-opacity duration-[600ms] ${currentSlide === index ? "opacity-100" : "opacity-30"}`}
            >
              <div className="flex flex-col flex-1 gap-6 order-2 md:order-1">
                <h4 className="w-fit bg-[#C6AD33] py-2 px-4 text-lg rounded-lg text-white">
                  Our services
                </h4>
                <h3 className="text-white text-[32px] font-semibold inter-font leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#B0B0B0] text-[20px] font-regular lato-regular leading-relaxed">
                  {service.content}
                </p>
              </div>
              <img
                className="w-[300px] h-[320px] aspect-[4/3] bg-[#AFAFAF] rounded-lg object-cover object-center order-2"
                src={service.img}
                loading="lazy"
                alt={service.title}
              />
            </div>
          ))}
        </div>

        <div className="absolute group-hover:flex hidden top-1/2 left-0 w-full -translate-y-1/2 items-center justify-between px-16 pointer-events-none">
          <button
            className="outline-none p-2 bg-transparent rounded-md cursor-pointer text-white pointer-events-auto transition-colors hover:bg-white/20"
            onClick={prevSlide}
          >
            <ChevronLeft />
          </button>
          <button
            className="outline-none p-2 bg-transparent rounded-md cursor-pointer text-white pointer-events-auto transition-colors hover:bg-white/20"
            onClick={nextSlide}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const servicesContents = [
  {
    title: "Legal Advice & Consultation",
    content:
      " Corporate matters (e.g., company registration, intellectual property, commercial disputes, mergers & acquisitions), Tax Planning & Compliance, Labour/Employment Law, Family Law (e.g., divorce, child custody, estate planning), and more",
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
