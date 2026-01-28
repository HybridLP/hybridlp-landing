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

  const sitelinksSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Signup to Briefspace",
        description:
          "Create your account on HybridLP Briefspace to start managing your legal matters.",
        url: "https://app.hybridlp.com/signup",
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Login to Briefspace",
        description: "Access your HybridLP Briefspace account.",
        url: "https://app.hybridlp.com/login",
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Join as a Lawyer Member",
        description: "Sign up as a legal professional to join our network.",
        url: "https://lawyer.hybridlp.com/signup",
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Legal Blogs",
        description: "Read latest legal insights and resources from HybridLP.",
        url: "https://hybridlp.com/blogs",
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Legal Judgements",
        description: "Access a database of legal judgements and precedents.",
        url: "https://hybridlp.com/judgements",
      },
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
      <SEO structuredData={[organizationSchema, sitelinksSchema]} />
      <Header />
      <Outlet />
      <HassleFreeCTA />
      <Footer />
      <LegalChatbot />
    </div>
  );
}
