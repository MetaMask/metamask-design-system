# Component Architecture

Foundation architectural patterns and decisions for MetaMask Design System components.

## Purpose

This file defines the architectural patterns that ALL component workflows must follow:

- ADR-0003: String unions with const objects (no enums)
- ADR-0004: Centralized types in shared package
- Platform-Specific Props: Layered architecture pattern
- Cross-platform consistency principles

**This is the foundation** - other component rules reference these patterns.

## ADR-0003: String Unions with Const Objects

**Decision:** Use const objects with derived string union types instead of TypeScript enums.

### Pattern

```tsx
// ✅ Correct - Const object + derived union type
export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

// ❌ Wrong - TypeScript enum
export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}
```

### Benefits

- **CVA Integration**: Enables Class Variance Authority for modern styling patterns
- **Better Tree-Shaking**: TypeScript tooling can optimize imports more effectively
- **Backwards Compatible**: Consumers can use string literals OR const values
- **Type Safety**: Maintains full type checking while allowing flexible usage

### Usage

```tsx
// Both work equally well:
<Button variant={ButtonVariant.Primary} />
<Button variant="primary" />

// TypeScript enforces valid values in both cases
<Button variant="invalid" /> // ❌ Type error
```

### Reference

[ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/pull/127)

## ADR-0004: Centralized Types Architecture

**Decision:** Define shared types once in `@metamask/design-system-shared`, platform packages re-export and extend.

### Problem

- ~1800 lines of duplicated types across React and React Native packages
- Drift between platform implementations
- Violates DRY principle and cross-platform consistency

### Solution

Three-layer architecture:

```
@metamask/design-system-shared (source of truth)
    ↓
    ├── @metamask/design-system-react (re-export + extend)
    └── @metamask/design-system-react-native (re-export + extend)
```

### Pattern

```tsx
// ==========================================
// LAYER 1: Shared Package (Source of Truth)
// ==========================================
// packages/design-system-shared/src/types/Button/Button.types.ts

export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

export const ButtonSize = {
  Sm: 'sm',
  Md: 'md',
  Lg: 'lg',
} as const;
export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

// Use "Shared" suffix for shared props type
export type ButtonPropsShared = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
};

// ==========================================
// LAYER 2: React Package (Re-export + Extend)
// ==========================================
// packages/design-system-react/src/components/Button/Button.types.ts

// Re-export shared types
export {
  ButtonVariant,
  ButtonSize,
  type ButtonPropsShared,
} from '@metamask/design-system-shared';

import type { ButtonPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

// Extend with platform-specific props
export type ButtonProps = ComponentProps<'button'> &
  ButtonPropsShared & {
    className?: string;
    style?: React.CSSProperties;
    // onClick comes from ComponentProps<'button'>
  };

// ==========================================
// LAYER 3: React Native Package (Re-export + Extend)
// ==========================================
// packages/design-system-react-native/src/components/Button/Button.types.ts

// Re-export shared types
export {
  ButtonVariant,
  ButtonSize,
  type ButtonPropsShared,
} from '@metamask/design-system-shared';

import type { ButtonPropsShared } from '@metamask/design-system-shared';
import type { PressableProps } from 'react-native';

// Extend with platform-specific props
export type ButtonProps = ButtonPropsShared &
  Omit<PressableProps, 'children'> & {
    twClassName?: string;
    // onPress comes from PressableProps
  };
```

### Benefits

- **Single Source of Truth**: Types defined once, consumed everywhere
- **Zero Duplication**: Eliminates ~1800 lines of duplicate code
- **Backwards Compatible**: Consumers import from platform packages as before
- **Consistent APIs**: Impossible for platforms to drift apart

### Reference

[ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/pull/128)

## Platform-Specific Props: Layered Architecture

**Decision:** Separate shared design system concerns from platform-specific implementation concerns.

### Naming Convention

- **Shared interface**: `ComponentNamePropsShared` (with "Shared" suffix)
- **Platform interface**: `ComponentNameProps` (final exported type, no suffix)

```tsx
// ✅ Correct
export type BadgeStatusPropsShared = { ... };
export type BadgeStatusProps = ...PropsShared & { ... };

// ❌ Wrong - No "Shared" suffix
export type BadgeStatusProps = { ... }; // in shared package
```

### Decision Tree: What Goes Where?

| Concern                  | Location | Example                                            |
| ------------------------ | -------- | -------------------------------------------------- |
| **Visual variants**      | Shared   | `BadgeStatusStatus`, `ButtonVariant`, `ButtonSize` |
| **Design tokens**        | Shared   | Colors, spacing, borders, radii                    |
| **Behavioral states**    | Shared   | `isDisabled`, `isLoading`, `isSelected`            |
| **Component structure**  | Shared   | `children`, `label`, `description`                 |
| **Platform interaction** | Platform | `onClick`/`onPress`, `onFocus`/`onBlur`            |
| **Platform styling**     | Platform | `className`/`twClassName`                          |
| **Platform base types**  | Platform | `ComponentProps<'div'>`/`ViewProps`                |
| **Platform constraints** | Platform | `htmlFor`, `testID`, accessibility props           |

### Quick Decision Rules

**Put in Shared package when:**

- It affects visual appearance (variants, sizes, colors)
- It's a behavioral state (isDisabled, isLoading)
- Both platforms need it identically
- It's design system logic (status, variant, size)

**Put in Platform package when:**

- It's how users interact (onClick vs onPress)
- It's platform-specific styling (className vs twClassName)
- It extends platform base types (ComponentProps vs ViewProps)
- Only one platform needs it (htmlFor, testID)

### Event Handlers: Use Idiomatic Platform Names

**DO NOT create unified handler names** - use idiomatic platform conventions instead.

```tsx
// ✅ Correct - No event handlers in shared package
export type CheckboxPropsShared = {
  isSelected: boolean;
  isDisabled?: boolean;
  label?: string;
  // NO onClick, onPress, or unified "onAction" here
};

// React extends with onClick via ComponentProps
export type CheckboxProps = ComponentProps<'label'> &
  CheckboxPropsShared & {
    className?: string;
    // onClick comes from ComponentProps<'label'>
  };

// React Native extends with onPress via PressableProps
export type CheckboxProps = CheckboxPropsShared &
  Omit<PressableProps, 'children'> & {
    twClassName?: string;
    // onPress comes from PressableProps
  };

// ❌ Wrong - Unified handler in shared package
export type CheckboxPropsShared = {
  onAction?: () => void; // Don't abstract platform differences
};
```

**Why idiomatic names:**

- Maintains platform conventions and developer familiarity
- onClick and onPress have different semantics (mouse vs touch)
- Consumers expect platform-native APIs
- Base types provide these handlers automatically

### className vs twClassName

Styling props are **always platform-specific** - never in shared package.

```tsx
// ✅ Correct - Styling props in platform packages only

// React package
export type BadgeStatusProps = ComponentProps<'div'> &
  BadgeStatusPropsShared & {
    className?: string; // React-specific (Tailwind CSS)
    style?: React.CSSProperties;
  };

// React Native package
export type BadgeStatusProps = BadgeStatusPropsShared &
  ViewProps & {
    twClassName?: string; // React Native-specific (TWRNC)
  };

// ❌ Wrong - Styling prop in shared package
export type BadgeStatusPropsShared = {
  styleOverride?: string; // Don't do this
};
```

### Complete Example: BadgeStatus

BadgeStatus is the proof-of-concept implementation demonstrating the complete layered architecture pattern. **Always reference BadgeStatus when in doubt.**

See the actual implementation (SOURCE OF TRUTH):

- **Shared types**: @packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts

  - Const objects with derived union types (ADR-0003)
  - `BadgeStatusPropsShared` type with "Shared" suffix (ADR-0004)
  - Platform-independent properties only

- **React extension**: @packages/design-system-react/src/components/BadgeStatus/BadgeStatus.types.ts

  - Re-exports shared types
  - Extends `ComponentProps<'div'>` with `BadgeStatusPropsShared`
  - Adds `className?: string` (React-specific)

- **React Native extension**: @packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.types.ts
  - Re-exports shared types
  - Extends `ViewProps` with `BadgeStatusPropsShared`
  - Adds `twClassName?: string` (React Native-specific)

This implementation demonstrates:

- ✅ Const objects instead of enums (ADR-0003)
- ✅ Shared types in centralized package (ADR-0004)
- ✅ Platform packages re-export and extend
- ✅ "Shared" suffix on shared props type
- ✅ Platform-specific concerns only in extension layer

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

## Cross-Platform Consistency

Ensure identical shared APIs across platforms:

### Required Consistency

- ✅ **Same interface**: `ComponentNamePropsShared` must be identical
- ✅ **Same const object names**: `ButtonVariant`, `ButtonSize`
- ✅ **Same const object values**: `{ Primary: 'primary' }`
- ✅ **Same stories structure**: Default story + story per prop
- ✅ **Same documentation sections**: Props, Usage, Accessibility
- ✅ **Platform differences ONLY in extension**: className/twClassName, onClick/onPress

### Verification

After defining types, verify:

- [ ] Shared types defined in `@metamask/design-system-shared/src/types/ComponentName/`
- [ ] Const objects used (ADR-0003), NOT enums
- [ ] Shared interface named `ComponentNamePropsShared` (with "Shared" suffix)
- [ ] Platform packages import and re-export shared types
- [ ] Platform packages extend with platform-specific props
- [ ] React: Extends `ComponentProps<'element'>`, adds `className?: string`
- [ ] React Native: Extends `ViewProps` or `PressableProps`, adds `twClassName?: string`
- [ ] Event handlers use idiomatic names (onClick/onPress from base types)
- [ ] NO className/twClassName in shared package
- [ ] NO unified event handlers in shared package

## Golden Path: BadgeStatus

**BadgeStatus is THE proof-of-concept implementation of ADR-0003 and ADR-0004. Always reference BadgeStatus when in doubt.**

**Complete implementation (SOURCE OF TRUTH):**

- **Shared types**: @packages/design-system-shared/src/types/BadgeStatus/

  - `BadgeStatus.types.ts` - Const objects, derived types, shared props
  - `index.ts` - Local exports
  - Re-exported from @packages/design-system-shared/src/index.ts

- **React implementation**: @packages/design-system-react/src/components/BadgeStatus/

  - `BadgeStatus.types.ts` - Re-exports shared types + React extension
  - `BadgeStatus.tsx` - Component implementation with Box/Text primitives
  - Re-exported from @packages/design-system-react/src/types/index.ts

- **React Native implementation**: @packages/design-system-react-native/src/components/BadgeStatus/
  - `BadgeStatus.types.ts` - Re-exports shared types + React Native extension
  - `BadgeStatus.tsx` - Component implementation with Box/Text primitives
  - Re-exported from @packages/design-system-react-native/src/types/index.ts

**Other examples:**

- @packages/design-system-react/src/components/Box/ (Foundational component)
- @packages/design-system-react/src/components/Button/ (Complex interactive component)

## Future Patterns

This file will expand to include:

- **Composition patterns** - How components compose together
- **Compound components** - Parent/child component relationships
- **Render props** - Flexible rendering patterns
- **Component variants (CVA)** - Class Variance Authority integration

## References

### Architecture Decision Records

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/pull/127)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/pull/128)

### Related Cursor Rules

- @.cursor/rules/component-creation.md - HOW-TO guide for creating components
- @.cursor/rules/component-migration.md - Extension/mobile migration workflow
- @.cursor/rules/component-enum-union-migration.md - Internal ADR migration
- @.cursor/rules/styling.md - Design tokens and styling patterns

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
