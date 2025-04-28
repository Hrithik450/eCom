import { MoveRight } from "lucide-react";
import React from "react";

const OfferSection = () => {
  return (
    <section className="max-w-[120rem] mx-auto bg-gray-50 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 my-2 sm:my-8 md:my-10 pb-6 sm:pb-8 md:pb-10 text-center">
          Special Offers Just for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {/* Left Card: Sonos Product */}
          <div className="relative bg-white rounded-xl md:rounded-[2rem] shadow-md sm:shadow-lg overflow-hidden aspect-square md:aspect-auto">
            <img
              src="https://res.cloudinary.com/duozomapm/image/upload/v1745856246/Screenshot_2025-04-28_214827_snnvno.png"
              alt="Sonos Roam 2 Speaker"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Sonos Roam 2
              </h3>
              <p className="text-xs sm:text-sm md:text-md mt-1 text-gray-300">
                Ultra Portable Smart Speaker
              </p>
            </div>
          </div>

          {/* Right Card: Black Friday Sale */}
          <div className="bg-gray-900 rounded-xl md:rounded-[2rem] shadow-md sm:shadow-lg flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 relative overflow-hidden min-h-[300px] sm:min-h-[350px]">
            {/* Small pill badge */}
            <div className="px-3 py-1 sm:px-4 sm:py-1 bg-gray-700 text-white rounded-full text-xs sm:text-sm md:text-md font-semibold mb-4 sm:mb-6">
              Black Friday Only!
            </div>

            {/* Main heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white my-8 sm:my-12 md:my-17 leading-snug sm:leading-tight max-w-[90%] sm:max-w-[85%] md:max-w-[80%]">
              Black Friday Flash Sale – 50% Off Sitewide!
            </h2>

            {/* Button */}
            <a
              href="#"
              className="inline-flex items-center gap-1 sm:gap-2 bg-white text-black font-medium sm:font-semibold text-sm sm:text-md py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-gray-100 transition"
            >
              Check Offers
              <span className="w-4 h-4 sm:w-5 sm:h-5">
                <MoveRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
