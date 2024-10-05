/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./components/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14E869",
        black: {
          DEFAULT: "#000000",
          100: "#292929"
        },
        gray: {
          DEFAULT: "#C9C9C9",
          100: "#D3D3D3",
          200: "#4B4B4B",
        },
        white: "#FFFFFF"
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
      padding: {
        '15': '4.75rem',  // Custom padding value (pt-15)
        '16': '5rem',     // Custom padding value (pt-16)
        '20': '6rem',     // Custom padding value (pt-20)
        '24': '7rem',     // Custom padding value (pt-24)
      }
    },
  },
  plugins: [],
};
