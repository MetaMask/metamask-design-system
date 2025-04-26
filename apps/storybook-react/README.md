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
