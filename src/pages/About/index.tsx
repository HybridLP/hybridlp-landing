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
        <Highlights />
        <Testimonials />
      </main>
    </>
  );
};
