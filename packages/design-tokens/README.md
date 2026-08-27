# `@metamask/design-tokens`

A collection of design tokens based on MetaMask's design system.

## Installation

`yarn add @metamask/design-tokens`

or

`npm install @metamask/design-tokens`

## Usage

Currently the metamask design tokens repo supports 2 formats, CSS-in-JS and CSS variables. These formats are based on its primary consumers [metamask-mobile](https://github.com/MetaMask/metamask-mobile), [metamask-extension](https://github.com/MetaMask/metamask-extension) and [metamask-portfolio](https://github.com/consensys-vertical-apps/metamask-portfolio) .

### CSS Variables

1. Import the design tokens stylesheet into your CSS or SCSS.

> _Please note the file path will depend on where in your project you are importing it from._

```css
@import '@metamask/design-tokens/styles';
```

2. Use design token CSS variables in the code.

```css
/* In CSS/SCSS */
.card {
  --card-color-text: var(--color-text-default);
  --card-color-background: var(--color-background-default);
  --card-color-border: var(--color-border-muted);

  background-color: var(--card-color-background);
  color: var(--card-color-text);
  border: 1px solid var(--card-color-border);
}
```

```js
// They also work for inline styles in javascript
<div style={{ color: 'var(--color-error-default)' }}>This was is an error</div>
```

### CSS-in-JS

1. Use design tokens in code by importing from library:

```js
import { lightTheme, darkTheme } from '@metamask/design-tokens';

// Create provider that swaps theme (pseudo code)
<ThemeProvider theme={theme === 'default' ? lightTheme : darkTheme} />;

const createStyles = (theme) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: theme.colors.background.default,
      borderColor: theme.colors.border.default,
    },
  });
```

### Corner radius

These are Tailwind's radius values — no steps are added or changed. What the
design system adds is a naming convention: each step is named after its value.
Radii do not change between themes, so they are exported on their own rather
than through `lightTheme` / `darkTheme`.

| Token               | Tailwind class | CSS variable    | Value  |
| ------------------- | -------------- | --------------- | ------ |
| `borderRadius.none` | `rounded-none` | `--radius-none` | 0      |
| `borderRadius[2]`   | `rounded-2`    | `--radius-2`    | 2px    |
| `borderRadius[4]`   | `rounded-4`    | `--radius-4`    | 4px    |
| `borderRadius[6]`   | `rounded-6`    | `--radius-6`    | 6px    |
| `borderRadius[8]`   | `rounded-8`    | `--radius-8`    | 8px    |
| `borderRadius[12]`  | `rounded-12`   | `--radius-12`   | 12px   |
| `borderRadius[16]`  | `rounded-16`   | `--radius-16`   | 16px   |
| `borderRadius[24]`  | `rounded-24`   | `--radius-24`   | 24px   |
| `borderRadius.full` | `rounded-full` | `--radius-full` | 9999px |

Both presets add the numeric class names as aliases, so `rounded-8` and
`rounded-lg` are the same 8px and Tailwind's own names keep working. Prefer the
numeric ones: they state their value, and they mean the same thing across
Tailwind versions, where `rounded-sm` is 2px in v3 and 4px in v4.

Use `borderRadius.full` for circles and capsules: a radius larger than half the
shortest side rounds the shape fully.

```js
import { borderRadius } from '@metamask/design-tokens';

StyleSheet.create({
  card: { borderRadius: borderRadius[8] },
  avatar: { borderRadius: borderRadius.full },
});
```

## Tooling

To prevent color tech debt and ensure themability, accessibility, and consistency of the MetaMask brand, we recommend using [@metamask/eslint-plugin-design-tokens](https://github.com/MetaMask/eslint-plugin-design-tokens). This ESLint plugin helps enforce the usage of design tokens in your codebase.

You'll first need to install [ESLint](https://eslint.org):

```shell
$ npm install --save-dev eslint
# or
$ yarn add --dev eslint
```

Next, install `@metamask/eslint-plugin-design-tokens`:

```shell
$ npm install --save-dev @metamask/eslint-plugin-design-tokens
# or
$ yarn add --dev @metamask/eslint-plugin-design-tokens
```

### Configuration

Add `eslint-plugin-design-tokens` to your ESLint configuration:

```json
{
  "plugins": ["@metamask/design-tokens"],
  "rules": {
    "@metamask/design-tokens/color-no-hex": "warn"
  }
}
```

This configuration will enforce the usage of design tokens instead of static hex color values, helping to maintain a consistent design system. See more [supported rules](https://github.com/MetaMask/eslint-plugin-design-tokens?tab=readme-ov-file#supported-rules)

## Contributing

This package is part of a monorepo. Instructions for contributing can be found in the [monorepo README](https://github.com/MetaMask/metamask-design-system#readme).
