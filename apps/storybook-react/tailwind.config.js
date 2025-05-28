const designSystemPreset = require('@metamask/design-system-tailwind-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [designSystemPreset],
  content: [
    '../../packages/design-system-react/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/design-tokens/stories/**/*.{js,jsx,ts,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {}, // This removes all default Tailwind colors. We want to rely on the colors provided by @metamask-previews/design-system-tailwind-preset
    extend: {},
  },
  plugins: [],
};
