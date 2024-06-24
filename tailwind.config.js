/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'color-navbar': '#EEF1F6',
        'color-body': '#EEF1F6',
        'color-button': '#7EAAFF',
        'color-button-hover': '#6699ff',

      }
    },
  },
  plugins: [],
}
