const {
  createTailwindConfig,
} = require('@metamask/design-system-twrnc-preset/tailwind.config.js');

module.exports = createTailwindConfig([
  './src/**/*.{js,jsx,ts,tsx}',
  './stories/**/*.{js,jsx,ts,tsx}',
  '../../packages/design-system-react-native/src/**/*.{js,jsx,ts,tsx}',
]);
