/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'selector',
  theme: {
    colors: {
      primary: 'hsl(var(--color-primary))',
      secondary: 'hsl(var(--color-secondary))',
      tertiary: 'hsl(var(--color-tertiary))',
      'font-color': 'hsl(var(--color-font))',
      white: 'hsl(var(--color-white))',
      black: 'hsl(var(--color-black))',
      current: 'currentColor',
      transparent: 'transparent',
    },
  },
};
