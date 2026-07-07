import { usePureBlack, useTheme } from './hooks';
import { Theme } from './Theme.types';

export type ElevatedListItemOptions = {
  isSelected?: boolean;
};

/**
 * Returns the TWRNC background class for elevated surfaces such as bottom
 * sheets and modals. In pure-black dark mode, surfaces use `bg-alternative` so
 * they read above the `#000000` screen background.
 *
 * @returns The TWRNC background class for the current theme and pure-black state.
 */
export const useElevatedSurfaceClass = (): string => {
  const theme = useTheme();
  const isPureBlack = usePureBlack();

  if (!isPureBlack || theme !== Theme.Dark) {
    return 'bg-default';
  }

  return 'bg-alternative';
};

/**
 * Returns the TWRNC background class for list rows rendered on elevated
 * surfaces. In pure-black dark mode, unselected rows should inherit the parent
 * sheet background instead of painting `bg-default` (#000000).
 *
 * @param options - Row state used to resolve the background class.
 * @param options.isSelected - Whether the row is selected.
 * @returns The TWRNC background class for the list row.
 */
export const useElevatedListItemClass = (
  options: ElevatedListItemOptions = {},
): string => {
  const theme = useTheme();
  const isPureBlack = usePureBlack();
  const { isSelected = false } = options;

  if (isSelected) {
    return 'bg-section';
  }

  if (isPureBlack && theme === Theme.Dark) {
    return '';
  }

  return 'bg-default';
};
