# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0]

### Changed

- **BREAKING:** Removed variant-specific font family classnames in favor of base font families ([#533](https://github.com/MetaMask/metamask-design-system/pull/533)):
  - Removed all `s-*` and `l-*` typography font family classnames (e.g., `s-display-md`, `s-heading-lg`, etc.)
  - Now using three base font family classnames:
    - `font-default` for default text (CentraNo1)
    - `font-accent` for accent text (MMSans)
    - `font-hero` for hero text (MMPoly)
  - See the [@metamask/design-tokens migration guide](../design-tokens/MIGRATION.md#from-version-600-to-700) for details.

## [0.2.0]

### Changed

- Updated to use new font family configuration from @metamask/design-tokens@6.0.0 ([#499](https://github.com/MetaMask/metamask-design-system/pull/499)). Note: This includes breaking changes in the design-tokens package - see the [@metamask/design-tokens migration guide](../design-tokens/MIGRATION.md#from-version-510-to-600) for details.

## [0.1.0]

### Added

- Initial release.

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-tailwind-preset@0.3.0...HEAD
[0.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-tailwind-preset@0.2.0...@metamask/design-system-tailwind-preset@0.3.0
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-tailwind-preset@0.1.0...@metamask/design-system-tailwind-preset@0.2.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-tailwind-preset@0.1.0
