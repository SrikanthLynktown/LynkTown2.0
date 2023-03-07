/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1536px) { ... }

      "400px": "400px",
      "420px": "420px",
      "450px": "450px",
      "478px": "478px",
      "550px": "550px",
      "680px": "680px",
      "1000px": "1000px",
      "1080px": "1080px",
      "1300px": "1300px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        primary: "#6A5B40",
        primaryBackground: "#EEECE7",
      },
    },
  },
  plugins: [],
};
