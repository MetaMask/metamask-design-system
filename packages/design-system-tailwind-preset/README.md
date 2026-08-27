# `@metamask/design-system-tailwind-preset`

Design System Tailwind CSS preset for MetaMask projects

> This package is the Tailwind CSS v3 preset. For Tailwind CSS v4 consumers, use `@metamask/design-tokens/tailwind/theme.css` instead.
>
> Migration guide:
> <https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-tokens/MIGRATION.md#tailwind-css-v3-to-v4>

## Installation

`yarn add @metamask/design-system-tailwind-preset`

or

`npm install @metamask/design-system-tailwind-preset`

## Usage

To use the MetaMask Design System Tailwind CSS preset in your project, follow these steps:

1. Install the package as described in the Installation section above.

2. In your `tailwind.config.js` file, import and use the preset:

```javascript
module.exports = {
  presets: [require('@metamask/design-system-tailwind-preset')],
  // ...
};
```

```html
<div class="bg-default text-default rounded-8">
  <h1 class="font-s-heading-lg sm:font-l-heading-lg">Welcome to MetaMask</h1>
  <p class="font-s-body-md sm:font-l-body">
    Enjoy our consistent design across projects!
  </p>
</div>
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

## Customization

You can override or extend the preset's configurations in your `tailwind.config.js` file:

```javascript
module.exports = {
  presets: [require('@metamask/design-system-tailwind-preset')],
  theme: {
    extend: {
      // Your custom extensions...
    },
  },
  // Other Tailwind configurations...
};
```

## Documentation

For more information on how to use Tailwind CSS and configure your project, refer to the official Tailwind CSS documentation:

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Customizing Your Tailwind Configuration](https://tailwindcss.com/docs/configuration)
- [Presets in Tailwind CSS](https://tailwindcss.com/docs/presets)

## Contributing

This package is part of a monorepo. Instructions for contributing can be found in the [monorepo README](https://github.com/MetaMask/metamask-design-system#readme).
