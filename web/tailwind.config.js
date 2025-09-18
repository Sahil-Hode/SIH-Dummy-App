/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is crucial
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2E7D32', // Deep Green
        'secondary': '#FF9800', // Vibrant Orange
        'accent': '#4CAF50', // Lighter Green
        'background': '#F5F5F5', // Light Gray background
        'text-primary': '#212121', // Dark Gray text
        'text-secondary': '#757575', // Lighter Gray text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
