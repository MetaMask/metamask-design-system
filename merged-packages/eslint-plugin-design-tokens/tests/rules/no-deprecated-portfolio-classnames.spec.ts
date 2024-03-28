import { RuleTester } from 'eslint';

import { noDeprecatedClassnames } from '../../src/rules/no-deprecated-classnames';

const ruleTester = new RuleTester({
  // eslint-disable-next-line no-restricted-globals
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
});

ruleTester.run('no-deprecated-classnames', noDeprecatedClassnames, {
  valid: [
    // Code snippets that should NOT trigger the rule
    { code: `const validClass = "bg-default text-error-default";` },
    { code: `const anotherValidClass = "some-other-class p-4";` },
  ],
  invalid: [
    // Code snippets that SHOULD trigger the rule
    {
      code: `const deprecatedClass = "bg-white";`,
      errors: [
        {
          message: `bg-white is a deprecated TailwindCSS class. Use 'bg-default' to align with the design system's color tokens.`,
        },
      ],
    },
    {
      code: `const multipleDeprecatedClasses = "bg-surface-default text-critical";`,
      errors: [
        {
          message: `bg-surface-default is a deprecated TailwindCSS class. Use 'bg-default' to align with the design system's color tokens.`,
        },
        {
          message: `text-critical is a deprecated TailwindCSS class. Use 'text-error-default' to align with the design system's color tokens.`,
        },
      ],
    },
  ],
});
