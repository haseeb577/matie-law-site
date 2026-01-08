import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffef7',
          100: '#fffcee',
          200: '#fff8d6',
          300: '#fff3bd',
          400: '#ffe88a',
          500: '#ffdd57',
          600: '#e6c74e',
          700: '#ccb145',
          800: '#b39b3c',
          900: '#998533',
        },
        gray: {
          custom: '#f5f5f5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

