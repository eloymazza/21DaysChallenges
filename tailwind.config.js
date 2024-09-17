/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F9A826',
          light: '#F9b039',
          dark: '#F29809',
        },
        secondary: {
          DEFAULT: '#222',
          light: '#000',
          dark: '#000',
        },

        tertiary: '#F9A826',
        dark: '#1A1A1A',
        light: '#F9F9F9',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
