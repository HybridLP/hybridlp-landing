import React from 'react';
import { X, Instagram, Linkedin, Youtube, Languages } from 'lucide-react';
import logo from "../../../assets_/logo/logo.png"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4">
          {/* Logo and tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} className='w-[10rem]' alt="" />
            </div>
            <h2 className="text-3xl font-light text-[32px] inter-font">
              Your legal solutions<br />
              in one place.
            </h2>
          </div>

          {/* About Hybrid LP */}
        
          <div className='lg:ml-[10%]'>
            <h3 className="text-lg font-medium mb-4 inter-font">About Hybrid LP</h3>
            <p className="text-gray-300 text-sm leading-relaxed lato-regular">
              Learn about the vision behind the scene.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-medium mb-4 inter-font lato-regular">Features</h3>
            <ul className="space-y-2 text-gray-300 text-sm lato-regular text-[16px]" >
              <li>Client Briefing</li>
              <li>Voice Notes</li>
              <li>Legal Resources</li>
              <li>Calendars</li>
            </ul>
          </div>

          {/* Jobs and Contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4 inter-font">Jobs</h3>
              <p className="text-gray-300 text-sm lato-regular">
                Learn about open roles on our team.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 inter-font">Contact Us</h3>
              <p className="text-gray-300 text-sm lato-regular">
                Need anything? Get in touch so we can help.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Language selector and legal links */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
                  <Languages color="white" fontSize="30"/>
                </div>
                <span className="text-sm lato-regular">English</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <a href="#" className="transition-colors text-white lato-regular">Privacy Policy</a>
                <span className="lato-regular">Copyright © 2025 Hybrid LP</span>
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors">
                <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black text-xs font-bold">f</span>
                </div>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors">
                <X className="w-5 h-5" color='white' />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors">
                <Instagram className="w-5 h-5" color='white' />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors">
                <Linkedin className="w-5 h-5" color='white' />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded transition-colors">
                <Youtube className="w-5 h-5" color='white' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
