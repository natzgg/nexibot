/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c14db",
        "primary-content": "#f1f0fe",
        "primary-dark": "#1610ac",
        "primary-light": "#3d35ed",

        secondary: "#db146f",
        "secondary-content": "#fef0f6",
        "secondary-dark": "#ac1057",
        "secondary-light": "#ed3589",

        background: "#ededf2",
        foreground: "#fbfbfc",
        border: "#dadae5",

        copy: "#20202d",
        "copy-light": "#565478",
        "copy-lighter": "#7a78a0",

        success: "#14db14",
        warning: "#dbdb14",
        error: "#db1414",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#fef0f0",
      },
    },
  },
  plugins: [],
};
