/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        Netflix: '#E50914',
      },
      fontFamily: {
        Netflix: "'Netflix Sans', Helvetica, Arial, sans-serif",
      },
    },
  },
  plugins: [],
};
