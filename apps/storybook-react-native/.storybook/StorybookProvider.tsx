import React from 'react';
import { View, useColorScheme } from 'react-native';

interface StorybookProviderProps {
  children: React.ReactNode;
}

export const StorybookProvider: React.FC<StorybookProviderProps> = ({
  children,
}) => {
  const colorScheme = useColorScheme();
  // Handle null case by defaulting to light mode
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={{ backgroundColor: isDarkMode ? '#000' : '#fff', flex: 1 }}>
      {children}
    </View>
  );
};
