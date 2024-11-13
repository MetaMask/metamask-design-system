import * as SystemUI from 'expo-system-ui';
import './config';
import { getStorybookUI } from '@storybook/react-native';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import './storybook.requires'; // Ensure this file exists and the path is correct

const StorybookUIRoot = getStorybookUI({
  shouldPersistSelection: true,
  asyncStorage: null, // Set to null if AsyncStorage causes issues
});

registerRootComponent(StorybookUIRoot);
