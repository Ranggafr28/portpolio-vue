/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'primary': '#0ea5e9',
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
