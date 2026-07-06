import { darkTheme } from '../darkTheme';
import type { Theme } from '../types';
import { deepMerge } from '../utils/deepMerge';

import { pureBlackDarkColorOverrides } from './colorOverrides';

export const pureBlackDarkTheme: Theme = {
  ...darkTheme,
  colors: deepMerge(darkTheme.colors, pureBlackDarkColorOverrides),
};
