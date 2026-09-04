import WhySection from "../about-us/components/why-section";
import About from "../home/components/about";
import Hero from "../home/components/hero";
import Highlights from "../home/components/highlights";
import SharingBriefs from "../home/components/sharingBriefs";
import Testimonials from "../home/components/testimonials";
import SEO from "../../components/widgets/seo";

import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <SEO
        title="Access Expert Legal Support"
        description="HybridLP is your digital law office. Connect with expert legal practitioners and manage your case progress seamlessly."
      />
      <Hero />
      <main className="flex flex-col py-0 lg:px-32- bg-inherit text-white">
        <WhySection />
        <About />
        <SharingBriefs />

        {/* Already Know What You Need Banner */}
        <section className="px-4 md:px-8 lg:px-16 xl:px-32 my-8 md:my-16 text-center">
          <div className="bg-[#15233F] border border-gray-800 rounded-2xl p-6 md:p-10 flex flex-col items-center gap-6 shadow-xl">
            <h2 className="text-white text-xl md:text-2xl lg:text-[32px] font-semibold inter-font">
              Already know what you need?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 lato-regular">
              <a
                href="https://app.hybridlp.com"
                className="bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-5 py-2.5 rounded-lg text-sm md:text-base font-semibold hover:opacity-90 transition-all active:scale-95"
              >
                Request Legal Drafting
              </a>
              <Link
                to="/register-business"
                className="bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-5 py-2.5 rounded-lg text-sm md:text-base font-semibold hover:opacity-90 transition-all active:scale-95"
              >
                Register a Business
              </Link>
              <span className="text-[#CAA500] hidden sm:inline font-bold">•</span>
              <a
                href="https://app.hybridlp.com"
                className="bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-5 py-2.5 rounded-lg text-sm md:text-base font-semibold hover:opacity-90 transition-all active:scale-95"
              >
                Book a Consultation
              </a>
              <span className="text-[#CAA500] hidden sm:inline font-bold">•</span>
              <a
                href="#services"
                className="bg-transparent border border-[#CAA500] text-[#CAA500] px-5 py-2.5 rounded-lg text-sm md:text-base font-semibold hover:bg-[#CAA500]/10 transition-all active:scale-95"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>

        <Highlights />
        <Testimonials />
      </main>
    </>
  );
};
