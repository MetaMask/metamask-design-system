import type { Config } from 'tailwindcss';

import { colors } from './colors';
import { shadows, shadowPlugin } from './shadows';

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
      boxShadow: shadows,
    },
  },
  plugins: [
    shadowPlugin, // Use the imported shadowPlugin
  ],
};

export default tailwindConfig;
