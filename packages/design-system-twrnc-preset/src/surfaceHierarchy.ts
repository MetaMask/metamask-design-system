import { Theme } from './Theme.types';

export type ElevatedListItemOptions = {
  isSelected?: boolean;
};

/**
 * Returns the TWRNC background class for elevated surfaces such as picker
 * bottom sheets and modals. In pure-black dark mode, surfaces use
 * `bg-alternative` so they read above the `#000000` screen background.
 */
export const getElevatedSurfaceClass = (
  theme: Theme,
  isPureBlack: boolean,
): string => {
  if (isPureBlack && theme === Theme.Dark) {
    return 'bg-alternative';
  }

  return 'bg-default';
};

/**
 * Returns the TWRNC background class for screen-level surfaces that should
 * match the canvas background, such as swap numpads and full-width footers.
 * In pure-black dark mode this resolves to `bg-default` (`#000000`).
 */
export const getScreenSurfaceClass = (): string => 'bg-default';

/**
 * Returns the TWRNC background class for list rows rendered on elevated
 * surfaces. In pure-black dark mode, unselected rows should inherit the parent
 * sheet background instead of painting `bg-default` (`#000000`) patches.
 */
export const getElevatedListItemClass = (
  theme: Theme,
  isPureBlack: boolean,
  options: ElevatedListItemOptions = {},
): string => {
  const { isSelected = false } = options;

  if (isSelected) {
    return 'bg-section';
  }

  if (isPureBlack && theme === Theme.Dark) {
    return '';
  }

  return 'bg-default';
};
