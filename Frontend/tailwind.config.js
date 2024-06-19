/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#173049",
          hover: "#010405",
        },
        accent: {
          DEFAULT: "#D82349",
          hover: "#B32241",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
