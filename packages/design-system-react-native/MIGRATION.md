# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-react-native` to another, and for migrating components from MetaMask Mobile `component-library` to the design system.

## Table of Contents

- [From Mobile Component Library](#from-mobile-component-library)
  - [Button Component](#button-component)
  - [Box Component](#box-component)
  - [BannerAlert Component](#banneralert-component)
  - [Text Component](#text-component)
  - [Icon Component](#icon-component)
- [Version Updates](#version-updates)
  - [From version 0.12.0 to 0.13.0](#from-version-0120-to-0130)
  - [From version 0.11.0 to 0.12.0](#from-version-0110-to-0120)
  - [From version 0.10.0 to 0.11.0](#from-version-0100-to-0110)
  - [From version 0.1.0 to 0.2.0](#from-version-010-to-020)

## From Mobile Component Library

This section covers migrating components from MetaMask Mobile's `app/component-library` to `@metamask/design-system-react-native`.

### Button Component

The Button component has significant breaking changes when migrating from the mobile component-library. The new design system `Button` replaces both the old generic `Button` (for Primary and Secondary variants) and introduces a separate `TextButton` component for the old Link variant.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                       | Design System Migration                                                |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| `import Button from '.../component-library/components/Buttons/Button'`               | `import { Button } from '@metamask/design-system-react-native'`        |
| `import { ButtonVariants } from '.../component-library/components/Buttons/Button'`   | `import { ButtonVariant } from '@metamask/design-system-react-native'` |
| `import { ButtonSize } from '.../component-library/components/Buttons/Button'`       | `import { ButtonSize } from '@metamask/design-system-react-native'`    |
| `import { ButtonWidthTypes } from '.../component-library/components/Buttons/Button'` | Use `isFullWidth` prop instead (no import needed)                      |

##### Variant Enum

The enum name changes from `ButtonVariants` (plural) to `ButtonVariant` (singular), and values change from PascalCase to lowercase. The `Link` variant is removed — use `TextButton` instead.

| Mobile Value                               | Design System Value                       | Notes              |
| ------------------------------------------ | ----------------------------------------- | ------------------ |
| `ButtonVariants.Primary` (`'Primary'`)     | `ButtonVariant.Primary` (`'primary'`)     | casing changed     |
| `ButtonVariants.Secondary` (`'Secondary'`) | `ButtonVariant.Secondary` (`'secondary'`) | casing changed     |
| `ButtonVariants.Link` (`'Link'`)           | Use `TextButton` component                | separate component |

##### Size Enum

`ButtonSize` values change from pixel strings to lowercase identifiers. The `Auto` size is removed.

| Mobile Value                 | Design System Value      | Notes            |
| ---------------------------- | ------------------------ | ---------------- |
| `ButtonSize.Sm` (`'32'`)     | `ButtonSize.Sm` (`'sm'`) | value changed    |
| `ButtonSize.Md` (`'40'`)     | `ButtonSize.Md` (`'md'`) | value changed    |
| `ButtonSize.Lg` (`'48'`)     | `ButtonSize.Lg` (`'lg'`) | value changed    |
| `ButtonSize.Auto` (`'auto'`) | Removed                  | use default size |

##### Content Model: `label` → `children`

The old Button used a `label` prop (accepting `string | React.ReactNode`). The new Button uses `children`.

| Mobile Pattern                           | Design System Migration                |
| ---------------------------------------- | -------------------------------------- |
| `<Button label="Submit" />`              | `<Button>Submit</Button>`              |
| `<Button label={<Text>Custom</Text>} />` | `<Button><Text>Custom</Text></Button>` |
| `<Button label={variable} />`            | `<Button>{variable}</Button>`          |

##### Width: `width` → `isFullWidth`

The `ButtonWidthTypes` enum is removed. Full-width is now a boolean prop.

| Mobile Pattern                  | Design System Migration  |
| ------------------------------- | ------------------------ |
| `width={ButtonWidthTypes.Full}` | `isFullWidth`            |
| `width={ButtonWidthTypes.Auto}` | Remove (auto is default) |

##### State Props Renamed

| Mobile Prop  | Design System Prop | Notes     |
| ------------ | ------------------ | --------- |
| `disabled`   | `isDisabled`       | renamed   |
| `loading`    | `isLoading`        | renamed   |
| `isDisabled` | `isDisabled`       | unchanged |

##### Removed Props

| Mobile Prop        | Design System Migration                           |
| ------------------ | ------------------------------------------------- |
| `labelTextVariant` | Removed — the button handles its own text variant |

##### Link Variant → TextButton

The `ButtonVariants.Link` variant does not exist in the new `Button`. Use the `TextButton` component instead.

| Mobile Pattern                                                             | Design System Migration                                                             |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `import { ButtonVariants } from '.../Button'`                              | `import { TextButton, TextButtonSize } from '@metamask/design-system-react-native'` |
| `<Button variant={ButtonVariants.Link} label="Learn more" onPress={fn} />` | `<TextButton onPress={fn}>Learn more</TextButton>`                                  |
| `size={ButtonSize.Lg}` on Link                                             | `size={TextButtonSize.BodyLg}`                                                      |
| `size={ButtonSize.Sm}` on Link                                             | `size={TextButtonSize.BodySm}`                                                      |
| `size={ButtonSize.Auto}` on Link                                           | Omit (default)                                                                      |

#### Migration Examples

##### Primary Button

Before (Mobile):

```tsx
import Button, {
  ButtonSize,
  ButtonVariants,
  ButtonWidthTypes,
} from '../../../component-library/components/Buttons/Button';

<Button
  variant={ButtonVariants.Primary}
  size={ButtonSize.Lg}
  width={ButtonWidthTypes.Full}
  label={strings('button.continue')}
  onPress={handleContinue}
  loading={isLoading}
  disabled={isSubmitting}
/>;
```

After (Design System):

```tsx
import {
  Button,
  ButtonVariant,
  ButtonSize,
} from '@metamask/design-system-react-native';

<Button
  variant={ButtonVariant.Primary}
  size={ButtonSize.Lg}
  isFullWidth
  onPress={handleContinue}
  isLoading={isLoading}
  isDisabled={isSubmitting}
>
  {strings('button.continue')}
</Button>;
```

##### Secondary Button

Before (Mobile):

```tsx
<Button
  variant={ButtonVariants.Secondary}
  size={ButtonSize.Lg}
  width={ButtonWidthTypes.Full}
  label={strings('button.cancel')}
  onPress={handleCancel}
/>
```

After (Design System):

```tsx
<Button
  variant={ButtonVariant.Secondary}
  size={ButtonSize.Lg}
  isFullWidth
  onPress={handleCancel}
>
  {strings('button.cancel')}
</Button>
```

##### Link Button → TextButton

Before (Mobile):

```tsx
import Button, {
  ButtonVariants,
  ButtonSize,
} from '../../../component-library/components/Buttons/Button';

<Button
  variant={ButtonVariants.Link}
  size={ButtonSize.Lg}
  label={strings('button.learn_more')}
  onPress={handleLearnMore}
/>;
```

After (Design System):

```tsx
import {
  TextButton,
  TextButtonSize,
} from '@metamask/design-system-react-native';

<TextButton size={TextButtonSize.BodyLg} onPress={handleLearnMore}>
  {strings('button.learn_more')}
</TextButton>;
```

##### Danger Button

Before (Mobile):

```tsx
<Button
  variant={ButtonVariants.Primary}
  label={strings('button.delete')}
  onPress={handleDelete}
  isDanger
/>
```

After (Design System):

```tsx
<Button variant={ButtonVariant.Primary} onPress={handleDelete} isDanger>
  {strings('button.delete')}
</Button>
```

#### Blocked Patterns

Some files pass `ButtonVariants` to wrapper components that internally render the old Button. These **cannot** be migrated until the wrapper components are updated:

- `BottomSheetFooter.buttonPropsArray` — passes button config objects including `variant: ButtonVariants.Primary`
- `Banner.actionButtonProps` — passes button config with `ButtonVariants.Link`

Migrate only direct `<Button` JSX usages. Keep old imports for blocked patterns.

#### API Differences

The design system Button adds these props not available in the old mobile Button:

- `isDanger` — show destructive styling (Primary variant only)
- `isInverse` — inverted colors for colored backgrounds (Primary variant only)
- `startIconName` / `endIconName` — icon names for leading/trailing icons
- `loadingText` — custom text during loading state
- `twClassName` — Tailwind utility class overrides

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

### BannerAlert Component

Mobile `BannerAlert` maps directly to `BannerAlert` in the design system, with severity values standardized to MMDS shared types.

#### Breaking Changes

##### Imports and Type Source

| Mobile Pattern                                 | Design System Migration                                           |
| ---------------------------------------------- | ----------------------------------------------------------------- |
| `BannerAlertSeverity` from `BannerAlert.types` | `BannerAlertSeverity` from `@metamask/design-system-react-native` |

##### Severity Values

| Mobile Value                                | Design System Value                         | Notes          |
| ------------------------------------------- | ------------------------------------------- | -------------- |
| `BannerAlertSeverity.Info` (`'Info'`)       | `BannerAlertSeverity.Info` (`'info'`)       | casing changed |
| `BannerAlertSeverity.Success` (`'Success'`) | `BannerAlertSeverity.Success` (`'success'`) | casing changed |
| `BannerAlertSeverity.Warning` (`'Warning'`) | `BannerAlertSeverity.Warning` (`'warning'`) | casing changed |
| `BannerAlertSeverity.Error` (`'Error'`)     | `BannerAlertSeverity.Danger` (`'danger'`)   | renamed        |

#### Migration Example

##### Before (Mobile)

```tsx
import BannerAlert from '../../../component-library/components/Banners/Banner/variants/BannerAlert';
import { BannerAlertSeverity } from '../../../component-library/components/Banners/Banner/variants/BannerAlert/BannerAlert.types';

<BannerAlert
  severity={BannerAlertSeverity.Warning}
  title="Warning"
  actionButtonLabel="Action"
  actionButtonOnPress={() => undefined}
/>;
```

##### After (Design System)

```tsx
import {
  BannerAlert,
  BannerAlertSeverity,
} from '@metamask/design-system-react-native';

<BannerAlert
  severity={BannerAlertSeverity.Warning}
  title="Warning"
  actionButtonLabel="Action"
  actionButtonOnPress={() => undefined}
/>;
```

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

| Mobile                         | Design System                  |
| ------------------------------ | ------------------------------ |
| `TextColor.Default`            | `TextColor.TextDefault`        |
| `TextColor.Alternative`        | `TextColor.TextAlternative`    |
| `TextColor.Muted`              | `TextColor.TextMuted`          |
| `TextColor.Primary`            | `TextColor.PrimaryDefault`     |
| `TextColor.PrimaryAlternative` | `TextColor.PrimaryAlternative` |
| `TextColor.Success`            | `TextColor.SuccessDefault`     |
| `TextColor.Error`              | `TextColor.ErrorDefault`       |
| `TextColor.ErrorAlternative`   | `TextColor.ErrorAlternative`   |
| `TextColor.Warning`            | `TextColor.WarningDefault`     |
| `TextColor.Info`               | `TextColor.InfoDefault`        |
| `TextColor.Inverse`            | `TextColor.OverlayInverse`     |

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

#### API Differences

The mobile and design-system Text components both extend `react-native` `TextProps`. In addition to matching the base React Native props, the design system Text component adds:

- `fontWeight` - separate weight control instead of weight-specific variants
- `fontFamily` - select default/accent/hero fonts
- `fontStyle` - normal or italic text style
- `twClassName` - Tailwind utility classes merged with component defaults

### Icon Component

The Icon component has some API and enum changes when migrating from the mobile component-library.

#### Breaking Changes

##### Size Enum Changes

`IconSize` no longer supports `Xss` or `XXL`.

| Mobile Size    | Design System Migration |
| -------------- | ----------------------- |
| `IconSize.Xss` | Use `IconSize.Xs`       |
| `IconSize.Xs`  | `IconSize.Xs`           |
| `IconSize.Sm`  | `IconSize.Sm`           |
| `IconSize.Md`  | `IconSize.Md`           |
| `IconSize.Lg`  | `IconSize.Lg`           |
| `IconSize.Xl`  | `IconSize.Xl`           |
| `IconSize.XXL` | Use `IconSize.Xl`       |

##### Color Prop Changes

Mobile accepts `string | IconColor` for `color`, while the design system uses the `IconColor` enum.

| Mobile Color                   | Design System                  |
| ------------------------------ | ------------------------------ |
| `IconColor.Default`            | `IconColor.IconDefault`        |
| `IconColor.Alternative`        | `IconColor.IconAlternative`    |
| `IconColor.Muted`              | `IconColor.IconMuted`          |
| `IconColor.Primary`            | `IconColor.PrimaryDefault`     |
| `IconColor.PrimaryAlternative` | `IconColor.PrimaryAlternative` |
| `IconColor.Success`            | `IconColor.SuccessDefault`     |
| `IconColor.Error`              | `IconColor.ErrorDefault`       |
| `IconColor.ErrorAlternative`   | `IconColor.ErrorAlternative`   |
| `IconColor.Warning`            | `IconColor.WarningDefault`     |
| `IconColor.Info`               | `IconColor.InfoDefault`        |
| `IconColor.Inverse`            | `IconColor.OverlayInverse`     |

#### Migration Examples

##### Before (Mobile)

```tsx
import { Icon, IconName, IconSize, IconColor } from '../../../component-library/components/Icons/Icon';

<Icon name={IconName.CheckBold} size={IconSize.XXL} color={IconColor.Default} />
<Icon name={IconName.Warning} color="#f6851b" />
```

##### After (Design System)

```tsx
import { Icon, IconName, IconSize, IconColor } from '@metamask/design-system-react-native';

<Icon name={IconName.CheckBold} size={IconSize.Xl} color={IconColor.IconDefault} />
<Icon name={IconName.Warning} color={IconColor.WarningDefault} />
```

#### API Differences

- `name` remains required and uses `IconName` in both implementations
- `hitSlop` remains available via inherited `ViewProps`
- `twClassName` is available for Tailwind utility overrides in the design system

## Version Updates

This section covers version-to-version breaking changes within `@metamask/design-system-react-native`.

## From version 0.12.0 to 0.13.0

### Typography: semantic bold is now semibold (600)

- `FontWeight.Bold` and the `Text` component now describe bold as weight 600; the Storybook RN `FontLoader` loads the new `Geist-SemiBold` assets, and `@metamask/design-system-twrnc-preset` maps `default-bold` and `default-bold-italic` to those semibold PostScript names instead of the retired bold files.
- Update any custom `fontWeight` constants, native font registrations, or text styles that previously assumed 700 so they match the new semibold definition (the `FontWeight.Bold` member still exists but now documents 600).
- This change is synchronized with `@metamask/design-tokens@8.3.0`, so follow the [design-tokens migration guide](../design-tokens/MIGRATION.md#from-version-822-to-830) for the token-level steps and to grab the new font files if you bundle them yourself.

### BadgeWrapper types now live in the shared package

- `BadgeWrapperPosition`, `BadgeWrapperPositionAnchorShape`, `BadgeWrapperCustomPosition`, and `BadgeWrapperPropsShared` now originate in `@metamask/design-system-shared` and are re-exported by both React and React Native entry points.
- Update any direct type imports to use `@metamask/design-system-shared` (the platform index still re-exports them for compatibility, but the shared package is the canonical source post-ADR-0004).

## From version 0.11.0 to 0.12.0

### TextButton API

Version 0.12.0 simplifies `TextButton` to a text-only control for links placed inline with text. Typography and interaction align with the [`Text`](./src/components/Text/README.md) component API. If you need start or end icons, prefer [`Button`](./src/components/Button/README.md) with `variant={ButtonVariant.Tertiary}`.

#### Breaking Changes

- Removed `size` and `TextButtonSize` — use `variant` with `TextVariant` (default `TextVariant.BodyMd`).
- Removed `isDisabled`, `isInverse`, `startIconName`, `startIconProps`, `startAccessory`, `endIconName`, `endIconProps`, `endAccessory`, and `textProps`.
- `TextButtonSize` is no longer exported from this package; use `TextVariant` instead.
- Interaction is through `Text` press props (for example `onPress`); you no longer spread `Pressable` props on `TextButton`.

#### Migration Steps

**Before (0.11.0):**

```tsx
import {
  TextButton,
  TextButtonSize,
  IconName,
} from '@metamask/design-system-react-native';

<TextButton
  size={TextButtonSize.BodySm}
  startIconName={IconName.Add}
  isDisabled={false}
  onPress={() => {}}
>
  Link text
</TextButton>;
```

**After (0.12.0):**

```tsx
import { TextButton, TextVariant } from '@metamask/design-system-react-native';

<TextButton variant={TextVariant.BodySm} onPress={() => {}}>
  Link text
</TextButton>;
```

`TextButton` is intended for inline links without icons. If you relied on start or end icons or accessories, migrate to [`Button`](./src/components/Button/README.md) with `variant={ButtonVariant.Tertiary}`, which supports those props. For disabled or inverse patterns previously handled by `isDisabled` or `isInverse`, use conditional styling, [`Text`](./src/components/Text/README.md) when you need full control over color and press behavior, or `Button` tertiary when that component’s props match your needs.

### TextField

`TextField` no longer exposes multiple row heights, and `Input` applies `textVariant` sizing without Tailwind `text-*` line heights so single-line text aligns consistently (especially on iOS).

#### Breaking Changes

##### `TextFieldSize` and `size` prop

The `TextField` row is fixed at **48px** (`h-12`) with a single-line inner `Input`. The `size` prop and `TextFieldSize` enum are removed.

| Previous (0.11.0)                         | Current (0.12.0+)                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `size={TextFieldSize.Sm}` (32px)          | Remove `size`; use `twClassName` / `style` on the field if you need extra outer vertical spacing |
| `size={TextFieldSize.Md}` (40px, default) | Remove `size`; default row is 48px                                                               |
| `size={TextFieldSize.Lg}` (48px)          | Remove `size`; 48px is now the only built-in height                                              |
| `import { TextFieldSize } from '…'`       | Drop the import; `TextFieldSize` is no longer exported                                           |

##### Package exports

| Previous (0.11.0)                       | Current (0.12.0+)             |
| --------------------------------------- | ----------------------------- |
| `export { TextField, TextFieldSize } …` | `export { TextField } …` only |

#### Migration Examples

##### Before (0.11.0)

```tsx
import { TextField, TextFieldSize } from '@metamask/design-system-react-native';

<TextField
  value={email}
  onChangeText={setEmail}
  placeholder="Email"
  size={TextFieldSize.Sm}
/>

<TextField
  value={name}
  onChangeText={setName}
  placeholder="Name"
  size={TextFieldSize.Md}
/>
```

##### After (0.12.0)

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField
  value={email}
  onChangeText={setEmail}
  placeholder="Email"
/>

<TextField
  value={name}
  onChangeText={setName}
  placeholder="Name"
/>
```

#### Styling and layout notes

These are not separate props, but visuals changed compared to 0.11.0:

- TextField container uses **`bg-muted`** and **state-based borders** (muted at rest and when disabled; default border when focused; error colors when `isError`, including primary border when focused and error).
- Start/end accessories are spaced from the input with **`gap-3`** on the row container (put `testID` on the accessory or your own wrapper for E2E).
- Inner `Input` is forced **single-line** (`multiline={false}`).

## From version 0.10.0 to 0.11.0

### ButtonIcon Variant Prop

Version 0.11.0 replaces `ButtonIcon`'s boolean props `isInverse` and `isFloating` with a single `variant` prop ([#948](https://github.com/MetaMask/metamask-design-system/pull/948)).

#### Breaking Changes

The `ButtonIcon` component now uses a `variant` prop instead of `isInverse` and `isFloating` boolean props.

#### Migration Steps

**Before (0.10.0):**

```tsx
import { ButtonIcon, IconName } from '@metamask/design-system-react-native';

// Default button icon (transparent background)
<ButtonIcon name={IconName.Add} />

// Floating button icon
<ButtonIcon name={IconName.Add} isFloating />

// Inverse button icon (no longer supported)
<ButtonIcon name={IconName.Add} isInverse />
```

**After (0.11.0):**

```tsx
import { ButtonIcon, ButtonIconVariant, IconName } from '@metamask/design-system-react-native';

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

- `ButtonIconVariant.Default` - Transparent background with default icon color and pressed state (default)
- `ButtonIconVariant.Filled` - Muted background (`bg-muted`) with rounded corners and pressed state (new)
- `ButtonIconVariant.Floating` - Colored background with inverse icon color (replaces `isFloating`)

#### Removed Props

- `isInverse` - No longer supported
- `isFloating` - Replaced by `variant={ButtonIconVariant.Floating}`

### Input Controlled-Only Requirement

Version 0.11.0 makes the `Input` component controlled-only by requiring the `value` prop and removing `defaultValue` support ([#960](https://github.com/MetaMask/metamask-design-system/pull/960)).

#### Breaking Changes

The `Input` component now requires a `value` prop and no longer supports uncontrolled usage via `defaultValue`.

#### Migration Steps

**Before (0.10.0):**

```tsx
import { Input } from '@metamask/design-system-react-native';

// Uncontrolled input with defaultValue (no longer supported)
<Input
  placeholder="Enter text"
  defaultValue="Initial value"
  onChange={(text) => console.log(text)}
/>;

// Controlled input (still works, but value is now required)
const [text, setText] = useState('');
<Input placeholder="Enter text" value={text} onChange={setText} />;
```

**After (0.11.0):**

```tsx
import { Input } from '@metamask/design-system-react-native';
import { useState } from 'react';

// All inputs must now be controlled with value prop
const [text, setText] = useState('Initial value');
<Input placeholder="Enter text" value={text} onChange={setText} />;

// Empty initial value
const [text, setText] = useState('');
<Input placeholder="Enter text" value={text} onChange={setText} />;
```

#### Why This Change?

This change provides:

- **Consistent behavior**: All `Input` instances now behave predictably as controlled components
- **Better state management**: Forces explicit state management, reducing bugs from mixed controlled/uncontrolled usage
- **iOS placeholder fix**: Enables proper iOS-specific placeholder alignment without affecting typed text rendering

#### TextField Component

This change also affects the `TextField` component, which wraps `Input`. All `TextField` usage must now provide `value` and manage state:

```tsx
import { TextField } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [email, setEmail] = useState('');

<TextField
  label="Email"
  placeholder="Enter email"
  value={email}
  onChange={setEmail}
/>;
```

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
| `TextVariant.PageHeading`     | 24px      | Main page titles            |
| `TextVariant.SectionHeading`  | 20px      | Section titles              |
| `TextVariant.ButtonLabelMd`   | 16px      | Medium button labels        |
| `TextVariant.ButtonLabelLg`   | 20px      | Large button labels         |
| `TextVariant.AmountDisplayLg` | 40px      | Large amount/value displays |
