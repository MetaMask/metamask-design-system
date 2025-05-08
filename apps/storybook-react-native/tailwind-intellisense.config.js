const designSystemPreset = require('@metamask/design-system-tailwind-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [designSystemPreset],
  content: [
    '../../packages/design-system-react-native/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/design-tokens/stories/**/*.{js,jsx,ts,tsx,mdx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
};
