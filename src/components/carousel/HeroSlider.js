import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

//internal import
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";

const HeroSlider = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue, showingUrl, showingImage } =
    useUtilsFunction();

  const sliderData = [
    {
      id: 1,
      title: showingTranslateValue(
        storeCustomizationSetting?.slider?.first_title
      ),
      info: showingTranslateValue(
        storeCustomizationSetting?.slider?.first_description
      ),
      buttonName: showingTranslateValue(
        storeCustomizationSetting?.slider?.first_button
      ),
      url: showingUrl(storeCustomizationSetting?.slider?.first_link),
      image: "/slider/slider-1-1.webp",
    },
    {
      id: 2,
      title: showingTranslateValue(
        storeCustomizationSetting?.slider?.second_title
      ),
      info: showingTranslateValue(
        storeCustomizationSetting?.slider?.second_description
      ),
      buttonName: showingTranslateValue(
        storeCustomizationSetting?.slider?.second_button
      ),
      url: showingUrl(storeCustomizationSetting?.slider?.second_link),
      image: "/slider/slider-1-2.webp",
    },
    {
      id: 3,
      title: showingTranslateValue(
        storeCustomizationSetting?.slider?.third_title
      ),
      info: showingTranslateValue(
        storeCustomizationSetting?.slider?.third_description
      ),
      buttonName: showingTranslateValue(
        storeCustomizationSetting?.slider?.third_button
      ),
      url: showingUrl(storeCustomizationSetting?.slider?.third_link),
      image: "/slider/slide-02.webp",
    },
    {
      id: 4,
      title: showingTranslateValue(
        storeCustomizationSetting?.slider?.four_title
      ),
      info: showingTranslateValue(
        storeCustomizationSetting?.slider?.four_description
      ),
      buttonName: showingTranslateValue(
        storeCustomizationSetting?.slider?.four_button
      ),
      url: showingUrl(storeCustomizationSetting?.slider?.four_link),
      image: "/slider/slide-01.jpg",
    },
    {
      id: 5,
      title: showingTranslateValue(
        storeCustomizationSetting?.slider?.five_title
      ),
      info: showingTranslateValue(
        storeCustomizationSetting?.slider?.five_description
      ),
      buttonName: showingTranslateValue(
        storeCustomizationSetting?.slider?.five_button
      ),
      url: showingUrl(storeCustomizationSetting?.slider?.five_link),
      image: "/slider/slider1.webp",
    },
  ];

  return (
    <>
      <div className="relative hero-slider-container">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          pagination={{
            clickable: true,
            el: ".hero-pagination",
          }}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="hero-swiper"
        >
          {sliderData?.map((item, i) => (
            <SwiperSlide key={i + 1}>
              <div className="relative h-full min-h-[400px] md:min-h-[500px] lg:min-h-[550px] rounded-lg overflow-hidden">
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title || "Slider image"}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-start z-10">
                  <div className="w-[65%] md:max-w-xl md:w-auto pl-4 pr-2 md:ml-16 lg:ml-24 md:p-6">
                    <p className="text-sm md:text-base lg:text-lg text-gray-800 mb-2 md:mb-3 font-semibold">
                      {item.info}
                    </p>
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                      {item.title}
                    </h1>
                    <Link
                      href={item.url || "/search"}
                      className="inline-block px-6 py-2 md:px-8 md:py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm md:text-base font-semibold rounded-full transition-colors duration-200 shadow-lg"
                    >
                      {item.buttonName || "Shop now"}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows - Hidden on mobile */}
        <button className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 hidden md:flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 cursor-pointer">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 hidden md:flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 cursor-pointer">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="hero-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2"></div>
      </div>

      <style jsx global>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 5px;
          background: #862d27;
        }
      `}</style>
    </>
  );
};

export default HeroSlider;
