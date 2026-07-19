/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fef7f1',
        orange: '#f45b49',
        amber: '#f1a242',
      },
      fontFamily: {
        fraunces: ['"Fraunces 72pt SuperSoft"', 'serif'],
        anek: ['"Anek Telugu"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
