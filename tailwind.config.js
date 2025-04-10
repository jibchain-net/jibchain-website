import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'gray': {
          50: '#f7f9fc',
          100: '#f2f5fa',
          200: '#e5eaf4',
          300: '#d2dae8',
          400: '#b3bdcf',
          500: '#8b97af',
          600: '#6a7895',
          700: '#505b73',
          800: '#343c4e',
          900: '#1a1f2b',
        },
        // Primary colors using the vibrant palette
        primary: {
          50: '#fff9e0',
          100: '#fff5cc',
          200: '#fff085',
          300: '#fce07a',
          400: '#fcb454',
          500: '#ff9b17',
          600: '#f87a30',
          700: '#ea5936',
          800: '#f16767',
          900: '#d44464',
        },
        // Secondary colors - blues that complement the primary colors
        secondary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#78c6fa',
          400: '#36adf2',
          500: '#0c92e4',
          600: '#0074c6',
          700: '#005da1',
          800: '#064f84',
          900: '#0a426e',
          950: '#062a49',
        },
        // Add direct access to the main palette colors
        palette: {
          yellow: '#FFF085',
          amber: '#FCB454',
          orange: '#FF9B17',
          coral: '#F16767',
        },
        // Light mode background and surface colors
        light: {
          background: '#ffffff',
          surface: '#f7f9fc',
          card: '#ffffff',
          border: '#e5eaf4',
        },
      },
      boxShadow: {
        'light-sm': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'light': '0 4px 20px rgba(0, 0, 0, 0.07)',
        'light-lg': '0 8px 30px rgba(0, 0, 0, 0.1)',
        'light-xl': '0 15px 50px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    forms,
  ],
}

