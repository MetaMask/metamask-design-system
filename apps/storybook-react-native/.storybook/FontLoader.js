import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

const FontLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'EuclidCircularB-Regular': require('../assets/fonts/EuclidCircularB-Regular.otf'),
        'EuclidCircularB-Bold': require('../assets/fonts/EuclidCircularB-Bold.otf'),
        'EuclidCircularB-RegularItalic': require('../assets/fonts/EuclidCircularB-RegularItalic.otf'),
        'EuclidCircularB-BoldItalic': require('../assets/fonts/EuclidCircularB-BoldItalic.otf'),
        'EuclidCircularB-Medium': require('../assets/fonts/EuclidCircularB-Medium.otf'),
        'EuclidCircularB-MediumItalic': require('../assets/fonts/EuclidCircularB-MediumItalic.otf'),
      });
      setFontsLoaded(true);
    })();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" />;
  }

  return children;
};

export default FontLoader;
