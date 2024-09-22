/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "var(--et-primary)",
  secondary: "var(--et-secondary)",
  black: {
    DEFAULT: "var(--et-black)",
    900: "var(--et-black-900)",
    800: "var(--et-black-800)",
  },
  white: "var(--et-white)",
  grey: {
    DEFAULT: "var(--et-grey)",
    900: "var(--et-grey-900)",
    800: "var(--et-grey-800)",
  },
  error: "var(--et-error)",
  warning: "var(--et-warning)",
  success: "var(--et-success)",
  transparent: "var(--et-transparent)",
};

const fontWeight = {
  light: "var(--et-font-light)",
  regular: "var(--et-font-regular)",
  medium: "var(--et-font-medium)",
  semibold: "var(--et-font-semibold)",
  bold: "var(--et-font-bold)",
};

const fontSize = {
  h1: "var(--et-text-h1)",
  h2: "var(--et-text-h2)",
  h3: "var(--et-text-h3)",
  h4: "var(--et-text-h4)",
  h5: "var(--et-text-h5)",
  h6: "var(--et-text-h6)",
  p: "var(--et-text-p)",
};

const container = {
  center: true,
  padding: "calc(var(--et-gutter-x) / 2)",
};

const screens = {
  xxs: { max: "425px" },
  xs: { max: "576px" },
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1420px",
  xxxl: "1600px",
  laptop: { min: "1200px", max: "1450px" },
  devices: { max: "1200px" },
  mobile: { max: "475px" },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    fontWeight,
    container,
    screens,
    extend: {
      fontSize,
    },
  },
  plugins: [],
};
