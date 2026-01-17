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
          50: '#fefdf8',
          100: '#fdf9eb',
          200: '#faf2d3',
          300: '#f6e8b5',
          400: '#f0d67d',
          500: '#d4af37', // More muted, professional gold
          600: '#b8941f',
          700: '#9a7a1a',
          800: '#7d6115',
          900: '#654d11',
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

