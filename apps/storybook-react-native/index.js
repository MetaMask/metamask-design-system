// 1) Gesture handler patch must come first
import 'react-native-gesture-handler';

// 2) Expo’s helper that wires AppRegistry for you
import { registerRootComponent } from 'expo';

// 3) Pull in the Storybook UI (your generated bundle)
import StorybookUI from './.storybook';

registerRootComponent(StorybookUI);
