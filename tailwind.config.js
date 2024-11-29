/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#272940",
        customBlue:"#3662d7",
        customOrange:"#e98a30"
      },
    },
  },
  plugins: [],
};
