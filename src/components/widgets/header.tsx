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
  ];

  return (
    <header className="flex items-center justify-center fixed z-[9999] w-full ">
      <nav className="rounded-full  md:w-[70%] w-full bg-black/50 backdrop-blur-sm   text-white lato-regular flex items-center my-8 justify-between p-2 ">
        
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
                  href="#"
                >
                  <span className="text-white">Sign up/ Log in</span>
                </a>
              </div>
            </div>
         <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
    

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link
                className="bg-gradient-to-r from-[#FEFC6D] via-[#DA9932] to-[#BD762A] hover:opacity-90 shadow-2xl shadow-[#DA9932] text-white "
                to="#"
              >
                Sign up/ Log in
              </Link>
            </div>
          </div>
        )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
