# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-shared` to another.

## Table of Contents

- [Version Updates](#version-updates)
  - [From version 0.12.0 to 0.13.0](#from-version-0120-to-0130)
  - [From version 0.11.0 to 0.12.0](#from-version-0110-to-0120)

## Version Updates

### From version 0.12.0 to 0.13.0

#### Icon: Shared exports are now the source of truth

`IconName`, `IconSize`, and `IconColor` are now exported from `@metamask/design-system-shared` as the canonical cross-platform icon contract consumed by both platform packages.

This is additive if you were not already importing icon contracts from `@metamask/design-system-shared`.

#### Box: Shared contracts are now the source of truth

`BoxFlexDirection`, `BoxFlexWrap`, `BoxAlignItems`, `BoxJustifyContent`, `BoxBackgroundColor`, `BoxBorderColor`, `BoxSpacing`, `BoxBorderWidth`, and `BoxPropsShared` now live in `@metamask/design-system-shared` as the canonical cross-platform Box contract.

If you were previously importing duplicated Box contracts from platform-specific internal paths, update to import them from `@metamask/design-system-shared` instead.

---

### From version 0.11.0 to 0.12.0

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
// Before (0.11.0)
<Box backgroundColor={BoxBackgroundColor.WarningAlternative} />
<Box backgroundColor={BoxBackgroundColor.SuccessAlternative} />
<Box borderColor={BoxBorderColor.WarningAlternative} />
<Box borderColor={BoxBorderColor.SuccessAlternative} />
<Box borderColor={BoxBorderColor.InfoAlternative} />

// After (0.12.0) — use -default or -muted as appropriate
<Box backgroundColor={BoxBackgroundColor.WarningDefault} />
<Box backgroundColor={BoxBackgroundColor.SuccessDefault} />
<Box borderColor={BoxBorderColor.WarningDefault} />
<Box borderColor={BoxBorderColor.SuccessDefault} />
<Box borderColor={BoxBorderColor.InfoDefault} />
```

**Impact:**

- Any reference to the removed entries will produce a TypeScript error after upgrading.
- No visual regression — the removed tokens had no backing design token since `@metamask/design-tokens` v4.0.0.

---

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
