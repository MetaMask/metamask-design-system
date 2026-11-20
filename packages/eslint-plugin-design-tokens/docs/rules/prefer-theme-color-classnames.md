# Encourage the Use of Theme Color Classnames (`@metamask/design-tokens/prefer-theme-color-classnames`)

This rule encourages the use of theme color classnames instead of literal color names, promoting theme safe and consistent color management via [design tokens](https://github.com/MetaMask/metamask-design-system/tree/main/packages/design-tokens). By advocating for the use of [design tokens](https://github.com/MetaMask/metamask-design-system/tree/main/packages/design-tokens) for colors, this rule helps ensure consistency, design system alignment, scalability, and ease of maintenance across your project's UI.

## Rule Details

The `prefer-theme-color-classnames` rule is aimed at encouraging the use of CSS theme color class names over direct references to literal color names e.g. black, white, etc. This practice supports theming, reusability, and easier updates to the color palette.

In the MetaMask Tailwind and twrnc setups the default color palettes are removed (Tailwind v4 does this with `--color-*: initial` in [`@metamask/design-tokens`'s theme](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-tokens/src/tailwind/theme.css), and the twrnc preset and consumers' Tailwind configs replace `theme.colors` the same way), so literal color classnames such as `bg-blue-500` do not resolve to anything. Only the theme color classnames (e.g. `bg-default`, `text-primary-default`) plus the literal `black` and `white` are available.

Brand color families (`grey`, `blue`, `green`, `red`, `yellow`, `orange`, `purple`, `lime`, `indigo`) are therefore not discouraged by default: classes built from them never resolve in a MetaMask setup, and unknown-classname linting such as the `tailwindcss/no-custom-classname` rule from `eslint-plugin-tailwindcss` is the more accurate signal for those. This rule targets the literal colors that do resolve but should still be theme tokens.

Examples of **incorrect** code for this rule:

```jsx
// In a JSX file
<div className="bg-black">...</div>
<div className="text-white">...</div>
```

Examples of **correct** code for this rule:

```jsx
// Using design token theme color class names
<div className="bg-default">...</div>
<div className="text-primary-inverse">...</div>
```

## Options

This rule accepts an optional single configuration object with the following properties:

- `discouragedColors`: An array of strings representing color names that should be avoided. Providing this array will override the default set of discouraged colors. The defaults are the literal colors exposed by [`@metamask/design-tokens`](https://github.com/MetaMask/metamask-design-system/tree/main/packages/design-tokens) and its Tailwind/twrnc setups:
- `black`
- `white`

Add brand color families or other literal names (e.g. `gray`) to `discouragedColors` if your project keeps a larger literal palette available, such as when the deprecated Tailwind v3 preset is used without removing the default Tailwind colors. The plugin's defaults describe the MetaMask Tailwind and twrnc setups; projects that expose their own literal palettes own their `discouragedColors` configuration, in the same way `no-deprecated-classnames` mappings are configured per project.

### Example Configuration:

```json
{
  "rules": {
    "@metamask/design-tokens/prefer-theme-color-classnames": [
      "warn",
      {
        "discouragedColors": ["customColor", "anotherColor"]
      }
    ]
  }
}
```

## When Not To Use It

You might choose not to enable this rule if:

- Your project has not adopted the MetaMask design system.
- Your project does not use utility classnames such as Tailwind
- There are specific cases where the direct usage of literal color names is necessary and cannot be replaced with themed alternatives. This includes colors that should remain the same regardless of theme. In such cases, you can disable the rule for specific lines. For example, to disable the rule for the black fill of this star icon, you can use:

```js
<Star
  className={classnames({
    // eslint-disable-next-line @metamask/design-tokens/prefer-theme-color-classnames
    'fill-black': isWatched,
    'fill-icon-muted': !isWatched,
  })}
/>
```

This configuration allows for selective application of the rule, accommodating necessary exceptions.

Adopting this rule helps ensure that your project's color definitions are centralized and easily manageable, facilitating simpler adaptations or re-theming of your application as needed.
