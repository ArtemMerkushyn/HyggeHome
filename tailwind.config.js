/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-my-yellow': '#FCB654',
        
      },
      maxWidth: {
        'container': '1296px',
      },
    },
  },
  plugins: [],
}

