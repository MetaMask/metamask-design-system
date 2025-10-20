import { colors } from './colors';
import { shadows, shadowPlugin } from './shadows';
import { typography } from './typography';

const tailwindConfig = {
  content: [],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      // Reduces redundancy by enabling shorter Tailwind class names
      textColor: ({ theme }: { theme: (key: string) => any }) => ({
        ...theme('colors'), // Incorporate existing color utilities like text-primary-default
        ...colors.text, // e.g. text-default instead of text-text-default
      }),
      backgroundColor: ({ theme }: { theme: (key: string) => any }) => ({
        ...theme('colors'), // Incorporate existing color utilities like bg-primary-default
        ...colors.background, // e.g. bg-default instead of bg-background-default
      }),
      borderColor: ({ theme }: { theme: (key: string) => any }) => ({
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
