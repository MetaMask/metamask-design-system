import defaultTheme from 'tailwindcss/defaultTheme';

import {
  getDesignTokenVariables,
  collectCssVariables,
} from '../scripts/testUtils';

import { borderRadius } from './border-radius';

// `none` and `full` are supplied by Tailwind rather than aliased here, so their
// variables are expected to go unused by this preset.
const NOT_ALIASED = ['--radius-none', '--radius-full'];

const toPx = (value: string) =>
  value.endsWith('rem') ? parseFloat(value) * 16 : parseFloat(value);

describe('Border radius', () => {
  const usedVariables = collectCssVariables(borderRadius);

  it('should use only radius CSS variables that exist in @metamask/design-tokens', async () => {
    const designTokens = await getDesignTokenVariables(['--radius']);

    const missingVariables = usedVariables.filter(
      (varName) => !designTokens.has(varName),
    );

    expect(missingVariables).toHaveLength(0);
  });

  it('should not have unused radius CSS variables in @metamask/design-tokens', async () => {
    const designTokens = await getDesignTokenVariables(['--radius']);
    const usedSet = new Set([...usedVariables, ...NOT_ALIASED]);

    const unusedVariables = Array.from(designTokens).filter(
      (varName) => !usedSet.has(varName),
    );

    expect(unusedVariables).toHaveLength(0);
  });

  it('aliases the numeric steps only', () => {
    expect(Object.keys(borderRadius)).toStrictEqual([
      '2',
      '4',
      '6',
      '8',
      '12',
      '16',
      '24',
    ]);
  });

  it('introduces no value Tailwind does not already ship', () => {
    const tailwindValues = Object.values(defaultTheme.borderRadius ?? {}).map(
      (value) => toPx(value as string),
    );

    Object.keys(borderRadius).forEach((token) => {
      expect(tailwindValues).toContain(Number(token));
    });
  });
});
