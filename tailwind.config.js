import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      theme: colors.violet,
      gray: colors.slate,
      dark: '#151923',
    },
    extend: {},
  },
  plugins: [],
};
