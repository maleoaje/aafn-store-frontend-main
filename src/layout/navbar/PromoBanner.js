import { useState } from "react";
import { IoClose } from "react-icons/io5";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-white via-gray-50 to-white border-b overflow-hidden">
      {/* Colorful confetti shapes background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top scattered shapes */}
        <div className="absolute top-1 left-[5%] w-6 h-6 bg-blue-400 transform rotate-45 rounded-sm opacity-70"></div>
        <div className="absolute top-2 left-[15%] w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute top-0 left-[25%] w-5 h-5 bg-green-400 transform rotate-12 opacity-70"></div>
        <div className="absolute top-3 left-[35%] w-7 h-7 bg-purple-400 transform -rotate-45 rounded-sm opacity-60"></div>
        <div className="absolute top-1 left-[45%] w-6 h-6 bg-pink-400 rounded-full opacity-70"></div>
        <div className="absolute top-2 left-[55%] w-8 h-8 bg-orange-400 transform rotate-45 opacity-60"></div>
        <div className="absolute top-0 left-[65%] w-5 h-5 bg-teal-400 rounded-full opacity-70"></div>
        <div className="absolute top-3 left-[75%] w-7 h-7 bg-red-400 transform rotate-12 rounded-sm opacity-60"></div>
        <div className="absolute top-1 left-[85%] w-6 h-6 bg-indigo-400 transform -rotate-45 opacity-70"></div>
        <div className="absolute top-2 left-[95%] w-8 h-8 bg-yellow-300 rounded-full opacity-60"></div>

        {/* Bottom scattered shapes */}
        <div className="absolute bottom-1 right-[5%] w-7 h-7 bg-green-500 transform rotate-45 rounded-sm opacity-60"></div>
        <div className="absolute bottom-2 right-[15%] w-6 h-6 bg-blue-300 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 right-[25%] w-8 h-8 bg-purple-500 transform -rotate-12 opacity-60"></div>
        <div className="absolute bottom-3 right-[35%] w-5 h-5 bg-pink-500 rounded-full opacity-70"></div>
        <div className="absolute bottom-1 right-[45%] w-7 h-7 bg-orange-500 transform rotate-45 rounded-sm opacity-60"></div>
        <div className="absolute bottom-2 right-[55%] w-6 h-6 bg-yellow-500 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 right-[65%] w-8 h-8 bg-red-500 transform -rotate-45 opacity-60"></div>
        <div className="absolute bottom-3 right-[75%] w-5 h-5 bg-teal-500 rounded-full opacity-70"></div>
        <div className="absolute bottom-1 right-[85%] w-7 h-7 bg-indigo-500 transform rotate-12 rounded-sm opacity-60"></div>
        <div className="absolute bottom-2 right-[95%] w-6 h-6 bg-green-400 rounded-full opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-screen-2xl mx-auto px-3 sm:px-10 py-3">
        <div className="flex items-center justify-center">
          <p className="text-center text-sm md:text-base font-medium text-gray-800">
            <span className="uppercase tracking-wide">SENIOR&apos;S MEMBER</span>{" "}
            <span className="font-semibold">DISCOUNT DAYS!</span>{" "}
            <span className="uppercase tracking-wide">SAVE</span>{" "}
            <span className="text-red-600 font-bold text-lg md:text-xl">25%</span>{" "}
            <span className="uppercase tracking-wide">EACH TUESDAY</span>
          </p>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-3 sm:right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close banner"
          >
            <IoClose className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
