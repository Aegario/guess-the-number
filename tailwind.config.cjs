/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        2: '2',
        3: '3',
        4: '4'
      }
    },
    container: {
      center: true,
    },
    fontSize: {
      xs: '0.5625rem',
    }
  },
  plugins: [],
}
