/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'bp700': {'max': '700px'},
      'bp400': {'max': '400px'},
    }
  },
  darkMode: 'class'
}
