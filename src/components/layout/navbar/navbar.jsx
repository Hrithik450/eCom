import React, { useState } from "react";
import Logo from "./logo";
import DesktopMenu from "./menu/desktopMenu";
import MobileMenu from "./menu/mobileMenu";
import CartAction from "./actions/cartAction";
import SearchAction from "./actions/searchAction";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className="max-w-[120rem] mx-auto py-6 md:py-4">
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          <div className="flex-1 flex items-center">
            <Logo className="h-8 sm:h-10" />
          </div>

          <div className="flex-3 flex justify-center">
            <DesktopMenu
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          </div>

          <div className="flex-1 hidden lg:flex items-center justify-end space-x-3 xl:space-x-4">
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
