# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-react-native` to another, and for migrating components from MetaMask Mobile `component-library` to the design system.

## Table of Contents

- [From Mobile Component Library](#from-mobile-component-library)
  - [Button Component](#button-component)
  - [BottomSheet Component](#bottomsheet-component)
  - [BottomSheetHeader Component](#bottomsheetheader-component)
  - [BottomSheetFooter Component](#bottomsheetfooter-component)
  - [Box Component](#box-component)
  - [BannerAlert Component](#banneralert-component)
  - [BannerBase Component](#bannerbase-component)
  - [Text Component](#text-component)
  - [Icon Component](#icon-component)
  - [Checkbox Component](#checkbox-component)
- [Version Updates](#version-updates)
  - [From version 0.13.0 to 0.14.0](#from-version-0130-to-0140)
  - [From version 0.12.0 to 0.13.0](#from-version-0120-to-0130)
  - [From version 0.11.0 to 0.12.0](#from-version-0110-to-0120)
  - [From version 0.10.0 to 0.11.0](#from-version-0100-to-0110)
  - [From version 0.1.0 to 0.2.0](#from-version-010-to-020)

## Version Updates

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

Mobile legacy `Box` lives at `app/components/UI/Box/Box.tsx` and differs from MMDS `Box` in style-prop support, token typing, and spacing APIs.

#### Breaking Changes

##### Removed / No Direct Equivalent

| Legacy Mobile API                  | MMDS Status                | Migration                                                                                           |
| ---------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------- |
| `display`                          | Removed from `Box` prop API | Use `twClassName` or `style` for display behavior.                                                  |
| `textAlign`                        | Removed from `Box` prop API | Move alignment to `Text` styles/props on text children.                                             |
| `color`                            | Removed from `Box` prop API | Move color concerns to `Text`/`Icon` components.                                                    |

##### Type and Value Changes

| Legacy Mobile API                              | MMDS API                            | Notes                                                                 |
| ---------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------- |
| `gap?: number`                                 | `gap?: BoxSpacing` (`0-12`)         | Convert pixel values to spacing scale (for example `16` px -> `4`).  |
| `backgroundColor?: string`                     | `backgroundColor?: BoxBackgroundColor` | Use MMDS token enum instead of raw color string literals.             |
| `alignItems` / `justifyContent` / `flexDirection` from legacy enums | same props with MMDS enums          | Update import source to `@metamask/design-system-react-native` enums. |

##### Added APIs in MMDS Box

MMDS `Box` adds spacing and border utility props that were not part of the legacy mobile Box API:

- `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`, `marginHorizontal`, `marginVertical`
- `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `paddingHorizontal`, `paddingVertical`
- `borderWidth`, `borderColor`, `flexWrap`, `twClassName`

#### Migration Examples

##### Before (Mobile)

```tsx
import {
  Box,
  Display,
  FlexDirection,
  JustifyContent,
  AlignItems,
} from '../../components/UI/Box/Box';
import { TextColor } from '../../component-library/components/Texts/Text';

<Box
  display={Display.Flex}
  flexDirection={FlexDirection.Row}
  justifyContent={JustifyContent.spaceBetween}
  alignItems={AlignItems.center}
  gap={16}
  color={TextColor.textDefault}
  backgroundColor="#037dd6"
>
  Legacy Box
</Box>
```

##### After (Design System)

```tsx
import {
  Box,
  BoxFlexDirection,
  BoxJustifyContent,
  BoxAlignItems,
  BoxBackgroundColor,
  Text,
  TextColor,
} from '@metamask/design-system-react-native';

<Box
  flexDirection={BoxFlexDirection.Row}
  justifyContent={BoxJustifyContent.Between}
  alignItems={BoxAlignItems.Center}
  gap={4}
  backgroundColor={BoxBackgroundColor.PrimaryDefault}
  twClassName="px-4"
>
  <Text color={TextColor.TextDefault}>MMDS Box</Text>
</Box>
```

For values outside `BoxSpacing` (`0-12`), use `twClassName`/`style` (for example `twClassName="gap-[18px]"` or dynamic `style` values).

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
