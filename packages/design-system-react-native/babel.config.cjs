module.exports = {
  env: {
    test: {
      presets: ['@react-native/babel-preset'],
      plugins: [
        'react-native-worklets/plugin', // Must be the last plugin
      ],
    },
  },
};
