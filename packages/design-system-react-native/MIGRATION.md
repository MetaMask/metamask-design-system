# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-react-native` to another, and for migrating components from MetaMask Mobile `component-library` to the design system.

## Table of Contents

- [From Mobile Component Library](#from-mobile-component-library)
  - [Button Component](#button-component)
  - [ButtonBase Component](#buttonbase-component)
  - [ButtonFilter Component](#buttonfilter-component)
  - [ButtonHero Component](#buttonhero-component)
  - [ButtonIcon Component](#buttonicon-component)
  - [TextButton Component (ButtonLink)](#textbutton-component-buttonlink)
  - [BottomSheet Component](#bottomsheet-component)
  - [BottomSheetHeader Component](#bottomsheetheader-component)
  - [BottomSheetFooter Component](#bottomsheetfooter-component)
  - [Box Component](#box-component)
  - [BannerAlert Component](#banneralert-component)
  - [BannerBase Component](#bannerbase-component)
  - [Text Component](#text-component)
  - [Icon Component](#icon-component)
  - [Checkbox Component](#checkbox-component)
  - [TextField Component](#textfield-component)
  - [ListItem Component](#listitem-component)
- [Version Updates](#version-updates)
  - [From version 0.18.0 to 0.19.0](#from-version-0180-to-0190)
  - [From version 0.16.0 to 0.17.0](#from-version-0160-to-0170)
  - [From version 0.15.0 to 0.16.0](#from-version-0150-to-0160)
  - [From version 0.13.0 to 0.14.0](#from-version-0130-to-0140)
  - [From version 0.12.0 to 0.13.0](#from-version-0120-to-0130)
  - [From version 0.11.0 to 0.12.0](#from-version-0110-to-0120)
  - [From version 0.10.0 to 0.11.0](#from-version-0100-to-0110)
  - [From version 0.1.0 to 0.2.0](#from-version-010-to-020)

## Version Updates

### From version 0.18.0 to 0.19.0

#### HeaderRoot: `titleAccessory` no longer renders without `title`

**What Changed:**

`titleAccessory` is now only rendered as part of the title row — it requires `title` to be truthy. Previously, `titleAccessory` could render standalone when `title` was empty or undefined. This was an unintentional side effect of the guard logic that has been corrected.

**Migration:**

If you were relying on `titleAccessory` rendering without a `title`, pass a `title` or use `children` to compose a fully custom left section:

```tsx
// Before (0.18.0) — titleAccessory rendered even without title
<HeaderRoot
  titleAccessory={<Icon name={IconName.Info} color={IconColor.IconAlternative} />}
/>

// After (0.19.0) — titleAccessory requires title to be present
<HeaderRoot
  title="Settings"
  titleAccessory={<Icon name={IconName.Info} color={IconColor.IconAlternative} />}
/>

// Alternative — use children for fully custom left section content
<HeaderRoot>
  <Icon name={IconName.Info} color={IconColor.IconAlternative} />
</HeaderRoot>
```

**Impact:**

- Affects `HeaderRoot` usages that passed `titleAccessory` without a `title`. The accessory will no longer render in those cases.
- `titleAccessory` passed alongside a valid `title` continues to work unchanged.

#### HeaderRoot: Left section wrapper `Box` removed

**What Changed:**

The intermediate `Box` wrapper around the `BoxRow` in the left section has been removed. The `BoxRow` (title + `titleAccessory`) is now rendered directly as a child of the outer container row. This is a structural change only — the visual output is identical.

**Impact:**

No changes to visual appearance or API.

#### Icon: prop types now align with SVG usage

**What Changed:**

- `IconProps` now extends `Omit<SvgProps, 'color' | 'name'>` instead of `ViewProps`.

**Migration:**

If TypeScript now flags props you were previously passing to `Icon`, those props were `View`-specific and are no longer part of the `Icon` public type. Move those props to a wrapper `View` and keep SVG-compatible props on `Icon`.

```tsx
// Before
<Icon name={IconName.Lock} onLayout={handleLayout} />

// After
<View onLayout={handleLayout}>
  <Icon name={IconName.Lock} />
</View>
```

---

### From version 0.16.0 to 0.17.0

#### Text: Typography const values moved to `@metamask/design-system-shared`

`FontWeight`, `FontStyle`, `FontFamily`, `TextVariant`, and `TextColor` are now defined in `@metamask/design-system-shared` and re-exported from `@metamask/design-system-react-native`. All existing import paths through `@metamask/design-system-react-native` continue to work without change.

#### `FontWeight` values changed

**No migration likely needed.** `FontWeight` was a TypeScript `enum` before this release, so the underlying string values were inaccessible via the type system. Idiomatic usage (`fontWeight={FontWeight.Bold}`) continues to work without change — the TWRNC classmap handles the mapping internally.

The values did change to semantic identifiers for cross-platform sharing:

| Key                  | Before (0.16.0) | After (0.17.0) |
| -------------------- | --------------- | -------------- |
| `FontWeight.Bold`    | `'600'`         | `'bold'`       |
| `FontWeight.Medium`  | `'500'`         | `'medium'`     |
| `FontWeight.Regular` | `'400'`         | `'regular'`    |

If you were comparing against the raw numeric string values directly, update to use the const member instead:

```tsx
// ❌ Rare: comparing against raw numeric string
if (fontWeight === '600') { ... }

// ✅ Use const member (works in both 0.16.0 and 0.17.0)
if (fontWeight === FontWeight.Bold) { ... }
```

#### `TextColor` additions

`TextColor` gains four hover-state keys that were previously web-only (`PrimaryDefaultHover`, `ErrorDefaultHover`, `SuccessDefaultHover`, `WarningDefaultHover`). These are non-breaking additions. Their JSDoc notes that hover does not exist as an interaction state on React Native — use the corresponding `*Pressed` variant instead.

---

### From version 0.13.0 to 0.14.0

#### BottomSheet navigation callback change

**What Changed:**

- `BottomSheet` removed the `shouldNavigateBack` prop.
- `BottomSheet` now accepts an optional `goBack` callback for explicit host-controlled navigation behavior.

**Migration:**

Before (0.13.0):

```tsx
<BottomSheet isVisible={isVisible} onClose={handleClose} shouldNavigateBack />
```

After (0.14.0):

```tsx
<BottomSheet
  isVisible={isVisible}
  onClose={handleClose}
  goBack={() => navigation.goBack()}
/>
```

If you do not want back navigation, omit `goBack`.

**Impact:**

- Affects BottomSheet usages that previously relied on `shouldNavigateBack`.
- Navigation behavior is now explicit and controlled by the host app callback.

### From version 0.15.0 to 0.16.0

#### BoxHorizontal and BoxVertical renamed to BoxRow and BoxColumn

**What Changed:**

- `BoxHorizontal` has been renamed to `BoxRow`
- `BoxVertical` has been renamed to `BoxColumn`

**Migration:**

```tsx
// Before (0.15.0)
import { BoxHorizontal, BoxVertical } from '@metamask/design-system-react-native';

<BoxHorizontal gap={2}>
  <Text>Left</Text>
  <Text>Right</Text>
</BoxHorizontal>

<BoxVertical gap={4}>
  <Text>Top</Text>
  <Text>Bottom</Text>
</BoxVertical>

// After (0.16.0)
import { BoxRow, BoxColumn } from '@metamask/design-system-react-native';

<BoxRow gap={2}>
  <Text>Left</Text>
  <Text>Right</Text>
</BoxRow>

<BoxColumn gap={4}>
  <Text>Top</Text>
  <Text>Bottom</Text>
</BoxColumn>
```

**Impact:**

- Any import of `BoxHorizontal` or `BoxVertical` must be renamed

#### KeyValueRow API

**What changed:**

- `KeyValueRow` no longer accepts `field` and `value` configuration objects. Use flat props: `keyLabel`, `value`, optional `variant`, start/end accessories, optional `keyTextProps` / `valueTextProps`, and optional `keyEndButtonIconProps` / `valueEndButtonIconProps`.
- Layout is handled inside the component (`BoxRow` / `Box`). The old stub API used to compose custom rows is removed.
- `KeyValueRowVariant` is defined in `@metamask/design-system-shared` (shared props follow ADR-0003 / ADR-0004); React Native–specific props remain on `KeyValueRowProps` in this package.

**Removed from the public API:**

- `KeyValueRowStubs` (and the underlying `Root` / `Section` / `Label` building blocks exported for custom rows)
- Constants: `KeyValueRowFieldIconSides`, `KeyValueRowSectionAlignments`, `TooltipSizes`, `IconSizes` (KeyValueRow-specific)
- Types: `KeyValueRowTooltip`, `KeyValueRowField`, `PreDefinedKeyValueRowLabel`, `KeyValueRowLabelProps`, `KeyValueRowRootProps`, `KeyValueSectionProps`

**Tooltip / info affordance:**

- The previous `tooltip` object (`title`, `content`, etc.) on `field` or `value` is not supported. Use `keyEndButtonIconProps` or `valueEndButtonIconProps` with `iconName` and `onPress`. The row only renders a `ButtonIcon`; **title and body content are not rendered by `KeyValueRow`**. Open a modal, bottom sheet, or your own tooltip from `onPress`.

**Migration (examples):**

Simple labels:

```tsx
// Before (0.15.0)
<KeyValueRow
  field={{ label: { text: 'Network' } }}
  value={{ label: { text: 'Ethereum Mainnet' } }}
/>

// After (0.16.0)
<KeyValueRow keyLabel="Network" value="Ethereum Mainnet" />
```

Typography via predefined label objects → `keyTextProps` / `valueTextProps`:

```tsx
import { KeyValueRow, KeyValueRowVariant } from '@metamask/design-system-react-native';
import { TextColor, TextVariant } from '@metamask/design-system-react-native';

// Before (0.15.0)
<KeyValueRow
  field={{
    label: {
      text: 'Fee',
      variant: TextVariant.BodySm,
      color: TextColor.TextAlternative,
    },
  }}
  value={{
    label: {
      text: '$2.59',
      variant: TextVariant.BodySm,
      color: TextColor.SuccessDefault,
    },
  }}
/>

// After (0.16.0)
<KeyValueRow
  keyLabel="Fee"
  value="$2.59"
  keyTextProps={{ variant: TextVariant.BodySm, color: TextColor.TextAlternative }}
  valueTextProps={{ variant: TextVariant.BodySm, color: TextColor.SuccessDefault }}
/>
```

Icons with `side` → accessories (use start and/or end nodes; “both sides” means passing both `*StartAccessory` and `*EndAccessory` when you need icons on each side):

```tsx
import { Icon, IconColor, IconName, IconSize } from '@metamask/design-system-react-native';

// Before (0.15.0) — icon on the left of the key label
<KeyValueRow
  field={{
    label: { text: 'Network' },
    icon: { name: IconName.Wifi, color: IconColor.PrimaryDefault, size: IconSize.Sm },
  }}
  value={{ label: { text: 'Mainnet' } }}
/>

// After (0.16.0)
<KeyValueRow
  keyLabel="Network"
  value="Mainnet"
  keyStartAccessory={<Icon name={IconName.Wifi} color={IconColor.PrimaryDefault} size={IconSize.Sm} />}
/>
```

Info icon that previously used `tooltip` → `keyEndButtonIconProps` and host-controlled UI:

```tsx
import { IconName } from '@metamask/design-system-react-native';

// Before (0.15.0)
<KeyValueRow
  field={{ label: { text: 'Limit' } }}
  value={{
    label: { text: 'Unlimited' },
    tooltip: {
      title: 'About limits',
      content: 'Explanation shown in a tooltip…',
      onPress: () => showTooltip(),
    },
  }}
/>

// After (0.16.0) — implement modal / sheet / tooltip in onPress
<KeyValueRow
  keyLabel="Limit"
  value="Unlimited"
  valueEndButtonIconProps={{
    iconName: IconName.Question,
    onPress: () => showTooltip(),
  }}
/>
```

Taller row for input-style screens:

```tsx
import {
  KeyValueRow,
  KeyValueRowVariant,
} from '@metamask/design-system-react-native';
import { Icon, IconName, IconSize } from '@metamask/design-system-react-native';

<KeyValueRow
  keyLabel="Pay with"
  value="Debit or credit"
  variant={KeyValueRowVariant.Input}
  valueStartAccessory={<Icon name={IconName.Card} size={IconSize.Sm} />}
  valueEndAccessory={<Icon name={IconName.ArrowDown} size={IconSize.Sm} />}
/>;
```

Custom React nodes for key or value remain supported:

```tsx
<KeyValueRow
  keyLabel="Account"
  value={<AvatarAccount address={address} size={AvatarAccountSize.Xs} />}
/>
```

**Instructions for downstream consumers:**

- In **MetaMask Mobile**, **MetaMask extension**, and any shared packages, search for `KeyValueRow` and migrate every usage away from `field` / `value` objects to the new props.
- Remove imports of deleted symbols (`KeyValueRowStubs`, `KeyValueRowFieldIconSides`, `KeyValueRowSectionAlignments`, `TooltipSizes`, `IconSizes`, and the removed types).
- If your app defines **KeyValueColumn** or another wrapper that forwards the old `KeyValueRow` props, update that component’s API and all call sites to match the new shape.

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

### ButtonBase Component

The `ButtonBase` component is a low-level building block for styled buttons. It has significant API changes from the mobile component-library version.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                                   | Design System Migration                                                       |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `import ButtonBase from '.../component-library/components/Buttons/Button/foundation/ButtonBase'` | `import { ButtonBase } from '@metamask/design-system-react-native'`           |
| `import { ButtonBaseProps } from '.../ButtonBase.types'`                                         | `import type { ButtonBaseProps } from '@metamask/design-system-react-native'` |
| `import { ButtonSize } from '.../Buttons/Button'`                                                | `import { ButtonBaseSize } from '@metamask/design-system-react-native'`       |

##### Content Model: `label` → `children`

The old `ButtonBase` used a `label` prop. The new one uses `children`.

| Mobile Pattern                            | Design System Migration                     |
| ----------------------------------------- | ------------------------------------------- |
| `<ButtonBase label="Submit" />`           | `<ButtonBase>Submit</ButtonBase>`           |
| `<ButtonBase label={<View>...</View>} />` | `<ButtonBase><View>...</View></ButtonBase>` |
| `<ButtonBase label={variable} />`         | `<ButtonBase>{variable}</ButtonBase>`       |

##### Size Enum

`ButtonSize` pixel-string values are replaced by `ButtonBaseSize` lowercase string identifiers.

| Mobile Value                 | Design System Value          | Notes            |
| ---------------------------- | ---------------------------- | ---------------- |
| `ButtonSize.Sm` (`'32'`)     | `ButtonBaseSize.Sm` (`'sm'`) | value changed    |
| `ButtonSize.Md` (`'40'`)     | `ButtonBaseSize.Md` (`'md'`) | value changed    |
| `ButtonSize.Lg` (`'48'`)     | `ButtonBaseSize.Lg` (`'lg'`) | value changed    |
| `ButtonSize.Auto` (`'auto'`) | Removed                      | use default size |

##### Width: `width` → `isFullWidth`

The `ButtonWidthTypes` enum is removed.

| Mobile Pattern                  | Design System Migration  |
| ------------------------------- | ------------------------ |
| `width={ButtonWidthTypes.Full}` | `isFullWidth`            |
| `width={ButtonWidthTypes.Auto}` | Remove (auto is default) |

##### Label Styling Props Removed

The old `ButtonBase` accepted `labelColor` and `labelTextVariant` to control the inner `Text`. The new API exposes a `textProps` pass-through instead.

| Mobile Prop                                   | Design System Migration                                                                             |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `labelColor={TextColor.Default}`              | Removed — handled internally; override via `textProps={{ color: TextColor.TextDefault }}`           |
| `labelTextVariant={TextVariant.BodyMDMedium}` | Removed — override via `textProps={{ variant: TextVariant.BodyMd, fontWeight: FontWeight.Medium }}` |

##### `loading` → `isLoading`

| Mobile Prop  | Design System Prop | Notes     |
| ------------ | ------------------ | --------- |
| `loading`    | `isLoading`        | renamed   |
| `isDisabled` | `isDisabled`       | unchanged |

##### New Props

The design system `ButtonBase` adds these props not available in the mobile version:

- `isLoading` — shows an animated spinner and hides button content
- `loadingText` — optional text shown alongside the spinner
- `startAccessory` / `endAccessory` — arbitrary `ReactNode` slots at start/end (in addition to `startIconName`/`endIconName`)
- `textClassName` / `iconClassName` — pressed-state-aware Tailwind class functions
- `twClassName` — string or `(pressed: boolean) => string` for container overrides

#### Migration Examples

##### Simple string label

Before (Mobile):

```tsx
import ButtonBase from '../../../component-library/components/Buttons/Button/foundation/ButtonBase';
import {
  ButtonSize,
  ButtonWidthTypes,
} from '../../../component-library/components/Buttons/Button';

<ButtonBase
  label="Continue"
  size={ButtonSize.Lg}
  width={ButtonWidthTypes.Full}
  onPress={handleContinue}
/>;
```

After (Design System):

```tsx
import {
  ButtonBase,
  ButtonBaseSize,
} from '@metamask/design-system-react-native';

<ButtonBase size={ButtonBaseSize.Lg} isFullWidth onPress={handleContinue}>
  Continue
</ButtonBase>;
```

##### With icons and label styling

Before (Mobile):

```tsx
import ButtonBase from '../../../component-library/components/Buttons/Button/foundation/ButtonBase';
import {
  ButtonSize,
  ButtonWidthTypes,
} from '../../../component-library/components/Buttons/Button';
import { IconName } from '../../../component-library/components/Icons/Icon';
import {
  TextColor,
  TextVariant,
} from '../../../component-library/components/Texts/Text';

<ButtonBase
  label={energyLabel}
  startIconName={IconName.Flash}
  size={ButtonSize.Md}
  width={ButtonWidthTypes.Full}
  labelTextVariant={TextVariant.BodyMDMedium}
  labelColor={theme.colors.text.default}
  style={styles.buttonBase}
  testID="resource-toggle-energy"
/>;
```

After (Design System):

```tsx
import {
  ButtonBase,
  ButtonBaseSize,
  FontWeight,
  TextVariant,
} from '@metamask/design-system-react-native';
import { IconName } from '@metamask/design-system-react-native';

<ButtonBase
  startIconName={IconName.Flash}
  size={ButtonBaseSize.Md}
  isFullWidth
  textProps={{ variant: TextVariant.BodyMd, fontWeight: FontWeight.Medium }}
  style={styles.buttonBase}
  testID="resource-toggle-energy"
  onPress={() => onChange('energy')}
>
  {energyLabel}
</ButtonBase>;
```

### ButtonFilter Component

The `ButtonFilter` component is a filter-chip style button that toggles between active/inactive visual states. The legacy version in `components-temp` already wraps `ButtonBase` from `@metamask/design-system-react-native`, so the migration is primarily an import change.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                  | Design System Migration                                               |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `import ButtonFilter from '.../component-library/components-temp/ButtonFilter'` | `import { ButtonFilter } from '@metamask/design-system-react-native'` |

Note: The legacy component uses a **default export**; the design system uses a **named export**.

##### `textClassName` → `textProps.twClassName`

The legacy `ButtonFilter` accepted `textClassName` as a pressed-state-aware function `(pressed: boolean) => string`. The design system version removes `textClassName` from the prop surface entirely and manages text styling internally based on `isActive`. If you need text overrides, use `textProps.twClassName` instead.

| Mobile Pattern                                | Design System Migration                       |
| --------------------------------------------- | --------------------------------------------- |
| `textClassName={(pressed) => 'text-default'}` | Remove — handled automatically by `isActive`  |
| Custom text class overrides                   | `textProps={{ twClassName: 'custom-class' }}` |

##### `twClassName` Type Change

The legacy version inherited `twClassName` as `string | ((pressed: boolean) => string)` from `ButtonBaseProps`. The design system `ButtonFilter` narrows `twClassName` to `string` only (no pressed-state function).

| Mobile Pattern                                       | Design System Migration                                       |
| ---------------------------------------------------- | ------------------------------------------------------------- |
| `twClassName="mt-2"`                                 | `twClassName="mt-2"` (unchanged)                              |
| `twClassName={(pressed) => pressed ? '...' : '...'}` | Remove — pressed styling is handled internally via `isActive` |

##### Props (Unchanged)

These props work identically in both versions:

- `isActive` — toggles between active (`bg-icon-default` + `text-icon-inverse`) and inactive (`bg-background-muted` + `text-default`) states
- `children`, `size`, `isFullWidth`, `isDisabled`, `onPress`, `style`, `testID`
- `accessibilityLabel`, `accessibilityRole`

#### Migration Examples

##### Filter button group

Before (Mobile):

```tsx
import ButtonFilter from '../../../component-library/components-temp/ButtonFilter';
import { ButtonSize } from '@metamask/design-system-react-native';

<ButtonFilter
  onPress={() => setFilter('ALL')}
  isActive={filter === 'ALL'}
  size={ButtonSize.Md}
  accessibilityLabel="All"
>
  All
</ButtonFilter>;
```

After (Design System):

```tsx
import {
  ButtonFilter,
  ButtonBaseSize,
} from '@metamask/design-system-react-native';

<ButtonFilter
  onPress={() => setFilter('ALL')}
  isActive={filter === 'ALL'}
  size={ButtonBaseSize.Md}
  accessibilityLabel="All"
>
  All
</ButtonFilter>;
```

Note: `ButtonFilter` inherits its size prop from `ButtonBaseProps`. Use `ButtonBaseSize` (or the `ButtonSize` alias).

### ButtonHero Component

The `ButtonHero` component is a branded, light-theme-locked button for high-impact actions (swaps, claims, rewards). The legacy version in `components-temp` already wraps `ButtonBase` from `@metamask/design-system-react-native`, so the migration is primarily an import change with a few behavioral differences.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                      | Design System Migration                                             |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `import ButtonHero from '.../component-library/components-temp/Buttons/ButtonHero'` | `import { ButtonHero } from '@metamask/design-system-react-native'` |

Note: The legacy component uses a **default export**; the design system uses a **named export**.

##### `twClassName`, `textClassName`, `iconClassName` Are Ignored

The design system `ButtonHero` intentionally strips `twClassName`, `textClassName`, and `iconClassName` to prevent overriding the hero-specific light-theme styling. If you relied on these props:

| Mobile Pattern                     | Design System Migration                                      |
| ---------------------------------- | ------------------------------------------------------------ |
| `twClassName="w-full"`             | `isFullWidth`                                                |
| `twClassName="bg-primary-default"` | Remove — already the hero default                            |
| `style={tw.style('w-full')}`       | `isFullWidth` (or keep `style` — it is still passed through) |

##### Props (Unchanged)

The `ButtonHero` accepts the same `ButtonBaseProps` as the legacy version. These props work identically:

- `children`, `size`, `isFullWidth`, `isDisabled`, `isLoading`, `loadingText`
- `startIconName`, `endIconName`, `onPress`, `style`, `testID`
- `accessibilityLabel`, `accessibilityHint`

##### Size Enum

Use `ButtonHeroSize` from `@metamask/design-system-react-native`. Its values (`'sm'`, `'md'`, `'lg'`) are identical to `ButtonSize` and `ButtonBaseSize`.

#### Migration Examples

##### Simple hero button

Before (Mobile):

```tsx
import ButtonHero from '../../../component-library/components-temp/Buttons/ButtonHero';
import { ButtonSize } from '@metamask/design-system-react-native';

<ButtonHero
  size={ButtonSize.Lg}
  onPress={handleClaim}
  isDisabled={isLoading}
  style={tw.style('w-full')}
  testID="claim-button"
>
  Claim Winnings
</ButtonHero>;
```

After (Design System):

```tsx
import {
  ButtonHero,
  ButtonHeroSize,
} from '@metamask/design-system-react-native';

<ButtonHero
  size={ButtonHeroSize.Lg}
  onPress={handleClaim}
  isDisabled={isLoading}
  isFullWidth
  testID="claim-button"
>
  Claim Winnings
</ButtonHero>;
```

##### Hero button with twClassName (stripped)

Before (Mobile):

```tsx
import ButtonHero from '../../../component-library/components-temp/Buttons/ButtonHero';

<ButtonHero
  size={ButtonSize.Lg}
  onPress={handleNext}
  twClassName="w-full bg-primary-default"
>
  Continue
</ButtonHero>;
```

After (Design System):

```tsx
import {
  ButtonHero,
  ButtonHeroSize,
} from '@metamask/design-system-react-native';

<ButtonHero size={ButtonHeroSize.Lg} onPress={handleNext} isFullWidth>
  Continue
</ButtonHero>;
```

`bg-primary-default` is the hero default and `w-full` maps to `isFullWidth`. Both `twClassName` overrides are no longer needed.

### ButtonIcon Component

The `ButtonIcon` component is a compact, icon-only button. The design system version has significant API differences from the mobile component-library version.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                 | Design System Migration                                                      |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `import ButtonIcon from '.../component-library/components/Buttons/ButtonIcon'` | `import { ButtonIcon } from '@metamask/design-system-react-native'`          |
| `import { ButtonIconSizes } from '.../ButtonIcon/ButtonIcon.types'`            | `import { ButtonIconSize } from '@metamask/design-system-react-native'`      |
| `import { IconColor, IconName } from '.../Icons/Icon/Icon.types'`              | `import { IconColor, IconName } from '@metamask/design-system-react-native'` |

Note: The legacy component uses a **default export**; the design system uses a **named export**.

##### Size Enum

The enum is renamed from `ButtonIconSizes` to `ButtonIconSize`, and values change from pixel strings to lowercase identifiers. **The pixel dimensions also differ for Md and Lg.**

| Mobile Value                  | Mobile Pixels | Design System Value          | DS Pixels | Notes          |
| ----------------------------- | ------------- | ---------------------------- | --------- | -------------- |
| `ButtonIconSizes.Sm` (`'24'`) | 24px          | `ButtonIconSize.Sm` (`'sm'`) | 24px      | same dimension |
| `ButtonIconSizes.Md` (`'28'`) | 28px          | `ButtonIconSize.Md` (`'md'`) | 32px      | larger in DS   |
| `ButtonIconSizes.Lg` (`'32'`) | 32px          | `ButtonIconSize.Lg` (`'lg'`) | 40px      | larger in DS   |

Review layouts when migrating Md/Lg sizes — the buttons will be slightly larger.

> [!NOTE]
> The default size (`Md`) grows from `28px` to `32px`, so even call sites that omit the `size` prop will render larger.

##### `iconColor` → `iconProps.color`

The legacy `ButtonIcon` accepted a top-level `iconColor` prop. The design system version removes this and uses `iconProps` instead.

| Mobile Pattern                  | Design System Migration                                                  |
| ------------------------------- | ------------------------------------------------------------------------ |
| `iconColor={IconColor.Default}` | Remove — default is handled automatically                                |
| `iconColor={IconColor.Success}` | `iconProps={{ color: IconColor.SuccessDefault }}`                        |
| `iconColor="string-color"`      | `iconProps={{ color: IconColor.* }}` (map to the closest semantic token) |

##### IconColor Enum Values Changed

The legacy `IconColor` used PascalCase names (`Default`, `Success`). The design system uses semantic names:

| Mobile Value        | Design System Value        |
| ------------------- | -------------------------- |
| `IconColor.Default` | `IconColor.IconDefault`    |
| `IconColor.Success` | `IconColor.SuccessDefault` |
| `IconColor.Primary` | `IconColor.PrimaryDefault` |
| `IconColor.Error`   | `IconColor.ErrorDefault`   |

##### New: `variant` Prop

The design system `ButtonIcon` adds a `variant` prop for visual styles:

- `ButtonIconVariant.Default` — transparent background, default icon color (default)
- `ButtonIconVariant.Filled` — muted background with rounded corners and pressed state
- `ButtonIconVariant.Floating` — colored background with inverse icon color

##### Base Type Change

The legacy component extends `TouchableOpacityProps`. The design system extends `ButtonAnimatedProps` (wraps `Pressable`). Most interaction props (`onPress`, `onPressIn`, `onPressOut`, `disabled`, `testID`, `accessibilityLabel`) carry over.

#### Migration Examples

##### Icon button with color override

Before (Mobile):

```tsx
import ButtonIcon from '../../../component-library/components/Buttons/ButtonIcon';
import { ButtonIconSizes } from '../../../component-library/components/Buttons/ButtonIcon/ButtonIcon.types';
import {
  IconColor,
  IconName,
} from '../../../component-library/components/Icons/Icon/Icon.types';

<ButtonIcon
  iconName={isCopied ? IconName.CopySuccess : IconName.Copy}
  size={ButtonIconSizes.Md}
  onPress={handleCopy}
  isDisabled={!value}
  iconColor={isCopied ? IconColor.Success : undefined}
  testID="copy-button"
/>;
```

After (Design System):

```tsx
import {
  ButtonIcon,
  ButtonIconSize,
  IconColor,
  IconName,
} from '@metamask/design-system-react-native';

<ButtonIcon
  iconName={isCopied ? IconName.CopySuccess : IconName.Copy}
  size={ButtonIconSize.Md}
  onPress={handleCopy}
  isDisabled={!value}
  iconProps={isCopied ? { color: IconColor.SuccessDefault } : undefined}
  testID="copy-button"
/>;
```

##### Simple icon button (default color)

Before (Mobile):

```tsx
<ButtonIcon
  iconName={IconName.Close}
  size={ButtonIconSizes.Sm}
  onPress={handleClose}
/>
```

After (Design System):

```tsx
<ButtonIcon
  iconName={IconName.Close}
  size={ButtonIconSize.Sm}
  onPress={handleClose}
/>
```

### TextButton Component (ButtonLink)

The legacy `ButtonLink` component is replaced by **two** design system components depending on the use case:

- **`TextButton`** — for inline links within text flows (the primary replacement)
- **`Button` with `variant={ButtonVariant.Tertiary}`** — for standalone link-style buttons with icons, full width, or other button-like affordances

`TextButton` is a `Text`-based component (not a `Pressable`/`TouchableOpacity`). It only renders text — no icons, no size variants, no width control.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                                 | Design System Migration                                             |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `import ButtonLink from '.../component-library/components/Buttons/Button/variants/ButtonLink'` | `import { TextButton } from '@metamask/design-system-react-native'` |

##### Content Model: `label` → `children`

| Mobile Pattern                      | Design System Migration               |
| ----------------------------------- | ------------------------------------- |
| `<ButtonLink label="Learn more" />` | `<TextButton>Learn more</TextButton>` |
| `<ButtonLink label={variable} />`   | `<TextButton>{variable}</TextButton>` |

##### Size Removed

The legacy `ButtonLink` inherited `ButtonSize` with a default of `ButtonSize.Auto`. The design system `TextButton` has no `size` prop — control typography via the `variant` prop instead.

| Mobile Pattern           | Design System Migration                  |
| ------------------------ | ---------------------------------------- |
| `size={ButtonSize.Auto}` | Remove — default behavior                |
| `size={ButtonSize.Lg}`   | `variant={TextVariant.BodyLg}`           |
| `size={ButtonSize.Sm}`   | `variant={TextVariant.BodySm}`           |
| `size={ButtonSize.Md}`   | `variant={TextVariant.BodyMd}` (default) |

##### `isDanger` Removed

The legacy `ButtonLink` supported `isDanger` for error-colored text. `TextButton` does not have this prop — it always uses primary color. For error-state links, use `Button` with `variant={ButtonVariant.Tertiary}` and `isDanger`.

##### `labelTextVariant` → `variant`

| Mobile Pattern                                | Design System Migration                                           |
| --------------------------------------------- | ----------------------------------------------------------------- |
| `labelTextVariant={TextVariant.BodyMDMedium}` | `variant={TextVariant.BodyMd}` + `fontWeight={FontWeight.Medium}` |

##### `onPress` Signature

All press props (`onPress`, `onPressIn`, `onPressOut`) keep the same `GestureResponderEvent` type. The behavioral difference is that the legacy non-auto `ButtonBase` (`TouchableOpacity`) provided animated press feedback and handled `isDisabled`, whereas `TextButton` uses `Text` press handling throughout.

##### Removed Props

| Mobile Prop                     | Design System Migration                                           |
| ------------------------------- | ----------------------------------------------------------------- |
| `isDanger`                      | Use `Button` with `variant={ButtonVariant.Tertiary}` + `isDanger` |
| `startIconName` / `endIconName` | Use `Button` with `variant={ButtonVariant.Tertiary}`              |
| `width` / `isFullWidth`         | Use `Button` with `variant={ButtonVariant.Tertiary}`              |
| `isDisabled`                    | Not available on `TextButton` — use `Button` if needed            |

#### Migration Examples

##### Inline "show more" link

Before (Mobile):

```tsx
import ButtonLink from '../../../../component-library/components/Buttons/Button/variants/ButtonLink';

<ButtonLink
  onPress={toggleContent}
  label={isExpanded ? 'Show less' : 'Show more'}
/>;
```

After (Design System):

```tsx
import { TextButton } from '@metamask/design-system-react-native';

<TextButton onPress={toggleContent}>
  {isExpanded ? 'Show less' : 'Show more'}
</TextButton>;
```

##### Link variant in a Button group → Tertiary Button

Before (Mobile):

```tsx
import Button, {
  ButtonVariants,
  ButtonSize,
} from '../../../../component-library/components/Buttons/Button';

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
  Button,
  ButtonVariant,
  ButtonSize,
} from '@metamask/design-system-react-native';

<Button
  variant={ButtonVariant.Tertiary}
  size={ButtonSize.Lg}
  onPress={handleLearnMore}
>
  {strings('button.learn_more')}
</Button>;
```

### BottomSheet Component

The `BottomSheet` component has two key breaking changes when migrating from the mobile component-library:

1. Navigation is no longer handled internally — the old component called `useNavigation()` itself when `shouldNavigateBack` was `true`.
2. The `shouldNavigateBack` prop no longer exists — pass an optional `goBack` callback instead; if provided it is always called when the sheet closes.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                                            | Design System Migration                                                                   |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `import BottomSheet, { BottomSheetRef } from '.../component-library/components/BottomSheets/BottomSheet'` | `import { BottomSheet, type BottomSheetRef } from '@metamask/design-system-react-native'` |

##### `shouldNavigateBack` + internal navigation → optional `goBack` prop

The old mobile component accepted a `shouldNavigateBack` boolean and called `useNavigation().goBack()` itself. The DS component removes both `shouldNavigateBack` and the internal navigation call. Pass a `goBack` callback when you want navigation to happen on close.

| Mobile Pattern                                         | Design System Migration                                         |
| ------------------------------------------------------ | --------------------------------------------------------------- |
| `shouldNavigateBack` — controls whether to navigate    | Removed — pass `goBack` to navigate, omit it to skip navigation |
| No `goBack` prop — `useNavigation()` called internally | `goBack={navigation.goBack}` — caller provides the function     |
| `shouldNavigateBack={false}` — no navigation on close  | Omit `goBack` prop                                              |

Obtain `navigation` via the `useNavigation()` hook from `@react-navigation/native`:

```tsx
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
```

##### `onClose` Callback Signature Unchanged

`onClose?: (hasPendingAction?: boolean) => void` works the same in both versions — it is called **after** the close animation completes, before `goBack` fires (when `goBack` is provided).

#### Migration Examples

##### Standard Modal (navigate back on close)

Before (Mobile):

```tsx
import BottomSheet, {
  BottomSheetRef,
} from '../../../component-library/components/BottomSheets/BottomSheet';

function MyModal() {
  const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <BottomSheet ref={sheetRef} shouldNavigateBack>
      {/* content */}
    </BottomSheet>
  );
}
```

After (Design System):

```tsx
import { useNavigation } from '@react-navigation/native';
import {
  BottomSheet,
  type BottomSheetRef,
} from '@metamask/design-system-react-native';

function MyModal() {
  const navigation = useNavigation();
  const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <BottomSheet ref={sheetRef} goBack={navigation.goBack}>
      {/* content */}
    </BottomSheet>
  );
}
```

##### Modal without back navigation

Before (Mobile):

```tsx
<BottomSheet ref={sheetRef} shouldNavigateBack={false}>
  {/* content */}
</BottomSheet>
```

After (Design System — omit `goBack`):

```tsx
<BottomSheet ref={sheetRef}>{/* content */}</BottomSheet>
```

##### Modal with onClose Callback

Before (Mobile):

```tsx
<BottomSheet ref={sheetRef} shouldNavigateBack onClose={handleDismiss}>
  {/* content */}
</BottomSheet>
```

After (Design System):

```tsx
<BottomSheet ref={sheetRef} goBack={navigation.goBack} onClose={handleDismiss}>
  {/* content */}
</BottomSheet>
```

##### Adding to an Existing DS Import Block

If the file already imports from `@metamask/design-system-react-native`, add `BottomSheet` and `BottomSheetRef` to the existing block rather than creating a second import:

```tsx
// Before
import {
  Button,
  ButtonVariant,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';
import BottomSheet, {
  BottomSheetRef,
} from '.../component-library/.../BottomSheet';

// After — single consolidated import
import {
  BottomSheet,
  type BottomSheetRef,
  Button,
  ButtonVariant,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';
```

#### API Differences

The DS `BottomSheet` exposes `goBack?: () => void` and `keyboardAvoidingViewEnabled?: boolean` alongside all `BottomSheetDialog` props (`isFullscreen`, `isInteractable`, `onClose`, `ref`). The `shouldNavigateBack` prop from the old mobile version does not exist in the DS component.

---

### BottomSheetHeader Component

The `BottomSheetHeader` component is nearly identical between the old mobile component-library and the DS version. Most files can be migrated by simply changing the import with no JSX changes required.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                                    | Design System Migration                                                    |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `import BottomSheetHeader from '.../component-library/components/BottomSheets/BottomSheetHeader'` | `import { BottomSheetHeader } from '@metamask/design-system-react-native'` |

##### Removed Prop: `endAccessory`

The old mobile `BottomSheetHeader` exposed an `endAccessory` slot for arbitrary JSX. The DS version does **not** have this prop — it only surfaces `onClose`/`closeButtonProps` and `onBack`/`backButtonProps`.

If your `BottomSheetHeader` uses `endAccessory`, **keep the old CL import** until the DS component adds equivalent support. Do not migrate those files.

```tsx
// ❌ Cannot migrate — endAccessory not supported in DS BottomSheetHeader
import BottomSheetHeader from '.../component-library/components/BottomSheets/BottomSheetHeader';

<BottomSheetHeader
  endAccessory={<ButtonIcon iconName={IconName.Close} onPress={handleClose} />}
/>;
```

#### Migration Examples

##### Header with Close Button

Before (Mobile):

```tsx
import BottomSheetHeader from '../../../component-library/components/BottomSheets/BottomSheetHeader';

<BottomSheetHeader onClose={handleClose}>
  <Text variant={TextVariant.HeadingMD}>{title}</Text>
</BottomSheetHeader>;
```

After (Design System — no JSX changes needed):

```tsx
import { BottomSheetHeader } from '@metamask/design-system-react-native';

<BottomSheetHeader onClose={handleClose}>
  <Text variant={TextVariant.HeadingMD}>{title}</Text>
</BottomSheetHeader>;
```

##### Header with Back Button and testID on Close

Before (Mobile):

```tsx
<BottomSheetHeader
  onClose={handleClose}
  closeButtonProps={{ testID: 'my-modal-close' }}
  onBack={handleBack}
>
  <Text variant={TextVariant.HeadingMD}>{title}</Text>
</BottomSheetHeader>
```

After (Design System — identical JSX):

```tsx
<BottomSheetHeader
  onClose={handleClose}
  closeButtonProps={{ testID: 'my-modal-close' }}
  onBack={handleBack}
>
  <Text variant={TextVariant.HeadingMD}>{title}</Text>
</BottomSheetHeader>
```

#### API Differences

The DS `BottomSheetHeader` adds a `variant` prop (`BottomSheetHeaderVariant.Compact` | `BottomSheetHeaderVariant.Display`) that is also present in the old mobile version — no change needed. The only removal is `endAccessory` (see above).

---

### BottomSheetFooter Component

The `BottomSheetFooter` component has significant breaking changes. The old mobile version accepted a generic `buttonPropsArray` (an array of full `ButtonProps` objects including `variant`). The DS version uses a structured `primaryButtonProps` / `secondaryButtonProps` API instead, where `variant` is set automatically.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                                       | Design System Migration                                                    |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `import BottomSheetFooter from '.../component-library/components/BottomSheets/BottomSheetFooter'`    | `import { BottomSheetFooter } from '@metamask/design-system-react-native'` |
| `import { ButtonsAlignment } from '.../component-library/components/BottomSheets/BottomSheetFooter'` | `import { ButtonsAlignment } from '@metamask/design-system-react-native'`  |

##### `buttonPropsArray` → `primaryButtonProps` / `secondaryButtonProps`

The old `buttonPropsArray: ButtonProps[]` is replaced by two named props. The `variant` field is no longer accepted — the DS footer always renders the primary button as `ButtonVariant.Primary` and the secondary button as `ButtonVariant.Secondary`.

| Old `buttonPropsArray` field                | New prop location                                       |
| ------------------------------------------- | ------------------------------------------------------- |
| First element (secondary action)            | `secondaryButtonProps`                                  |
| Last/only element (primary action)          | `primaryButtonProps`                                    |
| `label: string`                             | `children: React.ReactNode`                             |
| `variant: ButtonVariants.Primary/Secondary` | Removed — set automatically                             |
| `size: ButtonSize.Lg`                       | `size: ButtonSize.Lg` (keep, explicit size recommended) |
| `onPress`                                   | `onPress`                                               |

##### `label` → `children`

Button content was passed as a `label` string prop in old `ButtonProps`. The DS `Button` uses `children`:

| Mobile Pattern              | Design System Migration        |
| --------------------------- | ------------------------------ |
| `label: strings('foo.bar')` | `children: strings('foo.bar')` |

#### Migration Examples

##### Single Primary Button

Before (Mobile):

```tsx
import BottomSheetFooter from '../../../component-library/components/BottomSheets/BottomSheetFooter';
import {
  ButtonVariants,
  ButtonSize,
} from '../../../component-library/components/Buttons/Button';

const footerButtonProps = [
  {
    label: strings('perps.deposit.quote_expired_modal.get_new_quote'),
    variant: ButtonVariants.Primary,
    size: ButtonSize.Lg,
    onPress: handleGetNewQuote,
  },
];

<BottomSheetFooter
  buttonPropsArray={footerButtonProps}
  style={styles.footer}
/>;
```

After (Design System):

```tsx
import {
  BottomSheetFooter,
  ButtonSize,
} from '@metamask/design-system-react-native';

<BottomSheetFooter
  primaryButtonProps={{
    children: strings('perps.deposit.quote_expired_modal.get_new_quote'),
    onPress: handleGetNewQuote,
    size: ButtonSize.Lg,
  }}
  style={styles.footer}
/>;
```

##### Two Buttons (Secondary + Primary)

Before (Mobile):

```tsx
const footerButtons = [
  {
    label: strings('common.cancel'),
    variant: ButtonVariants.Secondary,
    size: ButtonSize.Lg,
    onPress: handleCancel,
  },
  {
    label: strings('common.confirm'),
    variant: ButtonVariants.Primary,
    size: ButtonSize.Lg,
    onPress: handleConfirm,
  },
];

<BottomSheetFooter buttonPropsArray={footerButtons} />;
```

After (Design System):

```tsx
<BottomSheetFooter
  secondaryButtonProps={{
    children: strings('common.cancel'),
    onPress: handleCancel,
    size: ButtonSize.Lg,
  }}
  primaryButtonProps={{
    children: strings('common.confirm'),
    onPress: handleConfirm,
    size: ButtonSize.Lg,
  }}
/>
```

##### `ButtonsAlignment` — Unchanged

`ButtonsAlignment.Horizontal` / `ButtonsAlignment.Vertical` values and import path are the same in both versions (only the package path changes):

```tsx
// Before
import BottomSheetFooter, {
  ButtonsAlignment,
} from '.../component-library/.../BottomSheetFooter';

// After
import {
  BottomSheetFooter,
  ButtonsAlignment,
} from '@metamask/design-system-react-native';
```

#### Blocked Patterns

If the `buttonPropsArray` contains **more than two** button entries, or if buttons need variants other than Primary/Secondary (e.g. `ButtonVariants.Link`), the DS `BottomSheetFooter` cannot be used as a drop-in replacement. Keep the old CL import for those files until the DS component adds broader support.

#### API Differences

The DS `BottomSheetFooter` adds `twClassName` for Tailwind utility class overrides. The `style` prop (from `ViewProps`) is still supported and behaves the same.

---

### Box Component

The Box component has breaking changes when migrating from the mobile component-library. For custom spacing patterns or values outside the BoxSpacing range, use Tailwind classes via `twClassName`.

Legacy source audit note: mobile Box usage and the primary legacy implementation are under `app/components/UI/Box/Box.tsx` (not only under `app/component-library/components`).

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
import Box from '../../../components/UI/Box/Box';

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

### BannerBase Component

Mobile `BannerBase` maps to `BannerBase` in the design system, but the action-button and close-button APIs are different and can break existing usage.

#### Breaking Changes

##### Removed / No Direct Equivalent

| Legacy Mobile API                                                                                          | MMDS Status                                       | Migration                                                                                                               |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `variant?: BannerVariant`                                                                                  | Removed from `BannerBase` API                     | Remove `variant` on `BannerBase`; apply presentation through `twClassName`, Box props, and explicit content/accessories |
| `actionButtonProps` link-style behavior through unrestricted `ButtonProps` (`variant`, `onPress`, `label`) | No direct equivalent in `BannerBase` action props | Use `actionButtonLabel` + `actionButtonOnPress`, and keep advanced button behavior outside `BannerBase`                 |

##### Renamed Props

| Legacy Mobile API                            | MMDS API                                     |
| -------------------------------------------- | -------------------------------------------- |
| `actionButtonProps.onPress`                  | `actionButtonOnPress`                        |
| `actionButtonProps.label`                    | `actionButtonLabel`                          |
| `closeButtonProps.onPress` (still supported) | `closeButtonProps.onPress` (still supported) |

##### Type and Callback Signature Changes

| Legacy Mobile API                                       | MMDS API                                                                                                                            | Notes                                                                        |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `actionButtonProps?: ButtonProps`                       | `actionButtonProps?: Omit<Partial<ButtonProps>, 'children' \| 'onPress' \| 'variant'>`                                              | MMDS prevents setting action handler and variant through `actionButtonProps` |
| `actionButtonProps` controls rendering of action button | `actionButtonOnPress` controls rendering of action button                                                                           | Action button is shown only when `actionButtonOnPress` is provided           |
| `title?: string \| React.ReactNode`                     | `title?: ReactNode`                                                                                                                 | Equivalent content support                                                   |
| `description?: string \| React.ReactNode`               | `description?: ReactNode`                                                                                                           | Equivalent content support                                                   |
| `closeButtonProps?: ButtonIconProps`                    | `closeButtonProps?: Omit<Partial<ButtonIconProps>, 'iconName' \| 'onPress'> & { onPress?: (event: GestureResponderEvent) => void }` | `iconName` remains fixed to close icon                                       |

##### Default and Behavior Changes

| Legacy Mobile Behavior                                                   | MMDS Behavior                                                                                                      |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Action button shown when `actionButtonProps` exists                      | Action button shown when `actionButtonOnPress` exists                                                              |
| Action button defaults to `size={ButtonSize.Auto}`                       | Action button defaults to `size={ButtonSize.Md}`                                                                   |
| Close button press fallback uses `noop` when callbacks are missing       | Close button callback is omitted when callbacks are missing                                                        |
| Close button icon default color is `IconColor.Default`                   | MMDS `BannerBase` delegates icon color to `ButtonIcon` defaults unless explicitly overridden in `closeButtonProps` |
| Close button accessibility label had no explicit default in `BannerBase` | Default close label is `'Close banner'` (override with `closeButtonProps.accessibilityLabel`)                      |

#### Migration Examples

##### Before (Mobile)

```tsx
import BannerBase from '../../../component-library/components/Banners/Banner/foundation/BannerBase';

<BannerBase
  title="Backup your Secret Recovery Phrase"
  description="Keep it private and secure."
  actionButtonProps={{
    label: 'Review',
    onPress: () => {
      /* handle review */
    },
  }}
  onClose={() => {
    /* dismiss banner */
  }}
/>;
```

##### After (Design System)

```tsx
import { BannerBase } from '@metamask/design-system-react-native';

<BannerBase
  title="Backup your Secret Recovery Phrase"
  description="Keep it private and secure."
  actionButtonLabel="Review"
  actionButtonOnPress={() => {
    /* handle review */
  }}
  onClose={() => {
    /* dismiss banner */
  }}
  closeButtonProps={{ testID: 'banner-base-close-button' }}
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

The Icon component has enum/name differences and a narrowed prop surface when migrating from the mobile component-library.

#### Breaking Changes

##### Props, Enums, and Value Mapping

| Mobile API                                                                                                                                  | MMDS React Native API                                                                                                 | Change Type                   | Notes                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `name: IconName`                                                                                                                            | `name: IconName`                                                                                                      | enum surface changed          | Most names align, but some legacy names were removed/renamed.                                                                |
| `size?: IconSize` (`Xss`, `Xs`, `Sm`, `Md`, `Lg`, `Xl`, `XXL`)                                                                             | `size?: IconSize` (`Xs`, `Sm`, `Md`, `Lg`, `Xl`)                                                                     | enum values removed           | `Xss` and `XXL` are removed (`Xss -> Xs`, `XXL -> Xl` for closest visual parity).                                           |
| `color?: string \| IconColor` (`Default`, `Inverse`, `Alternative`, `Muted`, `Primary`, `PrimaryAlternative`, `Success`, `Error`, etc.) | `color?: IconColor` (`IconDefault`, `OverlayInverse`, semantic text token values)                                    | type + enum changed           | Raw string colors are no longer accepted through the `color` prop; use MMDS `IconColor`, `twClassName`, or `style` instead. |
| `hitSlop?: number \| Insets`                                                                                                                | not supported on `Icon`                                                                                                | removed                       | MMDS `Icon` is SVG-based and does not expose `ViewProps` interaction props.                                                  |
| extends `ViewProps`                                                                                                                         | extends `Omit<SvgProps, 'color' \| 'name'>`                                                                           | base prop surface changed     | Treat MMDS `Icon` as SVG props + `twClassName` customization.                                                                |
| `twClassName` not available                                                                                                                 | `twClassName?: string`                                                                                                 | added                         | Tailwind utility override hook in MMDS.                                                                                      |

##### Icon Name Differences (Selected)

| Mobile `IconName`     | MMDS `IconName`      | Notes                       |
| --------------------- | -------------------- | --------------------------- |
| `Apple`               | `AppleLogo`          | renamed                     |
| `MetamaskFoxFilled`   | removed              | use closest supported icon  |
| `SearchFilled`        | removed              | use closest supported icon  |
| not available         | `Backspace`          | MMDS-only icon              |
| not available         | `Clear`              | MMDS-only icon              |
| not available         | `PopUp`              | MMDS-only icon              |
| not available         | `SidePanel`          | MMDS-only icon              |

##### Color Enum Mapping (Common)

| Mobile Color                   | MMDS React Native Color      |
| ------------------------------ | ---------------------------- |
| `IconColor.Default`            | `IconColor.IconDefault`      |
| `IconColor.Alternative`        | `IconColor.IconAlternative`  |
| `IconColor.Muted`              | `IconColor.IconMuted`        |
| `IconColor.Primary`            | `IconColor.PrimaryDefault`   |
| `IconColor.PrimaryAlternative` | `IconColor.PrimaryDefault`   |
| `IconColor.Success`            | `IconColor.SuccessDefault`   |
| `IconColor.Error`              | `IconColor.ErrorDefault`     |
| `IconColor.ErrorAlternative`   | `IconColor.ErrorAlternative` |
| `IconColor.Warning`            | `IconColor.WarningDefault`   |
| `IconColor.Info`               | `IconColor.InfoDefault`      |
| `IconColor.Inverse`            | `IconColor.OverlayInverse`   |

##### Default and Behavior Changes

| Concern             | Mobile Behavior                                                                                             | MMDS React Native Behavior                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Default color       | `IconColor.Default`                                                                                         | `IconColor.IconDefault`                                                                       |
| Color fallback      | accepts enum or arbitrary color string (`#hex`, `rgb`, etc.)                                                | `color` expects MMDS `IconColor`; use `twClassName`/`style` for non-token styling           |
| Rendering strategy  | resolves icon color via theme switch, then renders SVG asset                                                | applies Tailwind token classes (`color`, size) and renders SVG with `fill="currentColor"`   |
| Prop inheritance    | inherits `ViewProps` (`hitSlop`, accessibility/interaction view props)                                      | inherits SVG props only (`SvgProps`, excluding `color`/`name`)                               |

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

<Icon
  name={IconName.CheckBold}
  size={IconSize.Xl}
  color={IconColor.IconDefault}
/>
<Icon
  name={IconName.Warning}
  color={IconColor.WarningDefault}
  twClassName="opacity-80"
/>
```

#### API Differences

- `name` remains required, but enum membership differs (for example `Apple` -> `AppleLogo`)
- `hitSlop` is removed because MMDS `Icon` no longer extends `ViewProps`
- `twClassName` is available for Tailwind utility overrides in the design system
- `color` should use MMDS `IconColor`; avoid passing raw color strings directly to the `color` prop

### Checkbox Component

The mobile `Checkbox` maps to `Checkbox` in the design system, with controlled-state naming changes and removed indeterminate/read-only/danger paths.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                     | Design System Migration                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `import Checkbox from '.../component-library/components/Checkbox'` | `import { Checkbox } from '@metamask/design-system-react-native'`           |
| `import type { CheckboxProps } from '.../Checkbox.types'`          | `import type { CheckboxProps } from '@metamask/design-system-react-native'` |

##### Props and Callback Mapping

| Mobile API                             | Design System API                         | Change Type                                         | Notes                                                                                      |
| -------------------------------------- | ----------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `isChecked?: boolean`                  | `isSelected: boolean`                     | renamed + now required                              | controlled value must be explicitly passed                                                 |
| `onPress?: () => void`                 | `onChange: (isSelected: boolean) => void` | callback renamed + signature changed + now required | callback receives next boolean value                                                       |
| `checkboxStyle?: StyleProp<ViewStyle>` | removed top-level prop                    | removed                                             | style the container with `style` / `twClassName` or customize via `checkboxContainerProps` |
| `isIndeterminate?: boolean`            | removed                                   | removed                                             | no built-in tri-state checkbox mode                                                        |
| `isReadOnly?: boolean`                 | removed                                   | removed                                             | enforce read-only in parent by no-oping `onChange`                                         |
| `isDanger?: boolean`                   | removed                                   | removed                                             | no danger variant in MMDS checkbox                                                         |
| `isDisabled?: boolean`                 | `isDisabled?: boolean`                    | unchanged                                           | still defaults to `false`                                                                  |
| `label?: string \| ReactNode`          | `label?: string \| ReactNode`             | unchanged                                           | still supported                                                                            |
| `labelProps`                           | `labelProps`                              | unchanged                                           | still supported (Text props)                                                               |
| `checkedIconProps`                     | `checkedIconProps`                        | added in MMDS                                       | customize selected check icon                                                              |
| `checkboxContainerProps`               | `checkboxContainerProps`                  | added in MMDS                                       | customize icon container view                                                              |

##### Default and Behavior Changes

| Concern                   | Mobile Behavior                                      | Design System Behavior                          |
| ------------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| Controlled state defaults | `isChecked` optional (unchecked when omitted)        | `isSelected` required                           |
| Interaction callback      | `onPress()` with no args                             | `onChange(nextIsSelected)`                      |
| Press target              | `TouchableOpacity`                                   | `Pressable` with `accessibilityRole="checkbox"` |
| Icon state handling       | check/minus icon for checked/indeterminate           | check icon only for selected state              |
| Disabled + readonly       | component disabled when `isDisabled` or `isReadOnly` | disabled only through `isDisabled`              |

#### Migration Example

##### Before (Mobile)

```tsx
import Checkbox from '../../../component-library/components/Checkbox';

<Checkbox
  isChecked={isChecked}
  isIndeterminate={isPartiallySelected}
  isReadOnly={isLocked}
  isDanger={hasError}
  onPress={() => setIsChecked((previous) => !previous)}
  label="I agree to the terms"
/>;
```

##### After (Design System)

```tsx
import { Checkbox } from '@metamask/design-system-react-native';

<Checkbox
  isSelected={isChecked}
  isDisabled={isLocked}
  isInvalid={hasError}
  onChange={(nextIsSelected) => {
    if (isLocked) {
      return;
    }
    setIsChecked(nextIsSelected);
  }}
  label="I agree to the terms"
/>;
```

#### API Differences

- MMDS `Checkbox` adds `twClassName` and `style` on the outer `Pressable`, plus `checkboxContainerProps` and `checkedIconProps` for targeted customization.
- Mobile legacy `Checkbox` forwarded `TouchableOpacityProps`; MMDS forwards `PressableProps`.
- Imperative `ref.toggle()` remains available in MMDS.

### TextField Component

The TextField component in `@metamask/design-system-react-native` is a near-identical replacement for the mobile `component-library` TextField. The core props API is preserved; the main changes are the import path, styling system (TWRNC instead of `useStyles`), and two new customization props.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                                     | Design System Migration                                                      |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `import TextField from '.../component-library/components/Form/TextField'`                          | `import { TextField } from '@metamask/design-system-react-native'`           |
| `import TextField from '.../component-library/components/Form/TextField/TextField'`                | `import { TextField } from '@metamask/design-system-react-native'`           |
| `import { TextFieldProps } from '.../component-library/components/Form/TextField/TextField.types'` | `import type { TextFieldProps } from '@metamask/design-system-react-native'` |

The mobile component uses a **default export**; the design system uses a **named export**.

##### `testID` Target Changed

| Mobile Behavior                                              | Design System Behavior                                |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| `testID` is forwarded to the inner `Input` (the `TextInput`) | `testID` is applied to the root `Pressable` container |

If your tests rely on `testID` to query the native `TextInput` (e.g. for `fireEvent.changeText`), you may need to adjust your test selectors. The inner `Input` in the design system component does not receive a separate `testID` by default.

##### Accessory Wrapper Removed

| Mobile Behavior                                                                                                                                       | Design System Behavior                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `startAccessory` and `endAccessory` are each wrapped in a `<View>` with a dedicated `testID` (`textfield-startacccessory`, `textfield-endacccessory`) | Accessories are rendered directly as children of the `Pressable` — no wrapper `<View>`, no dedicated `testID` |

If your tests query `textfield-startacccessory` or `textfield-endacccessory`, set `testID` on the accessory element itself:

```tsx
// Before (Mobile)
<TextField startAccessory={<Icon name={IconName.Search} />} />
// Test: getByTestId('textfield-startacccessory')

// After (Design System)
<TextField startAccessory={<Icon name={IconName.Search} testID="search-icon" />} />
// Test: getByTestId('search-icon')
```

##### `style` Prop Type Changed

| Mobile Behavior                                                              | Design System Behavior                                                                                 |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `style` is passed into `useStyles` and merged into the container style sheet | `style` is typed as `StyleProp<ViewStyle>` and applied as an array alongside the TWRNC container style |

Most inline `style` overrides will continue to work. However, if you were relying on the old `useStyles` merge behavior (where `style` could influence border, background, or other sheet-level vars), verify that the override still applies correctly.

##### Accessibility: `accessible={false}` on Container

The design system TextField sets `accessible={false}` on the root `Pressable`. The mobile version does not set this. This means the container itself is not announced as an accessible element — only the inner `TextInput` is. This is generally the correct behavior but may affect custom accessibility setups.

#### Unchanged Props

These props work identically in both versions — no migration needed:

| Prop                 | Type                     | Notes                                     |
| -------------------- | ------------------------ | ----------------------------------------- |
| `value`              | `string`                 | Controlled input value                    |
| `placeholder`        | `string`                 | Placeholder text                          |
| `onChangeText`       | `(text: string) => void` | Text change handler                       |
| `onFocus`            | `(e) => void`            | Focus handler (skipped when disabled)     |
| `onBlur`             | `(e) => void`            | Blur handler (skipped when disabled)      |
| `isError`            | `boolean`                | Error border state                        |
| `isDisabled`         | `boolean`                | Disabled state (opacity + no interaction) |
| `isReadonly`         | `boolean`                | Read-only state                           |
| `autoFocus`          | `boolean`                | Auto-focus on mount                       |
| `startAccessory`     | `ReactNode`              | Content before the input                  |
| `endAccessory`       | `ReactNode`              | Content after the input                   |
| `inputElement`       | `ReactNode`              | Custom input replacement                  |
| `ref`                | `Ref<TextInput>`         | Forwarded to inner TextInput              |
| `numberOfLines`      | Forced to `1`            | Single-line enforced                      |
| `multiline`          | Forced to `false`        | Single-line enforced                      |
| All `TextInputProps` | Various                  | Spread to inner Input                     |

#### New Props (Design System Only)

| Prop          | Type                   | Description                                                |
| ------------- | ---------------------- | ---------------------------------------------------------- |
| `twClassName` | `string`               | TWRNC utility classes merged into the container style      |
| `style`       | `StyleProp<ViewStyle>` | React Native style applied to the container (array-merged) |

#### Styling Differences

The design system TextField uses TWRNC (Tailwind React Native CSS) instead of the `useStyles`/`StyleSheet` approach:

| Concern            | Mobile                                 | Design System                  |
| ------------------ | -------------------------------------- | ------------------------------ |
| Styling system     | `useStyles` hook + `StyleSheet.create` | `useTailwind()` + `tw.style()` |
| Border radius      | `12px`                                 | `8px` (`rounded-lg`)           |
| Background         | `theme.colors.background.muted`        | `bg-muted` (equivalent token)  |
| Disabled opacity   | `0.5`                                  | `0.5` (identical)              |
| Height             | `48px`                                 | `48px` (identical)             |
| Horizontal padding | `16px`                                 | `16px` (`px-4`, identical)     |
| Accessory gap      | `marginRight/Left: 12`                 | `gap-3` (12px, identical)      |

The `border-radius` change from `12px` to `8px` is the most visible visual difference.

#### Migration Examples

##### Basic TextField

Before (Mobile):

```tsx
import TextField from '../../../component-library/components/Form/TextField';

<TextField
  value={name}
  onChangeText={setName}
  placeholder="Enter name"
  testID="name-input"
/>;
```

After (Design System):

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField
  value={name}
  onChangeText={setName}
  placeholder="Enter name"
  testID="name-input"
/>;
```

##### TextField with Accessories and Error

Before (Mobile):

```tsx
import TextField from '../../../component-library/components/Form/TextField';

<TextField
  ref={inputRef}
  value={url}
  onChangeText={setUrl}
  placeholder="https://example.com"
  isError={hasError}
  autoCapitalize="none"
  autoCorrect={false}
  startAccessory={<Icon name={IconName.Link} />}
  endAccessory={<Icon name={IconName.Close} onPress={handleClear} />}
/>;
```

After (Design System):

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField
  ref={inputRef}
  value={url}
  onChangeText={setUrl}
  placeholder="https://example.com"
  isError={hasError}
  autoCapitalize="none"
  autoCorrect={false}
  startAccessory={<Icon name={IconName.Link} />}
  endAccessory={<Icon name={IconName.Close} onPress={handleClear} />}
/>;
```

##### TextField with Type Import

Before (Mobile):

```tsx
import TextField from '../../../component-library/components/Form/TextField';
import { TextFieldProps } from '../../../component-library/components/Form/TextField/TextField.types';

const MyInput: React.FC<TextFieldProps> = (props) => (
  <TextField {...props} autoCapitalize="none" autoCorrect={false} />
);
```

After (Design System):

```tsx
import { TextField } from '@metamask/design-system-react-native';
import type { TextFieldProps } from '@metamask/design-system-react-native';

const MyInput: React.FC<TextFieldProps> = (props) => (
  <TextField {...props} autoCapitalize="none" autoCorrect={false} />
);
```

#### API Differences

- MMDS `TextField` adds `twClassName` for Tailwind-based style overrides and a `style` prop typed as `StyleProp<ViewStyle>`.
- Mobile legacy `TextField` wrapped accessories in `<View>` elements with hardcoded `testID`s; MMDS renders accessories directly.
- The `testID` prop targets the root `Pressable` in MMDS vs. the inner `TextInput` in the mobile version.
- MMDS sets `accessible={false}` on the root `Pressable`; the mobile version does not.
- Border radius is `8px` in MMDS vs. `12px` in the mobile version.

### ListItem Component

The ListItem component in `@metamask/design-system-react-native` is a near-identical replacement for the mobile `component-library` ListItem. The props API is largely preserved; the main changes are the import path, enum naming (ADR-0003), styling system (TWRNC/Box instead of `useStyles`/`StyleSheet`), and a new `twClassName` prop.

> **Note:** The mobile `component-library` also provides `ListItemColumn`, `ListItemSelect`, and `ListItemMultiSelect` sub-components that build on `ListItem`. These sub-components do **not** yet have equivalents in `@metamask/design-system-react-native`. If your code uses them, you cannot fully migrate until they are added to the design system. See [Sub-components Not Yet Migrated](#sub-components-not-yet-migrated) for details.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                                  | Design System Migration                                                            |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `import ListItem from '.../component-library/components/List/ListItem'`                         | `import { ListItem } from '@metamask/design-system-react-native'`                  |
| `import { VerticalAlignment } from '.../component-library/components/List/ListItem'`            | `import { ListItemVerticalAlignment } from '@metamask/design-system-react-native'` |
| `import { ListItemProps } from '.../component-library/components/List/ListItem/ListItem.types'` | `import type { ListItemProps } from '@metamask/design-system-react-native'`        |

The mobile component uses a **default export**; the design system uses a **named export**.

##### VerticalAlignment Enum Renamed

The enum is renamed from `VerticalAlignment` to `ListItemVerticalAlignment` and converted from a TypeScript `enum` to a const object (ADR-0003). Values change from PascalCase to lowercase.

| Mobile Value                            | Design System Value                             | Notes          |
| --------------------------------------- | ----------------------------------------------- | -------------- |
| `VerticalAlignment.Top` (`'Top'`)       | `ListItemVerticalAlignment.Top` (`'top'`)       | casing changed |
| `VerticalAlignment.Center` (`'Center'`) | `ListItemVerticalAlignment.Center` (`'center'`) | casing changed |
| `VerticalAlignment.Bottom` (`'Bottom'`) | `ListItemVerticalAlignment.Bottom` (`'bottom'`) | casing changed |

##### Accessibility Attributes on Root

| Mobile Behavior                                          | Design System Behavior                                          |
| -------------------------------------------------------- | --------------------------------------------------------------- |
| Root `<View>` sets `accessible accessibilityRole="none"` | Root `<Box>` does not set these — inherits `ViewProps` defaults |

If your tests or accessibility expectations rely on the root element having `accessible={true}` and `accessibilityRole="none"`, add these explicitly via props.

#### Unchanged Props

These props work identically in both versions — no migration needed:

| Prop                 | Type                   | Notes                                              |
| -------------------- | ---------------------- | -------------------------------------------------- |
| `children`           | `ReactNode`            | Content displayed in the horizontal row            |
| `topAccessory`       | `ReactNode`            | Content above the row                              |
| `bottomAccessory`    | `ReactNode`            | Content below the row                              |
| `topAccessoryGap`    | `number`               | Gap between topAccessory and row (default: `0`)    |
| `bottomAccessoryGap` | `number`               | Gap between row and bottomAccessory (default: `0`) |
| `gap`                | `number \| string`     | Gap between children in the row (default: `16`)    |
| `style`              | `StyleProp<ViewStyle>` | Custom styles on the root element                  |
| All `ViewProps`      | Various                | `testID`, `accessibilityLabel`, etc.               |

#### New Props (Design System Only)

| Prop          | Type     | Description                                             |
| ------------- | -------- | ------------------------------------------------------- |
| `twClassName` | `string` | Tailwind CSS classes merged into the root element style |

#### Styling Differences

| Concern        | Mobile                                 | Design System                                |
| -------------- | -------------------------------------- | -------------------------------------------- |
| Styling system | `useStyles` hook + `StyleSheet.create` | `useTailwind()` + `Box` component            |
| Root element   | Raw `<View>`                           | `<Box>` with `p-4` Tailwind class            |
| Inner row      | `<View style={styles.item}>`           | `<Box flexDirection="row" alignItems={...}>` |
| Padding        | `16px` via StyleSheet                  | `p-4` (16px, identical)                      |

The visual output is identical — the structural change from `View` to `Box` is transparent to consumers.

#### Migration Examples

##### Basic ListItem

Before (Mobile):

```tsx
import ListItem from '../../../component-library/components/List/ListItem';

<ListItem>
  <AvatarFavicon />
  <Text>Network Name</Text>
</ListItem>;
```

After (Design System):

```tsx
import { ListItem } from '@metamask/design-system-react-native';

<ListItem>
  <AvatarFavicon />
  <Text>Network Name</Text>
</ListItem>;
```

##### ListItem with VerticalAlignment

Before (Mobile):

```tsx
import ListItem, {
  VerticalAlignment,
} from '../../../component-library/components/List/ListItem';

<ListItem verticalAlignment={VerticalAlignment.Top} gap={8}>
  <AvatarFavicon />
  <View>
    <Text>Title</Text>
    <Text>Description</Text>
  </View>
</ListItem>;
```

After (Design System):

```tsx
import {
  ListItem,
  ListItemVerticalAlignment,
} from '@metamask/design-system-react-native';

<ListItem verticalAlignment={ListItemVerticalAlignment.Top} gap={8}>
  <AvatarFavicon />
  <View>
    <Text>Title</Text>
    <Text>Description</Text>
  </View>
</ListItem>;
```

##### ListItem with Accessories

Before (Mobile):

```tsx
import ListItem from '../../../component-library/components/List/ListItem';

<ListItem
  topAccessory={<Text>Section Header</Text>}
  topAccessoryGap={8}
  bottomAccessory={<Text>Section Footer</Text>}
  bottomAccessoryGap={4}
>
  <AvatarFavicon />
  <Text>Label</Text>
</ListItem>;
```

After (Design System):

```tsx
import { ListItem } from '@metamask/design-system-react-native';

<ListItem
  topAccessory={<Text>Section Header</Text>}
  topAccessoryGap={8}
  bottomAccessory={<Text>Section Footer</Text>}
  bottomAccessoryGap={4}
>
  <AvatarFavicon />
  <Text>Label</Text>
</ListItem>;
```

##### ListItem with Type Import

Before (Mobile):

```tsx
import ListItem from '../../../component-library/components/List/ListItem';
import { ListItemProps } from '../../../component-library/components/List/ListItem/ListItem.types';

const MyListItem: React.FC<ListItemProps> = (props) => (
  <ListItem {...props} gap={8} />
);
```

After (Design System):

```tsx
import { ListItem } from '@metamask/design-system-react-native';
import type { ListItemProps } from '@metamask/design-system-react-native';

const MyListItem: React.FC<ListItemProps> = (props) => (
  <ListItem {...props} gap={8} />
);
```

#### Sub-components Not Yet Migrated

The following mobile `component-library` sub-components build on `ListItem` but do **not** have equivalents in `@metamask/design-system-react-native` yet. Files using these components cannot be fully migrated until they are added.

| Sub-component         | Description                                             | Usage Count                         |
| --------------------- | ------------------------------------------------------- | ----------------------------------- |
| `ListItemColumn`      | Column wrapper with `WidthType.Auto` / `WidthType.Fill` | Used internally by other components |
| `ListItemSelect`      | Single-select list item with selection underlay         | ~27 files across the codebase       |
| `ListItemMultiSelect` | Multi-select list item with checkbox                    | ~2 files across the codebase        |

#### Migration Scope by Team

| Team                              | Files   | Components Used                                                   |
| --------------------------------- | ------- | ----------------------------------------------------------------- |
| @MetaMask/design-system-engineers | 9       | ListItem, ListItemSelect, ListItemMultiSelect (internal wrappers) |
| @MetaMask/money-movement          | 31      | ListItem (14), ListItemSelect (17)                                |
| @MetaMask/card                    | 4       | ListItem (1), ListItemSelect (3)                                  |
| @MetaMask/perps                   | 3       | ListItem (3)                                                      |
| @MetaMask/metamask-assets         | 2       | ListItemSelect (1), ListItemMultiSelect (1)                       |
| @MetaMask/mobile-core-ux          | 3       | ListItemSelect (1), legacy Base/ListItem (2)                      |
| @MetaMask/rewards                 | 2       | ListItemSelect (2)                                                |
| Unowned                           | 4       | ListItem (1), ListItemSelect (1), other (2)                       |
| **Total**                         | **~58** |                                                                   |

#### API Differences

- MMDS `ListItem` adds `twClassName` for Tailwind-based style overrides.
- The mobile `VerticalAlignment` enum is renamed to `ListItemVerticalAlignment` with lowercase values (`'top'`/`'center'`/`'bottom'` instead of `'Top'`/`'Center'`/`'Bottom'`).
- The mobile version sets `accessible accessibilityRole="none"` on the root element; MMDS does not.
- The mobile version uses a default export; MMDS uses a named export.
- `ListItemColumn`, `ListItemSelect`, and `ListItemMultiSelect` are not yet available in MMDS.

## Version Updates

This section covers version-to-version breaking changes within `@metamask/design-system-react-native`.

## From version 0.12.0 to 0.13.0

### Typography: semantic bold is now semibold (600)

- `FontWeight.Bold` and the `Text` component now describe bold as weight 600; the Storybook RN `FontLoader` loads the new `Geist-SemiBold` assets, and `@metamask/design-system-twrnc-preset` maps `default-bold` and `default-bold-italic` to those semibold PostScript names instead of the retired bold files.
- Update any custom `fontWeight` constants, native font registrations, or text styles that previously assumed 700 so they match the new semibold definition (the `FontWeight.Bold` member still exists but now documents 600).
- This change is synchronized with `@metamask/design-tokens@8.3.0`, so follow the [design-tokens migration guide](../design-tokens/MIGRATION.md#from-version-822-to-830) for the token-level steps and to grab the new font files if you bundle them yourself.

### BadgeWrapper types now use const-object + union definitions

- `BadgeWrapperPosition`, `BadgeWrapperPositionAnchorShape`, `BadgeWrapperCustomPosition`, and `BadgeWrapperPropsShared` now come from const objects annotated `as const`, which produce string union types rather than TypeScript enums (ADR-0003/ADR-0004). The shared package defines the canonical values and the platform entry points keep re-exporting those names so React Native consumers use the same import paths they already rely on.
- The switch lets React, React Native, and shared code stay aligned on the string-literal surface without duplicating runtime enums; no import-path change is required.

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
