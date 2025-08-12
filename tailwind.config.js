// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#f5f8ff',
        darkBg: '#141c30',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}