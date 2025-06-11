const designSystemPreset = require('@metamask/design-system-tailwind-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [designSystemPreset],
  content: [
    '../../packages/design-system-react-native/src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // Keep essential semantic colors, remove default palette colors. We want to rely on the colors provided by the design system preset
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
    },
    fontSize: {}, // This removes all default Tailwind font sizes. We want to rely on the design system font sizes and enforce use of the Text component
    extend: {},
  },
  plugins: [],
};
