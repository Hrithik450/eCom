import { navLinks } from "../../../../utils/constants";
import React from "react";

const DesktopMenu = ({ activeLink, setActiveLink }) => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.path}
          className={`text-gray-800 hover:text-gray-900 transition-colors ${
            activeLink === link.name
              ? "text-black border-b-2 border-blue-600 font-semibold"
              : "text-gray-700 hover:text-gray-200 transition-colors"
          } px-1 py-2 duration-200`}
          onClick={() => {
            setActiveLink(link.name);
          }}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default DesktopMenu;
