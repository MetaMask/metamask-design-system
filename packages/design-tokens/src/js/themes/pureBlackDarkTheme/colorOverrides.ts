import type { ThemeColors } from '../types';
import type { DeepPartial } from '../utils/deepMerge';

/**
 * Former OLED deltas applied on top of darkTheme.
 *
 * Canonical darkTheme already uses these OLED values, so this object is
 * intentionally empty — pureBlackDarkTheme is an alias of darkTheme until
 * clients remove PureBlackProvider / data-pure-black wiring (TMCU-987).
 */
export const pureBlackDarkColorOverrides = {
  // Keep empty while the provisional pure-black API remains for clients.
} satisfies DeepPartial<ThemeColors>;
