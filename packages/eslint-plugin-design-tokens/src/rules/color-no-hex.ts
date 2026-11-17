import type { Rule } from 'eslint';
/**
 * Regular expression to match hex color values.
 * Added capturing group to extract the hex value.
 * Using 'u' flag for Unicode support.
 */
const hexColorRegex = /(#\p{Hex_Digit}{3,6})\b/u;

/**
 * Rule to prevent the use of hex color values.
 */
export const colorNoHex: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Prevent the use of hex color values.',
      recommended: true,
      url: 'https://github.com/MetaMask/eslint-plugin-design-tokens/blob/main/docs/rules/color-no-hex.md',
    },
    schema: [], // This rule does not take any options
  },
  create(context) {
    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          const matches = node.value.match(hexColorRegex);
          if (matches) {
            const hexValue = matches[1] as string; // Type assertion to string
            context.report({
              node,
              message: `'${hexValue}' Hex color values are not allowed. Consider using design tokens instead. For support reach out to the design system team #metamask-design-system on Slack.`,
            });
          }
        }
      },
      TemplateLiteral(node) {
        node.quasis.forEach((part) => {
          const matches = part.value.raw.match(hexColorRegex);
          if (matches) {
            const hexValue = matches[1] as string; // Type assertion to string
            context.report({
              node: part,
              message: `'${hexValue}' Hex color values are not allowed. Consider using design tokens instead. For support reach out to the design system team #metamask-design-system on Slack.`,
            });
          }
        });
      },
    };
  },
};
