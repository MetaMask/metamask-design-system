# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-shared` to another.

## Table of Contents

- [Version Updates](#version-updates)
  - [From version 0.29.0 to 0.30.0](#from-version-0290-to-0300)
  - [From version 0.24.0 to 0.25.0](#from-version-0240-to-0250)
  - [From version 0.22.0 to 0.23.0](#from-version-0220-to-0230)
  - [From version 0.12.0 to 0.13.0](#from-version-0120-to-0130)
  - [From version 0.11.0 to 0.12.0](#from-version-0110-to-0120)

## Version Updates

### From version 0.29.0 to 0.30.0

<a id="from-version-0290-to-0300"></a>

<a id="content-verticalalignment-replaced-by-variant"></a>

#### `ContentPropsShared`: `verticalAlignment` removed, `variant` added

**`ContentVerticalAlignment`** and **`verticalAlignment`** are removed from **`ContentPropsShared`**. Use **`ContentVariant`** and **`variant`** instead.

**What changed:**

| Before (0.29.0)                                       | After (0.30.0)                                                  |
| ----------------------------------------------------- | --------------------------------------------------------------- |
| `ContentVerticalAlignment`                            | `ContentVariant`                                                |
| `verticalAlignment` prop                              | `variant` prop                                                  |
| `verticalAlignment={ContentVerticalAlignment.Center}` | `variant={ContentVariant.TwoLines}` or `ContentVariant.OneLine` |
| `verticalAlignment={ContentVerticalAlignment.Top}`    | `variant={ContentVariant.MultiLine}`                            |

**Migration:**

```tsx
// Before (0.29.0)
import { ContentVerticalAlignment } from '@metamask/design-system-shared';

<Content
  verticalAlignment={ContentVerticalAlignment.Top}
  title="Label"
  description="Secondary"
/>;

// After (0.30.0)
import { ContentVariant } from '@metamask/design-system-shared';

<Content
  variant={ContentVariant.MultiLine}
  title="Label"
  description="Secondary"
/>;
```

When using **`ListItem`** from **`@metamask/design-system-react-native`**, import **`ListItemVariant`** (alias of **`ContentVariant`**) and pass **`variant`** on the row. See the [design-system-react-native migration guide](../design-system-react-native/MIGRATION.md#content-and-listitem-verticalalignment-replaced-by-variant).

**Impact:**

- Any import of **`ContentVerticalAlignment`** or usage of **`verticalAlignment`** on **`ContentPropsShared`** must be updated.
- **`ContentVariant.OneLine`** omits **`description`** and **`subvalue`** even when passed.
- Row min-heights (including **`ListItem`** **`py-3`** padding): **`OneLine`** 48px, **`TwoLines`** 72px, **`MultiLine`** 88px.

### From version 0.24.0 to 0.25.0

<a id="titlealert-title-accessories-removed"></a>

#### `TitleAlertPropsShared`: title row accessories removed

**`titleStartAccessory`** and **`titleEndAccessory`** are removed from **`TitleAlertPropsShared`** to match the React Native **`TitleAlert`** API and Figma component.

**What changed:**

| Before (0.24.0)       | After (0.25.0) |
| --------------------- | -------------- |
| `titleStartAccessory` | removed        |
| `titleEndAccessory`   | removed        |

**Migration:**

Remove the props from shared type consumers and from **`TitleAlert`** call sites. See the [design-system-react-native migration guide](../design-system-react-native/MIGRATION.md#titlealert-title-accessories-removed) for a before/after example.

**Impact:**

- Any type or wrapper that extends **`TitleAlertPropsShared`** and references the removed props must be updated

### From version 0.22.0 to 0.23.0

<a id="filterbutton-shared-rename"></a>

#### `SegmentButton` and `SegmentGroup` shared exports renamed to `FilterButton` and `FilterButtonGroup`

Shared types and context for the segmented filter control are renamed to match the React Native component names. Prop shapes and runtime behavior are unchanged.

**What changed:**

| Before (0.22.0)            | After (0.23.0)                  |
| -------------------------- | ------------------------------- |
| `SegmentButtonVariant`     | `FilterButtonVariant`           |
| `SegmentButtonPropsShared` | `FilterButtonPropsShared`       |
| `SegmentGroupPropsShared`  | `FilterButtonGroupPropsShared`  |
| `SegmentGroupContext`      | `FilterButtonGroupContext`      |
| `SegmentGroupContextValue` | `FilterButtonGroupContextValue` |

**Migration:**

```tsx
// Before (0.22.0)
import {
  SegmentButtonVariant,
  SegmentGroupContext,
  type SegmentButtonPropsShared,
  type SegmentGroupPropsShared,
  type SegmentGroupContextValue,
} from '@metamask/design-system-shared';

// After (0.23.0)
import {
  FilterButtonVariant,
  FilterButtonGroupContext,
  type FilterButtonPropsShared,
  type FilterButtonGroupPropsShared,
  type FilterButtonGroupContextValue,
} from '@metamask/design-system-shared';
```

**Impact:**

- Any direct import from `@metamask/design-system-shared` using the old `Segment*` names must be renamed.
- `@metamask/design-system-react-native` re-exports the renamed components and types; see the [design-system-react-native migration guide](../design-system-react-native/MIGRATION.md#segmentbutton-and-segmentgroup-renamed-to-filterbutton-and-filterbuttongroup) for component usage.

### From version 0.12.0 to 0.13.0

#### Icon: Shared exports now use const objects and string unions

**What Changed:**

`IconName`, `IconColor`, `IconSize`, and `IconPropsShared` are now defined in `@metamask/design-system-shared` as const objects with derived string-union types rather than TypeScript enums. The shared package is also now the single source of truth for icon names and generated assets used by both React and React Native.

**Migration:**

Typical usage does not need a code change. Continue using the same members as before:

```tsx
// Before (0.12.0)
import { IconColor, IconName, IconSize } from '@metamask/design-system-shared';

const iconName: IconName = IconName.Add;
const iconColor: IconColor = IconColor.IconDefault;
const iconSize: IconSize = IconSize.Md;

// After (0.13.0)
import { IconColor, IconName, IconSize } from '@metamask/design-system-shared';

const iconName: IconName = IconName.Add;
const iconColor: IconColor = IconColor.IconDefault;
const iconSize: IconSize = IconSize.Md;
```

**Impact:**

- Any code that depended on these exports being TypeScript `enum`s rather than const objects may need to update its typing assumptions.
- Typical usage with `IconName.Add`, `IconColor.IconDefault`, and `IconSize.Md` continues to work unchanged.

#### Box: Shared exports now use const objects and string unions

**What Changed:**

`BoxFlexDirection`, `BoxFlexWrap`, `BoxAlignItems`, `BoxJustifyContent`, `BoxBackgroundColor`, `BoxBorderColor`, `BoxSpacing`, `BoxBorderWidth`, and `BoxPropsShared` are now defined in `@metamask/design-system-shared` using the ADR-0003 const-object + string-union pattern rather than TypeScript enums.

**Migration:**

Typical usage does not need an import-path change. Continue importing the same names from `@metamask/design-system-shared`.

#### Removed: Stale `BoxBackgroundColor` and `BoxBorderColor` `-alternative` tokens

**What Changed:**

The following `BoxBackgroundColor` and `BoxBorderColor` entries have been removed. These tokens were removed from `@metamask/design-tokens` in v4.0.0 but were incorrectly carried over into the Box const objects:

| Removed Entry                           | Reason                                          |
| --------------------------------------- | ----------------------------------------------- |
| `BoxBackgroundColor.WarningAlternative` | `--color-warning-alternative` removed in v4.0.0 |
| `BoxBackgroundColor.SuccessAlternative` | `--color-success-alternative` removed in v4.0.0 |
| `BoxBorderColor.WarningAlternative`     | `--color-warning-alternative` removed in v4.0.0 |
| `BoxBorderColor.SuccessAlternative`     | `--color-success-alternative` removed in v4.0.0 |
| `BoxBorderColor.InfoAlternative`        | `--color-info-alternative` removed in v4.0.0    |

**Migration:**

These tokens had no backing CSS custom property, so any usage was already producing no visible style. Remove references and use the corresponding `-default` or `-muted` token instead:

```tsx
// Before (0.12.0)
<Box backgroundColor={BoxBackgroundColor.WarningAlternative} />
<Box backgroundColor={BoxBackgroundColor.SuccessAlternative} />
<Box borderColor={BoxBorderColor.WarningAlternative} />
<Box borderColor={BoxBorderColor.SuccessAlternative} />
<Box borderColor={BoxBorderColor.InfoAlternative} />

// After (0.13.0) — use -default or -muted as appropriate
<Box backgroundColor={BoxBackgroundColor.WarningDefault} />
<Box backgroundColor={BoxBackgroundColor.SuccessDefault} />
<Box borderColor={BoxBorderColor.WarningDefault} />
<Box borderColor={BoxBorderColor.SuccessDefault} />
<Box borderColor={BoxBorderColor.InfoDefault} />
```

**Impact:**

- Any reference to the removed entries will produce a TypeScript error after upgrading.
- No visual regression — the removed tokens had no backing design token since `@metamask/design-tokens` v4.0.0.

### From version 0.11.0 to 0.12.0

#### Removed: `isReactNodeRenderable` utility

**What Changed:**

`isReactNodeRenderable` has been removed from the public API. The utility was introduced to guard conditional slot props (`children`, `title`, `titleAccessory`) against falsy values, but it solves a problem React already handles natively — `null`, `undefined`, `false`, and `''` all render as nothing in JSX without any guard.

The utility also introduced a subtle inconsistency: `isReactNodeRenderable('')` returned `true` (it only excluded `null`, `undefined`, and booleans), which required immediate workarounds like `&& title !== ''` at every callsite.

**Migration:**

Replace any `isReactNodeRenderable(prop)` call with a plain truthy check:

```tsx
// Before (0.11.0)
import { isReactNodeRenderable } from '@metamask/design-system-shared';

if (isReactNodeRenderable(title)) {
  // render title
}

if (isReactNodeRenderable(children)) {
  // render children
}

// After (0.12.0)
if (title) {
  // render title
}

if (children) {
  // render children
}
```

**Impact:**

- Any import of `isReactNodeRenderable` from `@metamask/design-system-shared` will fail to resolve after upgrading.
- A plain truthy check covers all realistic slot prop inputs — `string`, `ReactNode`, `null`, `undefined`, and `false` from `{condition && <Comp />}` patterns.
