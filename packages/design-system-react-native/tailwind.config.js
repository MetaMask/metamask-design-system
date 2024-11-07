// tailwind.config.js

const { colors } = require('@metamask/design-tokens');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.light.primary.default,
        'text-alternative': colors.light.text.alternative,
      },
    },
  },
};
