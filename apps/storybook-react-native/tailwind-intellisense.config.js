const {
  generateTailwindConfig,
  Theme,
} = require('@metamask/design-system-twrnc-preset/tailwind.config');

module.exports = {
  content: [
    './stories/**/*.{js,jsx,ts,tsx}',
    '../../packages/design-system-react-native/src/**/*.{js,jsx,ts,tsx}',
  ],
  ...generateTailwindConfig(Theme.Light),
};
