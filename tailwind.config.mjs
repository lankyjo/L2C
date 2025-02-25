/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        ivory: '#FFFFF0'
      },
      fontFamily:{
        poppins:['Poppins', 'serif'],
        bungee:[ "Bungee", "serif"]
      }
    },
  },
  plugins: [],
};
