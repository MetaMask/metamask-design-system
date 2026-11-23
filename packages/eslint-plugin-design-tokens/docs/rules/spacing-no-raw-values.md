# Disallow raw spacing values (`@metamask/design-tokens/spacing-no-raw-values`)

This rule flags raw spacing values so that spacing is expressed with the MetaMask design system's spacing scale instead. It is the lint-rule successor of the `design-system/no-hardcoded-spacing` pilot check in the MetaMask mobile repository, and it is meant to work for both consumers of the design system: MetaMask mobile (React Native) and MetaMask extension (React web).

## Rule Details

The MetaMask spacing scale is a 4px scale: one spacing unit equals 4px, and the `Box` component exposes the units as the `BoxSpacing` tokens `0`-`12` (0px-48px). Tailwind and twrnc express the same scale through their spacing utilities (`mb-3` is 12px), and the MetaMask Tailwind and twrnc presets keep the default 4px spacing scale.

This rule flags three ways a raw spacing value can appear:

1. **Raw numeric values on spacing properties in style objects**, e.g. `marginBottom: 12` in a `StyleSheet.create` call, an inline `style={{ paddingTop: 4 }}`, or a CSS-in-JS object. Numbers in React inline styles are treated as px by React, and as dp by React Native, so the same mapping applies on both platforms.
2. **Raw `px` and `rem` string values on spacing properties**, e.g. `marginBottom: '12px'`, which is the common shape in web CSS-in-JS.
3. **Tailwind / twrnc arbitrary spacing classes** with a px or rem value in any string, e.g. `mb-[12px]`, `p-[3px]`, `gap-[12px]`, `mx-[10px]`, `-mt-[4px]`, `hover:p-[3px]`, whether the string is a `className`, a `twClassName`, a `twMerge(...)` argument, or a `tw` template literal.

The flagged property names cover the margin and padding families (including React Native's `marginHorizontal`, `marginStart`, `paddingEnd`, ... and the web logical properties `marginInline*`, `paddingBlock*`, ...), plus `gap`, `rowGap`, and `columnGap`.

When a raw value is an exact multiple of the scale (including half steps such as 2px → `0.5` and 6px → `1.5`) within the Box range of 0-12, the message includes the equivalent spacing token, and arbitrary classes additionally get a suggestion that replaces the arbitrary class with the token class (e.g. `mb-[12px]` → `mb-3`). Values that do not map exactly (e.g. `3px`, `0.5px`, or 52px, which is beyond the 0-12 scale) are still flagged, but without a token.

Examples of **incorrect** code for this rule:

```js
// React Native
const styles = StyleSheet.create({
  container: {
    marginBottom: 12, // 12dp, spacing token 3
  },
});

// React web
<div style={{ paddingTop: 4 }} className="px-[10px]">
  ...
</div>;
```

Examples of **correct** code for this rule:

```js
// React Native: Box spacing props are tokens (1 unit = 4px)
<Box marginBottom={3}>...</Box>
// twrnc token classes
<View style={tw`mb-3 px-4`}>...</View>

// React web: Box spacing props or Tailwind token classes
<Box paddingTop={1} className="px-4">...</Box>
```

`0` is allowed by default: a zero value is unambiguous and needs no token.

## Options

This rule accepts an optional single configuration object with the following properties:

### `properties`

An array of strings overriding the spacing property names that are checked in style objects. Providing this array replaces the default list entirely. An empty list, or a list with no usable names, disables the style object check (the arbitrary class check is unaffected). The defaults are the margin and padding families (including logical keys) plus `gap`, `rowGap`, and `columnGap`.

### `allow`

An array of raw values that should not be flagged. Providing this array replaces the default of `[0]`, so a custom list that should still allow zero must include `0`.

- Numbers match numeric literals, e.g. `allow: [1]` allows `marginBottom: 1` but not `marginBottom: '1px'` or `mb-[1px]`.
- Strings match the exact text of string values and arbitrary class values, e.g. `allow: ['1px']` allows both `marginBottom: '1px'` and `mb-[1px]`.

### Example Configuration

MetaMask mobile (React Native), flat config:

```js
// eslint.config.js
import { rules } from '@metamask/eslint-plugin-design-tokens';

export default [
  {
    plugins: {
      '@metamask/design-tokens': { rules },
    },
    rules: {
      '@metamask/design-tokens/spacing-no-raw-values': 'warn',
    },
  },
];
```

MetaMask extension (React web), flat config:

```js
// eslint.config.js
import { rules } from '@metamask/design-tokens';

export default [
  {
    plugins: {
      '@metamask/design-tokens': { rules },
    },
    rules: {
      // Extension code keeps raw values where the design system has no
      // replacement yet, e.g. hairline 1px offsets.
      '@metamask/design-tokens/spacing-no-raw-values': [
        'warn',
        { allow: [0, '1px'] },
      ],
    },
  },
];
```

Legacy (`.eslintrc`) configuration:

```json
{
  "rules": {
    "@metamask/design-tokens/spacing-no-raw-values": "warn"
  }
}
```

## When Not To Use It

You might choose not to enable this rule if:

- Your project has not adopted the MetaMask design system.
- Your project intentionally works with absolute px spacing everywhere, in which case the rule would flag most style code.

When a raw value is intentional, disable the rule for that line with the standard ESLint exception syntax and a reason:

```js
const styles = StyleSheet.create({
  notchSpacer: {
    height: 44,
    // eslint-disable-next-line @metamask/design-tokens/spacing-no-raw-values -- intentionally off-scale to match a native platform measurement
    marginBottom: 3,
  },
});
```

## Known limitations

The following shapes are not flagged yet and are tracked as known gaps:

- Non-literal values, e.g. ternaries (`isCompact ? 12 : 8`), arithmetic (`baseSpacing + 4`), identifiers, and function calls. Flagging them needs constant evaluation, which is out of scope for v1.
- Template literal values on spacing properties, e.g. `` marginBottom: `${size}px` ``.
- Kebab-case property keys in CSS-in-JS objects, e.g. `'margin-bottom': '12px'`.
- Arbitrary classes with units other than `px` and `rem`, e.g. `p-[1em]`, `gap-[50%]`, and multi-value arbitrary values such as `m-[12px_4px]`. Relative units are intentional spacing and stay unflagged.
- Values on properties outside the margin/padding/gap families (e.g. `top`, `width`, `borderWidth`) and inside props like `hitSlop` are not spacing scale concerns and stay unflagged.
- String values without a unit (e.g. `marginBottom: '12'`) are invalid CSS and stay unflagged.

The px-to-token mapping assumes a 16px root font size (the Tailwind default). Rem values map without that assumption because the Tailwind spacing scale is defined in rem (`--spacing: 0.25rem`). The spacing scale itself is encoded in this rule because `@metamask/design-tokens` does not export a spacing scale yet; if the package gains one, this rule should consume it.
