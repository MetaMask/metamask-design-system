import { lightTheme, darkTheme } from '@metamask/design-tokens';

import type { ColorSetListProps } from './Theme.types';
import { ColorSet } from './Theme.types';

export const colorSetList: ColorSetListProps = {
  [ColorSet.Brand]: {
    light: lightTheme.colors,
    dark: darkTheme.colors,
  },
};
