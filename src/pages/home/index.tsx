import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/widgets/header";
import { Footer } from "./components/footer";
import HassleFreeCTA from "./components/hasslefcta";
import LegalChatbot from "../../components/widgets/chatbot";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when navigating to home with #section
    if (location.hash.includes("#")) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location]);

  return (
    <div className="flex flex-col bg-[#000A1D] w-screen overflow-x-hidden">
      <Header />
      <Outlet />
      <HassleFreeCTA />
      <Footer />
      <LegalChatbot />
    </div>
  );
}
