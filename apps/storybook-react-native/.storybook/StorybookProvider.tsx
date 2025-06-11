import React from 'react';
import { View, Platform, useColorScheme } from 'react-native';
import { ThemeProvider, Theme } from '@metamask/design-system-twrnc-preset';
import { FontLoader } from './FontLoader';

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

  const content = (
    <View style={{ backgroundColor: isDarkMode ? 'black' : 'white', flex: 1 }}>
      {children}
    </View>
  );

  // Only use FontLoader in native environment
  if (Platform.OS !== 'web') {
    return (
      <ThemeProvider theme={theme}>
        <FontLoader>{content}</FontLoader>
      </ThemeProvider>
    );
  }

  return <ThemeProvider theme={theme}>{content}</ThemeProvider>;
};
