/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-color': '#0a0a0a', // Text color
        'background-color': '#fbfbfe', // Background color
        'primary-color': '#6a0dad', // Stellar theme's primary color
        'secondary-color': '#e94b9b', // Secondary color
        'accent-color': '#c0c0c0', // Accent color
      },
    },
  },
  plugins: [],
};
