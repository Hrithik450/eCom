import { MoveRight } from "lucide-react";
import { navLinks, socialIcons } from "../utils/constants";
import React from "react";

const ExperienceSection = () => {
  return (
    <section className="max-w-[120rem] w-[95%] mx-auto rounded-2xl md:rounded-[2rem] my-3 md:my-5 bg-[#0c0c0c] text-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10">
      {/* Left Section */}
      <div className="w-full md:flex-1 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-13">
        {/* Navigation */}
        <nav className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:space-x-2 text-xs sm:text-base md:text-lg font-light">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug sm:leading-tight">
          Ready to Experience the <br /> Future of Sound?
        </h1>

        {/* Contact Info */}
        <div className="w-full max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base text-gray-400">
          <div>
            <h3 className="uppercase text-xs mb-1 text-gray-500">Phone</h3>
            <p>+1 800 680 2345</p>
          </div>
          <div>
            <h3 className="uppercase text-xs mb-1 text-gray-500">E-Mail</h3>
            <p>support@sonos.com</p>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="uppercase text-xs mb-1 text-gray-500">Address</h3>
            <p>
              614 Chapala Street,
              <br /> Santa Barbara, CA 93101, USA
            </p>
          </div>
        </div>

        {/* Subscription */}
        <div className="w-full max-w-full flex flex-col lg:flex-row gap-4 sm:gap-6">
          <p className="flex-1 text-white text-base sm:text-lg">
            Sign up for the latest updates and exclusive offers
          </p>

          <form className="flex-1 w-full">
            <input
              type="email"
              placeholder="Email address"
              className="block bg-transparent border-b border-gray-600 focus:outline-none text-sm sm:text-base w-full py-2"
            />

            <button
              type="submit"
              className="cursor-pointer border border-gray-500 mt-3 sm:mt-4 md:mt-5 px-4 sm:px-5 md:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-white hover:text-black transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4">
          {socialIcons?.map((icon) => {
            const IconComponent = icon.icon;
            return (
              <a
                href={icon.link}
                key={icon.name}
                className="group text-gray-400 hover:text-black border border-gray-500 rounded-full p-1 sm:p-2 hover:bg-white transition-colors duration-300"
                aria-label={icon.name}
              >
                <IconComponent
                  size={16}
                  sm:size={20}
                  className="text-inherit"
                />
              </a>
            );
          })}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[40%] relative mt-4 sm:mt-6 md:mt-0">
        <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Sonos Ace
          </h3>

          <p className="text-xs sm:text-sm md:text-base mt-1 text-gray-300">
            Premium Headphone
          </p>
        </div>

        <img
          src="https://res.cloudinary.com/duozomapm/image/upload/v1745858727/Screenshot_2025-04-28_222943_afkh6c.png"
          alt="Sonos Ace"
          className="rounded-xl md:rounded-2xl w-full h-auto object-cover aspect-square md:aspect-auto"
        />

        {/* Small Button on Image */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6">
          <a
            href="#"
            className="bg-white text-black px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg md:rounded-xl text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-2 hover:bg-gray-100 transition"
          >
            See Product Specs
            <span>
              <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
