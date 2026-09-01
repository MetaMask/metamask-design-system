# MetaMask Design System

Design tokens and components for MetaMask extension (React) and mobile (React Native).

## Critical invariants

- **Do not edit package `CHANGELOG.md` files in feature/fix PRs.** Changelogs are generated and edited only on `release/*` branches (`yarn create-release-branch`). Do not run `yarn changelog:update` unless you are on a release branch. Put consumer-facing notes in the PR description; put breaking-change guidance in `MIGRATION.md`.
- **User-facing copy uses sentence case** unless it is an approved exception (proper nouns, abbreviations, Secret Recovery Phrase). See `.cursor/rules/content-guidelines.mdc`.

## Documentation for AI Agents

Repository-specific conventions and patterns. Open the matching file when the task is relevant (Claude Code also imports these from `CLAUDE.md`):

- `.cursor/rules/styling.md`
- `.cursor/rules/testing.md`
- `.cursor/rules/component-documentation.md`
- `.cursor/rules/component-architecture.md`
- `.cursor/rules/component-creation.md`
- `.cursor/rules/component-enum-union-migration.md`
- `.cursor/rules/component-migration.md`
- `.cursor/rules/figma-integration.md`
- `.cursor/rules/consumer-audit.md`
- `.cursor/rules/release-workflow.md`
- `.cursor/rules/content-guidelines.mdc`

See `docs/ai-agents.md` for the full strategy.

## Consumer product codebases

MMDS packages serve two **product** repositories (not this monorepo):

| Platform  | Repository                                     | Product UI scan (metrics-aligned)                                               | MMDS package                           |
| --------- | ---------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------- |
| Extension | https://github.com/MetaMask/metamask-extension | `ui/**/*.{js,tsx}` — exclude legacy `ui/components/component-library/`          | `@metamask/design-system-react`        |
| Mobile    | https://github.com/MetaMask/metamask-mobile    | `app/components/**/*.{js,jsx,ts,tsx}` — exclude legacy `app/component-library/` | `@metamask/design-system-react-native` |

Legacy `component-library/` folders are migration **sources**, not adoption audit targets. Flag imports from them in product UI as deprecated usage.

**MMDS Figma (canonical):** https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=0-1 (`fileKey`: `1D6tnzXqWgnUC3spaAOELN`)

## Audit trigger

When asked to audit component **usage**, **adoption**, **drift**, or **alignment**:

1. Scan **both** extension and mobile product UI (paths above).
2. Use [design-system-metrics](https://github.com/MetaMask/design-system-metrics) baselines when available.
3. Use **Metamask-storybook-mcp** or https://metamask.github.io/metamask-design-system/manifests/components.json for canonical MMDS APIs.
4. Follow `.cursor/rules/consumer-audit.md` and `docs/agent-mcp-setup.md` for MCP fallbacks.

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
yarn storybook:ios:build      # React Native iOS dev client (first time / native dep changes)
yarn storybook:ios            # React Native iOS (Metro + dev client)
yarn storybook:android:build  # React Native Android dev client (first time / native dep changes)
yarn storybook:android        # React Native Android (Metro + dev client)

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
- `@metamask/storybook-react-native` - Mobile development (`yarn storybook:ios:build` then `yarn storybook:ios`)

These platforms are for manual testing and component showcase. Visual regression testing is planned but not yet implemented.

**Import using package names, never file paths:**

```tsx
// ✅ Correct
import { Button } from '@metamask/design-system-react';

// ❌ Wrong
import { Button } from '../../../packages/design-system-react';
```
