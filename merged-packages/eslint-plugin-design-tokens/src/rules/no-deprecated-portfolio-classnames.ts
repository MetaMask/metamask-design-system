import type { Rule } from 'eslint';

type DeprecatedClassnames = {
  [key: string]: string;
};

const deprecatedClasses: DeprecatedClassnames = {
  'bg-white':
    "Use 'bg-default' to align with the design system's color tokens.",
  'bg-surface-default':
    "Use 'bg-default' to align with the design system's color tokens.",
  'text-red-500':
    "Use 'text-error-default' to align with the design system's color tokens.",
  'text-critical':
    "Use 'text-error-default' to align with the design system's color tokens.",
};

export const noDeprecatedTailwindClassnames: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'No deprecated tailwind classnames allowed',
      recommended: false,
      url: 'https://github.com/MetaMask/eslint-plugin-design-tokens?tab=readme-ov-file#eslint-plugin-design-tokens-', // URL to the documentation page for this rule
    },
    schema: [], // Add a schema if the rule has options
  },
  create(context) {
    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          const classNames = node.value.split(' ');
          classNames.forEach((className) => {
            if (Object.keys(deprecatedClasses).includes(className)) {
              // Using nullish coalescing operator to ensure a string output
              context.report({
                node,
                message: `${className} is a deprecated TailwindCSS class. ${
                  deprecatedClasses[className] ?? 'No alternative available.'
                }`,
              });
            }
          });
        }
      },
    };
  },
};
