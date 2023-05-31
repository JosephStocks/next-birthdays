import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primaryblue: {
          300: "#6991be",
          400: "#4375ae",
          500: "#14539a",
          600: "#10427b",
          700: "#0d3562",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
