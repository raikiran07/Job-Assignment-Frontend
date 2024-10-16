/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#292929',
        secondary:'#A8A8A8',
        ternary:'#0B66EF',
        inputBox:'#F4F4F4',
        inputText:'#535353'
      }
    },
  },
  plugins: [],
}