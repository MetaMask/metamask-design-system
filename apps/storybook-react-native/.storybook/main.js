// .storybook/main.js
module.exports = {
  stories: [
    '../../../packages/design-system-react-native/src/**/!(temp-components)/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
};
