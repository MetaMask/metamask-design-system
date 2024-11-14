import type { ColorSchemeName } from 'react-native';

import baseConfig from '../../tailwind.config';
import { colorSetList } from './Theme.constants';
import type { ColorSet } from './Theme.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flattenColors = (colors: Record<string, any>, prefix = '') => {
  let result: Record<string, string> = {};
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result = { ...result, ...flattenColors(value, `${prefix}${key}-`) };
    } else if (typeof value === 'string') {
      result[`${prefix}${key}`] = value;
    } else {
      console.warn(`Invalid color value for ${prefix}${key}:`, value);
    }
  }
  return result;
};

export const generateTailwindConfig = (
  colorSet: ColorSet,
  colorScheme: ColorSchemeName,
) => {
  const activeColorScheme = colorScheme === 'dark' ? 'dark' : 'light';
  const themeColors = colorSetList[colorSet][activeColorScheme];

  if (!themeColors) {
    console.error('Theme colors not found.');
    return {};
  }

  const flattenedColors = flattenColors(themeColors);

  return {
    ...baseConfig,
    theme: {
      ...baseConfig.theme,
      extend: {
        ...baseConfig.theme?.extend,
        colors: {
          ...baseConfig.theme?.extend?.colors,
          ...flattenedColors,
        },
      },
    },
    plugins: baseConfig.plugins || [],
  };
};
