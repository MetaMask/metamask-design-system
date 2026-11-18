# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Updated the default `discouragedColors` of `prefer-theme-color-classnames` to the brand palette exposed by `@metamask/design-tokens` ([#1723](https://github.com/MetaMask/metamask-design-system/pull/1723))
  - The default list is now `black`, `blue`, `gray`, `green`, `grey`, `indigo`, `lime`, `orange`, `purple`, `red`, `white`, `yellow`
  - `slateGray`, `pink`, and `teal` are no longer discouraged because they were never MetaMask brand colors, while `grey` and `lime` now are
  - `gray` is kept as an alias so literal classes spelled the Tailwind default way (e.g. `text-gray-500`) are still caught
- Rule documentation URLs now point at the `metamask-design-system` monorepo instead of the retired standalone repositories ([#1723](https://github.com/MetaMask/metamask-design-system/pull/1723))

### Fixed

- `color-no-hex` now flags 8-digit hex values with an alpha channel, such as `#4459ff1a`, which the current design tokens use ([#1723](https://github.com/MetaMask/metamask-design-system/pull/1723))

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

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@2.0.0...HEAD
[2.0.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@1.1.1...@metamask/eslint-plugin-design-tokens@2.0.0
[1.1.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@1.1.0...@metamask/eslint-plugin-design-tokens@1.1.1
[1.1.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@1.0.0...@metamask/eslint-plugin-design-tokens@1.1.0
[1.0.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/eslint-plugin-design-tokens@0.1.0...@metamask/eslint-plugin-design-tokens@1.0.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/eslint-plugin-design-tokens@0.1.0
