
import documentIcon from "../../../assets_/famicons_documents.png";
import calendarIcon from "../../../assets_/calendar.png";
import meetingIcon from "../../../assets_/microphone-icon.png";
import accessIcon from "../../../assets_/accessIcon.png";
import bg from "../../../assets_/landing-bg.jpg";
import { useScrollAnimation } from "../../../utils/useScrollAnimation";

const HighlightItem = ({ item, idx }: { item: any; idx: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className="flex gap-4 md:gap-6 flex-col md:flex-row items-center md:items-start"
    >
      {/* Card - Fade in from left on mobile, normal on desktop */}
      <div
        className={`rounded-lg flex items-center justify-center bg-[#333333] p-4 md:p-8 w-full md:min-w-[35%] h-48 md:h-52 transition-all duration-700 ease-out ${isVisible
            ? 'opacity-100 md:translate-y-0 translate-x-0'
            : 'opacity-0 md:translate-y-10 -translate-x-10 md:translate-x-0'
          }`}
        style={{
          transitionDelay: `${idx * 150}ms`
        }}
      >
        {idx === 0 || idx === 2 ? (
          <div
            className={`rounded-lg flex flex-col items-center justify-center bg-gradient-to-b from-[#413F3F] to-[#373737] w-full h-full ${idx === 2
                ? "bg-gradient-to-b from-[#413F3F00] to-[#454444] shadow-[#C8C8C840] shadow-inner inset-x-1 inset-y-1 drop-shadow-none"
                : " drop-shadow-[#00000040] drop-shadow-xl  shadow-sm "
              }`}
          >
            <img src={item.image} className="size-16" alt="" />
            <h3 className="text-white text-[20px] font-semibold">
              {item.extraTitle}
            </h3>
            {item.extraDesc && (
              <p className="text-white text-[16px]">{item.extraDesc}</p>
            )}
          </div>
        ) : idx === 3 ? (
          <div className="flex gap-4 rounded-lg bg-gradient-to-b from-[#413F3F] to-[#373737] ring-[rgba(65,62,62,0.5)] w-full h-full overflow-hidden p-6 drop-shadow-lg drop-shadow-[#00000040] inset-1">
            <div className="flex flex-col gap-4 justify-center items-center">
              <h3 className="text-white text-[20px] font-semibold">
                {item.extraTitle}
              </h3>
              {item.extraDesc && (
                <p className="text-white text-[16px]">{item.extraDesc}</p>
              )}
            </div>
            <div className="h-[100%] bg-[#8A8A8A] w-[1px]" />
            <img src={item.image} className="size-16" alt="" />
          </div>
        ) : (
          <div className="flex gap-4 rounded-lg bg-gradient-to-b from-[#413F3F00] to-[#454444] shadow-[#C8C8C840] shadow-inner inset-x-1 inset-y-1 drop-shadow-none ring-[rgba(65,62,62,0.5)] w-full h-full overflow-hidden drop-shadow-lg drop-shadow-[#00000040]">
            <div className="flex items-center justify-center bg-gradient-to-bl from-[#8A8A8A] from-[12%] to-[#333333]">
              <img src={item.image} className="size-16" alt="" />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <h3 className="text-white text-[20px] font-semibold">
                {item.extraTitle}
              </h3>
              {item.extraDesc && (
                <p className="text-white text-[16px]">{item.extraDesc}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Text Content - Fade in from right on mobile, normal on desktop */}
      <div
        className={`flex flex-col gap-3 md:gap-4 justify-center px-4 md:px-0 text-center md:text-left transition-all duration-700 ease-out ${isVisible
            ? 'opacity-100 md:translate-y-0 translate-x-0'
            : 'opacity-0 md:translate-y-10 translate-x-10 md:translate-x-0'
          }`}
        style={{
          transitionDelay: `${idx * 150 + 100}ms` // Slight delay after card animation
        }}
      >
        <h3 className="text-lg md:text-xl font-semibold inter-font text-white leading-tight">
          {item.title}
        </h3>
        <p className="text-base md:text-[18px] lato-regular font-normal text-white/90 leading-relaxed text-justify" >
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div
      className="flex flex-col gap-6 md:gap-8 text-white pt-8 md:pt-[5%] px-4 md:px-8 lg:px-32 pb-12 md:pb-16"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Features Badge */}
      <h6 className="text-black mx-auto h-10 bg-gray-100 w-fit px-6 py-2 flex items-center justify-center rounded-md text-center text-sm md:text-[16px] lg:text-[18px] font-bold lato-regular">
        Features
      </h6>

      {/* Main Heading */}
      <h2 className="font-medium text-2xl md:text-3xl lg:text-[40px] mx-auto text-center inter-font leading-tight">
        Do More With <br />
        Hybrid Law Practice
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg lg:text-[20px] text-center mx-auto leading-relaxed md:leading-[30px] max-w-4xl px-4">
        Customize the way you streamline your legal work-flow with integrations,{" "}
        <span className="hidden md:inline"><br /></span>
        automations and features, anytime, anywhere.
      </p>

      {/* Highlights Grid */}
      <div className="flex flex-col gap-8 md:gap-12 mt-4 md:mt-8">
        {highlights.map((item, idx) => (
          <HighlightItem key={idx} item={item} idx={idx} />
        ))}
      </div>
    </div>
  );
};

const highlights = [
  {
    title: "Submit your legal matters securely from anywhere.",
    description:
      "Submit detailed briefs securely from anywhere, using structured forms designed to capture all the necessary information about your legal matter. Whether civil, corporate, or criminal, your case gets the attention it deserves right from the start.",
    image: documentIcon,
    extraTitle: "Client Briefing & Case Filing",
  },
  {
    title: "Log meetings, interviews, or any sessions on the go.",
    description:
      "Capture voice notes during meetings, consultations, or any related proceedings anytime, anywhere. Each recording can be tagged, transcribed, and attached to relevant case files for smarter, on-the-go documentation.",
    image: meetingIcon,
    extraTitle: "Voice Notes",
    extraDesc: "And other recordings",
  },
  {
    title: "Nigerian laws, templates, judgments, and more.",
    description:
      "Instantly access a rich library of Nigerian statutes, case law, precedent templates, and Continuing Professional Development (CPD) resources. Stay informed and empowered with curated legal content at your fingertips.",
    image: accessIcon,
    extraTitle: "Exclusive Access To",
    extraDesc: "Major Nigerian legal resources",
  },
  {
    title: "Never miss a court date or client appointment again..",
    description:
      "Keep track of court sittings, deadlines, and consultations with an integrated calendar tailored for legal workflows. Get automatic reminders and sync important dates across devices and team members.",
    image: calendarIcon,
    extraTitle: "Calendar & Reminders",
  },
];
