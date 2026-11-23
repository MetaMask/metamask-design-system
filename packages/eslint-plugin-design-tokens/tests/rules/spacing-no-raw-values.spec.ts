import * as typescriptParser from '@typescript-eslint/parser';
import { RuleTester } from 'eslint';
import { readFileSync } from 'fs';
import * as path from 'path';

import {
  defaultSpacingProperties,
  spacingNoRawValues,
} from '../../src/rules/spacing-no-raw-values';

const ruleTester = new RuleTester({
  languageOptions: {
    parser: typescriptParser,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
});

const jsxRuleTester = new RuleTester({
  languageOptions: {
    parser: typescriptParser,
    ecmaVersion: 2020,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

ruleTester.run('spacing-no-raw-values', spacingNoRawValues, {
  valid: [
    // `0` is allowed by default
    `const styles = { marginBottom: 0 };`,
    `const styles = { padding: 0, gap: 0 };`,
    `const styles = { marginTop: -0 };`,
    // Non-literal values are not flagged yet (known gap in v1)
    `const styles = { marginBottom: someSpacing };`,
    `const styles = { marginTop: isCompact ? 12 : 8 };`,
    `const styles = { padding: baseSpacing + 4 };`,
    `const styles = { gap: getGap() };`,
    {
      code: `const styles = { marginBottom: \`\${size}px\` };`,
    },
    // Keys outside the margin/padding/gap families are not flagged, so
    // props like `hitSlop` keep their raw values
    `const hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };`,
    `const styles = { width: 12, height: 100, borderWidth: 2, top: 4, left: 8 };`,
    `const styles = { fontSize: 16, lineHeight: 24, borderRadius: 8 };`,
    // String values without a px or rem unit are not flagged
    `const styles = { marginBottom: '1em', gap: '50%', padding: 'auto' };`,
    `const styles = { marginBottom: '12' };`,
    // Kebab-case keys are not flagged yet (known gap in v1)
    `const styles = { 'margin-bottom': '12px' };`,
    // Spacing utility classes that already use tokens are not flagged
    `const className = 'mb-3 p-0.5 gap-2 -mt-1 px-4 py-3';`,
    // Arbitrary classes on non-spacing utilities are not flagged
    `const className = 'w-[100px] h-[50px] top-[10px] text-[13px] rounded-[4px] border-[1px] size-[40px] left-[0.5rem] translate-x-[4px]';`,
    // Arbitrary spacing classes with units other than px/rem are not flagged
    `const className = 'p-[1em] mb-[1.5vh] gap-[50%]';`,
    // Without a boundary the class pattern is not matched
    `const className = 'foomb-[12px]';`,
    // Non-string literals are not scanned for classes
    `const count = 42;`,
    // Dynamic keys cannot be resolved to a spacing property
    `const styles = { [dynamicKey]: 12 };`,
    // Destructuring patterns are not style objects
    `const { marginBottom = 12 } = props;`,
    // The `properties` option replaces the default property list
    {
      code: `const styles = { marginBottom: 12 };`,
      options: [{ properties: ['marginTop'] }],
    },
    // A `properties` list with no usable names disables the style object
    // check entirely
    {
      code: `const styles = { marginBottom: 12 };`,
      options: [{ properties: [' '] }],
    },
    // The `allow` option exempts raw values by number ...
    {
      code: `const styles = { marginBottom: 12 };`,
      options: [{ allow: [12] }],
    },
    // ... and by exact string for string values and arbitrary class values
    {
      code: `const styles = { marginBottom: '12px' };`,
      options: [{ allow: ['12px'] }],
    },
    {
      code: `const className = 'mb-[12px]';`,
      options: [{ allow: ['12px'] }],
    },
    // Numbers in `allow` do not exempt arbitrary class strings
    {
      code: `const className = 'mb-[1px]';`,
      options: [{ allow: ['1px'] }],
    },
  ],
  invalid: [
    // React Native style object with a raw numeric value
    {
      code: `const styles = StyleSheet.create({ container: { marginBottom: 12 } });`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '12',
            key: 'marginBottom',
            token: '3',
            guidance:
              'the Box spacing prop marginBottom={3} or the utility class mb-3',
          },
        },
      ],
    },
    // Inline style object
    {
      code: `const style = { paddingTop: 4 };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '4',
            key: 'paddingTop',
            token: '1',
            guidance:
              'the Box spacing prop paddingTop={1} or the utility class pt-1',
          },
        },
      ],
    },
    // Gap family
    {
      code: `const style = { gap: 8 };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '8',
            key: 'gap',
            token: '2',
            guidance: 'the Box spacing prop gap={2} or the utility class gap-2',
          },
        },
      ],
    },
    // `rowGap` and `columnGap` are not Box props, so only a class example
    // is offered; they map to the `gap-y` and `gap-x` utilities
    {
      code: `const style = { rowGap: 6, columnGap: 6 };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '6',
            key: 'rowGap',
            token: '1.5',
            guidance: 'the utility class gap-y-1.5',
          },
        },
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '6',
            key: 'columnGap',
            token: '1.5',
            guidance: 'the utility class gap-x-1.5',
          },
        },
      ],
    },
    // Bare `margin` and `padding`
    {
      code: `const style = { margin: 16, padding: 16 };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '16',
            key: 'margin',
            token: '4',
            guidance:
              'the Box spacing prop margin={4} or the utility class m-4',
          },
        },
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '16',
            key: 'padding',
            token: '4',
            guidance:
              'the Box spacing prop padding={4} or the utility class p-4',
          },
        },
      ],
    },
    // React Native `*Start` / `*End` keys are not Box props
    {
      code: `const style = { marginStart: 8, paddingEnd: 4 };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '8',
            key: 'marginStart',
            token: '2',
            guidance: 'the utility class ms-2',
          },
        },
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '4',
            key: 'paddingEnd',
            token: '1',
            guidance: 'the utility class pe-1',
          },
        },
      ],
    },
    // Web logical properties are not Box props either
    {
      code: `const style = { marginInline: 8, marginInlineStart: 4, marginBlockEnd: 10 };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '8',
            key: 'marginInline',
            token: '2',
            guidance: 'the utility class mx-2',
          },
        },
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '4',
            key: 'marginInlineStart',
            token: '1',
            guidance: 'the utility class ms-1',
          },
        },
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '10',
            key: 'marginBlockEnd',
            token: '2.5',
            guidance: 'the utility class mb-2.5',
          },
        },
      ],
    },
    // Half-step values map to half-step tokens
    {
      code: `const style = { marginTop: 2, marginBottom: 6 };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '2',
            key: 'marginTop',
            token: '0.5',
            guidance:
              'the Box spacing prop marginTop={0.5} or the utility class mt-0.5',
          },
        },
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '6',
            key: 'marginBottom',
            token: '1.5',
            guidance:
              'the Box spacing prop marginBottom={1.5} or the utility class mb-1.5',
          },
        },
      ],
    },
    // Values that do not map to a token get the raw message without a token
    {
      code: `const style = { marginBottom: 3 };`,
      errors: [
        {
          messageId: 'rawSpacingOnProperty',
          data: { value: '3', key: 'marginBottom' },
        },
      ],
    },
    {
      code: `const style = { marginBottom: 0.5 };`,
      errors: [
        {
          messageId: 'rawSpacingOnProperty',
          data: { value: '0.5', key: 'marginBottom' },
        },
      ],
    },
    // Values beyond the Box scale of 0-12 also stay without a token
    {
      code: `const style = { marginBottom: 52 };`,
      errors: [
        {
          messageId: 'rawSpacingOnProperty',
          data: { value: '52', key: 'marginBottom' },
        },
      ],
    },
    // Negative values map to negative tokens; Box does not accept those,
    // so only the utility class example is offered
    {
      code: `const style = { marginTop: -8 };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '-8',
            key: 'marginTop',
            token: '-2',
            guidance: 'the utility class -mt-2',
          },
        },
      ],
    },
    {
      code: `const style = { marginTop: +8 };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '+8',
            key: 'marginTop',
            token: '2',
            guidance:
              'the Box spacing prop marginTop={2} or the utility class mt-2',
          },
        },
      ],
    },
    // String px and rem values in style objects
    {
      code: `const style = { marginBottom: '12px' };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '12px',
            key: 'marginBottom',
            token: '3',
            guidance:
              'the Box spacing prop marginBottom={3} or the utility class mb-3',
          },
        },
      ],
    },
    {
      code: `const style = { marginBottom: '0.75rem' };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '0.75rem',
            key: 'marginBottom',
            token: '3',
            guidance:
              'the Box spacing prop marginBottom={3} or the utility class mb-3',
          },
        },
      ],
    },
    {
      code: `const style = { marginTop: '-4px' };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '-4px',
            key: 'marginTop',
            token: '-1',
            guidance: 'the utility class -mt-1',
          },
        },
      ],
    },
    {
      code: `const style = { marginBottom: '3px' };`,
      errors: [
        {
          messageId: 'rawSpacingOnProperty',
          data: { value: '3px', key: 'marginBottom' },
        },
      ],
    },
    // String literal keys are checked too
    {
      code: `const style = { 'marginBottom': 12 };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '12',
            key: 'marginBottom',
            token: '3',
            guidance:
              'the Box spacing prop marginBottom={3} or the utility class mb-3',
          },
        },
      ],
    },
    // TypeScript wrappers are unwrapped before the value is inspected
    {
      code: `const style = { marginBottom: 12 as const };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '12',
            key: 'marginBottom',
            token: '3',
            guidance:
              'the Box spacing prop marginBottom={3} or the utility class mb-3',
          },
        },
      ],
    },
    {
      code: `const style = { marginBottom: 12 satisfies number };`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '12',
            key: 'marginBottom',
            token: '3',
            guidance:
              'the Box spacing prop marginBottom={3} or the utility class mb-3',
          },
        },
      ],
    },
    // Arbitrary spacing classes in class strings
    {
      code: `const className = 'mb-[12px]';`,
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '12px',
            className: 'mb-[12px]',
            token: '3',
            replacement: 'mb-3',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const className = 'mb-3';`,
            },
          ],
        },
      ],
    },
    // Half-step tokens keep their fraction in the replacement
    {
      code: `const className = 'p-[2px]';`,
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '2px',
            className: 'p-[2px]',
            token: '0.5',
            replacement: 'p-0.5',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const className = 'p-0.5';`,
            },
          ],
        },
      ],
    },
    // Arbitrary classes that do not map to a token stay without a
    // suggestion
    {
      code: `const className = 'p-[3px]';`,
      errors: [
        {
          messageId: 'rawSpacingInClass',
          data: { value: '3px', className: 'p-[3px]' },
        },
      ],
    },
    // Negative arbitrary classes map to negative tokens
    {
      code: `const className = '-mt-[4px]';`,
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '4px',
            className: '-mt-[4px]',
            token: '-1',
            replacement: '-mt-1',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const className = '-mt-1';`,
            },
          ],
        },
      ],
    },
    // Rem values map without assuming a root font size
    {
      code: `const className = 'mb-[0.75rem]';`,
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '0.75rem',
            className: 'mb-[0.75rem]',
            token: '3',
            replacement: 'mb-3',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const className = 'mb-3';`,
            },
          ],
        },
      ],
    },
    {
      code: `const className = 'mb-[0.1rem]';`,
      errors: [
        {
          messageId: 'rawSpacingInClass',
          data: { value: '0.1rem', className: 'mb-[0.1rem]' },
        },
      ],
    },
    // Variant prefixes and the important modifier keep their prefix in the
    // fixed output
    {
      code: `const className = 'hover:p-[12px]';`,
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '12px',
            className: 'p-[12px]',
            token: '3',
            replacement: 'p-3',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const className = 'hover:p-3';`,
            },
          ],
        },
      ],
    },
    {
      code: `const className = '!p-[12px]';`,
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '12px',
            className: 'p-[12px]',
            token: '3',
            replacement: 'p-3',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const className = '!p-3';`,
            },
          ],
        },
      ],
    },
    // `gap-x` and `gap-y` arbitrary classes
    {
      code: `const className = 'gap-x-[12px] gap-y-[6px]';`,
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '12px',
            className: 'gap-x-[12px]',
            token: '3',
            replacement: 'gap-x-3',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const className = 'gap-x-3 gap-y-[6px]';`,
            },
          ],
        },
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '6px',
            className: 'gap-y-[6px]',
            token: '1.5',
            replacement: 'gap-y-1.5',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const className = 'gap-x-[12px] gap-y-1.5';`,
            },
          ],
        },
      ],
    },
    // Multiple arbitrary classes in one string are reported individually
    {
      code: `const className = twMerge('mx-[10px] px-[3px]');`,
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '10px',
            className: 'mx-[10px]',
            token: '2.5',
            replacement: 'mx-2.5',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const className = twMerge('mx-2.5 px-[3px]');`,
            },
          ],
        },
        {
          messageId: 'rawSpacingInClass',
          data: { value: '3px', className: 'px-[3px]' },
        },
      ],
    },
    // Arbitrary classes in template literals
    {
      code: 'const style = tw`mb-[12px] py-[2px]`;',
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '12px',
            className: 'mb-[12px]',
            token: '3',
            replacement: 'mb-3',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: 'const style = tw`mb-3 py-[2px]`;',
            },
          ],
        },
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '2px',
            className: 'py-[2px]',
            token: '0.5',
            replacement: 'py-0.5',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: 'const style = tw`mb-[12px] py-0.5`;',
            },
          ],
        },
      ],
    },
    // Arbitrary classes as object values
    {
      code: `const classes = { primary: 'p-[12px]' };`,
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '12px',
            className: 'p-[12px]',
            token: '3',
            replacement: 'p-3',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const classes = { primary: 'p-3' };`,
            },
          ],
        },
      ],
    },
  ],
});

jsxRuleTester.run('spacing-no-raw-values (jsx)', spacingNoRawValues, {
  valid: [
    // Box spacing props are tokens (0-12 units), not raw values, and JSX
    // attributes are not object properties
    `const node = <Box marginRight={8} />;`,
    `const node = <Box padding={4} />;`,
    // Raw values on non-style JSX attributes are not flagged
    `const node = <input maxLength={12} />;`,
  ],
  invalid: [
    // Inline style objects inside JSX attributes are object literals
    {
      code: `const node = <View style={{ paddingTop: 4 }} />;`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '4',
            key: 'paddingTop',
            token: '1',
            guidance:
              'the Box spacing prop paddingTop={1} or the utility class pt-1',
          },
        },
      ],
    },
    {
      code: `const node = <div style={{ marginBottom: '12px' }} />;`,
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '12px',
            key: 'marginBottom',
            token: '3',
            guidance:
              'the Box spacing prop marginBottom={3} or the utility class mb-3',
          },
        },
      ],
    },
    // Arbitrary classes inside JSX className strings
    {
      code: `const node = <div className="p-[12px]" />;`,
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '12px',
            className: 'p-[12px]',
            token: '3',
            replacement: 'p-3',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const node = <div className="p-3" />;`,
            },
          ],
        },
      ],
    },
  ],
});

ruleTester.run('spacing-no-raw-values (options)', spacingNoRawValues, {
  valid: [
    // Custom `properties` lists are honored
    {
      code: `const styles = { marginBottom: 12, paddingTop: 4 };`,
      options: [{ properties: ['gapSize'] }],
    },
  ],
  invalid: [
    // Custom property names get the generic class guidance because they
    // are neither Box props nor known utilities
    {
      code: `const styles = { gapSize: 12 };`,
      options: [{ properties: ['gapSize'] }],
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '12',
            key: 'gapSize',
            token: '3',
            guidance: 'a spacing utility class (for example mb-3)',
          },
        },
      ],
    },
    // Providing `allow` replaces the default entirely, so `0` must be
    // listed again to stay allowed
    {
      code: `const styles = { marginBottom: 0 };`,
      options: [{ allow: [1] }],
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '0',
            key: 'marginBottom',
            token: '0',
            guidance:
              'the Box spacing prop marginBottom={0} or the utility class mb-0',
          },
        },
      ],
    },
    {
      code: `const styles = { marginBottom: 1, marginTop: 12 };`,
      options: [{ allow: [0, 1, '12px'] }],
      errors: [
        {
          messageId: 'spacingTokenOnProperty',
          data: {
            value: '12',
            key: 'marginTop',
            token: '3',
            guidance:
              'the Box spacing prop marginTop={3} or the utility class mt-3',
          },
        },
      ],
    },
    // Numbers in `allow` do not exempt arbitrary class strings
    {
      code: `const className = 'mb-[12px]';`,
      options: [{ allow: [12] }],
      errors: [
        {
          messageId: 'spacingTokenInClass',
          data: {
            value: '12px',
            className: 'mb-[12px]',
            token: '3',
            replacement: 'mb-3',
          },
          suggestions: [
            {
              messageId: 'replaceArbitraryClass',
              output: `const className = 'mb-3';`,
            },
          ],
        },
      ],
    },
  ],
});

describe('defaultSpacingProperties', () => {
  /**
   * Extracts the spacing prop names from the shared Box type, which is the
   * source of truth for the Box component API on both platforms.
   *
   * The file is read at test time rather than imported from
   * `@metamask/design-system-shared` so that the plugin keeps no dependency
   * on that package at runtime.
   *
   * @returns The spacing prop names declared on the shared Box type.
   */
  const getBoxSpacingProps = (): string[] => {
    const boxTypesPath = path.resolve(
      __dirname,
      '../../../design-system-shared/src/types/Box/Box.types.ts',
    );
    const boxTypes = readFileSync(boxTypesPath, 'utf8');

    return [...boxTypes.matchAll(/^\s*(\w+)\??: BoxSpacing;/gmu)].map(
      (match) => match[1] ?? '',
    );
  };

  it('covers every spacing prop of the shared Box type', () => {
    const boxSpacingProps = getBoxSpacingProps();

    expect(boxSpacingProps.length).toBeGreaterThan(0);
    for (const boxSpacingProp of boxSpacingProps) {
      expect(defaultSpacingProperties).toContain(boxSpacingProp);
    }
  });

  it('includes the gap family and the logical margin and padding keys', () => {
    expect(defaultSpacingProperties).toEqual(
      expect.arrayContaining([
        'gap',
        'rowGap',
        'columnGap',
        'marginStart',
        'marginEnd',
        'paddingStart',
        'paddingEnd',
        'marginInline',
        'marginInlineStart',
        'marginInlineEnd',
        'marginBlock',
        'marginBlockStart',
        'marginBlockEnd',
        'paddingInline',
        'paddingInlineStart',
        'paddingInlineEnd',
        'paddingBlock',
        'paddingBlockStart',
        'paddingBlockEnd',
      ]),
    );
  });
});
