const colors = require("tailwindcss/colors");

module.exports = {
  // purge: ["./**/*.tsx"],
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require('okiedesign')
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    colors: {
      primary: colors.purple,
      success: colors.emerald,
      warning: colors.amber,
      emergency: colors.red,
    },
  },
};
