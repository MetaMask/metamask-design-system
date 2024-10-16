# `@metamask/design-system-tailwind-preset`

Design System Tailwind CSS preset for MetaMask projects

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
<div class="bg-background-default text-text-default">
  <h1 class="font-s-heading-lg sm:font-l-heading-lg">Welcome to MetaMask</h1>
  <p class="font-s-body-md sm:font-l-body">
    Enjoy our consistent design across projects!
  </p>
</div>
```

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

## Contributing

This package is part of a monorepo. Instructions for contributing can be found in the [monorepo README](https://github.com/MetaMask/metamask-design-system#readme).
