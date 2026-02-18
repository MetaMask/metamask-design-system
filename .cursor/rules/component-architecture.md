# Component Architecture

Foundation architectural patterns and decisions for MetaMask Design System components.

## Purpose

This file defines the architectural patterns that ALL component workflows must follow:

- ADR-0003: String unions with const objects (no enums)
- ADR-0004: Centralized types in shared package
- Platform-Specific Props: Layered architecture pattern
- Cross-platform consistency principles

**This is the foundation** - other component rules reference these patterns.

## Critical Rules

**ADR-0003: Const Objects (NOT Enums)**

- ✅ **ALWAYS** use `export const` with `as const` for variants/sizes
- ✅ **ALWAYS** derive type using `typeof` and `keyof`
- ❌ **NEVER** use TypeScript `enum`

**ADR-0004: Centralized Types**

- ✅ **ALWAYS** define shared types in `@metamask/design-system-shared`
- ✅ **ALWAYS** use `ComponentNamePropsShared` suffix for shared interfaces
- ✅ **ALWAYS** re-export shared types from platform packages
- ❌ **NEVER** duplicate type definitions across platforms

**Platform-Specific Props**

- ✅ **ALWAYS** use `className` in React, `twClassName` in React Native
- ✅ **ALWAYS** use idiomatic event handlers (onClick/onPress from base types)
- ❌ **NEVER** put className/twClassName in shared package
- ❌ **NEVER** create unified event handler names (onAction, onTap, etc.)

**Export Pattern**

- ✅ **ALWAYS** use inline `type` keyword: `export { Variant, type Props }`
- ❌ **NEVER** use separate type exports (causes duplicate identifier errors)

## Commands

```bash
# Verify types build correctly
yarn build

# Run tests
yarn test

# Check linting (includes import order verification)
yarn lint
```

## ADR-0003: String Unions with Const Objects

**Decision:** Use const objects with derived string union types instead of TypeScript enums.

### Pattern

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

### Benefits

- **CVA Integration**: Enables Class Variance Authority for modern styling patterns
- **Better Tree-Shaking**: TypeScript tooling can optimize imports more effectively
- **Backwards Compatible**: Consumers can use string literals OR const values
- **Type Safety**: Maintains full type checking while allowing flexible usage

### Reference

[ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/pull/127)

## ADR-0004: Centralized Types Architecture

**Decision:** Define shared types once in `@metamask/design-system-shared`, platform packages re-export and extend.

### Three-Layer Architecture

```
@metamask/design-system-shared (source of truth)
    ↓
    ├── @metamask/design-system-react (re-export + extend)
    └── @metamask/design-system-react-native (re-export + extend)
```

### Pattern Summary

```tsx
// Shared Package - Design system concerns only
export const BadgeStatusStatus = { Active: 'active', ... } as const;
export type BadgeStatusStatus = (typeof BadgeStatusStatus)[keyof typeof BadgeStatusStatus];

export type BadgeStatusPropsShared = {
  status: BadgeStatusStatus;
  hasBorder?: boolean;
};

// React Package - Re-export + extend with platform props
export { BadgeStatusStatus, type BadgeStatusPropsShared } from '@metamask/design-system-shared';
export type BadgeStatusProps = ComponentProps<'div'> & BadgeStatusPropsShared & {
  className?: string;
};

// React Native Package - Re-export + extend with platform props
export { BadgeStatusStatus, type BadgeStatusPropsShared } from '@metamask/design-system-shared';
export type BadgeStatusProps = BadgeStatusPropsShared & ViewProps & {
  twClassName?: string;
};
```

**See @packages/design-system-shared/src/types/BadgeStatus/ for complete example.**

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
export type BadgeStatusPropsShared = { ... }
export type BadgeStatusProps = BadgeStatusPropsShared & { ... }

// ❌ Wrong - No "Shared" suffix
export type BadgeStatusProps = { ... } // in shared package
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
- ✅ **Platform differences ONLY in extension**: className/twClassName, onClick/onPress

## Verification

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
- [ ] Build succeeds: `yarn build`
- [ ] Tests pass: `yarn test`
- [ ] Lint passes: `yarn lint`

## Golden Path Examples

**BadgeStatus is the complete proof-of-concept demonstrating all patterns:**

Once [PR #912](https://github.com/MetaMask/metamask-design-system/pull/912) is merged, BadgeStatus will be the golden path reference:

- `packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts` - Shared types with ADR-0003 const objects
- `packages/design-system-react/src/components/BadgeStatus/BadgeStatus.types.ts` - React extension with `className`
- `packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.types.ts` - React Native extension with `twClassName`

This demonstrates:

- ✅ ADR-0003: Const objects with string unions
- ✅ ADR-0004: Centralized types in shared package
- ✅ Platform-specific props (className/twClassName)
- ✅ Export patterns with inline `type` keyword
- ✅ Cross-platform consistency

## References

### Architecture Decision Records

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/pull/127)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/pull/128)

### Related Cursor Rules

- @.cursor/rules/styling.md - Design tokens and styling patterns
- @.cursor/rules/component-documentation.md - Storybook and README standards
- @.cursor/rules/figma-integration.md - Code Connect

### MetaMask Standards

- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
