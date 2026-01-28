import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/widgets/header";
import { Footer } from "./components/footer";
import HassleFreeCTA from "./components/hasslefcta";
import LegalChatbot from "../../components/widgets/chatbot";
import SEO from "../../components/widgets/seo";

export default function Home() {
  const location = useLocation();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HybridLP",
    url: "https://hybridlp.com",
    logo: "https://hybridlp.com/hybridlp-logo.png",
    sameAs: [
      "https://x.com/hybridlp_",
      "https://instagram.com/hybridlp_",
      "https://linkedin.com/company/hybridlp",
    ],
  };

  useEffect(() => {
    // Handle hash scrolling when navigating to home with #section
    if (location.hash.includes("#")) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay to ensure DOM is ready
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col bg-[#000A1D] w-screen overflow-x-hidden">
      <SEO structuredData={organizationSchema} />
      <Header />
      <Outlet />
      <HassleFreeCTA />
      <Footer />
      <LegalChatbot />
    </div>
  );
}
