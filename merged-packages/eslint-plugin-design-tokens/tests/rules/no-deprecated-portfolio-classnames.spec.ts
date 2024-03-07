import { RuleTester } from 'eslint';

import { noDeprecatedTailwindClassnames } from '../../lib/rules/no-deprecated-portfolio-classnames';

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run('eslint-plugin/my-rule', noDeprecatedTailwindClassnames, {
  valid: [
    {
      // a code snippet that should pass the linter
      code: `const x = 5;`,
    },
    {
      code: `let y = 'abc123';`,
    },
  ],
  invalid: [
    // If our rule is fixable:
    {
      code: `var z = 'foo'`,
      output: `let z = foo`,
      errors: [
        {
          messageId: 'issue:var',
        },
      ],
    },
    // or, if we only have suggestions:
    {
      code: `var z = 'foo'`,
      errors: [
        {
          messageId: 'issue:var',
          suggestions: [
            {
              messageId: 'fix:let',
              output: `let z = foo`,
            },
            {
              messageId: 'fix:const',
              output: `const z = foo`,
            },
          ],
        },
      ],
    },
  ],
});
