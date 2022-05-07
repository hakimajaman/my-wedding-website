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
        "figma-EA4A8D": "#EA4A8D",
      },
      height: {
        "h-50rem": "50rem",
      },
      minHeight: {
        96: "24rem",
        32: "8rem",
      },
    },
  },
  plugins: [],
};
