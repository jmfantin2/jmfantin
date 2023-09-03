/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        PAPER: "#ece7e4",
        COAL: "#262626",
        EMERALD: "#10B981",
        CYAN: "#06B6D4",
        ORANGE: "#f9622b",
        ROSE: "#F43F5E",
      },
    },
  },
  plugins: [],
};
