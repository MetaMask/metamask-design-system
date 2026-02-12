module.exports = {
  env: {
    test: {
      presets: [
        '@react-native/babel-preset',
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
        [
          '@babel/preset-typescript',
          {
            allowNamespaces: true,
            allowDeclareFields: true,
          },
        ],
      ],
      plugins: [
        'react-native-reanimated/plugin', // Must be the last plugin
      ],
    },
  },
};
