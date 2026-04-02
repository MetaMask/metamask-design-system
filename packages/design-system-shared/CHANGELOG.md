# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.7.0]

### Added

- Added shared type contracts used by the new React Native `HeaderRoot` component so platform packages can consume a single source of truth for header APIs ([#1029](https://github.com/MetaMask/metamask-design-system/pull/1029)).
- Added shared type contracts used by React Native `BoxHorizontal` and `BoxVertical` utility components ([#1003](https://github.com/MetaMask/metamask-design-system/pull/1003)).

### Changed

- Updated `AvatarBase` shared enums to the ADR-0003/ADR-0004 const-object + string-union pattern for cross-platform type consistency ([#1005](https://github.com/MetaMask/metamask-design-system/pull/1005)).
- Updated runtime dependency `@metamask/utils` to `11.11.0` ([#1033](https://github.com/MetaMask/metamask-design-system/pull/1033)).

## [0.6.0]

### Changed

- Added shared `BadgeWrapper` const objects and props (`BadgeWrapperPosition`, `BadgeWrapperPositionAnchorShape`, `BadgeWrapperCustomPosition`, `BadgeWrapperPropsShared`) so React and React Native now consume a single source of truth for the ADR-0003/ADR-0004 types; both platform packages re-export the shared definitions so existing imports keep working even as the shared package remains the canonical source. See the [design-system-react migration guide](../design-system-react/MIGRATION.md#from-version-0120-to-0130) for additional guidance ([#1014](https://github.com/MetaMask/metamask-design-system/pull/1014)).

## [0.5.0]

### Added

- Added shared `BannerAlertSeverity` and `BannerAlertPropsShared` types for cross-package reuse ([#975](https://github.com/MetaMask/metamask-design-system/pull/975))
- Added shared `AvatarNetworkPropsShared` type (ADR-0004) for cross-package reuse ([#997](https://github.com/MetaMask/metamask-design-system/pull/997))

## [0.4.0]

### Added

- Added shared `ButtonFilter` types and constants for cross-package reuse ([#964](https://github.com/MetaMask/metamask-design-system/pull/964))
  - Added `ButtonFilterVariant` const object with derived string union type (`primary`, `secondary`)
  - Added `ButtonFilterPropsShared` as the shared base props contract used by React and React Native implementations
- Added shared `BannerBase` types and constants for cross-package reuse ([#955](https://github.com/MetaMask/metamask-design-system/pull/955))
  - Added `BannerBaseSeverity` const object with derived string union type for severity variants
  - Added `BannerBasePropsShared` as the shared base props contract used by React and React Native implementations

## [0.3.0]

### Added

- Added shared `BadgeCount` types and constants for cross-package reuse ([#942](https://github.com/MetaMask/metamask-design-system/pull/942))
  - Added `BadgeCountSize` const object and derived `BadgeCountSize` string union type
  - Added `BadgeCountPropsShared` as the shared base props contract used by React and React Native implementations

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

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.7.0...HEAD
[0.7.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.6.0...@metamask/design-system-shared@0.7.0
[0.6.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.5.0...@metamask/design-system-shared@0.6.0
[0.5.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.4.0...@metamask/design-system-shared@0.5.0
[0.4.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.3.0...@metamask/design-system-shared@0.4.0
[0.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.2.0...@metamask/design-system-shared@0.3.0
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.1.3...@metamask/design-system-shared@0.2.0
[0.1.3]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.1.2...@metamask/design-system-shared@0.1.3
[0.1.2]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.1.1...@metamask/design-system-shared@0.1.2
[0.1.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.1.0...@metamask/design-system-shared@0.1.1
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-shared@0.1.0
