import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the app directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;