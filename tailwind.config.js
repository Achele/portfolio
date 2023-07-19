/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "279px",
        // => @media (min-width: 279px) {...}
      },
      colors: {
        primary: "#5a60ae",
        pinkBtn: " #ff6dcd",
      },
    },
  },
  plugins: [],
};
