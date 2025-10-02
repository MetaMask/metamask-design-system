import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

type FontLoaderProps = {
  children: React.ReactNode;
};

export const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontLoadError, setFontLoadError] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Geist Regular': require('../fonts/Geist/Geist Regular.otf'),
          'Geist Medium': require('../fonts/Geist/Geist Medium.otf'),
          'Geist Bold': require('../fonts/Geist/Geist Bold.otf'),
          'MM Sans Regular': require('../fonts/MMSans/MM Sans Regular.otf'),
          'MM Sans Medium': require('../fonts/MMSans/MM Sans Medium.otf'),
          'MM Sans Bold': require('../fonts/MMSans/MM Sans Bold.otf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.warn(
          'Font loading failed, continuing without custom fonts:',
          error,
        );
        setFontLoadError(true);
        setFontsLoaded(true); // Continue without fonts
      }
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" />;
  }

  return <>{children}</>;
};
