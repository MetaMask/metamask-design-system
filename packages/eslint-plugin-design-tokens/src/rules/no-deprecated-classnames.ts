import type { Rule } from 'eslint';

/**
 * Type definition for deprecated class names.
 * Maps deprecated TailwindCSS class names to suggestion messages.
 */
type DeprecatedClassnames = {
  [key: string]: string;
};

/**
 * The main rule module for detecting deprecated TailwindCSS class names.
 * This ESLint rule checks for the usage of deprecated TailwindCSS class names
 * and suggests updated alternatives based on a configurable list.
 */
export const noDeprecatedClassnames: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'No deprecated classnames allowed',
      recommended: false,
      // Make sure to replace the URL with the actual location of your rule's documentation
      url: 'https://github.com/MetaMask/eslint-plugin-design-tokens/blob/main/docs/rules/no-deprecated-classnames.md',
    },
    // Define the schema to accept an object of deprecated classnames
    schema: [
      {
        type: 'object',
        additionalProperties: {
          type: 'string',
        },
      },
    ],
  },
  /**
   * The `create` method that gets executed by ESLint when linting files.
   * It checks for deprecated classnames and reports them.
   *
   * @param context - The ESLint rule context providing interfaces to report node information.
   * @returns An object with methods targeting specific nodes in the AST.
   */
  create(context) {
    // Access the first option as the deprecatedClassnames object
    const deprecatedClassnames: DeprecatedClassnames = context.options[0] || {};

    return {
      /**
       * Listener for Literal nodes in the AST. It splits class names in string literals
       * and checks each against the list of deprecated class names.
       *
       * @param node - The AST node being visited.
       */
      Literal(node) {
        if (typeof node.value === 'string') {
          const classNames = node.value.split(' ');
          classNames.forEach((className) => {
            if (Object.keys(deprecatedClassnames).includes(className)) {
              // Report the deprecated class name usage with a suggestion message.
              context.report({
                node,
                message: `${className} is a deprecated TailwindCSS class. ${
                  deprecatedClassnames[className] ?? 'No alternative available.'
                }`,
              });
            }
          });
        }
      },
    };
  },
};
