module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '321px',
      md: '768px',
      lg: '1024px',
      xl: '1281px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
