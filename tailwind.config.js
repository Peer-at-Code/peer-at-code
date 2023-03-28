// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        code: ['var(--font-code)', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        ...require('tailwindcss/colors'),
        primary: {
          900: 'hsl(258deg 15% 7%)',
          800: 'hsl(258deg 15% 11%)',
          700: 'hsl(258deg 15% 15%)',
          600: 'hsl(258deg 15% 20%)',
          500: 'hsl(258deg 15% 25%)',
          400: 'hsl(258deg 14% 35%)',
          300: 'hsl(258deg 13% 45%)',
          200: 'hsl(258deg 13% 55%)',
          100: 'hsl(258deg 10% 65%)',
          50: 'hsl(258deg 8% 85%)',
          0: 'hsl(258deg 8% 100%)'
        },
        brand: {
          DEFAULT: '#5049ca',
          accent: '#913fb6'
        },
        success: {
          DEFAULT: 'hsl(104deg 39% 59%)',
          secondary: '#b5e4ca',
          background: '#60a747'
        },
        info: {
          DEFAULT: 'hsl(258deg 78% 77%)',
          secondary: '#ccb8f9',
          background: '#9878de'
        },
        warning: {
          DEFAULT: 'hsl(39deg 100% 67%)',
          secondary: '#ffd88d',
          background: '#da9b34'
        },
        error: {
          DEFAULT: 'hsl(7deg 100% 67%)',
          secondary: '#ffbc99',
          background: '#cd4634'
        },
        highlight: {
          primary: 'hsl(258deg 15% 17%)',
          secondary: 'hsl(258deg 10% 46%)'
        }
      },
      backgroundColor: {
        primary: {
          DEFAULT: 'hsl(258deg 15% 7%)',
          900: 'hsl(258deg 15% 7%)',
          800: 'hsl(258deg 15% 11%)',
          700: 'hsl(258deg 15% 15%)',
          600: 'hsl(258deg 15% 20%)',
          500: 'hsl(258deg 15% 25%)',
          400: 'hsl(258deg 14% 35%)',
          300: 'hsl(258deg 13% 45%)',
          200: 'hsl(258deg 13% 55%)',
          100: 'hsl(258deg 10% 65%)',
          50: 'hsl(258deg 8% 85%)',
          0: 'hsl(258deg 8% 100%)'
        },
        secondary: 'hsl(258deg 15% 11%)',
        tertiary: 'hsl(258deg 15% 17%)',
        contrast: '#4f5450'
      },
      textColor: {
        primary: 'hsl(258deg 8% 100%)',
        secondary: 'hsl(258deg 8% 84%)',
        tertiary: 'hsl(258deg 8% 65%)',
        secondaryAccent: '#e2e8f0',
        muted: 'hsl(258deg 7% 46%)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
