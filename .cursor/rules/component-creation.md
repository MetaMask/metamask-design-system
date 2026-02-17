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

### Post-Generation Workflow

**After running create-component scripts, you MUST:**

1. **Move types to shared package** (ADR-0004):

   - Create `packages/design-system-shared/src/types/ComponentName/ComponentName.types.ts`
   - Define types using ADR-0003 pattern (const objects)
   - Export from `packages/design-system-shared/src/index.ts`

2. **Update platform type files** to re-export:

   ```tsx
   // ComponentName.types.ts in BOTH React and React Native
   export type {
     ComponentNameProps,
     ComponentNameVariant,
   } from '@metamask/design-system-shared';
   export { ComponentNameVariant } from '@metamask/design-system-shared';
   ```

3. **Implement using Box/Text primitives** (not raw div/View):

   - Use Box for layout
   - Use Text for typography
   - Use design token const objects (not arbitrary values)
   - Forward refs properly

4. **Ensure cross-platform consistency**:
   - Identical prop interfaces
   - Same type names and values
   - Same stories structure
   - Same documentation sections

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

### Type Definition Example (ADR-0003 + ADR-0004)

```tsx
// packages/design-system-shared/src/types/Button/Button.types.ts
// Step 1: Define variants using ADR-0003 pattern
export const ButtonVariant = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
} as const;
export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

export const ButtonSize = {
  Sm: 'sm',
  Md: 'md',
  Lg: 'lg',
} as const;
export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

// Step 2: Define props interface
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isDisabled?: boolean;
  children: React.ReactNode;
}

// packages/design-system-shared/src/index.ts
// Step 3: Export from shared package
export { ButtonVariant, ButtonSize } from './types/Button/Button.types';
export type {
  ButtonVariant,
  ButtonSize,
  ButtonProps,
} from './types/Button/Button.types';

// packages/design-system-react/src/components/Button/Button.types.ts
// Step 4: Re-export in React package (replace template content)
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
} from '@metamask/design-system-shared';
export { ButtonVariant, ButtonSize } from '@metamask/design-system-shared';

// packages/design-system-react-native/src/components/Button/Button.types.ts
// Step 5: Re-export in React Native package (replace template content)
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
} from '@metamask/design-system-shared';
export { ButtonVariant, ButtonSize } from '@metamask/design-system-shared';
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

- @packages/design-system-react/src/components/Box/ (React)
- @packages/design-system-react-native/src/components/Box/ (React Native)
- @packages/design-system-react/src/components/Button/ (Complex example)

**Shared types architecture:**

- @packages/design-system-shared/src/types/ (Centralized types per ADR-0004)
- @packages/design-system-shared/src/index.ts (Type exports)

**Script documentation:**

- @docs/create-component.md (Script usage)

## Verification

After creating a component, verify:

- [ ] Used create-component script (not manual file creation)
- [ ] Component exists in BOTH React and React Native
- [ ] Types defined in `@metamask/design-system-shared/src/types/ComponentName/`
- [ ] Types use const objects + string unions (ADR-0003), not enums
- [ ] Platform packages re-export types from shared (ADR-0004)
- [ ] Generated template types replaced with re-exports
- [ ] Template div/View replaced with Box primitive
- [ ] Uses Text component for typography
- [ ] Design token const objects used (not arbitrary values)
- [ ] Component forwards refs
- [ ] Identical props across React and React Native
- [ ] Cross-platform: same type names, values, documentation structure
- [ ] Stories follow component-documentation.md (@.cursor/rules/)
- [ ] Tests written
- [ ] README follows templates (@docs/component-readme-examples/)
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
