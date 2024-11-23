import { addDecorator } from '@storybook/react-native';
import {
  ColorSet,
  ThemeProvider,
  Theme,
} from '@metamask/design-system-twrnc-preset';

import FontLoader from './FontLoader';

addDecorator((Story) => (
  <ThemeProvider colorSet={ColorSet.Brand} theme={Theme.Default}>
    <FontLoader>
      <Story />
    </FontLoader>
  </ThemeProvider>
));
