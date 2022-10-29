/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      black: "#161724",
      beige: "#F7F7F1",
      lightPurple: "#F9F9FA",
      purple: "#DDE1FB",
      darkPurple: "#4D5484",
      translucentLightPurple: "rgba(238, 238, 237, 0.3)",
      translucentDarkPurple: "rgba(77, 84, 132, 0.6)",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["GeneralSans-Variable", "sans-serif"],
    },
    screens: {
      "2xs": "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        0.25: "1px",
        1.25: "5px",
      },
    },
  },
  plugins: [],
};
