// eslint-plugin/rules/no-deprecated-tailwind-classnames.ts
import type {
  RuleContext,
  RuleListener,
  TSESTree,
} from '@typescript-eslint/experimental-utils';
import { ESLintUtils } from '@typescript-eslint/utils';

// The Rule creator returns a function that is used to create a well-typed ESLint rule
// The parameter passed into RuleCreator is a URL generator function.
const createRule = ESLintUtils.RuleCreator(
  (name) => `https://my-website.io/eslint/${name}`,
);

const deprecatedClasses: string[] = ['bg-white', 'bg-black', 'text-red-500']; // Simplified list, populate this based on your Tailwind config

export const noDeprecatedTailwindClassnames = createRule({
  name: 'no-deprecated-tailwind-classnames',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'No deprecated tailwind classnames allowed',
      recommended: false,
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      deprecatedClass:
        '{{className}} is a deprecated TailwindCSS class. Please update it according to the Tailwind config.',
    },
  },
  defaultOptions: [],
  create(context: RuleContext<'deprecatedClass', []>): RuleListener {
    return {
      Literal(node: TSESTree.Literal) {
        if (typeof node.value === 'string') {
          const classNames = node.value.split(' ');
          classNames.forEach((className: string) => {
            if (deprecatedClasses.includes(className)) {
              context.report({
                node,
                messageId: 'deprecatedClass',
                data: {
                  className,
                },
              });
            }
          });
        }
      },
    };
  },
});
