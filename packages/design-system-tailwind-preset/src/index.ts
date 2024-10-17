import type { Config } from 'tailwindcss';

import { colors } from './colors';

const tailwindConfig: Config = {
  content: [],
  theme: {
    extend: {
      ...colors,
      // Reduces redundancy by enabling shorter Tailwind class names, such as `text-default` instead of `text-text-default`
      textColor: {
        ...colors.text,
      },
      // Reduces redundancy by enabling shorter Tailwind class names, such as `bg-default` instead of `bg-background-default`
      backgroundColor: {
        ...colors.background,
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;

module.exports = tailwindConfig;
