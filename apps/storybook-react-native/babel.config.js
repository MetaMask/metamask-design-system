module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@metamask/design-system-react-native':
              '../../packages/design-system-react-native/src',
            '@metamask/design-system-twrnc-preset':
              '../../packages/design-system-twrnc-preset/src',
            '@metamask/design-tokens': '../../packages/design-tokens/src',
          },
        },
      ],
      'react-native-reanimated/plugin', // Must be the last plugin
    ],
  };
};
