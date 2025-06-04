import { addDecorator } from '@storybook/react-native';
import { addons } from '@storybook/addons';

import { ThemeProvider, Theme } from '@metamask/design-system-twrnc-preset';

import FontLoader from './FontLoader';

addons.setConfig({
  options: {
    storySort: null, // Disables default sorting
  },
});

addDecorator((Story) => (
  <ThemeProvider theme={Theme.Default}>
    <FontLoader>
      <Story />
    </FontLoader>
  </ThemeProvider>
));
