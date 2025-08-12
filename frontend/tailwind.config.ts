import type { Config } from 'tailwindcss';

const animationDelayPlugin = (pluginAPI: any) => {
  pluginAPI.addUtilities({
    '.animation-delay-500': {
      'animation-delay': '0.5s',
    },
    '.animation-delay-1000': {
      'animation-delay': '1s',
    },
  });
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        slideInUp: 'slideInUp 1.2s ease forwards',
      },
    },
  },
  darkMode: 'class',
  plugins: [animationDelayPlugin],
};

export default config;
