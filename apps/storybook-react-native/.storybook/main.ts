import type { StorybookConfig } from '@storybook/react-native-web-vite';

const main: StorybookConfig = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/design-system-react-native/src/components/**/*.stories.mdx',
    '../../../packages/design-system-react-native/src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {
    autodocs: true,
  },

  typescript: {
    reactDocgen: 'react-docgen',
  },
};

export default main;
