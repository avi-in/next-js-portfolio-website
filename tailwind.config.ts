import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'neon': '0 0 10px #2A0E61, 0 0 20px #2A0E61, 0 0 30px #2A0E61, 0 0 40px #2A0E61',
        'neon-hover': '0 0 20px #2A0E61, 0 0 30px #2A0E61, 0 0 40px #2A0E61, 0 0 50px #2A0E61',
      },
      colors: {
        'neon-purple': '#2A0E61',
        'neon-text': '#E0E0E0', // Light gray for text
        'color':'rgb(44, 44, 44)',
      },
      borderRadius: {
        'neon': '12px', // Custom border radius for neon effect
      },
    },
  },
  plugins: [],
};
export default config;
