import { RuleTester } from 'eslint';

import { preferThemeColorClassnames } from '../../src/rules/prefer-theme-color-classnames';

const ruleTester = new RuleTester({
  // eslint-disable-next-line no-restricted-globals
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
});

ruleTester.run('prefer-theme-color-classnames', preferThemeColorClassnames, {
  valid: [
    { code: `const className = "bg-primary-default";` },
    { code: `const className = "text-default";` },
    { code: `const templateString = \`bg-\${colorValue}\`;` },
    { code: `const className = "other-non-color-class-name";` },
    // This is an example where default discouraged colors are overridden so default colors are not discouraged
    {
      code: `const className = "bg-blue-500";`,
      options: [{ discouragedColors: ['random-override'] }],
    },
    {
      code: `const className = "bg-blue-500";`,
      options: [{ discouragedColors: [' '] }],
    },
  ],

  invalid: [
    {
      code: `const className = "bg-customColor-500";`,
      options: [
        {
          discouragedColors: ['customColor'],
        },
      ],
      errors: [
        {
          message: `'bg-customColor-500' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    {
      code: `const className = "border-blue-200";`,
      errors: [
        {
          message: `'border-blue-200' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    {
      code: `const className = "text-red-600";`,
      errors: [
        {
          message: `'text-red-600' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
    {
      code: `const templateString = \`bg-blue-\${opacity}\`;`,
      errors: [
        {
          message: `'bg-blue' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
        },
      ],
    },
  ],
});
