import { ChevronDown, ChevronRight } from "lucide-react";
import { navLinks } from "../../../../utils/constants";
import React, { useState } from "react";

const DropdownItem = ({ item, rootName, activeLink, setActiveLink }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group/item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href={item.path}
        onClick={() => setActiveLink(rootName)}
        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 whitespace-nowrap"
      >
        {item.name}
        {item.subItems && <ChevronRight className="ml-2 w-4 h-4" />}
      </a>

      {item.subItems && (
        <div
          className={`absolute left-full -top-2 w-56 bg-white shadow-lg ring-1 ring-gray-400 ring-opacity-5 z-50 ${
            hovered ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-all duration-200`}
        >
          <div className="py-2">
            {item.subItems.map((subItem) => (
              <DropdownItem
                key={subItem.name}
                item={subItem}
                rootName={rootName}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DesktopMenu = ({ activeLink, setActiveLink }) => {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      {navLinks.map((link) => (
        <div key={link.name} className="relative group">
          <a
            href={link.path}
            className={`text-lg hover:text-gray-900 transition-colors ${
              activeLink === link.name
                ? "text-black border-b-2 border-blue-600 font-semibold"
                : "text-gray-700 hover:text-gray-200 transition-colors"
            } px-0.5 py-2 duration-200 flex justify-baseline items-center`}
            onClick={() => {
              setActiveLink(link.name);
            }}
          >
            {link.name}
            {link.subItems && <ChevronDown className="ml-1 w-4 h-4" />}
          </a>

          {link.subItems && (
            <div className="absolute left-0 top-full w-56 bg-white shadow-lg ring-1 ring-gray-400 ring-opacity-5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-r border-gray-400">
              <div className="py-2">
                {link.subItems.map((item) => (
                  <DropdownItem
                    key={item.name}
                    item={item}
                    rootName={link.name}
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopMenu;
