module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    flexGrow: {
      2: '10'
    },
    colors: {
      /* main colors */
      black: '#000',
      white: '#fff',
      offWite: '#f9f1e5',
      light: '#f5ebdc',
      brown: '#502314',
      lightBrown: '#e0d7c9',
      darkOrg: '#d62300',
      lightOrg: '#d62300',


      /* grey colors */
      grey100: '#e1e3ea',
      grey200: '#e1e3ea',
      grey300: '#c8cad0',
      grey400: '#acafb9',
      grey500: '#9295a0',
      grey600: '#6c7693',
      grey700: '#5a6072',
      grey900: '#21232c',
    },
    extend: {},
  },
  plugins: [],
}