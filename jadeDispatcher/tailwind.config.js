/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "martel-light": ["MartelSans-Light", "sans-serif"],
        "martel-regular": ["MartelSans-Regular", "sans-serif"],
        "martel-bold": ["MartelSans-Bold", "sans-serif"],
        "martel-extraBold": ["MartelSans-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
