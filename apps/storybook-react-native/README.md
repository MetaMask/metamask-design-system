# `@metamask/storybook-react-native`

Storybook setup for React Native components within the MetaMask design system monorepo. It allows developers to visualize and test components in isolation, ensuring consistency and reliability across the application.

## Installation

`yarn install`

## Prerequisites

- [Node.js](https://nodejs.org/) (check package.json for version requirements)
- [Yarn](https://yarnpkg.com/) package manager
- [Expo CLI](https://docs.expo.dev/get-started/installation/):
  ```bash
  yarn global add expo-cli
  ```
- iOS Simulator (for iOS development) or Android Emulator (for Android development)
- Xcode (for iOS development)

## Running Storybook

Run one of these commands to start Storybook:

```bash
# From repository root
yarn storybook:ios    # For iOS
yarn storybook:android    # For Android

# OR from apps/storybook-react-native directory
yarn ios    # For iOS
yarn android    # For Android
```

## Contributing

This package is part of a monorepo. Instructions for contributing can be found in the [monorepo README](https://github.com/MetaMask/metamask-design-system#readme).
