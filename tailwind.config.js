/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#EB9100",
        secondary: "#C4C4C4",
        semiwhite: "#F0F0F0",
        semidark: "#252733",
        dark: "#232122",
      },
      fontSize: {
        "3xl": "2rem",
        "2xl": ["1.5rem", { lineHeight: "2.25rem" }],
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "0.625rem",
        full: "50%",
        "4xl": "1.875rem",
      },
      borderWidth: {
        3: "3px",
      },
      scale: {
        115: "1.15",
      },
    },
  },
  plugins: [],
};
