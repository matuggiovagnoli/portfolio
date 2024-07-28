/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Slab', 'sans-serif'],
      },
      keyframes: {
        rotate: {
          '0%' : { transform : 'rotateY(0deg)' },
          '100%' : { transform : 'rotateY(360deg)' }
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        fillBackground: {
          '0%': { backgroundSize: '0 100%' },
          '100%': { backgroundSize: '100% 100%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-109%)' },
        },
        enter: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        visit: {
          '0%' : { transform: 'translateY(0%) scale(1)' },
          '100%': { transform: 'translateY(-30%) scale(1.1)' }
        },
        borderGrow: {
          '0%' : { borderWidth: '0px' },
          '100%': { borderWidth: '2px' }
        }
      },
      animation: {
        'fill-left-to-right': 'fillBackground 0.5s ease forwards',
        marquee: 'marquee 20s linear infinite',
        enter: 'enter 1s ease-in-out forwards',
        'enter-2s': 'enter 2s ease-in-out forwards',
        'enter-3s': 'enter 3s ease-in-out forwards',
        'enter-4s': 'enter 4s ease-in-out forwards',
        'enter-5s': 'enter 5s ease-in-out forwards',
        visit: 'visit 2s ease',
        'slide-in-left': 'slide-in-left 1s ease-out',
        'slide-in-right': 'slide-in-right 1s ease-out',
        'slide-out-left': 'slide-out-left 1s ease-out',
        'slide-out-right': 'slide-out-right 1s ease-out',
        rotate: 'rotate 6s infinite linear',
        'slide-in-right-2s': 'slide-in-right 1s ease-out',
        'slide-in-right-3s': 'slide-in-right 1.5s ease-out',
        'slide-in-right-4s': 'slide-in-right 2s ease-out',
        'slide-in-left-2s': 'slide-in-left 1s ease-out',
        'slide-in-left-3s': 'slide-in-left 1.5s ease-out',
        'slide-in-left-4s': 'slide-in-left 2s ease-out',
      },
    },
  },
  variants: {},
  plugins: [],
};
