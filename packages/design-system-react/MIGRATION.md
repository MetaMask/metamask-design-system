# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-react` to another, and for migrating components from MetaMask Extension `component-library` to the design system.

## Table of Contents

- [From Extension Component Library](#from-extension-component-library)
  - [Box Component](#box-component)
  - [Text Component](#text-component)
- [Version Updates](#version-updates)
  - [From version 0.1.0 to 0.2.0](#from-version-010-to-020)

## From Extension Component Library

This section covers migrating components from MetaMask Extension's `ui/components/component-library` to `@metamask/design-system-react`.

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

### Text Component

The Text component has significant breaking changes when migrating from the extension component-library.

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

| Extension               | Design System           |
| ----------------------- | ----------------------- |
| `TextVariant.bodyMd`    | `TextVariant.BodyMd`    |
| `TextVariant.bodySm`    | `TextVariant.BodySm`    |
| `TextVariant.bodyXs`    | `TextVariant.BodyXs`    |
| `TextVariant.bodyLg`    | `TextVariant.BodyLg`    |
| `TextVariant.headingSm` | `TextVariant.HeadingSm` |
| `TextVariant.headingMd` | `TextVariant.HeadingMd` |
| `TextVariant.headingLg` | `TextVariant.HeadingLg` |
| `TextVariant.displayMd` | `TextVariant.DisplayMd` |
| `TextVariant.displayLg` | `TextVariant.DisplayLg` |

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
import { Text, TextVariant } from '../../component-library';

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

#### New Features

The design system Text component adds several new props not available in the extension:

- `fontFamily` - Control font family (Default, Accent, Hero)
- `textTransform` - Text transformation (Uppercase, Lowercase, Capitalize)
- `textAlign` - Text alignment (Left, Center, Right, Justify)
- `overflowWrap` - Control text wrapping behavior
- `ellipsis` - Add ellipsis for overflowing text
- `asChild` - Compose with other components while maintaining Text styles

## Version Updates

This section covers version-to-version breaking changes within `@metamask/design-system-react`.

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
