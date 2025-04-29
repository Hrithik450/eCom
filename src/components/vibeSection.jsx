import React from "react";

const VibeSection = () => {
  return (
    <div className="relative w-full py-30 sm:py-60 flex items-center justify-center bg-white overflow-hidden">
      {/* Background Words */}
      <div className="absolute z-0 text-center space-y-4 sm:space-y-6 md:space-y-8 font-black w-full px-4">
        <p className="text-gray-200 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
          Vibe
        </p>
        <p className="text-gray-300 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
          Groove
        </p>

        {/* Repeating Harmony with fading sides */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <span className="text-red-400 opacity-60 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black">
            Harmony
          </span>
          <span className="text-red-500 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black">
            Harmony
          </span>
          <span className="text-red-400 opacity-60 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-black">
            Harmony
          </span>
        </div>

        <p className="text-gray-300 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
          Amplify
        </p>
        <p className="text-gray-200 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
          Move
        </p>
      </div>

      {/* Foreground Image */}
      <div className="w-[100px] md:w-[150px] lg:w-[200px] translate-x-2/3 -translate-y-1/5 rounded-2xl rotate-[15deg] shadow-xl overflow-hidden">
        <img
          src="https://res.cloudinary.com/duozomapm/image/upload/v1745858727/Screenshot_2025-04-28_222943_afkh6c.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default VibeSection;
