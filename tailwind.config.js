/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
        md: "0rem",
        lg: '4rem',
        xl: '5rem',
        '2xl': '15rem',
      },
    },
  },
  plugins: [],
}