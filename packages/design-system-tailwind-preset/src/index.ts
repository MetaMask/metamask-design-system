import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import { colors } from './colors';
import { shadows, shadowColors } from './shadows';

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
    plugin(function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, Record<string, string>>,
        options?: Partial<{
          respectPrefix: boolean;
          respectImportant: boolean;
        }>,
      ) => void;
    }) {
      const shadowColorUtilities: Record<string, Record<string, string>> = {};

      Object.entries(shadowColors).forEach(([key, value]) => {
        shadowColorUtilities[`.shadow-${key}`] = {
          '--shadow-color': value, // This ensures that --shadow-color is set
        };
      });

      // Add the utilities with Tailwind’s addUtilities method
      addUtilities(shadowColorUtilities, {
        respectPrefix: false,
        respectImportant: true,
      });
    }),
  ],
};

export default tailwindConfig;

module.exports = tailwindConfig;
