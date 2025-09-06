# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the MetaMask Design System monorepo containing React and React Native components, design tokens, and Tailwind presets. The architecture follows a dependency graph where tokens are at the foundation, presets consume tokens, and component libraries use both.

## Package Architecture

- `@metamask/design-tokens`: Foundation design tokens (colors, typography, shadows)
- `@metamask/design-system-tailwind-preset`: Tailwind preset consuming design tokens
- `@metamask/design-system-twrnc-preset`: React Native Tailwind preset (twrnc)
- `@metamask/design-system-shared`: Shared utilities between React/React Native
- `@metamask/design-system-react`: React components using Tailwind preset
- `@metamask/design-system-react-native`: React Native components using twrnc preset

## Common Development Commands

### Setup and Build

- `yarn install` - Install dependencies
- `yarn setup` - Install dependencies and build all packages
- `yarn build` - Build all packages in topological order
- `yarn build:clean` - Clean build artifacts and rebuild

### Testing

- `yarn test` - Run tests for all packages (scripts then packages)
- `yarn workspace <package-name> run test` - Run tests for specific package
- `yarn workspace <package-name> run jest --no-coverage <file>` - Run specific test file
- Testing requires 100% coverage for React packages (branches, functions, lines, statements)

### Linting and Formatting

- `yarn lint` - Lint all files (ESLint + Prettier + constraints + dependencies)
- `yarn lint:fix` - Fix all auto-fixable violations
- `yarn lint:eslint` - Run ESLint only

### Storybook

- `yarn storybook` - Start React Storybook
- `yarn storybook:ios` - Start React Native Storybook on iOS
- `yarn storybook:android` - Start React Native Storybook on Android

### Component Generation

- `yarn create-component:react` - Create new React component with template files
- `yarn generate-icons` - Generate icon components from SVG assets
- `yarn create-package` - Create new package in monorepo

## Component Development Patterns

### React Component Structure

Each component follows this structure:

- `ComponentName.tsx` - Main component implementation
- `ComponentName.types.ts` - TypeScript type definitions
- `ComponentName.constants.ts` - Constants and enums (optional)
- `ComponentName.stories.tsx` - Storybook stories
- `ComponentName.test.tsx` - Jest tests with 100% coverage
- `ComponentName.figma.tsx` - Figma Code Connect integration (optional)
- `README.mdx` - Component documentation
- `index.ts` - Export file

### Testing Requirements

- All React components require 100% test coverage
- Use `@testing-library/react` for React component testing
- Use `@testing-library/react-native` for React Native components
- Ignore coverage for: `.constants.ts`, `.dev.ts`, `.figma.tsx`, and `index.ts` files

### Icon Generation

- Place SVG files in `src/components/Icon/assets/`
- Run `yarn generate-icons` to create React components from SVGs
- Icons are auto-generated and should not be manually edited

## Workspace Operations

### Working with Specific Packages

- Use `yarn workspace <package-name> <command>` to run commands in specific packages
- Package names are from `package.json` (e.g., `@metamask/design-system-react`)
- Use `yarn workspaces foreach` for operations across multiple packages

### Preview Builds

- Comment `@metamaskbot publish-preview` on PRs to create preview builds
- Preview builds are scoped to `@metamask-previews` instead of `@metamask`
- Use for testing package changes in other projects

## Figma Integration

- Components can have `.figma.tsx` files for Figma Code Connect
- `yarn figma:connect:publish` - Publish all Figma connections
- `yarn figma:connect:publish:dry-run` - Test Figma publish without changes

## TypeScript Configuration

- Uses TypeScript project references for efficient builds
- `tsconfig.json` - Root config with project references
- `tsconfig.build.json` - Build-specific configuration
- `tsconfig.packages.json` - Shared config for packages

## Pull Request Automation

The repository includes Cursor rules for automated PR creation:

- Type `@pr` to auto-generate PR descriptions and create draft PRs
- Analyzes git diff to understand changes and scope
- Creates appropriate PR titles with conventional commit format
- Pre-fills testing steps and checklist items based on changed components

## Release Process

Uses `@metamask/create-release-branch` for automated releases:

1. `yarn create-release-branch` - Creates release branch with release spec
2. Update package versions and changelogs in the generated release spec
3. Run `yarn constraints --fix && yarn && yarn dedupe`
4. Review and clean up changelogs following "Keep a Changelog" format
5. `yarn changelog:validate` - Validate changelog format
6. Create PR titled "Release \<version\>"
7. Squash & merge to trigger automated NPM publishing

## Key Files and Configurations

- `eslint.config.mjs` - ESLint v9 configuration using MetaMask shared configs
- `jest.config.packages.js` - Shared Jest configuration for packages
- `.cursor/rules/pr.mdc` - Automated PR generation rules
- `scripts/create-package/` - New package creation tool
- `release.config.json` - Release automation configuration
