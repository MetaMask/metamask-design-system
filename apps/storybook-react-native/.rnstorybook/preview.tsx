import type { Preview } from '@storybook/react-native';
import { Theme, ThemeProvider } from '@metamask/design-system-twrnc-preset';
import React, { type PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';

const ThemeDecorator = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Theme.Dark : Theme.Light;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const preview: Preview = {
  decorators: [
    (Story: React.ComponentType) => (
      <ThemeDecorator>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export default preview;
