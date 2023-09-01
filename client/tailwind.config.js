/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./*/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./*/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("rippleui"),require("daisyui")],
}

