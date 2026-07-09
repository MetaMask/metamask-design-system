# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Uncategorized

- feat: [DSRN] Added Slider component ([#1372](https://github.com/MetaMask/metamask-design-system/pull/1372))

## [0.28.0]

### Added

- Added `CandlestickFilled` to `IconName` ([#1373](https://github.com/MetaMask/metamask-design-system/pull/1373))

## [0.27.0]

### Added

- Added `PureBlackContext`, `PureBlackContextValue`, and `PureBlackProviderProps` for cross-platform pure-black dark mode state ([#1300](https://github.com/MetaMask/metamask-design-system/pull/1300))

## [0.26.0]

### Added

- Added `HardDrive` to `IconName` ([#1302](https://github.com/MetaMask/metamask-design-system/pull/1302))

## [0.25.0]

### Added

- Added `BannerAlertSeverity.Neutral` for cross-platform informational banner styling ([#1287](https://github.com/MetaMask/metamask-design-system/pull/1287))
- Added `ButtonIconSize.Xs` to the shared `ButtonIconSize` const object ([#1266](https://github.com/MetaMask/metamask-design-system/pull/1266))
- Added `children` to `SectionHeaderPropsShared` for supporting content below the title row ([#1267](https://github.com/MetaMask/metamask-design-system/pull/1267))
- Added `FilterButtonSize`, `SegmentedControlSize`, and `ButtonSemanticSize` as component-scoped size aliases ([#1297](https://github.com/MetaMask/metamask-design-system/pull/1297))

### Changed

- **BREAKING:** Dropped Node.js 20 and 22 support for the release line; no public API changes were needed in `@metamask/design-system-shared`, but consumers must run on Node 24 or newer ([#1263](https://github.com/MetaMask/metamask-design-system/pull/1263))
- **BREAKING:** Removed `titleStartAccessory` and `titleEndAccessory` from `TitleAlertPropsShared` ([#1268](https://github.com/MetaMask/metamask-design-system/pull/1268))
  - See [Migration Guide](./MIGRATION.md#titlealert-title-accessories-removed)

## [0.24.0]

### Changed

- **BREAKING:** Removed `TextButtonPropsShared` export; cross-platform `TextButton` type alignment is deferred pending design coordination ([#1259](https://github.com/MetaMask/metamask-design-system/pull/1259))

## [0.23.0]

### Added

- Added `SwitchPropsShared` for cross-platform `Switch` support ([#1022](https://github.com/MetaMask/metamask-design-system/pull/1022))
- Added `SegmentedControlPropsShared` for cross-platform `SegmentedControl` support ([#1242](https://github.com/MetaMask/metamask-design-system/pull/1242))
- Added `ListItemSelectPropsShared` and `ListItemMultiSelectPropsShared` for cross-platform list selection rows ([#1230](https://github.com/MetaMask/metamask-design-system/pull/1230))
- Added `Trophy` to `IconName` ([#1235](https://github.com/MetaMask/metamask-design-system/pull/1235))

### Changed

- Added `accessoryGap` to `ListItemPropsShared` to control spacing between row accessories and inner content ([#1232](https://github.com/MetaMask/metamask-design-system/pull/1232))
- **BREAKING:** Renamed `SegmentButton`/`SegmentGroup` shared types and context to `FilterButton`/`FilterButtonGroup`; prop shapes are unchanged ([#1240](https://github.com/MetaMask/metamask-design-system/pull/1240))
  - See [Migration Guide](./MIGRATION.md#from-version-0220-to-0230)
- **BREAKING:** Removed `startAccessory`/`endAccessory` from `ContentPropsShared` and removed `topAccessory`/`bottomAccessory`; row accessories belong on `ListItemPropsShared` instead ([#1231](https://github.com/MetaMask/metamask-design-system/pull/1231))
  - See [design-system-react-native Migration Guide](../design-system-react-native/MIGRATION.md#content-shell-accessories-removed-row-accessories-moved-to-listitem)

## [0.22.0]

### Added

- Added `ListItemPropsShared` and related shared types for cross-platform `ListItem` support ([#1203](https://github.com/MetaMask/metamask-design-system/pull/1203))
- Added `ToastPropsShared`, `ToastSeverity`, and `Toast` animation constants to shared package, consolidating the Toast type definitions used by React and React Native ([#1190](https://github.com/MetaMask/metamask-design-system/pull/1190))
- Added `TextButtonPropsShared` to align `TextButton` API across React and React Native ([#1224](https://github.com/MetaMask/metamask-design-system/pull/1224))
- Added `AvatarNetworkSize` as a named export from the shared package ([#1225](https://github.com/MetaMask/metamask-design-system/pull/1225))

### Changed

- **BREAKING:** `AvatarIconSeverity.Error`, `IconAlertSeverity.Error`, and `TagSeverity.Error` renamed to `.Danger`; severity vocabulary standardized to use `Danger` for destructive/critical states ([#1159](https://github.com/MetaMask/metamask-design-system/pull/1159))

## [0.21.0]

### Added

- Added `ContentPropsShared` and `ContentVerticalAlignment` so React Native can compose list-style rows and related layout patterns ([#1192](https://github.com/MetaMask/metamask-design-system/pull/1192))

### Changed

- **BREAKING:** Dropped Node.js 18 support for the release line; no public API changes were needed in `@metamask/design-system-shared`, but consumers must run on Node 20 or newer ([#1206](https://github.com/MetaMask/metamask-design-system/pull/1206))
- **BREAKING:** Updated `TextAreaPropsShared` to remove `inputElement` so React Native `TextArea` can render the root `TextInput` directly ([#1205](https://github.com/MetaMask/metamask-design-system/pull/1205))

## [0.20.0]

### Added

- Added `FlashFilled` icon (filled lightning bolt) to `IconName`, keeping the centralized icon set aligned across React and React Native ([#1191](https://github.com/MetaMask/metamask-design-system/pull/1191))
- Added `SelectButtonSize` so `SelectButton` exposes a semantic size type shared across platforms ([#1177](https://github.com/MetaMask/metamask-design-system/pull/1177))
- Added `TextFieldPropsShared` for the cross-platform text field input contract ([#1170](https://github.com/MetaMask/metamask-design-system/pull/1170))

## [0.19.0]

### Added

- Exported `TitleAlertPropsShared` for cross-platform alert title layouts ([#1131](https://github.com/MetaMask/metamask-design-system/pull/1131))
- Exported `SectionHeaderPropsShared` for cross-platform section heading layouts ([#1175](https://github.com/MetaMask/metamask-design-system/pull/1175))

### Changed

- Updated the shared `Telegram` icon asset to match the official Telegram logo so React and React Native stay aligned ([#1176](https://github.com/MetaMask/metamask-design-system/pull/1176))

## [0.18.0]

### Added

- Exported `SelectButton` prop and variant types (`SelectButtonPropsShared`, `SelectButtonVariant`, `SelectButtonEndArrow`), `SegmentGroupPropsShared`, and `SegmentGroupContext` so mobile and web packages share one segment and select contract ([#1172](https://github.com/MetaMask/metamask-design-system/pull/1172))
- Exported `SensitiveTextLength`, `SensitiveTextPropsShared`, and related types for cross-platform masking and reveal behavior ([#1164](https://github.com/MetaMask/metamask-design-system/pull/1164))
- Exported `HelpTextSeverity`, `HelpTextPropsShared`, and related types for cross-platform helper and validation text ([#1169](https://github.com/MetaMask/metamask-design-system/pull/1169))
- Exported `TextAreaPropsShared` for cross-platform multi-line input wrappers ([#1141](https://github.com/MetaMask/metamask-design-system/pull/1141))

## [0.17.0]

### Added

- Added `ListArrow`, `Musd`, and `MusdFilled` to the shared icon exports; refreshed `Candlestick`; and added `Group`, `PieChart`, and `Predictions` so React and React Native stay aligned on `IconName` ([#1157](https://github.com/MetaMask/metamask-design-system/pull/1157), [#1161](https://github.com/MetaMask/metamask-design-system/pull/1161), [#1162](https://github.com/MetaMask/metamask-design-system/pull/1162), [#1163](https://github.com/MetaMask/metamask-design-system/pull/1163))

## [0.16.0]

### Added

- Added `Merge` to the shared icon exports so React and React Native consumers can access it through their existing `IconName` APIs ([#1155](https://github.com/MetaMask/metamask-design-system/pull/1155))
- Added shared `Input` contracts for a controlled `value`, `isReadOnly`, and `isStateStylesDisabled`, making it easier to build cross-platform wrappers against one public input API ([#1043](https://github.com/MetaMask/metamask-design-system/pull/1043))
- Added shared `AvatarGroup` size, variant, and prop contracts for consumers building cross-platform abstractions on top of `@metamask/design-system-shared` ([#1067](https://github.com/MetaMask/metamask-design-system/pull/1067))

## [0.15.0]

### Added

- Added shared `ButtonBaseSize`, `ButtonSize`, `ButtonHeroSize`, `ButtonVariant`, `ButtonBasePropsShared`, and `ButtonPropsShared` exports so React and React Native button APIs can share one cross-platform type contract ([#1034](https://github.com/MetaMask/metamask-design-system/pull/1034))
- Added shared `ButtonIconSize`, `ButtonIconVariant`, and `ButtonIconPropsShared` exports so React and React Native `ButtonIcon` APIs can share one cross-platform type contract ([#1038](https://github.com/MetaMask/metamask-design-system/pull/1038))
- Added shared `TextFieldPropsShared` for the controlled text-field contract used by `TextField` and `TextFieldSearch` across platform packages ([#1081](https://github.com/MetaMask/metamask-design-system/pull/1081))

## [0.14.0]

### Added

- Added `Telegram` to the shared icon exports so both platform packages can consume it through their existing `IconName` APIs ([#1122](https://github.com/MetaMask/metamask-design-system/pull/1122))
- Added shared `BadgeIconPropsShared` types so `BadgeIcon` now uses one cross-platform prop contract in React and React Native ([#1010](https://github.com/MetaMask/metamask-design-system/pull/1010))
- Added shared `AvatarIcon` contracts, including `AvatarIconPropsShared`, `AvatarIconSize`, and `AvatarIconSeverity`, so both platform packages consume the same canonical type definitions ([#996](https://github.com/MetaMask/metamask-design-system/pull/996))

## [0.13.0]

### Added

- Added `TitleStandardPropsShared` and `TitleSubpagePropsShared` for shared header composition across platform packages ([#1051](https://github.com/MetaMask/metamask-design-system/pull/1051), [#1059](https://github.com/MetaMask/metamask-design-system/pull/1059))
- Added `TagSeverity` and `TagPropsShared` for shared Tag contracts consumed by platform packages ([#1053](https://github.com/MetaMask/metamask-design-system/pull/1053))

### Changed

- **BREAKING:** Updated shared `Box` exports (`BoxFlexDirection`, `BoxFlexWrap`, `BoxAlignItems`, `BoxJustifyContent`, `BoxBackgroundColor`, `BoxBorderColor`, `BoxSpacing`, `BoxBorderWidth`, `BoxPropsShared`) from enums to const objects with derived string unions ([#1026](https://github.com/MetaMask/metamask-design-system/pull/1026))
  - Removed `BoxBackgroundColor.WarningAlternative`, `BoxBackgroundColor.SuccessAlternative`, `BoxBorderColor.WarningAlternative`, `BoxBorderColor.SuccessAlternative`, and `BoxBorderColor.InfoAlternative`
  - See [Migration Guide](./MIGRATION.md#from-version-0120-to-0130)
- **BREAKING:** Updated shared `Icon` exports (`IconName`, `IconColor`, `IconSize`, `IconPropsShared`) to use const objects with derived string unions and made `@metamask/design-system-shared` the source of truth for icon names and assets across React and React Native ([#1042](https://github.com/MetaMask/metamask-design-system/pull/1042))
  - See [Migration Guide](./MIGRATION.md#from-version-0120-to-0130)

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

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.28.0...HEAD
[0.28.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.27.0...@metamask/design-system-shared@0.28.0
[0.27.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.26.0...@metamask/design-system-shared@0.27.0
[0.26.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.25.0...@metamask/design-system-shared@0.26.0
[0.25.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.24.0...@metamask/design-system-shared@0.25.0
[0.24.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.23.0...@metamask/design-system-shared@0.24.0
[0.23.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.22.0...@metamask/design-system-shared@0.23.0
[0.22.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.21.0...@metamask/design-system-shared@0.22.0
[0.21.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.20.0...@metamask/design-system-shared@0.21.0
[0.20.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.19.0...@metamask/design-system-shared@0.20.0
[0.19.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.18.0...@metamask/design-system-shared@0.19.0
[0.18.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.17.0...@metamask/design-system-shared@0.18.0
[0.17.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.16.0...@metamask/design-system-shared@0.17.0
[0.16.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.15.0...@metamask/design-system-shared@0.16.0
[0.15.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.14.0...@metamask/design-system-shared@0.15.0
[0.14.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.13.0...@metamask/design-system-shared@0.14.0
[0.13.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-shared@0.12.0...@metamask/design-system-shared@0.13.0
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
