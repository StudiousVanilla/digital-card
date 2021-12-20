const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '350px',
        ...defaultTheme.screens,
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      colors:{
        'xmas-pink' : '#EFDCDA',
        'xmas-green' : '#1C7C62',
        'xmas-dark-green' : '#0E4435',
        'xmas-light-green' : '#a6c3b6',
        'xmas-red' : '#EC4247',
      },
      fontFamily:{
        body:  ['"Libre Franklin"'],
        jersey:  ["Teko"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
