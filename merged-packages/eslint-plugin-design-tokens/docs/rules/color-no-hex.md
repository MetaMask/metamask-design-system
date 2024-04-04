# Prevent the use of static hex color values (`@metamask/design-tokens/color-no-hex`)

This rule discourages the direct use of hexadecimal color codes in your styles, promoting the adoption of a centralized approach to color management via [design tokens](https://github.com/MetaMask/design-tokens). By enforcing the use of [design tokens](https://github.com/MetaMask/design-tokens) for colors, this rule aids in ensuring consistency, design system alignment, scalability, and ease of maintenance across your project's UI.

## Rule Details

The `color-no-hex` rule is aimed at encouraging the use of [design tokens](https://github.com/MetaMask/design-tokens), instead of hardcoded hexadecimal color values. This practice facilitates theming, reusability, and easier updates to the color palette.

Examples of **incorrect** code for this rule:

```jsx
// In a JSX file
<div style={{ color: '#E06470' }}>...</div>
```

Examples of **correct** code for this rule:

```jsx
// Using design token CSS variables
<div style={{ color: 'var(--color-error-default)' }}>...</div>
```

```jsx
// Using design token CSS-in-JS variables
<div style={{ color: theme.error.default }}>...</div>
```

## Options

This rule does not accept any options. Its sole purpose is to flag the use of inline hexadecimal color values in favor of [design tokens](https://github.com/MetaMask/design-tokens) generated styles.

## Example Configuration

```json
{
  "@metamask/design-tokens/color-no-hex": "warn"
}
```

## When Not To Use It

You might choose not to enable this rule if:

- Your project has not adopted the MetaMask design system.
- There are specific cases where direct hexadecimal color usage is necessary and cannot be abstracted. This includes assets like SVG graphics, although such exceptions should be rare and well-justified. In such cases, you can disable the rule for specific files or folders by adding overrides in your ESLint configuration. For example, to disable the rule in asset files or folders, you can use:

```json
"overrides": [
  {
    "files": ["path/to/assets/*", "another/path/to/specific/files/*"],
    "rules": {
      "@metamask/design-tokens/color-no-hex": "off"
    }
  }
]
```

This configuration allows you to selectively apply the rule where it makes sense, while accommodating necessary exceptions.

Adhering to this rule helps ensure that your project's color definitions are centralized and easily manageable, facilitating simpler adaptations or re-theming of your application as needed.
