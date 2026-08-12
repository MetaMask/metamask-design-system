import { darkTheme } from '../darkTheme';
import type { Theme } from '../types';

/**
 * Alias of canonical darkTheme (OLED values).
 *
 * TODO(TMCU-987): Remove this export once clients stop importing
 * pureBlackDarkTheme / resolveDarkTheme(true).
 */
export const pureBlackDarkTheme: Theme = darkTheme;
