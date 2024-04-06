import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      theme: colors.violet,
      gray: colors.slate,
      error: colors.rose,
    },
    extend: {
      fontFamily: {
        Yekan: ['Yekan', ...defaultTheme.fontFamily.sans],
        Samim: ['Samim', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
