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
  },
  plugins: [],
};
