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
      },
    },
  },
  variants: {},
  plugins: [],
};
