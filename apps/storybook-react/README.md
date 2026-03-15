# Storybook React

Storybook serves as the primary documentation and development environment for the MetaMask design system, showcasing both design tokens and React components. It provides a comprehensive view of our design system's building blocks and their implementation.

## Overview

Storybook instance contains:

- Design Tokens documentation from `@metamask/design-tokens`
- React Components documentation from `@metamask/design-system-react`

## Running Storybook

To start the Storybook server locally, run the following command:

```bash
yarn storybook
```

For React Native components, please use:

```bash
yarn storybook:ios
```

## Accessibility Testing

Our Storybook setup includes accessibility testing capabilities. See [Accessibility Testing Documentation](../../docs/accessibility-testing.md).

Quick start:

```bash
# Run storybook
yarn storybook
```

```bash
# In a new terminal run accessibility tests for all components
yarn test:storybook

# Run tests for a specific component
yarn test:storybook "ComponentName"
```

## Visual Regression Testing

Visual regression testing is powered by [Chromatic](https://www.chromatic.com), which automatically detects visual changes in components across browsers.

### How it Works

- **Automatic**: Chromatic runs automatically on every pull request via GitHub Actions
- **Cross-browser**: Tests visual consistency across Chrome, Firefox, Safari, and Edge
- **Baseline Updates**: Changes on the `main` branch automatically update the visual baselines
- **Review Process**: Visual changes are reviewed and approved in the Chromatic UI before merging

### Local Testing

To run Chromatic locally:

```bash
# From repository root
yarn chromatic

# Or from storybook-react directory
yarn workspace @metamask/storybook-react chromatic
```

**Note**: The `CHROMATIC_PROJECT_TOKEN` environment variable must be set. Contact a maintainer for access.

### Reviewing Changes

1. When you open a PR, Chromatic will automatically run and comment on the PR with a link to the build
2. Click the Chromatic link to review visual changes
3. Accept or reject changes in the Chromatic UI
4. Once approved, the PR check will pass

### Resources

- [Chromatic Dashboard](https://www.chromatic.com/builds?appId=673370f0d08a04f1)
- [Chromatic Documentation](https://www.chromatic.com/docs/)

**Platform Support**: Chromatic only supports React web components. For React Native visual testing, see [component testing documentation](../../docs/accessibility-testing.md).
