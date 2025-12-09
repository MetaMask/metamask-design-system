# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Uncategorized

- Revert font weight changes from PR #847 ([#864](https://github.com/MetaMask/metamask-design-system/pull/864))
- chore(deps-dev): bump @metamask/eslint-config-typescript from 14.1.0 to 15.0.0 ([#856](https://github.com/MetaMask/metamask-design-system/pull/856))
- chore: remove unused eslint-disable comments after eslint upgrades ([#861](https://github.com/MetaMask/metamask-design-system/pull/861))
- chore(deps-dev): bump @metamask/auto-changelog from 5.2.0 to 5.3.0 ([#858](https://github.com/MetaMask/metamask-design-system/pull/858))
- chore(deps-dev): bump @metamask/auto-changelog from 5.1.0 to 5.2.0 ([#853](https://github.com/MetaMask/metamask-design-system/pull/853))
- fix: export TextButtonSize enum from design-system-react-native ([#848](https://github.com/MetaMask/metamask-design-system/pull/848))
- chore: update font weight from bold to semi-bold for Geist font alignment ([#847](https://github.com/MetaMask/metamask-design-system/pull/847))
- chore: replace ts-node with tsx to resolve yarn lint hanging issue ([#845](https://github.com/MetaMask/metamask-design-system/pull/845))
- chore(deps): bump @metamask/utils from 11.8.0 to 11.8.1 ([#838](https://github.com/MetaMask/metamask-design-system/pull/838))
- chore(deps-dev): bump @metamask/auto-changelog from 5.0.2 to 5.1.0 ([#837](https://github.com/MetaMask/metamask-design-system/pull/837))

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

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.4.1...HEAD
[0.4.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.4.0...@metamask/design-system-react-native@0.4.1
[0.4.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.3.1...@metamask/design-system-react-native@0.4.0
[0.3.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.3.0...@metamask/design-system-react-native@0.3.1
[0.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.2.0...@metamask/design-system-react-native@0.3.0
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.1.0...@metamask/design-system-react-native@0.2.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-react-native@0.1.0
