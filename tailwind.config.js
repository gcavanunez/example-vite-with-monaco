const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      "./index.html",
      "./src/**/*.vue",
      "./src/**/*.js",
      // etc.
    ],
  },
  theme: {
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
      },
      fontWeight: ["hover", "focus"],
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
