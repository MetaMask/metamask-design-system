import type { Theme as DesignTokenTheme } from '@metamask/design-tokens';
import { lightTheme, darkTheme } from '@metamask/design-tokens';

import { Theme } from './Theme.types';

type ThemeColors = DesignTokenTheme['colors'];

type ThemeVariant = {
  light: ThemeColors;
  dark: ThemeColors;
};

type Themes = {
  brand: ThemeVariant;
};

export const themes: Themes = {
  [Theme.Brand]: {
    light: lightTheme.colors,
    dark: darkTheme.colors,
  },
};
