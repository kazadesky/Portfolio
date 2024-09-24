/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#211e19',
        // 'background': '#29241e',
        'text': '#f7f9fa',
        // 'title': '#4cb6f7',
        'title': '#ff2c2c',
        // 'title-hover': '#5ca8ff',
        'title-hover': '#e02929',
        'bg': '#1d2120',
      },
    },
  },
  plugins: [],
}

