# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0]

### Added

- Added centralized `BadgeStatus` types and constants ([#912](https://github.com/MetaMask/metamask-design-system/pull/912))
  - `BadgeStatusStatus` const object with derived string union type for status variants (`active`, `inactive`, `warning`, `danger`, `success`)
  - `BadgeStatusSize` const object with derived string union type for size variants (`sm`, `md`, `lg`)
  - `BadgeStatusPropsShared` type interface for shared component props
  - Enables structural typing - both const object values (`BadgeStatusStatus.Active`) and string literals (`'active'`) are now accepted
  - Implements [ADR-0003](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md) and [ADR-0004](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

## [0.1.3]

### Changed

- Updated `@metamask/utils` dependency from 11.9.0 to 11.10.0 ([#903](https://github.com/MetaMask/metamask-design-system/pull/903))

## [0.1.2]

### Changed

- Updated `@metamask/utils` dependency from 11.8.1 to 11.9.0 ([#867](https://github.com/MetaMask/metamask-design-system/pull/867))

## [0.1.1]

### Fixed

- Bump @metamask/utils from 11.7.0 to 11.8.0 ([#827](https://github.com/MetaMask/metamask-design-system/pull/827))

## [0.1.0]

### Added

- **Initial release** - MetaMask Design System Shared
- Adding CAIP-10 address utilities ([#817](https://github.com/MetaMask/metamask-design-system/pull/817))

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.2.0...HEAD
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.1.3...@metamask/design-system-shared@0.2.0
[0.1.3]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.1.2...@metamask/design-system-shared@0.1.3
[0.1.2]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.1.1...@metamask/design-system-shared@0.1.2
[0.1.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.1.0...@metamask/design-system-shared@0.1.1
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-shared@0.1.0
