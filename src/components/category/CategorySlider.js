import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategorySlider = () => {
  const categories = [
    {
      id: 1,
      name: "Dairy",
      description: "Premium dairy products for every culinary need",
      image: "/category-promo/dairy.png",
      url: "/search?category=dairy",
    },
    {
      id: 2,
      name: "Spices",
      description: "Spice up your dishes, explore our world of flavors",
      image: "/category-promo/spices.png",
      url: "/search?category=spices",
    },
    {
      id: 3,
      name: "Meat",
      description: "Elevate your menu with our prime selection of meats",
      image: "/category-promo/meat.png",
      url: "/search?category=meat",
    },
    {
      id: 4,
      name: "SeaFood",
      description: "Dive into freshness: Premium seafood awaits",
      image: "/category-promo/seafood.png",
      url: "/search?category=seafood",
    },
    {
      id: 5,
      name: "Poultry",
      description: "Quality poultry to perfect your plates - Freshness in every bite",
      image: "/category-promo/poultry.png",
      url: "/search?category=poultry",
    },
    {
      id: 6,
      name: "Disposables",
      description: "Streamline your service with our premium disposable solutions",
      image: "/category-promo/disposables.png",
      url: "/search?category=disposables",
    },
    {
      id: 7,
      name: "Beverages",
      description: "Quench your thirst with our diverse range of beverages",
      image: "/category-promo/beverages.png",
      url: "/search?category=beverages",
    },
  ];

  return (
    <div className="category-slider-section bg-white pb-10 lg:pb-16">
      <div className="w-full overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .marquee-content {
            animation: scroll 40s linear infinite;
          }
          .marquee-content:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex marquee-content">
          {/* Duplicate categories twice for seamless loop */}
          {[...categories, ...categories].map((category, index) => (
            <div
              key={`${category.id}-${index}`}
              className="group relative h-[200px] bg-gray-900 flex-shrink-0 w-full md:w-1/2 lg:w-1/4"
            >
              {/* Split Layout: Image on Left, Text on Right */}
              <div className="flex h-full">
                {/* Image Section - 65% */}
                <div className="relative w-[65%] h-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Text Section - 35% with Black Background */}
                <div className="w-[35%] h-full bg-black flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-lg lg:text-xl font-serif font-light mb-2 text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs mb-4 font-extralight opacity-80 px-2">
                      {category.description}
                    </p>
                    <Link
                      href={category.url}
                      className="inline-block px-4 py-1.5 bg-white text-gray-900 font-light rounded hover:bg-gray-200 transition-all duration-300 text-xs"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
