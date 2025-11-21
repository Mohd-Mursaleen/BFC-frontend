/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bfc-yellow": "#F4C430",
        "bfc-yellow-hover": "#D4A017",
        "bfc-black": "#000000",
        "bfc-dark-gray": "#1A1A1A",
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        "scroll-reverse": "scroll-reverse 30s linear infinite",
        "diet-scroll-reverse": "diet-scroll-reverse 25s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(-50%)"},
        },
        "scroll-reverse": {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(50%)"},
        },
        "diet-scroll-reverse": {
          "0%": {transform: "translateX(-100%)"},
          "100%": {transform: "translateX(0%)"},
        },
      },
    },
  },
  plugins: [],
};
