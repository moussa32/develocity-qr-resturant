/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      primary: "#EB9100",
      secondary: "#C4C4C4",
      semiwhite: "#F0F0F0",
      dark: "#232122",
    },
    extend: {
      fontSize: {
        "3xl": "2rem",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
