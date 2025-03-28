import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

const FontLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'CentraNo1-Book': require('@metamask/design-tokens/fonts/mobile/CentraNo1/CentraNo1-Book.otf'),
        'CentraNo1-BookItalic': require('@metamask/design-tokens/fonts/mobile/CentraNo1/CentraNo1-BookItalic.otf'),
        'CentraNo1-Medium': require('@metamask/design-tokens/fonts/mobile/CentraNo1/CentraNo1-Medium.otf'),
        'CentraNo1-MediumItalic': require('@metamask/design-tokens/fonts/mobile/CentraNo1/CentraNo1-MediumItalic.otf'),
        'CentraNo1-Bold': require('@metamask/design-tokens/fonts/mobile/CentraNo1/CentraNo1-Bold.otf'),
        'CentraNo1-BoldItalic': require('@metamask/design-tokens/fonts/mobile/CentraNo1/CentraNo1-BoldItalic.otf'),
        'MMPoly-Regular': require('@metamask/design-tokens/fonts/mobile/MMPoly/MMPoly-Regular.otf'),
        'MMSans-Regular': require('@metamask/design-tokens/fonts/mobile/MMSans/MMSans-Regular.otf'),
        'MMSans-Medium': require('@metamask/design-tokens/fonts/mobile/MMSans/MMSans-Medium.otf'),
        'MMSans-Bold': require('@metamask/design-tokens/fonts/mobile/MMSans/MMSans-Bold.otf'),
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
