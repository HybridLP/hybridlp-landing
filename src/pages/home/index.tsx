import Header from "../../components/widgets/header";
import About from "./components/about";
import { Footer } from "./components/footer";
import HassleFreeCTA from "./components/hasslefcta";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import SharingBriefs from "./components/sharingBriefs";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col bg-black ">
      <Header />
      <Hero />
      <main className="flex flex-col py-0 lg:px-32- bg-inherit text-white">
        <About />
        <SharingBriefs />
        <Highlights />
        <Testimonials/>
        <HassleFreeCTA />
      </main>
      <Footer />
    </div>
  );
}
