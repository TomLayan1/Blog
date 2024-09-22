/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#032125',
        secondaryColor: '#2B4521',
        grayLight: '#424242',
        grayLightTwo: '#fafafa'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          sm:'3rem'
        }
      },
      boxShadow: {
        customShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}