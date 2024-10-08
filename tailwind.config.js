/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9933', // Saffron
          dark: '#E68A00',
        },
        secondary: {
          DEFAULT: '#138808', // Green
          dark: '#0F6606',
        },
        accent: {
          DEFAULT: '#000080', // Navy Blue
          light: '#0000FF',
        },
      },
    },
  },
  plugins: [],
}