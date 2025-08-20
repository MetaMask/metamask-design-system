# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.1]

### Fixed

- Removed DOMPurify dependency from Maskicon component ([#812](https://github.com/MetaMask/metamask-design-system/pull/812))
- Aligned React peer dependencies with MetaMask extension React 17 ([#809](https://github.com/MetaMask/metamask-design-system/pull/809))

## [0.3.0]

### Added

- New icons (AppleLogo, Backspace, Candlestick, Clear, MetamaskFoxOutline) ([#798](https://github.com/MetaMask/metamask-design-system/pull/798))

- Figma code connect files for all components ([#766](https://github.com/MetaMask/metamask-design-system/pull/766)), ([#791](https://github.com/MetaMask/metamask-design-system/pull/791)), ([#795](https://github.com/MetaMask/metamask-design-system/pull/795)), ([#796](https://github.com/MetaMask/metamask-design-system/pull/796)), ([#794](https://github.com/MetaMask/metamask-design-system/pull/794)), ([#792](https://github.com/MetaMask/metamask-design-system/pull/792))

### Changed

- Update AvatarAccount shape from circle to square ([#800](https://github.com/MetaMask/metamask-design-system/pull/800))
- Update README.mdx files for template alignment ([#771](https://github.com/MetaMask/metamask-design-system/pull/771))

### Fixed

- Adding new text classnames to twmerge to avoid conflicts ([#802](https://github.com/MetaMask/metamask-design-system/pull/802))
- Optimize icon SVGs and remove hardcoded colors ([#799](https://github.com/MetaMask/metamask-design-system/pull/799))
- Add ref support to Box component using forwardRef ([#790](https://github.com/MetaMask/metamask-design-system/pull/790))

## [0.2.0]

### Added

- Added 5 new Text component variants with responsive typography support ([#777](https://github.com/MetaMask/metamask-design-system/pull/777)):
  - `TextVariant.PageHeading` - For main page titles (renders as `<h1>` by default)
  - `TextVariant.SectionHeading` - For section titles (renders as `<h2>` by default)
  - `TextVariant.ButtonLabelMd` - For medium-sized button labels (renders as `<span>` by default)
  - `TextVariant.ButtonLabelLg` - For large-sized button labels (renders as `<span>` by default)
  - `TextVariant.AmountDisplayLg` - For large amount/value displays (renders as `<span>` by default)
- Added comprehensive utility props to Box component for enhanced layout control ([#779](https://github.com/MetaMask/metamask-design-system/pull/779)) and fixes ([#781](https://github.com/MetaMask/metamask-design-system/pull/781)):
  - **Margin props:** `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`, `marginHorizontal`, `marginVertical`
  - **Padding props:** `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `paddingHorizontal`, `paddingVertical`
  - **Border props:** `borderWidth`, `borderColor`
  - **Background props:** `backgroundColor`
  - All spacing props use the `BoxSpacing` scale (0-12) where each unit equals 4px
  - Border width uses `BoxBorderWidth` type (0, 1, 2, 4, 8) for valid Tailwind CSS values
  - Color props use design system color tokens for consistent theming

## [0.1.0]

### Added

- **Initial release** - MetaMask Design System React component library
- **Avatar Components**: AvatarAccount, AvatarBase, AvatarFavicon, AvatarGroup, AvatarIcon, AvatarNetwork, AvatarToken
- **Badge Components**: BadgeCount, BadgeIcon, BadgeNetwork, BadgeStatus, BadgeWrapper
- **Button Components**: Button, ButtonBase, ButtonIcon, TextButton
- **Form Components**: Checkbox
- **Layout Components**: Box
- **Typography Components**: Text
- **Icon Component**: Icon with comprehensive icon set
- **Utility Components**: Blockies, Jazzicon, Maskicon
- **Utilities**: twMerge utility for proper Tailwind class conflict resolution
- Full TypeScript support with type definitions and enums
- Tailwind CSS integration with design token support

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.3.1...HEAD
[0.3.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.3.0...@metamask/design-system-react@0.3.1
[0.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.2.0...@metamask/design-system-react@0.3.0
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.1.0...@metamask/design-system-react@0.2.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-react@0.1.0
