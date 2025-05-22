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
  extraNodeModules: {
    '@metamask/design-system-react-native': path.resolve(
      __dirname,
      '../../packages/design-system-react-native/src',
    ),
    '@metamask/design-system-twrnc-preset': path.resolve(
      __dirname,
      '../../packages/design-system-twrnc-preset/src',
    ),
    '@metamask/design-tokens': path.resolve(
      __dirname,
      '../../packages/design-tokens/src',
    ),
  },
};

const withStorybook = require('@storybook/react-native/metro/withStorybook');

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
  configPath: path.resolve(__dirname, './.rnstorybook'),
  onDisabledRemoveStorybook: true,
});
