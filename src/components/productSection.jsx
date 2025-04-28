import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    name: "Sonos Ace",
    price: "₹449",
    description: "Headphone",
    imageUrl:
      "https://res.cloudinary.com/duozomapm/image/upload/v1745815231/Screenshot_2025-04-28_102340_yajelv.png",
    badge: {
      name: "!New",
      bgColor: "bg-green-500",
    },
    colorOptions: [
      {
        id: 1,
        value: "black",
        name: "Black",
        bgClass: "bg-black",
        borderClass: "border-black",
      },
      {
        id: 2,
        value: "white",
        name: "White",
        bgClass: "bg-white",
        borderClass: "border-gray-300",
      },
      ,
    ],
  },
  {
    name: "Beam (Gen 2)",
    price: "₹449",
    description: "Premium Smart Soundbar",
    imageUrl:
      "https://res.cloudinary.com/duozomapm/image/upload/v1745815231/Screenshot_2025-04-28_102340_yajelv.png",
    colorOptions: [
      {
        id: 1,
        value: "black",
        name: "Black",
        bgClass: "bg-black",
        borderClass: "border-black",
      },
      {
        id: 2,
        value: "white",
        name: "White",
        bgClass: "bg-white",
        borderClass: "border-gray-300",
      },
      ,
    ],
  },
  {
    name: "Roam 2 Charging Set",
    price: "₹449",
    description: "Roam 2 + Wireless Charger",
    imageUrl:
      "https://res.cloudinary.com/duozomapm/image/upload/v1745815231/Screenshot_2025-04-28_102340_yajelv.png",
    badge: {
      name: "Best Seller",
      bgColor: "bg-black",
    },
    colorOptions: [
      {
        id: 1,
        value: "black",
        name: "Black",
        bgClass: "bg-black",
        borderClass: "border-black",
      },
      {
        id: 2,
        value: "white",
        name: "White",
        bgClass: "bg-white",
        borderClass: "border-gray-300",
      },
      ,
    ],
  },
  {
    name: "Move 2",
    price: "₹449",
    description: "Portable Smart Speaker",
    imageUrl:
      "https://res.cloudinary.com/duozomapm/image/upload/v1745815231/Screenshot_2025-04-28_102340_yajelv.png",
    colorOptions: [
      {
        id: 1,
        value: "black",
        name: "Black",
        bgClass: "bg-black",
        borderClass: "border-black",
      },
      {
        id: 2,
        value: "white",
        name: "White",
        bgClass: "bg-white",
        borderClass: "border-gray-300",
      },
      ,
    ],
  },
  {
    name: "Era 100",
    price: "₹449",
    description: "Smart Speaker",
    imageUrl:
      "https://res.cloudinary.com/duozomapm/image/upload/v1745815231/Screenshot_2025-04-28_102340_yajelv.png",
    colorOptions: [
      {
        id: 1,
        value: "black",
        name: "Black",
        bgClass: "bg-black",
        borderClass: "border-black",
      },
      {
        id: 2,
        value: "white",
        name: "White",
        bgClass: "bg-white",
        borderClass: "border-gray-300",
      },
      ,
    ],
  },
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <div>
      <div
        className="relative bg-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {product?.badge && (
          <div
            className={`absolute top-3 left-3 text-white ${product?.badge?.bgColor} text-md font-semibold py-1 px-2 rounded z-10`}
          >
            {product?.badge?.name}
          </div>
        )}

        <div className="relative aspect-w-1 aspect-h-1">
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className="object-cover w-full h-full"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-200" />
          )}
        </div>

        {isHovered && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="flex items-center gap-0.5 cursor-pointer bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
              Shop Now
              <span className="ml-1 text-sm">
                <MoveRight />
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 py-1">
            {product?.name}
          </h3>

          <p className="text-sm text-gray-600">{product?.description}</p>
        </div>

        <div className="mt-2">
          <span className="text-xl font-bold text-gray-900">
            {product?.price}
          </span>

          <div className="flex items-center space-x-2 py-1">
            {product?.colorOptions.map((color) => (
              <div
                key={color.id}
                className={`w-5 h-5 rounded-full ${
                  color.bgClass
                } border-2 cursor-pointer transition-on-all ${
                  selectedColor === color.value
                    ? "ring-1 ring-blue-500"
                    : `border-${
                        color.value === "white" ? "gray-300" : "transparent"
                      }`
                }`}
                onClick={() => setSelectedColor(color.value)}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="max-w-[120rem] mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="mx-auto px-2 sm:px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          <div className="w-full md:max-w-[60%]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Designed for seamless sound and advanced technology.
            </h1>
          </div>

          <div className="flex space-x-3 self-end md:self-auto">
            <button
              ref={prevRef}
              className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              ref={nextRef}
              className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto px-2 sm:px-0">
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            spaceBetween={16}
            slidesPerView={"auto"}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="!overflow-visible"
          >
            {products?.map((product, index) => (
              <SwiperSlide
                key={index}
                className="!w-[280px] sm:!w-[300px] md:!w-[350px]"
              >
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <button className="cursor-pointer bg-gray-900 text-white text-sm sm:text-base font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
