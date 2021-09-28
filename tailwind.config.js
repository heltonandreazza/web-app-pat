const defaultTheme = require('tailwindcss/defaultTheme')
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
      // blue: {
      //   50: '#E1FDFD',
      //   100: '#AFF2F2',
      //   200: '#79E0E0',
      //   300: '#4FCBCB',
      //   400: '#28BFBF',
      //   500: '#02B8B8',
      //   600: '#008D8D',
      //   700: '#006E6E',
      //   800: '#005959',
      //   900: '#003F3F',
      // },
      blue: {
        50: '#C1D9EF',
        100: '#92B8DA',
        200: '#6192BE',
        300: '#3F74A3',
        400: '#226199',
        500: '#0F4B81',
        600: '#0F4C81',
        700: '#032B4F',
        800: '#011D36',
        900: '#000E1A',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Gotham', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
