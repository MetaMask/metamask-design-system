# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.12.0]

### Added

- Added `TitleHubPropsShared` and `CheckboxPropsShared` for shared cross-platform component contracts. ([#1052](https://github.com/MetaMask/metamask-design-system/pull/1052), [#1040](https://github.com/MetaMask/metamask-design-system/pull/1040))

### Changed

- Expanded the `react` peer dependency range to support React 19 consumers. ([#1089](https://github.com/MetaMask/metamask-design-system/pull/1089))

### Removed

- **BREAKING:** Removed `isReactNodeRenderable` from the public API; replace imports with plain truthy checks instead. See [Migration Guide](./MIGRATION.md#from-version-0110-to-0120). ([#1076](https://github.com/MetaMask/metamask-design-system/pull/1076))

## [0.11.0]

### Added

- Added `IconAlertSeverity` and `IconAlertPropsShared` shared types for cross-platform use ([#1060](https://github.com/MetaMask/metamask-design-system/pull/1060))
- Added `AvatarFaviconSize` and `AvatarFaviconPropsShared` shared types for cross-platform use ([#1062](https://github.com/MetaMask/metamask-design-system/pull/1062))

## [0.10.0]

### Added

- Added `TextVariant`, `TextColor`, `FontWeight`, `FontStyle`, `FontFamily`, and `TextPropsShared` shared types for cross-platform use ([#1047](https://github.com/MetaMask/metamask-design-system/pull/1047))

## [0.9.0]

### Added

- Added `BadgeNetworkPropsShared` shared type for cross-platform use ([#1021](https://github.com/MetaMask/metamask-design-system/pull/1021))
- Added `HeaderSearchVariant`, `HeaderSearchPropsShared`, `HeaderSearchInlinePropsShared`, and `HeaderSearchScreenPropsShared` shared types for cross-platform use ([#1031](https://github.com/MetaMask/metamask-design-system/pull/1031))
- Added `KeyValueRowVariant` const object (`Summary`, `Input`) and `KeyValueRowPropsShared` shared type for cross-platform use ([#1023](https://github.com/MetaMask/metamask-design-system/pull/1023))
- Added `KeyValueColumnPropsShared` shared type for cross-platform use ([#1046](https://github.com/MetaMask/metamask-design-system/pull/1046))

### Changed

- **BREAKING:** Renamed `BoxHorizontalPropsShared` to `BoxRowPropsShared` and `BoxVerticalPropsShared` to `BoxColumnPropsShared` ([#1050](https://github.com/MetaMask/metamask-design-system/pull/1050))
  - See [Migration Guide](../design-system-react-native/MIGRATION.md#from-version-0150-to-0160)

## [0.8.0]

### Added

- Added `AvatarToken` shared types (`AvatarTokenSize`, `AvatarTokenPropsShared`) for cross-platform use ([#1009](https://github.com/MetaMask/metamask-design-system/pull/1009))
- Added `AvatarAccount` shared types (`AvatarAccountPropsShared`) for cross-platform use ([#1015](https://github.com/MetaMask/metamask-design-system/pull/1015))

## [0.7.0]

### Added

- Added shared types used by new React Native header components, including `HeaderRoot` contracts consumed by `@metamask/design-system-react-native` ([#1029](https://github.com/MetaMask/metamask-design-system/pull/1029))
- Added shared `BoxHorizontal` and `BoxVertical` utility component contracts for cross-platform layout primitives ([#1003](https://github.com/MetaMask/metamask-design-system/pull/1003))

### Changed

- Migrated `AvatarBase` type exports from enum-based definitions to shared const-object + string-union types, keeping consumers aligned with the ADR-0003/ADR-0004 type model ([#1005](https://github.com/MetaMask/metamask-design-system/pull/1005))
- Updated `@metamask/utils` dependency to `^11.11.0` ([#1033](https://github.com/MetaMask/metamask-design-system/pull/1033))

## [0.6.0]

### Changed

- Added shared `BadgeWrapper` const objects and props (`BadgeWrapperPosition`, `BadgeWrapperPositionAnchorShape`, `BadgeWrapperCustomPosition`, `BadgeWrapperPropsShared`) so React and React Native now consume a single source of truth for the ADR-0003/ADR-0004 types; both platform packages re-export the shared definitions so existing imports keep working even as the shared package remains the canonical source. See the [design-system-react migration guide](../design-system-react/MIGRATION.md#from-version-0120-to-0130) for additional guidance ([#1014](https://github.com/MetaMask/metamask-design-system/pull/1014))

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

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.12.0...HEAD
[0.12.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.11.0...@metamask/design-system-shared@0.12.0
[0.11.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.10.0...@metamask/design-system-shared@0.11.0
[0.10.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.9.0...@metamask/design-system-shared@0.10.0
[0.9.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.8.0...@metamask/design-system-shared@0.9.0
[0.8.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.7.0...@metamask/design-system-shared@0.8.0
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
