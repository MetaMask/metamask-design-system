# Encourage the Use of Theme Color Classnames (`@metamask/design-tokens/prefer-theme-color-classnames`)

This rule encourages the use of theme color classnames instead of literal color names, promoting theme safe and consistent color management via [design tokens](https://github.com/MetaMask/design-tokens). By advocating for the use of [design tokens](https://github.com/MetaMask/design-tokens) for colors, this rule helps ensure consistency, design system alignment, scalability, and ease of maintenance across your project's UI.

## Rule Details

The `prefer-theme-color-classnames` rule is aimed at encouraging the use of CSS theme color class names over direct references to literal color names e.g. blue, red, green, slateGray, etc. This practice supports theming, reusability, and easier updates to the color palette.

Examples of **incorrect** code for this rule:

```jsx
// In a JSX file
<div className="bg-slateGray-500">...</div>
<div className="text-blue-600">...</div>
```

Examples of **correct** code for this rule:

```jsx
// Using design token theme color class names
<div className="bg-default">...</div>
<div className="text-primary-default">...</div>
```

## Options

This rule accepts an optional single configuration object with the following properties:

- `discouragedColors`: An array of strings representing color names that should be avoided. Providing this array will override the default set of discouraged colors. The default colors considered discouraged are:
- `blue`
- `red`
- `gray`
- `slateGray`
- `green`
- `orange`
- `black`
- `white`
- `indigo`
- `yellow`
- `purple`
- `pink`
- `teal`

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
- There are specific cases where the direct usage of literal color names is necessary and cannot be replaced with themed alternatives. This includes colors that should remain the same regardless of theme. In such cases, you can disable the rule for specific lines. For example, to disable the rule for the yellow of this star icon, you can use:

```js
<Star
  className={classnames({
    // eslint-disable-next-line @metamask/design-tokens/prefer-theme-color-classnames
    'fill-yellow-500': isWatched,
    'fill-icon-muted': !isWatched,
  })}
/>
```

This configuration allows for selective application of the rule, accommodating necessary exceptions.

Adopting this rule helps ensure that your project's color definitions are centralized and easily manageable, facilitating simpler adaptations or re-theming of your application as needed.
