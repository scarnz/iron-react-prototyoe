/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,jsx}", 
    "./index.html", 
    "./dist/*.js"
  ],
  theme: {
    // screens: {
    //   'sm': '640px',

    //   'md': [
    //     // Sidebar appears at 768px, so revert to `sm:` styles between 768px
    //     // and 868px, after which the main content area is wide enough again to
    //     // apply the `md:` styles.
    //     {'min': '668px', 'max': '896px'},
    //     {'min': '896px'}
    //   ],

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },

    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '.025em',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },

    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', ...defaultTheme.fontFamily.sans],
      },

      spacing: {
        108: '28rem',
        150: '36rem',
      },

      colors: {
        primary: '#224176',
        secondary: '#ff7829',
        blue: {
          900: 'hsl(218.18,37.41%,28.82%)',
          800: 'hsl(218.18, 20%,  43%)',
          700: 'hsl(218.18, 15%, 54.51%)',
          600: 'hsl(218.18, 15%, 63%)',
          500: 'hsl(218.18, 16%, 71%)',
          400: 'hsl(218.18, 16%, 77%)',
          300: 'hsl(218.18, 16%, 81%)',
          200: 'hsl(218.18, 15.79%, 85.1%)',
          100: 'hsl(218.18, 14.29%, 90.39%)',
        },
        milk: {
          50: 'hsla(0,0%,100%,0.5)',
          75: 'hsla(0,0%,100%,0.75)',
        },
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
};
