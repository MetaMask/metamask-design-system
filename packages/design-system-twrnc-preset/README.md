# `@metamask/design-system-twrnc-preset`

Design System twrnc preset

## Installation

First, install the package:

`yarn add @metamask/design-system-twrnc-preset`

or

`npm install @metamask/design-system-twrnc-preset`

### Peer Dependencies

This package requires the following peer dependencies to be installed in your project:

```bash
yarn add react@^18.2.0 react-native@0.72.15 twrnc@^4.5.1
```

or

```bash
npm install react@^18.2.0 react-native@0.72.15 twrnc@^4.5.1
```

## Usage

### Using the Theme Provider

```tsx
import {
  ThemeProvider,
  Theme,
  useTailwind,
} from '@metamask/design-system-twrnc-preset';

function App() {
  return (
    <ThemeProvider theme={Theme.Light}>
      <MyComponent />
    </ThemeProvider>
  );
}

function MyComponent() {
  const tw = useTailwind();

  return (
    <View style={tw`p-4 bg-background-default`}>
      <Text style={tw`text-text-default text-heading-lg`}>
        Hello MetaMask Design System!
      </Text>
    </View>
  );
}
```

### Corner radius

The preset adds numeric aliases for Tailwind's radius scale. No values change:
`rounded-8` and `rounded-lg` are both 8px, and Tailwind's own names keep
working.

`rounded-none`, `rounded-2`, `rounded-4`, `rounded-6`, `rounded-8`,
`rounded-12`, `rounded-16`, `rounded-24`, `rounded-full`.

Prefer the numeric names. They state their value, and they mean the same thing
across Tailwind versions — `rounded-sm` is 2px in v3 and 4px in v4.

Corner-specific variants work as usual: `rounded-t-24`, `rounded-tl-2`.

Use `rounded-full` for circles and capsules — a radius larger than half the
shortest side rounds the shape fully.

`StyleSheet` styles cannot use classes, so import the values rather than
hardcoding them:

```tsx
import { borderRadius } from '@metamask/design-tokens';

const styles = StyleSheet.create({
  card: { borderRadius: borderRadius[8] },
});
```

### Tailwind Config for IntelliSense

To get Tailwind IntelliSense and ESLint plugin support, use the config generator:

**TypeScript:**

```typescript
// tailwind.config.ts
import {
  generateTailwindConfig,
  Theme,
} from '@metamask/design-system-twrnc-preset/tailwind.config';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  ...generateTailwindConfig(Theme.Light),
};
```

**JavaScript:**

```javascript
// tailwind.config.js
const {
  generateTailwindConfig,
  Theme,
} = require('@metamask/design-system-twrnc-preset/tailwind.config');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  ...generateTailwindConfig(Theme.Light),
};
```

**Custom content paths:**

```typescript
// tailwind.config.ts
import {
  generateTailwindConfig,
  Theme,
} from '@metamask/design-system-twrnc-preset/tailwind.config';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  ...generateTailwindConfig(Theme.Light),
};
```

This provides:

- 🎨 **Full IntelliSense support** - Auto-completion for all design system classes
- 🔍 **ESLint integration** - Works with `eslint-plugin-tailwindcss`
- 🌙 **Theme agnostic** - Classnames work with both light and dark themes
- 📝 **Type safety** - TypeScript definitions for all design tokens
- ⚡ **Actual Design System Config** - Uses the same configuration as the TWRNC preset

## Contributing

This package is part of a monorepo. Instructions for contributing can be found in the [monorepo README](https://github.com/MetaMask/metamask-design-system#readme).
