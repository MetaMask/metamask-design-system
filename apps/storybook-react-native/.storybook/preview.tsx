import type { Preview } from '@storybook/react-native-web-vite';
import { Theme, ThemeProvider } from '@metamask/design-system-twrnc-preset';
import React, { type PropsWithChildren, useEffect } from 'react';
import { Appearance, useColorScheme, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  getStorybookBackgrounds,
  getStorybookDefaultBackground,
} from '../storybook/backgrounds';

type StorySurfaceProps = PropsWithChildren<{
  backgroundColor: string;
}>;

const StorySurface = ({ backgroundColor, children }: StorySurfaceProps) => {
  useEffect(() => {
    if (typeof document === 'undefined' || !backgroundColor) {
      return;
    }

    const { documentElement, body } = document;
    const root = document.getElementById('root');

    documentElement.style.backgroundColor = backgroundColor;
    documentElement.style.height = '100%';

    body.style.backgroundColor = backgroundColor;
    body.style.minHeight = '100vh';
    body.style.height = '100%';

    if (root) {
      root.style.backgroundColor = backgroundColor;
      root.style.minHeight = '100vh';
      root.style.height = '100%';
    }
  }, [backgroundColor]);

  return <View style={{ flex: 1, backgroundColor }}>{children}</View>;
};

const ThemeDecorator = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Theme.Dark : Theme.Light;
  const backgroundColor = getStorybookDefaultBackground(theme);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <StorySurface backgroundColor={backgroundColor}>
            {children}
          </StorySurface>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const initialTheme =
  Appearance.getColorScheme() === 'dark' ? Theme.Dark : Theme.Light;

const preview: Preview = {
  decorators: [
    (Story: React.ComponentType) => (
      <ThemeDecorator>
        <Story />
      </ThemeDecorator>
    ),
  ],
  parameters: {
    backgrounds: getStorybookBackgrounds(initialTheme),
    layout: 'fullscreen',
  },
};

export default preview;
