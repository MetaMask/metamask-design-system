import type { Rule } from 'eslint';

/**
 * Rule to encourage the use of theme color class names instead of literal color class names.
 */
export const preferThemeColorClassnames: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Encourage the use of theme color class names instead of literal color class names.',
      recommended: true,
      url: 'https://github.com/MetaMask/eslint-plugin-design-tokens/blob/main/docs/rules/prefer-theme-color-classnames.md',
    },
    // Adding a schema to accept options
    schema: [
      {
        type: 'object',
        properties: {
          discouragedColors: {
            type: 'array',
            items: {
              type: 'string',
              minLength: 1, // This ensures that the string is not empty but does not prevent whitespace-only strings.
            },
            default: [
              'blue',
              'red',
              'gray',
              'slateGray',
              'green',
              'orange',
              'black',
              'white',
              'indigo',
              'yellow',
              'purple',
              'pink',
              'teal',
            ],
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      discouragedColorUsage: `'{{className}}' usage of literal color class names is discouraged. Consider using theme color class names instead.`,
    },
  },
  create(context) {
    const options = context.options[0] || {};

    // Default to a list of discouraged color names if none are provided in the options.
    const discouragedColors: string[] = options.discouragedColors || [
      'blue',
      'red',
      'gray',
      'slateGray',
      'green',
      'orange',
      'black',
      'white',
      'indigo',
      'yellow',
      'purple',
      'pink',
      'teal',
    ];

    // Validate discouragedColors to ensure no empty or whitespace-only strings
    const validColors = discouragedColors.filter(
      (color) => color.trim().length > 0,
    );

    if (validColors.length === 0) {
      return {}; // Exit early if no valid colors are provided
    }

    // Create a regex that matches class names containing any of the discouraged color names.
    const colorRegex = new RegExp(
      `\\b(\\w+-)?(${discouragedColors.join('|')})-?\\d*\\b`,
      'iu',
    );

    /**
     * Checks if a given string value contains discouraged literal color names in CSS class names and reports them.
     * This function is designed to handle both literals and template literals, capturing classes that violate the rules.
     *
     * @param value - The string value to check against the defined regex for discouraged color names. This could be the raw text from a Literal node or a segment of a TemplateLiteral node in the AST (Abstract Syntax Tree).
     * @param node - The AST node associated with the value; used for reporting the ESLint error. This node object is part of ESLint's traversal of JavaScript code and provides context like location and type, which are used in reporting and potentially fixing violations.
     */
    function checkLiteralOrTemplateValue(value: string, node: any) {
      // Return early if the string to be checked is empty or only whitespace
      if (!value.trim()) {
        return;
      }
      const matches = value.match(colorRegex);
      if (matches?.[0]) {
        context.report({
          node,
          messageId: 'discouragedColorUsage',
          data: {
            className: matches[0],
          },
        });
      }
    }

    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          checkLiteralOrTemplateValue(node.value, node);
        }
      },
      TemplateLiteral(node) {
        node.quasis.forEach((quasi) => {
          checkLiteralOrTemplateValue(quasi.value.raw, quasi);
        });
      },
    };
  },
};
