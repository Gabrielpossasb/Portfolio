/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        insetSoft: 'inset 0 0 10px 5px #1b1a1a8f',
        card: '4px 6px 10px 6px #18191a9c',
        box: '4px 6px 8px #18191a9c',
        boxLg: '4px 6px 8px 4px #18191a9c',
      },
      animation: {
        colorTransitonText: 'colorTransitonText 15s ease infinite',
        colorTransitonBg: 'colorTransitonBg 15s ease infinite',
        sizeTransition: 'sizeTransition 15s ease infinite',
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
        '0%': { backgroundImage: 'gradient,to bottom, #4514a0, #197fa1'},
        '8%': { from: '#7328c9' },
        '16%': { from: '#7328c9' },
        '20%': { from: '#a474db'},
        '100%': { from: '#a474db'},
      },
      sizeTransition: {
        '0%': { width: '40px', height: '40px' },
        '4%': {  width: '50px', height: '50px' },
        '16%': {  width: '50px', height: '50px' },
        '20%': {  width: '40px', height: '40px'},
        '100%': {  width: '40px', height: '40px'},
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
  plugins: [],
}
