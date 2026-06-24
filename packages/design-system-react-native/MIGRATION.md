# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-react-native` to another, and for migrating components from MetaMask Mobile `component-library` to the design system.

## Table of Contents

- [From version 0.30.0 to 0.31.0](#from-version-0300-to-0310)
- [From version 0.29.0 to 0.30.0](#from-version-0290-to-0300)
- [From version 0.28.0 to 0.29.0](#from-version-0280-to-0290)
- [From version 0.27.0 to 0.28.0](#from-version-0270-to-0280)
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
  - [BadgeCount Component](#badgecount-component)
  - [BadgeIcon Component](#badgeicon-component)
  - [BadgeNetwork Component](#badgenetwork-component)
  - [BadgeStatus Component](#badgestatus-component)
  - [BadgeWrapper Component](#badgewrapper-component)
  - [Deprecated aggregate `Badge` component](#deprecated-aggregate-badge-component)
  - [HeaderBase Component](#headerbase-component)
  - [Text Component](#text-component)
  - [Label Component](#label-component)
  - [Icon Component](#icon-component)
  - [Input Component](#input-component)
  - [Checkbox Component](#checkbox-component)
  - [AvatarBase Component](#avatarbase-component)
  - [AvatarAccount Component](#avataraccount-component)
  - [AvatarFavicon Component](#avatarfavicon-component)
  - [AvatarIcon Component](#avataricon-component)
  - [AvatarNetwork Component](#avatarenetwork-component)
  - [AvatarToken Component](#avatartoken-component)
  - [AvatarGroup Component](#avatargroup-component)
  - [TextField Component](#textfield-component)
  - [KeyValueRow Component](#keyvaluerow-component)
  - [ListItem Component](#listitem-component)
  - [TabEmptyState Component](#tabemptystate-component)
  - [Toast Component](#toast-component)
- [Version Updates](#version-updates)
  - [From version 0.26.0 to 0.27.0](#from-version-0260-to-0270)
  - [From version 0.24.0 to 0.25.0](#from-version-0240-to-0250)
  - [From version 0.23.0 to 0.24.0](#from-version-0230-to-0240)
  - [From version 0.22.0 to 0.23.0](#from-version-0220-to-0230)
  - [From version 0.21.0 to 0.22.0](#from-version-0210-to-0220)
  - [From version 0.19.0 to 0.20.0](#from-version-0190-to-0200)
  - [From version 0.18.0 to 0.19.0](#from-version-0180-to-0190)
  - [From version 0.16.0 to 0.17.0](#from-version-0160-to-0170)
  - [From version 0.15.0 to 0.16.0](#from-version-0150-to-0160)
  - [From version 0.13.0 to 0.14.0](#from-version-0130-to-0140)
  - [From version 0.12.0 to 0.13.0](#from-version-0120-to-0130)
  - [From version 0.11.0 to 0.12.0](#from-version-0110-to-0120)
  - [From version 0.10.0 to 0.11.0](#from-version-0100-to-0110)
  - [From version 0.1.0 to 0.2.0](#from-version-010-to-020)

## Version Updates

### From version 0.30.0 to 0.31.0

<a id="titlealert-title-accessories-removed"></a>

#### `TitleAlert`: title row accessories removed

`titleStartAccessory` and `titleEndAccessory` are removed from **`TitleAlert`** and **`TitleAlertPropsShared`** to align with the Figma component, which does not expose inline title accessories.

**What changed:**

| Before (0.30.0)       | After (0.31.0) |
| --------------------- | -------------- |
| `titleStartAccessory` | removed        |
| `titleEndAccessory`   | removed        |

**Migration:**

```tsx
// Before (0.30.0)
import {
  BoxJustifyContent,
  BoxRow,
  Icon,
  IconAlertSeverity,
  IconColor,
  IconName,
  IconSize,
  Text,
  TextColor,
  TextVariant,
  TitleAlert,
} from '@metamask/design-system-react-native';

<TitleAlert
  severity={IconAlertSeverity.Warning}
  title="High price impact"
  titleStartAccessory={
    <Icon
      name={IconName.Ai}
      size={IconSize.Sm}
      color={IconColor.IconAlternative}
    />
  }
/>;

// After (0.31.0)
<TitleAlert severity={IconAlertSeverity.Warning} title="High price impact" />;
```

If you import **`TitleAlertPropsShared`** from **`@metamask/design-system-shared`**, remove the same props from your types. See the [design-system-shared migration guide](../design-system-shared/MIGRATION.md#titlealert-title-accessories-removed).

**Impact:**

- Any call site passing **`titleStartAccessory`** or **`titleEndAccessory`** on **`TitleAlert`** must be updated.
- Custom **`title`** nodes do not receive default **`HeadingLg`** / **`TextDefault`** styling from **`titleProps`** unless you apply **`Text`** props yourself.

### From version 0.29.0 to 0.30.0

<a id="segmentbutton-and-segmentgroup-renamed-to-filterbutton-and-filterbuttongroup"></a>

#### `SegmentButton` and `SegmentGroup` renamed to `FilterButton` and `FilterButtonGroup`

The segmented filter control components are renamed to align with product naming. Props and behavior are unchanged — only export names change.

**What changed:**

| Before (0.29.0)        | After (0.30.0)           |
| ---------------------- | ------------------------ |
| `SegmentButton`        | `FilterButton`           |
| `SegmentButtonVariant` | `FilterButtonVariant`    |
| `SegmentButtonProps`   | `FilterButtonProps`      |
| `SegmentGroup`         | `FilterButtonGroup`      |
| `SegmentGroupProps`    | `FilterButtonGroupProps` |

**Migration:**

```tsx
// Before (0.29.0)
import {
  SegmentButton,
  SegmentButtonVariant,
  SegmentGroup,
} from '@metamask/design-system-react-native';

<SegmentGroup
  value={value}
  onChange={setValue}
  variant={SegmentButtonVariant.Primary}
>
  <SegmentButton value="all" onPress={() => {}}>
    All
  </SegmentButton>
  <SegmentButton value="tokens" onPress={() => {}}>
    Tokens
  </SegmentButton>
</SegmentGroup>;

// After (0.30.0)
import {
  FilterButton,
  FilterButtonVariant,
  FilterButtonGroup,
} from '@metamask/design-system-react-native';

<FilterButtonGroup
  value={value}
  onChange={setValue}
  variant={FilterButtonVariant.Primary}
>
  <FilterButton value="all" onPress={() => {}}>
    All
  </FilterButton>
  <FilterButton value="tokens" onPress={() => {}}>
    Tokens
  </FilterButton>
</FilterButtonGroup>;
```

If you import shared types or context directly from `@metamask/design-system-shared`, apply the same renames there (`FilterButtonPropsShared`, `FilterButtonGroupPropsShared`, `FilterButtonGroupContext`, `FilterButtonGroupContextValue`). See the [design-system-shared migration guide](../design-system-shared/MIGRATION.md#filterbutton-shared-rename).

**Impact:**

- Any import of `SegmentButton`, `SegmentButtonVariant`, `SegmentGroup`, or related prop/context types must be renamed.
- `ButtonFilter` is a separate component (active/inactive filter chip) and is not affected by this rename.

#### `Content` shell accessories removed; row accessories moved to `ListItem`

`Content` is now inner-only (avatar, title/description, value/subvalue, and inline text accessories). Row shell accessories (`startAccessory`, `endAccessory`) live on `ListItem`. Column shell accessories (`topAccessory`, `bottomAccessory`) are removed — compose them manually with `BoxColumn`.

**What changed:**

- `startAccessory` / `endAccessory` removed from `ContentPropsShared` → use `ListItem` instead
- `topAccessory` / `bottomAccessory` removed from `ContentPropsShared` → wrap with `BoxColumn` instead

**Migration:**

`startAccessory` / `endAccessory` — moved to `ListItem`:

```tsx
// Before (0.29.0)
<Content startAccessory={<Icon name={IconName.Token} />} title="Label" />

// After (0.30.0)
<ListItem startAccessory={<Icon name={IconName.Token} />} title="Label" />
```

`topAccessory` / `bottomAccessory` — removed; compose manually:

```tsx
// Before (0.29.0)
<ListItem topAccessory={<BannerAlert />} title="Token" value="100" />

// After (0.30.0)
<BoxColumn topAccessory={<BannerAlert />}>
  <ListItem title="Token" value="100" />
</BoxColumn>
```

**Impact:**

- Any call site passing `startAccessory` or `endAccessory` on `Content` must move those props to `ListItem`.
- Any call site using `topAccessory` or `bottomAccessory` on `Content` or `ListItem` must wrap the row in `BoxColumn` (or an equivalent layout) instead.
- Legacy `Content` shell rows used 16px spacing (`gap={4}`) between accessories and inner content. `ListItem` defaults to `accessoryGap={0}`; pass `accessoryGap={4}` to restore the previous spacing.

### From version 0.28.0 to 0.29.0

#### Severity vocabulary: `Error` renamed to `Danger` across `AvatarIconSeverity`, `IconAlertSeverity`, and `TagSeverity`

The public severity API for `AvatarIcon`, `IconAlert`, and `Tag` now uses `Danger` instead of `Error` for destructive or critical states, and `Neutral` as the canonical name for default-like states.

**What changed:**

- `AvatarIconSeverity.Error` (`'error'`) → `AvatarIconSeverity.Danger` (`'danger'`)
- `IconAlertSeverity.Error` (`'error'`) → `IconAlertSeverity.Danger` (`'danger'`)
- `TagSeverity.Error` (`'error'`) → `TagSeverity.Danger` (`'danger'`)

**Migration:**

```tsx
// Before (0.28.0)
import {
  AvatarIcon,
  AvatarIconSeverity,
  IconAlert,
  IconAlertSeverity,
  Tag,
  TagSeverity,
} from '@metamask/design-system-react-native';

<AvatarIcon iconName={IconName.Warning} severity={AvatarIconSeverity.Error} />
<IconAlert severity={IconAlertSeverity.Error} />
<Tag severity={TagSeverity.Error}>High risk</Tag>

// After (0.29.0)
<AvatarIcon iconName={IconName.Warning} severity={AvatarIconSeverity.Danger} />
<IconAlert severity={IconAlertSeverity.Danger} />
<Tag severity={TagSeverity.Danger}>High risk</Tag>
```

**Impact:**

- Any call site using `.Error` on these three severity const objects must change to `.Danger`. The rendered color is unchanged — `Danger` still maps to the error color tokens.

### From version 0.27.0 to 0.28.0

#### TextArea: flattened to the root `TextInput`

`TextArea` now renders the root `TextInput` directly instead of wrapping it in a separate container with a nested input slot.
This change is scoped to `TextArea`; `TextField` still supports `inputElement` and `inputRef`.

**What changed:**

- **`inputElement`** is removed.
- **`inputProps`** is removed. Pass `TextInput` props directly on `TextArea`.
- **`inputRef`** is removed. Use the component **`ref`** to access the root **`TextInput`**.
- **`testID`**, **`style`**, and **`twClassName`** now apply to the root **`TextInput`**.

**Migration:**

- Move any custom input replacement out of `TextArea` and compose it around the component instead.
- Pass native **`TextInput`** props directly to `TextArea`.
- Update any imperative focus or measurement logic to use the component **`ref`**.

**Impact:**

- Existing call sites that relied on the wrapper `Box`, `inputProps`, or `inputRef` must update to the flattened API.

### From version 0.26.0 to 0.27.0

#### Removed `panGestureHandlerProps` from `BottomSheetDialog` and `BottomSheet`

The `panGestureHandlerProps` prop has been removed from both `BottomSheetDialog` and `BottomSheet`.

This prop was a compatibility shim from the old `react-native-gesture-handler` v1 `PanGestureHandler` JSX component. With the migration to the RNGH v2 `GestureDetector` + `Gesture.Pan()` API, the prop was mapped to individual method calls via an internal `applyPanGestureProps` function — however `simultaneousHandlers` (the only real-world use case) was never wired up and was silently dropped. The prop was also not used anywhere in the MetaMask Mobile or Extension consumer codebases.

**Before (0.26.0):**

```tsx
<BottomSheet
  goBack={goBack}
  panGestureHandlerProps={{
    simultaneousHandlers: scrollViewRef,
  }}
>
  {children}
</BottomSheet>
```

**After (0.27.0):**

```tsx
<BottomSheet goBack={goBack}>{children}</BottomSheet>
```

If you were relying on `simultaneousHandlers` for nested scroll behaviour, this was not functioning correctly in the previous version. First-class support for simultaneous gesture handling will be addressed in a follow-up.

#### HeaderBase and BottomSheetHeader: variant-based title API removed

**What changed:**

- **`HeaderBase`** no longer exposes **`variant`** or **`HeaderBaseVariant`**.
- **`BottomSheetHeader`** no longer exposes **`variant`** or **`BottomSheetHeaderVariant`**.
- **`HeaderBase`** no longer exposes **`titleTestID`**. Use **`textProps.testID`** for the auto-rendered string title path.
- String children now render with the shared centered **`HeadingSm`** title treatment. If you need a custom title layout, pass a custom **`ReactNode`** as **`children`** instead of relying on variants.
- **`BottomSheetHeader`** continues to inherit **`HeaderBase`** root and title props, including **`textProps`**, while still owning its back and close accessories internally through **`onBack`** and **`onClose`**.

**Migration:**

- Remove **`variant`** from **`HeaderBase`** and **`BottomSheetHeader`** call sites.
- Remove imports of **`HeaderBaseVariant`** and **`BottomSheetHeaderVariant`**.
- Replace **`titleTestID="..."`** with **`textProps={{ testID: '...' }}`**.
- If you previously used a variant to change title alignment or layout, pass custom **`children`** instead.

See [HeaderBase Component](#headerbase-component) and [BottomSheetHeader Component](#bottomsheetheader-component) for complete before/after examples and API mappings.

### From version 0.24.0 to 0.25.0

#### BannerBase: `onClose` is now the only close-button behavior API

**What changed:**

- **`closeButtonProps.onPress`** is removed from the public **`BannerBase`** API.
- The close button now renders **only** when **`onClose`** is provided.
- **`closeButtonProps`** is now customization-only for the rendered close **`ButtonIcon`**.

**Migration:**

- Move any close-button behavior from **`closeButtonProps.onPress`** to **`onClose`**.
- Keep **`closeButtonProps`** only for non-behavioral customization such as **`testID`**, accessibility props, and styling hooks.
- If you previously passed only **`closeButtonProps`** to force-render a close button, also provide **`onClose`** now.

**Impact:**

- Existing **`@metamask/design-system-react-native`** consumers that relied on **`closeButtonProps.onPress`** or on rendering a close button without **`onClose`** must update those call sites.

<a id="buttonbase-size-defaults"></a>

#### ButtonBase: let `size` drive label, icons, and spacing

**What changed:**

- **`ButtonBase`** maps each **`ButtonBaseSize`** to a recommended label **`Text`** variant, matching start and end **`Icon`** sizes, and consistent spacing between accessories and the label.

**Recommendation:**

For any product-specific button built on **`ButtonBase`** (wrappers that forward **`textProps`**, **`textClassName`**, **`startIconProps`**, **`endIconProps`**, **`iconClassName`**, **`spinnerProps`**, or layout **`twClassName`**):

- Remove **icon size** overrides on **`startIconProps`**, **`endIconProps`**, and loading **`spinnerProps`** unless a written design exception requires them.
- Remove **label typography overrides** in **`textProps`** / **`textClassName`** so the label follows the mapping for the chosen **`size`**.
- Remove **spacing overrides** (extra gap/margin **`twClassName`** on the root or content row) that only existed to nudge icon–label rhythm; **`ButtonBase`** now owns that layout.

**Migration:**

```tsx
// Before: overrides that duplicate what size already encodes
<ButtonBase
  size={ButtonBaseSize.Md}
  startIconProps={{ name: IconName.Add, size: IconSize.Md }}
  textProps={{ variant: TextVariant.BodyLg }}
  twClassName="gap-4"
>
  Continue
</ButtonBase>

// After: rely on size-driven defaults
<ButtonBase size={ButtonBaseSize.Md} startIconProps={{ name: IconName.Add }}>
  Continue
</ButtonBase>
```

**Impact:**

- Custom **`ButtonBase`** wrappers that hard-coded icon sizes, text variants, or gaps may render slightly differently after removing overrides; visually they should match the current design spec for that **`size`**.

<!-- Backward-compatible anchor for the 0.24.0 changelog entry that shipped with the old placeholder link. -->

<a id="from-version-0230-to-0x0"></a>

### From version 0.23.0 to 0.24.0

#### Toast: tighten the runtime API and align the surface with the shipped design

**What changed:**

- **`toast.show(...)`** is removed. Use **`toast(...)`** as the only show method.
- **`toast.hide()`** is removed. Use **`toast.dismiss()`** as the close method.
- **`hasNoTimeout`** is now optional and defaults to **`false`**. Toasts auto-dismiss unless you explicitly pass **`hasNoTimeout: true`**.
- **`ToastSeverity.Info`** is removed. Supported severities are **`ToastSeverity.Default`**, **`ToastSeverity.Success`**, **`ToastSeverity.Warning`**, and **`ToastSeverity.Danger`**.
- **`iconProps`** is renamed to **`iconAlertProps`** to make it clear the prop is forwarded to the default **`IconAlert`**.
- The close button is now always visible on the Toast surface. Use **`closeButtonProps`** to customize that button, and **`onClose`** only when you need an additional callback after dismissal.

**Migration:**

- Replace every **`toast.show(options)`** call with **`toast(options)`**.
- Replace every **`toast.hide()`** call with **`toast.dismiss()`**.
- Remove **`hasNoTimeout: false`** where you were only spelling out the default behavior. Keep **`hasNoTimeout: true`** only for persistent toasts.
- Replace **`ToastSeverity.Info`** with one of the supported severities. Use **`ToastSeverity.Default`** when you need no built-in leading icon.
- Rename **`iconProps`** to **`iconAlertProps`**.
- If direct-rendered Toast call sites previously assumed the close button could be omitted, update those expectations. The close affordance is now part of the standard surface.

**Before:**

```tsx
toast.show({
  title: 'Saved',
  description: 'Your changes are available everywhere.',
  severity: ToastSeverity.Info,
  hasNoTimeout: false,
  iconProps: {
    testID: 'toast-icon',
  },
});

toast.hide();
```

**After:**

```tsx
toast({
  title: 'Saved',
  description: 'Your changes are available everywhere.',
  severity: ToastSeverity.Default,
  iconAlertProps: {
    testID: 'toast-icon',
  },
});

toast.dismiss();
```

### From version 0.22.0 to 0.23.0

#### Toast: `Toaster` + `toast(...)` replace context-based usage

**What changed:**

- Mount **`<Toaster />`** once at the root, then call **`toast(...)`** or **`toast.dismiss()`** from anywhere, instead of relying on **`ToastContext`**, **`ToastContextWrapper`**, or an app-level service singleton.
- **`ToastContext`**, **`ToastContextWrapper`**, and **`ToastContextParams`** are no longer part of the public **`@metamask/design-system-react-native`** exports.
- **`ToastVariants`** is replaced by **`ToastSeverity`**, including **`ToastSeverity.Default`** for a toast with no leading icon.
- Close button customization now goes through **`closeButtonProps`** instead of the old toast-specific button variant pattern.
- **`customBottomOffset`** is renamed to **`bottomOffset`**.
- Calling **`toast(...)`** or **`toast.dismiss()`** before **`<Toaster />`** mounts now throws a descriptive runtime error instead of silently doing nothing.

**Migration:**

- Mount **`<Toaster />`** exactly once near the root of the app.
- Replace any **`useContext(ToastContext)`**, **`ToastContextWrapper`**, or app-level **`ToastService`** usage with **`toast(...)`** and **`toast.dismiss()`**.
- Replace **`ToastVariants`** usages with **`ToastSeverity`** in all call sites. Use **`ToastSeverity.Default`** when you want an explicit no-icon severity.
- Move close button customization to **`closeButtonProps`**.
- Rename **`customBottomOffset`** to **`bottomOffset`**.

See [Toast Component](#toast-component) for complete before/after examples and API mappings.

**Impact:**

- Existing **`@metamask/design-system-react-native`** consumers using the old context-based Toast flow must update imports, root mounting, and toast invocation patterns.
- Existing call sites that already use the forwarded **`ToasterRef`** methods for isolated cases can keep doing so, but app-level usage should move to the static API.

#### Input: shared controlled contract and readonly naming alignment

**What changed:**

- **`Input`** now follows the same shared cross-platform prop contract in **`@metamask/design-system-react-native`** and **`@metamask/design-system-react`** for **`value`**, **`textVariant`**, **`isDisabled`**, **`isReadOnly`**, and **`isStateStylesDisabled`**.
- **`Input`** is now treated as controlled-only on both platforms. On React web, uncontrolled usage via **`defaultValue`** is no longer part of the public type contract.
- The old **`isReadonly`** prop name is replaced by **`isReadOnly`**.
- **`isStateStylesDisabled`** is the shared prop name for suppressing the inner input's own focus and disabled styling when a wrapper such as **`TextField`** owns those states.

**Migration:**

Replace **`isReadonly`** with **`isReadOnly`** on **`Input`** call sites and wrappers.

For shared wrappers that target both platforms, align to the cross-platform **`Input`** contract: controlled **`value: string`**, **`isReadOnly`**, and **`isStateStylesDisabled`**.

If your React web usage relied on uncontrolled **`Input`** behavior, move that state into the caller and pass a controlled **`value`** instead.

#### ButtonBase: loading wrappers and overlay testID

**What changed:**

- **`ButtonBase`** accepts **`loadingWrapperProps`** and **`contentWrapperProps`** to customize the loading overlay wrapper (**`Box`**) and the label row (**`BoxRow`**).
- **BREAKING:** **`ButtonBase`** no longer sets a default **`testID`** on the loading overlay wrapper. If tests or automation targeted the previous **`spinner-container`** id, pass **`loadingWrapperProps={{ testID: 'spinner-container' }}`** (or your own id) on **`ButtonBase`** or on a wrapper that forwards these props (for example, **`ButtonHero`**).

**Migration:**

- Add **`loadingWrapperProps`** / **`contentWrapperProps`** only when you need to pass layout or test hooks to those inner wrappers.
- Restore a stable overlay **`testID`** for tests: **`loadingWrapperProps={{ testID: 'spinner-container' }}`** if you depended on the old default.

### From version 0.21.0 to 0.22.0

#### TextField and TextFieldSearch: layered props (`inputProps` and root `Box`)

**What changed:**

- **`TextField`** is a root **`Box`** (a styled **`View`**) with an inner **`Input`**. Props that belong on the native text control must be passed in **`inputProps`** (for example `keyboardType`, `secureTextEntry`, `returnKeyType`, `autoCapitalize`, `accessibilityLabel`, `accessibilityState`).
- **`placeholder`**, **`isReadOnly`**, **`onFocus`**, and **`onBlur`** are owned at the **`TextField` / `TextFieldSearch` top level** and forwarded to the inner `Input`. Do not pass them only through **`inputProps`**. The prop **`isReadonly`** was renamed to **`isReadOnly`**.
- **`placeholderTextColor`** is not supported on the public **`TextField`** API; the inner **`Input`** sets placeholder color from the theme.
- Remaining top-level props on **`TextField`** are **`BoxProps`** (layout and **`View`** props from React Native), except for keys reserved by **`TextField`** (see the exported type **`TextFieldProps`** in **`@metamask/design-system-react-native`**). **`hitSlop`**, **`onPress`**, and other **`Pressable`**-only APIs are not supported on the root; tap-to-focus on the chrome is removed. Users focus by tapping the **`Input`** / **`TextInput`**.
- **`TextFieldSearchProps`** extends **`TextFieldProps`**; the same layering applies. **`onPressClearButton`**, **`clearButtonProps`**, **`startAccessory`**, **`endAccessory`**, and **`style`** behavior are unchanged.
- **`ref`** on **`TextField`** / **`TextFieldSearch`** refers to the **root** **`Box`** (**`View`**). Use **`inputRef`** for the inner **`TextInput`** (for example **`focus()`** / **`blur()`**).
- Top-level **`testID`** applies to the **wrapper** **`Box`**. To query the editable **`TextInput`** in E2E tests, use **`inputProps.testID`** (or accessibility / placeholder queries).

**Migration:**

Move inner `TextInput` props from the root into **`inputProps`**. Keep **`placeholder`**, **`onFocus`**, and **`onBlur`** on the component root when you use them.

Replace **`isReadonly`** with **`isReadOnly`** on **`TextField`**, **`TextFieldSearch`**, and **`Input`** in **`@metamask/design-system-react-native`**.

If you passed **`ref`** expecting the **`TextInput`**, switch imperative usage to **`inputRef`** and use **`ref`** only when you need the outer container (layout / measurement).

```tsx
// Before (0.21.0) — native TextInput props on TextField
<TextField
  value={query}
  onChangeText={setQuery}
  placeholder="Search"
  keyboardType="default"
  secureTextEntry
  onFocus={handleFocus}
/>

// After (0.22.0)
<TextField
  value={query}
  onChangeText={setQuery}
  placeholder="Search"
  onFocus={handleFocus}
  inputProps={{
    keyboardType: 'default',
    secureTextEntry: true,
  }}
/>
```

If you relied on **`hitSlop`** or a larger tap target on the field chrome, wrap **`TextField`** in your own **`Pressable`** (or enlarge the inner input via **`inputProps`**) at the app level.

Remove **`placeholderTextColor`** from **`TextField`** call sites; rely on theme behavior from **`Input`**.

**Impact:**

- Any **`TextField`** or **`TextFieldSearch`** usage that spread or passed **`TextInput`** props on the root must move those keys into **`inputProps`**, except for the props **`TextField`** owns (**`value`**, **`onChangeText`**, **`placeholder`**, **`isReadOnly`**, **`onFocus`**, **`onBlur`**, **`isDisabled`**, **`autoFocus`**, **`isError`**, accessories, **`inputElement`**, **`inputRef`**, **`testID`**, **`style`**, **`twClassName`**) and valid **`BoxProps`** / **`View`** props you pass at the top level.
- Call sites that passed **`Pressable`**-only props (**`hitSlop`**, root **`onPress`**, root **`disabled`**) must be updated: the root is no longer a **`Pressable`**.
- Type-only consumers can extend or intersect **`TextFieldProps`** from **`@metamask/design-system-react-native`** for typed wrappers or form helpers. Derive the inner input prop bag with **`TextFieldProps['inputProps']`** when needed.

#### Input: theme `placeholderTextColor` always wins

**What changed:**

**`Input`** used to pass **`placeholderTextColor`** on the native **`TextInput`** **before** **`{...props}`**, so a **`placeholderTextColor`** included in **`props`** could override the theme-derived color. **`Input`** now passes **`placeholderTextColor`** **after** **`{...props}`**, so the **theme token for placeholder text is always applied** and **is not overridden** by caller props.

**Impact:**

- Passing **`placeholderTextColor`** on **`Input`** has **no effect** on the rendered placeholder tint; remove dead props if you had any.
- **`TextField`** already omits **`placeholderTextColor`** from its public API and forwards inner **`Input`** behavior only.

### From version 0.19.0 to 0.20.0

#### Box: Enum exports now use const objects and string unions

**What Changed:**

`BoxFlexDirection`, `BoxFlexWrap`, `BoxAlignItems`, `BoxJustifyContent`, `BoxBackgroundColor`, `BoxBorderColor`, `BoxSpacing`, and `BoxBorderWidth` now follow the ADR-0003 const-object + string-union pattern instead of local enums.

**Migration:**

```tsx
// Before (0.19.0)
import { BoxBackgroundColor } from '@metamask/design-system-react-native';

// After (0.20.0)
import { BoxBackgroundColor } from '@metamask/design-system-react-native';
```

#### Box: Removed stale `-alternative` color tokens

**What Changed:**

The following `BoxBackgroundColor` and `BoxBorderColor` entries have been removed. These tokens were removed from `@metamask/design-tokens` in v4.0.0 but were incorrectly carried over into the Box const objects:

| Removed Entry                           | Replacement                         |
| --------------------------------------- | ----------------------------------- |
| `BoxBackgroundColor.WarningAlternative` | `BoxBackgroundColor.WarningDefault` |
| `BoxBackgroundColor.SuccessAlternative` | `BoxBackgroundColor.SuccessDefault` |
| `BoxBorderColor.WarningAlternative`     | `BoxBorderColor.WarningDefault`     |
| `BoxBorderColor.SuccessAlternative`     | `BoxBorderColor.SuccessDefault`     |
| `BoxBorderColor.InfoAlternative`        | `BoxBorderColor.InfoDefault`        |

**Migration:**

These tokens had no backing CSS custom property, so any usage was already producing no visible style. Replace with `-default` or `-muted` as appropriate:

```tsx
// Before (0.19.0)
<Box backgroundColor={BoxBackgroundColor.WarningAlternative} />
<Box backgroundColor={BoxBackgroundColor.SuccessAlternative} />
<Box borderColor={BoxBorderColor.WarningAlternative} />
<Box borderColor={BoxBorderColor.SuccessAlternative} />
<Box borderColor={BoxBorderColor.InfoAlternative} />

// After (0.20.0)
<Box backgroundColor={BoxBackgroundColor.WarningDefault} />
<Box backgroundColor={BoxBackgroundColor.SuccessDefault} />
<Box borderColor={BoxBorderColor.WarningDefault} />
<Box borderColor={BoxBorderColor.SuccessDefault} />
<Box borderColor={BoxBorderColor.InfoDefault} />
```

**Impact:**

- Any reference to the removed entries will produce a TypeScript error after upgrading.

---

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

#### Box: Enum exports now use const objects and string unions

`BoxFlexDirection`, `BoxFlexWrap`, `BoxAlignItems`, `BoxJustifyContent`, `BoxBackgroundColor`, `BoxBorderColor`, `BoxSpacing`, and `BoxBorderWidth` now use const-object + string-union types instead of enums.

```tsx
// Before (0.18.0)
import { BoxBackgroundColor } from '@metamask/design-system-react-native';

// After (0.19.0)
import { BoxBackgroundColor } from '@metamask/design-system-react-native';
```

#### Box: Removed stale `-alternative` color tokens

The following `BoxBackgroundColor` and `BoxBorderColor` entries have been removed. These tokens were removed from `@metamask/design-tokens` in v4.0.0 but were incorrectly carried over into the Box const objects:

| Removed Entry                           | Replacement                         |
| --------------------------------------- | ----------------------------------- |
| `BoxBackgroundColor.WarningAlternative` | `BoxBackgroundColor.WarningDefault` |
| `BoxBackgroundColor.SuccessAlternative` | `BoxBackgroundColor.SuccessDefault` |
| `BoxBorderColor.WarningAlternative`     | `BoxBorderColor.WarningDefault`     |
| `BoxBorderColor.SuccessAlternative`     | `BoxBorderColor.SuccessDefault`     |
| `BoxBorderColor.InfoAlternative`        | `BoxBorderColor.InfoDefault`        |

These tokens had no backing CSS custom property, so any usage was already producing no visible style. Replace with `-default` or `-muted` as appropriate.

---

### From version 0.16.0 to 0.17.0

#### Text: Typography enum exports now use const objects and string unions

`FontWeight`, `FontStyle`, `FontFamily`, `TextVariant`, and `TextColor` now follow the ADR-0003 const-object + string-union pattern instead of enums.

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
- `KeyValueRowVariant` now follows the ADR-0003 / ADR-0004 const-object + string-union pattern; React Native–specific props remain on `KeyValueRowProps` in this package.

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

- In **MetaMask Mobile**, **MetaMask extension**, and any other packages that consume `KeyValueRow`, search for usages and migrate every callsite away from `field` / `value` objects to the new props.
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

##### Removed Prop: `variant`

The DS `BottomSheetHeader` no longer supports `variant` or `BottomSheetHeaderVariant`. It always uses the shared `HeaderBase` title path. If you previously used a variant to change title layout or alignment, pass custom header content as `children` instead.

| Mobile Pattern                                   | Design System Migration                             |
| ------------------------------------------------ | --------------------------------------------------- |
| `variant={BottomSheetHeaderVariant.Compact}`     | Remove — default DS behavior                        |
| `variant={BottomSheetHeaderVariant.Display}`     | Remove — compose custom title content as `children` |
| `import { BottomSheetHeaderVariant } from '...'` | Remove — enum no longer exists                      |

##### String title testing: `titleTestID` → `textProps.testID`

The DS `BottomSheetHeader` inherits `textProps` from `HeaderBase`. When `children` is a string, use `textProps={{ testID: ... }}` to target the rendered title element.

| Mobile / Older Pattern          | Design System Migration                     |
| ------------------------------- | ------------------------------------------- |
| `titleTestID="my-header-title"` | `textProps={{ testID: 'my-header-title' }}` |

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

The DS `BottomSheetHeader` supports the same back/close convenience props as mobile (`onBack`, `backButtonProps`, `onClose`, `closeButtonProps`) and still inherits `HeaderBase` root props such as `testID`, `style`, `twClassName`, and `textProps`. It does not support `endAccessory`, `startAccessory`, or `variant`, and string-title testing should use `textProps.testID` instead of `titleTestID`.

---

### BottomSheetFooter Component

The `BottomSheetFooter` component has significant breaking changes. The old mobile version accepted a generic `buttonPropsArray` (an array of full `ButtonProps` objects including `variant`). The DS version uses a structured `primaryButtonProps` / `secondaryButtonProps` API instead, where `variant` is set automatically.

Source references (for API diffing):

- Legacy: [`app/component-library/components/BottomSheets/BottomSheetFooter/BottomSheetFooter.tsx`](https://github.com/MetaMask/metamask-mobile/blob/main/app/component-library/components/BottomSheets/BottomSheetFooter/BottomSheetFooter.tsx) and [`BottomSheetFooter.types.ts`](https://github.com/MetaMask/metamask-mobile/blob/main/app/component-library/components/BottomSheets/BottomSheetFooter/BottomSheetFooter.types.ts)
- MMDS: [`packages/design-system-react-native/src/components/BottomSheetFooter/BottomSheetFooter.tsx`](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react-native/src/components/BottomSheetFooter/BottomSheetFooter.tsx) and [`BottomSheetFooter.types.ts`](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react-native/src/components/BottomSheetFooter/BottomSheetFooter.types.ts)

On web, the extension modal footer migration lives under [ModalFooter Component](../design-system-react/MIGRATION.md#modalfooter-component); that API was converged onto the same primary/secondary slot shape as this footer.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                                       | Design System Migration                                                    |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `import BottomSheetFooter from '.../component-library/components/BottomSheets/BottomSheetFooter'`    | `import { BottomSheetFooter } from '@metamask/design-system-react-native'` |
| `import { ButtonsAlignment } from '.../component-library/components/BottomSheets/BottomSheetFooter'` | `import { ButtonsAlignment } from '@metamask/design-system-react-native'`  |

##### `buttonPropsArray` → `primaryButtonProps` / `secondaryButtonProps`

The old `buttonPropsArray: ButtonProps[]` is replaced by two named props. The `variant` field is no longer accepted — the DS footer always renders the primary button as `ButtonVariant.Primary` and the secondary button as `ButtonVariant.Secondary`.

| Legacy mobile API                               | MMDS API                                                 | Change type | Notes                                                                                                                                                                        |
| ----------------------------------------------- | -------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buttonPropsArray` (required)                   | `primaryButtonProps` / `secondaryButtonProps` (optional) | reshaped    | At least one slot should be provided when you need actions; see empty footer behavior below.                                                                                 |
| Index `0` in the array                          | `secondaryButtonProps`                                   | renamed     | Cancel / secondary action — rendered first (left / top).                                                                                                                     |
| Index `1` (when two buttons)                    | `primaryButtonProps`                                     | renamed     | Confirm / primary action — rendered second (right / bottom).                                                                                                                 |
| Single-element array                            | Typically `primaryButtonProps` only                      | convention  | If the legacy array had one button, map it to the slot that matches its `variant` (`Primary` → `primaryButtonProps`, `Secondary` → `secondaryButtonProps`).                  |
| `variant` on each entry                         | removed                                                  | removed     | Always `Primary` / `Secondary` per slot; types use `Omit<ButtonProps, 'variant'>`.                                                                                           |
| `label`                                         | `children`                                               | renamed     | DS `Button` uses `children` for the visible label.                                                                                                                           |
| `onPress`                                       | `onPress`                                                | unchanged   | Still the native press handler on each button bag.                                                                                                                           |
| `style` on footer                               | `style`, `twClassName`                                   | extended    | `twClassName` is new for Tailwind utility overrides on the footer container.                                                                                                 |
| Renders `View` when `buttonPropsArray` is empty | `null` when both slots omitted                           | behavior    | Legacy still mounted an empty footer `View` (with default `testID`). MMDS returns `null` — wrap with your own `View` if you need a stable layout or test id with no buttons. |

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

##### `ButtonsAlignment` — Same enum within React Native

Between legacy mobile and `@metamask/design-system-react-native`, `ButtonsAlignment.Horizontal` / `ButtonsAlignment.Vertical` keep the same enum values (`'Horizontal'` | `'Vertical'`). Only the import path changes:

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

On web, `@metamask/design-system-react` **`ModalFooter`** uses lowercase alignment literals (`'horizontal'` | `'vertical'`). Do not copy raw alignment strings from Extension into Mobile or vice versa — import `ButtonsAlignment` from the package you are compiling against.

#### Blocked Patterns

If the `buttonPropsArray` contains **more than two** button entries, or if buttons need variants other than Primary/Secondary (e.g. `ButtonVariants.Link`), the DS `BottomSheetFooter` cannot be used as a drop-in replacement. Keep the old CL import for those files until the DS component adds broader support.

#### API Differences

The DS `BottomSheetFooter` adds `twClassName` for Tailwind utility class overrides. The `style` prop (from `ViewProps`) is still supported and behaves the same.

##### Button prop renames inside each slot

Mobile legacy `Button` and MMDS `Button` already share names like `isDanger` on primary/secondary variants. When migrating footers, apply the same [Button Component](#button-component) renames (`isDisabled`, `isLoading`, etc.) inside `primaryButtonProps` / `secondaryButtonProps` if your old `buttonPropsArray` entries used older prop names.

##### Extension / web modal footer (`ModalFooter`)

MetaMask Extension’s `ModalFooter` migrated to the same slot-based API in `@metamask/design-system-react`; event handlers use `onClick` there instead of `onPress`. See [ModalFooter Component](../design-system-react/MIGRATION.md#modalfooter-component).

---

### HeaderBase Component

The `HeaderBase` component is a flexible header with optional start/end accessories and a centered title. Migration is still close to a drop-in import swap, but the DS version removes the old variant-based title API and the dedicated `titleTestID` prop.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                    | Design System Migration                                                       |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `import HeaderBase from '.../component-library/components/HeaderBase'`            | `import { HeaderBase } from '@metamask/design-system-react-native'`           |
| `import { HeaderBaseVariant } from '.../component-library/components/HeaderBase'` | Remove — enum no longer exists                                                |
| `import type { HeaderBaseProps } from '.../HeaderBase/HeaderBase.types'`          | `import type { HeaderBaseProps } from '@metamask/design-system-react-native'` |

Note: The legacy component uses a **default export**; the design system uses a **named export**.

##### Removed Exports: `HEADERBASE_TEST_ID` / `HEADERBASE_TITLE_TEST_ID`

The legacy component exported two test-ID constants from `HeaderBase.constants`:

- `HEADERBASE_TEST_ID = 'header'` — applied as a default `testID` on the container
- `HEADERBASE_TITLE_TEST_ID = 'header-title'` — applied to the inner title `Text` when `children` is a string

The design system removes both constants. Test IDs are now explicit per call site.

| Mobile Pattern                                                        | Design System Migration                                      |
| --------------------------------------------------------------------- | ------------------------------------------------------------ |
| `import { HEADERBASE_TEST_ID } from '.../HeaderBase.constants'`       | Remove — pass `testID="..."` explicitly on `HeaderBase`      |
| `import { HEADERBASE_TITLE_TEST_ID } from '.../HeaderBase.constants'` | Remove — use `textProps={{ testID: '...' }}` instead         |
| Querying by the default `'header'` container id                       | Pass an explicit `testID` and query by that value            |
| Querying by `'header-title'` in tests                                 | Pass `textProps={{ testID: '...' }}` and query by that value |

##### Default Container `testID` Removed

The legacy component set `testID = HEADERBASE_TEST_ID` (`'header'`) by default on the container `View`. The design system no longer applies any default — `testID` comes directly from `ViewProps` and is only present when you pass it.

| Mobile Pattern (implicit)                                          | Design System Migration                                |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| `<HeaderBase>Title</HeaderBase>` — rendered with `testID="header"` | Pass `testID="..."` explicitly if any tests rely on it |

##### Removed Prop: `titleTestID`

The DS `HeaderBase` no longer exposes `titleTestID`. When `children` is a string, target the rendered title element with `textProps={{ testID: '...' }}` instead.

```tsx
// Before — queried by the constant
getByTestId(HEADERBASE_TITLE_TEST_ID);

// After — caller provides the id through textProps
<HeaderBase textProps={{ testID: 'update-needed-title' }}>{title}</HeaderBase>;
getByTestId('update-needed-title');
```

##### Removed Prop: `variant`

The DS `HeaderBase` no longer exposes `variant` or `HeaderBaseVariant`. String children now render through a single centered title path using the shared `HeadingSm` text treatment.

If you previously relied on variants to change title layout or alignment, pass custom title content as `children` instead of using the removed enum.

| Mobile Pattern                            | Design System Migration                             |
| ----------------------------------------- | --------------------------------------------------- |
| `variant={HeaderBaseVariant.Compact}`     | Remove — default DS behavior                        |
| `variant={HeaderBaseVariant.Display}`     | Remove — compose custom title content as `children` |
| `import { HeaderBaseVariant } from '...'` | Remove — enum no longer exists                      |

##### Title rendering and accessory precedence

The DS component keeps the same core escape hatches, but there are a few important behavior notes:

- `children` — pass a string for the standard centered title, or a custom `ReactNode` for a fully custom title layout
- `startAccessory` / `endAccessory` — custom `ReactNode` slots (take priority over the `*ButtonIconProps` convenience props)
- `startButtonIconProps: ButtonIconProps` — render a `ButtonIcon` at the start (default size `ButtonIconSize.Md`)
- `endButtonIconProps: ButtonIconProps[]` — render multiple `ButtonIcon`s at the end, in reverse order, so the first item appears rightmost (default size `ButtonIconSize.Md` each)
- `includesTopInset` — adds the `react-native-safe-area-context` top inset as a top margin (default `false`)
- `startAccessoryWrapperProps` / `endAccessoryWrapperProps` — `ViewProps` forwarded to the accessory wrappers
- `textProps` — forwarded to the auto-rendered title text when `children` is a string
- `twClassName` — Tailwind classes merged with the container defaults
- `style` — RN style applied to the container
- All `ViewProps` (including `testID`, `accessibilityLabel`)

#### Migration Examples

##### Simple title

Before (Mobile):

```tsx
import HeaderBase from '../../../component-library/components/HeaderBase';

<HeaderBase>Update needed</HeaderBase>;
```

After (Design System):

```tsx
import { HeaderBase } from '@metamask/design-system-react-native';

<HeaderBase>Update needed</HeaderBase>;
```

##### Header with close button and test IDs

Before (Mobile):

```tsx
import HeaderBase from '../../../../../../component-library/components/HeaderBase';
import {
  HEADERBASE_TEST_ID,
  HEADERBASE_TITLE_TEST_ID,
} from '../../../../../../component-library/components/HeaderBase/HeaderBase.constants';
import { IconName, IconColor } from '@metamask/design-system-react-native';

<HeaderBase
  endButtonIconProps={[
    {
      iconName: IconName.Close,
      iconProps: { color: IconColor.IconDefault },
      onPress: handleClose,
    },
  ]}
>
  Account details
</HeaderBase>;

// Test
getByTestId(HEADERBASE_TEST_ID);
getByTestId(HEADERBASE_TITLE_TEST_ID);
```

After (Design System):

```tsx
import {
  HeaderBase,
  IconName,
  IconColor,
} from '@metamask/design-system-react-native';

<HeaderBase
  testID="account-details-header"
  textProps={{ testID: 'account-details-title' }}
  endButtonIconProps={[
    {
      iconName: IconName.Close,
      iconProps: { color: IconColor.IconDefault },
      onPress: handleClose,
    },
  ]}
>
  Account details
</HeaderBase>;

// Test
getByTestId('account-details-header');
getByTestId('account-details-title');
```

##### Custom title content instead of `variant`

Before (Mobile):

```tsx
import HeaderBase, {
  HeaderBaseVariant,
} from '../../../component-library/components/HeaderBase';
import Text from '../../../component-library/components/Texts/Text';
import { TextVariant } from '../../../component-library/components/Texts/Text';

<HeaderBase variant={HeaderBaseVariant.Display}>
  <Text variant={TextVariant.HeadingMD}>Wallet</Text>
</HeaderBase>;
```

After (Design System):

```tsx
import {
  HeaderBase,
  Box,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';

<HeaderBase>
  <Box twClassName="w-full items-start">
    <Text variant={TextVariant.HeadingSm}>Wallet</Text>
    <Text variant={TextVariant.BodySm}>Subtitle</Text>
  </Box>
</HeaderBase>;
```

#### API Differences

- The default container `testID="header"` is gone — pass `testID` explicitly if any tests rely on it
- The `HEADERBASE_TITLE_TEST_ID` constant is gone — use `textProps.testID` to tag the auto-rendered title text
- The `variant` prop and `HeaderBaseVariant` enum are gone — custom title layouts should be passed as custom `children`
- `startAccessory` / `endAccessory` override the shorthand `startButtonIconProps` / `endButtonIconProps` paths when both are provided
- `endButtonIconProps` renders in reverse order so the first item appears rightmost

---

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

##### Severity Alignment

The public severity APIs now use `Danger` instead of `Error` for destructive
or critical states, and `Neutral` instead of any default-like severity. Internal
color token names are unchanged, so `Danger` variants may still map to
`ErrorDefault` or `ErrorMuted` tokens.

| Before                                | After                                   | Notes                        |
| ------------------------------------- | --------------------------------------- | ---------------------------- |
| `IconAlertSeverity.Error` (`error`)   | `IconAlertSeverity.Danger` (`danger`)   | renamed public API value     |
| `AvatarIconSeverity.Error` (`error`)  | `AvatarIconSeverity.Danger` (`danger`)  | renamed public API value     |
| `TagSeverity.Error` (`error`)         | `TagSeverity.Danger` (`danger`)         | renamed public API value     |
| Any legacy default-like severity name | `Neutral` (`neutral`) where appropriate | canonical neutral vocabulary |

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

| Legacy Mobile API           | MMDS API              |
| --------------------------- | --------------------- |
| `actionButtonProps.onPress` | `actionButtonOnPress` |
| `actionButtonProps.label`   | `actionButtonLabel`   |
| `closeButtonProps.onPress`  | **`onClose`**         |

##### Type and Callback Signature Changes

| Legacy Mobile API                                       | MMDS API                                                                               | Notes                                                                        |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `actionButtonProps?: ButtonProps`                       | `actionButtonProps?: Omit<Partial<ButtonProps>, 'children' \| 'onPress' \| 'variant'>` | MMDS prevents setting action handler and variant through `actionButtonProps` |
| `actionButtonProps` controls rendering of action button | `actionButtonOnPress` controls rendering of action button                              | Action button is shown only when `actionButtonOnPress` is provided           |
| `title?: string \| React.ReactNode`                     | `title?: ReactNode`                                                                    | Equivalent content support                                                   |
| `description?: string \| React.ReactNode`               | `description?: ReactNode`                                                              | Equivalent content support                                                   |
| `closeButtonProps?: ButtonIconProps`                    | `closeButtonProps?: Omit<Partial<ButtonIconProps>, 'iconName' \| 'onPress'>`           | `iconName` remains fixed to close icon; use `onClose` for behavior           |

##### Default and Behavior Changes

| Legacy Mobile Behavior                                                   | MMDS Behavior                                                                                                      |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Action button shown when `actionButtonProps` exists                      | Action button shown when `actionButtonOnPress` exists                                                              |
| Action button defaults to `size={ButtonSize.Auto}`                       | Action button defaults to `size={ButtonSize.Md}`                                                                   |
| Close button press fallback uses `noop` when callbacks are missing       | Close button is rendered only when `onClose` is provided                                                           |
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

### BadgeCount Component

MetaMask Mobile does not ship a standalone `BadgeCount` under `app/component-library` (no `BadgeCount` folder on `main`). Use `@metamask/design-system-react-native` **BadgeCount** for numeric overlays (often inside **BadgeWrapper**).

Shared props match `@metamask/design-system-shared`: `count` (required), optional `max` (default `99`), optional `size` (`BadgeCountSize.Md` | `BadgeCountSize.Lg`, default `Md`).

#### Platform props (React Native)

| Prop          | Notes                                      |
| ------------- | ------------------------------------------ |
| `textProps`   | Optional. Passed to inner `Text`.          |
| `twClassName` | Optional. Tailwind / twrnc overrides.      |
| `style`       | Optional. React Native styles on the root. |

#### Example (Design System)

```tsx
import {
  BadgeCount,
  BadgeCountSize,
} from '@metamask/design-system-react-native';

<BadgeCount count={5} max={99} size={BadgeCountSize.Md} />;
```

### BadgeIcon Component

There is no separate legacy **BadgeIcon** component file in the mobile component-library. The closest legacy surface is the **`Badge`** composite’s `BadgeVariant.NotificationsKinds` branch (see [Deprecated aggregate `Badge` component](#deprecated-aggregate-badge-component)), which maps to MMDS **BadgeIcon** (`iconName`).

| Prop       | Type       | Notes     |
| ---------- | ---------- | --------- |
| `iconName` | `IconName` | Required. |

#### Example (Design System)

```tsx
import { BadgeIcon, IconName } from '@metamask/design-system-react-native';

<BadgeIcon iconName={IconName.FullCircle} />;
```

### BadgeNetwork Component

Legacy **BadgeNetwork** lives under `Badge/variants/BadgeNetwork` and extends **AvatarNetwork** props plus optional `isScaled` (default `true`). MMDS **BadgeNetwork** wraps **AvatarNetwork** with fixed `size={AvatarNetworkSize.Xs}` and `hasBorder` — callers must **not** pass `size` or `shape` on `BadgeNetwork`.

#### Mapping

| Legacy mobile prop                                                                   | MMDS `BadgeNetwork`                                                                                                               |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `name`, `fallbackText`, `src`, other `AvatarNetwork` props (except `size` / `shape`) | Same shared semantics; `size` / `shape` are owned by the wrapper.                                                                 |
| `isScaled`                                                                           | **Removed** from MMDS `BadgeNetwork`. Handle scaling outside or via `AvatarNetwork` if you need a non-badge-sized network avatar. |

#### Before (Mobile)

```tsx
import BadgeNetwork from '../../../component-library/components/Badges/Badge/variants/BadgeNetwork';

<BadgeNetwork variant={BadgeVariant.Network} src={uri} name="Ethereum" />;
```

#### After (Design System)

```tsx
import { BadgeNetwork } from '@metamask/design-system-react-native';

<BadgeNetwork src={uri} name="Ethereum" />;
```

### BadgeStatus Component

Legacy **BadgeStatus** (`Badge/variants/BadgeStatus`) used `BadgeStatusState` (`Active` / `Inactive`), optional `state`, and optional `borderColor`. MMDS **BadgeStatus** uses a richer **`status`** union (`BadgeStatusStatus`), optional **`hasBorder`** (default `true`), and **`size`**.

#### Status mapping

| Legacy `BadgeStatusState` | MMDS `BadgeStatusStatus`                    | Notes                                                  |
| ------------------------- | ------------------------------------------- | ------------------------------------------------------ |
| `Active` (`'Active'`)     | `BadgeStatusStatus.Active` (`'active'`)     | String value and semantics differ — update call sites. |
| `Inactive` (`'Inactive'`) | `BadgeStatusStatus.Inactive` (`'inactive'`) |                                                        |

#### New / different statuses in MMDS

MMDS adds `Disconnected`, `New`, and `Attention` — use these for parity with design specs instead of overloading `Inactive`.

#### Removed / changed props

| Legacy mobile              | MMDS                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `state?: BadgeStatusState` | **`status`** (required): `BadgeStatusStatus`                                                                                    |
| `borderColor`              | Not on shared API; use **`hasBorder`** (boolean) or stylers (`twClassName` / `className` on web) as supported by the component. |

#### Before (Mobile)

```tsx
import BadgeStatus from '../../../component-library/components/Badges/Badge/variants/BadgeStatus';
import { BadgeStatusState } from '../../../component-library/components/Badges/Badge/variants/BadgeStatus/BadgeStatus.types';

<BadgeStatus variant={BadgeVariant.Status} state={BadgeStatusState.Active} />;
```

#### After (Design System)

```tsx
import {
  BadgeStatus,
  BadgeStatusStatus,
} from '@metamask/design-system-react-native';

<BadgeStatus status={BadgeStatusStatus.Active} />;
```

### BadgeWrapper Component

Legacy **BadgeWrapper** lives at `app/component-library/components/Badges/BadgeWrapper`. MMDS aligns names with `@metamask/design-system-shared` but changes prop names, splits preset vs custom position, and renames the badge slot.

#### Enum and value mapping

| Legacy `BadgeAnchorElementShape` | MMDS `BadgeWrapperPositionAnchorShape` |
| -------------------------------- | -------------------------------------- |
| `Rectangular` (`'Rectangular'`)  | `Rectangular` (`'rectangular'`)        |
| `Circular` (`'Circular'`)        | `Circular` (`'circular'`)              |

| Legacy `BadgePosition` | MMDS `BadgeWrapperPosition`                     |
| ---------------------- | ----------------------------------------------- |
| `TopRight`             | `BadgeWrapperPosition.TopRight` (`'top-right'`) |
| `BottomRight`          | `BadgeWrapperPosition.BottomRight`              |
| `BottomLeft`           | `BadgeWrapperPosition.BottomLeft`               |
| `TopLeft`              | `BadgeWrapperPosition.TopLeft`                  |

#### Prop renames

| Legacy mobile                                                                 | MMDS                   |
| ----------------------------------------------------------------------------- | ---------------------- |
| `anchorElementShape`                                                          | `positionAnchorShape`  |
| `badgeElement`                                                                | `badge` (**required**) |
| `badgePosition` when it is a **preset enum**                                  | `position`             |
| `badgePosition` when it is a **custom object** `{ top, right, bottom, left }` | `customPosition`       |

#### Default changes

| Behavior        | Legacy default                     | MMDS default                                                                     |
| --------------- | ---------------------------------- | -------------------------------------------------------------------------------- |
| Anchor shape    | `BadgeAnchorElementShape.Circular` | `BadgeWrapperPositionAnchorShape.Circular` (aligned)                             |
| Preset position | `BadgePosition.TopRight`           | **`BadgeWrapperPosition.BottomRight`** — verify visuals after migrating.         |
| Offset tuning   | Encoded in legacy layout           | Use **`positionXOffset`** / **`positionYOffset`** (default `0`) with `position`. |

#### Before (Mobile)

```tsx
import { View } from 'react-native';
import BadgeWrapper from '../../../component-library/components/Badges/BadgeWrapper';
import {
  BadgeAnchorElementShape,
  BadgePosition,
} from '../../../component-library/components/Badges/BadgeWrapper/BadgeWrapper.types';

<BadgeWrapper
  anchorElementShape={BadgeAnchorElementShape.Circular}
  badgePosition={BadgePosition.TopRight}
  badgeElement={<BadgeCount count={3} />}
>
  <View />
</BadgeWrapper>;
```

#### After (Design System)

```tsx
import { View } from 'react-native';
import {
  BadgeWrapper,
  BadgeWrapperPosition,
  BadgeWrapperPositionAnchorShape,
  BadgeCount,
} from '@metamask/design-system-react-native';

<BadgeWrapper
  positionAnchorShape={BadgeWrapperPositionAnchorShape.Circular}
  position={BadgeWrapperPosition.TopRight}
  badge={<BadgeCount count={3} />}
>
  <View />
</BadgeWrapper>;
```

### Deprecated aggregate `Badge` component

The mobile **Badge** router (`app/component-library/components/Badges/Badge/Badge.tsx`) dispatches on **`variant`**:

- `BadgeVariant.Network` → **BadgeNetwork**
- `BadgeVariant.Status` → **BadgeStatus**
- `BadgeVariant.NotificationsKinds` → **BadgeNotifications** (icon notification chip)

MMDS does **not** provide a single drop-in replacement: import **`BadgeNetwork`**, **`BadgeStatus`**, **`BadgeIcon`**, or **`BadgeCount`** directly and pass the matching props for each use case (see sections above). The composite `Badge` is deprecated in favor of those exports from `@metamask/design-system-react-native`.

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

### Label Component

Label is a thin wrapper around `Text` that defaults the variant to `BodyMd` and is intended to describe form fields. Because it forwards every prop to `Text`, the [Text Component breaking changes](#text-component) (variant casing, font-weight separation, color renames) all apply to `Label` as well.

#### Breaking Changes

##### Import path

The component is now published from the design system package; remove the relative import from `app/component-library/components/Form/Label`.

| Mobile (Before)                                                                         | Design System (After)                                                     |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `import Label from 'app/component-library/components/Form/Label';`                      | `import { Label } from '@metamask/design-system-react-native';`           |
| `import { LabelProps } from 'app/component-library/components/Form/Label/Label.types';` | `import type { LabelProps } from '@metamask/design-system-react-native';` |

The mobile package exported `Label` as the **default** export. The design system package exports it as a **named** export.

##### `testID` no longer defaults to `"label"`

The mobile `Label` automatically applied `testID="label"` (`LABEL_TEST_ID`). The design system `Label` does **not** set a default `testID` — pass it explicitly when a stable test selector is required.

```tsx
// Before (Mobile) — implicit testID="label"
<Label>Email Address</Label>

// After (Design System) — pass testID explicitly
<Label testID="label">Email Address</Label>
```

If you previously relied on `LABEL_TEST_ID` from `Label.constants`, replace that import with a string literal local to your test or component, since the constant is not re-exported from the design system.

##### Removed mobile-only constants

The following exports from `Label.constants.ts` are not part of the design system API:

| Mobile Export                | Replacement                                                                 |
| ---------------------------- | --------------------------------------------------------------------------- |
| `DEFAULT_LABEL_TEXT_VARIANT` | Inline `TextVariant.BodyMd` (default behavior of `Label`).                  |
| `LABEL_TEST_ID`              | Pass `testID` explicitly (see above).                                       |
| `SAMPLE_LABEL_TEXT`          | Test fixture only — colocate any equivalent string with your tests/stories. |

##### Variant, color, and font-weight props

All `TextVariant`, `TextColor`, and font-weight changes from the [Text Component](#text-component) section apply directly. The most common mobile usage:

| Mobile                                              | Design System                                                                |
| --------------------------------------------------- | ---------------------------------------------------------------------------- |
| `<Label>Email</Label>`                              | `<Label>Email</Label>` _(default `BodyMd` is unchanged in behavior)_         |
| `<Label variant={TextVariant.BodySM}>…</Label>`     | `<Label variant={TextVariant.BodySm}>…</Label>`                              |
| `<Label variant={TextVariant.BodyMDBold}>…</Label>` | `<Label variant={TextVariant.BodyMd} fontWeight={FontWeight.Bold}>…</Label>` |
| `<Label color={TextColor.Error}>…</Label>`          | `<Label color={TextColor.ErrorDefault}>…</Label>`                            |

#### Migration Examples

##### Before (Mobile)

```tsx
import React from 'react';
import Label from '../../../component-library/components/Form/Label';
import {
  TextVariant,
  TextColor,
} from '../../../component-library/components/Texts/Text';

<Label>Email Address</Label>

<Label variant={TextVariant.BodySM} color={TextColor.Muted}>
  Optional
</Label>

<Label variant={TextVariant.BodyMDBold} color={TextColor.Error}>
  Required field
</Label>
```

##### After (Design System)

```tsx
import React from 'react';
import {
  Label,
  TextVariant,
  TextColor,
  FontWeight,
} from '@metamask/design-system-react-native';

<Label>Email Address</Label>

<Label variant={TextVariant.BodySm} color={TextColor.TextMuted}>
  Optional
</Label>

<Label
  variant={TextVariant.BodyMd}
  fontWeight={FontWeight.Bold}
  color={TextColor.ErrorDefault}
>
  Required field
</Label>
```

#### API Differences

`LabelProps` now equals `TextProps`, which on the design system side adds the following props on top of React Native's `TextProps` (none of these existed on the mobile `Label`):

- `fontWeight` — separate weight control instead of weight-specific variants
- `fontFamily` — select default/accent/hero fonts
- `fontStyle` — normal or italic text style
- `twClassName` — Tailwind utility classes merged with component defaults

Behavior preserved across both implementations:

- Defaults the rendered variant to body-medium (`BodyMD` → `BodyMd`).
- Forwards every prop to the underlying `Text` (and therefore to React Native's `Text`).
- Accepts string or `ReactNode` children.

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

### Input Component

The mobile `Input` (under `Form/TextField/foundation/Input`) maps to `Input` in the design system. The legacy component extends `Omit<TextInputProps, 'editable'>`; the design system enforces a controlled `value` and omits `value` and `defaultValue` from the spread to avoid uncontrolled usage.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                     | Design System Migration                                                     |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `import Input from '.../Form/TextField/foundation/Input'`                          | `import { Input, TextVariant } from '@metamask/design-system-react-native'` |
| `import { TextVariant } from '.../components/Texts/Text'` (legacy casing `BodyMD`) | `import { TextVariant } from '@metamask/design-system-react-native'`        |

##### Props and Typing

| Mobile API                                      | Design System API                                                    | Change type                        | Notes                                                                                                                                      |
| ----------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `value?: string` (optional in `TextInputProps`) | `value: string`                                                      | now required on the component type | Input is **controlled-only**; omitting `value` is a type error (see [TextField Component](#textfield-component) for the surrounding field) |
| `textVariant` default `BodyMD` (legacy enum)    | `TextVariant.BodyMd`                                                 | value rename                       | align with [Text Component](#text-component) variant naming                                                                                |
| `isDisabled`, `isStateStylesDisabled`           | same names                                                           | unchanged                          | `isStateStylesDisabled` still disables focus/disabled visual treatment                                                                     |
| `isReadonly`                                    | `isReadOnly`                                                         | renamed                            | capital 'R' in the design system prop; see also [TextField Component](#textfield-component)                                                |
| `autoFocus` default `true`                      | `autoFocus` default `false`                                          | default changed                    | MMDS matches React Native `TextInput` default; set `autoFocus` explicitly if you relied on the legacy default                              |
| `style`                                         | `style` + `twClassName`                                              | MMDS adds `twClassName`            | use `twClassName` for Tailwind overrides; `style` still supported                                                                          |
| Inherits `TextInputProps` except `editable`     | Inherits `TextInputProps` except `editable`, `value`, `defaultValue` | omissions                          | `defaultValue` is omitted so the component stays controlled; use `value` from parent state                                                 |

#### Migration Examples

##### Before (Mobile)

```tsx
import Input from '.../component-library/components/Form/TextField/foundation/Input';
import { TextVariant } from '.../component-library/components/Texts/Text';

<Input
  value={value}
  onChangeText={onChangeText}
  placeholder="Amount"
  textVariant={TextVariant.BodyMD}
  isDisabled={false}
  autoFocus
/>;
```

##### After (Design System)

```tsx
import { Input, TextVariant } from '@metamask/design-system-react-native';

<Input
  value={value}
  onChangeText={onChangeText}
  placeholder="Amount"
  textVariant={TextVariant.BodyMd}
  isDisabled={false}
  autoFocus
/>;
```

#### API Differences

- **Controlled `value`:** the design system requires `value: string` as part of `InputProps`; the legacy `Input` type still allowed the full `TextInput` surface including uncontrolled usage.
- **`autoFocus` default** is `false` in MMDS (`true` in the legacy `Input` implementation) — set explicitly when you need first-mount focus.
- Styling: design system input uses the shared Tailwind + token pipeline (`twClassName`); single-line metrics use `MAP_TEXT_VARIANT_INPUT_METRICS` (font size/letter spacing without paragraph `lineHeight`) for consistent `TextInput` layout.

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

### AvatarBase Component

The mobile `Avatar` foundation (`…/Avatars/Avatar/foundation/AvatarBase`) maps to MMDS `AvatarBase` with a **lowercase** `size` value space, **`hasBorder`** (replacing `includesBorder`), plus **`shape`**, **`fallbackText`**, and **token-first styling** via `twClassName` instead of StyleSheet keys.

#### Breaking Changes

| Mobile API                                                       | MMDS API                                            | Change Type           | Notes                                                          |
| ---------------------------------------------------------------- | --------------------------------------------------- | --------------------- | -------------------------------------------------------------- |
| `size?: AvatarSize` with string pixel values (`'16'`, `'24'`, …) | `size?: AvatarBaseSize` with labels `'xs'` … `'xl'` | value space + default | use mapping table in [AvatarAccount](#avataraccount-component) |
| `includesBorder`                                                 | `hasBorder`                                         | renamed               | default `false`                                                |
| (no `shape` / `fallbackText` on legacy base)                     | `shape?`, `fallbackText?`                           | new                   | MMDS matches web semantics for stacked avatars                 |
| `ViewProps` spread                                               | `ViewProps` + `twClassName?`                        | extended              | TWRNC utilities replace many bespoke StyleSheet uses           |

#### Migration Example

##### Before (Mobile)

```tsx
import Avatar from '.../Avatars/Avatar/Avatar';
import { AvatarSize } from '.../Avatars/Avatar/Avatar.types';

<Avatar
  size={AvatarSize.Md}
  // variant-specific props on wrapper Avatar…
/>;
```

##### After (Design System)

```tsx
import {
  AvatarBase,
  AvatarBaseSize,
  AvatarBaseShape,
} from '@metamask/design-system-react-native';

<AvatarBase
  size={AvatarBaseSize.Md}
  shape={AvatarBaseShape.Circle}
  hasBorder={false}
/>;
```

### AvatarAccount Component

`AvatarAccount` is composed through the old mobile `Avatar` + `variant={AvatarVariant.Account}`. MMDS exposes **`AvatarAccount` directly** and normalizes the address field and variant **values** to ADR-0003 consts.

#### Breaking Changes (Mobile `AvatarAccount` props)

| Mobile API                                            | MMDS API                                             | Change Type                | Notes                                                                                              |
| ----------------------------------------------------- | ---------------------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------- |
| `accountAddress: string`                              | `address: string`                                    | renamed                    |                                                                                                    |
| `type?: AvatarAccountType` (PascalCase string values) | `variant?: AvatarAccountVariant` (lowercase)         | enum style + value mapping | see [React MIGRATION](../design-system-react/MIGRATION.md#avataraccount-component) for value table |
| `size?: AvatarSize`                                   | `size?: AvatarAccountSize`                           | `AvatarBaseSize`           | map `'16'` → `xs`, etc. (same table as web doc)                                                    |
| (variant-specific)                                    | `blockiesProps?`, `jazziconProps?`, `maskiconProps?` | new                        | pass-through to temp identicon components                                                          |

#### Migration Example

##### Before (Mobile)

```tsx
import Avatar, { AvatarVariant } from '.../Avatars/Avatar/Avatar';
import { AvatarAccountType, AvatarSize } from '.../Avatars/Avatar/Avatar.types';

<Avatar
  variant={AvatarVariant.Account}
  accountAddress={address}
  type={AvatarAccountType.JazzIcon}
  size={AvatarSize.Md}
/>;
```

##### After (Design System)

```tsx
import {
  AvatarAccount,
  AvatarAccountVariant,
  AvatarAccountSize,
} from '@metamask/design-system-react-native';

<AvatarAccount
  address={address}
  variant={AvatarAccountVariant.Jazzicon}
  size={AvatarAccountSize.Md}
/>;
```

### AvatarFavicon Component

The mobile `Avatar` favicon branch required **`imageSource: ImageSourcePropType`**. MMDS **`AvatarFavicon`** is URL/source-first: pass **`src`** (typed as `ImageOrSvgSrc` for RN) and an optional dapp `name` for a11y/fallback. There is no longer a required `imageSource` + separate name pairing — **`src` is the primary image** when you want a remote/local asset.

| Mobile API                                    | MMDS API                                  | Change Type   | Notes                                                                                                 |
| --------------------------------------------- | ----------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `imageSource: ImageSourcePropType` (required) | `src?` + optional `name` / `fallbackText` | restructured  | supply `src` for image-driven favicons; text-only state uses `fallbackText` or first letter of `name` |
| (implicit sizing via `AvatarSize`)            | `size?: AvatarFaviconSize`                | const + alias | `xs`–`xl` strings, default `Md`                                                                       |
| (no `twClassName` on old favicon)             | `twClassName?` on `AvatarBase`            | new           |                                                                                                       |

#### Migration Example

##### Before (Mobile)

```tsx
import Avatar, { AvatarVariant } from '.../Avatars/Avatar/Avatar';

<Avatar
  variant={AvatarVariant.Favicon}
  imageSource={{ uri: faviconUrl }}
  size={AvatarSize.Md}
/>;
```

##### After (Design System)

```tsx
import {
  AvatarFavicon,
  AvatarFaviconSize,
} from '@metamask/design-system-react-native';

<AvatarFavicon
  src={{ uri: faviconUrl }}
  name="Dapp"
  size={AvatarFaviconSize.Md}
/>;
```

### AvatarIcon Component

The mobile `Avatar` + `AvatarVariant.Icon` branch used **`name`** to choose an icon, plus optional **`iconColor` / `backgroundColor` strings**. MMDS `AvatarIcon` is **`iconName: IconName`** and uses **`severity: AvatarIconSeverity`** for a consistent **background + icon** treatment (replacing ad-hoc color strings).

| Mobile API                                   | MMDS API                        | Change Type | Notes                                                                                        |
| -------------------------------------------- | ------------------------------- | ----------- | -------------------------------------------------------------------------------------------- |
| `name: IconName` (prop on `AvatarIconProps`) | `iconName: IconName`            | renamed     | align with the rest of MMDS                                                                  |
| `iconColor?`, `backgroundColor?`             | `iconProps?`, `severity?`       | replaced    | set `iconProps` for one-off icon tweaks; use `severity` for semantic background/icon pairing |
| (no `severity` on mobile)                    | `severity?: AvatarIconSeverity` | new         | default `Neutral`                                                                            |

#### Migration Example

##### Before (Mobile)

```tsx
import Avatar, { AvatarVariant } from '.../Avatars/Avatar/Avatar';

<Avatar
  variant={AvatarVariant.Icon}
  name={IconName.Star}
  iconColor={colors.primary}
  size={AvatarSize.Md}
/>;
```

##### After (Design System)

```tsx
import {
  AvatarIcon,
  AvatarIconSize,
  AvatarIconSeverity,
  IconColor,
  IconName,
} from '@metamask/design-system-react-native';

// Severity drives both background and icon color — no iconProps needed for most cases
<AvatarIcon
  iconName={IconName.Star}
  size={AvatarIconSize.Md}
  severity={AvatarIconSeverity.Neutral}
/>;

// Override icon color independently via iconProps when severity alone is insufficient
<AvatarIcon
  iconName={IconName.Star}
  size={AvatarIconSize.Md}
  severity={AvatarIconSeverity.Neutral}
  iconProps={{ color: IconColor.IconAlternative }}
/>;
```

### AvatarNetwork Component

| Mobile API                          | MMDS API                 | Change Type             | Notes                                         |
| ----------------------------------- | ------------------------ | ----------------------- | --------------------------------------------- |
| `imageSource?: ImageSourcePropType` | `src?` (ImageOrSvgSrc)   | renamed + union widened | supports the design-system `ImageOrSvg` types |
| `name?: string`                     | `name?`, `fallbackText?` | same surface            |                                               |
| (n/a)                               | `imageOrSvgProps?`       | new                     | pass-through to the underlying `ImageOrSvg`   |

`AvatarNetwork` in MMDS is **square** (via internal `AvatarBase` shape) like web.

#### Migration Example

##### Before (Mobile)

```tsx
import Avatar, { AvatarVariant } from '.../Avatars/Avatar/Avatar';

<Avatar
  variant={AvatarVariant.Network}
  name="Mainnet"
  imageSource={{ uri: networkIconUrl }}
  size={AvatarSize.Md}
/>;
```

##### After (Design System)

```tsx
import {
  AvatarNetwork,
  AvatarNetworkSize,
} from '@metamask/design-system-react-native';

<AvatarNetwork
  name="Mainnet"
  src={{ uri: networkIconUrl }}
  size={AvatarNetworkSize.Md}
  imageOrSvgProps={{ testID: 'network-avatar' }}
/>;
```

### AvatarToken Component

| Mobile API                             | MMDS API               | Change Type | Notes                              |
| -------------------------------------- | ---------------------- | ----------- | ---------------------------------- |
| `imageSource?: ImageSourcePropType`    | `src?` (ImageOrSvgSrc) | renamed     |                                    |
| `isHaloEnabled?: boolean`              | (not supported)        | removed     | reimplement in product if required |
| `isIpfsGatewayCheckBypassed?: boolean` | (not supported)        | removed     |                                    |

#### Migration Example

##### Before (Mobile)

```tsx
import Avatar, { AvatarVariant } from '.../Avatars/Avatar/Avatar';

<Avatar
  variant={AvatarVariant.Token}
  name="DAI"
  imageSource={{ uri: tokenIconUrl }}
  size={AvatarSize.Md}
  isHaloEnabled
/>;
```

##### After (Design System)

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
} from '@metamask/design-system-react-native';

<AvatarToken
  name="DAI"
  src={{ uri: tokenIconUrl }}
  size={AvatarTokenSize.Md}
/>;
```

### AvatarGroup Component

Mobile `AvatarGroup` accepted **`avatarPropsList: AvatarProps[]`** (discriminated-union `Avatar` props) with **`maxStackedAvatars`**, **`size` defaulting to the smaller stack scale**, and **`spaceBetweenAvatars`**. MMDS `AvatarGroup` is **variant + `avatarPropsArr`**, with **`max`**, default **`size` of `AvatarGroupSize.Md`**, optional **`isReverse`**, and **`twClassName`**. The **`spaceBetweenAvatars`**, **stack-level `includesBorder` override**, and mixing **`AvatarVariant.Icon` inside the list** are not part of the MMDS `AvatarGroup` contract — handle icon rows separately or compose multiple `AvatarIcon`s.

| Mobile API                                            | MMDS API                                     | Change Type     | Notes                               |
| ----------------------------------------------------- | -------------------------------------------- | --------------- | ----------------------------------- |
| `avatarPropsList: AvatarProps[]`                      | `variant` + `avatarPropsArr: Avatar*Props[]` | restructured    | one variant per group, matching web |
| `maxStackedAvatars?`                                  | `max?`                                       | renamed         | default `4`                         |
| `size?` (default `AvatarSize.Xs` in mobile component) | `size?: AvatarGroupSize` (default `Md`)      | default changed | re-check design spacing             |
| `spaceBetweenAvatars?`                                | (not exposed)                                | removed         | use `twClassName` / parent layout   |
| (n/a)                                                 | `isReverse?`, `overflowTextProps?`           | new             |                                     |

#### Migration Example

##### Before (Mobile)

```tsx
import AvatarGroup from '.../Avatars/AvatarGroup/AvatarGroup';
import {
  AvatarVariant,
  AvatarSize,
  AvatarAccountType,
} from '.../Avatars/Avatar/Avatar.types';

<AvatarGroup
  size={AvatarSize.Md}
  maxStackedAvatars={3}
  avatarPropsList={addresses.map((accountAddress) => ({
    variant: AvatarVariant.Account,
    accountAddress,
    type: AvatarAccountType.JazzIcon,
  }))}
/>;
```

##### After (Design System)

```tsx
import {
  AvatarGroup,
  AvatarGroupVariant,
  AvatarGroupSize,
  AvatarAccountVariant,
} from '@metamask/design-system-react-native';

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  size={AvatarGroupSize.Md}
  max={3}
  twClassName="mb-2"
  avatarPropsArr={addresses.map((address) => ({
    address,
    variant: AvatarAccountVariant.Jazzicon,
  }))}
/>;
```

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
| `isReadOnly`         | `boolean`                | Read-only state                           |
| `autoFocus`          | `boolean`                | Auto-focus on mount                       |
| `startAccessory`     | `ReactNode`              | Content before the input                  |
| `endAccessory`       | `ReactNode`              | Content after the input                   |
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

### KeyValueRow Component

The mobile `components-temp/KeyValueRow` is replaced by `KeyValueRow` from `@metamask/design-system-react-native`. The legacy API matches the pre-0.16.0 design system API, so **the prop-shape migration is fully documented in [From version 0.15.0 to 0.16.0 › KeyValueRow API](#keyvaluerow-api)** (nested `field`/`value` objects → flat `keyLabel` / `value` / `*TextProps` / `*StartAccessory` / `*EndAccessory` / `*EndButtonIconProps`). Read that section for the full prop-by-prop mapping; this section covers the mobile-specific concerns.

#### Breaking Changes (Mobile)

##### Import Path and Export Shape

| Mobile Pattern                                                                               | Design System Migration                                                                  |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `import KeyValueRow from '.../component-library/components-temp/KeyValueRow'`                | `import { KeyValueRow } from '@metamask/design-system-react-native'`                     |
| `import KeyValueRow from '.../component-library/components-temp/KeyValueRow/KeyValueRow'`    | `import { KeyValueRow } from '@metamask/design-system-react-native'`                     |
| `import { TooltipSizes } from '.../components-temp/KeyValueRow'`                             | Removed — drop the import, or remap to `ButtonIconSize` from the design system if needed |
| `import { KeyValueRowStubs } from '.../components-temp/KeyValueRow'`                         | Removed — no equivalent. See [Blocked Patterns](#blocked-patterns-1) below               |
| `import KeyValueRowLabel from '.../components-temp/KeyValueRow/KeyValueLabel/KeyValueLabel'` | Removed — no equivalent                                                                  |

Note: The legacy component uses a **default export**; the design system uses a **named export**. The legacy index also re-exports `TooltipSizes` — that re-export is gone, so imports like `import KeyValueRow, { TooltipSizes } from '.../components-temp/KeyValueRow'` must be split.

##### Tooltip Behavior — Host Must Open the Modal

The legacy `KeyValueRow` rendered the tooltip trigger **and** opened the modal internally via `useTooltipModal` (see `KeyValueLabel.tsx`). The design system renders **only** the `ButtonIcon` trigger — the host app is responsible for opening the modal/sheet.

| Legacy Mobile Behavior                                                                                                     | Design System Behavior                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tooltip={{ title, content, onPress }}` — component calls `openTooltipModal(title, content, …)` and then invokes `onPress` | `keyEndButtonIconProps={{ iconName, onPress }}` / `valueEndButtonIconProps={{ … }}` — host must call `openTooltipModal(…)` inside `onPress`; `title` and `content` are **not rendered** by the component |
| `tooltip.size`, `tooltip.iconName`                                                                                         | Use `keyEndButtonIconProps` / `valueEndButtonIconProps` fields (`size`, `iconName`, `iconProps`, etc.)                                                                                                   |
| Default icon color `IconColor.Alternative` via `KeyValueRowLabel`                                                          | Key trigger defaults to `IconColor.IconAlternative`; value trigger defaults to `IconColor.IconDefault`; override via `iconProps.color`                                                                   |

##### Removed Types and Enums

The following are no longer available. Remove the imports and refactor any code that branches on them.

| Removed                                                                                               | Migration                                                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `KeyValueRowFieldIconSides` (`LEFT` / `RIGHT` / `BOTH`)                                               | Pass a node on `keyStartAccessory` / `keyEndAccessory` / `valueStartAccessory` / `valueEndAccessory` (both = set start **and** end) |
| `KeyValueRowSectionAlignments`                                                                        | Alignment is handled internally (key shrinks, value row is `flex-1 min-w-0 justify-end`). Drop the import                           |
| `TooltipSizes`, `IconSizes`                                                                           | Use `ButtonIconSize` / `IconSize` from `@metamask/design-system-react-native` if sizing is needed                                   |
| `KeyValueRowField`, `KeyValueRowTooltip`                                                              | Use `KeyValueRowProps` from `@metamask/design-system-react-native` (flat props)                                                     |
| `PreDefinedKeyValueRowLabel`, `KeyValueRowLabelProps`, `KeyValueRowRootProps`, `KeyValueSectionProps` | No direct replacement — these supported custom stub-based layouts not yet available in MMDS                                         |

##### Default Typography Differences

The legacy `KeyValueRowLabel` defaulted to `TextVariant.BodyMDMedium` + `TextColor.Default` for both sides. The design system applies different defaults per side:

- Key: `TextVariant.BodyMd`, `FontWeight.Medium`, `TextColor.TextAlternative`, `numberOfLines: 1`, `ellipsizeMode: 'tail'`
- Value: `TextVariant.BodyMd`, `FontWeight.Medium`, `TextColor.TextDefault`, `numberOfLines: 1`, `ellipsizeMode: 'tail'`

If you relied on the legacy "both sides identical" styling, override via `keyTextProps` / `valueTextProps`.

##### Row Height Now Fixed

Legacy layout was driven by the intrinsic height of the inner `Label` plus section padding. The design system pins the row height:

- `KeyValueRowVariant.Summary` (default) → 40px (`h-10`)
- `KeyValueRowVariant.Input` → 48px (`h-12`)

If a screen needs a taller row (e.g. input-style confirmation screens where the value is a chip or button), pass `variant={KeyValueRowVariant.Input}`.

#### Migration Examples (Mobile-Specific)

##### Simple label + tooltip with `useTooltipModal`

Before (Mobile):

```tsx
import KeyValueRow, {
  TooltipSizes,
} from '../../../../../../component-library/components-temp/KeyValueRow';
import { TextVariant } from '../../../../../../component-library/components/Texts/Text';

<KeyValueRow
  field={{
    label: { text: strings('tooltip_modal.unstaking_time.title') },
    tooltip: {
      title: strings('tooltip_modal.unstaking_time.title'),
      content: strings('tooltip_modal.unstaking_time.tooltip'),
      size: TooltipSizes.Sm,
      onPress: () => trackEvent(createTooltipOpenedEvent(...)),
    },
  }}
  value={{
    label: {
      text: strings('stake.estimated_unstaking_time'),
      variant: TextVariant.BodyMD,
    },
  }}
/>;
```

After (Design System — host opens the modal):

```tsx
import {
  ButtonIconSize,
  IconName,
  KeyValueRow,
} from '@metamask/design-system-react-native';
import useTooltipModal from '../../../../../../components/hooks/useTooltipModal';

const { openTooltipModal } = useTooltipModal();

<KeyValueRow
  keyLabel={strings('tooltip_modal.unstaking_time.title')}
  value={strings('stake.estimated_unstaking_time')}
  keyEndButtonIconProps={{
    size: ButtonIconSize.Sm,
    iconName: IconName.Question,
    accessibilityLabel: `${strings(
      'tooltip_modal.unstaking_time.title',
    )} tooltip`,
    onPress: () => {
      openTooltipModal(
        strings('tooltip_modal.unstaking_time.title'),
        strings('tooltip_modal.unstaking_time.tooltip'),
      );
      trackEvent(createTooltipOpenedEvent(...));
    },
  }}
/>;
```

Key points: `keyEndButtonIconProps` renders the trigger; the host calls `openTooltipModal(title, content)` and then invokes any analytics side effect.

##### Icon before the key label (legacy `icon.side: LEFT`)

Before (Mobile):

```tsx
<KeyValueRow
  field={{
    label: { text: 'Network' },
    icon: {
      name: IconName.Wifi,
      color: IconColor.PrimaryDefault,
      size: IconSize.Sm,
      side: KeyValueRowFieldIconSides.LEFT,
    },
  }}
  value={{ label: { text: 'Mainnet' } }}
/>
```

After (Design System):

```tsx
import {
  Icon,
  IconColor,
  IconName,
  IconSize,
  KeyValueRow,
} from '@metamask/design-system-react-native';

<KeyValueRow
  keyLabel="Network"
  value="Mainnet"
  keyStartAccessory={
    <Icon
      name={IconName.Wifi}
      color={IconColor.PrimaryDefault}
      size={IconSize.Sm}
    />
  }
/>;
```

For `side: BOTH`, pass an accessory on both `keyStartAccessory` and `keyEndAccessory`.

##### Taller input-style row

Before (Mobile) — no explicit height control; callers wrapped `KeyValueRow` in `Card` or added `style` to force height.

After (Design System):

```tsx
import {
  Icon,
  IconName,
  IconSize,
  KeyValueRow,
  KeyValueRowVariant,
} from '@metamask/design-system-react-native';

<KeyValueRow
  keyLabel="Pay with"
  value="Debit or credit"
  variant={KeyValueRowVariant.Input}
  valueStartAccessory={<Icon name={IconName.Card} size={IconSize.Sm} />}
  valueEndAccessory={<Icon name={IconName.ArrowDown} size={IconSize.Sm} />}
/>;
```

#### Blocked Patterns

These patterns have no drop-in replacement in `@metamask/design-system-react-native`. Keep the legacy import (or rebuild with `Box` / `BoxRow` + `Text`) until the caller is refactored:

- **`KeyValueRowStubs` (`Root` / `Section` / `Label`)** — the legacy module exported sub-components for bespoke layouts. The design system does **not** expose these. Rebuild custom layouts using `Box`, `BoxRow`, and `Text` from `@metamask/design-system-react-native` directly.
- **Three-or-more-column rows** — `KeyValueRow` renders exactly a key + value row. Compositions that previously nested multiple `KeyValueSection` instances must be rebuilt as plain `BoxRow` layouts.
- **Using legacy `KeyValueRowLabel` standalone** — the `KeyValueLabel` default export (plus its `useTooltipModal` wiring) is not re-exported. Rebuild with `Text` + a host-owned tooltip handler, or migrate the whole row to `KeyValueRow`.

A sample of mobile call sites exercising these blocked patterns (not exhaustive — grep `components-temp/KeyValueRow` in `metamask-mobile` for the current full set, as the codebase moves fast):

- `app/components/UI/Bridge/components/QuoteDetailsRecipientKeyValueRow/QuoteDetailsRecipientKeyValueRow.tsx` — uses `KeyValueRowStubs` (owner: `@MetaMask/swaps-engineers`)
- `app/components/UI/Bridge/components/QuoteDetailsCard/QuoteDetailsCard.tsx` — imports `KeyValueRowLabel` directly alongside `KeyValueRow` (owner: `@MetaMask/swaps-engineers`)
- `app/components/UI/Rewards/components/Tabs/MusdCalculatorTab/MusdCalculatorTab.tsx` — uses `KeyValueRowStubs` (owner: `@MetaMask/rewards`)

Additional consumers exist across Earn, Stake, Predict, Bridge, and Perps — some import `KeyValueRowLabel` directly, others only pull in `TooltipSizes`. Run the grep above to enumerate the complete set before opening a migration PR.

Separately, the deprecated `TooltipSizes` re-export is consumed across additional files in `Earn`, `Stake`, `Predict`, `Bridge`, and `Perps` even when `KeyValueRow` itself is not rendered. Those sites are not "blocked" — swap `TooltipSizes.<X>` for the value-equivalent `ButtonIconSizes.<X>` from the legacy `ButtonIcon` (or `ButtonIconSize` from the design system if the surrounding `ButtonIcon` is also being migrated). Grep `components-temp/KeyValueRow` to enumerate the current set before opening a migration PR.

#### API Differences

- MMDS `KeyValueRow` uses flat props (`keyLabel`, `value`, `*TextProps`, `*StartAccessory`, `*EndAccessory`, `*EndButtonIconProps`) instead of nested `field` / `value` objects.
- Row height is controlled by `variant` (`KeyValueRowVariant.Summary` / `KeyValueRowVariant.Input`), not by caller-controlled styles.
- Tooltips render a `ButtonIcon` trigger only — the host opens the modal in `onPress`.
- `twClassName` is supported on the outer `BoxRow` for Tailwind overrides.
- `KeyValueRowStubs`, `KeyValueRowFieldIconSides`, `KeyValueRowSectionAlignments`, `TooltipSizes`, `IconSizes`, and the matching types are removed.

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

The mobile `VerticalAlignment` enum maps to `ContentVerticalAlignment` from `@metamask/design-system-shared`. When using `ListItem`, import `ListItemVerticalAlignment` from `@metamask/design-system-react-native` (a runtime alias for the same const object). `ContentVerticalAlignment` is also exported from the package root for `Content` call sites. It is converted from a TypeScript `enum` to a const object (ADR-0003). Values change from PascalCase to lowercase.

| Mobile Value                            | Design System Value                             | Notes                      |
| --------------------------------------- | ----------------------------------------------- | -------------------------- |
| `VerticalAlignment.Top` (`'Top'`)       | `ListItemVerticalAlignment.Top` (`'top'`)       | casing changed             |
| `VerticalAlignment.Center` (`'Center'`) | `ListItemVerticalAlignment.Center` (`'center'`) | casing changed             |
| `VerticalAlignment.Bottom` (`'Bottom'`) | —                                               | removed; use `Top` instead |

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
- The mobile `VerticalAlignment` enum maps to `ContentVerticalAlignment` with lowercase values (`'top'`/`'center'` instead of `'Top'`/`'Center'`). `VerticalAlignment.Bottom` has no equivalent.
- The mobile version sets `accessible accessibilityRole="none"` on the root element; MMDS does not.
- The mobile version uses a default export; MMDS uses a named export.
- `ListItemColumn`, `ListItemSelect`, and `ListItemMultiSelect` are not yet available in MMDS.

### TabEmptyState Component

`TabEmptyState` was previously incubated inside `metamask-mobile` at `app/component-library/components-temp/TabEmptyState` as a thin wrapper around `Box` / `Text` / `Button` from `@metamask/design-system-react-native`. It has graduated to the design system in `0.11.0` and the `components-temp` copy is now marked `@deprecated`. The public API (`icon`, `description`, `descriptionProps`, `actionButtonText`, `actionButtonProps`, `onAction`, `children`, `twClassName`, `style`) is preserved — the migration is essentially an import-path change.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                                                  | Design System Migration                                                          |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `import { TabEmptyState } from '.../component-library/components-temp/TabEmptyState'`           | `import { TabEmptyState } from '@metamask/design-system-react-native'`           |
| `import type { TabEmptyStateProps } from '.../component-library/components-temp/TabEmptyState'` | `import type { TabEmptyStateProps } from '@metamask/design-system-react-native'` |

##### Root Props Narrowed from `BoxProps` to `ViewProps`

The mobile `TabEmptyStateProps` extended `Omit<BoxProps, 'children'>`, so design-system `Box` props (`backgroundColor`, `flexDirection`, `alignItems`, `gap`, `padding`/`margin` shorthands, etc.) could be passed at the root. The design-system version intersects `ViewProps` only — standard React Native `View` props (`style`, `testID`, `accessibilityLabel`, …) are accepted, but `Box`-specific props are not.

| Concern                                                                             | Mobile                       | Design System                                       |
| ----------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| Root type extension                                                                 | `Omit<BoxProps, 'children'>` | `ViewProps`                                         |
| Root accepts `Box` shorthands at top level (`backgroundColor`, `gap`, `padding`, …) | ✅                           | ❌ — move these to `twClassName` or a wrapper `Box` |
| Root accepts `ViewProps` (`style`, `testID`, …)                                     | ✅                           | ✅                                                  |

Current `metamask-mobile` call sites only pass `testID`, `style`, `twClassName`, `children`, and the explicit slot props — none of them pass `Box` shorthands at the root — so this narrowing is a no-op for every known consumer. If you were relying on root `Box` props, move them to `twClassName` or wrap the component in a `<Box>`.

#### Migration Examples

##### Basic usage

Before (Mobile):

```tsx
import { TabEmptyState } from '../../../component-library/components-temp/TabEmptyState';
import { strings } from '../../../../locales/i18n';

<TabEmptyState description={strings('wallet.no_transactions')} />;
```

After (Design System):

```tsx
import { TabEmptyState } from '@metamask/design-system-react-native';
import { strings } from '../../../../locales/i18n';

<TabEmptyState description={strings('wallet.no_transactions')} />;
```

##### With action button and custom children

Before (Mobile):

```tsx
import {
  TabEmptyState,
  type TabEmptyStateProps,
} from '../../../component-library/components-temp/TabEmptyState';
import {
  Text,
  TextVariant,
  TextColor,
} from '@metamask/design-system-react-native';

<TabEmptyState
  testID="bridge-token-selector-empty-state"
  icon={<NoSearchResultsIcon width={72} height={78} />}
  description={strings('bridge.no_tokens_found')}
  descriptionProps={{
    variant: TextVariant.HeadingMd,
    color: TextColor.TextDefault,
    twClassName: 'text-center',
  }}
  style={styles.emptyStateContainer}
  twClassName="self-center"
>
  <Text
    variant={TextVariant.BodyMd}
    color={TextColor.TextAlternative}
    twClassName="text-center -mt-1"
  >
    {strings('bridge.no_tokens_found_description')}
  </Text>
</TabEmptyState>;
```

After (Design System):

```tsx
import {
  TabEmptyState,
  type TabEmptyStateProps,
  Text,
  TextVariant,
  TextColor,
} from '@metamask/design-system-react-native';

<TabEmptyState
  testID="bridge-token-selector-empty-state"
  icon={<NoSearchResultsIcon width={72} height={78} />}
  description={strings('bridge.no_tokens_found')}
  descriptionProps={{
    variant: TextVariant.HeadingMd,
    color: TextColor.TextDefault,
    twClassName: 'text-center',
  }}
  style={styles.emptyStateContainer}
  twClassName="self-center"
>
  <Text
    variant={TextVariant.BodyMd}
    color={TextColor.TextAlternative}
    twClassName="text-center -mt-1"
  >
    {strings('bridge.no_tokens_found_description')}
  </Text>
</TabEmptyState>;
```

Only the import specifier changes.

#### API Differences Summary

- Root prop type narrows from `Omit<BoxProps, 'children'>` to `ViewProps`. Move any root-level `Box` shorthands to `twClassName` or a wrapper `<Box>`.
- All other props (`icon`, `description`, `descriptionProps`, `actionButtonText`, `actionButtonProps`, `onAction`, `children`, `twClassName`, `style`, `ViewProps`) are unchanged.

### Toast Component

The toast API in `@metamask/design-system-react-native` replaces the mobile `Toast`, `ToastContext`, `ToastContextWrapper`, and `ToastService` patterns with a root-mounted `Toaster` plus the imperative `toast(...)` API. A presentational `Toast` component is also exported for direct rendering in Storybook and docs, but application code should generally use `Toaster` + `toast(...)`.

#### Breaking Changes

##### Import Path

| Mobile Pattern                                                            | Design System Migration                                                    |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `import Toast from '.../component-library/components/Toast'`              | `import { Toaster, toast } from '@metamask/design-system-react-native'`    |
| `import { ToastContext } from '.../component-library/components/Toast'`   | _(removed — no longer needed)_                                             |
| `import { ToastContextWrapper } from '.../component-library/.../Toast'`   | _(removed — no longer needed)_                                             |
| `import ToastService from '.../app/core/ToastService'`                    | `import { Toaster, toast } from '@metamask/design-system-react-native'`    |
| `import { ToastVariants } from '.../component-library/components/Toast'`  | `import { ToastSeverity } from '@metamask/design-system-react-native'`     |
| `import { ButtonVariants } from '.../component-library/components/Toast'` | \_(removed — configure `closeButtonProps` / use direct `Toast` rendering)` |

The mobile component uses a default export; the design system uses named exports.

##### Rendering: one `<Toaster />` at the root, no context

| Mobile Pattern                                                                                              | Design System Migration                          |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Wrap root tree in `<ToastContextWrapper>`, render `<Toast ref={toastRef} />` with a ref pulled from context | Render `<Toaster />` once at the root of the app |

Before (mobile):

```tsx
// Root
<ToastContextWrapper>
  <App />
</ToastContextWrapper>;

// Inside App.tsx
const { toastRef } = useContext(ToastContext);
return (
  <>
    <AppContent />
    <Toast ref={toastRef} />
  </>
);
```

After (design system):

```tsx
import { Toaster } from '@metamask/design-system-react-native';

const App = () => (
  <>
    <AppContent />
    <Toaster />
  </>
);
```

On mount `<Toaster />` registers the `toast(...)` / `toast.dismiss()` API. Render it exactly once.

##### Showing a toast: `toast(...)` replaces `toastRef.current?.showToast` and `ToastService.showToast`

Before (React component using context):

```tsx
const { toastRef } = useContext(ToastContext);
toastRef?.current?.showToast({
  hasNoTimeout: false,
  text: 'Saved',
});
```

Before (non-React code using the service):

```tsx
import ToastService from '../../core/ToastService';
ToastService.showToast({ hasNoTimeout: false, text: 'Saved' });
ToastService.closeToast();
```

After (both cases, identical call site):

```tsx
import { toast, ToastSeverity } from '@metamask/design-system-react-native';

toast({
  hasNoTimeout: false,
  title: 'Saved',
  description: 'Your changes are available everywhere.',
  severity: ToastSeverity.Success,
});

toast.dismiss();
```

There is no longer a distinction between React and service call sites. `toast(...)` works anywhere after the root `<Toaster />` has mounted.

##### Method renames

| Mobile (on ref / service)      | Design System                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| `toastRef.current.showToast`   | `toast(...)`                                                                               |
| `toastRef.current.closeToast`  | `toast.dismiss()`                                                                          |
| `ToastService.showToast`       | `toast(...)`                                                                               |
| `ToastService.closeToast`      | `toast.dismiss()`                                                                          |
| `ToastService.resetForTesting` | _(removed — not needed; RTL auto-cleanup unregisters the ref when `<Toaster />` unmounts)_ |

The forwarded `Toaster` ref still exposes `showToast` and `closeToast` for advanced cases, but application code should prefer `toast(...)`.

##### Toast options are now flat and content-first

The design system no longer exposes separate option unions such as `PlainToastOption`, `AccountToastOption`, `NetworkToastOption`, `AppToastOption`, or `IconToastOption`. Toast content is modeled with one shape:

```tsx
type ToastOptions = {
  hasNoTimeout: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actionButtonLabel?: string;
  actionButtonOnPress?: () => void;
  onClose?: () => void;
  closeButtonProps?: NonNullable<ToastProps['closeButtonProps']>;
  startAccessory?: React.ReactNode;
  severity?: ToastSeverity;
  iconAlertProps?: ToastIconProps;
  bottomOffset?: number;
};
```

Use `severity` for the default status icon. `ToastSeverity.Default` renders no built-in icon. Pass `startAccessory` when you need to override that icon with custom content such as an avatar, network badge, or app icon.

##### `labelOptions` / `descriptionOptions` / `linkButtonOptions` → flat props

Before:

```tsx
toast({
  hasNoTimeout: false,
  labelOptions: [{ label: 'Saved' }],
  descriptionOptions: [{ label: 'Your changes are available everywhere.' }],
  linkButtonOptions: {
    label: 'Undo',
    onPress: handleUndo,
  },
});
```

After:

```tsx
toast({
  hasNoTimeout: false,
  title: 'Saved',
  description: 'Your changes are available everywhere.',
  actionButtonLabel: 'Undo',
  actionButtonOnPress: handleUndo,
});
```

##### `customBottomOffset` → `bottomOffset`

The per-toast offset prop is renamed from `customBottomOffset` to `bottomOffset`.

#### Error Behavior

Calling `toast(...)` or `toast.dismiss()` before `<Toaster />` has mounted throws a descriptive error pointing at the missing mount instead of silently no-oping.

#### Removed

- `ToastContext`, `ToastContextWrapper`, `ToastContextParams` — no replacement needed, the static API covers every call site.
- `ToastService` from `app/core/ToastService` — replace all usages with `toast(...)` / `toast.dismiss()`.
- Variant-specific toast option shapes and fields such as `accountAddress`, `networkImageSource`, `appIconSource`, and the old `labelOptions` / `descriptionOptions` wrappers.

## Version Updates

This section covers version-to-version breaking changes within `@metamask/design-system-react-native`.

## From version 0.12.0 to 0.13.0

### Typography: semantic bold is now semibold (600)

- `FontWeight.Bold` and the `Text` component now describe bold as weight 600; the Storybook RN `FontLoader` loads the new `Geist-SemiBold` assets, and `@metamask/design-system-twrnc-preset` maps `default-bold` and `default-bold-italic` to those semibold PostScript names instead of the retired bold files.
- Update any custom `fontWeight` constants, native font registrations, or text styles that previously assumed 700 so they match the new semibold definition (the `FontWeight.Bold` member still exists but now documents 600).
- This change is synchronized with `@metamask/design-tokens@8.3.0`, so follow the [design-tokens migration guide](../design-tokens/MIGRATION.md#from-version-822-to-830) for the token-level steps and to grab the new font files if you bundle them yourself.

### BadgeWrapper types now use const-object + union definitions

- `BadgeWrapperPosition`, `BadgeWrapperPositionAnchorShape`, `BadgeWrapperCustomPosition`, and `BadgeWrapperPropsShared` now come from const objects annotated `as const`, which produce string union types rather than TypeScript enums (ADR-0003/ADR-0004).
- The exported names and import paths stay the same, so no import-path change is required.

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
