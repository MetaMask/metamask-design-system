import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import React from 'react';

import { view } from './storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../fonts/Inter/Inter-Regular.ttf'),
    'Inter-RegularItalic': require('../fonts/Inter/Inter-RegularItalic.ttf'),
    'Inter-Medium': require('../fonts/Inter/Inter-Medium.ttf'),
    'Inter-MediumItalic': require('../fonts/Inter/Inter-MediumItalic.ttf'),
    'Inter-SemiBold': require('../fonts/Inter/Inter-SemiBold.ttf'),
    'Inter-SemiBoldItalic': require('../fonts/Inter/Inter-SemiBoldItalic.ttf'),
    'MMPoly-Regular': require('../fonts/MMPoly/MMPoly-Regular.otf'),
    'MMSans-Regular': require('../fonts/MMSans/MMSans-Regular.otf'),
    'MMSans-Medium': require('../fonts/MMSans/MMSans-Medium.otf'),
    'MMSans-Bold': require('../fonts/MMSans/MMSans-Bold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <StorybookUIRoot />;
}

registerRootComponent(App);

export default App;
