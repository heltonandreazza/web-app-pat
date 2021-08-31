const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      blue: {
        50: '#C1D9EF',
        100: '#92B8DA',
        200: '#6192BE',
        300: '#3F74A3',
        400: '#226199',
        500: '#0F4B81',
        600: '#073B6A',
        700: '#032B4F',
        800: '#011D36',
        900: '#000E1A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
