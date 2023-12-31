/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      NunitoSans: ["Nunito Sans", "sans - serif"],
      sacraMento: ["Sacramento", "cursive"],
    },

    extend: {
      colors: {
        DarkBlue: "hsl(209, 23%, 22%)",
        VeryDarkBlue: "hsl(207, 26%, 17%)",
        VeryDarkBlue2: "hsl(200, 15%, 8%)",
        DarkGray: "hsl(0, 0%, 52%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
