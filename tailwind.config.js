const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Inter", "sans-serif"],
      DejaVu: ["DejaVu Sans", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        navy: {
          50: "#f0f1f5",
          100: "#d9dce6",
          200: "#b3b9cc",
          300: "#8c96b3",
          400: "#667399",
          500: "#1a1f2e", // Main navy blue
          600: "#151923",
          700: "#10131a",
          800: "#0b0d11",
          900: "#060708",
        },
        primary: {
          DEFAULT: "#862d27", // Primary blue/purple
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#862d27", // Main primary color
          600: "#6b2420",
          700: "#501b18",
          800: "#351210",
          900: "#1a0908",
        },
        secondary: {
          DEFAULT: "#2d2651", // Secondary red
          500: "#2d2651",
        },
      },
      height: {
        header: "560px",
      },
      backgroundImage: {
        "page-header": "url('/page-header-bg.jpg')",
        "contact-header": "url('/page-header-bg-2.jpg')",
        subscribe: "url('/subscribe-bg.jpg')",
        "app-download": "url('/app-download.jpg')",
        cta: "url('/cta-bg.png')",
        "cta-1": "url('/cta/cta-bg-1.png')",
        "cta-2": "url('/cta/cta-bg-2.png')",
        "cta-3": "url('/cta/cta-bg-3.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
