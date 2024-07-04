/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'exetremeBounce': 'cubic-bezier(.3,-0.03,.51,1.75)',
      },
      colors:{
        'color-dropdown-navbar': 'hsla(218, 31%, 950%, 1)',
        'color-navbar': 'hsla(218, 31%, 950%, 1)',
        'color-body': 'hsla(218, 31%, 95%, 0.91)',
        'color-button': '#7EAAFF',
        'color-button-hover': '#6699ff',
        'color-blue-hexagon': '#0C71C3',
        'color-menu': 'hsla(0, 0%, 0%, .5)'

      }
    },
  },
  plugins: [],
}
