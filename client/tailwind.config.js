module.exports = {
  darkMode: 'class',
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    // typography: (theme) => ({}),
    extend: {},
  },
  variants: {
    extend: {},
  },
  // plugins: [require('@tailwindcss/typography')],
};
