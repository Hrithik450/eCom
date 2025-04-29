import React from "react";

const HeadphoneSection = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Text Layer */}
      <div className="flex items-center justify-center px-4 sm:px-6 text-center py-20 sm:py-32 md:py-50 lg:py-60">
        <h1 className="xl:max-w-[85%] text-2xl xs:text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-snug sm:leading-tight text-black/80">
          From pioneering wireless audio to <br className="hidden xs:block" />
          designing <span className="text-black">state-of-the-art</span>{" "}
          <span className="text-gray-300">speakers,</span>{" "}
          <br className="hidden sm:block" />
          <span className="italic font-medium text-black">Sonos'</span>{" "}
          <span className="text-gray-300">commitment to innovation</span>{" "}
          <br className="hidden md:block" />
          that <span className="text-gray-300">continually inspires.</span>
        </h1>
      </div>

      {/* Image Layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <img
          src="https://res.cloudinary.com/duozomapm/image/upload/v1745948599/Screenshot_2025-04-29_232648-removebg-preview_glxt6x.png"
          alt="Sonos Headphones"
          className="h-[300px] xs:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HeadphoneSection;
