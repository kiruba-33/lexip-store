/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        lexip: {
          50: '#e8f4fc',
          100: '#c5e2f7',
          200: '#90caef',
          300: '#52abe3',
          400: '#238fd4',
          500: '#1683c5',
          600: '#1683C5', // Primary LEXIP Blue (exact requested)
          700: '#126a9f',
          800: '#0e5384',
          900: '#0e456d',
          950: '#092d47',
        }
      }
    },
  },
  plugins: [],
}
