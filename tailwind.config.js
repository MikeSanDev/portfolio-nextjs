/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#d4d1cf',
        secondaryColor: '#3a6c62',
        tertiaryColor: '#100b0e',
        accentColor: '#015055',
      },},
  },
  plugins: [],
}
