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

              {/* Pages Dropdown */}
              <Popover className="relative">
                <Popover.Button className="group inline-flex items-center text-white hover:text-gray-300 transition-colors font-medium focus:outline-none">
                  <span>
                    {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.pages
                    ) || "Pages"}
                  </span>
                  <ChevronDownIcon className="ml-1 h-3 w-3" aria-hidden="true" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-0 mt-3 w-screen max-w-xs bg-white rounded-md shadow-lg">
                    <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-2 px-6 py-6">
                        {storeCustomizationSetting?.navbar
                          ?.offers_menu_status && (
                          <span className="p-2 font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-primary-600">
                            <div className="w-full flex">
                              <FiGift className="my-auto" />
                              <Link
                                href="/offer"
                                onClick={() => setIsLoading(!isLoading)}
                                className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium hover:text-primary-600"
                              >
                                {showingTranslateValue(
                                  storeCustomizationSetting?.navbar?.offers
                                )}
                              </Link>
                            </div>
                          </span>
                        )}
                        <span className="p-2 font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-primary-600">
                          <div className="w-full flex">
                            <FiShoppingBag className="my-auto" />
                            <Link
                              href="/checkout"
                              onClick={() => setIsLoading(!isLoading)}
                              className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium hover:text-primary-600"
                            >
                              {showingTranslateValue(
                                storeCustomizationSetting?.navbar?.checkout
                              ) || "Checkout"}
                            </Link>
                          </div>
                        </span>

                        {storeCustomizationSetting?.navbar?.faq_status && (
                          <span className="p-2 font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-primary-600">
                            <div className="w-full flex">
                              <FiHelpCircle className="my-auto" />
                              <Link
                                href="/faq"
                                onClick={() => setIsLoading(!isLoading)}
                                className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium hover:text-primary-600"
                              >
                                {showingTranslateValue(
                                  storeCustomizationSetting?.navbar?.faq
                                )}
                              </Link>
                            </div>
                          </span>
                        )}

                        {storeCustomizationSetting?.navbar
                          ?.privacy_policy_status && (
                          <span className="p-2 font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-primary-600">
                            <div className="w-full flex">
                              <FiPocket className="my-auto" />
                              <Link
                                href="/privacy-policy"
                                onClick={() => setIsLoading(!isLoading)}
                                className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium hover:text-primary-600"
                              >
                                {showingTranslateValue(
                                  storeCustomizationSetting?.navbar
                                    ?.privacy_policy
                                )}
                              </Link>
                            </div>
                          </span>
                        )}

                        {storeCustomizationSetting?.navbar
                          ?.term_and_condition_status && (
                          <span className="p-2 font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-primary-600">
                            <div className="w-full flex">
                              <FiFileText className="my-auto" />
                              <Link
                                href="/terms-and-conditions"
                                onClick={() => setIsLoading(!isLoading)}
                                className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium hover:text-primary-600"
                              >
                                {showingTranslateValue(
                                  storeCustomizationSetting?.navbar
                                    ?.term_and_condition
                                )}
                              </Link>
                            </div>
                          </span>
                        )}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

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
