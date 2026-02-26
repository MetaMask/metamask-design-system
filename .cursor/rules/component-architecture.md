# Component Architecture

Foundation architectural patterns and decisions for MetaMask Design System components.

## Purpose

This file defines the architectural patterns that ALL component workflows must follow:

- [ADR-0003](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md): String unions with const objects (no enums)
- [ADR-0004](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md): Centralized types in shared package
- Platform-Specific Props: Layered architecture pattern
- Cross-platform consistency principles

**This is the foundation** - other component rules reference these patterns.

## ADR-0003: String Unions with Const Objects

Use const objects with derived string union types instead of TypeScript enums.

```tsx
// ✅ Correct - Const object + derived union type
export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

// ❌ Wrong - TypeScript enum
export enum ButtonVariant {
  Primary = 'primary',
}
```

**Reference:** [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)

## ADR-0004: Centralized Types Architecture

Define shared types once in `@metamask/design-system-shared`, platform packages re-export and extend.

**Three-layer architecture:**

```
@metamask/design-system-shared (source of truth)
    ↓
    ├── @metamask/design-system-react (re-export + extend)
    └── @metamask/design-system-react-native (re-export + extend)
```

**Minimal pattern:**

```tsx
// Shared: Const objects + shared props with "Shared" suffix
export const ButtonVariant = { Primary: 'primary' } as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];
export type ButtonPropsShared = { variant?: ButtonVariant };

// React: Re-export + extend with ComponentProps + className
export {
  ButtonVariant,
  type ButtonPropsShared,
} from '@metamask/design-system-shared';
export type ButtonProps = ComponentProps<'button'> &
  ButtonPropsShared & { className?: string };

// React Native: Re-export + extend with PressableProps + twClassName
export {
  ButtonVariant,
  type ButtonPropsShared,
} from '@metamask/design-system-shared';
export type ButtonProps = ButtonPropsShared &
  PressableProps & { twClassName?: string };
```

**See complete implementation:** @packages/design-system-shared/src/types/BadgeStatus/

**Reference:** [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

## Platform-Specific Props: Layered Architecture

Separate shared design system concerns from platform-specific implementation concerns.

**Naming:**

- Shared: `ComponentNamePropsShared` (with "Shared" suffix)
- Platform: `ComponentNameProps` (no suffix)

**What goes where:**

| Concern                 | Location | Example                                      |
| ----------------------- | -------- | -------------------------------------------- |
| Visual variants, states | Shared   | `variant`, `size`, `isDisabled`, `isLoading` |
| Component structure     | Shared   | `children`, `label`, `description`           |
| Platform interaction    | Platform | `onClick`/`onPress`, event handlers          |
| Platform styling        | Platform | `className`/`twClassName`                    |
| Platform base types     | Platform | `ComponentProps<'div'>`/`ViewProps`          |

**Event handlers:**

- ❌ NO unified handlers in shared (no `onAction`)
- ✅ React: `onClick` from `ComponentProps<'element'>`
- ✅ React Native: `onPress` from `PressableProps`

**Styling props:**

- ❌ NO className/twClassName in shared
- ✅ React: `className?: string` (platform layer)
- ✅ React Native: `twClassName?: string` (platform layer)

## Export Pattern: Avoiding TypeScript Errors

When exporting both values and types with the same name, use inline `type` keyword to avoid "Duplicate identifier" errors:

```tsx
// ✅ Correct - Inline type keyword
export {
  BadgeStatusStatus,
  BadgeStatusSize,
  type BadgeStatusPropsShared, // inline "type" keyword
} from '@metamask/design-system-shared';

// ❌ Wrong - Separate type exports cause duplicate identifier errors
export { BadgeStatusStatus, BadgeStatusSize } from '...';
export type { BadgeStatusStatus, BadgeStatusSize } from '...'; // Error!
```

## Component Index Export Pattern

**Component `index.ts` files export directly from shared package, NOT through `src/types/index.ts`:**

```tsx
// ✅ Correct - Component index.ts exports directly from shared
// packages/design-system-react/src/components/BadgeStatus/index.ts
export {
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-shared';
export { BadgeStatus } from './BadgeStatus';
export type { BadgeStatusProps } from './BadgeStatus.types';

// ❌ Wrong - Don't re-export through src/types/index.ts
// packages/design-system-react/src/components/BadgeStatus/index.ts
export { BadgeStatusStatus, BadgeStatusSize } from '../../types';
export { BadgeStatus } from './BadgeStatus';
export type { BadgeStatusProps } from './BadgeStatus.types';
```

**Platform type indices (`src/types/index.ts`) should NOT re-export shared types:**

```tsx
// ✅ Correct - src/types/index.ts does NOT re-export shared types
// packages/design-system-react/src/types/index.ts
// (Remove old enum definitions, don't add re-exports)

// ❌ Wrong - Don't re-export shared types here
// packages/design-system-react/src/types/index.ts
export { BadgeStatusStatus, BadgeStatusSize } from '@metamask/design-system-shared';
```

## Cross-Platform Consistency

**Required consistency:**

- ✅ Same `ComponentNamePropsShared` interface
- ✅ Same const object names and values
- ✅ Platform differences ONLY in extension layer

**Verification checklist:**

- [ ] Shared types in `@metamask/design-system-shared/src/types/ComponentName/`
- [ ] Const objects (ADR-0003), NOT enums
- [ ] Shared interface named `ComponentNamePropsShared` (with "Shared" suffix)
- [ ] Platform packages re-export and extend shared types
- [ ] React: Extends `ComponentProps<'element'>`, adds `className?: string`
- [ ] React Native: Extends `ViewProps`/`PressableProps`, adds `twClassName?: string`
- [ ] Component `index.ts` exports directly from `@metamask/design-system-shared`
- [ ] Platform `src/types/index.ts` does NOT re-export shared types
- [ ] NO className/twClassName in shared package
- [ ] NO unified event handlers in shared package

## Golden Path: BadgeStatus

**BadgeStatus is THE proof-of-concept for ADR-0003 and ADR-0004. Always reference when in doubt.**

**Complete implementation:**

- @packages/design-system-shared/src/types/BadgeStatus/ (Shared types - SOURCE OF TRUTH)
- @packages/design-system-react/src/components/BadgeStatus/ (React implementation)
- @packages/design-system-react-native/src/components/BadgeStatus/ (React Native implementation)

**Other examples:**

- @packages/design-system-react/src/components/Box/ (Foundational)
- @packages/design-system-react/src/components/Button/ (Complex interactive)

## References

### Architecture Decision Records

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)

### Related Cursor Rules

- @.cursor/rules/component-creation.md - HOW-TO guide for creating components
- @.cursor/rules/component-migration.md - Extension/mobile migration workflow
- @.cursor/rules/component-enum-union-migration.md - Internal ADR migration
- @.cursor/rules/styling.md - Design tokens and styling patterns

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
