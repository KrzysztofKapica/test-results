/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F3C11B",
        orange: "#F65009",
        blue: "#3D38F5",
        purple: "#8A38F5",
        green: "#198F51",
        graphite: "#2F2F2F",
        white: "#FBFBFB",
        secondWhite: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
