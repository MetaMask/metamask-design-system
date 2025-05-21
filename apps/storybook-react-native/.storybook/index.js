// apps/storybook-react-native/.storybook/index.js
import './config';
import { getStorybookUI } from '@storybook/react-native';
import './storybook.requires';

export default getStorybookUI({
  shouldPersistSelection: true,
  asyncStorage: null,
});
