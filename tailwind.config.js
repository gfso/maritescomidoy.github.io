/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        background:  { DEFAULT: 'var(--background)' },
        foreground:  { DEFAULT: 'var(--foreground)' },
        primary: {
          DEFAULT:    'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT:    'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT:    'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT:    'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT:    'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input:  'var(--input)',
        ring:   'var(--ring)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm:  'calc(var(--radius) - 0.5rem)',
        lg:  'calc(var(--radius) + 0.5rem)',
        xl:  'calc(var(--radius) + 1rem)',
        '2xl': 'calc(var(--radius) + 1.5rem)',
        '3xl': 'calc(var(--radius) + 2rem)',
        '4xl': 'calc(var(--radius) + 3rem)',
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-lavender-mint': 'linear-gradient(135deg, #8B7DB5 0%, #7ECAB0 100%)',
        'gradient-soft': 'linear-gradient(180deg, #FAF8FF 0%, #EDE9F7 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};