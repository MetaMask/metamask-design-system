import type { Config } from 'tailwindcss';

import { colors } from './colors';
import { shadows, shadowPlugin } from './shadows';
import { typography } from './typography';

/**
 * Resolve the compiled output of @metamask/design-system-shared using this
 * preset's own dependency graph, not the consumer's. This is hoisting-safe:
 * shared is a direct dep of the preset so require.resolve always finds it
 * regardless of how the consumer's node_modules is structured.
 *
 * As more token-identity constants (TextColor, BoxBackgroundColor, etc.) move
 * into shared, they are automatically picked up here without any changes to
 * this file.
 */
const sharedDistGlob = `${require.resolve('@metamask/design-system-shared/package.json').replace(/\/package\.json$/, '')}/dist/**/*.{mjs,cjs}`;

const tailwindConfig: Config = {
  content: [sharedDistGlob],
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
    },
  },
  plugins: [
    shadowPlugin, // Allows for combination of size and color shadow utilities
  ],
};

export default tailwindConfig;
module.exports = tailwindConfig;
