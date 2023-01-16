/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito, sans-serif"],
        awesome: ["Montserrat, Nunito, sans-serif"],
      },
      screens: {
        mdPro: "1020px",
        lgPro: "1087px",
      },
    },
  },
  plugins: [],
};
