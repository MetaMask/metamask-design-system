# `@metamask/storybook-react-native`

Storybook app for validating `@metamask/design-system-react-native` components in a runtime that stays aligned with MetaMask Mobile.

## What this app is for

- Test DSRN components in isolation on iOS and Android.
- Keep dependency behavior close to Mobile (Expo + React Native alignment).
- Validate Storybook v10 integration with native modules.

## Runtime policy

| Mode                                                         | Status                     | Use case                                    |
| ------------------------------------------------------------ | -------------------------- | ------------------------------------------- |
| Development build (`expo run:*` + `expo start --dev-client`) | Supported                  | Primary and required validation path        |
| Storybook web (`storybook dev` / static build)               | Supported                  | Browser-based component review and sharing  |
| Expo Go (`expo start --ios` / `--android`)                   | Unsupported for validation | Known Reanimated/Worklets native mismatches |

Reanimated 4 + Worklets require a **development build**. Expo Go cannot load our current JS stack (Reanimated 4.3 / Worklets 0.8.3 on Expo SDK 54) because its prebuilt native binaries are older.

## Run Storybook (supported flow)

### First time, or after native dependency changes

Build and install the dev client on a simulator or device:

```bash
yarn storybook:ios:build
yarn storybook:android:build
```

### Day-to-day development

Start Metro and open the installed dev client (runs `prestorybook` to regenerate story manifests):

```bash
yarn storybook:ios
yarn storybook:android
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

Storybook native validation uses a **development build**, so it can run Reanimated/Worklets versions ahead of Expo Go. Peer dependencies on `@metamask/design-system-react-native` are aligned with Mobile's Expo SDK 55 platform bump ([metamask-mobile#32281](https://github.com/MetaMask/metamask-mobile/pull/32281)): `react-native-reanimated >=4.2.0` and `react-native-worklets >=0.7.4`.

Expo Go alignment will improve once Storybook follows Mobile to Expo SDK 55.

## Known Expo Go behavior (expected)

- iOS/Android Expo Go throws Reanimated Worklets initialization errors with our current stack.
- Android Expo Go can also fail with missing DateTimePicker native module (`RNCMaterialDatePicker`).
- Use the dev build scripts above instead.

## Troubleshooting

### No development build is installed

```text
CommandError: No development build (com.metamask.storybook) for this project is installed.
Please make and install a development build on the device first.
```

```bash
yarn storybook:ios:build
yarn storybook:ios
```

```bash
yarn storybook:android:build
yarn storybook:android
```

### Failed to locate Android application identifier

```bash
CommandError: Failed to locate the android application identifier in the "android/" folder.
```

Regenerate native projects cleanly, then rebuild:

```bash
yarn workspace @metamask/storybook-react-native exec expo prebuild --clean --platform android
yarn storybook:android:build
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
