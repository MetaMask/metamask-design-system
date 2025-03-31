/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import * as designTokens from '../../figma/tokens.json';
import { fontWeights } from './fontWeights';

describe('Font Size', () => {
  it('js tokens for font weight bold matches figma tokens', () => {
    expect(fontWeights.bold).toBe(designTokens.global.fontWeights.bold.value);
  });

  it('js tokens for font weight medium matches figma tokens', () => {
    expect(fontWeights.medium).toBe(
      designTokens.global.fontWeights.medium.value,
    );
  });

  it('js tokens for font weight regular matches figma tokens', () => {
    expect(fontWeights.regular).toBe(
      designTokens.global.fontWeights.regular.value,
    );
  });
});
