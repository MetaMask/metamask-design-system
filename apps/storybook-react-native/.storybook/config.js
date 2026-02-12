import { addDecorator } from '@storybook/react-native';
import { addons } from '@storybook/addons';
import { useColorScheme } from 'react-native';

import { ThemeProvider, Theme } from '@metamask/design-system-twrnc-preset';

import FontLoader from './FontLoader';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

addons.setConfig({
  options: {
    storySort: null, // Disables default sorting
  },
});

const ThemeDecorator = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Theme.Dark : Theme.Light;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <FontLoader>{children}</FontLoader>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

addDecorator((Story) => (
  <ThemeDecorator>
    <Story />
  </ThemeDecorator>
));
