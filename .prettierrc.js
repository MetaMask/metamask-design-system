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
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './apps/storybook-react/tailwind.config.js', // Main web config
  tailwindFunctions: ['tw', 'twMerge'], // Support twrnc and twMerge template literals and utility functions
  tailwindAttributes: ['twClassName'], // Support twClassName prop
};
