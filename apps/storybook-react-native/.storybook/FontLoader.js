import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

const FontLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'Geist-Regular': require('../fonts/Geist/Geist-Regular.otf'),
        'Geist-RegularItalic': require('../fonts/Geist/Geist-RegularItalic.otf'),
        'Geist-Medium': require('../fonts/Geist/Geist-Medium.otf'),
        'Geist-MediumItalic': require('../fonts/Geist/Geist-MediumItalic.otf'),
        'Geist-Bold': require('../fonts/Geist/Geist-Bold.otf'),
        'Geist-BoldItalic': require('../fonts/Geist/Geist-BoldItalic.otf'),
        'MMPoly-Regular': require('../fonts/MMPoly/MMPoly-Regular.otf'),
        'MMSans-Regular': require('../fonts/MMSans/MMSans-Regular.otf'),
        'MMSans-Medium': require('../fonts/MMSans/MMSans-Medium.otf'),
        'MMSans-Bold': require('../fonts/MMSans/MMSans-Bold.otf'),
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
