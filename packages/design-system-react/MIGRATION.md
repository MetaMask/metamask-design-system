# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-react` to another, and for migrating components from MetaMask Extension `component-library` to the design system.

## Table of Contents

- [Tailwind CSS v3 to v4](#tailwind-css-v3-to-v4)
- [General Extension Migration Guidance](#general-extension-migration-guidance)
- [From Extension Component Library](#from-extension-component-library)
  - [Button Component](#button-component)
  - [Box Component](#box-component)
  - [BannerAlert Component](#banneralert-component)
  - [Text Component](#text-component)
  - [Icon Component](#icon-component)
- [Version Updates](#version-updates)
  - [From version 0.12.0 to 0.13.0](#from-version-0120-to-0130)
  - [From version 0.10.0 to 0.11.0](#from-version-0100-to-0110)
  - [From version 0.1.0 to 0.2.0](#from-version-010-to-020)

## Tailwind CSS v3 to v4

`@metamask/design-system-react` now requires Tailwind CSS v4. For full setup instructions, see the [Tailwind v3 to v4 migration guide in `@metamask/design-tokens`](../design-tokens/MIGRATION.md#tailwind-css-v3-to-v4).

### Breaking Changes

#### `@metamask/design-system-tailwind-preset` is no longer a peer dependency

The v3 Tailwind preset has been removed as a peer dependency. Consumers should use `@metamask/design-tokens/tailwind/theme.css` instead.

**Before:**

```json
{
  "dependencies": {
    "@metamask/design-system-react": "^0.11.0",
    "@metamask/design-system-tailwind-preset": "^0.6.0",
    "@metamask/design-tokens": "^8.1.0"
  }
}
```

**After:**

```json
{
  "dependencies": {
    "@metamask/design-system-react": "^0.12.0",
    "@metamask/design-tokens": "^8.1.0"
  },
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0"
  }
}
```

#### `tailwind-merge` upgraded from v2 to v3

`tailwind-merge` is a direct dependency (not a peer dependency), so this is handled internally. If you import `twMerge` from this package, no changes are needed — the `extendTailwindMerge` API is unchanged.

If you use your own `tailwind-merge` instance alongside this package, ensure you upgrade to v3 for Tailwind v4 compatibility.

## General Extension Migration Guidance

This guidance applies to all extension `component-library` to `@metamask/design-system-react` migrations.

- Legacy extension components were built on top of Box patterns, so they often accepted broad style utility props.
- Design system components prefer explicit component APIs for design-system semantics (for example `variant`, `size`, `color`).
- For styling utilities and one-off layout/styling needs, use Tailwind `className` rather than relying on broad style-utility prop surfaces.

When migrating any extension component, apply this guidance first, then use the component-specific mappings below.

## From Extension Component Library

This section covers migrating components from MetaMask Extension's `ui/components/component-library` to `@metamask/design-system-react`.

### Button Component

The Button component has significant breaking changes when migrating from the extension component-library. The new design system `Button` replaces the old generic `Button` (for Primary and Secondary variants). The old `Link` variant should use `ButtonLink` or the `TextButton` component instead.

#### Breaking Changes

##### Import Path

| Extension Pattern                                         | Design System Migration                                         |
| --------------------------------------------------------- | --------------------------------------------------------------- |
| `import { Button } from '../../component-library'`        | `import { Button } from '@metamask/design-system-react'`        |
| `import { ButtonVariant } from '../../component-library'` | `import { ButtonVariant } from '@metamask/design-system-react'` |
| `import { ButtonSize } from '../../component-library'`    | `import { ButtonSize } from '@metamask/design-system-react'`    |

##### Variant Enum

The extension already uses `ButtonVariant` (singular) with lowercase values. The `Link` variant is removed from the design system `Button` — use `TextButton` instead.

| Extension Value                           | Design System Value                       | Notes              |
| ----------------------------------------- | ----------------------------------------- | ------------------ |
| `ButtonVariant.Primary` (`'primary'`)     | `ButtonVariant.Primary` (`'primary'`)     | unchanged          |
| `ButtonVariant.Secondary` (`'secondary'`) | `ButtonVariant.Secondary` (`'secondary'`) | unchanged          |
| `ButtonVariant.Link` (`'link'`)           | Use `TextButton` component                | separate component |
| —                                         | `ButtonVariant.Tertiary` (`'tertiary'`)   | new variant        |

##### Size Enum

| Extension Value                    | Design System Value      | Notes            |
| ---------------------------------- | ------------------------ | ---------------- |
| `ButtonSize.Sm` (`'sm'`)           | `ButtonSize.Sm` (`'sm'`) | unchanged        |
| `ButtonSize.Md` (`'md'`)           | `ButtonSize.Md` (`'md'`) | unchanged        |
| `ButtonSize.Lg` (`'lg'`)           | `ButtonSize.Lg` (`'lg'`) | unchanged        |
| `ButtonSize.Inherit` (`'inherit'`) | Removed                  | use default size |
| `ButtonSize.Auto` (`'auto'`)       | Removed                  | use default size |

##### Content Model

The extension Button uses `children` (same as design system) — no change needed.

##### State Props

| Extension Prop | Design System Prop | Notes   |
| -------------- | ------------------ | ------- |
| `disabled`     | `isDisabled`       | renamed |
| `loading`      | `isLoading`        | renamed |
| `block`        | `isFullWidth`      | renamed |
| `danger`       | `isDanger`         | renamed |

##### Removed Props

| Extension Prop     | Design System Migration                         |
| ------------------ | ----------------------------------------------- |
| `as` (polymorphic) | Removed — Button is always a `<button>` element |
| `href`             | Removed — use `<a>` wrapper or `ButtonLink`     |
| `externalLink`     | Removed — use `<a target="_blank">` wrapper     |

#### Migration Examples

##### Before (Extension)

```tsx
import { Button, ButtonVariant, ButtonSize } from '../../component-library';

<Button
  variant={ButtonVariant.Primary}
  size={ButtonSize.Lg}
  block
  onClick={handleSubmit}
  disabled={!isValid}
  loading={isSubmitting}
>
  Submit
</Button>;
```

##### After (Design System)

```tsx
import {
  Button,
  ButtonVariant,
  ButtonSize,
} from '@metamask/design-system-react';

<Button
  variant={ButtonVariant.Primary}
  size={ButtonSize.Lg}
  isFullWidth
  onClick={handleSubmit}
  isDisabled={!isValid}
  isLoading={isSubmitting}
>
  Submit
</Button>;
```

#### API Differences

The design system Button adds these props:

- `isDanger` — destructive action styling (replaces `danger`)
- `isInverse` — inverted colors for colored backgrounds
- `startIconName` / `endIconName` — icon names for leading/trailing icons
- `loadingText` — custom text during loading state
- `className` — Tailwind utility class overrides (merged via `twMerge`)

### Box Component

The Box component has breaking changes when migrating from the extension component-library, particularly around responsive spacing and certain margin/padding props.

#### Breaking Changes

##### Responsive Spacing

The extension Box supported responsive arrays for margin and padding props. The design system Box does not support this pattern. Use Tailwind responsive classes via `className` instead.

| Extension Pattern                          | Design System Migration                         |
| ------------------------------------------ | ----------------------------------------------- |
| `margin={[2, 4]}`                          | `margin={2} className="md:m-4"`                 |
| `padding={[2, 4, 6]}`                      | `padding={2} className="md:p-4 lg:p-6"`         |
| `marginTop={[1, 2]}`                       | `marginTop={1} className="md:mt-2"`             |
| Responsive spacing at multiple breakpoints | Use Tailwind responsive prefixes in `className` |

##### Margin Inline Props

The extension Box had `marginInline`, `marginInlineStart`, and `marginInlineEnd` props. The design system Box uses `marginHorizontal` or Tailwind classes instead.

| Extension Pattern       | Design System Migration                      |
| ----------------------- | -------------------------------------------- |
| `marginInline={4}`      | `marginHorizontal={4}` or `className="mx-4"` |
| `marginInlineStart={2}` | `className="ms-2"`                           |
| `marginInlineEnd={2}`   | `className="me-2"`                           |

##### Padding Inline Props

The extension Box had `paddingInline`, `paddingInlineStart`, and `paddingInlineEnd` props. The design system Box uses `paddingHorizontal` or Tailwind classes instead.

| Extension Pattern        | Design System Migration                       |
| ------------------------ | --------------------------------------------- |
| `paddingInline={4}`      | `paddingHorizontal={4}` or `className="px-4"` |
| `paddingInlineStart={2}` | `className="ps-2"`                            |
| `paddingInlineEnd={2}`   | `className="pe-2"`                            |

##### Margin Auto

The extension Box supported `margin="auto"`. The design system Box does not support this value. Use Tailwind classes instead.

| Extension Pattern | Design System Migration |
| ----------------- | ----------------------- |
| `margin="auto"`   | `className="m-auto"`    |

#### Migration Examples

##### Before (Extension)

```tsx
import { Box } from '../../component-library';

// Responsive spacing
<Box margin={[2, 4]} padding={[2, 4]}>
  Responsive spacing
</Box>

// Inline props
<Box marginInline={4} paddingInlineStart={2}>
  Inline spacing
</Box>

// Auto margin
<Box margin="auto">
  Centered with auto margin
</Box>
```

##### After (Design System)

```tsx
import { Box } from '@metamask/design-system-react';

// Responsive spacing - use className for responsive values
<Box margin={2} padding={2} className="md:m-4 md:p-4">
  Responsive spacing
</Box>

// Inline props - use marginHorizontal or className
<Box marginHorizontal={4} className="ps-2">
  Inline spacing
</Box>

// Auto margin - use className
<Box className="m-auto">
  Centered with auto margin
</Box>
```

#### Spacing Props Still Available

Most extension Box margin/padding props work the same in the design system:

- ✅ `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`
- ✅ `marginHorizontal` (replaces `marginInline`)
- ✅ `marginVertical`
- ✅ `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`
- ✅ `paddingHorizontal` (replaces `paddingInline`)
- ✅ `paddingVertical`

For simple, non-responsive spacing, continue using these props. Use `className` with Tailwind utilities for responsive spacing, auto values, or inline-start/end positioning.

### BannerAlert Component

The extension `banner-alert` maps directly to `BannerAlert` in the design system, but severity values are now provided via the shared `BannerAlertSeverity` const object (ADR-0003/0004) instead of extension enums.

#### Breaking Changes

##### Imports and Enum Source

| Extension Pattern                                 | Design System Migration                                    |
| ------------------------------------------------- | ---------------------------------------------------------- |
| `BannerAlertSeverity` from `./banner-alert.types` | `BannerAlertSeverity` from `@metamask/design-system-react` |

##### Severity Values

| Extension Value                             | Design System Value           |
| ------------------------------------------- | ----------------------------- |
| `BannerAlertSeverity.Info` (`'info'`)       | `BannerAlertSeverity.Info`    |
| `BannerAlertSeverity.Success` (`'success'`) | `BannerAlertSeverity.Success` |
| `BannerAlertSeverity.Warning` (`'warning'`) | `BannerAlertSeverity.Warning` |
| `BannerAlertSeverity.Danger` (`'danger'`)   | `BannerAlertSeverity.Danger`  |

#### Migration Example

##### Before (Extension)

```tsx
import { BannerAlert } from '../../component-library/banner-alert';
import { BannerAlertSeverity } from '../../component-library/banner-alert/banner-alert.types';

<BannerAlert
  severity={BannerAlertSeverity.Warning}
  title="Warning"
  actionButtonLabel="Action"
  actionButtonOnClick={() => undefined}
/>;
```

##### After (Design System)

```tsx
import {
  BannerAlert,
  BannerAlertSeverity,
} from '@metamask/design-system-react';

<BannerAlert
  severity={BannerAlertSeverity.Warning}
  title="Warning"
  actionButtonLabel="Action"
  actionButtonOnClick={() => undefined}
/>;
```

### Text Component

The Text component has significant breaking changes when migrating from the extension component-library.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for the shared Box/style-utility migration approach used across all components.

#### Breaking Changes

##### Font Weight Separation

The most significant change is that font weight is now a **separate prop** instead of being part of the variant name.

| Extension Variant          | Design System Migration                                        |
| -------------------------- | -------------------------------------------------------------- |
| `TextVariant.bodyMd`       | `variant={TextVariant.BodyMd}`                                 |
| `TextVariant.bodyMdMedium` | `variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}`  |
| `TextVariant.bodyMdBold`   | `variant={TextVariant.BodyMd} fontWeight={FontWeight.Bold}`    |
| `TextVariant.bodySm`       | `variant={TextVariant.BodySm}`                                 |
| `TextVariant.bodySmMedium` | `variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}`  |
| `TextVariant.bodySmBold`   | `variant={TextVariant.BodySm} fontWeight={FontWeight.Bold}`    |
| `TextVariant.bodyXs`       | `variant={TextVariant.BodyXs}`                                 |
| `TextVariant.bodyXsMedium` | `variant={TextVariant.BodyXs} fontWeight={FontWeight.Medium}`  |
| `TextVariant.bodyLgMedium` | `variant={TextVariant.BodyLg} fontWeight={FontWeight.Medium}`  |
| `TextVariant.headingSm`    | `variant={TextVariant.HeadingSm}`                              |
| `TextVariant.headingMd`    | `variant={TextVariant.HeadingMd}`                              |
| `TextVariant.headingLg`    | `variant={TextVariant.HeadingLg}`                              |
| `TextVariant.displayMd`    | `variant={TextVariant.DisplayMd}`                              |
| `TextVariant.inherit`      | Remove `variant` prop (text inherits parent styles by default) |

##### Variant Name Changes

Variant names now use PascalCase instead of camelCase:

| Extension                  | Design System                              |
| -------------------------- | ------------------------------------------ |
| `TextVariant.bodyMd`       | `TextVariant.BodyMd`                       |
| `TextVariant.bodySm`       | `TextVariant.BodySm`                       |
| `TextVariant.bodyXs`       | `TextVariant.BodyXs`                       |
| `TextVariant.bodyLgMedium` | `TextVariant.BodyLg` + `FontWeight.Medium` |
| `TextVariant.headingSm`    | `TextVariant.HeadingSm`                    |
| `TextVariant.headingMd`    | `TextVariant.HeadingMd`                    |
| `TextVariant.headingLg`    | `TextVariant.HeadingLg`                    |
| `TextVariant.displayMd`    | `TextVariant.DisplayMd`                    |

##### Color Prop Changes

Color enum values now use `TextColor` prefix:

| Extension                | Design System                |
| ------------------------ | ---------------------------- |
| `Color.textDefault`      | `TextColor.TextDefault`      |
| `Color.textAlternative`  | `TextColor.TextAlternative`  |
| `Color.textMuted`        | `TextColor.TextMuted`        |
| `Color.primaryDefault`   | `TextColor.PrimaryDefault`   |
| `Color.errorDefault`     | `TextColor.ErrorDefault`     |
| `Color.errorAlternative` | `TextColor.ErrorAlternative` |
| `Color.warningDefault`   | `TextColor.WarningDefault`   |
| `Color.successDefault`   | `TextColor.SuccessDefault`   |
| `Color.infoDefault`      | `TextColor.InfoDefault`      |
| `Color.overlayInverse`   | `TextColor.OverlayInverse`   |
| `Color.primaryInverse`   | `TextColor.PrimaryInverse`   |
| `Color.errorInverse`     | `TextColor.ErrorInverse`     |
| `Color.warningInverse`   | `TextColor.WarningInverse`   |
| `Color.successInverse`   | `TextColor.SuccessInverse`   |
| `Color.infoInverse`      | `TextColor.InfoInverse`      |
| `Color.inherit`          | `TextColor.Inherit`          |

#### Migration Examples

##### Before (Extension)

```tsx
import { Text, TextVariant, Color } from '../../component-library';

// Regular body text
<Text variant={TextVariant.bodyMd}>Regular text</Text>

// Medium weight body text
<Text variant={TextVariant.bodyMdMedium}>Medium weight text</Text>

// Bold body text
<Text variant={TextVariant.bodyMdBold}>Bold text</Text>

// Small text with color
<Text variant={TextVariant.bodySm} color={Color.textMuted}>
  Small muted text
</Text>
```

##### After (Design System)

```tsx
import { Text, TextVariant, FontWeight, TextColor } from '@metamask/design-system-react';

// Regular body text
<Text variant={TextVariant.BodyMd}>Regular text</Text>

// Medium weight body text
<Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
  Medium weight text
</Text>

// Bold body text
<Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Bold}>
  Bold text
</Text>

// Small text with color
<Text variant={TextVariant.BodySm} color={TextColor.TextMuted}>
  Small muted text
</Text>
```

#### API Differences

Both extension and design-system Text components support `fontFamily`, `textTransform`, `textAlign`, `overflowWrap`, and `ellipsis`.

Notable differences in the design system Text component:

- `asChild` - compose styles onto a child element via Radix `Slot`
- New semantic variants are available in addition to migrated variants (`PageHeading`, `SectionHeading`, `ButtonLabelMd`, `ButtonLabelLg`, `AmountDisplayLg`)

### Icon Component

The Icon component has enum and prop-surface differences when migrating from the extension component-library.

Refer to [General Extension Migration Guidance](#general-extension-migration-guidance) for the shared Box/style-utility migration approach used across all components.

#### Breaking Changes

##### Size Enum Changes

The extension `IconSize.Inherit` value is not supported in the design system.

| Extension Size     | Design System Migration          |
| ------------------ | -------------------------------- |
| `IconSize.Xs`      | `IconSize.Xs`                    |
| `IconSize.Sm`      | `IconSize.Sm`                    |
| `IconSize.Md`      | `IconSize.Md`                    |
| `IconSize.Lg`      | `IconSize.Lg`                    |
| `IconSize.Xl`      | `IconSize.Xl`                    |
| `IconSize.Inherit` | Use `className` sizing utilities |

##### Color Enum Changes

Icon colors now use PascalCase names with a design-system-specific enum.

| Extension Color             | Design System               |
| --------------------------- | --------------------------- |
| `IconColor.iconDefault`     | `IconColor.IconDefault`     |
| `IconColor.iconAlternative` | `IconColor.IconAlternative` |
| `IconColor.iconMuted`       | `IconColor.IconMuted`       |
| `IconColor.overlayInverse`  | `IconColor.OverlayInverse`  |
| `IconColor.primaryDefault`  | `IconColor.PrimaryDefault`  |
| `IconColor.primaryInverse`  | `IconColor.PrimaryInverse`  |
| `IconColor.errorDefault`    | `IconColor.ErrorDefault`    |
| `IconColor.errorInverse`    | `IconColor.ErrorInverse`    |
| `IconColor.warningDefault`  | `IconColor.WarningDefault`  |
| `IconColor.warningInverse`  | `IconColor.WarningInverse`  |
| `IconColor.successDefault`  | `IconColor.SuccessDefault`  |
| `IconColor.successInverse`  | `IconColor.SuccessInverse`  |
| `IconColor.infoDefault`     | `IconColor.InfoDefault`     |
| `IconColor.infoInverse`     | `IconColor.InfoInverse`     |

##### Prop Surface Changes

The extension Icon is polymorphic (`as` pattern), while the design system Icon is an SVG-first component with standard SVG props.

#### Migration Examples

##### Before (Extension)

```tsx
import { Icon } from '../../component-library';
import {
  IconName,
  IconSize,
  IconColor,
} from '../../../helpers/constants/design-system';

<Icon
  name={IconName.Check}
  size={IconSize.Inherit}
  color={IconColor.iconDefault}
/>;
```

##### After (Design System)

```tsx
import {
  Icon,
  IconName,
  IconSize,
  IconColor,
} from '@metamask/design-system-react';

<Icon
  name={IconName.Check}
  size={IconSize.Md}
  color={IconColor.IconDefault}
  className="h-5 w-5"
/>;
```

#### API Differences

- `className` and `style` are still supported
- Icon color values should use `IconColor` enum values from `@metamask/design-system-react`
- Use SVG props directly for accessibility and rendering behavior

## Version Updates

This section covers version-to-version breaking changes within `@metamask/design-system-react`.

## From version 0.12.0 to 0.13.0

### Typography: semantic bold is now semibold (600)

- `FontWeight.Bold` and the `Text` component now treat bold as weight 600 across both CSS and Tailwind enums; the Storybook font loader swapped the retired `Geist-Bold` assets for the new `Geist-SemiBold` files, and the design tokens now export `--font-weight-bold: 600`.
- Update any hardcoded `font-weight: 700` values, `@font-face` definitions, or typography documentation to 600 if they refer to bold text (the exposed `'font-bold'` utility remains unchanged, so consuming code keeps using the same enums).
- This change builds on `@metamask/design-tokens@8.3.0`, so consult the [design-tokens migration guide](../design-tokens/MIGRATION.md#from-version-822-to-830) for the matching token-level steps.

### BadgeWrapper types now use const-object + union definitions

- `BadgeWrapperPosition`, `BadgeWrapperPositionAnchorShape`, `BadgeWrapperCustomPosition`, and `BadgeWrapperPropsShared` now come from const objects annotated `as const`, producing string union types instead of TypeScript enums; this follows ADR-0003 and ADR-0004 so the same canonical values power both React and React Native without duplicating the runtime constants (see https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md and https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md).
- The exports remain available through `@metamask/design-system-react` (and the platform-specific bundles), so your import path stays the same; only the underlying type shape shifted to a const-object/union pattern so you gain string-literal widening while keeping the previously exported names.

## From version 0.10.0 to 0.11.0

### ButtonIcon Variant Prop

Version 0.11.0 replaces `ButtonIcon`'s boolean props `isInverse` and `isFloating` with a single `variant` prop ([#948](https://github.com/MetaMask/metamask-design-system/pull/948)).

#### Breaking Changes

The `ButtonIcon` component now uses a `variant` prop instead of `isInverse` and `isFloating` boolean props.

#### Migration Steps

**Before (0.10.0):**

```tsx
import { ButtonIcon } from '@metamask/design-system-react';
import { IconName } from '@metamask/design-system-react';

// Default button icon (transparent background)
<ButtonIcon name={IconName.Add} />

// Floating button icon
<ButtonIcon name={IconName.Add} isFloating />

// Inverse button icon (no longer supported)
<ButtonIcon name={IconName.Add} isInverse />
```

**After (0.11.0):**

```tsx
import { ButtonIcon, ButtonIconVariant, IconName } from '@metamask/design-system-react';

// Default button icon (transparent background)
<ButtonIcon name={IconName.Add} variant={ButtonIconVariant.Default} />
// or omit variant prop as Default is the default value
<ButtonIcon name={IconName.Add} />

// Floating button icon (rounded, colored background with inverse icon)
<ButtonIcon name={IconName.Add} variant={ButtonIconVariant.Floating} />

// Filled button icon (new - muted background with rounded corners)
<ButtonIcon name={IconName.Add} variant={ButtonIconVariant.Filled} />
```

#### New Variants

- `ButtonIconVariant.Default` - Transparent background with default icon color and hover/active states (default)
- `ButtonIconVariant.Filled` - Muted background (`bg-muted`) with rounded corners and hover/pressed states (new)
- `ButtonIconVariant.Floating` - Colored background with inverse icon color (replaces `isFloating`)

#### Removed Props

- `isInverse` - No longer supported
- `isFloating` - Replaced by `variant={ButtonIconVariant.Floating}`

## From version 0.1.0 to 0.2.0

### Added Text Component Variants

Version 0.2.0 added five new Text component variants with responsive typography support ([#777](https://github.com/MetaMask/metamask-design-system/pull/777)):

#### New Variants

- `TextVariant.PageHeading` - For main page titles (renders as `<h1>` by default)
- `TextVariant.SectionHeading` - For section titles (renders as `<h2>` by default)
- `TextVariant.ButtonLabelMd` - For medium-sized button labels (renders as `<span>` by default)
- `TextVariant.ButtonLabelLg` - For large-sized button labels (renders as `<span>` by default)
- `TextVariant.AmountDisplayLg` - For large amount/value displays (renders as `<span>` by default)

#### Migration Steps

These are **non-breaking additions**. No migration is required, but you can update your components to use the new variants where appropriate:

**Before (0.1.0):**

```tsx
// Using generic heading variants
<Text variant={TextVariant.HeadingLg}>Page Title</Text>
<Text variant={TextVariant.HeadingMd}>Section Title</Text>
```

**After (0.2.0 - Optional):**

```tsx
// Using semantic page/section variants
<Text variant={TextVariant.PageHeading}>Page Title</Text>
<Text variant={TextVariant.SectionHeading}>Section Title</Text>
```

#### Responsive Typography

All new variants include responsive sizing:

| Variant                       | Small Screen | Large Screen (md: breakpoint) |
| ----------------------------- | ------------ | ----------------------------- |
| `TextVariant.PageHeading`     | 24px         | 32px                          |
| `TextVariant.SectionHeading`  | 20px         | 24px                          |
| `TextVariant.ButtonLabelMd`   | 16px         | 16px                          |
| `TextVariant.ButtonLabelLg`   | 20px         | 20px                          |
| `TextVariant.AmountDisplayLg` | 40px         | 60px                          |
