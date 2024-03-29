/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {

    extend: {
      colors: {
        'background': "#FFF8DB",
        'primary': "#EE7421",
        'primary2': "#ee8c4b",
        'dark': "#2C2C2C",
        'grey': "#5F6368",
      },
      fontFamily: {
        'inter': ''
      },
    },
  },
  plugins: [],
}
