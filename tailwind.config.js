/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        White: 'hsl(0, 0%, 100%)',
        veryLightGrayishBlue: 'hsl(210, 60%, 98%)',
        lightGrayishBlue1: 'hsl(211, 68%, 94%)',
        lightGrayishBlue2: 'hsl(205, 33%, 90%)',
        grayishBlue: 'hsl(219, 14%, 63%)',
        darkGrayishBlue: 'hsl(219, 12%, 42%)',
        veryDarkBlue: 'hsl(224, 21%, 14%)',
        Red: 'hsl(1, 90%, 64%)',
        Blue: 'hsl(219, 85%, 26%)'
      }
    },
  },
  plugins: [],
}
