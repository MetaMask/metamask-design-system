const {
  withStorybook,
} = require('@storybook/react-native/metro/withStorybook');
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Add SVG transformer support
defaultConfig.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer',
);

// Update asset and source extensions for SVG support
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  (ext) => ext !== 'svg',
);
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'svg',
];

module.exports = withStorybook(defaultConfig, {
  // On-device MCP (Storybook React Native v10.3+). Documentation tools work
  // with experimental_mcp alone; websockets are required for select-story.
  // See https://storybookjs-react-native.mintlify.app/guides/mcp-integration
  websockets: 'auto',
  experimental_mcp: true,
});
