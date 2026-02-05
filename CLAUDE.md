# MetaMask Design System

Design tokens and components for MetaMask extension (React) and mobile (React Native).

## Documentation for AI Agents

Focused rules for repository-specific conventions:

- @.cursor/rules/metamask-organization-standards.md - MetaMask contributor-docs references
- Future rules (separate PRs):
  - styling.md - Design tokens, Tailwind, component-first
  - component-creation.md - Using create-component scripts
  - component-documentation.md - README standards
  - testing.md - Jest, Testing Library, accessibility
  - monorepo-workflow.md - Workspace commands
  - typescript-patterns.md - Enums, types, discriminated unions
  - figma-integration.md - Code Connect (optional)

See @docs/ai-agents.md for comprehensive strategy explanation.

## Critical Invariants (Never Break These)

### TypeScript

- **NEVER** use string literals for component props (variants, sizes, colors)
- **ALWAYS** use enums - import and use enum values
- Example:
  ```tsx
  // ❌ Wrong
  <Button variant="primary" size="md" />;
  // ✅ Correct
  import {
    Button,
    ButtonVariant,
    ButtonSize,
  } from '@metamask/design-system-react';
  <Button variant={ButtonVariant.Primary} size={ButtonSize.Md} />;
  ```

### Styling

- **NEVER** use arbitrary Tailwind values (`bg-[#037DD6]`, `p-[16px]`)
- **NEVER** use default Tailwind colors (`bg-blue-500`, `text-gray-700`)
- **ALWAYS** use design tokens only (`bg-primary-default`, `text-error-default`)
- **ALWAYS** prefer component props over className/twClassName
- Typography **ALWAYS** via Text component (never `text-sm font-bold` classes)

### Testing

- **ALWAYS** write tests when creating/modifying components
- **ALWAYS** include accessibility tests (axe-core via Storybook)
- Use Testing Library queries (`getByRole` preferred)

### Component Creation

- **ALWAYS** use: `yarn create-component:react --name ComponentName --description "..."`
- **NEVER** manually create component files
- Script auto-generates: Component, types, tests, stories, README

## Essential Commands

```bash
# Build
yarn build                    # All packages
yarn build:types              # TypeScript only

# Test
yarn test                     # All tests
yarn test:storybook           # Accessibility tests
yarn workspace @metamask/design-system-react run test              # Package-specific

# Lint
yarn lint                     # Check all
yarn lint:fix                 # Auto-fix

# Component Creation
yarn create-component:react --name ComponentName --description "Brief description"

# Storybook
yarn storybook                # React web (port 6006)
yarn storybook:ios            # React Native iOS
yarn storybook:android        # React Native Android

# Monorepo
yarn constraints --fix        # Fix dependency constraints
yarn && yarn dedupe           # After adding dependencies
```

## Monorepo Structure

Packages:

- `@metamask/design-tokens` - Foundation tokens
- `@metamask/design-system-shared` - Shared utilities
- `@metamask/design-system-react` - Web components
- `@metamask/design-system-react-native` - Mobile components
- `@metamask/design-system-tailwind-preset` - Web Tailwind preset
- `@metamask/design-system-twrnc-preset` - Mobile twrnc preset

**Import pattern:** Use package names, never file paths

```tsx
// ✅ Correct
import { Button } from '@metamask/design-system-react';
import { tokens } from '@metamask/design-tokens';

// ❌ Wrong
import { Button } from '../../../packages/design-system-react';
```

## Platform-Specific

### React (Web)

- Package: `@metamask/design-system-react`
- Styling: `className` prop with Tailwind utilities
- Documentation: `README.mdx` with interactive examples

### React Native (Mobile)

- Package: `@metamask/design-system-react-native`
- Styling: `twClassName` prop + `useTailwind()` hook
- Documentation: `README.md` with code examples

## Personal Overrides

Create `CLAUDE.local.md` for personal preferences (gitignored).
See `CLAUDE.local.md.example` for template.
