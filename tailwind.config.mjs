/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        lg: '41rem', // Add your custom max-width value
      },
      spacing: {
        '56': '13.7rem',
    },
      colors: {
        primary: "#E63946", // Red
        dark: "#0D0D0D", // Deep Black
        light: "#F5F5F5", // Soft White
        grayDark: "#1E1E1E", // Optional Dark Gray
        grayLight: "#E0E0E0", // Op
      },
    },
  },
  plugins: [require("daisyui")],
};
