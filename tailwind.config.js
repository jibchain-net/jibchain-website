/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': {
        100: '#f5f5f5',
        200: '#e0e0e0',
        300: '#bdbdbd',
        400: '#9e9e9e',
        500: '#757575',
        600: '#616161',
        700: '#424242',
        800: '#212121',
        900: '#1a1a1a',
      },
      'primary': {
        200: '#FFBA54',
        300: '#FFA520',
        400: '#E58900',
      },
      'secondary': '#213566',
    },
    extend: {},
  },
  plugins: [],
}

