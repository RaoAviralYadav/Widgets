/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#14171a",
        card: "#2a3136",
        soft: "#1b1f22"
      },
      boxShadow: {
        neumo: "8px 8px 20px rgba(0,0,0,0.6), -6px -6px 16px rgba(255,255,255,0.02)"
      },
      borderRadius: {
        xl2: "14px"
      }
    }
  },
  plugins: []
};
