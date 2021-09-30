module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      green: {
        gr100: "D1FAE5",
        gr200: "A7F3D0",
        main: "#54B689"
      },
      gray: {
        g50: "#fafafa",
        g100: "#F3F4F6",
        g200: "#E5E7EB",
        g300: "#D1D5DB",
        g400: "#9CA3AF",
        g500: "#6B7280",
        g600: "#4B5563",
        g700: "#374151",
        g800: "#1F2937",
      }
    },
    extend: {},
  },
  fill: theme => ({
    'red': theme('colors.red.500'),
    'green': theme('colors.green.500'),
    'blue': theme('colors.blue.500'),
  }),
  variants: {
    extend: {},
  },
  plugins: [],
}
