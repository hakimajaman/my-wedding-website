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
        "google-figma-comic-neue": ["Comic Neue", "cursive"],
      },
      colors: {
        "figma-C77F91": "#C77F91",
      },
    },
  },
  plugins: [],
};
