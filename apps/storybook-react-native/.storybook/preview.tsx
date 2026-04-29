import type { Preview } from '@storybook/react-native-web-vite';
import {
  Theme,
  ThemeProvider,
  useTailwind,
} from '@metamask/design-system-twrnc-preset';
import React, { type PropsWithChildren, useEffect } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const StorySurface = ({ children }: PropsWithChildren) => {
  const tw = useTailwind();
  const backgroundColor = StyleSheet.flatten(
    tw.style('bg-background-default'),
  )?.backgroundColor as string | undefined;

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

  return <View style={tw.style('flex-1 bg-background-default')}>{children}</View>;
};

const ThemeDecorator = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Theme.Dark : Theme.Light;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StorySurface>{children}</StorySurface>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeDecorator>
        <Story />
      </ThemeDecorator>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default preview;
