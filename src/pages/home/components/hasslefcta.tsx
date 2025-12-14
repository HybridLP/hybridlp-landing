import { ArrowRight } from "lucide-react";
import bg from "../../../assets_/testifooter-bg.jpg";

export default function HassleFreeCTA() {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-32 overflow-hidden py-4 md:py-8">
      <div
        className="text-center py-12 md:py-16 lg:py-20 mx-auto flex items-center justify-center flex-col px-6 md:px-8 lg:px-12 rounded-2xl relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-black font-medium text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-tight mb-6 md:mb-8 inter-font">
            Explore Smart and Secured Legal Service Delivery
          </h2>

          <p className="text-black/90 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto text-center lato-regular">
            Gain access to legal services, manage and monitor case progress
            remotely, collaborate with seasoned professionals leveraging
            technology for efficient service delivery, access probono services
            and book sessions with seasoned lawyers and career experts.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="https://app.hybridlp.com/signup"
              className="group flex items-center bg-black hover:bg-gray-800 transition-all duration-300 p-1 pl-6 md:pl-8 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="text-white inter-font text-sm md:text-base lg:text-lg pr-2 md:pr-4">
                Sign Up
              </span>
              <div className="size-10 md:size-12 lg:size-14 bg-white rounded-full text-black flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              </div>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-black/20 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-black/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-black/25 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-black/20 rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
