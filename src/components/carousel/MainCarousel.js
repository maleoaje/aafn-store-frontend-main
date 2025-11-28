import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//internal import

import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";

const MainCarousel = () => {
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
      image:
        showingImage(storeCustomizationSetting?.slider?.first_img) ||
        "/slider/slider-1.jpg",
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
      image:
        showingImage(storeCustomizationSetting?.slider?.second_img) ||
        "/slider/slider-2.jpg",
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
      image:
        showingImage(storeCustomizationSetting?.slider?.third_img) ||
        "/slider/slider-3.jpg",
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
      image:
        showingImage(storeCustomizationSetting?.slider?.four_img) ||
        "/slider/slider-1.jpg",
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
      image:
        showingImage(storeCustomizationSetting?.slider?.five_img) ||
        "/slider/slider-2.jpg",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={600}
        loop={true}
        pagination={
          (storeCustomizationSetting?.slider?.bottom_dots ||
            storeCustomizationSetting?.slider?.both_slider) && {
            clickable: true,
            dynamicBullets: true,
          }
        }
        navigation={
          (storeCustomizationSetting?.slider?.left_right_arrow ||
            storeCustomizationSetting?.slider?.both_slider) && {
            clickable: true,
          }
        }
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]"
      >
        {sliderData?.map((item, i) => (
          <SwiperSlide
            className="h-full relative overflow-hidden bg-white"
            key={i + 1}
          >
            <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-8 py-4 lg:py-0">
              {/* Left side - Image */}
              <div className="w-full md:w-3/5 h-96 md:h-full relative flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    fill
                    src={item.image || "/slider/slider-1.jpg"}
                    alt={item.title}
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    quality={90}
                    priority
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="w-full md:w-2/5 flex flex-col justify-center items-start md:pl-4 lg:pl-6 mt-6 md:mt-0">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  {item.info}
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  {item.title}
                </h1>
                <Link
                  href={item.url}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-6 py-2.5 lg:px-8 lg:py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide"
                >
                  {item.buttonName}
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainCarousel;
