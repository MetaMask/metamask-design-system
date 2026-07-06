import { darkTheme } from './darkTheme';
import { pureBlackDarkTheme } from './pureBlackDarkTheme';
import type { Theme } from './types';

export const resolveDarkTheme = (isPureBlack = false): Theme =>
  isPureBlack ? pureBlackDarkTheme : darkTheme;
