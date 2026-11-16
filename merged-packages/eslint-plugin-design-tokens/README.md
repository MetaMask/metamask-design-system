# `@metamask/eslint-plugin-design-tokens`

An ESLint plugin designed to enforce best practices and consistency for using MetaMask [design tokens](https://github.com/MetaMask/design-tokens) across various projects

## Installation

You'll first need to install [ESLint](https://eslint.org):

```shell
$ npm install --save-dev eslint
# or
$ yarn add --dev eslint
```

Next, install `@metamask/eslint-plugin-design-tokens`:

```shell
$ yarn add @metamask/eslint-plugin-design-tokens
# or
$ npm install @metamask/eslint-plugin-design-tokens
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@metamask/eslint-plugin-design-tokens` globally.

## Usage

Add `@metamask/design-tokens` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@metamask/design-tokens"]
}
```

Then configure the rules you want to use within `rules` property of your `.eslintrc`:

```json
{
  "rules": {
    "@metamask/design-tokens/no-deprecated-classnames": [
      "warn",
      {
        "bg-white": "Use 'bg-default' to align with the design system's color tokens.",
        "bg-surface-default": "Use 'bg-default' to align with the design system's color tokens.",
        "text-red-500": "Use 'text-error-default' to align with the design system's color tokens.",
        "text-critical": "Use 'text-error-default' to align with the design system's color tokens."
      }
    ]
  }
}
```

## Supported Rules

> Remember that all rules from this plugin are prefixed by `"@metamask/design-tokens/"`

| Name                                                                             | Description                                                                         |
| :------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| [no-deprecated-classnames](docs/rules/no-deprecated-classnames.md)               | Enforce usage of up-to-date TailwindCSS class names, disallowing deprecated ones.   |
| [color-no-hex](docs/rules/color-no-hex.md)                                       | Prevent the use of hex color values.                                                |
| [prefer-theme-color-classnames](docs/rules/prefer-theme-color-classnames.md)     | Encourage the use of theme color class names instead of literal color class names.  |

## Contributing

This package is part of a monorepo. Instructions for contributing can be found in the [monorepo README](https://github.com/MetaMask/metamask-design-system#readme).
