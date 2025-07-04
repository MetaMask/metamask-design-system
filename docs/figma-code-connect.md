# Figma Code Connect

This guide covers how to use [Figma Code Connect](https://www.figma.com/code-connect-docs/) to connect our design system components to Figma, enabling automatic code snippet display in Dev Mode for seamless design-to-code handoff.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Creating Code Connect Files](#creating-code-connect-files)
- [Publishing Components](#publishing-components)
- [Best Practices](#best-practices)
- [Resources](#resources)

## Overview

Figma Code Connect bridges the gap between design and development by:

- **Displaying Real Code**: Shows actual component usage in Figma Dev Mode
- **Multi-Platform Support**: Supports both React and React Native with platform-specific labels
- **Automatic Prop Mapping**: Maps Figma component properties to code component props
- **Live Updates**: Keeps code examples in sync with our component implementations

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

## Setup

### 1. Monorepo Configuration

Our monorepo uses individual `figma.config.json` files for each package with root-relative paths:

- `@metamask/design-system-react`: [packages/design-system-react/figma.config.json](../packages/design-system-react/figma.config.json)
- `@metamask/design-system-react-native`: [packages/design-system-react-native/figma.config.json](../packages/design-system-react-native/figma.config.json)

The `@figma/code-connect` dependency is managed at the root level and used by both packages through the monorepo scripts.

### 2. Monorepo Scripts

Use these commands from the **root directory**:

```bash
# Interactive setup wizards (for adding/updating components)
yarn figma:connect:react              # Interactive setup for React components
yarn figma:connect:react-native       # Interactive setup for React Native components

# Automated publishing (for CI/CD workflows)
yarn figma:connect:publish            # Publish all components (React + React Native)
yarn figma:connect:publish:dry-run    # Dry run to validate all components
yarn figma:connect:unpublish          # Unpublish all components

# Platform-specific automated publishing
yarn figma:connect:publish:react              # Publish only React components
yarn figma:connect:publish:react-native       # Publish only React Native components
yarn figma:connect:publish:react:dry-run      # Dry run for React components
yarn figma:connect:publish:react-native:dry-run  # Dry run for React Native components

# Platform-specific unpublishing
yarn figma:connect:unpublish:react           # Unpublish React components
yarn figma:connect:unpublish:react-native    # Unpublish React Native components
```

### Interactive vs Automated Scripts

- **Interactive Scripts**: Use `yarn figma:connect:react` or `yarn figma:connect:react-native` to:

  - Add new components to Code Connect
  - Update existing component configurations
  - Validate your setup interactively
  - Generate or modify `.figma.tsx` files

- **Automated Scripts**: Use `yarn figma:connect:publish*` for:
  - Batch publishing all components
  - Dry-run validation
  - Unpublishing components

## Creating Code Connect Files

### Using Interactive Setup

When you need to add or update Code Connect files for components, use the interactive setup wizards:

```bash
# For React components
yarn figma:connect:react

# For React Native components
yarn figma:connect:react-native
```

These commands will:

- Guide you through connecting components to your Figma design file
- Help you configure property mappings
- Create or update `.figma.tsx` files
- Validate your setup before publishing

### File Structure

By using the automated connect scripts above a `.figma.tsx` file will be created alongside your components:

```
src/components/
├── AvatarAccount/
│   ├── AvatarAccount.tsx
│   ├── AvatarAccount.figma.tsx  ← Code Connect file
│   └── ...
```

You can read more on setting up a code connect file in the Figma [Connecting React components](https://www.figma.com/code-connect-docs/react/) docs

## Publishing Components

### Validation & Publishing

```bash
# Validate all components before publishing
yarn figma:connect:publish:dry-run

# Publish all components
yarn figma:connect:publish

# Unpublish all components
yarn figma:connect:unpublish
```

### Expected Results

When components are successfully published, you should see:

- **Platform Dropdown**: Both "React" and "React Native" options available in Figma Dev Mode
- **Correct Imports**: Platform-specific imports (`@metamask/design-system-react` vs `@metamask/design-system-react-native`)
- **Proper Code Examples**: Component usage with realistic props and enum values

## Best Practices

### 1. Component Organization

- Keep `.figma.tsx` files alongside their components
- Use consistent naming: `ComponentName.figma.tsx`

### 2. Property Mapping

- **Use Enums**: Always import and use actual enum values, not strings
- **Realistic Examples**: Provide meaningful prop values in examples
- **Required Props**: Include all required props in examples

### 3. Code Examples

- **Complete Examples**: Include all necessary props for the component to render
- **Real Data**: Use realistic values (addresses, names, etc.) in examples
- **Platform Consistency**: Both platforms should have similar examples

## Resources

- [Figma Code Connect Documentation](https://www.figma.com/code-connect-docs/)
- [MetaMask Design System Figma File](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-WIP--MMDS-Components)
