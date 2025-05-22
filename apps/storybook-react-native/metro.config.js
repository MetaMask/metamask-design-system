// apps/storybook-react-native/metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');

// adjust to your monorepo root
const workspaceRoot = path.resolve(__dirname, '../..');

module.exports = (async () => {
  // 1) Load Expo’s default config (or change to metro-config if you removed expo)
  const defaultConfig = await getDefaultConfig(__dirname);

  // 2) Project & watch
  defaultConfig.projectRoot = __dirname;
  defaultConfig.watchFolders = [workspaceRoot];

  // 3) Transformer: use the SVG transformer
  defaultConfig.transformer = {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  // 4) Resolver: strip svg from assets, add svg to sources
  defaultConfig.resolver = {
    ...defaultConfig.resolver,
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg', 'mjs'],
    // still dedupe gesture-handler & reanimated if you need:
    extraNodeModules: {
      'react-native-gesture-handler': path.join(
        workspaceRoot,
        'node_modules/react-native-gesture-handler',
      ),
      'react-native-reanimated': path.join(
        workspaceRoot,
        'node_modules/react-native-reanimated',
      ),
    },
    blacklistRE: exclusionList([
      /node_modules\/.*\/node_modules\/react-native-gesture-handler\/.*/,
      /node_modules\/.*\/node_modules\/react-native-reanimated\/.*/,
    ]),
  };

  return defaultConfig;
})();
