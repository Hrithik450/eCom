import React, { useState } from "react";
import { navLinks } from "../../../../utils/constants";
import { ArrowLeft, ChevronRight, Menu } from "lucide-react";
import SearchAction from "../actions/searchAction";
import CartAction from "../actions/cartAction";
import Logo from "../logo";

const MobileMenu = ({ activeLink, setActiveLink }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuStack, setMenuStack] = useState([navLinks]);
  const currentMenu = menuStack[menuStack.length - 1];

  const handleItemClick = (item) => {
    if (item.subItems) {
      setMenuStack((prev) => [...prev, item.subItems]);
    } else {
      const rootItem = menuStack[0].find((root) =>
        JSON.stringify(root).includes(item.name)
      );
      setActiveLink(rootItem?.name || item.name);
      setMobileMenuOpen(false);
      setMenuStack([navLinks]);
    }
  };

  const handleBack = () => {
    if (menuStack.length > 1) {
      setMenuStack((prev) => prev.slice(0, -1));
    }
  };

  return (
    <>
      <div className="cursor-pointer md:hidden flex items-center space-x-4">
        <SearchAction />
        <CartAction />
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="bg-black text-gray-300 hover:text-white p-1 px-4 rounded-xl"
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
            <div className="flex items-center justify-between mb-6">
              {menuStack.length > 1 ? (
                <button
                  onClick={handleBack}
                  className="text-gray-700 p-2 hover:bg-gray-100 rounded-full flex items-center justify-between"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div
                  onClick={() => {
                    setActiveLink("Home");
                    setMobileMenuOpen(false);
                  }}
                >
                  <Logo />
                </div>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMenuStack([navLinks]);
                }}
                className="text-gray-700 p-2 hover:bg-gray-100 rounded-full"
              >
                ✕
              </button>
            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto">
              {currentMenu.map((item) => (
                <div
                  key={item.name}
                  className={`flex justify-between items-center px-4 py-3 text-lg cursor-pointer ${
                    activeLink === item.name
                      ? "text-black font-semibold"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                  onClick={() => handleItemClick(item)}
                >
                  <span>{item.name}</span>
                  {item.subItems && <ChevronRight className="w-5 h-5" />}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
