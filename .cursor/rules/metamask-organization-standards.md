# MetaMask Organization Standards

Quick reference to relevant MetaMask contributor documentation.

## Core Guidelines

### JavaScript & TypeScript

- [JavaScript Guidelines](https://github.com/MetaMask/contributor-docs/blob/main/docs/javascript-guidelines.md)
  - Code style, best practices, common patterns
- [TypeScript Guidelines](https://github.com/MetaMask/contributor-docs/blob/main/docs/typescript-guidelines.md)
  - Type usage, interfaces, generics

### React

- [React Guidelines](https://github.com/MetaMask/contributor-docs/blob/main/docs/react-guidelines.md)
  - Component patterns, hooks, best practices

### Testing

- [Testing Guidelines](https://github.com/MetaMask/contributor-docs/blob/main/docs/testing-guidelines.md)
  - Unit testing, integration testing, best practices

### Process

- [Pull Request Guidelines](https://github.com/MetaMask/contributor-docs/blob/main/docs/pull-request-guidelines.md)
  - PR structure, review process, commit messages

## Design System Specific Differences

While we follow MetaMask organization standards, the design system has specific requirements:

### Styling

**MetaMask Standard:** Various styling approaches

**Design System:** Tailwind CSS with design tokens enforced via ESLint

- NEVER use arbitrary Tailwind values
- ONLY use design tokens from `@metamask/design-tokens`
- Component-first approach (prefer props over className)

### Component Creation

**MetaMask Standard:** Various component patterns

**Design System:** Automated scaffolding

- ALWAYS use: `yarn create-component:react --name ComponentName --description "..."`
- Auto-generates: Component, types, tests, stories, README
- Consistent file structure across all components

### TypeScript

**MetaMask Standard:** TypeScript best practices

**Design System:** Strict enum usage

- ALWAYS use enums for component variants, sizes, colors
- NEVER use string literals for component props
- Example: `ButtonVariant.Primary` not `"primary"`

### Testing

**MetaMask Standard:** Unit and integration tests

**Design System:** Unit + mandatory accessibility tests

- All components require unit tests
- All components require Storybook accessibility tests (axe-core)
- Run via: `yarn test:storybook`

### Documentation

**MetaMask Standard:** README files

**Design System:** Storybook + structured README

- **React:** `README.mdx` with interactive Canvas examples
- **React Native:** `README.md` with code examples
- Follows template structure (see component-readme-examples)

## Full Contributor Documentation

For comprehensive MetaMask organization guidelines:

**Repository:** https://github.com/MetaMask/contributor-docs/

**Key Sections:**

- [Getting Started](https://github.com/MetaMask/contributor-docs/blob/main/README.md)
- [SDLC Process](https://github.com/MetaMask/contributor-docs/blob/main/docs/sdlc.md)
- [Security Guidelines](https://github.com/MetaMask/contributor-docs/blob/main/docs/secure-coding-guidelines.md)
- [Performance Best Practices](https://github.com/MetaMask/contributor-docs/tree/main/docs/performance)

## Design System Documentation

For design system specific rules and patterns:

**Rules Directory:** [.cursor/rules/](../cursor/rules/)

**Strategy:** [docs/ai-agents.md](../../docs/ai-agents.md)

**High-level:** [docs/contributing.md](../../docs/contributing.md)
