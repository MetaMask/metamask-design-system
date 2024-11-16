import { lightTheme, darkTheme } from '../themes';

/**
 * This object is DEPRECATED in favour of the theme objects
 * jest ignores this file when testing coverage
 */

export const colors = {
  light: {
    ...lightTheme.colors,
  },
  dark: {
    ...darkTheme.colors,
  },
};
