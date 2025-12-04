import { safelist } from './utils/safelist'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: safelist.py,
  theme: {
    extend: {
      spacing: safelist.class
    },
    keyframes: {
      shimmer:{
        '0%':{backgroundPosition: '-100% 0'},
        '100%': {backgroundPosition: '100% 0'}
      },
    },
    animation: {
      shimmer:'shimmer 1.5s linear infinite'
    },
    backgroundImage: {
      'shimmer': 'linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%)',
    },
    backgroundSize: {
      '200%': '200% 100%'
    }
  },
  plugins: [],
}
