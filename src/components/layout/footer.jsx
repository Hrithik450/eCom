import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[120rem] mx-auto w-full px-4 sm:px-6 py-3 sm:pb-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-xs sm:text-sm text-gray-600">
      {/* Left Links */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
        <a
          href="#"
          className="hover:text-black transition-colors duration-300 whitespace-nowrap"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="hover:text-black transition-colors duration-300 whitespace-nowrap"
        >
          Terms and Conditions
        </a>
      </div>

      {/* Right Text */}
      <div className="text-center sm:text-right whitespace-nowrap">
        All rights reserved © Hruthik 2025
      </div>
    </footer>
  );
};

export default Footer;
