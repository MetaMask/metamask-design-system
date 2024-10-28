const designSystemPreset = require('@metamask/design-system-tailwind-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [designSystemPreset],
  content: [
    // '../../packages/react-components/src/**/*.{js,jsx,ts,tsx}', TO DO: Update when react component package is created
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'l-display-md': 'var(--typography-l-display-md-font-size)',
      },
    },
  },
};
