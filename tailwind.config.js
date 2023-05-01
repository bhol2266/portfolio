/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

       animation: {
        spii: 'wiggle 2s linear infinite',
        movement: 'movement 1s linear 1',
        colorModal: 'modal 0.5s ease-out 1',

      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        movement: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        modal: {
          '0%': { transform: 'translateY(1500px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },

     
      screens: {
        "sm": "500px",
        'md': '750px',
        'lg': "1000px",
        '2xl':"1250px",
        '3xl':"1600px",
        
      },
      colors: {
        'github': '#24292F',
        'sb': '#454545',
        'bg-color':"#242424"
      },
      fontFamily: {
        body: ['Pushster'],
        manrope: ['Manrope'],
        delius: ['Delius Unicase'],
        inter: ['Inter'],
        poppins: ['Poppins'],
        DMsans: ['DM Sans'],
        Opensans: ['Open Sans'],
        SFuiDisplay: ['SF UI Display'],
        Abhayalibre: ['Abhaya Libre'],
        kalam: ['Kalam'],
        hindi: ['Jaldi'],

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),


  ]}
