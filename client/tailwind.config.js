const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      graphik: ['Graphik', 'sans-serif'],
      proxima: ['Proxima Nova', 'sans-serif']
    },
    extend: {
      container: {
        center: true
      },
      colors: {
        bluegray: {
          '050': '#F0F4F8',
          '100': '#D9E2EC',
          '200': '#BCCCDC',
          '300': '#9FB3C8',
          '400': '#829AB1',
          '500': '#627D98',
          '600': '#486581',
          '700': '#334E68',
          '800': '#243B53',
          '900': '#102A43',
        },
        orange: colors.orange
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
