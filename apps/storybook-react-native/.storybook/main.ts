import type { StorybookConfig } from '@storybook/react-native-web-vite';

const main: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/design-system-react-native/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: ['@storybook/addon-docs', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/react-native-web-vite',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen',
    // Restrict TypeScript scanning to prevent monorepo conflicts
    reactDocgenTypescriptOptions: {
      tsconfigPath: '../tsconfig.json',
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },

  // Add core options to prevent conflicts
  core: {
    disableTelemetry: true,
  },
};

export default main;
