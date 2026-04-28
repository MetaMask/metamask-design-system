import { AnimationDuration } from '@metamask/design-tokens';
import type { Config } from 'tailwindcss';

import { colors } from './colors';
import { shadows, shadowPlugin } from './shadows';
import { typography } from './typography';

const tailwindConfig: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      // Reduces redundancy by enabling shorter Tailwind class names
      textColor: ({ theme }) => ({
        ...theme('colors'), // Incorporate existing color utilities like text-primary-default
        ...colors.text, // e.g. text-default instead of text-text-default
      }),
      backgroundColor: ({ theme }) => ({
        ...theme('colors'), // Incorporate existing color utilities like bg-primary-default
        ...colors.background, // e.g. bg-default instead of bg-background-default
      }),
      borderColor: ({ theme }) => ({
        ...theme('colors'), // Incorporate existing color utilities like border-primary-default
        ...colors.border, // e.g. border-default instead of border-border-default
      }),
      ...typography,
      boxShadow: shadows,
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in': `fade-in ${AnimationDuration.Regularly}ms linear forwards`,
      },
    },
  },
  plugins: [
    shadowPlugin, // Allows for combination of size and color shadow utilities
  ],
};

export default tailwindConfig;
module.exports = tailwindConfig;
