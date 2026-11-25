import * as typescriptParser from '@typescript-eslint/parser';
import { RuleTester } from 'eslint';

import { colorNoHex } from '../../src/rules/color-no-hex';

const ruleTester = new RuleTester({
  languageOptions: {
    parser: typescriptParser,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
});

ruleTester.run('color-no-hex', colorNoHex, {
  valid: [
    `const color = "blue";`,
    `const backgroundColor = "rgba(255, 255, 255, 0.5)";`,
    `const borderColor = 'var(--border-color)';`,
    // Template literals without hex colors
    `const boxShadow = \`5px 5px 5px var(--shadow-color)\`;`,
  ],
  invalid: [
    {
      code: `const color = "#abc";`,
      errors: [
        {
          message: `'#abc' Hex color values are not allowed. Consider using design tokens instead. For support reach out to the design system team #metamask-design-system on Slack.`,
        },
      ],
    },
    {
      code: `const backgroundColor = "#123456";`,
      errors: [
        {
          message: `'#123456' Hex color values are not allowed. Consider using design tokens instead. For support reach out to the design system team #metamask-design-system on Slack.`,
        },
      ],
    },
    // Testing template literals
    {
      code: `const borderColor = \`#abcdef\`;`,
      errors: [
        {
          message: `'#abcdef' Hex color values are not allowed. Consider using design tokens instead. For support reach out to the design system team #metamask-design-system on Slack.`,
        },
      ],
    },
    {
      code: `const boxShadow = \`5px 5px 5px #888\`;`,
      errors: [
        {
          message: `'#888' Hex color values are not allowed. Consider using design tokens instead. For support reach out to the design system team #metamask-design-system on Slack.`,
        },
      ],
    },
    // 8-digit hex values with an alpha channel, as used by the current design tokens
    {
      code: `const overlayColor = "#0a0d135c";`,
      errors: [
        {
          message: `'#0a0d135c' Hex color values are not allowed. Consider using design tokens instead. For support reach out to the design system team #metamask-design-system on Slack.`,
        },
      ],
    },
    {
      code: `const primaryMuted = "#4459ff1a";`,
      errors: [
        {
          message: `'#4459ff1a' Hex color values are not allowed. Consider using design tokens instead. For support reach out to the design system team #metamask-design-system on Slack.`,
        },
      ],
    },
    {
      code: `const borderColor = \`#ff758433\`;`,
      errors: [
        {
          message: `'#ff758433' Hex color values are not allowed. Consider using design tokens instead. For support reach out to the design system team #metamask-design-system on Slack.`,
        },
      ],
    },
  ],
});
