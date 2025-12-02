import { useContext, Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import {
  FiMenu,
  FiPhoneCall,
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiShoppingBag,
  FiFileText,
  FiUsers,
  FiPocket,
  FiPhoneIncoming,
} from "react-icons/fi";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { SidebarContext } from "@context/SidebarContext";

const NavigationBar = () => {
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading, toggleCategoryDrawer } =
    useContext(SidebarContext);

  return (
    <div className="bg-[#1e2532] border-b border-gray-700">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
        <div className="flex items-center justify-between h-12">
          {/* Left side navigation */}
          <div className="flex items-center space-x-6">
            {/* Hamburger Menu */}
            <button
              onClick={toggleCategoryDrawer}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Menu"
            >
              <FiMenu className="w-5 h-5" />
            </button>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              {storeCustomizationSetting?.navbar?.about_menu_status && (
                <Link
                  href="/about-us"
                  onClick={() => setIsLoading(!isLoading)}
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                >
                  {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.about_us
                  )}
                </Link>
              )}

              {storeCustomizationSetting?.navbar?.contact_menu_status && (
                <Link
                  href="/contact-us"
                  onClick={() => setIsLoading(!isLoading)}
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                >
                  {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.contact_us
                  )}
                </Link>
              )}

              {/* Pages Dropdown - Hidden */}

              {storeCustomizationSetting?.navbar?.offers_menu_status && (
                <Link
                  href="/offer"
                  onClick={() => setIsLoading(!isLoading)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors font-bold uppercase text-xs tracking-wide"
                >
                  {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.offers
                  ) || "HOT DEALS!"}
                </Link>
              )}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-6 text-sm">
            <span className="hidden lg:block text-gray-400 font-medium uppercase text-xs tracking-wider">
              Recently Viewed
            </span>

            <a
              href={`tel:${
                storeCustomizationSetting?.navbar?.phone || "+1 234 567 890"
              }`}
              className="flex items-center text-white hover:text-gray-300 transition-colors"
            >
              <FiPhoneCall className="w-4 h-4 mr-2" />
              <span className="font-medium">
                {storeCustomizationSetting?.navbar?.phone ||
                  "(+84) 777 890 999"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
