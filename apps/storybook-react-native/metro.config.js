const path = require('path');
const {
  withStorybook,
} = require('@storybook/react-native/metro/withStorybook');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');
const designSystemReactNativeSrc = path.resolve(
  workspaceRoot,
  'packages/design-system-react-native/src',
);

const defaultConfig = getDefaultConfig(projectRoot);

// Watch the monorepo so src edits invalidate the bundle.
defaultConfig.watchFolders = [
  ...(defaultConfig.watchFolders ?? []),
  workspaceRoot,
];

// Resolve the DS package from src (same as Vite Storybook), not stale dist/.
const previousResolveRequest = defaultConfig.resolver.resolveRequest;
defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === '@metamask/design-system-react-native') {
    return {
      filePath: path.join(designSystemReactNativeSrc, 'index.ts'),
      type: 'sourceFile',
    };
  }

  if (previousResolveRequest) {
    return previousResolveRequest(context, moduleName, platform);
  }

  return context.resolveRequest(context, moduleName, platform);
};

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

module.exports = withStorybook(defaultConfig);
