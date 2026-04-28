# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.19.0]

### Uncategorized

- feat: add Telegram icon ([#1122](https://github.com/MetaMask/metamask-design-system/pull/1122))
- docs: `ButtonBase` migration (extension) ([#1093](https://github.com/MetaMask/metamask-design-system/pull/1093))
- feat: migrate BadgeIcon to ADR-0004 shared types (DSYS-479) ([#1010](https://github.com/MetaMask/metamask-design-system/pull/1010))
- feat: DSYS-476 Migrate AvatarIcon to ADR-0003 and ADR-0004 ([#996](https://github.com/MetaMask/metamask-design-system/pull/996))
- chore: remove unused eslint disable comments ([#1118](https://github.com/MetaMask/metamask-design-system/pull/1118))

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

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-system-react@0.19.0...HEAD
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
