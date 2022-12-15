/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        insetSideBar: 'inset 0 0 6px 2px #1b1b1b8f',
        insetSoft: 'inset 0 0 10px 5px #1b1a1a8f',
        card: '4px 6px 10px 6px #18191a9c',
        boxLight: '2px 3px 6px #86709e9c',
        box: '4px 6px 8px #18191a9c',
        boxLg: '4px 6px 8px 4px #18191a9c',
        boxPurple: '2px 3px 4px 2px #6e25c060',
      },
      animation: {
        colorTransitonText: 'colorTransitonText 15s ease infinite',
        colorTransitonBg: 'colorTransitonBg 15s ease infinite',
        sizeTransition: 'sizeTransition 15s ease infinite',
        skillPaginationAlternate: 'skillPaginationAlternate 1s ease ',
      },
      colors: {
        purple: {
          '300': '#6f3dab',
          '500': '#7722E5',
          '600': '#5628ad',
          '800': '#341260',
          '900': '#1F0F2B',
        },
        cyan: {
          '400': '#1571C6',
          '500': '#22ABD7',
          '600': '#268FA6',
          '800': '#004170',
          '900': '#0C222E',
        },
        gray: {
          '300': '#c2c2c2',
          '700': '#303030',
          '800': '#2B2929',
          '900': '#0F0F0F',
        }
      }
    },
    keyframes: {
      colorTransitonText: {
        '0%': { color: '#f3f3f3f3'},
        '8%': { color: '#7328c9' },
        '16%': { color: '#7328c9' },
        '20%': { color: '#f3f3f3f3'},
        '100%': { color: '#f3f3f3f3'},
      },
      colorTransitonBg: {
        '0%': { borderColor: '#303030' },
        '8%': { borderColor: '#5628ad' },
        '16%': { borderColor: '#5628ad' },
        '20%': { borderColor: '#303030'},
        '100%': { borderColor: '#303030'},
      },
      sizeTransition: {
        '0%': { width: '40px', height: '40px' },
        '4%': {  width: '50px', height: '50px' },
        '16%': {  width: '50px', height: '50px' },
        '20%': {  width: '40px', height: '40px'},
        '100%': {  width: '40px', height: '40px'},
      },
      skillPaginationAlternate: {
        '0%': { transform: 'translateX(0)' },
        '50%': {  transform: 'translateX(160%)'},
        '100%': {  transform: 'translateX(0)'},
      },

    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
      
      'cel': {'max': '639px'},
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
