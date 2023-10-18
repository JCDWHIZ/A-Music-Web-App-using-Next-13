/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "968px",
      xl: "1310px",
    },
    extend: {
      backgroundImage: {
        singerOverlay: "url(/assets/hero/singer-overlay.png)",
        newsletter: "url(/assets/newsletter/bg.png)",
      },
      fontFamily: {
        alexBrush: ["var(--font-alexBrush)"],
        montserrat: ["var(--font-montserrat)", "san-serif"],
      },
      colors: {
        primary: "#181818",
        secondary: "#151538",
        tertiary: "#242445",
        accent: {
          DEFAULT: "#000054",
          hover: "#000090",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
