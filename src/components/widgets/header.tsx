import { useState } from "react";
import logo from "../../assets_/logo/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "#about-us" },
    { name: "Briefs", href: "#briefs" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "Judgements", href: "/judgements" },
  ];

  return (
    <header className="flex items-center justify-center fixed z-[100] w-screen ">
      <nav className="md:rounded-full w-screen  md:w-[70%] bg-black/50 backdrop-blur-sm   text-white lato-regular flex items-center md:my-8 justify-between p-2 ">
        <img src={logo} alt="Hybridlp" className="w-[10rem]" />

        <div className="hidden md:flex items-center gap-4 mr-4 lato-regular">
          <div className="flex items-baseline space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 lato-regular"
              >
                <span className="text-white">{item.name}</span>
              </a>
            ))}
          </div>
          <div className="hidden md:flex">
            <a
              className="rounded-lg px-4 py-2 text-md  bg-gradient-to-br from-[#C8A702] via-[#A97D00] to-[#824E00] hover:opacity-90 shadow-[2px] shadow-[#DA9932] text-white "
              href="https://app.hybridlp.com/login"
            >
              <span className="text-white">Sign up/ Log in</span>
            </a>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <img src={logo} alt="Hybridlp" className="w-[8rem]" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="flex-1 flex flex-col justify-center px-6 space-y-8">
              {navItems.map((item, index) => {
                if (item.name === "Blogs") {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-white hover:text-[#DA9932] text-2xl font-medium transition-all duration-300 transform hover:translate-x-2 lato-regular opacity-0 animate-slide-in"
                      onClick={() => setIsOpen(false)}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      {item.name}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-[#DA9932] text-2xl font-medium transition-all duration-300 transform hover:translate-x-2 lato-regular opacity-0 animate-slide-in"
                    onClick={() => setIsOpen(false)}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {item.name}
                  </a>
                );
              })}

              {/* Mobile CTA Button */}
              <div
                className="pt-8 opacity-0 animate-slide-in"
                style={{
                  animationDelay: "400ms",
                  animationFillMode: "forwards",
                }}
              >
                <Link
                  className="block w-full text-center rounded-lg px-6 py-4 text-lg font-medium bg-gradient-to-br from-[#C8A702] via-[#A97D00] to-[#824E00] hover:opacity-90 shadow-lg shadow-[#DA9932]/30 text-white transition-all duration-300 transform hover:scale-105 lato-regular"
                  to="https://hybridlp.com/login"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up / Log in
                </Link>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-6 border-t border-gray-700">
              <p className="text-gray-400 text-center text-sm lato-regular">
                © 2025 HybridLP. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slideInLeft 0.5s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
