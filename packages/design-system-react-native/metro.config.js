const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const {
    resolver: { assetExts, sourceExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
