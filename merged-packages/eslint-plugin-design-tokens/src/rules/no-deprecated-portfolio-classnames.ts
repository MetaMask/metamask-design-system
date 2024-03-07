// eslint-plugin/rules/my-rule.ts
import { ESLintUtils } from '@typescript-eslint/utils';

// The Rule creator returns a function that is used to create a well-typed ESLint rule
// The parameter passed into RuleCreator is a URL generator function.
export const createRule = ESLintUtils.RuleCreator(
  (name) => `https://my-website.io/eslint/${name}`,
);

export const noDeprecatedTailwindClassnames = createRule({
  name: 'my-rule',
  meta: {
    docs: {
      description: 'An example ESLint rule',
    },
    type: 'suggestion',
    schema: [],
    fixable: 'code', // add the `fixable` property to tell ESLint that this problem is fixable
    hasSuggestions: true, // tell ESLint that this rule has suggestions
    messages: {
      'issue:var': 'Prefer using `let` or `const`',
      'fix:let': 'Replace this `var` declaration with `let`',
      'fix:const': 'Replace this `var` declaration with `const`',
    },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      VariableDeclaration: (node) => {
        if (node.kind === 'var') {
          context.report({
            node,
            messageId: 'issue:var',
            suggest: [
              {
                messageId: 'fix:let',
                fix: (fixer) => fixer.replaceText(node, 'let'),
              },
              {
                messageId: 'fix:const',
                fix: (fixer) => fixer.replaceText(node, 'const'),
              },
            ],
          });
        }
      },
    };
  },
});
