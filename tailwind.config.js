/** @type {import('tailwindcss').Config} */

const { colourStyles } = require("./src/data/portfolio");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        portfolioFont: ["Inter", "serif"],
        songSavvyFont: ["Anta", "serif"],
      },
      colors: {
        spotifyGreen: "#1DB954",

        ClassLightText: colourStyles.Class[0].foreground,
        ClassLightBg: colourStyles.Class[0].background,
        ClassDarkText: colourStyles.Class[1].foreground,
        ClassDarkBg: colourStyles.Class[1].background,

        AssignmentLightText: colourStyles.Assignment[0].foreground,
        AssignmentLightBg: colourStyles.Assignment[0].background,
        AssignmentDarkText: colourStyles.Assignment[1].foreground,
        AssignmentDarkBg: colourStyles.Assignment[1].background,

        ProjectLightText: colourStyles.Project[0].foreground,
        ProjectLightBg: colourStyles.Project[0].background,
        ProjectDarkText: colourStyles.Project[1].foreground,
        ProjectDarkBg: colourStyles.Project[1].background,
      },
    },
  },
  plugins: [],
};
