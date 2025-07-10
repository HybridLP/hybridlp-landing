import { useEffect, useRef } from "react";
import documentIcon from "../../../assets_/famicons_documents.png";
import calendarIcon from "../../../assets_/calendar.png";
import meetingIcon from "../../../assets_/microphone-icon.png";
import accessIcon from "../../../assets_/accessIcon.png";
import bg from "../../../assets_/landing-bg.jpg"

export default () => {
  const highlightRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    highlightRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      highlightRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="flex flex-col gap-6 text-white pt-[5%] md:px-32" style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <h6 className="text-black mx-auto h-10 bg-gray-100 w-fit p-4 flex items-center lg:w-[10%] justify-center rounded-md text-center text-[16px] font-bold lg:text-[18px] lato-regular">
        Features
      </h6>
      <h2 className="font-medium text-sm mx-auto text-center lg:text-[40px] inter-font">
        Do More With <br />
        Hybrid Law Practice
      </h2>

      <p className="text-[20px] text-center mx-auto leading-[30px]">
        Customize the way you streamline your legal work-flow with integrations,{" "}
        <br /> automations and features, anytime, anywhere.
      </p>
      <div className="flex flex-col gap-6">
        {highlights.map((item, idx) => (
          <div
            ref={(el) => (highlightRefs.current[idx] = el) as any}
            className="flex gap-6 opacity-0 translate-y-10 animate-fadeUp transition-all duration-500 ease-out"
            key={idx}
          >
            <div className="rounded-lg flex items-center justify-center bg-[#333333] p-8 min-w-[35%] h-52">
              {idx === 0 || idx === 2 ? (
                <div
                  className={`rounded-lg flex flex-col items-center justify-center bg-gradient-to-b from-[#413F3F] to-[#373737]    w-full h-full  ${
                    idx === 2
                      ? "bg-gradient-to-b from-[#413F3F00] to-[#454444]  shadow-[#C8C8C840] shadow-inner inset-x-1 inset-y-1 drop-shadow-none"
                      : " drop-shadow-[#00000040] drop-shadow-lg shadow-[rgba(65,62,62,0.5)] shadow-sm "
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
                <div
                  className="flex gap-4 rounded-lg bg-gradient-to-b from-[#413F3F] to-[#373737]  ring-[rgba(65,62,62,0.5)] w-full h-full overflow-hidden p-6 drop-shadow-lg drop-shadow-[#00000040] inset-1 
              "
                >
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
                <div
                  className="flex gap-4 rounded-lg bg-gradient-to-b from-[#413F3F00] to-[#454444]  shadow-[#C8C8C840] shadow-inner inset-x-1 inset-y-1 drop-shadow-none ring-[rgba(65,62,62,0.5)] w-full h-full overflow-hidden  drop-shadow-lg drop-shadow-[#00000040] 
              "
                >
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
            <div className="flex flex-col gap-4 justify-center">
              <h3 className="text-md font-semibold inter-font text-white">
                {item.title}
              </h3>
              <p className="text-[18px] lato-regular font-normal text-white">
                {item.description}
              </p>
            </div>
          </div>
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
