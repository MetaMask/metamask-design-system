/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import * as designTokens from '../../figma/tokens.json';
import { fontWeights } from './fontWeights';

describe('Font Size', () => {
  it('centra-no1-0 should equal Medium / 500', () => {
    expect(designTokens.global.fontWeights['centra-no1-0'].value).toBe(
      'Medium',
    );
    expect(fontWeights.medium).toBe('500');
  });

  it('centra-no1-1 should equal Bold / 700', () => {
    expect(designTokens.global.fontWeights['centra-no1-1'].value).toBe('Bold');
    expect(fontWeights.bold).toBe('700');
  });

  it('centra-no1-1 should equal Regular / 400', () => {
    expect(designTokens.global.fontWeights['centra-no1-2'].value).toBe(
      'Regular',
    );
    expect(fontWeights.regular).toBe('400');
  });
});
