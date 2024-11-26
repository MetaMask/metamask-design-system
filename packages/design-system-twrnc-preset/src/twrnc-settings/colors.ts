import { lightTheme, darkTheme } from '@metamask/design-tokens';

import type { ColorSetListProps } from './colors.types';
import { ColorSet, ColorScheme } from './colors.types';
import { flattenColors } from './colors.utilities';

export const colorSetList: ColorSetListProps = {
  [ColorSet.Brand]: {
    [ColorScheme.Light]: flattenColors(lightTheme.colors),
    [ColorScheme.Dark]: flattenColors(darkTheme.colors),
  },
};
