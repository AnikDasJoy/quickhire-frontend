import React from 'react';
import QuickHire from '../QuickHire/QuickHire'; // your logo component
import { 
  FaFacebookF, 
  FaInstagram, 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f1117] text-gray-300">
      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-8 md:gap-y-0">
          
          {/* Logo + tagline column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <QuickHire /> {/* assuming this renders the purple circle logo */}
              <span className="text-white font-semibold text-2xl tracking-tight">QuickHire</span>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-[280px]">
              Great platform for the job seeker that passionate about startups. 
              Find your dream job easier.
            </p>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h6 className="text-white font-medium text-base tracking-wide">About</h6>
            <ul className="space-y-3 text-[15px] text-gray-400">
              <li><a href="#" className="hover:text-gray-200 transition-colors">Companies</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Advice</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h6 className="text-white font-medium text-base tracking-wide">Resources</h6>
            <ul className="space-y-3 text-[15px] text-gray-400">
              <li><a href="#" className="hover:text-gray-200 transition-colors">Help Docs</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Guide</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Updates</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors">Contact Us</a></li>
              
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 md:space-y-5 -ml-6 md:-ml-8 lg:-ml-10 justify-self-start">
  <h6 className="text-white font-medium text-base tracking-wide">Get job notifications</h6>
  <p className="text-gray-400 text-[15px] leading-relaxed">
    The latest job news, articles, sent to your inbox weekly.
  </p>
  <form className="flex w-full max-w-sm">
    <input
      type="email"
      placeholder="Email Address"
      className="flex-1 px-5 py-3.5 bg-white border border-gray-700 rounded-l-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 text-[15px]"
    />
    <button
      type="submit"
      className="px-7 py-3.5 bg-blue-600 hover:bg-purple-700 text-white font-medium rounded-r-xl transition-colors text-[15px] whitespace-nowrap"
    >
      Subscribe
    </button>
  </form>
</div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/70">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            2021 © QuickHire. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
  <a 
    href="#" 
    className="text-gray-500 hover:text-gray-300 transition-colors text-xl"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>
  <a 
    href="#" 
    className="text-gray-500 hover:text-gray-300 transition-colors text-xl"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
  <a 
    href="#" 
    className="text-gray-500 hover:text-gray-300 transition-colors text-xl"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
  <a 
    href="#" 
    className="text-gray-500 hover:text-gray-300 transition-colors text-xl"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
  <a 
    href="#" 
    className="text-gray-500 hover:text-gray-300 transition-colors text-xl"
    aria-label="Twitter / X"
  >
    <FaTwitter />
  </a>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;