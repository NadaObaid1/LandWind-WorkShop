/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-Serif"],
    },
    extend: {
      screens:{
        '2md': '960px'
      },
      colors: {
        primary: "#7E3AF2",
        secondary: "#6B7280",
        mainText: "#111928",
      },
    },
  },
  plugins: [],
};
