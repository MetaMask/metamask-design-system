import { lightTheme, darkTheme } from '@metamask/design-tokens';

import { Theme } from '../Theme/Theme.types';
import type { ColorSetListProps } from '../Theme/Theme.types';

import { flattenColors } from './colors.utilities';

export const colorSetList: ColorSetListProps = {
  [Theme.Light]: flattenColors(lightTheme.colors),
  [Theme.Dark]: flattenColors(darkTheme.colors),
};
