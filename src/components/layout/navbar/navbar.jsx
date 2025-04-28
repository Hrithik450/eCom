import React, { useState } from "react";
import Logo from "./logo";
import DesktopMenu from "./menu/desktopMenu";
import MobileMenu from "./menu/mobileMenu";
import CartAction from "./actions/cartAction";
import SearchAction from "./actions/searchAction";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="max-w-[120rem] mx-auto py-4">
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <DesktopMenu activeLink={activeLink} setActiveLink={setActiveLink} />
          <div className="hidden md:flex items-center space-x-4">
            <SearchAction />
            <CartAction />
          </div>

          <MobileMenu activeLink={activeLink} setActiveLink={setActiveLink} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
