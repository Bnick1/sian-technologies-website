/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in src for Tailwind classes
  ],
  theme: {
    extend: {}, // You can add custom colors, fonts, spacing here
  },
  plugins: [], // Add Tailwind plugins if needed
}
