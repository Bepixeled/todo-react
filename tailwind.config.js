/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('../src/img/Ice.jpg')",
        'dark': "url('../src/img/Gotham.jpg')",
      }
    },
  },
  plugins: [],
}

