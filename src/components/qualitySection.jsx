import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Speaker } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1745852866/Screenshot_2025-04-28_205157_vcbzf0.png",
    alt: "Arc Ultra Soundbar",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1745852866/Screenshot_2025-04-28_205157_vcbzf0.png",
    alt: "Sonos Speaker",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/duozomapm/image/upload/v1745852866/Screenshot_2025-04-28_205157_vcbzf0.png",
    alt: "Wireless Headphones",
  },
];

const QualitySection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="max-w-[120rem] w-[95%] mx-auto rounded-2xl md:rounded-[2rem] bg-black text-white p-4 sm:p-8 md:p-12 lg:p-15">
      <h2 className="max-w-full md:max-w-[75%] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold">
        Unmatched quality, smart features, and innovative technologies
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-10 text-center md:text-left pt-10 sm:pt-15 md:pt-20">
        <div className="md:w-1/2 sm:py-5">
          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4">
            <Speaker className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              Superior Sound Quality
            </h3>
          </div>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-full md:max-w-[80%] lg:max-w-[50%] py-6 sm:py-8 md:py-10">
            With high-resolution audio technology, Sonos delivers a rich,
            immersive sound experience that adapts to your room.
          </p>

          <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
            <button
              ref={prevRef}
              className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full text-black bg-gray-300 border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              ref={nextRef}
              className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full text-black bg-gray-300 border border-gray-300 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next products"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-6 sm:mt-8 md:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-lg overflow-hidden shadow-xl sm:shadow-2xl"
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              spaceBetween={0}
              slidesPerView={1}
              className="h-full"
            >
              {images?.map((image) => (
                <SwiperSlide key={image?.id}>
                  <img
                    src={image?.src}
                    alt={image?.alt}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
