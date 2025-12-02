import {
  // FiUser,
  FiGift,
  FiGrid,
  FiHelpCircle,
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiMail,
  FiMapPin,
  FiShoppingBag,
  FiFileText,
  FiUsers,
  FiPocket,
  FiSettings,
  FiList,
  FiPhoneIncoming,
} from "react-icons/fi";

const pages = [
  // {
  //   title: 'User',
  //   href: '/user/dashboard',
  //   icon: FiUser,
  // },
  {
    title: "Offers",
    href: "/offer",
    icon: FiGift,
  },
  {
    title: "Checkout",
    href: "/checkout",
    icon: FiShoppingBag,
  },
  {
    title: "FAQ",
    href: "/faq",
    icon: FiHelpCircle,
  },
  {
    title: "About Us",
    href: "/about-us",
    icon: FiUsers,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    icon: FiPhoneIncoming,
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    icon: FiPocket,
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
    icon: FiFileText,
  },
];

const userSidebar = [
  {
    title: "Dashboard",
    href: "/user/dashboard",
    icon: FiGrid,
  },
  {
    title: "My Orders",
    href: "/user/my-orders",
    icon: FiList,
  },
  {
    title: "Update Profile",
    href: "/user/update-profile",
    icon: FiSettings,
  },
  {
    title: "Change Password",
    href: "/user/change-password",
    icon: FiFileText,
  },
];

// Removed hardcoded categories - sliders now use database settings via storeCustomizationSetting
// HeroSlider and MainCarousel components fetch from database, not from these hardcoded arrays
// const sliderData = [...];
// const ctaCardData = [...];

// If you need these for reference, they were:
// - biscuits--cakes
// - fish--meat
// - fresh-vegetable

const featurePromo = [
  {
    id: 1,
    title: "featurePromo1-title",
    info: "featurePromo1-info",
    icon: FiTruck,
  },
  {
    id: 2,
    title: "featurePromo2-title",
    info: "featurePromo2-info",
    icon: FiPhoneCall,
  },
  {
    id: 3,
    title: "featurePromo3-title",
    info: "featurePromo3-info",
    icon: FiCreditCard,
  },
  {
    id: 4,
    title: "featurePromo4-title",
    info: "featurePromo4-info",
    icon: FiGift,
  },
];

const contactData = [
  {
    id: 1,
    title: "contact-page-box1-title",
    info: "contact-page-box1-info",
    icon: FiMail,
    contact: "info@allamericanfoodsnetwork.com",
    className: "bg-primary-100",
  },
  {
    id: 2,
    title: "contact-page-box2-title",
    info: "contact-page-box2-info",
    icon: FiPhoneCall,
    contact: "029-00124667",
    className: "bg-yellow-100",
  },
  {
    id: 3,
    title: "contact-page-box3-title",
    info: "contact-page-box3-info",
    icon: FiMapPin,
    contact: "",
    className: "bg-indigo-100",
  },
];

export {
  pages,
  userSidebar,
  // sliderData, // Removed - now using database
  // ctaCardData, // Removed - now using database
  featurePromo,
  contactData,
};
