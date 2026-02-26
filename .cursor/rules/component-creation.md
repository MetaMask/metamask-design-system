# Component Creation

HOW-TO guide for creating components with proper conventions and architectural patterns.

## Purpose

This file is the **HOW-TO guide** for technically creating components. It's referenced by:

- @.cursor/rules/component-migration.md (extension/mobile migration workflow)
- Direct use when creating brand new components from scratch

**For architectural patterns** (ADR-0003/0004, layered architecture), see:

- @.cursor/rules/component-architecture.md

**For workflows**, see:

- @.cursor/rules/component-migration.md (bringing from extension/mobile - PRIORITY)
- @.cursor/rules/component-enum-union-migration.md (internal monorepo refactoring)

## When to Use This Guide

Use this HOW-TO when:

- ✅ Component-migration.md references this file for scaffolding steps
- ✅ Creating a brand new component from scratch (no extension/mobile version)
- ✅ Need step-by-step technical creation process

## Prerequisites

Before using this guide, understand:

- @.cursor/rules/component-architecture.md - ADR-0003/0004 patterns, layered architecture
- @.cursor/rules/styling.md - Box/Text primitives, design tokens

## Quick Reference

**Golden Path:** BadgeStatus is THE proof-of-concept. Always reference:

- @packages/design-system-shared/src/types/BadgeStatus/ (Shared types - SOURCE OF TRUTH)
- @packages/design-system-react/src/components/BadgeStatus/ (React implementation)
- @packages/design-system-react-native/src/components/BadgeStatus/ (React Native implementation)

## Step-by-Step Creation Process

### Step 1: Scaffold with Scripts

**ALWAYS use scripts** - never manually create files:

```bash
# Create component in BOTH platforms for cross-platform consistency
yarn create-component:react --name MyComponent --description "Brief description"
yarn create-component:react-native --name MyComponent --description "Brief description"
```

⚠️ **CRITICAL:** Generated templates are NOT ADR-compliant. You MUST transform them:

1. Create shared types in @metamask/design-system-shared
2. Replace template types with shared imports + platform extensions
3. Replace raw elements (div/View) with Box/Text primitives
4. Apply design token enums

### Step 2: Create Shared Types

Follow @.cursor/rules/component-architecture.md ADR-0003/0004 patterns:

```bash
mkdir -p packages/design-system-shared/src/types/MyComponent
```

**Pattern checklist:**

- ✅ Create in `packages/design-system-shared/src/types/ComponentName/`
- ✅ Use const objects (ADR-0003): `export const MyComponentVariant = { Primary: 'primary' } as const;`
- ✅ Derive types: `export type MyComponentVariant = (typeof MyComponentVariant)[keyof typeof MyComponentVariant];`
- ✅ Use `type` not `interface` for props (ESLint rule)
- ✅ Add "Shared" suffix: `ComponentNamePropsShared`
- ✅ Platform-independent properties only (no className/twClassName, no onClick/onPress)
- ✅ Export from `packages/design-system-shared/src/index.ts` with inline `type` keyword
- ✅ Component `index.ts` exports directly from shared (NOT through `src/types/index.ts`)

**Reference:** See @packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts for complete implementation.

### Steps 3-4: Update Platform Types

**Both platforms follow same pattern:**

```tsx
// Import shared type for extension
import type { MyComponentPropsShared } from '@metamask/design-system-shared';

// Re-export shared types (ADR-0004)
export {
  MyComponentVariant,
  type MyComponentPropsShared,
} from '@metamask/design-system-shared';

// Extend with platform-specific props
export type MyComponentProps = MyComponentPropsShared & ...platform extension
```

**React-specific:**

- Extend `ComponentProps<'element'>`
- Add `className?: string`
- Add `style?: React.CSSProperties`

**React Native-specific:**

- Extend `ViewProps` or `PressableProps`
- Add `twClassName?: string`

**Reference:** See BadgeStatus types in both packages for complete implementation.

### Steps 5-6: Implement Components

**Both platforms:**

- ✅ Replace template div/View with Box primitive
- ✅ Use Text component (not raw span/Text)
- ✅ Use design token enums (BoxBackgroundColor, BoxBorderRadius, TextVariant)
- ✅ Forward refs using `forwardRef`
- ✅ Set displayName: `MyComponent.displayName = 'MyComponent';`

**Pattern:**

```tsx
export const MyComponent = forwardRef<RefType, MyComponentProps>(
  ({ variant, children, ...props }, ref) => (
    <Box
      ref={ref}
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
      borderRadius={BoxBorderRadius.Md}
      {...props}
    >
      <Text variant={TextVariant.BodyMd}>{children}</Text>
    </Box>
  ),
);

MyComponent.displayName = 'MyComponent';
```

**Reference:** See @packages/design-system-react/src/components/BadgeStatus/BadgeStatus.tsx

### Step 7: Create Storybook Stories

Follow @.cursor/rules/component-documentation.md:

- ✅ Default story with all controls wired up (FIRST)
- ✅ Story per major prop (Variant, Size, IsDisabled)
- ✅ Meta with proper argTypes

### Step 8: Write Tests

Basic test pattern:

```tsx
import { render } from '@testing-library/react'; // or react-native
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders children', () => {
    const { getByText } = render(<MyComponent>Test</MyComponent>);
    expect(getByText('Test')).toBeDefined();
  });
});
```

### Step 9: Create Documentation

**React:** README.mdx with Canvas blocks
**React Native:** README.md with code examples

See @.cursor/rules/component-documentation.md for templates.

### Step 10: Verify Build

```bash
yarn build    # All packages
yarn test     # All tests
yarn lint     # Linting
yarn build-storybook
```

All should pass without errors.

## Critical Anti-Patterns

### ❌ Leaving Template Code Unchanged

```tsx
// ❌ Wrong - Using raw elements from template
export const MyComponent = ({ className, children }) => (
  <div className={className}>
    <span>{children}</span>
  </div>
);

// ✅ Correct - Box/Text primitives + design tokens
export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ children, ...props }, ref) => (
    <Box
      ref={ref}
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
      {...props}
    >
      <Text variant={TextVariant.BodyMd}>{children}</Text>
    </Box>
  ),
);
MyComponent.displayName = 'MyComponent';
```

### ❌ Using Enums Instead of Const Objects

```tsx
// ❌ Wrong - Enum (violates ADR-0003)
export enum MyComponentVariant {
  Primary = 'primary',
}

// ✅ Correct - Const object (ADR-0003)
export const MyComponentVariant = {
  Primary: 'primary',
} as const;
export type MyComponentVariant =
  (typeof MyComponentVariant)[keyof typeof MyComponentVariant];
```

### ❌ Not Creating Shared Types

```tsx
// ❌ Wrong - Types only in React package (violates ADR-0004)
// packages/design-system-react/src/components/MyComponent/MyComponent.types.ts
export type MyComponentProps = { ... }

// ✅ Correct - Shared types + platform extension (ADR-0004)
// packages/design-system-shared/src/types/MyComponent/
export type MyComponentPropsShared = { ... }
```

### ❌ Including Platform Props in Shared

```tsx
// ❌ Wrong - className in shared package
export type MyComponentPropsShared = {
  variant?: MyComponentVariant;
  className?: string; // Platform-specific!
};

// ✅ Correct - className only in platform package
export type MyComponentPropsShared = {
  variant?: MyComponentVariant;
};

export type MyComponentProps = ComponentProps<'div'> &
  MyComponentPropsShared & {
    className?: string; // Platform layer
  };
```

## Verification Checklist

### Setup & Scaffolding

- [ ] Used create-component scripts (not manual creation)
- [ ] Component exists in BOTH React and React Native

### Shared Types (ADR-0003 + ADR-0004)

- [ ] Types in `@metamask/design-system-shared/src/types/ComponentName/`
- [ ] Const objects used, NOT enums
- [ ] Shared type named `ComponentNamePropsShared` (with "Shared" suffix)
- [ ] Used `type` not `interface` for shared props
- [ ] Exported from `@metamask/design-system-shared/src/index.ts`
- [ ] Inline `type` keyword used in exports
- [ ] Component `index.ts` exports directly from shared (NOT through `src/types/index.ts`)

### Platform Types (Layered Architecture)

- [ ] Platform packages import shared type for extension
- [ ] Platform packages re-export all shared types
- [ ] Template types replaced with shared imports
- [ ] React: Extends `ComponentProps<'element'>`, adds `className?: string`
- [ ] React Native: Extends `ViewProps`/`PressableProps`, adds `twClassName?: string`
- [ ] Event handlers use idiomatic names (onClick/onPress from base types)
- [ ] Import ordering correct (shared before platform)

### Implementation

- [ ] Template div/View replaced with Box primitive
- [ ] Uses Text component (not raw span/Text)
- [ ] Design token enums used
- [ ] Component forwards refs using `forwardRef`
- [ ] Display name set

### Cross-Platform Consistency

- [ ] Identical `ComponentNamePropsShared` interface
- [ ] Same const object names and values
- [ ] Same stories structure
- [ ] Same documentation sections
- [ ] Platform differences ONLY in extension layer

### Documentation & Testing

- [ ] Storybook stories created (Default + prop stories)
- [ ] Tests written (Jest + Testing Library)
- [ ] React README.mdx with Canvas blocks
- [ ] React Native README.md with code examples

### Build Verification

- [ ] Build succeeds: `yarn build`
- [ ] Tests pass: `yarn test`
- [ ] Lint passes: `yarn lint`
- [ ] Storybook builds: `yarn build-storybook`

## References

### Golden Path Examples

**BadgeStatus** (THE proof-of-concept - always reference this):

- @packages/design-system-shared/src/types/BadgeStatus/ (Shared types - SOURCE OF TRUTH)
- @packages/design-system-react/src/components/BadgeStatus/ (React)
- @packages/design-system-react-native/src/components/BadgeStatus/ (React Native)

Other examples:

- @packages/design-system-react/src/components/Box/ (Foundational primitive)
- @packages/design-system-react/src/components/Button/ (Complex interactive)

### Required Reading

- @.cursor/rules/component-architecture.md - Architectural patterns foundation
- @.cursor/rules/styling.md - Box/Text primitives, design tokens
- @.cursor/rules/component-documentation.md - Storybook and README standards

### Used By

- @.cursor/rules/component-migration.md - Extension/mobile migration workflow
- Direct use for brand new components from scratch

### Related Workflows

- @.cursor/rules/component-enum-union-migration.md - Internal ADR migration

### Documentation

- @docs/create-component.md - Script usage and options
- @docs/component-readme-examples/ - README templates

### MetaMask Standards

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)
- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
