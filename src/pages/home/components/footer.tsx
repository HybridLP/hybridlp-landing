import React from "react";
import { Languages } from "lucide-react";
import logo from "../../../assets_/logo/logo.png";
import { NavLink } from "react-router-dom";

export const Footer: React.FC = () => {
  const date = new Date();
  return (
    <footer className="bg-black text-white">
      {/* Main footer content */}
      <div className="mx-auto px-[5%] md:px-8 lg:px-16 xl:px-30 py-8 md:py-12 lg:py-16">
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden space-y-8">
          {/* Logo and tagline - Mobile */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img src={logo} className="w-32 md:w-40" alt="Hybrid LP" />
            </div>
            <h2 className="font-semibold text-xl leading-tight inter-font">
              Your legal solutions
              <br />
              in one place.
            </h2>
          </div>

          {/* Navigation Links - Mobile Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* About Hybrid LP */}
            <div>
              <h3 className="text-base font-medium mb-3 inter-font">
                About Hybrid LP
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed lato-regular">
                Learn about the vision behind the scene.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-base font-medium mb-3 inter-font">
                Features
              </h3>
              <ul className="space-y-1 text-gray-300 text-sm lato-regular">
                <li>Client Briefing</li>
                <li>Voice Notes</li>
                <li>Legal Resources</li>
                <li>Calendars</li>
              </ul>
            </div>

            {/* Jobs */}
            <div>
              <h3 className="text-base font-medium mb-3 inter-font">Jobs</h3>
              <p className="text-gray-300 text-sm lato-regular">
                Learn about open roles on our team.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-base font-medium mb-3 inter-font">
                Contact Us
              </h3>
              <p className="text-gray-300 text-sm lato-regular">
                Need anything? Get in touch so we can help.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex items-start justify-between gap-8">
          {/* Logo and tagline - Desktop */}
          <div className="flex-shrink-0 w-full md:w-[30%] lg:w-[35%]">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} className="w-32 lg:w-40" alt="Hybrid LP" />
            </div>
            <h2 className="font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight inter-font">
              Your legal solutions
              <br />
              in one place.
            </h2>
          </div>

          {/* About Hybrid LP - Desktop */}
          <div className="flex-shrink-0">
            <h3 className="text-base lg:text-lg font-medium mb-4 inter-font">
              About Hybrid LP
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed lato-regular max-w-[200px]">
              Learn about the vision behind the scene.
            </p>
          </div>

          {/* Features - Desktop */}
          <div className="flex-shrink-0">
            <h3 className="text-base lg:text-lg font-medium mb-4 inter-font">
              Features
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm lato-regular">
              <li>Client Briefing</li>
              <li>Voice Notes</li>
              <li>Legal Resources</li>
              <li>Calendars</li>
            </ul>
          </div>

          {/* Jobs - Desktop */}
          <div className="flex-shrink-0">
            <h3 className="text-base lg:text-lg font-medium mb-4 inter-font">
              Jobs
            </h3>
            <p className="text-gray-300 text-sm lato-regular max-w-[180px]">
              Learn about open roles on our team.
            </p>
          </div>

          {/* Contact Us - Desktop */}
          <div className="flex-shrink-0">
            <h3 className="text-base lg:text-lg font-medium mb-4 inter-font">
              Contact Us
            </h3>
            <p className="text-gray-300 text-sm lato-regular max-w-[180px]">
              Need anything? Get in touch so we can help.
            </p>
            <NavLink
              to="probono"
              className="text-gray-300 text-sm lato-regular max-w-[180px]"
            >
              Apply for pro bono services.
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="px-4 md:px-8 lg:px-16 xl:px-30 py-4 md:py-6">
          {/* Mobile Layout - Stacked */}
          <div className="block md:hidden space-y-4">
            {/* Language selector - Mobile */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
                  <Languages className="w-3 h-3" color="white" />
                </div>
                <span className="text-sm lato-regular">English</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Social media icons - Mobile */}
            <div className="flex justify-center items-center gap-4">
              <a
                href="https://x.com/hybridlp_"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/hybridlp_"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="mailto:hybridlawpractice@gmail.com"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.39l-9 6.58-9-6.58V21H1.5C.65 21 0 20.35 0 19.5v-15c0-1.17 1.32-1.88 2.25-1.17L12 10.03l9.75-7.2c.93-.71 2.25 0 2.25 1.17z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@hybridlp"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
                aria-label="Tiktok"
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
            </div>

            {/* Legal links - Mobile */}
            <div className="flex flex-col items-center gap-2 text-sm text-gray-300">
              <div className="flex gap-4">
                <NavLink
                  to="/terms-of-use"
                  className="text-white lato-regular hover:text-gray-300 transition-colors"
                >
                  Terms of Use
                </NavLink>
                <NavLink
                  to="/privacy-policy"
                  className="text-white lato-regular hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </NavLink>
              </div>
              <span className="lato-regular text-center">
                Copyright © {date.getFullYear()} Hybrid LP
              </span>
            </div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:flex justify-between items-center gap-4">
            {/* Language selector and legal links - Desktop */}
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
                  <Languages className="w-3 h-3" color="white" />
                </div>
                <span className="text-sm lato-regular">English</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-4 lg:gap-6 text-sm text-gray-300">
                <div className="flex gap-4 lg:gap-6">
                  <NavLink
                    to="/remuneration"
                    className="text-white lato-regular hover:text-gray-300 transition-colors"
                  >
                    Remuneration
                  </NavLink>
                  <NavLink
                    to="/terms-of-use"
                    className="text-white lato-regular hover:text-gray-300 transition-colors"
                  >
                    Terms of Use
                  </NavLink>
                  <NavLink
                    to="/privacy-policy"
                    className="text-white lato-regular hover:text-gray-300 transition-colors"
                  >
                    Privacy Policy
                  </NavLink>
                </div>
                <span className="lato-regular">
                  Copyright © {date.getFullYear()} Hybrid LP
                </span>
              </div>
            </div>

            {/* Social media icons - Desktop */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/hybridlp_"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/hybridlp_"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="mailto:hybridlawpractice@gmail.com"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.39l-9 6.58-9-6.58V21H1.5C.65 21 0 20.35 0 19.5v-15c0-1.17 1.32-1.88 2.25-1.17L12 10.03l9.75-7.2c.93-.71 2.25 0 2.25 1.17z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@hybridlp"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors"
                aria-label="Tiktok"
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
