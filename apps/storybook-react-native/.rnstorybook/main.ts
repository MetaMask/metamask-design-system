import type { StorybookConfig } from '@storybook/react-native';

const config: StorybookConfig = {
  stories: [
    '../../../packages/design-system-react-native/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
};

export default config;
