import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

const FontLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'Geist Regular': require('../fonts/Geist/Geist Regular.otf'),
        'Geist Regular Italic': require('../fonts/Geist/Geist Regular Italic.otf'),
        'Geist Medium': require('../fonts/Geist/Geist Medium.otf'),
        'Geist Medium Italic': require('../fonts/Geist/Geist Medium Italic.otf'),
        'Geist Bold': require('../fonts/Geist/Geist Bold.otf'),
        'Geist Bold Italic': require('../fonts/Geist/Geist Bold Italic.otf'),
        'MM Poly Regular': require('../fonts/MMPoly/MM Poly Regular.otf'),
        'MM Sans Regular': require('../fonts/MMSans/MM Sans Regular.otf'),
        'MM Sans Medium': require('../fonts/MMSans/MM Sans Medium.otf'),
        'MM Sans Bold': require('../fonts/MMSans/MM Sans Bold.otf'),
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
