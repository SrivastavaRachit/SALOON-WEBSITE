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
        'pink-400': '#FF89B3',

          peach: '#FBCAB9',
          blush: '#FCE4DA',
          coral: '#F7AB91',
          dark: '#D57554',
          purplish: '#bd0d50'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'Indie Flower', 'Zeyada', 'serif', 'cursive'],
      },
    },
  },
  plugins: [],
}