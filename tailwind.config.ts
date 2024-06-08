import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    variants: {
      extend: {
        backdropBlur: ['responsive', 'hover', 'focus'], // Certifique-se de que esta linha está presente
      },
    },
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        greenWeight: '#10c4288b',
        greenLight: '#03C303',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kalam: ["Kalam", "cursive"],
      },
     
    },
  },
  plugins: [],
};
export default config;
