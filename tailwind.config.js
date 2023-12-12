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
          primary: "#4C51B6"
        }
      },
      fontFamily: {
        jakarta_sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

