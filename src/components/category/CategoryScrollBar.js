import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";

const CategoryScrollBar = () => {
  const router = useRouter();
  const scrollContainerRef = useRef(null);
  const { showingTranslateValue } = useUtilsFunction();

  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => await CategoryServices.getShowingCategory(),
  });

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const container = scrollContainerRef.current;

      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  // Flatten categories to get all children for horizontal display
  const categoryList = categories?.[0]?.children || [];

  // Helper function to create category URL slug
  const getCategoryUrl = (category) => {
    const categoryName = showingTranslateValue(category?.name);
    const category_name = (categoryName || "")
      .toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");
    return `/search?category=${category_name}&_id=${category._id}`;
  };

  if (isLoading || !categoryList.length) return null;

  return (
    <div className="bg-white border-b border-gray-200 relative">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
        <div className="relative flex items-center group">
          {/* Left scroll button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-white/90 hover:bg-white shadow-md p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 -ml-3"
            aria-label="Scroll left"
          >
            <IoChevronBack className="w-4 h-4 text-gray-700" />
          </button>

          {/* Scrollable category container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-8 overflow-x-auto scrollbar-hide py-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categoryList.map((category) => {
              const isActive = router.query._id === category._id;
              return (
                <Link
                  key={category._id}
                  href={getCategoryUrl(category)}
                  className={`flex-shrink-0 font-bold text-sm uppercase tracking-wide transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-primary-600 border-b-2 border-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  }`}
                >
                  {showingTranslateValue(category?.name)}
                </Link>
              );
            })}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-white/90 hover:bg-white shadow-md p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 -mr-3"
            aria-label="Scroll right"
          >
            <IoChevronForward className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryScrollBar;
