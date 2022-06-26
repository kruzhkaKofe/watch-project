/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'bp700': {'max': '700px'},
        'bp400': {'max': '400px'},
      },
      boxShadow: {
        'my': 'inset 0 0 5px rgba(0, 0, 0, 0.2)',
        'circle': ' 0 2px 5px rgba(0, 0, 0, 0.2)',
      },
    }
  },
  darkMode: 'class'
}
