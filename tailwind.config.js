module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      green: {
        gr100: "D1FAE5",
        gr200: "A7F3D0",
        main: "#54B689",
        mainlight: "#2BDC88"
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
        g800: "#1c313a",
        gblack: "#102027",
        gtrans: "#05757575"
      }
    },
    extend: {},
  },
  fill: {
    current: '#54B689'
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark']
    },
  },
  plugins: [],

}
