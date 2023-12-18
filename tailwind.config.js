/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      base: '1.125rem',
      xl: '1.25rem',
    },
  },
  plugins: [],
}

