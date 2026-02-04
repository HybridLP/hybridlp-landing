import documentIcon from "../../../assets_/famicons_documents.png";
import calendarIcon from "../../../assets_/calendar.png";
import meetingIcon from "../../../assets_/microphone-icon.png";
import accessIcon from "../../../assets_/accessIcon.png";
import iconLast from "../../../assets_/icon_last.png";
import bg from "../../../assets_/landing-bg.jpg";
import { useScrollAnimation } from "../../../utils/useScrollAnimation";

const HighlightItem = ({ item, idx }: { item: any; idx: number }) => {
  console.log(idx);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className="flex gap-4 md:gap-6 flex-col md:flex-row items-center md:items-start "
    >
      {/* Card - Fade in from left on mobile, normal on desktop */}
      <div
        className={`rounded-xl md:rounded-3xl flex items-center justify-center bg-[#333333] p-8 md:px-10 md:py-[60px] w-full md:min-w-[460px] md:max-w-[460px] h-48 md:h-80 transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 md:translate-y-0 translate-x-0"
            : "opacity-0 md:translate-y-10 -translate-x-10 md:translate-x-0"
        }`}
        style={{
          transitionDelay: `${idx * 150}ms`,
        }}
      >
        {idx === 0 || idx === 2 || idx === 4 ? (
          <div
            className={` gradiented2 rounded-2xl flex relative flex-col items-center justify-center bg-linear-to-b from-[#413F3F] to-[#373737] w-full h-full ${
              idx === 2 || idx == 4
                ? "bg-linear-to-b from-[#413F3F00] to-[#454444] items-start md:py-6 py-4 md:px-[28px] px-4"
                : ""
            } ${idx === 4 && "text-center"}`}
            style={{
              boxShadow:
                idx === 2 || idx === 4
                  ? "box-shadow: 0px 1px 2px 0px #C8C8C840 inset;"
                  : "0px 4px 4px 0px #00000040, 0px 1px 10px 0px #C8C8C840 inset",
            }}
          >
            {idx === 0 && (
              <div className="flex items-center absolute top-0 left-0 pt-2 md:pt-3 pl-2 md:pl-4 gap-1">
                <div className="rounded-full w-3 h-3 bg-[#FF4C4C]" />
                <div className="rounded-full w-3 h-3 bg-[#FFDA61]" />
                <div className="rounded-full w-3 h-3 bg-[#C2FF61]" />
              </div>
            )}
            <img
              src={item.image}
              className={
                idx === 4
                  ? "w-[60px] h-[60px] md:w-[104px] md:h-[82px] mx-auto"
                  : "size-16"
              }
              alt=""
            />
            <h3
              className={`text-white text-[18px] md:text-[24px] font-semibold ${idx === 4 && "text-center mx-auto"}`}
            >
              {item.extraTitle}
            </h3>
            {item.extraDesc && (
              <p
                className={`text-white text-[14px] md:text-[16px] ${idx === 4 && "text-center mx-auto"}`}
              >
                {item.extraDesc}
              </p>
            )}
          </div>
        ) : idx === 3 ? (
          // apply the drop shadow

          <div
            className="flex items-center justify-center rounded-2xl bg-linear-to-b from-[#413F3F]  w-full h-full overflow-hidden pl-12 md:py-[30px] py-[20px] "
            style={{
              boxShadow:
                "0px 4px 2px 0px #00000040, 0px 1px 2px 0px #C8C8C840 inset",
            }}
          >
            <div className="flex flex-col justify-center items-center ">
              <h3 className="text-[#E6E6E6] text-[18px] md:text-[24px] font-semibold md:w-fit w-[120px]">
                {item.extraTitle}
              </h3>
              {item.extraDesc && (
                <p className="text-white text-[14px] md:text-[16px]">
                  {item.extraDesc}
                </p>
              )}
            </div>
            <div className="h-[100%] bg-[#8A8A8A] w-[2px]" />
            <img
              src={item.image}
              className="w-[120px] h-[100px] md:w-[173px] md:h-[139px]"
              alt=""
            />
          </div>
        ) : (
          <div
            className="flex gap-4 rounded-2xl bg-linear-to-b from-[#413F3F00] to-[#454444] ring-[rgba(65,62,62,0.5)] w-full h-full overflow-hidden"
            style={{
              boxShadow:
                "0px 4px 4px 0px #00000040, 0px 1px 10px 0px #C8C8C840 inset",
            }}
          >
            <div className="flex items-center justify-center bg-linear-to-bl from-[#8A8A8A] from-[12%] to-[#333333] w-[100px] md:w-[128px]">
              <img src={item.image} className="w-[60px] md:w-[91px]" alt="" />
            </div>
            <div className="flex flex-col  gap-2 md:gap-11 justify-center md:justify-end md:py-4 text-left ">
              <h3 className="text-white text-[18px] md:text-[24px] w-fit font-semibold">
                {item.extraTitle}
              </h3>
              {item.extraDesc && (
                <p className="text-white text-[14px] md:text-[16px] w-fit">
                  {item.extraDesc}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Text Content - Fade in from right on mobile, normal on desktop */}
      <div
        className={`flex flex-col my-auto gap-3 md:gap-4 justify-center px-4 md:px-0 text-center md:text-left transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 md:translate-y-0 translate-x-0"
            : "opacity-0 md:translate-y-10 translate-x-10 md:translate-x-0"
        }`}
        style={{
          transitionDelay: `${idx * 150 + 100}ms`, // Slight delay after card animation
        }}
      >
        <h3 className="text-lg md:text-xl font-semibold inter-font text-white leading-tight">
          {item.title
            .split(/<br\s*\/?>/)
            .map((text: string, i: number, arr: string[]) => (
              <span key={i}>
                {text}
                {i < arr.length - 1 && <br className="hidden lg:inline" />}
              </span>
            ))}
        </h3>
        <p className="text-base md:text-[18px] lato-regular font-normal text-white/90 leading-relaxed text-justify">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div
      id="features"
      className="flex flex-col gap-6 md:gap-8 text-white pt-8 md:pt-[5%] px-4 md:px-8 lg:px-[244px] pb-12 md:pb-16"
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
        <span className="hidden md:inline">
          <br />
        </span>
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
    title: "Submit your legal matters securely from <br/> anywhere.",
    description:
      "Submit your legal matters securely from anywhere. Provide your details on our secured system through the structured forms designed to capture every critical aspect of your case. Whether your matter relates to civil, criminal defence, corporate, commercial transactions, real estate, regulatory compliance, or advisory services, HybridLP ensures your case receives professional attention from the outset.",
    image: documentIcon,
    extraTitle: "Client Briefing & Case Filing",
  },
  {
    title: "Log meetings, interviews, or any sessions on <br/> the go.",
    description:
      "Capture voice notes during meetings, consultations, or any related proceedings. Each recording can be tagged, transcribed, and attached to relevant case files for smarter, on-the-go documentation.",
    image: meetingIcon,
    extraTitle: "Voice Notes",
    extraDesc: "And other recordings",
  },
  {
    title: "Nigerian laws, templates, judgments, and <br/> more.",
    description:
      "Instant access to a rich library of Nigerian statutes, case law, precedent templates, and Continuing Professional Development (CPD) resources. Stay informed and empowered with curated legal content at your fingertips.",
    image: accessIcon,
    extraTitle: "Exclusive Access To",
    extraDesc: "Major Nigerian legal resources",
  },
  {
    title: "Never miss a court date or client appointment<br/> again.",
    description:
      "Keep track of court sittings, deadlines, and consultations with an integrated calendar tailored for legal workflows. Get automatic reminders and sync important dates across devices and team members.",
    image: calendarIcon,
    extraTitle: "Legal Diary & Reminders",
  },
  {
    title:
      "Lodge concerns and  witness a flawless resolution process <br/> unfold",
    description:
      "HybridLP provides a structured and transparent complaints process, enabling users to lodge concerns, track resolution progress and initiate refund requests where service expectations are not met. This ensures accountability and client satisfaction.",
    image: iconLast,
    extraTitle: "Complaints and Refund",
    extraDesc: "Resolution system",
  },
];
