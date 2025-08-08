import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],  // set your preferred font here
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
};

export default config;
