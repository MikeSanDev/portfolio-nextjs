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
        // Define your custom colors here
        mainBg: 'var(--mainBgColor)',
        secondBg: 'var(--secondBgColor)',
        mainColor: 'var(--mainColor)',
        secondaryColor: 'var(--secondaryColor)',
        accentColor: 'var(--accentColor)',
        text_Color: 'var(--text_Color)',
      },
      },
  },
  plugins: [],
}
