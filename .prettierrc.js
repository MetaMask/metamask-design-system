/**
 * @type {import('prettier').Options}
 */
module.exports = {
  // All of these are defaults except singleQuote, but we specify them
  // for explicitness
  quoteProps: 'as-needed',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  // Tailwind CSS
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tw', 'twMerge'], // Support twrnc and twMerge template literals and utility functions
  tailwindAttributes: ['twClassName'], // Support twClassName prop

  // Use Prettier's configuration overrides to handle multiple Tailwind configs
  // This allows different files to use different Tailwind configurations
  // See: https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/335#issuecomment-2801686781
  overrides: [
    {
      // React web components and stories use the Storybook React Tailwind config
      files: [
        './packages/design-system-react/src/**',
        './apps/storybook-react/stories/**',
        './packages/design-tokens/stories/**',
      ],
      options: {
        tailwindConfig: './apps/storybook-react/tailwind.config.js',
      },
    },
    {
      // React Native components and stories use the TWRNC preset Tailwind config
      files: [
        './packages/design-system-react-native/src/**',
        './apps/storybook-react-native/stories/**',
      ],
      options: {
        tailwindConfig:
          './packages/design-system-twrnc-preset/tailwind.config.js',
      },
    },
  ],
};
