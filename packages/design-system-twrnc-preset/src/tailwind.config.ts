import { brandColor } from '@metamask/design-tokens';
import type { TwConfig } from 'twrnc';

import { themeColors } from './colors';
import type { Theme } from './Theme.types';
import { typographyTailwindConfig } from './typography';

/**
 * Extracts colors by prefix from the flattened colors object and removes the prefix from keys.
 * This creates structured color objects that enable shorter Tailwind class names by removing
 * redundant prefixes (e.g., "background-default" becomes "default" for backgroundColor).
 *
 * @param colors - The flattened colors object containing all theme colors with kebab-case keys.
 * @param prefix - The prefix to extract colors for (e.g., 'background', 'text', 'border').
 * @returns A new object containing only colors matching the prefix, with the prefix removed from keys.
 *
 * @example
 * const colors = { 'background-default': '#fff', 'background-muted': '#eee', 'text-default': '#000' };
 * extractColorsByPrefix(colors, 'background');
 * // Returns: { 'default': '#fff', 'muted': '#eee' }
 */
const extractColorsByPrefix = (
  colors: Record<string, string>,
  prefix: string,
) => {
  const extracted: Record<string, string> = {};
  const prefixWithDash = `${prefix}-`;

  Object.entries(colors).forEach(([key, value]) => {
    if (key.startsWith(prefixWithDash)) {
      const colorName = key.replace(prefixWithDash, '');
      extracted[colorName] = value;
    }
  });

  return extracted;
};

/**
 * Generates a Tailwind CSS configuration object based on the specified theme.
 * This configuration extends the base Tailwind settings with custom theme colors, typography settings,
 * and other style properties for use in React Native with `twrnc`.
 *
 * @param theme - The theme ('light' or 'dark'). Specifies whether to use light or dark mode styles.
 * @returns A Tailwind CSS configuration object with extended theme properties and plugins.
 */
export const generateTailwindConfig = (theme: Theme): TwConfig => {
  const designSystemColors = themeColors[theme];

  if (!designSystemColors) {
    console.error('Theme colors not found.');
    return {};
  }

  // Essential colors that need to be available in all color properties
  const essentialColors = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    black: brandColor.black,
    white: brandColor.white,
  };

  // Combined colors object with essential colors and design system colors
  const allColors = {
    ...essentialColors,
    ...designSystemColors,
  };

  // Extract structured colors from the flattened colors
  const backgroundColors = extractColorsByPrefix(
    designSystemColors,
    'background',
  );
  const textColors = extractColorsByPrefix(designSystemColors, 'text');
  const borderColors = extractColorsByPrefix(designSystemColors, 'border');

  const config = {
    theme: {
      // Keep essential semantic colors, remove default palette colors.
      // We want to rely on the colors provided by the design system preset
      colors: allColors,
      // This removes all default Tailwind font sizes and weights.
      // We want to rely on the design system font sizes and enforce use of the Text component
      textColor: {
        ...allColors,
        ...textColors, // e.g. text-default instead of text-text-default
      },
      backgroundColor: {
        ...allColors, // Incorporate essential colors + design system colors
        ...backgroundColors, // e.g. bg-default instead of bg-background-default
      },
      borderColor: {
        ...allColors, // Incorporate essential colors + design system colors
        ...borderColors, // e.g. border-default instead of border-border-default
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
  };

  return config;
};

// Export Theme enum for consumers
export { Theme } from './Theme.types';
