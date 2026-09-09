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
    'Geist-Regular': require('../fonts/Geist/Geist-Regular.otf'),
    'Geist-RegularItalic': require('../fonts/Geist/Geist-RegularItalic.otf'),
    'Geist-Medium': require('../fonts/Geist/Geist-Medium.otf'),
    'Geist-MediumItalic': require('../fonts/Geist/Geist-MediumItalic.otf'),
    'Geist-SemiBold': require('../fonts/Geist/Geist-SemiBold.otf'),
    'Geist-SemiBoldItalic': require('../fonts/Geist/Geist-SemiBoldItalic.otf'),
    'Oswald-Regular': require('../fonts/Oswald/Oswald-Regular.ttf'),
    'Oswald-Medium': require('../fonts/Oswald/Oswald-Medium.ttf'),
    'Oswald-SemiBold': require('../fonts/Oswald/Oswald-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <StorybookUIRoot />;
}

registerRootComponent(App);

export default App;
