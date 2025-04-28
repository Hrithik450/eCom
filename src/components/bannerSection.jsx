import React from "react";

const BannerSection = () => {
  return (
    <section className="max-w-[120rem] w-[95%] mx-auto rounded-xl md:rounded-[2rem] bg-gradient-to-r from-[#1b1c1e] to-[#2a2b2d] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-15 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-5 md:space-y-6">
      {/* Main Heading */}
      <h1 className="w-full max-w-full md:max-w-[90%] lg:max-w-[70%] xl:max-w-[70%] mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-snug sm:leading-tight">
        Transform your listening experience with Sonos
      </h1>

      {/* Subtext */}
      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg py-2 sm:py-3 md:py-4">
        Don't miss out on our latest deals and exclusive offers!
      </p>

      {/* Button */}
      <a
        href="#"
        className="inline-flex items-center justify-center bg-white text-black text-sm sm:text-base md:text-lg py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-gray-100 transition duration-300"
      >
        Shop Now
      </a>
    </section>
  );
};

export default BannerSection;
