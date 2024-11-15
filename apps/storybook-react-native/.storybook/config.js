import { addDecorator } from '@storybook/react-native';
import {
  ColorSet,
  ThemeProvider,
  Theme,
} from '@metamask/design-system-twrnc-preset';

addDecorator((Story) => (
  <ThemeProvider colorSet={ColorSet.Brand} theme={Theme.Default}>
    <Story />
  </ThemeProvider>
));
