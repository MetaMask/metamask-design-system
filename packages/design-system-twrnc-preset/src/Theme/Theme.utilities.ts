/* eslint-disable @typescript-eslint/no-explicit-any */
import baseConfig from '../../tailwind.config';
import type { ColorSet, ColorScheme } from '../twrnc-settings';
import { colorSetList, typographyTailwindConfig } from '../twrnc-settings';

/**
 * Generates a Tailwind CSS configuration object based on the specified color set and color scheme.
 * This configuration extends the base Tailwind settings with custom theme colors, typography settings,
 * and other style properties for use in React Native with `twrnc`.
 *
 * @param colorSet - The color set to use (e.g., 'Brand', 'Neutral'). Determines the base palette for the theme.
 * @param colorScheme - The current color scheme ('light' or 'dark'). Specifies whether to use light or dark mode styles.
 * @returns A Tailwind CSS configuration object with extended theme properties and plugins.
 * @example
 * const colorSet = 'Brand';
 * const colorScheme = 'dark';
 *
 * const tailwindConfig = generateTailwindConfig(colorSet, colorScheme);
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
 * @throws Will log an error and return an empty object if theme colors are not found for the specified color set and color scheme.
 */
export const generateTailwindConfig = (
  colorSet: ColorSet,
  colorScheme: ColorScheme,
) => {
  const themeColors = colorSetList[colorSet][colorScheme];

  if (!themeColors) {
    console.error('Theme colors not found.');
    return {};
  }

  return {
    ...baseConfig,
    theme: {
      ...baseConfig.theme,
      extend: {
        ...baseConfig.theme?.extend,
        colors: {
          ...baseConfig.theme?.extend?.colors,
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
    plugins: baseConfig.plugins || [],
  };
};
