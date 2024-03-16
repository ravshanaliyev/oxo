/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "8px",
        screens: {
          lg: "1119px",
        },
      },
      colors: {
        primary: "#19191C",
        secondary: "#888888",
        tertiary: "#979C9E",
        quaternary: "#F6F6F6",
        red: "#EA3838",
      },
    },
  },
  plugins: [],
};
