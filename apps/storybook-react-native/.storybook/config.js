import { addDecorator } from '@storybook/react-native';
import {
  Theme,
  ThemeProvider,
  ColorScheme,
} from '@metamask/design-system-twrnc-preset';

addDecorator((Story) => (
  <ThemeProvider theme={Theme.Brand} colorScheme={ColorScheme.Themed}>
    <Story />
  </ThemeProvider>
));
