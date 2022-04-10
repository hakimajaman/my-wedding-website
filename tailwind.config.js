module.exports = {
  content: [
    "./app/**/*.{html,js,ejs}",
    "./app/assets/dist/*.{js}",
    "./app/views/**/*.{js, ejs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "google-figma-Parisienne": ["Parisienne", "cursive"],
      },
    },
  },
  plugins: [],
};
