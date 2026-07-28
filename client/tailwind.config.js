/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        dark: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          900: '#0c1222',
          950: '#050812',
        },
        blue: {
          450: '#3b82f6',
        },
        purple: {
          450: '#a855f7',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.5)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        bounce: 'bounce 1s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      opacity: {
        '15': '0.15',
        '25': '0.25',
        '35': '0.35',
        '65': '0.65',
        '75': '0.75',
        '85': '0.85',
      },
    },
  },
  plugins: [
    function ({ addBase, addComponents, e }) {
      addBase({
        '@layer base': {
          '*': {
            '@apply': 'scroll-smooth',
          },
          'html': {
            '@apply': 'scroll-smooth',
          },
          'body': {
            '@apply': 'antialiased',
          },
        },
      });
    },
  ],
  variants: {
    extend: {
      opacity: ['group-hover'],
      scale: ['group-hover'],
      translate: ['group-hover'],
    },
  },
}
