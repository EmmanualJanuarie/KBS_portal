import { safelist } from './utils/safelist'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: safelist.py,
  theme: {
    extend: {
      spacing: safelist.class
    },
  },
  plugins: [],
}
