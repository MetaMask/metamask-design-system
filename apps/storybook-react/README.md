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

## AI Integration (Storybook MCP)

When Storybook is running locally, an MCP endpoint is available at:

```text
http://localhost:6006/mcp
```

This endpoint helps AI agents work with the design system by exposing:

- `list-all-documentation` to discover documented components and docs entries
- `get-documentation` to retrieve component props, examples, and stories
- `get-documentation-for-story` to inspect a specific story variant
- `get-storybook-story-instructions` for Storybook's built-in story-writing guidance
- `preview-stories` to generate preview URLs for stories
- `run-story-tests` to execute story tests (when supported by the Storybook setup)

Maintainers can use these tools while authoring stories in this repo. Consumer repositories get the most value by connecting their agent clients to this endpoint (local) or a published Storybook MCP endpoint.

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

See [Visual Regression Testing Documentation](../../docs/visual-regression-testing.md) for:

- How automated visual testing works
- Reviewing visual changes in pull requests
- Running Chromatic locally
- Troubleshooting common issues
- Platform support and limitations

Quick start:

```bash
# Chromatic runs automatically on PRs
# To run locally:
yarn chromatic
```

**Note**: Chromatic only supports React web components. React Native visual testing is not supported.
