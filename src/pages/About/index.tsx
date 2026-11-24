import WhySection from "../about-us/components/why-section";
import About from "../home/components/about";
import Hero from "../home/components/hero";
import Highlights from "../home/components/highlights";
import SharingBriefs from "../home/components/sharingBriefs";
import Testimonials from "../home/components/testimonials";
import SEO from "../../components/widgets/seo";

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
        <section className="px-4 md:px-8 lg:px-16 xl:px-32 my-6 md:my-10 text-center">
          <div className="max-w-3xl mx-auto bg-[#15233F] border border-gray-800 rounded-xl px-5 py-4 md:px-7 md:py-5 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-xl">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold inter-font">
              Already know what you need?
            </h2>
            <div className="flex items-center justify-center lato-regular">
              <a
                href="mailto:hybridlawpractice@gmail.com?subject=Book%20a%20Consultation"
                className="bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-5 py-2.5 rounded-lg text-sm md:text-base font-semibold hover:opacity-90 transition-all active:scale-95 whitespace-nowrap"
              >
                Book a Consultation
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
