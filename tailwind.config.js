/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "hoverShadow": "0px 8px 50px 7px rgba(0,0,0,0.26)",
      },
    },
  },
  plugins: [],
};
