export default ({ config }) => ({
  ...config,
  name: '@metamask/storybook-react-native',
  slug: 'storybook-react-native',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  newArchEnabled: true,
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/Geist/Geist-Regular.otf',
          './assets/fonts/Geist/Geist-Medium.otf',
          './assets/fonts/Geist/Geist-Bold.otf',
          './assets/fonts/MMSans/MMSans-Regular.otf',
          './assets/fonts/MMSans/MMSans-Medium.otf',
          './assets/fonts/MMSans/MMSans-Bold.otf',
        ],
      },
    ],
  ],
});
