import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050816',
        panel: '#0d1324',
        accent: '#5ea5ff',
        violet: '#8a5cff',
        mint: '#80f4d6',
      },
      boxShadow: {
        glow: '0 0 40px rgba(94, 165, 255, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(94,165,255,0.16), transparent 30%), radial-gradient(circle at top right, rgba(138,92,255,0.12), transparent 28%), linear-gradient(135deg, #050816 0%, #0d1324 40%, #0c1220 100%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseSlow: 'pulseSlow 5s ease-in-out infinite',
        spinSlow: 'spin 14s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.75' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
