/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        timoBlue: "#006F6C",
      },
      colors: {
        timoBlue: "#006F6C",
      },
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
