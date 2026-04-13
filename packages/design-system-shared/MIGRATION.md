# Migration Guide

This guide provides detailed instructions for migrating your project from one version of `@metamask/design-system-shared` to another.

## Table of Contents

- [Version Updates](#version-updates)
  - [From version 0.11.0 to 0.12.0](#from-version-0110-to-0120)

## Version Updates

### From version 0.11.0 to 0.12.0

#### Removed: `isReactNodeRenderable` utility

**What Changed:**

`isReactNodeRenderable` has been removed from the public API. The utility was introduced to guard conditional slot props (`children`, `title`, `titleAccessory`) against falsy values, but it solves a problem React already handles natively — `null`, `undefined`, `false`, and `''` all render as nothing in JSX without any guard.

The utility also introduced a subtle inconsistency: `isReactNodeRenderable('')` returned `true` (it only excluded `null`, `undefined`, and booleans), which required immediate workarounds like `&& title !== ''` at every callsite.

**Migration:**

Replace any `isReactNodeRenderable(prop)` call with `!!prop`:

```tsx
// Before (0.11.0)
import { isReactNodeRenderable } from '@metamask/design-system-shared';

if (isReactNodeRenderable(title)) {
  // render title
}

const hasContent = isReactNodeRenderable(children);

// After (0.12.0)
if (title) {
  // render title
}

const hasContent = !!children;
```

**Impact:**

- Any import of `isReactNodeRenderable` from `@metamask/design-system-shared` will fail to resolve after upgrading.
- `!!prop` is the correct replacement for all realistic slot prop inputs (`string`, `ReactNode`, `false` from `{condition && <Comp />}`, `null`, `undefined`).
