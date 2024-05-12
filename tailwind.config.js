/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#152955",
        color2: "#0049cc",
        color3: "#12244d",
        color4: "#1d3976",
      },
    },
    keyframes: {
      enter: {
        "0%": { top: "0" },
        "100%": { top: "20" },
      },
    },
    animation: {
      enter: "enter 0.5s ease-in-out ",
    },
    screens: {
      handphone: "320px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
