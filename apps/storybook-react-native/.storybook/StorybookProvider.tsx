import React from 'react';
import { View, Platform } from 'react-native';
import {
  ThemeProvider,
  Theme,
  ColorSet,
} from '@metamask/design-system-twrnc-preset';
import { FontLoader } from './FontLoader';

interface StorybookProviderProps {
  children: React.ReactNode;
}

export const StorybookProvider: React.FC<StorybookProviderProps> = ({
  children,
}) => {
  const content = (
    <View style={{ backgroundColor: 'white', flex: 1 }}>{children}</View>
  );

  // Only use FontLoader in native environment
  if (Platform.OS !== 'web') {
    return (
      <ThemeProvider theme={Theme.Default} colorSet={ColorSet.Brand}>
        <FontLoader>{content}</FontLoader>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={Theme.Default} colorSet={ColorSet.Brand}>
      {content}
    </ThemeProvider>
  );
};
