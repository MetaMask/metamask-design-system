# `@metamask/storybook-react-native`

Storybook app for validating `@metamask/design-system-react-native` components in a runtime that stays aligned with MetaMask Mobile.

## What this app is for

- Test DSRN components in isolation on iOS and Android.
- Keep dependency behavior close to Mobile (Expo + React Native alignment).
- Validate Storybook v10 integration with native modules.

## Runtime policy

| Mode                                                         | Status                     | Use case                                        |
| ------------------------------------------------------------ | -------------------------- | ----------------------------------------------- |
| Development build (`expo run:*` + `expo start --dev-client`) | Supported                  | Primary and required validation path            |
| Storybook web (`storybook dev` / static build)               | Supported                  | Browser-based component review and sharing      |
| Expo Go (`expo start --ios` / `--android`)                   | Unsupported for validation | Smoke checks only; known native module failures |

## Run Storybook (supported flow)

```bash
# 1) Build and install the native clients
yarn storybook:ios
yarn storybook:android

# 2) Start Metro for dev-client
yarn workspace @metamask/storybook-react-native exec expo start --dev-client
```

If you are running Mobile and Storybook side-by-side, use a separate Metro port:

```bash
yarn workspace @metamask/storybook-react-native exec expo start --dev-client --port 8088
```

## Run Storybook web

```bash
# Start the web Storybook app
yarn workspace @metamask/storybook-react-native storybook:web

# Build a static Storybook site
yarn workspace @metamask/storybook-react-native build-storybook
```

## Version alignment policy

This app should remain aligned with Mobile versions (currently Expo 52 / RN 0.76.x) rather than tracking newer Storybook template stacks (for example Expo 55) ahead of Mobile.

## Known Expo Go behavior (expected)

- iOS Expo Go can throw repeated Reanimated Worklets initialization errors.
- Android Expo Go can fail with missing DateTimePicker native module (`RNCMaterialDatePicker`).
- These are dependency/runtime mismatches in Expo Go for our current alignment, not dev-build blockers.

## Troubleshooting

### No development build is installed

```text
› Opening on Android...
CommandError: No development build (com.metamask.storybook) for this project is installed.
Please make and install a development build on the device first.
```

```bash
yarn workspace @metamask/storybook-react-native exec expo run:android
yarn workspace @metamask/storybook-react-native exec expo start --dev-client --android
```

### Failed to locate Android application identifier

```bash
CommandError: Failed to locate the android application identifier in the "android/" folder.
```

This means the local `android/` folder is partial or malformed. Regenerate it cleanly:

```bash
yarn workspace @metamask/storybook-react-native exec expo prebuild --clean --platform android
yarn storybook:android
```

### Android install fails with insufficient storage

```text
INSTALL_FAILED_INSUFFICIENT_STORAGE
```

Free emulator storage (or wipe emulator data), then reinstall.

### Watchman recrawl warnings

Run the `watchman watch-del ... && watchman watch-project ...` command printed in the warning output.

### `expo-doctor` Metro false positive with Storybook

If `expo-doctor` reports an `ERR_REQUIRE_ESM` from Storybook Metro integration, treat that specific Metro check as non-blocking and focus on actual SDK/dependency mismatch findings (`expo install --check`).
