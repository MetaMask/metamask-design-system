import React from 'react';
import { View, useColorScheme } from 'react-native';
import { ThemeProvider, Theme } from '@metamask/design-system-twrnc-preset';

interface StorybookProviderProps {
  children: React.ReactNode;
}

export const StorybookProvider: React.FC<StorybookProviderProps> = ({
  children,
}) => {
  const colorScheme = useColorScheme();
  // Handle null case by defaulting to light mode
  const isDarkMode = colorScheme === 'dark';
  const theme = isDarkMode ? Theme.Dark : Theme.Light;

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, padding: 16 }}>
        {children}
      </View>
    </ThemeProvider>
  );
};
