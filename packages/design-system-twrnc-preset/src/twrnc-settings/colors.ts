import { lightTheme, darkTheme } from '@metamask/design-tokens';

import type { ColorSetListProps } from './colors.types';
import { ColorSet } from './colors.types';
import { flattenColors } from './colors.utilities';

export const colorSetList: ColorSetListProps = {
  [ColorSet.Brand]: {
    light: flattenColors(lightTheme.colors),
    dark: flattenColors(darkTheme.colors),
  },
};
