/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000500',
          light: '#373837',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#FFFBFF',
          light: '#000',
          dark: '#000',
        },
        background: {
          DEFAULT: '#92817A',
          light: '#555',
          dark: '#000',
        },
        paper: {
          DEFAULT: '#444',
          light: '#666',
          dark: '#222',
        },
        tertiary: '#F9A826',
        contrastText: {
          DEFAULT: '#000',
          light: '#FFF',
          dark: '#000',
        },
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
