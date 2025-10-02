import { view } from './storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
  // Disable AsyncStorage to avoid persistence issues
  storage: {
    getItem: async () => null,
    setItem: async () => {},
  },
  // Reset initial selection
  initialSelection: undefined,
  shouldPersistSelection: false,
});

export default StorybookUIRoot;
