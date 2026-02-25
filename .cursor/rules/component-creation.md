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

## Step-by-Step Creation Process

### Step 1: Scaffold with create-component Scripts

**ALWAYS use scripts** - never manually create files:

```bash
# Create component in BOTH platforms for cross-platform consistency
yarn create-component:react --name MyComponent --description "Brief description"
yarn create-component:react-native --name MyComponent --description "Brief description"
```

**What this generates:**

- Component directory structure
- Basic component file with template
- Types file with template types
- Test file
- Index file for exports

⚠️ **IMPORTANT:** Generated templates DO NOT include ADR-0003/0004 patterns - you MUST transform them.

**Template locations (scaffolding only - NOT ADR-compliant):**

- React: @packages/design-system-react/scripts/create-component/ComponentName/
- React Native: @packages/design-system-react-native/scripts/create-component/ComponentName/

Templates provide basic structure only. You must:

1. Create shared types in @metamask/design-system-shared
2. Replace template types with shared type imports + platform extensions
3. Replace raw elements (div/View) with Box/Text primitives
4. Apply design token enums

### Step 2: Create Shared Types

Apply @.cursor/rules/component-architecture.md patterns.

**Golden Path Example:** See BadgeStatus for the complete implementation:

- @packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts

```bash
# Create types directory in shared package
mkdir -p packages/design-system-shared/src/types/MyComponent
```

**Pattern to follow (see BadgeStatus for real implementation):**

- ✅ Use `const` with `as const` for variant/size enums (ADR-0003)
- ✅ Derive type using `typeof` and `keyof`
- ✅ Use `type` not `interface` for props (ESLint rule)
- ✅ Add "Shared" suffix to props type (`ComponentNamePropsShared`)
- ✅ Use @.cursor/rules/component-architecture.md decision tree for what goes in shared
- ✅ Platform-independent properties only (no className/twClassName, no onClick/onPress)

Example structure (adapt based on your component's needs):

```tsx
// Const objects with derived types
export const MyComponentVariant = { Primary: 'primary', ... } as const;
export type MyComponentVariant = (typeof MyComponentVariant)[keyof typeof MyComponentVariant];

// Shared props type
export type MyComponentPropsShared = {
  variant?: MyComponentVariant;
  // ... other shared props
};
```

**Always reference the BadgeStatus implementation for complete, real-world patterns.**

```tsx
// packages/design-system-shared/src/types/MyComponent/index.ts
export {
  MyComponentVariant,
  MyComponentSize,
  type MyComponentPropsShared,
} from './MyComponent.types';

// packages/design-system-shared/src/index.ts
// MyComponent types (ADR-0003 + ADR-0004)
export {
  MyComponentVariant,
  MyComponentSize,
  type MyComponentPropsShared,
} from './types/MyComponent';
```

### Step 3: Update React Package Types

Replace generated template types with shared type imports and platform extension:

```tsx
// packages/design-system-react/src/components/MyComponent/MyComponent.types.ts

// Import shared type for extension
import type { MyComponentPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

// Re-export shared types (ADR-0004)
export {
  MyComponentVariant,
  MyComponentSize,
  type MyComponentPropsShared,
} from '@metamask/design-system-shared';

/**
 * MyComponent props (React platform-specific)
 * Extends shared props with React-specific platform concerns
 */
export type MyComponentProps = ComponentProps<'div'> & // or 'button', 'label', etc.
  MyComponentPropsShared & {
    /**
     * Optional CSS classes (Tailwind CSS)
     */
    className?: string;
    /**
     * Optional inline styles
     * Should be used sparingly
     */
    style?: React.CSSProperties;
    // onClick comes from ComponentProps<'div'> if needed
  };
```

**Key points:**

- ✅ Import shared type for local extension
- ✅ Re-export all shared types for consumers
- ✅ Extend appropriate `ComponentProps<'element'>`
- ✅ Add `className?: string` (React-specific)
- ✅ Import ordering: shared before react

### Step 4: Update React Native Package Types

Same pattern as React, with React Native-specific extensions:

```tsx
// packages/design-system-react-native/src/components/MyComponent/MyComponent.types.ts

// Import shared type for extension
import type { MyComponentPropsShared } from '@metamask/design-system-shared';
import type { ViewProps } from 'react-native';
// or: import type { PressableProps } from 'react-native'; for interactive

// Re-export shared types (ADR-0004)
export {
  MyComponentVariant,
  MyComponentSize,
  type MyComponentPropsShared,
} from '@metamask/design-system-shared';

/**
 * MyComponent props (React Native platform-specific)
 * Extends shared props with React Native-specific platform concerns
 */
export type MyComponentProps = MyComponentPropsShared &
  Omit<ViewProps, 'children'> & {
    // or PressableProps for interactive
    /**
     * Optional TWRNC classes
     */
    twClassName?: string;
    // onPress comes from PressableProps if needed
  };
```

**Key points:**

- ✅ Import shared type for local extension
- ✅ Re-export all shared types for consumers
- ✅ Extend `ViewProps` (or `PressableProps` for interactive)
- ✅ Add `twClassName?: string` (React Native-specific)
- ✅ Import ordering: shared before react-native

### Step 5: Implement Component (React)

Replace template div with Box primitive and apply design tokens:

```tsx
// packages/design-system-react/src/components/MyComponent/MyComponent.tsx

import { forwardRef } from 'react';
import { Box, BoxBackgroundColor, BoxBorderRadius } from '../Box';
import { Text, TextVariant } from '../Text';
import type { MyComponentProps } from './MyComponent.types';
import { MyComponentVariant } from './MyComponent.types';

/**
 * MyComponent description
 */
export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  (
    {
      variant = MyComponentVariant.Primary,
      size,
      isDisabled = false,
      children,
      ...props
    },
    ref,
  ) => (
    <Box
      ref={ref}
      as="div" // or "button", "label", etc.
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

**Key points:**

- ✅ Use Box primitive (not raw div from template)
- ✅ Use Text component (not raw span)
- ✅ Use design token enums (BoxBackgroundColor, BoxBorderRadius)
- ✅ Forward refs using `forwardRef`
- ✅ Set displayName for debugging

### Step 6: Implement Component (React Native)

Same pattern as React, with React Native primitives:

```tsx
// packages/design-system-react-native/src/components/MyComponent/MyComponent.tsx

import React, { forwardRef } from 'react';
import { Box, BoxBackgroundColor, BoxBorderRadius } from '../Box';
import { Text, TextVariant } from '../Text';
import type { MyComponentProps } from './MyComponent.types';
import { MyComponentVariant } from './MyComponent.types';

/**
 * MyComponent description
 */
export const MyComponent = forwardRef<
  React.ElementRef<typeof Box>,
  MyComponentProps
>(
  (
    {
      variant = MyComponentVariant.Primary,
      size,
      isDisabled = false,
      children,
      ...props
    },
    ref,
  ) => (
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

**Key points:**

- ✅ Use Box primitive (not raw View from template)
- ✅ Use Text component (not raw Text from react-native)
- ✅ Use design token enums
- ✅ Forward refs using `forwardRef`
- ✅ Set displayName for debugging

### Step 7: Create Storybook Stories

Follow @.cursor/rules/component-documentation.md patterns:

**Both platforms need:**

1. Default story with all controls wired up
2. Story per major prop (Variant, Size, IsDisabled)
3. Meta with proper argTypes

**React** - Stories with interactive controls for README.mdx Canvas blocks
**React Native** - Stories for manual testing

### Step 8: Write Tests

Create tests for both platforms:

```tsx
// MyComponent.test.tsx (both platforms)
import { render } from '@testing-library/react'; // or react-native
import { MyComponent } from './MyComponent';
import { MyComponentVariant } from './MyComponent.types';

describe('MyComponent', () => {
  it('renders children', () => {
    const { getByText } = render(<MyComponent>Test</MyComponent>);
    expect(getByText('Test')).toBeDefined();
  });

  it('applies variant correctly', () => {
    const { container } = render(
      <MyComponent variant={MyComponentVariant.Primary}>Test</MyComponent>,
    );
    // Test variant styling is applied
  });

  it('respects disabled state', () => {
    const { getByText } = render(<MyComponent isDisabled>Test</MyComponent>);
    // Test disabled behavior
  });
});
```

### Step 9: Create Documentation

**React** - README.mdx with Canvas blocks:

```mdx
import { Canvas, Meta } from '@storybook/blocks';
import * as MyComponentStories from './MyComponent.stories';

<Meta of={MyComponentStories} />

# MyComponent

Brief description.

## Usage

\`\`\`tsx
import { MyComponent } from '@metamask/design-system-react';
\`\`\`

<Canvas of={MyComponentStories.Default} />

## Props

### Variant

<Canvas of={MyComponentStories.Variant} />
```

**React Native** - README.md with code examples:

```markdown
# MyComponent

Brief description.

## Usage

\`\`\`tsx
import { MyComponent } from '@metamask/design-system-react-native';

<MyComponent variant={MyComponentVariant.Primary}>
  Content
</MyComponent>
\`\`\`

## Props

### variant

...
```

### Step 10: Verify Build

Test that everything works:

```bash
# Build all packages
yarn build

# Run tests
yarn test

# Run linting
yarn lint

# Build Storybook
yarn build-storybook
```

All should pass without errors.

## Critical Patterns

### Always Use Box/Text Primitives

```tsx
// ❌ Wrong - Using raw elements from template
export const MyComponent = ({ children, className }) => (
  <div className={className}>
    <span>{children}</span>
  </div>
);

// ✅ Correct - Using Box/Text primitives
export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ children, ...props }, ref) => (
    <Box
      ref={ref}
      as="div"
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
      {...props}
    >
      <Text variant={TextVariant.BodyMd}>{children}</Text>
    </Box>
  ),
);
```

### Always Use Design Token Enums

```tsx
// ❌ Wrong - Hardcoded values
<Box style={{ backgroundColor: '#037DD6', borderRadius: 8 }}>

// ✅ Correct - Design token enums
<Box
  backgroundColor={BoxBackgroundColor.PrimaryDefault}
  borderRadius={BoxBorderRadius.Md}
>
```

### Always Forward Refs

```tsx
// ❌ Wrong - No ref forwarding
export const MyComponent = (props: MyComponentProps) => { ... };

// ✅ Correct - Forward refs
export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  (props, ref) => <Box ref={ref} {...props} />
);
```

### Always Set Display Name

```tsx
// ❌ Wrong - Missing displayName
export const MyComponent = forwardRef(...);

// ✅ Correct - Set displayName
export const MyComponent = forwardRef(...);
MyComponent.displayName = 'MyComponent';
```

## Common Mistakes

### ❌ Leaving Template Code Unchanged

Generated templates use basic patterns - you must transform them:

- Replace div/View with Box
- Replace span/Text with Text component
- Add shared types to shared package
- Apply ADR-0003/0004 patterns

### ❌ Not Creating Shared Types

Don't skip the shared package - it's required for ADR-0004:

```tsx
// ❌ Wrong - Types only in React package
// packages/design-system-react/src/components/MyComponent/MyComponent.types.ts
export type MyComponentProps = { ... }

// ✅ Correct - Shared types + platform extension
// packages/design-system-shared/src/types/MyComponent/
export type MyComponentPropsShared = { ... }
```

### ❌ Using Enums Instead of Const Objects

```tsx
// ❌ Wrong - Enum
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

### ❌ Including Platform Props in Shared

```tsx
// ❌ Wrong - className in shared
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

After creating component, verify:

### Setup & Scaffolding

- [ ] Used create-component scripts (not manual creation)
- [ ] Component exists in BOTH React and React Native

### Shared Types (ADR-0003 + ADR-0004)

- [ ] Types defined in `@metamask/design-system-shared/src/types/ComponentName/`
- [ ] Const objects used (ADR-0003), NOT enums
- [ ] Shared type named `ComponentNamePropsShared` (with "Shared" suffix)
- [ ] Used `type` not `interface` for shared props
- [ ] Exported from `@metamask/design-system-shared/src/index.ts`
- [ ] Inline `type` keyword used in exports

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
- [ ] Design token enums used (BoxBackgroundColor, BoxBorderRadius)
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

## Golden Path Examples

⚠️ **Templates vs Completed Components:**

- **Templates** (scaffolding only - NOT ADR-compliant):

  - @packages/design-system-react/scripts/create-component/ComponentName/
  - @packages/design-system-react-native/scripts/create-component/ComponentName/
  - Basic structure only - must be transformed

- **Completed components** (following all ADR patterns - USE THESE AS REFERENCE):

**Golden Path: BadgeStatus** (THE proof-of-concept - always reference this):

- @packages/design-system-shared/src/types/BadgeStatus/ (Shared types - SOURCE OF TRUTH)
- @packages/design-system-react/src/components/BadgeStatus/ (React implementation)
- @packages/design-system-react-native/src/components/BadgeStatus/ (React Native implementation)

Other examples:

- @packages/design-system-react/src/components/Box/ (Foundational primitive)
- @packages/design-system-react/src/components/Button/ (Complex interactive component)

## References

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
