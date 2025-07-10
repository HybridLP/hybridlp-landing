import { ArrowRight } from "lucide-react";
import bg from "../../../assets_/testifooter-bg.jpg";

export default function HassleFreeCTA() {
  return (
    <section className="  px-32  overflow-hidden">

      <div
        className=" text-center py-16  mx-auto flex items-center justify-center flex-col   rounded-2xl my-8"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-black text-4xl md:text-5xl lg:text-[40px] font-light leading-tight mb-8 inter-font ">
          Step Into The Legal Hassle Free World
        </h2>

        <p className="text-black/90 text-lg md:text-xl lg:text-[16] leading-relaxed mb-12 max-w-3xl text-justify mx-auto lato-regular">
          Access expert legal support without delays, manage & monitor your case
          progress, collaborate with seasoned professionals, all in one secure,
          intelligent digital law office. Whether you're a client or a legal
          practitioner, you're just a click away.
        </p>

        <a
          href="https://app.hybridlp.com/signup"
          className="flex justify-between w-[15%] mx-auto items-center bg-black  p-0.5 pl-8 rounded-full font-medium text-lg  "
        >
          <span className="text-white inter-font text-[16px]">Sign Up</span>
          <div className="size-14 bg-white rounded-full text-black flex items-center justify-center ">
            <ArrowRight size={30} />
          </div>
        </a>
      </div>
    </section>
  );
}
