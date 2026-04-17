const { getDefaultConfig } = require('expo/metro-config');
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const defaultConfig = getDefaultConfig(projectRoot);

// Add SVG transformer support
defaultConfig.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

// Update asset and source extensions for SVG support
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg');
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'svg', 'mjs'];

// Configure for monorepo - watch workspace root and resolve from workspace node_modules
defaultConfig.watchFolders = [workspaceRoot];
defaultConfig.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];


module.exports = withStorybook(defaultConfig, {
  enabled: true,
  useJs: false,
});
