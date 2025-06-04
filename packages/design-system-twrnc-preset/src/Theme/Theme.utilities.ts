import type { TwConfig } from 'twrnc';

import { colorSetList, typographyTailwindConfig } from '../twrnc-settings';

import type { ThemeType } from './Theme.types';

/**
 * Generates a Tailwind CSS configuration object based on the specified theme.
 * This configuration extends the base Tailwind settings with custom theme colors, typography settings,
 * and other style properties for use in React Native with `twrnc`.
 *
 * @param theme - The theme ('light' or 'dark'). Specifies whether to use light or dark mode styles.
 * @returns A Tailwind CSS configuration object with extended theme properties and plugins.
 * @example
 * const theme = 'dark';
 * const tailwindConfig = generateTailwindConfig(theme);
 * console.log(tailwindConfig);
 *
 * Output:
 * {
 *   theme: {
 *     extend: {
 *       colors: {
 *         primary: '#1a202c',
 *         secondary: '#2d3748',
 *         ...additional flattened colors
 *       },
 *       fontSize: {
 *         'display-md': [32, { lineHeight: '40', letterSpacing: '0', fontWeight: '700' }],
 *         ...other font sizes
 *       },
 *       fontFamily: {
 *         sans: ['Centra No1', 'Helvetica Neue', 'Arial', 'sans-serif'],
 *         ...other font families
 *       },
 *       letterSpacing: {
 *         'display-md': '0',
 *         ...other letter spacings
 *       },
 *       lineHeight: {
 *         'display-md': '40',
 *         ...other line heights
 *       },
 *     },
 *   },
 *   plugins: [],
 * }
 * @throws Will log an error and return an empty object if theme colors are not found for the specified color set and theme.
 */
export const generateTailwindConfig = (theme: ThemeType): TwConfig => {
  const themeColors = colorSetList[theme];

  if (!themeColors) {
    console.error('Theme colors not found.');
    return {};
  }

  return {
    theme: {
      extend: {
        colors: {
          ...themeColors,
        },
        fontSize: {
          ...typographyTailwindConfig.fontSize,
        },
        fontFamily: {
          ...typographyTailwindConfig.fontFamily,
        },
        letterSpacing: {
          ...typographyTailwindConfig.letterSpacing,
        },
        lineHeight: {
          ...typographyTailwindConfig.lineHeight,
        },
      },
    },
  };
};
