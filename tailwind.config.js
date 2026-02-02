export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2a3a",     // azul principal
        accent: "#0176d3",      // azul destaque
        secondary: "#f5f5f5",

        darkblue: "#0f172a",    // 👈 PARA bg-darkblue / text-darkblue
        bttext: "#475569",      // 👈 PARA text-bttext
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui"],
      },
    },
  },
  plugins: [],
};










