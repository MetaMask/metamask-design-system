# @metamask/storybook-react-native

This is the React Native Storybook app for the MetaMask Design System.

## Getting Started

```sh
# Start the app
yarn start

# Start on iOS
yarn ios

# Start on Android
yarn android

# Start on Web
yarn web
```

## Storybook

### On-Device Storybook

In this app you can run `yarn storybook` to start on-device storybook or `yarn start` to start your expo app.
This works via env variables and expo constants.

```sh
# Start on-device storybook
yarn storybook

# Start on-device storybook on iOS
yarn storybook:ios

# Start on-device storybook on Android
yarn storybook:android
```

If you add new stories to the on-device version, you either need to have the watcher running or run the stories loader:

```sh
# Update the stories one time
yarn storybook-generate
```

### Web Storybook

Start React Native Web Storybook:

```sh
yarn storybook:web
```

Build React Native Web Storybook:

```sh
yarn build-storybook
```
