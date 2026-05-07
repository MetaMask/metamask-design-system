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
        // Skeleton loading-placeholder pulse: opacity oscillates 0.2 → 0.1 → 0.2.
        // Used by `Skeleton` to animate the loading bar.
        'skeleton-pulse': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.1' },
        },
      },
      animation: {
        // Duration matches `AnimationDuration.Regularly` from `@metamask/design-tokens`.
        // Inlined to avoid a workspace dependency cycle (design-tokens → design-system-react → tailwind-preset).
        'fade-in': 'fade-in 300ms linear forwards',
        'skeleton-pulse':
          'skeleton-pulse 1400ms cubic-bezier(0, 0, 1, 1) infinite',
      },
    },
  },
  plugins: [
    shadowPlugin, // Allows for combination of size and color shadow utilities
  ],
};

export default tailwindConfig;
module.exports = tailwindConfig;
