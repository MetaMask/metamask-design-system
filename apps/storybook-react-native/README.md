# `@metamask/storybook-react-native`

Storybook setup for React Native components within the MetaMask design system monorepo. It allows developers to visualize and test components in isolation, ensuring consistency and reliability across the application.

## Installation

Follow these steps to set up the project:

1. **Install Dependencies:**

   ```bash
   yarn install
   ```

2. **Install iOS Dependencies:**

   ```bash
   cd apps/storybook-react-native/ios/
   pod install
   ```

3. **Start the Design System:**
   ```bash
   cd ../../
   yarn workspace @metamask/storybook-react-native start
   ```

## Running the Application

To run the Storybook React Native application:

1. **Open the Xcode Workspace:**

   ```bash
   cd ios/
   open MetamaskStorybookReactNative.xcworkspace
   ```

2. **Run the Application:**
   - In Xcode, select your desired simulator or device.
   - Press the **Play** button or use the shortcut `⌘R` to build and run the app.

## Troubleshooting

### Issues on MacBook with M2 Chip

If you encounter issues while using a MacBook with an M2 chip, follow these steps:

1. **Encountered Error after `pod install`:**

   ```
   [!] Do not use "pod install" from inside Rosetta2 (x86_64 emulation on arm64).

   [!]  - Emulated x86_64 is slower than native arm64

   [!]  - May result in mixed architectures in rubygems (eg: ffi_c.bundle files may be x86_64 with an arm64 interpreter)

   [!] Run "env /usr/bin/arch -arm64 /bin/bash --login" then try again.

   [!] [Codegen] warn: using experimental new codegen integration
   ```

2. **Run Native ARM64 Shell in the terminal:**

   ```bash
   env /usr/bin/arch -arm64 /bin/bash --login
   ```

3. **Remove `.xcode.env.local` File:**

   ```bash
   rm .xcode.env.local
   ```

4. **Run `pod install` Again:**
   ```bash
   pod install
   ```

## Contributing

This package is part of a monorepo. Instructions for contributing can be found in the [monorepo README](https://github.com/MetaMask/metamask-design-system#readme).
