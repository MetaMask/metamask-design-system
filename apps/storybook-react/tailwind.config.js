/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // '../../packages/react-components/src/**/*.{js,jsx,ts,tsx}', TO DO: Update when react component package is created
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
