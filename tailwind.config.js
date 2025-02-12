/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          to: { opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s forwards 0.3s'
      }
    },
  },
  plugins: [],
}

