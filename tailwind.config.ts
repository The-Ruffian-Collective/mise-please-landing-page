import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#FF006E',
          red: '#FB5607',
          cyan: '#00F5FF',
          yellow: '#FFBE0B',
        },
        accent: {
          lime: '#AAFF00',
          purple: '#8338EC',
          orange: '#FF6B35',
        },
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          50: '#F9FAFB',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      boxShadow: {
        'brutal-sm': '4px 4px 0px 0px #000000',
        'brutal': '8px 8px 0px 0px #000000',
        'brutal-lg': '12px 12px 0px 0px #000000',
        'brutal-pink': '10px 10px 0px 0px #FF006E',
        'brutal-cyan': '10px 10px 0px 0px #00F5FF',
        'brutal-yellow': '10px 10px 0px 0px #FFBE0B',
        'brutal-red': '10px 10px 0px 0px #FB5607',
      },
      borderWidth: {
        '6': '6px',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}
export default config
