# Component Creation

Automated component scaffolding and architectural patterns for React and React Native components.

## Critical Rules

### Always Use create-component Scripts

- **ALWAYS** use `yarn create-component:react` or `yarn create-component:react-native`
- **NEVER** manually create component files - scripts ensure consistent structure
- **ALWAYS** create components in BOTH platforms for cross-platform consistency
- **Templates generate base structure** - you must then apply ADR-0003/0004 patterns

```bash
# ✅ Correct - Using create-component scripts
yarn create-component:react --name Button --description "Interactive button component"
yarn create-component:react-native --name Button --description "Interactive button component"

# ❌ Wrong - Manually creating files
mkdir packages/design-system-react/src/components/Button
```

**Note:** Templates are located at:

- React: `@packages/design-system-react/scripts/create-component/ComponentName/`
- React Native: `@packages/design-system-react-native/scripts/create-component/ComponentName/`

### Type Definitions (ADR-0004: Centralized Types)

**The generated templates DO NOT include this pattern yet - you must add it manually.**

- **ALWAYS** define shared types in `@metamask/design-system-shared/src/types/ComponentName/`
- **ALWAYS** re-export shared types from platform packages for backwards compatibility
- **NEVER** leave type definitions duplicated in each platform package
- **NEVER** keep generated template types - move them to shared package

```tsx
// ✅ Correct - After running create-component, move types to shared package
// packages/design-system-shared/src/types/Button/Button.types.ts
export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

export interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

// packages/design-system-react/src/components/Button/Button.types.ts
// Replace generated content with re-exports:
export type {
  ButtonProps,
  ButtonVariant,
} from '@metamask/design-system-shared';
export { ButtonVariant } from '@metamask/design-system-shared';

// ❌ Wrong - Leaving generated template types unchanged
// packages/design-system-react/src/components/Button/Button.types.ts
export type ComponentNameProps = {
  // Template content left as-is
  children?: React.ReactNode;
  className?: string;
};
```

### Enum Migration (ADR-0003: String Unions with Const Objects)

**The generated templates DO NOT use this pattern yet - you must convert manually.**

- **ALWAYS** use string unions with const objects for prop variants/options
- **NEVER** use TypeScript enums
- **ALWAYS** use pattern: `const Object = {...} as const` + derived union type
- **Template generates basic types** - convert them to this pattern

```tsx
// ✅ Correct - Convert template types to ADR-0003 pattern
export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

// ❌ Wrong - Using enum or leaving template as basic types
export enum ButtonVariant {
  Primary = 'primary',
}
```

**Why this pattern?**

- Enables Class Variance Authority (CVA) for modern styling
- Better tree-shaking and TypeScript tooling
- Backwards compatible - consumers use string literals OR const values
- Reference: [ADR-0003](https://github.com/MetaMask/decisions/pull/127)

### Platform-Specific Props (Layered Architecture)

**Use "Shared" suffix for shared types and layer platform-specific concerns separately.**

#### What Goes Where: Decision Tree

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

#### Naming Convention

- Shared interface: `ComponentNamePropsShared` (with "Shared" suffix)
- Platform interface: `ComponentNameProps` (final exported type)

```tsx
// ✅ Correct - Shared package
export interface BadgeStatusPropsShared {
  status: BadgeStatusStatus;
  size?: BadgeStatusSize;
  hasBorder?: boolean;
}

// ✅ Correct - React package
export type BadgeStatusProps = ComponentProps<'div'> &
  BadgeStatusPropsShared & {
    className?: string;
    style?: React.CSSProperties;
  };

// ✅ Correct - React Native package
export type BadgeStatusProps = BadgeStatusPropsShared &
  Omit<ViewProps, 'children'> & {
    twClassName?: string;
  };

// ❌ Wrong - No "Shared" suffix
export interface BadgeStatusProps {
  /* in shared package */
}
```

#### Event Handlers: Use Idiomatic Platform Names

- **DO NOT** create unified handler names in shared package
- **DO** use idiomatic platform names (`onClick`/`onPress`)
- **Platform handlers come from base type extension** (`ComponentProps`/`PressableProps`)

```tsx
// ✅ Correct - No event handlers in shared
export interface CheckboxPropsShared {
  isSelected: boolean;
  isDisabled?: boolean;
  label?: string;
  // NO onClick or onPress here
}

// React adds onClick via ComponentProps
export type CheckboxProps = Omit<ComponentProps<'label'>, 'style'> &
  CheckboxPropsShared & {
    className?: string;
    // onClick comes from ComponentProps<'label'>
  };

// React Native adds onPress via PressableProps
export type CheckboxProps = CheckboxPropsShared &
  Omit<PressableProps, 'children'> & {
    twClassName?: string;
    // onPress comes from PressableProps
  };

// ❌ Wrong - Unified handler in shared package
export interface CheckboxPropsShared {
  onAction?: () => void; // Don't do this
}
```

#### className vs twClassName

- **React**: Use `className?: string` for Tailwind CSS
- **React Native**: Use `twClassName?: string` for TWRNC
- **NEVER** include either in shared package (platform-specific)

```tsx
// ✅ Correct - Platform packages add styling props
// React
export type BadgeStatusProps = ComponentProps<'div'> &
  BadgeStatusPropsShared & {
    className?: string; // React-specific
  };

// React Native
export type BadgeStatusProps = BadgeStatusPropsShared &
  ViewProps & {
    twClassName?: string; // React Native-specific
  };

// ❌ Wrong - Styling prop in shared package
export interface BadgeStatusPropsShared {
  styleOverride?: string; // Don't do this
}
```

### Post-Generation Workflow

**After running create-component scripts, you MUST:**

1. **Create shared types** (ADR-0004):

   - Create `packages/design-system-shared/src/types/ComponentName/ComponentName.types.ts`
   - Define const objects using ADR-0003 pattern (not enums)
   - Define `ComponentNamePropsShared` interface (with "Shared" suffix)
   - Export from `packages/design-system-shared/src/index.ts`

2. **Update platform type files** to re-export and extend:

   ```tsx
   // ComponentName.types.ts in BOTH React and React Native

   // Step 1: Re-export shared types
   export type {
     ComponentNamePropsShared,
     ComponentNameVariant,
     ComponentNameSize,
   } from '@metamask/design-system-shared';
   export {
     ComponentNameVariant,
     ComponentNameSize,
   } from '@metamask/design-system-shared';

   // Step 2: Extend with platform-specific props
   import type { ComponentProps } from 'react'; // or ViewProps for RN

   export type ComponentNameProps = ComponentProps<'div'> & // or ViewProps for RN
     ComponentNamePropsShared & {
       className?: string; // or twClassName for RN
     };
   ```

3. **Implement using Box/Text primitives** (not raw div/View):

   - Use Box for layout
   - Use Text for typography
   - Use design token const objects (not arbitrary values)
   - Forward refs properly

4. **Ensure cross-platform consistency**:
   - Identical `ComponentNamePropsShared` interface
   - Same type names and values
   - Same stories structure
   - Same documentation sections
   - Platform differences ONLY in extension layer

### Component Implementation Patterns

- **ALWAYS** use Box as base (never div/View from template)
- **ALWAYS** use Text component (never span/Text raw)
- **ALWAYS** use design token const objects for styling
- **ALWAYS** forward refs using forwardRef

```tsx
// ✅ Correct - Replace template div with Box
import { forwardRef } from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import type { ButtonProps } from './Button.types';
import { ButtonVariant } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = ButtonVariant.Primary, children, ...props }, ref) => (
    <Box
      ref={ref}
      as="button"
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
      borderRadius={BoxBorderRadius.Md}
      {...props}
    >
      <Text variant={TextVariant.BodyMd}>{children}</Text>
    </Box>
  ),
);

// ❌ Wrong - Leaving template div element
export const Button = ({ children, className }: ButtonProps) => (
  <div className={className}>{children}</div>
);
```

**Reference existing components for patterns:**

- @packages/design-system-react/src/components/Box/
- @packages/design-system-react/src/components/Button/
- @packages/design-system-react-native/src/components/Box/

## Workflow

### Complete Component Creation Process

```bash
# 1. Generate component scaffolding (BOTH platforms)
yarn create-component:react --name MyComponent --description "Brief description"
yarn create-component:react-native --name MyComponent --description "Brief description"

# 2. Create shared types directory
mkdir -p packages/design-system-shared/src/types/MyComponent

# 3. Define types in shared package using ADR-0003 pattern
# Edit: packages/design-system-shared/src/types/MyComponent/MyComponent.types.ts
# - Use const objects + string unions (not enums)
# - Define all variant/size types
# - Define props interface

# 4. Export from shared package index
# Edit: packages/design-system-shared/src/index.ts
# - Export const objects and types

# 5. Update platform type files to re-export
# Edit BOTH:
# - packages/design-system-react/src/components/MyComponent/MyComponent.types.ts
# - packages/design-system-react-native/src/components/MyComponent/MyComponent.types.ts
# Replace template content with re-exports from shared package

# 6. Implement component (replace template div/View with Box)
# - Import Box, Text primitives
# - Use design token const objects
# - Forward refs
# - Apply design tokens (not arbitrary values)

# 7. Add stories following component-documentation.md
# - Default story with all controls
# - Story per major prop

# 8. Write tests (Jest + Testing Library)

# 9. Update documentation following templates
# - React: README.mdx with Canvas blocks
# - React Native: README.md with code examples

# 10. Verify cross-platform consistency
yarn build
yarn test
yarn lint
```

### Type Definition Example: BadgeStatus (ADR-0003 + ADR-0004)

**This example shows converting existing enums to the new architecture.**

```tsx
// ==========================================
// STEP 1: Create shared types
// ==========================================
// packages/design-system-shared/src/types/BadgeStatus/BadgeStatus.types.ts

// Convert enums to const objects (ADR-0003)
export const BadgeStatusStatus = {
  Active: 'active',
  Inactive: 'inactive',
  Disconnected: 'disconnected',
  New: 'new',
  Attention: 'attention',
} as const;
export type BadgeStatusStatus =
  (typeof BadgeStatusStatus)[keyof typeof BadgeStatusStatus];

export const BadgeStatusSize = {
  Md: 'md',
  Lg: 'lg',
} as const;
export type BadgeStatusSize =
  (typeof BadgeStatusSize)[keyof typeof BadgeStatusSize];

// Define shared props interface with "Shared" suffix
export interface BadgeStatusPropsShared {
  status: BadgeStatusStatus;
  size?: BadgeStatusSize;
  hasBorder?: boolean;
}

// ==========================================
// STEP 2: Export from shared package index
// ==========================================
// packages/design-system-shared/src/index.ts
export {
  BadgeStatusStatus,
  BadgeStatusSize,
} from './types/BadgeStatus/BadgeStatus.types';
export type {
  BadgeStatusStatus,
  BadgeStatusSize,
  BadgeStatusPropsShared,
} from './types/BadgeStatus/BadgeStatus.types';

// ==========================================
// STEP 3: React package - re-export and extend
// ==========================================
// packages/design-system-react/src/components/BadgeStatus/BadgeStatus.types.ts

// Re-export shared types
export type {
  BadgeStatusPropsShared,
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-shared';
export {
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-shared';

import type { ComponentProps } from 'react';

// Extend with platform-specific props
export type BadgeStatusProps = ComponentProps<'div'> &
  BadgeStatusPropsShared & {
    className?: string;
    style?: React.CSSProperties;
  };

// ==========================================
// STEP 4: React Native package - re-export and extend
// ==========================================
// packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.types.ts

// Re-export shared types
export type {
  BadgeStatusPropsShared,
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-shared';
export {
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-shared';

import type { ViewProps } from 'react-native';

// Extend with platform-specific props
export type BadgeStatusProps = BadgeStatusPropsShared &
  Omit<ViewProps, 'children'> & {
    twClassName?: string;
  };

// ==========================================
// STEP 5: Remove old enums from platform packages
// ==========================================
// packages/design-system-react/src/types/index.ts
// packages/design-system-react-native/src/types/index.ts

// Remove old enum definitions:
// export enum BadgeStatusStatus { ... }  ❌ Delete
// export enum BadgeStatusSize { ... }    ❌ Delete

// Re-export from shared package:
export {
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-shared';
export type {
  BadgeStatusStatus,
  BadgeStatusSize,
} from '@metamask/design-system-shared';
```

## Commands

```bash
# Component Creation
yarn create-component:react --name ComponentName --description "Description"
yarn create-component:react-native --name ComponentName --description "Description"

# Build & Test
yarn build                    # Build all packages
yarn test                     # Run tests
yarn lint                     # Lint check

# Storybook
yarn storybook                # React web (port 6006)
yarn storybook:ios            # React Native iOS
```

## Golden Path Examples

**Component templates (base scaffolding):**

- @packages/design-system-react/scripts/create-component/ComponentName/
- @packages/design-system-react-native/scripts/create-component/ComponentName/

**Completed components following ADR-0003/0004:**

- @packages/design-system-shared/src/types/BadgeStatus/ (Example migration)
- @packages/design-system-react/src/components/BadgeStatus/ (React)
- @packages/design-system-react-native/src/components/BadgeStatus/ (React Native)
- @packages/design-system-react/src/components/Box/ (Foundational component)
- @packages/design-system-react/src/components/Button/ (Complex interactive)

**Shared types architecture:**

- @packages/design-system-shared/src/types/BadgeStatus/ (Layered architecture example)
- @packages/design-system-shared/src/index.ts (Type exports)

**Script documentation:**

- @docs/create-component.md (Script usage)

## Verification

After creating a component, verify:

**Setup & Structure:**

- [ ] Used create-component script (not manual file creation)
- [ ] Component exists in BOTH React and React Native

**Shared Types (ADR-0003 + ADR-0004):**

- [ ] Types defined in `@metamask/design-system-shared/src/types/ComponentName/`
- [ ] Const objects + string unions used (ADR-0003), NOT enums
- [ ] Shared interface named `ComponentNamePropsShared` (with "Shared" suffix)
- [ ] Exported from `@metamask/design-system-shared/src/index.ts`

**Platform Types (Layered Architecture):**

- [ ] Platform packages re-export shared types
- [ ] Generated template types replaced with re-exports and extension
- [ ] `ComponentNameProps` extends `ComponentNamePropsShared`
- [ ] React: Extends `ComponentProps<'element'>`, adds `className?: string`
- [ ] React Native: Extends `ViewProps` or `PressableProps`, adds `twClassName?: string`
- [ ] Event handlers use idiomatic names (onClick/onPress from base types)
- [ ] NO className/twClassName in shared package
- [ ] NO unified event handlers in shared package (onAction, etc.)

**Implementation:**

- [ ] Template div/View replaced with Box primitive
- [ ] Uses Text component for typography (not raw span/Text)
- [ ] Design token const objects used (not arbitrary values)
- [ ] Component forwards refs properly

**Cross-Platform Consistency:**

- [ ] Identical `ComponentNamePropsShared` interface
- [ ] Same const object names and values
- [ ] Same stories structure
- [ ] Same documentation sections
- [ ] Platform differences ONLY in extension layer

**Documentation & Testing:**

- [ ] Stories follow component-documentation.md (@.cursor/rules/)
- [ ] Tests written (Jest + Testing Library)
- [ ] README follows templates (@docs/component-readme-examples/)

**Build Verification:**

- [ ] Build succeeds: `yarn build`
- [ ] Tests pass: `yarn test`
- [ ] Lint passes: `yarn lint`

## Architecture Decision Records

### ADR-0003: Enum to String Union Migration

**Problem:** TypeScript enums create tight coupling that blocks incremental migration.

**Solution:** String unions with const objects pattern enables backwards compatibility.

**Pattern:**

```tsx
export const Variant = {
  Primary: 'primary',
  Secondary: 'secondary',
} as const;
export type Variant = (typeof Variant)[keyof typeof Variant];
```

**Benefits:** CVA integration, better tree-shaking, backwards compatible

**Reference:** [MetaMask Decisions ADR-0003](https://github.com/MetaMask/decisions/pull/127)

### ADR-0004: Centralized Types Architecture

**Problem:** Duplicated types across platforms (~1800 lines) violate cross-platform consistency.

**Solution:** Centralize types in `@metamask/design-system-shared`, platform packages re-export.

**Benefits:** Single source of truth, eliminates drift, backwards compatible

**Reference:** [MetaMask Decisions ADR-0004](https://github.com/MetaMask/decisions/pull/128)

## References

### Related Cursor Rules

- @.cursor/rules/styling.md - Design tokens, Tailwind, Box/Text patterns
- @.cursor/rules/component-documentation.md - README and Storybook
- @.cursor/rules/figma-integration.md - Code Connect

### Documentation

- @docs/create-component.md - Script usage and options
- @docs/component-readme-examples/ - README templates

### MetaMask Standards

- [ADR-0003: Enum to String Union](https://github.com/MetaMask/decisions/pull/127)
- [ADR-0004: Centralized Types](https://github.com/MetaMask/decisions/pull/128)
- [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs/)
