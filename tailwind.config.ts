import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5bffd',
          400: '#819dfc',
          500: '#5c78f8',
          600: '#4355ed',
          700: '#3442d9',
          800: '#2f38b0',
          900: '#2d358b',
          950: '#1b1f52',
        },
        violet: {
          50: '#f5f2ff',
          100: '#ede7ff',
          200: '#ded1ff',
          300: '#c7aeff',
          400: '#ab7eff',
          500: '#9552ff',
          600: '#8835fa',
          700: '#7622e3',
          800: '#621ebd',
          900: '#511b99',
          950: '#320c6f',
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 5s ease-in-out infinite',
        'gradient': 'gradient 6s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 20%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.03) 80%, rgba(255,255,255,0) 100%)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', // Wider content
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75',
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'none',
              fontWeight: '500',
            },
            'a:hover': {
              textDecoration: 'underline',
            },
            h1: {
              fontFamily: 'var(--font-poppins)',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'var(--font-poppins)',
              fontWeight: '600',
              marginTop: '2em',
            },
            h3: {
              fontFamily: 'var(--font-poppins)',
              fontWeight: '600',
              marginTop: '1.6em',
            },
            code: {
              fontWeight: '400',
              borderRadius: '0.25rem',
              padding: '0.2em 0.4em',
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config; 