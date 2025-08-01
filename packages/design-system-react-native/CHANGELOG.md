# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Uncategorized

- fix: Updated font file across apps and packages ([#801](https://github.com/MetaMask/metamask-design-system/pull/801))
- chore: update AvatarAccount shape from circle to square ([#800](https://github.com/MetaMask/metamask-design-system/pull/800))
- chore: optimize icon SVGs and remove hardcoded colors ([#799](https://github.com/MetaMask/metamask-design-system/pull/799))
- feat: add new icons (AppleLogo, Backspace, Candlestick, Clear, MetamaskFoxOutline) ([#798](https://github.com/MetaMask/metamask-design-system/pull/798))
- chore: code connect for checkbox ([#791](https://github.com/MetaMask/metamask-design-system/pull/791))
- chore: adding code connect to buttons ([#795](https://github.com/MetaMask/metamask-design-system/pull/795))
- chore: adding figma connect for icon and button icon ([#796](https://github.com/MetaMask/metamask-design-system/pull/796))
- feat: add Badge Figma Code Connect integration ([#794](https://github.com/MetaMask/metamask-design-system/pull/794))
- feat: add Avatar Figma Code Connect integration and refactor Box component ([#792](https://github.com/MetaMask/metamask-design-system/pull/792))
- fix: remove figma.json and fix lint rules ([#786](https://github.com/MetaMask/metamask-design-system/pull/786))
- chore: more eslint refinements ([#785](https://github.com/MetaMask/metamask-design-system/pull/785))
- feat: figma code connect, docs and avatar account ([#766](https://github.com/MetaMask/metamask-design-system/pull/766))

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

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.2.0...HEAD
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.1.0...@metamask/design-system-react-native@0.2.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-react-native@0.1.0
