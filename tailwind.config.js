/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandYellow: "#F3C11B",
        brandOrange: "#F65009",
        brandBlue: "#3D38F5",
        brandPurple: "#8A38F5",
        brandGreen: "#198F51",
        brandGraphite: "#2F2F2F",
        brandWhite: "#FBFBFB",
        brandSecondWhite: "#E5E5E5",
      },
      fontFamily: {
        plush: ['Plush', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
