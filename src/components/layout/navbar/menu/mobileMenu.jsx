import React, { useState } from "react";
import { navLinks } from "../../../../utils/constants";
import { Menu } from "lucide-react";
import SearchAction from "../actions/searchAction";
import CartAction from "../actions/cartAction";
import Logo from "../logo";

const MobileMenu = ({ activeLink, setActiveLink }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer md:hidden flex items-center space-x-4">
        <SearchAction />
        <CartAction />
        <button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className=" bg-black text-gray-300 hover:text-white p-1 px-4 rounded-xl"
          aria-label="Toggle Mobile Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="relative w-full max-w-sm h-full bg-white shadow-xl">
          <div className="flex flex-col h-full p-6">
            {/* Top Layer */}
            <div className="flex items-center justify-between mb-8">
              <div
                onClick={() => {
                  setActiveLink("Home");
                  setMobileMenuOpen(false);
                }}
              >
                <Logo />
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 p-2 hover:bg-gray-100 rounded-full"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigations Layer */}
            <nav className="flex-1 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`block px-4 py-3 text-xl rounded-lg ${
                    activeLink === link.name
                      ? "bg-gray-100 text-gray-900 font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  } transition-colors duration-200`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
