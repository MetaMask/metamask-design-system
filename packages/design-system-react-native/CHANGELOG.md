# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Uncategorized

- chore(deps-dev): bump @metamask/auto-changelog from 5.3.0 to 5.3.1 ([#878](https://github.com/MetaMask/metamask-design-system/pull/878))
- feat: add AfterHours icon for React and React Native ([#879](https://github.com/MetaMask/metamask-design-system/pull/879))

## [0.5.1]

### Changed

- Updated `@metamask/utils` peer dependency from 11.8.1 to 11.9.0 ([#867](https://github.com/MetaMask/metamask-design-system/pull/867))

### Fixed

- Updated `ButtonIcon` component icon sizes and border radius to match Figma design specifications ([#873](https://github.com/MetaMask/metamask-design-system/pull/873))
  - `ButtonIcon.Sm` now uses 20px icon (previously 16px)
  - `ButtonIcon.Md` now uses 24px icon (previously 20px)
  - `ButtonIcon.Lg` now uses 32px icon (previously 24px)
  - Non-floating border radius corrected to 4px (previously 2px)

## [0.5.0]

### Changed

- **BREAKING:** Update font file names from space-separated to hyphenated PostScript format for iOS Metro bundler compatibility ([#862](https://github.com/MetaMask/metamask-design-system/pull/862))
  - Font file names changed: "Geist Regular.otf" → "Geist-Regular.otf", "Geist Medium.otf" → "Geist-Medium.otf", "Geist Bold.otf" → "Geist-Bold.otf"
  - Fixes Metro bundler asset resolution issues on iOS that prevented fonts from loading correctly
  - If using `@metamask/design-system-react-native` components as intended, fonts automatically load correctly with no migration needed
  - If manually referencing font file paths in custom code, update all references to use hyphenated file names instead of space-separated names
  - Android is unaffected by this change
- Updated `@metamask/utils` peer dependency from 11.8.0 to 11.8.1 ([#838](https://github.com/MetaMask/metamask-design-system/pull/838))

### Fixed

- Export missing `TextButtonSize` enum from package entry point for TypeScript type safety ([#848](https://github.com/MetaMask/metamask-design-system/pull/848))
  - The `TextButtonSize` enum is now properly exported and accessible for imports
  - Developers can now use typed enums instead of string literals: `import { TextButton, TextButtonSize } from '@metamask/design-system-react-native'` and `<TextButton size={TextButtonSize.Medium} />`
  - This is a non-breaking, additive change that improves type safety

## [0.4.1]

### Fixed

- Removed unnecessary peer dependencies ([#828](https://github.com/MetaMask/metamask-design-system/pull/828))
- Bump @metamask/utils from 11.7.0 to 11.8.0 ([#827](https://github.com/MetaMask/metamask-design-system/pull/827))

## [0.4.0]

### Added

- Added attach money icon ([#823](https://github.com/MetaMask/metamask-design-system/pull/823))

### Fixed

- Jazzicon, Blockies and Maskicon icon generation for CAIP-10 addresses ([#816](https://github.com/MetaMask/metamask-design-system/pull/816))

## [0.3.1]

### Fixed

- fix: export missing Box component color enums: `BoxBackgroundColor` and `BoxBorderColor` for React Native ([#807](https://github.com/MetaMask/metamask-design-system/pull/807))
- fix: make Button `variant` prop optional(`ButtonVariant.Primary` as default) ([#806](https://github.com/MetaMask/metamask-design-system/pull/806))

## [0.3.0]

### Added

- New icons (AppleLogo, Backspace, Candlestick, Clear, MetamaskFoxOutline) ([#798](https://github.com/MetaMask/metamask-design-system/pull/798))

- Figma code connect files for all components ([#766](https://github.com/MetaMask/metamask-design-system/pull/766)), ([#791](https://github.com/MetaMask/metamask-design-system/pull/791)), ([#795](https://github.com/MetaMask/metamask-design-system/pull/795)), ([#796](https://github.com/MetaMask/metamask-design-system/pull/796)), ([#794](https://github.com/MetaMask/metamask-design-system/pull/794)), ([#792](https://github.com/MetaMask/metamask-design-system/pull/792))

### Changed

- Update AvatarAccount shape from circle to square ([#800](https://github.com/MetaMask/metamask-design-system/pull/800))

### Fixed

- Updated font file across apps and packages to match mobile ([#801](https://github.com/MetaMask/metamask-design-system/pull/801))
- Optimize icon SVGs and remove hardcoded colors ([#799](https://github.com/MetaMask/metamask-design-system/pull/799))

## [0.2.0]

### Added

- Added 5 new Text component variants with responsive typography support ([#777](https://github.com/MetaMask/metamask-design-system/pull/777)):
  - `TextVariant.PageHeading` - For main page titles with large, bold styling
  - `TextVariant.SectionHeading` - For section titles with medium, bold styling
  - `TextVariant.ButtonLabelMd` - For medium-sized button labels with optimized button text styling
  - `TextVariant.ButtonLabelLg` - For large-sized button labels with optimized button text styling
  - `TextVariant.AmountDisplayLg` - For large amount/value displays with prominent numeric styling
- Added comprehensive utility props to Box component for enhanced layout control ([#779](https://github.com/MetaMask/metamask-design-system/pull/779)) and fixes ([#781](https://github.com/MetaMask/metamask-design-system/pull/781)):
  - **Margin props:** `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`, `marginHorizontal`, `marginVertical`
  - **Padding props:** `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `paddingHorizontal`, `paddingVertical`
  - **Border props:** `borderWidth`, `borderColor`
  - **Background props:** `backgroundColor`
  - All spacing props use the `BoxSpacing` scale (0-12) where each unit equals 4px
  - Border width uses `BoxBorderWidth` type (0, 1, 2, 4, 8) for valid Tailwind/TWRNC values
  - Color props use design system color tokens for consistent theming across light/dark modes

## [0.1.0]

### Added

- **Initial release** - MetaMask Design System React Native component library
- **Avatar Components**: AvatarAccount, AvatarBase, AvatarFavicon, AvatarGroup, AvatarIcon, AvatarNetwork, AvatarToken
- **Badge Components**: BadgeCount, BadgeIcon, BadgeNetwork, BadgeStatus, BadgeWrapper
- **Button Components**: Button, ButtonBase, ButtonIcon, TextButton
- **Form Components**: Checkbox
- **Layout Components**: Box
- **Typography Components**: Text
- **Icon Component**: Icon with comprehensive icon set
- **Utility Components**: Blockies, ButtonAnimated, Jazzicon, Maskicon, TextOrChildren
- Full TypeScript support with type definitions and enums
- React Native integration with TWRNC preset support

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.5.1...HEAD
[0.5.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.5.0...@metamask/design-system-react-native@0.5.1
[0.5.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.4.1...@metamask/design-system-react-native@0.5.0
[0.4.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.4.0...@metamask/design-system-react-native@0.4.1
[0.4.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.3.1...@metamask/design-system-react-native@0.4.0
[0.3.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.3.0...@metamask/design-system-react-native@0.3.1
[0.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.2.0...@metamask/design-system-react-native@0.3.0
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.1.0...@metamask/design-system-react-native@0.2.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-react-native@0.1.0
