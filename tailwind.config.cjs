/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        2: '0.5625rem'
      },
      flexGrow: {
        2: '2',
        3: '3',
        4: '4'
      }
    },
    container: {
      center: true,
    },
    // fontSize: {
    //   xs: '0.5625rem',
    // }
  },
  plugins: [],
}
