import type { Rule } from 'eslint';

type TemplateElement = Extract<
  Rule.Node,
  { type: 'TemplateLiteral' }
>['quasis'][number];

type PropertyNode = Parameters<NonNullable<Rule.NodeListener['Property']>>[0];

/**
 * A CSS length value in the units this rule understands.
 *
 * `value` keeps the unit it was written in (`px` or `rem`) and its sign.
 */
type CssLength = {
  value: number;
  unit: 'px' | 'rem';
};

/**
 * Rule options.
 *
 * - `properties` overrides the spacing property names that are checked in
 *   style objects (defaults to `defaultSpacingProperties`).
 * - `allow` lists raw values that should not be flagged. Numbers match
 *   numeric literals (e.g. `marginBottom: 1`) and strings match the exact
 *   text of string values and arbitrary class values (e.g. `'1px'` matches
 *   both `marginBottom: '1px'` and `mb-[1px]`).
 */
type SpacingNoRawValuesOptions = {
  properties?: string[];
  allow?: (number | string)[];
};

/**
 * The spacing property names this rule flags raw values on by default:
 * the margin and padding families (including React Native's `*Start` /
 * `*End` keys and the web logical `*Inline*` / `*Block*` keys) and the gap
 * family.
 */
export const defaultSpacingProperties = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginHorizontal',
  'marginVertical',
  'marginStart',
  'marginEnd',
  'marginInline',
  'marginInlineStart',
  'marginInlineEnd',
  'marginBlock',
  'marginBlockStart',
  'marginBlockEnd',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingHorizontal',
  'paddingVertical',
  'paddingStart',
  'paddingEnd',
  'paddingInline',
  'paddingInlineStart',
  'paddingInlineEnd',
  'paddingBlock',
  'paddingBlockStart',
  'paddingBlockEnd',
  'gap',
  'rowGap',
  'columnGap',
] as const;

/**
 * The spacing keys that are also Box component props on both platforms.
 * Raw style values whose key is in this set get a `key={token}` example in
 * their message; keys that Box does not expose only get a utility class
 * example.
 */
const boxSpacingProps = new Set<string>([
  'gap',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginHorizontal',
  'marginVertical',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingHorizontal',
  'paddingVertical',
]);

/**
 * The Tailwind / twrnc utility prefix that expresses the same intent as each
 * spacing property. `rowGap` and `columnGap` map to `gap-y` and `gap-x`
 * because Tailwind names those utilities after the CSS properties
 * `row-gap` and `column-gap`.
 */
const utilityPrefixByProperty: Record<string, string> = {
  margin: 'm',
  marginTop: 'mt',
  marginRight: 'mr',
  marginBottom: 'mb',
  marginLeft: 'ml',
  marginHorizontal: 'mx',
  marginVertical: 'my',
  marginStart: 'ms',
  marginEnd: 'me',
  marginInline: 'mx',
  marginInlineStart: 'ms',
  marginInlineEnd: 'me',
  marginBlock: 'my',
  marginBlockStart: 'mt',
  marginBlockEnd: 'mb',
  padding: 'p',
  paddingTop: 'pt',
  paddingRight: 'pr',
  paddingBottom: 'pb',
  paddingLeft: 'pl',
  paddingHorizontal: 'px',
  paddingVertical: 'py',
  paddingStart: 'ps',
  paddingEnd: 'pe',
  paddingInline: 'px',
  paddingInlineStart: 'ps',
  paddingInlineEnd: 'pe',
  paddingBlock: 'py',
  paddingBlockStart: 'pt',
  paddingBlockEnd: 'pb',
  gap: 'gap',
  rowGap: 'gap-y',
  columnGap: 'gap-x',
};

/**
 * One spacing unit in px. This mirrors the Tailwind default spacing scale
 * (`--spacing: 0.25rem`), which neither the MetaMask Tailwind preset nor the
 * twrnc preset overrides, and the `BoxSpacing` scale (0-12 = 0px-48px) in
 * `@metamask/design-system-shared`. The spacing scale is not exported from
 * `@metamask/design-tokens` yet, so it is encoded here; see the rule
 * documentation.
 */
const BASE_SPACING_PX = 4;

/**
 * One spacing unit in rem, the unit the Tailwind v4 spacing scale is
 * expressed in. Rem values map to tokens without assuming a root font size.
 */
const BASE_SPACING_REM = 0.25;

/**
 * The highest spacing token the Box component accepts (`BoxSpacing` is
 * 0-12). Values that would map to a larger token stay flagged, but they do
 * not get a token suggestion because the result would be off the Box scale.
 */
const MAX_BOX_SPACING = 12;

/**
 * Matches absolute CSS length strings in px or rem with an optional minus
 * sign, e.g. `12px`, `-0.5rem`, `.5px`. Relative units (`em`, `%`, `vh`,
 * ...) and unit-less strings are deliberately not matched.
 */
const cssLengthRegex = /^(-?(?:\d+(?:\.\d+)?|\.\d+)(?:px|rem))$/u;

/**
 * Matches Tailwind / twrnc arbitrary margin, padding, and gap classes with a
 * px or rem value, e.g. `mb-[12px]`, `-mt-[4px]`, `hover:p-[3px]`,
 * `gap-x-[0.75rem]`.
 *
 * The lookbehind requires the class to start at the beginning of the string
 * or after a space, colon (variant prefix), exclamation mark (important
 * modifier), quote, backtick, or closing brace (template literal segments
 * include the surrounding backticks and braces in their text), so classes
 * such as `w-[100px]` or `text-[13px]` are never matched. The unit is
 * matched case-sensitively (`px` / `rem`) because Tailwind class names are
 * case-sensitive and uppercase units are not idiomatic.
 */
const arbitrarySpacingClassRegex =
  /(?<=^|[\s:!'"`}])(-?(?:mx|my|mt|mr|mb|ml|ms|me|m|px|py|pt|pr|pb|pl|ps|pe|p|gap-x|gap-y|gap))-\[((?:\d+(?:\.\d+)?|\.\d+))(px|rem)\]/gu;

/**
 * Node types that wrap an expression in TypeScript syntax and must be
 * unwrapped before the underlying literal can be inspected (`as`,
 * `satisfies`, and legacy type assertions).
 */
const tsWrapperTypes = new Set([
  'TSAsExpression',
  'TSSatisfiesExpression',
  'TSTypeAssertion',
]);

/**
 * Rule to disallow raw spacing values in style objects and Tailwind
 * arbitrary spacing classes.
 */
export const spacingNoRawValues: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow raw spacing values in style objects and Tailwind arbitrary spacing classes; use spacing tokens instead.',
      recommended: true,
      url: 'https://github.com/MetaMask/metamask-design-system/blob/main/packages/eslint-plugin-design-tokens/docs/rules/spacing-no-raw-values.md',
    },
    hasSuggestions: true,
    schema: [
      {
        type: 'object',
        properties: {
          properties: {
            type: 'array',
            items: {
              type: 'string',
              minLength: 1,
            },
            default: [...defaultSpacingProperties],
          },
          allow: {
            type: 'array',
            items: {
              anyOf: [{ type: 'number' }, { type: 'string', minLength: 1 }],
            },
            default: [0],
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      spacingTokenOnProperty:
        "Hard-coded spacing value '{{value}}' on '{{key}}' is equivalent to spacing token {{token}} (1 unit = 4px). Prefer {{guidance}} over raw values.",
      rawSpacingOnProperty:
        "Hard-coded spacing value '{{value}}' on '{{key}}'. Use a spacing token instead (1 unit = 4px, for example marginBottom={3} or mb-3).",
      spacingTokenInClass:
        "Hard-coded spacing value '{{value}}' in class '{{className}}' is equivalent to spacing token {{token}} (1 unit = 4px). Use '{{replacement}}' instead of the arbitrary value.",
      rawSpacingInClass:
        "Hard-coded spacing value '{{value}}' in class '{{className}}'. Use a spacing token instead (1 unit = 4px, for example p-3 instead of p-[12px]).",
      replaceArbitraryClass: "Replace '{{className}}' with '{{replacement}}'.",
    },
  },
  create(context) {
    const options: SpacingNoRawValuesOptions = context.options[0] ?? {};

    // Whitespace-only property names can never match, so a list that
    // contains only those disables the style object check entirely.
    const configuredProperties = options.properties ?? [
      ...defaultSpacingProperties,
    ];
    const spacingProperties = new Set(
      configuredProperties.filter((property) => property.trim().length > 0),
    );

    const allowedValues = options.allow ?? [0];
    const allowedNumbers = new Set(
      allowedValues.filter(
        (value): value is number => typeof value === 'number',
      ),
    );
    const allowedStrings = new Set(
      allowedValues.filter(
        (value): value is string => typeof value === 'string',
      ),
    );

    /**
     * Formats a spacing token for messages, e.g. `3`, `0.5`, or `-1`.
     *
     * @param token - The token as a number.
     * @returns The token formatted without a trailing `-0`.
     */
    function formatToken(token: number): string {
      return String(token);
    }

    /**
     * Builds the Tailwind / twrnc utility class for a spacing token, using
     * the leading-dash form for negative tokens (e.g. `-mt-1`).
     *
     * @param prefix - The utility prefix, e.g. `mt` or `gap-y`.
     * @param token - The spacing token.
     * @returns The utility class, e.g. `mt-1` or `-mt-1`.
     */
    function getUtilityClass(prefix: string, token: number): string {
      if (token < 0) {
        return `-${prefix}-${formatToken(-token)}`;
      }
      return `${prefix}-${formatToken(token)}`;
    }

    /**
     * Builds the guidance that a message shows for a mapped spacing token,
     * preferring the Box spacing prop when the key is one and the token is
     * in its range (Box does not accept negative tokens).
     *
     * @param key - The spacing property name.
     * @param token - The spacing token the raw value is equivalent to.
     * @returns The guidance sentence fragment, e.g. "the Box spacing prop
     * marginBottom={3} or the utility class mb-3".
     */
    function getPropertyGuidance(key: string, token: number): string {
      const prefix = utilityPrefixByProperty[key];
      if (prefix === undefined) {
        return 'a spacing utility class (for example mb-3)';
      }
      const utilityClass = getUtilityClass(prefix, token);
      if (boxSpacingProps.has(key) && token >= 0) {
        return `the Box spacing prop ${key}={${formatToken(token)}} or the utility class ${utilityClass}`;
      }
      return `the utility class ${utilityClass}`;
    }

    /**
     * Parses a px or rem CSS length string, e.g. `12px` or `-0.75rem`.
     *
     * @param text - The string to parse.
     * @returns The signed value with its unit, or `undefined` when the text
     * is not a px or rem length.
     */
    function parseCssLength(text: string): CssLength | undefined {
      const match = text.match(cssLengthRegex);
      if (!match?.[1]) {
        return undefined;
      }
      const lengthText = match[1];
      const unit: CssLength['unit'] = lengthText.endsWith('rem') ? 'rem' : 'px';
      const magnitudeText = lengthText.slice(0, unit === 'rem' ? -3 : -2);
      return {
        value: Number.parseFloat(magnitudeText),
        unit,
      };
    }

    /**
     * Converts a px or rem length to its spacing token (px / 4, rem / 0.25).
     * Both conversions are exact because they only divide by powers of two.
     *
     * @param length - The parsed length.
     * @returns The spacing token the length is equivalent to.
     */
    function getSpacingToken(length: CssLength): number {
      if (length.unit === 'px') {
        return length.value / BASE_SPACING_PX;
      }
      return length.value / BASE_SPACING_REM;
    }

    /**
     * Whether a spacing token is one the design system expresses: a whole
     * or half step (e.g. `3`, `1.5`) within the Box range of 0-12. Only
     * mapped values get a token in their message and, for arbitrary
     * classes, a suggestion.
     *
     * @param token - The spacing token.
     * @returns Whether the token is a whole or half step within 0-12.
     */
    function isMappedToken(token: number): boolean {
      return Number.isInteger(token * 2) && Math.abs(token) <= MAX_BOX_SPACING;
    }

    /**
     * Unwraps TypeScript wrapper expressions (`as`, `satisfies`, and legacy
     * type assertions) so the underlying literal can be inspected.
     *
     * @param node - The property value node.
     * @returns The node with all TypeScript wrappers removed.
     */
    function unwrapTsExpression(node: Rule.Node): Rule.Node {
      let current = node;
      while (tsWrapperTypes.has(current.type)) {
        current = (current as Rule.Node & { expression: Rule.Node }).expression;
      }
      return current;
    }

    /**
     * Reads the numeric value of a literal, including unary `+` / `-`
     * expressions. `-0` is read as `0`.
     *
     * @param node - The node to read.
     * @returns The numeric value, or `undefined` when the node is not a
     * numeric literal.
     */
    function readNumericLiteral(node: Rule.Node): number | undefined {
      if (node.type === 'Literal' && typeof node.value === 'number') {
        return node.value;
      }
      if (
        node.type === 'UnaryExpression' &&
        (node.operator === '-' || node.operator === '+') &&
        node.argument.type === 'Literal' &&
        typeof node.argument.value === 'number'
      ) {
        return node.operator === '-'
          ? -node.argument.value
          : node.argument.value;
      }
      return undefined;
    }

    /**
     * Resolves the property name of an object literal property, supporting
     * identifier keys and string literal keys (computed or not).
     *
     * @param node - The property node.
     * @returns The property name, or `undefined` when it is dynamic.
     */
    function getPropertyName(node: PropertyNode): string | undefined {
      if (!node.computed && node.key.type === 'Identifier') {
        return node.key.name;
      }
      if (node.key.type === 'Literal' && typeof node.key.value === 'string') {
        return node.key.value;
      }
      return undefined;
    }

    /**
     * Reports a raw spacing value found on a style object property.
     *
     * @param node - The literal node holding the value.
     * @param key - The spacing property name.
     * @param value - The raw value as written (source text for numbers,
     * string content for strings).
     * @param length - The parsed px or rem length.
     */
    function reportStyleValue(
      node: Rule.Node,
      key: string,
      value: string,
      length: CssLength,
    ): void {
      const token = getSpacingToken(length);
      if (isMappedToken(token)) {
        context.report({
          node,
          messageId: 'spacingTokenOnProperty',
          data: {
            key,
            value,
            token: formatToken(token),
            guidance: getPropertyGuidance(key, token),
          },
        });
        return;
      }
      context.report({
        node,
        messageId: 'rawSpacingOnProperty',
        data: { key, value },
      });
    }

    /**
     * Reports every raw spacing value on a style object property.
     *
     * @param node - The property node.
     */
    function checkProperty(node: PropertyNode): void {
      if (node.parent?.type !== 'ObjectExpression') {
        return;
      }
      const key = getPropertyName(node);
      if (!key || !spacingProperties.has(key)) {
        return;
      }

      const target = unwrapTsExpression(node.value as Rule.Node);
      const numericValue = readNumericLiteral(target);
      if (numericValue !== undefined) {
        if (allowedNumbers.has(numericValue)) {
          return;
        }
        reportStyleValue(target, key, context.sourceCode.getText(target), {
          value: numericValue,
          unit: 'px',
        });
        return;
      }

      if (target.type === 'Literal' && typeof target.value === 'string') {
        const length = parseCssLength(target.value);
        if (!length) {
          return;
        }
        if (allowedStrings.has(target.value)) {
          return;
        }
        reportStyleValue(target, key, target.value, length);
      }
    }

    /**
     * Reports every arbitrary margin, padding, or gap class with a px or
     * rem value found in a string literal or template literal segment.
     *
     * @param node - The literal or template element node.
     */
    function checkStringForClasses(node: Rule.Node | TemplateElement): void {
      const text = context.sourceCode.getText(node);
      for (const match of text.matchAll(arbitrarySpacingClassRegex)) {
        // The lookbehind keeps `match.index` at the first character of the
        // class, and the regex structure guarantees that every capture
        // group matched.
        const [classText, classPrefix, magnitudeText, unitText] =
          match.slice() as [string, string, string, string];
        const rawValue = `${magnitudeText}${unitText}`;
        if (allowedStrings.has(rawValue)) {
          continue;
        }

        // The class-level minus sign (as in `-mt-[4px]`) is part of the
        // prefix; apply it to the value before mapping it to a token.
        const isNegative = classPrefix.startsWith('-');
        const barePrefix = isNegative ? classPrefix.slice(1) : classPrefix;
        const magnitude = Number.parseFloat(magnitudeText);
        const length: CssLength = {
          value: isNegative ? -magnitude : magnitude,
          unit: unitText as CssLength['unit'],
        };

        const classStart = (node.range as [number, number])[0] + match.index;
        const classEnd = classStart + classText.length;
        const startLoc = context.sourceCode.getLocFromIndex(classStart);
        const endLoc = context.sourceCode.getLocFromIndex(classEnd);
        const token = getSpacingToken(length);
        if (!isMappedToken(token)) {
          context.report({
            node,
            loc: { start: startLoc, end: endLoc },
            messageId: 'rawSpacingInClass',
            data: { value: rawValue, className: classText },
          });
          continue;
        }

        const replacement = getUtilityClass(barePrefix, token);
        context.report({
          node,
          loc: { start: startLoc, end: endLoc },
          messageId: 'spacingTokenInClass',
          data: {
            value: rawValue,
            className: classText,
            token: formatToken(token),
            replacement,
          },
          suggest: [
            {
              messageId: 'replaceArbitraryClass',
              data: { className: classText, replacement },
              fix: (fixer) =>
                fixer.replaceTextRange([classStart, classEnd], replacement),
            },
          ],
        });
      }
    }

    return {
      Property: checkProperty,
      Literal(node: Rule.Node) {
        if (node.type === 'Literal' && typeof node.value === 'string') {
          checkStringForClasses(node);
        }
      },
      TemplateLiteral(node) {
        node.quasis.forEach((quasi) => {
          checkStringForClasses(quasi);
        });
      },
    };
  },
};
