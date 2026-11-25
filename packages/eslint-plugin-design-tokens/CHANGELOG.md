# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.1]

### Fixed

- Aligned the rules with the current design tokens ([#1723](https://github.com/MetaMask/metamask-design-system/pull/1723))
  - `prefer-theme-color-classnames` now defaults `discouragedColors` to `black` and `white`, the only literal color classnames the MetaMask Tailwind and twrnc setups expose; literal brand-family and `gray` classes (for example `bg-blue-500`, `text-gray-500`, `bg-grey-050`) are no longer flagged by default because those classnames never resolve under MetaMask setups — restore any of them through the `discouragedColors` option
  - `color-no-hex` now reports 8-digit hex values with an alpha channel (for example `#4459ff1a`), which previously went unflagged
  - Rule docs and links now point at the `metamask-design-system` monorepo

## [2.0.0]

### Changed

- **BREAKING:** The minimum supported Node.js version is now 24 (`engines.node` is `>=24`) ([#38](https://github.com/MetaMask/eslint-plugin-design-tokens/pull/38))
- This package is being migrated to the [`metamask-design-system`](https://github.com/MetaMask/metamask-design-system) monorepo ([#37](https://github.com/MetaMask/eslint-plugin-design-tokens/pull/37))

## [1.1.1]

### Changed

- Adding (MIT OR Apache 2.0) license aligning with MetaMask’s open-source standards ([#28](https://github.com/MetaMask/eslint-plugin-design-tokens/pull/28))

## [1.1.0]

### Added

- Adding `prefer-theme-color-classnames` rule ([#22](https://github.com/MetaMask/eslint-plugin-design-tokens/pull/22))
- Updating PR template to align better with mobile and extension ([#19](https://github.com/MetaMask/eslint-plugin-design-tokens/pull/19))
- Updating readme rule table with color-no-hex rule ([#18](https://github.com/MetaMask/eslint-plugin-design-tokens/pull/18))

## [1.0.0]

### Added

- Adding `color-no-hex` rule ([#11](https://github.com/MetaMask/eslint-plugin-design-tokens/pull/11))

## [0.1.0]

### Changed

- Initial release

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@2.0.1...HEAD
[2.0.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@2.0.0...@metamask/eslint-plugin-design-tokens@2.0.1
[2.0.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@1.1.1...@metamask/eslint-plugin-design-tokens@2.0.0
[1.1.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@1.1.0...@metamask/eslint-plugin-design-tokens@1.1.1
[1.1.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@1.0.0...@metamask/eslint-plugin-design-tokens@1.1.0
[1.0.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@0.1.0...@metamask/eslint-plugin-design-tokens@1.0.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/eslint-plugin-design-tokens@0.1.0
