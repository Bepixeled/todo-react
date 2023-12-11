/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'lighty': "url('9057831.png')",
        'darky': "url('8999248.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

