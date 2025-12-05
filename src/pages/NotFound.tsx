import { Link } from "react-router-dom";
import { Home, Search,  FileQuestion } from "lucide-react";
import Header from "../components/widgets/header";
import { Footer } from "./home/components/footer";
import bg from "../assets_/bg.jpg";

export default () => {
  return (
    <div className="flex flex-col bg-black w-screen min-h-screen overflow-x-hidden">
      <Header />

      {/* 404 Hero Section */}
      <section
        className="flex h-screen px-[5%] lg:px-30  pb-[5%] items-center justify-center bg-blend-darken bg-cover pt-[20%]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
          {/* Animated 404 Icon */}
          <div className="relative">
            <FileQuestion
              className="w-32 h-32 text-[#DA9932] animate-bounce"
              strokeWidth={1.5}
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-[#C8A702] via-[#A97D00] to-[#824E00] opacity-20 blur-xl rounded-full animate-pulse"></div>
          </div>

          {/* Error Code */}
          <h1 className="text-white text-8xl md:text-9xl inter-font font-bold bg-gradient-to-r from-[#C8A702] via-[#DA9932] to-[#824E00] bg-clip-text text-transparent">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-white text-3xl md:text-5xl inter-font font-bold mt-4">
            Page Not Found
          </h2>

          <p className="text-gray-300 text-lg md:text-xl lato-regular max-w-2xl">
            The page you're looking for seems to have wandered off into the
            legal cosmos. Don't worry, we'll help you find your way back.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-8 w-full md:w-auto">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#CAA500] to-[#825900] text-white px-8 py-4 text-lg rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#DA9932]/30 lato-regular"
            >
              <Home className="w-5 h-5" />
              <span className="text-white">Back to Home</span>
            </Link>

            <Link
              to="/#about-us"
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-[#DA9932] text-white px-8 py-4 text-lg rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 lato-regular"
            >
              <Search className="w-5 h-5" />
              <span className="text-white">Explore Services</span>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-700 w-full">
            <p className="text-gray-400 text-sm mb-4 lato-regular">
              Looking for something specific? Try these:
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-bounce {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
