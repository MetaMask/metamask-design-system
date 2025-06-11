const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Add SVG transformer support
const {
  resolver: { assetExts, sourceExts },
} = defaultConfig;
defaultConfig.transformer = {
  ...defaultConfig.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};
defaultConfig.resolver = {
  ...defaultConfig.resolver,
  assetExts: assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...sourceExts, 'svg', 'mjs'],
  // Prevent multiple React instances
  alias: {
    react: path.resolve(__dirname, 'node_modules/react'),
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
  },
};

const withStorybook = require('@storybook/react-native/metro/withStorybook');

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
  configPath: path.resolve(__dirname, './.rnstorybook'),
  onDisabledRemoveStorybook: true,
});
