/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      base: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.375rem',
    },
  },
  plugins: [],
}
