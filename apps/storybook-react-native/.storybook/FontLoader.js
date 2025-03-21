import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

const FontLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'CentraNo1-Book': require('../assets/fonts/CentraNo1/CentraNo1-Book.otf'),
        'CentraNo1-BookItalic': require('../assets/fonts/CentraNo1/CentraNo1-BookItalic.otf'),
        'CentraNo1-Medium': require('../assets/fonts/CentraNo1/CentraNo1-Medium.otf'),
        'CentraNo1-MediumItalic': require('../assets/fonts/CentraNo1/CentraNo1-MediumItalic.otf'),
        'CentraNo1-Bold': require('../assets/fonts/CentraNo1/CentraNo1-Bold.otf'),
        'CentraNo1-BoldItalic': require('../assets/fonts/CentraNo1/CentraNo1-BoldItalic.otf'),
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
