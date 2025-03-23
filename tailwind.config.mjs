/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      'Playfair-Display': ['Playfair Display', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
      'Lato': ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
};
