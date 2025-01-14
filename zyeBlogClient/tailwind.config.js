/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": "'Open Sans', sans-serif;",
        "secondary": "'Inter', sans-serif;"
      }
    },
  },
  plugins: [],
}

