export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"] ,
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" }
    },
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ecff",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af"
        }
      },
      boxShadow: {
        card: "0 4px 24px -6px rgba(0,0,0,0.08)"
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        fadeIn: "fadeIn .4s ease-in-out"
      }
    }
  },
  plugins: []
}
