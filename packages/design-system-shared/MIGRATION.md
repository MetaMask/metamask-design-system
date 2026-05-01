# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-shared` to another.

## Table of Contents

- [Version Updates](#version-updates)
  - [From version 0.12.0 to 0.13.0](#from-version-0120-to-0130)
  - [From version 0.11.0 to 0.12.0](#from-version-0110-to-0120)

## Version Updates

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
