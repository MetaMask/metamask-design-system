import { addDecorator } from '@storybook/react-native';
import { addons } from '@storybook/addons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  ColorSet,
  ThemeProvider,
  Theme,
} from '@metamask/design-system-twrnc-preset';

import FontLoader from './FontLoader';

addons.setConfig({
  options: {
    storySort: null, // Disables default sorting
  },
});

addDecorator((Story) => (
  <GestureHandlerRootView>
    <ThemeProvider colorSet={ColorSet.Brand} theme={Theme.Default}>
      <FontLoader>
        <Story />
      </FontLoader>
    </ThemeProvider>
  </GestureHandlerRootView>
));
