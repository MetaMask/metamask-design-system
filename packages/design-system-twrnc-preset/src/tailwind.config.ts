import type { TwConfig } from 'twrnc';

import { themeColors } from './colors';
import type { Theme } from './Theme.types';
import { typographyTailwindConfig } from './typography';

/**
 * Generates a Tailwind CSS configuration object based on the specified theme.
 * This configuration extends the base Tailwind settings with custom theme colors, typography settings,
 * and other style properties for use in React Native with `twrnc`.
 *
 * @param theme - The theme ('light' or 'dark'). Specifies whether to use light or dark mode styles.
 * @returns A Tailwind CSS configuration object with extended theme properties and plugins.
 */
export const generateTailwindConfig = (theme: Theme): TwConfig => {
  const colors = themeColors[theme];

  if (!colors) {
    console.error('Theme colors not found.');
    return {};
  }

  return {
    theme: {
      extend: {
        colors,
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
