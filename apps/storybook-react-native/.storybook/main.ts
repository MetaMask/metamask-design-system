import type { StorybookConfig } from '@storybook/react-native-web-vite';
import path from 'path';

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

  async viteFinal(config) {
    // Disable the problematic vite-tsconfig-paths plugin for this project
    const filteredPlugins = config.plugins?.filter((plugin) => {
      const pluginName = plugin?.name || '';
      return pluginName !== 'vite:tsconfig-paths';
    });

    if (filteredPlugins) {
      config.plugins = filteredPlugins;
    }

    // Ensure resolve object exists
    config.resolve = config.resolve || {};

    // Force the react-native alias and design system packages to use source files
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': require.resolve('react-native-web'),
      '@metamask/design-system-twrnc-preset': path.resolve(
        __dirname,
        '../../../packages/design-system-twrnc-preset/src',
      ),
      '@metamask/design-system-react-native': path.resolve(
        __dirname,
        '../../../packages/design-system-react-native/src',
      ),
    };

    return config;
  },
};

export default main;
