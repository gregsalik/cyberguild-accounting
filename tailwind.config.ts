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
        paper:       '#F6F4EC',
        'paper-dim': '#EDEAD0',
        'paper-card':'#FBFAF5',
        ink:         '#16211B',
        'ink-soft':  '#4A5049',
        green:       '#2F5D45',
        'green-deep':'#1B3A2B',
        stamp:       '#A6402C',
        rule:        '#D9D4C2',
        'rule-strong':'#C7C0A8',
        gold:        '#B08A3E',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
