import React from "react";
import { MoveRight } from "lucide-react";

// const BottomLeft = () => {
//   return (
//     <div className="absolute bottom-4 left-4 md:bottom-6 md:left-4 lg:bottom-8 lg:left-8 z-10 w-[90%] md:w-auto md:max-w-sm p-4 md:p-6 text-white">
//       <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-10 text-gray-300 md:text-gray-400">
//         Revolutionize your space with high-fidelity sound and smart technology
//         that adapts to your lifestyle.
//       </p>

//       <button className="bg-white text-black px-4 py-3 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-medium hover:bg-opacity-90 transition text-sm sm:text-base cursor-pointer">
//         Explore All Products
//       </button>
//     </div>
//   );
// };

// const BottomRight = () => {
//   return (
//     <div className="hidden sm:block absolute bottom-4 right-4 md:bottom-8 md:right-6 lg:bottom-8 lg:right-8 z-10 bg-white bg-opacity-90 px-4 py-4 sm:py-5 md:py-4 rounded-2xl md:rounded-3xl w-[45%] sm:w-[40%] md:w-auto md:max-w-[250px]">
//       <div className="relative">
//         <img
//           className="rounded-t-lg w-full"
//           src="https://res.cloudinary.com/duozomapm/image/upload/v1745780990/Screenshot_2025-04-28_005410_fu0pos.png"
//           alt="Product"
//         />
//       </div>

//       <div className="flex justify-between items-center px-3 sm:px-4 pt-3 sm:pt-4">
//         <h5 className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg tracking-tight mb-0 sm:mb-2 pr-2">
//           See the Product Details
//         </h5>
//         <a
//           href="#"
//           className="inline-flex items-center font-medium text-blue-600 hover:underline"
//         >
//           <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </a>
//       </div>
//     </div>
//   );
// };

// const HeroSection = () => {
//   return (
//     <section className="relative w-19/20 mx-auto h-screen md:h-[90vh] rounded-[2rem] overflow-hidden">
//       {/* Base Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://res.cloudinary.com/duozomapm/image/upload/v1745780095/Screenshot_2025-04-28_003904_hyctzt.png"
//           alt="sonos"
//           className="w-full h-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//       </div>

//       <BottomLeft />
//       <BottomRight />
//     </section>
//   );
// };

const BottomLeft = () => {
  return (
    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10 z-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] p-3 sm:p-4 md:p-5 lg:p-6 text-white">
      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-gray-300 md:text-gray-400">
        Revolutionize your space with high-fidelity sound and smart technology
        that adapts to your lifestyle.
      </p>

      <button className="bg-white text-black px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-full font-medium hover:bg-opacity-90 transition text-xs xs:text-sm sm:text-base md:text-lg cursor-pointer w-full sm:w-auto">
        Explore All Products
      </button>
    </div>
  );
};

const BottomRight = () => {
  return (
    <div className="hidden absolute bottom-4 right-4 sm:block sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 z-10 bg-white bg-opacity-90 px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-4 rounded-xl sm:rounded-2xl md:rounded-3xl xs:w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%] xl:w-[20%]">
      <div className="relative">
        <img
          className="rounded-t-lg w-full"
          src="https://res.cloudinary.com/duozomapm/image/upload/v1745780990/Screenshot_2025-04-28_005410_fu0pos.png"
          alt="Product"
        />
      </div>

      <div className="flex justify-between items-center px-2 sm:px-3 md:px-2 pt-2 sm:pt-3 md:pt-4">
        <h5 className="text-gray-900 font-semibold text-xs xs:text-sm sm:text-base md:text-md tracking-tight mb-0 sm:mb-1 md:mb-2 sm:pr-2">
          See the Product Details
        </h5>
        <a
          href="#"
          className="inline-flex items-center font-medium text-blue-600 hover:underline"
          aria-label="View product details"
        >
          <MoveRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative max-w-[120rem]  mx-auto w-[95%] sm:w-[90%] rounded-2xl sm:rounded-3xl overflow-hidden">
      {/* Base Image */}
      <div>
        <img
          src="https://res.cloudinary.com/duozomapm/image/upload/v1745780095/Screenshot_2025-04-28_003904_hyctzt.png"
          alt="sonos"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <BottomLeft />
      <BottomRight />
    </section>
  );
};

export default HeroSection;
