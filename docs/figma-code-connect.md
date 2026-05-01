# Figma Code Connect

This guide covers initial setup for [Figma Code Connect](https://www.figma.com/code-connect-docs/) to connect design system components to Figma, enabling automatic code snippet display in Dev Mode.

**For file creation patterns and development workflows**, see [`.cursor/rules/figma-integration.md`](../.cursor/rules/figma-integration.md).

## Overview

Figma Code Connect bridges the gap between design and development by:

- **Displaying Real Code**: Shows actual component usage in Figma Dev Mode
- **Multi-Platform Support**: Supports both React and React Native with platform-specific labels
- **Automatic Prop Mapping**: Maps Figma component properties to code component props
- **Live Updates**: Keeps code examples in sync with component implementations

## Prerequisites

### 1. Figma Personal Access Token

Generate a personal access token from [Figma Developer Settings](https://www.figma.com/developers/api#access-tokens) with the following scopes:

- **Code Connect (Write)**: Required for publishing components
- **File content (Read-only)**: Required for reading component definitions

### 2. Environment Setup

Copy the example environment file and add your token:

```bash
cp .env.example .env
# Edit .env and add your Figma access token
```

Add to `.env`:

```bash
FIGMA_ACCESS_TOKEN=your_token_here
```

## Monorepo Configuration

Our monorepo uses individual `figma.config.json` files for each package:

- **React Web**: [`packages/design-system-react/figma.config.json`](../packages/design-system-react/figma.config.json)
- **React Native**: [`packages/design-system-react-native/figma.config.json`](../packages/design-system-react-native/figma.config.json)

Each config file specifies:

- Parser type (React)
- Platform label ("React" or "React Native")
- Include patterns for component files
- Import path mapping to published packages
- Figma file URL for interactive setup

The `@figma/code-connect` dependency is managed at the root level and used by both packages through monorepo scripts.

## When to Use Code Connect

Add Figma Code Connect files **after** creating components:

1. Create component using `yarn create-component:react` or `yarn create-component:react-native`
2. Implement component functionality
3. Add Storybook stories and documentation
4. **Add Code Connect files** to link component to Figma design
5. Publish to Figma for design-to-code handoff

## File Creation Patterns

For detailed guidance on creating `.figma.tsx` files, see:

**[`.cursor/rules/figma-integration.md`](../.cursor/rules/figma-integration.md)**

This cursor rule covers:

- File location and naming conventions
- Required file structure and imports
- Prop mapping patterns (enums, booleans, strings, nested props)
- Example patterns (simple, complex, stateful)
- Interactive setup workflow
- Publishing and validation commands
- Golden path examples in the codebase
- Verification checklist

## Quick Commands

```bash
# Interactive setup (generates .figma.tsx files)
yarn figma:connect:react              # React components
yarn figma:connect:react-native       # React Native components

# Publishing
yarn figma:connect:publish:dry-run    # Validate all
yarn figma:connect:publish            # Publish all

# Platform-specific
yarn figma:connect:publish:react                  # React only
yarn figma:connect:publish:react-native           # React Native only
```

See [`.cursor/rules/figma-integration.md`](../.cursor/rules/figma-integration.md) for complete command reference.

## Resources

- [Figma Code Connect Documentation](https://www.figma.com/code-connect-docs/)
- [Connecting React Components](https://www.figma.com/code-connect-docs/react/)
- [MetaMask Design System Figma File](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-WIP--MMDS-Components)
- [`.cursor/rules/figma-integration.md`](../.cursor/rules/figma-integration.md) - File creation patterns and best practices
