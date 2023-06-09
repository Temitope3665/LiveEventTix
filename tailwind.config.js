/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#B3F17F",
      dark: "#101015",
      secondary: "#6A67F3",
      tertiary: "#498CDA",
      quaternary: "#74B949",
      quinary: "#332E59",
      white: "#FFFFFF",
      error: "#EF4444",
      grey: "#868A90",
      neutral: "#1C1D1F",
      neutral_body: "#747A8B",
      neutral_50: "#F8F9FB",
      neutral_100: "#EBEEF2",
      neutral_200: "#D8DCE2",
      neutral_300: "#B5BAC2",
      neutral_500: "#868A91",
      neutral_600: "#5F6166",
      neutral_700: "#47494D",
      neutral_900: "#1C1D1F",
      defaultText: "#2F3133",
      lightBlue: "#CEE3FB",
      border: "#9DA1A8",
      label: "#5F6166",
      success_400: "#4ADE80",
      success_500: "#22C55E",
      blue: "#146CEB",
      poor: "#E44242",
      dashboard_bg: "#324479",
      fair: "#F99F4A",
      good: "#1493FF",
      excellent: "#36C565",
      tiny: "rgba(255, 255, 255, 0.5)",
      sidebar_bg: "rgba(255, 255, 255, 0.1)",
      divide: "rgba(255, 255, 255, 0.08)",
      drawer_bg: "rgba(6, 32, 70, 0.6)",
    },
    fontFamily: {
      gilroyRegular: ["Gilroy-Regular", "sans-serif"],
      gilroyMd: ["Gilroy-Medium", "sans-serif"],
      gilroyLight: ["Gilroy-Light", "sans-serif"],
      gilroyHeavy: ["Gilroy-Heavy", "sans-serif"],
      gilroyBold: ["Gilroy-Bold", "sans-serif"],
    },
    boxShadow: {
      inset: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
      normal:
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      medium: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
      extra: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
      tiny: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
      card: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
      dropdown:
        "0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)",
    },
    dropShadow: {
      auth: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    },
    fontSize: {
      sm: "12px",
      md: "14px",
      normal: "16px",
      smd: "18px",
      lg: "24px",
      xl: "36px",
      "20px": "20px",
    },
    lineHeight: {
      md: "44px",
      sm: "30px",
    },
    extend: {},
  },
  plugins: [],
};
