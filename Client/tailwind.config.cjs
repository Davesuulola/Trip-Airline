/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
     
    //   backgroundImage: (theme) => ({
    //     'plane': "url('../assets/images/Plane.jpg')",
    //   }),
     },
    //  screens: {
    //   'sm': '576px',
    //   'md': '768px',
    //   'special': '990px',
    //   'lg': '992px',
    //   'xl': '1200px',
    //   'print': {'raw': 'print'}
    // },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}
