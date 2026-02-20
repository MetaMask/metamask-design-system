# Component Enum-to-Union Migration

Guide for refactoring existing monorepo components to ADR-0003 (string unions) and ADR-0004 (centralized types) patterns.

## Purpose

This workflow is for **internal cleanup** of existing monorepo components that currently have:

- Duplicate enum definitions across React and React Native packages
- Types defined separately in each platform package
- No shared type architecture

**This is NOT for creating new components.** For new components, see:

- @.cursor/rules/component-migration.md (bringing from extension/mobile)
- @.cursor/rules/component-creation.md (creating from scratch)

## When to Use This Workflow

Migrate existing components when:

- ✅ Component already exists in both React and React Native packages
- ✅ Enums are duplicated across platform packages
- ✅ Types are defined separately in each platform (no shared source)
- ✅ Component API needs to be unified/modernized

Common examples:

- BadgeStatus, AvatarAccount, Button (if using old enums)
- Any component with `export enum ComponentNameVariant` duplicated

## Migration Process

### Step 1: Identify Duplicated Types

Find components with duplicate enums in platform packages:

```tsx
// Current state: Duplicated in BOTH packages

// packages/design-system-react/src/types/index.ts
export enum BadgeStatusStatus {
  Active = 'active',
  Inactive = 'inactive',
  Disconnected = 'disconnected',
}
export enum BadgeStatusSize {
  Md = 'md',
  Lg = 'lg',
}

// packages/design-system-react-native/src/types/index.ts
export enum BadgeStatusStatus { // ❌ Duplicate!
  Active = 'active',
  Inactive = 'inactive',
  Disconnected = 'disconnected',
}
export enum BadgeStatusSize { // ❌ Duplicate!
  Md = 'md',
  Lg = 'lg',
}
```

### Step 2: Create Shared Types

Create types in shared package using ADR-0003 pattern (const objects):

```bash
# Create types directory
mkdir -p packages/design-system-shared/src/types/BadgeStatus
```

```tsx
// packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts

/**
 * BadgeStatus - status
 * Convert from enum to const object (ADR-0003)
 */
export const BadgeStatusStatus = {
  Active: 'active',
  Inactive: 'inactive',
  Disconnected: 'disconnected',
  New: 'new',
  Attention: 'attention',
} as const;
export type BadgeStatusStatus =
  (typeof BadgeStatusStatus)[keyof typeof BadgeStatusStatus];

/**
 * BadgeStatus - size
 * Convert from enum to const object (ADR-0003)
 */
export const BadgeStatusSize = {
  Md: 'md',
  Lg: 'lg',
} as const;
export type BadgeStatusSize =
  (typeof BadgeStatusSize)[keyof typeof BadgeStatusSize];

/**
 * BadgeStatus component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native
 */
export type BadgeStatusPropsShared = {
  /**
   * Required prop to control the status of the badge
   */
  status: BadgeStatusStatus;
  /**
   * Optional prop to determine whether the badge should display a border
   *
   * @default true
   */
  hasBorder?: boolean;
  /**
   * Optional prop to control the size of the BadgeStatus
   *
   * @default BadgeStatusSize.Md
   */
  size?: BadgeStatusSize;
};
```

**Key points:**

- ✅ Use `export const` with `as const` (ADR-0003)
- ✅ Derive type from const object using `typeof` and `keyof`
- ✅ Use `type` not `interface` for shared props (ESLint rule)
- ✅ Add "Shared" suffix to props type

### Step 3: Export from Shared Package Index

```tsx
// packages/design-system-shared/src/types/BadgeStatus/index.ts
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared,
} from './BadgeStatus.types';

// packages/design-system-shared/src/index.ts
// BadgeStatus types (ADR-0003 + ADR-0004)
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared,
} from './types/BadgeStatus';
```

**Important:** Use inline `type` keyword to avoid duplicate identifier errors.

### Step 4: Update React Package

Replace component type file to import and re-export shared types:

```tsx
// packages/design-system-react/src/components/BadgeStatus/BadgeStatus.types.ts

// Import shared type for extension
import type { BadgeStatusPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

// Re-export shared types from centralized package (ADR-0004)
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared,
} from '@metamask/design-system-shared';

/**
 * BadgeStatus component props (React platform-specific)
 * Extends shared props with React-specific platform concerns
 */
export type BadgeStatusProps = ComponentProps<'div'> &
  BadgeStatusPropsShared & {
    /**
     * Optional prop for additional CSS classes to be applied to the BadgeStatus component.
     * These classes will be merged with the component's default classes using twMerge.
     */
    className?: string;
    /**
     * Optional CSS styles to be applied to the component.
     * Should be used sparingly and only for dynamic styles that can't be achieved with className.
     */
    style?: React.CSSProperties;
  };
```

**Key points:**

- ✅ Import shared type for local extension
- ✅ Re-export all shared types for consumers
- ✅ Extend `ComponentProps<'div'>` (or appropriate element)
- ✅ Add `className?: string` (React-specific)
- ✅ Import ordering: shared package before react

### Step 5: Update React Native Package

Same pattern as React, but with React Native-specific extensions:

```tsx
// packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.types.ts

// Import shared type for extension
import type { BadgeStatusPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';

// Re-export shared types from centralized package (ADR-0004)
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared,
} from '@metamask/design-system-shared';

/**
 * BadgeStatus component props (React Native platform-specific)
 * Extends shared props with React Native-specific platform concerns
 */
export type BadgeStatusProps = BadgeStatusPropsShared &
  Omit<ViewProps, 'children'> & {
    /**
     * Optional prop to add twrnc overriding classNames.
     */
    twClassName?: string;
  };
```

**Key points:**

- ✅ Import shared type for local extension
- ✅ Re-export all shared types for consumers
- ✅ Extend `ViewProps` (or `PressableProps` for interactive)
- ✅ Add `twClassName?: string` (React Native-specific)
- ✅ Import ordering: shared package before react-native

### Step 6: Remove Old Enums from Platform Type Indices

Update the platform type indices to re-export from shared instead of defining enums:

```tsx
// packages/design-system-react/src/types/index.ts

// ❌ DELETE old enum definitions:
// export enum BadgeStatusStatus { ... }
// export enum BadgeStatusSize { ... }

// ✅ ADD re-exports from shared package:
/**
 * BadgeStatus - status and size
 * Re-exported from shared package (ADR-0003 + ADR-0004)
 */
export {
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-shared';

// packages/design-system-react-native/src/types/index.ts
// Same changes as React package
```

### Step 7: Fix Import Ordering

ESLint will enforce import ordering. Ensure:

1. Shared package imports come before platform imports (react/react-native)
2. Type imports come before value imports
3. No empty lines within import groups

```tsx
// ✅ Correct ordering
import type { BadgeStatusPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

// Re-exports after imports
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared,
} from '@metamask/design-system-shared';
```

### Step 8: Test and Verify

Run verification to ensure migration succeeded:

```bash
# Build all packages
yarn build

# Run tests
yarn test

# Run linting (including import order)
yarn lint
```

All should pass with no errors.

## Complete Example: BadgeStatus Migration

See the proof-of-concept BadgeStatus migration in this repository:

**Shared Package:**

- @packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts
- @packages/design-system-shared/src/types/BadgeStatus/index.ts
- @packages/design-system-shared/src/index.ts

**React Package:**

- @packages/design-system-react/src/components/BadgeStatus/BadgeStatus.types.ts
- @packages/design-system-react/src/types/index.ts

**React Native Package:**

- @packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.types.ts
- @packages/design-system-react-native/src/types/index.ts

## Common Mistakes

### ❌ Using `interface` instead of `type` for Shared Props

```tsx
// ❌ Wrong - ESLint error
export interface BadgeStatusPropsShared {
  status: BadgeStatusStatus;
}

// ✅ Correct
export type BadgeStatusPropsShared = {
  status: BadgeStatusStatus;
};
```

### ❌ Separate Type Exports (Duplicate Identifier)

```tsx
// ❌ Wrong - Causes "Duplicate identifier" error
export { BadgeStatusStatus } from '...';
export type { BadgeStatusStatus } from '...';

// ✅ Correct - Inline type keyword
export { BadgeStatusStatus, type BadgeStatusPropsShared } from '...';
```

### ❌ Wrong Import Ordering

```tsx
// ❌ Wrong - React imports before shared package
import type { ComponentProps } from 'react';
import type { BadgeStatusPropsShared } from '@metamask/design-system-shared';

// ✅ Correct - Shared package imports first
import type { BadgeStatusPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';
```

### ❌ Including Platform Props in Shared

```tsx
// ❌ Wrong - className in shared package
export type BadgeStatusPropsShared = {
  status: BadgeStatusStatus;
  className?: string; // Platform-specific!
};

// ✅ Correct - className only in platform package
export type BadgeStatusPropsShared = {
  status: BadgeStatusStatus;
  // No className here
};

export type BadgeStatusProps = ComponentProps<'div'> &
  BadgeStatusPropsShared & {
    className?: string; // Platform-specific
  };
```

## Verification Checklist

After completing migration, verify:

### Shared Package

- [ ] Types created in `packages/design-system-shared/src/types/ComponentName/`
- [ ] Const objects used (ADR-0003), NOT enums
- [ ] Shared type named `ComponentNamePropsShared` (with "Shared" suffix)
- [ ] Used `type` not `interface` for shared props
- [ ] Exported from `packages/design-system-shared/src/index.ts`
- [ ] Inline `type` keyword used in exports

### React Package

- [ ] Component types file imports shared type for extension
- [ ] Re-exports all shared types (values and types)
- [ ] Extends `ComponentProps<'element'>`
- [ ] Adds `className?: string`
- [ ] Import ordering correct (shared before react)
- [ ] Old enum removed from `src/types/index.ts`
- [ ] Re-exports shared types from `src/types/index.ts`

### React Native Package

- [ ] Component types file imports shared type for extension
- [ ] Re-exports all shared types (values and types)
- [ ] Extends `ViewProps` or `PressableProps`
- [ ] Adds `twClassName?: string`
- [ ] Import ordering correct (shared before react-native)
- [ ] Old enum removed from `src/types/index.ts`
- [ ] Re-exports shared types from `src/types/index.ts`

### Cross-Platform Consistency

- [ ] Identical `ComponentNamePropsShared` in shared package
- [ ] Same const object names and values
- [ ] Platform differences ONLY in extension layer

### Build & Tests

- [ ] Build succeeds: `yarn build`
- [ ] Tests pass: `yarn test`
- [ ] Lint passes: `yarn lint`
- [ ] No TypeScript errors
- [ ] No breaking changes to component API (backwards compatible)

## References

### Architectural Patterns

- @.cursor/rules/component-architecture.md - All architectural patterns and decision trees

### Related Workflows

- @.cursor/rules/component-migration.md - Bringing components from extension/mobile
- @.cursor/rules/component-creation.md - Creating new components from scratch
- @.cursor/rules/styling.md - Design tokens and styling patterns

### Architecture Decision Records

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/pull/127)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/pull/128)

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
