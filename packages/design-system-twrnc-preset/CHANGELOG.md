# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0]

### Changed

- **BREAKING:** Update font family names from space-separated to hyphenated PostScript format for iOS Metro bundler and expo-font compatibility ([#862](https://github.com/MetaMask/metamask-design-system/pull/862))
  - Font family names changed: `"Geist Regular"` → `"Geist-Regular"`, `"Geist Medium"` → `"Geist-Medium"`, `"Geist Bold"` → `"Geist-Bold"`
  - Fixes critical font loading issues on iOS when using Metro bundler with expo-font
  - If using TWRNC preset via `@metamask/design-system-react-native` components, fonts automatically use correct names with no migration needed
  - If directly referencing font families in custom TWRNC styles, update to hyphenated names (e.g., tw`font-['Geist-Regular']` instead of tw`font-['Geist_Regular']`)
  - Android is unaffected by this change
  - Aligns with MetaMask Mobile's font configuration and expo-font requirements

## [0.2.1]

### Fixed

- Updated font file across apps and packages to match mobile codebase ([#801](https://github.com/MetaMask/metamask-design-system/pull/801))

## [0.2.0]

### Added

- Added classnames for 5 new text styles: page heading, section heading, button labels, and amount display ([#777](https://github.com/MetaMask/metamask-design-system/pull/777))
- Added functionality to improve developer experience with tailwind intellisense and linting for react native ([#783](https://github.com/MetaMask/metamask-design-system/pull/783))

## [0.1.0]

### Added

- **Initial release** - MetaMask Design System TWRNC preset
- **ThemeProvider**: Context provider for theme management
- **Hooks**: useTailwind, useTheme
- **Theme Types**: TypeScript definitions for theme configuration
- MetaMask design token integration for React Native
- TWRNC preset configuration with MetaMask styling utilities

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-twrnc-preset@0.3.0...HEAD
[0.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-twrnc-preset@0.2.1...@metamask/design-system-twrnc-preset@0.3.0
[0.2.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-twrnc-preset@0.2.0...@metamask/design-system-twrnc-preset@0.2.1
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-twrnc-preset@0.1.0...@metamask/design-system-twrnc-preset@0.2.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-twrnc-preset@0.1.0
