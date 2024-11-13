/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-color': '#0a0a0a',
        'background-color': '#fbfbfe',
        'primary-color': '#62041a',
        'secondary-color': '#e8d311',
        'accent-color': '#ff914d',
      },
    },
  },
  plugins: [],
};
