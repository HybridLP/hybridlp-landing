import { Outlet } from "react-router-dom";
import Header from "../../components/widgets/header";
import { Footer } from "./components/footer";
import HassleFreeCTA from "./components/hasslefcta";
import LegalChatbot from "../../components/widgets/chatbot";

export default function Home() {
  return (
    <div className="flex flex-col bg-black w-screen overflow-x-hidden">
      <Header />
      <Outlet />
      <HassleFreeCTA />
      <Footer />
      <LegalChatbot />
    </div>
  );
}
