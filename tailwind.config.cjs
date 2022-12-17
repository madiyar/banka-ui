const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'jar-',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      // theme
      primary: colors.blue,
      secondary: colors.neutral,
      success: colors.emerald,
      error: colors.red,
      warning: colors.amber,
      info: colors.violet,
    },
    extend: {},
  },
  plugins: [],
}
