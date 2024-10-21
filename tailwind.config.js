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
      },
      keyframes:{
        slideIn:{
          '0%':{
            transform:'translateY(-20px)',
            opacity:'0'
          },
          '100%':{
            transform:'translateY(0)',
            opacity:'1'
          }
        }
      },
      animation:{
        'slide-in':'slideIn 1s ease'
      }
    },
  },
  plugins: [],
}