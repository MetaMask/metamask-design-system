# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Uncategorized

- chore(deps-dev): bump @metamask/auto-changelog from 5.3.0 to 5.3.1 ([#878](https://github.com/MetaMask/metamask-design-system/pull/878))
- chore: remove unused eslint-disable comments after eslint upgrades ([#861](https://github.com/MetaMask/metamask-design-system/pull/861))
- chore(deps-dev): bump @metamask/auto-changelog from 5.2.0 to 5.3.0 ([#858](https://github.com/MetaMask/metamask-design-system/pull/858))
- chore(deps-dev): bump @metamask/auto-changelog from 5.1.0 to 5.2.0 ([#853](https://github.com/MetaMask/metamask-design-system/pull/853))
- chore(deps-dev): bump @metamask/auto-changelog from 5.0.2 to 5.1.0 ([#837](https://github.com/MetaMask/metamask-design-system/pull/837))

## [0.6.1]

### Fixed

- Adding new text classnames to twmerge to avoid conflicts ([#802](https://github.com/MetaMask/metamask-design-system/pull/802))

## [0.6.0]

### Added

- Added classnames for 5 new text styles: page heading, section heading, button labels, and amount display ([#777](https://github.com/MetaMask/metamask-design-system/pull/777))

## [0.5.0]

### Added

- Added support for monochromatic button design tokens ([#709](https://github.com/MetaMask/metamask-design-system/pull/709))
- Added background color tokens: section, subsection, muted ([#682](https://github.com/MetaMask/metamask-design-system/pull/682))
- Added DisplayLG typography token support ([#607](https://github.com/MetaMask/metamask-design-system/pull/607))

### Changed

- **BREAKING:** Updated peer dependency to `@metamask/design-tokens@^8.0.0` which includes several breaking changes:
  - Changed default font from CentraNo1 to Geist ([#756](https://github.com/MetaMask/metamask-design-system/pull/756)). This affects all typography tokens and requires updating font imports and references. See the [migration guide](./MIGRATION.md#from-version-700-to-800) for details.

## [0.4.0]

### Added

- Added "accent" colors for light and dark themes ([#534](https://github.com/MetaMask/metamask-design-system/pull/534))

## [0.3.0]

### Changed

- **BREAKING:** Removed variant-specific font family classnames in favor of base font families ([#533](https://github.com/MetaMask/metamask-design-system/pull/533)):
  - Removed all `s-*` and `l-*` typography font family classnames (e.g., `s-display-md`, `s-heading-lg`, etc.)
  - Now using three base font family classnames:
    - `font-default` for default text (Geist)
    - `font-accent` for accent text (MMSans)
    - `font-hero` for hero text (MMPoly)
  - See the [@metamask/design-tokens migration guide](../design-tokens/MIGRATION.md#from-version-600-to-700) for details.

## [0.2.0]

### Changed

- Updated to use new font family configuration from @metamask/design-tokens@6.0.0 ([#499](https://github.com/MetaMask/metamask-design-system/pull/499)). Note: This includes breaking changes in the design-tokens package - see the [@metamask/design-tokens migration guide](../design-tokens/MIGRATION.md#from-version-510-to-600) for details.

## [0.1.0]

### Added

- Initial release.

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-tailwind-preset@0.6.1...HEAD
[0.6.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-tailwind-preset@0.6.0...@metamask/design-system-tailwind-preset@0.6.1
[0.6.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-tailwind-preset@0.5.0...@metamask/design-system-tailwind-preset@0.6.0
[0.5.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-tailwind-preset@0.4.0...@metamask/design-system-tailwind-preset@0.5.0
[0.4.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-tailwind-preset@0.3.0...@metamask/design-system-tailwind-preset@0.4.0
[0.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-tailwind-preset@0.2.0...@metamask/design-system-tailwind-preset@0.3.0
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-tailwind-preset@0.1.0...@metamask/design-system-tailwind-preset@0.2.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-tailwind-preset@0.1.0
