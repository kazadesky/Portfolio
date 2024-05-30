/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#29241e',
        'text': '#f7f9fa',
        'title': '#4cb6f7',
        'title-hover': '#5ca8ff',
        'bg': '#1d2120',
      },
    },
  },
  plugins: [],
}

