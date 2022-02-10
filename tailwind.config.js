const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '2/3': '66vh'
      },
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
        'slate-50': '#f8fafc',
        'slate-100': '#f1f5f9',
        'slate-200': '#e2e8f0',
        'slate-300': '#cbd5e1',
        'slate-400': '#94a3b8',
        'slate-500': '#64748b',
        'slate-600': '#475569',
        'slate-700': '#334155',
        'slate-800': '#1e293b',
        'slate-900': '#0f172a'
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
