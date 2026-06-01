import '../../../packages/design-tokens/dist/styles.css';
import './fonts.css';

import type { Preview, StoryContext } from '@storybook/react-native-web-vite';
import { Theme, ThemeProvider } from '@metamask/design-system-twrnc-preset';
import { darkTheme, lightTheme } from '@metamask/design-tokens';
import React, { type PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Background options keyed by name so Storybook 8+ options API and
// context.globals.backgrounds.value (which returns the key) both work correctly.
const backgroundOptions = {
  light: { name: 'light', value: lightTheme.colors.background.default },
  dark:  { name: 'dark',  value: darkTheme.colors.background.default },
};

function themeFromKey(key?: string): Theme {
  return key === 'dark' ? Theme.Dark : Theme.Light;
}

type ThemeDecoratorProps = PropsWithChildren<{ selectedKey?: string }>;

const ThemeDecorator = ({ children, selectedKey }: ThemeDecoratorProps) => {
  const theme = themeFromKey(selectedKey);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const preview: Preview = {
  decorators: [
    (Story: React.ComponentType, context: StoryContext) => {
      const selectedKey = context.globals?.backgrounds?.value as
        | string
        | undefined;
      return (
        <ThemeDecorator selectedKey={selectedKey}>
          <Story />
        </ThemeDecorator>
      );
    },
  ],
  parameters: {
    backgrounds: {
      options: backgroundOptions,
    },
    layout: 'fullscreen',
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
};

export default preview;
