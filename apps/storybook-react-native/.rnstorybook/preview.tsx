import type { Preview } from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { Theme, ThemeProvider } from '@metamask/design-system-twrnc-preset';
import React, { type PropsWithChildren } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { getStorybookBackgrounds } from '../storybook/backgrounds';

const ThemeDecorator = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Theme.Dark : Theme.Light;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const initialTheme =
  Appearance.getColorScheme() === 'dark' ? Theme.Dark : Theme.Light;

const preview: Preview = {
  decorators: [
    withBackgrounds,
    (Story: React.ComponentType) => (
      <ThemeDecorator>
        <Story />
      </ThemeDecorator>
    ),
  ],
  parameters: {
    backgrounds: getStorybookBackgrounds(initialTheme),
  },
};

export default preview;
