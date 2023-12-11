/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('./src/assets/img/Ice.jpg')",
        'dark': "url('./src/assets/img/Gotham.jpg')",
      }
    },
  },
  plugins: [],
}

