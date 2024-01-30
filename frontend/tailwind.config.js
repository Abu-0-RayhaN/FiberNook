/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Cute: ["Cute Font", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
        PoorStory: ["Poor Story", "sans-serif"],
        Roboto: ["Roboto Condensed", "sans-serif"],
        Rubik: ["Rubik Glitch Pop", "sans-serif"],
      },
    },
  },
  plugins: [],
};
