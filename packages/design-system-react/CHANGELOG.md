# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Uncategorized

- docs: add code example to React BannerBase README ([#1371](https://github.com/MetaMask/metamask-design-system/pull/1371))

## [0.32.0]

### Added

- Added `CandlestickFilled` to `IconName` ([#1373](https://github.com/MetaMask/metamask-design-system/pull/1373))

## [0.31.0]

### Added

- Added `PureBlackProvider` and `usePureBlack` for OLED pure-black dark mode; on web, CSS token overrides come from `data-pure-black` on the document root while the provider supplies context for component logic ([#1305](https://github.com/MetaMask/metamask-design-system/pull/1305), [#1312](https://github.com/MetaMask/metamask-design-system/pull/1312))

### Changed

- Updated `ModalContent` to use `background.alternative` for the dialog surface when pure-black mode is active, giving modals visible elevation on OLED black backgrounds ([#1308](https://github.com/MetaMask/metamask-design-system/pull/1308))

## [0.30.0]

### Added

- Added `HardDrive` to `IconName` ([#1302](https://github.com/MetaMask/metamask-design-system/pull/1302))

## [0.29.0]

### Added

- Added `BannerAlertSeverity.Neutral` for informational banners without semantic severity coloring ([#1287](https://github.com/MetaMask/metamask-design-system/pull/1287))
- Added `ButtonIconSize.Xs` (20px button dimension mapping to `IconSize.Sm`) ([#1266](https://github.com/MetaMask/metamask-design-system/pull/1266))

### Changed

- **BREAKING:** Dropped Node.js 20 and 22 support for the release line; consumers must run Node 24 or newer ([#1263](https://github.com/MetaMask/metamask-design-system/pull/1263))
- Updated `Tag` neutral variant default icon and text colors to `alternative` ([#1294](https://github.com/MetaMask/metamask-design-system/pull/1294))
- Updated `BannerBase` spacing, padding, action button margin, and close button alignment to match Figma ([#1269](https://github.com/MetaMask/metamask-design-system/pull/1269))
- Updated `BannerAlert` to remove the severity-colored left border and inherit `BannerBase` default padding ([#1283](https://github.com/MetaMask/metamask-design-system/pull/1283))

## [0.28.0]

### Changed

- **BREAKING:** Reverted `TextButton` to its pre-0.26.0 `ButtonBase`-backed API — restores `size`/`TextButtonSize`, `isInverse`, `isDisabled`, `textProps`, and start/end icon props; removes `variant`/`TextVariant` ([#1259](https://github.com/MetaMask/metamask-design-system/pull/1259))
  - See [Migration Guide](./MIGRATION.md#from-version-0270-to-0280)

## [0.27.1]

### Fixed

- Fixed `Tag` gap between icon and label from 4px to 2px to match design spec ([#1236](https://github.com/MetaMask/metamask-design-system/pull/1236))

## [0.27.0]

### Added

- Added `Trophy` to `IconName` ([#1235](https://github.com/MetaMask/metamask-design-system/pull/1235))

## [0.26.0]

### Added

- Added `Tag` component for categorization and filtering labels ([#1211](https://github.com/MetaMask/metamask-design-system/pull/1211))
- Added `Toast` component with `Toaster` provider and imperative `toast()` API for non-blocking notifications ([#1190](https://github.com/MetaMask/metamask-design-system/pull/1190))

### Changed

- **BREAKING:** `TextButton` API aligned with React Native — `size`/`TextButtonSize` replaced by `variant`/`TextVariant`; `isInverse`, `isDisabled`, `textProps`, start/end icons, and accessory slots removed; `asChild` added for semantic link composition ([#1224](https://github.com/MetaMask/metamask-design-system/pull/1224))
  - See [Migration Guide](./MIGRATION.md#from-version-0250-to-0260)
- **BREAKING:** `AvatarIconSeverity.Error` renamed to `AvatarIconSeverity.Danger`; severity vocabulary standardized to use `Danger` for destructive/critical states and `Neutral` for default states ([#1159](https://github.com/MetaMask/metamask-design-system/pull/1159))
  - See [Migration Guide](./MIGRATION.md#from-version-0250-to-0260)

### Fixed

- Fixed `Toast` to support `toast()` calls made before `Toaster` mounts ([#1217](https://github.com/MetaMask/metamask-design-system/pull/1217))

## [0.25.0]

### Added

- Added `Popover` for anchored overlays such as menus, tooltips, and dialogs ([#1153](https://github.com/MetaMask/metamask-design-system/pull/1153))
- Added `TextArea` for controlled multiline text entry ([#1036](https://github.com/MetaMask/metamask-design-system/pull/1036))
- Added `TextFieldSearch` for controlled search-field flows on top of `TextField` ([#1171](https://github.com/MetaMask/metamask-design-system/pull/1171))
- Added `FormTextField` for labeled form controls built from `Label`, `TextField`, and `HelpText` ([#1197](https://github.com/MetaMask/metamask-design-system/pull/1197))

### Changed

- **BREAKING:** Dropped Node.js 18 support for the release line; consumers must run Node 20 or newer ([#1206](https://github.com/MetaMask/metamask-design-system/pull/1206))
- Updated avatar fallback handling so `AvatarToken`, `AvatarNetwork`, and `AvatarFavicon` resolve consistently when the requested image is unavailable ([#1212](https://github.com/MetaMask/metamask-design-system/pull/1212))

## [0.24.0]

### Added

- Added `TextField` for labeled text entry with optional helper and validation text, exposing `TextFieldSize` and `TextFieldType` ([#1170](https://github.com/MetaMask/metamask-design-system/pull/1170))
- Added `FlashFilled` icon (filled lightning bolt) to `IconName` ([#1191](https://github.com/MetaMask/metamask-design-system/pull/1191))

## [0.23.1]

### Changed

- Updated the `Telegram` icon asset to match the official Telegram logo ([#1176](https://github.com/MetaMask/metamask-design-system/pull/1176))

## [0.23.0]

### Added

- Added `PopoverHeader` for popover title rows and trailing actions, aligned with MetaMask extension screen patterns ([#1158](https://github.com/MetaMask/metamask-design-system/pull/1158))
- Added `ModalHeader` for modal title rows and accessory slots, aligned with MetaMask extension screen patterns ([#1144](https://github.com/MetaMask/metamask-design-system/pull/1144))
- Added `Label` for accessible captions paired with form controls ([#1152](https://github.com/MetaMask/metamask-design-system/pull/1152))
- Added `SensitiveText` for masking and revealing sensitive strings (addresses, secrets, recovery phrases) with configurable visible length ([#1164](https://github.com/MetaMask/metamask-design-system/pull/1164))
- Added `HelpText` for helper, success, warning, and error copy beneath inputs and other controls ([#1169](https://github.com/MetaMask/metamask-design-system/pull/1169))

### Changed

- `ButtonBase` now derives label typography, start and end icon sizes, and internal spacing from the `size` prop for every supported `ButtonBaseSize`, keeping defaults aligned without manual per-size tuning ([#1150](https://github.com/MetaMask/metamask-design-system/pull/1150))
  - If you wrap **`ButtonBase`** and override label, icon, or spacing, see [Migration guide](./MIGRATION.md#buttonbase-size-defaults).
- `BannerBase` close control behavior is simplified and aligned with the shared dismiss contract ([#1166](https://github.com/MetaMask/metamask-design-system/pull/1166))

## [0.22.0]

### Added

- Added `Modal` and `useModalContext` for composing modal dialogs with focus management and the same layout patterns used in the MetaMask extension migration ([#1136](https://github.com/MetaMask/metamask-design-system/pull/1136))
- Added `ModalContent` (with `ModalContentSize` and `MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR`) for sized modal bodies, entrance motion, and outside-click handling aligned with that migration ([#1139](https://github.com/MetaMask/metamask-design-system/pull/1139))
- Added `Skeleton` for loading placeholders ([#1146](https://github.com/MetaMask/metamask-design-system/pull/1146))
- Added `HeaderBase` for flexible header layouts when migrating extension screens into the design system ([#1142](https://github.com/MetaMask/metamask-design-system/pull/1142))
- Added `ListArrow`, `Musd`, and `MusdFilled` icons; refreshed `Candlestick`; and added `Group`, `PieChart`, and `Predictions` icons ([#1157](https://github.com/MetaMask/metamask-design-system/pull/1157), [#1161](https://github.com/MetaMask/metamask-design-system/pull/1161), [#1162](https://github.com/MetaMask/metamask-design-system/pull/1162), [#1163](https://github.com/MetaMask/metamask-design-system/pull/1163))

## [0.21.0]

### Added

- Added `Merge` to the icon set so it can be used anywhere `IconName` is supported in `@metamask/design-system-react` ([#1155](https://github.com/MetaMask/metamask-design-system/pull/1155))
- Added `ModalOverlay`, `ModalBody`, `ModalFocus`, and `ModalFooter` to help Extension consumers migrate modal building blocks into `@metamask/design-system-react` ([#1120](https://github.com/MetaMask/metamask-design-system/pull/1120), [#1121](https://github.com/MetaMask/metamask-design-system/pull/1121), [#1128](https://github.com/MetaMask/metamask-design-system/pull/1128), [#1132](https://github.com/MetaMask/metamask-design-system/pull/1132))

### Changed

- Updated `Input` to use the shared cross-platform API. Consumers should pass a controlled `value`, use `isReadOnly` as the readonly prop name, and stop relying on `defaultValue` as part of the public component contract ([#1043](https://github.com/MetaMask/metamask-design-system/pull/1043))
- Updated `AvatarGroup` to use shared cross-platform size and variant contracts, keeping React and React Native aligned on the same public API names and values ([#1067](https://github.com/MetaMask/metamask-design-system/pull/1067))

## [0.20.0]

### Changed

- **BREAKING:** Updated `Button`, `ButtonBase`, and `ButtonHero` size and variant exports to use shared const-object + string-union types rather than platform-local enum-based definitions, aligning React with the shared cross-platform type contracts ([#1034](https://github.com/MetaMask/metamask-design-system/pull/1034))
  - No migration required for typical usage; continue importing from `@metamask/design-system-react` as before.
  - Runtime values remain stable while type definitions follow ADR-0003/ADR-0004.
- **BREAKING:** Updated `ButtonIconSize` and `ButtonIconVariant` to use shared const-object + string-union types rather than platform-local enum-based definitions, aligning React with the shared cross-platform type contracts ([#1038](https://github.com/MetaMask/metamask-design-system/pull/1038))
  - No migration required for typical usage; continue importing from `@metamask/design-system-react` as before.
  - Runtime values remain stable while type definitions follow ADR-0003/ADR-0004.
- Updated Figma Code Connect to the live `MMDS Components` file and aligned `ButtonIcon` and `TextButton` mappings with the current component APIs shown in Dev Mode ([#1109](https://github.com/MetaMask/metamask-design-system/pull/1109))
- Expanded the `TextButton` migration guide for extension consumers replacing `ButtonLink` and `ButtonVariant.Link` with the current design-system APIs ([#1098](https://github.com/MetaMask/metamask-design-system/pull/1098))

## [0.19.0]

### Added

- Added `Telegram` to the `IconName` set for use anywhere the React package accepts design system icons ([#1122](https://github.com/MetaMask/metamask-design-system/pull/1122))

### Changed

- **BREAKING:** Updated `AvatarIcon` exports to use shared const-object + string-union types rather than local enum-based definitions, aligning React with the shared cross-platform type contracts ([#996](https://github.com/MetaMask/metamask-design-system/pull/996))
  - No migration required for typical usage; continue importing from `@metamask/design-system-react` as before.
  - Runtime values remain stable while type definitions follow ADR-0003/ADR-0004.

## [0.18.0]

### Changed

- **BREAKING:** Updated `IconName`, `IconColor`, and `IconSize` exports to use const-object + string-union types instead of local enums; existing imports from `@metamask/design-system-react` continue to work, but enum-specific type assumptions may need updating ([#1042](https://github.com/MetaMask/metamask-design-system/pull/1042), [#1101](https://github.com/MetaMask/metamask-design-system/pull/1101))
  - See [Migration Guide](./MIGRATION.md#from-version-0170-to-0180)
- **BREAKING:** Updated `Box` type exports (`BoxFlexDirection`, `BoxFlexWrap`, `BoxAlignItems`, `BoxJustifyContent`, `BoxBackgroundColor`, `BoxBorderColor`, `BoxSpacing`, `BoxBorderWidth`) to use const-object + string-union types, and removed stale Box color entries that no longer map to design tokens ([#1026](https://github.com/MetaMask/metamask-design-system/pull/1026))
  - Removed `BoxBackgroundColor.WarningAlternative`, `BoxBackgroundColor.SuccessAlternative`, `BoxBorderColor.WarningAlternative`, `BoxBorderColor.SuccessAlternative`, and `BoxBorderColor.InfoAlternative`
  - See [Migration Guide](./MIGRATION.md#from-version-0170-to-0180)
- Updated `ButtonTertiary` to use the default text color for more consistent contrast across states ([#1099](https://github.com/MetaMask/metamask-design-system/pull/1099))

## [0.17.1]

### Changed

- Expanded the `react` and `react-dom` peer dependency ranges to support React 19 consumers. ([#1089](https://github.com/MetaMask/metamask-design-system/pull/1089))

## [0.17.0]

### Changed

- Updated `AvatarFavicon` type internals to use ADR-0003/ADR-0004 shared types; imports from `@metamask/design-system-react` are unchanged ([#1062](https://github.com/MetaMask/metamask-design-system/pull/1062))
- **BREAKING:** Migrated `Text` typography types (`TextVariant`, `TextColor`, `FontWeight`, `FontStyle`, `FontFamily`) to `@metamask/design-system-shared`; all imports through `@metamask/design-system-react` continue to work without change ([#1047](https://github.com/MetaMask/metamask-design-system/pull/1047))
  - `FontWeight`, `FontStyle`, and `FontFamily` underlying string values changed to semantic identifiers (e.g. `FontWeight.Bold` was `'font-bold'`, now `'bold'`); idiomatic usage is unaffected
  - Projects scanning `node_modules` for Tailwind class names must also scan `@metamask/design-system-shared`
  - See [Migration Guide](./MIGRATION.md#from-version-0160-to-0170)

## [0.16.0]

### Changed

- Updated `BadgeNetwork` type internals; imports from `@metamask/design-system-react` are unchanged ([#1021](https://github.com/MetaMask/metamask-design-system/pull/1021))

## [0.15.0]

### Added

- Added `NoPhotography` icon ([#1056](https://github.com/MetaMask/metamask-design-system/pull/1056))

### Changed

- **BREAKING:** Updated `AvatarToken` and `AvatarAccount` exports to use shared const-object + string-union types (ADR-0003/ADR-0004); normal use is unaffected ([#1009](https://github.com/MetaMask/metamask-design-system/pull/1009), [#1015](https://github.com/MetaMask/metamask-design-system/pull/1015))

## [0.14.0]

### Changed

- **BREAKING:** Updated `AvatarBase` exports to consume shared const-object + string-union types rather than local enums, aligning React with shared cross-platform type contracts ([#1005](https://github.com/MetaMask/metamask-design-system/pull/1005))
  - No migration required for typical usage; continue importing from `@metamask/design-system-react` as before.
  - Runtime values remain stable while type definitions follow ADR-0003/ADR-0004.
- Updated `@metamask/utils` peer dependency to `^11.11.0` ([#1033](https://github.com/MetaMask/metamask-design-system/pull/1033))
- Expanded `BannerBase` migration documentation to improve upgrade guidance for consumers moving between recent releases ([#1011](https://github.com/MetaMask/metamask-design-system/pull/1011))

## [0.13.0]

### Changed

- `FontWeight.Bold` and the `Text` component now treat the semantic bold slot as weight 600; Storybook moved to the `Geist-SemiBold` assets and the tokens now emit `--font-weight-bold: 600`, so update any hardcoded `font-weight: 700` references as outlined in MIGRATION.md#from-version-0120-to-0130 ([#1017](https://github.com/MetaMask/metamask-design-system/pull/1017))
- `BadgeWrapperPosition`, `BadgeWrapperPositionAnchorShape`, `BadgeWrapperCustomPosition`, and `BadgeWrapperPropsShared` now derive from const objects with `as const`/string-union typings per ADR-0003 and ADR-0004, so the same values are available to both React and React Native while your import statements continue to reference `@metamask/design-system-react` (or the platform-specific entry point) as before ([#1014](https://github.com/MetaMask/metamask-design-system/pull/1014); see https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md and MIGRATION.md#from-version-0120-to-0130).
- Documented the Button migration path that walks through prop, variant, and size mappings for both web and mobile, linking directly to MIGRATION.md#button-component so the release note, changelog, and migration guide share the same reference ([#999](https://github.com/MetaMask/metamask-design-system/pull/999))

### Fixed

- Restored a visible keyboard focus outline for `Checkbox` keyboard users by making the hidden input a Tailwind `peer` and mirroring its `peer-focus-visible` state onto the visible container so Tab navigation shows a clear indicator ([#1008](https://github.com/MetaMask/metamask-design-system/pull/1008))

## [0.12.0]

### Added

- Added `BannerAlert` component ([#975](https://github.com/MetaMask/metamask-design-system/pull/975))

### Changed

- Updated `TextButton` hover/pressed styles to be text-only (no background fill) ([#1001](https://github.com/MetaMask/metamask-design-system/pull/1001))
- Updated `Candlestick` icon asset with smaller size variant ([#998](https://github.com/MetaMask/metamask-design-system/pull/998))

## [0.11.0]

### Added

- Added `ButtonFilter` component for filter button functionality ([#964](https://github.com/MetaMask/metamask-design-system/pull/964))
- Added `BannerBase` component for creating custom banner notifications ([#961](https://github.com/MetaMask/metamask-design-system/pull/961))

### Changed

- **BREAKING:** Updated `ButtonIcon` API to use `variant` prop instead of `isInverse` and `isFloating` boolean props ([#948](https://github.com/MetaMask/metamask-design-system/pull/948))
  - Removed `isInverse` and `isFloating` props
  - Added `variant` prop with three options: `ButtonIconVariant.Default` (default), `ButtonIconVariant.Filled` (new muted background with rounded corners), and `ButtonIconVariant.Floating` (replaces `isFloating` behavior)
  - Migration: Replace `isFloating={true}` with `variant={ButtonIconVariant.Floating}`, and use `variant={ButtonIconVariant.Default}` for standard transparent background
  - See [Migration Guide](./MIGRATION.md#from-version-0100-to-0110) for complete migration instructions
- Updated `Ai` icon to filled version for visual consistency ([#970](https://github.com/MetaMask/metamask-design-system/pull/970))

## [0.10.0]

### Changed

- **BREAKING:** Updated `BadgeCount` type exports to use the ADR-0003/ADR-0004 const-object + string-union pattern instead of TypeScript enums ([#942](https://github.com/MetaMask/metamask-design-system/pull/942))
  - `BadgeCountSize` is now provided as a const object with a derived union type rather than an enum
  - `BadgeCount` shared prop types are now sourced from `@metamask/design-system-shared`
  - Migration: update any enum-specific usage to const-object/union usage, while continuing to import from `@metamask/design-system-react`

## [0.9.0]

### Changed

- **BREAKING:** Migrated `BadgeStatus` component from TypeScript enums to string union types with const objects ([#912](https://github.com/MetaMask/metamask-design-system/pull/912))
  - `BadgeStatusStatus` and `BadgeStatusSize` enums replaced with const objects and derived string union types
  - **No migration required** - continue importing from `@metamask/design-system-react` as usual
  - Const object values remain the same (e.g., `BadgeStatusStatus.Active` still works)
  - String literals now also accepted thanks to structural typing (e.g., `'active'` works where `BadgeStatusStatus.Active` is expected)
  - We are still evaluating best practices for const objects vs string literals - use whichever approach works best for your codebase
  - This change implements [ADR-0003](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md) and [ADR-0004](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

## [0.8.0]

### Added

- Added `CorporateFare` icon to represent stocks ([#920](https://github.com/MetaMask/metamask-design-system/pull/920))
- Added `Input` component for text input fields ([#909](https://github.com/MetaMask/metamask-design-system/pull/909))

### Changed

- **BREAKING:** Standardized non-icon enum runtime values to use kebab-case format ([#894](https://github.com/MetaMask/metamask-design-system/pull/894))
  - Enum values now use lowercase/kebab-case (e.g., `'primary'` instead of `'Primary'`, `'top-right'` instead of `'TopRight'`)
  - **Migration likely not needed** - continue using enum constants (e.g., `ButtonVariant.Primary`)
  - **Migration needed** only if your app persists or transmits these enum values (localStorage, databases, APIs)
  - This prepares for migration from enums to string union types per ADR #127
- Updated `@metamask/utils` peer dependency from 11.9.0 to 11.10.0 ([#903](https://github.com/MetaMask/metamask-design-system/pull/903))

## [0.7.0]

### Added

- Added `AfterHours`, `Popup`, and `Sidepanel` icons ([#898](https://github.com/MetaMask/metamask-design-system/pull/898), [#879](https://github.com/MetaMask/metamask-design-system/pull/879))

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
- Figma code connect files for all components ([#766](https://github.com/MetaMask/metamask-design-system/pull/766), [#791](https://github.com/MetaMask/metamask-design-system/pull/791), [#795](https://github.com/MetaMask/metamask-design-system/pull/795), [#796](https://github.com/MetaMask/metamask-design-system/pull/796), [#794](https://github.com/MetaMask/metamask-design-system/pull/794), [#792](https://github.com/MetaMask/metamask-design-system/pull/792))

### Changed

- Update AvatarAccount shape from circle to square ([#800](https://github.com/MetaMask/metamask-design-system/pull/800))
- Update README.mdx files for template alignment ([#771](https://github.com/MetaMask/metamask-design-system/pull/771))

### Fixed

- Adding new text classnames to twmerge to avoid conflicts ([#802](https://github.com/MetaMask/metamask-design-system/pull/802))
- Optimize icon SVGs and remove hardcoded colors ([#799](https://github.com/MetaMask/metamask-design-system/pull/799))
- Add ref support to Box component using forwardRef ([#790](https://github.com/MetaMask/metamask-design-system/pull/790))

## [0.2.0]

### Added

- Added 5 new Text component variants with responsive typography support: ([#777](https://github.com/MetaMask/metamask-design-system/pull/777))
  - `TextVariant.PageHeading` - For main page titles (renders as `<h1>` by default)
  - `TextVariant.SectionHeading` - For section titles (renders as `<h2>` by default)
  - `TextVariant.ButtonLabelMd` - For medium-sized button labels (renders as `<span>` by default)
  - `TextVariant.ButtonLabelLg` - For large-sized button labels (renders as `<span>` by default)
  - `TextVariant.AmountDisplayLg` - For large amount/value displays (renders as `<span>` by default)
- Added comprehensive utility props to Box component for enhanced layout control and fixes: ([#779](https://github.com/MetaMask/metamask-design-system/pull/779), [#781](https://github.com/MetaMask/metamask-design-system/pull/781))
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

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.32.0...HEAD
[0.32.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.31.0...@metamask/design-system-react@0.32.0
[0.31.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.30.0...@metamask/design-system-react@0.31.0
[0.30.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.29.0...@metamask/design-system-react@0.30.0
[0.29.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.28.0...@metamask/design-system-react@0.29.0
[0.28.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.27.1...@metamask/design-system-react@0.28.0
[0.27.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.27.0...@metamask/design-system-react@0.27.1
[0.27.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.26.0...@metamask/design-system-react@0.27.0
[0.26.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.25.0...@metamask/design-system-react@0.26.0
[0.25.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.24.0...@metamask/design-system-react@0.25.0
[0.24.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.23.1...@metamask/design-system-react@0.24.0
[0.23.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.23.0...@metamask/design-system-react@0.23.1
[0.23.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.22.0...@metamask/design-system-react@0.23.0
[0.22.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.21.0...@metamask/design-system-react@0.22.0
[0.21.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.20.0...@metamask/design-system-react@0.21.0
[0.20.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.19.0...@metamask/design-system-react@0.20.0
[0.19.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.18.0...@metamask/design-system-react@0.19.0
[0.18.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.17.1...@metamask/design-system-react@0.18.0
[0.17.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.17.0...@metamask/design-system-react@0.17.1
[0.17.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.16.0...@metamask/design-system-react@0.17.0
[0.16.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.15.0...@metamask/design-system-react@0.16.0
[0.15.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.14.0...@metamask/design-system-react@0.15.0
[0.14.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.13.0...@metamask/design-system-react@0.14.0
[0.13.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.12.0...@metamask/design-system-react@0.13.0
[0.12.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.11.0...@metamask/design-system-react@0.12.0
[0.11.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.10.0...@metamask/design-system-react@0.11.0
[0.10.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.9.0...@metamask/design-system-react@0.10.0
[0.9.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.8.0...@metamask/design-system-react@0.9.0
[0.8.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.7.0...@metamask/design-system-react@0.8.0
[0.7.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.6.1...@metamask/design-system-react@0.7.0
[0.6.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.6.0...@metamask/design-system-react@0.6.1
[0.6.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.5.0...@metamask/design-system-react@0.6.0
[0.5.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.4.1...@metamask/design-system-react@0.5.0
[0.4.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.4.0...@metamask/design-system-react@0.4.1
[0.4.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.3.1...@metamask/design-system-react@0.4.0
[0.3.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.3.0...@metamask/design-system-react@0.3.1
[0.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.2.0...@metamask/design-system-react@0.3.0
[0.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.1.0...@metamask/design-system-react@0.2.0
[0.1.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-system-react@0.1.0
