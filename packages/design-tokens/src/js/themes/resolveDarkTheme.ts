import { darkTheme } from './darkTheme';
import type { Theme } from './types';

/**
 * Resolves the dark theme. OLED / pure-black values are now canonical on
 * darkTheme, so `isPureBlack` is ignored.
 *
 * TODO(TMCU-987): Remove this helper once clients stop calling it.
 *
 * @param _isPureBlack - Unused; kept for client call-site compatibility.
 * @returns Canonical darkTheme.
 */
export const resolveDarkTheme = (_isPureBlack = false): Theme => darkTheme;
