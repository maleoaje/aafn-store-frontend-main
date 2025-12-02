import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import Cookies from "js-cookie";
import { IoSearchOutline, IoChevronDown } from "react-icons/io5";
import { FiShoppingCart, FiUser, FiHeart } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
import { useQuery } from "@tanstack/react-query";

//internal import
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import { handleLogEvent } from "src/lib/analytics";
import CartDrawer from "@components/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import SettingServices from "@services/SettingServices";
import useUtilsFunction from "@hooks/useUtilsFunction";

const Navbar = () => {
  const { t, lang } = useTranslation("common");
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { toggleCartDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();

  const userInfo = getUserSession();
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  // Fetch categories for dropdown
  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: async () => await CategoryServices.getShowingCategory(),
  });

  // Fetch languages for language selector
  const { data: languages } = useQuery({
    queryKey: ["languages"],
    queryFn: async () => await SettingServices.getShowingLanguage(),
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });

  const categoryList = categories?.[0]?.children || [];

  // Get current language from cookies
  let currentLang = {};
  const currentLanguageCookie = Cookies.get("_curr_lang");
  if (currentLanguageCookie && currentLanguageCookie !== "undefined") {
    try {
      currentLang = JSON.parse(currentLanguageCookie);
    } catch (error) {
      currentLang = {};
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      let searchUrl = `/search?query=${searchText}`;
      if (selectedCategory) {
        searchUrl += `&category=${selectedCategory}`;
      }
      router.push(searchUrl, null, { scroll: false });
      setSearchText("");
      handleLogEvent("search", `searched ${searchText}`);
    } else {
      router.push(`/`, null, { scroll: false });
      setSearchText("");
    }
  };

  const handleLanguageChange = (language) => {
    Cookies.set("_lang", language?.iso_code, {
      sameSite: "None",
      secure: true,
    });
    Cookies.set("_curr_lang", JSON.stringify(language), {
      sameSite: "None",
      secure: true,
    });
    router.push("/", "/", { locale: language.iso_code });
  };

  return (
    <>
      <CartDrawer />
      <div className="bg-[#1a1f2e] sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 mr-8">
              <div className="text-white">
                {storeCustomizationSetting?.navbar?.logo ? (
                  <div className="relative w-20 h-15">
                    <Image
                      width="0"
                      height="0"
                      sizes="50vw"
                      className="w-full h-auto"
                      priority
                      src={
                        // storeCustomizationSetting?.navbar?.logo
"/logo/aafn-logo-white-250w.png"
                      }
                      alt="logo"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-tight">
                      ALL AMERICAN
                    </span>
                    <span className="text-xs tracking-widest -mt-1">
                      FOOD NETWORK
                    </span>
                  </div>
                )}
              </div>
            </Link>

            {/* Search Bar with Category Dropdown */}
            <div className="flex-1 max-w-3xl mx-2 sm:mx-4 lg:mx-8">
              <form onSubmit={handleSubmit} className="relative flex">
                {/* Category Dropdown - Hidden on mobile */}
                <div className="relative hidden md:block">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="h-11 pl-4 pr-10 bg-white border-r border-gray-300 rounded-l-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none cursor-pointer"
                    style={{ minWidth: "150px" }}
                  >
                    <option value="">All categories</option>
                    {categoryList.map((category) => (
                      <option key={category._id} value={category._id}>
                        {showingTranslateValue(category?.name)}
                      </option>
                    ))}
                  </select>
                  <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>

                {/* Search Input */}
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  className="flex-1 h-11 px-4 text-sm border-none focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-l-md md:rounded-l-none"
                  placeholder={t("search-placeholder")}
                />

                {/* Search Button */}
                <button
                  type="submit"
                  className="h-11 px-4 sm:px-6 bg-primary-500 hover:bg-primary-600 text-white rounded-r-md transition-colors flex items-center justify-center"
                  aria-label="Search"
                >
                  <IoSearchOutline className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-6">
              {/* Language Selector - Hidden */}
              <div className="hidden">
                <button className="flex items-center text-white hover:text-gray-300 transition-colors text-sm">
                  <span className="font-medium">
                    {currentLang?.name || "English"}
                  </span>
                  <IoChevronDown className="ml-1 w-3 h-3" />
                </button>
                {languages && languages.length > 1 && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-1 min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {languages.map((language) => (
                      <button
                        key={language._id}
                        onClick={() => handleLanguageChange(language)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Currency - USD */}
              <span className="text-white text-sm font-medium hidden lg:block">
                USD
              </span>

              {/* User Icon */}
              <Link
                href={userInfo?.email ? "/user/dashboard" : "/auth/login"}
                className="relative flex flex-col items-center text-white hover:text-gray-300 transition-colors"
              >
                {userInfo?.image ? (
                  <Image
                    width={24}
                    height={24}
                    src={userInfo.image}
                    alt="user"
                    className="rounded-full"
                  />
                ) : (
                  <FiUser className="w-6 h-6" />
                )}
              </Link>

              {/* Wishlist Icon */}
              <Link
                href="/user/my-account"
                className="relative flex flex-col items-center text-white hover:text-gray-300 transition-colors group hidden lg:flex"
              >
                <FiHeart className="w-6 h-6" />
                <span className="absolute -bottom-4 text-xs bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  0
                </span>
              </Link>

              {/* Cart Icon */}
              <button
                onClick={toggleCartDrawer}
                className="relative flex flex-col items-center text-white hover:text-gray-300 transition-colors group"
                aria-label="Shopping cart"
              >
                <FiShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  {totalItems || 0}
                </span>
                <span className="absolute -bottom-4 text-xs bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {totalItems || 0}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
