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

const customDeprecatedClasses = {
  'bg-white':
    "Use 'bg-default' to align with the design system's color tokens.",
  'bg-surface-default':
    "Use 'bg-default' to align with the design system's color tokens.",
  'text-red-500':
    "Use 'text-error-default' to align with the design system's color tokens.",
  'text-critical':
    "Use 'text-error-default' to align with the design system's color tokens.",
};

ruleTester.run('no-deprecated-classnames', noDeprecatedClassnames, {
  valid: [
    // Code snippets that should NOT trigger the rule without specifying options
    { code: `const classWithoutOptions = "bg-white";`, options: [{}] },
    {
      code: `const anotherClassWithoutOptions = "text-critical";`,
      options: [{}],
    },
    // Code snippets with classes not listed in the customDeprecatedClasses object
    {
      code: `const validClassWithCustomOptions = "bg-current";`,
      options: [customDeprecatedClasses],
    },
    {
      code: `const anotherValidClassWithCustomOptions = "text-success";`,
      options: [customDeprecatedClasses],
    },
  ],
  invalid: [
    // Code snippets that SHOULD trigger the rule with custom deprecated class names provided via options
    {
      code: `const deprecatedClass = "bg-white";`,
      options: [customDeprecatedClasses],
      errors: [
        {
          message: `bg-white is a deprecated TailwindCSS class. Use 'bg-default' to align with the design system's color tokens.`,
        },
      ],
    },
    {
      code: `const multipleDeprecatedClasses = "bg-surface-default text-critical";`,
      options: [customDeprecatedClasses],
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
