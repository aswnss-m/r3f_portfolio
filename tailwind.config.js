/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'zircon': {
          '50': '#f3f8ff',
          '100': '#dbe9fe',
          '200': '#bfdafe',
          '300': '#93c3fd',
          '400': '#60a2fa',
          '500': '#3b7ef6',
          '600': '#255feb',
          '700': '#1d4ad8',
          '800': '#1e3daf',
          '900': '#1e388a',
          '950': '#172454',
      },
      
      }
    },
    
  },
  plugins: [],
}

