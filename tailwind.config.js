/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'gray-50': '#E1E1E1',
        'gray-100': '#C9C9C9',
        'gray-200': '#585858',
        'gray-400': '#878787',
        'blue-500': '#0057FF',
        'gray-body': '#E1E1E1',
      },
    },
  },
  plugins: [],
}
