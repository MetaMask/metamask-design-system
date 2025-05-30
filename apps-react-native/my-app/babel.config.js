module.exports = {
  env: {
    test: {
      presets: [
        '@react-native/babel-preset',
        'module:metro-react-native-babel-preset',
        '@babel/preset-env',
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
        '@babel/preset-typescript',
      ],
      plugins: [
        ['@babel/plugin-transform-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }],
        'react-native-reanimated/plugin', // Must be the last plugin
      ],
    },
  },
};
