/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: "#4C51B6"
        },
        blue: {
          dark: "#3F4283",
          primary: "#275791",
          light: "#808EDD"
        },
        mono: {
          white: "#FFFFFF",
          off_white: "#E8E8E9",
          light_grey: "#C4CDD5",
          grey: "#919EAB",
          darkGrey: "#4F4A45",
        },
      },
      fontFamily: {
        jakarta_sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

