# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Uncategorized

- feat(dsrn): add themed mark colors and unified marks API to Slider ([#1385](https://github.com/MetaMask/metamask-design-system/pull/1385))
- feat(BannerBase): add actionButtonLayout End option ([#1386](https://github.com/MetaMask/metamask-design-system/pull/1386))
- fix: Fixed ListItemMultiSelect story for variants ([#1387](https://github.com/MetaMask/metamask-design-system/pull/1387))
- feat(dsrn): replace ListItem verticalAlignment with variant layout ([#1384](https://github.com/MetaMask/metamask-design-system/pull/1384))

## [0.35.0]

### Added

- Added `Slider` for controlled range input with pan/tap gestures, optional range dots and labels, and hooks for non-linear scales ([#1372](https://github.com/MetaMask/metamask-design-system/pull/1372))

### Changed

- Updated `FilterButton` to compose from `ButtonPrimary`, `ButtonSecondary`, and `ButtonTertiary` instead of hand-rolled styles, so selected-state text and icon colors stay consistent with button variants ([#1379](https://github.com/MetaMask/metamask-design-system/pull/1379))
- Updated `ButtonBase` to merge `startIconProps.twClassName` and `endIconProps.twClassName` last, matching the existing `textProps.twClassName` pattern ([#1379](https://github.com/MetaMask/metamask-design-system/pull/1379))

### Fixed

- Fixed `ActionListItem` painting `bg-default` on elevated surfaces in pure-black mode; rows now inherit the parent background and use `bg-pressed` on press ([#1374](https://github.com/MetaMask/metamask-design-system/pull/1374))
- Fixed `FilterButton` selected-state text appearing invisible (white-on-white) in dark mode ([#1379](https://github.com/MetaMask/metamask-design-system/pull/1379))

## [0.34.0]

### Added

- Added `CandlestickFilled` to `IconName` ([#1373](https://github.com/MetaMask/metamask-design-system/pull/1373))

### Changed

- **BREAKING:** Updated peer dependencies to require React Native Reanimated 4 and `react-native-worklets`; Reanimated 3 is no longer supported ([#1216](https://github.com/MetaMask/metamask-design-system/pull/1216))
  - See [Migration Guide](./MIGRATION.md#reanimated-4-worklets-peer-dependencies)

## [0.33.0]

### Changed

- Updated `BottomSheetDialog` to use `background.alternative` and pure-black shadow tokens when pure-black mode is active via `usePureBlack` from `@metamask/design-system-twrnc-preset` ([#1307](https://github.com/MetaMask/metamask-design-system/pull/1307))

## [0.32.0]

### Added

- Added `HardDrive` to `IconName` ([#1302](https://github.com/MetaMask/metamask-design-system/pull/1302))

## [0.31.0]

### Added

- Added `children` prop to `SectionHeader` for supporting content below the title row ([#1267](https://github.com/MetaMask/metamask-design-system/pull/1267))
- Added `BannerAlertSeverity.Neutral` for informational banners without semantic severity coloring ([#1287](https://github.com/MetaMask/metamask-design-system/pull/1287))
- Added `ButtonIconSize.Xs` (20px button dimension mapping to `IconSize.Sm`) ([#1266](https://github.com/MetaMask/metamask-design-system/pull/1266))
- Added `FilterButtonSize`, `SegmentedControlSize`, and `ButtonSemanticSize` as component-scoped size aliases for `FilterButton`, `SegmentedControl`, and `ButtonSemantic` ([#1297](https://github.com/MetaMask/metamask-design-system/pull/1297))

### Changed

- **BREAKING:** Dropped Node.js 20 and 22 support for the release line; consumers must run Node 24 or newer ([#1263](https://github.com/MetaMask/metamask-design-system/pull/1263))
- **BREAKING:** Removed `titleStartAccessory` and `titleEndAccessory` from `TitleAlert` to align with the Figma component ([#1268](https://github.com/MetaMask/metamask-design-system/pull/1268))
  - See [Migration Guide](./MIGRATION.md#titlealert-title-accessories-removed)
- Updated `SectionHeader` so `children` render full-width below the header row; default start and end icon size changed from `Md` to `Sm` ([#1298](https://github.com/MetaMask/metamask-design-system/pull/1298))
- Updated `BannerBase` spacing, padding, action button margin, and close button alignment to match Figma ([#1269](https://github.com/MetaMask/metamask-design-system/pull/1269))
- Updated `BannerAlert` to remove the severity-colored left border and inherit `BannerBase` default padding ([#1270](https://github.com/MetaMask/metamask-design-system/pull/1270))
- Updated `MainActionButtons` vertical padding from 16px to 12px to match Figma ([#1246](https://github.com/MetaMask/metamask-design-system/pull/1246))
- Updated `Tag` neutral variant default icon and text colors to `alternative` ([#1294](https://github.com/MetaMask/metamask-design-system/pull/1294))
- Updated `BottomSheetHeader` default horizontal padding to match Figma and align with `HeaderStandard` ([#1264](https://github.com/MetaMask/metamask-design-system/pull/1264))
- Updated `BottomSheetFooter` container padding to 16px horizontal and 0px vertical ([#1265](https://github.com/MetaMask/metamask-design-system/pull/1265))

## [0.30.2]

### Fixed

- Fixed `Content` value and subvalue to right-align in list rows when token amounts and fiat equivalents differ in length, including in `ListItem` ([#1257](https://github.com/MetaMask/metamask-design-system/pull/1257))

## [0.30.1]

### Fixed

- Fixed `BottomSheetDialog` pan callbacks to run on the UI thread, resolving broken slow-drag gesture ([#1253](https://github.com/MetaMask/metamask-design-system/pull/1253))
- Fixed `Tag` gap between icon and label from 4px to 2px to match design spec ([#1236](https://github.com/MetaMask/metamask-design-system/pull/1236))

## [0.30.0]

### Added

- Added `Switch` for controlled on/off toggles with optional `label`, `isDisabled`, and `accessibilityRole="switch"` ([#1022](https://github.com/MetaMask/metamask-design-system/pull/1022))
- Added `HeaderSubpage` — a fixed subpage navigation row with identity content and back/close shortcuts ([#1241](https://github.com/MetaMask/metamask-design-system/pull/1241))
- Added `SegmentedControl` — a bordered, controlled segmented picker composing `FilterButton` children with `value`/`onChange` ([#1242](https://github.com/MetaMask/metamask-design-system/pull/1242))
- Added `ListItemSelect` and `ListItemMultiSelect` for single- and multi-select list rows with `isSelected` styling ([#1230](https://github.com/MetaMask/metamask-design-system/pull/1230))
- Added `Trophy` to `IconName` ([#1235](https://github.com/MetaMask/metamask-design-system/pull/1235))

### Changed

- Added `accessoryGap` to `ListItem` to control spacing between row accessories and inner content (`BoxSpacing`, default `0`; pass `accessoryGap={4}` for legacy 16px spacing) ([#1232](https://github.com/MetaMask/metamask-design-system/pull/1232))
- **BREAKING:** Renamed `SegmentButton`/`SegmentGroup` (and related types/context) to `FilterButton`/`FilterButtonGroup`; props and behavior are unchanged — `ButtonFilter` is unaffected ([#1240](https://github.com/MetaMask/metamask-design-system/pull/1240))
  - See [Migration Guide](./MIGRATION.md#from-version-0290-to-0300)
- **BREAKING:** `Content` is now inner-only; `startAccessory`/`endAccessory` moved to `ListItem`, and `topAccessory`/`bottomAccessory` removed — compose column shell with `BoxColumn` instead ([#1231](https://github.com/MetaMask/metamask-design-system/pull/1231))
  - Row accessory spacing defaults to `accessoryGap={0}`; pass `accessoryGap={4}` to restore previous 16px spacing
  - See [Migration Guide](./MIGRATION.md#content-shell-accessories-removed-row-accessories-moved-to-listitem)

### Fixed

- Fixed unsatisfiable `lodash` peer dependency range from `^4.17.23` to `^4.17.21` ([#1228](https://github.com/MetaMask/metamask-design-system/pull/1228))

## [0.29.0]

### Added

- Added `ListItem` component for list row layouts ([#1203](https://github.com/MetaMask/metamask-design-system/pull/1203))

### Changed

- **BREAKING:** `AvatarIconSeverity.Error`, `IconAlertSeverity.Error`, and `TagSeverity.Error` renamed to `.Danger`; severity vocabulary standardized to use `Danger` for destructive/critical states and `Neutral` for default states ([#1159](https://github.com/MetaMask/metamask-design-system/pull/1159))
  - See [Migration Guide](./MIGRATION.md#from-version-0280-to-0290)

## [0.28.0]

### Added

- Added `Content` for composing scrollable and padded content sections on React Native screens; it is closely related to the upcoming `ListItem` work ([#1192](https://github.com/MetaMask/metamask-design-system/pull/1192))

### Changed

- **BREAKING:** Dropped Node.js 18 support for the release line; consumers must run Node 20 or newer ([#1206](https://github.com/MetaMask/metamask-design-system/pull/1206))
- Added default padding and `isInteractive` support to `SectionHeader` so section rows match the new mobile layout patterns ([#1210](https://github.com/MetaMask/metamask-design-system/pull/1210))
- **BREAKING:** Flattened `TextArea` so it renders the root `TextInput` directly; pass `TextInput` props on `TextArea`, use the component `ref` for the input, and stop relying on `inputProps` or `inputElement` ([#1205](https://github.com/MetaMask/metamask-design-system/pull/1205))
- Updated avatar fallback handling so `AvatarToken`, `AvatarNetwork`, and `AvatarFavicon` resolve consistently when the requested image is unavailable ([#1212](https://github.com/MetaMask/metamask-design-system/pull/1212))

## [0.27.0]

### Added

- Added `FlashFilled` icon (filled lightning bolt) to `IconName` ([#1191](https://github.com/MetaMask/metamask-design-system/pull/1191))
- Added `SelectButtonSize` so `SelectButton` exposes a semantic size type ([#1177](https://github.com/MetaMask/metamask-design-system/pull/1177))

### Changed

- **BREAKING:** Removed `panGestureHandlerProps` from `BottomSheet` and `BottomSheetDialog` following the migration to the `react-native-gesture-handler` v2 `GestureDetector`/`Gesture.Pan()` API ([#1165](https://github.com/MetaMask/metamask-design-system/pull/1165))
  - See [Migration Guide](./MIGRATION.md#from-version-0260-to-0270)
- **BREAKING:** Removed the variant-based title API from `HeaderBase` and `BottomSheetHeader` ([#1103](https://github.com/MetaMask/metamask-design-system/pull/1103))
  - Removed `variant`, `HeaderBaseVariant`, and `BottomSheetHeaderVariant`, plus `HeaderBase`'s `titleTestID`
  - String titles now render with a centered `HeadingSm` treatment; pass custom `children` for bespoke title layouts and use `textProps.testID` in place of `titleTestID`
  - See [Migration Guide](./MIGRATION.md#from-version-0260-to-0270)
- Reduced the default `SegmentGroup` segment spacing from `gap-3` to `gap-1` for tighter grouped segments ([#1194](https://github.com/MetaMask/metamask-design-system/pull/1194))

### Fixed

- Fixed a `HeaderStandardAnimated` runtime crash under React Native Reanimated 4 by inlining the scroll-handler worklet ([#1185](https://github.com/MetaMask/metamask-design-system/pull/1185))
- Fixed React Native Web rendering for `BottomSheet`, `BottomSheetOverlay`, `Icon`, and the animated `ButtonAnimated` and `Spinner` components ([#1187](https://github.com/MetaMask/metamask-design-system/pull/1187))

## [0.26.0]

### Added

- Added `TitleAlert` for alert-style headings with a severity icon, title row, and optional description in modals, bottom sheets, and other compact surfaces ([#1131](https://github.com/MetaMask/metamask-design-system/pull/1131))
- Added `SectionHeader` for section titles with optional start and end accessories, icon shortcuts, and an inline title accessory ([#1175](https://github.com/MetaMask/metamask-design-system/pull/1175))
- Added `SectionDivider` as a horizontal rule with a muted top border and default vertical spacing for separating screen sections ([#1174](https://github.com/MetaMask/metamask-design-system/pull/1174))

### Changed

- Updated the `Telegram` icon asset to match the official Telegram logo ([#1176](https://github.com/MetaMask/metamask-design-system/pull/1176))

## [0.25.0]

### Added

- Added `SelectButton`, `SegmentButton`, and `SegmentGroup` for option rows, single-choice segments, and grouped segment controls ([#1172](https://github.com/MetaMask/metamask-design-system/pull/1172))
- Added `SensitiveText` for masking and revealing sensitive strings, matching the cross-platform contract used on web ([#1164](https://github.com/MetaMask/metamask-design-system/pull/1164))
- Added `HeaderStandardAnimated` and `useHeaderStandardAnimated` for standard headers with coordinated scroll-driven motion ([#1151](https://github.com/MetaMask/metamask-design-system/pull/1151))
- Added `TextArea` for multi-line text entry ([#1141](https://github.com/MetaMask/metamask-design-system/pull/1141))

### Changed

- `ButtonBase` now derives label typography, start and end icon sizes, and internal spacing from the `size` prop for every supported `ButtonBaseSize`, keeping defaults aligned without manual per-size tuning ([#1150](https://github.com/MetaMask/metamask-design-system/pull/1150))
  - If you wrap **`ButtonBase`** and override label, icon, or spacing, see [Migration guide](./MIGRATION.md#buttonbase-size-defaults).
- `BannerBase` close control behavior is simplified and aligned with the shared dismiss contract ([#1166](https://github.com/MetaMask/metamask-design-system/pull/1166))

## [0.24.0]

### Added

- Added `ListArrow`, `Musd`, and `MusdFilled` icons; refreshed `Candlestick`; and added `Group`, `PieChart`, and `Predictions` icons (same names as in `@metamask/design-system-react`) ([#1157](https://github.com/MetaMask/metamask-design-system/pull/1157), [#1161](https://github.com/MetaMask/metamask-design-system/pull/1161), [#1162](https://github.com/MetaMask/metamask-design-system/pull/1162), [#1163](https://github.com/MetaMask/metamask-design-system/pull/1163))

### Changed

- **BREAKING:** Tightened the `Toast` API shipped with `Toaster` in 0.23.0 ([#1143](https://github.com/MetaMask/metamask-design-system/pull/1143))
  - **`toast.show`** → **`toast(...)`**; **`toast.hide`** → **`toast.dismiss()`**
  - **`iconProps`** renamed to **`iconAlertProps`**
  - **`ToastSeverity.Info`** removed; use **`Default`**, **`Success`**, **`Warning`**, or **`Danger`**
  - **`hasNoTimeout`** is optional and defaults to auto-dismiss unless set to **`true`**
  - Close control is always shown on the toast surface
  - See [Migration Guide](./MIGRATION.md#from-version-0230-to-0x0)
- Expanded `HeaderBase` migration guidance for apps moving off the mobile component library ([#1100](https://github.com/MetaMask/metamask-design-system/pull/1100))

## [0.23.0]

### Added

- Added `Merge` to the icon set so it can be used anywhere `IconName` is supported in `@metamask/design-system-react-native` ([#1155](https://github.com/MetaMask/metamask-design-system/pull/1155))

### Changed

- **BREAKING:** Redesigned `Toast` to use a single mounted `<Toast />` plus static `Toast.show(...)` and `Toast.hide()` methods for application usage ([#1104](https://github.com/MetaMask/metamask-design-system/pull/1104))
  - Removed `ToastContext`, `ToastContextWrapper`, and `ToastContextParams` from the public export surface
  - Renamed `ToastVariants` to `ToastVariant`, changed icon-only close buttons to `ToastCloseButtonVariant.Icon`, and renamed `customBottomOffset` to `bottomOffset`
  - `Toast.show()` and `Toast.hide()` now throw a descriptive error if called before `<Toast />` mounts
  - See [Migration Guide](./MIGRATION.md#from-version-0220-to-0230)
- Updated `Input` to use the shared cross-platform API. Consumers should pass a controlled `value`, replace `isReadonly` with `isReadOnly`, and use the shared state-style behavior expected by wrappers like `TextField` ([#1043](https://github.com/MetaMask/metamask-design-system/pull/1043))
- Updated `AvatarGroup` to use shared cross-platform size and variant contracts, keeping React and React Native aligned on the same public API names and values ([#1067](https://github.com/MetaMask/metamask-design-system/pull/1067))

## [0.22.0]

### Changed

- **BREAKING:** Updated `Button`, `ButtonBase`, and `ButtonHero` size and variant exports to use shared const-object + string-union types rather than platform-local enum-based definitions, aligning React Native with the shared cross-platform type contracts ([#1034](https://github.com/MetaMask/metamask-design-system/pull/1034))
  - No migration required for typical usage; continue importing from `@metamask/design-system-react-native` as before.
  - Runtime values remain stable while type definitions follow ADR-0003/ADR-0004.
- **BREAKING:** Updated `ButtonIconSize` and `ButtonIconVariant` to use shared const-object + string-union types rather than platform-local enum-based definitions, aligning React Native with the shared cross-platform type contracts ([#1038](https://github.com/MetaMask/metamask-design-system/pull/1038))
  - No migration required for typical usage; continue importing from `@metamask/design-system-react-native` as before.
  - Runtime values remain stable while type definitions follow ADR-0003/ADR-0004.
- **BREAKING:** `TextField` and `TextFieldSearch` now use a root `Box`/`View`, require native `TextInput` props under `inputProps`, rename `isReadonly` to `isReadOnly`, and use `inputRef` for the inner input ref. See [Migration Guide](./MIGRATION.md#from-version-0210-to-0220) ([#1081](https://github.com/MetaMask/metamask-design-system/pull/1081))
- Updated Figma Code Connect to the live `MMDS Components` file and aligned `ButtonIcon` and `TextButton` mappings with the current component APIs shown in Dev Mode ([#1109](https://github.com/MetaMask/metamask-design-system/pull/1109))

## [0.21.0]

### Added

- Added `Telegram` to the `IconName` set for use anywhere the React Native package accepts design system icons ([#1122](https://github.com/MetaMask/metamask-design-system/pull/1122))

### Changed

- **BREAKING:** Updated `AvatarIcon` exports to use shared const-object + string-union types rather than local enum-based definitions, aligning React Native with the shared cross-platform type contracts ([#996](https://github.com/MetaMask/metamask-design-system/pull/996))
  - No migration required for typical usage; continue importing from `@metamask/design-system-react-native` as before.
  - Runtime values remain stable while type definitions follow ADR-0003/ADR-0004.

## [0.20.0]

### Added

- Added `TitleStandard` for mobile title layouts with optional top and bottom accessory rows ([#1051](https://github.com/MetaMask/metamask-design-system/pull/1051))
- Added `TitleSubpage` for subpage headers with avatar, title, subtitle, amount, and bottom-label layouts ([#1059](https://github.com/MetaMask/metamask-design-system/pull/1059))
- Added `Tag` for compact severity-based metadata labels with optional icons or custom accessories ([#1053](https://github.com/MetaMask/metamask-design-system/pull/1053))

### Changed

- `Box` now forwards refs to the underlying `View`, which makes imperative measurement and focus flows easier to integrate ([#1102](https://github.com/MetaMask/metamask-design-system/pull/1102))
- Updated `ButtonTertiary` to use the default text color for more consistent contrast across states ([#1099](https://github.com/MetaMask/metamask-design-system/pull/1099))
- **BREAKING:** Updated `IconName`, `IconColor`, and `IconSize` exports to use const-object + string-union types instead of local enums; existing imports from `@metamask/design-system-react-native` continue to work, but enum-specific type assumptions may need updating ([#1042](https://github.com/MetaMask/metamask-design-system/pull/1042))
  - See [Migration Guide](./MIGRATION.md#from-version-0190-to-0200)
- **BREAKING:** Updated `Box` type exports (`BoxFlexDirection`, `BoxFlexWrap`, `BoxAlignItems`, `BoxJustifyContent`, `BoxBackgroundColor`, `BoxBorderColor`, `BoxSpacing`, `BoxBorderWidth`) to use const-object + string-union types, and removed stale Box color entries that no longer map to design tokens ([#1026](https://github.com/MetaMask/metamask-design-system/pull/1026))
  - Removed `BoxBackgroundColor.WarningAlternative`, `BoxBackgroundColor.SuccessAlternative`, `BoxBorderColor.WarningAlternative`, `BoxBorderColor.SuccessAlternative`, and `BoxBorderColor.InfoAlternative`
  - See [Migration Guide](./MIGRATION.md#from-version-0190-to-0200)

## [0.19.0]

### Added

- Added `TitleHub` for stacked title, amount, and bottom-label layouts with optional accessory slots. ([#1052](https://github.com/MetaMask/metamask-design-system/pull/1052))

### Changed

- **BREAKING:** Raised the minimum supported peer dependency versions to React Native `>=0.76.0`, `react-native-gesture-handler >=2.25.0`, `react-native-reanimated >=3.17.0`, and `react-native-safe-area-context >=5.0.0` to align the package with the React Native 0.76 and Storybook 10 stack. ([#844](https://github.com/MetaMask/metamask-design-system/pull/844))
- **BREAKING:** `HeaderRoot` now renders `titleAccessory` only when `title` is present; use `children` for fully custom accessory-only title rows. See [Migration Guide](./MIGRATION.md#from-version-0180-to-0190). ([#1076](https://github.com/MetaMask/metamask-design-system/pull/1076))
- **BREAKING:** `IconProps` now align with the underlying SVG component props instead of `ViewProps`; move `View`-specific props to a wrapper view if TypeScript flags them after upgrading. See [Migration Guide](./MIGRATION.md#from-version-0180-to-0190). ([#1090](https://github.com/MetaMask/metamask-design-system/pull/1090))

## [0.18.0]

### Added

- Added `IconAlert` component for mapping a severity (`info`, `success`, `warning`, `error`) to a fixed icon glyph and theme color ([#1060](https://github.com/MetaMask/metamask-design-system/pull/1060))

### Changed

- Updated `AvatarFavicon` type internals to use ADR-0003/ADR-0004 shared types; imports from `@metamask/design-system-react-native` are unchanged ([#1062](https://github.com/MetaMask/metamask-design-system/pull/1062))

## [0.17.0]

### Changed

- **BREAKING:** Migrated `Text` typography types (`TextVariant`, `TextColor`, `FontWeight`, `FontStyle`, `FontFamily`) to `@metamask/design-system-shared`; all imports through `@metamask/design-system-react-native` continue to work without change ([#1047](https://github.com/MetaMask/metamask-design-system/pull/1047))
  - `FontWeight` underlying string values changed from numeric strings (`'600'`, `'500'`, `'400'`) to semantic identifiers (`'bold'`, `'medium'`, `'regular'`); idiomatic usage (e.g. `FontWeight.Bold`) is unaffected
  - See [Migration Guide](./MIGRATION.md#from-version-0160-to-0170)

## [0.16.0]

### Added

- Added `HeaderSearch` component for in-screen and inline search experiences ([#1031](https://github.com/MetaMask/metamask-design-system/pull/1031))
- Added `KeyValueColumn` component for vertically-stacked key/value layouts ([#1046](https://github.com/MetaMask/metamask-design-system/pull/1046))

### Changed

- **BREAKING:** Renamed `BoxHorizontal` to `BoxRow` and `BoxVertical` to `BoxColumn` ([#1050](https://github.com/MetaMask/metamask-design-system/pull/1050))
  - See [Migration Guide](./MIGRATION.md#from-version-0150-to-0160)
- **BREAKING:** Refactored `KeyValueRow` API — removed the legacy stub-based composition (`KeyValueRowStubs`, `field`/`value` objects); use `keyLabel`, `value`, `variant`, and accessory props directly ([#1023](https://github.com/MetaMask/metamask-design-system/pull/1023))
  - See [Migration Guide](./MIGRATION.md#from-version-0150-to-0160)
- Updated `BadgeNetwork` type internals; imports from `@metamask/design-system-react-native` are unchanged ([#1021](https://github.com/MetaMask/metamask-design-system/pull/1021))

## [0.15.0]

### Added

- Added `NoPhotography` icon ([#1056](https://github.com/MetaMask/metamask-design-system/pull/1056))

### Changed

- **BREAKING:** Updated `IconSize` underlying string values to semantic t-shirt size tokens; normal use is unaffected ([#1049](https://github.com/MetaMask/metamask-design-system/pull/1049))
- **BREAKING:** Updated `AvatarToken` and `AvatarAccount` exports to use shared const-object + string-union types (ADR-0003/ADR-0004); normal use is unaffected ([#1009](https://github.com/MetaMask/metamask-design-system/pull/1009), [#1015](https://github.com/MetaMask/metamask-design-system/pull/1015))

## [0.14.0]

### Added

- Added `HeaderRoot` as a new root primitive for React Native header composition ([#1029](https://github.com/MetaMask/metamask-design-system/pull/1029))
- Added `HeaderStandard` for standardized title + action header layouts in mobile screens ([#1028](https://github.com/MetaMask/metamask-design-system/pull/1028), [#1030](https://github.com/MetaMask/metamask-design-system/pull/1030))
- Added `TextFieldSearch` for search-style text input flows on mobile ([#1027](https://github.com/MetaMask/metamask-design-system/pull/1027))
- Added `BoxHorizontal` and `BoxVertical` utility components for common directional layout composition ([#1003](https://github.com/MetaMask/metamask-design-system/pull/1003))

### Changed

- **BREAKING:** Replaced BottomSheet `shouldNavigateBack` with an optional `goBack` callback for explicit navigation handling in host apps ([#1024](https://github.com/MetaMask/metamask-design-system/pull/1024))
  - Remove `shouldNavigateBack` usage and pass `goBack` when you want the sheet close action to navigate back.
  - See [Migration Guide](./MIGRATION.md#from-version-0130-to-0140).
- Added `panGestureHandlerProps` support to `BottomSheet` so integrators can customize gesture-handler behavior ([#1016](https://github.com/MetaMask/metamask-design-system/pull/1016))
- Migrated React Native package exports from default exports to named exports for more consistent import ergonomics across the library ([#1032](https://github.com/MetaMask/metamask-design-system/pull/1032))
- **BREAKING:** Updated `AvatarBase` exports to use shared const-object + string-union types instead of local enums ([#1005](https://github.com/MetaMask/metamask-design-system/pull/1005))
  - No migration required for typical usage; continue importing from `@metamask/design-system-react-native` as before.
  - Runtime values remain stable while type definitions follow ADR-0003/ADR-0004.
- Updated `@metamask/utils` peer dependency to `^11.11.0` ([#1033](https://github.com/MetaMask/metamask-design-system/pull/1033))
- Expanded `BannerBase` migration documentation to improve upgrade guidance for consumers ([#1011](https://github.com/MetaMask/metamask-design-system/pull/1011))

### Fixed

- Updated `BottomSheetHeader` action button size to `md` for consistent sizing and visual alignment ([#1012](https://github.com/MetaMask/metamask-design-system/pull/1012))

## [0.13.0]

### Changed

- `FontWeight.Bold` and the React Native `Text` component now describe bold as weight 600; the Storybook mobile `FontLoader` and `@metamask/design-system-twrnc-preset` now reference the `Geist-SemiBold`/`Geist-SemiBoldItalic` assets, so update any custom font registrations that previously assumed weight 700 as explained in the [migration guide](./MIGRATION.md#from-version-0120-to-0130) ([#1017](https://github.com/MetaMask/metamask-design-system/pull/1017))
- `BadgeWrapperPosition`, `BadgeWrapperPositionAnchorShape`, `BadgeWrapperCustomPosition`, and `BadgeWrapperPropsShared` now derive from const objects annotated `as const`, producing string-union typings per ADR-0003/ADR-0004; the React Native entry point still exports the same names, so your imports stay on `@metamask/design-system-react-native` while the shared package hosts the canonical definitions ([#1014](https://github.com/MetaMask/metamask-design-system/pull/1014); see https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md and https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md).
- Documented the Button migration instructions (prop, variant, and size mappings) in [MIGRATION.md#button-component](./MIGRATION.md#button-component) so both web and native developers follow the same before/after story ([#999](https://github.com/MetaMask/metamask-design-system/pull/999))

## [0.12.0]

### Added

- Added `BannerAlert` component ([#966](https://github.com/MetaMask/metamask-design-system/pull/966))
- Added `KeyValueRow` component ([#959](https://github.com/MetaMask/metamask-design-system/pull/959))

### Changed

- **BREAKING:** Simplified `TextButton` to a text-only control and removed `size`/`TextButtonSize`, inverse/disabled props, and icon/accessory props ([#1001](https://github.com/MetaMask/metamask-design-system/pull/1001))
  - See [Migration Guide](./MIGRATION.md#from-version-0110-to-0120)
- **BREAKING:** Removed `TextFieldSize` and the `size` prop; `TextField` is now a single fixed-height (48px) row ([#1000](https://github.com/MetaMask/metamask-design-system/pull/1000))
  - See [Migration Guide](./MIGRATION.md#from-version-0110-to-0120)
- Updated `Candlestick` icon asset with smaller size variant ([#998](https://github.com/MetaMask/metamask-design-system/pull/998))

### Fixed

- Improved `Input` single-line typography alignment (including iOS placeholder behavior) ([#1000](https://github.com/MetaMask/metamask-design-system/pull/1000))

## [0.11.0]

### Added

- Added `ButtonFilter` component for filter button functionality ([#964](https://github.com/MetaMask/metamask-design-system/pull/964))
- Added `BottomSheet` component for modal bottom sheet interactions ([#963](https://github.com/MetaMask/metamask-design-system/pull/963))
- Added `MainActionButton` component for primary call-to-action buttons ([#952](https://github.com/MetaMask/metamask-design-system/pull/952))
- Added `BannerBase` component for creating custom banner notifications ([#955](https://github.com/MetaMask/metamask-design-system/pull/955))
- Added `ListItem` component for standardized list rows ([#958](https://github.com/MetaMask/metamask-design-system/pull/958))
- Added `TabEmptyState` component for empty tab state displays ([#949](https://github.com/MetaMask/metamask-design-system/pull/949))
- Added `BottomSheetDialog` component for bottom sheet dialog interactions ([#905](https://github.com/MetaMask/metamask-design-system/pull/905))

### Changed

- **BREAKING:** Updated `ButtonIcon` API to use `variant` prop instead of `isInverse` and `isFloating` boolean props ([#948](https://github.com/MetaMask/metamask-design-system/pull/948))
  - Removed `isInverse` and `isFloating` props
  - Added `variant` prop with three options: `ButtonIconVariant.Default` (default), `ButtonIconVariant.Filled` (new muted background with rounded corners), and `ButtonIconVariant.Floating` (replaces `isFloating` behavior)
  - Migration: Replace `isFloating={true}` with `variant={ButtonIconVariant.Floating}`, and use `variant={ButtonIconVariant.Default}` for standard transparent background
  - See [Migration Guide](./MIGRATION.md#from-version-0100-to-0110) for complete migration instructions
- **BREAKING:** `Input` component now requires `value` prop and is controlled-only ([#960](https://github.com/MetaMask/metamask-design-system/pull/960))
  - Removed `defaultValue` prop - all Input instances must now pass a `value` prop and manage state via `onChange`
  - This change affects all components using `Input` directly, including `TextField`
  - Migration: Convert uncontrolled inputs to controlled by adding state management with `value` and `onChange` props
  - See [Migration Guide](./MIGRATION.md#from-version-0100-to-0110) for complete migration instructions
- Updated `Ai` icon to filled version for visual consistency ([#970](https://github.com/MetaMask/metamask-design-system/pull/970))

### Fixed

- Fixed iOS placeholder alignment issue in `Input` component without affecting typed text rendering ([#960](https://github.com/MetaMask/metamask-design-system/pull/960))
- Fixed missing component exports in package entry point ([#967](https://github.com/MetaMask/metamask-design-system/pull/967))

## [0.10.0]

### Added

- Added `ActionListItem` component for standardized list row actions ([#951](https://github.com/MetaMask/metamask-design-system/pull/951))
- Added `SensitiveText` component for sensitive value display and reveal interactions ([#922](https://github.com/MetaMask/metamask-design-system/pull/922))
- Added `ButtonSemantic` component for semantic intent button variants ([#950](https://github.com/MetaMask/metamask-design-system/pull/950))
- Added `BottomSheetHeader` component for consistent bottom sheet header layouts ([#927](https://github.com/MetaMask/metamask-design-system/pull/927))
- Added `ButtonHero` to `@metamask/design-system-react-native` ([#934](https://github.com/MetaMask/metamask-design-system/pull/934))

### Changed

- **BREAKING:** Updated `BadgeCount` type exports to use the ADR-0003/ADR-0004 const-object + string-union pattern instead of TypeScript enums ([#942](https://github.com/MetaMask/metamask-design-system/pull/942))
  - `BadgeCountSize` is now provided as a const object with a derived union type rather than an enum
  - `BadgeCount` shared prop types are now sourced from `@metamask/design-system-shared`
  - Migration: update any enum-specific usage to const-object/union usage, while continuing to import from `@metamask/design-system-react-native`

## [0.9.0]

### Added

- Added `TextField` component for text input fields ([#910](https://github.com/MetaMask/metamask-design-system/pull/910))
  - Boxed, press-to-focus wrapper around `Input` component
  - Supports configurable sizes, optional start/end accessories
  - Includes error and disabled states with custom styling
  - Full accessibility support and comprehensive test coverage

## [0.8.0]

### Added

- Added `RadioButton` component for radio button form controls ([#926](https://github.com/MetaMask/metamask-design-system/pull/926))
  - Supports checked, disabled, read-only, and danger states
  - Full accessibility support with `role="radio"` and `accessibilityState`
  - Optional label rendering for improved usability

### Changed

- **BREAKING:** Migrated `BadgeStatus` component from TypeScript enums to string union types with const objects ([#912](https://github.com/MetaMask/metamask-design-system/pull/912))
  - `BadgeStatusStatus` and `BadgeStatusSize` enums replaced with const objects and derived string union types
  - **No migration required** - continue importing from `@metamask/design-system-react-native` as usual
  - Const object values remain the same (e.g., `BadgeStatusStatus.Active` still works)
  - String literals now also accepted thanks to structural typing (e.g., `'active'` works where `BadgeStatusStatus.Active` is expected)
  - We are still evaluating best practices for const objects vs string literals - use whichever approach works best for your codebase
  - This change implements [ADR-0003](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md) and [ADR-0004](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)
- Refactored `BottomSheetFooter` component location for better organization ([#933](https://github.com/MetaMask/metamask-design-system/pull/933))
  - Moved from `BottomSheets/BottomSheetFooter/` to `BottomSheetFooter/`
  - Updated import paths and Storybook title
  - No breaking changes - all imports from package entry point continue to work

## [0.7.0]

### Added

- Added `Label` component for form labels and descriptive text ([#907](https://github.com/MetaMask/metamask-design-system/pull/907))
- Added `HeaderBase` component for consistent header layouts ([#902](https://github.com/MetaMask/metamask-design-system/pull/902))
- Added `Skeleton` component for loading states ([#891](https://github.com/MetaMask/metamask-design-system/pull/891))
- Added `Card` component for grouped content sections ([#923](https://github.com/MetaMask/metamask-design-system/pull/923))
- Added `BottomSheetFooter` component for bottom sheet actions ([#899](https://github.com/MetaMask/metamask-design-system/pull/899))
- Added `Toast` component for temporary notification messages ([#892](https://github.com/MetaMask/metamask-design-system/pull/892))
- Added `Input` component for text input fields ([#909](https://github.com/MetaMask/metamask-design-system/pull/909))
- Added `CorporateFare` icon to represent stocks ([#920](https://github.com/MetaMask/metamask-design-system/pull/920))
- Added `BottomSheetOverlay` component for modal bottom sheet interactions ([#897](https://github.com/MetaMask/metamask-design-system/pull/897))
  - Provides consistent overlay pattern for bottom sheet components
  - Includes press-to-dismiss functionality and accessibility features

### Changed

- **BREAKING:** Standardized non-icon enum runtime values to use kebab-case format ([#894](https://github.com/MetaMask/metamask-design-system/pull/894))
  - Enum values now use lowercase/kebab-case (e.g., `'primary'` instead of `'Primary'`, `'top-right'` instead of `'TopRight'`)
  - **Migration likely not needed** - continue using enum constants (e.g., `ButtonVariant.Primary`)
  - **Migration needed** only if your app persists or transmits these enum values (localStorage, databases, APIs)
  - This prepares for migration from enums to string union types per ADR #127
- Updated component styling to use `tw.style()` instead of string-based `twClassName` for better type safety and conditional styling ([#889](https://github.com/MetaMask/metamask-design-system/pull/889))
- Updated `@metamask/design-tokens` peer dependency from ^8.1.0 to ^8.2.0 to support `AnimationDuration` enum used by `BottomSheetOverlay`
- Updated `@metamask/utils` peer dependency from 11.9.0 to 11.10.0 ([#903](https://github.com/MetaMask/metamask-design-system/pull/903))
- Reorganized peer dependencies for better dependency management ([#901](https://github.com/MetaMask/metamask-design-system/pull/901))

### Fixed

- Fixed `ButtonBase` component sizing issues in flex layouts to prevent unexpected shrinking ([#870](https://github.com/MetaMask/metamask-design-system/pull/870))

## [0.6.0]

### Added

- Added `AfterHours` icon ([#879](https://github.com/MetaMask/metamask-design-system/pull/879))

## [0.5.1]

### Changed

- Updated `@metamask/utils` peer dependency from 11.8.1 to 11.9.0 ([#867](https://github.com/MetaMask/metamask-design-system/pull/867))

### Fixed

- Updated `ButtonIcon` component icon sizes and border radius to match Figma design specifications ([#873](https://github.com/MetaMask/metamask-design-system/pull/873))
  - `ButtonIcon.Sm` now uses 20px icon (previously 16px)
  - `ButtonIcon.Md` now uses 24px icon (previously 20px)
  - `ButtonIcon.Lg` now uses 32px icon (previously 24px)
  - Non-floating border radius corrected to 4px (previously 2px)

## [0.5.0]

### Changed

- **BREAKING:** Update font file names from space-separated to hyphenated PostScript format for iOS Metro bundler compatibility ([#862](https://github.com/MetaMask/metamask-design-system/pull/862))
  - Font file names changed: "Geist Regular.otf" → "Geist-Regular.otf", "Geist Medium.otf" → "Geist-Medium.otf", "Geist Bold.otf" → "Geist-Bold.otf"
  - Fixes Metro bundler asset resolution issues on iOS that prevented fonts from loading correctly
  - If using `@metamask/design-system-react-native` components as intended, fonts automatically load correctly with no migration needed
  - If manually referencing font file paths in custom code, update all references to use hyphenated file names instead of space-separated names
  - Android is unaffected by this change
- Updated `@metamask/utils` peer dependency from 11.8.0 to 11.8.1 ([#838](https://github.com/MetaMask/metamask-design-system/pull/838))

### Fixed

- Export missing `TextButtonSize` enum from package entry point for TypeScript type safety ([#848](https://github.com/MetaMask/metamask-design-system/pull/848))
  - The `TextButtonSize` enum is now properly exported and accessible for imports
  - Developers can now use typed enums instead of string literals: `import { TextButton, TextButtonSize } from '@metamask/design-system-react-native'` and `<TextButton size={TextButtonSize.Medium} />`
  - This is a non-breaking, additive change that improves type safety

## [0.4.1]

### Fixed

- Removed unnecessary peer dependencies ([#828](https://github.com/MetaMask/metamask-design-system/pull/828))
- Bump @metamask/utils from 11.7.0 to 11.8.0 ([#827](https://github.com/MetaMask/metamask-design-system/pull/827))

## [0.4.0]

### Added

- Added attach money icon ([#823](https://github.com/MetaMask/metamask-design-system/pull/823))

### Fixed

- Jazzicon, Blockies and Maskicon icon generation for CAIP-10 addresses ([#816](https://github.com/MetaMask/metamask-design-system/pull/816))

## [0.3.1]

### Fixed

- fix: export missing Box component color enums: `BoxBackgroundColor` and `BoxBorderColor` for React Native ([#807](https://github.com/MetaMask/metamask-design-system/pull/807))
- fix: make Button `variant` prop optional(`ButtonVariant.Primary` as default) ([#806](https://github.com/MetaMask/metamask-design-system/pull/806))

## [0.3.0]

### Added

- New icons (AppleLogo, Backspace, Candlestick, Clear, MetamaskFoxOutline) ([#798](https://github.com/MetaMask/metamask-design-system/pull/798))
- Figma code connect files for all components ([#766](https://github.com/MetaMask/metamask-design-system/pull/766), [#791](https://github.com/MetaMask/metamask-design-system/pull/791), [#795](https://github.com/MetaMask/metamask-design-system/pull/795), [#796](https://github.com/MetaMask/metamask-design-system/pull/796), [#794](https://github.com/MetaMask/metamask-design-system/pull/794), [#792](https://github.com/MetaMask/metamask-design-system/pull/792))

### Changed

- Update AvatarAccount shape from circle to square ([#800](https://github.com/MetaMask/metamask-design-system/pull/800))

### Fixed

- Updated font file across apps and packages to match mobile ([#801](https://github.com/MetaMask/metamask-design-system/pull/801))
- Optimize icon SVGs and remove hardcoded colors ([#799](https://github.com/MetaMask/metamask-design-system/pull/799))

## [0.2.0]

### Added

- Added 5 new Text component variants with responsive typography support: ([#777](https://github.com/MetaMask/metamask-design-system/pull/777))
  - `TextVariant.PageHeading` - For main page titles with large, bold styling
  - `TextVariant.SectionHeading` - For section titles with medium, bold styling
  - `TextVariant.ButtonLabelMd` - For medium-sized button labels with optimized button text styling
  - `TextVariant.ButtonLabelLg` - For large-sized button labels with optimized button text styling
  - `TextVariant.AmountDisplayLg` - For large amount/value displays with prominent numeric styling
- Added comprehensive utility props to Box component for enhanced layout control and fixes: ([#779](https://github.com/MetaMask/metamask-design-system/pull/779), [#781](https://github.com/MetaMask/metamask-design-system/pull/781))
  - **Margin props:** `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`, `marginHorizontal`, `marginVertical`
  - **Padding props:** `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `paddingHorizontal`, `paddingVertical`
  - **Border props:** `borderWidth`, `borderColor`
  - **Background props:** `backgroundColor`
  - All spacing props use the `BoxSpacing` scale (0-12) where each unit equals 4px
  - Border width uses `BoxBorderWidth` type (0, 1, 2, 4, 8) for valid Tailwind/TWRNC values
  - Color props use design system color tokens for consistent theming across light/dark modes

## [0.1.0]

### Added

- **Initial release** - MetaMask Design System React Native component library
- **Avatar Components**: AvatarAccount, AvatarBase, AvatarFavicon, AvatarGroup, AvatarIcon, AvatarNetwork, AvatarToken
- **Badge Components**: BadgeCount, BadgeIcon, BadgeNetwork, BadgeStatus, BadgeWrapper
- **Button Components**: Button, ButtonBase, ButtonIcon, TextButton
- **Form Components**: Checkbox
- **Layout Components**: Box
- **Typography Components**: Text
- **Icon Component**: Icon with comprehensive icon set
- **Utility Components**: Blockies, ButtonAnimated, Jazzicon, Maskicon, TextOrChildren
- Full TypeScript support with type definitions and enums
- React Native integration with TWRNC preset support

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.35.0...HEAD
[0.35.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.34.0...@metamask/design-system-react-native@0.35.0
[0.34.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.33.0...@metamask/design-system-react-native@0.34.0
[0.33.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.32.0...@metamask/design-system-react-native@0.33.0
[0.32.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.31.0...@metamask/design-system-react-native@0.32.0
[0.31.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.30.2...@metamask/design-system-react-native@0.31.0
[0.30.2]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.30.1...@metamask/design-system-react-native@0.30.2
[0.30.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.30.0...@metamask/design-system-react-native@0.30.1
[0.30.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.29.0...@metamask/design-system-react-native@0.30.0
[0.29.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.28.0...@metamask/design-system-react-native@0.29.0
[0.28.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.27.0...@metamask/design-system-react-native@0.28.0
[0.27.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.26.0...@metamask/design-system-react-native@0.27.0
[0.26.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.25.0...@metamask/design-system-react-native@0.26.0
[0.25.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.24.0...@metamask/design-system-react-native@0.25.0
[0.24.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.23.0...@metamask/design-system-react-native@0.24.0
[0.23.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.22.0...@metamask/design-system-react-native@0.23.0
[0.22.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.21.0...@metamask/design-system-react-native@0.22.0
[0.21.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.20.0...@metamask/design-system-react-native@0.21.0
[0.20.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.19.0...@metamask/design-system-react-native@0.20.0
[0.19.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.18.0...@metamask/design-system-react-native@0.19.0
[0.18.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.17.0...@metamask/design-system-react-native@0.18.0
[0.17.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.16.0...@metamask/design-system-react-native@0.17.0
[0.16.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.15.0...@metamask/design-system-react-native@0.16.0
[0.15.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.14.0...@metamask/design-system-react-native@0.15.0
[0.14.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.13.0...@metamask/design-system-react-native@0.14.0
[0.13.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.12.0...@metamask/design-system-react-native@0.13.0
[0.12.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.11.0...@metamask/design-system-react-native@0.12.0
[0.11.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.10.0...@metamask/design-system-react-native@0.11.0
[0.10.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.9.0...@metamask/design-system-react-native@0.10.0
[0.9.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.8.0...@metamask/design-system-react-native@0.9.0
[0.8.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.7.0...@metamask/design-system-react-native@0.8.0
[0.7.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.6.0...@metamask/design-system-react-native@0.7.0
[0.6.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.5.1...@metamask/design-system-react-native@0.6.0
[0.5.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.5.0...@metamask/design-system-react-native@0.5.1
[0.5.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.4.1...@metamask/design-system-react-native@0.5.0
[0.4.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.4.0...@metamask/design-system-react-native@0.4.1
[0.4.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.3.1...@metamask/design-system-react-native@0.4.0
[0.3.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.3.0...@metamask/design-system-react-native@0.3.1
[0.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.2.0...@metamask/design-system-react-native@0.3.0
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react-native@0.1.0...@metamask/design-system-react-native@0.2.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-react-native@0.1.0
