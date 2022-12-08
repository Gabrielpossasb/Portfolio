/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        insetSoft: 'inset 0 0 10px 5px #1b1a1a8f'
      },
      animation: {
        colorTransitonText: 'colorTransitonText 15s ease infinite',
        colorTransitonBg: 'colorTransitonBg 15s ease infinite',
        sizeTransition: 'sizeTransition 15s ease infinite',
      },
    },
    keyframes: {
      colorTransitonText: {
        '0%': { color: '#e4e4e4'},
        '8%': { color: '#7328c9' },
        '16%': { color: '#7328c9' },
        '20%': { color: '#e4e4e4'},
        '100%': { color: '#e4e4e4'},
      },
      colorTransitonBg: {
        '0%': { backgroundColor: '#a474db'},
        '8%': { backgroundColor: '#7328c9' },
        '16%': { backgroundColor: '#7328c9' },
        '20%': { backgroundColor: '#a474db'},
        '100%': { backgroundColor: '#a474db'},
      },
      sizeTransition: {
        '0%': { width: '40px', height: '40px' },
        '4%': {  width: '50px', height: '50px' },
        '16%': {  width: '50px', height: '50px' },
        '20%': {  width: '40px', height: '40px'},
        '100%': {  width: '40px', height: '40px'},
      },
    }
  },
  plugins: [],
}
