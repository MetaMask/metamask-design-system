const { getDefaultConfig } = require('expo/metro-config');
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');

const defaultConfig = getDefaultConfig(__dirname);

// Add SVG transformer support
defaultConfig.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

// Update asset and source extensions for SVG support
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg');
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'svg'];

module.exports = withStorybook(defaultConfig, {
  enabled: true,
  useJs: false,
});
