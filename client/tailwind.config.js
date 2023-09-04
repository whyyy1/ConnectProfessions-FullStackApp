/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./*/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./*/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainGif': "url('/walking.gif')",
        'different': "url('/vertical1.gif')"
        
      }
    },
  },
  plugins: [require("rippleui")],
}
)
