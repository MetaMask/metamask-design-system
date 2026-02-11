# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Uncategorized

- added sidepanel and popup icon ([#898](https://github.com/MetaMask/metamask-design-system/pull/898))
- feat: add Storybook testing to CI workflow ([#893](https://github.com/MetaMask/metamask-design-system/pull/893))
- chore(deps-dev): bump @metamask/auto-changelog from 5.3.0 to 5.3.1 ([#878](https://github.com/MetaMask/metamask-design-system/pull/878))
- feat: add AfterHours icon for React and React Native ([#879](https://github.com/MetaMask/metamask-design-system/pull/879))
- chore: upgrade Storybook from 9.1.17 to 10.2.3 ([#875](https://github.com/MetaMask/metamask-design-system/pull/875))

## [0.6.1]

### Changed

- Updated `@metamask/utils` peer dependency from 11.8.1 to 11.9.0 ([#867](https://github.com/MetaMask/metamask-design-system/pull/867))

### Fixed

- Updated `ButtonIcon` component icon sizes and border radius to match Figma design specifications ([#873](https://github.com/MetaMask/metamask-design-system/pull/873))
  - `ButtonIcon.Sm` now uses 20px icon (previously 16px)
  - `ButtonIcon.Md` now uses 24px icon (previously 20px)
  - `ButtonIcon.Lg` now uses 32px icon (previously 24px)
  - Non-floating border radius now uses 8px for improved visual consistency

## [0.6.0]

### Added

- Add `ButtonHero` component for prominent call-to-action buttons in hero sections and landing pages ([#843](https://github.com/MetaMask/metamask-design-system/pull/843))
  - Extends base Button component with all standard `ButtonBase` props (`variant`, `size`, `disabled`, etc.) plus additional styling optimized for large, attention-grabbing CTAs
  - Import and use like standard Button: `import { ButtonHero } from '@metamask/design-system-react'`
  - Provides consistent, accessible hero button pattern across MetaMask applications
  - Fully typed with `ButtonHeroProps` interface

### Changed

- Updated `@metamask/utils` peer dependency from 11.8.0 to 11.8.1 ([#838](https://github.com/MetaMask/metamask-design-system/pull/838))

## [0.5.0]

### Added

- Added `asChild` functionality to Box component ([#834](https://github.com/MetaMask/metamask-design-system/pull/834))

## [0.4.1]

### Fixed

- Removed unnecessary peer dependencies ([#828](https://github.com/MetaMask/metamask-design-system/pull/828))
- Bump @metamask/utils from 11.7.0 to 11.8.0 ([#827](https://github.com/MetaMask/metamask-design-system/pull/827))
- Bump npm and yarn dependencies ([#829](https://github.com/MetaMask/metamask-design-system/pull/829))
- Bump vite from 5.4.19 to 5.4.20 ([#826](https://github.com/MetaMask/metamask-design-system/pull/826))

## [0.4.0]

### Added

- Added attach money icon ([#823](https://github.com/MetaMask/metamask-design-system/pull/823))

### Fixed

- Fixed Avatar components shrinking in flex layouts ([#825](https://github.com/MetaMask/metamask-design-system/pull/825))
- Jazzicon, Blockies and Maskicon icon generation for CAIP-10 addresses ([#816](https://github.com/MetaMask/metamask-design-system/pull/816))

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

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.6.1...HEAD
[0.6.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.6.0...@metamask/design-system-react@0.6.1
[0.6.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.5.0...@metamask/design-system-react@0.6.0
[0.5.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.4.1...@metamask/design-system-react@0.5.0
[0.4.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.4.0...@metamask/design-system-react@0.4.1
[0.4.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.3.1...@metamask/design-system-react@0.4.0
[0.3.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.3.0...@metamask/design-system-react@0.3.1
[0.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.2.0...@metamask/design-system-react@0.3.0
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.1.0...@metamask/design-system-react@0.2.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-react@0.1.0
