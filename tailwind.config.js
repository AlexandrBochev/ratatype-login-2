/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        yellow: '0px 4px 0px 0px #FFCC00',
        big_yellow: '0px 6px 0px 0px #FFCC00',
        brand: '0px 4px 0px 0px #00ACFF',
        big_brand: '0px 6px 0px 0px #00ACFF',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
    colors: {
      primary: '#0A335C',
      brand: '#00ACFF',
      white: '#FFFFFF',
      light_yellow: '#FFEB99',
      yellow: '#FFCC00',
      darck_gray: 'rgba(23, 66, 88, 0.80)',
      ligth_gray: '#EEF4F6',
      gray: 'rgba(23, 66, 88, 0.10)',
      black: '#000000',
      red: '#FF3B30',
    },
  },
  plugins: [],
}

