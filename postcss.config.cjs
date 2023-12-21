const tailwindcss = require("tailwindcss");
const tailwindcss_nesting = require("tailwindcss/nesting");
const autoprefixer = require("autoprefixer");

const config = {
  plugins: [
    tailwindcss_nesting(),
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
  ],
};

module.exports = config;
