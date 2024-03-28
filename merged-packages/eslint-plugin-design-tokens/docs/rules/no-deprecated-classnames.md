# No deprecated classnames allowed (`@metamask/design-tokens/no-deprecated-classnames`)

This rule ensures that your project uses up-to-date class names, aligning with the latest design system's color tokens and conventions, by disallowing deprecated class names.

Ensure that only the current, recommended class names are used in your project, preventing the use of outdated or deprecated names that may lead to inconsistent styling or conflicts with the design system's guidelines.

## Rule Details

This rule is designed to help maintain a consistent and modern codebase by warning against the use of deprecated class names. It encourages the use of updated class names as specified in a project's design tokens or TailwindCSS configuration.

Examples of **incorrect** code for this rule:

```html
<!-- Using deprecated class names -->
<div class="bg-white text-red-500">...</div>
<div class="bg-surface-default">...</div>
```

Examples of **correct** code for this rule:

```html
<!-- Using updated class names -->
<div class="bg-default text-error-default">...</div>
```

## Options

This rule accepts an object option, where the keys are the deprecated class names and the values are messages suggesting the updated class names to use instead. This allows teams to customize the rule based on their specific design system and TailwindCSS configuration.

## Example

```json
{
  "@metamask/design-tokens/no-deprecated-classnames": [
    "warn",
    {
      "bg-white": "Use 'bg-default' to align with the design system's color tokens.",
      "bg-surface-default": "Use 'bg-default' to align with the design system's color tokens.",
      "text-red-500": "Use 'text-error-default' to align with the design system's color tokens."
    }
  ]
}
```

## When Not To Use It

If your project does not use TailwindCSS, or if maintaining a strict alignment with design tokens and updated class names is not a priority, you might choose not to enable this rule.
