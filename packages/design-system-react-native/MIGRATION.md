# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-react-native` to another, and for migrating components from MetaMask Mobile `component-library` to the design system.

## Table of Contents

- [From Mobile Component Library](#from-mobile-component-library)
  - [Box Component](#box-component)
  - [Text Component](#text-component)
- [Version Updates](#version-updates)
  - [From version 0.1.0 to 0.2.0](#from-version-010-to-020)

## From Mobile Component Library

This section covers migrating components from MetaMask Mobile's `app/component-library` to `@metamask/design-system-react-native`.

### Box Component

The Box component has breaking changes when migrating from the mobile component-library. For custom spacing patterns or values outside the BoxSpacing range, use Tailwind classes via `twClassName`.

#### Breaking Changes

##### Spacing Values

The design system Box uses `BoxSpacing` values (0-12 for 0px-48px). For custom spacing values outside this range or responsive spacing patterns, use Tailwind classes via `twClassName`.

| Mobile Pattern                   | Design System Migration                   |
| -------------------------------- | ----------------------------------------- |
| Custom margin/padding values     | Use `twClassName` with Tailwind utilities |
| Responsive spacing               | Use `twClassName="m-2 md:m-4"`            |
| Auto margins                     | Use `twClassName="m-auto"`                |
| Custom margin/padding with style | Use `twClassName` instead of `style` prop |

##### Margin Inline Props

If the mobile Box had `marginInline`, `marginInlineStart`, or `marginInlineEnd` props, the design system Box uses `marginHorizontal` or Tailwind classes instead.

| Mobile Pattern          | Design System Migration                        |
| ----------------------- | ---------------------------------------------- |
| `marginInline={4}`      | `marginHorizontal={4}` or `twClassName="mx-4"` |
| `marginInlineStart={2}` | `twClassName="ms-2"`                           |
| `marginInlineEnd={2}`   | `twClassName="me-2"`                           |

##### Padding Inline Props

If the mobile Box had `paddingInline`, `paddingInlineStart`, or `paddingInlineEnd` props, the design system Box uses `paddingHorizontal` or Tailwind classes instead.

| Mobile Pattern           | Design System Migration                         |
| ------------------------ | ----------------------------------------------- |
| `paddingInline={4}`      | `paddingHorizontal={4}` or `twClassName="px-4"` |
| `paddingInlineStart={2}` | `twClassName="ps-2"`                            |
| `paddingInlineEnd={2}`   | `twClassName="pe-2"`                            |

#### Migration Examples

##### Before (Mobile)

```tsx
import { Box } from '../../../component-library/components/Box';

// Custom spacing with style prop
<Box style={{ margin: 20, padding: 20 }}>
  Custom spacing
</Box>

// Inline props (if they existed)
<Box marginInline={4} paddingInlineStart={2}>
  Inline spacing
</Box>
```

##### After (Design System)

```tsx
import { Box } from '@metamask/design-system-react-native';

// Custom spacing - use twClassName for values outside BoxSpacing range
<Box twClassName="m-5 p-5">
  Custom spacing
</Box>

// Inline props - use marginHorizontal or twClassName
<Box marginHorizontal={4} twClassName="ps-2">
  Inline spacing
</Box>
```

#### Spacing Props Available

The design system Box provides these margin/padding props:

- ✅ `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`
- ✅ `marginHorizontal`
- ✅ `marginVertical`
- ✅ `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`
- ✅ `paddingHorizontal`
- ✅ `paddingVertical`

For spacing values 0-12 (0px-48px), use these props. For custom values, responsive spacing, or inline-start/end positioning, use `twClassName` with Tailwind utilities.

### Text Component

The Text component has significant breaking changes when migrating from the mobile component-library.

#### Breaking Changes

##### Font Weight Separation

The most significant change is that font weight is now a **separate prop** instead of being part of the variant name.

| Mobile Variant             | Design System Migration                                       |
| -------------------------- | ------------------------------------------------------------- |
| `TextVariant.BodyMD`       | `variant={TextVariant.BodyMd}`                                |
| `TextVariant.BodyMDMedium` | `variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}` |
| `TextVariant.BodyMDBold`   | `variant={TextVariant.BodyMd} fontWeight={FontWeight.Bold}`   |
| `TextVariant.BodySM`       | `variant={TextVariant.BodySm}`                                |
| `TextVariant.BodySMMedium` | `variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}` |
| `TextVariant.BodySMBold`   | `variant={TextVariant.BodySm} fontWeight={FontWeight.Bold}`   |
| `TextVariant.BodyXS`       | `variant={TextVariant.BodyXs}`                                |
| `TextVariant.BodyXSMedium` | `variant={TextVariant.BodyXs} fontWeight={FontWeight.Medium}` |
| `TextVariant.BodyLGMedium` | `variant={TextVariant.BodyLg} fontWeight={FontWeight.Medium}` |
| `TextVariant.HeadingSM`    | `variant={TextVariant.HeadingSm}`                             |
| `TextVariant.HeadingMD`    | `variant={TextVariant.HeadingMd}`                             |
| `TextVariant.HeadingLG`    | `variant={TextVariant.HeadingLg}`                             |
| `TextVariant.DisplayMD`    | `variant={TextVariant.DisplayMd}`                             |
| `TextVariant.DisplayLG`    | `variant={TextVariant.DisplayLg}`                             |

##### Variant Name Casing

Variant names now use consistent mixed case (e.g., `BodyMd` instead of `BodyMD`):

| Mobile                  | Design System           |
| ----------------------- | ----------------------- |
| `TextVariant.BodyMD`    | `TextVariant.BodyMd`    |
| `TextVariant.BodySM`    | `TextVariant.BodySm`    |
| `TextVariant.BodyXS`    | `TextVariant.BodyXs`    |
| `TextVariant.BodyLG`    | `TextVariant.BodyLg`    |
| `TextVariant.HeadingSM` | `TextVariant.HeadingSm` |
| `TextVariant.HeadingMD` | `TextVariant.HeadingMd` |
| `TextVariant.HeadingLG` | `TextVariant.HeadingLg` |
| `TextVariant.DisplayMD` | `TextVariant.DisplayMd` |
| `TextVariant.DisplayLG` | `TextVariant.DisplayLg` |

##### Color Prop Changes

Color enum values are now prefixed with their semantic category:

| Mobile                         | Design System                |
| ------------------------------ | ---------------------------- |
| `TextColor.Default`            | `TextColor.TextDefault`      |
| `TextColor.Alternative`        | `TextColor.TextAlternative`  |
| `TextColor.Muted`              | `TextColor.TextMuted`        |
| `TextColor.Primary`            | `TextColor.PrimaryDefault`   |
| `TextColor.PrimaryAlternative` | `TextColor.PrimaryDefault`   |
| `TextColor.Success`            | `TextColor.SuccessDefault`   |
| `TextColor.Error`              | `TextColor.ErrorDefault`     |
| `TextColor.ErrorAlternative`   | `TextColor.ErrorAlternative` |
| `TextColor.Warning`            | `TextColor.WarningDefault`   |
| `TextColor.Info`               | `TextColor.InfoDefault`      |
| `TextColor.Inverse`            | `TextColor.OverlayInverse`   |

#### Migration Examples

##### Before (Mobile)

```tsx
import { Text, TextVariant, TextColor } from '../../../component-library/components/Texts/Text';

// Regular body text
<Text variant={TextVariant.BodyMD}>Regular text</Text>

// Medium weight body text
<Text variant={TextVariant.BodyMDMedium}>Medium weight text</Text>

// Bold body text
<Text variant={TextVariant.BodyMDBold}>Bold text</Text>

// Small text with color
<Text variant={TextVariant.BodySM} color={TextColor.Muted}>
  Small muted text
</Text>
```

##### After (Design System)

```tsx
import { Text, TextVariant, FontWeight, TextColor } from '@metamask/design-system-react-native';

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

#### Removed Features

The following mobile-specific features are **not available** in the design system Text component:

- `textTransform` prop - Not yet implemented for React Native
- `textAlign` prop - Not yet implemented for React Native
- `overflowWrap` prop - Not yet implemented for React Native
- `ellipsis` prop - Not yet implemented for React Native

Use `twClassName` or `style` prop for these features if needed.

#### New Features

The design system Text component adds the `fontStyle` prop:

- `FontStyle.Normal` - Normal text style
- `FontStyle.Italic` - Italic text style

## Version Updates

This section covers version-to-version breaking changes within `@metamask/design-system-react-native`.

## From version 0.1.0 to 0.2.0

### Added Text Component Variants

Version 0.2.0 added five new Text component variants ([#777](https://github.com/MetaMask/metamask-design-system/pull/777)):

#### New Variants

- `TextVariant.PageHeading` - For main page titles with large, bold styling
- `TextVariant.SectionHeading` - For section titles with medium, bold styling
- `TextVariant.ButtonLabelMd` - For medium-sized button labels with optimized button text styling
- `TextVariant.ButtonLabelLg` - For large-sized button labels with optimized button text styling
- `TextVariant.AmountDisplayLg` - For large amount/value displays with prominent numeric styling

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

#### Typography Sizes

All new variants have specific font sizes optimized for their use case:

| Variant                       | Font Size | Use Case                    |
| ----------------------------- | --------- | --------------------------- |
| `TextVariant.PageHeading`     | 32px      | Main page titles            |
| `TextVariant.SectionHeading`  | 24px      | Section titles              |
| `TextVariant.ButtonLabelMd`   | 16px      | Medium button labels        |
| `TextVariant.ButtonLabelLg`   | 20px      | Large button labels         |
| `TextVariant.AmountDisplayLg` | 60px      | Large amount/value displays |
