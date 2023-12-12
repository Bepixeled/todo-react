/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", "src/components/Search.jsx"],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark-primary': {
        '50': '#f6f7f6',
        '100': '#e3e4e3',
        '200': '#c7c9c6',
        '300': '#a2a6a2',
        '400': '#7e837e',
        '500': '#646963',
        '600': '#4f534e',
        '700': '#414441',
        '800': '#363936',
        '900': '#303130',
        '950': '#222422',
      },

      'dark-secondary': {
        '50': '#f2fbfa',
        '100': '#d3f4ef',
        '200': '#a7e8df',
        '300': '#74d4cc',
        '400': '#47bab4',
        '500': '#2d9f9a',
        '600': '#227f7d',
        '700': '#1f6665',
        '800': '#1d5152',
        '900': '#1b4242',
        '950': '#0b2628',
      },

      'dark-accent1': {
        '50': '#f5f8f6',
        '100': '#dee9e3',
        '200': '#bdd2c8',
        '300': '#95b3a6',
        '400': '#6e9384',
        '500': '#5c8374',
        '600': '#425f55',
        '700': '#374e46',
        '800': '#2f403a',
        '900': '#2a3732',
        '950': '#151e1c',
      },

      'dark-accent2': {
        '50': '#f1f8f5',
        '100': '#deede6',
        '200': '#bedccf',
        '300': '#9ec8b9',
        '400': '#65a28e',
        '500': '#448572',
        '600': '#32695a',
        '700': '#28544a',
        '800': '#21443b',
        '900': '#1c3832',
        '950': '#0f1f1c',
      },

      'light-primary': {
        '50': '#fbf7f1',
        '100': '#f7ecde',
        '200': '#eed5ba',
        '300': '#e2b88f',
        '400': '#d69561',
        '500': '#cd7942',
        '600': '#bf6437',
        '700': '#9e4f30',
        '800': '#7f402d',
        '900': '#673627',
        '950': '#371b13',
      },

      'light-secondary': {
        '50': '#faf7f2',
        '100': '#f4ede0',
        '200': '#e9dac1',
        '300': '#dabf97',
        '400': '#ca9f6d',
        '500': '#bf8850',
        '600': '#b17445',
        '700': '#935c3b',
        '800': '#774b35',
        '900': '#613f2d',
        '950': '#342016',
      },

      'light-accent1': {
        '50': '#f4f9f8',
        '100': '#d9eee8',
        '200': '#9ed2c6',
        '300': '#85c3b7',
        '400': '#5ca599',
        '500': '#428a7f',
        '600': '#336e67',
        '700': '#2c5954',
        '800': '#274845',
        '900': '#243d3b',
        '950': '#102321',
      },

      'light-accent2': {
        '50': '#f2fbfa',
        '100': '#d4f3f0',
        '200': '#aae5e1',
        '300': '#77d1cd',
        '400': '#54bab9',
        '500': '#319b9b',
        '600': '#257a7c',
        '700': '#216164',
        '800': '#1f4d50',
        '900': '#1e4143',
        '950': '#0c2427',
      },
    },
    extend: {
      backgroundImage: {
        'lighty': "url('9057831.png')",
        'darky': "url('8999248.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

