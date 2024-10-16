/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown-900': '#4B3F39',
        'pink-300': '#F3BDBA',
      },
    },
  },
  plugins: [],
}