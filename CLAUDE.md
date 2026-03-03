# MetaMask Design System

Design tokens and components for MetaMask extension (React) and mobile (React Native).

## Documentation for AI Agents

Repository-specific conventions and patterns:

- @.cursor/rules/styling.md
- @.cursor/rules/component-documentation.md
- @.cursor/rules/component-architecture.md
- @.cursor/rules/component-creation.md
- @.cursor/rules/component-enum-union-migration.md
- @.cursor/rules/figma-integration.md

See @docs/ai-agents.md for comprehensive strategy explanation.

## Monorepo Structure

**This is a yarn workspaces monorepo.** Run all commands from the repository root.

### Command Patterns

Two ways to run commands:

1. **Root scripts** (preferred for common tasks)

   ```bash
   yarn build                 # Builds all packages
   yarn test                  # Runs all tests
   yarn lint                  # Lints entire monorepo
   ```

2. **Workspace-specific commands** (for targeting single packages)
   ```bash
   yarn workspace @metamask/design-system-react run test
   yarn workspace @metamask/design-system-react run build
   yarn workspace @metamask/design-system-react run lint
   ```

**Never** use `cd packages/*/` - always run commands from root using one of the patterns above.

### Essential Commands

```bash
# Build
yarn build                    # All packages
yarn build:types              # TypeScript only

# Test
yarn test                     # All tests
yarn test:storybook           # Accessibility tests
yarn workspace @metamask/design-system-react run test              # Single package

# Lint
yarn lint                     # Check all
yarn lint:fix                 # Auto-fix

# Component Creation
yarn create-component:react --name ComponentName --description "Brief description"
yarn create-component:react-native --name ComponentName --description "Brief description"

# Storybook
yarn storybook                # React web (port 6006)
yarn storybook:ios            # React Native iOS
yarn storybook:android        # React Native Android

# Dependencies
yarn constraints --fix        # Fix dependency constraints
yarn dedupe                   # Deduplicate dependencies
```

### Packages

- `@metamask/design-tokens` - Foundation tokens
- `@metamask/design-system-shared` - Shared utilities
- `@metamask/design-system-react` - Web components
- `@metamask/design-system-react-native` - Mobile components
- `@metamask/design-system-tailwind-preset` - Web Tailwind preset
- `@metamask/design-system-twrnc-preset` - Mobile twrnc preset

### Apps (Consumer Platforms)

Storybook apps in `apps/` consume packages for development and testing:

- `@metamask/storybook-react` - Web component development (`yarn storybook`)
- `@metamask/storybook-react-native` - Mobile development (`yarn storybook:ios|android`)

These platforms are for manual testing and component showcase. Visual regression testing is planned but not yet implemented.

**Import using package names, never file paths:**

```tsx
// ✅ Correct
import { Button } from '@metamask/design-system-react';

// ❌ Wrong
import { Button } from '../../../packages/design-system-react';
```

## Personal Overrides

As per [Claude Code best practices](https://code.claude.com/docs/en/best-practices), create `CLAUDE.local.md` for personal preferences (gitignored).
See `CLAUDE.local.md.example` for template.
