# `@metamask/storybook-react-native`

Storybook setup for React Native components within the MetaMask design system monorepo. It allows developers to visualize and test components in isolation, ensuring consistency and reliability across the application.

## Installation

`yarn install`

## Running Storybook

Run one of these commands to start Storybook:

```bash
# From repository root
yarn storybook:ios        # Build + install iOS dev build
yarn storybook:android    # Build + install Android dev build

# OR from apps/storybook-react-native directory
yarn ios        # Build + install iOS dev build
yarn android    # Build + install Android dev build
```

### Stable startup flow (recommended and supported path)

Use development builds when validating Storybook behavior with native modules:

```bash
# 1) Build/install native app
yarn storybook:ios
yarn storybook:android

# 2) Start Metro in dev-client mode
yarn workspace @metamask/storybook-react-native exec expo start --dev-client
```

## Runtime support policy

This app is intended to stay aligned with MetaMask Mobile runtime expectations. In practice:

| Mode                                                         | Status      | Intended usage                                                   |
| ------------------------------------------------------------ | ----------- | ---------------------------------------------------------------- |
| Development build (`expo run:*` + `expo start --dev-client`) | Supported   | Primary path for component validation and native-module behavior |
| Expo Go (`expo start --ios` / `--android`)                   | Unsupported | Not a validation target for this app                             |

## DX workflow

Use this workflow to reduce setup churn and avoid misleading failures:

```bash
# 1) Build/install dev clients
yarn storybook:ios
yarn storybook:android

# 2) Start Storybook in dev-client mode
yarn workspace @metamask/storybook-react-native exec expo start --dev-client
```

When switching frequently between Mobile and this app, prefer using different Metro ports to avoid collisions:

```bash
yarn workspace @metamask/storybook-react-native exec expo start --dev-client --port 8088
```

## Troubleshooting

- `No development build (com.metamask.storybook) is installed`: run `expo run:ios` or `expo run:android` once before `expo start --dev-client`.
- `INSTALL_FAILED_INSUFFICIENT_STORAGE` on Android emulator: free emulator storage, uninstall old app builds, or wipe emulator data.
- Repeated Watchman recrawl warnings: run the `watchman watch-del ... && watchman watch-project ...` command printed by Watchman.

### Android dev-client missing build error

If you see:

```text
› Opening on Android...
CommandError: No development build (com.metamask.storybook) for this project is installed.
Please make and install a development build on the device first.
```

Use this recovery flow:

```bash
# 1) Build + install the Android development client
yarn workspace @metamask/storybook-react-native exec expo run:android

# 2) Start Metro for the dev client
yarn workspace @metamask/storybook-react-native exec expo start --dev-client --android
```

If it still fails:

```bash
# Remove stale app install from the emulator/device
adb uninstall com.metamask.storybook

# Reinstall development build
yarn workspace @metamask/storybook-react-native exec expo run:android
```

### `expo-doctor` false positive with Storybook Metro integration

When running:

```bash
yarn workspace @metamask/storybook-react-native exec npx expo-doctor@latest --verbose
```

you may see a Metro check failure similar to:

```text
Check for issues with Metro config
Error [ERR_REQUIRE_ESM]: require() of ES Module .../storybook/dist/common/index.js
from .../@storybook/react-native/dist/metro/withStorybook.js not supported
```

For this app, this is a known false positive from `expo-doctor` loading Storybook's Metro wrapper, not a runtime blocker by itself.

What to do:

1. Treat the Metro check error above as non-blocking.
2. Still act on other `expo-doctor` findings, especially SDK dependency mismatch output.
3. Use `expo install --check` as the primary compatibility signal for Expo SDK dependency alignment.

## Contributing

This package is part of a monorepo. Instructions for contributing can be found in the [monorepo README](https://github.com/MetaMask/metamask-design-system#readme).
