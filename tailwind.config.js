/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: "Poppins, sans-serif",
      spartan: "League Spartan, sans-serif",
      playfair: "Playfair Display, serif",
    },
    extend: {
      colors: {
        pink: "#ce60a8",
        primary: "#5da8ef",
        "gray-1": "#8f8f8f",
        "gray-2": "#616161",
        black: "#333333"
      },
    },
  },
  plugins: [],
}