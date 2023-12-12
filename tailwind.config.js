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
          primary: "#4C51B6",
          light: "#808EDD"
        },
        mono: {
          white: "#FFFFFF",
          light_grey: "#A8A8A8",
          grey: "#6B6B6B",
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

