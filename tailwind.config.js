/** @type {import('tailwindcss').Config} */

const durations = {
  1500: "1500ms",
  2000: "2000ms",
  2500: "2500ms",
  3000: "3000ms",
  3500: "3500ms",
  4000: "4000ms",
  4500: "4500ms",
  5000: "5000ms",
  5500: "5500ms",
  6000: "6000ms",
  6500: "6500ms",
  "10k": "10000ms",
  "20k": "20000ms",
  "30k": "30000ms",
  "40k": "40000ms",
  "50k": "50000ms",
  "60k": "60000ms",
  "70k": "70000ms",
  "80k": "80000ms",
  "90k": "90000ms",
  "100k": "100000ms",
  "160k": "160000ms",
};

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        title: ["Nova Square"],
        primary: ["Titillium Web"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      transitionDuration: durations,
      transitionDelay: durations,
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse linear infinite",
        spin: "spin linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
