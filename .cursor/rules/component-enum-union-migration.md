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

**Common examples:** BadgeStatus, AvatarAccount, Button (if using old enums), any component with `export enum ComponentNameVariant` duplicated.

## Migration Workflow

### Step 1: Identify Duplicated Types

Find components with duplicate enums in platform packages:

```tsx
// ❌ Current state: Duplicated in BOTH packages
// packages/design-system-react/src/types/index.ts
export enum BadgeStatusStatus { Active = 'active', ... }

// packages/design-system-react-native/src/types/index.ts
export enum BadgeStatusStatus { Active = 'active', ... } // Duplicate!
```

### Steps 2-7: Apply ADR Patterns

**Follow @.cursor/rules/component-architecture.md patterns exactly.**

**Workflow checklist:**

1. **Create shared types** in `packages/design-system-shared/src/types/ComponentName/`

   - Use const objects (ADR-0003): `export const ComponentVariant = { Primary: 'primary' } as const;`
   - Derive types: `export type ComponentVariant = (typeof ComponentVariant)[keyof typeof ComponentVariant];`
   - Use `type` not `interface` for props
   - Add "Shared" suffix: `ComponentNamePropsShared`
   - Export from `packages/design-system-shared/src/index.ts` with inline `type` keyword

2. **Update React package** `src/components/ComponentName/ComponentName.types.ts`:

   - Import shared type for extension
   - Re-export all shared types
   - Extend `ComponentProps<'element'>`, add `className?: string`
   - Import ordering: shared before react

3. **Update React Native package** `src/components/ComponentName/ComponentName.types.ts`:

   - Import shared type for extension
   - Re-export all shared types
   - Extend `ViewProps`/`PressableProps`, add `twClassName?: string`
   - Import ordering: shared before react-native

4. **Remove old enums** from platform type indices:

   ```tsx
   // ❌ DELETE from src/types/index.ts:
   // export enum BadgeStatusStatus { ... }

   // ✅ Do NOT re-export in src/types/index.ts
   // Component index.ts will export directly from shared
   ```

5. **Update component index.ts** to export directly from shared:

   ```tsx
   // src/components/ComponentName/index.ts
   export {
     ComponentVariant,
     ComponentSize,
   } from '@metamask/design-system-shared';
   export { ComponentName } from './ComponentName';
   export type { ComponentProps } from './ComponentName.types';
   ```

6. **Fix import ordering** (ESLint will enforce):

   - Shared package imports before platform imports
   - Type imports before value imports

6. **Verify build/test/lint:**
   ```bash
   yarn build && yarn test && yarn lint
   ```

**Golden Path Reference:** See complete BadgeStatus implementation:

- @packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts
- @packages/design-system-react/src/components/BadgeStatus/BadgeStatus.types.ts
- @packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.types.ts

**Related PR:** https://github.com/MetaMask/metamask-design-system/pull/912 (complete migration with all file changes)

## Common Mistakes

### ❌ Using `interface` instead of `type` for Shared Props

```tsx
// ❌ Wrong - ESLint error
export interface BadgeStatusPropsShared { ... }

// ✅ Correct
export type BadgeStatusPropsShared = { ... };
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
// ❌ Wrong - React before shared
import type { ComponentProps } from 'react';
import type { BadgeStatusPropsShared } from '@metamask/design-system-shared';

// ✅ Correct - Shared before react
import type { BadgeStatusPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';
```

### ❌ Including Platform Props in Shared

```tsx
// ❌ Wrong - className in shared (violates ADR-0004)
export type BadgeStatusPropsShared = {
  status: BadgeStatusStatus;
  className?: string; // Platform-specific!
};

// ✅ Correct - className only in platform package
export type BadgeStatusPropsShared = {
  status: BadgeStatusStatus;
};

export type BadgeStatusProps = ComponentProps<'div'> &
  BadgeStatusPropsShared & {
    className?: string; // Platform layer
  };
```

## Verification Checklist

### Shared Package

- [ ] Types in `packages/design-system-shared/src/types/ComponentName/`
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
- [ ] Component `index.ts` exports directly from shared package

### React Native Package

- [ ] Component types file imports shared type for extension
- [ ] Re-exports all shared types (values and types)
- [ ] Extends `ViewProps` or `PressableProps`
- [ ] Adds `twClassName?: string`
- [ ] Import ordering correct (shared before react-native)
- [ ] Old enum removed from `src/types/index.ts`
- [ ] Component `index.ts` exports directly from shared package

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

- @.cursor/rules/component-architecture.md - All architectural patterns and decision trees (READ THIS FIRST)

### Golden Path

- @packages/design-system-shared/src/types/BadgeStatus/ - Complete example
- [PR #912](https://github.com/MetaMask/metamask-design-system/pull/912) - Complete migration

### Related Workflows

- @.cursor/rules/component-migration.md - Bringing components from extension/mobile
- @.cursor/rules/component-creation.md - Creating new components from scratch
- @.cursor/rules/styling.md - Design tokens and styling patterns

### Architecture Decision Records

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
