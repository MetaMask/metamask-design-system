module.exports = {
  env: {
    test: {
      presets: ['@react-native/babel-preset'],
      plugins: [
        'react-native-reanimated/plugin', // Must be the last plugin
      ],
    },
  },
};
